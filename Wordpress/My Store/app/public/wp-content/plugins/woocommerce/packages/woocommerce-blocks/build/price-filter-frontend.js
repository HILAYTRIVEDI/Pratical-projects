!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=179)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},102:function(e,t){},11:function(e,t){e.exports=window.wp.isShallowEqual},131:function(e,t,r){"use strict";var n=r(3),o=r.n(n);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){}function p(){}p.resetWarningCache=l;var f=function(e,t){return function(e){e.exports=function(){function e(e,t,r,n,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:p,resetWarningCache:l};return r.PropTypes=r,r}()}(t={exports:{}}),t.exports}();function m(){}function d(e){return!!(e||"").match(/\d/)}function b(e){return null==e}function g(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function h(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r="-"===e[0],n=r&&t,o=(e=e.replace("-","")).split("."),a=o[0],c=o[1]||"";return{beforeDecimal:a,afterDecimal:c,hasNagation:r,addNegation:n}}function v(e,t,r){for(var n="",o=r?"0":"",a=0;a<=t-1;a++)n+=e[a]||o;return n}function y(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function O(e,t,r){return Math.min(Math.max(e,t),r)}function w(e){return Math.max(e.selectionStart,e.selectionEnd)}var _={thousandSeparator:f.oneOfType([f.string,f.oneOf([!0])]),decimalSeparator:f.string,allowedDecimalSeparators:f.arrayOf(f.string),thousandsGroupStyle:f.oneOf(["thousand","lakh","wan"]),decimalScale:f.number,fixedDecimalScale:f.bool,displayType:f.oneOf(["input","text"]),prefix:f.string,suffix:f.string,format:f.oneOfType([f.string,f.func]),removeFormatting:f.func,mask:f.oneOfType([f.string,f.arrayOf(f.string)]),value:f.oneOfType([f.number,f.string]),defaultValue:f.oneOfType([f.number,f.string]),isNumericString:f.bool,customInput:f.elementType,allowNegative:f.bool,allowEmptyFormatting:f.bool,allowLeadingZeros:f.bool,onValueChange:f.func,onKeyDown:f.func,onMouseUp:f.func,onChange:f.func,onFocus:f.func,onBlur:f.func,type:f.oneOf(["text","tel","password"]),isAllowed:f.func,renderText:f.func,getInputRef:f.oneOfType([f.func,f.shape({current:f.any})])},j={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:m,onChange:m,onKeyDown:m,onMouseUp:m,onFocus:m,onBlur:m,isAllowed:function(){return!0}},S=function(e){function t(e){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=!(n=i(t).call(this,e))||"object"!=typeof n&&"function"!=typeof n?s(this):n;var o=e.defaultValue;r.validateProps();var a=r.formatValueProp(o);return r.state={value:a,numAsString:r.removeFormatting(a)},r.selectionBeforeInput={selectionStart:0,selectionEnd:0},r.onChange=r.onChange.bind(s(r)),r.onKeyDown=r.onKeyDown.bind(s(r)),r.onMouseUp=r.onMouseUp.bind(s(r)),r.onFocus=r.onFocus.bind(s(r)),r.onBlur=r.onBlur.bind(s(r)),r}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){this.updateValueIfRequired(e)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.focusTimeout)}},{key:"updateValueIfRequired",value:function(e){var t=this.props,r=this.state,n=this.focusedElm,o=r.value,a=r.numAsString,c=void 0===a?"":a;if(e!==t){this.validateProps();var i=this.formatNumString(c),u=b(t.value)?i:this.formatValueProp(),s=this.removeFormatting(u),l=parseFloat(s),p=parseFloat(c);(isNaN(l)&&isNaN(p)||l===p)&&i===o&&(null!==n||u===o)||this.updateValue({formattedValue:u,numAsString:s,input:n})}}},{key:"getFloatString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.decimalScale,r=this.getSeparators(),n=r.decimalSeparator,o=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var c=(e=(e.match(o)||[]).join("").replace(n,".")).indexOf(".");return-1!==c&&(e="".concat(e.substring(0,c),".").concat(e.substring(c+1,e.length).replace(new RegExp(g(n),"g"),""))),a&&(e="-"+e),e}},{key:"getNumberRegex",value:function(e,t){var r=this.props,n=r.format,o=r.decimalScale,a=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!a||0===o||t||n?"":"|"+g(a)),e?"g":void 0)}},{key:"getSeparators",value:function(){var e=this.props.decimalSeparator,t=this.props,r=t.thousandSeparator,n=t.allowedDecimalSeparators;return!0===r&&(r=","),n||(n=[e,"."]),{decimalSeparator:e,thousandSeparator:r,allowedDecimalSeparators:n}}},{key:"getMaskAtIndex",value:function(e){var t=this.props.mask,r=void 0===t?" ":t;return"string"==typeof r?r:r[e]||" "}},{key:"getValueObject",value:function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}}},{key:"validateProps",value:function(){var e=this.props.mask,t=this.getSeparators(),r=t.decimalSeparator,n=t.thousandSeparator;if(r===n)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(n,' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ').concat(r," (default value for decimalSeparator is .)\n       "));if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask ".concat(e," should not contain numeric character;\n        "))}},{key:"setPatchedCaretPosition",value:function(e,t,r){y(e,t),setTimeout((function(){e.value===r&&y(e,t)}),0)}},{key:"correctCaretPosition",value:function(e,t,r){var n=this.props,o=n.prefix,a=n.suffix,c=n.format;if(""===e)return 0;if(t=O(t,0,e.length),!c){var i="-"===e[0];return O(t,o.length+(i?1:0),e.length-a.length)}if("function"==typeof c)return t;if("#"===c[t]&&d(e[t]))return t;if("#"===c[t-1]&&d(e[t-1]))return t;var u=c.indexOf("#");t=O(t,u,c.lastIndexOf("#")+1);for(var s=c.substring(t,c.length).indexOf("#"),l=t,p=t+(-1===s?0:s);l>u&&("#"!==c[l]||!d(e[l]));)l-=1;return!d(e[p])||"left"===r&&t!==u||t-l<p-t?d(e[l])?l+1:l:p}},{key:"getCaretPosition",value:function(e,t,r){var n,o,a=this.props.format,c=this.state.value,i=this.getNumberRegex(!0),u=(e.match(i)||[]).join(""),s=(t.match(i)||[]).join("");for(n=0,o=0;o<r;o++){var l=e[o]||"",p=t[n]||"";if((l.match(i)||l===p)&&("0"!==l||!p.match(i)||"0"===p||u.length===s.length)){for(;l!==t[n]&&n<t.length;)n++;n++}}return"string"!=typeof a||c||(n=t.length),this.correctCaretPosition(t,n)}},{key:"removePrefixAndSuffix",value:function(e){var t=this.props,r=t.format,n=t.prefix,o=t.suffix;if(!r&&e){var a="-"===e[0];a&&(e=e.substring(1,e.length));var c=(e=n&&0===e.indexOf(n)?e.substring(n.length,e.length):e).lastIndexOf(o);e=o&&-1!==c&&c===e.length-o.length?e.substring(0,c):e,a&&(e="-"+e)}return e}},{key:"removePatternFormatting",value:function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),r=0,n="",o=0,a=t.length;o<=a;o++){var c=t[o]||"",i=o===a?e.length:e.indexOf(c,r);if(-1===i){n=e;break}n+=e.substring(r,i),r=i+c.length}return(n.match(/\d/g)||[]).join("")}},{key:"removeFormatting",value:function(e){var t=this.props,r=t.format,n=t.removeFormatting;return e?(r?e="string"==typeof r?this.removePatternFormatting(e):"function"==typeof n?n(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e}},{key:"formatWithPattern",value:function(e){for(var t=this.props.format,r=0,n=t.split(""),o=0,a=t.length;o<a;o++)"#"===t[o]&&(n[o]=e[r]||this.getMaskAtIndex(r),r+=1);return n.join("")}},{key:"formatAsNumber",value:function(e){var t=this.props,r=t.decimalScale,n=t.fixedDecimalScale,o=t.prefix,a=t.suffix,c=t.allowNegative,i=t.thousandsGroupStyle,u=this.getSeparators(),s=u.thousandSeparator,l=u.decimalSeparator,p=-1!==e.indexOf(".")||r&&n,f=h(e,c),m=f.beforeDecimal,d=f.afterDecimal,b=f.addNegation;return void 0!==r&&(d=v(d,r,n)),s&&(m=function(e,t,r){var n=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),o=e.search(/[1-9]/);return o=-1===o?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(n,"$1"+t)}(m,s,i)),o&&(m=o+m),a&&(d+=a),b&&(m="-"+m),m+(p&&l||"")+d}},{key:"formatNumString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props,r=t.format,n=t.allowEmptyFormatting,o=e;return""!==e||n?"-"!==e||r?"string"==typeof r?this.formatWithPattern(o):"function"==typeof r?r(o):this.formatAsNumber(o):"-":""}},{key:"formatValueProp",value:function(e){var t=this.props,r=t.format,n=t.decimalScale,o=t.fixedDecimalScale,a=t.allowEmptyFormatting,c=this.props,i=c.value,u=c.isNumericString,s=!(i=b(i)?e:i)&&0!==i;return s&&a&&(i=""),s&&!a?"":("number"==typeof i&&(i=i.toString(),u=!0),"Infinity"===i&&u&&(i=""),u&&!r&&"number"==typeof n&&(i=function(e,t,r){if(-1!==["","-"].indexOf(e))return e;var n=-1!==e.indexOf(".")&&t,o=h(e),a=o.beforeDecimal,c=o.afterDecimal,i=o.hasNagation,u=parseFloat("0.".concat(c||"0")).toFixed(t).split("."),s=a.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),u[0]),l=v(u[1]||"",Math.min(t,c.length),r),p=n?".":"";return"".concat(i?"-":"").concat(s).concat(p).concat(l)}(i,n,o)),u?this.formatNumString(i):this.formatInput(i))}},{key:"formatNegation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.allowNegative,r=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),o=r.test(e),a=n.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}},{key:"formatInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.props.format;return t||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)}},{key:"isCharacterAFormat",value:function(e,t){var r=this.props,n=r.format,o=r.prefix,a=r.suffix,c=r.decimalScale,i=r.fixedDecimalScale,u=this.getSeparators().decimalSeparator;return"string"==typeof n&&"#"!==n[e]||!(n||!(e<o.length||e>=t.length-a.length||c&&i&&t[e]===u))}},{key:"checkIfFormatGotDeleted",value:function(e,t,r){for(var n=e;n<t;n++)if(this.isCharacterAFormat(n,r))return!0;return!1}},{key:"correctInputValue",value:function(e,t,r){var n=this.props,o=n.format,a=n.allowNegative,c=n.prefix,i=n.suffix,u=n.decimalScale,s=this.getSeparators(),l=s.allowedDecimalSeparators,p=s.decimalSeparator,f=this.state.numAsString||"",m=this.selectionBeforeInput,d=m.selectionStart,b=m.selectionEnd,g=function(e,t){for(var r=0,n=0,o=e.length,a=t.length;e[r]===t[r]&&r<o;)r++;for(;e[o-1-n]===t[a-1-n]&&a-n>r&&o-n>r;)n++;return{start:r,end:o-n}}(t,r),v=g.start,y=g.end;if(!o&&v===y&&-1!==l.indexOf(r[d])){var O=0===u?"":p;return r.substr(0,d)+O+r.substr(d+1,r.length)}var w=o?0:c.length,_=t.length-(o?0:i.length);if(r.length>t.length||!r.length||v===y||0===d&&b===t.length||d===w&&b===_)return r;if(this.checkIfFormatGotDeleted(v,y,t)&&(r=t),!o){var j=this.removeFormatting(r),S=h(j,a),k=S.beforeDecimal,x=S.afterDecimal,E=S.addNegation,P=e<r.indexOf(p)+1;if(j.length<f.length&&P&&""===k&&!parseFloat(x))return E?"-":""}return r}},{key:"updateValue",value:function(e){var t=e.formattedValue,r=e.input,n=e.setCaretPosition,o=void 0===n||n,a=e.numAsString,c=e.caretPos,i=this.props.onValueChange,u=this.state.value;if(r)if(o){if(!c){var s=e.inputValue||r.value,l=w(r);r.value=t,c=this.getCaretPosition(s,t,l)}this.setPatchedCaretPosition(r,c,t)}else r.value=t;void 0===a&&(a=this.removeFormatting(t)),t!==u&&(this.setState({value:t,numAsString:a}),i(this.getValueObject(t,a)))}},{key:"onChange",value:function(e){var t=e.target,r=t.value,n=this.state,o=this.props,a=o.isAllowed,c=n.value||"",i=w(t);r=this.correctInputValue(i,c,r);var u=this.formatInput(r)||"",s=this.removeFormatting(u);a(this.getValueObject(u,s))||(u=c),this.updateValue({formattedValue:u,numAsString:s,inputValue:r,input:t}),o.onChange(e)}},{key:"onBlur",value:function(e){var t=this.props,r=this.state,n=t.format,o=t.onBlur,a=t.allowLeadingZeros,c=r.numAsString,i=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),!n){isNaN(parseFloat(c))&&(c=""),a||(c=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),n=r[0].replace(/^0+/,"")||"0",o=r[1]||"";return"".concat(t?"-":"").concat(n).concat(o?".".concat(o):"")}(c));var u=this.formatNumString(c);if(u!==i)return this.updateValue({formattedValue:u,numAsString:c,input:e.target,setCaretPosition:!1}),void o(e)}o(e)}},{key:"onKeyDown",value:function(e){var t,r=e.target,n=e.key,o=r.selectionStart,a=r.selectionEnd,c=r.value,i=void 0===c?"":c,u=this.props,s=u.decimalScale,l=u.fixedDecimalScale,p=u.prefix,f=u.suffix,m=u.format,d=u.onKeyDown,b=void 0!==s&&l,g=this.getNumberRegex(!1,b),h=new RegExp("-"),v="string"==typeof m;if(this.selectionBeforeInput={selectionStart:o,selectionEnd:a},"ArrowLeft"===n||"Backspace"===n?t=o-1:"ArrowRight"===n?t=o+1:"Delete"===n&&(t=o),void 0!==t&&o===a){var y=t,O=v?m.indexOf("#"):p.length,w=v?m.lastIndexOf("#")+1:i.length-f.length;if("ArrowLeft"===n||"ArrowRight"===n){var _="ArrowLeft"===n?"left":"right";y=this.correctCaretPosition(i,t,_)}else if("Delete"!==n||g.test(i[t])||h.test(i[t])){if("Backspace"===n&&!g.test(i[t]))if(o<=O+1&&"-"===i[0]&&void 0===m){var j=i.substring(1);this.updateValue({formattedValue:j,caretPos:y,input:r})}else if(!h.test(i[t])){for(;!g.test(i[y-1])&&y>O;)y--;y=this.correctCaretPosition(i,y,"left")}}else for(;!g.test(i[y])&&y<w;)y++;(y!==t||t<O||t>w)&&(e.preventDefault(),this.setPatchedCaretPosition(r,y,i)),e.isUnitTestRun&&this.setPatchedCaretPosition(r,y,i),d(e)}else d(e)}},{key:"onMouseUp",value:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,o=t.value,a=void 0===o?"":o;if(r===n){var c=this.correctCaretPosition(a,r);c!==r&&this.setPatchedCaretPosition(t,c,a)}this.props.onMouseUp(e)}},{key:"onFocus",value:function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var r=e.target,n=r.selectionStart,o=r.selectionEnd,a=r.value,c=void 0===a?"":a,i=t.correctCaretPosition(c,n);i===n||0===n&&o===c.length||t.setPatchedCaretPosition(r,i,c),t.props.onFocus(e)}),0)}},{key:"render",value:function(){var e,t,r,n=this.props,a=n.type,i=n.displayType,u=n.customInput,s=n.renderText,l=n.getInputRef,p=n.format,f=this.state.value,m=(e=this.props,t=_,r={},Object.keys(e).forEach((function(n){t[n]||(r[n]=e[n])})),r),d=c({inputMode:function(e){return e||!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(p)?"numeric":void 0},m,{type:a,value:f,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===i)return s?s(f)||null:o.a.createElement("span",c({},m,{ref:l}),f);if(u){var b=u;return o.a.createElement(b,c({},d,{ref:l}))}return o.a.createElement("input",c({},d,{ref:l}))}}])&&a(r.prototype,n),t}(o.a.Component);S.propTypes=_,S.defaultProps=j,t.a=S},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),o=r(94),a=r(5),c=r(17),i=r(39),u=r(64),s=r(25);const l=e=>{let{queryAttribute:t,queryPrices:r,queryStock:l,queryState:p}=e,f=Object(s.a)();f+="-collection-data";const[m]=Object(i.a)(f),[d,b]=Object(i.b)("calculate_attribute_counts",[],f),[g,h]=Object(i.b)("calculate_price_range",null,f),[v,y]=Object(i.b)("calculate_stock_status_counts",null,f),O=Object(c.a)(t||{}),w=Object(c.a)(r),_=Object(c.a)(l);Object(n.useEffect)(()=>{"object"==typeof O&&Object.keys(O).length&&(d.find(e=>e.taxonomy===O.taxonomy)||b([...d,O]))},[O,d,b]),Object(n.useEffect)(()=>{g!==w&&void 0!==w&&h(w)},[w,h,g]),Object(n.useEffect)(()=>{v!==_&&void 0!==_&&y(_)},[_,y,v]);const[j,S]=Object(n.useState)(!1),[k]=Object(o.a)(j,200);j||S(!0);const x=Object(n.useMemo)(()=>(e=>{const t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(a.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:r}=e;return{taxonomy:t,query_type:r}}),["taxonomy","query_type"])),t})(m),[m]);return Object(u.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...x},shouldSelect:k})}},15:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},159:function(e,t){},16:function(e,t,r){"use strict";var n=r(15),o=r.n(n),a=r(0),c=r(3),i=r(1),u=r(66),s=e=>{let{imageUrl:t=u.l+"/block-error.svg",header:r=Object(i.__)("Oops!",'woocommerce'),text:n=Object(i.__)("There was an error loading the content.",'woocommerce'),errorMessage:o,errorMessagePrefix:c=Object(i.__)("Error:",'woocommerce'),button:s}=e;return Object(a.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(a.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(a.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(a.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),n&&Object(a.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},n),o&&Object(a.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},c?c+" ":"",o),s&&Object(a.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},s)))};r(37);class l extends c.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(a.createElement)(a.Fragment,null,Object(a.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,text:n,errorMessagePrefix:o,renderError:c,button:i}=this.props,{errorMessage:u,hasError:l}=this.state;return l?"function"==typeof c?c({errorMessage:u}):Object(a.createElement)(s,{errorMessage:r?u:null,header:e,imageUrl:t,text:n,errorMessagePrefix:o,button:i}):this.props.children}}t.a=l},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(11),a=r.n(o);function c(e){const t=Object(n.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},179:function(e,t,r){e.exports=r(206)},180:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},206:function(e,t,r){"use strict";r.r(t);var n=r(53),o=r(0),a=r(62),c=r(39),i=r(133),u=r(1),s=r(4),l=r.n(s),p=r(96),f=r(35);r(180);const m=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],[a,c]=e;const i=e=>Number.isFinite(e);return i(a)||(a=t||0),i(c)||(c=r||n),i(t)&&t>a&&(a=t),i(r)&&r<=a&&(a=r-n),i(t)&&t>=c&&(c=t+n),i(r)&&r<c&&(c=r),!o&&a>=c&&(a=c-n),o&&c<=a&&(c=a+n),[a,c]};var d=r(72),b=e=>{let{minPrice:t,maxPrice:r,minConstraint:n,maxConstraint:a,onChange:c=(()=>{}),step:i,currency:s,showInputFields:b=!0,showFilterButton:g=!1,isLoading:h=!1,onSubmit:v=(()=>{})}=e;const y=Object(o.useRef)(null),O=Object(o.useRef)(null),w=i||10*10**s.minorUnit,[_,j]=Object(o.useState)(t),[S,k]=Object(o.useState)(r);Object(o.useEffect)(()=>{j(t)},[t]),Object(o.useEffect)(()=>{k(r)},[r]);const x=Object(o.useMemo)(()=>isFinite(n)&&isFinite(a),[n,a]),E=Object(o.useMemo)(()=>isFinite(t)&&isFinite(r)&&x?{"--low":Math.round((t-n)/(a-n)*100)-.5+"%","--high":Math.round((r-n)/(a-n)*100)+.5+"%"}:{"--low":"0%","--high":"100%"},[t,r,n,a,x]),P=Object(o.useCallback)(e=>{if(h||!x||!y.current||!O.current)return;const t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=y.current.offsetWidth,o=+y.current.value,c=O.current.offsetWidth,i=+O.current.value,u=n*(o/a),s=c*(i/a);Math.abs(r-u)>Math.abs(r-s)?(y.current.style.zIndex="20",O.current.style.zIndex="21"):(y.current.style.zIndex="21",O.current.style.zIndex="20")},[h,a,x]),N=Object(o.useCallback)(e=>{const o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=+e.target.value,u=o?[Math.round(i/w)*w,r]:[t,Math.round(i/w)*w],s=m(u,n,a,w,o);c(s)},[c,t,r,n,a,w]),T=Object(o.useCallback)(e=>{if(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))return;const t=e.target.classList.contains("wc-block-price-filter__amount--min"),r=m([_,S],null,null,w,t);c(r)},[c,w,_,S]),F=l()("wc-block-price-filter","wc-block-components-price-slider",b&&"wc-block-price-filter--has-input-fields",b&&"wc-block-components-price-slider--has-input-fields",g&&"wc-block-price-filter--has-filter-button",g&&"wc-block-components-price-slider--has-filter-button",h&&"is-loading",!x&&"is-disabled"),C=Object(f.c)(y.current)?y.current.ownerDocument.activeElement:void 0,R=C&&C===y.current?w:1,A=C&&C===O.current?w:1,D=String(_/10**s.minorUnit),M=String(S/10**s.minorUnit);return Object(o.createElement)("div",{className:F},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:P,onFocus:P},x&&Object(o.createElement)("div",{"aria-hidden":b},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:E}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(u.__)("Filter products by minimum price",'woocommerce'),"aria-valuetext":D,value:Number.isFinite(t)?t:n,onChange:N,step:R,min:n,max:a,ref:y,disabled:h,tabIndex:b?-1:0}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(u.__)("Filter products by maximum price",'woocommerce'),"aria-valuetext":M,value:Number.isFinite(r)?r:a,onChange:N,step:A,min:n,max:a,ref:O,disabled:h,tabIndex:b?-1:0}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},b&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(u.__)("Filter products by minimum price",'woocommerce'),onValueChange:e=>{e!==_&&j(e)},onBlur:T,disabled:h||!x,value:_}),Object(o.createElement)(p.a,{currency:s,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(u.__)("Filter products by maximum price",'woocommerce'),onValueChange:e=>{e!==S&&k(e)},onBlur:T,disabled:h||!x,value:S})),!b&&!h&&Number.isFinite(t)&&Number.isFinite(r)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(u.__)("Price",'woocommerce'),":  ",Object(o.createElement)(p.a,{currency:s,value:t})," – ",Object(o.createElement)(p.a,{currency:s,value:r})),g&&Object(o.createElement)(d.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:h||!x,onClick:v,screenReaderLabel:Object(u.__)("Apply price filter",'woocommerce')})))},g=r(52),h=(r(8),r(40));const v=(e,t,r)=>{const n=10*10**t;let o;"ROUND_UP"===r?o=isNaN(e)?null:Math.ceil(parseFloat(e,10)/n)*n:"ROUND_DOWN"===r&&(o=isNaN(e)?null:Math.floor(parseFloat(e,10)/n)*n);const c=Object(a.a)(o,Number.isFinite);return Number.isFinite(o)?o:c};Object(n.a)({selector:".wp-block-woocommerce-price-filter",Block:e=>{let{attributes:t,isEditor:r=!1}=e;const[n,u]=Object(c.b)("min_price",null),[s,l]=Object(c.b)("max_price",null),[p]=Object(c.a)(),{results:f,isLoading:m}=Object(i.a)({queryPrices:!0,queryState:p}),[d,y]=Object(o.useState)(),[O,w]=Object(o.useState)(),_=Object(h.getCurrencyFromPriceResponse)(f.price_range),{minConstraint:j,maxConstraint:S}=(e=>{let{minPrice:t,maxPrice:r,minorUnit:n}=e;return{minConstraint:v(t,n,"ROUND_DOWN"),maxConstraint:v(r,n,"ROUND_UP")}})({minPrice:f.price_range?f.price_range.min_price:void 0,maxPrice:f.price_range?f.price_range.max_price:void 0,minorUnit:_.minorUnit}),k=Object(o.useCallback)((e,t)=>{u(e===j?void 0:e),l(t===S?void 0:t)},[j,S,u,l]),x=Object(g.a)(k,500),E=Object(o.useCallback)(e=>{e[0]!==d&&y(e[0]),e[1]!==O&&w(e[1])},[d,O,y,w]);Object(o.useEffect)(()=>{t.showFilterButton||x(d,O)},[d,O,t.showFilterButton,x]);const P=Object(a.a)(n),N=Object(a.a)(s),T=Object(a.a)(j),F=Object(a.a)(S);if(Object(o.useEffect)(()=>{(!Number.isFinite(d)||n!==P&&n!==d||j!==T&&j!==d)&&y(Number.isFinite(n)?n:j),(!Number.isFinite(O)||s!==N&&s!==O||S!==F&&S!==O)&&w(Number.isFinite(s)?s:S)},[d,O,n,s,j,S,T,F,P,N]),!m&&(null===j||null===S||j===S))return null;const C="h"+t.headingLevel;return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(C,{className:"wc-block-price-filter__title"},t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(b,{minConstraint:j,maxConstraint:S,minPrice:d,maxPrice:O,currency:_,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:E,onSubmit:()=>k(d,O),isLoading:m})))},getProps:e=>({attributes:{showInputFields:"true"===e.dataset.showinputfields,showFilterButton:"true"===e.dataset.showfilterbutton},isEditor:!1})})},21:function(e,t,r){"use strict";var n=r(0),o=r(4),a=r.n(o);t.a=e=>{let t,{label:r,screenReaderLabel:o,wrapperElement:c,wrapperProps:i={}}=e;const u=null!=r,s=null!=o;return!u&&s?(t=c||"span",i={...i,className:a()(i.className,"screen-reader-text")},Object(n.createElement)(t,i,o)):(t=c||n.Fragment,u&&s&&r!==o?Object(n.createElement)(t,i,Object(n.createElement)("span",{"aria-hidden":"true"},r),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,i,r))}},25:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);const o=Object(n.createContext)("page"),a=()=>Object(n.useContext)(o);o.Provider},3:function(e,t){e.exports=window.React},35:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return i}));const n=e=>"number"==typeof e,o=e=>"string"==typeof e,a=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return a(e)&&t in e}const i=e=>"boolean"==typeof e},37:function(e,t){},39:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m}));var n=r(6),o=r(9),a=r(0),c=r(11),i=r.n(c),u=r(17),s=r(62),l=r(25);const p=e=>{const t=Object(l.a)();e=e||t;const r=Object(o.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:c}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,Object(a.useCallback)(t=>{c(e,t)},[e,c])]},f=(e,t,r)=>{const c=Object(l.a)();r=r||c;const i=Object(o.useSelect)(o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t),[r,e]),{setQueryValue:u}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[i,Object(a.useCallback)(t=>{u(r,e,t)},[r,e,u])]},m=(e,t)=>{const r=Object(l.a)();t=t||r;const[n,o]=p(t),c=Object(u.a)(n),f=Object(u.a)(e),m=Object(s.a)(f),d=Object(a.useRef)(!1);return Object(a.useEffect)(()=>{i()(m,f)||(o(Object.assign({},c,f)),d.current=!0)},[c,f,m,o]),d.current?[n,o]:[e,o]}},4:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},40:function(e,t){e.exports=window.wc.priceFormat},42:function(e,t,r){"use strict";var n=r(43);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},43:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5:function(e,t){e.exports=window.lodash},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3);function o(e,t,r){var o=this,a=Object(n.useRef)(null),c=Object(n.useRef)(0),i=Object(n.useRef)(null),u=Object(n.useRef)([]),s=Object(n.useRef)(),l=Object(n.useRef)(),p=Object(n.useRef)(e),f=Object(n.useRef)(!0);p.current=e;var m=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var d=!!(r=r||{}).leading,b=!("trailing"in r)||!!r.trailing,g="maxWait"in r,h=g?Math.max(+r.maxWait||0,t):null;return Object(n.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]),Object(n.useMemo)((function(){var e=function(e){var t=u.current,r=s.current;return u.current=s.current=null,c.current=e,l.current=p.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(i.current),i.current=m?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-a.current,n=e-c.current;return!a.current||r>=t||r<0||g&&n>=h},v=function(t){return i.current=null,b&&u.current?e(t):(u.current=s.current=null,l.current)},y=function(){var e=Date.now();if(n(e))return v(e);if(f.current){var o=e-a.current,i=e-c.current,u=t-o,s=g?Math.min(u,h-i):u;r(y,s)}},O=function(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];var b=Date.now(),h=n(b);if(u.current=p,s.current=o,a.current=b,h){if(!i.current&&f.current)return c.current=a.current,r(y,t),d?e(a.current):l.current;if(g)return r(y,t),e(a.current)}return i.current||r(y,t),l.current};return O.cancel=function(){i.current&&(m?cancelAnimationFrame(i.current):clearTimeout(i.current)),c.current=0,u.current=a.current=s.current=i.current=null},O.isPending=function(){return!!i.current},O.flush=function(){return i.current?v(Date.now()):l.current},O}),[d,g,t,h,b,m])}},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(10),o=r.n(n),a=r(0),c=r(16);const i=[".wp-block-woocommerce-cart"],u=e=>{let{Block:t,containers:r,getProps:n=(()=>({})),getErrorBoundaryProps:i=(()=>({}))}=e;0!==r.length&&Array.prototype.forEach.call(r,(e,r)=>{const u=n(e,r),s=i(e,r),l={...e.dataset,...u.attributes||{}};(e=>{let{Block:t,container:r,attributes:n={},props:i={},errorBoundaryProps:u={}}=e;Object(a.render)(Object(a.createElement)(c.a,u,Object(a.createElement)(a.Suspense,{fallback:Object(a.createElement)("div",{className:"wc-block-placeholder"})},t&&Object(a.createElement)(t,o()({},i,{attributes:n})))),r,()=>{r.classList&&r.classList.remove("is-loading")})})({Block:t,container:e,props:u,attributes:l,errorBoundaryProps:s})})},s=e=>{const t=document.body.querySelectorAll(i.join(",")),{Block:r,getProps:n,getErrorBoundaryProps:o,selector:a}=e;(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:o,wrappers:a}=e;const c=document.body.querySelectorAll(o);a&&a.length>0&&Array.prototype.filter.call(c,e=>!((e,t)=>Array.prototype.some.call(t,t=>t.contains(e)&&!t.isSameNode(e)))(e,a)),u({Block:t,containers:c,getProps:r,getErrorBoundaryProps:n})})({Block:r,getProps:n,getErrorBoundaryProps:o,selector:a,wrappers:t}),Array.prototype.forEach.call(t,t=>{t.addEventListener("wc-blocks_render_blocks_frontend",()=>{(e=>{let{Block:t,getProps:r,getErrorBoundaryProps:n,selector:o,wrapper:a}=e;const c=a.querySelectorAll(o);u({Block:t,containers:c,getProps:r,getErrorBoundaryProps:n})})({...e,wrapper:t})})})}},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const o=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},6:function(e,t){e.exports=window.wc.wcBlocksData},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(3);function o(e,t){const r=Object(n.useRef)();return Object(n.useEffect)(()=>{r.current===e||t&&!t(e,r.current)||(r.current=e)},[e,t]),r.current}},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(6),o=r(9),a=r(0),c=r(17),i=r(54);const u=e=>{const{namespace:t,resourceName:r,resourceValues:u=[],query:s={},shouldSelect:l=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const p=Object(a.useRef)({results:[],isLoading:!0}),f=Object(c.a)(s),m=Object(c.a)(u),d=Object(i.a)(),b=Object(o.useSelect)(e=>{if(!l)return null;const o=e(n.COLLECTIONS_STORE_KEY),a=[t,r,f,m],c=o.getCollectionError(...a);return c&&d(c),{results:o.getCollection(...a),isLoading:!o.hasFinishedResolution("getCollection",a)}},[t,r,m,f,l]);return null!==b&&(p.current=b),p.current}},66:function(e,t,r){"use strict";r.d(t,"n",(function(){return a})),r.d(t,"l",(function(){return c})),r.d(t,"k",(function(){return i})),r.d(t,"m",(function(){return u})),r.d(t,"i",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return p})),r.d(t,"j",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"e",(function(){return d})),r.d(t,"g",(function(){return b})),r.d(t,"a",(function(){return g})),r.d(t,"h",(function(){return h})),r.d(t,"b",(function(){return v}));var n,o=r(2);const a=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),c=a.pluginUrl+"images/",i=a.pluginUrl+"build/",u=a.buildPhase,s=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=(o.STORE_PAGES.checkout.id,o.STORE_PAGES.checkout.permalink),p=o.STORE_PAGES.privacy.permalink,f=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),m=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id,o.STORE_PAGES.cart.permalink),d=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),b=Object(o.getSetting)("shippingCountries",{}),g=Object(o.getSetting)("allowedCountries",{}),h=Object(o.getSetting)("shippingStates",{}),v=Object(o.getSetting)("allowedStates",{})},72:function(e,t,r){"use strict";var n=r(0),o=r(1),a=(r(8),r(4)),c=r.n(a),i=r(21);r(102);const u=e=>{let{className:t,disabled:r,label:
/* translators: Submit button text for filters. */
a=Object(o.__)("Go",'woocommerce'),onClick:u,screenReaderLabel:s=Object(o.__)("Apply filter",'woocommerce')}=e;return Object(n.createElement)("button",{type:"submit",className:c()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:r,onClick:u},Object(n.createElement)(i.a,{label:a,screenReaderLabel:s}))};u.defaultProps={disabled:!1},t.a=u},8:function(e,t,r){e.exports=r(42)()},9:function(e,t){e.exports=window.wp.data},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(3),o=r(52);function a(e,t){return e===t}function c(e){return"function"==typeof e?function(){return e}:e}function i(e,t,r){var i=r&&r.equalityFn||a,u=function(e){var t=Object(n.useState)(c(e)),r=t[0],o=t[1];return[r,Object(n.useCallback)((function(e){return o(c(e))}),[])]}(e),s=u[0],l=u[1],p=Object(o.a)(Object(n.useCallback)((function(e){return l(e)}),[l]),t,r),f=Object(n.useRef)(e);return i(f.current,e)||(p(e),f.current=e),[s,p]}},96:function(e,t,r){"use strict";var n=r(10),o=r.n(n),a=r(0),c=r(131),i=r(4),u=r.n(i);r(159);const s=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:r,currency:n,onValueChange:i,displayType:l="text",...p}=e;const f="string"==typeof r?parseInt(r,10):r;if(!Number.isFinite(f))return null;const m=f/10**n.minorUnit;if(!Number.isFinite(m))return null;const d=u()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),b={...p,...s(n),value:void 0,currency:void 0,onValueChange:void 0},g=i?e=>{const t=+e.value*10**n.minorUnit;i(t)}:()=>{};return Object(a.createElement)(c.a,o()({className:d,displayType:l},b,{value:m,onValueChange:g}))}}});