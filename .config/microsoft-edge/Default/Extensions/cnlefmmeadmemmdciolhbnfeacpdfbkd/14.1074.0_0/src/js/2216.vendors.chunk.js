(self.webpackChunk=self.webpackChunk||[]).push([[2216],{83901:(e,t,n)=>{n.d(t,{A:()=>E});var r=n(90023),i=n(89218),o=n(17417),a=n(90694),s=n(4183),u=n(65553),c=n(51502),l=n(96030),f=n(65647),d=n(55446),h=n(47579),p=n(58303),v=n(33349),g=n(59833),y=n(11841),b=n(26385),m=n(8155),I=n(59268),_=n(71204),w=n(69381),A=n(95030);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}var E=function(){function e(t,n,S){var C=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new A.J,k=this;O(this,e),j(this,"_getByRawAlertId",void 0),j(this,"popoverManager",void 0),j(this,"state",void 0),j(this,"_sduiManager",void 0),j(this,"_subs",void 0),j(this,"_log",void 0),j(this,"alertIdResolver",void 0),j(this,"findFirstCardWithContent",void 0),j(this,"onSessionStarted",void 0),j(this,"onFirstCheckingFinished",void 0),j(this,"notifyAlertsChanged",void 0),j(this,"loadItems",void 0),j(this,"_toRemovedAlertIdsByClient",void 0),this._getByRawAlertId=S,this.popoverManager=C,this._subs=new c.w.Keeper,this._log=y.C8.Logging.getLogger("SDUIManager",b.i.TRACE,b.T.Manager.getColor()),this.findFirstCardWithContent=function(e){return k._sduiManager.findFirstCardWithContent(e)},this.onSessionStarted=function(){return k._sduiManager.onSessionStarted()},this.onFirstCheckingFinished=function(){return k._sduiManager.onFirstCheckingFinished()},this.notifyAlertsChanged=function(){return k._sduiManager.notifyAlertsChanged()},this.loadItems=function(e){return k._sduiManager.loadItems(e)},this._toRemovedAlertIdsByClient=function(e){var t=function(e,t,n){return(0,h.Kg)(a.bZ.isRemovedByTextChange,a.bZ.isDuplicated)(t.alert)?(0,r.zG)(n,p.ij,p.tS((function(e){return e.alert.rawId})),p.wp((function(){return t.alert.rawId})),p.g_((function(){return e}),(function(n){var r,i=a.bZ.isRemovedByTextChange(t.alert)?I.i5.TextChange:I.i5.RemoveDuplicate;return k._log.debug("[Optimistic update] alert ".concat(a.bZ.State.Type.REMOVED," by ").concat(i," ").concat(s.h.show.show(t))),e.set(i,P(null!==(r=e.get(i))&&void 0!==r?r:[]).concat([_.j.AlertId.from(n)]))}))):e};return e.pipe(l.G(),f.U((0,r.og)(u.p.diff)),f.U((function(e){return v.v.reduce(new Map,(function(e,n){return t(e,n)}),(function(e,n,r){return t(e,r,n)}),r.yR)(e)})),d.h((function(e){return(0,r.zG)(Array.from(e.values()),g.xH,(0,h.ff)(g.xb))})))};var F=n.pipe(d.h(w.e.isSduiEvent),f.U(I.al.fromSource(I.i5.CAPI))),E=(0,r.ls)(i.wQ.Id.create,this._getByRawAlertId,p.UI((function(e){return _.j.AlertId.from(e.id)})));this._sduiManager=new m.G(F,E,C),this.alertIdResolver=E,this.state=this._sduiManager.state,this._subs.push(t.subscribe((function(e){return k._sduiManager.notifyAlertsChanged()})),this._toRemovedAlertIdsByClient(t).subscribe((function(e){return e.forEach((function(e,t){return k.pushRemovedAlerts([e,t])}))})),n.pipe(d.h(o.h.is("session_started")),d.h((function(e){return e.isNewSession}))).subscribe((function(e){return k._sduiManager.onSessionStarted()})),n.pipe(d.h(o.h.is("finish")),d.h((function(e){return 0===e.revision}))).subscribe((function(e){return k._sduiManager.onFirstCheckingFinished()})))}var t,n,S;return t=e,(n=[{key:"onAlertsRefEmpty",get:function(){return this._sduiManager.onAlertsRefEmpty}},{key:"pushRemovedRoot",value:function(e){this._sduiManager.pushRemovedRoot(e)}},{key:"pushRemovedAlerts",value:function(e){var t=k(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n,r])}},{key:"pushRemovedDenaliAlerts",value:function(e){var t=k(e,2),n=t[0],r=t[1];this._sduiManager.pushRemovedAlerts([n.map(_.j.AlertId.from),r])}},{key:"pushSwitchView",value:function(e){this._sduiManager.pushSwitchView(e)}},{key:"resolveStrongAlertRefAlerts",value:function(e){return this._sduiManager.resolveStrongAlertRefAlerts(e)}},{key:"flush",value:function(){this._sduiManager.flush()}},{key:"dispose",value:function(){this._subs.dispose(),this._sduiManager.dispose()}}])&&C(t.prototype,n),S&&C(t,S),e}()},98475:(e,t,n)=>{n.d(t,{_:()=>N});var r=n(15061),i=n(90023),o=n(25770),a=n(36072),s=n(31413),u=n(49144),c=n(51502),l=n(90049),f=n(65647),d=n(65078),h=n(19360),p=n(70989),v=n(55446),g=n(14765),y=n(96030),b=n(65802),m=n(12518),I=n(87313),_=n(48886),w=n(62541),A=n(58303),S=n(33349),O=n(47579),C=n(14944),j=n(66571),k=n(53466),P=n(97225),F=n(58623),E=n(11841),M=n(26385),U=n(71204),x=n(15851),R=n(54010),T=n(37315),D=n(23090);function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}function V(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,"onFeedRemove",new a.xQ),z(this,"onFeedEmpty",new a.xQ),z(this,"_header",new s.t(1)),z(this,"_footer",new s.t(1)),z(this,"_feeds",new Map),z(this,"_currentCards",o.h.create(R.l.empty)),z(this,"_feed",new u.X(void 0)),z(this,"_feedStack",new u.X([])),z(this,"_cardIdToFocus",new a.xQ),z(this,"_subs",new c.w.Keeper),z(this,"_log",E.C8.Logging.getLogger("SDUIFeedManager",M.i.TRACE,M.T.Manager.getColor())),z(this,"_forceFeedInternalInfo",new a.xQ),z(this,"_getFeedContent",(0,i.ls)(this._getFeed,m.map((function(e){return e.content})),I.MH)),z(this,"_changeFeed",(function(e){n._feed.next(e),(0,i.zG)(e.cards,R.l.applyDiff,_.UI(w.T.recover((function(e){return n._log.error("conflicts on diff apply",e)}))),(function(t){var r=n._currentCards.get(),i=t(r);if(r.entries.size>0&&0===i.entries.size){var o=n._feeds.get(e.feedId);void 0!==o&&n.onFeedEmpty.next(o)}n._currentCards.modify(t)}))}));var r=l.T(this._feedStack.pipe(f.U((function(e){return A.ij(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),O=l.T(this._feedStack.pipe(h.g("length"),f.U((function(e){return A.ij(e[e.length-1])})),d.oA,f.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),C=this._cardIdToFocus.pipe(p.M(this._feedStack.pipe(f.U((function(e){var t;return null===(t=e[e.length-1])||void 0===t?void 0:t.focusedCardId})))),v.h((function(e){var t=W(e,2);return t[0]!==t[1]})),f.U((function(e){return W(e,1)[0]})),p.M(this.feed),f.U((function(e){var t=W(e,2),r=t[0],i=t[1];return n._getFeedInternalInfo(i.feedId,U.j.Item.Id.from(r))}))),j=t.pipe(g.O(x.a.empty),y.G(),f.U((function(e){var t=W(e,2),n=t[0],r=t[1];return x.a.diff(n,r)})),f.U((function(e){return n._processSDUIItems(e)})),p.M(r),f.U((function(e){var t=W(e,2),n=t[0],r=t[1],o=r.feedOrd,a=r.feedFilter;return{feedId:r.feedId,cards:(0,i.zG)(n,S.v.filter(a,(function(e,t){return a(t)}),a)),feedOrd:o,itemIdToSelect:A.YP}}))),k=l.T(O,C).pipe(p.M(t,this._currentCards),f.U((function(e){var t=W(e,3),n=t[0],r=n.feedOrd,o=n.feedFilter,a=n.feedId,s=n.itemIdToSelect,u=t[1],c=t[2],l=(0,i.zG)(u,R.l.iso.unwrap,(function(e){return(0,i.zG)(e.entries,F.hX(o))}));return{feedId:a,cards:R.l.diffFromEntries(c.entries,l),feedOrd:r,itemIdToSelect:s}})));this._subs.push(l.T(j,k).subscribe(this._changeFeed)),this._subs.push(O.pipe(b.j("header")).subscribe((function(e){return n._header.next(e)}))),this._subs.push(O.pipe(b.j("footer")).subscribe((function(e){return n._footer.next(e)})))}var t,n,D;return t=e,n=[{key:"header",get:function(){return this._header.asObservable()}},{key:"footer",get:function(){return this._footer.asObservable()}},{key:"feed",get:function(){return this._feed.pipe(v.h(O.$K))}},{key:"currentFeed",get:function(){return A.ij(this._feed.getValue())}},{key:"_getFeed",value:function(e){var t=this._feeds.get(e);return void 0===t?m.left("Cannot switch to feed. Feed with id '".concat(e,"' not found.")):m.right(t)}},{key:"_getFeedInternalInfo",value:function(e,t){var n=this._getFeedContent(e);return{feedId:e,feedFilter:function(e){var t=$(e.content);return!A.Wi(t)&&n.filtering.reduce((function(e,n){return!1===e?e:(0,i.zG)(t,A.tS((function(e){return A.ij(e[n.property])})),A.g_((function(){return n.condition===T.j2.NotEqualTo}),(function(e){return n.condition===T.j2.EqualTo?e===n.value:e!==n.value})))}),!0)},feedOrd:(0,r.g_)(C.iP())(n.ordering.map((function(e){return(0,i.zG)(C.Mh,C.Uz((0,i.ls)($,A.tS((function(t){return A.ij(t[e.orderBy])})),A.g_((function(){return Number.MAX_VALUE}),(function(t){return e.direction===T.di.Asc?t:-1*t})))))}))),itemIdToSelect:A.G(t),header:n.header,footer:A.ij(n.footer)}}},{key:"pushFeed",value:function(e,t){var n=this;return(0,i.zG)(this._getFeed(e),m.map((function(){var r=n._feedStack.getValue();return r=r.concat({feedId:e,focusedCardId:t?U.j.Item.Id.from(t):void 0}),n._feedStack.next(r),null})))}},{key:"popFeed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.YP,t=this,n=this._feedStack.getValue();if(n.length>1)return n=n.slice(0,n.length-1),void this._feedStack.next(n);(0,i.zG)(e,A.g_((function(){return t._log.warn("Invoked `popFeed()` when there are less than 2 feeds in the feed stack, this is a no-op. No fallback feed provided.")}),(function(e){t.pushFeed(U.j.Item.Id.from(e.feedId),e.cardId),t._log.debug("Invoked 'popFeed()' when there are less than 2 feeds in the feed stack. Switching to the provided fallback feed. ".concat(JSON.stringify(e)))})))}},{key:"focusCard",value:function(e){var t=this;return(0,i.zG)(this.currentFeed,m.fromOption((function(){return"Cannot focus card when there is no active feed."})),m.map((function(){return t._cardIdToFocus.next(e),null})))}},{key:"notifyCardFocused",value:function(e){var t=this._feedStack.getValue(),n=t[t.length-1];(0,j.kG)(void 0!==n,"notifyCardFocused: Feed stack cannot be empty."),t=t.slice(0,t.length-1).concat(V(B({},n),{focusedCardId:e})),this._feedStack.next(t)}},{key:"_processSDUIItems",value:function(e){var t=this;return S.v.fromMutation((function(n){(0,i.zG)(e,S.v.forEach((function(e){void 0!==t._feeds.get(e.id)?(t._feeds.delete(e.id),(0,i.zG)(t.currentFeed,A.hX((function(t){return t.feedId.toString()===e.id.toString()})),k.bw((function(){return t.onFeedRemove.next(e)})))):n.set(e.id,P.t$(e))}),(function(e,r){if("assistantFeed"===r.content.type){var o=r.content;void 0!==t._feeds.get(e.id)?(t._feeds.set(e.id,V(B({},r),{content:o})),(0,i.zG)(t.currentFeed,A.hX((function(t){return t.feedId===e.id})),A.UI((function(e){t._header.next(o.header),t._footer.next(A.ij(o.footer))})))):t._log.warn("Feed with id '".concat(e.id,"' not found for update"))}else n.set(e.id,P.Hk(e,r))}),(function(e){if("assistantFeed"===e.content.type){var r=e.content;t._feeds.set(e.id,V(B({},e),{content:r}))}else n.set(e.id,P.F2(e))})))}))}},{key:"dispose",value:function(){this._subs.dispose()}}],n&&G(t.prototype,n),D&&G(t,D),e}();function $(e){var t=!0,n=!1,r=void 0;try{for(var i,o=D.ab.traverse(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if("longFormCard"===a.type)return A.G(a.feedProperties);if("assistantCard"===a.type&&a.properties)return A.G(a.properties)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return A.YP}},94419:(e,t,n)=>{n.d(t,{i:()=>r});var r,i=n(90023),o=n(47579),a=n(12518),s=n(58303),u=n(53466),c=n(11841),l=n(36802),f=n(40967),d=n(23090),h=n(37315);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(e){var t=(0,o.HP)(c.C8.Logging.getLogger);!function(e){e.create=function(e){var n=t("SingleCardAssistant.Transformers.disablePrevNextButtons");return function(t){var r=t.state,o=t.metadata;if(!l.nL.hasItems(r))return n.trace("state has no feed items, returning original state"),a.left({state:r,metadata:o});var c=r;return(0,i.zG)(c.currentLens.cardIndex,s.tS((function(e){return(0,i.zG)(l.In.getActiveItem(r.currentLens),s.UI((function(t){return(0,i.bc)(t,e)})))})),s.UI((function(t){var n=b(t,2),i=n[0],o=n[1];return l.nL.Prism.getLensWithItems().modify((function(t){if(!f.e.isSDUIItem(i)||!s.pC(i.cardDSL))return t;var n=e.clone(i),a=u.MH(n.cardDSL),c=!1,l=d.ab.map(a,(function(e){if("button"===e.type&&e.name.value===h.MU.ButtonPrev){var t=0===o?h.BN.Disabled:h.BN.Enabled;return c=c||t!==e.state,y(g({},e),{state:t})}if("button"===e.type&&e.name.value===h.MU.ButtonNext){var n=o===r.currentLens.items.size-1?h.BN.Disabled:h.BN.Enabled;return c=c||n!==e.state,y(g({},e),{state:n})}return e}));return s.pC(l)&&c?(n=Object.assign(n,{cardDSL:l}),y(g({},t),{items:t.items.add(n)})):t}),c)})),s.fS((function(){return r})),(function(e){return a.left({state:e,metadata:o})}))}}}(e.DisablePrevNextButtons||(e.DisablePrevNextButtons={}))}(r||(r={}))},31666:(e,t,n)=>{n.d(t,{q:()=>N});var r=n(90023),i=n(58303),o=n(12518),a=n(53466),s=n(66571),u=n(59833),c=n(47579),l=n(86399),f=n(11841),d=n(26385),h=n(66856),p=n(90694),v=n(81858),g=n(56689),y=n(59137),b=n(36802),m=n(75951),I=n(51502),_=n(36072),w=n(60165),A=n(65647),S=n(50824),O=n(55446),C=n(49766),j=n(8748),k=n(26650),P=n(71204),F=n(27047),E=n(40967),M=n(54358),U=n(30822),x=n(25770);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||V(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||V(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}var W,N=function(){function e(t,n,o,a,s,u,c,p){var v,g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:new h.A,y=this;T(this,e),L(this,"_checksFeedCapabilities",void 0),L(this,"_lensState",void 0),L(this,"_alertReader",void 0),L(this,"_capiClient",void 0),L(this,"_platformEnvironment",void 0),L(this,"_sduiViewModel",void 0),L(this,"sduiActionEvents",void 0),L(this,"_sduiAlertIdResolver",void 0),L(this,"_log",void 0),L(this,"_subs",void 0),L(this,"actionEvents",void 0),L(this,"_focusedItem",void 0),L(this,"_mapToDenaliAlerts",void 0),this._checksFeedCapabilities=n,this._lensState=o,this._alertReader=u,this._capiClient=c,this._platformEnvironment=g,this._log=f.C8.Logging.getLogger("SDUICardsViewModelImpl",d.i.DEBUG),this._subs=new I.w.Keeper,this.actionEvents=new _.xQ,this._focusedItem=this._lensState.view((function(e){return b.nL.hasItems(e)?(0,r.zG)(e.currentLens.cardIndex,i.tS((function(t){return e.currentLens.items.getAt(t)}))):i.YP})),this._mapToDenaliAlerts=function(e){return(0,r.zG)(e,l.fw(i.Kw)((function(e){return y._alertReader.getById(y._mapToDenaliAlertId(e))})),i.hX(l.Od))},this._sduiAlertIdResolver=(0,U.X)(a.alertIdResolver,this._log);var m=x.h.create(i.YP);this._sduiViewModel=new U.x(t,a,s,c,m,g),this.sduiActionEvents=this._sduiViewModel.sduiActionEvents,(v=this._subs).push.apply(v,B(this._integrateCardsViewModel(p)).concat([(0,r.zG)(this._focusedItem,w.x((function(e,t){return i.Eh(k.s.eqById).equals(e,t)})),A.U(i.tS(i.DT(E.e.isSDUIItem))),A.U(i.UI((function(e){return P.j.Item.Id.from(e.id)})))).subscribe(S.wW(m)),this._sduiViewModel]))}var t,n,c;return t=e,n=[{key:"_integrateCardsViewModel",value:function(e){return[this.actionEvents.subscribe(e.actionEvents),e.actionEvents.pipe(O.h(y.t.isSduiCardAction)).subscribe(this.sduiActionEvents)]}},{key:"_sduiActionsHandler",value:function(){var e=this;return this.sduiActionEvents.pipe(C.skipBy(y.t.eq),A.U((function(t){var n=t.cardId,u=t.actions,c=t.scope;return function(t){return e._log.info("sdui card action:",{cardId:n,actions:u}),(0,r.zG)(u,l.u4(t,(function(t,u){switch(u.type){case"notify":case"nextCard":case"prevCard":case"openSettings":case"openToneDetector":case"openFeedback":case"upgradeToPremium":case"openLearnMore":case"transition":case"openCreateSnippetModal":case"nativeOpenAssistant":case"showHighlights":case"hideHighlights":case"selectAlternative":case"openLink":case"copyToClipboard":case"pushAssistantFeed":case"popAssistantFeed":case"focusAssistantCard":case"switchView":case"newRevision":case"stopApplyingAlerts":case"closePopover":case"interactPopover":case"openGrammarlyGo":case"enablePlagiarismCheck":case"disablePlagiarismCheck":case"enableWritingExpertCheck":case"disableWritingExpertCheck":case"openPerformanceScore":case"nativeOpenUserSatisfactionFeedback":return t;case"removeRoot":return(0,r.zG)(t.currentLens.items.get(n),i.UI((function(e){return e.value})),i.UI(e._checksFeedCapabilities.remove(r.W8,r.W8)),i.UI((function(e){return b.nL.Prism.getLens().compose(m.v.Prism.items).set(t.currentLens.items.modifyWith([[e.id,e]],(function(){return e})),t)})),i.fS((0,r.a9)(t)));case"applyAlerts":return(0,r.zG)(t.currentLens.items.get(n),i.UI((function(e){return e.value})),o.fromOption((function(){return new Error("unknown cardId: ".concat(n))})),o.bimap((function(t){return e._log.error("error in processing applyAlerts action",t)}),(function(t){(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(n){requestAnimationFrame((function(){(0,r.zG)(n,e._mapToDenaliAlerts,i.UI(l.UI((function(n){return e.actionEvents.next({type:g.lY.Type.alertApply,id:t.id,eligibleForSurvey:n.acceptSurvey,eligibleForGbPrompt:n.gbPrompt,alertId:n.id,alternativeIndex:u.alternativeIndex,cardType:g.lY.getCardType({activeAlert:F.$.fromModel(n)})})}))))}))})))})),(function(){return t.patch({alertSource:p.l$.sidebar})}));case"closeCard":return t.patch({currentLens:b.nL.hasItems(t)?e._checksFeedCapabilities.unselectItem()(t.currentLens):t.currentLens,switchOrder:"lensOrder",alertSource:p.l$.sidebar});case"removeAlerts":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),a.bw((function(t){requestAnimationFrame((function(){(0,r.zG)(t,e._mapToDenaliAlerts,i.UI(l.UI((function(t){return e.actionEvents.next({type:g.lY.Type.alertIgnore,id:n,alertId:t.id,eligibleForSurvey:t.dismissSurvey})}))))}))}))),t.patch({alertSource:p.l$.sidebar});case"highlightAlert":return(0,r.zG)(e._sduiAlertIdResolver(c.alertRefs),i.tS(e._mapToDenaliAlerts),i.UI((function(e){if(!b.nL.hasItems(t))return t;var n=function(e,t){return function(n){return(0,r.zG)(n.items.update(e,(function(e){return(0,r.zG)(e,i.DT(M.P.isAlertRefSDUIItem),i.tS(M.P.Capabilities.setActiveAlertId(t)),i.tS(M.P.Capabilities.setActiveHighlightIndex(u.highlightIndex)),i.fS((0,r.a9)(e)))})),o.fold((function(){return n}),(function(e){return G(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}({},n),{items:e})})))}},a=e[0];return(0,r.zG)(b.In.getActiveItem(t.currentLens),i.UI((function(e){return b.nL.Prism.getLensWithItems().modify(n(e.id,a.id),t)})),i.UI((function(e){return e.patch({alertSource:p.l$.sidebar})})),i.fS((0,r.a9)(t)))})),i.fS((0,r.a9)(t)));default:(0,s.L0)(u)}})))}})))}},{key:"getApplicatorEffects",value:function(){return(0,r.zG)([[this._sduiActionsHandler(),"sduiActions"]],u.UI((function(e){var t=z(e,2),n=t[0],r=t[1];return{id:"cardsViewModel.effects.".concat(r),when:v.R.isWithAlertsId,what:b.nL.Effect.Applicator.create(n)}})))}},{key:"onAssistantClose",value:function(){this._sduiViewModel.onAssistantClose()}},{key:"dispose",value:function(){this._subs.dispose()}},{key:"_mapToDenaliAlertId",value:function(e){return"".concat(e)}}],n&&D(t.prototype,n),c&&D(t,c),e}();!function(e){e.itemsLens=b.nL.Prism.getLens().compose(m.v.Prism.items),e.createLegacy=function(e,t,n,s,u,c,l){var f=arguments.length>7&&void 0!==arguments[7]?arguments[7]:new h.A,d={enablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))},disablePlagiarismSearch:function(){return Promise.resolve(o.right(void 0))},enableWritingExpert:function(){return Promise.resolve(o.right(void 0))},disableWritingExpert:function(){return Promise.resolve(o.right(void 0))},requestWritingExpert:function(){return function(){return Promise.resolve(o.right(void 0))}}};return(0,r.zG)(a.gz(e,s,u),i.g_((function(){return new W.Mock}),(function(e){var r=z(e,3),i=r[0],o=r[1],a=r[2];return new N(i,t,n,o,a,c,d,l,f)})))};e.Mock=function e(){T(this,e),L(this,"actionEvents",new _.xQ),L(this,"sduiActionEvents",new _.xQ),L(this,"sideEffect",{id:"cardsViewModelMock",when:v.R.isWithAlertsId,what:b.nL.Effect.Applicator.create(j.E)}),L(this,"getApplicatorEffects",(function(){return[{id:"cardsViewModelMock",when:v.R.isWithAlertsId,what:b.nL.Effect.Applicator.create(j.E)}]})),L(this,"onAssistantClose",c.Q1),L(this,"dispose",c.Q1)}}(W||(W={}))}}]);