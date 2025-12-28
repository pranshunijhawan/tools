import{j as e,m as C,A as U}from"./vendor-animation-IVPYdfZu.js";import{a as sa,r as h,L as ca,B as Fs,R as Bs,b as Tt,N as Ms,u as Ps,c as Es}from"./vendor-react-DST-UJPA.js";import{f as Ns,d as o,m as kt,l as Je}from"./vendor-styles-CTnQ9FWC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();var so,Ba=sa;so=Ba.createRoot,Ba.hydrateRoot;const co=h.createContext({isDark:!0,toggleTheme:()=>{}}),zs=({children:t})=>{const[n,a]=h.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),h.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),c=l=>{localStorage.getItem("theme")||a(l.matches)};return i.addEventListener("change",c),()=>i.removeEventListener("change",c)},[]);const r=()=>a(!n);return e.jsx(co.Provider,{value:{isDark:n,toggleTheme:r},children:t})},la=()=>{const t=h.useContext(co);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},lo=h.createContext(null),Qn="tools-auth-session",er="tools-webauthn-credential",Rs=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Ws=async()=>{if(!Rs())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},tr=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},Hs=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},Ys=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},Vs=({children:t})=>{const[n,a]=h.useState(!1),[r,i]=h.useState(!0),[c,l]=h.useState(!1),d=h.useRef(!1),p=async()=>{try{const f={challenge:tr(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:tr(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},j=await navigator.credentials.create({publicKey:f});return j?(localStorage.setItem(er,Hs(j.rawId)),!0):!1}catch(x){return console.error("Registration failed:",x),!1}},s=async()=>{try{const x=localStorage.getItem(er),j={challenge:tr(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...x&&{allowCredentials:[{type:"public-key",id:Ys(x),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:j})}catch(x){return console.error("Authentication failed:",x),!1}},u=h.useCallback(async()=>{i(!0),l(!1);const x=sessionStorage.getItem(Qn);if(x)try{const{timestamp:j}=JSON.parse(x);if(Date.now()-j<24*60*60*1e3){a(!0),i(!1);return}}catch{}if(!await Ws()){a(!0),sessionStorage.setItem(Qn,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const j=localStorage.getItem(er);let k=!1;j?k=await s():k=await p(),k?(a(!0),sessionStorage.setItem(Qn,JSON.stringify({timestamp:Date.now()}))):l(!0)}catch{l(!0)}i(!1)},[]);h.useEffect(()=>{d.current||(d.current=!0,u())},[u]);const g=h.useCallback(()=>{u()},[u]);return e.jsx(lo.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:c,retryAuth:g},children:t})},Us=()=>{const t=h.useContext(lo);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},qs=Ns`
  /* CSS Custom Properties */
  :root {
    /* Colors - Dark Mode (Default) */
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-tertiary: #111111;
    --bg-card: rgba(255, 255, 255, 0.02);
    
    --text-primary: rgba(255, 255, 255, 0.87);
    --text-secondary: rgba(255, 255, 255, 0.60);
    --text-tertiary: rgba(255, 255, 255, 0.38);
    
    --accent: #2A9D8F;
    --accent-hover: #3BB4A5;
    --accent-subtle: rgba(42, 157, 143, 0.15);
    --accent-rgb: 42, 157, 143;
    
    --blue: #4361A5;
    --blue-rgb: 67, 97, 165;
    --cyan: #3BB4B1;
    --light-blue: #7BA7D9;
    
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.15);
    
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-bg-hover: rgba(255, 255, 255, 0.10);
    --glass-border: rgba(255, 255, 255, 0.10);
    --glass-highlight: rgba(255, 255, 255, 0.15);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.32);
    --specular-highlight: transparent;
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.32);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.4);
    
    /* Gradients */
    --gradient: linear-gradient(135deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%);
    --gradient-horizontal: linear-gradient(90deg, #2A9D8F 0%, #3BB4B1 35%, #4361A5 70%, #7BA7D9 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(42, 157, 143, 0.15) 0%, rgba(67, 97, 165, 0.15) 100%);
    
    /* Glass */
    --glass-blur: 40px;
    --glass-blur-secondary: 24px;
    --glass-saturation: 180%;
    
    /* Timing */
    --timing-micro: 100ms;
    --timing-small: 200ms;
    --timing-medium: 300ms;
    --timing-large: 500ms;
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-emphasized: cubic-bezier(0.0, 0, 0.2, 1);
    
    /* Radius */
    --radius-xs: 4px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;
    
    /* Space */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    --space-4xl: 80px;
    --space-5xl: 120px;
  }
  
  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f7;
    --bg-tertiary: #e8e8ed;
    --bg-card: rgba(0, 0, 0, 0.02);
    
    --text-primary: rgba(0, 0, 0, 0.87);
    --text-secondary: rgba(0, 0, 0, 0.60);
    --text-tertiary: rgba(0, 0, 0, 0.38);
    
    --accent: #238076;
    --accent-hover: #1a6b63;
    --accent-subtle: rgba(35, 128, 118, 0.15);
    --accent-rgb: 35, 128, 118;
    
    --blue: #3a5491;
    --blue-rgb: 58, 84, 145;
    --cyan: #2f9d9a;
    --light-blue: #5a8cc7;
    
    --border: rgba(0, 0, 0, 0.08);
    --border-hover: rgba(0, 0, 0, 0.15);
    
    --glass-bg: rgba(255, 255, 255, 0.72);
    --glass-bg-hover: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(0, 0, 0, 0.08);
    --glass-highlight: rgba(255, 255, 255, 0.5);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    --specular-highlight: transparent;
    --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    --card-shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.12);
  }

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 100vw;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    max-width: 100vw;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  /* Focus States */
  :focus-visible {
    outline: none;
    box-shadow: 
      0 0 0 2px var(--bg-primary),
      0 0 0 4px var(--accent),
      0 0 12px rgba(var(--accent-rgb), 0.3);
    border-radius: var(--radius-sm);
  }

  /* Selection */
  ::selection {
    background: rgba(var(--accent-rgb), 0.3);
    color: var(--text-primary);
  }

  /* Hide scrollbar but keep scroll functionality */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  *::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }

  /* Gradient Text Utility */
  .gradient-text {
    background: var(--gradient);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .gradient-text-animated {
    animation: gradientFlow 4s ease infinite;
  }

  /* Keyframe Animations */
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes liquidShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes rotateGradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(3deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  @keyframes pulseRing {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2.5); opacity: 0; }
  }

  /* Accessibility */
  @media (prefers-reduced-transparency: reduce) {
    :root {
      --glass-bg: rgba(20, 20, 20, 0.98);
      --glass-blur: 0px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Mobile Blur Performance */
  @media (max-width: 640px) {
    :root {
      --glass-blur: 20px;
      --glass-blur-secondary: 12px;
    }
  }

  /* Skip Link */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 12px 24px;
    border-radius: var(--radius-md);
    z-index: 10000;
    transition: top var(--timing-small) var(--ease-standard);
  }

  .skip-link:focus {
    top: 20px;
  }
`,Gs=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,Ks=o.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Js=()=>{const{isDark:t}=la();return e.jsx(Gs,{children:e.jsx(Ks,{$isDark:t})})},Xs=o(C.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,Zs=o.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 8px 12px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border-radius: var(--radius-2xl);
  border: 1px solid var(--glass-border);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 4px 24px -4px rgba(0, 0, 0, 0.4),
    0 8px 48px -8px rgba(42, 157, 143, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  pointer-events: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
  }
`,Qs=o(ca)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,ec=o.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,tc=o.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,nc=o(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border: none;
  transition: 
    background var(--timing-small) var(--ease-standard),
    color var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
    color: var(--text-primary);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,rc=o(C.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,ac=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),ic=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),oc=()=>{const{isDark:t,toggleTheme:n}=la();return e.jsx(Xs,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(Zs,{children:[e.jsx(Qs,{to:"/","aria-label":"Go to homepage",children:e.jsx(ec,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(tc,{}),e.jsx(nc,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(U,{mode:"wait",children:e.jsx(rc,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(ic,{}):e.jsx(ac,{})},t?"moon":"sun")})})]})})},sc=o(C.div)`
  position: relative;
`,cc=o(ca)`
  display: block;
  text-decoration: none;
  color: inherit;
`,uo=o(C.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 180px;

  /* Top specular highlight */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
    border-radius: 50%;
  }

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.12) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-medium) var(--ease-standard);
    pointer-events: none;
  }

  &:hover {
    background: var(--glass-bg-hover);
    box-shadow: var(--card-shadow-hover);
  }

  &:hover::after {
    opacity: 1;
    animation: liquidShimmer 1.5s ease infinite;
  }
`,lc=o(C.div)`
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--gradient-subtle);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  position: relative;
  
  /* Glow effect */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    background: var(--gradient);
    border-radius: inherit;
    opacity: 0;
    filter: blur(12px);
    transition: opacity var(--timing-medium) var(--ease-standard);
    z-index: -1;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--accent);
  }

  ${uo}:hover &::before {
    opacity: 0.3;
  }
`,dc=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,uc={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},pc={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},xc=({title:t,icon:n,to:a})=>e.jsx(sc,{variants:uc,whileHover:"hover",whileTap:"tap",children:e.jsx(cc,{to:a,children:e.jsxs(uo,{variants:pc,children:[e.jsx(lc,{children:n}),e.jsx(dc,{children:t})]})})}),hc=o.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  padding-top: calc(var(--space-2xl) + 80px);
  padding-bottom: calc(var(--space-2xl) + 80px);
  box-sizing: border-box;

  @media (max-width: 1023px) {
    padding: var(--space-xl);
    padding-top: var(--space-xl);
    padding-bottom: calc(var(--space-xl) + 80px);
  }
`,gc=o(C.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  width: 100%;
  max-width: 280px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 520px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 780px;
  }

  @media (min-width: 1280px) {
    gap: var(--space-xl);
    max-width: 840px;
  }
