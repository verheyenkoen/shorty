var SHORTY=function(){"use strict";const le="aria-checked",de="aria-description",fe="aria-describedby",pe="aria-expanded",me="aria-haspopup",ge="aria-hidden",Ee="aria-label",ve="aria-labelledby",be="aria-modal",he="aria-pressed",ye="aria-selected",we="aria-valuemin",Ae="aria-valuemax",Se="aria-valuenow",Me="aria-valuetext",R="abort",U="beforeunload",W="blur",Q="change",j="contextmenu",L="DOMContentLoaded",q="DOMMouseScroll",Y="error",G="focus",J="focusin",K="focusout",X="gesturechange",Z="gestureend",$="gesturestart",_="keydown",tt="keypress",et="keyup",nt="load",ot="click",st="dblclick",ct="mousedown",rt="mouseup",it="hover",at="mouseenter",ut="mouseleave",lt="mousein",dt="mouseout",ft="mouseover",pt="mousemove",mt="mousewheel",gt="move",Et="orientationchange",vt="pointercancel",bt="pointerdown",ht="pointerleave",yt="pointermove",wt="pointerup",At="readystatechange",St="reset",Mt="resize",Tt="select",kt="selectend",Nt="selectstart",Dt="scroll",Ct="submit",Lt="touchstart",Ot="touchmove",It="touchcancel",zt="touchend",xt="unload",Te={DOMContentLoaded:L,DOMMouseScroll:q,abort:R,beforeunload:U,blur:W,change:Q,click:ot,contextmenu:j,dblclick:st,error:Y,focus:G,focusin:J,focusout:K,gesturechange:X,gestureend:Z,gesturestart:$,hover:it,keydown:_,keypress:tt,keyup:et,load:nt,mousedown:ct,mousemove:pt,mousein:lt,mouseout:dt,mouseenter:at,mouseleave:ut,mouseover:ft,mouseup:rt,mousewheel:mt,move:gt,orientationchange:Et,pointercancel:vt,pointerdown:bt,pointerleave:ht,pointermove:yt,pointerup:wt,readystatechange:At,reset:St,resize:Mt,scroll:Dt,select:Tt,selectend:kt,selectstart:Nt,submit:Ct,touchcancel:It,touchend:zt,touchmove:Ot,touchstart:Lt,unload:xt},ke="loadstart",Ne={start:"mousedown",end:"mouseup",move:"mousemove",cancel:"mouseleave"},De={down:"mousedown",up:"mouseup"},Ce="onmouseleave"in document?["mouseenter","mouseleave"]:["mouseover","mouseout"],Le={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},Oe={in:"focusin",out:"focusout"},Ie={Backspace:"Backspace",Tab:"Tab",Enter:"Enter",Shift:"Shift",Control:"Control",Alt:"Alt",Pause:"Pause",CapsLock:"CapsLock",Escape:"Escape",Scape:"Space",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Insert:"Insert",Delete:"Delete",Meta:"Meta",ContextMenu:"ContextMenu",ScrollLock:"ScrollLock"},ze="Alt",xe="ArrowDown",He="ArrowUp",Be="ArrowLeft",Ve="ArrowRight",Pe="Backspace",Fe="CapsLock",Re="Control",Ue="Delete",We="Enter",Qe="Escape",je="Insert",qe="Meta",Ye="Pause",Ge="ScrollLock",Je="Shift",Ke="Space",Xe="Tab",Ht="animationDuration",Bt="animationDelay",O="animationName",T="animationend",Vt="transitionDuration",Pt="transitionDelay",k="transitionend",I="transitionProperty",Ze="addEventListener",$e="removeEventListener",_e={linear:"linear",easingSinusoidalIn:"cubic-bezier(0.47,0,0.745,0.715)",easingSinusoidalOut:"cubic-bezier(0.39,0.575,0.565,1)",easingSinusoidalInOut:"cubic-bezier(0.445,0.05,0.55,0.95)",easingQuadraticIn:"cubic-bezier(0.550,0.085,0.680,0.530)",easingQuadraticOut:"cubic-bezier(0.250,0.460,0.450,0.940)",easingQuadraticInOut:"cubic-bezier(0.455,0.030,0.515,0.955)",easingCubicIn:"cubic-bezier(0.55,0.055,0.675,0.19)",easingCubicOut:"cubic-bezier(0.215,0.61,0.355,1)",easingCubicInOut:"cubic-bezier(0.645,0.045,0.355,1)",easingQuarticIn:"cubic-bezier(0.895,0.03,0.685,0.22)",easingQuarticOut:"cubic-bezier(0.165,0.84,0.44,1)",easingQuarticInOut:"cubic-bezier(0.77,0,0.175,1)",easingQuinticIn:"cubic-bezier(0.755,0.05,0.855,0.06)",easingQuinticOut:"cubic-bezier(0.23,1,0.32,1)",easingQuinticInOut:"cubic-bezier(0.86,0,0.07,1)",easingExponentialIn:"cubic-bezier(0.95,0.05,0.795,0.035)",easingExponentialOut:"cubic-bezier(0.19,1,0.22,1)",easingExponentialInOut:"cubic-bezier(1,0,0,1)",easingCircularIn:"cubic-bezier(0.6,0.04,0.98,0.335)",easingCircularOut:"cubic-bezier(0.075,0.82,0.165,1)",easingCircularInOut:"cubic-bezier(0.785,0.135,0.15,0.86)",easingBackIn:"cubic-bezier(0.6,-0.28,0.735,0.045)",easingBackOut:"cubic-bezier(0.175,0.885,0.32,1.275)",easingBackInOut:"cubic-bezier(0.68,-0.55,0.265,1.55)"},tn="offsetHeight",en="offsetWidth",nn="scrollHeight",on="scrollWidth",sn="tabindex",h=navigator.userAgentData,{userAgent:cn}=navigator,y=cn,Ft=/iPhone|iPad|iPod|Android/i;let z=!1;h?z=h.brands.some(t=>Ft.test(t.brand)):z=Ft.test(y);const rn=z,Rt=/(iPhone|iPod|iPad)/,an=h?h.brands.some(t=>Rt.test(t.brand)):Rt.test(y),un=y?y.includes("Firefox"):!1,{head:N}=document,ln=["webkitPerspective","perspective"].some(t=>t in N.style);function Ut(t,e,n,o){const s=o||!1;t.addEventListener(e,n,s)}function Wt(t,e,n,o){const s=o||!1;t.removeEventListener(e,n,s)}const Qt=(t,e,n,o)=>{const s=c=>{c.target===t&&(n.apply(t,[c]),Wt(t,e,s,o))};Ut(t,e,s,o)},jt=()=>{},dn=(()=>{let t=!1;try{const e=Object.defineProperty({},"passive",{get(){return t=!0,t}});Qt(document,L,jt,e)}catch{}return t})(),fn=["webkitTransform","transform"].some(t=>t in N.style),pn="ontouchstart"in window||"msMaxTouchPoints"in navigator,mn=["webkitAnimation","animation"].some(t=>t in N.style),gn=["webkitTransition","transition"].some(t=>t in N.style),qt=(t,e)=>t.getAttribute(e),En=(t,e,n)=>e.getAttributeNS(t,n),vn=(t,e)=>t.hasAttribute(e),bn=(t,e,n)=>e.hasAttributeNS(t,n),x=(t,e,n)=>t.setAttribute(e,n),hn=(t,e,n,o)=>e.setAttributeNS(t,n,o),yn=(t,e)=>t.removeAttribute(e),wn=(t,e,n)=>e.removeAttributeNS(t,n),An=(t,...e)=>{t.classList.add(...e)},Sn=(t,...e)=>{t.classList.remove(...e)},Mn=(t,e)=>t.classList.contains(e),Tn=t=>Array.from(t),a=t=>t&&t.nodeType===1||!1,w=new Map,D={set:(t,e,n)=>{if(!a(t))return;w.has(e)||w.set(e,new Map),w.get(e).set(t,n)},getAllFor:t=>w.get(t)||null,get:(t,e)=>{if(!a(t)||!e)return null;const n=D.getAllFor(e);return t&&n&&n.get(t)||null},remove:(t,e)=>{const n=D.getAllFor(e);!n||!a(t)||(n.delete(t),n.size===0&&w.delete(e))}},kn=(t,e)=>D.get(t,e),A=t=>typeof t=="string"||!1,l=t=>t&&[1,2,3,4,5,6,7,8,9,10,11].some(e=>t.nodeType===e)||!1,H=t=>t&&t.constructor.name==="Window"||!1,B=t=>t&&t.nodeType===9||!1,d=t=>B(t)?t:l(t)?t.ownerDocument:H(t)?t.document:window.document,E=t=>Object.entries(t),Yt=t=>{if(!t)return;if(typeof t=="string")return d().createElement(t);const{tagName:e}=t,n=Yt(e);if(!n)return;const o={...t};return delete o.tagName,E(o).forEach(([s,c])=>{A(c)&&x(n,s,c)}),n},Gt=(t,e)=>{if(!t||!e)return;if(typeof e=="string")return d().createElementNS(t,e);const{tagName:n}=e,o=Gt(t,n);if(!o)return;const s={...e};return delete s.tagName,E(s).forEach(([c,i])=>{A(i)&&x(o,c,i)}),o},V=(t,e)=>t.dispatchEvent(e),Nn=(t,e,n)=>n.indexOf(t)===e,f=(t,e)=>{const n=getComputedStyle(t),o=e.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return n.getPropertyValue(o)},Jt=t=>{const e=f(t,O),n=f(t,Bt),o=n.includes("ms")?1:1e3,s=e&&e!=="none"?parseFloat(n)*o:0;return Number.isNaN(s)?0:s},Kt=t=>{const e=f(t,O),n=f(t,Ht),o=n.includes("ms")?1:1e3,s=e&&e!=="none"?parseFloat(n)*o:0;return Number.isNaN(s)?0:s},Dn=(t,e)=>{let n=0;const o=new Event(T),s=Kt(t),c=Jt(t);if(s){const i=u=>{u.target===t&&(e.apply(t,[u]),t.removeEventListener(T,i),n=1)};t.addEventListener(T,i),setTimeout(()=>{n||V(t,o)},s+c+17)}else e.apply(t,[o])},Xt=t=>{const e=f(t,I),n=f(t,Pt),o=n.includes("ms")?1:1e3,s=e&&e!=="none"?parseFloat(n)*o:0;return Number.isNaN(s)?0:s},Zt=t=>{const e=f(t,I),n=f(t,Vt),o=n.includes("ms")?1:1e3,s=e&&e!=="none"?parseFloat(n)*o:0;return Number.isNaN(s)?0:s},Cn=(t,e)=>{let n=0;const o=new Event(k),s=Zt(t),c=Xt(t);if(s){const i=u=>{u.target===t&&(e.apply(t,[u]),t.removeEventListener(k,i),n=1)};t.addEventListener(k,i),setTimeout(()=>{n||V(t,o)},s+c+17)}else e.apply(t,[o])},Ln=t=>Float32Array.from(Array.from(t)),On=t=>Float64Array.from(Array.from(t)),In=(t,e)=>t.focus(e),P=t=>["true",!0].includes(t)?!0:["false",!1].includes(t)?!1:["null","",null].includes(t)?null:t!==""&&!Number.isNaN(+t)?+t:t,$t=t=>t.toLowerCase(),zn=(t,e,n,o)=>{const s={...n},c={...t.dataset},i={...e},u={},m="title";return E(c).forEach(([r,g])=>{const C=o&&typeof r=="string"&&r.includes(o)?r.replace(o,"").replace(/[A-Z]/g,lo=>$t(lo)):r;u[C]=P(g)}),E(s).forEach(([r,g])=>{s[r]=P(g)}),E(e).forEach(([r,g])=>{r in s?i[r]=s[r]:r in u?i[r]=u[r]:i[r]=r===m?qt(t,m):g}),i},F=(t,...e)=>Object.assign(t,...e),xn=t=>Object.keys(t),Hn=t=>Object.values(t),_t=t=>typeof t=="object"||!1,Bn=(t,e)=>{const n=new CustomEvent(t,{cancelable:!0,bubbles:!0});return _t(e)&&F(n,e),n},Vn={passive:!0},Pn=t=>t.offsetHeight,Fn=(t,e)=>{E(e).forEach(([n,o])=>{if(o&&A(n)&&n.includes("--"))t.style.setProperty(n,o);else{const s={};s[n]=o,F(t.style,s)}})},S=t=>t&&t.constructor.name==="Map"||!1,te=t=>typeof t=="number"||!1,p=new Map,Rn={set:(t,e,n,o)=>{!a(t)||(o&&o.length?(p.has(t)||p.set(t,new Map),p.get(t).set(o,setTimeout(e,n))):p.set(t,setTimeout(e,n)))},get:(t,e)=>{if(!a(t))return null;const n=p.get(t);return e&&S(n)?n.get(e)||null:te(n)?n:null},clear:(t,e)=>{if(!a(t))return;const n=p.get(t);e&&e.length&&S(n)?S(n)&&(clearTimeout(n.get(e)),n.delete(e),n.size===0&&p.delete(t)):(clearTimeout(n),p.delete(t))}},Un=t=>t.toUpperCase(),v=(t,e)=>{const{width:n,height:o,top:s,right:c,bottom:i,left:u}=t.getBoundingClientRect();let m=1,r=1;if(e&&a(t)){const{offsetWidth:g,offsetHeight:C}=t;m=g>0?Math.round(n)/g:1,r=C>0?Math.round(o)/C:1}return{width:n/m,height:o/r,top:s/r,right:c/m,bottom:i/r,left:u/m,x:u/m,y:s/r}},Wn=t=>d(t).body,M=t=>d(t).documentElement,Qn=t=>d(t).head,jn=t=>{const e=H(t),n=e?t.scrollX:t.scrollLeft,o=e?t.scrollY:t.scrollTop;return{x:n,y:o}},ee=t=>t&&t.constructor.name==="ShadowRoot"||!1,qn=t=>t.nodeName==="HTML"?t:a(t)&&t.assignedSlot||l(t)&&t.parentNode||ee(t)&&t.host||M(t);function ne(t){if(!a(t))return!1;const{width:e,height:n}=v(t),{offsetWidth:o,offsetHeight:s}=t;return Math.round(e)!==o||Math.round(n)!==s}const Yn=(t,e,n)=>{const o=a(e),s=v(t,o&&ne(e)),c={x:0,y:0};if(o){const i=v(e,!0);c.x=i.x+e.clientLeft,c.y=i.y+e.clientTop}return{x:s.left+n.x-c.x,y:s.top+n.y-c.y,width:s.width,height:s.height}};let oe=0,se=0;const b=new Map,ce=(t,e)=>{let n=e?oe:se;if(e){const o=ce(t),s=b.get(o)||new Map;b.has(o)||b.set(o,s),S(s)&&!s.has(e)?(s.set(e,n),oe+=1):n=s.get(e)}else{const o=t.id||t;b.has(o)?n=b.get(o):(b.set(o,n),se+=1)}return n},Gn=t=>{var e;return t?B(t)?t.defaultView:l(t)?(e=t==null?void 0:t.ownerDocument)==null?void 0:e.defaultView:t:window},re=t=>Array.isArray(t)||!1,Jn=t=>t&&t.constructor.name==="HTMLCanvasElement"||!1,ie=t=>t&&!!t.shadowRoot||!1,Kn=t=>t&&[1,2,3,4,5,6,7,8].some(e=>t.nodeType===e)||!1,Xn=t=>{if(!l(t))return!1;const{top:e,bottom:n}=v(t),{clientHeight:o}=M(t);return e<=o&&n>=0},Zn=t=>{if(!l(t))return!1;const{clientWidth:e,clientHeight:n}=M(t),{top:o,left:s,bottom:c,right:i}=v(t,!0);return o>=0&&s>=0&&c<=n&&i<=e},$n=t=>re(t)&&t.every(a)||!1,_n=t=>t&&t.constructor.name==="Function"||!1,to=t=>t&&t.constructor.name==="HTMLCollection"||!1,eo=t=>t&&t.tagName==="IMG"||!1,no=t=>{if(!A(t))return!1;try{JSON.parse(t)}catch{return!1}return!0},oo=t=>t&&t.constructor.name==="WeakMap"||!1,so=t=>t&&t.nodeType===1&&["SVG","Image","Video","Canvas"].some(e=>t.constructor.name.includes(e))||!1,co=t=>t&&t.constructor.name==="NodeList"||!1,ro=t=>M(t).dir==="rtl",io=t=>t&&t.constructor.name.includes("SVG")||!1,ao=t=>t&&["TABLE","TD","TH"].includes(t.tagName)||!1,ae=(t,e)=>t?t.closest(e)||ae(t.getRootNode().host,e):null,uo=(t,e)=>l(t)?t:(e&&l(e)?e:d()).querySelector(t),ue=(t,e)=>(l(e)?e:d()).getElementsByTagName(t);return{ariaChecked:le,ariaDescription:de,ariaDescribedBy:fe,ariaExpanded:pe,ariaHidden:ge,ariaHasPopup:me,ariaLabel:Ee,ariaLabelledBy:ve,ariaModal:be,ariaPressed:he,ariaSelected:ye,ariaValueMin:we,ariaValueMax:Ae,ariaValueNow:Se,ariaValueText:Me,nativeEvents:Te,abortEvent:R,blurEvent:W,moveEvent:gt,changeEvent:Q,errorEvent:Y,resetEvent:St,resizeEvent:Mt,scrollEvent:Dt,submitEvent:Ct,loadEvent:nt,loadstartEvent:ke,unloadEvent:xt,readystatechangeEvent:At,beforeunloadEvent:U,orientationchangeEvent:Et,contextmenuEvent:j,DOMContentLoadedEvent:L,DOMMouseScrollEvent:q,selectEvent:Tt,selectendEvent:kt,selectstartEvent:Nt,mouseClickEvents:De,mouseclickEvent:ot,mousedblclickEvent:st,mousedownEvent:ct,mouseupEvent:rt,mousehoverEvent:it,mouseHoverEvents:Ce,mouseenterEvent:at,mouseleaveEvent:ut,mouseinEvent:lt,mouseoutEvent:dt,mouseoverEvent:ft,mousemoveEvent:pt,mousewheelEvent:mt,mouseSwipeEvents:Ne,touchEvents:Le,touchstartEvent:Lt,touchmoveEvent:Ot,touchcancelEvent:It,touchendEvent:zt,pointercancelEvent:vt,pointerdownEvent:bt,pointerleaveEvent:ht,pointermoveEvent:yt,pointerupEvent:wt,focusEvents:Oe,focusEvent:G,focusinEvent:J,focusoutEvent:K,gesturechangeEvent:X,gestureendEvent:Z,gesturestartEvent:$,bezierEasings:_e,animationDuration:Ht,animationDelay:Bt,animationName:O,animationEndEvent:T,transitionDuration:Vt,transitionDelay:Pt,transitionEndEvent:k,transitionProperty:I,isMobile:rn,isApple:an,isFirefox:un,support3DTransform:ln,supportPassive:dn,supportTransform:fn,supportTouch:pn,supportAnimation:mn,supportTransition:gn,addEventListener:Ze,removeEventListener:$e,keyboardEventKeys:Ie,keydownEvent:_,keypressEvent:tt,keyupEvent:et,keyAlt:ze,keyArrowDown:xe,keyArrowLeft:Be,keyArrowRight:Ve,keyArrowUp:He,keyBackspace:Pe,keyCapsLock:Fe,keyControl:Re,keyDelete:Ue,keyEnter:We,keyEscape:Qe,keyInsert:je,keyMeta:qe,keyPause:Ye,keyScrollLock:Ge,keyShift:Je,keySpace:Ke,keyTab:Xe,offsetHeight:tn,offsetWidth:en,scrollHeight:nn,scrollWidth:on,userAgentData:h,userAgent:y,tabindex:sn,addClass:An,removeClass:Sn,hasClass:Mn,on:Ut,off:Wt,one:Qt,dispatchEvent:V,distinct:Nn,Data:D,getInstance:kn,createElement:Yt,createElementNS:Gt,toUpperCase:Un,toLowerCase:$t,Timer:Rn,emulateAnimationEnd:Dn,emulateTransitionEnd:Cn,isElementInScrollRange:Xn,isElementInViewport:Zn,passiveHandler:Vn,getElementAnimationDuration:Kt,getElementAnimationDelay:Jt,getElementTransitionDuration:Zt,getElementTransitionDelay:Xt,getNodeScroll:jn,getParentNode:qn,getRectRelativeToOffsetParent:Yn,getWindow:Gn,isArray:re,isCanvas:Jn,isString:A,isCustomElement:ie,isElement:Kn,isJSON:no,isMap:S,isWeakMap:oo,isNode:l,isNumber:te,isHTMLElement:a,isHTMLImageElement:eo,isSVGElement:io,isNodeList:co,isHTMLCollection:to,isScaledElement:ne,isTableElement:ao,isShadowRoot:ee,isDocument:B,isElementsArray:$n,isFunction:_n,isObject:_t,isWindow:H,isMedia:so,isRTL:ro,closest:ae,querySelector:uo,getCustomElements:t=>[...ue("*",t)].filter(ie),getElementById:(t,e)=>d(e).getElementById(t)||null,querySelectorAll:(t,e)=>(l(e)?e:d()).querySelectorAll(t),getElementsByClassName:(t,e)=>(e&&l(e)?e:d()).getElementsByClassName(t),getElementsByTagName:ue,matches:(t,e)=>t.matches(e),normalizeValue:P,normalizeOptions:zn,reflow:Pn,noop:jt,focus:In,getUID:ce,ArrayFrom:Tn,Float32ArrayFrom:Ln,Float64ArrayFrom:On,ObjectAssign:F,ObjectEntries:E,ObjectKeys:xn,ObjectValues:Hn,OriginalEvent:Bn,getBoundingClientRect:v,getDocument:d,getDocumentBody:Wn,getDocumentElement:M,getDocumentHead:Qn,getElementStyle:f,setElementStyle:Fn,hasAttribute:vn,hasAttributeNS:bn,getAttribute:qt,getAttributeNS:En,setAttribute:x,setAttributeNS:hn,removeAttribute:yn,removeAttributeNS:wn}}();
//# sourceMappingURL=shorty.js.map
