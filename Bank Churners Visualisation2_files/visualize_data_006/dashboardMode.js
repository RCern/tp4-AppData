/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements.
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=3)})([function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/dashboard/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_dashboardMode_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);var _node_modules_val_loader_dist_cjs_js_key_dashboardMode_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_dashboardMode_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/dashboardMode/public",__webpack_require__,5)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["dashboardMode"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return plugin_plugin}));var external_kbnSharedDeps_Lodash_=__webpack_require__(1);var public_=__webpack_require__(0);var core_public_=__webpack_require__(2);function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function defaultUrl(defaultAppId){var isDashboardId=defaultAppId.startsWith(dashboardAppIdPrefix());return isDashboardId?"/".concat(defaultAppId):public_["DashboardConstants"].LANDING_PAGE_PATH}function dashboardAppIdPrefix(){return Object(external_kbnSharedDeps_Lodash_["trimStart"])(Object(public_["createDashboardEditUrl"])(""),"/")}function migratePath(currentHash,kibanaLegacy,urlForwarding){if(currentHash===""||currentHash==="#"||currentHash==="#/"){return"#".concat(defaultUrl(kibanaLegacy.config.defaultAppId||""))}if(!currentHash.startsWith("#/dashboard")){return currentHash}var forwards=urlForwarding.getForwards();if(currentHash.startsWith("#/dashboards")){var _ref=forwards.find((function(_ref2){var legacyAppId=_ref2.legacyAppId;return legacyAppId==="dashboards"})),migrateListingPath=_ref.rewritePath;return migrateListingPath(currentHash)}var _ref3=forwards.find((function(_ref4){var legacyAppId=_ref4.legacyAppId;return legacyAppId==="dashboard"})),migrateDetailPath=_ref3.rewritePath;return migrateDetailPath(currentHash)}var plugin_plugin=function plugin(){return{setup(core){core.application.register({id:"dashboard_mode",title:"Dashboard mode",navLinkStatus:core_public_["AppNavLinkStatus"].hidden,mount:function(){var _mount=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _yield$core$getStartS,_yield$core$getStartS2,coreStart,_yield$core$getStartS3,kibanaLegacy,urlForwarding;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return core.getStartServices();case 2:_yield$core$getStartS=_context.sent;_yield$core$getStartS2=_slicedToArray(_yield$core$getStartS,2);coreStart=_yield$core$getStartS2[0];_yield$core$getStartS3=_yield$core$getStartS2[1];kibanaLegacy=_yield$core$getStartS3.kibanaLegacy;urlForwarding=_yield$core$getStartS3.urlForwarding;kibanaLegacy.dashboardConfig.turnHideWriteControlsOn();coreStart.chrome.navLinks.showOnly("dashboards");setTimeout((function(){coreStart.application.navigateToApp("dashboards",{path:migratePath(window.location.hash,kibanaLegacy,urlForwarding)})}),0);return _context.abrupt("return",(function(){}));case 12:case"end":return _context.stop()}}}),_callee)})));function mount(){return _mount.apply(this,arguments)}return mount}()})},start(){}}}}]);