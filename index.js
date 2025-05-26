import{a as w,S,i as b}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const x="49810610-79c0179868d457ece08d99a45",p=15;function B(s,t){return w("https://pixabay.com/api/",{params:{key:x,q:s,per_page:p,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const M=document.querySelector(".gallery"),f=document.querySelector("span"),y=document.querySelector(".load_more");function P(s){return s.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:o,comments:a,downloads:q})=>`<li class="gallery-item">
  <a class="item-link" href="${r}">
    <img class="gallery-image" src="${t}" alt="${i}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${o}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${q}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function $(){new S(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function d(){M.innerHTML=""}function g(){f.classList.add("loader")}function n(){f.classList.remove("loader")}function O(s,t){Math.ceil(t/p)>s?_():(h(),u("We're sorry, but you've reached the end of search results.","blue"))}function _(){y.classList.remove("hidden")}function h(){y.classList.add("hidden")}function u(s,t){b.show({message:s,messageColor:"white",backgroundColor:t,position:"topRight",iconUrl:"./../img/error_outline.svg",iconColor:"white"})}const L=document.querySelector("form");L.addEventListener("submit",D);const C=document.querySelector(".gallery"),E=document.querySelector(".load_more");E.addEventListener("click",H);let l,c,m=0;n();function D(s){if(s.preventDefault(),d(),l=s.target.elements.searchText.value.trim(),l.match(/^\u0020{0,}$/)){u("Sorry, Please input query!"),d();return}g(),c=1,v(l,c)}async function v(s,t){try{const r=await B(s,t);let i=r.data.hits;if(m=r.data.totalHits,!r.data.hits.length){n(),u("Sorry, there are no images matching your search query. Please try again!","red");return}n();let e=P(i);C.insertAdjacentHTML("beforeend",e),$(),O(t,m)}catch(r){console.log(r.message)}t>1&&T(),L.reset()}function H(s){++c,h(),g(),v(l,c)}function T(){let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
