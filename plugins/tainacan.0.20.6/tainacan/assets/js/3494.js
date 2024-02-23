"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[3494],{89108:(t,e,n)=>{n.d(e,{A0:()=>m,Hk:()=>u,Nt:()=>c,P5:()=>d,RI:()=>p,Vp:()=>f,m7:()=>h,pf:()=>g,yI:()=>_});var i=n(80129),a=n.n(i);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,r=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var s=n(5274).Z.create({baseURL:tainacan_plugin.wp_api_url});s.defaults.headers.common["X-WP-Nonce"]=tainacan_plugin.nonce;var l=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#x2F;")},u={install:function(t){t.prototype.$htmlSanitizer={sanitize:function(t){return l(t)}}}},c={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{visual:!1};t.prototype.$console={log:function(n){e.visual?t.prototype.$buefy.snackbar.open({message:htmlString(n),type:"is-secondary",position:"is-bottom-right",indefinite:!0,queue:!1}):console.log(n)},info:function(n){e.visual?t.prototype.$buefy.snackbar.open({message:l(n),type:"is-primary",position:"is-bottom-right",duration:5e3,queue:!1}):console.info(n)},error:function(n){e.visual?t.prototype.$buefy.snackbar.open({message:l(n),type:"is-danger",position:"is-bottom-right",indefinite:!0,queue:!1}):console.error(n)}}}},p={install:function(t){t.prototype.$i18n={get:function(t){var e=tainacan_plugin.i18n[t];return null!=e&&null!=e&&""!=e?e:"Invalid i18n key: "+tainacan_plugin.i18n[t]},getFrom:function(t,e){if("taxonomies"==t&&(t="taxonomies"),null==tainacan_plugin.i18n.entities_labels[t])return"Invalid i18n entity: "+t;var n=tainacan_plugin.i18n.entities_labels[t][e];return null!=n&&null!=n&&""!=n?n:"Invalid i18n key: "+e},getHelperTitle:function(t,e){if("taxonomies"==t&&(t="taxonomies"),null==tainacan_plugin.i18n.helpers_label[t])return"Invalid i18n entity: "+t;if(null==tainacan_plugin.i18n.helpers_label[t][e])return"Invalid i18n key: "+e;var n=tainacan_plugin.i18n.helpers_label[t][e].title;return null!=n&&null!=n&&""!=n?n:"Invalid i18n helper object."},getHelperMessage:function(t,e){if("taxonomies"==t&&(t="taxonomies"),null==tainacan_plugin.i18n.helpers_label[t])return"Invalid i18n entity: "+t;if(null==tainacan_plugin.i18n.helpers_label[t][e])return"Invalid i18n key: "+e;var n=tainacan_plugin.i18n.helpers_label[t][e].description;return null!=n&&null!=n&&""!=n?n:"Invalid i18n helper object. "},getWithVariables:function(t,e){var n=tainacan_plugin.i18n[t];if(null!=n&&null!=n&&""!=n){var i,a=/\%(\d\$)*s/m,o=r(e);try{for(o.s();!(i=o.n()).done;){var s=i.value;n=n.replace(a,s)}}catch(t){o.e(t)}finally{o.f()}return n}tainacan_plugin.i18n[t]}}}},d={install:function(t){t.prototype.$userPrefs={tainacanPrefs:{items_per_page:12,collections_per_page:12,taxonomies_per_page:12,activities_per_page:12,order:"DESC",order_by:"date",view_mode:void 0,admin_view_mode:"cards",fetch_only:"thumbnail,modification_date,creation_date,author_name",fetch_only_meta:"",taxonomies_order:"asc",taxonomies_order_by:"title",collections_order:"desc",collections_order_by:"date",collections_author_filter:"",map_view_mode_selected_geocoordinate_metadatum:0},init:function(){var t=this;if(null==tainacan_plugin.user_prefs||""==tainacan_plugin.user_prefs){var e={meta:{tainacan_prefs:JSON.stringify(this.tainacanPrefs)}};tainacan_plugin.nonce&&s.post("/users/me/",a().stringify(e)).then((function(e){var n=JSON.parse(e.data.meta.tainacan_prefs);t.tainacanPrefs=n})).catch((function(){return console.log("Request to /users/me failed. Maybe you're not logged in.")}))}else{var n=JSON.parse(tainacan_plugin.user_prefs);this.tainacanPrefs=n}},get:function(t){return this.tainacanPrefs[t]?this.tainacanPrefs[t]:void 0},set:function(t,e){var n=this;this.tainacanPrefs[t]=e;var i={meta:{tainacan_prefs:JSON.stringify(this.tainacanPrefs)}};return tainacan_plugin.nonce?new Promise((function(r,o){s.post("/users/me/",a().stringify(i)).then((function(i){var a=JSON.parse(i.data.meta.tainacan_prefs);n.tainacanPrefs[t]=a[t],a[t]?r(a[t]):n.tainacanPrefs[t]=e})).catch((function(){return console.log("Request to /users/me failed. Maybe you're not logged in.")}))})):new Promise((function(){})).then((function(){resolve(e)}))},clean:function(){tainacan_plugin.nonce&&s.post("/users/me/",a().stringify({meta:{tainacan_prefs:""}}))}}}},m={install:function(t){t.prototype.$routerHelper={getCollectionsPath:function(t){return"/collections/?"+a().stringify(t)},getCollectionItemsPath:function(t,e){return"/collections/"+t+"/items/?"+a().stringify(e)},getCollectionSequenceEditPath:function(t,e,n){return"/collections/"+t+"/sequence/"+e+"/"+n},getCollectionMetadataPath:function(t){return"/collections/"+t+"/metadata/"},getCollectionFiltersPath:function(t){return"/collections/"+t+"/filters/"},getCollectionActivitiesPath:function(t){return"/collections/"+t+"/activities/"},getCollectionCapabilitiesPath:function(t){return"/collections/"+t+"/capabilities/"},getItemsPath:function(t){return"/items/?"+a().stringify(t)},getTaxonomiesPath:function(){return"/taxonomies/"},getTaxonomyTermsPath:function(t,e){return"/taxonomyId/"+t+"/terms/?"+a().stringify(e)},getFiltersPath:function(t){return"/filters/?"+a().stringify(t)},getActivitiesPath:function(t){return"/activities/?"+a().stringify(t)},getCapabilitiesPath:function(){return"/capabilities"},getAvailableImportersPath:function(){return"/importers"},getProcessesPage:function(t){return t?"/activities?tab=processes&highlight="+t:"/activities?tab=processes"},getCollectionPath:function(t){return"/collections/"+t},getItemPath:function(t,e){return"/collections/"+t+"/items/"+e},getFilterPath:function(t){return"/filters/"+t},getTaxonomyPath:function(t){return"/taxonomies/"+t},getTermPath:function(t,e){return"/taxonomies/"+t+"/terms/"+e},getImporterPath:function(t,e){return"/importers/"+t+"/"+e},getCollectionActivityPath:function(t,e){return"/collections/"+t+"/activities/"+e},getNewCollectionPath:function(){return"/collections/new"},getNewMappedCollectionPath:function(t){return"/collections/new/"+t},getNewItemPath:function(t){return"/collections/"+t+"/items/new"},getNewCollectionMetadatumPath:function(t){return"/collections/"+t+"/metadata/"},getNewMetadatumPath:function(){return"/metadata"},getNewCollectionFilterPath:function(t){return"/collections/"+t+"/filters/"},getNewFilterPath:function(){return"/filters/new"},getNewTaxonomyPath:function(){return"/taxonomies/new"},getNewTermPath:function(t){return"/taxonomies/"+t+"/terms/new"},getNewItemBulkAddPath:function(t){return"/collections/"+t+"/bulk-add"},getCollectionEditPath:function(t){return"/collections/"+t+"/settings"},getItemEditPath:function(t,e){return"/collections/"+t+"/items/"+e+"/edit"},getMetadataEditPath:function(t){return"/metadata/?edit="+t},getFilterEditPath:function(t){return"/filters/?edit="+t},getCollectionMetadataEditPath:function(t,e){return"/collections/"+t+"/metadata/?edit="+e},getCollectionFilterEditPath:function(t,e){return"/collections/"+t+"/filters/?edit="+e},getTaxonomyEditPath:function(t,e){return null!=e?"/taxonomies/"+t+"/edit?recent=true":"/taxonomies/"+t+"/edit"},getTermEditPath:function(t,e){return"/taxonomies/"+t+"/edit?tab=terms"},getImporterEditionPath:function(t){return"/importers/"+t},getImporterMappingPath:function(t,e,n){return"/importers/"+t+"/"+e+"/mapping/"+n},getItemMetadataBulkAddPath:function(t,e){return"/collections/"+t+"/bulk-add/"+e},getExporterEditionPath:function(t){return"/exporters/"+t},getAvailableExportersPath:function(){return"/exporters"}}}},f={install:function(t){t.prototype.$userCaps={hasCapability:function(t){return tainacan_plugin.user_caps[t]}}}},h={install:function(t){t.prototype.$statusHelper={statuses:[{name:tainacan_plugin.i18n.status_publish,slug:"publish"},{name:tainacan_plugin.i18n.status_private,slug:"private"},{name:tainacan_plugin.i18n.status_draft,slug:"draft"},{name:tainacan_plugin.i18n.status_trash,slug:"trash"}],getIcon:function(t){switch(t){case"publish":return"tainacan-icon-public";case"private":return"tainacan-icon-private";case"draft":return"tainacan-icon-draft";case"trash":return"tainacan-icon-delete"}},hasIcon:function(t){return["publish","private","draft","trash"].includes(t)},getStatuses:function(){return this.statuses},loadStatuses:function(){var t=this;s.get("/statuses/").then((function(e){var n=e.data;t.statuses=[],null!=n.publish&&t.statuses.push(n.publish),t.statuses.concat(Object.values(n).filter((function(t){return!["publish","private","draft","trash"].includes(t.slug)}))),t.statuses.push({name:tainacan_plugin.i18n.status_private,slug:"private"}),t.statuses.push({name:tainacan_plugin.i18n.status_draft,slug:"draft"}),t.statuses.push({name:tainacan_plugin.i18n.status_trash,slug:"trash"})})).catch((function(t){console.error(t)}))}}}},g={install:function(t){t.prototype.$commentsStatusHelper={statuses:[{name:tainacan_plugin.i18n.comments_status_open,slug:"open"},{name:tainacan_plugin.i18n.comments_status_closed,slug:"closed"}],getStatuses:function(){return this.statuses}}}},_={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var n=JSON.parse(e);for(var i in n)n.hasOwnProperty(i)&&("true"===n[i]&&(n[i]=!0),"false"!==n[i]&&null!=n[i]&&n[i]||(n[i]=!1));t.prototype.$adminOptions=n}catch(e){t.prototype.$adminOptions={}}var a={itemsSingleSelectionMode:{hideTainacanHeader:!0,hidePrimaryMenu:!0,hideRepositorySubheader:!0,hideCollectionSubheader:!0,hideItemsListMultipleSelection:!0,hideItemsListBulkActionsButton:!0,hideItemsListContextMenuOpenItemOption:!0,hideItemsListContextMenuOpenItemOnNewTabOption:!0,hideItemsListContextMenuEditItemOption:!0,hideItemsListContextMenuCopyItemOption:!0,hideItemsListContextMenuDeleteItemOption:!0,hideItemsListActionAreas:!0,hideItemsListPageTitle:!0,hideItemsListCreationDropdown:!0,hideItemsListExposersButton:!0,hideItemsListStatusTabs:!0,hideItemsListFilterCreationButton:!0},itemsMultipleSelectionMode:{hideTainacanHeader:!0,hidePrimaryMenu:!0,hideRepositorySubheader:!0,hideCollectionSubheader:!0,hideItemsListMultipleSelection:!0,hideItemsListBulkActionsButton:!0,hideItemsListContextMenuOpenItemOption:!0,hideItemsListContextMenuOpenItemOnNewTabOption:!0,hideItemsListContextMenuEditItemOption:!0,hideItemsListContextMenuCopyItemOption:!0,hideItemsListContextMenuDeleteItemOption:!0,hideItemsListActionAreas:!0,hideItemsListPageTitle:!0,hideItemsListCreationDropdown:!0,hideItemsListExposersButton:!0,hideItemsListStatusTabs:!0,hideItemsListFilterCreationButton:!0},itemsSearchSelectionMode:{hideTainacanHeader:!0,hidePrimaryMenu:!0,hideRepositorySubheader:!0,hideCollectionSubheader:!0,hideItemsListMultipleSelection:!0,hideItemsListBulkActionsButton:!0,hideItemsListActionAreas:!0,hideItemsListPageTitle:!0,hideItemsListCreationDropdown:!0,hideItemsListExposersButton:!0,hideItemsListContextMenu:!0,hideItemsListSelection:!0,hideItemsListStatusTabs:!0,hideItemsListFilterCreationButton:!0},itemEditionMode:{hideTainacanHeader:!0,hidePrimaryMenu:!0,hideRepositorySubheader:!0,hideCollectionSubheader:!0},mobileAppMode:{hideTainacanHeader:!0,hidePrimaryMenu:!0,hideRepositorySubheader:!0,hideCollectionSubheader:!0,hideItemsListPageTitle:!0,hideItemEditionPageTitle:!0,hideBulkEditionPageTitle:!0,hideItemSingleCollectionName:!0,hideItemEditionCollapses:!0,hideItemEditionMetadataTypes:!0,itemEditionDocumentInsideTabs:!0,itemEditionAttachmentsInsideTabs:!0}};for(var r in a)if(t.prototype.$adminOptions[r])for(var o in console.log("Tainacan Admin loaded in "+r),a[r])t.prototype.$adminOptions[o]=a[r][o]}}},32062:(t,e,n)=>{n.d(e,{$B:()=>d,EF:()=>c,Mw:()=>m,RF:()=>u,ZP:()=>h,wp:()=>p});var i=n(5274),a=n(24167),r=n(78782),o=n(86151),s=function(t){var e=tainacan_plugin.i18n[t];return null!=e&&""!==e?e:"ERROR: Invalid i18n key!"},l=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#x2F;")},u=function(t){if(t.response&&t.response.status)if(t.response.status){var e="",n="";switch(t.response.status){case 400:case 401:case 403:case 404:case 408:case 500:case 502:case 503:case 504:case 511:e=s("error_"+t.response.status),n=s("error_"+t.response.status+"_detail")+(t.response.config&&t.response.config.url?" <br><br><strong>"+s("label_request_details")+":</strong> <code>"+t.response.config.url+"</code>":"");break;default:e=s("error_other")}a.GU.open({message:l(e),type:"is-danger",duration:5e3,actionText:""!=n?s("label_know_more"):null,onAction:function(){r.NK.open({component:o.Z,props:{title:s("label_error")+" "+t.response.status+"!",message:n,hideCancel:!0},ariaRole:"alertdialog",ariaModal:!0,customClass:"tainacan-modal",closeButtonAriaLabel:s("close")})}})}else console.log("Tainacan Error Handler: ",t.response);else t.request?console.error("Tainacan Error Handler: ",t.request):console.error("Tainacan Error Handler: ",t.message);return Promise.reject(t)},c=i.Z.create({baseURL:tainacan_plugin.tainacan_api_url});tainacan_plugin.nonce&&(c.defaults.headers.common["X-WP-Nonce"]=tainacan_plugin.nonce),tainacan_plugin.admin_request_options&&Object.keys(tainacan_plugin.admin_request_options).forEach((function(t){c.defaults.headers[t]=tainacan_plugin.admin_request_options[t]})),c.interceptors.response.use((function(t){return t}),(function(t){return u(t)}));var p=i.Z.create({baseURL:tainacan_plugin.wp_api_url});tainacan_plugin.nonce&&(p.defaults.headers.common["X-WP-Nonce"]=tainacan_plugin.nonce),p.interceptors.response.use((function(t){return t}),(function(t){return u(t)}));var d=i.Z.CancelToken,m=i.Z.isCancel,f=i.Z.all;const h={tainacan:c,wp:p,CancelToken:d,isCancel:m,all:f,tainacanErrorHandler:u}}}]);