/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements.
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=10)})([function(module,exports){module.exports=__kbnSharedDeps__.Rxjs},function(module,exports){module.exports=__kbnSharedDeps__.RxjsOperators},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){var getRandomValues=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(getRandomValues){var rnds8=new Uint8Array(16);module.exports=function whatwgRNG(){getRandomValues(rnds8);return rnds8}}else{var rnds=new Array(16);module.exports=function mathRNG(){for(var i=0,r;i<16;i++){if((i&3)===0)r=Math.random()*4294967296;rnds[i]=r>>>((i&3)<<3)&255}return rnds}}},function(module,exports){var byteToHex=[];for(var i=0;i<256;++i){byteToHex[i]=(i+256).toString(16).substr(1)}function bytesToUuid(buf,offset){var i=offset||0;var bth=byteToHex;return[bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],"-",bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]],bth[buf[i++]]].join("")}module.exports=bytesToUuid},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports,__webpack_require__){var v1=__webpack_require__(12);var v4=__webpack_require__(13);var uuid=v4;uuid.v1=v1;uuid.v4=v4;module.exports=uuid},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_globalSearch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);var _node_modules_val_loader_dist_cjs_js_key_globalSearch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_globalSearch_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/globalSearch/public",__webpack_require__,14)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["globalSearch"]},function(module,exports,__webpack_require__){var rng=__webpack_require__(5);var bytesToUuid=__webpack_require__(6);var _nodeId;var _clockseq;var _lastMSecs=0;var _lastNSecs=0;function v1(options,buf,offset){var i=buf&&offset||0;var b=buf||[];options=options||{};var node=options.node||_nodeId;var clockseq=options.clockseq!==undefined?options.clockseq:_clockseq;if(node==null||clockseq==null){var seedBytes=rng();if(node==null){node=_nodeId=[seedBytes[0]|1,seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]}if(clockseq==null){clockseq=_clockseq=(seedBytes[6]<<8|seedBytes[7])&16383}}var msecs=options.msecs!==undefined?options.msecs:(new Date).getTime();var nsecs=options.nsecs!==undefined?options.nsecs:_lastNSecs+1;var dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&options.clockseq===undefined){clockseq=clockseq+1&16383}if((dt<0||msecs>_lastMSecs)&&options.nsecs===undefined){nsecs=0}if(nsecs>=1e4){throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")}_lastMSecs=msecs;_lastNSecs=nsecs;_clockseq=clockseq;msecs+=122192928e5;var tl=((msecs&268435455)*1e4+nsecs)%4294967296;b[i++]=tl>>>24&255;b[i++]=tl>>>16&255;b[i++]=tl>>>8&255;b[i++]=tl&255;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255;b[i++]=tmh&255;b[i++]=tmh>>>24&15|16;b[i++]=tmh>>>16&255;b[i++]=clockseq>>>8|128;b[i++]=clockseq&255;for(var n=0;n<6;++n){b[i+n]=node[n]}return buf?buf:bytesToUuid(b)}module.exports=v1},function(module,exports,__webpack_require__){var rng=__webpack_require__(5);var bytesToUuid=__webpack_require__(6);function v4(options,buf,offset){var i=buf&&offset||0;if(typeof options=="string"){buf=options==="binary"?new Array(16):null;options=null}options=options||{};var rnds=options.random||(options.rng||rng)();rnds[6]=rnds[6]&15|64;rnds[8]=rnds[8]&63|128;if(buf){for(var ii=0;ii<16;++ii){buf[i+ii]=rnds[ii]}}return buf||bytesToUuid(rnds)}module.exports=v4},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));__webpack_require__.d(__webpack_exports__,"GlobalSearchBatchedResults",(function(){return common_types["GlobalSearchBatchedResults"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchProviderFindOptions",(function(){return common_types["GlobalSearchProviderFindOptions"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchProviderResult",(function(){return common_types["GlobalSearchProviderResult"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchProviderResultUrl",(function(){return common_types["GlobalSearchProviderResultUrl"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchResult",(function(){return common_types["GlobalSearchResult"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchPluginSetup",(function(){return public_types["GlobalSearchPluginSetup"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchPluginStart",(function(){return public_types["GlobalSearchPluginStart"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchResultProvider",(function(){return public_types["GlobalSearchResultProvider"]}));__webpack_require__.d(__webpack_exports__,"GlobalSearchFindOptions",(function(){return types["GlobalSearchFindOptions"]}));function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var checkLicense=function checkLicense(license){var check=license.check("globalSearch","basic");switch(check.state){case"expired":return{valid:false,message:"expired"};case"invalid":return{valid:false,message:"invalid"};case"unavailable":return{valid:false,message:"unavailable"};case"valid":return{valid:true};default:throw new Error("Invalid license state: ".concat(check.state))}};var LicenseChecker=function(){function LicenseChecker(license$){var _this=this;_classCallCheck(this,LicenseChecker);_defineProperty(this,"subscription",void 0);_defineProperty(this,"state",{valid:false,message:"unknown"});this.subscription=license$.subscribe((function(license){_this.state=checkLicense(license)}))}_createClass(LicenseChecker,[{key:"getState",value:function getState(){return this.state}},{key:"clean",value:function clean(){this.subscription.unsubscribe()}}]);return LicenseChecker}();var external_kbnSharedDeps_Rxjs_=__webpack_require__(0);var external_kbnSharedDeps_RxjsOperators_=__webpack_require__(1);var external_kbnSharedDeps_Moment_=__webpack_require__(7);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(8);function errors_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function errors_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function errors_createClass(Constructor,protoProps,staticProps){if(protoProps)errors_defineProperties(Constructor.prototype,protoProps);if(staticProps)errors_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class)};return _wrapNativeSuper(Class)}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor;if(Class)_setPrototypeOf(instance,Class.prototype);return instance}}return _construct.apply(null,arguments)}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var GlobalSearchFindError=function(_Error){_inherits(GlobalSearchFindError,_Error);var _super=_createSuper(GlobalSearchFindError);errors_createClass(GlobalSearchFindError,null,[{key:"invalidLicense",value:function invalidLicense(message){return new GlobalSearchFindError("invalid-license",message)}}]);function GlobalSearchFindError(type,message){var _this;errors_classCallCheck(this,GlobalSearchFindError);_this=_super.call(this,message);_this.type=type;Object.setPrototypeOf(_assertThisInitialized(_this),GlobalSearchFindError.prototype);return _this}return GlobalSearchFindError}(_wrapNativeSuper(Error));function take_in_array_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)take_in_array_setPrototypeOf(subClass,superClass)}function take_in_array_setPrototypeOf(o,p){take_in_array_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return take_in_array_setPrototypeOf(o,p)}function take_in_array_createSuper(Derived){var hasNativeReflectConstruct=take_in_array_isNativeReflectConstruct();return function _createSuperInternal(){var Super=take_in_array_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=take_in_array_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return take_in_array_possibleConstructorReturn(this,result)}}function take_in_array_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call}return take_in_array_assertThisInitialized(self)}function take_in_array_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function take_in_array_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function take_in_array_getPrototypeOf(o){take_in_array_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return take_in_array_getPrototypeOf(o)}function take_in_array_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function take_in_array_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function take_in_array_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function take_in_array_createClass(Constructor,protoProps,staticProps){if(protoProps)take_in_array_defineProperties(Constructor.prototype,protoProps);if(staticProps)take_in_array_defineProperties(Constructor,staticProps);return Constructor}function takeInArray(count){return function takeLastOperatorFunction(source){if(count===0){return external_kbnSharedDeps_Rxjs_["EMPTY"]}else{return source.lift(new TakeInArray(count))}}}var TakeInArray=function(){function TakeInArray(total){take_in_array_classCallCheck(this,TakeInArray);this.total=total;if(this.total<0){throw new Error("Cannot take a negative number of items")}}take_in_array_createClass(TakeInArray,[{key:"call",value:function call(subscriber,source){return source.subscribe(new TakeInArraySubscriber(subscriber,this.total))}}]);return TakeInArray}();var TakeInArraySubscriber=function(_Subscriber){take_in_array_inherits(TakeInArraySubscriber,_Subscriber);var _super=take_in_array_createSuper(TakeInArraySubscriber);function TakeInArraySubscriber(destination,total){var _this;take_in_array_classCallCheck(this,TakeInArraySubscriber);_this=_super.call(this,destination);_this.total=total;take_in_array_defineProperty(take_in_array_assertThisInitialized(_this),"current",0);return _this}take_in_array_createClass(TakeInArraySubscriber,[{key:"_next",value:function _next(value){var remaining=this.total-this.current;if(remaining>value.length){this.destination.next(value);this.current+=value.length}else{this.destination.next(value.slice(0,remaining));this.destination.complete();this.unsubscribe()}}}]);return TakeInArraySubscriber}(external_kbnSharedDeps_Rxjs_["Subscriber"]);var defaultMaxProviderResults=40;var convertResultUrl=function convertResultUrl(url,basePath){if(typeof url==="string"){if(url.startsWith("/")){return basePath.prepend(url)}return url}if(url.prependBasePath){return basePath.prepend(url.path)}return url.path};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){process_result_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function process_result_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var process_result_processProviderResult=function processProviderResult(result,basePath){return _objectSpread(_objectSpread({},result),{},{url:convertResultUrl(result.url,basePath)})};var uuid=__webpack_require__(9);var uuid_default=__webpack_require__.n(uuid);var defaultPrefStorageKey="globalSearch:defaultPref";var utils_getDefaultPreference=function getDefaultPreference(){var storage=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.sessionStorage;var pref=storage.getItem(defaultPrefStorageKey);if(pref){return pref}pref=uuid_default.a.v4();storage.setItem(defaultPrefStorageKey,pref);return pref};var fetch_server_results_fetchServerResults=function fetchServerResults(http,term,_ref){var _controller;var preference=_ref.preference,aborted$=_ref.aborted$;var controller;if(aborted$){controller=new AbortController;aborted$.subscribe((function(){controller.abort()}))}return Object(external_kbnSharedDeps_Rxjs_["from"])(http.post("/internal/global_search/find",{body:JSON.stringify({term:term,options:{preference:preference}}),signal:(_controller=controller)===null||_controller===void 0?void 0:_controller.signal})).pipe(Object(external_kbnSharedDeps_RxjsOperators_["takeUntil"])(aborted$!==null&&aborted$!==void 0?aborted$:external_kbnSharedDeps_Rxjs_["EMPTY"]),Object(external_kbnSharedDeps_RxjsOperators_["map"])((function(response){return response.results})))};function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function search_service_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function search_service_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){search_service_ownKeys(Object(source),true).forEach((function(key){search_service_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{search_service_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function search_service_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function search_service_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function search_service_createClass(Constructor,protoProps,staticProps){if(protoProps)search_service_defineProperties(Constructor.prototype,protoProps);if(staticProps)search_service_defineProperties(Constructor,staticProps);return Constructor}function search_service_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var mapToUndefined=function mapToUndefined(){return undefined};var search_service_SearchService=function(){function SearchService(){search_service_classCallCheck(this,SearchService);search_service_defineProperty(this,"providers",new Map);search_service_defineProperty(this,"config",void 0);search_service_defineProperty(this,"http",void 0);search_service_defineProperty(this,"maxProviderResults",defaultMaxProviderResults);search_service_defineProperty(this,"licenseChecker",void 0)}search_service_createClass(SearchService,[{key:"setup",value:function setup(_ref){var _this=this;var config=_ref.config,_ref$maxProviderResul=_ref.maxProviderResults,maxProviderResults=_ref$maxProviderResul===void 0?defaultMaxProviderResults:_ref$maxProviderResul;this.config=config;this.maxProviderResults=maxProviderResults;return{registerResultProvider:function registerResultProvider(provider){if(_this.providers.has(provider.id)){throw new Error("trying to register duplicate provider: ".concat(provider.id))}_this.providers.set(provider.id,provider)}}}},{key:"start",value:function start(_ref2){var _this2=this;var http=_ref2.http,licenseChecker=_ref2.licenseChecker;this.http=http;this.licenseChecker=licenseChecker;return{find:function find(term,options){return _this2.performFind(term,options)}}}},{key:"performFind",value:function performFind(term,options){var _options$preference,_this3=this;var licenseState=this.licenseChecker.getState();if(!licenseState.valid){return Object(external_kbnSharedDeps_Rxjs_["throwError"])(GlobalSearchFindError.invalidLicense(external_kbnSharedDeps_KbnI18n_["i18n"].translate("xpack.globalSearch.find.invalidLicenseError",{defaultMessage:"GlobalSearch API is disabled because of invalid license state: {errorMessage}",values:{errorMessage:licenseState.message}})))}var timeout=Object(external_kbnSharedDeps_Moment_["duration"])(this.config.search_timeout).asMilliseconds();var timeout$=Object(external_kbnSharedDeps_Rxjs_["timer"])(timeout).pipe(Object(external_kbnSharedDeps_RxjsOperators_["map"])(mapToUndefined));var aborted$=options.aborted$?Object(external_kbnSharedDeps_Rxjs_["merge"])(options.aborted$,timeout$):timeout$;var preference=(_options$preference=options.preference)!==null&&_options$preference!==void 0?_options$preference:utils_getDefaultPreference();var providerOptions=search_service_objectSpread(search_service_objectSpread({},options),{},{preference:preference,maxResults:this.maxProviderResults,aborted$:aborted$});var processResult=function processResult(result){return process_result_processProviderResult(result,_this3.http.basePath)};var serverResults$=fetch_server_results_fetchServerResults(this.http,term,{preference:preference,aborted$:aborted$});var providersResults$=_toConsumableArray(this.providers.values()).map((function(provider){return provider.find(term,providerOptions).pipe(takeInArray(_this3.maxProviderResults),Object(external_kbnSharedDeps_RxjsOperators_["takeUntil"])(aborted$),Object(external_kbnSharedDeps_RxjsOperators_["map"])((function(results){return results.map((function(r){return processResult(r)}))})))}));return external_kbnSharedDeps_Rxjs_["merge"].apply(void 0,_toConsumableArray(providersResults$).concat([serverResults$])).pipe(Object(external_kbnSharedDeps_RxjsOperators_["map"])((function(results){return{results:results}})))}}]);return SearchService}();var types=__webpack_require__(4);function plugin_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function plugin_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function plugin_createClass(Constructor,protoProps,staticProps){if(protoProps)plugin_defineProperties(Constructor.prototype,protoProps);if(staticProps)plugin_defineProperties(Constructor,staticProps);return Constructor}function plugin_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var plugin_GlobalSearchPlugin=function(){function GlobalSearchPlugin(context){plugin_classCallCheck(this,GlobalSearchPlugin);plugin_defineProperty(this,"config",void 0);plugin_defineProperty(this,"licenseChecker",void 0);plugin_defineProperty(this,"searchService",new search_service_SearchService);this.config=context.config.get()}plugin_createClass(GlobalSearchPlugin,[{key:"setup",value:function setup(core){var _this$searchService$s=this.searchService.setup({config:this.config}),registerResultProvider=_this$searchService$s.registerResultProvider;return{registerResultProvider:registerResultProvider}}},{key:"start",value:function start(_ref,_ref2){var http=_ref.http;var licensing=_ref2.licensing;this.licenseChecker=new LicenseChecker(licensing.license$);var _this$searchService$s2=this.searchService.start({http:http,licenseChecker:this.licenseChecker}),find=_this$searchService$s2.find;return{find:find}}},{key:"stop",value:function stop(){if(this.licenseChecker){this.licenseChecker.clean()}}}]);return GlobalSearchPlugin}();var public_types=__webpack_require__(3);var common_types=__webpack_require__(2);var public_plugin=function plugin(context){return new plugin_GlobalSearchPlugin(context)}}]);