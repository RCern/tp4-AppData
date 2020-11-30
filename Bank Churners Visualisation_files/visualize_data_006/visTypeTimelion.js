(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={0:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+"visTypeTimelion.chunk."+chunkId+".js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["visTypeTimelion_bundle_jsonpfunction"]=window["visTypeTimelion_bundle_jsonpfunction"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=18)})([function(module,exports){module.exports=__kbnSharedDeps__.Lodash},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},function(module,exports){module.exports=__kbnSharedDeps__.React},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/data/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getIndexPatterns}));__webpack_require__.d(__webpack_exports__,"c",(function(){return setIndexPatterns}));__webpack_require__.d(__webpack_exports__,"b",(function(){return getSavedObjectsClient}));__webpack_require__.d(__webpack_exports__,"d",(function(){return setSavedObjectsClient}));var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);var _kibana_utils_public__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__);function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var _createGetterSetter=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])("IndexPatterns"),_createGetterSetter2=_slicedToArray(_createGetterSetter,2),getIndexPatterns=_createGetterSetter2[0],setIndexPatterns=_createGetterSetter2[1];var _createGetterSetter3=Object(_kibana_utils_public__WEBPACK_IMPORTED_MODULE_0__["createGetterSetter"])("SavedObjectsClient"),_createGetterSetter4=_slicedToArray(_createGetterSetter3,2),getSavedObjectsClient=_createGetterSetter4[0],setSavedObjectsClient=_createGetterSetter4[1]},function(module,exports){module.exports=__kbnSharedDeps__.Moment},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return calculateInterval}));__webpack_require__.d(__webpack_exports__,"a",(function(){return DEFAULT_TIME_FORMAT}));var external_kbnSharedDeps_Lodash_=__webpack_require__(0);var external_kbnSharedDeps_Moment_=__webpack_require__(5);var external_kbnSharedDeps_Moment_default=__webpack_require__.n(external_kbnSharedDeps_Moment_);var unitMappings=[["ms","milliseconds","millisecond"],["s","seconds","second","sec"],["m","minutes","minute","min"],["h","hours","hour"],["d","days","day"],["w","weeks","week"],["M","months","month"],["quarter"],["y","years","year"]];var vals={};unitMappings.forEach((function(units){var normal=external_kbnSharedDeps_Moment_default.a.normalizeUnits(units[0]);var val=external_kbnSharedDeps_Moment_default.a.duration(1,normal).asMilliseconds();[].concat(normal,units).forEach((function(unit){vals[unit]=val}))}));var parseRE=new RegExp("^(\\d+(?:\\.\\d*)?)?\\s*("+Object(external_kbnSharedDeps_Lodash_["keys"])(vals).join("|")+")$");function toMS(expr){var match=expr.match(parseRE);if(match){if(match[2]==="M"&&match[1]!=="1"){throw new Error("Invalid interval. 1M is only valid monthly interval.")}return parseFloat(match[1]||"1")*vals[match[2]]}}function roundInterval(interval){switch(true){case interval<=500:return"100ms";case interval<=5e3:return"1s";case interval<=7500:return"5s";case interval<=15e3:return"10s";case interval<=45e3:return"30s";case interval<=18e4:return"1m";case interval<=45e4:return"5m";case interval<=12e5:return"10m";case interval<=27e5:return"30m";case interval<=72e5:return"1h";case interval<=216e5:return"3h";case interval<=864e5:return"12h";case interval<=6048e5:return"24h";case interval<=18144e5:return"1w";case interval<36288e5:return"30d";default:return"1y"}}function calculateInterval(from,to,size,interval,min){if(interval!=="auto"){return interval}var dateMathInterval=roundInterval((to-from)/size);var dateMathIntervalMs=toMS(dateMathInterval);var minMs=toMS(min);if(dateMathIntervalMs!==undefined&&minMs!==undefined&&dateMathIntervalMs<minMs){return min}return dateMathInterval}var DEFAULT_TIME_FORMAT="MMMM Do YYYY, HH:mm:ss.SSS"},function(module,exports){module.exports=__kbnSharedDeps__.MomentTimezone},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,exports){module.exports=__kbnSharedDeps__.ReactDom},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return tickFormatters}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);function baseTickFormatter(value,axis){var factor=axis.tickDecimals?Math.pow(10,axis.tickDecimals):1;var formatted=""+Math.round(value*factor)/factor;if(axis.tickDecimals!=null){var decimal=formatted.indexOf(".");var precision=decimal===-1?0:formatted.length-decimal-1;if(precision<axis.tickDecimals){return(precision?formatted:formatted+".")+(""+factor).substr(1,axis.tickDecimals-precision)}}return formatted}function unitFormatter(divisor,units){return function(val){var index=0;var isNegative=val<0;val=Math.abs(val);while(val>=divisor&&index<units.length){val/=divisor;index++}var value=Math.round(val*100)/100*(isNegative?-1:1);return"".concat(value).concat(units[index])}}function tickFormatters(){return{bits:unitFormatter(1e3,["b","kb","mb","gb","tb","pb"]),"bits/s":unitFormatter(1e3,["b/s","kb/s","mb/s","gb/s","tb/s","pb/s"]),bytes:unitFormatter(1024,["B","KB","MB","GB","TB","PB"]),"bytes/s":unitFormatter(1024,["B/s","KB/s","MB/s","GB/s","TB/s","PB/s"]),currency(val,axis){return val.toLocaleString("en",{style:"currency",currency:axis&&axis.options&&axis.options.units.prefix||"USD"})},percent(val,axis){var precision=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis,"tickDecimals",0)-Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(axis,"options.units.tickDecimalsShift",0);if(precision<0){precision=0}else if(precision>20){precision=20}return(val*100).toFixed(precision)+"%"},custom(val,axis){var formattedVal=baseTickFormatter(val,axis);var prefix=axis&&axis.options&&axis.options.units.prefix;var suffix=axis&&axis.options&&axis.options.units.suffix;return prefix+formattedVal+suffix}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return xaxisFormatterProvider}));var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);var moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);var _kbn_i18n__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__);function xaxisFormatterProvider(config){function getFormat(esInterval){var parts=esInterval.match(/(\d+)(ms|s|m|h|d|w|M|y|)/);if(parts===null||parts[1]===null||parts[2]===null){throw new Error(_kbn_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate("timelion.panels.timechart.unknownIntervalErrorMessage",{defaultMessage:"Unknown interval"}))}var interval=moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(Number(parts[1]),parts[2]);var rules=config.get("dateFormat:scaled");for(var i=rules.length-1;i>=0;i--){var rule=rules[i];if(!rule[0]||interval>=moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(rule[0])){return rule[1]}}return config.get("dateFormat")}return function(esInterval){return getFormat(esInterval)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return generateTicksProvider}));function generateTicksProvider(){function floorInBase(n,base){return base*Math.floor(n/base)}function generateTicks(axis){var returnTicks=[];var tickSize=2;var delta=axis.delta||0;var steps=0;var tickVal;var tickCount=0;while(Math.abs(delta)>=1024){steps++;delta/=1024}while(tickSize<=1024){if(delta<=tickSize){break}tickSize*=2}axis.tickSize=tickSize*Math.pow(1024,steps);var tickMin=floorInBase(axis.min||0,axis.tickSize);do{tickVal=tickMin+tickCount++*axis.tickSize;returnTicks.push(tickVal)}while(tickVal<(axis.max||0));return returnTicks}return function(axis){return generateTicks(axis)}}},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var ns=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(__webpack_exports__,Object.getOwnPropertyDescriptors(ns))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getArgValueSuggestions}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);var lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);var _plugin_services__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);var _data_public__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);var _data_public__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function getArgValueSuggestions(){var indexPatterns=Object(_plugin_services__WEBPACK_IMPORTED_MODULE_1__["a"])();var savedObjectsClient=Object(_plugin_services__WEBPACK_IMPORTED_MODULE_1__["b"])();function getIndexPattern(_x){return _getIndexPattern.apply(this,arguments)}function _getIndexPattern(){_getIndexPattern=_asyncToGenerator(regeneratorRuntime.mark((function _callee6(functionArgs){var indexPatternArg,indexPatternTitle,_yield$savedObjectsCl,savedObjects,indexPatternSavedObject;return regeneratorRuntime.wrap((function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:indexPatternArg=functionArgs.find((function(_ref){var name=_ref.name;return name==="index"}));if(indexPatternArg){_context6.next=3;break}return _context6.abrupt("return");case 3:indexPatternTitle=Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(indexPatternArg,"value.text");_context6.next=6;return savedObjectsClient.find({type:"index-pattern",fields:["title"],search:'"'.concat(indexPatternTitle,'"'),searchFields:["title"],perPage:10});case 6:_yield$savedObjectsCl=_context6.sent;savedObjects=_yield$savedObjectsCl.savedObjects;indexPatternSavedObject=savedObjects.find((function(_ref2){var attributes=_ref2.attributes;return attributes.title===indexPatternTitle}));if(indexPatternSavedObject){_context6.next=11;break}return _context6.abrupt("return");case 11:_context6.next=13;return indexPatterns.get(indexPatternSavedObject.id);case 13:return _context6.abrupt("return",_context6.sent);case 14:case"end":return _context6.stop()}}}),_callee6)})));return _getIndexPattern.apply(this,arguments)}function containsFieldName(partial,field){if(!partial){return true}return field.name.includes(partial)}var customHandlers={es:{index(partial){return _asyncToGenerator(regeneratorRuntime.mark((function _callee(){var search,resp;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:search=partial?"".concat(partial,"*"):"*";_context.next=3;return savedObjectsClient.find({type:"index-pattern",fields:["title","type"],search:"".concat(search),searchFields:["title"],perPage:25});case 3:resp=_context.sent;return _context.abrupt("return",resp.savedObjects.filter((function(savedObject){return!savedObject.get("type")})).map((function(savedObject){return{name:savedObject.attributes.title}})));case 5:case"end":return _context.stop()}}}),_callee)})))()},metric(partial,functionArgs){return _asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var indexPattern,valueSplit;return regeneratorRuntime.wrap((function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(!partial||!partial.includes(":"))){_context2.next=2;break}return _context2.abrupt("return",[{name:"avg:"},{name:"cardinality:"},{name:"count"},{name:"max:"},{name:"min:"},{name:"percentiles:"},{name:"sum:"}]);case 2:_context2.next=4;return getIndexPattern(functionArgs);case 4:indexPattern=_context2.sent;if(indexPattern){_context2.next=7;break}return _context2.abrupt("return",[]);case 7:valueSplit=partial.split(":");return _context2.abrupt("return",indexPattern.fields.getAll().filter((function(field){return field.aggregatable&&"number"===field.type&&containsFieldName(valueSplit[1],field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)})).map((function(field){return{name:"".concat(valueSplit[0],":").concat(field.name),help:field.type}})));case 9:case"end":return _context2.stop()}}}),_callee2)})))()},split(partial,functionArgs){return _asyncToGenerator(regeneratorRuntime.mark((function _callee3(){var indexPattern;return regeneratorRuntime.wrap((function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return getIndexPattern(functionArgs);case 2:indexPattern=_context3.sent;if(indexPattern){_context3.next=5;break}return _context3.abrupt("return",[]);case 5:return _context3.abrupt("return",indexPattern.fields.getAll().filter((function(field){return field.aggregatable&&["number","boolean","date","ip","string"].includes(field.type)&&containsFieldName(partial,field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)})).map((function(field){return{name:field.name,help:field.type}})));case 6:case"end":return _context3.stop()}}}),_callee3)})))()},timefield(partial,functionArgs){return _asyncToGenerator(regeneratorRuntime.mark((function _callee4(){var indexPattern;return regeneratorRuntime.wrap((function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return getIndexPattern(functionArgs);case 2:indexPattern=_context4.sent;if(indexPattern){_context4.next=5;break}return _context4.abrupt("return",[]);case 5:return _context4.abrupt("return",indexPattern.fields.getAll().filter((function(field){return"date"===field.type&&containsFieldName(partial,field)&&!_data_public__WEBPACK_IMPORTED_MODULE_2__["indexPatterns"].isNestedField(field)})).map((function(field){return{name:field.name}})));case 6:case"end":return _context4.stop()}}}),_callee4)})))()}}};return{hasDynamicSuggestionsForArgument:function hasDynamicSuggestionsForArgument(functionName,argName){return customHandlers[functionName]&&customHandlers[functionName][argName]},getDynamicSuggestionsForArgument:function(){var _getDynamicSuggestionsForArgument=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(functionName,argName,functionArgs){var partialInput,_args5=arguments;return regeneratorRuntime.wrap((function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:partialInput=_args5.length>3&&_args5[3]!==undefined?_args5[3]:"";_context5.next=3;return customHandlers[functionName][argName](partialInput,functionArgs);case 3:return _context5.abrupt("return",_context5.sent);case 4:case"end":return _context5.stop()}}}),_callee5)})));function getDynamicSuggestionsForArgument(_x2,_x3,_x4){return _getDynamicSuggestionsForArgument.apply(this,arguments)}return getDynamicSuggestionsForArgument}(),getStaticSuggestionsForInput:function getStaticSuggestionsForInput(){var partialInput=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var staticSuggestions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];if(partialInput){return staticSuggestions.filter((function(suggestion){return suggestion.name.includes(partialInput)}))}return staticSuggestions}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19);var _node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_visTypeTimelion_kbn_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);__kbnBundles__.define("plugin/visTypeTimelion/public",__webpack_require__,20)},function(module,exports,__webpack_require__){__webpack_require__.p=window.__kbnPublicPath__["visTypeTimelion"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"plugin",(function(){return public_plugin}));__webpack_require__.d(__webpack_exports__,"getTimezone",(function(){return getTimezone}));__webpack_require__.d(__webpack_exports__,"tickFormatters",(function(){return tick_formatters["a"]}));__webpack_require__.d(__webpack_exports__,"xaxisFormatterProvider",(function(){return xaxis_formatter["a"]}));__webpack_require__.d(__webpack_exports__,"generateTicksProvider",(function(){return tick_generator["a"]}));__webpack_require__.d(__webpack_exports__,"DEFAULT_TIME_FORMAT",(function(){return lib["a"]}));__webpack_require__.d(__webpack_exports__,"calculateInterval",(function(){return lib["b"]}));__webpack_require__.d(__webpack_exports__,"VisTypeTimelionPluginStart",(function(){return undefined}));__webpack_require__.d(__webpack_exports__,"VisTypeTimelionPluginSetup",(function(){return undefined}));var external_kbnSharedDeps_Lodash_=__webpack_require__(0);var external_kbnSharedDeps_KbnI18n_=__webpack_require__(1);var public_=__webpack_require__(3);var external_kbnSharedDeps_MomentTimezone_=__webpack_require__(8);var external_kbnSharedDeps_MomentTimezone_default=__webpack_require__.n(external_kbnSharedDeps_MomentTimezone_);function getTimezone(config){if(config.isDefault("dateFormat:tz")){var detectedTimezone=external_kbnSharedDeps_MomentTimezone_default.a.tz.guess();if(detectedTimezone)return detectedTimezone;else return external_kbnSharedDeps_MomentTimezone_default()().format("Z")}else{return config.get("dateFormat:tz","Browser")}}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}function getTimelionRequestHandler(_ref){var uiSettings=_ref.uiSettings,http=_ref.http,timefilter=_ref.timefilter;var timezone=getTimezone(uiSettings);return function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark((function _callee(_ref2){var timeRange,filters,query,visParams,expression,esQueryConfigs,timeRangeBounds,err;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:timeRange=_ref2.timeRange,filters=_ref2.filters,query=_ref2.query,visParams=_ref2.visParams;expression=visParams.expression;if(expression){_context.next=4;break}throw new Error(external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.emptyExpressionErrorMessage",{defaultMessage:"Timelion error: No expression provided"}));case 4:esQueryConfigs=public_["esQuery"].getEsQueryConfig(uiSettings);timeRangeBounds=timefilter.calculateBounds(timeRange);_context.prev=6;_context.next=9;return http.post("/api/timelion/run",{body:JSON.stringify({sheet:[expression],extended:{es:{filter:public_["esQuery"].buildEsQuery(undefined,query,filters,esQueryConfigs)}},time:{from:timeRangeBounds.min,to:timeRangeBounds.max,interval:visParams.interval,timezone:timezone}})});case 9:return _context.abrupt("return",_context.sent);case 12:_context.prev=12;_context.t0=_context["catch"](6);if(!(_context.t0&&_context.t0.body)){_context.next=20;break}err=new Error("".concat(external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.requestHandlerErrorTitle",{defaultMessage:"Timelion request error"}),": ").concat(_context.t0.body.title," ").concat(_context.t0.body.message));err.stack=_context.t0.stack;throw err;case 20:throw _context.t0;case 21:case"end":return _context.stop()}}}),_callee,null,[[6,12]])})));return function(_x){return _ref3.apply(this,arguments)}}()}var external_kbnSharedDeps_React_=__webpack_require__(2);var external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_);var visDefaultEditor_public_=__webpack_require__(16);var expressions_public_=__webpack_require__(9);var escapeString=function escapeString(data){return data.replace(/\\/g,"\\\\").replace(/'/g,"\\'")};var to_ast_toExpressionAst=function toExpressionAst(vis){var timelion=Object(expressions_public_["buildExpressionFunction"])("timelion_vis",{expression:escapeString(vis.params.expression),interval:escapeString(vis.params.interval)});var ast=Object(expressions_public_["buildExpression"])([timelion]);return ast.toAst()};var visualizations_public_=__webpack_require__(6);function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}var TimelionOptions=Object(external_kbnSharedDeps_React_["lazy"])((function(){return __webpack_require__.e(2).then(__webpack_require__.bind(null,37))}));var TIMELION_VIS_NAME="timelion";function getTimelionVisDefinition(dependencies){var timelionRequestHandler=getTimelionRequestHandler(dependencies);return{name:TIMELION_VIS_NAME,title:"Timelion",icon:"visTimelion",description:external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.timelionDescription",{defaultMessage:"Build time-series using functional expressions"}),visConfig:{defaults:{expression:".es(*)",interval:"auto"}},editorConfig:{optionsTemplate:function optionsTemplate(props){return external_kbnSharedDeps_React_default.a.createElement(TimelionOptions,_extends({services:dependencies},props))},defaultSize:visDefaultEditor_public_["DefaultEditorSize"].MEDIUM},requestHandler:timelionRequestHandler,toExpressionAst:to_ast_toExpressionAst,responseHandler:"none",inspectorAdapters:{},getSupportedTriggers:function getSupportedTriggers(){return[visualizations_public_["VIS_EVENT_TO_TRIGGER"].applyFilter]},options:{showIndexSelection:false,showQueryBar:false,showFilterBar:false}}}function timelion_vis_fn_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function timelion_vis_fn_asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){timelion_vis_fn_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){timelion_vis_fn_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)}))}}var timelion_vis_fn_getTimelionVisualizationConfig=function getTimelionVisualizationConfig(dependencies){return{name:"timelion_vis",type:"render",inputTypes:["kibana_context","null"],help:external_kbnSharedDeps_KbnI18n_["i18n"].translate("timelion.function.help",{defaultMessage:"Timelion visualization"}),args:{expression:{types:["string"],aliases:["_"],default:'".es(*)"',help:""},interval:{types:["string"],default:"auto",help:""}},fn(input,args){return timelion_vis_fn_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var timelionRequestHandler,visParams,response;return regeneratorRuntime.wrap((function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:timelionRequestHandler=getTimelionRequestHandler(dependencies);visParams={expression:args.expression,interval:args.interval};_context.next=4;return timelionRequestHandler({timeRange:Object(external_kbnSharedDeps_Lodash_["get"])(input,"timeRange"),query:Object(external_kbnSharedDeps_Lodash_["get"])(input,"query"),filters:Object(external_kbnSharedDeps_Lodash_["get"])(input,"filters"),visParams:visParams});case 4:response=_context.sent;response.visType=TIMELION_VIS_NAME;return _context.abrupt("return",{type:"render",as:"timelion_vis",value:{visParams:visParams,visType:TIMELION_VIS_NAME,visData:response}});case 7:case"end":return _context.stop()}}}),_callee)})))()}}};var plugin_services=__webpack_require__(4);var arg_value_suggestions=__webpack_require__(17);var external_kbnSharedDeps_ReactDom_=__webpack_require__(11);var kibanaReact_public_=__webpack_require__(12);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var TimelionVisComponent=Object(external_kbnSharedDeps_React_["lazy"])((function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,38))}));var timelion_vis_renderer_getTimelionVisRenderer=function getTimelionVisRenderer(deps){return{name:"timelion_vis",displayName:"Timelion visualization",reuseDomNode:true,render:function render(domNode,_ref,handlers){var visData=_ref.visData,visParams=_ref.visParams;handlers.onDestroy((function(){Object(external_kbnSharedDeps_ReactDom_["unmountComponentAtNode"])(domNode)}));var _visData$sheet=_slicedToArray(visData.sheet,1),seriesList=_visData$sheet[0];var showNoResult=!seriesList||!seriesList.list.length;if(showNoResult){handlers.done()}Object(external_kbnSharedDeps_ReactDom_["render"])(external_kbnSharedDeps_React_default.a.createElement(visualizations_public_["VisualizationContainer"],{showNoResult:showNoResult},external_kbnSharedDeps_React_default.a.createElement(kibanaReact_public_["KibanaContextProvider"],{services:_objectSpread({},deps)},external_kbnSharedDeps_React_default.a.createElement(TimelionVisComponent,{interval:visParams.interval,seriesList:seriesList,renderComplete:handlers.done,fireEvent:handlers.event}))),domNode)}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var plugin_TimelionVisPlugin=function(){function TimelionVisPlugin(initializerContext){_classCallCheck(this,TimelionVisPlugin);this.initializerContext=initializerContext}_createClass(TimelionVisPlugin,[{key:"setup",value:function setup(core,_ref){var expressions=_ref.expressions,visualizations=_ref.visualizations,data=_ref.data;var dependencies={uiSettings:core.uiSettings,http:core.http,timefilter:data.query.timefilter.timefilter};expressions.registerFunction((function(){return timelion_vis_fn_getTimelionVisualizationConfig(dependencies)}));expressions.registerRenderer(timelion_vis_renderer_getTimelionVisRenderer(dependencies));visualizations.createBaseVisualization(getTimelionVisDefinition(dependencies));return{isUiEnabled:this.initializerContext.config.get().ui.enabled}}},{key:"start",value:function start(core,plugins){Object(plugin_services["c"])(plugins.data.indexPatterns);Object(plugin_services["d"])(core.savedObjects.client);return{getArgValueSuggestions:arg_value_suggestions["a"]}}}]);return TimelionVisPlugin}();var tick_formatters=__webpack_require__(13);var xaxis_formatter=__webpack_require__(14);var tick_generator=__webpack_require__(15);var lib=__webpack_require__(7);function public_plugin(initializerContext){return new plugin_TimelionVisPlugin(initializerContext)}},function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},function(module,exports){module.exports=__kbnSharedDeps__.KbnMonaco},function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},function(module,exports){module.exports=__kbnSharedDeps__.Jquery}]);