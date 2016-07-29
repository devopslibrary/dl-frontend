(function(){var g,aa=aa||{},l=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||l;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.U?a.U:a.U=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function u(a){return"array"==ca(a)}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function ea(a){return"number"==typeof a}
function fa(a){return"function"==ca(a)}
function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ha(a){return a[ia]||(a[ia]=++ja)}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return w.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qe=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function na(a){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(na,Error);na.prototype.name="CustomError";var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a){return decodeURIComponent(a.replace(/\+/g," "))}
var ra=/&/g,sa=/</g,ta=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,ya=/[\x00&<>"']/;function za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Aa,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ba(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Aa=/&([^;\s<&]+);?/g,Ca={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Da={"'":"\\'"};
function Ea(a,b){for(var c=0,d=pa(String(a)).split("."),e=pa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",m=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),Z=RegExp("(\\d*)(\\D*)","g");do{var ua=n.exec(k)||["","",""],Hc=Z.exec(m)||["","",""];if(0==ua[0].length&&0==Hc[0].length)break;c=Fa(0==ua[1].length?0:parseInt(ua[1],10),0==Hc[1].length?0:parseInt(Hc[1],10))||Fa(0==ua[2].length,0==Hc[2].length)||Fa(ua[2],Hc[2])}while(0==c)}return c}
function Fa(a,b){return a<b?-1:a>b?1:0}
function Ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];
b.call(c,m,k,a)&&(e[f++]=m)}return e},Ja=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},Ka=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},La=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Ma(a,b,c){b=Na(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Na(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=Ha(a,b)}
function Oa(a,b){A(a,b)||a.push(b)}
function Pa(a,b){var c=Ha(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Qa(a,b){var c=Na(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ua(a,b,c,d){return Array.prototype.splice.apply(a,Va(arguments,1))}
function Va(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Wa(a,b){return a>b?1:a<b?-1:0}
;function Xa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Ya(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function Za(a){var b=0,c;for(c in a)b++;return b}
function $a(a,b){return ab(a,b)}
function bb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function ab(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ib(a){var b=ca(a);if("object"==b||"array"==b){if(fa(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=ib(a[c]);return b}return a}
var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var lb;a:{var mb=l.navigator;if(mb){var nb=mb.userAgent;if(nb){lb=nb;break a}}lb=""}function B(a){return-1!=lb.indexOf(a)}
;function ob(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function pb(){this.b="";this.f=qb}
pb.prototype.kc=!0;pb.prototype.ic=function(){return this.b};
function rb(a){if(a instanceof pb&&a.constructor===pb&&a.f===qb)return a.b;ca(a);return"type_error:SafeUrl"}
var sb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function tb(a){if(a instanceof pb)return a;a=a.kc?a.ic():String(a);sb.test(a)||(a="about:invalid#zClosurez");return ub(a)}
var qb={};function ub(a){var b=new pb;b.b=a;return b}
ub("about:blank");function vb(){this.b="";this.f=wb}
vb.prototype.kc=!0;vb.prototype.ic=function(){return this.b};
function xb(a){if(a instanceof vb&&a.constructor===vb&&a.f===wb)return a.b;ca(a);return"type_error:SafeHtml"}
var wb={};function yb(a){var b=new vb;b.b=a;return b}
yb("<!DOCTYPE html>");yb("");yb("<br>");function zb(a,b){var c;c=b instanceof pb?b:tb(b);a.href=rb(c)}
;function Ab(a,b,c){a&&(a.dataset?a.dataset[Bb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Bb(b)]:a.getAttribute("data-"+b):null}
function Cb(a,b){a&&(a.dataset?delete a.dataset[Bb(b)]:a.removeAttribute("data-"+b))}
var Db={};function Bb(a){return Db[a]||(Db[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Eb(a){l.setTimeout(function(){throw a;},0)}
var Fb;
function Gb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.bc;c.bc=null;a()}};
return function(a){d.next={bc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
;function Hb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Hb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Ib(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Jb(){this.f=this.b=null}
var Lb=new Hb(function(){return new Kb},function(a){a.reset()},100);
Jb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Kb(){this.next=this.scope=this.b=null}
Kb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Kb.prototype.reset=function(){this.next=this.scope=this.b=null};function Mb(a,b){Nb||Ob();Pb||(Nb(),Pb=!0);var c=Qb,d=Lb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Nb;function Ob(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Nb=function(){a.then(Rb)}}else Nb=function(){var a=Rb;
!fa(l.setImmediate)||l.Window&&l.Window.prototype&&!B("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Fb||(Fb=Gb()),Fb(a)):l.setImmediate(a)}}
var Pb=!1,Qb=new Jb;function Rb(){for(var a;a=Qb.remove();){try{a.b.call(a.scope)}catch(b){Eb(b)}Ib(Lb,a)}Pb=!1}
;function D(){this.Ha=this.Ha;this.R=this.R}
D.prototype.Ha=!1;D.prototype.C=function(){return this.Ha};
D.prototype.dispose=function(){this.Ha||(this.Ha=!0,this.w())};
function Sb(a,b){a.Ha?p(void 0)?b.call(void 0):b():(a.R||(a.R=[]),a.R.push(p(void 0)?w(b,void 0):b))}
D.prototype.w=function(){if(this.R)for(;this.R.length;)this.R.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Tb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Tb.apply(null,d):E(d)}}
;function F(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.fa={};this.j=!!a}
y(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.fa[a];d||(d=this.fa[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.fa[a]){var d=this.b;if(a=Ma(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.ka(a)}return!1};
g.ka=function(a){var b=this.b[a];if(b){var c=this.fa[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Pa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.u=function(a,b){var c=this.fa[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];Ub(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.ka(c)}}return 0!=e}return!1};
function Ub(a,b,c){Mb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.fa[a];b&&(z(b,this.ka,this),delete this.fa[a])}else this.b.length=0,this.fa={}};
g.S=function(a){if(a){var b=this.fa[a];return b?b.length:0}a=0;for(b in this.fa)a+=this.S(b);return a};
g.w=function(){F.B.w.call(this);this.clear();this.f.length=0};var Vb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Vb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Wb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Wb,void 0);function Xb(a){Yb(Vb,arguments)}
function G(a,b){return a in Vb?Vb[a]:b}
function H(a,b){fa(a)&&(a=Zb(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function Zb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw $b(b),b;}}:a}
function $b(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Xb("ERRORS",c))}
function Yb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var ac=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},bc="Microsoft Internet Explorer"==navigator.appName;var cc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ka;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",cc,void 0);var dc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",dc,void 0);var ec=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",ec,void 0);var fc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",fc,void 0);
var gc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",gc,void 0);function hc(a,b,c){var d=ic();if(d){var e=d.subscribe(a,function(){if(!gc||gc!=e){var d=arguments,h;h=function(){dc[e]&&b.apply(c||window,d)};
try{fc[a]?h():H(h,0)}catch(k){$b(k)}}},c);
dc[e]=!0;ec[a]||(ec[a]=[]);ec[a].push(e);return e}return 0}
function jc(a){var b=ic();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete dc[a]}))}
function J(a,b){var c=ic();return c?c.publish.apply(c,arguments):!1}
function kc(a,b){fc[a]=!0;var c=ic();c&&c.publish.apply(c,arguments);fc[a]=!1}
function lc(a){ec[a]&&(a=ec[a],z(a,function(a){dc[a]&&delete dc[a]}),a.length=0)}
function mc(a){var b=ic();if(b)if(b.clear(a),a)lc(a);else for(var c in ec)lc(c)}
function ic(){return r("yt.pubsub.instance_")}
;function nc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(oc,""),c=c.replace(pc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else qc(a,b)}
function qc(a,b){var c=rc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e){b&&b();return}if(b){var e=hc(c,b),h=""+ha(b);sc[h]=e}if(f)return;d=tc(a,c,function(){C(d,"loaded")||(Ab(d,"loaded","true"),J(c),H(ma(mc,c),0))})}
function tc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function uc(a,b){if(a&&b){var c=""+ha(b);(c=sc[c])&&jc(c)}}
function rc(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ga(a)}
var oc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,sc={};var vc=null;function wc(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?nc(b,function(){vc=new botguard.bg(c)}):a&&(eval(a),vc=new botguard.bg(c))}
function xc(){return null!=vc}
function yc(){return vc?vc.invoke():null}
;var zc="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Ac(){}
Ac.prototype.next=function(){throw zc;};
Ac.prototype.oa=function(){return this};
function Bc(a){if(a instanceof Ac)return a;if("function"==typeof a.oa)return a.oa(!1);if(da(a)){var b=0,c=new Ac;c.next=function(){for(;;){if(b>=a.length)throw zc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Cc(a,b,c){if(da(a))try{z(a,b,c)}catch(d){if(d!==zc)throw d;}else{a=Bc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==zc)throw d;}}}
function Dc(a){if(da(a))return Sa(a);a=Bc(a);var b=[];Cc(a,function(a){b.push(a)});
return b}
;function Ec(a,b){this.f={};this.b=[];this.xa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Ec?(c=a.ma(),d=a.T()):(c=cb(a),d=bb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Ec.prototype;g.S=function(){return this.g};
g.T=function(){Fc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.ma=function(){Fc(this);return this.b.concat()};
g.Ya=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Gc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.S())return!1;var c=b||Ic;Fc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ic(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.xa=this.g=this.b.length=0};
g.remove=function(a){return Gc(this.f,a)?(delete this.f[a],this.g--,this.xa++,this.b.length>2*this.g&&Fc(this),!0):!1};
function Fc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Gc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Gc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Gc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Gc(this.f,a)||(this.g++,this.b.push(a),this.xa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.ma(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Ec(this)};
g.oa=function(a){Fc(this);var b=0,c=this.xa,d=this,e=new Ac;e.next=function(){if(c!=d.xa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw zc;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Gc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Jc(a){return a.S&&"function"==typeof a.S?a.S():da(a)||v(a)?a.length:Za(a)}
function Kc(a){if(a.T&&"function"==typeof a.T)return a.T();if(v(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return bb(a)}
function Lc(a){if(a.ma&&"function"==typeof a.ma)return a.ma();if(!a.T||"function"!=typeof a.T){if(da(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return cb(a)}}
function Mc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||v(a))z(a,b,c);else for(var d=Lc(a),e=Kc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Nc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(da(a)||v(a))return La(a,b,void 0);for(var c=Lc(a),d=Kc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Oc(a){this.b=new Ec;a&&Pc(this,a)}
function Qc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ha(a):b.substr(0,1)+a}
g=Oc.prototype;g.S=function(){return this.b.S()};
function Pc(a,b){for(var c=Kc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Qc(f),f)}}
g.remove=function(a){return this.b.remove(Qc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Qc(a);return Gc(this.b.f,a)};
g.T=function(){return this.b.T()};
g.clone=function(){return new Oc(this)};
g.equals=function(a){return this.S()==Jc(a)&&Rc(this,a)};
function Rc(a,b){var c=Jc(b);if(a.S()>c)return!1;!(b instanceof Oc)&&5<c&&(b=new Oc(b));return Nc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Ya&&"function"==typeof c.Ya?c.Ya(a):da(c)||v(c)?A(c,a):ab(c,a)})}
g.oa=function(){return this.b.oa(!1)};function Sc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var Tc=B("Opera"),K=B("Trident")||B("MSIE"),Uc=B("Edge"),Vc=B("Gecko")&&!(-1!=lb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),Wc=-1!=lb.toLowerCase().indexOf("webkit")&&!B("Edge"),Xc=B("Windows");function Yc(){var a=l.document;return a?a.documentMode:void 0}
var Zc;a:{var $c="",ad=function(){var a=lb;if(Vc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Uc)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wc)return/WebKit\/(\S+)/.exec(a);if(Tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ad&&($c=ad?ad[1]:"");if(K){var bd=Yc();if(null!=bd&&bd>parseFloat($c)){Zc=String(bd);break a}}Zc=$c}var cd=Zc,dd={};function ed(a){return dd[a]||(dd[a]=0<=Ea(cd,a))}
function fd(a){return Number(gd)>=a}
var hd=l.document,gd=hd&&K?Yc()||("CSS1Compat"==hd.compatMode?parseInt(cd,10):5):void 0;function id(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function jd(a){return eval("("+a+")")}
function L(a){return kd(new ld(void 0),a)}
function ld(a){this.b=a}
function kd(a,b){var c=[];md(a,b,c);return c.join("")}
function md(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(u(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],md(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),nd(d,c),c.push(":"),md(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":nd(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var od={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function nd(a,b){b.push('"',a.replace(pd,function(a){var b=od[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),od[a]=b);return b}),'"')}
;var qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function rd(a){return a?decodeURI(a):a}
function sd(a,b){return b.match(qd)[a]||null}
function td(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?qa(h):"")}}
function ud(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function vd(a,b,c){if(u(b))for(var d=0;d<b.length;d++)vd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function wd(a,b,c){for(c=c||0;c<b.length;c+=2)vd(b[c],b[c+1],a);return a}
function xd(a,b){for(var c in b)vd(c,b[c],a);return a}
function yd(a){a=xd([],a);a[0]="";return a.join("")}
function zd(a,b){return ud(2==arguments.length?wd([a],arguments[1],0):wd([a],arguments,1))}
function Ad(a,b){return ud(xd([a],b))}
;function Bd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=qa(e[0]||""),e=qa(e[1]||"");f in b?u(b[f])?Ta(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Cd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Bd(d[1]||""),e;for(e in b)d[e]=b[e];return Ad(a,d)+c}
;var Dd=null;"undefined"!=typeof XMLHttpRequest?Dd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Dd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Ed(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Fd(a,b,c,d,e,f,h){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Zb(b)(m)}
var m=Dd&&Dd();if(!("open"in m))return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);f="POST"==c;if(e=Gd(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
function Gd(a,b){b=b||{};var c;c||(c=window.location.href);var d=sd(1,a),e=rd(sd(3,a));d&&e?(d=c,c=a.match(qd),d=d.match(qd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?rd(sd(3,c))==e&&(Number(sd(4,c))||null)==(Number(sd(4,a))||null):!0;for(var f in Hd){if((e=d=G(Hd[f]))&&!(e=c)){var e=f,h=G("CORS_HEADER_WHITELIST")||{},k=rd(sd(3,a));e=k?(h=h[k])?A(h,e):!1:!0}e&&(b[f]=d)}return b}
function Id(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Se&&(!rd(sd(3,a))||b.withCredentials||rd(sd(3,a))==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.V&&b.V[c])}
function Jd(a,b){var c=b.format||"JSON";b.Te&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.Sb;f&&(f[d]&&delete f[d],a=Cd(a,f||{}));var h=b.postBody||"",f=b.V;Id(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Bd(h),kb(d,f),h=b.be&&"JSON"==b.be?JSON.stringify(d):yd(d));var k=!1,m,n=Fd(a,function(a){if(!k){k=!0;m&&I(m);var d=Ed(a),e=null;if(d||400<=a.status&&500>a.status)e=
Kd(c,a,b.Re);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||l;d?b.ea&&b.ea.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ob&&b.Ob.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Fa&&0<b.timeout&&(m=H(function(){k||(k=!0,n.abort(),I(m),b.Fa.call(b.context||l,n))},b.timeout));
return n}
function Kd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=jd(a));break;case "XML":if(b=(b=b.responseXML)?Ld(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Md(a)})}c&&Nd(d);
return d}
function Nd(a){if(ga(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=yb(a[b]);a[c]=d}else Nd(a[b])}}
function Ld(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Md(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Hd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Od={},Pd=0;function Qd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):H(a,b||0)}
;var Rd=[],Sd=!1;function Td(){function a(){Sd=!0;"google_ad_status"in window?Xb("DCLKSTAT",1):Xb("DCLKSTAT",2)}
nc("//static.doubleclick.net/instream/ad_status.js",a);Rd.push(Qd(function(){Sd||"google_ad_status"in window||(uc("//static.doubleclick.net/instream/ad_status.js",a),Xb("DCLKSTAT",3))},5E3))}
function Ud(){return parseInt(G("DCLKSTAT",0),10)}
;function Vd(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function Wd(a,b){return a.classList?a.classList.contains(b):A(Vd(a),b)}
function Xd(a,b){a.classList?a.classList.add(b):Wd(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Yd(a,b){a.classList?a.classList.remove(b):Wd(a,b)&&(a.className=Ia(Vd(a),function(a){return a!=b}).join(" "))}
function Zd(a,b,c){c?Xd(a,b):Yd(a,b)}
;function $d(a,b){this.H=p(a)?a:0;this.I=p(b)?b:0}
$d.prototype.clone=function(){return new $d(this.H,this.I)};
$d.prototype.ceil=function(){this.H=Math.ceil(this.H);this.I=Math.ceil(this.I);return this};
$d.prototype.floor=function(){this.H=Math.floor(this.H);this.I=Math.floor(this.I);return this};
$d.prototype.round=function(){this.H=Math.round(this.H);this.I=Math.round(this.I);return this};function ae(a,b){this.width=a;this.height=b}
g=ae.prototype;g.clone=function(){return new ae(this.width,this.height)};
g.ad=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.ad()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!Vc&&!K||K&&fd(9)||Vc&&ed("1.9.1");var be=K&&!ed("9");function ce(a){return a?new de(ee(a)):oa||(oa=new de)}
function fe(a){var b=document;return v(a)?b.getElementById(a):a}
function ge(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):he(a)}
function he(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className;"function"==typeof h.split&&A(h.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function ie(a){var b=a.scrollingElement?a.scrollingElement:!Wc&&je(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&ed("10")&&a.pageYOffset!=b.scrollTop?new $d(b.scrollLeft,b.scrollTop):new $d(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function je(a){return"CSS1Compat"==a.compatMode}
function ke(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function le(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function me(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ee(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ne(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else ke(a),a.appendChild(ee(a).createTextNode(String(b)))}
var oe={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},pe={IMG:" ",BR:"\n"};function qe(a){if(be&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];re(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");be||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function re(a,b,c){if(!(a.nodeName in oe))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in pe)b.push(pe[a.nodeName]);else for(a=a.firstChild;a;)re(a,b,c),a=a.nextSibling}
function se(a){var b=te.Rc;return b?ue(a,function(a){return!b||v(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function ue(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function de(a){this.b=a||l.document||document}
g=de.prototype;g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=function(a){return ga(a)&&1==a.nodeType};
g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ve=r("yt.dom.getNextId_");if(!ve){ve=function(){return++we};
q("yt.dom.getNextId_",ve,void 0);var we=0}function xe(){var a=document,b;Ka(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function ye(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in ze||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ye.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ye.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ye.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var ze={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var eb=r("yt.events.listeners_")||{};q("yt.events.listeners_",eb,void 0);var Ae=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Ae,void 0);function Be(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Be(a,b,c,d);if(e)return e;var e=++Ae.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new ye(d);if(!ue(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ye(b);
b.currentTarget=a;return c.call(a,b)};
h=Zb(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);eb[e]=[a,b,c,h,d];return e}
function Ce(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in eb){var c=eb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[a]}}))}
;function De(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ee();M(document,"keydown",Ee);M(document,"keyup",Ee);M(document,"mousedown",Ee);M(document,"mouseup",Ee);hc("page-mouse",Ee);hc("page-scroll",Ee);hc("page-resize",Ee)}}
function Ee(){null==r("_lact",window)&&(De(),r("_lact",window));var a=x();q("_lact",a,window);J("USER_ACTIVE")}
function Fe(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Ge(){}
;var He={};function Ie(a){this.b=a||{cookie:""}}
var Je=/\s*;\s*/;g=Ie.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Je),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ma=function(){return Ke(this).keys};
g.T=function(){return Ke(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.S=function(){return this.b.cookie?(this.b.cookie||"").split(Je).length:0};
g.Ya=function(a){for(var b=Ke(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Ke(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ke(a){a=(a.b.cookie||"").split(Je);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Le=new Ie("undefined"==typeof document?null:document);Le.f=3950;function Me(a,b,c){Le.set(""+a,b,c,"/","youtube.com")}
;function Ne(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=rd(sd(3,window.location.href));e&&d.push(e);e=rd(sd(3,a));if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(qd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d="ST-"+Ga(d).toString(36),e=b?yd(b):"",Me(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),b&&d&&d(new Ge))}}if(c)return!1;
(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Ad(a,{})+"",a=a instanceof pb?a:tb(a),c.href=rb(a));return!0}
;function Oe(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||hb(Pe);this.assets=a.assets||{};this.attrs=a.attrs||hb(Qe);this.params=a.params||hb(Re);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Pe={enablejsapi:1},Qe={},Re={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Se(a){a instanceof Oe||(a=new Oe(a));return a}
Oe.prototype.clone=function(){var a=new Oe,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=hb(c):a[b]=c}return a};function Te(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=Te.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new Te(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof Te?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.H>=this.left&&a.H<=this.right&&a.I>=this.top&&a.I<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Ue(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=Ue.prototype;g.clone=function(){return new Ue(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof $d?a.H>=this.left&&a.H<=this.left+this.width&&a.I>=this.top&&a.I<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ve(a){Ve[" "](a);return a}
Ve[" "]=t;function We(a,b){var c=ee(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Xe(a,b){return We(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ye(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ze(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function $e(a){var b=af;if("none"!=Xe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function af(a){var b=a.offsetWidth,c=a.offsetHeight,d=Wc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ae(b,c):(a=Ye(a),new ae(a.right-a.left,a.bottom-a.top))}
function bf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function cf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?bf(a,c):0}
var df={thin:2,medium:4,thick:6};function ef(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in df?df[c]:bf(a,c)}
;var ff=B("Firefox"),gf=Sc()||B("iPod"),hf=B("iPad"),jf=B("Android")&&!(ob()||B("Firefox")||B("Opera")||B("Silk")),kf=ob(),lf=B("Safari")&&!(ob()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(Sc()||B("iPad")||B("iPod"));function mf(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,m,n;if(bc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(Z){h=null}else m=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=m.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(Z){k=""}m&&n&&m.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(mf);function nf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function of(a){if(window.spf){var b=a.match(pf);spf.style.load(a,b?b[1]:"",void 0)}else qf(a)}
function qf(a){var b=rf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=sf(a,b,function(){C(c,"loaded")||(Ab(c,"loaded","true"),J(b),H(ma(mc,b),0))}))}
function sf(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function rf(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ga(a)}
var pf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var tf;var uf=lb,uf=uf.toLowerCase();if(-1!=uf.indexOf("android")){var vf=uf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(vf)tf=Number(vf[1]);else{var wf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},xf=uf.match("("+cb(wf).join("|")+")");tf=xf?wf[xf[0]]:0}}else tf=void 0;var yf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],zf=['audio/mp4; codecs="mp4a.40.2"'];function Af(a){D.call(this);this.b=[];this.f=a||this}
y(Af,D);function Bf(a,b,c,d){d=Zb(w(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,Cb:d})}
Af.prototype.wb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.Cb);break}};
function Cf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.Cb)}}
Af.prototype.w=function(){Cf(this);Af.B.w.call(this)};function Df(a){return G("EXPERIMENT_FLAGS",{})[a]}
;function Ef(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Ff(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){Gf(c,2,a)},function(a){Gf(c,3,a)})}catch(d){Gf(this,3,d)}}
function Hf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Hf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var If=new Hb(function(){return new Hf},function(a){a.reset()},100);
function Jf(a,b,c){var d=If.get();d.g=a;d.f=b;d.context=c;return d}
function Kf(a){if(a instanceof Ff)return a;var b=new Ff(t);Gf(b,2,a);return b}
function Lf(a){return new Ff(function(b,c){c(a)})}
Ff.prototype.then=function(a,b,c){return Mf(this,fa(a)?a:null,fa(b)?b:null,c)};
Ef(Ff);Ff.prototype.cancel=function(a){0==this.b&&Mb(function(){var b=new Nf(a);Of(this,b)},this)};
function Of(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.i||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?Of(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Pf(c),Qf(c,e,3,b)))}a.g=null}else Gf(a,3,b)}
function Rf(a,b){a.f||2!=a.b&&3!=a.b||Sf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Mf(a,b,c,d){var e=Jf(null,null,null);e.b=new Ff(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Nf?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;Rf(a,e);return e.b}
Ff.prototype.R=function(a){this.b=0;Gf(this,2,a)};
Ff.prototype.F=function(a){this.b=0;Gf(this,3,a)};
function Gf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.R,h=a.F;if(e instanceof Ff)Rf(e,Jf(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ga(e))try{var m=e.then;if(fa(m)){Tf(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,Sf(a),3!=b||c instanceof Nf||Uf(a,c))}}
function Tf(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(m){f(m)}}
function Sf(a){a.o||(a.o=!0,Mb(a.A,a))}
function Pf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Ff.prototype.A=function(){for(var a;a=Pf(this);)Qf(this,a,this.b,this.l);this.o=!1};
function Qf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Vf(b,c,d);else try{b.i?b.g.call(b.context):Vf(b,c,d)}catch(e){Wf.call(null,e)}Ib(If,b)}
function Vf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Uf(a,b){a.j=!0;Mb(function(){a.j&&Wf.call(null,b)})}
var Wf=Eb;function Nf(a){na.call(this,a)}
y(Nf,na);Nf.prototype.name="cancel";function Xf(){this.b={apiaryHost:G("APIARY_HOST",void 0),Zc:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),rd:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),td:G("INNERTUBE_CONTEXT_HL",void 0),sd:G("INNERTUBE_CONTEXT_GL",void 0),Ve:G("XHR_APIARY_HOST",void 0)};
Yf||(Yf=Zf(this.b))}
var Yf=null;function Zf(a){return(new Ff(function(b){nc(G("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){$b(c)}})})).then(function(){})}
Xf.prototype.f=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Zc;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
function $f(a,b,c){var d={},e,f=!1;0<d.timeout&&(e=H(function(){f||(f=!0,d.Fa&&d.Fa())},d.timeout));
ag(a,b,c,function(a){if(!f)if(f=!0,e&&I(e),a)d.ea&&d.ea(a);else if(d.onError)d.onError()})}
function ag(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:L(c)},f=w(a.f,a);Yf.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var bg={log_event:"events",log_interaction:"interactions"},cg={},dg={},eg=0,fg=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",fg,void 0);
function gg(){I(eg);if(!fb(fg)){for(var a in fg){var b=cg[a];if(!b){b=dg[a];if(!b)continue;b=new b;cg[a]=b}var c=b.b,c={client:{hl:c.td,gl:c.sd,clientName:c.rd,clientVersion:c.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(ac());c[bg[a]]=fg[a];$f(b,a,c);delete fg[a]}fb(fg)||hg()}}
function hg(){I(eg);eg=H(gg,G("VISIBILITY_TIMEOUT",1E4))}
;function ig(a,b,c){var d={};d.eventTimeMs=Math.round(c||ac());d[a]=b;fg.log_event=fg.log_event||[];a=fg.log_event;a.push(d);dg.log_event=Xf;20<=a.length?gg():hg()}
;function jg(a,b){this.f=this.A=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof jg?(this.o=p(b)?b:a.o,kg(this,a.i),this.A=a.A,lg(this,a.f),mg(this,a.l),this.b=a.b,ng(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(qd))?(this.o=!!b,kg(this,c[1]||"",!0),this.A=og(c[2]||""),lg(this,c[3]||"",!0),mg(this,c[4]),this.b=og(c[5]||"",!0),ng(this,c[6]||"",!0),this.j=og(c[7]||"")):(this.o=!!b,this.g=new pg(null,0,this.o))}
jg.prototype.toString=function(){var a=[],b=this.i;b&&a.push(qg(b,rg,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(qg(b,rg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(qg(c,"/"==c.charAt(0)?sg:tg,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",qg(c,ug));return a.join("")};
jg.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?kg(b,a.i):c=!!a.A;c?b.A=a.A:c=!!a.f;c?lg(b,a.f):c=null!=a.l;var d=a.b;if(c)mg(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?ng(b,og(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
jg.prototype.clone=function(){return new jg(this)};
function kg(a,b,c){a.i=c?og(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function lg(a,b,c){a.f=c?og(b,!0):b}
function mg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function ng(a,b,c){b instanceof pg?(a.g=b,vg(a.g,a.o)):(c||(b=qg(b,wg)),a.g=new pg(b,0,a.o))}
function N(a,b,c){a.g.set(b,c)}
function xg(a,b,c){u(c)||(c=[String(c)]);yg(a.g,b,c)}
function zg(a){N(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Ag(a){return a instanceof jg?a.clone():new jg(a,void 0)}
function Bg(a,b,c,d){var e=new jg(null,void 0);a&&kg(e,a);b&&lg(e,b);c&&mg(e,c);d&&(e.b=d);return e}
function og(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function qg(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Cg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Cg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var rg=/[#\/\?@]/g,tg=/[\#\?:]/g,sg=/[\#\?]/g,wg=/[\#\?@]/g,ug=/#/g;function pg(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function Dg(a){a.b||(a.b=new Ec,a.f=0,a.g&&td(a.g,function(b,c){Eg(a,qa(b),c)}))}
g=pg.prototype;g.S=function(){Dg(this);return this.f};
function Eg(a,b,c){Dg(a);a.g=null;b=Fg(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){Dg(this);a=Fg(this,a);return Gc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){Dg(this);return 0==this.f};
function Gg(a,b){Dg(a);b=Fg(a,b);return Gc(a.b.f,b)}
g.Ya=function(a){var b=this.T();return A(b,a)};
g.ma=function(){Dg(this);for(var a=this.b.T(),b=this.b.ma(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.T=function(a){Dg(this);var b=[];if(v(a))Gg(this,a)&&(b=Ra(b,this.b.get(Fg(this,a))));else{a=this.b.T();for(var c=0;c<a.length;c++)b=Ra(b,a[c])}return b};
g.set=function(a,b){Dg(this);this.g=null;a=Fg(this,a);Gg(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.T(a):[];return 0<c.length?String(c[0]):b};
function yg(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(Fg(a,b),Sa(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.ma(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.T(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new pg;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function Fg(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function vg(a,b){b&&!a.i&&(Dg(a),a.g=null,a.b.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),yg(this,e,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Mc(arguments[b],function(a,b){Eg(this,b,a)},this)};var Hg="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),Ig="";
function Jg(a){return a&&a==Ig?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+Hg.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(Ig=a,!0):!1}
;var Kg={},Lg=0;function Mg(a){var b=new Image,c=""+Lg++;Kg[c]=b;b.onload=b.onerror=function(){delete Kg[c]};
b.src=a}
;function O(a,b){this.version=a;this.args=b}
function Ng(a){if(!a.xa){var b={};a.call(b);a.xa=b.version}return a.xa}
function Og(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Ng(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function P(a,b){this.topic=a;this.b=b}
P.prototype.toString=function(){return this.topic};var Pg=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ka;F.prototype.publish=F.prototype.u;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",Pg,void 0);var Qg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Qg,void 0);var Rg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Rg,void 0);var Sg=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Sg,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function Q(a,b){var c=Tg();c&&c.publish.call(c,a.toString(),a,b)}
function Ug(a,b,c){var d=Tg();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(Qg[e])try{if(h&&a instanceof P&&a!=d)try{h=Og(a.b,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){$b(k)}};
Sg[a.toString()]?r("yt.scheduler.instance")?Qd(k,void 0):H(k,0):k()}});
Qg[e]=!0;Rg[a.toString()]||(Rg[a.toString()]=[]);Rg[a.toString()].push(e);return e}
function Vg(a){var b=Tg();b&&(ea(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete Qg[a]}))}
function Tg(){return r("yt.pubsub2.instance_")}
;var Wg=x().toString();var Xg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Yg(a){O.call(this,1,arguments)}
y(Yg,O);var Zg=new P("timing-sent",Yg);var $g={vc:!0},ah=/^mark_/i,bh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},ch=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],dh=w(Xg.clearResourceTimings||Xg.webkitClearResourceTimings||Xg.mozClearResourceTimings||Xg.msClearResourceTimings||Xg.oClearResourceTimings||t,Xg);
function eh(a){if("_"!=a[0]){var b=a;Xg.mark&&(ah.test(b)||(b="mark_"+b),Xg.mark(b))}var b=fh(),c=ac();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;gh()["tick_"+a]=void 0;Df("csi_on_gel")?(b=hh(),"_start"==a?ig("latencyActionBaselined",{clientActionNonce:b},void 0):ig("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!Df("navigation_only_csi_reset"));if(!a&&(b=G("TIMING_ACTION",void 0),a=fh(),r("yt.timing.ready_")&&b&&a._start&&
ih())){b=!0;c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&jh()}}
function kh(){var a=lh().info.yt_lt="hot_bg";gh().info_yt_lt=a;if(Df("csi_on_gel"))if("yt_lt"in bh){var b={},c=bh.yt_lt;A(ch,c)&&(a=!!a);b[c]=a;a=hh();b.clientActionNonce=a;ig("latencyActionInfo",b)}else $b(Error("Unknown label yt_lt logged with GEL CSI."))}
function ih(){var a=fh();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function jh(){var a=fh(),b=lh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&u(a[d])){var e=d.slice(1);if(e in $g){var f=Ja(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))mh(f,e),nh(),dh(),oh(!1,void 0)}else{var h=G("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:G("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=Xg.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var m=window.location.protocol+r("ytplayer.config.assets.js");(m=Xg.getEntriesByName?Xg.getEntriesByName(m)[0]:
null)?b.h5jse=Math.round(b.h5jse-m.responseEnd):delete b.h5jse}a.aft=ih();ph()&&"youtube"==h&&(kh(),h=a.vc,m=a.pbs,delete a.aft,b.aft=Math.round(m-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=ac();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),Df("enable_negative_ticks")||(h=Math.max(h,0)),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Df("navigation_only_csi_reset")||(nh(),dh(),oh(!1,void 0));mh(f,e,void 0);Q(Zg,new Yg(b.aft+(k||0)))}}
function mh(a,b,c){if(Df("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(!Df("beacon_abandoned_only")||b))try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&Mg(a)}catch(f){a&&Mg(a)}else a&&Mg(a);oh(!0,c)}
function hh(){var a=lh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Wg)for(c=1,d=0;d<Wg.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Wg.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");lh().nonce=a}return a}
function fh(){return lh().tick}
function gh(){var a=lh();"gel"in a||(a.gel={});return a.gel}
function lh(){return r("ytcsi.data_")||nh()}
function nh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function oh(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function ph(){var a=fh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==lh().info.yt_pvis}
;var qh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function rh(a,b){D.call(this);this.o=this.j=a;this.Y=b;this.A=!1;this.f={};this.Ia=this.X=null;this.ba=new F;Sb(this,ma(E,this.ba));this.i={};this.F=this.Ja=this.g=this.Wa=this.b=null;this.la=!1;this.G=this.l=this.N=this.O=null;this.Ka={};this.Xc=["onReady"];this.na=new Af(this);Sb(this,ma(E,this.na));this.Bb=null;this.Yb=NaN;this.sa={};sh(this);this.pa("onDetailedError",w(this.Hd,this));this.pa("onTabOrderChange",w(this.bd,this));this.pa("onTabAnnounce",w(this.Zb,this));this.pa("WATCH_LATER_VIDEO_ADDED",
w(this.Id,this));this.pa("WATCH_LATER_VIDEO_REMOVED",w(this.Jd,this));ff||(this.pa("onMouseWheelCapture",w(this.Ed,this)),this.pa("onMouseWheelRelease",w(this.Fd,this)));this.pa("onAdAnnounce",w(this.Zb,this));this.K=new Af(this);Sb(this,ma(E,this.K));this.Va=!1;this.Ua=null}
y(rh,D);var th=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=rh.prototype;g.Ub=function(a,b){this.C()||(uh(this,a),vh(this,b),this.A&&wh(this))};
function uh(a,b){a.Wa=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.Y,a.b.attrs.id=a.Y);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.Y;a.Ja||(a.Ja=xh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=Ze(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=Ze(Number(c)||c,!0)}
g.jd=function(){return this.Wa};
function wh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function yh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=nf(mf.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function zh(a,b){if((!b||(5!=(qh[b.errorCode]||5)?0:-1!=th.indexOf(b.errorCode)))&&yh(a)){var c=Ah(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Se(c));d.args.autoplay=1;d.args.html5_unavailable="1";uh(a,d);vh(a,"flash")}}
function vh(a,b){if(!a.C()){if(!b){var c;if(!(c=!a.b.html5&&yh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==tf)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?yf:zf,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Bh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?yh(a)?"flash":"unsupported":"html5"}("flash"==b?a.re:a.se).call(a)}}
function Bh(a){var b=!0,c=Ah(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.se=function(){if(!this.la){var a=Bh(this);a&&"html5"==Ch(this)?(this.F="html5",this.A||this.Pa()):(Dh(this),this.F="html5",a&&this.N?(this.j.appendChild(this.N),this.Pa()):(this.b.loaded=!0,this.O=w(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Pa()},this),this.la=!0,a?this.O():(nc(this.b.assets.js,this.O),of(this.b.assets.css))))}};
g.re=function(){var a=this.b.clone();if(!this.l){var b=Ah(this);b&&(this.l=document.createElement("span"),this.l.tabIndex=0,Bf(this.na,this.l,"focus",this.nc),this.G=document.createElement("span"),this.G.tabIndex=0,Bf(this.na,this.G,"focus",this.nc),b.parentNode&&b.parentNode.insertBefore(this.l,b),b.parentNode&&b.parentNode.insertBefore(this.G,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Ch(this))this.F="flash",this.A||this.Pa();else{Dh(this);
this.F="flash";this.b.loaded=!0;var b=mf.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!nf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=v(b)?fe(b):b,d=hb(a.attrs);d.tabindex=0;var e=hb(a.params);e.flashvars=yd(a.args);if(bc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.Pa()}};
g.nc=function(){Ah(this).focus()};
function Ah(a){var b=fe(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.Pa=function(){if(!this.C()){var a=Ah(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.la=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))zh(this);else{sh(this);this.A=!0;a=Ah(this);a.addEventListener&&(this.X=Eh(this,a,"addEventListener"));a.removeEventListener&&(this.Ia=Eh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Eh(this,a,d))}for(var e in this.i)this.X(e,
this.i[e]);wh(this);this.Ja&&this.Ja(this.f);this.ba.u("onReady",this.f)}else this.Yb=H(w(this.Pa,this),50)}};
function Eh(a,b,c){var d=b[c];return function(){try{return a.Bb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Bb=e,$b(e,"WARNING"))}}}
function sh(a){a.A=!1;if(a.Ia)for(var b in a.i)a.Ia(b,a.i[b]);for(var c in a.sa)I(parseInt(c,10));a.sa={};a.X=null;a.Ia=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.pa,a);a.f.removeEventListener=w(a.ee,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.kd,a);a.f.getPlayerType=w(a.ld,a);a.f.getCurrentVideoConfig=w(a.jd,a);a.f.loadNewVideoConfig=w(a.Ub,a);a.f.isReady=w(a.De,a)}
g.De=function(){return this.A};
g.pa=function(a,b){if(!this.C()){var c=xh(this,b);if(c){if(!A(this.Xc,a)&&!this.i[a]){var d=Fh(this,a);this.X&&this.X(a,d)}this.ba.subscribe(a,c);"onReady"==a&&this.A&&H(ma(c,this.f),0)}}};
g.ee=function(a,b){if(!this.C()){var c=xh(this,b);c&&this.ba.unsubscribe(a,c)}};
function xh(a,b){var c=b;if("string"==typeof b){if(a.Ka[b])return a.Ka[b];c=function(){var a=r(b);a&&a.apply(l,arguments)};
a.Ka[b]=c}return c?c:null}
function Fh(a,b){var c="ytPlayer"+b+a.Y;a.i[b]=c;l[c]=function(c){var e=H(function(){if(!a.C()){a.ba.u(b,c);var f=a.sa,h=String(e);h in f&&delete f[h]}},0);
gb(a.sa,String(e))};
return c}
g.bd=function(a){a=a?me:le;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.l||b==this.G||(b.focus(),b!=document.activeElement));)b=a(b)};
g.Zb=function(a){J("a11y-announce",a)};
g.Hd=function(a){zh(this,a)};
g.Id=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Jd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Ed=function(){this.Va||(kf?(this.Ua=ie(document),Bf(this.K,window,"scroll",this.Zd),Bf(this.K,this.j,"touchmove",this.Td)):(Bf(this.K,this.j,"mousewheel",this.qc),Bf(this.K,this.j,"wheel",this.qc)),this.Va=!0)};
g.Fd=function(){Cf(this.K);this.Va=!1};
g.qc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Zd=function(){window.scrollTo(this.Ua.H,this.Ua.I)};
g.Td=function(a){a.preventDefault()};
g.ld=function(){return this.F||Ch(this)};
g.kd=function(){return this.Bb};
function Ch(a){return(a=Ah(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Dh(a){eh("dcp");a.cancel();sh(a);a.F=null;a.b&&(a.b.loaded=!1);var b=Ah(a);"html5"==Ch(a)?a.N=b:b&&b.destroy&&b.destroy();ke(a.j);Cf(a.na);a.l=null;a.G=null}
g.cancel=function(){this.O&&uc(this.b.assets.js,this.O);I(this.Yb);this.la=!1};
g.w=function(){Dh(this);if(this.N&&this.b)try{this.N.destroy()}catch(b){$b(b)}this.Ka=null;for(var a in this.i)l[this.i[a]]=null;this.Wa=this.b=this.f=null;delete this.j;delete this.o;rh.B.w.call(this)};var Gh={},Hh="player_uid_"+(1E9*Math.random()>>>0);function Ih(a,b){a=v(a)?fe(a):a;b=Se(b);var c=Hh+"_"+ha(a),d=Gh[c];if(d)return d.Ub(b),d.f;d=new rh(a,c);Gh[c]=d;J("player-added",d.f);Sb(d,ma(Jh,d));H(function(){d.Ub(b)},0);
return d.f}
function Jh(a){Gh[a.Y]=null}
function Kh(a){a=fe(a);if(!a)return null;var b=Hh+"_"+ha(a),c=Gh[b];c||(c=new rh(a,b),Gh[b]=c);return c.f}
;var Lh=r("yt.abuse.botguardInitialized")||xc;q("yt.abuse.botguardInitialized",Lh,void 0);var Mh=r("yt.abuse.invokeBotguard")||yc;q("yt.abuse.invokeBotguard",Mh,void 0);var Nh=r("yt.abuse.dclkstatus.checkDclkStatus")||Ud;q("yt.abuse.dclkstatus.checkDclkStatus",Nh,void 0);var Oh=r("yt.player.exports.navigate")||Ne;q("yt.player.exports.navigate",Oh,void 0);var Ph=r("yt.player.embed")||Ih;q("yt.player.embed",Ph,void 0);var Qh=r("yt.player.getPlayerByElement")||Kh;q("yt.player.getPlayerByElement",Qh,void 0);
var Rh=r("yt.util.activity.init")||De;q("yt.util.activity.init",Rh,void 0);var Sh=r("yt.util.activity.getTimeSinceActive")||Fe;q("yt.util.activity.getTimeSinceActive",Sh,void 0);var Th=r("yt.util.activity.setTimestamp")||Ee;q("yt.util.activity.setTimestamp",Th,void 0);function Uh(a){O.call(this,1,arguments);this.b=a}
y(Uh,O);function Vh(a){O.call(this,1,arguments);this.b=a}
y(Vh,O);function Wh(a,b){O.call(this,1,arguments);this.b=a;this.isEnabled=b}
y(Wh,O);function Xh(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(Xh,O);function Yh(a,b,c){O.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(Yh,O);function Zh(a,b,c,d,e,f,h){O.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
y(Zh,O);
var $h=new P("subscription-batch-subscribe",Uh),ai=new P("subscription-batch-unsubscribe",Uh),bi=new P("subscription-pref-email",Wh),ci=new P("subscription-subscribe",Xh),di=new P("subscription-subscribe-loading",Vh),ei=new P("subscription-subscribe-loaded",Vh),fi=new P("subscription-subscribe-success",Yh),gi=new P("subscription-subscribe-external",Xh),hi=new P("subscription-unsubscribe",Zh),ii=new P("subscription-unsubscirbe-loading",Vh),ji=new P("subscription-unsubscribe-loaded",Vh),ki=new P("subscription-unsubscribe-success",
Vh),li=new P("subscription-external-unsubscribe",Zh),mi=new P("subscription-enable-ypc",Vh),ni=new P("subscription-disable-ypc",Vh);function oi(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=zd(c,"mode",b));c=zd("/signin?context=popup","next",c);c=zd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=hc("LOGGED_IN",function(b){jc(G("LOGGED_IN_PUBSUB_KEY",void 0));Xb("LOGGED_IN",!0);a(b)});
Xb("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",J,void 0);function pi(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function qi(){var a=xe();return a?a:null}
;function ri(a,b){(a=fe(a))&&a.style&&(a.style.display=b?"":"none",Zd(a,"hid",!b))}
function si(a){z(arguments,function(a){!da(a)||a instanceof Element?ri(a,!0):z(a,function(a){si(a)})})}
function ti(a){z(arguments,function(a){!da(a)||a instanceof Element?ri(a,!1):z(a,function(a){ti(a)})})}
;var ui={},vi="ontouchstart"in document;function wi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return ue(c,function(a){return Wd(a,b)},!0,d)}
function xi(a){var b="mouseover"==a.type&&"mouseenter"in ui||"mouseout"==a.type&&"mouseleave"in ui,c=a.type in ui||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=ui[b],d;for(d in c.fa){var e=wi(b,d,a.target);e&&!ue(a.relatedTarget,function(a){return a==e},!0)&&c.u(d,e,b,a)}}if(b=ui[a.type])for(d in b.fa)(e=wi(a.type,d,a.target))&&b.u(d,e,a.type,a)}}
M(document,"blur",xi,!0);M(document,"change",xi,!0);M(document,"click",xi);M(document,"focus",xi,!0);M(document,"mouseover",xi);M(document,"mouseout",xi);M(document,"mousedown",xi);M(document,"keydown",xi);M(document,"keyup",xi);M(document,"keypress",xi);M(document,"cut",xi);M(document,"paste",xi);vi&&(M(document,"touchstart",xi),M(document,"touchend",xi),M(document,"touchcancel",xi));function yi(a){this.j=a;this.g={};this.sb=[];this.i=[]}
function R(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
yi.prototype.unregister=function(){jc(this.sb);this.sb.length=0;Vg(this.i);this.i.length=0};
yi.prototype.init=t;yi.prototype.dispose=t;function zi(a,b,c){a.i.push(Ug(b,c,a))}
function Ai(a,b,c){var d=R(a,void 0),e=w(c,a);b in ui||(ui[b]=new F);ui[b].subscribe(d,e);a.g[c]=e}
function Bi(a,b,c){if(b in ui){var d=ui[b];d.unsubscribe(R(a,void 0),a.g[c]);0>=d.S()&&(d.dispose(),delete ui[b])}delete a.g[c]}
function Ci(a,b){Ab(a,"tooltip-text",b)}
;function Di(){yi.call(this,"tooltip");this.b=0;this.f={}}
y(Di,yi);ba(Di);g=Di.prototype;g.register=function(){Ai(this,"mouseover",this.pb);Ai(this,"mouseout",this.Ea);Ai(this,"focus",this.fc);Ai(this,"blur",this.ac);Ai(this,"click",this.Ea);Ai(this,"touchstart",this.Hc);Ai(this,"touchend",this.vb);Ai(this,"touchcancel",this.vb)};
g.unregister=function(){Bi(this,"mouseover",this.pb);Bi(this,"mouseout",this.Ea);Bi(this,"focus",this.fc);Bi(this,"blur",this.ac);Bi(this,"click",this.Ea);Bi(this,"touchstart",this.Hc);Bi(this,"touchend",this.vb);Bi(this,"touchcancel",this.vb);this.dispose();Di.B.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ea(this.f[a]);this.f={}};
g.pb=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Cb(a,"tooltip-hide-timer"),I(b));var b=w(function(){Ei(this,a);Cb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Ab(a,"tooltip-show-timer",b.toString());a.title&&(Ci(a,Fi(a)),a.title="");b=ha(a).toString();this.f[b]=a}};
g.Ea=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),Cb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=fe(Gi(this,a));b&&(Hi(b),b&&b.parentNode&&b.parentNode.removeChild(b),Cb(a,"content-id"));(b=fe(Gi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Cb(a,"tooltip-hide-timer")},this);
b=H(b,50);Ab(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ha(a).toString();delete this.f[b]};
g.fc=function(a){this.b=0;this.pb(a)};
g.ac=function(a){this.b=0;this.Ea(a)};
g.Hc=function(a,b,c){c.changedTouches&&(this.b=0,a=wi(b,R(this),c.changedTouches[0].target),this.pb(a))};
g.vb=function(a,b,c){c.changedTouches&&(this.b=x(),a=wi(b,R(this),c.changedTouches[0].target),this.Ea(a))};
function Ii(a,b){Ci(a,b);var c=C(a,"content-id");(c=fe(c))&&ne(c,b)}
function Fi(a){return C(a,"tooltip-text")||a.title}
function Ei(a,b){if(b){var c=Fi(b);if(c){var d=fe(Gi(a,b));if(!d){d=document.createElement("div");d.id=Gi(a,b);d.className=R(a,"tip");var e=document.createElement("div");e.className=R(a,"tip-body");var f=document.createElement("div");f.className=R(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=R(a,"tip-content");var k=Ji(a,b),m=Gi(a,b,"content");h.id=m;Ab(b,"content-id",m);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var n=
qe(b),m=Gi(a,b,"arialabel"),f=document.createElement("div");Xd(f,R(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;ne(f,n);b.setAttribute("aria-labelledby",m);m=qi()||document.body;m.appendChild(f);m.appendChild(d);Ii(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Xd(h,R(a,"normal-wrap")));h=Wd(b,R(a,"reverse"));Ki(a,b,d,e,k,h)||Ki(a,b,d,e,k,!h);var Z=R(a,"tip-visible");
H(function(){Xd(d,Z)},0)}}}}
function Ki(a,b,c,d,e,f){Zd(c,R(a,"tip-reverse"),f);var h=0;f&&(h=1);a=$e(b);f=new $d((a.width-10)/2,f?a.height:0);var k=ee(b),m=new $d(0,0),n;n=k?ee(k):document;n=!K||fd(9)||je(ce(n).b)?n.documentElement:n.body;b!=n&&(n=Ye(b),k=ie(ce(k).b),m.H=n.left+k.H,m.I=n.top+k.I);f=new $d(m.H+f.H,m.I+f.I);f=f.clone();m=(h&8&&"rtl"==Xe(c,"direction")?h^4:h)&-9;h=$e(c);k=h.clone();n=f.clone();k=k.clone();0!=m&&(m&4?n.H-=k.width+0:m&2&&(n.H-=k.width/2),m&1&&(n.I-=k.height+0));f=new Ue(0,0,0,0);f.left=n.H;f.top=
n.I;f.width=k.width;f.height=k.height;k=new $d(f.left,f.top);k instanceof $d?(m=k.H,k=k.I):(m=k,k=void 0);c.style.left=Ze(m,!1);c.style.top=Ze(k,!1);k=new ae(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,m=je(ce(ee(c)).b),!K||ed("10")||m&&ed("8"))f=c.style,Vc?f.MozBoxSizing="border-box":Wc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,m){if(K){m=cf(c,"paddingLeft");k=cf(c,
"paddingRight");n=cf(c,"paddingTop");var Z=cf(c,"paddingBottom"),m=new Te(n,k,Z,m)}else m=We(c,"paddingLeft"),k=We(c,"paddingRight"),n=We(c,"paddingTop"),Z=We(c,"paddingBottom"),m=new Te(parseFloat(n),parseFloat(k),parseFloat(Z),parseFloat(m));if(K&&!fd(9)){k=ef(c,"borderLeft");n=ef(c,"borderRight");var Z=ef(c,"borderTop"),ua=ef(c,"borderBottom"),k=new Te(Z,n,ua,k)}else k=We(c,"borderLeftWidth"),n=We(c,"borderRightWidth"),Z=We(c,"borderTopWidth"),ua=We(c,"borderBottomWidth"),k=new Te(parseFloat(Z),
parseFloat(n),parseFloat(ua),parseFloat(k));f.pixelWidth=h.width-k.left-m.left-m.right-k.right;f.pixelHeight=h.height-k.top-m.top-m.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=je(h)?h.documentElement:h.body;f=new ae(h.clientWidth,h.clientHeight);1==c.nodeType?(c=Ye(c),k=new $d(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new $d(c.clientX,c.clientY));c=$e(d);n=Math.floor(c.width/2);h=!!(f.height<k.I+a.height);a=!!(k.I<a.height);m=!!(k.H<n);f=!!(f.width<
k.H+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||m)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Gi(a,b,c){a=R(a);var d=b.__yt_uid_key;d||(d=ve(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ji(a,b){var c=null;Xc&&Wd(b,R(a,"masked"))&&((c=fe("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),si(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=R(a,"tip-mask")));return c}
function Hi(a){var b=fe("yt-uix-tooltip-shared-mask"),c=b&&ue(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),ti(b),document.body.appendChild(b))}
;function Li(){yi.call(this,"subscription-button")}
y(Li,yi);ba(Li);Li.prototype.register=function(){Ai(this,"click",this.Eb);zi(this,di,this.pc);zi(this,ei,this.oc);zi(this,fi,this.Rd);zi(this,ii,this.pc);zi(this,ji,this.oc);zi(this,ki,this.Xd);zi(this,mi,this.Dd);zi(this,ni,this.Cd)};
Li.prototype.unregister=function(){Bi(this,"click",this.Eb);Li.B.unregister.call(this)};
var te={Vb:"hover-enabled",Pc:"yt-uix-button-subscribe",Qc:"yt-uix-button-subscribed",Fe:"ypc-enabled",Rc:"yt-uix-button-subscription-container",Sc:"yt-subscription-button-disabled-mask-container"},Mi={Ge:"channel-external-id",Tc:"subscriber-count-show-when-subscribed",Uc:"subscriber-count-tooltip",Vc:"subscriber-count-title",Ie:"href",Wb:"is-subscribed",Ke:"parent-url",Me:"clicktracking",Wc:"style-type",Xb:"subscription-id",Pe:"target",Yc:"ypc-enabled"};g=Li.prototype;
g.Eb=function(a){var b=C(a,"href"),c=pi();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");Q(hi,new Zh(b,f,d,a,c,e))}else Q(ci,new Xh(b,d,c,e))}else Ni(this,a)};
g.pc=function(a){this.La(a.b,this.Ec,!0)};
g.oc=function(a){this.La(a.b,this.Ec,!1)};
g.Rd=function(a){this.La(a.b,this.Fc,!0,a.subscriptionId)};
g.Xd=function(a){this.La(a.b,this.Fc,!1)};
g.Dd=function(a){this.La(a.b,this.ed)};
g.Cd=function(a){this.La(a.b,this.dd)};
g.Fc=function(a,b,c){b?(Ab(a,Mi.Wb,"true"),c&&Ab(a,Mi.Xb,c)):(Cb(a,Mi.Wb),Cb(a,Mi.Xb));Oi(a)};
g.Ec=function(a,b){var c;c=se(a);Zd(c,te.Sc,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Oi(a){var b=C(a,Mi.Wc),c=!!C(a,"is-subscribed"),b="-"+b,d=te.Qc+b;Zd(a,te.Pc+b,!c);Zd(a,d,c);C(a,Mi.Uc)&&!C(a,Mi.Tc)&&(b=R(Di.getInstance()),Zd(a,b,!c),a.title=c?"":C(a,Mi.Vc));c?H(function(){Xd(a,te.Vb)},1E3):Yd(a,te.Vb)}
g.ed=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(Xd(a,"ypc-enabled"),Ab(a,Mi.Yc,"true"))};
g.dd=function(a){C(a,"ypc-enabled")&&(Yd(a,"ypc-enabled"),Cb(a,"ypc-enabled"))};
function Pi(a,b){var c=ge(R(a));return Ia(c,function(a){return b==C(a,"channel-external-id")},a)}
g.$c=function(a,b,c){var d=Va(arguments,2);z(a,function(a){b.apply(this,Ra(a,d))},this)};
g.La=function(a,b,c){var d=Pi(this,a);this.$c.apply(this,Ra([d],Va(arguments,1)))};
function Ni(a,b){var c=w(function(a){a.discoverable_subscriptions&&Xb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Eb(b)},a);
oi(c,"subscribe")}
;var Qi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Qi,void 0);function Ri(a,b){this.source=null;this.j=a||null;this.origin="*";this.A=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.g=this.b=this.f=this.channel=this.i=null;M(window,"message",w(this.l,this))}
Ri.prototype.l=function(a){var b=this.o||G("POST_MESSAGE_ORIGIN",void 0)||this.A;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.j||a.source==this.j)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=id(a)}catch(c){return}this.i=a.id;switch(a.event){case "listening":this.b&&(this.b(),this.b=null);break;case "command":this.f&&(this.g&&!A(this.g,a.func)||this.f(a.func,a.args))}}};
Ri.prototype.sendMessage=function(a){this.source&&(a.id=this.i,this.channel&&(a.channel=this.channel),a=L(a),this.source.postMessage(a,this.origin))};function Si(){}
;function Ti(){}
y(Ti,Si);Ti.prototype.S=function(){var a=0;Cc(this.oa(!0),function(){a++});
return a};
Ti.prototype.clear=function(){var a=Dc(this.oa(!0)),b=this;z(a,function(a){b.remove(a)})};function Ui(a){this.b=a}
y(Ui,Ti);g=Ui.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.S=function(){return this.b.length};
g.oa=function(a){var b=0,c=this.b,d=new Ac;d.next=function(){if(b>=c.length)throw zc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function Vi(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Vi,Ui);function Wi(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(Wi,Ui);function Xi(a){this.b=a}
Xi.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
Xi.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return id(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Xi.prototype.remove=function(a){this.b.remove(a)};function Yi(a){this.b=a}
y(Yi,Xi);function Zi(a){this.data=a}
function $i(a){return!p(a)||a instanceof Zi?a:new Zi(a)}
Yi.prototype.set=function(a,b){Yi.B.set.call(this,a,$i(b))};
Yi.prototype.f=function(a){a=Yi.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Yi.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function aj(a){this.b=a}
y(aj,Yi);function bj(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
aj.prototype.set=function(a,b,c){if(b=$i(b)){if(c){if(c<x()){aj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}aj.B.set.call(this,a,b)};
aj.prototype.f=function(a,b){var c=aj.B.f.call(this,a);if(c)if(!b&&bj(c))aj.prototype.remove.call(this,a);else return c};function cj(a){this.b=a}
y(cj,aj);function dj(a,b){var c=[];Cc(b,function(a){var b;try{b=cj.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?bj(b)&&c.push(a):c.push(a)},a);
return c}
function ej(a,b){var c=dj(a,b);z(c,function(a){cj.prototype.remove.call(this,a)},a)}
function fj(){var a=gj;ej(a,a.b.oa(!0))}
;function S(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?gj:hj)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function T(a){if(!hj&&!gj||!window.JSON)return null;var b;try{b=hj.get(a)}catch(c){}if(!v(b))try{b=gj.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function ij(a){hj&&hj.remove(a);gj&&gj.remove(a)}
var gj,jj=new Vi;gj=jj.isAvailable()?new cj(jj):null;var hj,kj=new Wi;hj=kj.isAvailable()?new cj(kj):null;function lj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function mj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return nj(a)}
function nj(a,b,c){if(ga(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function oj(a,b,c,d){if(ga(a)&&!u(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function pj(a){var b=a.video_id||a.videoId;if(v(b)){var c=T("yt-player-two-stage-token")||{},d=T("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];S("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function qj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
function rj(a){return document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var sj=rj("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",tj=rj("loadCastFramework");function uj(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var vj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],wj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],xj=qj()?wj.concat(vj):vj.concat(wj);function yj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function zj(a){if(a>=xj.length)Aj();else{var b=xj[a],c="chrome-extension://"+b+sj;0<=vj.indexOf(b)?yj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Bj(c,Aj)):zj(a+1)}):Bj(c,function(){zj(a+1)})}}
function Bj(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Aj(){var a=uj();a&&a(!1,"No cast extension found")}
function Cj(){if(tj){var a=2,b=uj(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Bj("//www.gstatic.com/cast/sdk/libs/sender/0.0.1/cast_framework.js",Aj,c)}}
function Dj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){Cj();a({command:"cast.sender.init"});return}}window.chrome?(Cj(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=qj()?"50":"",Bj("//www.gstatic.com/eureka/clank"+a+sj,Aj)):zj(0)):Aj()}
;var Ej=x(),Fj=null,Gj=Array(50),Hj=-1,Ij=!1;function Jj(){var a=Kj;Lj();Fj.push(a);Mj(Fj)}
function Nj(a,b){Lj();var c=Fj,d=Oj(a,String(b));0==c.length?Pj(d):(Mj(c),z(c,function(a){a(d)}))}
function Lj(){Fj||(Fj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Fj,void 0))}
function Pj(a){var b=(Hj+1)%50;Hj=b;Gj[b]=a;Ij||(Ij=49==b)}
function Mj(a){var b=Gj;if(b[0]){var c=Hj,d=Ij?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Gj=Array(50);Hj=-1;Ij=!1}}
function Oj(a,b){var c=(x()-Ej)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Qj(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Rj(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Sj(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Tj(a){return new Qj(a)}
function Uj(a){return u(a)?Ja(a,Tj):[]}
function Vj(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Wj(a){return u(a)?"["+Ja(a,Vj).join(",")+"]":"null"}
;var Xj={Ee:"atp",Oe:"ska",Le:"que",Je:"mus",Ne:"sus"};function Yj(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(sd(4,a))||null||"";b&&(this.i=":"+b);this.g=rd(sd(3,a))||"";a=lb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ea(a,"10.0")&&(this.f=!1))}
function Zj(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Ad(e+b,c||{})}
function ak(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,ea:ma(a.o,d,!0),onError:ma(a.j,e),Fa:ma(a.l,e)};c&&(a.V=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Jd(b,a)}
Yj.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Yj.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
Yj.prototype.l=function(a){a(Error("request timed out"))};function bk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function ck(a,b){return Ma(a,function(a){return a.key==b})}
function dk(a){return Ja(a,function(a){return{key:a.id,name:a.name}})}
function ek(a,b){return Ma(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function fk(a,b){return Ma(a,function(a){return Rj(a,b)})}
;function U(){D.call(this);this.o=new F;Sb(this,ma(E,this.o))}
y(U,D);U.prototype.subscribe=function(a,b,c){return this.C()?0:this.o.subscribe(a,b,c)};
U.prototype.unsubscribe=function(a,b,c){return this.C()?!1:this.o.unsubscribe(a,b,c)};
U.prototype.ka=function(a){return this.C()?!1:this.o.ka(a)};
U.prototype.u=function(a,b){return this.C()?!1:this.o.u.apply(this.o,arguments)};function gk(a){U.call(this);this.l=a;this.screens=[]}
y(gk,U);gk.prototype.Z=function(){return this.screens};
gk.prototype.contains=function(a){return!!ek(this.screens,a)};
gk.prototype.get=function(a){return a?fk(this.screens,a):null};
function hk(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function ik(a,b){var c=a.screens.length!=b.length;a.screens=Ia(a.screens,function(a){return!!ek(b,a)});
for(var d=0,e=b.length;d<e;d++)c=hk(a,b[d])||c;return c}
function jk(a,b){var c=a.screens.length;a.screens=Ia(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
gk.prototype.info=function(a){Nj(this.l,a)};function kk(a,b,c,d){U.call(this);this.A=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
y(kk,U);var lk=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=kk.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Ac()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(I(this.f),this.f=NaN)};
g.w=function(){this.stop();kk.B.w.call(this)};
g.Ac=function(){this.f=NaN;this.b=Jd(Zj(this.A,"/pairing/get_screen"),{method:"POST",V:{pairing_code:this.l},timeout:5E3,ea:w(this.ve,this),onError:w(this.ue,this),Fa:w(this.we,this)})};
g.ve=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.u("pairingComplete",new Qj(c))};
g.ue=function(a){this.b=null;a.status&&404==a.status?this.g>=lk.length?this.u("pairingFailed",Error("DIAL polling timed out")):(a=lk[this.g],this.f=H(w(this.Ac,this),a),this.g++):this.u("pairingFailed",Error("Server error "+a.status))};
g.we=function(){this.b=null;this.u("pairingFailed",Error("Server not responding"))};function mk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Oc;this.experiments=new Oc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Pc(this.capabilities,Ia(b.split(","),ma($a,Xj)));a=a.experiments||"";this.experiments.clear();Pc(this.experiments,
a.split(","))}}
mk.prototype.equals=function(a){return a?this.id==a.id:!1};var nk;function ok(){var a=pk(),b=qk();A(a,b);if(rk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Wa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Ua(c,-(d+1),0,b)}a=sk(a);if(0==a.length)try{Le.remove("remote_sid","/","youtube.com")}catch(m){}else try{Me("remote_sid",a.join(","),-1)}catch(m){}}
function pk(){var a=T("yt-remote-connected-devices")||[];a.sort(Wa);return a}
function sk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ja(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function tk(a){S("yt-remote-connected-devices",a,86400)}
function qk(){if(uk)return uk;var a=T("yt-remote-device-id");a||(a=bk(),S("yt-remote-device-id",a,31536E3));for(var b=pk(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return uk=d}
function vk(){return T("yt-remote-session-browser-channel")}
function rk(){return T("yt-remote-session-screen-id")}
function wk(a){5<a.length&&(a=a.slice(a.length-5));var b=Ja(xk(),function(a){return a.loungeToken}),c=Ja(a,function(a){return a.loungeToken});
La(c,function(a){return!A(b,a)})&&yk();
S("yt-remote-local-screens",a,31536E3)}
function xk(){return T("yt-remote-local-screens")||[]}
function yk(){S("yt-remote-lounge-token-expiration",!0,86400)}
function zk(a,b){S("yt-remote-session-browser-channel",a);S("yt-remote-session-screen-id",b);var c=pk(),d=qk();A(c,d)||c.push(d);tk(c);ok()}
function Ak(a){a||(ij("yt-remote-session-screen-id"),ij("yt-remote-session-video-id"));ok();a=pk();Pa(a,qk());tk(a)}
function Bk(){if(!nk){var a;a=new Vi;(a=a.isAvailable()?a:null)&&(nk=new Xi(a))}return nk?!!nk.get("yt-remote-use-staging-server"):!1}
var uk="";function Ck(a){gk.call(this,"LocalScreenService");this.f=a;this.b=NaN;Dk(this);this.info("Initializing with "+Wj(this.screens))}
y(Ck,gk);g=Ck.prototype;g.start=function(){Dk(this)&&this.u("screenChange");!T("yt-remote-lounge-token-expiration")&&Ek(this);I(this.b);this.b=H(w(this.start,this),1E4)};
g.Ab=function(a,b){Dk(this);hk(this,a);Fk(this,!1);this.u("screenChange");b(a);a.token||Ek(this)};
g.remove=function(a,b){var c=Dk(this);jk(this,a)&&(Fk(this,!1),c=!0);b(a);c&&this.u("screenChange")};
g.xb=function(a,b,c,d){var e=Dk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Fk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.u("screenChange")};
g.w=function(){I(this.b);Ck.B.w.call(this)};
function Ek(a){if(a.screens.length){var b=Ja(a.screens,function(a){return a.id}),c=Zj(a.f,"/pairing/get_lounge_token_batch");
ak(a.f,c,{screen_ids:b.join(",")},w(a.od,a),w(a.nd,a))}}
g.od=function(a){Dk(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Fk(this,!b);b&&Nj(this.l,"Missed "+b+" lounge tokens.")};
g.nd=function(a){Nj(this.l,"Requesting lounge tokens failed: "+a)};
function Dk(a){var b=Uj(xk()),b=Ia(b,function(a){return!a.uuid});
return ik(a,b)}
function Fk(a,b){wk(Ja(a.screens,Sj));b&&yk()}
;function Gk(a,b){U.call(this);this.l=b;for(var c=T("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.l(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.b=d;this.j=a;this.g=this.i=NaN;this.f=null;Hk("Initialized with "+L(this.b))}
y(Gk,U);g=Gk.prototype;g.start=function(){var a=parseInt(T("yt-remote-fast-check-period")||"0",10);(this.i=x()-144E5<a?0:a)?Ik(this):(this.i=x()+3E5,S("yt-remote-fast-check-period",this.i),this.Pb())};
g.isEmpty=function(){return fb(this.b)};
g.update=function(){Hk("Updating availability on schedule.");var a=this.l(),b=Ya(this.b,function(b,d){return b&&!!fk(a,d)},this);
Jk(this,b)};
function Kk(a,b,c){var d=Zj(a.j,"/pairing/get_screen_availability");ak(a.j,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.w=function(){I(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Gk.B.w.call(this)};
function Jk(a,b){var c;a:if(Za(b)!=Za(a.b))c=!1;else{c=cb(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(Hk("Updated online screens: "+L(a.b)),a.b=b,a.u("screenChange"));Lk(a)}
function Ik(a){isNaN(a.g)||I(a.g);a.g=H(w(a.Pb,a),0<a.i&&a.i<x()?2E4:1E4)}
g.Pb=function(){I(this.g);this.g=NaN;this.f&&this.f.abort();var a=Mk(this);if(Za(a)){var b=Zj(this.j,"/pairing/get_screen_availability");this.f=ak(this.j,b,{lounge_token:cb(a).join(",")},w(this.Pd,this,a),w(this.Od,this))}else Jk(this,{}),Ik(this)};
g.Pd=function(a,b){this.f=null;var c;a:{c=cb(Mk(this));var d=cb(a);if(da(c)&&da(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Jk(this,d);Ik(this)}else this.L("Changing Screen set during request."),this.Pb()};
g.Od=function(a){this.L("Screen availability failed: "+a);this.f=null;Ik(this)};
function Hk(a){Nj("OnlineScreenService",a)}
g.L=function(a){Nj("OnlineScreenService",a)};
function Mk(a){var b={};z(a.l(),function(a){a.token?b[a.token]=a.id:this.L("Requesting availability of screen w/o lounge token.")});
return b}
function Lk(a){a=cb(Ya(a.b,function(a){return a}));
a.sort(Wa);a.length?S("yt-remote-online-screen-ids",a.join(","),60):ij("yt-remote-online-screen-ids")}
;function V(a){gk.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};Nk(this)}
y(V,gk);g=V.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.u("screenChange"),this.b.isEmpty()||this.u("onlineScreenChange"))};
g.Ab=function(a,b,c){this.f.Ab(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.xb=function(a,b,c,d){this.f.contains(a)?this.f.xb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Nj(this.l,a),d(Error(a)))};
g.Z=function(a){return a?this.screens:Ra(this.screens,Ia(this.g,function(a){return!this.contains(a)},this))};
g.Jc=function(){return Ia(this.Z(!0),function(a){return!!this.b.b[a.id]},this)};
function Ok(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.Z();if(h=(c?fk(h,c):null)||fk(h,b)){h.uuid=b;var k=Pk(a,h);Kk(a.b,k,function(a){e(a?k:null)})}else c?Qk(a,c,w(function(a){var f=Pk(this,new Qj({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Kk(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Kc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new kk(this.j,a,b,c);f.subscribe("pairingComplete",w(function(a){E(f);d(Pk(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return w(f.stop,f)};
function Rk(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.ye=function(a,b,c,d){Jd(Zj(this.j,"/pairing/get_screen"),{method:"POST",V:{pairing_code:a},timeout:5E3,ea:w(function(a,d){var h=new Qj(d.screen||{});if(!h.name||Rk(this,h.name)){var k;a:{k=h.name;for(var m=2,n=b(k,m);Rk(this,n);){m++;if(20<m)break a;n=b(k,m)}k=n}h.name=k}c(Pk(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
Fa:w(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){E(this.f);E(this.b);V.B.w.call(this)};
function Qk(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={V:{screen_ids:b},method:"POST",context:a,ea:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Jd(Zj(a.j,"/pairing/get_lounge_token_batch"),e)}
function Sk(a){a.screens=a.f.Z();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Wj(a.screens))}
g.pd=function(){Sk(this);this.u("screenChange");this.b.update()};
function Nk(a){Tk(a);a.f=new Ck(a.j);a.f.subscribe("screenChange",w(a.pd,a));Sk(a);a.g=Uj(T("yt-remote-automatic-screen-cache")||[]);Tk(a);a.info("Initializing automatic screens: "+Wj(a.g));a.b=new Gk(a.j,w(a.Z,a,!0));a.b.subscribe("screenChange",w(function(){this.u("onlineScreenChange")},a))}
function Pk(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=fk(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),S("yt-remote-automatic-screen-cache",Ja(a.g,Sj)));Tk(a);a.i[b.uuid]=b.id;S("yt-remote-device-id-map",a.i,31536E3);return b}
function Tk(a){a.i=T("yt-remote-device-id-map")||{}}
V.prototype.dispose=V.prototype.dispose;function Uk(a,b,c){U.call(this);this.O=c;this.G=a;this.b=b;this.g=null}
y(Uk,U);g=Uk.prototype;g.rb=function(a){this.g=a;this.u("sessionScreen",this.g)};
g.$=function(a){this.C()||(a&&Vk(this,""+a),this.g=null,this.u("sessionScreen",null))};
g.info=function(a){Nj(this.O,a)};
function Vk(a,b){Nj(a.O,b)}
g.Mc=function(){return null};
g.Rb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){Vk(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Rb("");Uk.B.w.call(this)};function Wk(a,b){Uk.call(this,a,b,"CastSession");this.f=null;this.i=0;this.l=w(this.ze,this);this.j=w(this.$d,this);this.i=H(w(function(){Xk(this,null)},this),12E4)}
y(Wk,Uk);g=Wk.prototype;g.Qb=function(a){if(this.f){if(this.f==a)return;Vk(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.l);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.f=a;this.f.addUpdateListener(this.l);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);Yk(this)};
g.Oa=function(a){this.info("launchWithParams no-op for Cast: "+L(a))};
g.stop=function(){this.f?this.f.stop(w(function(){this.$()},this),w(function(){this.$(Error("Failed to stop receiver app."))},this)):this.$(Error("Stopping cast device witout session."))};
g.Rb=t;g.w=function(){this.info("disposeInternal");I(this.i);this.i=0;this.f&&(this.f.removeUpdateListener(this.l),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.f=null;Wk.B.w.call(this)};
function Yk(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+L(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,w(function(){Vk(this,"Failed to send message: getMdxSessionStatus.")},a)):Vk(a,"Sending yt message without session: "+L(b))}
g.$d=function(a,b){if(!this.C())if(b){var c=jd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":Xk(this,c.screenId);break;default:Vk(this,"Unknown youtube message: "+d)}}else Vk(this,"Unable to parse message.")}else Vk(this,"No data in message.")};
function Xk(a,b){I(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=w(a.rb,a),d=w(a.$,a);a.hc(b,c,d,5)}}else a.$(Error("Waiting for session status timed out."))}
g.hc=function(a,b,c,d){Ok(this.G,this.b.label,a,this.b.friendlyName,w(function(e){e?b(e):0<=d?(Vk(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(w(this.hc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Mc=function(){return this.f};
g.ze=function(a){this.C()||a||(Vk(this,"Cast session died."),this.$())};function Zk(a,b){Uk.call(this,a,b,"DialSession");this.i=this.F=null;this.K="";this.j=null;this.A=t;this.l=NaN;this.N=w(this.Ce,this);this.f=t}
y(Zk,Uk);g=Zk.prototype;g.Qb=function(a){this.i=a;this.i.addUpdateListener(this.N)};
g.Oa=function(a){this.j=a;this.A()};
g.stop=function(){this.f();this.f=t;I(this.l);this.i?this.i.stop(w(this.$,this,null),w(this.$,this,"Failed to stop DIAL device.")):this.$()};
g.w=function(){this.f();this.f=t;I(this.l);this.i&&this.i.removeUpdateListener(this.N);this.i=null;Zk.B.w.call(this)};
function $k(a){a.f=a.G.Kc(a.K,a.b.label,a.b.friendlyName,w(function(a){this.f=t;this.rb(a)},a),w(function(a){this.f=t;
this.$(a)},a))}
g.Ce=function(a){this.C()||a||(Vk(this,"DIAL session died."),this.f(),this.f=t,this.$())};
function al(a){var b={};b.pairingCode=a.K;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Bk()&&(b.env_useStageMdx=1);return yd(b)}
g.Mb=function(a){this.K=bk();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,al(this));a(b);$k(this)}else this.A=w(function(){I(this.l);this.A=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,al(this));a(b);$k(this)},this),this.l=H(w(function(){this.A()},this),100)};
g.qd=function(a,b){Ok(this.G,this.F.receiver.label,a,this.b.friendlyName,w(function(a){a&&a.token?(this.rb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Mb(b)},this),w(function(a){Vk(this,"Failed to get DIAL screen: "+a);
this.Mb(b)},this))};function bl(a,b){Uk.call(this,a,b,"ManualSession");this.f=H(w(this.Oa,this,null),150)}
y(bl,Uk);bl.prototype.stop=function(){this.$()};
bl.prototype.Qb=t;bl.prototype.Oa=function(){I(this.f);this.f=NaN;var a=fk(this.G.Z(),this.b.label);a?this.rb(a):this.$(Error("No such screen"))};
bl.prototype.w=function(){I(this.f);this.f=NaN;bl.B.w.call(this)};function W(a){U.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=w(this.Md,this)}
y(W,U);g=W.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.uc,this),w(this.Nd,this),d,e);c.customDialLaunchCallback=w(this.Bd,this);chrome.cast.initialize(c,w(function(){this.C()||(chrome.cast.addReceiverActionListener(this.i),Jj(),
this.f.subscribe("onlineScreenChange",w(this.Lc,this)),this.g=cl(this),chrome.cast.setCustomReceivers(this.g,t,w(function(a){this.L("Failed to set initial custom receivers: "+L(a))},this)),this.u("yt-remote-cast2-availability-change",dl(this)),b(!0))},this),w(function(a){this.L("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ne=function(a,b){el("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)el("Unsetting old screen status: "+this.b.b.friendlyName),E(this.b),this.b=null}if(a&&b){if(!this.b){c=fk(this.f.Z(),a);if(!c){el("setConnectedScreenStatus: Unknown screen.");return}var d=fl(this,c);d||(el("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,w(function(a){this.L("Failed to set initial custom receivers: "+L(a))},this)));
el("setConnectedScreenStatus: new active receiver: "+d.friendlyName);gl(this,new bl(this.f,d),!0)}this.b.Rb(b)}else el("setConnectedScreenStatus: no screen.")};
function fl(a,b){return b?Ma(a.g,function(a){return Rj(b,a.label)},a):null}
g.oe=function(a){this.C()?this.L("Setting connection data on disposed cast v2"):this.b?this.b.Oa(a):this.L("Setting connection data without a session")};
g.Be=function(){this.C()?this.L("Stopping session on disposed cast v2"):this.b?(this.b.stop(),E(this.b),this.b=null):el("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.uc,this),w(this.Qd,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",w(this.Lc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=Kj,b=r("yt.mdx.remote.debug.handlers_");Pa(b||[],a);E(this.b);W.B.w.call(this)};
function el(a){Nj("Controller",a)}
g.L=function(a){Nj("Controller",a)};
function Kj(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function dl(a){return a.j||!!a.g.length||!!a.b}
function gl(a,b,c){E(a.b);(a.b=b)?(c?a.u("yt-remote-cast2-receiver-resumed",b.b):a.u("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",w(a.wc,a,b)),b.g?a.u("yt-remote-cast2-session-change",b.g):c&&a.b.Oa(null)):a.u("yt-remote-cast2-session-change",null)}
g.wc=function(a,b){this.b==a&&(b||gl(this,null),this.u("yt-remote-cast2-session-change",b))};
g.Md=function(a,b){if(!this.C())if(a)switch(el("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)el("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{el("onReceiverAction_: Casting to active receiver.");this.b.g&&this.u("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:gl(this,new bl(this.f,a));break;case chrome.cast.ReceiverType.DIAL:gl(this,
new Zk(this.f,a));break;case chrome.cast.ReceiverType.CAST:gl(this,new Wk(this.f,a));break;default:this.L("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.L("Stopping receiver w/o session: "+a.friendlyName)}else this.L("onReceiverAction_ called without receiver.")};
g.Bd=function(a){if(this.C())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.L("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.L("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return el("Reselecting dial screen."),
this.u("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.L('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);gl(this,new Zk(this.f,b))}b=this.b;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.qd,b,(b.F.extraData||{}).screenId||null)):new Promise(w(b.Mb,b))};
g.uc=function(a){if(!this.C()){el("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)el("Got resumed cast session before resumed mdx connection."),gl(this,new Wk(this.f,b),!0);else{this.L("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=fk(this.f.Z(),c.label);d&&Rj(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(el("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.b),this.b=new Wk(this.f,b),this.b.subscribe("sessionScreen",w(this.wc,this,this.b)),this.b.Oa(null));this.b.Qb(a)}}};
g.Ae=function(){return this.b?this.b.Mc():null};
g.Qd=function(a){this.C()||(this.L("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&gl(this,null))};
g.Nd=function(a){el("Receiver availability updated: "+a);if(!this.C()){var b=dl(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;dl(this)!=b&&this.u("yt-remote-cast2-availability-change",dl(this))}};
function cl(a){var b=a.f.Jc(),c=a.b&&a.b.b;a=Ja(b,function(a){c&&Rj(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=fl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Lc=function(){if(!this.C()){var a=dl(this);this.g=cl(this);el("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,w(function(){this.L("Failed to set custom receivers.")},this));
var b=dl(this);b!=a&&this.u("yt-remote-cast2-availability-change",b)}};
W.prototype.setLaunchParams=W.prototype.oe;W.prototype.setConnectedScreenStatus=W.prototype.ne;W.prototype.stopSession=W.prototype.Be;W.prototype.getCastSession=W.prototype.Ae;W.prototype.requestSession=W.prototype.requestSession;W.prototype.init=W.prototype.init;W.prototype.dispose=W.prototype.dispose;function hl(a,b,c){il()?kl(a)&&(ll(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?ml(b):(window.__onGCastApiAvailable=function(a,c){a?ml(b):(nl("Failed to load cast API: "+c),ol(!1),ll(!1),ij("yt-remote-cast-available"),ij("yt-remote-cast-receiver"),pl(),b(!1))},c?nc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Dj())):jl("Cannot initialize because not running Chrome")}
function pl(){jl("dispose");var a=ql();a&&a.dispose();rl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);sl(!1);jc(tl);tl.length=0}
function ul(){return!!T("yt-remote-cast-installed")}
function vl(){var a=T("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in l?za(a):Ba(a):a):a=null;return a}
function wl(){jl("clearCurrentReciever");ij("yt-remote-cast-receiver")}
function xl(){ul()?ql()?yl()?(jl("Requesting cast selector."),rl.requestSession()):(jl("Wait for cast API to be ready to request the session."),tl.push(hc("yt-remote-cast2-api-ready",xl))):nl("requestCastSelector: Cast is not initialized."):nl("requestCastSelector: Cast API is not installed!")}
function zl(a){yl()?ql().setLaunchParams(a):nl("setLaunchParams called before ready.")}
function Al(a,b){yl()?ql().setConnectedScreenStatus(a,b):nl("setConnectedScreenStatus called before ready.")}
var rl=null;function il(){var a;a=0<=lb.search(/\ (CrMo|Chrome|CriOS)\//);return kf||a}
function kl(a){var b=!1;if(!rl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new W(a),c.subscribe("yt-remote-cast2-availability-change",function(a){S("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){jl("onReceiverSelected: "+a.friendlyName);
S("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){jl("onReceiverResumed: "+a.friendlyName);
S("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){jl("onSessionChange: "+Vj(a));
a||ij("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
rl=c}jl("cloudview.createSingleton_: "+b);return b}
function ql(){rl||(rl=r("yt.mdx.remote.cloudview.instance_"));return rl}
function ml(a){ol(!0);ll(!1);rl.init(!0,function(b){b?(sl(!0),J("yt-remote-cast2-api-ready")):(nl("Failed to initialize cast API."),ol(!1),ij("yt-remote-cast-available"),ij("yt-remote-cast-receiver"),pl());a(b)})}
function jl(a){Nj("cloudview",a)}
function nl(a){Nj("cloudview",a)}
function ol(a){jl("setCastInstalled_ "+a);S("yt-remote-cast-installed",a)}
function yl(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function sl(a){jl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function ll(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var tl=[];function Bl(a,b){this.action=a;this.params=b||null}
;function Cl(){this.b=x()}
new Cl;Cl.prototype.set=function(a){this.b=a};
Cl.prototype.reset=function(){this.set(x())};
Cl.prototype.get=function(){return this.b};function Dl(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.f=!1;this.Cc=!0}
Dl.prototype.stopPropagation=function(){this.f=!0};
Dl.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Cc=!1};var El=!K||fd(9),Fl=K&&!ed("9");!Wc||ed("528");Vc&&ed("1.9b")||K&&ed("8")||Tc&&ed("9.5")||Wc&&ed("528");Vc&&!ed("8")||K&&ed("9");function Gl(a,b){Dl.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.button=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.g=this.state=null;a&&this.init(a,b)}
y(Gl,Dl);
Gl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;var e=a.relatedTarget;if(e){if(Vc){var f;a:{try{Ve(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Gl.prototype.stopPropagation=function(){Gl.B.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Gl.prototype.preventDefault=function(){Gl.B.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Hl="closure_listenable_"+(1E6*Math.random()|0),Il=0;function Jl(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.jb=!!d;this.nb=e;this.key=++Il;this.Qa=this.ib=!1}
function Kl(a){a.Qa=!0;a.listener=null;a.b=null;a.src=null;a.nb=null}
;function Ll(a){this.src=a;this.b={};this.f=0}
function Ml(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=Nl(b,c,d,e);-1<h?(a=b[h],a.ib=!1):(a=new Jl(c,a.src,f,!!d,e),a.ib=!1,b.push(a));return a}
Ll.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Nl(e,b,c,d);return-1<b?(Kl(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function Ol(a,b){var c=b.type;c in a.b&&Pa(a.b[c],b)&&(Kl(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function Pl(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=Nl(a,c,d,e));return-1<b?a[b]:null}
function Nl(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qa&&f.listener==b&&f.jb==!!c&&f.nb==d)return e}return-1}
;var Ql="closure_lm_"+(1E6*Math.random()|0),Rl={},Sl=0;
function Tl(a,b,c,d,e){if(u(b)){for(var f=0;f<b.length;f++)Tl(a,b[f],c,d,e);return null}c=Ul(c);if(a&&a[Hl])a=a.ob(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Vl(a);h||(a[Ql]=h=new Ll(a));c=Ml(h,b,c,d,e);if(!c.b){d=Wl();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Xl(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Sl++}a=c}return a}
function Wl(){var a=Yl,b=El?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Zl(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)Zl(a,b[f],c,d,e);else c=Ul(c),a&&a[Hl]?a.wb(b,c,d,e):a&&(a=Vl(a))&&(b=Pl(a,b,c,!!d,e))&&$l(b)}
function $l(a){if(!ea(a)&&a&&!a.Qa){var b=a.src;if(b&&b[Hl])Ol(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.jb):b.detachEvent&&b.detachEvent(Xl(c),d);Sl--;(c=Vl(b))?(Ol(c,a),0==c.f&&(c.src=null,b[Ql]=null)):Kl(a)}}}
function Xl(a){return a in Rl?Rl[a]:Rl[a]="on"+a}
function am(a,b,c,d){var e=!0;if(a=Vl(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.jb==c&&!f.Qa&&(f=bm(f,d),e=e&&!1!==f)}return e}
function bm(a,b){var c=a.listener,d=a.nb||a.src;a.ib&&$l(a);return c.call(d,b)}
function Yl(a,b){if(a.Qa)return!0;if(!El){var c=b||r("window.event"),d=new Gl(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.b;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.f&&0<=h;h--){d.b=c[h];var k=am(c[h],f,!0,d),e=e&&k}for(h=0;!d.f&&h<c.length;h++)d.b=c[h],k=am(c[h],f,!1,d),e=e&&k}return e}return bm(a,new Gl(b,this))}
function Vl(a){a=a[Ql];return a instanceof Ll?a:null}
var cm="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ul(a){if(fa(a))return a;a[cm]||(a[cm]=function(b){return a.handleEvent(b)});
return a[cm]}
;function dm(){D.call(this);this.g=new Ll(this);this.sa=this;this.Y=null}
y(dm,D);dm.prototype[Hl]=!0;g=dm.prototype;g.addEventListener=function(a,b,c,d){Tl(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Zl(this,a,b,c,d)};
function em(a,b){var c,d=a.Y;if(d){c=[];for(var e=1;d;d=d.Y)c.push(d),++e}var d=a.sa,e=b,f=e.type||e;if(v(e))e=new Dl(e,d);else if(e instanceof Dl)e.target=e.target||d;else{var h=e,e=new Dl(f,d);kb(e,h)}var h=!0,k;if(c)for(var m=c.length-1;!e.f&&0<=m;m--)k=e.b=c[m],h=fm(k,f,!0,e)&&h;e.f||(k=e.b=d,h=fm(k,f,!0,e)&&h,e.f||(h=fm(k,f,!1,e)&&h));if(c)for(m=0;!e.f&&m<c.length;m++)k=e.b=c[m],h=fm(k,f,!1,e)&&h}
g.w=function(){dm.B.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,Kl(d[e]);delete a.b[c];a.f--}}this.Y=null};
g.ob=function(a,b,c,d){return Ml(this.g,String(a),b,c,d)};
g.wb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function fm(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Qa&&h.jb==c){var k=h.listener,m=h.nb||h.src;h.ib&&Ol(a.g,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.Cc}
;function gm(a,b){this.f=new ld(a);this.b=b?jd:id}
gm.prototype.stringify=function(a){return kd(this.f,a)};
gm.prototype.parse=function(a){return this.b(a)};function hm(a,b){dm.call(this);this.b=a||1;this.f=b||l;this.i=w(this.qe,this);this.j=x()}
y(hm,dm);g=hm.prototype;g.enabled=!1;g.ca=null;function im(a,b){a.b=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
g.qe=function(){if(this.enabled){var a=x()-this.j;0<a&&a<.8*this.b?this.ca=this.f.setTimeout(this.i,this.b-a):(this.ca&&(this.f.clearTimeout(this.ca),this.ca=null),em(this,"tick"),this.enabled&&(this.ca=this.f.setTimeout(this.i,this.b),this.j=x()))}};
g.start=function(){this.enabled=!0;this.ca||(this.ca=this.f.setTimeout(this.i,this.b),this.j=x())};
g.stop=function(){this.enabled=!1;this.ca&&(this.f.clearTimeout(this.ca),this.ca=null)};
g.w=function(){hm.B.w.call(this);this.stop();delete this.f};
function jm(a,b,c){if(fa(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}
;function km(a,b,c){D.call(this);this.i=null!=c?w(a,c):a;this.g=b;this.f=w(this.Sd,this);this.b=[]}
y(km,D);g=km.prototype;g.Ra=!1;g.eb=0;g.Ba=null;g.gd=function(a){this.b=arguments;this.Ba||this.eb?this.Ra=!0:lm(this)};
g.stop=function(){this.Ba&&(l.clearTimeout(this.Ba),this.Ba=null,this.Ra=!1,this.b=[])};
g.pause=function(){this.eb++};
g.resume=function(){this.eb--;this.eb||!this.Ra||this.Ba||(this.Ra=!1,lm(this))};
g.w=function(){km.B.w.call(this);this.stop()};
g.Sd=function(){this.Ba=null;this.Ra&&!this.eb&&(this.Ra=!1,lm(this))};
function lm(a){a.Ba=jm(a.f,a.g);a.i.apply(null,a.b)}
;function mm(a){D.call(this);this.f=a;this.b={}}
y(mm,D);var nm=[];mm.prototype.ob=function(a,b,c,d){u(b)||(b&&(nm[0]=b.toString()),b=nm);for(var e=0;e<b.length;e++){var f=Tl(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
mm.prototype.wb=function(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)this.wb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=Ul(c),d=!!d,b=a&&a[Hl]?Pl(a.g,String(b),c,d,e):a?(a=Vl(a))?Pl(a,b,c,d,e):null:null,b&&($l(b),delete this.b[b.key]);return this};
function om(a){Xa(a.b,function(a,c){this.b.hasOwnProperty(c)&&$l(a)},a);
a.b={}}
mm.prototype.w=function(){mm.B.w.call(this);om(this)};
mm.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function pm(){}
pm.prototype.b=null;function qm(a){var b;(b=a.b)||(b={},rm(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var sm;function tm(){}
y(tm,pm);function um(a){return(a=rm(a))?new ActiveXObject(a):new XMLHttpRequest}
function rm(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
sm=new tm;function vm(a,b,c,d,e){this.b=a;this.g=c;this.A=d;this.l=e||1;this.j=45E3;this.i=new mm(this);this.f=new hm;im(this.f,250)}
g=vm.prototype;g.Ca=null;g.ia=!1;g.Ta=null;g.Tb=null;g.fb=null;g.Sa=null;g.ta=null;g.wa=null;g.Ga=null;g.M=null;g.hb=0;g.ja=null;g.zb=null;g.Da=null;g.bb=-1;g.Dc=!0;g.ya=!1;g.Lb=0;g.tb=null;var wm={},xm={};g=vm.prototype;g.setTimeout=function(a){this.j=a};
function ym(a,b,c){a.Sa=1;a.ta=zg(b.clone());a.Ga=c;a.o=!0;zm(a,null)}
function Am(a,b,c,d,e){a.Sa=1;a.ta=zg(b.clone());a.Ga=null;a.o=c;e&&(a.Dc=!1);zm(a,d)}
function zm(a,b){a.fb=x();Bm(a);a.wa=a.ta.clone();xg(a.wa,"t",a.l);a.hb=0;a.M=a.b.Fb(a.b.gb()?b:null);0<a.Lb&&(a.tb=new km(w(a.Ic,a,a.M),a.Lb));a.i.ob(a.M,"readystatechange",a.ce);var c=a.Ca?hb(a.Ca):{};a.Ga?(a.zb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.M.send(a.wa,a.zb,a.Ga,c)):(a.zb="GET",a.Dc&&!Wc&&(c.Connection="close"),a.M.send(a.wa,a.zb,null,c));a.b.ha(1)}
g.ce=function(a){a=a.target;var b=this.tb;b&&3==Cm(a)?b.gd():this.Ic(a)};
g.Ic=function(a){try{if(a==this.M)a:{var b=Cm(this.M),c=this.M.j,d=this.M.getStatus();if(K&&!fd(10)||Wc&&!ed("420+")){if(4>b)break a}else if(3>b||3==b&&!Tc&&!Dm(this.M))break a;this.ya||4!=b||7==c||(8==c||0>=d?this.b.ha(3):this.b.ha(2));Em(this);var e=this.M.getStatus();this.bb=e;var f=Dm(this.M);(this.ia=200==e)?(4==b&&Fm(this),this.o?(Gm(this,b,f),Tc&&this.ia&&3==b&&(this.i.ob(this.f,"tick",this.ae),this.f.start())):Hm(this,f),this.ia&&!this.ya&&(4==b?this.b.qb(this):(this.ia=!1,Bm(this)))):(this.Da=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),Fm(this),Im(this))}}catch(h){}finally{}};
function Gm(a,b,c){for(var d=!0;!a.ya&&a.hb<c.length;){var e=Jm(a,c);if(e==xm){4==b&&(a.Da=4,X(),d=!1);break}else if(e==wm){a.Da=4;X();d=!1;break}else Hm(a,e)}4==b&&0==c.length&&(a.Da=1,X(),d=!1);a.ia=a.ia&&d;d||(Fm(a),Im(a))}
g.ae=function(){var a=Cm(this.M),b=Dm(this.M);this.hb<b.length&&(Em(this),Gm(this,a,b),this.ia&&4!=a&&Bm(this))};
function Jm(a,b){var c=a.hb,d=b.indexOf("\n",c);if(-1==d)return xm;c=Number(b.substring(c,d));if(isNaN(c))return wm;d+=1;if(d+c>b.length)return xm;var e=b.substr(d,c);a.hb=d+c;return e}
function Km(a,b){a.fb=x();Bm(a);var c=b?window.location.hostname:"";a.wa=a.ta.clone();N(a.wa,"DOMAIN",c);N(a.wa,"t",a.l);try{a.ja=new ActiveXObject("htmlfile")}catch(n){Fm(a);a.Da=7;X();Im(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Da)h=Da[h];else if(h in Ca)h=Da[h]=Ca[h];else{var k,m=h.charCodeAt(0);if(31<m&&127>m)k=h;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");
k+=m.toString(16).toUpperCase()}h=Da[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=yb(d+"</body></html>");a.ja.open();a.ja.write(xb(c));a.ja.close();a.ja.parentWindow.m=w(a.Wd,a);a.ja.parentWindow.d=w(a.zc,a,!0);a.ja.parentWindow.rpcClose=w(a.zc,a,!1);c=a.ja.createElement("DIV");a.ja.parentWindow.document.body.appendChild(c);d=tb(a.wa.toString());d=rb(d);ya.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(ra,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(sa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(ta,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(va,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(wa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(xa,"&#0;")));d=yb('<iframe src="'+d+'"></iframe>');c.innerHTML=xb(d);a.b.ha(1)}
g.Wd=function(a){Lm(w(this.Vd,this,a),0)};
g.Vd=function(a){this.ya||(Em(this),Hm(this,a),Bm(this))};
g.zc=function(a){Lm(w(this.Ud,this,a),0)};
g.Ud=function(a){this.ya||(Fm(this),this.ia=a,this.b.qb(this),this.b.ha(4))};
g.cancel=function(){this.ya=!0;Fm(this)};
function Bm(a){a.Tb=x()+a.j;Mm(a,a.j)}
function Mm(a,b){if(null!=a.Ta)throw Error("WatchDog timer not null");a.Ta=Lm(w(a.Yd,a),b)}
function Em(a){a.Ta&&(l.clearTimeout(a.Ta),a.Ta=null)}
g.Yd=function(){this.Ta=null;var a=x();0<=a-this.Tb?(2!=this.Sa&&this.b.ha(3),Fm(this),this.Da=2,X(),Im(this)):Mm(this,this.Tb-a)};
function Im(a){a.b.lc()||a.ya||a.b.qb(a)}
function Fm(a){Em(a);E(a.tb);a.tb=null;a.f.stop();om(a.i);if(a.M){var b=a.M;a.M=null;Nm(b);b.dispose()}a.ja&&(a.ja=null)}
function Hm(a,b){try{a.b.tc(a,b),a.b.ha(4)}catch(c){}}
;function Om(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Pm(a,b,function(e){e?c(!0):l.setTimeout(function(){Om(a,b,c,d,f)},f)})}}
function Pm(a,b,c){var d=new Image;d.onload=function(){try{Qm(d),c(!0)}catch(a){}};
d.onerror=function(){try{Qm(d),c(!1)}catch(a){}};
d.onabort=function(){try{Qm(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{Qm(d),c(!1)}catch(a){}};
l.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function Qm(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Rm(a){this.b=a;this.f=new gm(null,!0)}
g=Rm.prototype;g.Jb=null;g.aa=null;g.ub=!1;g.Gc=null;g.kb=null;g.Nb=null;g.Kb=null;g.da=null;g.ra=-1;g.ab=null;g.Xa=null;g.connect=function(a){this.Kb=a;a=Sm(this.b,null,this.Kb);X();this.Gc=x();var b=this.b.A;null!=b?(this.ab=b[0],(this.Xa=b[1])?(this.da=1,Tm(this)):(this.da=2,Um(this))):(xg(a,"MODE","init"),this.aa=new vm(this,0,void 0,void 0,void 0),this.aa.Ca=this.Jb,Am(this.aa,a,!1,null,!0),this.da=0)};
function Tm(a){var b=Sm(a.b,a.Xa,"/mail/images/cleardot.gif");zg(b);Om(b.toString(),5E3,w(a.cd,a),3,2E3);a.ha(1)}
g.cd=function(a){if(a)this.da=2,Um(this);else{X();var b=this.b;b.ga=b.ua.ra;Vm(b,9)}a&&this.ha(2)};
function Um(a){var b=a.b.R;if(null!=b)X(),b?(X(),Wm(a.b,a,!1)):(X(),Wm(a.b,a,!0));else if(a.aa=new vm(a,0,void 0,void 0,void 0),a.aa.Ca=a.Jb,b=a.b,b=Sm(b,b.gb()?a.ab:null,a.Kb),X(),!K||fd(10))xg(b,"TYPE","xmlhttp"),Am(a.aa,b,!1,a.ab,!1);else{xg(b,"TYPE","html");var c=a.aa;a=!!a.ab;c.Sa=3;c.ta=zg(b.clone());Km(c,a)}}
g.Fb=function(a){return this.b.Fb(a)};
g.lc=function(){return!1};
g.tc=function(a,b){this.ra=a.bb;if(0==this.da)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.ga=this.ra;Vm(c,2);return}this.ab=c[0];this.Xa=c[1]}else c=this.b,c.ga=this.ra,Vm(c,2);else if(2==this.da)if(this.ub)X(),this.Nb=x();else if("11111"==b){if(X(),this.ub=!0,this.kb=x(),c=this.kb-this.Gc,!K||fd(10)||500>c)this.ra=200,this.aa.cancel(),X(),Wm(this.b,this,!0)}else X(),this.kb=this.Nb=x(),this.ub=!1};
g.qb=function(){this.ra=this.aa.bb;if(this.aa.ia)0==this.da?this.Xa?(this.da=1,Tm(this)):(this.da=2,Um(this)):2==this.da&&((!K||fd(10)?!this.ub:200>this.Nb-this.kb)?(X(),Wm(this.b,this,!1)):(X(),Wm(this.b,this,!0)));else{0==this.da?X():2==this.da&&X();var a=this.b;a.ga=this.ra;Vm(a,2)}};
g.gb=function(){return this.b.gb()};
g.isActive=function(){return this.b.isActive()};
g.ha=function(a){this.b.ha(a)};function Xm(a){dm.call(this);this.headers=new Ec;this.K=a||null;this.f=!1;this.G=this.b=null;this.X="";this.j=0;this.o="";this.i=this.O=this.l=this.N=!1;this.F=0;this.A=null;this.na="";this.ba=this.la=!1}
y(Xm,dm);var Ym=/^https?$/i,Zm=["POST","PUT"];g=Xm.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.j=0;this.N=!1;this.f=!0;this.b=this.K?um(this.K):um(sm);this.G=this.K?qm(this.K):qm(sm);this.b.onreadystatechange=w(this.sc,this);try{this.getStatus(),this.O=!0,this.b.open(b,String(a),!0),this.O=!1}catch(f){this.getStatus();$m(this,f);return}a=c||"";var e=this.headers.clone();d&&Mc(d,function(a,b){e.set(b,a)});
d=Ma(e.ma(),an);c=l.FormData&&a instanceof l.FormData;!A(Zm,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.na&&(this.b.responseType=this.na);"withCredentials"in this.b&&this.b.withCredentials!==this.la&&(this.b.withCredentials=this.la);try{bn(this),0<this.F&&(this.ba=cn(this.b),this.getStatus(),this.ba?(this.b.timeout=this.F,this.b.ontimeout=w(this.jc,this)):this.A=jm(this.jc,this.F,this)),this.getStatus(),this.l=!0,this.b.send(a),this.l=!1}catch(f){this.getStatus(),$m(this,f)}};
function cn(a){return K&&ed(9)&&ea(a.timeout)&&p(a.ontimeout)}
function an(a){return"content-type"==a.toLowerCase()}
g.jc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.F+"ms, aborting",this.j=8,this.getStatus(),em(this,"timeout"),Nm(this,8))};
function $m(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;dn(a);en(a)}
function dn(a){a.N||(a.N=!0,em(a,"complete"),em(a,"error"))}
function Nm(a,b){a.b&&a.f&&(a.getStatus(),a.f=!1,a.i=!0,a.b.abort(),a.i=!1,a.j=b||7,em(a,"complete"),em(a,"abort"),en(a))}
g.w=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),en(this,!0));Xm.B.w.call(this)};
g.sc=function(){this.C()||(this.O||this.l||this.i?fn(this):this.Kd())};
g.Kd=function(){fn(this)};
function fn(a){if(a.f&&"undefined"!=typeof aa)if(a.G[1]&&4==Cm(a)&&2==a.getStatus())a.getStatus();else if(a.l&&4==Cm(a))jm(a.sc,0,a);else if(em(a,"readystatechange"),4==Cm(a)){a.getStatus();a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=sd(1,String(a.X));if(!f&&l.self&&l.self.location)var h=l.self.location.protocol,f=h.substr(0,h.length-1);e=!Ym.test(f?f.toLowerCase():"")}d=
e}if(d)em(a,"complete"),em(a,"success");else{a.j=6;var k;try{k=2<Cm(a)?a.b.statusText:""}catch(m){k=""}a.o=k+" ["+a.getStatus()+"]";dn(a)}}finally{en(a)}}}
function en(a,b){if(a.b){bn(a);var c=a.b,d=a.G[0]?t:null;a.b=null;a.G=null;b||em(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function bn(a){a.b&&a.ba&&(a.b.ontimeout=null);ea(a.A)&&(l.clearTimeout(a.A),a.A=null)}
g.isActive=function(){return!!this.b};
function Cm(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Cm(this)?this.b.status:-1}catch(a){return-1}};
function Dm(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function gn(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new gm(null,!0);this.A=b||null;this.R=null!=c?c:null}
function hn(a,b){this.f=a;this.b=b;this.context=null}
g=gn.prototype;g.Za=null;g.W=null;g.J=null;g.Ib=null;g.lb=null;g.$b=null;g.mb=null;g.cb=0;g.vd=0;g.P=null;g.va=null;g.qa=null;g.Aa=null;g.ua=null;g.yb=null;g.Na=-1;g.mc=-1;g.ga=-1;g.$a=0;g.Ma=0;g.za=8;var jn=new dm;function kn(a){Dl.call(this,"statevent",a)}
y(kn,Dl);function ln(a,b){Dl.call(this,"timingevent",a);this.size=b}
y(ln,Dl);function mn(a){Dl.call(this,"serverreachability",a)}
y(mn,Dl);g=gn.prototype;g.connect=function(a,b,c,d,e){X();this.Ib=b;this.Za=c||{};d&&p(e)&&(this.Za.OSID=d,this.Za.OAID=e);this.ua=new Rm(this);this.ua.Jb=null;this.ua.f=this.j;this.ua.connect(a)};
function nn(a){on(a);if(3==a.b){var b=a.cb++,c=a.lb.clone();N(c,"SID",a.g);N(c,"RID",b);N(c,"TYPE","terminate");pn(a,c);b=new vm(a,0,a.g,b,void 0);b.Sa=2;b.ta=zg(c.clone());(new Image).src=b.ta;b.fb=x();Bm(b)}qn(a)}
function on(a){if(a.ua){var b=a.ua;b.aa&&(b.aa.cancel(),b.aa=null);b.ra=-1;a.ua=null}a.J&&(a.J.cancel(),a.J=null);a.qa&&(l.clearTimeout(a.qa),a.qa=null);rn(a);a.W&&(a.W.cancel(),a.W=null);a.va&&(l.clearTimeout(a.va),a.va=null)}
function sn(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new hn(a.vd++,b));2!=a.b&&3!=a.b||tn(a)}
g.lc=function(){return 0==this.b};
function tn(a){a.W||a.va||(a.va=Lm(w(a.yc,a),0),a.$a=0)}
g.yc=function(a){this.va=null;un(this,a)};
function un(a,b){if(1==a.b){if(!b){a.cb=Math.floor(1E5*Math.random());var c=a.cb++,d=new vm(a,0,"",c,void 0);d.Ca=null;var e=vn(a),f=a.lb.clone();N(f,"RID",c);a.l&&N(f,"CVER",a.l);pn(a,f);ym(d,f,e);a.W=d;a.b=2}}else 3==a.b&&(b?wn(a,b):0!=a.f.length&&(a.W||wn(a)))}
function wn(a,b){var c,d;b?6<a.za?(a.f=a.i.concat(a.f),a.i.length=0,c=a.cb-1,d=vn(a)):(c=b.A,d=b.Ga):(c=a.cb++,d=vn(a));var e=a.lb.clone();N(e,"SID",a.g);N(e,"RID",c);N(e,"AID",a.Na);pn(a,e);c=new vm(a,0,a.g,c,a.$a+1);c.Ca=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.W=c;ym(c,e,d)}
function pn(a,b){if(a.P){var c=a.P.gc(a);c&&Xa(c,function(a,c){N(b,c,a)})}}
function vn(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.za&&0<b?(d=a.f[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b,f=6>=a.za?e:f-d;try{Mc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function xn(a){a.J||a.qa||(a.o=1,a.qa=Lm(w(a.xc,a),0),a.Ma=0)}
function yn(a){if(a.J||a.qa||3<=a.Ma)return!1;a.o++;a.qa=Lm(w(a.xc,a),zn(a,a.Ma));a.Ma++;return!0}
g.xc=function(){this.qa=null;this.J=new vm(this,0,this.g,"rpc",this.o);this.J.Ca=null;this.J.Lb=0;var a=this.$b.clone();N(a,"RID","rpc");N(a,"SID",this.g);N(a,"CI",this.yb?"0":"1");N(a,"AID",this.Na);pn(this,a);if(!K||fd(10))N(a,"TYPE","xmlhttp"),Am(this.J,a,!0,this.mb,!1);else{N(a,"TYPE","html");var b=this.J,c=!!this.mb;b.Sa=3;b.ta=zg(a.clone());Km(b,c)}};
function Wm(a,b,c){a.yb=c;a.ga=b.ra;a.fd(1,0);a.lb=Sm(a,null,a.Ib);tn(a)}
g.tc=function(a,b){if(0!=this.b&&(this.J==a||this.W==a))if(this.ga=a.bb,this.W==a&&3==this.b)if(7<this.za){var c;try{c=this.j.parse(b)}catch(f){c=null}if(u(c)&&3==c.length)if(0==c[0])a:{if(!this.qa){if(this.J)if(this.J.fb+3E3<this.W.fb)rn(this),this.J.cancel(),this.J=null;else break a;yn(this);X()}}else this.mc=c[1],0<this.mc-this.Na&&37500>c[2]&&this.yb&&0==this.Ma&&!this.Aa&&(this.Aa=Lm(w(this.wd,this),6E3));else Vm(this,11)}else b!=He.He.b&&Vm(this,11);else if(this.J==a&&rn(this),!/^[\s\xa0]*$/.test(b)){c=
this.j.parse(b);u(c);for(var d=0;d<c.length;d++){var e=c[d];this.Na=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.mb=e[2],e=e[3],null!=e?this.za=e:this.za=6,this.b=3,this.P&&this.P.ec(this),this.$b=Sm(this,this.gb()?this.mb:null,this.Ib),xn(this)):"stop"==e[0]&&Vm(this,7):3==this.b&&("stop"==e[0]?Vm(this,7):"noop"!=e[0]&&this.P&&this.P.dc(this,e),this.Ma=0)}}};
g.wd=function(){null!=this.Aa&&(this.Aa=null,this.J.cancel(),this.J=null,yn(this),X())};
function rn(a){null!=a.Aa&&(l.clearTimeout(a.Aa),a.Aa=null)}
g.qb=function(a){var b;if(this.J==a)rn(this),this.J=null,b=2;else if(this.W==a)this.W=null,b=1;else return;this.ga=a.bb;if(0!=this.b)if(a.ia)1==b?(x(),em(jn,new ln(jn,a.Ga?a.Ga.length:0)),tn(this),this.i.length=0):xn(this);else{var c=a.Da,d;if(!(d=3==c||7==c||0==c&&0<this.ga)){if(d=1==b)this.W||this.va||1==this.b||2<=this.$a?d=!1:(this.va=Lm(w(this.yc,this,a),zn(this,this.$a)),this.$a++,d=!0);d=!(d||2==b&&yn(this))}if(d)switch(c){case 1:Vm(this,5);break;case 4:Vm(this,10);break;case 3:Vm(this,6);
break;case 7:Vm(this,12);break;default:Vm(this,2)}}};
function zn(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.fd=function(a){if(!A(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function Vm(a,b){if(2==b||9==b){var c=null;a.P&&(c=null);var d=w(a.pe,a);c||(c=new jg("//www.google.com/images/cleardot.gif"),zg(c));Pm(c.toString(),1E4,d)}else X();An(a,b)}
g.pe=function(a){a?X():(X(),An(this,8))};
function An(a,b){a.b=0;a.P&&a.P.cc(a,b);qn(a);on(a)}
function qn(a){a.b=0;a.ga=-1;if(a.P)if(0==a.i.length&&0==a.f.length)a.P.Db(a);else{var b=Sa(a.i),c=Sa(a.f);a.i.length=0;a.f.length=0;a.P.Db(a,b,c)}}
function Sm(a,b,c){var d=Ag(c);if(""!=d.f)b&&lg(d,b+"."+d.f),mg(d,d.l);else var e=window.location,d=Bg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.Za&&Xa(a.Za,function(a,b){N(d,b,a)});
N(d,"VER",a.za);pn(a,d);return d}
g.Fb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Xm;a.la=!1;return a};
g.isActive=function(){return!!this.P&&this.P.isActive(this)};
function Lm(a,b){if(!fa(a))throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},b)}
g.ha=function(){em(jn,new mn(jn))};
function X(){em(jn,new kn(jn))}
g.gb=function(){return!(!K||fd(10))};
function Bn(){}
g=Bn.prototype;g.ec=function(){};
g.dc=function(){};
g.cc=function(){};
g.Db=function(){};
g.gc=function(){return{}};
g.isActive=function(){return!0};function Cn(a,b){hm.call(this);this.o=0;if(fa(a))b&&(a=w(a,b));else if(a&&fa(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a;Tl(this,"tick",w(this.l,this));Dn(this)}
y(Cn,hm);Cn.prototype.l=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);im(this,a)}this.A()};
Cn.prototype.start=function(){Cn.B.start.call(this);this.o=x()+this.b};
Cn.prototype.stop=function(){this.o=0;Cn.B.stop.call(this)};
function Dn(a){a.stop();im(a,5E3+2E4*Math.random())}
;function En(a,b){this.G=a;this.o=b;this.g=new F;this.f=new Cn(this.te,this);this.b=null;this.F=!1;this.j=null;this.R="";this.A=this.i=0;this.l=[]}
y(En,Bn);g=En.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.ka=function(a){return this.g.ka(a)};
g.u=function(a,b){return this.g.u.apply(this.g,arguments)};
g.dispose=function(){this.F||(this.F=!0,this.g.clear(),Fn(this),E(this.g))};
g.C=function(){return this.F};
function Gn(a){return{firstTestResults:[""],secondTestResults:!a.b.yb,sessionId:a.b.g,arrayId:a.b.Na}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.R="";this.f.stop();this.j=a||null;this.i=b||0;a=this.G+"/test";b=this.G+"/bind";var d=new gn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.P=null);d.P=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Na):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function Fn(a,b){a.A=b||0;a.f.stop();a.b&&(3==a.b.b&&un(a.b),nn(a.b));a.A=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&kb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.l.push(c):Hn(this)&&sn(this.b,c)};
g.ec=function(){Dn(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)sn(this.b,a[b])}this.u("handlerOpened")};
g.cc=function(a,b){var c=2==b&&401==this.b.ga;if(4!=b&&!c){if(6==b||410==this.b.ga)c=this.f,c.stop(),im(c,500);this.f.start()}this.u("handlerError",b)};
g.Db=function(a,b,c){if(!this.f.enabled)this.u("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].b;d&&this.l.push(d)}};
g.gc=function(){var a={v:2};this.R&&(a.gsessionid=this.R);0!=this.i&&(a.ui=""+this.i);0!=this.A&&(a.ui=""+this.A);this.j&&kb(a,this.j);return a};
g.dc=function(a,b){"S"==b[0]?this.R=b[1]:"gracefulReconnect"==b[0]?(Dn(this.f),this.f.start(),nn(this.b)):this.u("handlerMessage",new Bl(b[0],b[1]))};
function Hn(a){return!!a.b&&3==a.b.b}
function In(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.te=function(){this.f.stop();var a=this.b,b=0;a.J&&b++;a.W&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function Jn(a){this.index=-1;this.videoId=this.f="";this.volume=this.b=-1;this.o=!1;this.audioTrackId=null;this.j=this.g=0;this.i=null;this.reset(a)}
function Kn(a){a.audioTrackId=null;a.i=null;a.b=-1;a.g=0;a.j=x()}
Jn.prototype.reset=function(a){this.f="";this.index=-1;this.videoId="";Kn(this);this.volume=-1;this.o=!1;a&&(this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.o=a.muted,this.audioTrackId=a.audioTrackId,this.i=a.trackData,this.g=a.playerTime,this.j=a.playerTimeAt)};
function Ln(a){switch(a.b){case 1:return(x()-a.j)/1E3+a.g;case -1E3:return 0}return a.g}
function Mn(a){var b={};b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.o;b.audioTrackId=a.audioTrackId;b.trackData=ib(a.i);b.playerTime=a.g;b.playerTimeAt=a.j;return b}
Jn.prototype.clone=function(){return new Jn(Mn(this))};function Y(a,b,c){U.call(this);this.i=NaN;this.X=!1;this.K=this.G=this.N=this.O=NaN;this.Y=[];this.A=this.F=this.g=this.D=this.b=null;this.Va=a;this.Y.push(M(window,"beforeunload",w(this.md,this)));this.f=[];this.D=new Jn;this.la=b.id;this.b=Nn(this,c);this.b.subscribe("handlerOpened",this.Ad,this);this.b.subscribe("handlerClosed",this.xd,this);this.b.subscribe("handlerError",this.yd,this);this.b.subscribe("handlerMessage",this.zd,this);In(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.D.videoId;rk()&&S("yt-remote-session-video-id",a)},this)}
y(Y,U);g=Y.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.D.f=c);this.D.videoId=d;this.D.index=e||0;this.D.state=3;c=this.D;c.g=f;c.j=x();this.A="UNSUPPORTED";On("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,vk())}else On("Connecting without params"),this.b.connect({},a,vk());Pn(this)};
g.dispose=function(){this.C()||(this.u("beforeDispose"),Qn(this,3));Y.B.dispose.call(this)};
g.w=function(){Rn(this);Sn(this);Tn(this);I(this.G);this.G=NaN;I(this.K);this.K=NaN;this.g=null;Ce(this.Y);this.Y.length=0;this.b.dispose();Y.B.w.call(this);this.A=this.F=this.f=this.D=this.b=null};
function On(a){Nj("conn",a)}
g.md=function(){this.j(2)};
function Nn(a,b){return new En(Zj(a.Va,"/bc",void 0,!1),b)}
function Qn(a,b){a.u("proxyStateChange",b)}
function Pn(a){a.i=H(w(function(){On("Connecting timeout");this.j(1)},a),2E4)}
function Rn(a){I(a.i);a.i=NaN}
function Tn(a){I(a.O);a.O=NaN}
function Un(a){Sn(a);a.N=H(w(function(){Vn(this,"getNowPlaying")},a),2E4)}
function Sn(a){I(a.N);a.N=NaN}
g.Ad=function(){On("Channel opened");this.X&&(this.X=!1,Tn(this),this.O=H(w(function(){On("Timing out waiting for a screen.");this.j(1)},this),15E3));
zk(Gn(this.b),this.la)};
g.xd=function(){On("Channel closed");isNaN(this.i)?Ak(!0):Ak();this.dispose()};
g.yd=function(a){Ak();isNaN(this.l())?(On("Channel error: "+a+" without reconnection"),this.dispose()):(this.X=!0,On("Channel error: "+a+" with reconnection in "+this.l()+" ms"),Qn(this,2))};
function Wn(a,b){b&&(Rn(a),Tn(a));b==(Hn(a.b)&&isNaN(a.i))?b&&(Qn(a,1),Vn(a,"getSubtitlesTrack")):b?(a.ba()&&a.D.reset(),Qn(a,1),Vn(a,"getNowPlaying"),Xn(a)):a.j(1)}
function Yn(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.D.videoId&&(fb(b.params)?a.D.i=null:a.D.i=b.params,a.u("remotePlayerChange"))}
function Zn(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.D.f=b.params.listId||a.D.f;var e=a.D,f=e.videoId;e.videoId=c;e.index=d;c!=f&&Kn(e);a.u("remoteQueueChange")}
function $n(a,b){b.params=b.params||{};Zn(a,b);ao(a,b)}
function ao(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.D;d.g=isNaN(c)?0:c;d.j=x();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.b&&(c=-1E3);a.D.b=c;1==a.D.b?Un(a):Sn(a);a.u("remotePlayerChange")}
function bo(a,b){var c="true"==b.params.muted;a.D.volume=parseInt(b.params.volume,10);a.D.o=c;a.u("remotePlayerChange")}
g.zd=function(a){a.params?On("Received: action="+a.action+", params="+L(a.params)):On("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=id(a.params.devices);this.f=Ja(a,function(a){return new mk(a)});
a=!!Ma(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Wn(this,a);break;case "loungeScreenConnected":Wn(this,!0);break;case "loungeScreenDisconnected":Qa(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
Wn(this,!1);break;case "remoteConnected":var b=new mk(id(a.params.device));Ma(this.f,function(a){return a.equals(b)})||Oa(this.f,b);
break;case "remoteDisconnected":b=new mk(id(a.params.device));Qa(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Zn(this,a);break;case "nowPlaying":$n(this,a);break;case "onStateChange":ao(this,a);break;case "onVolumeChanged":bo(this,a);break;case "onSubtitlesTrackChanged":Yn(this,a);break;case "nowAutoplaying":this.F=a.params.videoId;break;case "autoplayDismissed":break;case "autoplayUpNext":this.F=a.params.videoId;break;case "onAutoplayModeChanged":this.A=a.params.autoplayMode;break;default:On("Unrecognized action: "+a.action)}};
g.fe=function(){if(this.g){var a=this.g;this.g=null;this.D.videoId!=a&&Vn(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.ka;Y.prototype.Ja=function(){var a=3;this.C()||(a=0,isNaN(this.l())?Hn(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.Ja;Y.prototype.j=function(a){On("Disconnecting with "+a);Rn(this);this.u("beforeDisconnect",a);1==a&&Ak();Fn(this.b,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.j;Y.prototype.Ia=function(){var a=this.D;if(this.g){var b=a=this.D.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&Kn(b)}return Mn(a)};
Y.prototype.getPlayerContextData=Y.prototype.Ia;Y.prototype.Ua=function(a){var b=new Jn(a);b.videoId&&b.videoId!=this.D.videoId&&(this.g=b.videoId,I(this.G),this.G=H(w(this.fe,this),5E3));var c=[];this.D.f==b.f&&this.D.videoId==b.videoId&&this.D.index==b.index||c.push("remoteQueueChange");this.D.b==b.b&&this.D.volume==b.volume&&this.D.o==b.o&&Ln(this.D)==Ln(b)&&L(this.D.i)==L(b.i)||c.push("remotePlayerChange");this.D.reset(a);z(c,function(a){this.u(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.Ua;Y.prototype.ba=function(){var a=this.b.o.id,b=Ma(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.ba;Y.prototype.l=function(){var a=this.b;return a.f.enabled?a.f.o-x():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.l;Y.prototype.na=function(){return this.A||"UNSUPPORTED"};
Y.prototype.getAutoplayMode=Y.prototype.na;Y.prototype.sa=function(){return this.F||""};
Y.prototype.getAutoplayVideoId=Y.prototype.sa;Y.prototype.Wa=function(){if(!isNaN(this.l())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.l())}};
Y.prototype.reconnect=Y.prototype.Wa;function Xn(a){I(a.K);a.K=H(w(a.j,a,1),864E5)}
function Vn(a,b,c){c?On("Sending: action="+b+", params="+L(c)):On("Sending: action="+b);a.b.sendMessage(b,c)}
Y.prototype.Ka=function(a,b){Vn(this,a,b);Xn(this)};
Y.prototype.sendMessage=Y.prototype.Ka;function co(a){gk.call(this,"ScreenServiceProxy");this.U=a;this.b=[];this.b.push(this.U.$_s("screenChange",w(this.xe,this)));this.b.push(this.U.$_s("onlineScreenChange",w(this.Gd,this)))}
y(co,gk);g=co.prototype;g.Z=function(a){return this.U.$_gs(a)};
g.contains=function(a){return!!this.U.$_c(a)};
g.get=function(a){return this.U.$_g(a)};
g.start=function(){this.U.$_st()};
g.Ab=function(a,b,c){this.U.$_a(a,b,c)};
g.remove=function(a,b,c){this.U.$_r(a,b,c)};
g.xb=function(a,b,c,d){this.U.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.U.$_ubk(this.b[a]);this.b.length=0;this.U=null;co.B.w.call(this)};
g.xe=function(){this.u("screenChange")};
g.Gd=function(){this.u("onlineScreenChange")};
V.prototype.$_st=V.prototype.start;V.prototype.$_gspc=V.prototype.ye;V.prototype.$_gsppc=V.prototype.Kc;V.prototype.$_c=V.prototype.contains;V.prototype.$_g=V.prototype.get;V.prototype.$_a=V.prototype.Ab;V.prototype.$_un=V.prototype.xb;V.prototype.$_r=V.prototype.remove;V.prototype.$_gs=V.prototype.Z;V.prototype.$_gos=V.prototype.Jc;V.prototype.$_s=V.prototype.subscribe;V.prototype.$_ubk=V.prototype.ka;function eo(){var a={device:"Desktop",app:"youtube-desktop"};gj&&fj();ok();fo||(fo=new Yj,Bk()&&(fo.b="/api/loungedev"));go||(go=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",go,void 0));ho();var b=io();if(!b){var c=new V(fo);q("yt.mdx.remote.screenService_",c,void 0);b=io();hl(c,function(a){a?jo()&&Al(jo(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
ko("Initializing: "+L(a));lo.push(hc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
lo.push(hc("yt-remote-cast2-receiver-selected",function(){mo(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
lo.push(hc("yt-remote-cast2-session-change",no));lo.push(hc("yt-remote-connection-change",function(a){a?Al(jo(),"YouTube TV"):oo()||(Al(null,null),wl())}));
var d=po();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;ko(" -- with channel params: "+L(d));qo(d);b.start();jo()||ro()}}
function so(){jc(lo);lo.length=0;E(to);to=null;go&&(z(go,function(a){a(null)}),go.length=0,go=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
fo=null}
function uo(){if(ul()){var a=[];if(T("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||vo())a.push({key:"cast-selector-receiver",name:wo()}),q("yt.mdx.remote.cloudview.castButtonShown_",!0,void 0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:xo()}
function xo(){var a;a=io().U.$_gos();var b=yo();b&&vo()&&(ek(a,b)||a.push(b));return dk(a)}
function zo(){if(ul()){var a=vl();return a?{key:"cast-selector-receiver",name:a}:null}return Ao()}
function Ao(){var a=xo(),b=yo();b||(b=oo());return Ma(a,function(a){return b&&Rj(b,a.key)?!0:!1})}
function wo(){if(ul())return vl();var a=yo();return a?a.name:null}
function yo(){var a=jo();if(!a)return null;var b=io().Z();return fk(b,a)}
function no(a){ko("remote.onCastSessionChange_: "+Vj(a));if(a){var b=yo();b&&b.id==a.id?Al(b.id,"YouTube TV"):(b&&Bo(),Co(a,1))}else Bo()}
function Do(a,b){ko("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)mo(b||null),zl(b||null);else{Bo();mo(b||null);var c=io().Z();(c=fk(c,a.key))?Co(c,1):H(function(){Eo(null)},0)}}
function Bo(){yl()?ql().stopSession():nl("stopSession called before API ready.");var a=vo();a?a.disconnect(1):(kc("yt-remote-before-disconnect",1),kc("yt-remote-connection-change",!1));Eo(null)}
function ko(a){Nj("remote",a)}
function io(){if(!to){var a=r("yt.mdx.remote.screenService_");to=a?new co(a):null}return to}
function jo(){return r("yt.mdx.remote.currentScreenId_")}
function Fo(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function mo(a){q("yt.mdx.remote.connectData_",a,void 0)}
function vo(){return r("yt.mdx.remote.connection_")}
function Eo(a){var b=vo();mo(null);a?vo():Fo("");q("yt.mdx.remote.connection_",a,void 0);go&&(z(go,function(b){b(a)}),go.length=0);
b&&!a?kc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function oo(){var a=rk();if(!a)return null;var b=io().Z();return fk(b,a)}
function Co(a,b){jo();Fo(a.id);var c=new Y(fo,a,po());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){kc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){vo()&&(vo(),Eo(null))});
Eo(c)}
function ro(){var a=oo();a?(ko("Resume connection to: "+Vj(a)),Co(a,0)):(Ak(),wl(),ko("Skipping connecting because no session screen found."))}
var fo=null,go=null,to=null;function ho(){var a=po();if(fb(a)){var a=qk(),b=T("yt-remote-session-name")||"",c=T("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function po(){return r("yt.mdx.remote.channelParams_")||{}}
function qo(a){a?(S("yt-remote-session-app",a.app),S("yt-remote-session-name",a.name)):(ij("yt-remote-session-app"),ij("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var lo=[];var Go=null,Ho=[];function Io(){Jo();if(zo()){var a=Go;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function Ko(a){"cast-selector-receiver"==a?xl():Lo(a)}
function Lo(a){var b=uo();if(a=ck(b,a)){var c=Go;Do(a,{listId:c.getVideoData().list,videoId:c.getVideoData().video_id,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function Jo(){var a=Go;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(uo(),zo())}
;var Mo=null,No=[];function Oo(a){return{externalChannelId:a.externalChannelId,ud:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Po(a){Qo(Oo(a))}
function Qo(a){pi()?(Q(ci,new Xh(a.externalChannelId,a.ud?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+yd({event:"subscribe",source:a.source}))&&Mg(a)):Ro(a)}
function Ro(a){oi(function(b){b.subscription_ajax&&Qo(a)},null)}
function So(a){a=Oo(a);Q(hi,new Zh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+yd({event:"unsubscribe",source:a.source}))&&Mg(a)}
function To(a){Mo&&Mo.channelSubscribed(a.b,a.subscriptionId)}
function Uo(a){Mo&&Mo.channelUnsubscribed(a.b)}
;function Vo(a){D.call(this);this.f=a;this.f.subscribe("command",this.Bc,this);this.g={};this.i=!1}
y(Vo,D);g=Vo.prototype;g.start=function(){this.i||this.C()||(this.i=!0,Wo(this.f,"RECEIVING"))};
g.Bc=function(a,b){if(this.i&&!this.C()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.he,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Xo(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Yo(a,b||{}),c=this.b[a].apply(this.b,c),(c=Zo(a,c))&&this.i&&!this.C()&&Wo(this.f,a,c))}}};
g.he=function(a,b){this.i&&!this.C()&&Wo(this.f,a,this.Gb(a,b))};
g.Gb=function(a,b){if(null!=b)return{value:b}};
function Xo(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.Bc,this);this.f=null;for(var a in this.g)Xo(this,a);Vo.B.w.call(this)};function $o(a,b){Vo.call(this,b);this.b=a;this.start()}
y($o,Vo);$o.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
$o.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Yo(a,b){switch(a){case "loadVideoById":return b=nj(b),pj(b),[b];case "cueVideoById":return b=nj(b),pj(b),[b];case "loadVideoByPlayerVars":return pj(b),[b];case "cueVideoByPlayerVars":return pj(b),[b];case "loadPlaylist":return b=oj(b),pj(b),[b];case "cuePlaylist":return b=oj(b),pj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Zo(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
$o.prototype.Gb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return $o.B.Gb.call(this,a,b)};
$o.prototype.w=function(){$o.B.w.call(this);delete this.b};function ap(){var a=this.f=new Ri,b=w(this.de,this);a.f=b;a.g=null;this.f.channel="widget";if(a=G("WIDGET_ID"))this.f.i=a;this.i=[];this.o=!1;this.j={}}
g=ap.prototype;g.de=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,bp(this,c)),this.j[c]=!0)}else this.Nc(a,b)};
g.Nc=function(){};
function bp(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.hd=function(){this.o=!0;this.sendMessage("initialDelivery",this.Hb());this.sendMessage("onReady");z(this.i,this.Oc,this);this.i=[]};
g.Hb=function(){return null};
function cp(a,b){a.sendMessage("infoDelivery",b)}
g.Oc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Oc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function dp(a){ap.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Ld,this));this.addEventListener("onVideoProgress",w(this.le,this));this.addEventListener("onVolumeChange",w(this.me,this));this.addEventListener("onApiChange",w(this.ge,this));this.addEventListener("onPlaybackQualityChange",w(this.ie,this));this.addEventListener("onPlaybackRateChange",w(this.je,this));this.addEventListener("onStateChange",w(this.ke,this))}
y(dp,ap);g=dp.prototype;g.Nc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&lj(a)){var c;c=b;if(ga(c[0])&&!u(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=nj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=mj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=oj.apply(window,c)}c=d}pj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);lj(a)&&cp(this,this.Hb())}};
g.Ld=function(){var a=w(this.hd,this);this.f.b=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Hb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Pa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
g.ke=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3};this.b.getProgressState&&
(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());cp(this,a)};
g.ie=function(a){cp(this,{playbackQuality:a})};
g.je=function(a){cp(this,{playbackRate:a})};
g.ge=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var m=f[h],n=this.b.getOption(e,m);b[e][m]=n}}this.sendMessage("apiInfoDelivery",b)};
g.me=function(){cp(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.le=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3};this.b.getProgressState&&(a.progressState=this.b.getProgressState());cp(this,a)};
g.dispose=function(){dp.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ep(a,b,c){U.call(this);this.b=a;this.f=b;this.g=c}
y(ep,U);function Wo(a,b,c){if(!a.C()){var d=a.b;d.C()||a.f!=d.b||(a={id:a.g,command:b},c&&(a.data=c),d.b.postMessage(L(a),d.g))}}
ep.prototype.w=function(){this.f=this.b=null;ep.B.w.call(this)};function fp(a,b,c){D.call(this);this.b=a;this.g=c;this.i=M(window,"message",w(this.j,this));this.f=new ep(this,a,b);Sb(this,ma(E,this.f))}
y(fp,D);fp.prototype.j=function(a){var b;if(b=!this.C())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,v(a))){try{a=id(a)}catch(d){return}a.command&&(b=this.f,b.C()||b.u("command",a.command,a.data))}};
fp.prototype.w=function(){Ce(this.i);this.b=null;fp.B.w.call(this)};var gp=!1;function hp(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(gp=!0,a.description)){hp(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){gp=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],gp=!(!a||!a.enabledPlugin))){hp(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");gp=!0;hp(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");gp=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),gp=!0,hp(b.GetVariable("$version"))}catch(c){}})();function ip(a){return(a=a.exec(lb))?a[1]:""}
(function(){if(ff)return ip(/Firefox\/([0-9.]+)/);if(K||Uc||Tc)return cd;if(kf)return ip(/Chrome\/([0-9.]+)/);if(lf&&!(Sc()||B("iPad")||B("iPod")))return ip(/Version\/([0-9.]+)/);if(gf||hf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(lb);if(a)return a[1]+"."+a[2]}else if(jf)return(a=ip(/Android\s+([0-9.]+)/))?a:ip(/Version\/([0-9.]+)/);return""})();function jp(){var a=kp;return new Ff(function(b,c){a.ea=function(a){Ed(a)?b(a):c(a)};
a.onError=c;a.Fa=c;Jd("//googleads.g.doubleclick.net/pagead/id",a)})}
;function lp(a,b){this.f=a;this.b=b}
lp.prototype.then=function(a,b,c){try{if(p(this.f))return a?Kf(a.call(c,this.f)):Kf(this.f);if(p(this.b)){if(!b)return Lf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b instanceof Nf?Lf(this.b):Kf(d)}throw Error("Invalid Result_ state");}catch(e){return Lf(e)}};
Ef(lp);var kp={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mp=null;function np(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return op(""),mp=new lp(""),"";a=JSON.parse(a.substr(4)).id;op(a);mp=new lp(a);pp(18E5,2);return a}
function qp(a){var b=Error("Unable to load /pagead/id");op("");mp=new lp(void 0,b);0<a&&pp(12E4,a-1);throw b;}
function pp(a,b){H(function(){var a=w(qp,l,b),a=jp().then(np,a);Mf(a,null,t,void 0)},a)}
function op(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function rp(){}
;function sp(){var a;if(a=Le.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tp[d]=c.toString())}}}
ba(sp);var tp=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",tp,void 0);function up(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function vp(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function wp(a){a=void 0!==tp[a]?tp[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
sp.prototype.get=function(a,b){vp(a);up(a);var c=void 0!==tp[a]?tp[a].toString():null;return null!=c?c:b?b:""};
sp.prototype.set=function(a,b){vp(a);up(a);if(null==b)throw"ExpectedNotNull";tp[a]=b.toString()};
sp.prototype.remove=function(a){vp(a);up(a);delete tp[a]};
sp.prototype.clear=function(){tp={}};function xp(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&Mg(c)}}
;function yp(a){O.call(this,1,arguments);this.Cb=a}
y(yp,O);function zp(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
y(zp,O);function Ap(a,b,c,d){O.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Ap,O);function Bp(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
y(Bp,O);function Cp(a){O.call(this,1,arguments)}
y(Cp,O);var Dp=new P("ypc-core-load",yp),Ep=new P("ypc-guide-sync-success",zp),Fp=new P("ypc-purchase-success",Ap),Gp=new P("ypc-subscription-cancel",Cp),Hp=new P("ypc-subscription-cancel-success",Bp),Ip=new P("ypc-init-subscription",Cp);var Jp=!1,Kp=[],Lp=[];function Mp(a){a.b?Jp?Q(gi,a):Q(Dp,new yp(function(){Q(Ip,new Cp(a.b))})):Np(a.f,a.i,a.g,a.source)}
function Op(a){a.b?Jp?Q(li,a):Q(Dp,new yp(function(){Q(Gp,new Cp(a.b))})):Pp(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Qp(a){Rp(Sa(a.b))}
function Sp(a){Tp(Sa(a.b))}
function Up(a){Vp(a.b,a.isEnabled,null)}
function Wp(a,b,c,d){Vp(a,b,c,d)}
function Xp(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&Q(fi,new Yh(b,c,a.b.channelInfo))}
function Yp(a){var b=a.b;Xa(a.f,function(a,d){Q(fi,new Yh(d,a,b[d]))})}
function Zp(a){Q(ki,new Vh(a.f.itemId));a.b&&a.b.length&&($p(a.b,ki),$p(a.b,mi))}
function Np(a,b,c,d){var e=new Vh(a);Q(di,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&aq(b,c);Jd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Sb:f,V:c,ea:function(b,c){var d=c.response;Q(fi,new Yh(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&xp(d.actions)},
Ob:function(){Q(ei,e)}})}
function Pp(a,b,c,d,e){var f=new Vh(a);Q(ii,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&aq(c,d);Jd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Sb:h,V:d,ea:function(a,b){var c=b.response;Q(ki,f);c.actions&&xp(c.actions)},
Ob:function(){Q(ji,f)}})}
function Vp(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Jd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",V:e,onError:function(){d&&d()}})}}
function Rp(a){if(a.length){var b=Ua(a,0,40);Q("subscription-batch-subscribe-loading");$p(b,di);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");$p(b,ei)};
Jd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",V:c,ea:function(c,f){d();var h=f.response,k=h.id;if(u(k)&&k.length==b.length){var m=h.channel_info_map;z(k,function(a,c){var d=b[c];Q(fi,new Yh(d,a,m[d]))});
a.length?Rp(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function Tp(a){if(a.length){var b=Ua(a,0,40);Q("subscription-batch-unsubscribe-loading");$p(b,ii);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");$p(b,ji)};
Jd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",V:c,ea:function(){d();$p(b,ki);a.length&&Tp(a)},
onError:function(){d()}})}}
function $p(a,b){z(a,function(a){Q(b,new Vh(a))})}
function aq(a,b){var c=Bd(a),d;for(d in c)b[d]=c[d]}
;var bq,cq=null,dq=null,eq=null,fq=!1;
function gq(){var a=G("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!mp){var e=w(qp,l,2);mp=jp().then(np,e)}d=mp}b=d}catch(f){b=Lf(f)}Mf(b,null,rp,void 0)}catch(f){$b(f)}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!bq){bq=new Ri;bq.b=gq;return}bq.origin&&"*"!=bq.origin&&(a.args.post_message_origin=bq.origin)}d=document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;Df("legacy_cast2")&&v(d)&&v(b)&&-1<d.indexOf(b)&&Jg(b)&&Jg(d)&&(c=!0);window!=
window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&pj(a.args);cq=Ih("player",a);d=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?eq=new dp(cq):G("ENABLE_POST_API")&&v(d)&&v(b)&&(dq=new fp(window.parent,d,b),eq=new $o(cq,dq.f));Df("legacy_cast2")&&((fq=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=cq,eo(),Go=a,Go.addEventListener("onReady",Io),Go.addEventListener("onRemoteReceiverSelected",Ko),Ho.push(hc("yt-remote-receiver-availability-change",
Jo)),Ho.push(hc("yt-remote-auto-connect",Lo))));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&wc();Td();Mo=cq;Mo.addEventListener("SUBSCRIBE",Po);Mo.addEventListener("UNSUBSCRIBE",So);No.push(Ug(fi,To),Ug(ki,Uo))}
;q("yt.setConfig",Xb,void 0);q("yt.setMsg",function(a){Yb(Wb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Pd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,m=!1;try{h=a.lineNumber||a.Ue||"Not available"}catch(ua){h="Not available",m=!0}try{k=a.fileName||a.filename||a.sourceURL||
l.$googDebugFname||f}catch(ua){k="Not available",m=!0}a=!m&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(Od[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Sb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},V:{url:G("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.V.stack=e);for(var n in c)b.V["client."+n]=c[n];if(n=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Z in n)b.V[Z]=n[Z];Jd("/error_204",b);Od[a.message]=!0;Pd++}}},void 0);
q("writeEmbed",gq,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&Mg(a);return!0},void 0);
var hq=Zb(function(){eh("ol");Jp=!0;Lp.push(Ug(ci,Mp),Ug(hi,Op));Jp||(Lp.push(Ug(gi,Mp),Ug(li,Op),Ug($h,Qp),Ug(ai,Sp),Ug(bi,Up)),Kp.push(hc("subscription-prefs",Wp)),Lp.push(Ug(Fp,Xp),Ug(Hp,Zp),Ug(Ep,Yp)));sp.getInstance();var a=1<window.devicePixelRatio;if(!!((wp("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=wp(b)||0,c=a?c|67108864:c&-67108865;0==c?delete tp[b]:(a=c.toString(16),tp[b]=a.toString());var b=[],d;for(d in tp)b.push(d+"="+escape(tp[d]));Me("PREF",b.join("&"),
63072E3)}}),iq=Zb(function(){var a=cq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(vc=null);for(var a=0,b=Rd.length;a<b;a++){var c=Rd[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}Rd.length=0;a=rc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))mc(a),b.parentNode.removeChild(b);Sd=!1;Xb("DCLKSTAT",0);jc(Kp);Kp.length=0;Vg(Lp);Lp.length=0;Jp=!1;Mo&&(Mo.removeEventListener("SUBSCRIBE",Qo),Mo.removeEventListener("UNSUBSCRIBE",So));Mo=null;Vg(No);No.length=0;
Df("legacy_cast2")&&!fq&&(jc(Ho),Ho.length=0,Go&&(Go.removeEventListener("onRemoteReceiverSelected",Ko),Go.removeEventListener("onReady",Io),Go=null),so());Tb(eq,dq);cq&&cq.destroy()});
window.addEventListener?(window.addEventListener("load",hq),window.addEventListener("unload",iq)):window.attachEvent&&(window.attachEvent("onload",hq),window.attachEvent("onunload",iq));var jq=Li.getInstance(),kq=R(jq);kq in Qi||(jq.register(),jq.sb.push(hc("yt-uix-init-"+kq,jq.init,jq)),jq.sb.push(hc("yt-uix-dispose-"+kq,jq.dispose,jq)),Qi[kq]=jq);})();
