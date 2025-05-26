import{a as w,S,i as b}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const x="49810610-79c0179868d457ece08d99a45",p=15;function B(s,t){return w("https://pixabay.com/api/",{params:{key:x,q:s,per_page:p,page:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const M=document.querySelector(".gallery"),y=document.querySelector("span"),g=document.querySelector(".load_more");function P(s){return s.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:o,comments:a,downloads:q})=>`<li class="gallery-item">
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
</li>`).join("")}function $(){new S(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){M.innerHTML=""}function h(){y.classList.add("loader")}function n(){y.classList.remove("loader")}function O(s,t){Math.ceil(t/p)>s?_():(u(),d("We're sorry, but you've reached the end of search results.","blue"))}function _(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}function d(s,t){b.show({message:s,messageColor:"white",backgroundColor:t,position:"topRight",iconUrl:"./error_outline.svg",iconColor:"white"})}const L=document.querySelector("form");L.addEventListener("submit",D);const C=document.querySelector(".gallery"),E=document.querySelector(".load_more");E.addEventListener("click",H);let c,l,f=0;n();function D(s){if(s.preventDefault(),m(),l&&u(),c=s.target.elements.searchText.value.trim(),c.match(/^\u0020{0,}$/)){d("Sorry, Please input query!"),m();return}h(),l=1,v(c,l)}async function v(s,t){try{const r=await B(s,t);let i=r.data.hits;if(f=r.data.totalHits,!r.data.hits.length){n(),d("Sorry, there are no images matching your search query. Please try again!","red");return}n();let e=P(i);C.insertAdjacentHTML("beforeend",e),$(),O(t,f)}catch(r){console.log(r.message)}t>1&&T(),L.reset()}function H(s){++l,u(),h(),v(c,l)}function T(){let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
