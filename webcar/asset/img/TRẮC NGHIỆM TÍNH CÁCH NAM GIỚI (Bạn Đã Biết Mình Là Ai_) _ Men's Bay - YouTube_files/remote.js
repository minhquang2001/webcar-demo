(function(g){var window=this;'use strict';var fYa=function(a,b,c){null!=c&&(g.ud(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.xe=b,g.we=c,g.sd(a,g.xe),g.sd(a,g.we))},gYa=function(a,b,c){b=g.Kd(b,c);
null!=b&&(g.ud(a,c,0),a.i.i.push(b?1:0))},hYa=function(a,b){return g.pf(a,b)},iYa=function(a,b){b=b instanceof g.qg?b:g.wg(b,/^data:image\//i.test(b));
a.src=g.rg(b)},kYa=function(a){g.C.call(this,a,-1,jYa)},lYa=function(a){g.C.call(this,a)},oYa=function(){return[1,
mYa,2,nYa]},pYa=function(){return[1,
g.es,lYa,oYa]},qYa=function(a){g.C.call(this,a)},rYa=function(a){g.C.call(this,a)},tYa=function(){return[1,
g.gs,2,g.gs,3,sYa]},uYa=function(a){g.C.call(this,a)},wYa=function(){return[1,
g.gs,2,g.gs,3,vYa,4,sYa]},yYa=function(){return[1,
g.Ke,rYa,tYa,xYa,2,g.Ke,uYa,wYa,xYa]},CYa=function(){return[1,
zYa,g.Pi,2,AYa,g.Pi,3,BYa,g.Pi]},FYa=function(){return[1,
DYa,g.Oi,2,EYa,g.Oi,3,g.Ke,kYa,pYa,g.Oi]},HYa=function(){return[1,
g.es,g.Li,CYa,2,GYa,g.Mi,FYa]},LYa=function(){return[1,
g.gs,5,IYa,2,GYa,qYa,yYa,3,JYa,6,KYa,4,g.es,g.Ki,HYa]},W6=function(a){g.Fl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ua()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.dm(a.u,b,c)},MYa=function(a){if(a===g.np)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},NYa=function(a){if(a instanceof g.lp)return a;
if("function"==typeof a.Og)return a.Og(!1);if(g.Oa(a)){var b=0,c=new g.lp;c.next=function(){for(;;){if(b>=a.length)return g.h2;if(b in a)return g.mp(a[b++]);b++}};
var d=c.next;c.Oj=function(){return g.op(d.call(c))};
return c}throw Error("Not implemented");},OYa=function(a,b,c){if(g.Oa(a))try{g.wc(a,b,c)}catch(e){MYa(e)}else for(a=NYa(a);;){var d=void 0;
try{d=a.Oj()}catch(e){if(e===g.np)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){MYa(e)}}},PYa=function(a,b){var c=[];
OYa(b,function(d){try{var e=g.Or.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.kha(e)&&c.push(d)},a);
return c},QYa=function(a,b){PYa(a,b).forEach(function(c){g.Or.prototype.remove.call(this,c)},a)},RYa=function(a){if(a.ma){if(a.ma.locationOverrideToken)return{locationOverrideToken:a.ma.locationOverrideToken};
if(null!=a.ma.latitudeE7&&null!=a.ma.longitudeE7)return{latitudeE7:a.ma.latitudeE7,longitudeE7:a.ma.longitudeE7}}return null},SYa=function(a,b){g.cc(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},TYa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return TYa(a)},UYa=function(a,b,c,d){var e=new g.xl(null,void 0);
a&&g.yl(e,a);b&&g.zl(e,b);c&&g.Al(e,c);d&&(e.K=d);return e},$6=function(a,b){g.Ru[a]=!0;
var c=g.Pu();c&&c.publish.apply(c,arguments);g.Ru[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.wr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",VYa(this,a.capabilities||""),WYa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},VYa=function(a,b){a.capabilities.clear();
g.Hp(b.split(","),g.Ta(hYa,XYa)).forEach(function(c){a.capabilities.add(c)})},WYa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},YYa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},ZYa=function(a){return new b7(a)},$Ya=function(a){return Array.isArray(a)?g.Sn(a,ZYa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.Sn(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},aZa=function(a){return g.Sn(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.$b(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.$b(a,function(c){return c7(c,b)})},bZa=function(){var a=(0,g.gy)();
a&&QYa(a,a.i.Og(!0))},i7=function(){var a=g.jy("yt-remote-connected-devices")||[];
g.sc(a);return a},cZa=function(a){if(g.dc(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Sn(a,function(d,e){return 0==e?d:d.substring(c.length)})},dZa=function(a){g.iy("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.jy("yt-remote-device-id");a||(a=f7(),g.iy("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.cc(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.cc(a,b);g.ly()&&g.vc(a,b);a=cZa(a);if(g.dc(a))try{g.Lka("remote_sid")}catch(c){}else try{g.Vt("remote_sid",a.join(","),-1)}catch(c){}},eZa=function(){return g.jy("yt-remote-session-browser-channel")},fZa=function(){return g.jy("yt-remote-local-screens")||[]},gZa=function(){g.iy("yt-remote-lounge-token-expiration",!0,86400)},hZa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Sn(fZa(),function(d){return d.loungeToken}),c=g.Sn(a,function(d){return d.loungeToken});
g.Tn(c,function(d){return!g.cc(b,d)})&&gZa();
g.iy("yt-remote-local-screens",a,31536E3)},iZa=function(a,b){g.iy("yt-remote-session-browser-channel",a);
g.iy("yt-remote-session-screen-id",b);a=i7();b=k7();g.cc(a,b)||a.push(b);dZa(a);l7()},m7=function(a){a||(g.ky("yt-remote-session-screen-id"),g.ky("yt-remote-session-video-id"));
l7();a=i7();g.hc(a,k7());dZa(a)},jZa=function(){if(!n7){var a=g.Xr();
a&&(n7=new g.Lr(a))}},kZa=function(){jZa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},lZa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},mZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?nZa(a.shift(),function(){p7(a)}):q7()},oZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},nZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Rk(d,g.Br(a));(document.head||document.documentElement).appendChild(d)},pZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=mZa();
a&&a(!1,"No cast extension found")},r7=function(){if(qZa){var a=2,b=mZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;nZa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},rZa=function(){r7();
var a=pZa();a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},tZa=function(){r7();
var a=pZa();a.push.apply(a,g.ma(sZa.map(oZa)));a.push("//www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},uZa=function(){this.i=s7();
this.i.Ly("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},vZa=function(){this.i=s7();
this.i.Ly("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},wZa=function(){this.i=s7();
this.i.Ly("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.E.call(this);
this.J=null!=c?(0,g.Sa)(a,c):a;this.ag=b;this.D=(0,g.Sa)(this.LR,this);this.i=!1;this.u=0;this.B=this.Pb=null;this.C=[]},u7=function(a,b,c){g.E.call(this);
this.C=null!=c?a.bind(c):a;this.ag=b;this.B=null;this.i=!1;this.u=0;this.Pb=null},v7=function(a){a.Pb=g.Ci(function(){a.Pb=null;
a.i&&!a.u&&(a.i=!1,v7(a))},a.ag);
var b=a.B;a.B=null;a.C.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new xZa(y7,a))},xZa=function(a,b){g.Te.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.em(this);this.J=new g.Bi;this.J.setInterval(250)},zZa=function(a,b,c){a.ju=1;
a.xn=W6(b.clone());a.Jq=c;a.D=!0;yZa(a,null)},B7=function(a,b,c,d,e){a.ju=1;
a.xn=W6(b.clone());a.Jq=null;a.D=c;e&&(a.KO=!1);yZa(a,d)},yZa=function(a,b){a.Ot=Date.now();
C7(a);a.To=a.xn.clone();X6(a.To,"t",a.K);a.aC=0;a.Qf=a.i.fE(a.i.Nx()?b:null);0<a.UC&&(a.mB=new u7((0,g.Sa)(a.KP,a,a.Qf),a.UC));a.C.Ra(a.Qf,"readystatechange",a.MR);b=a.qp?g.wf(a.qp):{};a.Jq?(a.XB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Qf.send(a.To,a.XB,a.Jq,b)):(a.XB="GET",a.KO&&!g.Xe&&(b.Connection="close"),a.Qf.send(a.To,a.XB,null,b));a.i.Pj(1)},BZa=function(a,b){var c=a.aC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return AZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.aC=d+c;return b},DZa=function(a,b){a.Ot=Date.now();
C7(a);var c=b?window.location.hostname:"";a.To=a.xn.clone();g.Fl(a.To,"DOMAIN",c);g.Fl(a.To,"t",a.K);try{a.fk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.hn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in CZa)f=G7[f]=CZa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Lg(g.ig("b/12014412"),d);a.fk.open();a.fk.write(g.Hg(c));a.fk.close();a.fk.parentWindow.m=(0,g.Sa)(a.DX,a);a.fk.parentWindow.d=(0,g.Sa)(a.SN,a,!0);a.fk.parentWindow.rpcClose=(0,g.Sa)(a.SN,a,!1);c=a.fk.createElement("DIV");a.fk.parentWindow.document.body.appendChild(c);d=g.vg(a.To.toString());d=g.gh(g.rg(d));d=g.Lg(g.ig("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Ng(c,d);a.i.Pj(1)},C7=function(a){a.dI=Date.now()+
a.u;
EZa(a,a.u)},EZa=function(a,b){if(null!=a.Cu)throw Error("WatchDog timer not null");
a.Cu=x7((0,g.Sa)(a.KX,a),b)},H7=function(a){a.Cu&&(g.B.clearTimeout(a.Cu),a.Cu=null)},F7=function(a){a.i.Af()||a.Ip||a.i.sy(a)},E7=function(a){H7(a);
g.Qe(a.mB);a.mB=null;a.J.stop();g.gm(a.C);if(a.Qf){var b=a.Qf;a.Qf=null;b.abort();b.dispose()}a.fk&&(a.fk=null)},I7=function(a,b){try{a.i.LN(a,b),a.i.Pj(4)}catch(c){}},GZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;FZa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){GZa(a,b,c,d,f)},f)})}},FZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
iYa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},HZa=function(a){this.i=a;
this.u=new w7},IZa=function(a){var b=K7(a.i,a.uv,"/mail/images/cleardot.gif");
W6(b);GZa(b.toString(),5E3,(0,g.Sa)(a.pS,a),3,2E3);a.Pj(1)},M7=function(a){var b=a.i.X;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.wh=new A7(a,void 0,void 0,void 0),a.wh.qp=a.wC,b=a.i,b=K7(b,b.Nx()?a.Ju:null,a.xC),z7(5),!g.Mc||g.Fc(10))X6(b,"TYPE","xmlhttp"),B7(a.wh,b,!1,a.Ju,!1);else{X6(b,"TYPE","html");var c=a.wh;a=!!a.Ju;c.ju=3;c.xn=W6(b.clone());DZa(c,a)}},N7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new w7;this.S=a||null;this.X=null!=b?b:null;this.J=c||!1},JZa=function(a,b){this.i=a;
this.map=b;this.context=null},KZa=function(a,b,c,d){g.Te.call(this,"timingevent",a);
this.size=b;this.Dx=d},LZa=function(a){g.Te.call(this,"serverreachability",a)},OZa=function(a){MZa(a);
if(3==a.i){var b=a.Qw++,c=a.wz.clone();g.Fl(c,"SID",a.B);g.Fl(c,"RID",b);g.Fl(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.B,b,void 0);b.ju=2;b.xn=W6(c.clone());iYa(new Image,b.xn.toString());b.Ot=Date.now();C7(b)}NZa(a)},PZa=function(a){a.US(1,0);
a.wz=K7(a,null,a.yC);P7(a)},MZa=function(a){a.Bn&&(a.Bn.abort(),a.Bn=null);
a.Re&&(a.Re.cancel(),a.Re=null);a.Rl&&(g.B.clearTimeout(a.Rl),a.Rl=null);Q7(a);a.Zg&&(a.Zg.cancel(),a.Zg=null);a.Ln&&(g.B.clearTimeout(a.Ln),a.Ln=null)},QZa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new JZa(a.GU++,b));2!=a.i&&3!=a.i||P7(a)},RZa=function(a){var b=0;
a.Re&&b++;a.Zg&&b++;return b},P7=function(a){a.Zg||a.Ln||(a.Ln=x7((0,g.Sa)(a.QN,a),0),a.Js=0)},TZa=function(a,b){if(1==a.i){if(!b){a.Qw=Math.floor(1E5*Math.random());
b=a.Qw++;var c=new A7(a,"",b,void 0);c.qp=a.vk;var d=R7(a),e=a.wz.clone();g.Fl(e,"RID",b);g.Fl(e,"CVER","1");O7(a,e);zZa(c,e,d);a.Zg=c;a.i=2}}else 3==a.i&&(b?SZa(a,b):0==a.u.length||a.Zg||SZa(a))},SZa=function(a,b){if(b)if(6<a.Jp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.Qw-1;b=R7(a)}else c=b.S,b=b.Jq;else c=a.Qw++,b=R7(a);var d=a.wz.clone();g.Fl(d,"SID",a.B);g.Fl(d,"RID",c);g.Fl(d,"AID",a.ot);O7(a,d);c=new A7(a,a.B,c,a.Js+1);c.qp=a.vk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Zg=c;zZa(c,d,b)},O7=function(a,b){a.Rf&&(a=a.Rf.kL())&&g.cf(a,function(c,d){g.Fl(b,d,c)})},R7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Jp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={xr:e.xr},f++){e.xr=a.u[f].i;var h=a.u[f].map;e.xr=6>=a.Jp?f:e.xr-d;try{g.cf(h,function(l){return function(m,n){c.push("req"+l.xr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.xr+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},UZa=function(a){a.Re||a.Rl||(a.K=1,a.Rl=x7((0,g.Sa)(a.PN,a),0),a.ls=0)},S7=function(a){if(a.Re||a.Rl||3<=a.ls)return!1;
a.K++;a.Rl=x7((0,g.Sa)(a.PN,a),VZa(a,a.ls));a.ls++;return!0},L7=function(a,b,c){a.VB=c;
a.wk=b.El;a.J||PZa(a)},Q7=function(a){null!=a.Rp&&(g.B.clearTimeout(a.Rp),a.Rp=null)},VZa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Rf&&(c=null);var d=(0,g.Sa)(a.QY,a);c||(c=new g.xl("//www.google.com/images/cleardot.gif"),W6(c));FZa(c.toString(),1E4,d)}else z7(2);WZa(a,b)},WZa=function(a,b){a.i=0;
a.Rf&&a.Rf.yK(b);NZa(a);MZa(a)},NZa=function(a){a.i=0;
a.wk=-1;if(a.Rf)if(0==a.C.length&&0==a.u.length)a.Rf.QD();else{var b=g.kc(a.C),c=g.kc(a.u);a.C.length=0;a.u.length=0;a.Rf.QD(b,c)}},K7=function(a,b,c){var d=g.Gl(c);
if(""!=d.i)b&&g.zl(d,b+"."+d.i),g.Al(d,d.B);else{var e=window.location;d=UYa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Pv&&g.cf(a.Pv,function(f,h){g.Fl(d,h,f)});
g.Fl(d,"VER",a.Jp);O7(a,d);return d},XZa=function(){},YZa=function(){this.i=[];
this.u=[]},ZZa=function(){},s7=function(){if(!U7){U7=new g.Ei(new ZZa);
var a=g.kt("client_streamz_web_flush_count",-1);-1!==a&&(U7.C=a)}return U7},$Za=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.E.call(this);
this.i=new g.J(this.uX,0,this);g.H(this,this.i);this.ag=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Sa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Sa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Kr;this.u=new V7(this.rY,this);this.i=null;this.Z=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Ba=c;this.ma=d;this.Ja=e;this.Aa=new uZa;this.Ka=new vZa;this.Na=new wZa},a_a=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.VB,sessionId:a.i.B,arrayId:a.i.ot}},b_a=function(a,b){a.S=b||0;
a.u.stop();X7(a);a.i&&(3==a.i.getState()&&TZa(a.i),OZa(a.i));a.S=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.ma(),c=a.i.vk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.vk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.uj(4,a))||"";b&&(this.port=":"+b);this.domain=g.vj(a)||"";a=g.Ab();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.u=!1))},$7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.Gj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.C,d,!0),onError:g.Ta(a.B,e),onTimeout:g.Ta(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Mt(b,a)},f_a=function(){var a=c_a;
d_a();b8.push(a);e_a()},c8=function(a,b){d_a();
var c=g_a(a,String(b));g.dc(b8)?h_a(c):(e_a(),g.wc(b8,function(d){d(c)}))},d_a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",b8,void 0))},h_a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},e_a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.wc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},g_a=function(a,b){var c=(Date.now()-i_a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.tx.call(this);
this.J=a;this.screens=[]},j_a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},k_a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Hp(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=j_a(a,b[d])||c;return c},l_a=function(a,b){var c=a.screens.length;
a.screens=g.Hp(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.tx.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.i=null;this.Pb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},m_a=function(a){if(a.screens.length){var b=g.Sn(a.screens,function(d){return d.id}),c=$7(a.u,"/pairing/get_lounge_token_batch");
a8(a.u,c,{screen_ids:b.join(",")},(0,g.Sa)(a.uT,a),(0,g.Sa)(a.tT,a))}},i8=function(a){if(g.P("deprecate_pair_servlet_enabled"))return k_a(a,[]);
var b=$Ya(fZa());b=g.Hp(b,function(c){return!c.uuid});
return k_a(a,b)},k8=function(a,b){hZa(g.Sn(a.screens,YYa));
b&&gZa()},m8=function(a,b){g.tx.call(this);
this.J=b;b=(b=g.jy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.cc(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.lj(this.i))},n8=function(a,b,c){var d=$7(a.D,"/pairing/get_screen_availability");
a8(a.D,d,{lounge_token:b.token},(0,g.Sa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Sa)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.nf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.lj(a.i)),a.i=b,a.ea("screenChange"));n_a(a)},p8=function(a){isNaN(a.B)||g.It(a.B);
a.B=g.Gt((0,g.Sa)(a.SG,a),0<a.C&&a.C<g.Ua()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},o_a=function(a){var b={};
g.wc(a.J(),function(c){c.token?b[c.token]=c.id:this.ye("Requesting availability of screen w/o lounge token.")});
return b},n_a=function(a){a=g.nf(g.df(a.i,function(b){return b}));
g.sc(a);a.length?g.iy("yt-remote-online-screen-ids",a.join(","),60):g.ky("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};p_a(this)},r_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Kh(),l=c?h7(h,c):null;c&&(a.K||l)||(l=h7(h,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?q_a(a,c,(0,g.Sa)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},s_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},t_a=function(a,b,c){n8(a.i,b,c)},q_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Mt($7(a.C,"/pairing/get_lounge_token_batch"),e)},u_a=function(a){a.screens=a.u.Kh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},p_a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Sa)(a.DT,a));u_a(a);a.K||(a.B=$Ya(g.jy("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.B));a.i=new m8(a.C,(0,g.Sa)(a.Kh,a,!0));a.i.subscribe("screenChange",(0,g.Sa)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||v_a(a));s8(a);a.D[b.uuid]=b.id;g.iy("yt-remote-device-id-map",a.D,31536E3);return b},v_a=function(a){a=g.Hp(a.B,function(b){return"shortLived"!=b.idType});
g.iy("yt-remote-automatic-screen-cache",g.Sn(a,YYa))},s8=function(a){a.D=g.jy("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.tx.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},w_a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){c8(a.Ba,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Sa)(this.lQ,this);this.Aa=(0,g.Sa)(this.PX,this);this.Z=g.Gt(function(){x_a(d,null)},12E4);
this.K=this.D=this.J=this.S=0;this.ya=!1;this.X="unknown"},x8=function(a,b){g.It(a.K);
a.K=0;0==b?y_a(a):a.K=g.Gt(function(){y_a(a)},b)},y_a=function(a){z_a(a,"getLoungeToken");
g.It(a.D);a.D=g.Gt(function(){A_a(a,null)},3E4)},z_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.lj(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.La,(0,g.Sa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.lj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.xL(b,function(c){u8(a,c)},function(){return a.Cg()},5)):a.Cg(Error("Waiting for session status timed out."))},C_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);B_a(a,d,function(e){e?(a.ya=!0,r8(a.B,d),u8(a,d),a.X="unknown",x8(a,c)):(g.ot(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Cg())},5)},x_a=function(a,b){g.It(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?C_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ot(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.ot(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Cg(Error("Waiting for session status timed out."))},A_a=function(a,b){g.It(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,x8(a,3E4)):(w_a(a,b.loungeToken),a.ya=!1,a.X="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},B_a=function(a,b,c,d){g.It(a.J);
a.J=0;t_a(a.B,b,function(e){e||0>d?c(e):a.J=g.Gt(function(){B_a(a,b,c,d-1)},300)})},D_a=function(a){g.It(a.S);
a.S=0;g.It(a.J);a.J=0;g.It(a.Z);a.Z=0;g.It(a.D);a.D=0;g.It(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.Na=c;this.Ka=null;this.Z=g.La;this.X=NaN;this.Ja=(0,g.Sa)(this.mQ,this);this.D=g.La;this.K=this.J=0;this.ma=!1;this.ya="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},E_a=function(a){a.D=a.B.yI(a.Aa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.D=g.La;
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=g.La;
a.Cg(b)})},F_a=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Na;kZa()&&(b.env_useStageMdx=1);return g.Ej(b)},C8=function(a){return new Promise(function(b){a.Aa=f7();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,F_a(a));b(c);E_a(a)}else a.Z=function(){g.It(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,F_a(a));b(d);E_a(a)},a.X=g.Gt(function(){a.Z()},100)})},H_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){G_a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.ot(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},I_a=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){r_a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},G_a=function(a,b,c,d){g.It(a.J);
a.J=0;t_a(a.B,b,function(e){e||0>d?c(e):a.J=g.Gt(function(){G_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.It(a.K),a.K=0,0==b?J_a(a):a.K=g.Gt(function(){J_a(a)},b))},J_a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,B8(a,3E4)):(a.ma=!1,a.ya="unknown",w_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";B8(a,3E4)})},K_a=function(a){g.It(a.J);
a.J=0;g.It(a.K);a.K=0;a.D();a.D=function(){};
g.It(a.X)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.Gt((0,g.Sa)(this.qt,this,null),150)},E8=function(a,b){g.tx.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.Sa)(this.IW,this)},L_a=function(a,b){return b?g.$b(a.B,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},c_a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.Qe(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Sa)(a.ON,a,b)),b.subscribe("sessionFailed",function(){return M_a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.qt(null)):a.ea("yt-remote-cast2-session-change",null))},M_a=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},N_a=function(a){var b=a.u.xI(),c=a.i&&a.i.i;
a=g.Sn(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=L_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},S_a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):O_a()?P_a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Q_a(a,c):(window.__onGCastApiAvailable=function(e,f){e?Q_a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.ky("yt-remote-cast-available"),g.ky("yt-remote-cast-receiver"),
R_a(),c(!1))},d.loadCastApiSetupScript?g.my("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&rZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?tZa():(r7(),p7(sZa.map(oZa))))):I8("Cannot initialize because not running Chrome")},R_a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null,void 0);T_a(!1);g.Uu(N8);N8.length=0},O8=function(){return!!g.jy("yt-remote-cast-installed")},U_a=function(){var a=g.jy("yt-remote-cast-receiver");
return a?a.friendlyName:null},V_a=function(){I8("clearCurrentReceiver");
g.ky("yt-remote-cast-receiver")},W_a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Tu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},O_a=function(){var a=0<=g.Ab().search(/ (CrMo|Chrome|CriOS)\//);
return g.Tz||a},X_a=function(a,b){M8().init(a,b)},P_a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.iy("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.iy("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.iy("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.ky("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ja("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},Q_a=function(a,b){L8(!0);
J8(!1);X_a(a,function(c){c?(T_a(!0),g.Vu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.ky("yt-remote-cast-available"),g.ky("yt-remote-cast-receiver"),R_a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.iy("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},T_a=function(a){I8("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.Wk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Wk=!1;a.hasNext=!1;a.K=0;a.J=g.Ua();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},U8=function(a){return a.Jc()?(g.Ua()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Ua()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ua()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.xf(a.trackData);b.hasPrevious=a.Wk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.tx.call(this);
this.B=0;this.C=a;this.J=[];this.D=new YZa;this.u=this.i=null;this.X=(0,g.Sa)(this.pV,this);this.K=(0,g.Sa)(this.Zw,this);this.S=(0,g.Sa)(this.oV,this);this.Z=(0,g.Sa)(this.wV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.kH,this),Y_a(this))):c=3;0!=c&&(b?this.kH(c):g.Gt((0,g.Sa)(function(){this.kH(c)},this),0));
(a=W_a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},Y_a=function(a){g.wc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Ta(this.GW,b),this))},a)},Z_a=function(a){g.wc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){Z_a(a);
a.C.setPlayerContextData(Y8(b));Y_a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Zw(null));
a.u=b;a.u&&(c8("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Zw(a.u.media[0]))},$_a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Sa)(function(d){this.ye("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.ye("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.tx.call(this);var e=this;this.D=NaN;this.ya=!1;this.S=this.K=this.Z=this.ma=NaN;this.X=[];this.C=this.J=this.B=this.yc=this.i=null;this.Ja=a;this.Ba=d;this.X.push(g.zu(window,"beforeunload",function(){e.Fs(2)}));
this.u=[];this.yc=new S8;this.Ka=b.id;this.Aa=b.idType;this.i=a0a(this,c);this.i.subscribe("handlerOpened",this.tV,this);this.i.subscribe("handlerClosed",this.qV,this);this.i.subscribe("handlerError",this.rV,this);this.i.subscribe("handlerMessage",this.sV,this);this.i.yB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.yc.videoId;g.ly()&&g.iy("yt-remote-session-video-id",f)},this)},b0a=function(a){return g.$b(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},a0a=function(a,b){return new W7($7(a.Ja,"/bc"),b,!1,function(){return a.CI()},"shortLived"==a.Aa)},j9=function(a,b){a.ea("proxyStateChange",b)},c0a=function(a){a.D=g.Gt(function(){i9("Connecting timeout");
a.Fs(1)},2E4)},k9=function(a){g.It(a.D);
a.D=NaN},l9=function(a){g.It(a.ma);
a.ma=NaN},d0a=function(a){m9(a);
a.Z=g.Gt(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.It(a.Z);
a.Z=NaN},f0a=function(a,b){var c=null;
if(b){var d=b0a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ja("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.D);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.wL()&&a.yc.reset(),j9(a,1),n9(a,"getNowPlaying"),e0a(a)):a.Fs(1)},g0a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.yc.videoId&&(g.sf(b.params)?a.yc.trackData=null:a.yc.trackData=b.params,a.ea("remotePlayerChange"))},h0a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.yc.listId=b.params.listId||a.yc.listId;X8(a.yc,d,e);a.ea("remoteQueueChange",c)},j0a=function(a,b){b.params=b.params||{};
h0a(a,b,"NOW_PLAYING_MAY_CHANGE");i0a(a,b);a.ea("autoplayDismissed")},i0a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.yc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.yc.playerState&&(c=-1E3);a.yc.playerState=c;c=Number(b.params.loadedTime);a.yc.S=isNaN(c)?0:c;a.yc.Yj(Number(b.params.duration));c=a.yc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.yc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.yc.playerState?d0a(a):m9(a);a.ea("remotePlayerChange")},k0a=function(a,b){if(-1E3!=a.yc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.yc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.yc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},l0a=function(a,b){var c="true"==b.params.muted;
a.yc.volume=parseInt(b.params.volume,10);a.yc.muted=c;a.ea("remotePlayerChange")},m0a=function(a,b){a.J=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},n0a=function(a,b){var c="true"==b.params.hasNext;
a.yc.Wk="true"==b.params.hasPrevious;a.yc.hasNext=c;a.ea("previousNextChange")},e0a=function(a){g.It(a.S);
a.S=g.Gt(function(){a.Fs(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.lj(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ye=a;this.i=[];this.i.push(this.Ye.$_s("screenChange",(0,g.Sa)(this.qQ,this)));this.i.push(this.Ye.$_s("onlineScreenChange",(0,g.Sa)(this.mW,this)))},r0a=function(a,b){jZa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;bZa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),kZa()&&(p9.i="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q9,void 0));o0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ja("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ja("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);S_a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.lj(b)),u9.push(g.Tu("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.Tu("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.Tu("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Tu("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Tu("yt-remote-cast2-session-change",p0a)),u9.push(g.Tu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),V_a())})),u9.push(g.Tu("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.lj(a)),a?(g.iy("yt-remote-session-app",a.app),g.iy("yt-remote-session-name",a.name)):(g.ky("yt-remote-session-app"),g.ky("yt-remote-session-name")),g.Ja("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||q0a())}},s0a=function(){var a=r9().Ye.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return aZa(a)},A9=function(){var a=t0a();
!a&&O8()&&U_a()&&(a={key:"cast-selector-receiver",name:U_a()});return a},t0a=function(){var a=s0a(),b=y9();
b||(b=w9());return g.$b(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Kh();return h7(b,a)},p0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.yB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},u0a=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a,void 0)},v0a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ja("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||u0a("");g.Ja("yt.mdx.remote.connection_",a,void 0);q9&&(g.wc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.ly();
if(!a)return null;var b=r9();if(!b)return null;b=b.Kh();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{u0a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,v0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},q0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),V_a(),t9("Skipping connecting because no session screen found."))},o0a=function(){var a=x9();
if(g.sf(a)){a=k7();var b=g.jy("yt-remote-session-name")||"",c=g.jy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.E.call(this);
var d=this;this.u=a;this.I=b;this.Xb=c;this.events=new g.qC(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){w0a(d,e)});
this.D=!1;this.J=new g.OI(64);this.i=new g.J(this.WO,500,this);this.B=new g.J(this.XO,1E3,this);this.S=new t7(this.jZ,0,this);this.C={};this.X=new g.J(this.CP,1E3,this);this.K=new u7(this.seekTo,1E3,this);this.ma=g.La;g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.XV);this.events.T(b,"captionschanged",this.mV);this.events.T(b,"captionssettingschanged",this.cP);this.events.T(b,"videoplayerreset",this.RA);this.events.T(b,"mdxautoplaycancel",function(){d.Xb.TK()});
a=this.Xb;a.isDisposed();a.subscribe("proxyStateChange",this.KN,this);a.subscribe("remotePlayerChange",this.gx,this);a.subscribe("remoteQueueChange",this.RA,this);a.subscribe("previousNextChange",this.HN,this);a.subscribe("nowAutoplaying",this.BN,this);a.subscribe("autoplayDismissed",this.eN,this);g.H(this,this.i);g.H(this,this.B);g.H(this,this.S);g.H(this,this.X);g.H(this,this.K);this.cP();this.RA();this.gx()},w0a=function(a,b){if(J9(a)){a.Xb.unsubscribe("remotePlayerChange",a.gx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Xb);if(c!==d.volume||b!==d.muted)a.Xb.setVolume(c,b),a.X.start();a.Xb.subscribe("remotePlayerChange",a.gx,a)}},x0a=function(a){a.Sb(0);
a.i.stop();a.Yb(new g.OI(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.zf(c,b));a.Xb.BI(a.I.getVideoData(1).videoId,c);a.C=a9(a.Xb).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Xb.playVideo(c.videoId,b,d,e,c.playerParams,c.bb,RYa(c));a.Yb(new g.OI(1))},y0a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{UL:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.Xb).videoId===a.I.getVideoData(1).videoId},M9=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},V:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",V:[{G:"div",L:"ytp-mdx-popup-title",va:"B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t"},{G:"div",L:"ytp-mdx-popup-description",va:"C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o nh\u1eadt k\u00fd xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh."},
{G:"div",L:"ytp-mdx-privacy-popup-buttons",V:[{G:"button",Ia:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"H\u1ee7y"},{G:"button",Ia:["ytp-button","ytp-mdx-privacy-popup-confirm"],va:"X\u00e1c nh\u1eadn"}]}]}]});this.i=new g.LK(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.H(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",V:[{G:"div",L:"ytp-remote-display-status",V:[{G:"div",L:"ytp-remote-display-status-icon",V:[g.aK()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.LK(this,250);g.H(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);z0a(this,a.Bb())},z0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.iH("L\u1ed7i tr\u00ean $RECEIVER_NAME",c):b.Jc()||g.U(b,4)?g.iH("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME",c):g.iH("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME",c);a.Pa("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.sP.call(this,"Ph\u00e1t tr\u00ean",0,a,b);
this.I=a;this.Qo={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.sM.call(this,a);
this.fl={key:f7(),name:"M\u00e1y t\u00ednh n\u00e0y"};this.ji=null;this.subscriptions=[];this.EG=this.Xb=null;this.Qo=[this.fl];this.Dn=this.fl;this.Id=new g.OI(64);this.sM=0;this.Df=-1;this.ox=!1;this.mx=this.Jt=null;if(!g.bE(this.player.U())&&!g.cE(this.player.U())){a=this.player;var b=g.VL(a);b&&(b=b.Vn())&&(b=new O9(a,b),g.H(this,b));b=new N9(a);g.H(this,b);g.eM(a,b.element,4);this.Jt=new M9;g.H(this,this.Jt);g.eM(a,this.Jt.element,4);this.ox=!!w9()}},Q9=function(a){a.mx&&(a.player.removeEventListener("presentingplayerstatechange",
a.mx),a.mx=null)},A0a=function(a,b,c){a.Id=c;
a.player.ea("presentingplayerstatechange",new g.RG(c,b))},R9=function(a,b){if(b.key!==a.Dn.key)if(b.key===a.fl.key)C9();
else{var c;(c=!a.player.U().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.ox||!a.Jt);(c?0:g.rE(a.player.U())||g.uE(a.player.U()))&&B0a(a);a.Dn=b;if(!a.player.U().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.cE(a.player.U())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.U().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.mM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.bb,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=RYa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.lj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Kh(),(b=h7(a,b.key))&&D9(b,1))}}},B0a=function(a){a.player.Bb().Jc()?a.player.pauseVideo():(a.mx=function(b){!a.ox&&g.TG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.mx));
a.Jt&&a.Jt.kd();z9()||(H9=!0)};
g.Xc.prototype.D=g.ca(0,function(){var a=g.ad(this);return 4294967296*g.ad(this)+(a>>>0)});
var mYa=g.ve(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.kd(a));return!0},g.ye),EYa=g.ve(function(a,b,c,d){if(1!==a.u)return!1;
g.Qd(b,c,d,g.kd(a));return!0},g.ye),nYa=g.ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.Yc(a.i));return!0},g.ze),DYa=g.ve(function(a,b,c,d){if(0!==a.u)return!1;
g.Qd(b,c,d,g.Yc(a.i));return!0},g.ze),vYa=g.ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.$c(a.i));return!0},g.Ae),AYa=g.ve(function(a,b,c,d){if(0!==a.u)return!1;
g.Qd(b,c,d,g.$c(a.i));return!0},g.Ae),IYa=g.ve(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.i.D());return!0},function(a,b,c){fYa(a,c,g.Kd(b,c))}),KYa=g.ve(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.Ld(b,c);if(2==a.u){c=g.Xc.prototype.D;var d=g.$c(a.i);for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.D());return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++)fYa(a,c,b[d])}),sYa=g.ve(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,!!g.$c(a.i));return!0},gYa),BYa=g.ve(function(a,b,c,d){if(0!==a.u)return!1;
g.Qd(b,c,d,!!g.$c(a.i));return!0},gYa),JYa=g.ve(function(a,b,c){if(2!==a.u)return!1;
a=g.md(a);g.Ld(b,c).push(a);return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.xd(a,c,g.ib(e))}}),zYa=g.ve(function(a,b,c,d){if(2!==a.u)return!1;
g.Qd(b,c,d,g.md(a));return!0},g.Be),GYa=g.ve(function(a,b,c,d,e){if(2!==a.u)return!1;
g.jd(a,g.Rd(b,d,c),e);return!0},g.Ce),jYa=[1];
g.u(kYa,g.C);g.u(lYa,g.C);g.u(qYa,g.C);g.u(rYa,g.C);var xYa=[1,2];g.u(uYa,g.C);var CZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},XYa={F_:"atp",Wba:"ska",Baa:"que",p9:"mus",Vba:"sus",b5:"dsp",Zaa:"seq",S8:"mic",X3:"dpa",T_:"cds",n9:"mlm",U3:"dsdtr",V9:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",qZa=lZa("loadCastFramework")||lZa("loadCastApplicationFramework"),sZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(t7,g.E);g.k=t7.prototype;g.k.KR=function(a){this.C=arguments;this.i=!1;this.Pb?this.B=g.Ua()+this.ag:this.Pb=g.Ci(this.D,this.ag)};
g.k.stop=function(){this.Pb&&(g.B.clearTimeout(this.Pb),this.Pb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.J.apply(null,this.C)))};
g.k.xa=function(){this.stop();t7.xe.xa.call(this)};
g.k.LR=function(){this.Pb&&(g.B.clearTimeout(this.Pb),this.Pb=null);this.B?(this.Pb=g.Ci(this.D,this.B-g.Ua()),this.B=null):this.u?this.i=!0:(this.i=!1,this.J.apply(null,this.C))};g.u(u7,g.E);g.k=u7.prototype;g.k.rJ=function(a){this.B=arguments;this.Pb||this.u?this.i=!0:v7(this)};
g.k.stop=function(){this.Pb&&(g.B.clearTimeout(this.Pb),this.Pb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Pb||(this.i=!1,v7(this))};
g.k.xa=function(){g.E.prototype.xa.call(this);this.stop()};w7.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var y7=new g.Qf;g.u(xZa,g.Te);g.k=A7.prototype;g.k.qp=null;g.k.Vm=!1;g.k.Cu=null;g.k.dI=null;g.k.Ot=null;g.k.ju=null;g.k.xn=null;g.k.To=null;g.k.Jq=null;g.k.Qf=null;g.k.aC=0;g.k.fk=null;g.k.XB=null;g.k.hn=null;g.k.Xu=-1;g.k.KO=!0;g.k.Ip=!1;g.k.UC=0;g.k.mB=null;var AZa={},D7={};g.k=A7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.MR=function(a){a=a.target;var b=this.mB;b&&3==g.Tj(a)?b.rJ():this.KP(a)};
g.k.KP=function(a){try{if(a==this.Qf)a:{var b=g.Tj(this.Qf),c=this.Qf.u,d=this.Qf.getStatus();if(g.Mc&&!g.Fc(10)||g.Xe&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Yj(this.Qf))break a;this.Ip||4!=b||7==c||(8==c||0>=d?this.i.Pj(3):this.i.Pj(2));H7(this);var e=this.Qf.getStatus();this.Xu=e;var f=g.Yj(this.Qf);if(this.Vm=200==e){4==b&&E7(this);if(this.D){for(a=!0;!this.Ip&&this.aC<f.length;){var h=BZa(this,f);if(h==D7){4==b&&(this.hn=4,z7(15),a=!1);break}else if(h==AZa){this.hn=4;z7(16);a=!1;
break}else I7(this,h)}4==b&&0==f.length&&(this.hn=1,z7(17),a=!1);this.Vm=this.Vm&&a;a||(E7(this),F7(this))}else I7(this,f);this.Vm&&!this.Ip&&(4==b?this.i.sy(this):(this.Vm=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.hn=3,z7(13)):(this.hn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Qf&&g.Yj(this.Qf)}finally{}};
g.k.DX=function(a){x7((0,g.Sa)(this.CX,this,a),0)};
g.k.CX=function(a){this.Ip||(H7(this),I7(this,a),C7(this))};
g.k.SN=function(a){x7((0,g.Sa)(this.BX,this,a),0)};
g.k.BX=function(a){this.Ip||(E7(this),this.Vm=a,this.i.sy(this),this.i.Pj(4))};
g.k.cancel=function(){this.Ip=!0;E7(this)};
g.k.KX=function(){this.Cu=null;var a=Date.now();0<=a-this.dI?(2!=this.ju&&this.i.Pj(3),E7(this),this.hn=2,z7(18),F7(this)):EZa(this,this.dI-a)};
g.k.getLastError=function(){return this.hn};g.k=HZa.prototype;g.k.wC=null;g.k.wh=null;g.k.nB=!1;g.k.YO=null;g.k.vz=null;g.k.zF=null;g.k.xC=null;g.k.Zh=null;g.k.El=-1;g.k.Ju=null;g.k.uv=null;g.k.connect=function(a){this.xC=a;a=K7(this.i,null,this.xC);z7(3);this.YO=Date.now();var b=this.i.S;null!=b?(this.Ju=b[0],(this.uv=b[1])?(this.Zh=1,IZa(this)):(this.Zh=2,M7(this))):(X6(a,"MODE","init"),this.wh=new A7(this,void 0,void 0,void 0),this.wh.qp=this.wC,B7(this.wh,a,!1,null,!0),this.Zh=0)};
g.k.pS=function(a){if(a)this.Zh=2,M7(this);else{z7(4);var b=this.i;b.wk=b.Bn.El;T7(b,9)}a&&this.Pj(2)};
g.k.fE=function(a){return this.i.fE(a)};
g.k.abort=function(){this.wh&&(this.wh.cancel(),this.wh=null);this.El=-1};
g.k.Af=function(){return!1};
g.k.LN=function(a,b){this.El=a.Xu;if(0==this.Zh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.wk=this.El;T7(a,2);return}this.Ju=c[0];this.uv=c[1]}else a=this.i,a.wk=this.El,T7(a,2);else if(2==this.Zh)if(this.nB)z7(7),this.zF=Date.now();else if("11111"==b){if(z7(6),this.nB=!0,this.vz=Date.now(),a=this.vz-this.YO,!g.Mc||g.Fc(10)||500>a)this.El=200,this.wh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.vz=this.zF=Date.now(),this.nB=!1};
g.k.sy=function(){this.El=this.wh.Xu;if(this.wh.Vm)0==this.Zh?this.uv?(this.Zh=1,IZa(this)):(this.Zh=2,M7(this)):2==this.Zh&&((!g.Mc||g.Fc(10)?!this.nB:200>this.zF-this.vz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.Zh?z7(9):2==this.Zh&&z7(10);var a=this.i;this.wh.getLastError();a.wk=this.El;T7(a,2)}};
g.k.Nx=function(){return this.i.Nx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Pj=function(a){this.i.Pj(a)};g.k=N7.prototype;g.k.vk=null;g.k.Pv=null;g.k.Zg=null;g.k.Re=null;g.k.yC=null;g.k.wz=null;g.k.iK=null;g.k.uy=null;g.k.Qw=0;g.k.GU=0;g.k.Rf=null;g.k.Ln=null;g.k.Rl=null;g.k.Rp=null;g.k.Bn=null;g.k.VB=null;g.k.ot=-1;g.k.rM=-1;g.k.wk=-1;g.k.Js=0;g.k.ls=0;g.k.Jp=8;g.Va(KZa,g.Te);g.Va(LZa,g.Te);g.k=N7.prototype;g.k.connect=function(a,b,c,d,e){z7(0);this.yC=b;this.Pv=c||{};d&&void 0!==e&&(this.Pv.OSID=d,this.Pv.OAID=e);this.J?(x7((0,g.Sa)(this.EK,this,a),100),PZa(this)):this.EK(a)};
g.k.EK=function(a){this.Bn=new HZa(this);this.Bn.wC=this.vk;this.Bn.u=this.D;this.Bn.connect(a)};
g.k.Af=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.QN=function(a){this.Ln=null;TZa(this,a)};
g.k.PN=function(){this.Rl=null;this.Re=new A7(this,this.B,"rpc",this.K);this.Re.qp=this.vk;this.Re.UC=0;var a=this.iK.clone();g.Fl(a,"RID","rpc");g.Fl(a,"SID",this.B);g.Fl(a,"CI",this.VB?"0":"1");g.Fl(a,"AID",this.ot);O7(this,a);if(!g.Mc||g.Fc(10))g.Fl(a,"TYPE","xmlhttp"),B7(this.Re,a,!0,this.uy,!1);else{g.Fl(a,"TYPE","html");var b=this.Re,c=!!this.uy;b.ju=3;b.xn=W6(a.clone());DZa(b,c)}};
g.k.LN=function(a,b){if(0!=this.i&&(this.Re==a||this.Zg==a))if(this.wk=a.Xu,this.Zg==a&&3==this.i)if(7<this.Jp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Rl){if(this.Re)if(this.Re.Ot+3E3<this.Zg.Ot)Q7(this),this.Re.cancel(),this.Re=null;else break a;S7(this);z7(19)}}else this.rM=a[1],0<this.rM-this.ot&&37500>a[2]&&this.VB&&0==this.ls&&!this.Rp&&(this.Rp=x7((0,g.Sa)(this.jV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Re==
a&&Q7(this),!g.nb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.ot=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.uy=c[2],c=c[3],null!=c?this.Jp=c:this.Jp=6,this.i=3,this.Rf&&this.Rf.AK(),this.iK=K7(this,this.Nx()?this.uy:null,this.yC),UZa(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Rf&&this.Rf.zK(c),this.ls=0)};
g.k.jV=function(){null!=this.Rp&&(this.Rp=null,this.Re.cancel(),this.Re=null,S7(this),z7(20))};
g.k.sy=function(a){if(this.Re==a){Q7(this);this.Re=null;var b=2}else if(this.Zg==a)this.Zg=null,b=1;else return;this.wk=a.Xu;if(0!=this.i)if(a.Vm)if(1==b){b=Date.now()-a.Ot;var c=y7;c.dispatchEvent(new KZa(c,a.Jq?a.Jq.length:0,b,this.Js));P7(this);this.C.length=0}else UZa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.wk)){if(d=1==b)this.Zg||this.Ln||1==this.i||2<=this.Js?d=!1:(this.Ln=x7((0,g.Sa)(this.QN,this,a),VZa(this,this.Js)),this.Js++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.k.US=function(a){if(!g.cc(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.QY=function(a){a?z7(2):(z7(1),WZa(this,8))};
g.k.fE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Nj;a.S=!1;return a};
g.k.isActive=function(){return!!this.Rf&&this.Rf.isActive(this)};
g.k.Pj=function(a){var b=y7;b.dispatchEvent(new LZa(b,a))};
g.k.Nx=function(){return!(!g.Mc||g.Fc(10))};
g.k=XZa.prototype;g.k.AK=function(){};
g.k.zK=function(){};
g.k.yK=function(){};
g.k.QD=function(){};
g.k.kL=function(){return{}};
g.k.isActive=function(){return!0};g.k=YZa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.cc(this.i,a)||g.cc(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.iSa)(b,a);0<=c?(g.gc(b,c),b=!0):b=!1;return b||g.hc(this.u,a)};
g.k.Bi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};ZZa.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.P("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Qi(c.value),c={serializedIncrementBatch:g.Ic(g.ue(c,LYa))},g.Fv("streamzIncremented",c,{eH:b})}};var U7;g.Va(V7,g.E);g.k=V7.prototype;g.k.uX=function(){this.ag=Math.min(3E5,2*this.ag);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.ag+15E3*Math.random();g.ar(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.ag=5E3};g.Va(W7,XZa);g.k=W7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.og=function(a){return this.B.og(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.Qe(this.B),b_a(this),g.Qe(this.u),this.u=null,this.ma=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Ba),e=this.i;e&&(e.Rf=null);d.Rf=this;this.i=d;X7(this);if(this.i){d=g.O("ID_TOKEN");var f=this.i.vk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.vk=f}e?(3!=e.getState()&&0==RZa(e)||e.getState(),this.i.connect(a,b,this.J,e.B,e.ot)):c?this.i.connect(a,
b,this.J,c.sessionId,c.arrayId):this.i.connect(a,b,this.J)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.zf(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):Y7(this)&&(X7(this),QZa(this.i,a))};
g.k.AK=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)QZa(this.i,a[b])}this.ea("handlerOpened")};
g.k.yK=function(a){var b=2==a&&401==this.i.wk;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.QD=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.K.push(e)}this.Aa.i.II("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ka.i.BC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Na.i.BC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.kL=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.zf(a,this.D);return a};
g.k.zK=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),OZa(this.i)):this.ea("handlerMessage",new $Za(a[0],a[1]))};
g.k.yB=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Ja&&this.i){var b=this.i.vk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.vk=b}};
g.k.rY=function(){this.u.isActive();0==RZa(this.i)&&this.connect(this.D,this.C)};Z7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.D=function(a){a(Error("request timed out"))};var i_a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Va(g8,g.tx);g8.prototype.Kh=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.J,a)};g.u(h8,g.tx);g.k=h8.prototype;g.k.start=function(){!this.i&&isNaN(this.Pb)&&this.dO()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Pb)||(g.It(this.Pb),this.Pb=NaN)};
g.k.xa=function(){this.stop();g.tx.prototype.xa.call(this)};
g.k.dO=function(){this.Pb=NaN;this.i=g.Mt($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Sa)(this.iQ,this),onError:(0,g.Sa)(this.hQ,this),onTimeout:(0,g.Sa)(this.jQ,this)})};
g.k.iQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new b7(a),b)};
g.k.hQ=function(a){this.i=null;a.status&&404==a.status?this.u>=C0a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=C0a[this.u],this.Pb=g.Gt((0,g.Sa)(this.dO,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.jQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var C0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(j8,g8);g.k=j8.prototype;g.k.start=function(){i8(this)&&this.ea("screenChange");!g.jy("yt-remote-lounge-token-expiration")&&m_a(this);g.It(this.i);this.i=g.Gt((0,g.Sa)(this.start,this),1E4)};
g.k.add=function(a,b){i8(this);j_a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||m_a(this)};
g.k.remove=function(a,b){var c=i8(this);l_a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.TB=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.xa=function(){g.It(this.i);j8.xe.xa.call(this)};
g.k.uT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.J,"Missed "+b+" lounge tokens.")};
g.k.tT=function(a){c8(this.J,"Requesting lounge tokens failed: "+a)};g.u(m8,g.tx);g.k=m8.prototype;g.k.start=function(){var a=parseInt(g.jy("yt-remote-fast-check-period")||"0",10);(this.C=g.Ua()-144E5<a?0:a)?p8(this):(this.C=g.Ua()+3E5,g.iy("yt-remote-fast-check-period",this.C),this.SG())};
g.k.isEmpty=function(){return g.sf(this.i)};
g.k.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.df(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.k.xa=function(){g.It(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.tx.prototype.xa.call(this)};
g.k.SG=function(){g.It(this.B);this.B=NaN;this.u&&this.u.abort();var a=o_a(this);if(Y6(a)){var b=$7(this.D,"/pairing/get_screen_availability");this.u=a8(this.D,b,{lounge_token:g.nf(a).join(",")},(0,g.Sa)(this.aX,this,a),(0,g.Sa)(this.ZW,this))}else o8(this,{}),p8(this)};
g.k.aX=function(a,b){this.u=null;var c=g.nf(o_a(this));if(g.uc(c,g.nf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.ye("Changing Screen set during request."),this.SG()};
g.k.ZW=function(a){this.ye("Screen availability failed: "+a);this.u=null;p8(this)};
g.k.ye=function(a){c8("OnlineScreenService",a)};g.Va(q8,g8);g.k=q8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.TB=function(a,b,c,d){this.u.contains(a)?this.u.TB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.J,a),d(Error(a)))};
g.k.Kh=function(a){return a?this.screens:g.jc(this.screens,g.Hp(this.B,function(b){return!this.contains(b)},this))};
g.k.xI=function(){return g.Hp(this.Kh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.yI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Qe(l);e(r8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Qe(l);f(m)});
l.start();return(0,g.Sa)(l.stop,l)};
g.k.kQ=function(a,b,c,d){g.Mt($7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Sa)(function(e,f){e=new b7(f.screen||{});if(!e.name||s_a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);s_a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Sa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Sa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.Qe(this.u);g.Qe(this.i);q8.xe.xa.call(this)};
g.k.DT=function(){u_a(this);this.ea("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Va(t8,g.tx);g.k=t8.prototype;g.k.getScreen=function(){return this.C};
g.k.Cg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){c8(this.Ba,a)};
g.k.zI=function(){return null};
g.k.jH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Sa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Sa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.jH("");t8.xe.xa.call(this)};g.u(w8,t8);g.k=w8.prototype;g.k.iH=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");D_a(this);this.ya=!1;this.X="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);z_a(this,"getMdxSessionStatus")};
g.k.qt=function(a){this.info("launchWithParams no-op for Cast: "+g.lj(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Sa)(function(){this.Cg()},this),(0,g.Sa)(function(){this.Cg(Error("Failed to stop receiver app."))},this)):this.Cg(Error("Stopping cast device without session."))};
g.k.jH=function(){};
g.k.xa=function(){this.info("disposeInternal");D_a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;t8.prototype.xa.call(this)};
g.k.PX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.lj(b)),a){case "mdxSessionStatus":x_a(this,b);break;case "loungeToken":A_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.k.xL=function(a,b,c,d){g.It(this.S);this.S=0;r_a(this.B,this.i.label,a,this.i.friendlyName,(0,g.Sa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.Gt((0,g.Sa)(this.xL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.zI=function(){return this.u};
g.k.lQ=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Cg())};g.u(z8,t8);g.k=z8.prototype;g.k.iH=function(a){this.u=a;this.u.addUpdateListener(this.Ja)};
g.k.qt=function(a){this.Ka=a;this.Z()};
g.k.stop=function(){K_a(this);this.u?this.u.stop((0,g.Sa)(this.Cg,this,null),(0,g.Sa)(this.Cg,this,"Failed to stop DIAL device.")):this.Cg()};
g.k.xa=function(){K_a(this);this.u&&this.u.removeUpdateListener(this.Ja);this.u=null;t8.prototype.xa.call(this)};
g.k.mQ=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=g.La,this.Cg())};g.u(D8,t8);D8.prototype.stop=function(){this.Cg()};
D8.prototype.iH=function(){};
D8.prototype.qt=function(){g.It(this.u);this.u=NaN;var a=h7(this.B.Kh(),this.i.label);a?u8(this,a):this.Cg(Error("No such screen"))};
D8.prototype.xa=function(){g.It(this.u);this.u=NaN;t8.prototype.xa.call(this)};g.u(E8,g.tx);g.k=E8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Sa)(this.LW,this);c=new chrome.cast.ApiConfig(c,(0,g.Sa)(this.MN,this),e,d,a);c.customDialLaunchCallback=(0,g.Sa)(this.FV,this);
chrome.cast.initialize(c,(0,g.Sa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),f_a(),this.u.subscribe("onlineScreenChange",(0,g.Sa)(this.AI,this)),this.B=N_a(this),chrome.cast.setCustomReceivers(this.B,g.La,(0,g.Sa)(function(f){this.ye("Failed to set initial custom receivers: "+g.lj(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Sa)(function(f){this.ye("Failed to initialize API: "+g.lj(f));
b(!1)},this))};
g.k.vY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.u.Kh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=L_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.La,(0,g.Sa)(function(d){this.ye("Failed to set initial custom receivers: "+g.lj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.i.jH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.k.wY=function(a){this.isDisposed()?this.ye("Setting connection data on disposed cast v2"):this.i?this.i.qt(a):this.ye("Setting connection data without a session")};
g.k.oQ=function(){this.isDisposed()?this.ye("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Sa)(this.MN,this),(0,g.Sa)(this.dX,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Sa)(this.AI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=c_a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.hc(b||[],a);g.Qe(this.i);g.tx.prototype.xa.call(this)};
g.k.ye=function(a){c8("Controller",a)};
g.k.ON=function(a,b){this.i==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.IW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.ye("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.ye("Stopping receiver w/o session: "+a.friendlyName)}else this.ye("onReceiverAction_ called without receiver.")};
g.k.FV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.ye("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.ye("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.ye('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=H_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ot(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=I_a(b,c)):a=I_a(b,c)):a=C8(b);return a};
g.k.MN=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.ye("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.u.Kh(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Qe(this.i),this.i=new w8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Sa)(this.ON,this,this.i)),this.i.subscribe("sessionFailed",function(){return M_a(b,b.i)}),this.i.qt(null));
this.i.iH(a)}}};
g.k.nQ=function(){return this.i?this.i.zI():null};
g.k.dX=function(a){this.isDisposed()||(this.ye("Failed to estabilish a session: "+g.lj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.LW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.k.AI=function(){this.isDisposed()||(this.B=N_a(this),F8("Updating custom receivers: "+g.lj(this.B)),chrome.cast.setCustomReceivers(this.B,g.La,(0,g.Sa)(function(){this.ye("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.wY;E8.prototype.setConnectedScreenStatus=E8.prototype.vY;E8.prototype.stopSession=E8.prototype.oQ;E8.prototype.getCastSession=E8.prototype.nQ;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.k=S8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Wk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Jc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Yj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.k.clone=function(){return new S8(Y8(this))};g.u($8,g.tx);g.k=$8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){b9(this)?(this.i?this.i.play(null,g.La,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.k.pause=function(){b9(this)?(this.i?this.i.pause(null,g.La,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.k.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Jc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.La,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Ta(this.seekTo,a))};
g.k.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.La,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.k.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Sa)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Sa)(function(){this.ye("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Sa)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Sa)(function(){this.ye("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ta(this.setVolume,a,b))};
g.k.BI=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.lj(b.style),g.zf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ta(this.BI,a,b))};
g.k.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ta(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.lj(h));f9(this,"setPlaylist",m);d||d9(this,l)};
g.k.fB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ta(this.fB,a,b))};
g.k.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ta(this.nextVideo,a,b))};
g.k.ws=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.ws)};
g.k.TK=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.TK)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.tx.prototype.dispose.call(this)};
g.k.xa=function(){Z_a(this);this.C=null;this.D.clear();Z8(this,null);g.tx.prototype.xa.call(this)};
g.k.kH=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.GW=function(a,b){this.ea(a,b)};
g.k.pV=function(a){if(!a)this.Zw(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.k.Zw=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),$_a(this),this.ea("remotePlayerChange")};
g.k.oV=function(a){a?($_a(this),this.ea("remotePlayerChange")):this.Zw(null)};
g.k.FH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.wV=function(){var a=W_a();a&&Z8(this,a)};
g.k.ye=function(a){c8("CP",a)};g.u(h9,g.tx);g.k=h9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.yc.listId=c);this.yc.videoId=d;this.yc.index=l||0;this.yc.state=3;V8(this.yc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.lj(m));this.i.connect({method:c,params:g.lj(m)},a,eZa())}else i9("Connecting without params"),this.i.connect({},a,eZa());c0a(this)};
g.k.yB=function(a){this.i.yB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ja("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),j9(this,3));g.tx.prototype.dispose.call(this)};
g.k.xa=function(){k9(this);m9(this);l9(this);g.It(this.K);this.K=NaN;g.It(this.S);this.S=NaN;this.B=null;g.Au(this.X);this.X.length=0;this.i.dispose();g.tx.prototype.xa.call(this);this.C=this.J=this.u=this.yc=this.i=null};
g.k.tV=function(){var a=this;i9("Channel opened");this.ya&&(this.ya=!1,l9(this),this.ma=g.Gt(function(){i9("Timing out waiting for a screen.");a.Fs(1)},15E3));
iZa(a_a(this.i),this.Ka)};
g.k.qV=function(){i9("Channel closed");isNaN(this.D)?m7(!0):m7();this.dispose()};
g.k.rV=function(a,b){m7();isNaN(this.hw())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.ya=!0,i9("Channel error: "+a+" with reconnection in "+this.hw()+" ms"),j9(this,2))};
g.k.dM=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.q(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.sV=function(a){a.params?i9("Received: action="+a.action+", params="+g.lj(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.u=g.Sn(a,function(c){return new a7(c)});
a=!!g.$b(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
f0a(this,a);a=this.dM("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.ic(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
f0a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.$b(this.u,function(c){return c.equals(b)})||SYa(this.u,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.ic(this.u,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":h0a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":j0a(this,a);break;case "onStateChange":i0a(this,a);break;case "onAdStateChange":k0a(this,a);break;case "onVolumeChanged":l0a(this,a);break;case "onSubtitlesTrackChanged":g0a(this,a);break;case "nowAutoplaying":m0a(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.J=a.params.videoId||null;this.ea("autoplayUpNext",this.J);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":n0a(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.k.nT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.hw())?Y7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.Fs=function(a){i9("Disconnecting with "+a);g.Ja("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.ea("beforeDisconnect",a);1==a&&m7();b_a(this.i,a);this.dispose()};
g.k.lT=function(){var a=this.yc;this.B&&(a=this.yc.clone(),X8(a,this.B,a.index));return Y8(a)};
g.k.xY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.yc.videoId&&(this.B=c.videoId,g.It(this.K),this.K=g.Gt(function(){if(b.B){var e=b.B;b.B=null;b.yc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.yc.listId==c.listId&&this.yc.videoId==c.videoId&&this.yc.index==c.index||d.push("remoteQueueChange");this.yc.playerState==c.playerState&&this.yc.volume==c.volume&&this.yc.muted==c.muted&&W8(this.yc)==W8(c)&&g.lj(this.yc.trackData)==g.lj(c.trackData)||d.push("remotePlayerChange");this.yc.reset(a);g.wc(d,function(e){this.ea(e)},this)};
g.k.wL=function(){var a=this.i.J.id,b=g.$b(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.hw=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.iT=function(){return this.C||"UNSUPPORTED"};
g.k.jT=function(){return this.J||""};
g.k.pQ=function(){if(!isNaN(this.hw())){var a=this.i.u;g.br(a.i);a.start()}};
g.k.uY=function(a,b){n9(this,a,b);e0a(this)};
g.k.CI=function(){var a=g.Wt("SID","")||"",b=g.Wt("SAPISID","")||"",c=g.Wt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ic(g.jb(a),2);b=g.Ic(g.jb(b),2);c=g.Ic(g.jb(c),2);return g.Ic(g.jb(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.og;h9.prototype.getProxyState=h9.prototype.nT;h9.prototype.disconnect=h9.prototype.Fs;h9.prototype.getPlayerContextData=h9.prototype.lT;h9.prototype.setPlayerContextData=h9.prototype.xY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.wL;h9.prototype.getReconnectTimeout=h9.prototype.hw;h9.prototype.getAutoplayMode=h9.prototype.iT;h9.prototype.getAutoplayVideoId=h9.prototype.jT;h9.prototype.reconnect=h9.prototype.pQ;
h9.prototype.sendMessage=h9.prototype.uY;h9.prototype.getXsrfToken=h9.prototype.CI;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.dM;g.u(o9,g8);g.k=o9.prototype;g.k.Kh=function(a){return this.Ye.$_gs(a)};
g.k.contains=function(a){return!!this.Ye.$_c(a)};
g.k.get=function(a){return this.Ye.$_g(a)};
g.k.start=function(){this.Ye.$_st()};
g.k.add=function(a,b,c){this.Ye.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Ye.$_r(a,b,c)};
g.k.TB=function(a,b,c,d){this.Ye.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.i.length;a<b;++a)this.Ye.$_ubk(this.i[a]);this.i.length=0;this.Ye=null;g8.prototype.xa.call(this)};
g.k.qQ=function(){this.ea("screenChange")};
g.k.mW=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.kQ;q8.prototype.$_gsppc=q8.prototype.yI;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.TB;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Kh;q8.prototype.$_gos=q8.prototype.xI;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.og;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.u(I9,g.E);g.k=I9.prototype;g.k.xa=function(){g.E.prototype.xa.call(this);this.i.stop();this.B.stop();this.S.stop();this.ma();var a=this.Xb;a.unsubscribe("proxyStateChange",this.KN,this);a.unsubscribe("remotePlayerChange",this.gx,this);a.unsubscribe("remoteQueueChange",this.RA,this);a.unsubscribe("previousNextChange",this.HN,this);a.unsubscribe("nowAutoplaying",this.BN,this);a.unsubscribe("autoplayDismissed",this.eN,this);this.Xb=this.u=null};
g.k.Hj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.Xb.B)if(J9(this)){var c=a;if(!a9(this.Xb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Xb).Jc()?this.Xb.pause():this.Xb.play();break;case "control_play":this.Xb.play();break;case "control_pause":this.Xb.pause();break;case "control_seek":this.K.rJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.mV=function(a){this.S.KR(a)};
g.k.jZ=function(a){this.Hj("control_subtitles_set_track",g.sf(a)?null:a)};
g.k.cP=function(){var a=this.I.getOption("captions","track");g.sf(a)||K9(this,a)};
g.k.Sb=function(a){this.u.Sb(a,this.I.getVideoData().lengthSeconds)};
g.k.XV=function(){g.sf(this.C)||y0a(this,this.C);this.D=!1};
g.k.KN=function(a,b){this.B.stop();2===b&&this.XO()};
g.k.gx=function(){if(J9(this)){this.i.stop();var a=a9(this.Xb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Df=1;break;case 1082:case 1083:this.u.Df=0;break;default:this.u.Df=-1}switch(a.playerState){case 1081:case 1:this.Yb(new g.OI(8));this.WO();break;case 1085:case 3:this.Yb(new g.OI(9));break;case 1083:case 0:this.Yb(new g.OI(2));this.K.stop();this.Sb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Yb(new g.OI(4));break;case 2:this.Yb(new g.OI(4));this.Sb(W8(a));
break;case -1:this.Yb(new g.OI(64));break;case -1E3:this.Yb(new g.OI(128,{errorCode:"mdx.remoteerror",errorMessage:"Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa."}))}a=a9(this.Xb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,y0a(this,a));a=a9(this.Xb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.X.isActive()||
this.CP()}else x0a(this)};
g.k.HN=function(){this.I.ea("mdxpreviousnextchange")};
g.k.RA=function(){J9(this)||x0a(this)};
g.k.BN=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.k.eN=function(){this.I.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J9(this)&&this.Xb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a9(this.Xb).playerState?L9(this,a):b&&this.Xb.seekTo(a)};
g.k.CP=function(){var a=this;if(J9(this)){var b=a9(this.Xb);this.events.xc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){w0a(a,c)})}};
g.k.WO=function(){this.i.stop();if(!this.Xb.isDisposed()){var a=a9(this.Xb);a.Jc()&&this.Yb(new g.OI(8));this.Sb(W8(a));this.i.start()}};
g.k.XO=function(){this.B.stop();this.i.stop();var a=this.Xb.C.getReconnectTimeout();2==this.Xb.B&&!isNaN(a)&&this.B.start()};
g.k.Yb=function(a){this.B.stop();var b=this.J;if(!g.TI(b,a)){var c=g.U(a,2);c!==g.U(this.J,2)&&this.I.Ut(c);this.J=a;A0a(this.u,b,a)}};g.u(M9,g.V);M9.prototype.kd=function(){this.i.show()};
M9.prototype.Fb=function(){this.i.hide()};
M9.prototype.u=function(){$6("mdx-privacy-popup-cancel");this.Fb()};
M9.prototype.B=function(){$6("mdx-privacy-popup-confirm");this.Fb()};g.u(N9,g.V);N9.prototype.onStateChange=function(a){z0a(this,a.state)};g.u(O9,g.sP);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Qo=g.xc(a,this.i,this),g.tP(this,g.Sn(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.di(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.xj=function(a){return"cast-selector-receiver"===a?"Truy\u1ec1n...":this.Qo[a].name};
O9.prototype.Jf=function(a){g.sP.prototype.Jf.call(this,a);this.I.setOption("remote","currentReceiver",this.Qo[a]);this.sb.Fb()};g.u(P9,g.sM);g.k=P9.prototype;
g.k.create=function(){var a=this.player.U(),b=g.$D(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};r0a(b,a);this.subscriptions.push(g.Tu("yt-remote-before-disconnect",this.lV,this));this.subscriptions.push(g.Tu("yt-remote-connection-change",this.MW,this));this.subscriptions.push(g.Tu("yt-remote-receiver-availability-change",this.JN,
this));this.subscriptions.push(g.Tu("yt-remote-auto-connect",this.KW,this));this.subscriptions.push(g.Tu("yt-remote-receiver-resumed",this.JW,this));this.subscriptions.push(g.Tu("mdx-privacy-popup-confirm",this.bY,this));this.subscriptions.push(g.Tu("mdx-privacy-popup-cancel",this.aY,this));this.JN()};
g.k.load=function(){this.player.cancelPlayback();g.sM.prototype.load.call(this);this.ji=new I9(this,this.player,this.Xb);var a=(a=v0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Sb(a);A0a(this,this.Id,this.Id);this.player.vl(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.Dn=this.fl;g.Re(this.ji,this.Xb);this.Xb=this.ji=null;g.sM.prototype.unload.call(this);this.player.vl(5);Q9(this)};
g.k.xa=function(){g.Uu(this.subscriptions);g.sM.prototype.xa.call(this)};
g.k.il=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.ji.Hj.apply(this.ji,[a].concat(g.ma(b)))};
g.k.getAdState=function(){return this.Df};
g.k.Wk=function(){return this.Xb?a9(this.Xb).Wk:!1};
g.k.hasNext=function(){return this.Xb?a9(this.Xb).hasNext:!1};
g.k.Sb=function(a,b){this.sM=a||0;this.player.ea("progresssync",a,b);this.player.Qa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.sM};
g.k.getProgressState=function(){var a=a9(this.Xb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.U().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.mf():!a.isAdPlaying()&&this.player.mf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+U8(a):a.i,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.k.nextVideo=function(){this.Xb&&this.Xb.nextVideo()};
g.k.fB=function(){this.Xb&&this.Xb.fB()};
g.k.lV=function(a){1===a&&(this.EG=this.Xb?a9(this.Xb):null)};
g.k.MW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Dn;this.loaded&&this.unload();this.Xb=a;this.EG=null;b.key!==this.fl.key&&(this.Dn=b,this.load())}else g.Qe(this.Xb),this.Xb=null,this.loaded&&(this.unload(),(a=this.EG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.JN=function(){var a=[this.fl],b=a.concat,c=s0a();O8()&&g.jy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Qo=b.call(a,c);a=A9()||this.fl;R9(this,a);this.player.Qa("onMdxReceiversChange")};
g.k.KW=function(){var a=A9();R9(this,a)};
g.k.JW=function(){this.Dn=A9()};
g.k.bY=function(){this.ox=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.k.aY=function(){this.ox=!1;Q9(this);R9(this,this.fl);this.Dn=this.fl;H9=!1;B9=null;this.player.playVideo()};
g.k.uf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Qo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Dn:this.fl;case "quickCast":return 2===this.Qo.length&&"cast-selector-receiver"===this.Qo[1].key?(b&&Q8(),!0):!1}};
g.k.FH=function(){this.Xb.FH()};
g.k.Zi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.rM("remote",P9);})(_yt_player);
