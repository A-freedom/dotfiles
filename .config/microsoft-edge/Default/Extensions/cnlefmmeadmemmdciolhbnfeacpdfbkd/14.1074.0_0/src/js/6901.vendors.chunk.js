(self.webpackChunk=self.webpackChunk||[]).push([[6901],{78695:(t,e,n)=>{n.d(e,{p:()=>ut});var r=n(49231),i=n(86399),o=n(90023),a=n(43818),u=n(60165),c=n(65647),s=n(36072),l=n(78488),d=n(45689),f=n(56689),p=n(99836),m=n(99286),v=n(50824),y=n(77242),S=n(86024);var h=n(21245),g=n(57528),I=n(58303),b=n(43701),k=n(74465);const O=d.UI.Grid.make((({slots:t})=>r.createElement(b.f.Context.Provider,{value:b.f.emptyWithName("card")},r.createElement(a.F.div,{"data-role":"animation-wrapper",className:k.$4.animationWrapper},t.animatedItemBaseChild))));var U,A,w,C,D=n(93670);!function(t){t.make=function(t){return d.UI.Union.asOption(d.UI.Knot.make(e,{shadeItem:t}))};const e=d.UI.Grid.make((({slots:t,state:e,notify:n})=>r.createElement(a.F.Fragment,null,e.pipe(c.U((({item:i,key:o,className:u})=>r.createElement(a.F.div,{className:u,key:"shade"+e+o,onAnimationEnd:t=>{D.c.get(t.animationName)!==u&&k.bb.get(t.animationName)!==u||n({type:f.eI.Kind.completeTransitionTo,id:i.id,transitionId:i.visualState.transitionId})()}},t.shadeItem)))))))}(U||(U={})),function(t){t.make=function(t){return d.UI.Composite.make(O,d.UI.Knot.make(e,{shade:U.make(t),item:t}))};const e=d.UI.Grid.make((({state:t,slots:e,notify:n})=>r.createElement(a.F.Fragment,null,t.pipe(c.U((({item:t,className:i,hasAnimation:o})=>(o||requestAnimationFrame(n({type:f.eI.Kind.completeTransitionTo,id:t.id,transitionId:t.visualState.transitionId})),r.createElement(a.F.Fragment,null,e.shade,r.createElement(a.F.div,{className:I.FS(i),key:"expanded"===t.visualState.transition.type?"focused":t.visualState.transition.type,onAnimationEnd:n({type:f.eI.Kind.completeTransitionTo,id:t.id,transitionId:t.visualState.transitionId}),onTransitionEnd:()=>{"presuccess"===t.visualState.transition.type&&n({type:f.eI.Kind.startTransitionTo,id:t.id,transition:{type:"success",clockwise:t.visualState.transition.clockwise}})()}},e.item)))))))))}(A||(A={})),function(t){t.make=function(t){return d.UI.Composite.make(O,d.UI.Knot.make(e,{staticItemChild:t}))};const e=d.UI.Grid.make((({state:t,slots:e})=>r.createElement(a.F.Fragment,null,t.pipe(c.U((t=>r.createElement(a.F.div,{key:t},e.staticItemChild)))))))}(w||(w={})),function(t){t.make=function(t){return d.UI.Knot.make(e,{animatedItem:d.UI.Union.make("animatedItemKind",{static:w.make(t),animating:A.make(t)})})};const e=d.UI.Grid.make((({state:t,slots:e})=>r.createElement(a.F.Fragment,null,t.pipe(u.x(((t,e)=>t.id===e.id&&t.visualState.transitionId===e.visualState.transitionId&&t.visualState.transition.type===e.visualState.transition.type)),c.U((()=>r.createElement(a.F.Fragment,null,e.animatedItem)))))))}(C||(C={}));var P=n(66571);function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function T(t,e,n,r){if(n.some((function(t){return"positionedClick"===t.type}))){var i=n[0];switch(i.source){case"collapsedCard":return 1===e.alerts.length?{type:f.lY.Type.alertMinicardButtonClick,alertHighlight:{highlightIndex:0,alert:e.alerts[0]},clickPoint:i.sourcePosition}:{type:f.lY.Type.miniItemClick,id:e.id};case"list":return{type:f.lY.Type.listItemClick,clickPoint:i.sourcePosition};default:return{type:f.lY.Type.miniItemClick,id:e.id}}}else if(n.some((function(t){return"hoverStateChanged"===t.type}))){var o=n[0];return{type:f.lY.Type.hover,id:e.id,kind:o.hovered?"hover":"unhover"}}return{type:f.lY.Type.sduiCardAction,sourceId:t,cardId:e.id,actions:n,scope:r}}var x=function(t){var e=t.inert,n=j(t,["inert"]),i=r.useRef(null);return h.P.useSubscriptionTo(e.pipe(l.b((function(t){var e,n;return t?null===(e=i.current)||void 0===e?void 0:e.setAttribute("inert","true"):null===(n=i.current)||void 0===n?void 0:n.removeAttribute("inert")})))),r.createElement(a.F.div,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){E(t,e,n[e])}))}return t}({mount:i},n))},G=d.UI.Grid.make((function(t){var e=t.view,n=t.slots;return r.createElement(x,{className:v.mk(e("hovered"))(W.listWrapperFocused,W.listWrapper),inert:e("inert")},n.card)})),L=d.UI.Grid.make((function(t){var e=t.view,n=t.slots;return r.createElement(x,{className:W.listWrapperFocused,inert:e("inert")},n.card)})),F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.k,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.P;return d.UI.Node.make((function(i){var s=i.view,l=i.notify,d=s("view").pipe(u.x((function(t,e){return t.equals(e)}))),f=[];return r.createElement(a.F.Fragment,null,d.pipe(c.U((function(i){return r.createElement(n,{key:i.id,sduiRootId:i.id,content:i.cardDSL.value,designSystem:e,notify:function(t,e,n){return l(T(t,i,e,n))()},transitions:f,prevContent:i.prevCardDSL,onAnimationEnd:o.Q1,onMount:o.Q1,longFormCardState:{viewKind:t}})}))))}))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return d.UI.Knot.make(G,{card:F("collapsed",t,e)})},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return d.UI.Knot.make(L,{card:F("focused",t,e)})},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return d.UI.Union.make("kind",{collapsed:z(t,e),focused:N(t,e),hidden:d.UI.Node.empty})},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return C.make(q(t,e))},R={background:y.XY.Surface.Primary.Default,borderRadius:g.ux.rem(S.xB)},W=g.ux.stylesheet({listWrapper:[R,{border:"0.5px solid ".concat(y.XY.Boundaries.Primary.Default)}],listWrapperFocused:[R,{boxShadow:"0px 2px 12px 0.5px var(--color-border-base-default-f5)",border:"0.5px solid var(--color-border-base-default-1)"}]});function B(t){switch(t){case"focused":case"expanded":case"success":case"presuccess":case"feedback_form":return"focused";case"added":case"rendered":return"collapsed";case"hidden":case"removed":case"muted":return"hidden";default:return(0,P.vE)(t)}}var Y,Z=n(65882),_=n(65802),M=n(55446),V=n(14765),H=n(20715),Q=n(60822),$=n(65078),X=n(90049),J=n(60841),tt=n(34859);function et(t,e,n,r){return d.Z.composeUnion({Some:d.Z.composeKnot({value:d.Z.composeKnot({root:()=>t.pipe(c.U((t=>(0,o.zG)(nt(r)(t),I.UI((e=>({item:t,key:n(t),className:e})))))),$.oA),shadeItem:e})}),None:()=>H.of(I.YP)},(e=>X.T(t.pipe(c.U(nt(r))),e.pipe(M.h((t=>"root"===t.action.action.key&&t.action.action.action.type===f.eI.Kind.completeTransitionTo)),J.w(v.b2.rafScheduler),tt.h(I.YP)))))}function nt(t){return e=>(0,o.zG)(e.visualState.from,I.tS((()=>t(e.visualState).shade)))}function rt(t,e,n,r,i){return d.Z.composeKnot({root:()=>t.pipe(c.U((t=>{const{main:e,shade:n}=i(t.visualState);return{item:t,className:e,hasAnimation:I.pC(e)||I.pC(n)}}))),shade:et(t,n,r,i),item:e})}function it(t,e){return d.Z.composeKnot({root:()=>t.pipe(c.U((t=>t.visualState.transition.type))),staticItemChild:e})}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function at(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){u=!0,i=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ot(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}!function(t){t.flow=function(t,e,n,r=(t=>t.id),i=Q.CE.toOption(Q.SA)){return d.Z.composeKnot({root:()=>t,animatedItem:d.Z.composeUnion({static:it(t,e),animating:rt(t,e,n,r,i)},(()=>t.pipe(c.U((t=>({animatedItemKind:t.visualState.incomplete?"animating":"static"}))))))})},t.extend=function(t){return d.Z.extendActions(l.b((e=>{const n=e.action;if("animating"===n.key)if("root"===n.action.key)t(n.action.action);else if("shade"===n.action.key){const e=n.action.action.action.action;"root"===e.key&&t(e.action)}})))}}(Y||(Y={}));var ut,ct=function(t){return function(e){var n=function(n){return Z.aj([n.pipe(_.j("action"),l.b((function(e){return t.next(e)})),M.h((function(t){return"hover"===t.type})),c.U((function(t){return"hover"===t.kind})),V.O(!1)),e]).pipe(c.U((function(t){var e=at(t,2),n=e[0],r=e[1];return{root:{inert:r.positionState.inert,hovered:n},card:{kind:"alertRefSDUI",view:r}}})))},r={collapsed:n,focused:n,hidden:(0,o.a9)(H.of(void 0))},i=d.Z.composeUnion(r,(function(){return e.pipe(c.U((function(t){return{kind:B(t.visualState.transition.type)}})))})),a=d.Z.composeUnion(r,(function(){return e.pipe(c.U((function(t){return{kind:(0,o.zG)(t.visualState.from,I.g_((function(){return"collapsed"}),B))}})))}));return Y.flow(e,i,a)}};!function(t){t.ListCard=F,t.AnimatedListCard=K,t.animatedListCardFlowFactory=ct,t.CollapsedCardWrapper=G,t.FocusedCardWrapper=L,t.SingleCard=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return d.UI.Node.make((function(n){var s=n.view,l=n.notify,d=s("view");return r.createElement(a.F.Fragment,null,d.pipe(u.x((function(t,e){return t.equals(e)})),c.U((function(n){return r.createElement(e,{key:n.id,sduiRootId:n.id,content:n.cardDSL.value,designSystem:t,notify:function(t,e,r){return l({type:f.lY.Type.sduiCardAction,sourceId:t,cardId:n.id,actions:e,scope:r})()},transitions:i.Sb(n.transitions),prevContent:n.prevCardDSL,onAnimationEnd:l({type:f.eI.Kind.completeTransitionTo,id:n.id,transitionId:n.visualState.transitionId}),onMount:o.Q1})}))))}))},t.SquashedListCard=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.P;return d.UI.Node.make((function(n){var r=n.view,i=n.notify,a=r("view").pipe(u.x((function(t,e){return t.equals(e)}))),c=new s.xQ;return h.P.useSubscriptionTo(c.pipe(l.b((function(t){return i(t)()})))),d.UI.mount(K(t,e),(0,o.zG)(ct(c)(a),Y.extend((function(t){return c.next(t)}))))}))}}(ut||(ut={}))},16612:(t,e,n)=>{n.d(e,{Q:()=>r});var r,i=n(49231),o=n(45689);!function(t){t.Empty=o.UI.Node.make((function(){return i.createElement("div",null)}))}(r||(r={}))},54358:(t,e,n)=>{n.d(e,{P:()=>r});var r,i=n(86399),o=n(90023),a=n(65647),u=n(26650),c=n(25482),s=n(58303),l=n(47579),d=n(21147),f=n(59833),p=n(66571),m=n(12518),v=n(33349),y=n(37315),S=n(27047),h=n(90694),g=n(81858),I=n(73729),b=n(53786),k=n(32341),O=n(40967),U=n(83081),A=n(36802),w=n(1653),C=n(34997);function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){D(t,e,n[e])}))}return t}function E(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}!function(t){var e,n=function(t){return"".concat(t.id)};t.isAlertRefSDUIItem=function(t){return t.kind===D},function(t){var e=function(t){return"strongAlertRef"===t.type};t.isBulkAcceptSDUI=function(t){return(0,o.zG)(t.cardDSL,s.Gg((0,l.W9)(e,(function(t){var e;return(null===(e=t.name)||void 0===e?void 0:e.value)===y.MU.StrongAlertRefBulkAccept}))))},t.isBulkDismissSDUI=function(t){return(0,o.zG)(t.cardDSL,s.Gg((0,l.W9)(e,(function(t){var e;return(null===(e=t.name)||void 0===e?void 0:e.value)===y.MU.StrongAlertRefBulkDismiss}))))},t.isLongFormCardSDUI=(0,o.ls)((function(t){return t.cardDSL}),s.Gg((function(t){return"longFormCard"===t.type})))}(e=t.Item||(t.Item={})),function(t){t.BulkDismiss="bulk_dismiss",t.BulkAccept="bulk_accept"}(t.Features||(t.Features={}));var r,D=t.Kind="AlertRefSDUIItem",j=d.f7((function(t,e){return t.hashCode()===e.hashCode()&&k.Z.eq.equals(t.positionState,e.positionState)&&C.t.eq.equals(t.visualState,e.visualState)&&i.Eh(S.$.eq).equals(t.alerts,e.alerts)&&t.activeAlertIndex===e.activeAlertIndex})),T=t.idEq={equals:function(t,e){return d.yv.equals(t,e)}},x=t.eq={equals:function(t,e){return T.equals(t.id,e.id)&&j.equals(t,e)&&O.e.eq.equals(t,e)}};t.getId=n,function(t){t.createItem=function(t,e,n){return{id:t,kind:D,alerts:n,activeAlertIndex:0,cardDSL:s.G(e),prevCardDSL:s.YP,transitions:[],positionState:u.s.PositionState.empty,visualState:c.o.VisualState.initial({type:"added",clockwise:!0},!0),renderOptions:I.j.defaultOptions,equals:function(t){return x.equals(this,t)},hashCode:function(){var t=this;return(0,b.NO)({id:t.id,alertsCount:t.alerts.length,transitions:(0,b.AC)(t.transitions.map((function(t){return t.toName})).join("")),activeAlertIndex:t.activeAlertIndex})}}},t.setActiveAlertId=function(t){return function(e){return(0,o.zG)(e.alerts,i.cx((function(e){return e.id===t})),s.UI((function(t){return E(P({},e),{activeAlertIndex:t})})))}},t.setActiveHighlightIndex=function(t){return function(e){return(0,o.zG)(e,s.DT(j),s.wp((function(){return T(e)})),s.UI((function(e){return E(P({},e),{activeHighlightIndex:t})})))}};var n=c.o.Capabilities.getPojoUpdates(),a=t.pojoSDUI=O.e.Capabilities.getPojoUpdates(),d=u.s.Capabilities.getPojoUpdates(),m=t.changePosition=d.setPosition,v=t.updateSDUIState=a.setSDUIState,y=t.sduiSelect=O.e.Capabilities.getSelect(v),g=function(t){return function(e){return(0,o.zG)(t,s.Gg((function(t){return e.id===t.id})))?e:m(u.s.PositionState.invalidateHeight(e.positionState))(e)}},k=function(t,e){return(0,o.ls)(y(t,e),w.transitionTo({type:"focused",clockwise:!1}),g(t))},A=(t.select={selectByAlert:function(t,e,n){return k(t,n)},select:k,unselect:function(t){return(0,o.ls)(w.transitionTo({type:"rendered",clockwise:!1}),g(t))}},t.hasAlerts={hasActiveAlert:function(t){return(0,o.zG)(t,s.DT((0,l.ff)(e.isBulkDismissSDUI)),s.tS((function(t){return s.ij(t.alerts[t.activeAlertIndex])})),s.UI((function(e){return{alert:e,highlightIndex:j(t)?t.activeHighlightIndex:0}})))},hasAlert:function(t){return function(e){return void 0!==e.alerts.find((function(e){return e.id===t}))}},isSelectableByAlert:function(t){return function(e){return 1===e.alerts.length&&e.alerts[0].id===t.alert.id}}},O.e.Capabilities.getCompleteTransition(v)),w=t.animatable={completeTransition:function(t){return function(e){return(0,o.zG)(e,n.setVisualState(c.o.VisualState.complete(e.visualState,t)),A)}},transitionTo:function(t){return function(e){var r=c.o.VisualState.to(e.visualState,t);return n.setVisualState(r)(e)}},changeVisualState:n.setVisualState},C=t.remove={remove:function(t,e){return function(n){return t(n)?w.transitionTo({type:"removed",clockwise:e(n)})(n):n}}};t.removeAlert={removeAlertFromItem:function(t){return function(e){var n=new Set(t.map((function(t){return t.id}))),r=e.alerts.filter((function(t){return!n.has(t.id)}));return(0,o.zG)(E(P({},e),{alerts:r}),(function(t){return 0===t.alerts.length?w.transitionTo({type:"removed",clockwise:!1})(t):t}))}}},t.updateWithAlert={updateWithAlerts:function(t){return function(e){var n=new Set(e.alerts.map((function(t){return t.id}))),r=new Set(t.map((function(t){return t.id}))),i=(0,o.zG)(t,f.uK((function(t){return n.has(t.id)}))),a=i.left,u=i.right,c=function(t,e){switch(t.state.type){case h.bZ.State.Type.REGISTERED:return e;case h.bZ.State.Type.REMOVED:return"focused"===e.visualState.transition.type&&0===e.alerts.length?C.remove(o.W8,o.W8)(e):e;case h.bZ.State.Type.APPLIED:case h.bZ.State.Type.BEING_APPLIED:return C.remove(o.W8,o.W8)(e);default:return(0,p.vE)(t.state)}},s=e,l=!0,d=!1,m=void 0;try{for(var v,y=u[Symbol.iterator]();!(l=(v=y.next()).done);l=!0){s=c(v.value,s)}}catch(t){d=!0,m=t}finally{try{l||null==y.return||y.return()}finally{if(d)throw m}}return E(P({},s),{alerts:s.alerts.filter((function(t){return r.has(t.id)})).concat(a.map(S.$.fromModel))})}}},t.disposable={isScheduledToDispose:function(t){return"removed"===t.visualState.transition.type}};function j(t){return"activeAlert"in t&&"activeHighlightIndex"in t}function T(t){return(0,o.zG)(r.hasAlerts.hasActiveAlert(t),s.UI((function(e){return E(P({},t),{activeAlert:e.alert,activeHighlightIndex:e.highlightIndex,meta:U.n.empty(void 0)})})))}t.isAlertItem=j,t.toAlertItem=T}(r=t.Capabilities||(t.Capabilities={})),function(t){var e=function(t,e,n){return function(i){var o=r.createItem(t,e,n.map(S.$.fromModel)),a=i.items.add(o),u=A.In.getActiveItemIndex(a)(i);return E(P({},i),{items:a,cardIndex:u})}};t.createSDUIFeedSideEffect=function(t,u,c,l){return{id:"sduiFeedEffect",when:g.R.isWithAlertsId,what:A.nL.Effect.ItemsApplicator.create(u.pipe(a.U((function(a){var u=a.cards,d=a.feedOrd,f=a.itemIdToSelect;return function(a){var p=(0,o.zG)(u,v.v.filter((function(t){return a.currentLens.items.has(n(t))}),o.W8,o.W8),v.v.reduce(a.currentLens,(function(e,r){return function(t,e){return function(n){var r=n.items.keys().indexOf(t),i=n.items.remove(t),a=(0,o.zG)(n.cardIndex,s.UI((function(t){return t>r?t-1:t})),s.tS(s.DT((function(t){return s.pC(i.getAt(t))}))),s.g_((function(){return(0,o.zG)(e.findNextAlert(n),s.UI((function(t){return e.selectItemByAlert(t)(n)})),s.tS(s.DT((function(t){return(0,o.zG)(t.cardIndex,s.g_((function(){return!0}),(function(t){return s.pC(i.getAt(t))})))}))),s.fS((function(){return E(P({},n),{cardIndex:s.YP})})))}),(function(t){return E(P({},n),{cardIndex:s.G(t)})})));return E(P({},a),{items:i})}}(n(r),t)(e)}),(function(t,a,u){return(0,o.zG)(u.alertIds,i.fw(s.Kw)((function(t){return(0,o.zG)(l.getById("".concat(t)))})),s.g_((function(){return t}),(function(i){return function(t,n,i){return function(a){var u=(0,o.zG)(a.items.update(t,(0,o.ls)(r.updateWithAlert.updateWithAlerts(i),r.pojoSDUI.setDSL(s.G(n)))),m.getOrElse((function(){return e(t,n,i)(a).items})));return E(P({},a),{items:u})}}(n(u),u.content,i)(t)})))}),(function(t,r){return(0,o.zG)(r.alertIds,i.fw(s.Kw)((function(t){return(0,o.zG)(l.getById("".concat(t)))})),s.g_((function(){return t}),(function(i){return e(n(r),r.content,i)(t)})))}))),y=c(d),S=p.items.reduce((function(t,e){return t.add(e)}),w.aW.empty((function(t){return t.id}),y.compare)),h=E(P({},p),{items:S,itemsOrd:y}),g=(0,o.zG)(f,s.tS((function(t){var e=S.find((function(e){return e.id===t}));return s.pC(e)?s.G(t):(0,o.zG)(S.getAt(0),s.UI((function(t){return t.id})))})),s.g_((function(){return h}),(function(e){return t.selectItemById(e)(h)})));return a.patch({currentLens:g,switchOrder:"lensOrder"})}}))))}}}(t.SideEffects||(t.SideEffects={}))}(r||(r={}))},40967:(t,e,n)=>{n.d(e,{e:()=>o});var r,i,o,a=n(86399),u=n(90023),c=n(34349),s=n(36661),l=n(21147),d=n(58303),f=n(14944),p=n(12674),m=n(37315),v=n(66571);function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){y(t,e,n[e])}))}return t}function h(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}!function(t){t.getSduiSingleCardTransitions=function(t,e,n){var r=(0,u.zG)(t,d.g_((function(){return-1}),(function(t){return n.compare(t,e)})));switch(r){case-1:return[i.Actions.slideContentLeft,i.Actions.slideTitleLeft];case 1:case 0:return[i.Actions.slideContentRight,i.Actions.slideTitleRight];default:(0,v.vE)(r)}}}(r||(r={})),function(t){!function(t){t.slideContentLeft={type:"transition",fromName:"content",toName:"content",animateFrom:m.c1.SlideLeft,animateTo:m.c1.SlideLeft},t.slideTitleLeft={type:"transition",fromName:"title",toName:"title",animateFrom:m.c1.SlideLeft,animateTo:m.c1.SlideLeft},t.slideContentRight={type:"transition",fromName:"content",toName:"content",animateFrom:m.c1.SlideRight,animateTo:m.c1.SlideRight},t.slideTitleRight={type:"transition",fromName:"title",toName:"title",animateFrom:m.c1.SlideRight,animateTo:m.c1.SlideRight}}(t.Actions||(t.Actions={}))}(i||(i={})),function(t){var e=function(t){return"cardDSL"in t&&"prevCardDSL"in t&&"transitions"in t};t.isSDUIItem=e;var n=s.n(c.z2)(p.VY),i=s.n(c.z2)(p.aU);t.eq=l.f7((function(t,r){return e(t)&&e(r)&&d.Eh(n).equals(t.cardDSL,r.cardDSL)&&d.Eh(n).equals(t.prevCardDSL,r.prevCardDSL)&&a.Eh(i).equals(t.transitions,r.transitions)})),t.getOrd=(0,u.ls)(d.pR,f.Uz((function(t){return t.cardDSL})));!function(t){t.getPojoUpdates=function(){return{setSDUIState:function(t,e,n){return function(r){return h(S({},r),{cardDSL:t,prevCardDSL:e,transitions:n})}},setDSL:function(t){return function(e){return h(S({},e),{cardDSL:t,transitions:[]})}}}},t.getSelect=function(t){return function(n,i){return function(o){return(0,u.zG)(n,d.hX(e),d.hX((function(t){return d.pC(o.cardDSL)||d.pC(t.cardDSL)})),d.UI((function(e){return t(o.cardDSL,e.cardDSL,r.getSduiSingleCardTransitions(d.G(e),o,i))(o)})),d.fS((function(){return o})))}}},t.getCompleteTransition=function(t){return function(n){return e(n)?t(n.cardDSL,d.YP,[])(n):n}}}(t.Capabilities||(t.Capabilities={}))}(o||(o={}))}}]);