(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78382,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n=["#3D63D8","#9DB8DC","#E76D95","#EFE3C8","#DD3B31","#E8B8C4","#4B5AA8","#E8B08A"],a=String.fromCharCode(183);function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}e.s(["default",0,function({data:e}){let s=(0,r.useRef)(null),l=(0,r.useRef)(null),o=e.groups,c=e.nodes,p=e.edges,d=e.H,h=o.map(()=>0);c.forEach(e=>h[e.g]++),(0,r.useEffect)(()=>{c.forEach(e=>{e.py=e.y-d/2})},[c,d]);let u=(0,r.useRef)([]),g=(0,r.useRef)([]),x=(0,r.useRef)([]);(0,r.useEffect)(()=>{u.current=Array.from({length:c.length},()=>[]),g.current=Array.from({length:c.length},()=>[]),x.current=Array.from({length:c.length},()=>[]),p.forEach((e,t)=>{u.current[e[0]].push(t),u.current[e[1]].push(t),g.current[e[0]].push(e[1]),x.current[e[1]].push(e[0])})},[c,p]),(0,r.useEffect)(()=>{c.forEach(e=>{e.appear=e.y/d})},[c,d]);let m=(0,r.useRef)(-1),f=(0,r.useRef)(-1),b=(0,r.useRef)(null),v=(0,r.useRef)(18e-5),k=(0,r.useRef)(0),w=(0,r.useRef)(.6),j=(0,r.useRef)(-.32),y=(0,r.useRef)(1),N=(0,r.useRef)(null),M=(0,r.useRef)(null),z=(0,r.useRef)(null),E=(0,r.useRef)([]),[C,R]=(0,r.useState)(-1),[S,B]=(0,r.useState)(-1),[L,D]=(0,r.useState)(null),[A,I]=(0,r.useState)(()=>new Set(o.map((e,t)=>t))),[Y,P]=(0,r.useState)({x:0,y:0}),[$,q]=(0,r.useState)(0),[X,F]=(0,r.useState)([]),[Z,T]=(0,r.useState)([]),V=(0,r.useRef)(new Set(o.map((e,t)=>t))),H=C>=0?c[C]:null,O=S>=0?c[S]:null,W=L?L.nodes.size-1:0,G=(0,r.useCallback)(e=>{let t=new Set([e]),r=new Set,n=[e];for(;n.length;){let e=n.shift();for(let a of u.current[e]){let i=p[a];i[0]===e&&(r.add(a),t.has(i[1])||(t.add(i[1]),n.push(i[1])))}}return{nodes:t,edges:r}},[p]),K=(0,r.useCallback)(e=>{let t=c[e],r=null,n=1/0;for(let e of[Math.atan2(-t.x,t.z),Math.atan2(-t.x,t.z)+Math.PI]){let a=-t.x*Math.sin(e)+t.z*Math.cos(e);a<n&&(n=a,r=e)}N.current=r,M.current=-.18,z.current=Math.max(y.current,1.5)},[c]),U=(0,r.useCallback)((e,t)=>{t&&f.current>=0&&f.current!==e&&E.current.push(f.current),f.current=e;let r=G(e);b.current=r,B(e),D(r),q(E.current.length),F(g.current[e]||[]),T(x.current[e]||[]),K(e),v.current=0},[G,K]),_=(0,r.useCallback)(()=>{E.current.length&&U(E.current.pop(),!1)},[U]),J=(0,r.useCallback)(()=>{f.current=-1,b.current=null,E.current.length=0,N.current=null,M.current=null,z.current=null,B(-1),D(null),q(0),F([]),T([]),v.current=18e-5},[]),Q=(0,r.useCallback)(e=>{I(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),V.current=r,r})},[]);return(0,r.useEffect)(()=>{let e,t=l.current,r=s.current;if(!t||!r)return;let n=t.getContext("2d"),a=1,i=0,o=0,d=!1,h=!1,u=0,g=0,x=window.matchMedia("(prefers-reduced-motion:reduce)").matches,E=new Float32Array(3*c.length),C=c.map(e=>{let t;return t=parseInt(e.col.slice(1),16),`${t>>16&255},${t>>8&255},${255&t}`}),S=c.map((e,t)=>t),B=new Map,L=0;function D(){a=Math.min(window.devicePixelRatio||1,2),i=r.clientWidth,o=r.clientHeight,t.width=i*a,t.height=o*a,t.style.width=i+"px",t.style.height=o+"px"}function A(e){return(2.3+7.5*Math.sqrt(c[e].c))*E[3*e+2]*Math.min(1.6,Math.max(.9,y.current))}function I(e,t){let r=-1,n=400;for(let a=0;a<c.length;a++){if(!V.current.has(c[a].g))continue;let i=E[3*a]-e,s=E[3*a+1]-t,l=i*i+s*s,o=Math.max(11,A(a)+6);l<o*o&&l<n&&(n=l,r=a)}return r}function Y(e){G(e.target)||(d=!0,h=!1,u=e.clientX,g=e.clientY,r.classList.add("dragging"),r.setPointerCapture(e.pointerId))}function $(e){if(d){let t=e.clientX-u,r=e.clientY-g;Math.abs(t)+Math.abs(r)>3&&(h=!0),w.current+=.0055*t,j.current=Math.max(-1.1,Math.min(.15,j.current-.003*r)),u=e.clientX,g=e.clientY}else!function(e){let n=t.getBoundingClientRect(),a=I(e.clientX-n.left,e.clientY-n.top);if(a!==m.current)if(m.current=a,a>=0){R(a);let t=r.getBoundingClientRect();P({x:e.clientX-t.left+16,y:e.clientY-t.top+16})}else R(-1);else if(a>=0){let t=r.getBoundingClientRect(),n=e.clientX-t.left+16,a=e.clientY-t.top+16;n+290>i-8&&(n=e.clientX-t.left-290-16),a+100>o-8&&(a=e.clientY-t.top-100-16),P({x:n,y:a})}v.current=m.current>=0||f.current>=0||x?0:18e-5}(e)}function q(e){let n,a;d=!1,r.classList.remove("dragging"),h||(n=t.getBoundingClientRect(),(a=I(e.clientX-n.left,e.clientY-n.top))<0?J():U(a,!0))}function X(){m.current=-1,R(-1)}function F(e){G(e.target)||(e.preventDefault(),y.current=Math.max(.5,Math.min(4,y.current*Math.exp(-(.0016*e.deltaY)))))}function Z(e){B.set(e.pointerId,[e.clientX,e.clientY])}function T(e){if(B.has(e.pointerId)&&B.set(e.pointerId,[e.clientX,e.clientY]),2===B.size){let[e,t]=[...B.values()],r=Math.hypot(e[0]-t[0],e[1]-t[1]);L&&(y.current=Math.max(.5,Math.min(4,y.current*r/L))),L=r,d=!1}}function H(e){B.delete(e.pointerId),B.size<2&&(L=0)}x&&(k.current=1,v.current=0),r.addEventListener("pointerdown",Y),r.addEventListener("pointermove",$),r.addEventListener("pointerup",q),r.addEventListener("pointerleave",X),r.addEventListener("wheel",F,{passive:!1}),r.addEventListener("pointerdown",Z),r.addEventListener("pointermove",T),r.addEventListener("pointerup",H);let O=document.getElementById("card"),W=document.getElementById("legend");function G(e){return!!e&&e instanceof Node&&!!(O&&O.contains(e)||W&&W.contains(e))}let K=performance.now(),_=K;return D(),e=requestAnimationFrame(function t(r){x||(k.current=Math.min(1.02,(r-K)/2800*1.02));let s=Math.min(64,r-_);if(_=r,w.current+=v.current*s,null!==N.current){let e=((N.current-w.current+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;w.current+=.12*e,null!==M.current&&(j.current+=(M.current-j.current)*.12),null!==z.current&&(y.current+=(z.current-y.current)*.12),.008>Math.abs(e)&&(N.current=null,M.current=null,z.current=null)}!function(){n.setTransform(a,0,0,a,0,0),n.clearRect(0,0,i,o),function(){let e=Math.cos(w.current),t=Math.sin(w.current),r=Math.cos(j.current),n=Math.sin(j.current),a=.52*i,s=.52*o,l=Math.min(i/1500,o/1780)*y.current;for(let i=0;i<c.length;i++){let o=c[i],p=o.x*e+o.z*t,d=-o.x*t+o.z*e,h=o.py,u=h*r-d*n,g=1400/(1400+(h*n+d*r)*l*1.6);E[3*i]=a+p*l*g,E[3*i+1]=s-u*l*g,E[3*i+2]=g}}();let e=!!b.current;for(let t=0;t<p.length;t++){let r,a=p[t],i=a[0],s=a[1];if(!V.current.has(c[i].g)||!V.current.has(c[s].g)||!x&&(c[i].appear>k.current||c[s].appear>k.current))continue;let l=null,o=1;e?b.current.edges.has(t)?(r=.75,l=C[s],o=1.6):r=.04:r=a[2]?.1:.05;let d=(E[3*i+2]+E[3*s+2])/2;n.strokeStyle=l?`rgba(${l},${r})`:`rgba(150,165,205,${r*d})`,n.lineWidth=o,n.beginPath(),n.moveTo(E[3*i],E[3*i+1]),n.lineTo(E[3*s],E[3*s+1]),n.stroke()}for(let t of(S.sort((e,t)=>E[3*e+2]-E[3*t+2]),S)){let r=c[t];if(!V.current.has(r.g)||!x&&r.appear>k.current)continue;let a=!e||b.current.nodes.has(t),i=t===f.current||t===m.current,s=1;e&&!a&&(s=.1);let l=E[3*t],o=E[3*t+1],p=E[3*t+2],d=A(t)*(i?1.6:1),h=C[t],u=s*(.55+.45*Math.min(1,p*p));i||e&&a?(n.shadowColor=`rgb(${h})`,n.shadowBlur=i?18:9):n.shadowBlur=0,n.fillStyle=`rgba(${h},${u})`,n.beginPath(),n.arc(l,o,d,0,6.2832),n.fill(),n.shadowBlur=0,n.strokeStyle=`rgba(8,10,18,${.5*s})`,n.lineWidth=1,n.beginPath(),n.arc(l,o,d,0,6.2832),n.stroke(),i&&(n.strokeStyle="rgba(255,255,255,.95)",n.lineWidth=1.6,n.beginPath(),n.arc(l,o,d+2.5,0,6.2832),n.stroke())}}(),e=requestAnimationFrame(t)}),window.addEventListener("resize",D),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",D),r.removeEventListener("pointerdown",Y),r.removeEventListener("pointermove",$),r.removeEventListener("pointerup",q),r.removeEventListener("pointerleave",X),r.removeEventListener("wheel",F),r.removeEventListener("pointerdown",Z),r.removeEventListener("pointermove",T),r.removeEventListener("pointerup",H)}},[c,p,d,o,J,U]),(0,t.jsxs)("div",{ref:s,className:"knowledge-graph-wrap","aria-label":"Marble 开放技能分类法的 3D 知识图谱",children:[(0,t.jsx)("canvas",{ref:l,className:"knowledge-graph-canvas"}),(0,t.jsx)("div",{className:"kg-logo","aria-label":"Marble",children:(0,t.jsx)("svg",{viewBox:"0 0 1055.73 252",width:"132",height:"31.5",fill:"#fff",children:(0,t.jsx)("path",{d:"M230.38,73.11v178.89h-61.81V109.43h-22.34v142.57h-61.81V109.43h-22.61v142.57H0V73.11C0,32.73,32.73,0,73.11,0c15.66,0,30.18,4.93,42.08,13.32C127.09,4.93,141.6,0,157.26,0c40.38,0,73.11,32.73,73.11,73.11ZM886.77,2h-75.94v250h122.01v-65.9h-46.07V2ZM1035.78,182.14c-8.97,0-16.24-7.27-16.24-16.24s7.27-16.24,16.24-16.24h7.86v-45.32h-5.13c-8.97,0-16.24-7.27-16.24-16.24s7.27-16.24,16.24-16.24h13.73V2h-27.61c-50.84,0-92.05,41.21-92.05,92.05,0,11.61,2.16,22.72,6.08,32.95-3.92,10.23-6.08,21.34-6.08,32.95,0,50.84,41.21,92.05,92.05,92.05h31.1v-69.86h-19.95ZM805.94,173.38c0,43.42-35.2,78.62-78.62,78.62h-106.17V2h67.95c14.25,0,27.44,4.54,38.22,12.23,16.76,11.95,27.71,31.54,27.71,53.7,0,10.64-2.54,20.69-7.01,29.59,33.38,9.08,57.93,39.6,57.93,75.86ZM701.51,66.49c0-6.66-5.4-12.06-12.06-12.06s-12.06,5.4-12.06,12.06,5.4,12.06,12.06,12.06,12.06-5.4,12.06-12.06ZM740.28,167.88c0-10.7-8.68-19.38-19.38-19.38s-19.38,8.68-19.38,19.38,8.68,19.38,19.38,19.38,19.38-8.68,19.38-19.38ZM429.2,92.91v159.09h-61.81v-65.9h-62.21v65.9h-61.81V92.91C243.38,41.6,284.98,0,336.29,0s92.91,41.6,92.91,92.91ZM321.64,94.87c0,8.61,6.98,15.58,15.58,15.58s15.58-6.98,15.58-15.58-6.98-15.58-15.58-15.58-15.58,6.98-15.58,15.58ZM608.15,252h-67.42v-65.9h-22.61v65.9h-75.93V2h75.93c50.82,0,92.02,41.2,92.02,92.01,0,30.33-14.68,57.23-37.32,74h35.33v83.99ZM513.82,81.24c0,8.56,6.94,15.5,15.5,15.5s15.5-6.94,15.5-15.5-6.94-15.5-15.5-15.5-15.5,6.94-15.5,15.5Z"})})}),(0,t.jsxs)("div",{className:"kg-head",children:[(0,t.jsxs)("h1",{children:["一个孩子所学的一切",(0,t.jsx)("span",{className:"kg-dot",children:"."})]}),(0,t.jsx)("p",{className:"kg-kicker",children:"小学的开放知识图谱，基于美国和英国课程体系构建。"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:c.length})," 个概念和 ",(0,t.jsx)("b",{children:p.length})," 条前置关系链， 从第一个词到代数。每条链路都说明了什么必须先学，以及为什么。",(0,t.jsx)("b",{children:"点击任意圆点"}),"，查看学习者在掌握它之前必须先掌握什么。"]}),(0,t.jsx)("p",{className:"kg-ctx",children:"由我们的 AI 智能体从 7 个课程框架中整合而成，经团队审核， 现已开源，供任何人在此基础上构建。"}),(0,t.jsxs)("div",{className:"kg-ctas",children:[(0,t.jsxs)("a",{className:"kg-btn",href:"https://github.com/withmarbleapp/os-taxonomy",target:"_blank",rel:"noopener",children:[(0,t.jsx)("svg",{viewBox:"0 0 16 16",width:"15",height:"15","aria-hidden":"true",children:(0,t.jsx)("path",{fill:"currentColor",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}),"在 GitHub 上查看"]}),(0,t.jsx)("span",{className:"kg-lic",children:"开放数据 · ODbL 1.0"})]})]}),(0,t.jsxs)("div",{id:"legend",className:"kg-legend","aria-label":"Subjects (click to filter)",children:[(0,t.jsx)("div",{className:"lg-title",children:"学科 · 点击切换"}),(0,t.jsx)("div",{className:"lg-chips",children:o.map((e,r)=>(0,t.jsxs)("div",{className:`lg-chip ${A.has(r)?"":"off"}`,tabIndex:0,role:"button","aria-pressed":A.has(r),onClick:()=>Q(r),onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),Q(r))},children:[(0,t.jsx)("span",{className:"lg-swatch",style:{background:n[r]}}),(0,t.jsx)("span",{className:"lg-name",children:i(e)}),(0,t.jsx)("span",{className:"lg-count mono",children:h[r]})]},r))})]}),H&&(0,t.jsxs)("div",{className:`kg-tip ${C>=0?"on":""}`,style:{left:Y.x,top:Y.y},role:"tooltip",children:[(0,t.jsxs)("div",{className:"tmeta",children:[(0,t.jsx)("span",{className:"tsw",style:{background:H.col}}),(0,t.jsxs)("span",{className:"tts",children:[H.dm," ",a," 适合年龄 ",H.a]})]}),(0,t.jsx)("div",{className:"ttl",children:H.t}),(0,t.jsx)("div",{className:"tq",children:H.q?i(H.q):""})]}),(0,t.jsxs)("div",{id:"card",className:`kg-card ${S>=0?"on":""}`,role:"dialog","aria-label":"已选概念",children:[(0,t.jsxs)("div",{className:"cbar",children:[(0,t.jsxs)("button",{className:`back ${$>0?"on":""}`,"aria-label":"返回上一个概念",onClick:_,children:[(0,t.jsx)("span",{"aria-hidden":"true",children:"←"})," 返回"]}),(0,t.jsx)("span",{className:"sp"}),(0,t.jsx)("button",{className:"close","aria-label":"清除选择",onClick:J,children:"×"})]}),O&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"cmeta",children:[(0,t.jsx)("span",{className:"csw",style:{background:O.col}}),(0,t.jsxs)("span",{className:"cs",children:[O.dm," ",a," 适合年龄 ",O.a]})]}),(0,t.jsx)("div",{className:"ctl",children:O.t}),(0,t.jsx)("div",{className:"cq",children:O.q?i(O.q):""}),(0,t.jsxs)("div",{className:"big",children:[(0,t.jsx)("span",{className:"n mono",children:W}),(0,t.jsx)("span",{className:"u",children:"个前置知识（总计）"})]}),(0,t.jsx)("div",{className:"sub",children:W>0?"学习者在掌握此概念之前必须先掌握的一切，可一直追溯到底。":"这是一个起点，没有任何前置知识要求。"}),(0,t.jsxs)("div",{className:"sec sec-pre",children:[(0,t.jsxs)("div",{className:"seclabel",children:["直接建立在"," ",(0,t.jsx)("span",{className:"k mono",children:X.length?X.length:""})]}),(0,t.jsx)("div",{className:"rows rows-pre",children:0===X.length?(0,t.jsx)("div",{className:"empty",children:"暂无"}):X.slice().sort((e,t)=>c[e].a-c[t].a).map(e=>(0,t.jsxs)("button",{className:"row",onClick:()=>U(e,!0),children:[(0,t.jsx)("span",{className:"rdot",style:{background:c[e].col}}),(0,t.jsx)("span",{className:"rt",children:i(c[e].t)}),(0,t.jsxs)("span",{className:"ra mono",children:["适合年龄 ",c[e].a]})]},e))})]}),(0,t.jsxs)("div",{className:"sec sec-next",children:[(0,t.jsxs)("div",{className:"seclabel",children:["解锁下一步"," ",(0,t.jsx)("span",{className:"k mono",children:Z.length?Z.length:""})]}),(0,t.jsx)("div",{className:"rows rows-next",children:0===Z.length?(0,t.jsx)("div",{className:"empty",children:"暂无"}):Z.slice().sort((e,t)=>c[e].a-c[t].a).map(e=>(0,t.jsxs)("button",{className:"row",onClick:()=>U(e,!0),children:[(0,t.jsx)("span",{className:"rdot",style:{background:c[e].col}}),(0,t.jsx)("span",{className:"rt",children:i(c[e].t)}),(0,t.jsxs)("span",{className:"ra mono",children:["适合年龄 ",c[e].a]})]},e))})]})]})]}),(0,t.jsxs)("div",{className:"kg-hint",children:[(0,t.jsx)("b",{children:"拖拽"}),"旋转 · ",(0,t.jsx)("b",{children:"滚轮"}),"缩放 ·"," ",(0,t.jsx)("b",{children:"点击"}),"圆点，然后跟随其前置路径"]}),(0,t.jsxs)("div",{className:"kg-footer",children:["本网站使用的课程分类数据来源于 Marble Skill Taxonomy(v1) · ©️ Generative Spark, Inc.(Marble) ··"," ",(0,t.jsx)("a",{href:"https://withmarble.com",target:"_blank",rel:"noopener",children:"https://withmarble.com"})," ","·· 根据 ODbL 1.0（数据库）和 CC BY-SA 4.0（内容）协议授权。"]}),(0,t.jsx)("style",{children:`
        .knowledge-graph-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          background: radial-gradient(110% 85% at 50% 115%, rgba(45,60,120,.22), transparent 55%), var(--bg);
          overflow: hidden;
          color: var(--ink);
          font-family: var(--font-inter), ui-rounded, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
          cursor: grab;
          user-select: none;
          touch-action: none;
        }
        .knowledge-graph-wrap.dragging {
          cursor: grabbing;
        }
        .knowledge-graph-canvas {
          position: absolute;
          inset: 0;
          display: block;
        }

        .kg-logo {
          position: absolute;
          top: 26px;
          left: 30px;
          z-index: 5;
        }
        .kg-logo svg {
          display: block;
        }

        .kg-head {
          position: absolute;
          top: calc(50% - 110px);
          transform: translateY(-50%);
          left: 30px;
          max-width: min(720px, 80vw);
          z-index: 5;
          pointer-events: none;
        }
        .kg-head h1 {
          font-family: var(--font-eb-garamond), Georgia, serif;
          font-size: clamp(60px, 7.6vw, 100px);
          line-height: 1.04;
          margin: 0 0 16px;
          font-weight: 500;
          letter-spacing: .002em;
          text-wrap: balance;
          color: #fff;
        }
        .kg-dot {
          color: #FF3B30;
        }
        .kg-kicker {
          font-size: 13.5px;
          line-height: 1.55;
          color: #fff;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .kg-head p {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.55;
          color: #C6CDE0;
          max-width: 46ch;
        }
        .kg-head p b {
          color: #fff;
          font-weight: 700;
        }
        .kg-ctx {
          margin-top: 10px;
          font-size: 12.5px !important;
          color: #98A0B8 !important;
          max-width: 44ch !important;
        }
        .kg-ctas {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          pointer-events: auto;
        }
        .kg-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid rgba(130,145,190,.35);
          color: #EDEFF7;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .01em;
          background: rgba(20,24,38,.6);
          transition: background .15s, border-color .15s;
        }
        .kg-btn:hover {
          background: rgba(130,145,190,.18);
          border-color: rgba(130,145,190,.6);
        }
        .kg-btn svg {
          display: block;
        }
        .kg-lic {
          font-size: 11px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #646C84;
          font-weight: 600;
        }

        .kg-legend {
          position: absolute;
          left: 30px;
          bottom: 24px;
          z-index: 5;
          background: var(--panel);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--stroke);
          border-radius: 20px;
          padding: 12px 13px;
          max-height: 46vh;
          overflow-y: auto;
        }
        .lg-title {
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--faint);
          margin: 1px 4px 6px;
          font-weight: 600;
        }
        .lg-chips {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .lg-chip {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 3.5px 7px;
          border-radius: 8px;
          cursor: pointer;
          transition: background .15s, opacity .15s;
          min-width: 230px;
        }
        .lg-chip:hover {
          background: rgba(130,145,190,.09);
        }
        .lg-chip.off {
          opacity: .32;
        }
        .lg-swatch {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex: 0 0 auto;
        }
        .lg-name {
          font-size: 12.5px;
          font-weight: 550;
          flex: 1;
          white-space: nowrap;
        }
        .lg-count {
          font-size: 11.5px;
          color: var(--mut);
        }

        .kg-tip {
          position: absolute;
          z-index: 9;
          pointer-events: none;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity .12s, transform .12s;
          max-width: 290px;
          background: rgba(10,13,22,.95);
          border: 1px solid var(--stroke);
          border-radius: 16px;
          padding: 12px 14px;
          box-shadow: 0 18px 50px rgba(0,0,0,.55);
        }
        .kg-tip.on {
          opacity: 1;
          transform: translateY(0);
        }
        .tmeta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--mut);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .tsw {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .ttl {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 7px;
          letter-spacing: -.01em;
        }
        .tq {
          font-size: 13px;
          line-height: 1.5;
          color: #D3D9E8;
        }

        .kg-card {
          position: absolute;
          right: 26px;
          top: 26px;
          z-index: 8;
          width: 328px;
          max-height: calc(100vh - 52px);
          overflow-y: auto;
          overscroll-behavior: contain;
          background: var(--panel);
          backdrop-filter: blur(13px);
          -webkit-backdrop-filter: blur(13px);
          border: 1px solid var(--stroke);
          border-radius: 20px;
          padding: 16px 18px 18px;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity .18s, transform .18s;
          pointer-events: none;
        }
        .kg-card.on {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .cbar {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 20px;
          margin-bottom: 8px;
        }
        .back {
          border: 1px solid var(--stroke);
          background: transparent;
          color: var(--mut);
          cursor: pointer;
          height: 24px;
          padding: 0 10px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 600;
          display: none;
          align-items: center;
          gap: 5px;
          letter-spacing: .02em;
        }
        .back.on {
          display: inline-flex;
        }
        .back:hover {
          color: var(--ink);
          background: rgba(130,145,190,.12);
        }
        .sp {
          flex: 1;
        }
        .cmeta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--mut);
          margin-bottom: 7px;
          font-weight: 600;
        }
        .csw {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex: 0 0 auto;
        }
        .ctl {
          font-size: 19px;
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -.02em;
          margin-bottom: 9px;
        }
        .cq {
          font-size: 13px;
          line-height: 1.5;
          color: #D3D9E8;
          margin-bottom: 14px;
        }
        .big {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 3px;
        }
        .big .n {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -.03em;
          line-height: 1;
        }
        .big .u {
          font-size: 12.5px;
          color: var(--mut);
          font-weight: 600;
        }
        .sub {
          font-size: 12px;
          color: #AEB6CC;
          line-height: 1.5;
        }
        .sec {
          margin-top: 15px;
        }
        .seclabel {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--faint);
          font-weight: 600;
          margin-bottom: 7px;
        }
        .seclabel .k {
          color: var(--mut);
        }
        .rows {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .row {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 9px;
          padding: 6px 8px;
          color: var(--ink);
        }
        .row:hover {
          background: rgba(130,145,190,.10);
          border-color: var(--stroke);
        }
        .rdot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          flex: 0 0 auto;
        }
        .rt {
          flex: 1;
          font-size: 12.5px;
          line-height: 1.25;
          font-weight: 550;
        }
        .ra {
          font-size: 11px;
          color: var(--faint);
          flex: 0 0 auto;
        }
        .empty {
          font-size: 12px;
          color: var(--faint);
          font-style: italic;
          padding: 2px 2px;
        }
        .close {
          position: absolute;
          top: 12px;
          right: 13px;
          width: 24px;
          height: 24px;
          border-radius: 7px;
          border: 1px solid var(--stroke);
          background: transparent;
          color: var(--mut);
          cursor: pointer;
          font-size: 15px;
          line-height: 1;
          display: grid;
          place-items: center;
        }
        .close:hover {
          color: var(--ink);
          background: rgba(130,145,190,.1);
        }

        .kg-hint {
          position: absolute;
          bottom: 26px;
          right: 26px;
          z-index: 5;
          font-size: 11.5px;
          color: var(--faint);
          text-align: right;
          line-height: 1.7;
          pointer-events: none;
        }
        .kg-hint b {
          color: var(--mut);
          font-weight: 600;
        }

        .kg-footer {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          font-size: 10.5px;
          color: var(--faint);
          text-align: center;
          line-height: 1.6;
          pointer-events: none;
          white-space: nowrap;
        }
        .kg-footer a {
          color: var(--mut);
          text-decoration: none;
          pointer-events: auto;
        }
        .kg-footer a:hover {
          color: var(--ink);
          text-decoration: underline;
        }

        @media (max-width: 720px) {
          .kg-logo {
            top: 16px;
            left: 18px;
          }
          .kg-head {
            left: 18px;
          }
          .kg-legend {
            left: 14px;
            bottom: 14px;
            max-height: 34vh;
          }
          .lg-chip {
            min-width: 170px;
          }
          .kg-card {
            right: 14px;
            top: auto;
            bottom: 14px;
            width: auto;
            left: 14px;
            max-width: none;
          }
          .kg-hint {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
          }
        }

        button:focus-visible,
        .lg-chip:focus-visible {
          outline: 2px solid var(--red);
          outline-offset: 2px;
        }
      `})]})}])}]);