"use strict";


import axios from "axios";
const myKey = "49810610-79c0179868d457ece08d99a45";

let page = 3;
let per_page = 5;
let totalHits = 0;

async function getQuery(query, page) {
    try {
        const response = await getImagesByQuery(query, page);
        // console.log(response);
        let dataHits = (response.data.hits);
        console.log(response.data.hits);
        totalHits = (response.data.totalHits);
        console.log(response.data.totalHits);
    } catch (error) {
        console.log(error.message);
    };
}
 
function getImagesByQuery(query, page) {
    //console.log("query",query );
   return axios("https://pixabay.com/api/", {
        params: {
            key: myKey,
            q: query,
            per_page: per_page,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
}

getQuery("vodka");