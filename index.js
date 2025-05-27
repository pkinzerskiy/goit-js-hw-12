import{a as S,S as b,i as M}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const x="49810610-79c0179868d457ece08d99a45";async function B({query:s,page:t,PER_PAGE:i}){return(await S("https://pixabay.com/api/",{params:{key:x,q:s,per_page:i,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),f=document.querySelector("span"),y=document.querySelector(".load_more"),$=new b(".gallery li a",{captionsData:"alt",captionDelay:250});function P(s){let t=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:o,views:a,comments:w,downloads:q})=>`<li class="gallery-item">
  <a class="item-link" href="${r}">
    <img class="gallery-image" src="${i}" alt="${e}" />
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
        <p class="statistic-value">${w}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${q}</p>
      </li>
    </ul></a
  >
</li>`).join("");p.insertAdjacentHTML("beforeend",t),$.refresh()}function m(){p.innerHTML=""}function g(){f.classList.add("loader")}function c(){f.classList.remove("loader")}function O({page:s,totalHits:t,PER_PAGE:i}){Math.ceil(t/i)>s?C():(d(),u("We're sorry, but you've reached the end of search results.","green"))}function C(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}function u(s,t){M.show({message:s,messageColor:"white",backgroundColor:t,position:"topRight",iconUrl:"./error_outline.svg",iconColor:"white"})}const h=document.querySelector("form");h.addEventListener("submit",D);document.querySelector(".gallery");const _=document.querySelector(".load_more");_.addEventListener("click",H);let n,l;const L=15;c();function D(s){if(s.preventDefault(),m(),l&&d(),n=s.target.elements.searchText.value.trim(),n.match(/^\u0020{0,}$/)){u("Sorry, Please input query!"),m();return}g(),l=1,v({query:n,page:l,PER_PAGE:L})}async function v({query:s,page:t,PER_PAGE:i}){try{const r=await B({query:s,page:t,PER_PAGE:i});let e=r.hits,o=r.totalHits;if(!e.length){c(),u("Sorry, there are no images matching your search query. Please try again!","red");return}c(),P(e),O({page:t,totalHits:o,PER_PAGE:i})}catch(r){c(),u(r.message,"red")}t>1&&T(),h.reset()}function H(s){++l,d(),g(),v({query:n,page:l,PER_PAGE:L})}function T(){let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
