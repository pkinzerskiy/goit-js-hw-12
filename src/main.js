"use strict";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, createLightBox, statusBtnLoadMore, hideLoadMoreButton, message} from './js/render-functions.js';

const form = document.querySelector("form");
form.addEventListener("submit", processingBtn);

const container = document.querySelector(".gallery");

const loadMore = document.querySelector(".load_more");
loadMore.addEventListener("click", loadMoreBtn);

let query;
let page;
let totalHits = 0;

hideLoader()

function processingBtn(event) {
    event.preventDefault();
    clearGallery();
    if (page) {
        hideLoadMoreButton();
    }
    query = event.target.elements.searchText.value.trim();
    
    if (query.match(/^\u0020{0,}$/)) {
        message('Sorry, Please input query!');
        clearGallery();
        return;
    }
    showLoader();
    page = 1;
    getQuery(query, page);
}

async function getQuery(query, page) {

        try {
            const response = await getImagesByQuery(query, page);
            let data = response.data.hits;
            totalHits = (response.data.totalHits);
            
            if (!response.data.hits.length) {    
                hideLoader();
                message('Sorry, there are no images matching your search query. Please try again!', 'red');
                return;
            }
            hideLoader();
            let markup = createGallery(data);
            container.insertAdjacentHTML('beforeend', markup);
            createLightBox();
            statusBtnLoadMore(page, totalHits);
         
        }
        catch (error) {
            console.log(error.message);
    };
    if (page > 1) {
        scroll();
    }
    form.reset();
}


function loadMoreBtn(event) {
    ++page;
    hideLoadMoreButton();
    showLoader();
    getQuery(query, page);
}

function scroll() {
    const el = document.querySelector(".gallery-item");
    let rect = el.getBoundingClientRect();
      window.scrollBy({
        top: (rect.height * 2),
        behavior: "smooth",
      });
    }
  