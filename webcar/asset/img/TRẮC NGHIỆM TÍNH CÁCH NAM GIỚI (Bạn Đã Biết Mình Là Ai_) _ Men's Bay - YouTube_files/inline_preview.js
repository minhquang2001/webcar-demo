(function(g){var window=this;'use strict';var z6=function(a){g.V.call(this,{G:"div",L:"ytp-inline-preview-ui"});this.qe=!1;this.player=a;this.T(a,"onStateChange",this.vH);this.T(a,"videodatachange",this.Bl);this.T(a,"onInlinePreviewModeChange",this.VT);this.Td=new g.Zq(this.Bq,null,this);g.H(this,this.Td)},A6=function(a){g.sM.call(this,a);
this.i=new z6(this.player);g.H(this,this.i);this.i.hide();g.eM(this.player,this.i.element,4);a.isInline()&&(this.load(),g.N(a.getRootNode(),"ytp-inline-preview-mode",!0),this.player.U().N("web_inline_player_disable_scrubbing")&&g.N(a.getRootNode(),"ytp-inline-preview-mode-no-scrubbing",!0))};
g.u(z6,g.V);g.k=z6.prototype;
g.k.jF=function(){this.tooltip=new g.hQ(this.player,this);g.H(this,this.tooltip);g.eM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Bc=new g.lN(this.player);g.H(this,this.Bc);var a=["ytp-inline-preview-scrim"];this.player.U().N("web_inline_player_expand_to_watch")||a.push("ytp-inline-preview-scrim-clear");this.Hg=new g.V({G:"div",Ia:a});g.H(this,this.Hg);this.Hg.Ea(this.element);this.T(this.Hg.element,"click",this.NA);this.player.U().N("web_inline_player_expand_to_watch")&&(a=new g.Y1(this.player,
this),g.H(this,a),a.Ea(this.Hg.element));this.Kg=new g.UP(this.player,this);g.H(this,this.Kg);this.Kg.Ea(this.Hg.element);this.controls=new g.V({G:"div",L:"ytp-inline-preview-controls"});g.H(this,this.controls);this.controls.Ea(this.element);a=new g.GO(this.player,this);g.H(this,a);a.Ea(this.controls.element);a=new g.SP(this.player,this);g.H(this,a);a.Ea(this.controls.element);this.Kc=new g.SO(this.player,this);g.H(this,this.Kc);g.eM(this.player,this.Kc.element,4);this.T(this.player,"appresize",this.Ab);
this.T(this.player,"fullscreentoggled",this.Ab);this.Ab()};
g.k.show=function(){g.$q(this.Td);this.qe||(this.jF(),this.qe=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show()};
g.k.hide=function(){this.Td.stop();g.V.prototype.hide.call(this);this.player.isInline()||this.qe&&this.Kc.hide()};
g.k.xa=function(){g.V.prototype.xa.call(this)};
g.k.NA=function(a){a.target!==this.Hg.element||this.player.U().N("web_inline_player_expand_to_watch")||this.player.Qa("onExpandInlinePreview",a)};
g.k.VT=function(){g.N(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.qd=function(){this.Kc.Sb();this.Kg.Sb()};
g.k.Bq=function(){this.qd();g.$q(this.Td)};
g.k.Ab=function(){g.fP(this.Kc,0,this.player.fb().getPlayerSize().width,!1);g.TO(this.Kc)};
g.k.vH=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.Bl=function(a,b){this.player.isInline()&&g.N(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.BG)};
g.k.kc=function(){return this.tooltip};
g.k.Ze=function(){return!1};
g.k.Cf=function(){return!1};
g.k.Ei=function(){return!1};
g.k.Hx=function(){};
g.k.Fn=function(){};
g.k.Gs=function(){};
g.k.Vn=function(){return null};
g.k.jw=function(){return null};
g.k.Fj=function(){return new g.sn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Iq=function(a,b,c,d,e){var f=d=0,h=0,l=g.In(a);if(b){c=g.or(b,"ytp-miniplayer-expand-watch-page-button");var m=g.or(b,"ytp-mute-button"),n=g.or(b,"ytp-subtitles-button"),p=g.Gn(b,this.element);b=g.In(b);d=p.y+40;c&&(h=8);if(n||m)h=p.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.fb().getPlayerSize().width;h=g.Rg(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.zl=function(){};
g.k.Qk=function(){return!1};g.u(A6,g.sM);A6.prototype.Zi=function(){return!1};
A6.prototype.load=function(){this.player.hideControls();this.i.show()};
A6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.rM("inline_preview",A6);})(_yt_player);
