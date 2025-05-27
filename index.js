import{a as S,S as b,i as x}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const B="49810610-79c0179868d457ece08d99a45";async function M({query:s,page:t,PER_PAGE:r}){return console.log("query",r),await S("https://pixabay.com/api/",{params:{key:B,q:s,per_page:r,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const p=document.querySelector(".gallery"),f=document.querySelector("span"),y=document.querySelector(".load_more");function $(s){let t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:q,downloads:w})=>`<li class="gallery-item">
  <a class="item-link" href="${i}">
    <img class="gallery-image" src="${r}" alt="${e}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${o}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${q}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${w}</p>
      </li>
    </ul></a
  >
</li>`).join("");p.insertAdjacentHTML("beforeend",t)}function O(){new b(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){p.innerHTML=""}function g(){f.classList.add("loader")}function n(){f.classList.remove("loader")}function P({page:s,totalHits:t,PER_PAGE:r}){Math.ceil(t/r)>s?C():(u(),d("We're sorry, but you've reached the end of search results.","blue"))}function C(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function d(s,t){x.show({message:s,messageColor:"white",backgroundColor:t,position:"topRight",iconUrl:"./error_outline.svg",iconColor:"white"})}const h=document.querySelector("form");h.addEventListener("submit",H);document.querySelector(".gallery");const D=document.querySelector(".load_more");D.addEventListener("click",T);let c,l;const L=15;n();function H(s){if(s.preventDefault(),m(),l&&u(),c=s.target.elements.searchText.value.trim(),c.match(/^\u0020{0,}$/)){d("Sorry, Please input query!"),m();return}g(),l=1,v({query:c,page:l,PER_PAGE:L}),O()}async function v({query:s,page:t,PER_PAGE:r}){try{const i=await M({query:s,page:t,PER_PAGE:r});let e=i.data.hits,o=i.data.totalHits;if(!i.data.hits.length){n(),d("Sorry, there are no images matching your search query. Please try again!","red");return}n();let a=$(e);P({page:t,totalHits:o,PER_PAGE:r})}catch(i){console.log(i.message)}t>1&&_(),h.reset()}function T(s){++l,u(),g(),v({query:c,page:l,PER_PAGE:L})}function _(){let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
