(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[3927],{50920:(e,t,a)=>{"use strict";a.d(t,{_y:()=>u,df:()=>m,j9:()=>d});var n=a(5274),r=a(80129),i=a.n(r),o=a(30381),s=a.n(o);function c(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var u={data:function(){return{axiosWPAjax:{}}},created:function(){this.axiosWPAjax=n.Z.create({baseURL:tainacan_plugin.wp_ajax_url})},methods:{getSamplePermalink:function(e,t,a){return this.axiosWPAjax.post("",i().stringify({action:"tainacan-sample-permalink",post_id:e,new_title:t,new_slug:a,nonce:tainacan_plugin.nonce}))}}},m={created:function(){var e=navigator.language;s().locale(e);var t=s().localeData();this.dateFormat=t.longDateFormat("L")?t.longDateFormat("L"):"pt_BR"==t._abbr?"DD/MM/YYYY":"YYYY-MM-DD",this.dateMask=this.dateFormat.replace(/[\w]/g,"#")},data:function(){return{dateFormat:"",dateMask:""}},methods:{parseDateToNavigatorLanguage:function(e){return e=new Date(e.replace(/-/g,"/")),s()(e,s().ISO_8601).format(this.dateFormat)}}},d={data:function(){return{formHooks:JSON.parse(JSON.stringify(tainacan_plugin.form_hooks)),formHookEventName:""}},computed:{hasBeginLeftForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["begin-left"]&&this.formHooks[this.entityName]["begin-left"].length>0},hasBeginRightForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["begin-right"]&&this.formHooks[this.entityName]["begin-right"].length>0},hasEndLeftForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["end-left"]&&this.formHooks[this.entityName]["end-left"].length>0},hasEndRightForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["end-right"]&&this.formHooks[this.entityName]["end-right"].length>0},getBeginLeftForm:function(){var e=this;return this.formHooks[this.entityName]["begin-left"].map((function(t){return e.checkFormConditionals(t)})).join("")},getBeginRightForm:function(){var e=this;return this.formHooks[this.entityName]["begin-right"].map((function(t){return e.checkFormConditionals(t)})).join("")},getEndLeftForm:function(){var e=this;return this.formHooks[this.entityName]["end-left"].map((function(t){return e.checkFormConditionals(t)})).join("")},getEndRightForm:function(){var e=this;return this.formHooks[this.entityName]["end-right"].map((function(t){return e.checkFormConditionals(t)})).join("")}},created:function(){this.formHookEventName="tainacan-"+this.entityName+"-hook-reload",this.formHookEvent=new Event(this.formHookEventName)},updated:function(){this.formHooks[this.entityName]&&document.dispatchEvent(this.formHookEvent)},methods:{fillExtraFormData:function(e){for(var t=0,a=["begin-left","begin-right","end-left","end-right"];t<a.length;t++){var n=a[t];if(this.formHooks[this.entityName]&&this.formHooks[this.entityName][n]&&null!=this.formHooks[this.entityName][n]){var r=document.getElementById("form-"+this.entityName+"-"+n);if(r){var i,o=c(r.elements);try{for(o.s();!(i=o.n()).done;){var s=i.value;"checkbox"==s.type||"select"==s.type&&null!=s.multiple&&1==s.multiple?s.checked&&null!=s.name&&""!=s.name&&(Array.isArray(e[s.name])||(e[s.name]=[]),e[s.name].push(s.value)):"radio"==s.type?s.checked&&null!=s.name&&""!=s.name&&(e[s.name]=s.value):e[s.name]=s.value}}catch(e){o.e(e)}finally{o.f()}}}}},updateExtraFormData:function(e){for(var t=0,a=["begin-left","begin-right","end-left","end-right"];t<a.length;t++){var n=a[t];if(this.formHooks[this.entityName]&&this.formHooks[this.entityName][n]&&null!=this.formHooks[this.entityName][n]){var r=document.getElementById("form-"+this.entityName+"-"+n);if(r){var i,o=c(r.elements);try{var s=function(){for(var t=i.value,a=0,n=Object.keys(e);a<n.length;a++){var r=n[a];if(t.name==r)if(Array.isArray(e[r])){var o=e[r].find((function(e){return e==t.value}));t.checked=null!=o}else null!=e[r]&&null!=e[r]&&""!=e[r]&&("radio"==t.type?t.checked=e[r]==t.value:t.value=e[r])}};for(o.s();!(i=o.n()).done;)s()}catch(e){o.e(e)}finally{o.f()}}}}},checkFormConditionals:function(e){return e.form?e.conditional&&e.conditional.attribute&&e.conditional.value?this.form&&this.form[e.conditional.attribute]===e.conditional.value?e.form:"":e.form:""}}}},32240:(e,t,a)=>{"use strict";a.d(t,{R3:()=>n,zz:()=>r});var n={};n.install=function(e){e.prototype.$thumbHelper={imagesFolderPath:function(){return"undefined"!=typeof tainacan_plugin?tainacan_plugin.base_url+"/assets/images/":tainacan_blocks?tainacan_blocks.base_url+"/assets/images/":"/assets/images/"},getSrc:function(e,t,a){var n=this.getWordpressFallbackSize(t);return e&&e[t]?e[t][0]:e&&e[n]?e[n][0]:this.getEmptyThumbnailPlaceholder(a,t)},getSrcSet:function(e,t,a){return this.getSrc(e,t,a)+" 1x, "+this.getSrc(e,this.getRelativeRetinaSize(t),a)+" 2x"},getWidth:function(e,t,a){var n=this.getWordpressFallbackSize(t);return e&&e[t]?e[t][1]:e&&e[n]?e[n][1]:a||120},getHeight:function(e,t,a){var n=this.getWordpressFallbackSize(t);return e&&e[t]?e[t][2]:e&&e[n]?e[n][2]:a||120},getBlurhashString:function(e,t){var a=this.getWordpressFallbackSize(t);return e&&e[t]?e[t][4]:e&&e[a]?e[a][4]:"V4P?:h00Rj~qM{of%MRjWBRjD%%MRjayofj[%M-;RjRj"},getEmptyThumbnailPlaceholder:function(e,t){var a="";switch(e){case"image/png":case"image/jpeg":case"image/gif":case"image/bmp":case"image/webp":case"image/svg+xml":a="placeholder_image";break;case"audio/midi":case"audio/mpeg":case"audio/mp3":case"audio/webm":case"audio/ogg":case"audio/wav":a="placeholder_audio";break;case"text":case"text/plain":case"text/html":case"text/css":case"text/javascript":case"text/csv":a="placeholder_text";break;case"video/webm":case"video/ogg":case"video/mpeg":case"video/mp4":a="placeholder_video";break;case"url":a="placeholder_url";break;case"application/pdf":a="placeholder_pdf";break;default:a="placeholder_square"}return wp.hooks.applyFilters("tainacan_get_the_mime_type_icon",this.getEmptyThumbnailPlaceholderBySize(a,t),e,t)},getEmptyThumbnailPlaceholderBySize:function(e,t){switch(t){case"tainacan-large-full":case"tainacan-medium-full":case"tainacan-medium":case"medium_large":case"medium":return this.imagesFolderPath()+e+"_medium.png";case"tainacan-small":case"thumbnail":return this.imagesFolderPath()+e+"_small.png";default:return this.imagesFolderPath()+e+".png"}},getWordpressFallbackSize:function(e){switch(e){case"tainacan-large-full":case"tainacan-medium-full":return"medium_large";case"tainacan-medium":return"medium";default:return"thumbnail"}},getRelativeRetinaSize:function(e){switch(e){case"tainacan-medium-full":case"tainacan-medium":return"large";case"tainacan-small":return"tainacan-medium";default:return"full"}}}};var r={};r.install=function(e){e.prototype.$orderByHelper={getOrderByForMetadatum:function(e){if(void 0!==e.id)return!e.metadata_type_object||"float"!=e.metadata_type_object.primitive_type&&"int"!=e.metadata_type_object.primitive_type?e.metadata_type_object&&"date"==e.metadata_type_object.primitive_type?{orderby:"meta_value",metakey:e.id,metatype:"DATETIME"}:e.metadata_type_object&&e.metadata_type_object.core?e.metadata_type_object.related_mapped_prop:{orderby:"meta_value",metakey:e.id}:{metakey:e.id,orderby:"meta_value_num"};if(e.slug)switch(e.slug){case"modification_date":return"modified";case"creation_date":return"date";case"author_name":case"created_by":return"author_name";case"title":return"title";case"description":return"description";default:return e}else switch(e){case"modification_date":return{orderby:"modified"};case"creation_date":return{orderby:"date"};case"author_name":case"created_by":return{orderby:"author_name"};case"title":return{orderby:"title"};case"description":return{orderby:"description"};default:return e}},getOrderByMetadatumName:function(e,t){if(e.metakey){var a=t.findIndex((function(t){return t.id==e.metakey}));return a>=0?t[a].name:""}if(e.slug)switch(e.slug){case"modification_date":case"modified":return"label_modification_date";case"creation_date":case"date":return"label_creation_date";case"author_name":case"created_by":return"label_created_by";case"title":return"label_title";case"description":return"label_description";default:return e.slug}else switch(e.orderby){case"modification_date":case"modified":return"label_modification_date";case"creation_date":case"date":return"label_creation_date";case"author_name":case"created_by":return"label_created_by";case"title":return"label_title";case"description":return"label_description";default:return e.orderby}}}}},46967:(e,t,a)=>{var n={"./ca":2468,"./ca.js":2468,"./el":50837,"./el.js":50837,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-nz":76319,"./en-nz.js":76319,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./sk":64249,"./sk.js":64249,"./sq":51104,"./sq.js":51104,"./sv":98760,"./sv.js":98760,"./uk":67691,"./uk.js":67691};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=46967},87926:e=>{"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27%3E%3Cpath style=%27fill:rgb%2869,70,71%29%27 d=%27M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z%27%3E%3C/path%3E%3C/svg%3E"}}]);