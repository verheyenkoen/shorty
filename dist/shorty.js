var SHORTY=function(t){"use strict";const lt="aria-checked",dt="aria-description",mt="aria-describedby",Et="aria-expanded",vt="aria-haspopup",gt="aria-hidden",ft="aria-label",bt="aria-labelledby",yt="aria-modal",ht="aria-pressed",At="aria-selected",wt="aria-valuemin",kt="aria-valuemax",St="aria-valuenow",Dt="aria-valuetext",j="abort",Q="beforeunload",q="blur",G="change",K="contextmenu",H="DOMContentLoaded",J="DOMMouseScroll",Y="error",X="focus",Z="focusin",$="focusout",_="gesturechange",p="gestureend",x="gesturestart",ee="keydown",te="keypress",ne="keyup",oe="load",ae="click",se="dblclick",ce="mousedown",ie="mouseup",re="hover",ue="mouseenter",le="mouseleave",de="mousein",me="mouseout",Ee="mouseover",ve="mousemove",ge="mousewheel",fe="move",be="orientationchange",ye="pointercancel",he="pointerdown",Ae="pointerleave",we="pointermove",ke="pointerup",Se="readystatechange",De="reset",Ne="resize",Te="select",Me="selectend",Ce="selectstart",Oe="scroll",Le="submit",Ie="touchstart",ze="touchmove",He="touchcancel",Be="touchend",Ve="unload",Nt={DOMContentLoaded:H,DOMMouseScroll:J,abort:j,beforeunload:Q,blur:q,change:G,click:ae,contextmenu:K,dblclick:se,error:Y,focus:X,focusin:Z,focusout:$,gesturechange:_,gestureend:p,gesturestart:x,hover:re,keydown:ee,keypress:te,keyup:ne,load:oe,mousedown:ce,mousemove:ve,mousein:de,mouseout:me,mouseenter:ue,mouseleave:le,mouseover:Ee,mouseup:ie,mousewheel:ge,move:fe,orientationchange:be,pointercancel:ye,pointerdown:he,pointerleave:Ae,pointermove:we,pointerup:ke,readystatechange:Se,reset:De,resize:Ne,scroll:Oe,select:Te,selectend:Me,selectstart:Ce,submit:Le,touchcancel:He,touchend:Be,touchmove:ze,touchstart:Ie,unload:Ve},Tt="drag",Mt="dragstart",Ct="dragenter",Ot="dragleave",Lt="dragover",It="dragend",zt="loadstart",Ht={start:"mousedown",end:"mouseup",move:"mousemove",cancel:"mouseleave"},Bt={down:"mousedown",up:"mouseup"},Vt="onmouseleave"in document?["mouseenter","mouseleave"]:["mouseover","mouseout"],Pt={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},Ft={in:"focusin",out:"focusout"},Rt={Backspace:"Backspace",Tab:"Tab",Enter:"Enter",Shift:"Shift",Control:"Control",Alt:"Alt",Pause:"Pause",CapsLock:"CapsLock",Escape:"Escape",Scape:"Space",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Insert:"Insert",Delete:"Delete",Meta:"Meta",ContextMenu:"ContextMenu",ScrollLock:"ScrollLock"},Wt="Alt",Ut="ArrowDown",jt="ArrowUp",Qt="ArrowLeft",qt="ArrowRight",Gt="Backspace",Kt="CapsLock",Jt="Control",Yt="Delete",Xt="Enter",Zt="NumpadEnter",$t="Escape",_t="Insert",pt="Meta",xt="Pause",en="ScrollLock",tn="Shift",nn="Space",on="Tab",Pe="animationDuration",Fe="animationDelay",B="animationName",C="animationend",Re="transitionDuration",We="transitionDelay",O="transitionend",V="transitionProperty",an="addEventListener",sn="removeEventListener",cn={linear:"linear",easingSinusoidalIn:"cubic-bezier(0.47,0,0.745,0.715)",easingSinusoidalOut:"cubic-bezier(0.39,0.575,0.565,1)",easingSinusoidalInOut:"cubic-bezier(0.445,0.05,0.55,0.95)",easingQuadraticIn:"cubic-bezier(0.550,0.085,0.680,0.530)",easingQuadraticOut:"cubic-bezier(0.250,0.460,0.450,0.940)",easingQuadraticInOut:"cubic-bezier(0.455,0.030,0.515,0.955)",easingCubicIn:"cubic-bezier(0.55,0.055,0.675,0.19)",easingCubicOut:"cubic-bezier(0.215,0.61,0.355,1)",easingCubicInOut:"cubic-bezier(0.645,0.045,0.355,1)",easingQuarticIn:"cubic-bezier(0.895,0.03,0.685,0.22)",easingQuarticOut:"cubic-bezier(0.165,0.84,0.44,1)",easingQuarticInOut:"cubic-bezier(0.77,0,0.175,1)",easingQuinticIn:"cubic-bezier(0.755,0.05,0.855,0.06)",easingQuinticOut:"cubic-bezier(0.23,1,0.32,1)",easingQuinticInOut:"cubic-bezier(0.86,0,0.07,1)",easingExponentialIn:"cubic-bezier(0.95,0.05,0.795,0.035)",easingExponentialOut:"cubic-bezier(0.19,1,0.22,1)",easingExponentialInOut:"cubic-bezier(1,0,0,1)",easingCircularIn:"cubic-bezier(0.6,0.04,0.98,0.335)",easingCircularOut:"cubic-bezier(0.075,0.82,0.165,1)",easingCircularInOut:"cubic-bezier(0.785,0.135,0.15,0.86)",easingBackIn:"cubic-bezier(0.6,-0.28,0.735,0.045)",easingBackOut:"cubic-bezier(0.175,0.885,0.32,1.275)",easingBackInOut:"cubic-bezier(0.68,-0.55,0.265,1.55)"},rn="offsetHeight",un="offsetWidth",ln="scrollHeight",dn="scrollWidth",mn="tabindex",w=navigator.userAgentData,{userAgent:En}=navigator,k=En,Ue=/iPhone|iPad|iPod|Android/i;let P=!1;w?P=w.brands.some(e=>Ue.test(e.brand)):P=Ue.test(k);const vn=P,je=/(iPhone|iPod|iPad)/,gn=w?w.brands.some(e=>je.test(e.brand)):je.test(k),fn=k?k.includes("Firefox"):!1,{head:S}=document,bn=["webkitPerspective","perspective"].some(e=>e in S.style),Qe=(e,n,o,a)=>{const s=a||!1;e.addEventListener(n,o,s)},qe=(e,n,o,a)=>{const s=a||!1;e.removeEventListener(n,o,s)},Ge=(e,n,o,a)=>{const s=r=>{(r.target===e||r.currentTarget===e)&&(o.apply(e,[r]),qe(e,n,s,a))};Qe(e,n,s,a)},Ke=()=>{},yn=(()=>{let e=!1;try{const n=Object.defineProperty({},"passive",{get:()=>(e=!0,e)});Ge(document,H,Ke,n)}catch{}return e})(),hn=["webkitTransform","transform"].some(e=>e in S.style),An="ontouchstart"in window||"msMaxTouchPoints"in navigator,wn=["webkitAnimation","animation"].some(e=>e in S.style),kn=["webkitTransition","transition"].some(e=>e in S.style),Je=(e,n)=>e.getAttribute(n),Sn=(e,n,o)=>n.getAttributeNS(e,o),Dn=(e,n)=>e.hasAttribute(n),Nn=(e,n,o)=>n.hasAttributeNS(e,o),Tn=(e,n,o)=>e.setAttribute(n,o),Mn=(e,n,o,a)=>n.setAttributeNS(e,o,a),Cn=(e,n)=>e.removeAttribute(n),On=(e,n,o)=>n.removeAttributeNS(e,o),Ln=(e,...n)=>{e.classList.add(...n)},In=(e,...n)=>{e.classList.remove(...n)},zn=(e,n)=>e.classList.contains(n),{body:Hn}=document,{documentElement:Bn}=document,Vn=e=>Array.from(e),E=e=>e!=null&&typeof e=="object"||!1,i=e=>E(e)&&typeof e.nodeType=="number"&&[1,2,3,4,5,6,7,8,9,10,11].some(n=>e.nodeType===n)||!1,l=e=>i(e)&&e.nodeType===1||!1,y=new Map,L={data:y,set:(e,n,o)=>{if(!l(e))return;y.has(n)||y.set(n,new Map),y.get(n).set(e,o)},getAllFor:e=>y.get(e)||null,get:(e,n)=>{if(!l(e)||!n)return null;const o=L.getAllFor(n);return e&&o&&o.get(e)||null},remove:(e,n)=>{const o=L.getAllFor(n);!o||!l(e)||(o.delete(e),o.size===0&&y.delete(n))}},Pn=(e,n)=>L.get(e,n),D=e=>typeof e=="string"||!1,F=e=>E(e)&&e.constructor.name==="Window"||!1,R=e=>i(e)&&e.nodeType===9||!1,m=e=>F(e)?e.document:R(e)?e:i(e)?e.ownerDocument:window.document,N=(e,...n)=>Object.assign(e,...n),Ye=e=>{if(!e)return;if(D(e))return m().createElement(e);const{tagName:n}=e,o=Ye(n);if(!o)return;const a={...e};return delete a.tagName,N(o,a)},Xe=(e,n)=>{if(!e||!n)return;if(D(n))return m().createElementNS(e,n);const{tagName:o}=n,a=Xe(e,o);if(!a)return;const s={...n};return delete s.tagName,N(a,s)},W=(e,n)=>e.dispatchEvent(n),Fn=(e,n,o)=>o.indexOf(e)===n,v=(e,n)=>{const o=getComputedStyle(e),a=n.replace("webkit","Webkit").replace(/([A-Z])/g,"-$1").toLowerCase();return o.getPropertyValue(a)},Ze=e=>{const n=v(e,B),o=v(e,Fe),a=o.includes("ms")?1:1e3,s=n&&n!=="none"?parseFloat(o)*a:0;return Number.isNaN(s)?0:s},$e=e=>{const n=v(e,B),o=v(e,Pe),a=o.includes("ms")?1:1e3,s=n&&n!=="none"?parseFloat(o)*a:0;return Number.isNaN(s)?0:s},Rn=(e,n)=>{let o=0;const a=new Event(C),s=$e(e),r=Ze(e);if(s){const u=d=>{d.target===e&&(n.apply(e,[d]),e.removeEventListener(C,u),o=1)};e.addEventListener(C,u),setTimeout(()=>{o||W(e,a)},s+r+17)}else n.apply(e,[a])},_e=e=>{const n=v(e,V),o=v(e,We),a=o.includes("ms")?1:1e3,s=n&&n!=="none"?parseFloat(o)*a:0;return Number.isNaN(s)?0:s},pe=e=>{const n=v(e,V),o=v(e,Re),a=o.includes("ms")?1:1e3,s=n&&n!=="none"?parseFloat(o)*a:0;return Number.isNaN(s)?0:s},Wn=(e,n)=>{let o=0;const a=new Event(O),s=pe(e),r=_e(e);if(s){const u=d=>{d.target===e&&(n.apply(e,[d]),e.removeEventListener(O,u),o=1)};e.addEventListener(O,u),setTimeout(()=>{o||W(e,a)},s+r+17)}else n.apply(e,[a])},Un=e=>Float32Array.from(Array.from(e)),jn=e=>Float64Array.from(Array.from(e)),Qn=(e,n)=>e.focus(n),U=e=>["true",!0].includes(e)?!0:["false",!1].includes(e)?!1:["null","",null,void 0].includes(e)?null:e!==""&&!Number.isNaN(+e)?+e:e,T=e=>Object.entries(e),xe=e=>e.toLowerCase(),qn=(e,n,o,a)=>{const s={...o},r={...e.dataset},u={...n},d={},f="title";return T(r).forEach(([c,b])=>{const z=a&&typeof c=="string"&&c.includes(a)?c.replace(a,"").replace(/[A-Z]/g,Oo=>xe(Oo)):c;d[z]=U(b)}),T(s).forEach(([c,b])=>{s[c]=U(b)}),T(n).forEach(([c,b])=>{c in s?u[c]=s[c]:c in d?u[c]=d[c]:u[c]=c===f?Je(e,f):b}),u},Gn=(e,n)=>E(e)&&(Object.hasOwn(e,n)||n in e),Kn=e=>Object.keys(e),Jn=e=>Object.values(e),Yn=e=>Object.fromEntries(e),Xn=(e,n)=>{const o=new CustomEvent(e,{cancelable:!0,bubbles:!0});return E(n)&&N(o,n),o},Zn={passive:!0},$n=e=>e.offsetHeight,_n=(e,n)=>{T(n).forEach(([o,a])=>{if(a&&D(o)&&o.includes("--"))e.style.setProperty(o,a);else{const s={};s[o]=a,N(e.style,s)}})},I=e=>E(e)&&e.constructor.name==="Map"||!1,et=e=>typeof e=="number"||!1,g=new Map,pn={set:(e,n,o,a)=>{l(e)&&(a&&a.length?(g.has(e)||g.set(e,new Map),g.get(e).set(a,setTimeout(n,o))):g.set(e,setTimeout(n,o)))},get:(e,n)=>{if(!l(e))return null;const o=g.get(e);return n&&o&&I(o)?o.get(n)||null:et(o)?o:null},clear:(e,n)=>{if(!l(e))return;const o=g.get(e);n&&n.length&&I(o)?(clearTimeout(o.get(n)),o.delete(n),o.size===0&&g.delete(e)):(clearTimeout(o),g.delete(e))}},xn=e=>e.toUpperCase(),h=(e,n)=>{const{width:o,height:a,top:s,right:r,bottom:u,left:d}=e.getBoundingClientRect();let f=1,c=1;if(n&&l(e)){const{offsetWidth:b,offsetHeight:z}=e;f=b>0?Math.round(o)/b:1,c=z>0?Math.round(a)/z:1}return{width:o/f,height:a/c,top:s/c,right:r/f,bottom:u/c,left:d/f,x:d/f,y:s/c}},eo=e=>m(e).body,M=e=>m(e).documentElement,to=e=>m(e).head,no=e=>{const n=F(e),o=n?e.scrollX:e.scrollLeft,a=n?e.scrollY:e.scrollTop;return{x:o,y:a}},tt=e=>i(e)&&e.constructor.name==="ShadowRoot"||!1,oo=e=>e.nodeName==="HTML"?e:l(e)&&e.assignedSlot||i(e)&&e.parentNode||tt(e)&&e.host||M(e),nt=e=>{if(!l(e))return!1;const{width:n,height:o}=h(e),{offsetWidth:a,offsetHeight:s}=e;return Math.round(n)!==a||Math.round(o)!==s},ao=(e,n,o)=>{const a=l(n),s=h(e,a&&nt(n)),r={x:0,y:0};if(a){const u=h(n,!0);r.x=u.x+n.clientLeft,r.y=u.y+n.clientTop}return{x:s.left+o.x-r.x,y:s.top+o.y-r.y,width:s.width,height:s.height}};let ot=0,at=0;const A=new Map,st=(e,n)=>{let o=n?ot:at;if(n){const a=st(e),s=A.get(a)||new Map;A.has(a)||A.set(a,s),I(s)&&!s.has(n)?(s.set(n,o),ot+=1):o=s.get(n)}else{const a=e.id||e;A.has(a)?o=A.get(a):(A.set(a,o),at+=1)}return o},so=e=>{var n;return e?R(e)?e.defaultView:i(e)?(n=e==null?void 0:e.ownerDocument)==null?void 0:n.defaultView:e:window},ct=e=>Array.isArray(e)||!1,co=e=>i(e)&&e.nodeName==="CANVAS"||!1,it=e=>l(e)&&!!e.shadowRoot||!1,io=e=>i(e)&&[1,2,3,4,5,6,7,8].some(n=>e.nodeType===n)||!1,ro=e=>{if(!i(e))return!1;const{top:n,bottom:o}=h(e),{clientHeight:a}=M(e);return n<=a&&o>=0},uo=e=>{if(!i(e))return!1;const{clientWidth:n,clientHeight:o}=M(e),{top:a,left:s,bottom:r,right:u}=h(e,!0);return a>=0&&s>=0&&r<=o&&u<=n},lo=e=>ct(e)&&e.every(l)||!1,mo=e=>typeof e=="function"||!1,Eo=e=>E(e)&&e.constructor.name==="HTMLCollection"||!1,vo=e=>l(e)&&e.tagName==="IMG"||!1,go=e=>{if(!D(e))return!1;try{JSON.parse(e)}catch{return!1}return!0},fo=e=>E(e)&&e.constructor.name==="WeakMap"||!1,bo=e=>i(e)&&["SVG","Image","Video","Canvas"].some(n=>e.constructor.name.includes(n))||!1,yo=e=>E(e)&&e.constructor.name==="NodeList"||!1,ho=e=>M(e).dir==="rtl",Ao=e=>i(e)&&e.constructor.name.includes("SVG")||!1,wo=e=>i(e)&&["TABLE","TD","TH"].includes(e.nodeName)||!1,rt=(e,n)=>e?e.closest(n)||rt(e.getRootNode().host,n):null,ko=(e,n)=>l(e)?e:(i(n)?n:m()).querySelector(e),ut=(e,n)=>(i(n)?n:m()).getElementsByTagName(e),So=e=>[...ut("*",e)].filter(it),Do=(e,n)=>m(n).getElementById(e)||null,No=(e,n)=>(i(n)?n:m()).querySelectorAll(e),To=(e,n)=>(n&&i(n)?n:m()).getElementsByClassName(e),Mo=(e,n)=>e.matches(n),Co="2.0.0alpha22";return t.ArrayFrom=Vn,t.DOMContentLoadedEvent=H,t.DOMMouseScrollEvent=J,t.Data=L,t.Float32ArrayFrom=Un,t.Float64ArrayFrom=jn,t.ObjectAssign=N,t.ObjectEntries=T,t.ObjectFromEntries=Yn,t.ObjectHasOwn=Gn,t.ObjectKeys=Kn,t.ObjectValues=Jn,t.Timer=pn,t.abortEvent=j,t.addClass=Ln,t.addEventListener=an,t.animationDelay=Fe,t.animationDuration=Pe,t.animationEndEvent=C,t.animationName=B,t.ariaChecked=lt,t.ariaDescribedBy=mt,t.ariaDescription=dt,t.ariaExpanded=Et,t.ariaHasPopup=vt,t.ariaHidden=gt,t.ariaLabel=ft,t.ariaLabelledBy=bt,t.ariaModal=yt,t.ariaPressed=ht,t.ariaSelected=At,t.ariaValueMax=kt,t.ariaValueMin=wt,t.ariaValueNow=St,t.ariaValueText=Dt,t.beforeunloadEvent=Q,t.bezierEasings=cn,t.blurEvent=q,t.changeEvent=G,t.closest=rt,t.contextmenuEvent=K,t.createCustomEvent=Xn,t.createElement=Ye,t.createElementNS=Xe,t.dispatchEvent=W,t.distinct=Fn,t.documentBody=Hn,t.documentElement=Bn,t.documentHead=S,t.dragEvent=Tt,t.dragendEvent=It,t.dragenterEvent=Ct,t.dragleaveEvent=Ot,t.dragoverEvent=Lt,t.dragstartEvent=Mt,t.emulateAnimationEnd=Rn,t.emulateTransitionEnd=Wn,t.errorEvent=Y,t.focus=Qn,t.focusEvent=X,t.focusEvents=Ft,t.focusinEvent=Z,t.focusoutEvent=$,t.gesturechangeEvent=_,t.gestureendEvent=p,t.gesturestartEvent=x,t.getAttribute=Je,t.getAttributeNS=Sn,t.getBoundingClientRect=h,t.getCustomElements=So,t.getDocument=m,t.getDocumentBody=eo,t.getDocumentElement=M,t.getDocumentHead=to,t.getElementAnimationDelay=Ze,t.getElementAnimationDuration=$e,t.getElementById=Do,t.getElementStyle=v,t.getElementTransitionDelay=_e,t.getElementTransitionDuration=pe,t.getElementsByClassName=To,t.getElementsByTagName=ut,t.getInstance=Pn,t.getNodeScroll=no,t.getParentNode=oo,t.getRectRelativeToOffsetParent=ao,t.getUID=st,t.getWindow=so,t.hasAttribute=Dn,t.hasAttributeNS=Nn,t.hasClass=zn,t.isApple=gn,t.isArray=ct,t.isCanvas=co,t.isCustomElement=it,t.isDocument=R,t.isElement=io,t.isElementInScrollRange=ro,t.isElementInViewport=uo,t.isElementsArray=lo,t.isFirefox=fn,t.isFunction=mo,t.isHTMLCollection=Eo,t.isHTMLElement=l,t.isHTMLImageElement=vo,t.isJSON=go,t.isMap=I,t.isMedia=bo,t.isMobile=vn,t.isNode=i,t.isNodeList=yo,t.isNumber=et,t.isObject=E,t.isRTL=ho,t.isSVGElement=Ao,t.isScaledElement=nt,t.isShadowRoot=tt,t.isString=D,t.isTableElement=wo,t.isWeakMap=fo,t.isWindow=F,t.keyAlt=Wt,t.keyArrowDown=Ut,t.keyArrowLeft=Qt,t.keyArrowRight=qt,t.keyArrowUp=jt,t.keyBackspace=Gt,t.keyCapsLock=Kt,t.keyControl=Jt,t.keyDelete=Yt,t.keyEnter=Xt,t.keyEscape=$t,t.keyInsert=_t,t.keyMeta=pt,t.keyNumpadEnter=Zt,t.keyPause=xt,t.keyScrollLock=en,t.keyShift=tn,t.keySpace=nn,t.keyTab=on,t.keyboardEventKeys=Rt,t.keydownEvent=ee,t.keypressEvent=te,t.keyupEvent=ne,t.loadEvent=oe,t.loadstartEvent=zt,t.matches=Mo,t.mouseClickEvents=Bt,t.mouseHoverEvents=Vt,t.mouseSwipeEvents=Ht,t.mouseclickEvent=ae,t.mousedblclickEvent=se,t.mousedownEvent=ce,t.mouseenterEvent=ue,t.mousehoverEvent=re,t.mouseinEvent=de,t.mouseleaveEvent=le,t.mousemoveEvent=ve,t.mouseoutEvent=me,t.mouseoverEvent=Ee,t.mouseupEvent=ie,t.mousewheelEvent=ge,t.moveEvent=fe,t.nativeEvents=Nt,t.noop=Ke,t.normalizeOptions=qn,t.normalizeValue=U,t.off=qe,t.offsetHeight=rn,t.offsetWidth=un,t.on=Qe,t.one=Ge,t.orientationchangeEvent=be,t.passiveHandler=Zn,t.pointercancelEvent=ye,t.pointerdownEvent=he,t.pointerleaveEvent=Ae,t.pointermoveEvent=we,t.pointerupEvent=ke,t.querySelector=ko,t.querySelectorAll=No,t.readystatechangeEvent=Se,t.reflow=$n,t.removeAttribute=Cn,t.removeAttributeNS=On,t.removeClass=In,t.removeEventListener=sn,t.resetEvent=De,t.resizeEvent=Ne,t.scrollEvent=Oe,t.scrollHeight=ln,t.scrollWidth=dn,t.selectEvent=Te,t.selectendEvent=Me,t.selectstartEvent=Ce,t.setAttribute=Tn,t.setAttributeNS=Mn,t.setElementStyle=_n,t.submitEvent=Le,t.support3DTransform=bn,t.supportAnimation=wn,t.supportPassive=yn,t.supportTouch=An,t.supportTransform=hn,t.supportTransition=kn,t.tabindex=mn,t.toLowerCase=xe,t.toUpperCase=xn,t.touchEvents=Pt,t.touchcancelEvent=He,t.touchendEvent=Be,t.touchmoveEvent=ze,t.touchstartEvent=Ie,t.transitionDelay=We,t.transitionDuration=Re,t.transitionEndEvent=O,t.transitionProperty=V,t.unloadEvent=Ve,t.userAgent=k,t.userAgentData=w,t.version=Co,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({});
//# sourceMappingURL=shorty.js.map
