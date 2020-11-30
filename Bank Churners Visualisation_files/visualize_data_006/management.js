(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={0:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+"management.chunk."+chunkId+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["management_bundle_jsonpfunction"]=window["management_bundle_jsonpfunction"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=6)})([function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MANAGEMENT_BREADCRUMB}));__webpack_require__.d(__webpack_exports__,"b",(function(){return ManagementApp}));__webpack_require__.d(__webpack_exports__,"d",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"c",(function(){return management_section_ManagementSection}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);var MANAGEMENT_BREADCRUMB={text:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.breadcrumb",{defaultMessage:"Stack Management"}),href:"/"};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var ManagementItem=function(){function ManagementItem(_ref){var id=_ref.id,title=_ref.title,tip=_ref.tip,_ref$order=_ref.order,order=_ref$order===void 0?100:_ref$order,euiIconType=_ref.euiIconType,icon=_ref.icon;_classCallCheck(this,ManagementItem);_defineProperty(this,"id","");_defineProperty(this,"title",void 0);_defineProperty(this,"tip",void 0);_defineProperty(this,"order",void 0);_defineProperty(this,"euiIconType",void 0);_defineProperty(this,"icon",void 0);_defineProperty(this,"enabled",true);this.id=id;this.title=title;this.tip=tip;this.order=order;this.euiIconType=euiIconType;this.icon=icon}_createClass(ManagementItem,[{key:"disable",value:function disable(){this.enabled=false}},{key:"enable",value:function enable(){this.enabled=true}}]);return ManagementItem}();function management_app_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function management_app_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var ManagementApp=function(_ManagementItem){_inherits(ManagementApp,_ManagementItem);var _super=_createSuper(ManagementApp);function ManagementApp(args){var _this;management_app_classCallCheck(this,ManagementApp);_this=_super.call(this,args);management_app_defineProperty(_assertThisInitialized(_this),"mount",void 0);management_app_defineProperty(_assertThisInitialized(_this),"basePath",void 0);_this.mount=args.mount;_this.basePath=args.basePath;return _this}return ManagementApp}(ManagementItem);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){management_section_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function management_section_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function management_section_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function management_section_createClass(Constructor,protoProps,staticProps){if(protoProps)management_section_defineProperties(Constructor.prototype,protoProps);if(staticProps)management_section_defineProperties(Constructor,staticProps);return Constructor}function management_section_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)management_section_setPrototypeOf(subClass,superClass)}function management_section_setPrototypeOf(o,p){management_section_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return management_section_setPrototypeOf(o,p)}function management_section_createSuper(Derived){var hasNativeReflectConstruct=management_section_isNativeReflectConstruct();return function _createSuperInternal(){var Super=management_section_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=management_section_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return management_section_possibleConstructorReturn(this,result)}}function management_section_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return management_section_assertThisInitialized(self)}function management_section_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function management_section_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function management_section_getPrototypeOf(o){management_section_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return management_section_getPrototypeOf(o)}function management_section_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var management_section_ManagementSection=function(_ManagementItem){management_section_inherits(ManagementSection,_ManagementItem);var _super=management_section_createSuper(ManagementSection);function ManagementSection(args){var _this;management_section_classCallCheck(this,ManagementSection);_this=_super.call(this,args);management_section_defineProperty(management_section_assertThisInitialized(_this),"apps",[]);return _this}management_section_createClass(ManagementSection,[{key:"registerApp",value:function registerApp(args){if(this.getApp(args.id)){throw new Error("Management app already registered - id: ".concat(args.id,", title: ").concat(args.title))}var app=new ManagementApp(_objectSpread(_objectSpread({},args),{},{basePath:"/".concat(this.id,"/").concat(args.id)}));this.apps.push(app);return app}},{key:"getApp",value:function getApp(id){return this.apps.find((function(app){return app.id===id}))}},{key:"getAppsEnabled",value:function getAppsEnabled(){return this.apps.filter((function(app){return app.enabled}))}}]);return ManagementSection}(ManagementItem)},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("entry/core/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/home/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7);var _node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_management_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/management/public",__webpack_require__,8)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["management"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));__webpack_require__.d(__webpack_exports__,"RegisterManagementAppArgs",(function(){return utils["d"]}));__webpack_require__.d(__webpack_exports__,"ManagementSection",(function(){return utils["c"]}));__webpack_require__.d(__webpack_exports__,"ManagementApp",(function(){return utils["b"]}));__webpack_require__.d(__webpack_exports__,"ManagementAppMountParams",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"ManagementSetup",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"ManagementStart",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"DefinedSections",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"MANAGEMENT_APP_ID",(function(){return MANAGEMENT_APP_ID}));var external_kbnSharedDeps_KbnI18n_=__webpack_require__(0);var external_kbnSharedDeps_Rxjs_=__webpack_require__(3);var public_=__webpack_require__(4);var core_public_=__webpack_require__(2);var MANAGEMENT_APP_ID="management";var utils=__webpack_require__(1);var ManagementSectionId;(function(ManagementSectionId){ManagementSectionId["Ingest"]="ingest";ManagementSectionId["Data"]="data";ManagementSectionId["InsightsAndAlerting"]="insightsAndAlerting";ManagementSectionId["Security"]="security";ManagementSectionId["Kibana"]="kibana";ManagementSectionId["Stack"]="stack"})(ManagementSectionId||(ManagementSectionId={}));var ingestTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.ingestTitle",{defaultMessage:"Ingest"});var ingestTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.ingestTip",{defaultMessage:"Manage how to transform data and load it into the cluster"});var dataTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.dataTitle",{defaultMessage:"Data"});var dataTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.dataTip",{defaultMessage:"Manage your cluster data and backups"});var insightsAndAlertingTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.insightsAndAlertingTitle",{defaultMessage:"Alerts and Insights"});var insightsAndAlertingTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.insightsAndAlertingTip",{defaultMessage:"Manage how to detect changes in your data"});var sectionTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.section.title",{defaultMessage:"Security"});var sectionTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.section.tip",{defaultMessage:"Control access to features and data"});var kibanaTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.kibanaTitle",{defaultMessage:"Kibana"});var kibanaTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.kibanaTip",{defaultMessage:"Customize Kibana and manage saved objects"});var stackTitle=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.stackTitle",{defaultMessage:"Stack"});var stackTip=external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.sections.stackTip",{defaultMessage:"Manage your license and upgrade the Stack"});var IngestSection={id:ManagementSectionId.Ingest,title:ingestTitle,tip:ingestTip,order:0};var DataSection={id:ManagementSectionId.Data,title:dataTitle,tip:dataTip,order:1};var InsightsAndAlertingSection={id:ManagementSectionId.InsightsAndAlerting,title:insightsAndAlertingTitle,tip:insightsAndAlertingTip,order:2};var SecuritySection={id:"security",title:sectionTitle,tip:sectionTip,order:3};var KibanaSection={id:ManagementSectionId.Kibana,title:kibanaTitle,tip:kibanaTip,order:4};var StackSection={id:ManagementSectionId.Stack,title:stackTitle,tip:stackTip,order:4};var managementSections=[IngestSection,DataSection,InsightsAndAlertingSection,SecuritySection,KibanaSection,StackSection];var kibanaUtils_public_=__webpack_require__(5);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var _createGetterSetter=Object(kibanaUtils_public_["createGetterSetter"])("SectionsServiceStartPrivate"),_createGetterSetter2=_slicedToArray(_createGetterSetter,2),getSectionsServiceStartPrivate=_createGetterSetter2[0],setSectionsServiceStartPrivate=_createGetterSetter2[1];var management_sections_service_ManagementSectionsService=function(){function ManagementSectionsService(){var _this=this;_classCallCheck(this,ManagementSectionsService);_defineProperty(this,"definedSections",void 0);_defineProperty(this,"sections",new Map);_defineProperty(this,"getAllSections",(function(){return _toConsumableArray(_this.sections.values())}));_defineProperty(this,"registerSection",(function(section){if(_this.sections.has(section.id)){throw Error("ManagementSection '".concat(section.id,"' already registered"))}var newSection=new utils["c"](section);_this.sections.set(section.id,newSection);return newSection}));this.definedSections={ingest:this.registerSection(IngestSection),data:this.registerSection(DataSection),insightsAndAlerting:this.registerSection(InsightsAndAlertingSection),security:this.registerSection(SecuritySection),kibana:this.registerSection(KibanaSection),stack:this.registerSection(StackSection)}}_createClass(ManagementSectionsService,[{key:"setup",value:function setup(){return{register:this.registerSection,section:_objectSpread({},this.definedSections)}}},{key:"start",value:function start(_ref){var _this2=this;var capabilities=_ref.capabilities;this.getAllSections().forEach((function(section){if(capabilities.management.hasOwnProperty(section.id)){var sectionCapabilities=capabilities.management[section.id];section.apps.forEach((function(app){if(sectionCapabilities.hasOwnProperty(app.id)&&sectionCapabilities[app.id]!==true){app.disable()}}))}}));setSectionsServiceStartPrivate({getSectionsEnabled:function getSectionsEnabled(){return _this2.getAllSections().filter((function(section){return section.enabled}))}});return{}}}]);return ManagementSectionsService}();function plugin_slicedToArray(arr,i){return plugin_arrayWithHoles(arr)||plugin_iterableToArrayLimit(arr,i)||plugin_unsupportedIterableToArray(arr,i)||plugin_nonIterableRest()}function plugin_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function plugin_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return plugin_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return plugin_arrayLikeToArray(o,minLen)}function plugin_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function plugin_iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function plugin_arrayWithHoles(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function plugin_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function plugin_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function plugin_createClass(Constructor,protoProps,staticProps){if(protoProps)plugin_defineProperties(Constructor.prototype,protoProps);if(staticProps)plugin_defineProperties(Constructor,staticProps);return Constructor}function plugin_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var plugin_ManagementPlugin=function(){function ManagementPlugin(initializerContext){plugin_classCallCheck(this,ManagementPlugin);this.initializerContext=initializerContext;plugin_defineProperty(this,"managementSections",new management_sections_service_ManagementSectionsService);plugin_defineProperty(this,"appUpdater",new external_kbnSharedDeps_Rxjs_["BehaviorSubject"]((function(){return{}})));plugin_defineProperty(this,"hasAnyEnabledApps",true)}plugin_createClass(ManagementPlugin,[{key:"setup",value:function setup(core,_ref){var _this=this;var home=_ref.home;var kibanaVersion=this.initializerContext.env.packageInfo.version;if(home){home.featureCatalogue.register({id:"stack-management",title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.managementLabel",{defaultMessage:"Stack Management"}),description:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.managementDescription",{defaultMessage:"Your center console for managing the Elastic Stack."}),icon:"managementApp",path:"/app/management",showOnHomePage:false,category:public_["FeatureCatalogueCategory"].ADMIN,visible:function visible(){return _this.hasAnyEnabledApps}})}core.application.register({id:MANAGEMENT_APP_ID,title:external_kbnSharedDeps_KbnI18n_["i18n"].translate("management.stackManagement.title",{defaultMessage:"Stack Management"}),order:9040,euiIconType:"logoElastic",category:core_public_["DEFAULT_APP_CATEGORIES"].management,updater$:this.appUpdater,mount(params){return _asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _yield$import,renderApp,_yield$core$getStartS,_yield$core$getStartS2,coreStart;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return __webpack_require__.e(1).then(__webpack_require__.bind(null,36));case 2:_yield$import=_context.sent;renderApp=_yield$import.renderApp;_context.next=6;return core.getStartServices();case 6:_yield$core$getStartS=_context.sent;_yield$core$getStartS2=plugin_slicedToArray(_yield$core$getStartS,1);coreStart=_yield$core$getStartS2[0];return _context.abrupt("return",renderApp(params,{sections:getSectionsServiceStartPrivate(),kibanaVersion:kibanaVersion,setBreadcrumbs:coreStart.chrome.setBreadcrumbs}));case 10:case"end":return _context.stop()}}}),_callee)})))()}});return{sections:this.managementSections.setup()}}},{key:"start",value:function start(core){this.managementSections.start({capabilities:core.application.capabilities});this.hasAnyEnabledApps=getSectionsServiceStartPrivate().getSectionsEnabled().some((function(section){return section.getAppsEnabled().length>0}));if(!this.hasAnyEnabledApps){this.appUpdater.next((function(){return{status:core_public_["AppStatus"].inaccessible,navLinkStatus:core_public_["AppNavLinkStatus"].hidden}}))}return{}}}]);return ManagementPlugin}();function public_plugin(initializerContext){return new plugin_ManagementPlugin(initializerContext)}},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,exports){module.exports=__kbnSharedDeps__.ReactRouterDom},function(module,exports){module.exports=__kbnSharedDeps__.Lodash}]);