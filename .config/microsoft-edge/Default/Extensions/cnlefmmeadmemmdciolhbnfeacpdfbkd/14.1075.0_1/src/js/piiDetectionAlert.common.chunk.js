(self.webpackChunk=self.webpackChunk||[]).push([[9209],{53140:(e,t,i)=>{i.r(t),i.d(t,{PiiDetectionAlert:()=>r.PiiDetectionAlert,PiiDetectionAlertHighlights:()=>m,PiiDetectionCard:()=>g.PiiDetectionCard,PiiDetectionCardController:()=>u.x,PiiDetectionCardModel:()=>v.PiiDetectionCardModel,PiiDetectionCardModelImpl:()=>v.H,PiiDetectionFeatureImpl:()=>a.r,PiiDetectionFeatureModel:()=>l.PiiDetectionFeatureModel,PiiDetectionFeatureModelImpl:()=>l.x,PiiDetectionServiceClient:()=>n.PiiDetectionServiceClient,PiiDetectionServiceClientImpl:()=>n.j,userHasPiiDetectionFeature:()=>h.z});var r={};i.r(r);var a=i(31740),l=i(585),n=i(4848),s=i(49231),c=i(18127),o=i(75427),d=i(20762);const m=({highlights:e,highlightHeightOffset:t,getAlertById:i,getHoverState:r,highlightsFilter:a})=>s.createElement(c.J,{highlights:e.view((e=>Array.from(e.values()).filter((e=>{const t=i(e.meta.alertId);return!!t&&a(t)})))),highlightHeightOffset:t,getHoverState:r,getAlertById:i,highlightRenderer:(e,t,i)=>s.createElement(o.eZ,{key:e.meta.highlightId,color:{kind:"preset",color:d.al.gray},rects:e.rects||[],hoverState:t,heightOffset:i,baseKey:e.meta.highlightId,displayFormat:d.jk.underlineAndBackground,disappearOnHoverDelay:null,liveliness:e.meta.highlightLiveliness})});var h=i(995),g=i(26237),u=i(31549),v=i(98487)},26237:(e,t,i)=>{i.r(t),i.d(t,{PiiDetectionCard:()=>o});var r=i(49231),a=i(3611),l=i(45085),n=i(42713),s=i(95907),c=i(62170);const o=({model:e})=>r.createElement(a.Z,{kind:"inline"},r.createElement("div",{className:c.piiDetectionCard},r.createElement("div",{className:c.header},r.createElement("div",{className:c.grammarlyIcon}),r.createElement("h1",{className:c.title},"Grammarly Guard"),r.createElement(l.C,{className:c.badge,title:"BETA",kind:"success"})),r.createElement("p",{className:c.text},"This text may include ",(({patternType:e})=>"creditCardNumber"===e?"credit card numbers":"phoneNumber"===e?"personal phone numbers":"usSSN"===e?"social security numbers":void(0,s.vE)(e))(e.alert)," that are sensitive and personally identifiable information. You may want to consider removing these details."),r.createElement("div",{className:c.footer},r.createElement(n.z,{className:c.dismissBtn,dataGrammarlyPart:"piiDetectionDismissButton",kind:"transparent-hoverable",onClick:e.dismissAlert},"Dismiss"))))},62170:e=>{e.exports={piiDetectionCard:"ElK1b",grammarlyIcon:"NsIG2",header:"i4oVu",title:"qkbMx",badge:"SRBm3",text:"y4171",dismissBtn:"wIU56"}}}]);