`,fc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},mc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),vc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),yc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),bc=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(mc,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:e.jsx(vc,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(yc,{}),to:"/canvas-manager"}],jc=()=>e.jsx(hc,{children:e.jsx(gc,{variants:fc,initial:"hidden",animate:"visible",children:bc.map(t=>e.jsx(xc,{title:t.title,icon:t.icon,to:t.to},t.id))})}),po=o.div`
  width: 100%;
  max-width: ${({$maxWidth:t="wide"})=>{switch(t){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;o.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Dn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Ma=75e3,mt=4,wc=12e5,kc=6e4,Pa=5e6,Ea=10,Cc=12,Sc=1800;function Xe(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let i="";const c=r.slice(-3),l=r.slice(0,-3);if(l.length>0){const d=[];let p=l;for(;p.length>0;)p.length>=2?(d.unshift(p.slice(-2)),p=p.slice(0,-2)):(d.unshift(p),p="");i=d.join(",")+","+c}else i=c;return(n?"-":"")+i}function E(t){return"₹"+Xe(t)}function N(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[i,c]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+Xe(parseInt(i))+"."+c}function Na(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:Xe(t)}function Dc(t){for(let n=Dn.length-1;n>=0;n--)if(t>Dn[n].from)return Dn[n].rate;return 0}function Tc(t){const n=[];let a=t,r=0;for(const i of Dn){const c=i.from,d=(i.to??1/0)-c;if(a<=0){n.push({from:c,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const p=Math.min(a,d),s=p*i.rate/100;n.push({from:c,to:i.to,rate:i.rate,taxableInSlab:p>0?p:0,taxInSlab:s}),r+=s,a-=p}return{slabs:n,totalTax:r}}function Ic(t,n){if(n>Pa){const r=t*(1+Ea/100)*(1+mt/100),i=n-Pa,l=(t+i)*(1+mt/100),d=l<r,p=Math.min(r,l),s=p/(1+mt/100),u=s-t,g=p-s;return{surchargeApplicable:!0,surchargeRate:Ea,surchargeAmount:u,marginalReliefApplied:d,taxAfterSurcharge:s,cess:g,totalTax:p}}else{const a=t*(mt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function za(t,n,a,r,i,c,l){const d=t*n/100,p=t-d;let s=0;i==="percentage"?s=t*c/100:i==="amount"&&(s=c);const u=t+s;let g=0,x=0;a&&(r==="percentage"?(g=d*Cc/100,x=g):(g=Sc*12,x=g));const f=t-x,j=l.map(re=>({name:re.name,amount:re.amount*12})),k=j.reduce((re,ie)=>re+ie.amount,0),S=Math.max(0,f-Ma),{slabs:I,totalTax:v}=Tc(S);let w=0,_=v;S<=wc&&(w=Math.min(v,kc),_=Math.max(0,v-w));const{surchargeApplicable:A,surchargeRate:D,surchargeAmount:F,marginalReliefApplied:B,taxAfterSurcharge:y,cess:b,totalTax:T}=Ic(_,S),O=g+x,P=T,$=g+T+k,m=f-g-T-k,L=m/12,M=f>0?T/f*100:0,G=Dc(S);let V=0,K=s;if(s>0&&G>0){let re=s*G/100;A&&(re=re*(1+D/100)),V=re*(1+mt/100),K=s-V}const H=m+K,ue=H/12;return{baseSalary:t,basicSalary:d,hra:p,bonus:s,totalEarnings:u,employeePF:g,employerPF:x,grossSalary:f,standardDeduction:Ma,additionalDeductions:j,totalAdditionalDeductions:k,taxableIncome:S,slabs:I,taxBeforeSurcharge:v,surchargeApplicable:A,surchargeRate:D,surchargeAmount:F,marginalReliefApplied:B,taxAfterSurcharge:y,cessRate:mt,cess:b,totalTax:T,rebate87A:w,totalPFDeduction:O,totalTaxDeduction:P,totalDeductions:$,netSalaryYearly:m,netSalaryMonthly:L,effectiveTaxRate:M,bonusTaxRate:G,bonusTaxAmount:V,bonusAfterTax:K,totalIncomeYearly:H,totalIncomeMonthly:ue}}function $c(t){const n=za(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const i=t.baseSalary*(1+r/100);a=za(i,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const da="taxCalculatorInput";function Lc(t){localStorage.setItem(da,JSON.stringify(t))}function _c(){localStorage.removeItem(da)}function xo(){const t=localStorage.getItem(da);if(t)try{return JSON.parse(t)}catch{return null}return null}const Ac={financialYear:"FY 2025-26"},Oc=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,It=o.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,$t=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,Lt=o.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:t})=>t||"var(--accent)"};
  }
`,_t=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Fc=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,nt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ra=o.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ze=o.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,nr=o.div`
  position: relative;

  &::before {
    content: '₹';
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-left: 30px;
  }
`,rr=o.div`
  position: relative;

  &::after {
    content: '%';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    font-weight: 500;
    color: var(--text-tertiary);
    pointer-events: none;
  }

  input {
    padding-right: 32px;
  }
`,Wa=o.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,At=o(C.button)`
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:t})=>t?"var(--accent)":"var(--border)"};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
`,Bc=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ar=o(C.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,ir=o(C.button)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.1);
  border: none;
  border-radius: 10px;
  color: #ef4444;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`,Mc=o(C.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: transparent;
  border: 1px dashed var(--border);
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: rgba(var(--accent-rgb), 0.05);
    border-color: var(--accent);
  }
`,Pc=o.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,Ec=o(C.button)`
  flex: 1;
  height: 48px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Nc=o(C.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,zc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Rc=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Wc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Hc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),Yc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Vc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),or=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),In={type:"spring",stiffness:300,damping:30,mass:.8},Uc={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:In}},qc={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...In},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...In},opacity:{duration:.1}}}},Gc={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:In},exit:{opacity:0,x:-20,transition:{duration:.15}}};function sr(t){const n=t.replace(/[^\d]/g,"");return n?Xe(parseInt(n)):""}function nn(t){return parseInt(t.replace(/,/g,""))||0}const Kc=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,i]=h.useState(""),[c,l]=h.useState("50"),[d,p]=h.useState("percentage"),[s,u]=h.useState("none"),[g,x]=h.useState(""),[f,j]=h.useState([]),[k,S]=h.useState(""),[I,v]=h.useState(!1),w=h.useRef(!1);h.useEffect(()=>{const m=xo();m&&(i(Xe(m.baseSalary)),l(m.basicPercentage.toString()),p(m.pfType),u(m.bonusType),x(m.bonusValue>0?m.bonusType==="amount"?Xe(m.bonusValue):m.bonusValue.toString():""),j(m.additionalDeductions.map(L=>({name:L.name,amount:Xe(L.amount)}))),S(m.hikePercentage>0?m.hikePercentage.toString():"")),v(!0)},[]),h.useEffect(()=>{I&&a&&r&&!w.current&&(w.current=!0,setTimeout(()=>{b()},100))},[I,a,r]);const _=m=>{i(sr(m))},A=m=>{x(sr(m))},D=(m,L)=>{const M=[...f];M[m].amount=sr(L),j(M)},F=()=>{j([...f,{name:"",amount:""}])},B=m=>{j(f.filter((L,M)=>M!==m))},y=(m,L)=>{const M=[...f];M[m].name=L,j(M)},b=()=>{const m={baseSalary:nn(r),basicPercentage:parseFloat(c)||50,calculatePF:!0,pfType:d,bonusType:s,bonusValue:s==="amount"?nn(g):parseFloat(g)||0,additionalDeductions:f.filter(L=>L.name&&L.amount).map(L=>({name:L.name,amount:nn(L.amount)})),hikePercentage:parseFloat(k)||0};Lc(m),t(m)},T=()=>{i(""),l("50"),p("percentage"),u("none"),x(""),j([]),S(""),_c(),n==null||n()},P=nn(r)>0,$=r||f.length>0||s!=="none"||k;return e.jsxs(Oc,{variants:Uc,initial:"hidden",animate:"visible",children:[e.jsxs(It,{children:[e.jsxs($t,{children:[e.jsx(Lt,{$color:"#10b981",children:e.jsx(zc,{})}),e.jsx(_t,{children:"Salary Details"})]}),e.jsxs(Fc,{children:[e.jsxs(nt,{children:[e.jsx(Ra,{children:"Yearly CTC *"}),e.jsx(nr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:m=>_(m.target.value)})})]}),e.jsxs(nt,{children:[e.jsx(Ra,{children:"Basic %"}),e.jsx(rr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"50",value:c,onChange:m=>l(m.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(It,{children:[e.jsxs($t,{children:[e.jsx(Lt,{$color:"#3b82f6",children:e.jsx(Rc,{})}),e.jsx(_t,{children:"Provident Fund"})]}),e.jsxs(Wa,{children:[e.jsx(At,{$active:d==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(At,{$active:d==="flat",onClick:()=>p("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(It,{children:[e.jsxs($t,{children:[e.jsx(Lt,{$color:"#f59e0b",children:e.jsx(Wc,{})}),e.jsx(_t,{children:"Bonus (Optional)"})]}),e.jsxs(Wa,{children:[e.jsx(At,{$active:s==="none",onClick:()=>u("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(At,{$active:s==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(At,{$active:s==="amount",onClick:()=>u("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(U,{initial:!1,children:s!=="none"&&e.jsx(C.div,{initial:"hidden",animate:"visible",exit:"exit",variants:qc,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(ar,{children:[e.jsx(nt,{style:{flex:1},children:s==="percentage"?e.jsx(rr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:m=>x(m.target.value)})}):e.jsx(nr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:m=>A(m.target.value)})})}),e.jsx(U,{children:g&&e.jsx(ir,{onClick:()=>x(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(or,{})})})]})},"bonus-input")})]}),e.jsxs(It,{children:[e.jsxs($t,{children:[e.jsx(Lt,{$color:"#ec4899",children:e.jsx(Hc,{})}),e.jsx(_t,{children:"Monthly Deductions"})]}),e.jsxs(Bc,{children:[e.jsx(U,{mode:"popLayout",children:f.map((m,L)=>e.jsxs(ar,{variants:Gc,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(nt,{style:{flex:1},children:e.jsx(ze,{type:"text",placeholder:"Name (e.g., Cab)",value:m.name,onChange:M=>y(L,M.target.value)})}),e.jsx(nt,{style:{flex:1},children:e.jsx(nr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"Amount",value:m.amount,onChange:M=>D(L,M.target.value)})})}),e.jsx(ir,{onClick:()=>B(L),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(or,{})})]},L))}),e.jsxs(Mc,{onClick:F,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(Vc,{}),"Add Deduction"]})]})]}),e.jsxs(It,{children:[e.jsxs($t,{children:[e.jsx(Lt,{$color:"#8b5cf6",children:e.jsx(Yc,{})}),e.jsx(_t,{children:"Hike / Appraisal"})]}),e.jsxs(ar,{children:[e.jsx(nt,{style:{flex:1},children:e.jsx(rr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:k,onChange:m=>S(m.target.value),min:"0",max:"200"})})}),e.jsx(U,{children:k&&e.jsx(ir,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(or,{})})})]})]}),e.jsxs(Pc,{children:[e.jsx(Ec,{onClick:b,disabled:!P,whileHover:P?{scale:1.02}:{},whileTap:P?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(U,{children:$&&e.jsx(Nc,{onClick:T,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},Jc=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Re=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,We=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,He=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ye=o.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:t})=>t||"var(--accent)"};
  }
`,Ve=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Ue=o.div`
  padding: 16px;
`,Ot=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,we=o.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,cr=o(C.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,lr=o.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,dr=o.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,rt=o.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,Xc=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,at=o.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,it=o.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,ot=o.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,st=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Le=o.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,te=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,ne=o.span`
  font-size: 14px;
  font-weight: ${({$bold:t})=>t?"600":"400"};
  color: ${({$bold:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,R=o.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:t,$negative:n})=>t?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,le=o.div`
  text-align: right;
  flex-shrink: 0;
`,de=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Zc=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ha=o(C.div)`
  display: grid;
  grid-template-columns: 1fr 50px 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  
  ${({$header:t})=>t&&`
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  `}

  @media (max-width: 480px) {
    grid-template-columns: 1fr 40px 1fr;
    
    & > *:nth-child(3) {
      display: none;
    }
  }
`,Ae=o.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Qc=o(C.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,el=o.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,tl=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,nl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,rl=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,al=o.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,il=o.span`
  font-size: 12px;
  color: var(--text-secondary);
`,ol=o.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,Ft=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,ke=o.div`
  padding: 14px;
  background: ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Ce=o.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Se=o.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,Bt=o.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,Ya=o(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,Va=o.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,sl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),cl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),ll=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),dl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ua=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),ul=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),pl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},qe={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},xl=({breakdown:t})=>{const[n,a]=h.useState("monthly"),r=n==="monthly"?1/12:1,i=x=>x===0?"#10b981":x<=10?"#3BB4B1":x<=20?"#4361A5":x<=25?"#6B8DD6":"#7BA7D9",c=Math.max(...t.slabs.map(x=>x.taxInSlab),1),d=(()=>{const x=n==="monthly"?.08333333333333333:1,f=[{label:"In-Hand",value:t.netSalaryYearly*x,color:"#10b981"},{label:"Tax",value:t.totalTax*x,color:"#4361A5"},{label:"PF",value:t.employeePF*x,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&f.push({label:"Other",value:t.totalAdditionalDeductions*x,color:"#7BA7D9"}),f})(),p=d.reduce((x,f)=>x+f.value,0),s=[];t.surchargeApplicable&&s.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&s.push(`<strong>Section 87A rebate</strong> of ${E(t.rebate87A)} applied`),t.effectiveTaxRate>0&&s.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const u=!!t.postHike,g=t.bonus>0;return e.jsxs(Jc,{variants:pl,initial:"hidden",animate:"visible",children:[u&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#3b82f6",children:e.jsx(Ua,{})}),e.jsx(Ve,{children:"Base Salary (CTC)"})]}),e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(Ue,{children:e.jsxs(Ft,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Se,{children:E(t.baseSalary)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike"}),e.jsx(Se,{children:E(t.postHike.baseSalary)}),e.jsxs(Bt,{children:["+",E(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#10b981",children:e.jsx(sl,{})}),e.jsx(Ve,{children:"In-Hand Salary"})]}),e.jsxs(Ot,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(dr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(Ue,{children:u?e.jsxs(Ft,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Se,{children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsxs(Ce,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Se,{children:N(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Bt,{children:["+",E(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(cr,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(lr,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#f59e0b",children:e.jsx(dl,{})}),e.jsx(Ve,{children:"Bonus"})]}),u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(Ue,{children:[u?e.jsxs(e.Fragment,{children:[e.jsxs(Ft,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current Gross"}),e.jsx(Se,{children:E(t.bonus)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Gross"}),e.jsx(Se,{children:E(t.postHike.bonus)}),e.jsxs(Bt,{children:["+",E(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Le,{}),e.jsxs(Ft,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current In-Hand"}),e.jsx(Se,{children:N(t.bonusAfterTax)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike In-Hand"}),e.jsx(Se,{children:N(t.postHike.bonusAfterTax)}),e.jsxs(Bt,{children:["+",E(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(cr,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:E(t.bonus)}),e.jsx(lr,{children:"Gross Bonus (before tax)"}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsxs(ne,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(R,{$negative:!0,children:["-",N(t.bonusTaxAmount)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(R,{$highlight:!0,children:N(t.bonusAfterTax)})]})]}),e.jsx(Le,{}),e.jsx(Ya,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(Va,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#8b5cf6",children:e.jsx(Ua,{})}),e.jsx(Ve,{children:"Total Combined Income"})]}),e.jsxs(Ot,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx(we,{children:"Yearly"})]})]}),e.jsxs(Ue,{children:[u?e.jsxs(Ft,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current Total"}),e.jsx(Se,{children:N(t.totalIncomeYearly)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Total"}),e.jsx(Se,{children:N(t.postHike.totalIncomeYearly)}),e.jsxs(Bt,{children:["+",E(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(cr,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:N(t.totalIncomeYearly)}),e.jsx(lr,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Base In-Hand (Yearly)"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.netSalaryYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.netSalaryYearly)]})]}):e.jsx(R,{children:N(t.netSalaryYearly)})]}),e.jsxs(te,{children:[e.jsx(ne,{children:"Bonus In-Hand"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.bonusAfterTax)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.bonusAfterTax)]})]}):e.jsx(R,{children:N(t.bonusAfterTax)})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Total Combined"}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(t.totalIncomeYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.totalIncomeYearly)]})]}):e.jsx(R,{$highlight:!0,children:N(t.totalIncomeYearly)})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#ec4899",children:e.jsx(ll,{})}),e.jsx(Ve,{children:"Summary"})]}),e.jsxs(Ot,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(dr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(Xc,{children:[e.jsxs(at,{children:[e.jsx(it,{children:"Gross Salary"}),e.jsx(ot,{children:E(t.grossSalary*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.grossSalary*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Total Tax"}),e.jsx(ot,{children:N(t.totalTax*r)}),u&&e.jsxs(st,{children:["→ ",N(t.postHike.totalTax*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Employee PF"}),e.jsx(ot,{children:E(t.employeePF*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.employeePF*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Employer PF"}),e.jsx(ot,{children:E(t.employerPF*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.employerPF*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Total PF"}),e.jsx(ot,{children:E((t.employeePF+t.employerPF)*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Eff. Tax Rate"}),e.jsxs(ot,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),u&&e.jsxs(st,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Le,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(el,{children:d.map((x,f)=>e.jsx(tl,{$color:x.color,initial:{width:0},animate:{width:`${x.value/p*100}%`},transition:{delay:.3+f*.1,duration:.5}},f))}),e.jsx(nl,{children:d.map((x,f)=>e.jsxs(rl,{children:[e.jsx(al,{$color:x.color}),e.jsx(il,{children:x.label}),e.jsx(ol,{children:E(x.value)})]},f))}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:s.map((x,f)=>e.jsx(Ya,{children:e.jsx(Va,{dangerouslySetInnerHTML:{__html:x}})},f))})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#10b981",children:e.jsx(ul,{})}),e.jsx(Ve,{children:"Breakdown"})]}),e.jsxs(Ot,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(dr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(te,{children:[e.jsx(ne,{children:"Base Salary (CTC)"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.baseSalary*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.baseSalary*r)]})]}):e.jsx(R,{children:E(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Employer PF"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",E(t.employerPF*r)]}),e.jsxs(de,{children:["→ -",E(t.postHike.employerPF*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",E(t.employerPF*r)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Gross Salary"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.grossSalary*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.grossSalary*r)]})]}):e.jsx(R,{children:E(t.grossSalary*r)})]}),e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Standard Deduction"}),e.jsxs(R,{$negative:!0,children:["-",E(t.standardDeduction*r)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Taxable Income"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.taxableIncome*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.taxableIncome*r)]})]}):e.jsx(R,{children:E(t.taxableIncome*r)})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Income Tax"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",N(t.totalTax*r)]}),e.jsxs(de,{children:["→ -",N(t.postHike.totalTax*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",N(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Employee PF"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",E(t.employeePF*r)]}),e.jsxs(de,{children:["→ -",E(t.postHike.employeePF*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",E(t.employeePF*r)]})]}),t.additionalDeductions.map((x,f)=>e.jsxs(te,{children:[e.jsxs(ne,{children:["Less: ",x.name]}),e.jsxs(R,{$negative:!0,children:["-",E(x.amount*r)]})]},f)),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsxs(ne,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(R,{$highlight:!0,children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#3b82f6",children:e.jsx(cl,{})}),e.jsx(Ve,{children:"Tax Slabs"})]}),e.jsxs(Ot,{children:[e.jsx(we,{children:Ac.financialYear}),u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(Ue,{children:[e.jsxs(Zc,{children:[e.jsxs(Ha,{$header:!0,children:[e.jsx(Ae,{children:"Slab"}),e.jsx(Ae,{$align:"center",children:"Rate"}),e.jsx(Ae,{$align:"right",children:"Amount"}),e.jsx(Ae,{$align:"right",children:"Tax"})]}),e.jsx(U,{children:t.slabs.map((x,f)=>e.jsxs(Ha,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:f*.03},children:[e.jsxs(Ae,{children:[Na(x.from)," - ",Na(x.to),x.taxableInSlab>0&&e.jsx(Qc,{$color:i(x.rate),initial:{width:0},animate:{width:`${Math.max(x.taxInSlab/c*100,8)}%`},transition:{delay:.2+f*.03,duration:.4}})]}),e.jsxs(Ae,{$align:"center",$highlight:x.rate===0,children:[x.rate,"%"]}),e.jsx(Ae,{$align:"right",$muted:x.taxableInSlab===0,children:x.taxableInSlab>0?E(x.taxableInSlab):"-"}),e.jsx(Ae,{$align:"right",$muted:x.taxInSlab===0,children:x.taxInSlab>0?E(x.taxInSlab):"-"})]},f))})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Tax Before Surcharge"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.taxBeforeSurcharge)}),e.jsxs(de,{children:["→ ",N(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(R,{children:N(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Section 87A Rebate"}),e.jsxs(R,{$negative:!0,children:["-",E(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(te,{children:[e.jsxs(ne,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx(we,{$color:"#f59e0b",children:"Marginal Relief"})]}),u&&t.postHike.surchargeApplicable?e.jsxs(le,{children:[e.jsx(R,{children:N(t.surchargeAmount)}),e.jsxs(de,{children:["→ ",N(t.postHike.surchargeAmount)]})]}):e.jsx(R,{children:N(t.surchargeAmount)})]}),e.jsxs(te,{children:[e.jsxs(ne,{children:["Cess (",t.cessRate,"%)"]}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.cess)}),e.jsxs(de,{children:["→ ",N(t.postHike.cess)]})]}):e.jsx(R,{children:N(t.cess)})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Total Tax"}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(t.totalTax)}),e.jsxs(de,{children:["→ ",N(t.postHike.totalTax)]})]}):e.jsx(R,{$highlight:!0,children:N(t.totalTax)})]})]})]})]})},hl=o(C.div)`
  min-height: 100vh;
  padding-top: var(--space-lg);
  padding-bottom: calc(var(--space-3xl) + 80px);
  overflow-x: hidden;
  max-width: 100vw;

  @media (max-width: 1023px) {
    padding-bottom: calc(var(--space-2xl) + 80px);
  }

  @media (max-width: 640px) {
    padding-top: var(--space-md);
    padding-bottom: calc(var(--space-xl) + 100px);
  }
`,gl=o.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: var(--space-xl);
    align-items: start;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 420px 1fr;
  }
`,fl=o(C.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,ml=o(C.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,vl={type:"spring",stiffness:300,damping:30,mass:.8},yl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},qa={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:vl}},bl=()=>{const[t,n]=h.useState(null),[a,r]=h.useState(!1);h.useEffect(()=>{const l=xo();l&&l.baseSalary>0&&r(!0)},[]);const i=h.useCallback(l=>{const d=$c(l);n(d),window.innerWidth<1024&&setTimeout(()=>{var p;(p=document.getElementById("results"))==null||p.scrollIntoView({behavior:"smooth"})},100)},[]),c=h.useCallback(()=>{n(null)},[]);return e.jsx(hl,{variants:yl,initial:"hidden",animate:"visible",children:e.jsx(po,{$maxWidth:"wide",children:e.jsxs(gl,{children:[e.jsx(fl,{variants:qa,children:e.jsx(Kc,{onCalculate:i,onReset:c,autoCalculate:a})}),e.jsx(ml,{id:"results",variants:qa,children:t&&e.jsx(xl,{breakdown:t},"results")})]})})})},Me=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"},{id:"liquid-fund",name:"Liquid Fund",type:"liquid_fund",bank:"hdfc",color:"#8b5cf6"}],ho="expense-manager-transactions",go="expense-manager-initial-balances",fo="expense-manager-initial-cc-bills",mo="expense-manager-cc-limits",vo="expense-manager-categories";function An(t,n){return t===void 0?{amount:0,type:"billed",setupDate:n}:typeof t=="number"?{amount:t,type:"billed",setupDate:n}:t}const yo={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function rn(t){localStorage.setItem(ho,JSON.stringify(t))}function jl(){const t=localStorage.getItem(ho);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Ga(t){localStorage.setItem(go,JSON.stringify(t))}function wl(){const t=localStorage.getItem(go);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Ka(t){localStorage.setItem(fo,JSON.stringify(t))}function kl(){const t=localStorage.getItem(fo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Ja(t){localStorage.setItem(mo,JSON.stringify(t))}function Cl(){const t=localStorage.getItem(mo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Xa(t){localStorage.setItem(vo,JSON.stringify(t))}function Sl(){const t=localStorage.getItem(vo);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function me(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function bo(t){return new Date(t+"T00:00:00")}function Dl(t){return t===me(new Date)}function Tl(t,n){if(!t.statementDate)return"";const a=bo(n),r=a.getFullYear(),i=a.getMonth(),c=a.getDate();let l=r,d=i;c<t.statementDate&&(d-=1,d<0&&(d=11,l-=1));const p=new Date(l,d,t.statementDate);return me(p)}function Za(t,n){const a=yo[t];if(!a)return"";const r=bo(n),i=r.getFullYear(),c=r.getMonth(),l=r.getDate();let d=i,p=c;l<a&&(p-=1,p<0&&(p=11,d-=1));const s=new Date(d,p,a);return me(s)}function Il(t,n,a,r){const i=Za(t.id,a),c=n.filter(v=>v.date<=a&&v.accountId===t.id),l=c.filter(v=>v.type==="credit_card_spend"&&v.date<i).reduce((v,w)=>v+w.amount,0),d=c.filter(v=>v.type==="credit_card_spend"&&v.date>=i).reduce((v,w)=>v+w.amount,0),p=c.filter(v=>v.type==="cc_payment").reduce((v,w)=>v+w.amount,0),s=An(r[t.id],a);let u=0,g=0;if(s.amount>0){const v=Za(t.id,s.setupDate),w=i===v,_=i>v&&new Date(i).getTime()-new Date(v).getTime()<45*24*60*60*1e3;s.type==="unbilled"?w?g=s.amount:_&&(u=s.amount):(w||_)&&(u=s.amount)}const x=d+g,f=l+u,j=x;let k=f,S=j,I=p;if(I>0){const v=Math.min(I,k);k-=v,I-=v}return I>0&&(S=Math.max(0,S-I)),{account:t,billDue:k,unbilled:S,totalOutstanding:k+S,cycleStart:i,cycleSpending:x}}function $l(t,n,a,r,i={}){const c=n.filter(d=>d.date<=a&&(d.accountId===t.id||d.linkedAccountId===t.id));let l=0;if(t.type==="bank"){l=r[t.id]||0;for(const d of c)d.accountId===t.id&&(d.type==="bank_credit"?l+=d.amount:d.type==="bank_debit"&&(l-=d.amount)),d.linkedAccountId===t.id&&d.type==="cc_payment"&&(l-=d.amount),d.linkedAccountId===t.id&&d.type==="liquid_fund_credit"&&(l-=d.amount),d.linkedAccountId===t.id&&d.type==="liquid_fund_debit"&&(l+=d.amount);return{account:t,balance:l}}else if(t.type==="liquid_fund"){l=r[t.id]||0;for(const d of c)d.accountId===t.id&&(d.type==="liquid_fund_credit"?l+=d.amount:d.type==="liquid_fund_debit"&&(l-=d.amount));return{account:t,balance:l}}else{l=-An(i[t.id],a).amount;for(const x of c)x.accountId===t.id&&(x.type==="credit_card_spend"?l-=x.amount:x.type==="cc_payment"&&(l+=x.amount));const s=Tl(t,a),g=c.filter(x=>x.date>s&&x.accountId===t.id&&x.type==="credit_card_spend").reduce((x,f)=>x+f.amount,0);return{account:t,balance:l,pendingBill:g,totalOutstanding:Math.abs(Math.min(0,l))}}}function Ll(t,n,a,r={}){return Me.map(i=>$l(i,t,n,a,r))}function jo(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function _l(t,n,a,r,i,c,l){return{id:jo(),date:i,type:t,accountId:n,amount:a,description:r,linkedAccountId:c,categoryId:l,createdAt:new Date().toISOString()}}function Y(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Rt(t){return Me.find(n=>n.id===t)}function wo(){return Me.filter(t=>t.type==="bank")}function On(){return Me.filter(t=>t.type==="credit_card")}function ko(){return Me.find(t=>t.type==="liquid_fund")}function Al(t,n,a,r={},i=[]){const c={version:"1.2",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n,initialCCBills:a,ccLimits:r,categories:i};return JSON.stringify(c,null,2)}function Ol(t,n,a,r={},i=[]){const c=Al(t,n,a,r,i),l=new Blob([c],{type:"application/json"}),d=URL.createObjectURL(l),p=document.createElement("a"),s=new Date().toISOString().split("T")[0];p.href=d,p.download=`expense-backup-${s}.json`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(d)}function Fl(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null||typeof n.initialCCBills!="object"||n.initialCCBills===null||n.ccLimits!==void 0&&(typeof n.ccLimits!="object"||n.ccLimits===null))return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Bl(t){try{const n=JSON.parse(t);return Fl(n)?n:null}catch{return null}}function Co(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(a=Co(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function Fn(){for(var t,n,a=0,r="",i=arguments.length;a<i;a++)(t=arguments[a])&&(n=Co(t))&&(r&&(r+=" "),r+=n);return r}const Ml=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const i=Object.getOwnPropertyDescriptor(t,a),c=Object.getOwnPropertyDescriptor(n,a);!Pl(i,c)&&r||Object.defineProperty(t,a,c)},Pl=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},El=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},Nl=(t,n)=>`/* Wrapped ${t}*/
${n}`,zl=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Rl=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Wl=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,i=Nl.bind(null,r,n.toString());Object.defineProperty(i,"name",Rl);const{writable:c,enumerable:l,configurable:d}=zl;Object.defineProperty(t,"toString",{value:i,writable:c,enumerable:l,configurable:d})};function Hl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const i of Reflect.ownKeys(n))Ml(t,n,i,a);return El(t,n),Wl(t,n,r),t}const an=2147483647,Yl=new WeakMap,ur=new WeakMap,Vl=new WeakMap;function Ul(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function So(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>an)throw new TypeError(`The \`maxAge\` option cannot exceed ${an}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...c){var u;const l=n?n(c):c[0],d=Ul(a,l);if(d)return d.data;const p=t.apply(this,c),s=typeof r=="function"?r(...c):r;if(s!==void 0&&s!==Number.POSITIVE_INFINITY){if(!Number.isFinite(s))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(s<=0)return p;if(s>an)throw new TypeError(`The \`maxAge\` function result cannot exceed ${an}.`)}if(a.set(l,{data:p,maxAge:s===void 0||s===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+s}),s!==void 0&&s!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var f;a.delete(l),(f=ur.get(i))==null||f.delete(g)},s);(u=g.unref)==null||u.call(g);const x=ur.get(i)??new Set;x.add(g),ur.set(i,x)}return p};return Hl(i,t,{ignoreNonConfigurable:!0}),Yl.set(i,a),Vl.set(i,n??(c=>c[0])),i}function ql(t){return typeof t=="string"}function Gl(t,n,a){return a.indexOf(t)===n}function Kl(t){return t.toLowerCase()===t}function Qa(t){return t.indexOf(",")===-1?t:t.split(",")}function Vr(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return Vr(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return Vr(a)}if(t.indexOf("-")===-1||!Kl(t))return t;var i=t.split("-"),c=i[0],l=i[1],d=l===void 0?"":l;return"".concat(c,"-").concat(d.toUpperCase())}function Jl(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,i=n.fallbackLocale,c=i===void 0?"en-US":i,l=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],p=[],s=0,u=d;s<u.length;s++){var g=u[s];p=p.concat(Qa(g))}var x=navigator.language,f=x&&Qa(x);l=l.concat(p,f)}return r&&l.push(c),l.filter(ql).map(Vr).filter(Gl)}var Xl=So(Jl,{cacheKey:JSON.stringify});function Zl(t){return Xl(t)[0]||null}var Do=So(Zl,{cacheKey:JSON.stringify});function _e(t,n,a){return function(i,c=a){const l=t(i)+c;return n(l)}}function Vt(t){return function(a){return new Date(t(a).getTime()-1)}}function Ut(t,n){return function(r){return[t(r),n(r)]}}function q(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function Pe(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function Bn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function Ct(t){const n=q(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Ql=_e(q,Ct,-100),To=_e(q,Ct,100),ua=Vt(To),ed=_e(q,ua,-100),Io=Ut(Ct,ua);function Ee(t){const n=q(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const $o=_e(q,Ee,-10),pa=_e(q,Ee,10),Mn=Vt(pa),Lo=_e(q,Mn,-10),_o=Ut(Ee,Mn);function St(t){const n=q(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Ao=_e(q,St,-1),xa=_e(q,St,1),Pn=Vt(xa),Oo=_e(q,Pn,-1),td=Ut(St,Pn);function ha(t,n){return function(r,i=n){const c=q(r),l=Pe(r)+i,d=new Date;return d.setFullYear(c,l,1),d.setHours(0,0,0,0),t(d)}}function Qe(t){const n=q(t),a=Pe(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Fo=ha(Qe,-1),ga=ha(Qe,1),qt=Vt(ga),Bo=ha(qt,-1),nd=Ut(Qe,qt);function rd(t,n){return function(r,i=n){const c=q(r),l=Pe(r),d=Bn(r)+i,p=new Date;return p.setFullYear(c,l,d),p.setHours(0,0,0,0),t(p)}}function Gt(t){const n=q(t),a=Pe(t),r=Bn(t),i=new Date;return i.setFullYear(n,a,r),i.setHours(0,0,0,0),i}const ad=rd(Gt,1),fa=Vt(ad),id=Ut(Gt,fa);function Mo(t){return Bn(qt(t))}var ae={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},od={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ma=[0,1,2,3,4,5,6],pr=new Map;function sd(t){return function(a,r){var i=a||Do();pr.has(i)||pr.set(i,new Map);var c=pr.get(i);return c.has(t)||c.set(t,new Intl.DateTimeFormat(i||void 0,t).format),c.get(t)(r)}}function cd(t){var n=new Date(t);return new Date(n.setHours(12))}function et(t){return function(n,a){return sd(t)(n,cd(a))}}var ld={day:"numeric"},dd={day:"numeric",month:"long",year:"numeric"},ud={month:"long"},pd={month:"long",year:"numeric"},xd={weekday:"short"},hd={weekday:"long"},gd={year:"numeric"},fd=et(ld),md=et(dd),vd=et(ud),Po=et(pd),yd=et(xd),bd=et(hd),En=et(gd),jd=ma[0],wd=ma[5],ei=ma[6];function Wt(t,n){n===void 0&&(n=ae.ISO_8601);var a=t.getDay();switch(n){case ae.ISO_8601:return(a+6)%7;case ae.ISLAMIC:return(a+1)%7;case ae.HEBREW:case ae.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function kd(t){var n=Ct(t);return q(n)}function Cd(t){var n=Ee(t);return q(n)}function Ur(t,n){n===void 0&&(n=ae.ISO_8601);var a=q(t),r=Pe(t),i=t.getDate()-Wt(t,n);return new Date(a,r,i)}function Sd(t,n){n===void 0&&(n=ae.ISO_8601);var a=n===ae.GREGORY?ae.GREGORY:ae.ISO_8601,r=Ur(t,n),i=q(t)+1,c,l;do c=new Date(i,0,a===ae.ISO_8601?4:1),l=Ur(c,n),i-=1;while(t<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function Ze(t,n){switch(t){case"century":return Ct(n);case"decade":return Ee(n);case"year":return St(n);case"month":return Qe(n);case"day":return Gt(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Dd(t,n){switch(t){case"century":return Ql(n);case"decade":return $o(n);case"year":return Ao(n);case"month":return Fo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Eo(t,n){switch(t){case"century":return To(n);case"decade":return pa(n);case"year":return xa(n);case"month":return ga(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Td(t,n){switch(t){case"decade":return $o(n,-100);case"year":return Ao(n,-10);case"month":return Fo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Id(t,n){switch(t){case"decade":return pa(n,100);case"year":return xa(n,10);case"month":return ga(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function No(t,n){switch(t){case"century":return ua(n);case"decade":return Mn(n);case"year":return Pn(n);case"month":return qt(n);case"day":return fa(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function $d(t,n){switch(t){case"century":return ed(n);case"decade":return Lo(n);case"year":return Oo(n);case"month":return Bo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ld(t,n){switch(t){case"decade":return Lo(n,-100);case"year":return Oo(n,-10);case"month":return Bo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function ti(t,n){switch(t){case"century":return Io(n);case"decade":return _o(n);case"year":return td(n);case"month":return nd(n);case"day":return id(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function _d(t,n,a){var r=[n,a].sort(function(i,c){return i.getTime()-c.getTime()});return[Ze(t,r[0]),No(t,r[1])]}function zo(t,n,a){return a.map(function(r){return(n||En)(t,r)}).join(" – ")}function Ad(t,n,a){return zo(t,n,Io(a))}function Ro(t,n,a){return zo(t,n,_o(a))}function Od(t){return t.getDay()===new Date().getDay()}function Wo(t,n){n===void 0&&(n=ae.ISO_8601);var a=t.getDay();switch(n){case ae.ISLAMIC:case ae.HEBREW:return a===wd||a===ei;case ae.ISO_8601:case ae.GREGORY:return a===ei||a===jd;default:throw new Error("Unsupported calendar type.")}}var De="react-calendar__navigation";function Fd(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,i=r===void 0?Po:r,c=t.formatYear,l=c===void 0?En:c,d=t.locale,p=t.maxDate,s=t.minDate,u=t.navigationAriaLabel,g=u===void 0?"":u,x=t.navigationAriaLive,f=t.navigationLabel,j=t.next2AriaLabel,k=j===void 0?"":j,S=t.next2Label,I=S===void 0?"»":S,v=t.nextAriaLabel,w=v===void 0?"":v,_=t.nextLabel,A=_===void 0?"›":_,D=t.prev2AriaLabel,F=D===void 0?"":D,B=t.prev2Label,y=B===void 0?"«":B,b=t.prevAriaLabel,T=b===void 0?"":b,O=t.prevLabel,P=O===void 0?"‹":O,$=t.setActiveStartDate,m=t.showDoubleView,L=t.view,M=t.views,G=M.indexOf(L)>0,V=L!=="century",K=Dd(L,n),H=V?Td(L,n):void 0,ue=Eo(L,n),re=V?Id(L,n):void 0,ie=function(){if(K.getFullYear()<0)return!0;var Z=$d(L,n);return s&&s>=Z}(),W=V&&function(){if(H.getFullYear()<0)return!0;var Z=Ld(L,n);return s&&s>=Z}(),xe=p&&p<ue,Ie=V&&p&&p<re;function he(){$(K,"prev")}function pe(){$(H,"prev2")}function ve(){$(ue,"next")}function $e(){$(re,"next2")}function ye(Z){var Ne=function(){switch(L){case"century":return Ad(d,l,Z);case"decade":return Ro(d,l,Z);case"year":return l(d,Z);case"month":return i(d,Z);default:throw new Error("Invalid view: ".concat(L,"."))}}();return f?f({date:Z,label:Ne,locale:d||Do()||void 0,view:L}):Ne}function Dt(){var Z="".concat(De,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":x,className:Z,disabled:!G,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(Z,"__labelText ").concat(Z,"__labelText--from"),children:ye(n)}),m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(Z,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(Z,"__labelText ").concat(Z,"__labelText--to"),children:ye(ue)})]}):null]})}return e.jsxs("div",{className:De,children:[y!==null&&V?e.jsx("button",{"aria-label":F,className:"".concat(De,"__arrow ").concat(De,"__prev2-button"),disabled:W,onClick:pe,type:"button",children:y}):null,P!==null&&e.jsx("button",{"aria-label":T,className:"".concat(De,"__arrow ").concat(De,"__prev-button"),disabled:ie,onClick:he,type:"button",children:P}),Dt(),A!==null&&e.jsx("button",{"aria-label":w,className:"".concat(De,"__arrow ").concat(De,"__next-button"),disabled:xe,onClick:ve,type:"button",children:A}),I!==null&&V?e.jsx("button",{"aria-label":k,className:"".concat(De,"__arrow ").concat(De,"__next2-button"),disabled:Ie,onClick:$e,type:"button",children:I}):null]})}var vt=function(){return vt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vt.apply(this,arguments)},Bd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ni(t){return"".concat(t,"%")}function va(t){var n=t.children,a=t.className,r=t.count,i=t.direction,c=t.offset,l=t.style,d=t.wrap,p=Bd(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",vt({className:a,style:vt({display:"flex",flexDirection:i,flexWrap:d?"wrap":"nowrap"},l)},p,{children:h.Children.map(n,function(s,u){var g=c&&u===0?ni(100*c/r):null;return h.cloneElement(s,vt(vt({},s.props),{style:{flexBasis:ni(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function Md(t,n,a){return n&&n>t?n:a&&a<t?a:t}function Ht(t,n){return n[0]<=t&&n[1]>=t}function Pd(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function Ho(t,n){return Ht(t[0],n)||Ht(t[1],n)}function ri(t,n,a){var r=Ho(n,t),i=[];if(r){i.push(a);var c=Ht(t[0],n),l=Ht(t[1],n);c&&i.push("".concat(a,"Start")),l&&i.push("".concat(a,"End")),c&&l&&i.push("".concat(a,"BothEnds"))}return i}function Ed(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Nd(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,i="react-calendar__tile",c=[i];if(!a)return c;var l=new Date,d=function(){if(Array.isArray(a))return a;var f=t.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return ti(f,a)}();if(Ht(l,d)&&c.push("".concat(i,"--now")),!n||!Ed(n))return c;var p=function(){if(Array.isArray(n))return n;var f=t.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return ti(f,n)}();Pd(p,d)?c.push("".concat(i,"--active")):Ho(p,d)&&c.push("".concat(i,"--hasActive"));var s=ri(p,d,"".concat(i,"--range"));c.push.apply(c,s);var u=Array.isArray(n)?n:[n];if(r&&u.length===1){var g=r>p[0]?[p[0],r]:[r,p[0]],x=ri(g,d,"".concat(i,"--hover"));c.push.apply(c,x)}return c}function Nn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,i=t.dateTransform,c=t.dateType,l=t.end,d=t.hover,p=t.offset,s=t.renderTile,u=t.start,g=t.step,x=g===void 0?1:g,f=t.value,j=t.valueType,k=[],S=u;S<=l;S+=x){var I=i(S);k.push(s({classes:Nd({date:I,dateType:c,hover:d,value:f,valueType:j}),date:I}))}return e.jsx(va,{className:n,count:r,offset:p,wrap:!0,children:k})}function zn(t){var n=t.activeStartDate,a=t.children,r=t.classes,i=t.date,c=t.formatAbbr,l=t.locale,d=t.maxDate,p=t.maxDateTransform,s=t.minDate,u=t.minDateTransform,g=t.onClick,x=t.onMouseOver,f=t.style,j=t.tileClassName,k=t.tileContent,S=t.tileDisabled,I=t.view,v=h.useMemo(function(){var _={activeStartDate:n,date:i,view:I};return typeof j=="function"?j(_):j},[n,i,j,I]),w=h.useMemo(function(){var _={activeStartDate:n,date:i,view:I};return typeof k=="function"?k(_):k},[n,i,k,I]);return e.jsxs("button",{className:Fn(r,v),disabled:s&&u(s)>i||d&&p(d)<i||(S==null?void 0:S({activeStartDate:n,date:i,view:I})),onClick:g?function(_){return g(i,_)}:void 0,onFocus:x?function(){return x(i)}:void 0,onMouseOver:x?function(){return x(i)}:void 0,style:f,type:"button",children:[c?e.jsx("abbr",{"aria-label":c(l,i),children:a}):a,w]})}var qr=function(){return qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qr.apply(this,arguments)},zd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},ai="react-calendar__century-view__decades__decade";function Rd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,i=t.formatYear,c=i===void 0?En:i,l=zd(t,["classes","currentCentury","formatYear"]),d=l.date,p=l.locale,s=[];return a&&s.push.apply(s,a),s.push(ai),Ct(d).getFullYear()!==r&&s.push("".concat(ai,"--neighboringCentury")),e.jsx(zn,qr({},l,{classes:s,maxDateTransform:Mn,minDateTransform:Ee,view:"century",children:Ro(p,c,d)}))}var Gr=function(){return Gr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gr.apply(this,arguments)},ii=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Wd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,i=t.value,c=t.valueType,l=ii(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=kd(n),p=d+(r?119:99);return e.jsx(Nn,{className:"react-calendar__century-view__decades",dateTransform:Ee,dateType:"decade",end:p,hover:a,renderTile:function(s){var u=s.date,g=ii(s,["date"]);return e.jsx(Rd,Gr({},l,g,{activeStartDate:n,currentCentury:d,date:u}),u.getTime())},start:d,step:10,value:i,valueType:c})}var Kr=function(){return Kr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Kr.apply(this,arguments)};function Hd(t){function n(){return e.jsx(Wd,Kr({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var Jr=function(){return Jr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jr.apply(this,arguments)},Yd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},oi="react-calendar__decade-view__years__year";function Vd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,i=t.formatYear,c=i===void 0?En:i,l=Yd(t,["classes","currentDecade","formatYear"]),d=l.date,p=l.locale,s=[];return a&&s.push.apply(s,a),s.push(oi),Ee(d).getFullYear()!==r&&s.push("".concat(oi,"--neighboringDecade")),e.jsx(zn,Jr({},l,{classes:s,maxDateTransform:Pn,minDateTransform:St,view:"decade",children:c(p,d)}))}var Xr=function(){return Xr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xr.apply(this,arguments)},si=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Ud(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,i=t.value,c=t.valueType,l=si(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=Cd(n),p=d+(r?11:9);return e.jsx(Nn,{className:"react-calendar__decade-view__years",dateTransform:St,dateType:"year",end:p,hover:a,renderTile:function(s){var u=s.date,g=si(s,["date"]);return e.jsx(Vd,Xr({},l,g,{activeStartDate:n,currentDecade:d,date:u}),u.getTime())},start:d,value:i,valueType:c})}var Zr=function(){return Zr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zr.apply(this,arguments)};function qd(t){function n(){return e.jsx(Ud,Zr({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var Qr=function(){return Qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qr.apply(this,arguments)},Gd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},ci=function(t,n,a){if(a||arguments.length===2)for(var r=0,i=n.length,c;r<i;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return t.concat(c||Array.prototype.slice.call(n))},Kd="react-calendar__year-view__months__month";function Jd(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,i=r===void 0?vd:r,c=t.formatMonthYear,l=c===void 0?Po:c,d=Gd(t,["classes","formatMonth","formatMonthYear"]),p=d.date,s=d.locale;return e.jsx(zn,Qr({},d,{classes:ci(ci([],a,!0),[Kd],!1),formatAbbr:l,maxDateTransform:qt,minDateTransform:Qe,view:"year",children:i(s,p)}))}var ea=function(){return ea=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ea.apply(this,arguments)},li=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Xd(t){var n=t.activeStartDate,a=t.hover,r=t.value,i=t.valueType,c=li(t,["activeStartDate","hover","value","valueType"]),l=0,d=11,p=q(n);return e.jsx(Nn,{className:"react-calendar__year-view__months",dateTransform:function(s){var u=new Date;return u.setFullYear(p,s,1),Qe(u)},dateType:"month",end:d,hover:a,renderTile:function(s){var u=s.date,g=li(s,["date"]);return e.jsx(Jd,ea({},c,g,{activeStartDate:n,date:u}),u.getTime())},start:l,value:r,valueType:i})}var ta=function(){return ta=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ta.apply(this,arguments)};function Zd(t){function n(){return e.jsx(Xd,ta({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var na=function(){return na=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},na.apply(this,arguments)},Qd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},xr="react-calendar__month-view__days__day";function eu(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,i=t.currentMonthIndex,c=t.formatDay,l=c===void 0?fd:c,d=t.formatLongDate,p=d===void 0?md:d,s=Qd(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),u=s.date,g=s.locale,x=[];return r&&x.push.apply(x,r),x.push(xr),Wo(u,n)&&x.push("".concat(xr,"--weekend")),u.getMonth()!==i&&x.push("".concat(xr,"--neighboringMonth")),e.jsx(zn,na({},s,{classes:x,formatAbbr:p,maxDateTransform:fa,minDateTransform:Gt,view:"month",children:l(g,u)}))}var ra=function(){return ra=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ra.apply(this,arguments)},di=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function tu(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,i=t.showFixedNumberOfWeeks,c=t.showNeighboringMonth,l=t.value,d=t.valueType,p=di(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),s=q(n),u=Pe(n),g=i||c,x=Wt(n,a),f=g?0:x,j=(g?-x:0)+1,k=function(){if(i)return j+6*7-1;var S=Mo(n);if(c){var I=new Date;I.setFullYear(s,u,S),I.setHours(0,0,0,0);var v=7-Wt(I,a)-1;return S+v}return S}();return e.jsx(Nn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var I=new Date;return I.setFullYear(s,u,S),Gt(I)},dateType:"day",hover:r,end:k,renderTile:function(S){var I=S.date,v=di(S,["date"]);return e.jsx(eu,ra({},p,v,{activeStartDate:n,calendarType:a,currentMonthIndex:u,date:I}),I.getTime())},offset:f,start:j,value:l,valueType:d})}var Yo="react-calendar__month-view__weekdays",hr="".concat(Yo,"__weekday");function nu(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?yd:a,i=t.formatWeekday,c=i===void 0?bd:i,l=t.locale,d=t.onMouseLeave,p=new Date,s=Qe(p),u=q(s),g=Pe(s),x=[],f=1;f<=7;f+=1){var j=new Date(u,g,f-Wt(s,n)),k=c(l,j);x.push(e.jsx("div",{className:Fn(hr,Od(j)&&"".concat(hr,"--current"),Wo(j,n)&&"".concat(hr,"--weekend")),children:e.jsx("abbr",{"aria-label":k,title:k,children:r(l,j).replace(".","")})},f))}return e.jsx(va,{className:Yo,count:7,onFocus:d,onMouseOver:d,children:x})}var $n=function(){return $n=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$n.apply(this,arguments)},ui=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},pi="react-calendar__tile";function ru(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var i=t.date,c=t.onClickWeekNumber,l=t.weekNumber,d=ui(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",$n({},d,{className:pi,onClick:function(p){return c(l,i,p)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=ui(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",$n({},d,{className:pi,children:r}))}}function au(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,i=t.onMouseLeave,c=t.showFixedNumberOfWeeks,l=function(){if(c)return 6;var s=Mo(n),u=Wt(n,a),g=s-(7-u);return 1+Math.ceil(g/7)}(),d=function(){for(var s=q(n),u=Pe(n),g=Bn(n),x=[],f=0;f<l;f+=1)x.push(Ur(new Date(s,u,g+f*7),a));return x}(),p=d.map(function(s){return Sd(s,a)});return e.jsx(va,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:p.map(function(s,u){var g=d[u];if(!g)throw new Error("date is not defined");return e.jsx(ru,{date:g,onClickWeekNumber:r,weekNumber:s},s)})})}var aa=function(){return aa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},aa.apply(this,arguments)},iu=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ou(t){if(t)for(var n=0,a=Object.entries(od);n<a.length;n++){var r=a[n],i=r[0],c=r[1];if(c.includes(t))return i}return ae.ISO_8601}function su(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,i=t.showFixedNumberOfWeeks,c=t.calendarType,l=c===void 0?ou(a):c,d=t.formatShortWeekday,p=t.formatWeekday,s=t.onClickWeekNumber,u=t.showWeekNumbers,g=iu(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function x(){return e.jsx(nu,{calendarType:l,formatShortWeekday:d,formatWeekday:p,locale:a,onMouseLeave:r})}function f(){return u?e.jsx(au,{activeStartDate:n,calendarType:l,onClickWeekNumber:s,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function j(){return e.jsx(tu,aa({calendarType:l},g))}var k="react-calendar__month-view";return e.jsx("div",{className:Fn(k,u?"".concat(k,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[f(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[x(),j()]})]})})}var yt=function(){return yt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yt.apply(this,arguments)},on="react-calendar",Tn=["century","decade","year","month"],cu=["decade","year","month","day"],ya=new Date;ya.setFullYear(1,0,1);ya.setHours(0,0,0,0);var lu=new Date(864e13);function Nt(t){return t instanceof Date?t:new Date(t)}function Vo(t,n){return Tn.slice(Tn.indexOf(t),Tn.indexOf(n)+1)}function du(t,n,a){var r=Vo(n,a);return r.indexOf(t)!==-1}function ba(t,n,a){return t&&du(t,n,a)?t:a}function Uo(t){var n=Tn.indexOf(t);return cu[n]}function uu(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Nt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function qo(t,n){var a=t.value,r=t.minDate,i=t.maxDate,c=t.maxDetail,l=uu(a,n);if(!l)return null;var d=Uo(c),p=function(){switch(n){case 0:return Ze(d,l);case 1:return No(d,l);default:throw new Error("Invalid index value: ".concat(n))}}();return Md(p,r,i)}var ja=function(t){return qo(t,0)},Go=function(t){return qo(t,1)},pu=function(t){return[ja,Go].map(function(n){return n(t)})};function Ko(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,i=t.minDetail,c=t.value,l=t.view,d=ba(l,i,a),p=ja({value:c,minDate:r,maxDate:n,maxDetail:a})||new Date;return Ze(d,p)}function xu(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,i=t.defaultView,c=t.maxDate,l=t.maxDetail,d=t.minDate,p=t.minDetail,s=t.value,u=t.view,g=ba(u,p,l),x=n||a;return x?Ze(g,x):Ko({maxDate:c,maxDetail:l,minDate:d,minDetail:p,value:s||r,view:u||i})}function gr(t){return t&&(!Array.isArray(t)||t.length===1)}function sn(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var hu=h.forwardRef(function(n,a){var r=n.activeStartDate,i=n.allowPartialRange,c=n.calendarType,l=n.className,d=n.defaultActiveStartDate,p=n.defaultValue,s=n.defaultView,u=n.formatDay,g=n.formatLongDate,x=n.formatMonth,f=n.formatMonthYear,j=n.formatShortWeekday,k=n.formatWeekday,S=n.formatYear,I=n.goToRangeStartOnSelect,v=I===void 0?!0:I,w=n.inputRef,_=n.locale,A=n.maxDate,D=A===void 0?lu:A,F=n.maxDetail,B=F===void 0?"month":F,y=n.minDate,b=y===void 0?ya:y,T=n.minDetail,O=T===void 0?"century":T,P=n.navigationAriaLabel,$=n.navigationAriaLive,m=n.navigationLabel,L=n.next2AriaLabel,M=n.next2Label,G=n.nextAriaLabel,V=n.nextLabel,K=n.onActiveStartDateChange,H=n.onChange,ue=n.onClickDay,re=n.onClickDecade,ie=n.onClickMonth,W=n.onClickWeekNumber,xe=n.onClickYear,Ie=n.onDrillDown,he=n.onDrillUp,pe=n.onViewChange,ve=n.prev2AriaLabel,$e=n.prev2Label,ye=n.prevAriaLabel,Dt=n.prevLabel,Z=n.returnValue,Ne=Z===void 0?"start":Z,oe=n.selectRange,tt=n.showDoubleView,Jt=n.showFixedNumberOfWeeks,Xt=n.showNavigation,Zt=Xt===void 0?!0:Xt,Rn=n.showNeighboringCentury,Wn=n.showNeighboringDecade,be=n.showNeighboringMonth,Hn=be===void 0?!0:be,bs=n.showWeekNumbers,js=n.tileClassName,ws=n.tileContent,ks=n.tileDisabled,Yn=n.value,Sa=n.view,Da=h.useState(d),Cs=Da[0],Qt=Da[1],Ta=h.useState(null),Ss=Ta[0],Ia=Ta[1],$a=h.useState(Array.isArray(p)?p.map(function(z){return z!==null?Nt(z):null}):p!=null?Nt(p):null),Vn=$a[0],Ds=$a[1],La=h.useState(s),Ts=La[0],_a=La[1],se=r||Cs||xu({activeStartDate:r,defaultActiveStartDate:d,defaultValue:p,defaultView:s,maxDate:D,maxDetail:B,minDate:b,minDetail:O,value:Yn,view:Sa}),ce=function(){var z=function(){return oe&&gr(Vn)?Vn:Yn!==void 0?Yn:Vn}();return z?Array.isArray(z)?z.map(function(X){return X!==null?Nt(X):null}):z!==null?Nt(z):null:null}(),en=Uo(B),J=ba(Sa||Ts,O,B),je=Vo(O,B),Is=oe?Ss:null,Un=je.indexOf(J)<je.length-1,Aa=je.indexOf(J)>0,Oa=h.useCallback(function(z){var X=function(){switch(Ne){case"start":return ja;case"end":return Go;case"range":return pu;default:throw new Error("Invalid returnValue.")}}();return X({maxDate:D,maxDetail:B,minDate:b,value:z})},[D,B,b,Ne]),qn=h.useCallback(function(z,X){Qt(z);var Q={action:X,activeStartDate:z,value:ce,view:J};K&&!sn(se,z)&&K(Q)},[se,K,ce,J]),tn=h.useCallback(function(z,X){var Q=function(){switch(J){case"century":return re;case"decade":return xe;case"year":return ie;case"month":return ue;default:throw new Error("Invalid view: ".concat(J,"."))}}();Q&&Q(z,X)},[ue,re,ie,xe,J]),Gn=h.useCallback(function(z,X){if(Un){tn(z,X);var Q=je[je.indexOf(J)+1];if(!Q)throw new Error("Attempted to drill down from the lowest view.");Qt(z),_a(Q);var ge={action:"drillDown",activeStartDate:z,value:ce,view:Q};K&&!sn(se,z)&&K(ge),pe&&J!==Q&&pe(ge),Ie&&Ie(ge)}},[se,Un,K,tn,Ie,pe,ce,J,je]),Kn=h.useCallback(function(){if(Aa){var z=je[je.indexOf(J)-1];if(!z)throw new Error("Attempted to drill up from the highest view.");var X=Ze(z,se);Qt(X),_a(z);var Q={action:"drillUp",activeStartDate:X,value:ce,view:z};K&&!sn(se,X)&&K(Q),pe&&J!==z&&pe(Q),he&&he(Q)}},[se,Aa,K,he,pe,ce,J,je]),Jn=h.useCallback(function(z,X){var Q=ce;tn(z,X);var ge=oe&&!gr(Q),fe;if(oe)if(ge)fe=Ze(en,z);else{if(!Q)throw new Error("previousValue is required");if(Array.isArray(Q))throw new Error("previousValue must not be an array");fe=_d(en,Q,z)}else fe=Oa(z);var Zn=!oe||ge||v?Ko({maxDate:D,maxDetail:B,minDate:b,minDetail:O,value:fe,view:J}):null;X.persist(),Qt(Zn),Ds(fe);var As={action:"onChange",activeStartDate:Zn,value:fe,view:J};if(K&&!sn(se,Zn)&&K(As),H)if(oe){var Os=gr(fe);if(!Os)H(fe||null,X);else if(i){if(Array.isArray(fe))throw new Error("value must not be an array");H([fe||null,null],X)}}else H(fe||null,X)},[se,i,Oa,v,D,B,b,O,K,H,tn,oe,ce,en,J]);function $s(z){Ia(z)}function Xn(){Ia(null)}h.useImperativeHandle(a,function(){return{activeStartDate:se,drillDown:Gn,drillUp:Kn,onChange:Jn,setActiveStartDate:qn,value:ce,view:J}},[se,Gn,Kn,Jn,qn,ce,J]);function Fa(z){var X=z?Eo(J,se):Ze(J,se),Q=Un?Gn:Jn,ge={activeStartDate:X,hover:Is,locale:_,maxDate:D,minDate:b,onClick:Q,onMouseOver:oe?$s:void 0,tileClassName:js,tileContent:ws,tileDisabled:ks,value:ce,valueType:en};switch(J){case"century":return e.jsx(Hd,yt({formatYear:S,showNeighboringCentury:Rn},ge));case"decade":return e.jsx(qd,yt({formatYear:S,showNeighboringDecade:Wn},ge));case"year":return e.jsx(Zd,yt({formatMonth:x,formatMonthYear:f},ge));case"month":return e.jsx(su,yt({calendarType:c,formatDay:u,formatLongDate:g,formatShortWeekday:j,formatWeekday:k,onClickWeekNumber:W,onMouseLeave:oe?Xn:void 0,showFixedNumberOfWeeks:typeof Jt<"u"?Jt:tt,showNeighboringMonth:Hn,showWeekNumbers:bs},ge));default:throw new Error("Invalid view: ".concat(J,"."))}}function Ls(){return Zt?e.jsx(Fd,{activeStartDate:se,drillUp:Kn,formatMonthYear:f,formatYear:S,locale:_,maxDate:D,minDate:b,navigationAriaLabel:P,navigationAriaLive:$,navigationLabel:m,next2AriaLabel:L,next2Label:M,nextAriaLabel:G,nextLabel:V,prev2AriaLabel:ve,prev2Label:$e,prevAriaLabel:ye,prevLabel:Dt,setActiveStartDate:qn,showDoubleView:tt,view:J,views:je}):null}var _s=Array.isArray(ce)?ce:[ce];return e.jsxs("div",{className:Fn(on,oe&&_s.length===1&&"".concat(on,"--selectRange"),tt&&"".concat(on,"--doubleView"),l),ref:w,children:[Ls(),e.jsxs("div",{className:"".concat(on,"__viewContainer"),onBlur:oe?Xn:void 0,onMouseLeave:oe?Xn:void 0,children:[Fa(),tt?Fa(!0):null]})]})});const gu=kt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,fu=kt`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,mu=kt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,vu=kt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,yu=kt`
  from { opacity: 0; }
  to { opacity: 1; }
`,bu=o.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${yu} 0.15s ease-out;
`,ju=o.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?Je`animation: ${vu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${mu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?Je`animation: ${fu} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${gu} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,wu=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  overflow: hidden;

  /* React Calendar Styles */
  .react-calendar {
    width: 100%;
    background: transparent;
    border: none;
    font-family: inherit;
    padding: var(--space-sm);
  }

  /* Navigation Header */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    margin-bottom: var(--space-xs);
  }

  .react-calendar__navigation button {
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: var(--radius-md);
    cursor: pointer;
    min-width: 32px;
    transition: background 0.15s ease;

    &:hover:not(:disabled) {
      background: var(--bg-tertiary);
    }

    &:disabled {
      opacity: 0.3;
    }
  }

  .react-calendar__navigation__label {
    flex-grow: 1;
    font-weight: 600;
    font-size: 14px;
  }

  .react-calendar__navigation__arrow {
    font-size: 16px;
    color: var(--text-secondary);
  }

  /* Weekday Labels */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 6px 0;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;

    abbr {
      text-decoration: none;
    }
  }

  /* Day Tiles */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  .react-calendar__tile {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    transition: background 0.1s ease, transform 0.1s ease;

    &:hover:not(:disabled) {
      background: var(--bg-tertiary);
      transform: scale(1.05);
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    &:disabled {
      opacity: 0.3;
    }
  }

  /* Neighboring month days */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--text-tertiary);
    opacity: 0.4;
  }

  /* Today */
  .react-calendar__tile--now {
    background: rgba(var(--accent-rgb), 0.15);
    color: var(--accent);
    font-weight: 600;
  }

  /* Selected/Active Day */
  .react-calendar__tile--active {
    background: var(--accent) !important;
    color: white !important;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(var(--accent-rgb), 0.3);
  }

  /* Year/Decade/Century views */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xs);
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    aspect-ratio: auto;
    padding: 10px;
    font-size: 13px;
  }
`,Yt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:i})=>{const c=h.useRef(null),[l,d]=h.useState(!1),[p,s]=h.useState(!1),[u,g]=h.useState(!1),[x,f]=h.useState({top:0,left:0});h.useEffect(()=>{if(t&&(i!=null&&i.current)){const v=i.current.getBoundingClientRect(),w=280,_=320,A=8,F=window.innerHeight-v.bottom-A<_;g(F);let B;F?B=v.top-_-A:B=v.bottom+A;let y=v.right-w;y<8&&(y=8),y+w>window.innerWidth-8&&(y=window.innerWidth-w-8),B<8&&(B=8),f({top:B,left:y}),s(!0),d(!1)}},[t,i]);const j=h.useCallback(()=>{d(!0),setTimeout(()=>{s(!1),d(!1),n()},150)},[n]),k=h.useCallback(v=>{c.current&&!c.current.contains(v.target)&&j()},[j]);h.useEffect(()=>{if(t){const v=setTimeout(()=>{document.addEventListener("mousedown",k)},10);return()=>{clearTimeout(v),document.removeEventListener("mousedown",k)}}},[t,k]);const S=h.useCallback(v=>{v instanceof Date&&(r(me(v)),j())},[r,j]);if(!p)return null;const I=new Date(a+"T00:00:00");return sa.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(bu,{onClick:j}),e.jsx(ju,{ref:c,$isClosing:l,$openUpward:u,$top:x.top,$left:x.left,children:e.jsx(wu,{children:e.jsx(hu,{onChange:S,value:I,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(v,w)=>w.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},ku=o(C.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,Cu=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,Su=o.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background: none;
  border: none;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: var(--bg-tertiary);
  }

  &:active {
    background: var(--bg-active);
  }

  @media (max-width: 640px) {
    gap: 12px;
    padding: 8px 12px;
  }
`,Du=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,wa=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,Tu=o(wa)`
  height: 14px;
`,Iu=o(wa)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,$u=o(wa)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,Lu=o(C.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,_u=o(C.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,Au=o.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,Ou=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Fu=o(C.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Bu=o.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,Mu=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,Pu=o.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,Eu=o(C.button).attrs({type:"button"})`
  font-size: 13px;
  font-weight: 600;
  background: rgba(42, 157, 143, 0.12);
  border: none;
  color: var(--accent);
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 100px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(42, 157, 143, 0.18);
  }

  &:active {
    background: rgba(42, 157, 143, 0.24);
    transform: scale(0.97);
  }

  @media (max-width: 640px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`,Nu=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,xi=o(C.button).attrs({type:"button"})`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 50%;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--bg-active);
    transform: scale(0.94);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,zu=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),Ru=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),cn=[.25,.1,.25,1],Wu=({selectedDate:t,onDateChange:n})=>{const[a,r]=h.useState(!1),[i,c]=h.useState(1),l=h.useRef(null),d=h.useRef(t);if(d.current!==t){const v=new Date(d.current+"T00:00:00"),w=new Date(t+"T00:00:00");c(w>v?1:-1),d.current=t}const p=h.useCallback(v=>{v.preventDefault(),v.stopPropagation();const w=me(new Date),_=new Date(t+"T00:00:00"),A=new Date(w+"T00:00:00");c(A>_?1:-1),n(w)},[t,n]),s=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(-1);const w=new Date(t+"T00:00:00");w.setDate(w.getDate()-1),n(me(w))},[t,n]),u=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(1);const w=new Date(t+"T00:00:00");w.setDate(w.getDate()+1),n(me(w))},[t,n]),g=Dl(t),x=new Date(t+"T00:00:00"),f=x.getDate(),j=x.toLocaleDateString("en-US",{month:"short"}),k=x.toLocaleDateString("en-US",{weekday:"long"}),S=x.getFullYear(),I={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return e.jsxs(ku,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:cn},children:[e.jsxs(Cu,{children:[e.jsxs(Su,{ref:l,onClick:()=>r(!0),type:"button",children:[e.jsxs(Du,{children:[e.jsx(Tu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(Lu,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:cn},children:j},j)})}),e.jsx(Iu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(_u,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:cn},children:f},f)})})]}),e.jsx(Au,{}),e.jsxs(Ou,{children:[e.jsx($u,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(Fu,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:cn},children:k},k)})}),e.jsx(Bu,{children:S})]})]}),e.jsxs(Mu,{children:[e.jsx(Pu,{children:e.jsx(U,{children:!g&&e.jsx(Eu,{onClick:p,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Nu,{children:[e.jsx(xi,{onClick:s,whileTap:{scale:.95},children:e.jsx(zu,{})}),e.jsx(xi,{onClick:u,whileTap:{scale:.95},children:e.jsx(Ru,{})})]})]})]}),e.jsx(Yt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:l})]})};o(C.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-xl);
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  transition: 
    background var(--timing-medium) var(--ease-standard),
    box-shadow var(--timing-medium) var(--ease-standard);

  /* Top specular highlight */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--specular-highlight);
    pointer-events: none;
    border-radius: 50%;
  }

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity var(--timing-medium) var(--ease-standard);
    pointer-events: none;
  }

  ${({$interactive:t})=>t&&Je`
    cursor: pointer;

    &:hover {
      background: var(--glass-bg-hover);
      box-shadow: var(--card-shadow-hover);
    }

    &:hover::after {
      opacity: 1;
      animation: liquidShimmer 1.5s ease infinite;
    }
  `}
`;o(ca)`
  display: block;
  text-decoration: none;
  color: inherit;
`;o.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--radius-full);
  
  ${({$variant:t})=>t==="accent"?Je`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:Je`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const Hu=o.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,Yu=o.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,Vu=o(C.span)`
  display: inline-block;
`,Uu=o.span`
  display: inline-block;
`,qu=[.25,.1,.25,1],Gu=({value:t,className:n})=>{const a=h.useMemo(()=>t.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(Hu,{className:n,children:a.map(({char:r,key:i,isDigit:c},l)=>c?e.jsx(Yu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(Vu,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:qu},children:r},i)})},`wrapper-${l}`):e.jsx(Uu,{children:r},`static-${l}`))})},Be=h.memo(Gu);o.h1`
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;o.h1`
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;o.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;o.h3`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;o.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;o.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;o.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
`;o.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
`;o.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--text-tertiary);
`;o.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-tertiary);
`;o.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
`;o.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${({$animated:t})=>t&&`
    animation: gradientFlow 4s ease infinite;
  `}
`;const Ku=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Ju=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Xu=o.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,Zu=o.div`
  flex: 1;
  min-width: 0;
`,Qu=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,ep=o.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,tp=o.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  
  ${({$status:t})=>{switch(t){case"due":return`
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        `;case"unbilled":return`
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        `;case"clear":return`
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        `}}}
`,np=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,hi=o.div`
  text-align: ${({$align:t})=>t||"left"};
`,gi=o.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,fi=o.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,rp=o.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,ap=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,ip=o.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,op=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,sp=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,cp=o.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,lp=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,dp=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,up=o.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,pp=o(C.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,xp={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},hp=t=>{const n=xp[t];return n?e.jsx("img",{src:n,alt:`${t.toUpperCase()} Bank`}):null},gp=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),mi=[.25,.1,.25,1],fp=({detailedBalance:t,index:n=0,limit:a})=>{const{account:r,billDue:i,unbilled:c,totalOutstanding:l,cycleStart:d,cycleSpending:p}=t,s=a!==void 0&&a>0,u=s?Math.max(0,a-p):0,g=s?p/a*100:0,x=s&&p>a,f=x?"#ef4444":g>80?"#f59e0b":"#10b981",j=()=>i>0?"due":c>0?"unbilled":"clear",k=()=>{switch(j()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return e.jsxs(Ku,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:mi,delay:n*.02},children:[e.jsxs(Ju,{children:[e.jsx(Xu,{children:hp(r.bank)}),e.jsxs(Zu,{children:[e.jsxs(Qu,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),e.jsxs(ep,{children:["Cycle from ",gp(d)]})]}),e.jsx(tp,{$status:j(),children:k()})]}),e.jsxs(np,{children:[e.jsxs(hi,{children:[e.jsx(gi,{children:"Bill Due"}),e.jsx(fi,{$color:i>0?"#ef4444":"#10b981",children:e.jsx(Be,{value:Y(i)})})]}),e.jsxs(hi,{$align:"right",children:[e.jsx(gi,{children:"Unbilled"}),e.jsx(fi,{$color:c>0?"#f59e0b":"var(--text-tertiary)",children:e.jsx(Be,{value:Y(c)})})]})]}),s&&e.jsxs(rp,{children:[e.jsxs(ap,{children:[e.jsxs(sp,{children:[e.jsx(cp,{children:"Virtual Limit"}),e.jsx(lp,{children:Y(a)})]}),e.jsxs(dp,{children:[e.jsx(up,{children:x?"Over By":"Available"}),e.jsx(pp,{$color:f,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:Y(x?l-a:u)},u)]})]}),e.jsx(ip,{children:e.jsx(op,{$color:f,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:mi,delay:.1}})})]})]})},mp=h.memo(fp),vp=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),yp=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,fr=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,mr=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,vr=o.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,bp=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,jp=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,ct=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,lt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,dt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,ut=o.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 26px;
    height: 26px;
    object-fit: contain;
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${({$color:t})=>t};
  }
`,pt=o.div`
  min-width: 0;
`,xt=o.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ht=o.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,gt=o.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,wp=o.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,kp=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,Cp=o.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Sp=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,Dp=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Tp=o.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Ip=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,$p=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,Lp=o.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,_p=o(C.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,vi={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},Ap=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Op=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),Fp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),ka=[.25,.1,.25,1],Bp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:ka,staggerChildren:.05}}},ft={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:ka}}},Mp=({balances:t,ccLimits:n={},creditCardDetailedBalances:a=[]})=>{const{hdfcBalance:r,iciciBalance:i,liquidFundBalance:c,netCash:l,totalCCOutstanding:d,netPosition:p,totalLimit:s,totalLimitRemaining:u,limitPercentage:g,limitColor:x}=h.useMemo(()=>{const j=t.find(T=>T.account.id==="hdfc-bank"),k=t.find(T=>T.account.id==="icici-bank"),S=t.find(T=>T.account.id==="liquid-fund"),I=t.filter(T=>T.account.type==="credit_card"),v=(j==null?void 0:j.balance)||0,w=(k==null?void 0:k.balance)||0,_=(S==null?void 0:S.balance)||0,A=I.reduce((T,O)=>T+(O.totalOutstanding||0),0);let D=0;for(const T of a){const O=n[T.account.id]||0;O>0&&(D+=O)}const F=Math.max(0,D-A),B=D>0?A/D*100:0,b=A>D&&D>0?"#ef4444":B>80?"#f59e0b":"#10b981";return{hdfcBalance:v,iciciBalance:w,liquidFundBalance:_,netCash:v-A+_,totalCCOutstanding:A,netPosition:v-A,totalLimit:D,totalLimitRemaining:F,limitPercentage:B,limitColor:b}},[t,n,a]),f=s>0;return e.jsxs(yp,{variants:Bp,initial:"hidden",animate:"visible",children:[e.jsxs(fr,{children:[e.jsx(mr,{children:e.jsx(vr,{children:"Bank Accounts"})}),e.jsxs(bp,{children:[e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#004C8F",children:e.jsx("img",{src:vi.hdfc,alt:"HDFC"})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"HDFC Bank"}),e.jsx(ht,{children:"Savings"})]})]}),e.jsx(gt,{$color:r>=0?"#10b981":"#ef4444",children:e.jsx(Be,{value:Y(r)})})]})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#F58220",children:e.jsx("img",{src:vi.icici,alt:"ICICI"})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"ICICI Bank"}),e.jsx(ht,{children:"Savings"})]})]}),e.jsx(gt,{$color:i>=0?"#10b981":"#ef4444",children:e.jsx(Be,{value:Y(i)})})]})})]})]}),e.jsxs(fr,{children:[e.jsx(mr,{children:e.jsx(vr,{children:"Investments"})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#8b5cf6",children:e.jsx(vp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Liquid Fund"}),e.jsx(ht,{children:"Short-term Investment"})]})]}),e.jsx(gt,{$color:c>=0?"#8b5cf6":"#ef4444",children:e.jsx(Be,{value:Y(c)})})]})})]}),e.jsxs(fr,{children:[e.jsx(mr,{children:e.jsx(vr,{children:"Position Summary"})}),e.jsxs(jp,{children:[e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#3b82f6",children:e.jsx(Ap,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Net Position"}),e.jsx(ht,{children:"HDFC − CC Due"})]})]}),e.jsx(gt,{$color:p>=0?"#3b82f6":"#ef4444",children:e.jsx(Be,{value:Y(p)})})]})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#22c55e",children:e.jsx(Op,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Net Cash"}),e.jsx(ht,{children:"Net Position + LF"})]})]}),e.jsx(gt,{$color:l>=0?"#22c55e":"#ef4444",children:e.jsx(Be,{value:Y(l)})})]})}),e.jsxs(ct,{variants:ft,children:[e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#ef4444",children:e.jsx(Fp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Credit Cards"}),e.jsx(ht,{children:"Total Outstanding"})]})]}),e.jsx(gt,{$color:d>0?"#ef4444":"#10b981",children:e.jsx(Be,{value:`${d>0?"-":""}${Y(d)}`})})]}),f&&e.jsxs(wp,{children:[e.jsxs(kp,{children:[e.jsxs(Dp,{children:[e.jsx(Tp,{children:"Combined Limit"}),e.jsx(Ip,{children:Y(s)})]}),e.jsxs($p,{children:[e.jsx(Lp,{children:g>100?"Over By":"Available"}),e.jsx(_p,{$color:x,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:g>100?Y(d-s):Y(u)},u)]})]}),e.jsx(Cp,{children:e.jsx(Sp,{$color:x,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:ka,delay:.1}})})]})]})]})]})]})},Pp=h.memo(Mp),Ep=o.div`
  display: flex;
  flex-direction: column;
`,Np=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`,zp=o(C.button)`
  padding: 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${({$active:t})=>t?"white":"var(--text-primary)"};
  background: ${({$active:t,$color:n})=>t?n:"var(--bg-secondary)"};
  border: 1px solid ${({$active:t,$color:n})=>t?n:"var(--border)"};
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: ${({$active:t,$color:n})=>t?n:"var(--bg-tertiary)"};
  }
`,Rp=o.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,Wp=o.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,Hp=o.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Yp=o.div`
  padding: 0;
`,Oe=o.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Fe=o.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,Jo=o.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: var(--text-tertiary);
  }
`,Vp=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Up=o.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,qp=o(C.button).attrs({type:"button"})`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  background: var(--bg-tertiary);
  border: none;
  border-radius: 6px;
  color: var(--accent);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }
`,Mt=o.select`
  width: 100%;
  padding: 10px 12px;
  padding-right: 36px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`,Gp=o.div`
  display: flex;
  align-items: center;
  position: relative;
`,Kp=o.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Jp=o(Jo)`
  padding-left: 28px;
`,Xp=o.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,Zp=o(C.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 14px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Qp=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"},{type:"liquid_fund_credit",label:"LF Credit",hint:"Add to fund",color:"#8b5cf6"},{type:"liquid_fund_debit",label:"LF Debit",hint:"Withdraw from fund",color:"#a855f7"}],ex=On(),ln=wo(),dn=ko(),yi=[.4,0,.2,1],tx=({onAddTransaction:t,defaultDate:n,categories:a=[]})=>{const[r,i]=h.useState("credit_card_spend"),[c,l]=h.useState(""),[d,p]=h.useState(""),[s,u]=h.useState(""),[g,x]=h.useState(""),[f,j]=h.useState(n||me(new Date)),[k,S]=h.useState(""),[I,v]=h.useState(!1),w=h.useRef(null),_=r==="credit_card_spend"||r==="bank_debit";h.useEffect(()=>{n&&j(n)},[n]);const A=h.useMemo(()=>{switch(r){case"credit_card_spend":case"cc_payment":return ex;case"bank_debit":case"bank_credit":return ln;case"liquid_fund_credit":case"liquid_fund_debit":return dn?[dn]:[];default:return Me}},[r]),D=h.useCallback(()=>{switch(r){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";case"liquid_fund_credit":case"liquid_fund_debit":return"Liquid Fund";default:return"Select account..."}},[r]);h.useEffect(()=>{(r==="liquid_fund_credit"||r==="liquid_fund_debit")&&dn&&l(dn.id)},[r]);const F=r==="liquid_fund_credit"||r==="liquid_fund_debit",B=r&&c&&parseFloat(s)>0&&f&&(!F||d),y=h.useCallback(()=>{i(""),l(""),p(""),u(""),x(""),S("")},[]),b=h.useCallback(()=>{if(!r||!c||!s||!f)return;const $=(r==="cc_payment"||r==="liquid_fund_credit"||r==="liquid_fund_debit")&&d?d:void 0,m=Me.find(V=>V.id===c),L=d?Me.find(V=>V.id===d):void 0;let M="";switch(r){case"credit_card_spend":M=`Spent on ${m==null?void 0:m.name}`;break;case"cc_payment":M=L?`Payment to ${m==null?void 0:m.name} from ${L.name}`:`Payment to ${m==null?void 0:m.name}`;break;case"bank_debit":M=`Debited from ${m==null?void 0:m.name}`;break;case"bank_credit":M=`Credited to ${m==null?void 0:m.name}`;break;case"liquid_fund_credit":M=L?`Invested in Liquid Fund from ${L.name}`:"Invested in Liquid Fund";break;case"liquid_fund_debit":M=L?`Withdrawn from Liquid Fund to ${L.name}`:"Withdrawn from Liquid Fund";break}const G=_l(r,c,parseFloat(s),g||M,f,$,_&&k?k:void 0);t(G),y()},[r,c,d,s,g,f,k,_,t,y]),T=h.useMemo(()=>{const m=s.replace(/[^0-9.]/g,"").split(".");let L=m[0];const M=m[1];if(L.length>3){let G=L.substring(L.length-3),V=L.substring(0,L.length-3);V=V.replace(/\B(?=(\d{2})+(?!\d))/g,","),L=V+","+G}return M!==void 0?`${L}.${M}`:L},[s]),O=h.useCallback($=>{const m=$.target.value.replace(/,/g,"");(m===""||/^\d*\.?\d*$/.test(m))&&u(m)},[]),P=$=>new Date($+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(Ep,{children:[e.jsx(Np,{children:Qp.map(({type:$,label:m,hint:L,color:M})=>e.jsxs(zp,{type:"button",$active:r===$,$color:M,onClick:()=>{r!==$&&(i($),l(""),p(""))},whileTap:{scale:.98},transition:{duration:.1,ease:yi},children:[e.jsx(Rp,{children:m}),e.jsx(Wp,{children:L})]},$))}),e.jsxs("div",{children:[e.jsx(Hp,{children:e.jsxs(Yp,{children:[r!=="liquid_fund_credit"&&r!=="liquid_fund_debit"&&e.jsxs(Oe,{children:[e.jsx(Fe,{children:r==="credit_card_spend"||r==="cc_payment"?"Credit Card":"Bank Account"}),e.jsxs(Mt,{value:c,onChange:$=>l($.target.value),children:[e.jsx("option",{value:"",children:D()}),A.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="cc_payment"&&e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Paid From (Optional)"}),e.jsxs(Mt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),ln.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="liquid_fund_credit"&&e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Transfer From Bank Account"}),e.jsxs(Mt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),ln.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="liquid_fund_debit"&&e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Transfer To Bank Account"}),e.jsxs(Mt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),ln.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Amount"}),e.jsxs(Gp,{children:[e.jsx(Kp,{children:"₹"}),e.jsx(Jp,{type:"text",inputMode:"decimal",placeholder:"0",value:T,onChange:O})]})]}),e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Date"}),e.jsxs(Vp,{children:[e.jsx(Up,{children:P(f)}),e.jsx(qp,{ref:w,onClick:()=>v(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Yt,{isOpen:I,onClose:()=>v(!1),selectedDate:f,onDateSelect:j,triggerRef:w})]})]}),e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Description (Optional)"}),e.jsx(Jo,{type:"text",placeholder:"Add a note...",value:g,onChange:$=>x($.target.value)})]}),_&&a.length>0&&e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Category (Optional)"}),e.jsxs(Mt,{value:k,onChange:$=>S($.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),a.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]})]})}),e.jsx(Xp,{children:e.jsx(Zp,{type:"button",onClick:b,disabled:!B,whileTap:B?{scale:.98}:{},transition:{duration:.1,ease:yi},children:"Add Transaction"})})]})]})},nx=h.memo(tx),Ln={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},rx=t=>{switch(t){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},ax=o.section`
  border-bottom: 1px solid var(--border);
`,ix=o.div`
  padding: ${Ln.section}px 0;

  @media (max-width: 640px) {
    padding: ${Ln.sectionMobile}px 0;
  }
`,ox=o(C.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,sx=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,cx=o.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 28px;
    height: 28px;
    color: ${({$color:t})=>t};
  }

  @media (max-width: 640px) {
    width: 24px;
    height: 24px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,lx=o.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,dx=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ux=o(C.span)`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$color:t})=>t};
  background: ${({$color:t})=>`${t}18`};
  min-width: 28px;
  height: 28px;
  padding: 0 10px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    font-size: 13px;
    min-width: 26px;
    height: 26px;
    padding: 0 9px;
    border-radius: 13px;
  }
`,px=o(C.div)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &:active {
    background: var(--bg-active);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 32px;
    height: 32px;

  svg {
      width: 16px;
      height: 16px;
    }
  }
`,xx=o(C.div)`
  overflow: hidden;
`,hx=o.div`
  padding-top: ${Ln.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${Ln.contentGapMobile}px;
  }
`,gx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),_n=[.32,.72,0,1],fx={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:_n},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:_n},opacity:{duration:.25,delay:.05}}}},mx=({title:t,icon:n,accent:a,badge:r,defaultOpen:i=!0,isOpen:c,onOpenChange:l,collapseOnClickOutside:d=!1,children:p})=>{const[s,u]=h.useState(i),g=h.useRef(null),x=c!==void 0,f=x?c:s,j=rx(a),k=()=>{const S=!f;x?l==null||l(S):u(S)};return h.useEffect(()=>{if(!d||!f)return;const S=I=>{g.current&&!g.current.contains(I.target)&&(x?l==null||l(!1):u(!1))};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S)}},[d,f,x,l]),e.jsx(ax,{ref:g,children:e.jsxs(ix,{children:[e.jsxs(ox,{type:"button",onClick:k,whileTap:{scale:.995},transition:{duration:.1},children:[e.jsxs(sx,{children:[e.jsx(cx,{$color:j,children:n}),e.jsx(lx,{children:t})]}),e.jsxs(dx,{children:[e.jsx(U,{mode:"wait",children:r!==void 0&&e.jsx(ux,{$color:j,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:_n},children:r},r)}),e.jsx(px,{animate:{rotate:f?180:0},transition:{duration:.25,ease:_n},children:e.jsx(gx,{})})]})]}),e.jsx(U,{initial:!1,children:f&&e.jsx(xx,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:fx,children:e.jsx(hx,{children:p})},"content")})]})})},vx=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,yx=o.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,bx=o(C.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,jx=o.div`
  padding: 10px 16px 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
  position: sticky;
  top: 0;
  z-index: 1;
`,Xo=o(C.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--bg-secondary);
  position: relative;

  &:not(:last-child) {
  border-bottom: 1px solid var(--border);
  }

  &:active {
    background: var(--bg-tertiary);
  }

  @media (max-width: 640px) {
    padding: 10px 14px;
    gap: 10px;
  }
`,wx=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:t})=>{switch(t){case"credit_card_spend":return`
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
        `;case"cc_payment":return`
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        `;case"bank_debit":return`
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        `;case"bank_credit":return`
          background: rgba(59, 130, 246, 0.12);
          color: #3b82f6;
        `}}}

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`,kx=o.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,Cx=o.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Sx=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,Dx=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,Tx=o.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Ix=o(C.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--text-tertiary);
  cursor: pointer;
  opacity: 0;
  flex-shrink: 0;
  transition: opacity 0.15s, background 0.15s, color 0.15s;

  ${Xo}:hover & {
    opacity: 0.5;
  }

  &:hover {
    opacity: 1 !important;
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  /* On touch devices, always show delete button */
  @media (hover: none) {
    opacity: 0.4;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 640px) {
    opacity: 0.5;
    right: 6px;
  }
`,$x=o(C.div)`
  padding: 48px 24px;
  text-align: center;
`,Lx=o.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;

  svg {
    width: 28px;
    height: 28px;
    color: var(--text-tertiary);
  }
`,_x=o.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,Ax=o.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Ox=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),e.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),e.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),Fx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),bi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]}),Bx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]}),Mx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Px=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),ji=[.32,.72,0,1],Ex=t=>{switch(t){case"credit_card_spend":return e.jsx(Fx,{});case"cc_payment":return e.jsx(bi,{});case"bank_debit":return e.jsx(bi,{});case"bank_credit":return e.jsx(Bx,{})}},wi=t=>t==="bank_credit",Nx=t=>{const n=new Date(t),a=new Date,r=new Date(a);return r.setDate(r.getDate()-1),t===a.toISOString().split("T")[0]?"Today":t===r.toISOString().split("T")[0]?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},zx=({transactions:t,onDeleteTransaction:n,selectedDate:a})=>{const{filteredTransactions:r,groupedTransactions:i}=h.useMemo(()=>{const d=new Date(a),p=t.filter(u=>new Date(u.date)<=d).sort((u,g)=>{const x=g.date.localeCompare(u.date);return x!==0?x:g.id.localeCompare(u.id)}),s={};return p.forEach(u=>{s[u.date]||(s[u.date]=[]),s[u.date].push(u)}),{filteredTransactions:p,groupedTransactions:s}},[t,a]),c=h.useCallback(d=>{n(d)},[n]),l=Object.keys(i).sort((d,p)=>p.localeCompare(d));return e.jsx(mx,{title:"Transactions",icon:e.jsx(Ox,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:e.jsx(vx,{children:e.jsx(yx,{children:r.length===0?e.jsxs($x,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:ji},children:[e.jsx(Lx,{children:e.jsx(Px,{})}),e.jsx(_x,{children:"No Transactions"}),e.jsx(Ax,{children:"Add your first transaction above"})]}):l.map(d=>e.jsxs(bx,{children:[e.jsx(jx,{children:Nx(d)}),e.jsx(U,{mode:"popLayout",children:i[d].map(p=>{var u;const s=Rt(p.accountId);return e.jsxs(Xo,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:ji},layout:!0,children:[e.jsx(wx,{$type:p.type,children:Ex(p.type)}),e.jsxs(kx,{children:[e.jsx(Cx,{children:p.description}),e.jsx(Sx,{children:(u=s==null?void 0:s.name)==null?void 0:u.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(Dx,{children:[e.jsxs(Tx,{$positive:wi(p.type),children:[wi(p.type)?"+":"-",Y(p.amount)]}),e.jsx(Ix,{type:"button",onClick:()=>c(p.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(Mx,{})})]})]},p.id)})})]},d))})})})};h.memo(zx);const Kt=[.25,.1,.25,1],Zo={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Qo={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:Kt}}};function Ca(t){h.useEffect(()=>{if(t)return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.documentElement.style.overflow="",document.body.style.overflow="",document.body.style.touchAction=""}},[t])}const es=o(C.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,ts=o(C.div)`
  width: 100%;
  max-width: ${({$maxWidth:t})=>t||"440px"};
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,ns=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,rs=o.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,as=o(C.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,is=o(as)`
  left: 12px;
  color: var(--text-secondary);
`,os=o(as)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,ss=o.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 3px;
  }
`,bt=o.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,jt=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`;o.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
`;o(C.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({$primary:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$primary:t})=>t?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$primary:t})=>t?"var(--accent)":"var(--border)"};
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;o(C.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  flex-shrink: 0;

  &:hover {
    background: var(--bg-hover);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;const Rx=o(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,Wx=o.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: var(--text-tertiary);

  svg {
    width: 24px;
    height: 24px;
  }
`,Hx=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,Yx=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
`;function Vx({icon:t,title:n,subtitle:a,className:r}){return e.jsxs(Rx,{className:r,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:Kt},children:[t&&e.jsx(Wx,{children:t}),e.jsx(Hx,{children:n}),a&&e.jsx(Yx,{children:a})]})}const un=o.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,pn=o.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  gap: 12px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,xn=o.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$color:t})=>t||"var(--accent)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`,hn=o.div`
  flex: 1;
  min-width: 0;
`,gn=o.div`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,fn=o.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,mn=o.div`
  position: relative;
  width: 120px;
  flex-shrink: 0;

  &::before {
    content: '₹';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-tertiary);
    pointer-events: none;
  }
`,vn=o.input`
  width: 100%;
  padding: 8px 10px 8px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  outline: none;
  text-align: right;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`,Ux=o.div`
  padding: 8px 14px 12px;
  display: flex;
  gap: 8px;
`,ki=o.button`
  flex: 1;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${({$active:t})=>t?"var(--accent)":"var(--border)"};
  background: ${({$active:t})=>t?"rgba(var(--accent-rgb), 0.1)":"var(--bg-secondary)"};
  color: ${({$active:t})=>t?"var(--accent)":"var(--text-tertiary)"};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: var(--accent);
  }
`,qx=o.div`
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Gx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),e.jsx("polyline",{points:"5 6 12 3 19 6"}),e.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),e.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),Kx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Jx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Xx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),Zx=({isOpen:t,onClose:n,initialBalances:a,initialCCBills:r,ccLimits:i,onSave:c})=>{const[l,d]=h.useState({}),[p,s]=h.useState({}),[u,g]=h.useState({}),[x,f]=h.useState({}),[j,k]=h.useState(""),S=wo(),I=On(),v=ko();Ca(t),h.useEffect(()=>{var b;if(t){const T=me(new Date),O={};S.forEach(L=>{var M;O[L.id]=((M=a[L.id])==null?void 0:M.toString())||""}),d(O),v&&k(((b=a[v.id])==null?void 0:b.toString())||"");const P={},$={};I.forEach(L=>{const M=An(r[L.id],T);P[L.id]=M.amount>0?M.amount.toString():"",$[L.id]=M.type}),s(P),g($);const m={};I.forEach(L=>{var M;m[L.id]=((M=i[L.id])==null?void 0:M.toString())||""}),f(m)}},[t,a,r,i,v]);const w=()=>{const b=me(new Date),T={};if(Object.entries(l).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0;T[$]=L}),v){const $=parseFloat(j.replace(/,/g,""))||0;T[v.id]=$}const O={};Object.entries(p).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0,M=r[$],G=typeof M=="object"?M.setupDate:b,V={amount:L,type:u[$]||"billed",setupDate:typeof M=="object"&&M.amount===L?G:b};O[$]=V});const P={};Object.entries(x).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0;L>0&&(P[$]=L)}),c(T,O,P),n()},_=b=>{const T=b.replace(/[^0-9]/g,"");if(!T)return"";if(T.length>3){let O=T.substring(T.length-3),P=T.substring(0,T.length-3);return P=P.replace(/\B(?=(\d{2})+(?!\d))/g,","),P+","+O}return T},A=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&d(P=>({...P,[b]:O}))},D=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&s(P=>({...P,[b]:O}))},F=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&f(P=>({...P,[b]:O}))},B=b=>{const T=b.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&k(T)},y=b=>{if(b>3&&b<21)return"th";switch(b%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return e.jsx(U,{children:t&&e.jsx(es,{variants:Zo,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:Kt},onClick:n,children:e.jsxs(ts,{variants:Qo,initial:"hidden",animate:"visible",exit:"exit",onClick:b=>b.stopPropagation(),children:[e.jsxs(ns,{children:[e.jsx(is,{onClick:n,children:"Cancel"}),e.jsx(rs,{children:"Balances & Limits"}),e.jsx(os,{onClick:w,children:"Done"})]}),e.jsxs(ss,{children:[e.jsxs(bt,{children:[e.jsx(jt,{children:"Bank Accounts"}),e.jsx(un,{children:S.map(b=>e.jsxs(pn,{children:[e.jsx(xn,{$color:"#007AFF",children:e.jsx(Gx,{})}),e.jsxs(hn,{children:[e.jsx(gn,{children:b.name.replace(" Bank","")}),e.jsx(fn,{children:"Current balance"})]}),e.jsx(mn,{children:e.jsx(vn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(l[b.id]||""),onChange:T=>A(b.id,T.target.value)})})]},b.id))})]}),v&&e.jsxs(bt,{children:[e.jsx(jt,{children:"Investments"}),e.jsx(un,{children:e.jsxs(pn,{children:[e.jsx(xn,{$color:"#AF52DE",children:e.jsx(Xx,{})}),e.jsxs(hn,{children:[e.jsx(gn,{children:"Liquid Fund"}),e.jsx(fn,{children:"Current investment value"})]}),e.jsx(mn,{children:e.jsx(vn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(j),onChange:b=>B(b.target.value)})})]})})]}),e.jsxs(bt,{children:[e.jsx(jt,{children:"Credit Card Bills"}),e.jsx(un,{children:I.map(b=>e.jsxs(qx,{children:[e.jsxs(pn,{style:{borderBottom:"none"},children:[e.jsx(xn,{$color:"#FF9500",children:e.jsx(Kx,{})}),e.jsxs(hn,{children:[e.jsx(gn,{children:b.name.replace(" Credit Card","")}),e.jsx(fn,{children:"Outstanding amount"})]}),e.jsx(mn,{children:e.jsx(vn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(p[b.id]||""),onChange:T=>D(b.id,T.target.value)})})]}),e.jsxs(Ux,{children:[e.jsx(ki,{type:"button",$active:u[b.id]==="billed",onClick:()=>g(T=>({...T,[b.id]:"billed"})),children:"Billed"}),e.jsx(ki,{type:"button",$active:u[b.id]==="unbilled",onClick:()=>g(T=>({...T,[b.id]:"unbilled"})),children:"Unbilled"})]})]},b.id))})]}),e.jsxs(bt,{children:[e.jsx(jt,{children:"Spending Limits"}),e.jsx(un,{children:I.map(b=>{const T=yo[b.id];return e.jsxs(pn,{children:[e.jsx(xn,{$color:"#34C759",children:e.jsx(Jx,{})}),e.jsxs(hn,{children:[e.jsx(gn,{children:b.name.replace(" Credit Card","")}),T&&e.jsxs(fn,{children:["Resets on ",T,y(T)]})]}),e.jsx(mn,{children:e.jsx(vn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(x[b.id]||""),onChange:O=>F(b.id,O.target.value)})})]},b.id)})})]})]})]})})})},Qx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),eh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ci=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),th=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),nh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),rh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("polyline",{points:"9 12 11 14 15 10"})]}),ah=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),ih=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),oh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),sh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),ch=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),lh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),dh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),uh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),ph=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),xh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),cs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),ls=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),ds=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),e.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),hh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),us=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),Si=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),Di=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),gh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),fh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),mh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"18 15 12 9 6 15"})}),vh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),yh=o.div`
  display: flex;
  gap: 10px;
`,bh=o.input`
  flex: 1;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 12px;
  outline: none;

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    border-color: var(--accent);
  }
`,jh=o(C.button)`
  padding: 14px 20px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  flex-shrink: 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,wh=o.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,kh=o(C.div)`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Ch=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,Sh=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ia=o(C.button)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;

  &:hover {
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,Dh=o(ia)`
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`,Th=o(C.div)`
  position: absolute;
  inset: 0;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`,Ih=o.input`
  flex: 1;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--accent);
  border-radius: 10px;
  outline: none;
`,$h=o.div`
  position: relative;
`,Lh=({isOpen:t,onClose:n,categories:a,onSave:r})=>{const[i,c]=h.useState(a),[l,d]=h.useState(""),[p,s]=h.useState(null),[u,g]=h.useState(""),x=h.useRef(null);Ca(t),h.useEffect(()=>{t&&(c(a),d(""),s(null))},[t,a]),h.useEffect(()=>{p&&x.current&&x.current.focus()},[p]);const f=h.useCallback(()=>{if(!l.trim())return;const v={id:jo(),name:l.trim()};c(w=>[...w,v]),d("")},[l]),j=h.useCallback(v=>{c(w=>w.filter(_=>_.id!==v))},[]),k=h.useCallback(v=>{s(v.id),g(v.name)},[]),S=h.useCallback(()=>{!p||!u.trim()||(c(v=>v.map(w=>w.id===p?{...w,name:u.trim()}:w)),s(null),g(""))},[p,u]),I=h.useCallback(()=>{r(i),n()},[i,r,n]);return e.jsx(U,{children:t&&e.jsx(es,{variants:Zo,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:Kt},onClick:n,children:e.jsxs(ts,{variants:Qo,initial:"hidden",animate:"visible",exit:"exit",$maxWidth:"400px",onClick:v=>v.stopPropagation(),children:[e.jsxs(ns,{children:[e.jsx(is,{onClick:n,children:"Cancel"}),e.jsx(rs,{children:"Categories"}),e.jsx(os,{onClick:I,children:"Done"})]}),e.jsxs(ss,{children:[e.jsxs(bt,{children:[e.jsx(jt,{children:"Add New"}),e.jsxs(yh,{children:[e.jsx(bh,{type:"text",placeholder:"Category name",value:l,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&f()}),e.jsx(jh,{onClick:f,disabled:!l.trim(),whileTap:{scale:.98},children:"Add"})]})]}),e.jsxs(bt,{children:[e.jsx(jt,{children:"Your Categories"}),i.length===0?e.jsx(Vx,{icon:e.jsx(ds,{}),title:"No Categories",subtitle:"Add a category to organize your transactions"}):e.jsx(wh,{children:e.jsx(U,{children:i.map(v=>e.jsxs($h,{children:[e.jsxs(kh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,height:0},layout:!0,children:[e.jsx(Ch,{children:v.name}),e.jsxs(Sh,{children:[e.jsx(ia,{onClick:()=>k(v),whileTap:{scale:.95},children:e.jsx(ls,{})}),e.jsx(Dh,{onClick:()=>j(v.id),whileTap:{scale:.95},children:e.jsx(cs,{})})]})]}),e.jsx(U,{children:p===v.id&&e.jsxs(Th,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(Ih,{ref:x,type:"text",value:u,onChange:w=>g(w.target.value),onKeyDown:w=>{w.key==="Enter"&&S(),w.key==="Escape"&&s(null)},onBlur:S}),e.jsx(ia,{onClick:S,whileTap:{scale:.95},style:{color:"var(--accent)"},children:e.jsx(vh,{})})]})})]},v.id))})})]})]})]})})})},_h=o(C.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,Ah=o(C.div)`
  width: 100%;
  max-width: 440px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
`,Oh=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
`,Fh=o.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
`,Bh=o(C.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Mh=o.div`
  padding: 20px;
`,yn=o.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`,bn=o.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 8px;
`,ps=o.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    border-color: var(--accent);
  }
`,Ph=o.div`
  display: flex;
  align-items: center;
  position: relative;
`,Eh=o.span`
  position: absolute;
  left: 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Nh=o(ps)`
  padding-left: 30px;
`,zh=o.select`
  width: 100%;
  padding: 12px 14px;
  padding-right: 40px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 14px;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  &:focus {
    border-color: var(--accent);
  }
`,Rh=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,Wh=o.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,Hh=o(C.button).attrs({type:"button"})`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  background: var(--bg-secondary);
  border: none;
  border-radius: 6px;
  color: var(--accent);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-hover);
  }
`,Yh=o.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
`,Ti=o(C.button)`
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({$primary:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$primary:t})=>t?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$primary:t})=>t?"var(--accent)":"var(--border)"};
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Vh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),xs=[.25,.1,.25,1],Uh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},qh={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.15,ease:xs}}},Gh=({isOpen:t,onClose:n,transaction:a,categories:r,onSave:i})=>{const[c,l]=h.useState(""),[d,p]=h.useState(""),[s,u]=h.useState(""),[g,x]=h.useState(""),[f,j]=h.useState(!1),k=h.useRef(null);h.useEffect(()=>{t&&a&&(l(a.amount.toString()),p(a.date),u(a.description),x(a.categoryId||""))},[t,a]);const S=h.useMemo(()=>{const F=c.replace(/[^0-9.]/g,"").split(".");let B=F[0];const y=F[1];if(B.length>3){let b=B.substring(B.length-3),T=B.substring(0,B.length-3);T=T.replace(/\B(?=(\d{2})+(?!\d))/g,","),B=T+","+b}return y!==void 0?`${B}.${y}`:B},[c]),I=h.useCallback(D=>{const F=D.target.value.replace(/,/g,"");(F===""||/^\d*\.?\d*$/.test(F))&&l(F)},[]),v=D=>new Date(D+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),w=h.useCallback(()=>{if(!a)return;const D={...a,amount:parseFloat(c)||a.amount,date:d||a.date,description:s,categoryId:g||void 0};i(D),n()},[a,c,d,s,g,i,n]),_=parseFloat(c)>0&&d,A=a&&(a.type==="credit_card_spend"||a.type==="bank_debit");return e.jsx(U,{children:t&&a&&e.jsx(_h,{variants:Uh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:xs},onClick:n,children:e.jsxs(Ah,{variants:qh,initial:"hidden",animate:"visible",exit:"exit",onClick:D=>D.stopPropagation(),children:[e.jsxs(Oh,{children:[e.jsx(Fh,{children:"Edit Transaction"}),e.jsx(Bh,{onClick:n,whileTap:{scale:.95},children:e.jsx(Vh,{})})]}),e.jsxs(Mh,{children:[e.jsxs(yn,{children:[e.jsx(bn,{children:"Amount"}),e.jsxs(Ph,{children:[e.jsx(Eh,{children:"₹"}),e.jsx(Nh,{type:"text",inputMode:"decimal",placeholder:"0",value:S,onChange:I})]})]}),e.jsxs(yn,{children:[e.jsx(bn,{children:"Date"}),e.jsxs(Rh,{children:[e.jsx(Wh,{children:v(d)}),e.jsx(Hh,{ref:k,onClick:()=>j(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Yt,{isOpen:f,onClose:()=>j(!1),selectedDate:d,onDateSelect:p,triggerRef:k})]})]}),e.jsxs(yn,{children:[e.jsx(bn,{children:"Description"}),e.jsx(ps,{type:"text",placeholder:"Add a note...",value:s,onChange:D=>u(D.target.value)})]}),A&&e.jsxs(yn,{children:[e.jsx(bn,{children:"Category"}),e.jsxs(zh,{value:g,onChange:D=>x(D.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),r.map(D=>e.jsx("option",{value:D.id,children:D.name},D.id))]})]})]}),e.jsxs(Yh,{children:[e.jsx(Ti,{onClick:n,whileTap:{scale:.98},children:"Cancel"}),e.jsx(Ti,{$primary:!0,onClick:w,disabled:!_,whileTap:_?{scale:.98}:{},children:"Save"})]})]})})})},Kh=h.memo(function({balances:n,ccLimits:a,creditCardDetailedBalances:r}){return e.jsx(Pp,{balances:n,ccLimits:a,creditCardDetailedBalances:r})}),Jh=o(C.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: calc(var(--space-3xl) + 80px);
  overflow-x: hidden;
  max-width: 100vw;

  @media (max-width: 1023px) {
    padding-bottom: calc(var(--space-2xl) + 80px);
  }

  @media (max-width: 640px) {
    padding-bottom: calc(var(--space-xl) + 100px);
  }
`,Xh=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,Zh=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,Qh=o.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,e0=o.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,t0=o(C.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,n0=o.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,r0=o(C.div)`
  width: 100%;
`,a0=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,i0=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,o0=o.input`
  display: none;
`,s0=o.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,c0=o(C.button)`
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({$active:t})=>t?"var(--text-primary)":"var(--text-tertiary)"};
  background: ${({$active:t})=>t?"var(--bg-secondary)":"transparent"};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  ${({$active:t})=>t&&`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  `}

  &:hover:not([disabled]) {
    color: var(--text-secondary);
  }
`,l0=o.div`
  display: flex;
  padding: 3px;
  margin: 8px 0;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,Ii=o(C.button)`
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({$active:t})=>t?"var(--text-primary)":"var(--text-tertiary)"};
  background: ${({$active:t})=>t?"var(--bg-secondary)":"transparent"};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  ${({$active:t})=>t&&`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  `}

  &:hover:not([disabled]) {
    color: var(--text-secondary);
  }
`,d0=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,u0=o.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`,p0=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;

  svg {
    width: 18px;
    height: 18px;
    color: var(--text-tertiary);
  }
`,x0=o.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
`,h0=o.div`
  color: var(--text-tertiary);
  transform: rotate(${({$expanded:t})=>t?"180deg":"0deg"});
  transition: transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`,g0=o.div`
  display: ${({$expanded:t})=>t?"block":"none"};
  animation: ${({$expanded:t})=>t?"filterFadeIn 0.15s ease-out":"none"};

  @keyframes filterFadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,f0=o.div`
  /* Content container */
`,m0=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,jn=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,wn=o.label`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,$i=o.select`
  padding: 10px 12px;
  padding-right: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  &:focus {
    border-color: var(--accent);
  }
`,v0=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,y0=o.button`
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$selected:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$selected:t})=>t?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$selected:t})=>t?"var(--accent)":"var(--border)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({$selected:t})=>t?"var(--accent)":"var(--bg-secondary)"};
    border-color: ${({$selected:t})=>t?"var(--accent)":"var(--text-tertiary)"};
  }
`,b0=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Li=o.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: var(--text-tertiary);
  }

  svg {
    width: 14px;
    height: 14px;
    color: var(--text-tertiary);
  }
`,j0=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,w0=o.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 10px;
`,k0=o(C.button)`
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: var(--bg-tertiary);
  }
`,C0=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,S0=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kn=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  grid-column: ${({$span:t})=>t?`span ${t}`:"auto"};

  @media (max-width: 768px) {
    grid-column: auto;
  }
`,Cn=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Sn=o.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
`,D0=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
`,T0=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px 0;
`,_i=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ai=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,Oi=o.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Fi=o.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  letter-spacing: -0.02em;
`,Bi=o.div`
  height: 10px;
  background: var(--bg-tertiary);
  border-radius: 5px;
  overflow: hidden;
`,Mi=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 5px;
`,I0=o.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,$0=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,L0=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  font-weight: 500;
`,_0=o.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$color:t})=>t||"var(--text-primary)"};
`,yr=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,br=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
`,jr=o.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,wr=o.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,kr=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cr=o.div`
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
`,Sr=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  ${({$isFirst:t})=>t&&"border-radius: 6px 0 0 6px;"}
  ${({$isLast:t})=>t&&"border-radius: 0 6px 6px 0;"}
  ${({$isFirst:t,$isLast:n})=>t&&n&&"border-radius: 6px;"}
`,Dr=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Tr=o.div`
  width: 4px;
  height: 40px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Ir=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,$r=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Lr=o.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_r=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex-shrink: 0;
`,Ar=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Or=o.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Fr=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,Br=o.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Mr=o(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,A0=o(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
`,Pr=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  padding: 4px;
  margin: -4px;
  border-radius: 8px;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    background: var(--bg-tertiary);
  }

  &:active {
    background: var(--bg-primary);
    transform: scale(0.98);
  }
`,O0=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Pi=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,F0=o.div`
  /* Full height - page scrolls naturally */
`,B0=o(C.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,M0=o.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,P0=o(C.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-secondary);
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  @media (max-width: 640px) {
    padding: 12px 16px;
    gap: 12px;
  }
`,E0=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:t})=>{switch(t){case"credit_card_spend":return`
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
          color: #ef4444;
        `;case"bank_credit":return`
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
          color: #10b981;
        `;case"cc_payment":return`
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
          color: #3b82f6;
        `;case"bank_debit":return`
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
          color: #f59e0b;
        `;case"liquid_fund_credit":return`
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
          color: #8b5cf6;
        `;case"liquid_fund_debit":return`
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.08) 100%);
          color: #a855f7;
        `;default:return`
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        `}}}

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,N0=o.div`
  flex: 1;
  min-width: 0;
`,z0=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,R0=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,W0=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,H0=o.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,Y0=o.div`
  display: flex;
  gap: 4px;
`,Ei=o(C.button)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    background: ${({$danger:t})=>t?"rgba(239, 68, 68, 0.1)":"rgba(59, 130, 246, 0.1)"};
    color: ${({$danger:t})=>t?"#ef4444":"#3b82f6"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,V0=o.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  border-radius: 6px;
  margin-left: 8px;
`,U0=o(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,hs=o.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--text-tertiary);

  svg {
    width: 28px;
    height: 28px;
  }
`,gs=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,fs=o.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,q0=o(C.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
`,G0=o(C.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  touch-action: auto;
`,K0=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`,J0=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,X0=o.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Z0=o.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Q0=o(C.button)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;

  &:hover {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,eg=o.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  overscroll-behavior: contain;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 3px;
  }
`,tg=o.div`
  display: flex;
  gap: 12px;
  padding: 12px 8px;
  margin-bottom: 8px;
`,Ni=o.div`
  flex: 1;
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 12px;
  text-align: center;
`,zi=o.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  letter-spacing: -0.02em;
`,Ri=o.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-top: 4px;
`,ng=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,rg=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  transition: background 0.15s ease;

  &:hover {
    background: var(--bg-primary);
  }
`,ag=o.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({$positive:t})=>t?"rgba(52, 199, 89, 0.15)":"rgba(255, 59, 48, 0.15)"};
  color: ${({$positive:t})=>t?"#34C759":"#FF3B30"};
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,ig=o.div`
  flex: 1;
  min-width: 0;
`,og=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sg=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 6px;
`,cg=o.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#34C759":"#FF3B30"};
  text-align: right;
  flex-shrink: 0;
`,lg=o.div`
  padding: 48px 20px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 15px;
`,dg=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Er=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Nr=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Wi=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,zr=o(C.button)`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-tertiary);
  }

  &:active {
    background: rgba(255, 255, 255, 0.03);
  }

  & + & {
    border-top: 1px solid var(--border);
  }
`,Rr=o.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$color:t})=>t||"var(--accent)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`,Wr=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Hr=o.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,Yr=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,Hi=o.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,Yi=o.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,ug=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Vi=o(C.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--bg-tertiary);
    border-color: ${({$variant:t})=>t==="export"?"#34C759":"#007AFF"};
    transform: translateY(-2px);
  }
`,Ui=o.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({$color:t})=>`${t}15`};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
    color: ${({$color:t})=>t};
  }
`,qi=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Gi=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,pg=h.memo(function({creditCardDetailedBalances:n,ccLimits:a}){return e.jsx(a0,{children:n.map((r,i)=>e.jsx(mp,{detailedBalance:r,index:i,limit:a[r.account.id]},r.account.id))})}),xg=h.memo(function({categories:n,onAddTransaction:a}){return e.jsx(i0,{children:e.jsx(nx,{onAddTransaction:a,categories:n})})}),ee=Kt,Ke=[{id:"summary",label:"Summary",icon:Qx(),accent:"green"},{id:"cards",label:"Cards",icon:eh(),accent:"pink"},{id:"transactions",label:"History",icon:ch(),accent:"blue"},{id:"add",label:"Add",icon:lh(),accent:"orange"},{id:"manage",label:"Manage",icon:dh(),accent:"purple"}],hg=[{id:"hdfc-bank",label:"HDFC Bank"},{id:"icici-bank",label:"ICICI Bank"},{id:"hdfc-cc",label:"HDFC CC"},{id:"axis-cc",label:"Axis CC"},{id:"icici-cc",label:"ICICI CC"},{id:"yes-cc",label:"Yes CC"},{id:"liquid-fund",label:"Liquid Fund"}],Te=["#FF3B30","#FF9500","#FFCC00","#34C759","#007AFF","#AF52DE"],Ki={bank:"#007AFF",credit_card:"#FF3B30",liquid_fund:"#AF52DE"},Ji={credit_card_spend:"#FF3B30",cc_payment:"#007AFF",bank_debit:"#FF9500",bank_credit:"#34C759",liquid_fund_credit:"#AF52DE",liquid_fund_debit:"#5856D6"},gg={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:ee}}},fg={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},zt=["bank_credit","liquid_fund_debit"],wt=["credit_card_spend","cc_payment","bank_debit","liquid_fund_credit"],mg=h.memo(function({categoriesCount:n,transactionsCount:a,onOpenBalanceModal:r,onOpenCategoryModal:i,onExport:c,onImport:l}){return e.jsxs(dg,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:ee},children:[e.jsxs(Er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:ee},children:[e.jsx(Nr,{children:"Configuration"}),e.jsxs(Wi,{children:[e.jsxs(zr,{onClick:r,whileTap:{scale:.99},children:[e.jsx(Rr,{$color:"#007AFF",children:e.jsx(oh,{})}),e.jsxs(Wr,{children:[e.jsx(Hr,{children:"Balances & Limits"}),e.jsx(Yr,{children:"Set initial values and card limits"})]}),e.jsx(Hi,{children:e.jsx(Si,{})})]}),e.jsxs(zr,{onClick:i,whileTap:{scale:.99},children:[e.jsx(Rr,{$color:"#FF9500",children:e.jsx(ds,{})}),e.jsxs(Wr,{children:[e.jsx(Hr,{children:"Categories"}),e.jsx(Yr,{children:"Organize your transactions"})]}),e.jsx(Yi,{children:n}),e.jsx(Hi,{children:e.jsx(Si,{})})]})]})]}),e.jsxs(Er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:ee},children:[e.jsx(Nr,{children:"Data"}),e.jsxs(ug,{children:[e.jsxs(Vi,{type:"button",$variant:"export",onClick:c,whileTap:{scale:.97},children:[e.jsx(Ui,{$color:"#34C759",children:e.jsx(uh,{})}),e.jsx(qi,{children:"Export"}),e.jsx(Gi,{children:"Save backup file"})]}),e.jsxs(Vi,{type:"button",$variant:"import",onClick:l,whileTap:{scale:.97},children:[e.jsx(Ui,{$color:"#007AFF",children:e.jsx(ph,{})}),e.jsx(qi,{children:"Import"}),e.jsx(Gi,{children:"Restore from file"})]})]})]}),e.jsxs(Er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:ee},children:[e.jsx(Nr,{children:"About"}),e.jsx(Wi,{children:e.jsxs(zr,{as:"div",style:{cursor:"default"},children:[e.jsx(Rr,{$color:"#8E8E93",children:e.jsx(sh,{})}),e.jsxs(Wr,{children:[e.jsx(Hr,{children:"Transactions"}),e.jsx(Yr,{children:"Total records stored"})]}),e.jsx(Yi,{children:a})]})})]})]})}),vg=t=>{switch(t){case"credit_card_spend":return Ci();case"bank_credit":return th();case"cc_payment":return rh();case"bank_debit":return nh();case"liquid_fund_credit":return ah();case"liquid_fund_debit":return ih();default:return Ci()}},ms=t=>zt.includes(t),yg=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},Xi=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),Zi=()=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),1);return vs(n)},Qi=()=>vs(new Date),vs=t=>{const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},bg=t=>t.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Ge=(t,n)=>n>0?t/n*100:0,jg=h.memo(function({filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:j,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:w,filterStartDateRef:_,filterEndDateRef:A}){return e.jsxs(d0,{children:[e.jsxs(u0,{onClick:a,children:[e.jsxs(p0,{children:[e.jsx(hh,{}),"Filters",f>0&&e.jsxs(x0,{children:[f," active"]})]}),e.jsx(h0,{$expanded:n,children:e.jsx(us,{})})]}),e.jsx(g0,{$expanded:n,children:e.jsx("div",{children:e.jsxs(f0,{children:[e.jsxs(m0,{children:[e.jsxs(jn,{style:{gridColumn:"1 / -1"},children:[e.jsx(wn,{children:"Period"}),e.jsxs(b0,{children:[e.jsxs(Li,{ref:_,type:"button",onClick:()=>I(!0),children:[Xi(r),e.jsx(Di,{})]}),e.jsx(Yt,{isOpen:S,onClose:()=>I(!1),selectedDate:r,onDateSelect:D=>{i(D),I(!1)},triggerRef:_}),e.jsx(j0,{children:"to"}),e.jsxs(Li,{ref:A,type:"button",onClick:()=>w(!0),children:[Xi(c),e.jsx(Di,{})]}),e.jsx(Yt,{isOpen:v,onClose:()=>w(!1),selectedDate:c,onDateSelect:D=>{l(D),w(!1)},triggerRef:A})]})]}),e.jsxs(jn,{children:[e.jsx(wn,{children:"Category"}),e.jsxs($i,{value:d,onChange:D=>p(D.target.value),children:[e.jsx("option",{value:"all",children:"All Categories"}),k.map(D=>e.jsx("option",{value:D.id,children:D.name},D.id))]})]}),e.jsxs(jn,{children:[e.jsx(wn,{children:"Money Flow"}),e.jsxs($i,{value:s,onChange:D=>u(D.target.value),children:[e.jsx("option",{value:"all",children:"All Transactions"}),e.jsx("option",{value:"credit",children:"Incoming"}),e.jsx("option",{value:"debit",children:"Outgoing"})]})]}),e.jsxs(jn,{style:{gridColumn:"1 / -1"},children:[e.jsxs(wn,{children:["Account"," ",g.length>0&&`(${g.length} selected)`]}),e.jsx(v0,{children:hg.map(D=>e.jsx(y0,{type:"button",$selected:g.includes(D.id),onClick:()=>x(D.id),children:D.label},D.id))})]})]}),e.jsx(w0,{children:e.jsx(k0,{onClick:j,whileTap:{scale:.98},children:"Reset Filters"})})]})})})]})}),wg=h.memo(function({insights:n,hasTransactions:a,activeFilterCount:r,onDrillDown:i}){const{totalCategoryAmount:c,categorySegments:l}=h.useMemo(()=>{const s=n.categoryBreakdown.reduce((x,f)=>x+f.amount,0);let u=0;const g=n.categoryBreakdown.map((x,f)=>{const j=Ge(x.amount,s),k=u;return u+=j,{...x,percent:j,startPercent:k,color:Te[f%Te.length]}});return{totalCategoryAmount:s,categorySegments:g}},[n.categoryBreakdown]),d=h.useMemo(()=>n.accountBreakdown.reduce((s,u)=>s+u.amount,0),[n.accountBreakdown]),p=h.useMemo(()=>n.typeBreakdown.reduce((s,u)=>s+u.amount,0),[n.typeBreakdown]);return a?e.jsxs(C0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:ee},children:[e.jsxs(kn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.4,ease:ee},children:[e.jsxs(Cn,{children:[e.jsx(Sn,{children:"Money Flow"}),e.jsxs(D0,{children:[n.totalCount," transactions"]})]}),e.jsxs(T0,{children:[e.jsxs(_i,{children:[e.jsxs(Ai,{children:[e.jsx(Oi,{children:"Incoming"}),e.jsx(Fi,{$color:"#34C759",children:Y(n.totalIncoming)})]}),e.jsx(Bi,{children:e.jsx(Mi,{$color:"#34C759",initial:{width:0},animate:{width:`${Ge(n.totalIncoming,Math.max(n.totalIncoming,n.totalOutgoing))}%`},transition:{delay:.2,duration:.6,ease:ee}})})]}),e.jsxs(_i,{children:[e.jsxs(Ai,{children:[e.jsx(Oi,{children:"Outgoing"}),e.jsx(Fi,{$color:"#FF3B30",children:Y(n.totalOutgoing)})]}),e.jsx(Bi,{children:e.jsx(Mi,{$color:"#FF3B30",initial:{width:0},animate:{width:`${Ge(n.totalOutgoing,Math.max(n.totalIncoming,n.totalOutgoing))}%`},transition:{delay:.3,duration:.6,ease:ee}})})]}),e.jsx(I0,{children:e.jsxs($0,{children:[e.jsx(L0,{children:"Net Flow"}),e.jsxs(_0,{$color:n.netFlow>=0?"#34C759":"#FF3B30",children:[n.netFlow>=0?"+":"",Y(n.netFlow)]})]})})]})]}),e.jsxs(S0,{children:[n.categoryBreakdown.length>0&&e.jsxs(kn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4,ease:ee},children:[e.jsx(Cn,{children:e.jsx(Sn,{children:"Spending by Category"})}),e.jsxs(yr,{children:[e.jsxs(br,{children:[e.jsx(jr,{children:"Total Spending"}),e.jsx(wr,{children:Y(c)})]}),e.jsx(kr,{children:e.jsx(Cr,{children:l.map((s,u)=>e.jsx(Sr,{$color:s.color,$isFirst:u===0,$isLast:u===l.length-1,initial:{width:0},animate:{width:`${s.percent}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id))})}),e.jsx(Dr,{children:l.map((s,u)=>e.jsxs(Pr,{onClick:()=>i({type:"category",id:s.id,label:s.name,color:s.color}),children:[e.jsx(Tr,{$color:s.color}),e.jsxs(Ir,{children:[e.jsxs($r,{children:[e.jsx(Lr,{children:s.name}),e.jsx(_r,{children:Y(s.amount)})]}),e.jsxs(Ar,{children:[e.jsxs(Or,{$color:s.color,children:[s.percent.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Mr,{$color:s.color,initial:{width:0},animate:{width:`${s.percent}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Fr,{children:[s.count," txn"]})]})]})]},s.id))})]})]}),n.accountBreakdown.length>0&&e.jsxs(kn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.4,ease:ee},children:[e.jsx(Cn,{children:e.jsx(Sn,{children:"Activity by Account"})}),e.jsxs(yr,{children:[e.jsxs(br,{children:[e.jsx(jr,{children:"Total Activity"}),e.jsx(wr,{children:Y(d)})]}),e.jsx(kr,{children:e.jsx(Cr,{children:n.accountBreakdown.map((s,u)=>{const g=Ge(s.amount,d),x=Ki[s.type]||Te[u%Te.length];return e.jsx(Sr,{$color:x,$isFirst:u===0,$isLast:u===n.accountBreakdown.length-1,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id)})})}),e.jsx(Dr,{children:n.accountBreakdown.map((s,u)=>{const g=Ge(s.amount,d),x=Ki[s.type]||Te[u%Te.length];return e.jsxs(Pr,{onClick:()=>i({type:"account",id:s.id,label:s.name,color:x}),children:[e.jsx(Tr,{$color:x}),e.jsxs(Ir,{children:[e.jsxs($r,{children:[e.jsx(Lr,{children:s.name}),e.jsx(_r,{children:Y(s.amount)})]}),e.jsxs(Ar,{children:[e.jsxs(Or,{$color:x,children:[g.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Mr,{$color:x,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Fr,{children:[s.count," txn"]})]})]})]},s.id)})})]})]}),n.typeBreakdown.length>0&&e.jsxs(kn,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4,ease:ee},children:[e.jsx(Cn,{children:e.jsx(Sn,{children:"Transaction Types"})}),e.jsxs(yr,{children:[e.jsxs(br,{children:[e.jsx(jr,{children:"Total Volume"}),e.jsx(wr,{children:Y(p)})]}),e.jsx(kr,{children:e.jsx(Cr,{children:n.typeBreakdown.map((s,u)=>{const g=Ge(s.amount,p),x=Ji[s.id]||Te[u%Te.length];return e.jsx(Sr,{$color:x,$isFirst:u===0,$isLast:u===n.typeBreakdown.length-1,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id)})})}),e.jsx(Dr,{children:n.typeBreakdown.map((s,u)=>{const g=Ge(s.amount,p),x=Ji[s.id]||Te[u%Te.length];return e.jsxs(Pr,{onClick:()=>i({type:"transactionType",id:s.id,label:s.label,color:x}),children:[e.jsx(Tr,{$color:x}),e.jsxs(Ir,{children:[e.jsxs($r,{children:[e.jsx(Lr,{children:s.label}),e.jsx(_r,{children:Y(s.amount)})]}),e.jsxs(Ar,{children:[e.jsxs(Or,{$color:x,children:[g.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Mr,{$color:x,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Fr,{children:[s.count," txn"]})]})]})]},s.id)})})]})]})]})]}):e.jsxs(A0,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx(hs,{children:e.jsx(gh,{})}),e.jsx(gs,{children:"No Data to Analyze"}),e.jsx(fs,{children:r>0?"Try adjusting your filters":"Add transactions to see insights"})]})}),kg=h.memo(function({groupedTransactions:n,categories:a,activeFilterCount:r,onEditTransaction:i,onDeleteTransaction:c}){const l=Object.keys(n).sort((d,p)=>p.localeCompare(d));return l.length===0?e.jsx(Pi,{children:e.jsxs(U0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx(hs,{children:e.jsx(xh,{})}),e.jsx(gs,{children:"No Transactions"}),e.jsx(fs,{children:r>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):e.jsx(Pi,{children:e.jsx(F0,{children:e.jsx(U,{mode:"popLayout",children:l.map(d=>e.jsxs(B0,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:ee},children:[e.jsx(M0,{children:yg(d)}),n[d].map(p=>{const s=Rt(p.accountId),u=p.categoryId?a.find(x=>x.id===p.categoryId):null,g=ms(p.type);return e.jsxs(P0,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:ee},children:[e.jsx(E0,{$type:p.type,children:vg(p.type)}),e.jsxs(N0,{children:[e.jsxs(z0,{children:[p.description,u&&e.jsx(V0,{children:u.name})]}),e.jsx(R0,{children:(s==null?void 0:s.name)||"Unknown Account"})]}),e.jsxs(W0,{children:[e.jsxs(H0,{$positive:g,children:[g?"+":"-",Y(p.amount)]}),e.jsxs(Y0,{children:[e.jsx(Ei,{onClick:()=>i(p),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(ls,{})}),e.jsx(Ei,{$danger:!0,onClick:()=>c(p.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(cs,{})})]})]})]},p.id)})]},d))})})})}),Cg=h.memo(function({drillDown:n,transactions:a,onClose:r}){return Ca(!!n),sa.createPortal(e.jsx(U,{children:n&&e.jsx(q0,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},onClick:r,children:e.jsxs(G0,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.15},onClick:i=>i.stopPropagation(),children:[e.jsxs(K0,{children:[e.jsxs(J0,{children:[e.jsx(X0,{$color:n.color}),e.jsx(Z0,{children:n.label})]}),e.jsx(Q0,{onClick:r,whileTap:{scale:.95},children:e.jsx(fh,{})})]}),e.jsx(eg,{children:a.length===0?e.jsx(lg,{children:"No transactions found"}):e.jsxs(e.Fragment,{children:[e.jsxs(tg,{children:[e.jsxs(Ni,{children:[e.jsx(zi,{children:a.length}),e.jsx(Ri,{children:"Transactions"})]}),e.jsxs(Ni,{children:[e.jsx(zi,{$color:n.color,children:Y(a.reduce((i,c)=>i+c.amount,0))}),e.jsx(Ri,{children:"Total Amount"})]})]}),e.jsx(ng,{children:a.map(i=>{var d;const c=Rt(i.accountId),l=ms(i.type);return e.jsxs(rg,{children:[e.jsx(ag,{$positive:l,children:l?e.jsx(us,{}):e.jsx(mh,{})}),e.jsxs(ig,{children:[e.jsx(og,{children:i.description}),e.jsxs(sg,{children:[e.jsx("span",{children:(d=c==null?void 0:c.name)==null?void 0:d.replace(" Credit Card"," CC").replace(" Bank","")}),e.jsx("span",{children:"•"}),e.jsx("span",{children:new Date(i.date).toLocaleDateString("en-IN",{day:"numeric",month:"short"})})]})]}),e.jsxs(cg,{$positive:l,children:[l?"+":"-",Y(i.amount)]})]},i.id)})})]})})]})})}),document.body)}),Sg=h.memo(function({filterExpanded:n,onToggleFilterExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:j,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:w,filterStartDateRef:_,filterEndDateRef:A,historySubTab:D,onSubTabChange:F,filteredTransactions:B,groupedTransactions:y,insights:b,drillDown:T,drillDownTransactions:O,onDrillDown:P,onCloseDrillDown:$,onEditTransaction:m,onDeleteTransaction:L}){return e.jsxs(e.Fragment,{children:[e.jsxs(O0,{children:[e.jsx(jg,{filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:j,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:w,filterStartDateRef:_,filterEndDateRef:A}),e.jsxs(l0,{children:[e.jsx(Ii,{$active:D==="insights",onClick:()=>F("insights"),whileTap:{scale:.98},children:"Insights"}),e.jsx(Ii,{$active:D==="transactions",onClick:()=>F("transactions"),whileTap:{scale:.98},children:"Transactions"})]}),e.jsx(U,{mode:"wait",children:D==="insights"?e.jsx(wg,{insights:b,hasTransactions:B.length>0,activeFilterCount:f,onDrillDown:P},"insights"):e.jsx(kg,{groupedTransactions:y,categories:k,activeFilterCount:f,onEditTransaction:m,onDeleteTransaction:L},"transactions")})]}),e.jsx(Cg,{drillDown:T,transactions:O,onClose:$})]})});function Dg(){const[t,n]=h.useState([]),[a,r]=h.useState({}),[i,c]=h.useState({}),[l,d]=h.useState({}),[p,s]=h.useState([]),u=h.useRef(null);h.useEffect(()=>{const w=jl(),_=wl(),A=kl(),D=Cl(),F=Sl();n(w),r(_),c(A),d(D),s(F)},[]);const g=h.useCallback(w=>{n(_=>{const A=[..._,w];return requestAnimationFrame(()=>rn(A)),A})},[]),x=h.useCallback(w=>{n(_=>{const A=_.filter(D=>D.id!==w);return requestAnimationFrame(()=>rn(A)),A})},[]),f=h.useCallback(w=>{n(_=>{const A=_.map(D=>D.id===w.id?w:D);return requestAnimationFrame(()=>rn(A)),A})},[]),j=h.useCallback(w=>{s(w),requestAnimationFrame(()=>Xa(w))},[]),k=h.useCallback((w,_,A)=>{r(w),c(_),d(A),requestAnimationFrame(()=>{Ga(w),Ka(_),Ja(A)})},[]),S=h.useCallback(()=>{Ol(t,a,i,l,p)},[t,a,i,l,p]),I=h.useCallback(()=>{var w;(w=u.current)==null||w.click()},[]),v=h.useCallback(w=>{var D;const _=(D=w.target.files)==null?void 0:D[0];if(!_)return;const A=new FileReader;A.onload=F=>{var b;const B=(b=F.target)==null?void 0:b.result,y=Bl(B);y?window.confirm(`Import backup from ${new Date(y.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${y.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(n(y.transactions),r(y.initialBalances),c(y.initialCCBills),d(y.ccLimits||{}),s(y.categories||[]),rn(y.transactions),Ga(y.initialBalances),Ka(y.initialCCBills),Ja(y.ccLimits||{}),Xa(y.categories||[])):alert("Invalid backup file.")},A.readAsText(_),w.target.value=""},[]);return{transactions:t,initialBalances:a,initialCCBills:i,ccLimits:l,categories:p,addTransaction:g,deleteTransaction:x,updateTransaction:f,saveCategories:j,saveInitialData:k,handleExport:S,handleImportClick:I,fileInputRef:u,handleFileChange:v}}function Tg(t){const[n,a]=h.useState(!1),[r,i]=h.useState(Zi),[c,l]=h.useState(Qi),[d,p]=h.useState("all"),[s,u]=h.useState("all"),[g,x]=h.useState([]),[f,j]=h.useState(!1),[k,S]=h.useState(!1),I=h.useRef(null),v=h.useRef(null),w=[...zt],_=[...wt],{filteredTransactions:A,groupedTransactions:D,activeFilterCount:F}=h.useMemo(()=>{let b=t.filter(P=>!(P.date<r||P.date>c||d!=="all"&&(!P.categoryId||P.categoryId!==d)||s!=="all"&&(s==="credit"&&!w.includes(P.type)||s==="debit"&&!_.includes(P.type))||g.length>0&&!g.includes(P.accountId)));b=b.sort((P,$)=>{const m=$.date.localeCompare(P.date);return m!==0?m:$.id.localeCompare(P.id)});const T=bg(b);let O=0;return d!=="all"&&O++,s!=="all"&&O++,g.length>0&&O++,{filteredTransactions:b,groupedTransactions:T,activeFilterCount:O}},[t,r,c,d,s,g]),B=h.useCallback(b=>{x(T=>T.includes(b)?T.filter(O=>O!==b):[...T,b])},[]),y=h.useCallback(()=>{i(Zi()),l(Qi()),p("all"),u("all"),x([])},[]);return{filterExpanded:n,setFilterExpanded:a,filterStartDate:r,setFilterStartDate:i,filterEndDate:c,setFilterEndDate:l,filterCategory:d,setFilterCategory:p,filterType:s,setFilterType:u,filterAccounts:g,toggleAccountFilter:B,filterStartCalendarOpen:f,setFilterStartCalendarOpen:j,filterEndCalendarOpen:k,setFilterEndCalendarOpen:S,filterStartDateRef:I,filterEndDateRef:v,filteredTransactions:A,groupedTransactions:D,activeFilterCount:F,resetFilters:y}}function Ig(t,n,a,r){return{insights:h.useMemo(()=>{const c=t,l=On();let d=0;const p={};l.forEach(y=>{const b=An(a[y.id],r);b.amount>0&&(d+=b.amount,p[y.id]=b.amount)});const s=c.filter(y=>zt.includes(y.type)).reduce((y,b)=>y+b.amount,0),g=c.filter(y=>wt.includes(y.type)).reduce((y,b)=>y+b.amount,0)+d,x=s-g,f=c.filter(y=>zt.includes(y.type)).length,j=c.filter(y=>wt.includes(y.type)).length+(d>0?1:0),k=f>0?s/f:0,S=j>0?g/j:0,I={};d>0&&(I["initial-balance"]={id:"initial-balance",name:"Initial Balance",amount:d,count:Object.keys(p).length}),c.forEach(y=>{var b;if(wt.includes(y.type)){const T=y.categoryId||"uncategorized",O=y.categoryId?((b=n.find(P=>P.id===y.categoryId))==null?void 0:b.name)||"Unknown":"Uncategorized";I[T]||(I[T]={id:T,name:O,amount:0,count:0}),I[T].amount+=y.amount,I[T].count++}});const v=Object.entries(I).map(([y,b])=>({...b,id:y})).sort((y,b)=>b.amount-y.amount).slice(0,6),w={};Object.entries(p).forEach(([y,b])=>{const T=Rt(y);T&&(w[y]={id:y,name:T.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:b,count:1,type:T.type})}),c.forEach(y=>{const b=Rt(y.accountId);b&&(w[y.accountId]||(w[y.accountId]={id:y.accountId,name:b.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:0,count:0,type:b.type}),w[y.accountId].amount+=y.amount,w[y.accountId].count++)});const _=Object.entries(w).map(([y,b])=>({...b,id:y})).sort((y,b)=>b.amount-y.amount),A={credit_card_spend:{id:"credit_card_spend",label:"CC Spending",amount:d,count:d>0?1:0},cc_payment:{id:"cc_payment",label:"CC Payments",amount:0,count:0},bank_debit:{id:"bank_debit",label:"Bank Debits",amount:0,count:0},bank_credit:{id:"bank_credit",label:"Bank Credits",amount:0,count:0},liquid_fund_credit:{id:"liquid_fund_credit",label:"LF Deposits",amount:0,count:0},liquid_fund_debit:{id:"liquid_fund_debit",label:"LF Withdrawals",amount:0,count:0}};c.forEach(y=>{A[y.type]&&(A[y.type].amount+=y.amount,A[y.type].count++)});const D=Object.entries(A).map(([y,b])=>({...b,id:y})).filter(y=>y.count>0||y.amount>0).sort((y,b)=>b.amount-y.amount),F=[...c].filter(y=>wt.includes(y.type)).sort((y,b)=>b.amount-y.amount).slice(0,3),B=[...c].filter(y=>zt.includes(y.type)).sort((y,b)=>b.amount-y.amount).slice(0,3);return{totalIncoming:s,totalOutgoing:g,netFlow:x,incomingCount:f,outgoingCount:j,totalCount:c.length,avgIncoming:k,avgOutgoing:S,categoryBreakdown:v,accountBreakdown:_,typeBreakdown:D,largestOutgoing:F,largestIncoming:B}},[t,n,a,r])}}function $g(){const[t,n]=h.useState("summary"),[a,r]=h.useState("transactions"),i=h.useCallback(s=>{r(s),window.scrollTo(0,0)},[]),[[,c],l]=h.useState([0,0]),d=h.useCallback(s=>{const u=Ke.findIndex(x=>x.id===s),g=Ke.findIndex(x=>x.id===t);l([u,u>g?1:-1]),n(s),window.scrollTo(0,0)},[t]),p=h.useCallback((s,u)=>{const f=Ke.findIndex(j=>j.id===t);(u.offset.x<-50||u.velocity.x<-500)&&f<Ke.length-1?d(Ke[f+1].id):(u.offset.x>50||u.velocity.x>500)&&f>0&&d(Ke[f-1].id)},[t,d]);return{activeTab:t,historySubTab:a,direction:c,handleTabChange:d,setHistorySubTab:i,handleDragEnd:p}}function Lg(t){const[n,a]=h.useState(null),r=h.useMemo(()=>n?t.filter(c=>{switch(n.type){case"category":return n.id==="uncategorized"?!c.categoryId&&wt.includes(c.type):c.categoryId===n.id;case"account":return c.accountId===n.id;case"transactionType":return c.type===n.id;default:return!1}}).sort((c,l)=>l.date.localeCompare(c.date)||l.amount-c.amount):[],[n,t]);return{drillDown:n,setDrillDown:a,drillDownTransactions:r,closeDrillDown:()=>a(null)}}const _g=()=>{const[t,n]=h.useState(me(new Date)),[a,r]=h.useState(!1),[i,c]=h.useState(!1),[l,d]=h.useState(null),{transactions:p,initialBalances:s,initialCCBills:u,ccLimits:g,categories:x,addTransaction:f,deleteTransaction:j,updateTransaction:k,saveCategories:S,saveInitialData:I,handleExport:v,handleImportClick:w,fileInputRef:_,handleFileChange:A}=Dg(),{activeTab:D,historySubTab:F,direction:B,handleTabChange:y,setHistorySubTab:b,handleDragEnd:T}=$g(),{filterExpanded:O,setFilterExpanded:P,filterStartDate:$,setFilterStartDate:m,filterEndDate:L,setFilterEndDate:M,filterCategory:G,setFilterCategory:V,filterType:K,setFilterType:H,filterAccounts:ue,toggleAccountFilter:re,filterStartCalendarOpen:ie,setFilterStartCalendarOpen:W,filterEndCalendarOpen:xe,setFilterEndCalendarOpen:Ie,filterStartDateRef:he,filterEndDateRef:pe,filteredTransactions:ve,groupedTransactions:$e,activeFilterCount:ye,resetFilters:Dt}=Tg(p),{insights:Z}=Ig(ve,x,u,t),{drillDown:Ne,setDrillDown:oe,drillDownTransactions:tt,closeDrillDown:Jt}=Lg(ve),Xt=h.useMemo(()=>Ll(p,t,s,u),[t,p,s,u]),Zt=h.useMemo(()=>On().map(Hn=>Il(Hn,p,t,u)),[p,t,u]),Rn=be=>{f(be),y("transactions")},Wn=()=>{switch(D){case"summary":return e.jsx(Kh,{balances:Xt,ccLimits:g,creditCardDetailedBalances:Zt});case"cards":return e.jsx(pg,{creditCardDetailedBalances:Zt,ccLimits:g});case"transactions":return e.jsx(Sg,{filterExpanded:O,onToggleFilterExpanded:()=>P(!O),filterStartDate:$,onStartDateChange:m,filterEndDate:L,onEndDateChange:M,filterCategory:G,onCategoryChange:V,filterType:K,onTypeChange:H,filterAccounts:ue,onToggleAccount:re,activeFilterCount:ye,onResetFilters:Dt,categories:x,filterStartCalendarOpen:ie,onStartCalendarOpenChange:W,filterEndCalendarOpen:xe,onEndCalendarOpenChange:Ie,filterStartDateRef:he,filterEndDateRef:pe,historySubTab:F,onSubTabChange:b,filteredTransactions:ve,groupedTransactions:$e,insights:Z,drillDown:Ne,drillDownTransactions:tt,onDrillDown:oe,onCloseDrillDown:Jt,onEditTransaction:d,onDeleteTransaction:j});case"add":return e.jsx(xg,{categories:x,onAddTransaction:Rn});case"manage":return e.jsx(mg,{categoriesCount:x.length,transactionsCount:p.length,onOpenBalanceModal:()=>r(!0),onOpenCategoryModal:()=>c(!0),onExport:v,onImport:w});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(Xh,{children:e.jsxs(Zh,{children:[e.jsx(Qh,{children:e.jsx(Wu,{selectedDate:t,onDateChange:n})}),e.jsx(s0,{children:Ke.map(be=>e.jsx(c0,{$active:D===be.id,onClick:()=>y(be.id),whileTap:{scale:.98},children:be.label},be.id))})]})}),e.jsxs(Jh,{variants:gg,initial:"hidden",animate:"visible",children:[e.jsx(t0,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:T,children:e.jsxs(po,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(e0,{}),e.jsx(n0,{style:{flex:1},children:e.jsx(U,{mode:"wait",custom:B,children:e.jsx(r0,{custom:B,variants:fg,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:Wn()},D)})})]})}),e.jsx(o0,{ref:_,type:"file",accept:".json",onChange:A}),e.jsx(Zx,{isOpen:a,onClose:()=>r(!1),initialBalances:s,initialCCBills:u,ccLimits:g,onSave:I}),e.jsx(Lh,{isOpen:i,onClose:()=>c(!1),categories:x,onSave:S}),e.jsx(Gh,{isOpen:!!l,onClose:()=>d(null),transaction:l,categories:x,onSave:k})]})]})},ys=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),Ag=async(t,n,a,r=48)=>{try{const i=await ys(),c=Math.min(n,a)*.03,l=n-r-c,d=a-r-c;t.globalAlpha=.7,t.drawImage(i,l,d,r,r),t.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},oa=(t,n,a)=>{const r=[],i=d=>{const p=[];let s=d;for(;s.length>0;){let u=s.length;for(;u>0&&t.measureText(s.slice(0,u)).width>a;)u--;u=Math.max(1,u);const g=s.slice(0,u),x=g.lastIndexOf("/"),f=g.lastIndexOf("-"),j=g.lastIndexOf(".");let k=u;const S=[x,f,j].filter(I=>I>0&&I<u-1);S.length>0&&(k=Math.max(...S)+1),p.push(s.slice(0,k)),s=s.slice(k)}return p},c=n.split(" ");let l="";for(const d of c)if(t.measureText(d).width>a){l&&(r.push(l),l="");const s=i(d);for(let u=0;u<s.length;u++)u<s.length-1?r.push(s[u]):l=s[u]}else{const s=l?`${l} ${d}`:d;t.measureText(s).width>a&&l?(r.push(l),l=d):l=s}return l&&r.push(l),r},Og=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:i,backgroundColor:c,alignment:l,aspectRatio:d,padding:p}=t,s=document.createElement("canvas");s.width=d.width,s.height=d.height;const u=s.getContext("2d");if(!u)throw new Error("Failed to get canvas context");u.fillStyle=c,u.fillRect(0,0,s.width,s.height);const g=a*(d.width/1080);u.font=`600 ${g}px ${r}`,u.fillStyle=i;const x=p*(d.width/1080),f=s.width-x*2,j=n.split(`
`),k=[];for(const A of j)if(A.trim()==="")k.push("");else{const D=oa(u,A,f);k.push(...D)}const S=g*1.4,I=k.length*S;let v=(s.height-I)/2+g;u.textAlign=l;let w;switch(l){case"left":w=x;break;case"right":w=s.width-x;break;default:w=s.width/2}for(const A of k)A!==""&&u.fillText(A,w,v),v+=S;const _=Math.min(s.width,s.height)*.06;return await Ag(u,s.width,s.height,_),s.toDataURL("image/png",1)},Fg=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:i}=t,c=document.createElement("canvas");c.width=a.width,c.height=a.height;const l=c.getContext("2d");if(!l)throw new Error("Failed to get canvas context");const d=a.width/1080,p=a.height>a.width,s=r==="#000000"?"#ffffff":"#000000",u=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";l.fillStyle=r,l.fillRect(0,0,c.width,c.height);const g=64*d,x=c.width-g*2,f=20*d,j=36*d,k=(p?44:40)*d,S=(p?24:22)*d,I=18*d,v=k*1.25,w=S*1.45,_=p?5:4,A=p?4:3;l.font=`700 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`;const D=oa(l,n.title,x),F=D.slice(0,_);if(D.length>_&&F.length>0){const W=F[F.length-1];W.endsWith("...")||(F[F.length-1]=W.slice(0,-3)+"...")}l.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`;const B=n.description?oa(l,n.description,x):[],y=B.slice(0,A);if(B.length>A&&y.length>0){const W=y[y.length-1];W.endsWith("...")||(y[y.length-1]=W.slice(0,-3)+"...")}const b=j+f,T=F.length*v,O=y.length>0?f+y.length*w:0,P=b+T+O,$=Math.min(c.width,c.height)*.045,m=g+$+16*d,L=c.height-m-g,M=L-P-f*2;let G=0;if(n.image&&M>100*d){const W=p?c.width*.5:c.width*.4,xe=120*d;G=Math.min(W,Math.max(xe,M))}const V=G>0?f+G:0,K=P+V;let H=g+Math.max(0,(L-K)/2);if(n.favicon)try{const W=await eo(n.favicon);l.save(),l.beginPath(),l.arc(g+j/2,H+j/2,j/2,0,Math.PI*2),l.closePath(),l.clip(),l.drawImage(W,g,H,j,j),l.restore()}catch{l.fillStyle=i,l.beginPath(),l.arc(g+j/2,H+j/2,j/2,0,Math.PI*2),l.fill()}n.siteName&&(l.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=u,l.textAlign="left",l.textBaseline="middle",l.fillText(n.siteName,g+j+10*d,H+j/2)),H+=j+f,l.font=`700 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=s,l.textAlign="left",l.textBaseline="top";for(const W of F)l.fillText(W,g,H),H+=v;if(y.length>0){H+=f,l.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=u;for(const W of y)l.fillText(W,g,H),H+=w}if(n.image&&G>0){H+=f;try{const W=await eo(n.image),xe=x;l.save(),Bg(l,g,H,xe,G,10*d),l.clip();const Ie=W.width/W.height,he=xe/G;let pe=0,ve=0,$e=W.width,ye=W.height;Ie>he?($e=W.height*he,pe=(W.width-$e)/2):(ye=W.width/he,ve=(W.height-ye)/2),l.drawImage(W,pe,ve,$e,ye,g,H,xe,G),l.restore()}catch{}}const ue=c.height-g;l.font=`500 ${I}px -apple-system, BlinkMacSystemFont, monospace`,l.fillStyle=i;const re=x-$-16*d;let ie=n.url;for(;l.measureText(ie).width>re&&ie.length>20;)ie=ie.slice(0,-4)+"...";l.textAlign="left",l.textBaseline="middle",l.fillText(ie,g,ue-$/2);try{const W=await ys();l.globalAlpha=.7,l.drawImage(W,c.width-g-$,ue-$,$,$),l.globalAlpha=1}catch{}return c.toDataURL("image/png",1)},eo=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),Bg=(t,n,a,r,i,c)=>{t.beginPath(),t.moveTo(n+c,a),t.lineTo(n+r-c,a),t.quadraticCurveTo(n+r,a,n+r,a+c),t.lineTo(n+r,a+i-c),t.quadraticCurveTo(n+r,a+i,n+r-c,a+i),t.lineTo(n+c,a+i),t.quadraticCurveTo(n,a+i,n,a+i-c),t.lineTo(n,a+c),t.quadraticCurveTo(n,a,n+c,a),t.closePath()},Mg=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},Pg=async t=>{var i,c;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const l=`https://api.microlink.io?url=${encodeURIComponent(t)}`,d=await fetch(l);if(!d.ok)return r;const p=await d.json();return p.status==="success"&&p.data?{title:p.data.title||a,description:p.data.description||"",image:((i=p.data.image)==null?void 0:i.url)||null,siteName:p.data.publisher||a,url:t,favicon:((c=p.data.logo)==null?void 0:c.url)||r.favicon}:r}catch(l){return console.warn("Failed to fetch URL metadata:",l),r}},to=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],Eg='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',Ng=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},zg=o.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,Rg=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--bg-primary);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: 1024px) {
    padding: 32px;
  }
`,Wg=o.div`
  width: 100%;
  max-width: 600px;
`,Hg=o.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,Yg=o.div`
  position: absolute;
  inset: 0;
`,Vg=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,Ug=o(C.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--text-tertiary);
  
  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }
  
  span {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.6;
  }
`,qg=o.div`
  width: 100%;
  padding: 24px;
  background: var(--bg-primary);
  border-top: 1px solid var(--glass-border);
  
  @media (min-width: 1024px) {
    width: 380px;
    min-width: 380px;
    padding: 32px;
    border-top: none;
    border-left: 1px solid var(--glass-border);
    overflow-y: auto;
    max-height: calc(100vh - 80px);
  }
`,Gg=o.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Pt=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Et=o.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,Kg=o.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  resize: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  -webkit-user-select: text;
  user-select: text;
  touch-action: manipulation;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.1);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`,no=o.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,ro=o.button`
  flex: 1;
  padding: 10px 16px;
  background: ${({$active:t})=>t?"var(--bg-primary)":"transparent"};
  border: none;
  border-radius: 8px;
  color: ${({$active:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({$active:t})=>t?"0 1px 3px rgba(0,0,0,0.1)":"none"};
  
  &:hover {
    color: var(--text-primary);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,Jg=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Xg=o.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,Zg=o.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--glass-border);
  border-radius: 4px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.15s ease;
    
    &:hover {
      transform: scale(1.1);
    }
    
    &:active {
      transform: scale(0.95);
    }
  }
  
  &::-moz-range-thumb {
    width: 22px;
    height: 22px;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1);
  }
`,Qg=o.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,ef=o(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  background: ${({$variant:t})=>t==="secondary"?"var(--glass-bg)":"var(--accent)"};
  border: ${({$variant:t})=>t==="secondary"?"1px solid var(--glass-border)":"none"};
  border-radius: 14px;
  color: ${({$variant:t})=>t==="secondary"?"var(--text-primary)":"white"};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,tf=o(C.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,nf=o.input`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,rf=o.textarea`
  width: 100%;
  padding: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 16px; /* Minimum 16px to prevent iOS Safari zoom */
  line-height: 1.5;
  resize: none;
  min-height: 60px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`,af=o(C.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,of=o(C.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,sf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),cf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),lf=()=>{const{isDark:t}=la(),[n,a]=h.useState(""),[r,i]=h.useState(64),[c,l]=h.useState("left"),[d,p]=h.useState(to[1]),[s,u]=h.useState(null),[g,x]=h.useState(!1),[f,j]=h.useState(null),[k,S]=h.useState(""),[I,v]=h.useState(""),[w,_]=h.useState(!1),[A,D]=h.useState(null),F=h.useMemo(()=>Ng(n),[n]),B=t?"#000000":"#ffffff",y=t?"#ffffff":"#000000",b=`${d.height/d.width*100}%`,T=h.useCallback(async()=>{if(!(!F||!n.trim())){_(!0),D(null),u(null);try{const m=await Pg(n.trim());j(m),S(m.title),v(m.description)}catch{D("Unable to fetch URL preview")}_(!1)}},[n,F]),O=h.useCallback(async()=>{if(!n.trim()||F){F||u(null);return}x(!0);try{const m=await Og({text:n.trim(),fontSize:r,fontFamily:Eg,textColor:y,backgroundColor:B,alignment:c,aspectRatio:d,padding:80});u(m)}catch(m){console.error("Preview generation failed:",m)}x(!1)},[n,F,r,c,d,B,y]),P=h.useCallback(async()=>{if(f){x(!0);try{const m=await Fg({metadata:{...f,title:k||f.title,description:I||f.description},aspectRatio:d,backgroundColor:B,accentColor:"#2A9D8F"});u(m)}catch(m){console.error("URL preview generation failed:",m)}x(!1)}},[f,k,I,d,B]);h.useEffect(()=>{if(F)return;const m=setTimeout(O,200);return()=>clearTimeout(m)},[O,F]),h.useEffect(()=>{F?T():(j(null),S(""),v(""),D(null))},[F,T]),h.useEffect(()=>{f&&P()},[f,k,I,d,P]);const $=()=>{if(s){const M=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;Mg(s,M)}};return e.jsxs(zg,{children:[e.jsx(Rg,{children:e.jsx(Wg,{children:e.jsx(Hg,{$bgColor:B,$paddingBottom:b,children:e.jsxs(Yg,{children:[s&&e.jsx(Vg,{src:s,alt:"Preview"}),e.jsx(U,{children:!s&&e.jsxs(Ug,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(cf,{}),e.jsx("span",{children:F?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(qg,{children:e.jsxs(Gg,{children:[e.jsxs(Pt,{children:[e.jsx(Et,{children:"Content"}),e.jsx(Kg,{value:n,onChange:m=>a(m.target.value),onContextMenu:m=>m.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),F?e.jsxs(e.Fragment,{children:[w&&e.jsx(Pt,{style:{alignItems:"center"},children:e.jsx(of,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),A&&e.jsx(af,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:A}),f&&e.jsxs(tf,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(Et,{children:"Edit Details"}),e.jsx(nf,{value:k,onChange:m=>S(m.target.value),placeholder:"Title"}),e.jsx(rf,{value:I,onChange:m=>v(m.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Pt,{children:[e.jsx(Et,{children:"Font Size"}),e.jsxs(Jg,{children:[e.jsx(Xg,{children:e.jsx(Zg,{type:"range",min:"24",max:"120",value:r,onChange:m=>i(Number(m.target.value))})}),e.jsx(Qg,{children:r})]})]}),e.jsxs(Pt,{children:[e.jsx(Et,{children:"Alignment"}),e.jsx(no,{children:["left","center","right"].map(m=>e.jsx(ro,{$active:c===m,onClick:()=>l(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),e.jsxs(Pt,{children:[e.jsx(Et,{children:"Format"}),e.jsx(no,{children:to.map(m=>e.jsx(ro,{$active:d.id===m.id,onClick:()=>p(m),children:m.name},m.id))})]}),e.jsxs(ef,{onClick:$,disabled:!s||g,whileTap:{scale:.98},children:[e.jsx(sf,{}),"Download Image"]})]})})]})},df=o(C.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,uf={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},pf=()=>e.jsx(df,{variants:uf,initial:"hidden",animate:"visible",children:e.jsx(lf,{})}),xf=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},hf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),gf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),ff=o.div`
  min-height: 100vh;
  position: relative;
`,mf=o.main`
  position: relative;
  z-index: 1;
`,vf=o.a`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
  z-index: 10000;
  transition: top var(--timing-small) var(--ease-standard);
  text-decoration: none;

  &:focus {
    top: 20px;
  }
`,yf=kt`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,ao=o.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,io=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${yf} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,oo=o.p`
  color: var(--text-secondary);
  font-size: 15px;
`,bf=o.button`
  padding: 12px 28px;
  background: var(--gradient);
  border: none;
  border-radius: var(--radius-full);
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(42, 157, 143, 0.3);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,jf=()=>{const t=Ps(),n=Es();return h.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function wf(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=Us(),i=h.useMemo(()=>xf()?hf:gf,[]);return n||!t&&!a?e.jsxs(ao,{children:[e.jsx(io,{children:e.jsx(i,{})}),e.jsx(oo,{children:"Authenticating..."})]}):a&&!t?e.jsxs(ao,{children:[e.jsx(io,{style:{animation:"none",opacity:1},children:e.jsx(i,{})}),e.jsx(oo,{children:"Authentication required to continue"}),e.jsx(bf,{onClick:r,children:"Try Again"})]}):e.jsxs(ff,{children:[e.jsx(jf,{}),e.jsx(vf,{href:"#main-content",children:"Skip to main content"}),e.jsx(Js,{}),e.jsx(oc,{}),e.jsx(mf,{id:"main-content",children:e.jsxs(Bs,{children:[e.jsx(Tt,{path:"/",element:e.jsx(jc,{})}),e.jsx(Tt,{path:"/tax-manager",element:e.jsx(bl,{})}),e.jsx(Tt,{path:"/expense-manager",element:e.jsx(_g,{})}),e.jsx(Tt,{path:"/canvas-manager",element:e.jsx(pf,{})}),e.jsx(Tt,{path:"/tax-calculator",element:e.jsx(Ms,{to:"/tax-manager",replace:!0})})]})})]})}function kf(){return e.jsx(Fs,{basename:"/tools",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(zs,{children:e.jsxs(Vs,{children:[e.jsx(qs,{}),e.jsx(wf,{})]})})})}so(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(kf,{})}));
