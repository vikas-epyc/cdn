!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.epyc=n():e.epyc=n()}(self,(function(){return(()=>{var e={70:e=>{const n=algoliasearch("7L39AV0ET6","adc4cae42406663b82e564ce3577deb2"),r=function(e){e.search()};e.exports={searchClient:n,search:function(e,t=r){return instantsearch({indexName:e,searchClient:n,searchFunction:t})},SUPPLIERS_INDICIES:"Suppliers",PRODUCTS_INDICIES:"Products",COMPANIES_INDICIES:"Companies",searchFunctionDefault:r}},40:e=>{e.exports={countriesApi:"https://countriesnow.space/api/v0.1/countries",fileUploadUrl:"https://api.bloqwork.com/file"}},309:e=>{e.exports={categorySupplier:["Building Materials","Doors & windows","Electric & Electronic","Equipment","Finishes","Furniture","HVAC","Health & Safety","Heavy Equipment","Home Appliances","Kitchen","Lighting","Other","Plumbing","Raw Materials","Security & Protection","Special construction","Speciality Equipments"],categoryCompany:["High Rise","Mid Rise","Low Rise","Minor Works","Infrastructure","Villas","Hotel / Commercial","Cast Aluminium ","Dewatering","Earthworks","Interior Fit-out","Kitchen Equipments","Landscaping","Lifts & Escalators","MEP Works","Model Making","Piling","Shoring","Sewage Treatment Plant","Signage Works","Soil Investigation","Substation","Water / Waste Water Filtration System","General"]}},123:(e,n,r)=>{const{countriesApi:t,fileUploadUrl:a}=r(40),{categorySupplier:i,categoryCompany:s}=r(309);let o=[];(async()=>{o=await axios.get(t),o=o.data.data,$("#Country").html("<option>Select a Country</option>"),o.forEach((e=>{$("#Country").append(`<option value="${e.country}">${e.country}</option>`)}))})(),$("#Country").on("change",(e=>{$("#City").html("<option>Select a City</option>");let n=o.filter((e=>e.country===$("#Country").val()))[0].cities;n.forEach((e=>{$("#City").append(`<option value="${e}">${e}</option>`)}))}));let c=document.getElementById("logo"),l=new FormData;$("#certificates_url").val("http://www.africau.edu/images/default/sample.pdf"),$("#Website-Link").val("https://example.com"),$("#Website-Link").on("change",(e=>{(function(e){return null!==e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)})||alert("Please enter a valid website url")})),$("#Company-Name").on("change",(e=>{$("#Slug-input").val(e.target.value.replace(" ","-").toLowerCase())})),c.addEventListener("change",(async function(e){if(e.target.files.length){$("#logo_btn").text("Uploading..."),l.append("uploadFile",e.target.files[0]);const n=await d(l);$("#logo_url").val(n.url),$("#logo_btn").text("Logo Uploaded")}else $("#logo_btn").text("Upload a logo")}),!1),$("#certificates").on("change",(async e=>{if(e.target.files.length){$(".add_pdf").text("Uploading...");const n=e.target.files[0];l=new FormData,l.append("uploadFile",n);const r=await d(l);$("#certificates_url").val(r.url),$(".add_pdf").text("File Uploaded");""===$("#certificate_name").val()&&$("#certificate_name").val(n.name)}else $("#certificates_url").val("http://www.africau.edu/images/default/sample.pdf"),$(".add_pdf").text("Add a file")}));const d=async e=>{try{return(await axios.post(a,e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){alert("Oops, Unexpected error while uploading your logo")}},p=["business-category","business-activity","business-area","business-locations"],u=[{main:"business-category",hidden:"businessCategory"},{main:"business-activity",hidden:"businessActivity"},{main:"business-area",hidden:"businessArea"},{main:"business-locations",hidden:"businessLocations"}];!async function(){const e=window.location.pathname.startsWith("/company-registration")?s.sort():i.sort(),n=await(async()=>{const{searchClient:e}=r(70),n=e.initIndex("Products");let{hits:t}=await n.search("",{hitsPerPage:1e3});return t=t.map((e=>e.name)).sort(),t})();let t=[],a=await axios.get("https://countriesnow.space/api/v0.1/countries");a=a.data.data,t=["United Arab Emirates","Saudi Arabia","Qatar"].sort();let o=[];a.filter((e=>"United Arab Emirates"===e.country||"Saudi Arabia"===e.country||"Qatar"===e.country)).map((e=>e.cities)).forEach((e=>{o=[...o,...e]})),[{array:e,id:"#business-category"},{array:n,id:"#business-activity"},{array:t,id:"#business-area"},{array:o,id:"#business-locations"}].forEach((e=>{e.array.forEach(((n,r)=>{const t=`<label for="${n+r}" class="item-click-listen"><input class="multi-item" type="checkbox" data="${n}" id="${n+r}" />${n}</label>`;document.querySelector(e.id).innerHTML+=t}))})),document.querySelectorAll(".multi-item").forEach((e=>{e.addEventListener("click",(()=>{!function(){let e=[];p.forEach((n=>{const r=document.querySelectorAll(`#${n} input`),t={key:n,values:[]};r.forEach((e=>{e.checked&&t.values.push(e.getAttribute("data"))})),e.push(t)})),e.forEach(((e,n)=>{$(`#${u.filter((n=>n.main===e.key))[0].hidden}`).val(JSON.stringify(e.values))}))}()}))}));const c=document.querySelectorAll(".multiselect .selectBox");for(let e=0;e<c.length;e++){const n=c[e];n.addEventListener("click",(e=>{const r=n.getAttribute("data");p.forEach((e=>{const n=document.querySelector(`#${r}`);e!==r?document.querySelector(`#${e}`).style.display="none":n.style.display="grid"===n.style.display?"none":"grid"}))}))}}()},712:e=>{e.exports={generateChips:e=>{if(!e)return"";if(e.length>3){let n=e.length-3;(e=e.slice(0,3)).push(`${n} More..`)}let n="";return e.forEach((e=>{n+=`<div class="sr-company-category-tag"><div class="sr-company-category-tag-text">${e}</div></div>`})),n},getDescription:e=>""===e?e:(e=e.trim()).length>125?e.substr(0,120)+"...":e}},340:(e,n,r)=>{r(425);const{search:t,COMPANIES_INDICIES:a}=r(70),{searchBox:i,clearFilters:s,stats:o,refinementList:c,pagination:l,menuSelect:d}=r(664),{hitCard:p}=r(286);e.exports={initCompanySearch:function(){const e=t(a,(e=>{e.setQueryParameter("hitsPerPage",9).search()}));let n=!1,r=decodeURI(window.location.search.split("=")[1]);"undefined"===r&&(r="");const u=[instantsearch.widgets.searchBox({...i("#searchbox","Search",r),queryHook(e,t){n||""===r?t(e):(t(r),n=!0)}}),instantsearch.widgets.clearRefinements(s),instantsearch.widgets.stats(o),instantsearch.widgets.refinementList(c("#buisness-categories","business-category")),instantsearch.widgets.refinementList(c("#buisness-activity","business-activity")),instantsearch.widgets.menuSelect(d("#city-list","city")),instantsearch.widgets.menuSelect(d("#country-list","country")),instantsearch.widgets.menuSelect(d("#buisness-area","business-area")),instantsearch.widgets.pagination(l)];e.addWidgets(u),e.addWidget({render:function(e){var n=[];e.results.hits.forEach((function(e){var r=$(p(e));r.click((function(){window.open(`/company/${e.slug}`,"_self")})),n.push(r)})),$("#hits").attr("class","search-result-grid"),$("#hits").html(n)}}),e.start(),setTimeout((()=>{$("#searchbox .ais-SearchBox-submit").click()}),100)}}},656:(e,n,r)=>{e.exports={initFormScriptCompany:function(){$("#table").val("company"),r(187),r(123)}}},246:(e,n,r)=>{e.exports={initFormScriptSupplier:function(){$("#table").val("supplier"),r(187),r(123)}}},250:(e,n,r)=>{const{searchClient:t,COMPANIES_INDICIES:a,SUPPLIERS_INDICIES:i,PRODUCTS_INDICIES:s}=r(70);e.exports={initHomeSearch:function(){r(327);const e=e=>{e.setQueryParameter("hitsPerPage",5).search()},n=(n,r,a)=>[{sourceId:n,getItems:()=>getAlgoliaResults({searchClient:t,searchFunction:e,queries:[{indexName:n,query:a,params:{hitsPerPage:5}}]}),templates:{header:()=>n,item:({item:e,createElement:n})=>n("div",{dangerouslySetInnerHTML:{__html:`<a href="${"product"!==r?`/${r}/${e.slug}`:`/company-search?search=${e.name}`}">\n              ${e.name}\n            </a>`}})}}];autocomplete({container:"#autocomplete",placeholder:"Search products, categories & manufacturers",openOnFocus:!0,plugins:[{getSources:({query:e})=>n(a,"company",e)},{getSources:({query:e})=>n(i,"suppliers",e)},{getSources:({query:e})=>n(s,"product",e)}]})}}},651:(e,n,r)=>{const{search:t,PRODUCTS_INDICIES:a}=r(70),{searchBox:i,pagination:s}=r(664);e.exports={initProductSearch:function(){r(701);const e=t(a);e.addWidgets([instantsearch.widgets.searchBox({...i("#searchbox","Search products"),cssClasses:{root:"company-search-form",form:["company-search-form"],input:["company-search-field","w-input"]}}),instantsearch.widgets.pagination(s)]),e.addWidget({render:function(e){var n=[];e.results.hits.forEach((function(e){var r=$(`\n         <div>${e.name}</div>`);r.click((function(){window.open(`/company-search?search=${e.name}`,"_self")})),n.push(r)})),$("#hits").html(n)}}),e.start()}}},708:(e,n,r)=>{const{search:t,SUPPLIERS_INDICIES:a}=r(70),{searchBox:i,clearFilters:s,stats:o,refinementList:c,pagination:l,menuSelect:d}=r(664),{hitCard:p}=r(286);e.exports={initSupplierSearch:function(){r(425);const e=t(a,(e=>{e.setQueryParameter("hitsPerPage",9).search()})),n=[instantsearch.widgets.searchBox(i("#searchbox","Search","")),instantsearch.widgets.clearRefinements(s),instantsearch.widgets.stats(o),instantsearch.widgets.refinementList(c("#buisness-categories","business-category")),instantsearch.widgets.menuSelect(d("#buisness-area","business-area")),instantsearch.widgets.menuSelect(d("#city-list","city")),instantsearch.widgets.menuSelect(d("#country-list","country")),instantsearch.widgets.refinementList(c("#product","business-activity")),instantsearch.widgets.pagination(l)];e.addWidgets(n),e.addWidget({render:function(e){var n=[];e.results.hits.forEach((function(e){var r=$(p(e));r.click((function(){window.open(`/suppliers/${e.slug}`,"_self")})),n.push(r)})),$("#hits").attr("class","search-result-grid"),$("#hits").html(n)}}),e.start()}}},286:(e,n,r)=>{const{getDescription:t,generateChips:a}=r(712),i=e=>e?'<div class="sr-verify-tag">\n      <div>Verified</div>\n      <img src="https://uploads-ssl.webflow.com/615a9a025c04100c2a3dddb2/61657613f22346f19f2ffc24_verified-green-check.svg" loading="lazy" alt="" class="verifies-green-check">\n  </div>':"";e.exports={isVerifiedMarkup:i,hitCard:e=>{let n="";return e["business-category"]&&e["business-category"].length&&(n=a(e["business-category"])),`\n    <div class="stroke-card search-result-card">\n      <img src="${e.logo}" loading="lazy" alt="" class="search-result-logo">\n      <div class="search-result-company">\n          <div class="sr-company-name">${e.name}</div>\n              ${i(e.verified)}\n          </div>\n          <div class="sr-company-location-box">\n              <img src="https://uploads-ssl.webflow.com/615a9a025c04100c2a3dddb2/615c3799331cb8018b598687_location-icon.svg" loading="lazy" alt="">\n              <div class="sr-company-location">${e.country}(${e.address}, ${e.city})</div>\n          </div>\n          <p class="sr-company-description">${t(e.description)}</p>\n          <div class="sr-company-category-box">${n}</div>\n    </div>`}}},664:e=>{const n={container:"#stats",templates:{text:"\n        {{^areHitsSorted}}\n          {{#hasNoResults}}No results{{/hasNoResults}}\n          {{#hasOneResult}}1 result{{/hasOneResult}}\n          {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}\n        {{/areHitsSorted}}\n      "}};e.exports={searchBox:(e="#searchbox",n="Search",r="")=>({container:e,placeholder:n,showReset:!1,showSubmit:!0,autoComplete:!0,searchAsYouType:""===r,cssClasses:{root:"company-search-form",form:["company-search-form"],input:["company-search-field","w-input"]},templates:{submit:"Search"}}),menuSelect:(e,n)=>({container:e,cssClasses:{select:["search-filter-dropdown","w-select"]},attribute:n}),clearFilters:{container:"#clear-filters",cssClasses:{button:"search-clear-filter-link"},templates:{resetLabel:"Clear filter"}},pagination:{container:"#pagination"},refinementList:(e="#buisness-categories",n="business-category")=>({searchable:!0,showMore:!0,limit:8,showMoreLimit:100,container:e,attribute:n,cssClasses:{item:["w-checkbox","search-filter-item-checkbox"],searchableInput:"search-filter-dropdown"}}),stats:n}},779:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,".selectBox {\r\n  position: relative;\r\n}\r\n\r\n.w-100 {\r\n  width: 100%;\r\n}\r\n\r\n.selectBox select {\r\n  width: 100%;\r\n}\r\n\r\n.overSelect {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.checkboxes {\r\n  border: 1px #dadada solid;\r\n  position: absolute;\r\n  background: white;\r\n  padding: 1rem;\r\n  display: none;\r\n  grid-gap: 12px;\r\n  z-index: 999;\r\n  border-radius: 8px;\r\n  min-width: 300px;\r\n  max-height: 250px;\r\n  overflow: auto;\r\n}\r\n.checkboxes label {\r\n  font-weight: normal;\r\n  font-size: initial;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.multi-item {\r\n  margin-right: 10px;\r\n}\r\n\r\n.multi-item:checked {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.83331 4.41667L4.33331 6.91667L9.74998 1.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");\r\n  color: #fff;\r\n  background-size: 8px;\r\n  background-repeat: no-repeat;\r\n  background-color: #2d5ae2;\r\n  border: 2px solid #e8eaed;\r\n  border-radius: 6px;\r\n}\r\n\r\n.multi-item {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  background-position: 50%;\r\n  background-size: 180%;\r\n  border: 2px solid #e8eaed;\r\n  border-radius: 6px;\r\n  color: #d6d6e7;\r\n  cursor: inherit;\r\n  height: 1.4rem;\r\n  margin: 0 0.5rem 0 0;\r\n  min-width: 1.4rem;\r\n}\r\n@media screen and (max-width: 850px) {\r\n  #certificate_name {\r\n    padding: 10px;\r\n  }\r\n  .certificates-area {\r\n    grid-template-columns: 1fr !important;\r\n  }\r\n}\r\n",""]);const i=a},571:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,".aa-Form,\r\n.aa-DetachedSearchButton {\r\n  background: #ffffff !important;\r\n  box-shadow: 0 15px 51px -5px rgb(12 15 15 / 10%) !important;\r\n  border-radius: 35px !important;\r\n  height: 64px !important;\r\n  border: none !important;\r\n}\r\n.autocomplete-0-input label {\r\n  margin: 0 !important;\r\n}\r\n.aa-Autocomplete {\r\n  margin: 0 auto;\r\n  width: 636px;\r\n}\r\n.aa-Panel {\r\n  background: #ffffff !important;\r\n  border: none !important;\r\n  box-shadow: 0 15px 51px -5px rgba(0, 0, 0, 0.12) !important;\r\n  border-radius: 16px !important;\r\n  width: 636px !important;\r\n  max-width: 636px !important;\r\n}\r\n.aa-Panel a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n.aa-DetachedFormContainer {\r\n  border-bottom: none !important;\r\n}\r\n.aa-InputWrapperPrefix .aa-Label {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.aa-Panel--scrollable {\r\n  display: grid;\r\n  padding: 32px 24px;\r\n  grid-template-columns: 45% 45% !important;\r\n  gap: 24px;\r\n  grid-gap: 24px;\r\n  width: 636px !important;\r\n  max-width: 636px !important;\r\n}\r\n\r\n.aa-SourceHeader {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  line-height: 138%;\r\n  letter-spacing: -0.015em;\r\n}\r\n.aa-Item div,\r\n.aa-Item a,\r\n.aa-Item {\r\n  width: 100% !important;\r\n}\r\n.aa-Item:hover {\r\n  background: none;\r\n  text-decoration: underline;\r\n}\r\n.aa-SubmitIcon {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.aa-Source {\r\n  width: 50% !important;\r\n  max-width: 50% !important;\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n  .aa-Autocomplete {\r\n    margin: 0 auto;\r\n    width: 95%;\r\n  }\r\n\r\n  .aa-Panel {\r\n    border: none;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .aa-Panel--scrollable {\r\n    grid-template-columns: 1fr !important;\r\n    width: 100vw !important;\r\n    grid-template-rows: max-content !important;\r\n  }\r\n\r\n  .aa-Item div,\r\n  .aa-Item a,\r\n  .aa-Item {\r\n    max-width: 100vw !important;\r\n  }\r\n}\r\n",""]);const i=a},453:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,".ais-RefinementList-list,\r\nul,\r\nol {\r\n  list-style-type: none !important;\r\n  padding: 0 !important;\r\n}\r\n#hits {\r\n  -ms-grid-row: span 1;\r\n  grid-row-start: span 1;\r\n  -ms-grid-row-span: 1;\r\n  grid-row-end: span 1;\r\n  -ms-grid-column: span 3;\r\n  margin-bottom: 3rem;\r\n  grid-column-start: span 3;\r\n  -ms-grid-column-span: 3;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  justify-content: space-between;\r\n  display: grid;\r\n  grid-column-end: span 3;\r\n}\r\n.ais-RefinementList-item {\r\n  padding: 8px 12px 0px 8px !important;\r\n}\r\n.search-filter-item-checkbox {\r\n  margin-bottom: 0px;\r\n}\r\n.ais-SearchBox-submit,\r\n.ais-SearchBox-reset {\r\n  display: none;\r\n}\r\n.ais-RefinementList-searchBox .ais-SearchBox-input {\r\n  padding-left: 16px;\r\n  outline: none;\r\n  margin-bottom: 12px;\r\n}\r\n.ais-RefinementList-showMore {\r\n  width: 100%;\r\n  padding: 12px 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n#searchbox .ais-SearchBox-submit {\r\n  display: block;\r\n  position: absolute;\r\n  top: 14px;\r\n  padding: 8px 27px;\r\n  color: white;\r\n  background: #2d5ae2;\r\n  border-radius: 29px;\r\n  right: 14px;\r\n}\r\n\r\n.stroke-card {\r\n  cursor: pointer;\r\n}\r\n\r\n.ais-Pagination-list {\r\n  margin: 0 auto;\r\n  width: max-content;\r\n  display: grid;\r\n  grid-template-columns: repeat(20, max-content);\r\n}\r\n.ais-Pagination-item {\r\n  background: #ffffff;\r\n  border: 1px solid #cbd5e1;\r\n  box-sizing: border-box;\r\n  padding: 8px 12px;\r\n  color: #0c0f0f;\r\n  font-size: 14px;\r\n}\r\n.ais-Pagination-item--selected {\r\n  background: #2d5ae2;\r\n  color: white;\r\n}\r\n.ais-Pagination-item--selected .ais-Pagination-link {\r\n  color: white;\r\n}\r\n#hits div {\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  line-height: 148%;\r\n  color: #828785;\r\n  cursor: pointer;\r\n  margin: 8px 0px;\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n  #hits {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n",""]);const i=a},592:(e,n,r)=>{"use strict";r.d(n,{Z:()=>i});var t=r(645),a=r.n(t)()((function(e){return e[1]}));a.push([e.id,".ais-RefinementList-list,\r\nul,\r\nol {\r\n  list-style-type: none !important;\r\n  padding: 0 !important;\r\n}\r\n#hits {\r\n  -ms-grid-row: span 1;\r\n  grid-row-start: span 1;\r\n  -ms-grid-row-span: 1;\r\n  grid-row-end: span 1;\r\n  -ms-grid-column: span 3;\r\n  grid-column-start: span 3;\r\n  -ms-grid-column-span: 3;\r\n  grid-column-end: span 3;\r\n}\r\n.ais-RefinementList-item {\r\n  margin-bottom: 4px;\r\n  padding: 8px 12px 8px 8px !important;\r\n}\r\n.ais-SearchBox-submit,\r\n.ais-SearchBox-reset {\r\n  display: none;\r\n}\r\n.ais-RefinementList-searchBox .ais-SearchBox-input {\r\n  padding-left: 16px;\r\n  outline: none;\r\n  margin-bottom: 12px;\r\n}\r\n.ais-RefinementList-showMore {\r\n  width: 100%;\r\n  padding: 12px 8px;\r\n  background: #f6f8fe;\r\n  color: #2d5ae2;\r\n  border-radius: 63px;\r\n  border-radius: 8px;\r\n}\r\n\r\n#searchbox .ais-SearchBox-submit {\r\n  display: block;\r\n  position: absolute;\r\n  top: 14px;\r\n  padding: 8px 27px;\r\n  color: white;\r\n  background: #2d5ae2;\r\n  border-radius: 29px;\r\n  right: 14px;\r\n}\r\n\r\n.ais-GeoSearch-input:checked,\r\n.ais-RefinementList-item--selected .ais-RefinementList-checkbox {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.83331 4.41667L4.33331 6.91667L9.74998 1.5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");\r\n  color: #fff;\r\n  background-size: 8px;\r\n  background-repeat: no-repeat;\r\n  background-color: #2d5ae2;\r\n  border: 2px solid #e8eaed;\r\n  border-radius: 6px;\r\n}\r\n\r\n.ais-GeoSearch-input,\r\n.ais-RefinementList-checkbox {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-color: #fff;\r\n  background-position: 50%;\r\n  background-size: 180%;\r\n  border: 2px solid #e8eaed;\r\n  border-radius: 6px;\r\n  color: #d6d6e7;\r\n  cursor: inherit;\r\n  height: 1.4rem;\r\n  margin: 0 0.5rem 0 0;\r\n  min-width: 1.4rem;\r\n}\r\n.ais-RefinementList-label {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.ais-RefinementList-labelText {\r\n  font-weight: 500 !important;\r\n}\r\n.ais-RefinementList-label .ais-RefinementList-count {\r\n  display: none;\r\n}\r\n.stroke-card {\r\n  cursor: pointer;\r\n}\r\n\r\n.ais-Pagination-list {\r\n  margin: 0 auto;\r\n  width: max-content;\r\n  display: grid;\r\n  grid-template-columns: repeat(20, max-content);\r\n}\r\n.ais-Pagination-item {\r\n  background: #ffffff;\r\n  border: 1px solid #cbd5e1;\r\n  box-sizing: border-box;\r\n  padding: 8px 12px;\r\n  color: #0c0f0f;\r\n  font-size: 14px;\r\n}\r\n.ais-Pagination-item--selected {\r\n  background: #2d5ae2;\r\n  color: white;\r\n}\r\n.ais-Pagination-item--selected .ais-Pagination-link {\r\n  color: white;\r\n}\r\n\r\n.ais-RefinementList-item--selected {\r\n  background: #effdfa;\r\n  border-radius: 8px;\r\n}\r\n.ais-RefinementList-label {\r\n  margin-bottom: 0px;\r\n}\r\n.ais-ClearRefinements-button,\r\n.ais-ClearRefinements-button:disabled {\r\n  background: none !important;\r\n}\r\n.ais-ClearRefinements-button:hover {\r\n  text-decoration: underline;\r\n}\r\n.ais-ClearRefinements-button:disabled:hover {\r\n  text-decoration: none;\r\n}\r\n#pagination {\r\n  margin-top: 2rem;\r\n}\r\n",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},187:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>b});var t=r(379),a=r.n(t),i=r(795),s=r.n(i),o=r(569),c=r.n(o),l=r(565),d=r.n(l),p=r(216),u=r.n(p),m=r(589),h=r.n(m),g=r(779),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u();a()(g.Z,f);const b=g.Z&&g.Z.locals?g.Z.locals:void 0},327:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>b});var t=r(379),a=r.n(t),i=r(795),s=r.n(i),o=r(569),c=r.n(o),l=r(565),d=r.n(l),p=r(216),u=r.n(p),m=r(589),h=r.n(m),g=r(571),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u();a()(g.Z,f);const b=g.Z&&g.Z.locals?g.Z.locals:void 0},701:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>b});var t=r(379),a=r.n(t),i=r(795),s=r.n(i),o=r(569),c=r.n(o),l=r(565),d=r.n(l),p=r(216),u=r.n(p),m=r(589),h=r.n(m),g=r(453),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u();a()(g.Z,f);const b=g.Z&&g.Z.locals?g.Z.locals:void 0},425:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>b});var t=r(379),a=r.n(t),i=r(795),s=r.n(i),o=r(569),c=r.n(o),l=r(565),d=r.n(l),p=r(216),u=r.n(p),m=r(589),h=r.n(m),g=r(592),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u();a()(g.Z,f);const b=g.Z&&g.Z.locals?g.Z.locals:void 0},379:e=>{"use strict";var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},s=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=r(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,t);t.byIndex=o,n.splice(o,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,n){var r=n.domAPI(n);r.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var i=t(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var o=r(i[s]);n[o].references--}for(var c=t(e,a),l=0;l<i.length;l++){var d=r(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{"use strict";var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{"use strict";e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};return(()=>{const{initCompanySearch:e}=r(340),{initProductSearch:n}=r(651),{initSupplierSearch:t}=r(708),{initFormScriptCompany:a}=r(656),{initFormScriptSupplier:i}=r(246),{initHomeSearch:s}=r(250);document.addEventListener("DOMContentLoaded",(function(r){window.epycLoaded||function(){const{pathname:r}=window.location;r.startsWith("/company-registration")?a():r.startsWith("/supplier-registration")?i():r.startsWith("/company-search")?e():r.startsWith("/supplier-search")?t():r.startsWith("/product-search")?n():"/"===r&&s(),window.hasOwnProperty("epycLoaded")&&(window.epycLoaded=!0)}()}))})(),{}})()}));