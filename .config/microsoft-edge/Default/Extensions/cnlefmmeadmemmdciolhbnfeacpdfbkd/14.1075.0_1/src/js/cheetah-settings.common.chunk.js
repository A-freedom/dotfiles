(self.webpackChunk=self.webpackChunk||[]).push([[6077],{39621:(e,t,a)=>{a.d(t,{L_:()=>p,RZ:()=>b,zx:()=>g});var n=a(46504),l=a(38569),i=a(49231),s=a(43818),o=a(99627),r=a(5391),c=a(19275),d=a(60185),m=a(80536),u=a(70368);function g(e){return i.createElement(m.Y,p(e,u.LI))}function p(e,t){var a=(0,o.Sh)(e.className,t).className;return(0,l._)((0,n._)({},e),{className:a})}!function(e){var t=e.Animated=function(e){return i.createElement(m.Y,(0,l._)((0,n._)({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:c.m.FromClickPoint}))};e.Primary=function(e){return i.createElement(t,(0,n._)({styleType:d.Z.Type.Button},p(e,u.T$)))},e.Secondary=function(e){return i.createElement(t,(0,n._)({styleType:d.Z.Type.Button},p(e,u.BD)))},e.Ghost=function(e){return i.createElement(t,(0,n._)({styleType:d.Z.Type.Button},p(e,u.fk)))},e.Tertiary=function(e){return i.createElement(t,(0,n._)({styleType:d.Z.Type.Base},p(e,u.UF)))},e.Flat=function(e){return i.createElement(t,p(e,u.$H))},e.White=function(e){return i.createElement(t,p(e,u.ix))},e.SidebarFlat=function(e){return i.createElement(m.Y,(0,n._)({styleType:d.Z.Type.H3Legacy},p(e,u.HN)))},e.Caps=function(e){return i.createElement(m.Y,(0,n._)({styleType:d.Z.Type.H3Legacy},p(e,u.Mp)))},e.Group=function(e){var t=e.children,a=e.className,r=e.align,c=void 0===r?"horizontal":r,d=e.sticky,m=e.name;return i.createElement(s.F.div,(0,l._)((0,n._)({role:"group"},(0,o.Sh)(a,"horizontal"===c?!0===d?u.vD:u.ru:u.oc)),{"data-name":m}),t)}}(g||(g={}));var b=function(e){var t=e.title,a=e.titleAlign,n=e.buttonClass,l=e.iconClass,c=e.iconWidth,d=e.tooltipClass;return i.createElement(g,{name:"info-button","aria-label":t,tag:m.X.div,title:i.createElement(s.F.div,(0,o.Sh)(u.bC,d),i.createElement("p",null,t)),titleAlign:a,className:n},i.createElement(r.JO.Info,{width:c,className:l}))}},2145:(e,t,a)=>{a.r(t),a.d(t,{SettingsView:()=>k});var n=a(49231),l=a(39144),i=a(43818),s=a(24568),o=a(66885),r=a(21194),c=a(57001),d=a(53314),m=a(54143),u=a(64550),g=a(78166);const p=e=>(0,u.Lt)(e)||(0,g.c)(e)||(e=>e.isGateEnabled(r.K.KnowledgeHubSlack)||e.isGateEnabled(r.K.KnowledgeHubWord))(e);var b=a(995),h=a(66856),E=a(61513),v=a(99106);const k=({assistantSettingsViewModel:e,experimentClient:t,openSubscriptionDialog:a,getEnv:u})=>{const{domain:g,actions:k,state:y}=e,[w,f]=n.useState(!!y.view("page","enabled").get()),C={checked:w,update:f},S=n.useMemo((()=>new E.C((0,l.nD)(u()))),[]);return n.createElement(h.a.Context.Provider,{value:S},n.createElement(i.F.div,{role:"region","aria-label":"Grammarly settings"},y.view((({user:e,page:a,dynamicConfig:l,dapi:i})=>n.createElement(s.a,{actions:k,config:{enabled:!0,domain:g},settings:a,user:e,dapi:i,dynamicConfig:l,siteCategory:m.y.other,isReportBugFeatureAllowed:!t.isGateEnabled(r.K.HideReportBugByGrammarlyEmployeeFeature),openReportBugForm:e=>{self.open(d.WY(e))},openDebugPage:()=>{self.open(chrome.runtime.getURL("src/debug.html"))},openUrl:e=>self.open(e),placement:"assistant",showCitationBuilderToggle:!1,siteSwitcherChecked:C,isIndianEnglishDialectSupported:t.isGateEnabled(r.K.IndianEnglishDialect)||t.isGateEnabled(r.K.IndianEnglishDialectInternal),isAutoApplySupported:t.isGateEnabled(r.K.SuggestionDeliveryAutoApply),downloadDebugReports:()=>c.B.download(),isKeyboardAccessible:t.isGateEnabled(r.K.ExtensionA11yKeyboardNavigation),isCheetahSupported:!0,showSerengetiFeatureToggle:t.isGateEnabled(r.K.KnowledgeEngineSearchV2Alpha),isKnowledgeHubSupported:p(t),isPiiDetectionSupported:(0,b.z)(t,e)}))),y.view((({user:e})=>n.createElement(o.Z,{user:e,openSubscriptionDialog:a,isAssistant:!0,isGrammarlyPro:(0,v.y)(t)})))))}},48240:(e,t,a)=>{if(a.d(t,{FU:()=>p,OY:()=>S,Td:()=>g,UI:()=>h,XG:()=>C,ab:()=>k,eC:()=>m,ex:()=>w,fo:()=>v,gO:()=>r,r4:()=>E,xq:()=>u}),1388==a.j)var n=a(90023);var l=a(90655),i=a(95907);if(1388==a.j)var s=a(58303);if(1388==a.j)var o=a(39892);function r(e,t){var a,n,l;const i=null===(l=null===(n=null===(a=null==t?void 0:t.citationBuilder)||void 0===a?void 0:a.domains)||void 0===n?void 0:n[e])||void 0===l?void 0:l.disabled;return void 0!==i?!i:void 0}function c(e,t){return k(t).some((t=>new RegExp(t.domain).test(e)))}function d(e){var t,a;return!(null!==(a=null===(t=e.citationBuilder)||void 0===t?void 0:t.disabled)&&void 0!==a&&a)}function m(e,t){return k(t).some((t=>{const a=new RegExp(t.domain),n=new RegExp(t.pathname);return a.test(e.hostname)&&n.test(e.pathname)}))}function u(e){return s.Y3((()=>{const t=new URL(e).hostname.split(".");return t.slice(t.length-2).join(".")}))}function g(e,t,a,n){return a?function(e,t,a){const n=r(e,a);return d(t)&&(void 0===n&&c(e,t)||!0===n)}(e,t,n):function(e,t,a){return d(t)&&c(e,t)&&!1!==r(e,a)}(e,t,n)}function p(e,t){return k(t).some((t=>new RegExp(t.domain).test(e)&&!0===t.reparse))}const b={verticalLocation:"bottom",horizontalLocation:"left",offsetX:17,offsetY:32};function h(e,t){var a;return(null===(a=k(t).find((t=>new RegExp(t.domain).test(e))))||void 0===a?void 0:a.buttonPosition)||b}function E(e,t,a){return d(t)&&(a?!function(e,t){var a,n;return(null!==(n=null===(a=t.citationBuilder)||void 0===a?void 0:a.blockedDomains)&&void 0!==n?n:[]).includes(e)}(e,t):c(e,t))}function v(e,t){var a,n,l;const i=new Set(null!==(n=null===(a=e.citationBuilder)||void 0===a?void 0:a.blockedDomains)&&void 0!==n?n:[]);return Object.entries((null===(l=t.citationBuilder)||void 0===l?void 0:l.domains)||{}).filter((([,e])=>void 0!==e&&!e.disabled)).filter((([e])=>{return t=e,!i.has(t);var t})).map((([e])=>e))}function k(e){var t,a;return null!==(a=null===(t=e.citationBuilder)||void 0===t?void 0:t.sources)&&void 0!==a?a:[]}const y=(0,i.hz)((()=>{const e=document.location.href;return(0,l.KK)(e)})),w=(0,i.hz)((e=>{const t=document.location.href;return{url:t,domain:(0,l.KK)(t),isUrlAllowlisted:m(document.location,e)}})),f=(0,i.hz)((()=>i.iy.create()));function C(e){const t=f(),a=y();return(0,n.zG)(e,o.H6("citeCopyButtonClick","citeCopyIntextClick","citePopupButtonDisable","citePopupButtonShow","citePopupEditClick","citePopupButtonClick","citePopupEditSuccess","citePopupMissingInfoShow","citePopupMissingInfoFormShow","feedbackSentButtonClick","citePopupAddMissingClick"),(e=>({...e,domain:a,sessionId:t})))}function S(e,t){return e.manualInvocation&&!0===r(t.domain,t)}},49935:(e,t,a)=>{a.d(t,{V:()=>i});var n=a(21194),l=a(43801);function i(e){return e.isGateEnabled(n.K.GOSRollout)||"test"===e.getTreatment(l.p.GOSRollout)}},99106:(e,t,a)=>{a.d(t,{y:()=>l});var n=a(43801);const l=e=>"test"===e.getTreatment(n.p.GrammarlyPro)},78166:(e,t,a)=>{a.d(t,{c:()=>l});var n=a(21194);const l=e=>e.isGateEnabled(n.K.KnowledgeHubGmail)},33297:(e,t,a)=>{a.d(t,{v:()=>s});var n=a(90023),l=a(49231),i=a(45085);const s=({browser:e,className:t,title:a="BETA",color:s="blue"})=>"safari"!==e?l.createElement(i.C,{title:a,className:t,kind:"blue"===s?"primary":"green"===s?"success":(0,n.Rz)(s)}):null},25977:(e,t,a)=>{a.d(t,{d:()=>l});var n=a(49231);const l=()=>n.createElement("svg",{width:"11",height:"12",viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M4 1H2.5C1.39543 1 0.5 1.89543 0.5 3V9C0.5 10.1046 1.39543 11 2.5 11H8.5C9.60457 11 10.5 10.1046 10.5 9V7.5M5.5 6L10.5 1M10.5 1H6.5M10.5 1V5",stroke:"#4A6EE0",strokeLinecap:"round"}))},89949:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(49231),l=a(42713),i=a(22223),s=a(5193),o=a(99627),r=a(51074),c=a.n(r);const d=({onClick:e,dataGrammarlyPart:t="unlock-premium-button",className:a,isGrammarlyPro:r})=>n.createElement(l.z,{kind:"premium",onClick:e,dataGrammarlyPart:t,...(0,o.Sh)(c().premiumButton,a)},n.createElement(i.J,{icon:s.O,variant:"premium",accessibilityLabel:"",size:"large"}),n.createElement("span",null,r?"Get Pro":"Unlock Premium"))},5137:(e,t,a)=>{a.d(t,{R:()=>d});var n=a(49231),l=a(55746),i=a(39621),s=a(75623),o=a(23882),r=a(43902),c=a(66939);const d=({lock:e={message:"",isLocked:!1},dialect:t})=>n.createElement("div",{className:c.label},e.isLocked&&n.createElement(s.u,{message:e.message},n.createElement("div",{className:c.lockIconWrapper},n.createElement(l.N,null))),n.createElement(i.zx.White,{name:"dialect.box",style:{padding:"0"},disabled:e.isLocked},n.createElement("div",{className:`${c.selected} ${e.isLocked?c.disabled:""}`},n.createElement(r.G,{dialect:t,className:c.option}),n.createElement(o.pL,null))))},43902:(e,t,a)=>{a.d(t,{G:()=>r});var n=a(49231),l=a(23882),i=a(86708),s=a(83146);const o={american:n.createElement(l.UE,null),australian:n.createElement(l.aE,null),british:n.createElement(l.M8,null),canadian:n.createElement(l._P,null),indian:n.createElement(l.kj,null)},r=({dialect:e,className:t})=>n.createElement(n.Fragment,null,o[e],n.createElement("span",{"data-test-attr":`dialect_${e}`,className:`${i.option} ${null!=t?t:""}`},s.kC(e)+" English"))},14558:(e,t,a)=>{a.d(t,{X:()=>c});var n=a(49231),l=a(39621),i=a(15587),s=a(5137),o=a(25250),r=a(43902);class c extends n.Component{render(){var e;const t=this.props.dropdownOnTop?{customPosition:{top:`-${32*(this.props.dialects.length-1)+4}px`,left:"0"},vAlign:"top"}:{customPosition:{top:"36px",left:"0"}};return(null===(e=this.props.lock)||void 0===e?void 0:e.isLocked)?n.createElement(s.R,{lock:this.props.lock,dialect:this.props.dialect}):n.createElement(i.L,{...t,showDelay:0,closeDelay:150,appearanceBehavior:"mouseClick",name:"dialect",label:n.createElement(s.R,{dialect:this.props.dialect})},this.props.dialects.filter((e=>e!==this.props.dialect)).map((e=>n.createElement(l.zx.Flat,{name:e,key:e,onClick:t=>(null==t?void 0:t.isTrusted)&&this.props.onSetDialect(e)},n.createElement("div",{className:o.option},n.createElement(r.G,{className:o.label,dialect:e}))))))}}},23882:(e,t,a)=>{a.d(t,{M8:()=>r,UE:()=>s,_P:()=>c,aE:()=>o,kj:()=>d,pL:()=>i});var n=a(49231),l=a(35628);const i=()=>n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M13.9207 15L15.5 17.2562L17.0793 15H13.9207Z",stroke:"#6D758D",strokeWidth:"2"})),s=()=>n.createElement("div",{className:l.american,role:"presentation"}),o=()=>n.createElement("div",{className:l.australian,role:"presentation"}),r=()=>n.createElement("div",{className:l.british,role:"presentation"}),c=()=>n.createElement("div",{className:l.canadian,role:"presentation"}),d=()=>n.createElement("div",{className:l.indian,role:"presentation"})},81270:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(49231),l=a(95907),i=a(75623),s=a(69705);const o=({children:e,blocked:t,wrapperClassName:a,disabledText:o="Sign in to use this feature"})=>t?n.createElement(i.u,{message:o,position:"top"},n.createElement("div",{className:a},n.createElement("div",{className:s.hover_blocker,onClick:l.EI,onDoubleClick:l.EI},e))):n.createElement(n.Fragment,null,e)},46012:(e,t,a)=>{a.d(t,{C:()=>c});var n=a(49231),l=a(95907),i=a(85732),s=a(81270),o=a(48521),r=a(99627);class c extends n.Component{constructor(){super(...arguments),this.handleChange=e=>{(this.props.skipTrustedCheck||e.isTrusted)&&this.props.onChange(e)}}render(){return n.createElement("div",{...(0,r.Sh)(this.props.extraClassName,i.setting_item,this.props.disabled&&i.disabled)},n.createElement("label",{...(0,r.Sh)(i.select_checkbox,this.props.centered&&i.centered,this.props.isKeyboardAccessible&&i.keyboard_accessible),"data-grammarly-part":this.props.dataGrammarlyPart},n.createElement("div",{className:i.select_children},this.props.children,this.props.beta&&n.createElement("span",{className:(0,o.G6)()?i.new:i.beta}),this.props.alpha&&n.createElement("span",{className:(0,o.G6)()?i.new:i.alpha}),this.props.new&&n.createElement("span",{className:i.new})),n.createElement(s.w,{wrapperClassName:i.checkbox_control_wrapper,blocked:this.props.disabled,disabledText:this.props.disabledText}),n.createElement("input",{className:i.checkbox,onChange:this.props.disabled?l.EI:this.handleChange,checked:this.props.checked,type:"checkbox"}),n.createElement("div",{...(0,r.Sh)(i.checkbox_check,this.props.grayOut&&i.grayOut,this.props.checked?i.on:i.off)},n.createElement("div",{...(0,r.Sh)(i.on_off)},this.props.checked?"ON":"OFF"),n.createElement("div",{className:i.checkbox_check_round}))))}}},58e3:(e,t,a)=>{a.d(t,{W:()=>r});var n=a(80510),l=a(49231),i=a(54608),s=a(46012),o=a(94973);class r extends l.Component{constructor(){super(...arguments),this.onEnableDefsClick=e=>{const{toggleDefs:t}=this.props,a=e.target.checked;t(a),o.J.definitionToggleClick(a?"on":"off"),(0,n.Tb)().toggleExtensionDefs(a)}}render(){const{enabledDefs:e,disabled:t}=this.props;return l.createElement(s.C,{onChange:this.onEnableDefsClick,checked:e,extraClassName:i.def_switcher,dataGrammarlyPart:"definitionAndSynonymsSwitcher",disabled:t,skipTrustedCheck:this.props.skipTrustedCheck},"Show definitions and synonyms ",l.createElement("br",null),"via double clicks (all sites)")}}},2862:(e,t,a)=>{a.d(t,{m:()=>c});var n=a(49231),l=a(22988),i=a(14558),s=a(81270),o=a(99627),r=a(94973);class c extends n.Component{constructor(){super(...arguments),this.setDialect=e=>{const{changeStrongDialect:t,dialectWeak:a}=this.props;t(e);const n=e+"English";r.J.languageSettingUpdate(n,"user",a&&e===a)}}render(){const e=this.props.dialectStrong||this.props.dialectWeak||"american";return n.createElement("div",{...(0,o.Sh)(l.line,this.props.disabled&&l.disabled)},n.createElement("div",null,"I write in"),n.createElement(s.w,{blocked:this.props.disabled},n.createElement("div",{className:l.dialectPicker},n.createElement(i.X,{dialect:e,dialects:this.props.dialects,onSetDialect:this.setDialect,dropdownOnTop:!!this.props.dropdownOnTop,lock:this.props.lock}))))}}},24568:(e,t,a)=>{a.d(t,{a:()=>I});var n=a(43370),l=a(48240),i=a(59649),s=a(73397),o=a(49231),r=a(54608),c=a(10390),d=a(42713),m=a(33297),u=a(25977),g=a(46012),p=a(48521),b=a(80510),h=a(21595),E=a(19282),v=a(53314),k=a(53516),y=a(94973),w=a(58e3),f=a(2862),C=a(54073),S=a(45425),A=a(49935),N=a(21194);const x=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},e.isAutoApplySupported?"Correct text automatically":"Correct spelling automatically"),T=e=>o.createElement(g.C,{checked:!e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible,onChange:t=>{e.toggle(!t.target.checked)},dataGrammarlyPart:"disableDesktopIntegrationToggle"},o.createElement("div",{className:r.llamaTitle},"Check text with browser extension"),e.enabled&&o.createElement("div",{className:r.llamaDescription},"Grammarly's browser extension was deactivated since you're using Grammarly's desktop application.")),D=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},beta:!0,checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show phrasal predictions"),K=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,dataGrammarlyPart:"settings-toggle-show-emoji-for-detected-tones",isKeyboardAccessible:e.isKeyboardAccessible},"Show emoji for detected tones"),_=e=>o.createElement("div",{className:r.cheetahLabelAndButton},o.createElement("div",null,o.createElement("div",{className:r.cheetahLabel},o.createElement("b",null,"Generative AI")),o.createElement("div",{className:r.llamaDescription},"Brainstorm, write, and rewrite with Grammarly’s generative AI assistance.")),o.createElement(d.z,{className:r.cheetahManageButton,kind:"transparent",dataGrammarlyPart:"cheetahManageBtn",onClick:()=>{e.manageButtonClick()}},o.createElement("span",null,"Manage"))),B=e=>o.createElement(g.C,{disabled:e.disabled,grayOut:e.disabled,disabledText:"",onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},e.label),G=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,dataGrammarlyPart:"settings-toggle-include-serengeti-context",isKeyboardAccessible:e.isKeyboardAccessible},"Use organizational context"," ",o.createElement("span",{className:r.nobr},o.createElement(m.v,{browser:(0,p.qs)(),color:"green",title:"internal"}))),P=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show Knowledge Share"),L=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},beta:!0,checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show Grammarly Guard"),H=e=>o.createElement(g.C,{onChange:t=>{e.toggle(t.target.checked)},checked:e.enabled,extraClassName:r.def_switcher,isKeyboardAccessible:e.isKeyboardAccessible},"Show “Get citation” button on ",o.createElement("br",null),e.domain),R=({showReportBugButton:e,...t})=>{var a,n;return o.createElement("div",{"data-grammarly-part":"debugMenu"},o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.debugMenu},o.createElement("div",{className:S.heading},o.createElement("div",null,"Debug Menu"),t.showHideButton&&o.createElement(d.z,{dataGrammarlyPart:"debugMenuHideBtn",kind:"transparent",onClick:()=>{(0,k.E)().bgRpc.api.toggleDebugMenu(!1)}},o.createElement("span",null,"Hide"))),o.createElement(g.C,{onChange:e=>{e.target.checked?(0,k.E)().bgRpc.api.enableHistoryLoggerUntil(-1):(0,k.E)().bgRpc.api.disableHistoryLogger()},dataGrammarlyPart:"debugMenuLoggingToggle",checked:t.isEnabled,extraClassName:r.def_switcher,isKeyboardAccessible:t.isKeyboardAccessible},"Logging"),o.createElement("div",{className:S.separator}),o.createElement(g.C,{onChange:e=>{e.target.checked?(0,k.E)().bgRpc.api.enableAdvancedHistoryLoggerUntil(Date.now()+36e5):(0,k.E)().bgRpc.api.disableAdvancedHistoryLogger()},dataGrammarlyPart:"debugMenuAdvanceLoggingToggle",checked:t.isAdvancedEnabled,extraClassName:r.def_switcher,disabled:!t.isEnabled,disabledText:"Enable logging first",isKeyboardAccessible:t.isKeyboardAccessible},"Advanced Logging"," ",t.isAdvancedEnabled&&t.advancedHistoryLoggerEnabledUntil&&o.createElement("span",{className:S.timer},Math.ceil((t.advancedHistoryLoggerEnabledUntil-Date.now())/6e4)," mins left")),o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.heading},o.createElement(d.z,{className:S.downloadBtn,kind:"transparent",disabled:!t.isEnabled,onClick:t.downloadDebugReports,dataGrammarlyPart:"debugMenuDownloadLogBtn"},o.createElement("span",null,"Download Logs")),!0===e.enabled&&o.createElement(d.z,{className:S.downloadBtn,kind:"transparent",dataGrammarlyPart:"debugMenuReportBugBtn",onClick:()=>{e.onClick()}},o.createElement("span",null,"Report a bug ",o.createElement(u.d,null)))),t.showDebugPage&&o.createElement(o.Fragment,null,o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.heading},o.createElement(d.z,{className:S.downloadBtn,kind:"transparent",dataGrammarlyPart:"debugMenuDebugPageBtn",onClick:t.openDebugPage},o.createElement("span",null,"View debug page ",o.createElement(u.d,null))))),null!=t.gOSDebugSettings?o.createElement(o.Fragment,null,o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.gOSMenu},o.createElement("div",{className:S.heading},"gOS Developer Settings"),o.createElement(g.C,{onChange:e=>{var a;null===(a=t.gOSDebugSettings)||void 0===a||a.toggleDebugger(e.target.checked)},dataGrammarlyPart:"gOSDebuggerToggle",checked:t.gOSDebugSettings.debuggerEnabled,extraClassName:r.def_switcher,isKeyboardAccessible:t.isKeyboardAccessible},"Debugger"),o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.menuItem},o.createElement("label",{htmlFor:"gos-applet-channel"},"Applet Channel"),o.createElement("select",{id:"gos-applet-channel",value:null!==(a=t.gOSDebugSettings.appletChannel)&&void 0!==a?a:"stable",onChange:e=>{var a;null===(a=t.gOSDebugSettings)||void 0===a||a.setAppletChannel(e.target.value)}},o.createElement("option",{value:"dev"},"dev"),o.createElement("option",{value:"preview"},"preview"),o.createElement("option",{value:"stable"},"stable"),o.createElement("option",{value:"qa"},"qa"))),o.createElement("div",{className:S.separator}),o.createElement("div",{className:S.menuItem},o.createElement("label",{htmlFor:"gos-assistant-applet-url"},"Assistant URL"),o.createElement("input",{id:"gos-assistant-applet-url",type:"url",placeholder:"e.g. http://localhost:3000/",value:null!==(n=t.gOSDebugSettings.assistantAppletUrl)&&void 0!==n?n:"",onChange:e=>{var a;null===(a=t.gOSDebugSettings)||void 0===a||a.setAssistantAppletUrl(e.target.value)}})))):null))},I=e=>{var t,a,r,m,g,I,F,M,O,U,J,z,V,W,Z,j,q,Y,Q,X,$,ee,te,ae;const{actions:ne,activeTab:le,config:ie,settings:se,dapi:oe,user:re,siteCategory:ce,placement:de,dynamicConfig:me,enableRenderingHack:ue=!1,showCitationBuilderToggle:ge=!0,citationBuilderSessionId:pe,isCitationBuilderManualInvocationEnabled:be=!1,isKnowledgeHubSupported:he=!1,isPiiDetectionSupported:Ee=!1,isIndianEnglishDialectSupported:ve=!1,isCheetahSupported:ke=!1,showSerengetiFeatureToggle:ye=!1,isReportBugFeatureAllowed:we,isAutoApplySupported:fe=!1,className:Ce,downloadDebugReports:Se}=e;ue&&o.useEffect((()=>{(0,p.CB)()&&(self.screenLeft<0||self.screenTop<0||self.screenLeft>self.screen.width||self.screenTop>self.screen.height)&&chrome.runtime.getPlatformInfo((e=>{if("mac"===e.os){const e=new CSSStyleSheet;e.insertRule("\n            @keyframes redraw {\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: .99;\n              }\n            }\n          "),e.insertRule("\n            html {\n              animation: redraw 1s linear infinite;\n            }\n          "),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}))}),[]);const{anonymous:Ae}=re,Ne=h.n.isGrammarlyEmployee(re)&&we,xe=(0,k.E)().experimentClient.isGateEnabled(N.K.DebugPage)&&(0,p.i7)()&&h.n.isGrammarlyEmployee(re),Te=h.n.isGrammarlyEmployee(re)&&(0,A.V)((0,k.E)().experimentClient),{dialectSettings:De}=se,Ke=(null==De?void 0:De.dialect)||oe.dialectStrong,_e=["british","american","australian","canadian",...ve?["indian"]:[]],Be=e.siteSwitcherChecked||{checked:!!se.enabled,update:t=>{const{siteCategory:a}=e;ne.toggleSite(t,ie.domain),y.J.checkingToggleClick("toolbar",a,t?"on":"off"),(0,b.Tb)().toggleExtension(t,"toolbar",(0,E.FN)(ie.domain))}},Ge=o.useCallback((e=>{const t=le&&new URL(le.url).pathname;ne.toggleCitationBuilderForDomain({domain:ie.domain,enabled:e,pathName:t,inAllowList:le&&(0,l.eC)(new URL(le.url),me)}),e||y.J.citePopupButtonDisable(ie.domain,"permanent",pe||"","toolbar",be&&!0===(0,l.gO)(ie.domain,se))}),[null==le?void 0:le.url,ie.domain,pe]);return o.createElement("div",{className:(0,s.cs)(S.settingsContent,Ce),"data-grammarly-part":"settings"},o.createElement("div",{className:S.heading},o.createElement("div",null,"Quick Settings"),o.createElement(d.z,{kind:"link",onClick:()=>{e.openUrl((0,p.Um)().allSettings),y.J.allSettingsButtonClick(de)}},o.createElement("div",{className:S.allSettings},o.createElement("span",null,"All Settings"),o.createElement(u.d,null)))),c.q.showSettingPopupToggle(oe,se,me,null==le?void 0:le.url)&&o.createElement(o.Fragment,null,o.createElement(T,{toggle:e=>{ne.setDesktopIntegration(e),y.J.desktopIntegrationToggleClick(e?"on":"off")},enabled:se.isDesktopIntegrationEnabled,isKeyboardAccessible:e.isKeyboardAccessible}),o.createElement("div",{className:S.separator})),o.createElement(C.w,{domain:ie.domain,enabledInConfig:null!==(t=ie.enabled)&&void 0!==t&&t,siteSwitcherChecked:Be,favicon:null==le?void 0:le.favIconUrl,siteCategory:ce}),o.createElement("div",{className:S.separator}),ke&&o.createElement(o.Fragment,null,o.createElement(_,{manageButtonClick:()=>e.openUrl((0,p.Um)().featuresSettings)}),o.createElement(B,{label:o.createElement(o.Fragment,null,"Show on text selection"),enabled:!1!==(null===(r=null===(a=se.cheetah)||void 0===a?void 0:a.status)||void 0===r?void 0:r.cheetahEnabled)&&!1!==(null===(I=null===(g=null===(m=se.cheetah)||void 0===m?void 0:m.status)||void 0===g?void 0:g.entryPointsConfig)||void 0===I?void 0:I.inlineRewriteEnabled),disabled:!1===(null===(M=null===(F=se.cheetah)||void 0===F?void 0:F.status)||void 0===M?void 0:M.cheetahEnabled),toggle:e=>ne.cheetahToggleInlineRewrite(e),isKeyboardAccessible:e.isKeyboardAccessible}),o.createElement(B,{label:o.createElement(o.Fragment,null,"Show for quick replies"),enabled:!1!==(null===(U=null===(O=se.cheetah)||void 0===O?void 0:O.status)||void 0===U?void 0:U.cheetahEnabled)&&!1!==(null===(V=null===(z=null===(J=se.cheetah)||void 0===J?void 0:J.status)||void 0===z?void 0:z.entryPointsConfig)||void 0===V?void 0:V.inlineQuickReplyEnabled),disabled:!1===(null===(Z=null===(W=se.cheetah)||void 0===W?void 0:W.status)||void 0===Z?void 0:Z.cheetahEnabled),toggle:e=>ne.cheetahToggleInlineQuickReply(e),isKeyboardAccessible:e.isKeyboardAccessible}),!ye&&o.createElement("div",{className:S.separator})),ye&&o.createElement(o.Fragment,null,o.createElement(G,{enabled:"disabled"!==oe.serengetiState,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ne.setSerengetiState(!0===e?"enabled":"disabled")}}),o.createElement("div",{className:S.separator})),ge&&(0,l.r4)(ie.domain,me,be)&&o.createElement(o.Fragment,null,o.createElement(H,{enabled:(0,l.Td)(ie.domain,me,be,se),domain:ie.domain,isKeyboardAccessible:e.isKeyboardAccessible,toggle:Ge}),o.createElement("div",{className:S.separator})),he&&o.createElement(o.Fragment,null,o.createElement(P,{enabled:null===(q=null===(j=se.knowledgeHubSettings)||void 0===j?void 0:j.enabled)||void 0===q||q,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ne.toggleKnowledgeHub(e),y.J.knowledgeHubFeatureToggleClick("popup",i.JJ.fromDomain(ie.domain),e?i.L5.on:i.L5.off),(0,b.Tb)().knowledgeHub.featureToggleClick(i.JJ.fromDomain(ie.domain),e?i.L5.on:i.L5.off)}}),o.createElement("div",{className:S.separator})),Ee&&o.createElement(o.Fragment,null,o.createElement(L,{enabled:null===(Q=null===(Y=se.piiDetectionSettings)||void 0===Y?void 0:Y.enabled)||void 0===Q||Q,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{y.J.grammarlyGuardFeatureToggleClick(e?"on":"off",ie.domain),ne.togglePiiDetection(e)}}),o.createElement("div",{className:S.separator})),o.createElement(w.W,{disabled:Ae,enabledDefs:se.enabledDefs,toggleDefs:ne.toggleDefs}),o.createElement("div",{className:S.separator}),o.createElement(x,{enabled:se.autocorrectEnabled||!1,isKeyboardAccessible:e.isKeyboardAccessible,isAutoApplySupported:fe,toggle:e=>{ne.toggleAutocorrect(e);const t=e?"on":"off";y.J.autocorrectToggleClick("popup",t),(0,b.Tb)().autoFix.featureToggleClick(t,"popup")}}),o.createElement("div",{className:S.separator}),o.createElement(D,{enabled:se.autocompleteEnabled||!1,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ne.toggleAutocomplete(e),y.J.autocompleteFeatureToggleClick("popup",e?"on":"off")}}),(!ke||!1===(null===($=null===(X=se.cheetah)||void 0===X?void 0:X.status)||void 0===$?void 0:$.cheetahEnabled))&&o.createElement(o.Fragment,null,o.createElement("div",{className:S.separator}),o.createElement(K,{enabled:"hide"!==oe.emogenieEmojiState,isKeyboardAccessible:e.isKeyboardAccessible,toggle:e=>{ne.setEmogenieEmojiState(!0===e?"show":"hide"),y.J.settingsShowEmojiForDetectedTonesToggleClick(ie.domain,!0===e?"on":"off")}})),o.createElement("div",{className:S.separator}),o.createElement(f.m,{dialects:_e,changeStrongDialect:ne.changeStrongDialect,dialectStrong:Ke,dialectWeak:oe.dialectWeak,dropdownOnTop:!0,disabled:Ae,lock:{isLocked:Boolean(null==De?void 0:De.dialectLockedByInstitution),message:"Locked by your organization"}}),(se.isDebugMenuVisible||Ne)&&o.createElement(R,{isAdvancedEnabled:se.advancedHistoryLoggerEnabled,isEnabled:se.historyLoggerEnabled,advancedHistoryLoggerEnabledUntil:se.advancedHistoryLoggerEnabledUntil,isKeyboardAccessible:e.isKeyboardAccessible,showDebugPage:xe,openDebugPage:e.openDebugPage,showReportBugButton:Ne?{enabled:!0,onClick:()=>{e.openReportBugForm(v.ZD({domain:ie.domain,userType:v.Ng(re),version:(0,p.bo)(),systemInfo:n.Rd().systemInfo}))}}:{enabled:!1},showHideButton:!Ne,downloadDebugReports:Se,gOSDebugSettings:Te?{debuggerEnabled:null!==(ee=se.gOSDebuggerEnabled)&&void 0!==ee&&ee,toggleDebugger:ne.toggleGOSDebugger,appletChannel:null!==(te=se.gOSAppletChannel)&&void 0!==te?te:null,setAppletChannel:ne.setGOSAppletChannel,assistantAppletUrl:null!==(ae=se.gOSAssistantAppletUrl)&&void 0!==ae?ae:null,setAssistantAppletUrl:ne.setGOSAssistantAppletUrl}:void 0}))}},54073:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(49231),l=a(54608),i=a(46012),s=a(99627);const o=e=>{const t="docs.google.com"===e.domain?"Google Docs":e.domain,{enabledInConfig:a,siteSwitcherChecked:o,favicon:r}=e,c=o.checked&&a,d=a?"Check for writing suggestions":"Checking is not supported";return n.createElement(i.C,{grayOut:!a,onChange:e=>o.update(e.target.checked),checked:c,extraClassName:l.site_switcher,dataGrammarlyPart:"siteSwitcher",skipTrustedCheck:e.skipTrustedCheck,centered:!!e.centeredToggle},n.createElement("div",{"data-test-attr":"siteControlsLabelText"},d,n.createElement("br",null)," ",n.createElement("span",{...(0,s.Sh)(l.domain,e.centeredToggle&&l.centered)},n.createElement("span",{className:l.thin_text},"on")," ",r&&n.createElement("span",{className:l.favicon},n.createElement("img",{width:"16px",height:"16px",src:r})),t)))}},66885:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(80510),l=a(1848),i=a(49231),s=a(69931),o=a(99627),r=a(94973),c=a(74218),d=a(89949),m=a(64965),u=a(55446),g=a(48521);const p=({user:e,isAssistant:t,openSubscriptionDialog:a,isGrammarlyPro:p})=>{const{registrationDate:b,anonymous:h,premium:E}=e,v=(0,l.p6)(b);if(h||E)return null;const k=()=>{const e=p?"pro":"premium";(0,c.nE)(r.J,{placement:t?"assistantSettings":"settingsToolbar",bannerType:"GoPremiumToEnableAdvancedFixes",upgradeHookName:"extensionSettings",upgradeHookSlot:t?"assistantSettingsPopup":"browserToolbar",upgradeHookVariant:e}),(0,n.Tb)().upgradeHooks.showUpgradeHook("extensionSettings",t?"assistantSettingsPopup":"browserToolbar",e)};i.useEffect((()=>{if((0,g.G6)()){const e=(0,m.R)(document,"visibilitychange").pipe((0,u.h)((()=>"visible"===document.visibilityState))).subscribe((()=>{k()}));return()=>e.unsubscribe()}return k(),()=>{}}),[]);const y=i.useCallback((()=>{const e=p?"pro":"premium";a({utmCampaign:"extensionSettingsToolbar"}),(0,c.Qi)(r.J,{placement:t?"assistantSettings":"settingsToolbar",bannerType:"GoPremiumToEnableAdvancedFixes",upgradeHookName:"extensionSettings",upgradeHookSlot:t?"assistantSettingsPopup":"browserToolbar",upgradeHookVariant:e}),(0,n.Tb)().upgradeHooks.clickUpgradeHook("extensionSettings",t?"assistantSettingsPopup":"browserToolbar",e),(0,n.Tb)().userUpgradeClick("settingsToolbar")}),[]),w=v?i.createElement("div",{"data-test-attr":"checked_since"},"Grammarly has been correcting your text since ",v,"."):null;return i.createElement("div",{className:t?s.borderTop:void 0},i.createElement("div",{...(0,o.Sh)(s.content,t?void 0:s.borderBottom)},w,i.createElement(d.Y,{onClick:y,className:s.premiumButton,dataGrammarlyPart:"settings-upgrade-button",isGrammarlyPro:p})))}},94973:(e,t,a)=>{a.d(t,{J:()=>l});var n=a(53516);const l=new Proxy({},{get:(e,t)=>(...e)=>(0,n.E)().bgRpc.api.trackGnar(t,e)})},53314:(e,t,a)=>{a.d(t,{Ng:()=>i,WY:()=>o,ZD:()=>s});var n=a(48521),l=a(21595);const i=e=>{const t=l.n.getType(e);return"registered"===t?"free":t},s=e=>{return{clientVersion:e.version,platformVersion:"",application:e.domain,browser:e.systemInfo.browser.name,os:(t=e.systemInfo.os,t.isWindows?"windows":t.isMac?"mac":t.isChromeOS?"chromeos":"other"),userType:e.userType,team:"browserextensions"};var t},o=e=>{const t=new URL((0,n.Um)().grammarlyEmployeesBugReportsUrl);return Object.entries(e).forEach((([e,a])=>{a&&t.searchParams.set(e,a)})),t.toString()}},51074:e=>{e.exports={premiumButton:"QpA64"}},66939:e=>{e.exports={label:"cLK4q",selected:"hbRki",option:"UytwF",disabled:"mTk5j",lockIconWrapper:"o4NOU"}},86708:e=>{e.exports={option:"XNQPo"}},25250:e=>{e.exports={option:"dRYWx"}},35628:e=>{e.exports={american:"JRPow",australian:"FZNcB",british:"MzB3a",canadian:"_fn3J",indian:"eqgex"}},69705:e=>{e.exports={hover_blocker:"np9cY"}},45425:e=>{e.exports={settingsContent:"C3SN4",fullWidth:"dRfoN",heading:"_HqAa",allSettings:"pUfgB",separator:"vlSkx",settingsLink:"d_ohh",debugMenu:"iovEn",downloadBtn:"u6BF0",timer:"DQHsO",gOSMenu:"dhG16",menuItem:"COwmJ"}},85732:e=>{e.exports={select_checkbox:"cIqfV",centered:"yfVcZ",select_children:"lRjE2",beta:"wvPnO",new:"QHuhM",alpha:"cThIl",checkbox:"F2Xdn",checkbox_check:"QRTZ2",on:"jzBvy",off:"HVvmV",checkbox_check_round:"qeH5k",checkbox_control_wrapper:"UMoTL",grayOut:"Ta6y3",on_off:"c2IdT",keyboard_accessible:"o7ug_",disabled:"KQoMv",setting_item:"HfRCc"}},22988:e=>{e.exports={line:"OBGgK",disabled:"SvddX",dialectPicker:"QNfvS",lockedInfo:"oAPBC"}},54608:e=>{e.exports={windows:"ScRGR",setting_item:"byTue",fixing:"tGQgu",thin_text:"Zw2iF",footer:"VarAw",gr_popup_settings:"sCOqq",iOS:"xw90P",footer_btn:"dFcxY",short_border:"GPdi3",top:"a8_HB",content:"eJi6K",upgraded:"fPnHa",since:"KcwUv",business:"HH96k",edu:"C_xJH",my_grammarly:"TPdm3",new_document:"b5rRu",unsupported_site:"FV6cP",unsupported_item:"kI6Es",unsupported_title:"TvJkj",domain:"mbOuw",domain_in_details:"HyZRA",unsupported_temporary:"aeiHl",unsupported_permanently:"e63AG",unsupported_grammarly:"SK755",diamond:"z0724",userPanel:"bG2GY",email:"U4qfE",link:"Vrj67",blue:"Dstaa",edc_stripe:"GEFvM",line:"_o71L",not_supported:"Z9hzt",site_switcher:"LXeMc",upgrade:"BAl_v",def_switcher:"aVnnG",on:"CcnIo",off:"LZuFk",cheetahToggle:"YHW25",favicon:"L5Hrq",centered:"T0qTK",summary:"tuG8u",upgrade_title:"KRcNq",settingsContentWrapper:"OeKpx",settingsContent:"AwQr3",withBackground:"JRZMC",llamaTitle:"WnzAW",llamaDescription:"dDIsV",cheetahLabelAndButton:"WwKRI",cheetahLabel:"aMCQq",cheetahManageButton:"hfCbo",nobr:"wae8U"}},69931:e=>{e.exports={content:"IJam9",borderTop:"oKEr5",borderBottom:"lZ1ZL",premiumButton:"bvxiF"}},55746:(e,t,a)=>{a.d(t,{N:()=>l});var n=a(49231);const l=(0,a(86914).I)("color",(({title:e,titleId:t,desc:a,descId:l,...i})=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":l,...i},a?n.createElement("desc",{id:l},a):null,e?n.createElement("title",{id:t},e):null,n.createElement("path",{stroke:"#646B81",strokeLinejoin:"round",d:"M5.727 6.615H3V14h10V6.615h-2.727m-4.546 0V4.273a2.273 2.273 0 1 1 4.545 0v2.342m-4.545 0h4.546"}))))},5193:(e,t,a)=>{a.d(t,{O:()=>l});var n=a(49231);const l=(0,a(86914).I)("color",(({title:e,titleId:t,desc:a,descId:l,...i})=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":"true",stroke:"transparent","aria-labelledby":t,"aria-describedby":l,...i},a?n.createElement("desc",{id:l},a):null,e?n.createElement("title",{id:t},e):null,n.createElement("path",{stroke:"#646B81",strokeLinecap:"round",strokeLinejoin:"round",d:"M2 6.448 4.526 3h2.527M2 6.448 8 13M2 6.448h3.474m8.526 0L11.474 3H8.947M14 6.448 8 13m6-6.552h-3.79M8 13 5.474 6.448M8 13l2.21-6.552m-4.736 0h4.736m-4.736 0L7.053 3m3.157 3.448L8.948 3m0 0H7.053"}))))}}]);