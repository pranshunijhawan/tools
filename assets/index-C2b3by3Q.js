import{j as e,m as C,A as U}from"./vendor-animation-IVPYdfZu.js";import{a as oo,r as h,L as oa,B as Ss,R as Ds,b as St,N as Ts,u as Is,c as $s}from"./vendor-react-DST-UJPA.js";import{f as Ls,d as i,m as jt,l as Je}from"./vendor-styles-CTnQ9FWC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var so,Aa=oo;so=Aa.createRoot,Aa.hydrateRoot;const co=h.createContext({isDark:!0,toggleTheme:()=>{}}),_s=({children:t})=>{const[n,a]=h.useState(()=>{if(typeof window<"u"){const o=localStorage.getItem("theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),h.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)"),c=l=>{localStorage.getItem("theme")||a(l.matches)};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]);const r=()=>a(!n);return e.jsx(co.Provider,{value:{isDark:n,toggleTheme:r},children:t})},sa=()=>{const t=h.useContext(co);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},lo=h.createContext(null),Xn="tools-auth-session",Qn="tools-webauthn-credential",As=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Os=async()=>{if(!As())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},er=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},Bs=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},Fs=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},Ms=({children:t})=>{const[n,a]=h.useState(!1),[r,o]=h.useState(!0),[c,l]=h.useState(!1),d=h.useRef(!1),p=async()=>{try{const f={challenge:er(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:er(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},w=await navigator.credentials.create({publicKey:f});return w?(localStorage.setItem(Qn,Bs(w.rawId)),!0):!1}catch(x){return console.error("Registration failed:",x),!1}},s=async()=>{try{const x=localStorage.getItem(Qn),w={challenge:er(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...x&&{allowCredentials:[{type:"public-key",id:Fs(x),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:w})}catch(x){return console.error("Authentication failed:",x),!1}},u=h.useCallback(async()=>{o(!0),l(!1);const x=sessionStorage.getItem(Xn);if(x)try{const{timestamp:w}=JSON.parse(x);if(Date.now()-w<24*60*60*1e3){a(!0),o(!1);return}}catch{}if(!await Os()){a(!0),sessionStorage.setItem(Xn,JSON.stringify({timestamp:Date.now()})),o(!1);return}try{const w=localStorage.getItem(Qn);let k=!1;w?k=await s():k=await p(),k?(a(!0),sessionStorage.setItem(Xn,JSON.stringify({timestamp:Date.now()}))):l(!0)}catch{l(!0)}o(!1)},[]);h.useEffect(()=>{d.current||(d.current=!0,u())},[u]);const g=h.useCallback(()=>{u()},[u]);return e.jsx(lo.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:c,retryAuth:g},children:t})},Ps=()=>{const t=h.useContext(lo);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Es=Ls`
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
`,Ns=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,zs=i.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Rs=()=>{const{isDark:t}=sa();return e.jsx(Ns,{children:e.jsx(zs,{$isDark:t})})},Ws=i(C.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,Hs=i.div`
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
`,Ys=i(oa)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,Vs=i.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,Us=i.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,qs=i(C.button)`
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
`,Gs=i(C.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ks=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Js=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Zs=()=>{const{isDark:t,toggleTheme:n}=sa();return e.jsx(Ws,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(Hs,{children:[e.jsx(Ys,{to:"/","aria-label":"Go to homepage",children:e.jsx(Vs,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(Us,{}),e.jsx(qs,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(U,{mode:"wait",children:e.jsx(Gs,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(Js,{}):e.jsx(Ks,{})},t?"moon":"sun")})})]})})},Xs=i(C.div)`
  position: relative;
`,Qs=i(oa)`
  display: block;
  text-decoration: none;
  color: inherit;
`,uo=i(C.div)`
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
`,ec=i(C.div)`
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
`,tc=i.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,nc={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},rc={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},ac=({title:t,icon:n,to:a})=>e.jsx(Xs,{variants:nc,whileHover:"hover",whileTap:"tap",children:e.jsx(Qs,{to:a,children:e.jsxs(uo,{variants:rc,children:[e.jsx(ec,{children:n}),e.jsx(tc,{children:t})]})})}),ic=i.div`
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
`,oc=i(C.div)`
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
`,sc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},cc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),lc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),dc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),uc=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(cc,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:e.jsx(lc,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(dc,{}),to:"/canvas-manager"}],pc=()=>e.jsx(ic,{children:e.jsx(oc,{variants:sc,initial:"hidden",animate:"visible",children:uc.map(t=>e.jsx(ac,{title:t.title,icon:t.icon,to:t.to},t.id))})}),po=i.div`
  width: 100%;
  max-width: ${({$maxWidth:t="wide"})=>{switch(t){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`;i.section`
  padding: var(--space-3xl) 0;

  @media (min-width: 1024px) {
    padding: var(--space-4xl) 0;
  }

  @media (min-width: 1280px) {
    padding: var(--space-5xl) 0;
  }
`;const Sn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Oa=75e3,mt=4,xc=12e5,hc=6e4,Ba=5e6,Fa=10,gc=12,fc=1800;function Ze(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let o="";const c=r.slice(-3),l=r.slice(0,-3);if(l.length>0){const d=[];let p=l;for(;p.length>0;)p.length>=2?(d.unshift(p.slice(-2)),p=p.slice(0,-2)):(d.unshift(p),p="");o=d.join(",")+","+c}else o=c;return(n?"-":"")+o}function E(t){return"₹"+Ze(t)}function N(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[o,c]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+Ze(parseInt(o))+"."+c}function Ma(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:Ze(t)}function mc(t){for(let n=Sn.length-1;n>=0;n--)if(t>Sn[n].from)return Sn[n].rate;return 0}function vc(t){const n=[];let a=t,r=0;for(const o of Sn){const c=o.from,d=(o.to??1/0)-c;if(a<=0){n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:0,taxInSlab:0});continue}const p=Math.min(a,d),s=p*o.rate/100;n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:p>0?p:0,taxInSlab:s}),r+=s,a-=p}return{slabs:n,totalTax:r}}function yc(t,n){if(n>Ba){const r=t*(1+Fa/100)*(1+mt/100),o=n-Ba,l=(t+o)*(1+mt/100),d=l<r,p=Math.min(r,l),s=p/(1+mt/100),u=s-t,g=p-s;return{surchargeApplicable:!0,surchargeRate:Fa,surchargeAmount:u,marginalReliefApplied:d,taxAfterSurcharge:s,cess:g,totalTax:p}}else{const a=t*(mt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function Pa(t,n,a,r,o,c,l){const d=t*n/100,p=t-d;let s=0;o==="percentage"?s=t*c/100:o==="amount"&&(s=c);const u=t+s;let g=0,x=0;a&&(r==="percentage"?(g=d*gc/100,x=g):(g=fc*12,x=g));const f=t-x,w=l.map(re=>({name:re.name,amount:re.amount*12})),k=w.reduce((re,ie)=>re+ie.amount,0),S=Math.max(0,f-Oa),{slabs:I,totalTax:v}=vc(S);let j=0,_=v;S<=xc&&(j=Math.min(v,hc),_=Math.max(0,v-j));const{surchargeApplicable:A,surchargeRate:D,surchargeAmount:B,marginalReliefApplied:F,taxAfterSurcharge:y,cess:b,totalTax:T}=yc(_,S),O=g+x,P=T,$=g+T+k,m=f-g-T-k,L=m/12,M=f>0?T/f*100:0,G=mc(S);let V=0,K=s;if(s>0&&G>0){let re=s*G/100;A&&(re=re*(1+D/100)),V=re*(1+mt/100),K=s-V}const H=m+K,ue=H/12;return{baseSalary:t,basicSalary:d,hra:p,bonus:s,totalEarnings:u,employeePF:g,employerPF:x,grossSalary:f,standardDeduction:Oa,additionalDeductions:w,totalAdditionalDeductions:k,taxableIncome:S,slabs:I,taxBeforeSurcharge:v,surchargeApplicable:A,surchargeRate:D,surchargeAmount:B,marginalReliefApplied:F,taxAfterSurcharge:y,cessRate:mt,cess:b,totalTax:T,rebate87A:j,totalPFDeduction:O,totalTaxDeduction:P,totalDeductions:$,netSalaryYearly:m,netSalaryMonthly:L,effectiveTaxRate:M,bonusTaxRate:G,bonusTaxAmount:V,bonusAfterTax:K,totalIncomeYearly:H,totalIncomeMonthly:ue}}function bc(t){const n=Pa(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const o=t.baseSalary*(1+r/100);a=Pa(o,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const ca="taxCalculatorInput";function jc(t){localStorage.setItem(ca,JSON.stringify(t))}function wc(){localStorage.removeItem(ca)}function xo(){const t=localStorage.getItem(ca);if(t)try{return JSON.parse(t)}catch{return null}return null}const kc={financialYear:"FY 2025-26"},Cc=i(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Dt=i.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,Tt=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,It=i.div`
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
`,$t=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Sc=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,nt=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ea=i.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ze=i.input`
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
`,tr=i.div`
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
`,nr=i.div`
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
`,Na=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Lt=i(C.button)`
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
`,Dc=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,rr=i(C.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,ar=i(C.button)`
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
`,Tc=i(C.button)`
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
`,Ic=i.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,$c=i(C.button)`
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
`,Lc=i(C.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,_c=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Ac=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Oc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Bc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),Fc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Mc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),ir=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Tn={type:"spring",stiffness:300,damping:30,mass:.8},Pc={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Tn}},Ec={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Tn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Tn},opacity:{duration:.1}}}},Nc={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Tn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function or(t){const n=t.replace(/[^\d]/g,"");return n?Ze(parseInt(n)):""}function Qt(t){return parseInt(t.replace(/,/g,""))||0}const zc=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,o]=h.useState(""),[c,l]=h.useState("50"),[d,p]=h.useState("percentage"),[s,u]=h.useState("none"),[g,x]=h.useState(""),[f,w]=h.useState([]),[k,S]=h.useState(""),[I,v]=h.useState(!1),j=h.useRef(!1);h.useEffect(()=>{const m=xo();m&&(o(Ze(m.baseSalary)),l(m.basicPercentage.toString()),p(m.pfType),u(m.bonusType),x(m.bonusValue>0?m.bonusType==="amount"?Ze(m.bonusValue):m.bonusValue.toString():""),w(m.additionalDeductions.map(L=>({name:L.name,amount:Ze(L.amount)}))),S(m.hikePercentage>0?m.hikePercentage.toString():"")),v(!0)},[]),h.useEffect(()=>{I&&a&&r&&!j.current&&(j.current=!0,setTimeout(()=>{b()},100))},[I,a,r]);const _=m=>{o(or(m))},A=m=>{x(or(m))},D=(m,L)=>{const M=[...f];M[m].amount=or(L),w(M)},B=()=>{w([...f,{name:"",amount:""}])},F=m=>{w(f.filter((L,M)=>M!==m))},y=(m,L)=>{const M=[...f];M[m].name=L,w(M)},b=()=>{const m={baseSalary:Qt(r),basicPercentage:parseFloat(c)||50,calculatePF:!0,pfType:d,bonusType:s,bonusValue:s==="amount"?Qt(g):parseFloat(g)||0,additionalDeductions:f.filter(L=>L.name&&L.amount).map(L=>({name:L.name,amount:Qt(L.amount)})),hikePercentage:parseFloat(k)||0};jc(m),t(m)},T=()=>{o(""),l("50"),p("percentage"),u("none"),x(""),w([]),S(""),wc(),n==null||n()},P=Qt(r)>0,$=r||f.length>0||s!=="none"||k;return e.jsxs(Cc,{variants:Pc,initial:"hidden",animate:"visible",children:[e.jsxs(Dt,{children:[e.jsxs(Tt,{children:[e.jsx(It,{$color:"#10b981",children:e.jsx(_c,{})}),e.jsx($t,{children:"Salary Details"})]}),e.jsxs(Sc,{children:[e.jsxs(nt,{children:[e.jsx(Ea,{children:"Yearly CTC *"}),e.jsx(tr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:m=>_(m.target.value)})})]}),e.jsxs(nt,{children:[e.jsx(Ea,{children:"Basic %"}),e.jsx(nr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"50",value:c,onChange:m=>l(m.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(Dt,{children:[e.jsxs(Tt,{children:[e.jsx(It,{$color:"#3b82f6",children:e.jsx(Ac,{})}),e.jsx($t,{children:"Provident Fund"})]}),e.jsxs(Na,{children:[e.jsx(Lt,{$active:d==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(Lt,{$active:d==="flat",onClick:()=>p("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(Dt,{children:[e.jsxs(Tt,{children:[e.jsx(It,{$color:"#f59e0b",children:e.jsx(Oc,{})}),e.jsx($t,{children:"Bonus (Optional)"})]}),e.jsxs(Na,{children:[e.jsx(Lt,{$active:s==="none",onClick:()=>u("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(Lt,{$active:s==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(Lt,{$active:s==="amount",onClick:()=>u("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(U,{initial:!1,children:s!=="none"&&e.jsx(C.div,{initial:"hidden",animate:"visible",exit:"exit",variants:Ec,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(rr,{children:[e.jsx(nt,{style:{flex:1},children:s==="percentage"?e.jsx(nr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:m=>x(m.target.value)})}):e.jsx(tr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:m=>A(m.target.value)})})}),e.jsx(U,{children:g&&e.jsx(ar,{onClick:()=>x(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(ir,{})})})]})},"bonus-input")})]}),e.jsxs(Dt,{children:[e.jsxs(Tt,{children:[e.jsx(It,{$color:"#ec4899",children:e.jsx(Bc,{})}),e.jsx($t,{children:"Monthly Deductions"})]}),e.jsxs(Dc,{children:[e.jsx(U,{mode:"popLayout",children:f.map((m,L)=>e.jsxs(rr,{variants:Nc,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(nt,{style:{flex:1},children:e.jsx(ze,{type:"text",placeholder:"Name (e.g., Cab)",value:m.name,onChange:M=>y(L,M.target.value)})}),e.jsx(nt,{style:{flex:1},children:e.jsx(tr,{children:e.jsx(ze,{type:"text",inputMode:"numeric",placeholder:"Amount",value:m.amount,onChange:M=>D(L,M.target.value)})})}),e.jsx(ar,{onClick:()=>F(L),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(ir,{})})]},L))}),e.jsxs(Tc,{onClick:B,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(Mc,{}),"Add Deduction"]})]})]}),e.jsxs(Dt,{children:[e.jsxs(Tt,{children:[e.jsx(It,{$color:"#8b5cf6",children:e.jsx(Fc,{})}),e.jsx($t,{children:"Hike / Appraisal"})]}),e.jsxs(rr,{children:[e.jsx(nt,{style:{flex:1},children:e.jsx(nr,{children:e.jsx(ze,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:k,onChange:m=>S(m.target.value),min:"0",max:"200"})})}),e.jsx(U,{children:k&&e.jsx(ar,{onClick:()=>S(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(ir,{})})})]})]}),e.jsxs(Ic,{children:[e.jsx($c,{onClick:b,disabled:!P,whileHover:P?{scale:1.02}:{},whileTap:P?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(U,{children:$&&e.jsx(Lc,{onClick:T,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},Rc=i(C.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Re=i(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,We=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,He=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ye=i.div`
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
`,Ve=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Ue=i.div`
  padding: 16px;
`,_t=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,we=i.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,sr=i(C.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,cr=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,lr=i.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,rt=i.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,Wc=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,at=i.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,it=i.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,ot=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,st=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Le=i.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,te=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,ne=i.span`
  font-size: 14px;
  font-weight: ${({$bold:t})=>t?"600":"400"};
  color: ${({$bold:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,R=i.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:t,$negative:n})=>t?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,le=i.div`
  text-align: right;
  flex-shrink: 0;
`,de=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Hc=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,za=i(C.div)`
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
`,Ae=i.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Yc=i(C.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,Vc=i.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,Uc=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,qc=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Gc=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Kc=i.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,Jc=i.span`
  font-size: 12px;
  color: var(--text-secondary);
`,Zc=i.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,At=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,ke=i.div`
  padding: 14px;
  background: ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Ce=i.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Se=i.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,Ot=i.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,Ra=i(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,Wa=i.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,Xc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Qc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),el=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),tl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ha=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),nl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),rl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},qe={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},al=({breakdown:t})=>{const[n,a]=h.useState("monthly"),r=n==="monthly"?1/12:1,o=x=>x===0?"#10b981":x<=10?"#3BB4B1":x<=20?"#4361A5":x<=25?"#6B8DD6":"#7BA7D9",c=Math.max(...t.slabs.map(x=>x.taxInSlab),1),d=(()=>{const x=n==="monthly"?.08333333333333333:1,f=[{label:"In-Hand",value:t.netSalaryYearly*x,color:"#10b981"},{label:"Tax",value:t.totalTax*x,color:"#4361A5"},{label:"PF",value:t.employeePF*x,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&f.push({label:"Other",value:t.totalAdditionalDeductions*x,color:"#7BA7D9"}),f})(),p=d.reduce((x,f)=>x+f.value,0),s=[];t.surchargeApplicable&&s.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&s.push(`<strong>Section 87A rebate</strong> of ${E(t.rebate87A)} applied`),t.effectiveTaxRate>0&&s.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const u=!!t.postHike,g=t.bonus>0;return e.jsxs(Rc,{variants:rl,initial:"hidden",animate:"visible",children:[u&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#3b82f6",children:e.jsx(Ha,{})}),e.jsx(Ve,{children:"Base Salary (CTC)"})]}),e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(Ue,{children:e.jsxs(At,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Se,{children:E(t.baseSalary)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike"}),e.jsx(Se,{children:E(t.postHike.baseSalary)}),e.jsxs(Ot,{children:["+",E(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#10b981",children:e.jsx(Xc,{})}),e.jsx(Ve,{children:"In-Hand Salary"})]}),e.jsxs(_t,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(lr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(Ue,{children:u?e.jsxs(At,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Se,{children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsxs(Ce,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Se,{children:N(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Ot,{children:["+",E(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(sr,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(cr,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#f59e0b",children:e.jsx(tl,{})}),e.jsx(Ve,{children:"Bonus"})]}),u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(Ue,{children:[u?e.jsxs(e.Fragment,{children:[e.jsxs(At,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current Gross"}),e.jsx(Se,{children:E(t.bonus)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Gross"}),e.jsx(Se,{children:E(t.postHike.bonus)}),e.jsxs(Ot,{children:["+",E(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Le,{}),e.jsxs(At,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current In-Hand"}),e.jsx(Se,{children:N(t.bonusAfterTax)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike In-Hand"}),e.jsx(Se,{children:N(t.postHike.bonusAfterTax)}),e.jsxs(Ot,{children:["+",E(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(sr,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:E(t.bonus)}),e.jsx(cr,{children:"Gross Bonus (before tax)"}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsxs(ne,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(R,{$negative:!0,children:["-",N(t.bonusTaxAmount)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(R,{$highlight:!0,children:N(t.bonusAfterTax)})]})]}),e.jsx(Le,{}),e.jsx(Ra,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(Wa,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#8b5cf6",children:e.jsx(Ha,{})}),e.jsx(Ve,{children:"Total Combined Income"})]}),e.jsxs(_t,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx(we,{children:"Yearly"})]})]}),e.jsxs(Ue,{children:[u?e.jsxs(At,{children:[e.jsxs(ke,{children:[e.jsx(Ce,{children:"Current Total"}),e.jsx(Se,{children:N(t.totalIncomeYearly)})]}),e.jsxs(ke,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Total"}),e.jsx(Se,{children:N(t.postHike.totalIncomeYearly)}),e.jsxs(Ot,{children:["+",E(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(sr,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:N(t.totalIncomeYearly)}),e.jsx(cr,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Base In-Hand (Yearly)"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.netSalaryYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.netSalaryYearly)]})]}):e.jsx(R,{children:N(t.netSalaryYearly)})]}),e.jsxs(te,{children:[e.jsx(ne,{children:"Bonus In-Hand"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.bonusAfterTax)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.bonusAfterTax)]})]}):e.jsx(R,{children:N(t.bonusAfterTax)})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Total Combined"}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(t.totalIncomeYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(t.postHike.totalIncomeYearly)]})]}):e.jsx(R,{$highlight:!0,children:N(t.totalIncomeYearly)})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#ec4899",children:e.jsx(el,{})}),e.jsx(Ve,{children:"Summary"})]}),e.jsxs(_t,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(lr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(Wc,{children:[e.jsxs(at,{children:[e.jsx(it,{children:"Gross Salary"}),e.jsx(ot,{children:E(t.grossSalary*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.grossSalary*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Total Tax"}),e.jsx(ot,{children:N(t.totalTax*r)}),u&&e.jsxs(st,{children:["→ ",N(t.postHike.totalTax*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Employee PF"}),e.jsx(ot,{children:E(t.employeePF*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.employeePF*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Employer PF"}),e.jsx(ot,{children:E(t.employerPF*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E(t.postHike.employerPF*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Total PF"}),e.jsx(ot,{children:E((t.employeePF+t.employerPF)*r)}),u&&e.jsxs(st,{$positive:!0,children:["→ ",E((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(at,{children:[e.jsx(it,{children:"Eff. Tax Rate"}),e.jsxs(ot,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),u&&e.jsxs(st,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Le,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(Vc,{children:d.map((x,f)=>e.jsx(Uc,{$color:x.color,initial:{width:0},animate:{width:`${x.value/p*100}%`},transition:{delay:.3+f*.1,duration:.5}},f))}),e.jsx(qc,{children:d.map((x,f)=>e.jsxs(Gc,{children:[e.jsx(Kc,{$color:x.color}),e.jsx(Jc,{children:x.label}),e.jsx(Zc,{children:E(x.value)})]},f))}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:s.map((x,f)=>e.jsx(Ra,{children:e.jsx(Wa,{dangerouslySetInnerHTML:{__html:x}})},f))})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#10b981",children:e.jsx(nl,{})}),e.jsx(Ve,{children:"Breakdown"})]}),e.jsxs(_t,{children:[u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(lr,{children:[e.jsx(rt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(rt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(te,{children:[e.jsx(ne,{children:"Base Salary (CTC)"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.baseSalary*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.baseSalary*r)]})]}):e.jsx(R,{children:E(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Employer PF"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",E(t.employerPF*r)]}),e.jsxs(de,{children:["→ -",E(t.postHike.employerPF*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",E(t.employerPF*r)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Gross Salary"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.grossSalary*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.grossSalary*r)]})]}):e.jsx(R,{children:E(t.grossSalary*r)})]}),e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Standard Deduction"}),e.jsxs(R,{$negative:!0,children:["-",E(t.standardDeduction*r)]})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Taxable Income"}),u?e.jsxs(le,{children:[e.jsx(R,{children:E(t.taxableIncome*r)}),e.jsxs(de,{$positive:!0,children:["→ ",E(t.postHike.taxableIncome*r)]})]}):e.jsx(R,{children:E(t.taxableIncome*r)})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Income Tax"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",N(t.totalTax*r)]}),e.jsxs(de,{children:["→ -",N(t.postHike.totalTax*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",N(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Less: Employee PF"}),u?e.jsxs(le,{children:[e.jsxs(R,{$negative:!0,children:["-",E(t.employeePF*r)]}),e.jsxs(de,{children:["→ -",E(t.postHike.employeePF*r)]})]}):e.jsxs(R,{$negative:!0,children:["-",E(t.employeePF*r)]})]}),t.additionalDeductions.map((x,f)=>e.jsxs(te,{children:[e.jsxs(ne,{children:["Less: ",x.name]}),e.jsxs(R,{$negative:!0,children:["-",E(x.amount*r)]})]},f)),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsxs(ne,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(de,{$positive:!0,children:["→ ",N(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(R,{$highlight:!0,children:N(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(Re,{variants:qe,children:[e.jsxs(We,{children:[e.jsxs(He,{children:[e.jsx(Ye,{$color:"#3b82f6",children:e.jsx(Qc,{})}),e.jsx(Ve,{children:"Tax Slabs"})]}),e.jsxs(_t,{children:[e.jsx(we,{children:kc.financialYear}),u&&e.jsxs(we,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(Ue,{children:[e.jsxs(Hc,{children:[e.jsxs(za,{$header:!0,children:[e.jsx(Ae,{children:"Slab"}),e.jsx(Ae,{$align:"center",children:"Rate"}),e.jsx(Ae,{$align:"right",children:"Amount"}),e.jsx(Ae,{$align:"right",children:"Tax"})]}),e.jsx(U,{children:t.slabs.map((x,f)=>e.jsxs(za,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:f*.03},children:[e.jsxs(Ae,{children:[Ma(x.from)," - ",Ma(x.to),x.taxableInSlab>0&&e.jsx(Yc,{$color:o(x.rate),initial:{width:0},animate:{width:`${Math.max(x.taxInSlab/c*100,8)}%`},transition:{delay:.2+f*.03,duration:.4}})]}),e.jsxs(Ae,{$align:"center",$highlight:x.rate===0,children:[x.rate,"%"]}),e.jsx(Ae,{$align:"right",$muted:x.taxableInSlab===0,children:x.taxableInSlab>0?E(x.taxableInSlab):"-"}),e.jsx(Ae,{$align:"right",$muted:x.taxInSlab===0,children:x.taxInSlab>0?E(x.taxInSlab):"-"})]},f))})]}),e.jsx(Le,{}),e.jsxs(te,{children:[e.jsx(ne,{children:"Tax Before Surcharge"}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.taxBeforeSurcharge)}),e.jsxs(de,{children:["→ ",N(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(R,{children:N(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(te,{children:[e.jsx(ne,{children:"Section 87A Rebate"}),e.jsxs(R,{$negative:!0,children:["-",E(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(te,{children:[e.jsxs(ne,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx(we,{$color:"#f59e0b",children:"Marginal Relief"})]}),u&&t.postHike.surchargeApplicable?e.jsxs(le,{children:[e.jsx(R,{children:N(t.surchargeAmount)}),e.jsxs(de,{children:["→ ",N(t.postHike.surchargeAmount)]})]}):e.jsx(R,{children:N(t.surchargeAmount)})]}),e.jsxs(te,{children:[e.jsxs(ne,{children:["Cess (",t.cessRate,"%)"]}),u?e.jsxs(le,{children:[e.jsx(R,{children:N(t.cess)}),e.jsxs(de,{children:["→ ",N(t.postHike.cess)]})]}):e.jsx(R,{children:N(t.cess)})]}),e.jsxs(te,{children:[e.jsx(ne,{$bold:!0,children:"Total Tax"}),u?e.jsxs(le,{children:[e.jsx(R,{$highlight:!0,children:N(t.totalTax)}),e.jsxs(de,{children:["→ ",N(t.postHike.totalTax)]})]}):e.jsx(R,{$highlight:!0,children:N(t.totalTax)})]})]})]})]})},il=i(C.div)`
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
`,ol=i.div`
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
`,sl=i(C.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,cl=i(C.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,ll={type:"spring",stiffness:300,damping:30,mass:.8},dl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Ya={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:ll}},ul=()=>{const[t,n]=h.useState(null),[a,r]=h.useState(!1);h.useEffect(()=>{const l=xo();l&&l.baseSalary>0&&r(!0)},[]);const o=h.useCallback(l=>{const d=bc(l);n(d),window.innerWidth<1024&&setTimeout(()=>{var p;(p=document.getElementById("results"))==null||p.scrollIntoView({behavior:"smooth"})},100)},[]),c=h.useCallback(()=>{n(null)},[]);return e.jsx(il,{variants:dl,initial:"hidden",animate:"visible",children:e.jsx(po,{$maxWidth:"wide",children:e.jsxs(ol,{children:[e.jsx(sl,{variants:Ya,children:e.jsx(zc,{onCalculate:o,onReset:c,autoCalculate:a})}),e.jsx(cl,{id:"results",variants:Ya,children:t&&e.jsx(al,{breakdown:t},"results")})]})})})},Me=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"},{id:"liquid-fund",name:"Liquid Fund",type:"liquid_fund",bank:"hdfc",color:"#8b5cf6"}],ho="expense-manager-transactions",go="expense-manager-initial-balances",fo="expense-manager-initial-cc-bills",mo="expense-manager-cc-limits",vo="expense-manager-categories";function _n(t,n){return t===void 0?{amount:0,type:"billed",setupDate:n}:typeof t=="number"?{amount:t,type:"billed",setupDate:n}:t}const yo={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function en(t){localStorage.setItem(ho,JSON.stringify(t))}function pl(){const t=localStorage.getItem(ho);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Va(t){localStorage.setItem(go,JSON.stringify(t))}function xl(){const t=localStorage.getItem(go);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Ua(t){localStorage.setItem(fo,JSON.stringify(t))}function hl(){const t=localStorage.getItem(fo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function qa(t){localStorage.setItem(mo,JSON.stringify(t))}function gl(){const t=localStorage.getItem(mo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Ga(t){localStorage.setItem(vo,JSON.stringify(t))}function fl(){const t=localStorage.getItem(vo);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function me(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function bo(t){return new Date(t+"T00:00:00")}function ml(t){return t===me(new Date)}function vl(t,n){if(!t.statementDate)return"";const a=bo(n),r=a.getFullYear(),o=a.getMonth(),c=a.getDate();let l=r,d=o;c<t.statementDate&&(d-=1,d<0&&(d=11,l-=1));const p=new Date(l,d,t.statementDate);return me(p)}function Ka(t,n){const a=yo[t];if(!a)return"";const r=bo(n),o=r.getFullYear(),c=r.getMonth(),l=r.getDate();let d=o,p=c;l<a&&(p-=1,p<0&&(p=11,d-=1));const s=new Date(d,p,a);return me(s)}function yl(t,n,a,r){const o=Ka(t.id,a),c=n.filter(v=>v.date<=a&&v.accountId===t.id),l=c.filter(v=>v.type==="credit_card_spend"&&v.date<o).reduce((v,j)=>v+j.amount,0),d=c.filter(v=>v.type==="credit_card_spend"&&v.date>=o).reduce((v,j)=>v+j.amount,0),p=c.filter(v=>v.type==="cc_payment").reduce((v,j)=>v+j.amount,0),s=_n(r[t.id],a);let u=0,g=0;if(s.amount>0){const v=Ka(t.id,s.setupDate),j=o===v,_=o>v&&new Date(o).getTime()-new Date(v).getTime()<45*24*60*60*1e3;s.type==="unbilled"?j?g=s.amount:_&&(u=s.amount):(j||_)&&(u=s.amount)}const x=d+g,f=l+u,w=x;let k=f,S=w,I=p;if(I>0){const v=Math.min(I,k);k-=v,I-=v}return I>0&&(S=Math.max(0,S-I)),{account:t,billDue:k,unbilled:S,totalOutstanding:k+S,cycleStart:o,cycleSpending:x}}function bl(t,n,a,r,o={}){const c=n.filter(d=>d.date<=a&&(d.accountId===t.id||d.linkedAccountId===t.id));let l=0;if(t.type==="bank"){l=r[t.id]||0;for(const d of c)d.accountId===t.id&&(d.type==="bank_credit"?l+=d.amount:d.type==="bank_debit"&&(l-=d.amount)),d.linkedAccountId===t.id&&d.type==="cc_payment"&&(l-=d.amount),d.linkedAccountId===t.id&&d.type==="liquid_fund_credit"&&(l-=d.amount),d.linkedAccountId===t.id&&d.type==="liquid_fund_debit"&&(l+=d.amount);return{account:t,balance:l}}else if(t.type==="liquid_fund"){l=r[t.id]||0;for(const d of c)d.accountId===t.id&&(d.type==="liquid_fund_credit"?l+=d.amount:d.type==="liquid_fund_debit"&&(l-=d.amount));return{account:t,balance:l}}else{l=-_n(o[t.id],a).amount;for(const x of c)x.accountId===t.id&&(x.type==="credit_card_spend"?l-=x.amount:x.type==="cc_payment"&&(l+=x.amount));const s=vl(t,a),g=c.filter(x=>x.date>s&&x.accountId===t.id&&x.type==="credit_card_spend").reduce((x,f)=>x+f.amount,0);return{account:t,balance:l,pendingBill:g,totalOutstanding:Math.abs(Math.min(0,l))}}}function jl(t,n,a,r={}){return Me.map(o=>bl(o,t,n,a,r))}function jo(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function wl(t,n,a,r,o,c,l){return{id:jo(),date:o,type:t,accountId:n,amount:a,description:r,linkedAccountId:c,categoryId:l,createdAt:new Date().toISOString()}}function Y(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Nt(t){return Me.find(n=>n.id===t)}function wo(){return Me.filter(t=>t.type==="bank")}function An(){return Me.filter(t=>t.type==="credit_card")}function ko(){return Me.find(t=>t.type==="liquid_fund")}function kl(t,n,a,r={},o=[]){const c={version:"1.2",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n,initialCCBills:a,ccLimits:r,categories:o};return JSON.stringify(c,null,2)}function Cl(t,n,a,r={},o=[]){const c=kl(t,n,a,r,o),l=new Blob([c],{type:"application/json"}),d=URL.createObjectURL(l),p=document.createElement("a"),s=new Date().toISOString().split("T")[0];p.href=d,p.download=`expense-backup-${s}.json`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(d)}function Sl(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null||typeof n.initialCCBills!="object"||n.initialCCBills===null||n.ccLimits!==void 0&&(typeof n.ccLimits!="object"||n.ccLimits===null))return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Dl(t){try{const n=JSON.parse(t);return Sl(n)?n:null}catch{return null}}function Co(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(a=Co(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function On(){for(var t,n,a=0,r="",o=arguments.length;a<o;a++)(t=arguments[a])&&(n=Co(t))&&(r&&(r+=" "),r+=n);return r}const Tl=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const o=Object.getOwnPropertyDescriptor(t,a),c=Object.getOwnPropertyDescriptor(n,a);!Il(o,c)&&r||Object.defineProperty(t,a,c)},Il=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},$l=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},Ll=(t,n)=>`/* Wrapped ${t}*/
${n}`,_l=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Al=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Ol=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,o=Ll.bind(null,r,n.toString());Object.defineProperty(o,"name",Al);const{writable:c,enumerable:l,configurable:d}=_l;Object.defineProperty(t,"toString",{value:o,writable:c,enumerable:l,configurable:d})};function Bl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const o of Reflect.ownKeys(n))Tl(t,n,o,a);return $l(t,n),Ol(t,n,r),t}const tn=2147483647,Fl=new WeakMap,dr=new WeakMap,Ml=new WeakMap;function Pl(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function So(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>tn)throw new TypeError(`The \`maxAge\` option cannot exceed ${tn}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const o=function(...c){var u;const l=n?n(c):c[0],d=Pl(a,l);if(d)return d.data;const p=t.apply(this,c),s=typeof r=="function"?r(...c):r;if(s!==void 0&&s!==Number.POSITIVE_INFINITY){if(!Number.isFinite(s))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(s<=0)return p;if(s>tn)throw new TypeError(`The \`maxAge\` function result cannot exceed ${tn}.`)}if(a.set(l,{data:p,maxAge:s===void 0||s===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+s}),s!==void 0&&s!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var f;a.delete(l),(f=dr.get(o))==null||f.delete(g)},s);(u=g.unref)==null||u.call(g);const x=dr.get(o)??new Set;x.add(g),dr.set(o,x)}return p};return Bl(o,t,{ignoreNonConfigurable:!0}),Fl.set(o,a),Ml.set(o,n??(c=>c[0])),o}function El(t){return typeof t=="string"}function Nl(t,n,a){return a.indexOf(t)===n}function zl(t){return t.toLowerCase()===t}function Ja(t){return t.indexOf(",")===-1?t:t.split(",")}function Yr(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return Yr(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return Yr(a)}if(t.indexOf("-")===-1||!zl(t))return t;var o=t.split("-"),c=o[0],l=o[1],d=l===void 0?"":l;return"".concat(c,"-").concat(d.toUpperCase())}function Rl(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,o=n.fallbackLocale,c=o===void 0?"en-US":o,l=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],p=[],s=0,u=d;s<u.length;s++){var g=u[s];p=p.concat(Ja(g))}var x=navigator.language,f=x&&Ja(x);l=l.concat(p,f)}return r&&l.push(c),l.filter(El).map(Yr).filter(Nl)}var Wl=So(Rl,{cacheKey:JSON.stringify});function Hl(t){return Wl(t)[0]||null}var Do=So(Hl,{cacheKey:JSON.stringify});function _e(t,n,a){return function(o,c=a){const l=t(o)+c;return n(l)}}function Ht(t){return function(a){return new Date(t(a).getTime()-1)}}function Yt(t,n){return function(r){return[t(r),n(r)]}}function q(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function Pe(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function Bn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function wt(t){const n=q(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Yl=_e(q,wt,-100),To=_e(q,wt,100),la=Ht(To),Vl=_e(q,la,-100),Io=Yt(wt,la);function Ee(t){const n=q(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const $o=_e(q,Ee,-10),da=_e(q,Ee,10),Fn=Ht(da),Lo=_e(q,Fn,-10),_o=Yt(Ee,Fn);function kt(t){const n=q(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Ao=_e(q,kt,-1),ua=_e(q,kt,1),Mn=Ht(ua),Oo=_e(q,Mn,-1),Ul=Yt(kt,Mn);function pa(t,n){return function(r,o=n){const c=q(r),l=Pe(r)+o,d=new Date;return d.setFullYear(c,l,1),d.setHours(0,0,0,0),t(d)}}function Qe(t){const n=q(t),a=Pe(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Bo=pa(Qe,-1),xa=pa(Qe,1),Vt=Ht(xa),Fo=pa(Vt,-1),ql=Yt(Qe,Vt);function Gl(t,n){return function(r,o=n){const c=q(r),l=Pe(r),d=Bn(r)+o,p=new Date;return p.setFullYear(c,l,d),p.setHours(0,0,0,0),t(p)}}function Ut(t){const n=q(t),a=Pe(t),r=Bn(t),o=new Date;return o.setFullYear(n,a,r),o.setHours(0,0,0,0),o}const Kl=Gl(Ut,1),ha=Ht(Kl),Jl=Yt(Ut,ha);function Mo(t){return Bn(Vt(t))}var ae={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Zl={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ga=[0,1,2,3,4,5,6],ur=new Map;function Xl(t){return function(a,r){var o=a||Do();ur.has(o)||ur.set(o,new Map);var c=ur.get(o);return c.has(t)||c.set(t,new Intl.DateTimeFormat(o||void 0,t).format),c.get(t)(r)}}function Ql(t){var n=new Date(t);return new Date(n.setHours(12))}function et(t){return function(n,a){return Xl(t)(n,Ql(a))}}var ed={day:"numeric"},td={day:"numeric",month:"long",year:"numeric"},nd={month:"long"},rd={month:"long",year:"numeric"},ad={weekday:"short"},id={weekday:"long"},od={year:"numeric"},sd=et(ed),cd=et(td),ld=et(nd),Po=et(rd),dd=et(ad),ud=et(id),Pn=et(od),pd=ga[0],xd=ga[5],Za=ga[6];function zt(t,n){n===void 0&&(n=ae.ISO_8601);var a=t.getDay();switch(n){case ae.ISO_8601:return(a+6)%7;case ae.ISLAMIC:return(a+1)%7;case ae.HEBREW:case ae.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function hd(t){var n=wt(t);return q(n)}function gd(t){var n=Ee(t);return q(n)}function Vr(t,n){n===void 0&&(n=ae.ISO_8601);var a=q(t),r=Pe(t),o=t.getDate()-zt(t,n);return new Date(a,r,o)}function fd(t,n){n===void 0&&(n=ae.ISO_8601);var a=n===ae.GREGORY?ae.GREGORY:ae.ISO_8601,r=Vr(t,n),o=q(t)+1,c,l;do c=new Date(o,0,a===ae.ISO_8601?4:1),l=Vr(c,n),o-=1;while(t<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function Xe(t,n){switch(t){case"century":return wt(n);case"decade":return Ee(n);case"year":return kt(n);case"month":return Qe(n);case"day":return Ut(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function md(t,n){switch(t){case"century":return Yl(n);case"decade":return $o(n);case"year":return Ao(n);case"month":return Bo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Eo(t,n){switch(t){case"century":return To(n);case"decade":return da(n);case"year":return ua(n);case"month":return xa(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function vd(t,n){switch(t){case"decade":return $o(n,-100);case"year":return Ao(n,-10);case"month":return Bo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function yd(t,n){switch(t){case"decade":return da(n,100);case"year":return ua(n,10);case"month":return xa(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function No(t,n){switch(t){case"century":return la(n);case"decade":return Fn(n);case"year":return Mn(n);case"month":return Vt(n);case"day":return ha(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function bd(t,n){switch(t){case"century":return Vl(n);case"decade":return Lo(n);case"year":return Oo(n);case"month":return Fo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function jd(t,n){switch(t){case"decade":return Lo(n,-100);case"year":return Oo(n,-10);case"month":return Fo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Xa(t,n){switch(t){case"century":return Io(n);case"decade":return _o(n);case"year":return Ul(n);case"month":return ql(n);case"day":return Jl(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function wd(t,n,a){var r=[n,a].sort(function(o,c){return o.getTime()-c.getTime()});return[Xe(t,r[0]),No(t,r[1])]}function zo(t,n,a){return a.map(function(r){return(n||Pn)(t,r)}).join(" – ")}function kd(t,n,a){return zo(t,n,Io(a))}function Ro(t,n,a){return zo(t,n,_o(a))}function Cd(t){return t.getDay()===new Date().getDay()}function Wo(t,n){n===void 0&&(n=ae.ISO_8601);var a=t.getDay();switch(n){case ae.ISLAMIC:case ae.HEBREW:return a===xd||a===Za;case ae.ISO_8601:case ae.GREGORY:return a===Za||a===pd;default:throw new Error("Unsupported calendar type.")}}var De="react-calendar__navigation";function Sd(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,o=r===void 0?Po:r,c=t.formatYear,l=c===void 0?Pn:c,d=t.locale,p=t.maxDate,s=t.minDate,u=t.navigationAriaLabel,g=u===void 0?"":u,x=t.navigationAriaLive,f=t.navigationLabel,w=t.next2AriaLabel,k=w===void 0?"":w,S=t.next2Label,I=S===void 0?"»":S,v=t.nextAriaLabel,j=v===void 0?"":v,_=t.nextLabel,A=_===void 0?"›":_,D=t.prev2AriaLabel,B=D===void 0?"":D,F=t.prev2Label,y=F===void 0?"«":F,b=t.prevAriaLabel,T=b===void 0?"":b,O=t.prevLabel,P=O===void 0?"‹":O,$=t.setActiveStartDate,m=t.showDoubleView,L=t.view,M=t.views,G=M.indexOf(L)>0,V=L!=="century",K=md(L,n),H=V?vd(L,n):void 0,ue=Eo(L,n),re=V?yd(L,n):void 0,ie=function(){if(K.getFullYear()<0)return!0;var X=bd(L,n);return s&&s>=X}(),W=V&&function(){if(H.getFullYear()<0)return!0;var X=jd(L,n);return s&&s>=X}(),xe=p&&p<ue,Ie=V&&p&&p<re;function he(){$(K,"prev")}function pe(){$(H,"prev2")}function ve(){$(ue,"next")}function $e(){$(re,"next2")}function ye(X){var Ne=function(){switch(L){case"century":return kd(d,l,X);case"decade":return Ro(d,l,X);case"year":return l(d,X);case"month":return o(d,X);default:throw new Error("Invalid view: ".concat(L,"."))}}();return f?f({date:X,label:Ne,locale:d||Do()||void 0,view:L}):Ne}function Ct(){var X="".concat(De,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":x,className:X,disabled:!G,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(X,"__labelText ").concat(X,"__labelText--from"),children:ye(n)}),m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(X,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(X,"__labelText ").concat(X,"__labelText--to"),children:ye(ue)})]}):null]})}return e.jsxs("div",{className:De,children:[y!==null&&V?e.jsx("button",{"aria-label":B,className:"".concat(De,"__arrow ").concat(De,"__prev2-button"),disabled:W,onClick:pe,type:"button",children:y}):null,P!==null&&e.jsx("button",{"aria-label":T,className:"".concat(De,"__arrow ").concat(De,"__prev-button"),disabled:ie,onClick:he,type:"button",children:P}),Ct(),A!==null&&e.jsx("button",{"aria-label":j,className:"".concat(De,"__arrow ").concat(De,"__next-button"),disabled:xe,onClick:ve,type:"button",children:A}),I!==null&&V?e.jsx("button",{"aria-label":k,className:"".concat(De,"__arrow ").concat(De,"__next2-button"),disabled:Ie,onClick:$e,type:"button",children:I}):null]})}var vt=function(){return vt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},vt.apply(this,arguments)},Dd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Qa(t){return"".concat(t,"%")}function fa(t){var n=t.children,a=t.className,r=t.count,o=t.direction,c=t.offset,l=t.style,d=t.wrap,p=Dd(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",vt({className:a,style:vt({display:"flex",flexDirection:o,flexWrap:d?"wrap":"nowrap"},l)},p,{children:h.Children.map(n,function(s,u){var g=c&&u===0?Qa(100*c/r):null;return h.cloneElement(s,vt(vt({},s.props),{style:{flexBasis:Qa(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function Td(t,n,a){return n&&n>t?n:a&&a<t?a:t}function Rt(t,n){return n[0]<=t&&n[1]>=t}function Id(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function Ho(t,n){return Rt(t[0],n)||Rt(t[1],n)}function ei(t,n,a){var r=Ho(n,t),o=[];if(r){o.push(a);var c=Rt(t[0],n),l=Rt(t[1],n);c&&o.push("".concat(a,"Start")),l&&o.push("".concat(a,"End")),c&&l&&o.push("".concat(a,"BothEnds"))}return o}function $d(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Ld(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,o="react-calendar__tile",c=[o];if(!a)return c;var l=new Date,d=function(){if(Array.isArray(a))return a;var f=t.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return Xa(f,a)}();if(Rt(l,d)&&c.push("".concat(o,"--now")),!n||!$d(n))return c;var p=function(){if(Array.isArray(n))return n;var f=t.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return Xa(f,n)}();Id(p,d)?c.push("".concat(o,"--active")):Ho(p,d)&&c.push("".concat(o,"--hasActive"));var s=ei(p,d,"".concat(o,"--range"));c.push.apply(c,s);var u=Array.isArray(n)?n:[n];if(r&&u.length===1){var g=r>p[0]?[p[0],r]:[r,p[0]],x=ei(g,d,"".concat(o,"--hover"));c.push.apply(c,x)}return c}function En(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,o=t.dateTransform,c=t.dateType,l=t.end,d=t.hover,p=t.offset,s=t.renderTile,u=t.start,g=t.step,x=g===void 0?1:g,f=t.value,w=t.valueType,k=[],S=u;S<=l;S+=x){var I=o(S);k.push(s({classes:Ld({date:I,dateType:c,hover:d,value:f,valueType:w}),date:I}))}return e.jsx(fa,{className:n,count:r,offset:p,wrap:!0,children:k})}function Nn(t){var n=t.activeStartDate,a=t.children,r=t.classes,o=t.date,c=t.formatAbbr,l=t.locale,d=t.maxDate,p=t.maxDateTransform,s=t.minDate,u=t.minDateTransform,g=t.onClick,x=t.onMouseOver,f=t.style,w=t.tileClassName,k=t.tileContent,S=t.tileDisabled,I=t.view,v=h.useMemo(function(){var _={activeStartDate:n,date:o,view:I};return typeof w=="function"?w(_):w},[n,o,w,I]),j=h.useMemo(function(){var _={activeStartDate:n,date:o,view:I};return typeof k=="function"?k(_):k},[n,o,k,I]);return e.jsxs("button",{className:On(r,v),disabled:s&&u(s)>o||d&&p(d)<o||(S==null?void 0:S({activeStartDate:n,date:o,view:I})),onClick:g?function(_){return g(o,_)}:void 0,onFocus:x?function(){return x(o)}:void 0,onMouseOver:x?function(){return x(o)}:void 0,style:f,type:"button",children:[c?e.jsx("abbr",{"aria-label":c(l,o),children:a}):a,j]})}var Ur=function(){return Ur=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ur.apply(this,arguments)},_d=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ti="react-calendar__century-view__decades__decade";function Ad(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,o=t.formatYear,c=o===void 0?Pn:o,l=_d(t,["classes","currentCentury","formatYear"]),d=l.date,p=l.locale,s=[];return a&&s.push.apply(s,a),s.push(ti),wt(d).getFullYear()!==r&&s.push("".concat(ti,"--neighboringCentury")),e.jsx(Nn,Ur({},l,{classes:s,maxDateTransform:Fn,minDateTransform:Ee,view:"century",children:Ro(p,c,d)}))}var qr=function(){return qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},qr.apply(this,arguments)},ni=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Od(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,o=t.value,c=t.valueType,l=ni(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=hd(n),p=d+(r?119:99);return e.jsx(En,{className:"react-calendar__century-view__decades",dateTransform:Ee,dateType:"decade",end:p,hover:a,renderTile:function(s){var u=s.date,g=ni(s,["date"]);return e.jsx(Ad,qr({},l,g,{activeStartDate:n,currentCentury:d,date:u}),u.getTime())},start:d,step:10,value:o,valueType:c})}var Gr=function(){return Gr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Gr.apply(this,arguments)};function Bd(t){function n(){return e.jsx(Od,Gr({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var Kr=function(){return Kr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Kr.apply(this,arguments)},Fd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ri="react-calendar__decade-view__years__year";function Md(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,o=t.formatYear,c=o===void 0?Pn:o,l=Fd(t,["classes","currentDecade","formatYear"]),d=l.date,p=l.locale,s=[];return a&&s.push.apply(s,a),s.push(ri),Ee(d).getFullYear()!==r&&s.push("".concat(ri,"--neighboringDecade")),e.jsx(Nn,Kr({},l,{classes:s,maxDateTransform:Mn,minDateTransform:kt,view:"decade",children:c(p,d)}))}var Jr=function(){return Jr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Jr.apply(this,arguments)},ai=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Pd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,o=t.value,c=t.valueType,l=ai(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=gd(n),p=d+(r?11:9);return e.jsx(En,{className:"react-calendar__decade-view__years",dateTransform:kt,dateType:"year",end:p,hover:a,renderTile:function(s){var u=s.date,g=ai(s,["date"]);return e.jsx(Md,Jr({},l,g,{activeStartDate:n,currentDecade:d,date:u}),u.getTime())},start:d,value:o,valueType:c})}var Zr=function(){return Zr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Zr.apply(this,arguments)};function Ed(t){function n(){return e.jsx(Pd,Zr({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var Xr=function(){return Xr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Xr.apply(this,arguments)},Nd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ii=function(t,n,a){if(a||arguments.length===2)for(var r=0,o=n.length,c;r<o;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return t.concat(c||Array.prototype.slice.call(n))},zd="react-calendar__year-view__months__month";function Rd(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,o=r===void 0?ld:r,c=t.formatMonthYear,l=c===void 0?Po:c,d=Nd(t,["classes","formatMonth","formatMonthYear"]),p=d.date,s=d.locale;return e.jsx(Nn,Xr({},d,{classes:ii(ii([],a,!0),[zd],!1),formatAbbr:l,maxDateTransform:Vt,minDateTransform:Qe,view:"year",children:o(s,p)}))}var Qr=function(){return Qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Qr.apply(this,arguments)},oi=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Wd(t){var n=t.activeStartDate,a=t.hover,r=t.value,o=t.valueType,c=oi(t,["activeStartDate","hover","value","valueType"]),l=0,d=11,p=q(n);return e.jsx(En,{className:"react-calendar__year-view__months",dateTransform:function(s){var u=new Date;return u.setFullYear(p,s,1),Qe(u)},dateType:"month",end:d,hover:a,renderTile:function(s){var u=s.date,g=oi(s,["date"]);return e.jsx(Rd,Qr({},c,g,{activeStartDate:n,date:u}),u.getTime())},start:l,value:r,valueType:o})}var ea=function(){return ea=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ea.apply(this,arguments)};function Hd(t){function n(){return e.jsx(Wd,ea({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var ta=function(){return ta=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ta.apply(this,arguments)},Yd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},pr="react-calendar__month-view__days__day";function Vd(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,o=t.currentMonthIndex,c=t.formatDay,l=c===void 0?sd:c,d=t.formatLongDate,p=d===void 0?cd:d,s=Yd(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),u=s.date,g=s.locale,x=[];return r&&x.push.apply(x,r),x.push(pr),Wo(u,n)&&x.push("".concat(pr,"--weekend")),u.getMonth()!==o&&x.push("".concat(pr,"--neighboringMonth")),e.jsx(Nn,ta({},s,{classes:x,formatAbbr:p,maxDateTransform:ha,minDateTransform:Ut,view:"month",children:l(g,u)}))}var na=function(){return na=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},na.apply(this,arguments)},si=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Ud(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,o=t.showFixedNumberOfWeeks,c=t.showNeighboringMonth,l=t.value,d=t.valueType,p=si(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),s=q(n),u=Pe(n),g=o||c,x=zt(n,a),f=g?0:x,w=(g?-x:0)+1,k=function(){if(o)return w+6*7-1;var S=Mo(n);if(c){var I=new Date;I.setFullYear(s,u,S),I.setHours(0,0,0,0);var v=7-zt(I,a)-1;return S+v}return S}();return e.jsx(En,{className:"react-calendar__month-view__days",count:7,dateTransform:function(S){var I=new Date;return I.setFullYear(s,u,S),Ut(I)},dateType:"day",hover:r,end:k,renderTile:function(S){var I=S.date,v=si(S,["date"]);return e.jsx(Vd,na({},p,v,{activeStartDate:n,calendarType:a,currentMonthIndex:u,date:I}),I.getTime())},offset:f,start:w,value:l,valueType:d})}var Yo="react-calendar__month-view__weekdays",xr="".concat(Yo,"__weekday");function qd(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?dd:a,o=t.formatWeekday,c=o===void 0?ud:o,l=t.locale,d=t.onMouseLeave,p=new Date,s=Qe(p),u=q(s),g=Pe(s),x=[],f=1;f<=7;f+=1){var w=new Date(u,g,f-zt(s,n)),k=c(l,w);x.push(e.jsx("div",{className:On(xr,Cd(w)&&"".concat(xr,"--current"),Wo(w,n)&&"".concat(xr,"--weekend")),children:e.jsx("abbr",{"aria-label":k,title:k,children:r(l,w).replace(".","")})},f))}return e.jsx(fa,{className:Yo,count:7,onFocus:d,onMouseOver:d,children:x})}var In=function(){return In=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},In.apply(this,arguments)},ci=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},li="react-calendar__tile";function Gd(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var o=t.date,c=t.onClickWeekNumber,l=t.weekNumber,d=ci(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",In({},d,{className:li,onClick:function(p){return c(l,o,p)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=ci(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",In({},d,{className:li,children:r}))}}function Kd(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,o=t.onMouseLeave,c=t.showFixedNumberOfWeeks,l=function(){if(c)return 6;var s=Mo(n),u=zt(n,a),g=s-(7-u);return 1+Math.ceil(g/7)}(),d=function(){for(var s=q(n),u=Pe(n),g=Bn(n),x=[],f=0;f<l;f+=1)x.push(Vr(new Date(s,u,g+f*7),a));return x}(),p=d.map(function(s){return fd(s,a)});return e.jsx(fa,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:o,onMouseOver:o,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:p.map(function(s,u){var g=d[u];if(!g)throw new Error("date is not defined");return e.jsx(Gd,{date:g,onClickWeekNumber:r,weekNumber:s},s)})})}var ra=function(){return ra=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ra.apply(this,arguments)},Jd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Zd(t){if(t)for(var n=0,a=Object.entries(Zl);n<a.length;n++){var r=a[n],o=r[0],c=r[1];if(c.includes(t))return o}return ae.ISO_8601}function Xd(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,o=t.showFixedNumberOfWeeks,c=t.calendarType,l=c===void 0?Zd(a):c,d=t.formatShortWeekday,p=t.formatWeekday,s=t.onClickWeekNumber,u=t.showWeekNumbers,g=Jd(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function x(){return e.jsx(qd,{calendarType:l,formatShortWeekday:d,formatWeekday:p,locale:a,onMouseLeave:r})}function f(){return u?e.jsx(Kd,{activeStartDate:n,calendarType:l,onClickWeekNumber:s,onMouseLeave:r,showFixedNumberOfWeeks:o}):null}function w(){return e.jsx(Ud,ra({calendarType:l},g))}var k="react-calendar__month-view";return e.jsx("div",{className:On(k,u?"".concat(k,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[f(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[x(),w()]})]})})}var yt=function(){return yt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},yt.apply(this,arguments)},nn="react-calendar",Dn=["century","decade","year","month"],Qd=["decade","year","month","day"],ma=new Date;ma.setFullYear(1,0,1);ma.setHours(0,0,0,0);var eu=new Date(864e13);function Pt(t){return t instanceof Date?t:new Date(t)}function Vo(t,n){return Dn.slice(Dn.indexOf(t),Dn.indexOf(n)+1)}function tu(t,n,a){var r=Vo(n,a);return r.indexOf(t)!==-1}function va(t,n,a){return t&&tu(t,n,a)?t:a}function Uo(t){var n=Dn.indexOf(t);return Qd[n]}function nu(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Pt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function qo(t,n){var a=t.value,r=t.minDate,o=t.maxDate,c=t.maxDetail,l=nu(a,n);if(!l)return null;var d=Uo(c),p=function(){switch(n){case 0:return Xe(d,l);case 1:return No(d,l);default:throw new Error("Invalid index value: ".concat(n))}}();return Td(p,r,o)}var ya=function(t){return qo(t,0)},Go=function(t){return qo(t,1)},ru=function(t){return[ya,Go].map(function(n){return n(t)})};function Ko(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,o=t.minDetail,c=t.value,l=t.view,d=va(l,o,a),p=ya({value:c,minDate:r,maxDate:n,maxDetail:a})||new Date;return Xe(d,p)}function au(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,o=t.defaultView,c=t.maxDate,l=t.maxDetail,d=t.minDate,p=t.minDetail,s=t.value,u=t.view,g=va(u,p,l),x=n||a;return x?Xe(g,x):Ko({maxDate:c,maxDetail:l,minDate:d,minDetail:p,value:s||r,view:u||o})}function hr(t){return t&&(!Array.isArray(t)||t.length===1)}function rn(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var iu=h.forwardRef(function(n,a){var r=n.activeStartDate,o=n.allowPartialRange,c=n.calendarType,l=n.className,d=n.defaultActiveStartDate,p=n.defaultValue,s=n.defaultView,u=n.formatDay,g=n.formatLongDate,x=n.formatMonth,f=n.formatMonthYear,w=n.formatShortWeekday,k=n.formatWeekday,S=n.formatYear,I=n.goToRangeStartOnSelect,v=I===void 0?!0:I,j=n.inputRef,_=n.locale,A=n.maxDate,D=A===void 0?eu:A,B=n.maxDetail,F=B===void 0?"month":B,y=n.minDate,b=y===void 0?ma:y,T=n.minDetail,O=T===void 0?"century":T,P=n.navigationAriaLabel,$=n.navigationAriaLive,m=n.navigationLabel,L=n.next2AriaLabel,M=n.next2Label,G=n.nextAriaLabel,V=n.nextLabel,K=n.onActiveStartDateChange,H=n.onChange,ue=n.onClickDay,re=n.onClickDecade,ie=n.onClickMonth,W=n.onClickWeekNumber,xe=n.onClickYear,Ie=n.onDrillDown,he=n.onDrillUp,pe=n.onViewChange,ve=n.prev2AriaLabel,$e=n.prev2Label,ye=n.prevAriaLabel,Ct=n.prevLabel,X=n.returnValue,Ne=X===void 0?"start":X,oe=n.selectRange,tt=n.showDoubleView,qt=n.showFixedNumberOfWeeks,Gt=n.showNavigation,Kt=Gt===void 0?!0:Gt,zn=n.showNeighboringCentury,Rn=n.showNeighboringDecade,be=n.showNeighboringMonth,Wn=be===void 0?!0:be,us=n.showWeekNumbers,ps=n.tileClassName,xs=n.tileContent,hs=n.tileDisabled,Hn=n.value,wa=n.view,ka=h.useState(d),gs=ka[0],Jt=ka[1],Ca=h.useState(null),fs=Ca[0],Sa=Ca[1],Da=h.useState(Array.isArray(p)?p.map(function(z){return z!==null?Pt(z):null}):p!=null?Pt(p):null),Yn=Da[0],ms=Da[1],Ta=h.useState(s),vs=Ta[0],Ia=Ta[1],se=r||gs||au({activeStartDate:r,defaultActiveStartDate:d,defaultValue:p,defaultView:s,maxDate:D,maxDetail:F,minDate:b,minDetail:O,value:Hn,view:wa}),ce=function(){var z=function(){return oe&&hr(Yn)?Yn:Hn!==void 0?Hn:Yn}();return z?Array.isArray(z)?z.map(function(Z){return Z!==null?Pt(Z):null}):z!==null?Pt(z):null:null}(),Zt=Uo(F),J=va(wa||vs,O,F),je=Vo(O,F),ys=oe?fs:null,Vn=je.indexOf(J)<je.length-1,$a=je.indexOf(J)>0,La=h.useCallback(function(z){var Z=function(){switch(Ne){case"start":return ya;case"end":return Go;case"range":return ru;default:throw new Error("Invalid returnValue.")}}();return Z({maxDate:D,maxDetail:F,minDate:b,value:z})},[D,F,b,Ne]),Un=h.useCallback(function(z,Z){Jt(z);var Q={action:Z,activeStartDate:z,value:ce,view:J};K&&!rn(se,z)&&K(Q)},[se,K,ce,J]),Xt=h.useCallback(function(z,Z){var Q=function(){switch(J){case"century":return re;case"decade":return xe;case"year":return ie;case"month":return ue;default:throw new Error("Invalid view: ".concat(J,"."))}}();Q&&Q(z,Z)},[ue,re,ie,xe,J]),qn=h.useCallback(function(z,Z){if(Vn){Xt(z,Z);var Q=je[je.indexOf(J)+1];if(!Q)throw new Error("Attempted to drill down from the lowest view.");Jt(z),Ia(Q);var ge={action:"drillDown",activeStartDate:z,value:ce,view:Q};K&&!rn(se,z)&&K(ge),pe&&J!==Q&&pe(ge),Ie&&Ie(ge)}},[se,Vn,K,Xt,Ie,pe,ce,J,je]),Gn=h.useCallback(function(){if($a){var z=je[je.indexOf(J)-1];if(!z)throw new Error("Attempted to drill up from the highest view.");var Z=Xe(z,se);Jt(Z),Ia(z);var Q={action:"drillUp",activeStartDate:Z,value:ce,view:z};K&&!rn(se,Z)&&K(Q),pe&&J!==z&&pe(Q),he&&he(Q)}},[se,$a,K,he,pe,ce,J,je]),Kn=h.useCallback(function(z,Z){var Q=ce;Xt(z,Z);var ge=oe&&!hr(Q),fe;if(oe)if(ge)fe=Xe(Zt,z);else{if(!Q)throw new Error("previousValue is required");if(Array.isArray(Q))throw new Error("previousValue must not be an array");fe=wd(Zt,Q,z)}else fe=La(z);var Zn=!oe||ge||v?Ko({maxDate:D,maxDetail:F,minDate:b,minDetail:O,value:fe,view:J}):null;Z.persist(),Jt(Zn),ms(fe);var ks={action:"onChange",activeStartDate:Zn,value:fe,view:J};if(K&&!rn(se,Zn)&&K(ks),H)if(oe){var Cs=hr(fe);if(!Cs)H(fe||null,Z);else if(o){if(Array.isArray(fe))throw new Error("value must not be an array");H([fe||null,null],Z)}}else H(fe||null,Z)},[se,o,La,v,D,F,b,O,K,H,Xt,oe,ce,Zt,J]);function bs(z){Sa(z)}function Jn(){Sa(null)}h.useImperativeHandle(a,function(){return{activeStartDate:se,drillDown:qn,drillUp:Gn,onChange:Kn,setActiveStartDate:Un,value:ce,view:J}},[se,qn,Gn,Kn,Un,ce,J]);function _a(z){var Z=z?Eo(J,se):Xe(J,se),Q=Vn?qn:Kn,ge={activeStartDate:Z,hover:ys,locale:_,maxDate:D,minDate:b,onClick:Q,onMouseOver:oe?bs:void 0,tileClassName:ps,tileContent:xs,tileDisabled:hs,value:ce,valueType:Zt};switch(J){case"century":return e.jsx(Bd,yt({formatYear:S,showNeighboringCentury:zn},ge));case"decade":return e.jsx(Ed,yt({formatYear:S,showNeighboringDecade:Rn},ge));case"year":return e.jsx(Hd,yt({formatMonth:x,formatMonthYear:f},ge));case"month":return e.jsx(Xd,yt({calendarType:c,formatDay:u,formatLongDate:g,formatShortWeekday:w,formatWeekday:k,onClickWeekNumber:W,onMouseLeave:oe?Jn:void 0,showFixedNumberOfWeeks:typeof qt<"u"?qt:tt,showNeighboringMonth:Wn,showWeekNumbers:us},ge));default:throw new Error("Invalid view: ".concat(J,"."))}}function js(){return Kt?e.jsx(Sd,{activeStartDate:se,drillUp:Gn,formatMonthYear:f,formatYear:S,locale:_,maxDate:D,minDate:b,navigationAriaLabel:P,navigationAriaLive:$,navigationLabel:m,next2AriaLabel:L,next2Label:M,nextAriaLabel:G,nextLabel:V,prev2AriaLabel:ve,prev2Label:$e,prevAriaLabel:ye,prevLabel:Ct,setActiveStartDate:Un,showDoubleView:tt,view:J,views:je}):null}var ws=Array.isArray(ce)?ce:[ce];return e.jsxs("div",{className:On(nn,oe&&ws.length===1&&"".concat(nn,"--selectRange"),tt&&"".concat(nn,"--doubleView"),l),ref:j,children:[js(),e.jsxs("div",{className:"".concat(nn,"__viewContainer"),onBlur:oe?Jn:void 0,onMouseLeave:oe?Jn:void 0,children:[_a(),tt?_a(!0):null]})]})});const ou=jt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,su=jt`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,cu=jt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,lu=jt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,du=jt`
  from { opacity: 0; }
  to { opacity: 1; }
`,uu=i.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${du} 0.15s ease-out;
`,pu=i.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?Je`animation: ${lu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${cu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?Je`animation: ${su} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${ou} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,xu=i.div`
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
`,Wt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:o})=>{const c=h.useRef(null),[l,d]=h.useState(!1),[p,s]=h.useState(!1),[u,g]=h.useState(!1),[x,f]=h.useState({top:0,left:0});h.useEffect(()=>{if(t&&(o!=null&&o.current)){const v=o.current.getBoundingClientRect(),j=280,_=320,A=8,B=window.innerHeight-v.bottom-A<_;g(B);let F;B?F=v.top-_-A:F=v.bottom+A;let y=v.right-j;y<8&&(y=8),y+j>window.innerWidth-8&&(y=window.innerWidth-j-8),F<8&&(F=8),f({top:F,left:y}),s(!0),d(!1)}},[t,o]);const w=h.useCallback(()=>{d(!0),setTimeout(()=>{s(!1),d(!1),n()},150)},[n]),k=h.useCallback(v=>{c.current&&!c.current.contains(v.target)&&w()},[w]);h.useEffect(()=>{if(t){const v=setTimeout(()=>{document.addEventListener("mousedown",k)},10);return()=>{clearTimeout(v),document.removeEventListener("mousedown",k)}}},[t,k]);const S=h.useCallback(v=>{v instanceof Date&&(r(me(v)),w())},[r,w]);if(!p)return null;const I=new Date(a+"T00:00:00");return oo.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(uu,{onClick:w}),e.jsx(pu,{ref:c,$isClosing:l,$openUpward:u,$top:x.top,$left:x.left,children:e.jsx(xu,{children:e.jsx(iu,{onChange:S,value:I,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(v,j)=>j.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},hu=i(C.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,gu=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,fu=i.button`
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
`,mu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,ba=i.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,vu=i(ba)`
  height: 14px;
`,yu=i(ba)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,bu=i(ba)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,ju=i(C.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,wu=i(C.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,ku=i.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,Cu=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Su=i(C.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Du=i.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,Tu=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,Iu=i.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,$u=i(C.button).attrs({type:"button"})`
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
`,Lu=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,di=i(C.button).attrs({type:"button"})`
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
`,_u=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),Au=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),an=[.25,.1,.25,1],Ou=({selectedDate:t,onDateChange:n})=>{const[a,r]=h.useState(!1),[o,c]=h.useState(1),l=h.useRef(null),d=h.useRef(t);if(d.current!==t){const v=new Date(d.current+"T00:00:00"),j=new Date(t+"T00:00:00");c(j>v?1:-1),d.current=t}const p=h.useCallback(v=>{v.preventDefault(),v.stopPropagation();const j=me(new Date),_=new Date(t+"T00:00:00"),A=new Date(j+"T00:00:00");c(A>_?1:-1),n(j)},[t,n]),s=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(-1);const j=new Date(t+"T00:00:00");j.setDate(j.getDate()-1),n(me(j))},[t,n]),u=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(1);const j=new Date(t+"T00:00:00");j.setDate(j.getDate()+1),n(me(j))},[t,n]),g=ml(t),x=new Date(t+"T00:00:00"),f=x.getDate(),w=x.toLocaleDateString("en-US",{month:"short"}),k=x.toLocaleDateString("en-US",{weekday:"long"}),S=x.getFullYear(),I={enter:{y:o*20,opacity:0},center:{y:0,opacity:1},exit:{y:o*-20,opacity:0}};return e.jsxs(hu,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:an},children:[e.jsxs(gu,{children:[e.jsxs(fu,{ref:l,onClick:()=>r(!0),type:"button",children:[e.jsxs(mu,{children:[e.jsx(vu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(ju,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:an},children:w},w)})}),e.jsx(yu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(wu,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:an},children:f},f)})})]}),e.jsx(ku,{}),e.jsxs(Cu,{children:[e.jsx(bu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(Su,{variants:I,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:an},children:k},k)})}),e.jsx(Du,{children:S})]})]}),e.jsxs(Tu,{children:[e.jsx(Iu,{children:e.jsx(U,{children:!g&&e.jsx($u,{onClick:p,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Lu,{children:[e.jsx(di,{onClick:s,whileTap:{scale:.95},children:e.jsx(_u,{})}),e.jsx(di,{onClick:u,whileTap:{scale:.95},children:e.jsx(Au,{})})]})]})]}),e.jsx(Wt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:l})]})};i(C.div)`
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
`;i(oa)`
  display: block;
  text-decoration: none;
  color: inherit;
`;i.span`
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
`;const Bu=i.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,Fu=i.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,Mu=i(C.span)`
  display: inline-block;
`,Pu=i.span`
  display: inline-block;
`,Eu=[.25,.1,.25,1],Nu=({value:t,className:n})=>{const a=h.useMemo(()=>t.split("").map((r,o)=>({char:r,key:`${o}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(Bu,{className:n,children:a.map(({char:r,key:o,isDigit:c},l)=>c?e.jsx(Fu,{children:e.jsx(U,{mode:"popLayout",initial:!1,children:e.jsx(Mu,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:Eu},children:r},o)})},`wrapper-${l}`):e.jsx(Pu,{children:r},`static-${l}`))})},Fe=h.memo(Nu);i.h1`
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;i.h1`
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-primary);
`;i.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;i.h3`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;i.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;i.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-secondary);
`;i.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
`;i.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
`;i.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--text-tertiary);
`;i.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-tertiary);
`;i.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
`;i.span`
  background: var(--gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${({$animated:t})=>t&&`
    animation: gradientFlow 4s ease infinite;
  `}
`;const zu=i(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Ru=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Wu=i.div`
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
`,Hu=i.div`
  flex: 1;
  min-width: 0;
`,Yu=i.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,Vu=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Uu=i.span`
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
`,qu=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,ui=i.div`
  text-align: ${({$align:t})=>t||"left"};
`,pi=i.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,xi=i.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,Gu=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,Ku=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,Ju=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Zu=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,Xu=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Qu=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ep=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,tp=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,np=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,rp=i(C.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,ap={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},ip=t=>{const n=ap[t];return n?e.jsx("img",{src:n,alt:`${t.toUpperCase()} Bank`}):null},op=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),hi=[.25,.1,.25,1],sp=({detailedBalance:t,index:n=0,limit:a})=>{const{account:r,billDue:o,unbilled:c,totalOutstanding:l,cycleStart:d,cycleSpending:p}=t,s=a!==void 0&&a>0,u=s?Math.max(0,a-p):0,g=s?p/a*100:0,x=s&&p>a,f=x?"#ef4444":g>80?"#f59e0b":"#10b981",w=()=>o>0?"due":c>0?"unbilled":"clear",k=()=>{switch(w()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return e.jsxs(zu,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:hi,delay:n*.02},children:[e.jsxs(Ru,{children:[e.jsx(Wu,{children:ip(r.bank)}),e.jsxs(Hu,{children:[e.jsxs(Yu,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),e.jsxs(Vu,{children:["Cycle from ",op(d)]})]}),e.jsx(Uu,{$status:w(),children:k()})]}),e.jsxs(qu,{children:[e.jsxs(ui,{children:[e.jsx(pi,{children:"Bill Due"}),e.jsx(xi,{$color:o>0?"#ef4444":"#10b981",children:e.jsx(Fe,{value:Y(o)})})]}),e.jsxs(ui,{$align:"right",children:[e.jsx(pi,{children:"Unbilled"}),e.jsx(xi,{$color:c>0?"#f59e0b":"var(--text-tertiary)",children:e.jsx(Fe,{value:Y(c)})})]})]}),s&&e.jsxs(Gu,{children:[e.jsxs(Ku,{children:[e.jsxs(Xu,{children:[e.jsx(Qu,{children:"Virtual Limit"}),e.jsx(ep,{children:Y(a)})]}),e.jsxs(tp,{children:[e.jsx(np,{children:x?"Over By":"Available"}),e.jsx(rp,{$color:f,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:Y(x?l-a:u)},u)]})]}),e.jsx(Ju,{children:e.jsx(Zu,{$color:f,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:hi,delay:.1}})})]})]})},cp=h.memo(sp),lp=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),dp=i(C.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,gr=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,mr=i.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,up=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,pp=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,ct=i(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,lt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,dt=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,ut=i.div`
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
`,pt=i.div`
  min-width: 0;
`,xt=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ht=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,gt=i.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,xp=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,hp=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,gp=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,fp=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,mp=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,vp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,yp=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,bp=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,jp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,wp=i(C.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,gi={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},kp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Cp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),Sp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),ja=[.25,.1,.25,1],Dp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:ja,staggerChildren:.05}}},ft={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:ja}}},Tp=({balances:t,ccLimits:n={},creditCardDetailedBalances:a=[]})=>{const{hdfcBalance:r,iciciBalance:o,liquidFundBalance:c,netCash:l,totalCCOutstanding:d,netPosition:p,totalLimit:s,totalLimitRemaining:u,limitPercentage:g,limitColor:x}=h.useMemo(()=>{const w=t.find(T=>T.account.id==="hdfc-bank"),k=t.find(T=>T.account.id==="icici-bank"),S=t.find(T=>T.account.id==="liquid-fund"),I=t.filter(T=>T.account.type==="credit_card"),v=(w==null?void 0:w.balance)||0,j=(k==null?void 0:k.balance)||0,_=(S==null?void 0:S.balance)||0,A=I.reduce((T,O)=>T+(O.totalOutstanding||0),0);let D=0;for(const T of a){const O=n[T.account.id]||0;O>0&&(D+=O)}const B=Math.max(0,D-A),F=D>0?A/D*100:0,b=A>D&&D>0?"#ef4444":F>80?"#f59e0b":"#10b981";return{hdfcBalance:v,iciciBalance:j,liquidFundBalance:_,netCash:v-A+_,totalCCOutstanding:A,netPosition:v-A,totalLimit:D,totalLimitRemaining:B,limitPercentage:F,limitColor:b}},[t,n,a]),f=s>0;return e.jsxs(dp,{variants:Dp,initial:"hidden",animate:"visible",children:[e.jsxs(gr,{children:[e.jsx(fr,{children:e.jsx(mr,{children:"Bank Accounts"})}),e.jsxs(up,{children:[e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#004C8F",children:e.jsx("img",{src:gi.hdfc,alt:"HDFC"})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"HDFC Bank"}),e.jsx(ht,{children:"Savings"})]})]}),e.jsx(gt,{$color:r>=0?"#10b981":"#ef4444",children:e.jsx(Fe,{value:Y(r)})})]})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#F58220",children:e.jsx("img",{src:gi.icici,alt:"ICICI"})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"ICICI Bank"}),e.jsx(ht,{children:"Savings"})]})]}),e.jsx(gt,{$color:o>=0?"#10b981":"#ef4444",children:e.jsx(Fe,{value:Y(o)})})]})})]})]}),e.jsxs(gr,{children:[e.jsx(fr,{children:e.jsx(mr,{children:"Investments"})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#8b5cf6",children:e.jsx(lp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Liquid Fund"}),e.jsx(ht,{children:"Short-term Investment"})]})]}),e.jsx(gt,{$color:c>=0?"#8b5cf6":"#ef4444",children:e.jsx(Fe,{value:Y(c)})})]})})]}),e.jsxs(gr,{children:[e.jsx(fr,{children:e.jsx(mr,{children:"Position Summary"})}),e.jsxs(pp,{children:[e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#3b82f6",children:e.jsx(kp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Net Position"}),e.jsx(ht,{children:"HDFC − CC Due"})]})]}),e.jsx(gt,{$color:p>=0?"#3b82f6":"#ef4444",children:e.jsx(Fe,{value:Y(p)})})]})}),e.jsx(ct,{variants:ft,children:e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#22c55e",children:e.jsx(Cp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Net Cash"}),e.jsx(ht,{children:"Net Position + LF"})]})]}),e.jsx(gt,{$color:l>=0?"#22c55e":"#ef4444",children:e.jsx(Fe,{value:Y(l)})})]})}),e.jsxs(ct,{variants:ft,children:[e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(ut,{$color:"#ef4444",children:e.jsx(Sp,{})}),e.jsxs(pt,{children:[e.jsx(xt,{children:"Credit Cards"}),e.jsx(ht,{children:"Total Outstanding"})]})]}),e.jsx(gt,{$color:d>0?"#ef4444":"#10b981",children:e.jsx(Fe,{value:`${d>0?"-":""}${Y(d)}`})})]}),f&&e.jsxs(xp,{children:[e.jsxs(hp,{children:[e.jsxs(mp,{children:[e.jsx(vp,{children:"Combined Limit"}),e.jsx(yp,{children:Y(s)})]}),e.jsxs(bp,{children:[e.jsx(jp,{children:g>100?"Over By":"Available"}),e.jsx(wp,{$color:x,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:g>100?Y(d-s):Y(u)},u)]})]}),e.jsx(gp,{children:e.jsx(fp,{$color:x,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:ja,delay:.1}})})]})]})]})]})]})},Ip=h.memo(Tp),$p=i.div`
  display: flex;
  flex-direction: column;
`,Lp=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`,_p=i(C.button)`
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
`,Ap=i.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,Op=i.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,Bp=i.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Fp=i.div`
  padding: 0;
`,Oe=i.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Be=i.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,Jo=i.input`
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
`,Mp=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Pp=i.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,Ep=i(C.button).attrs({type:"button"})`
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
`,Bt=i.select`
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
`,Np=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,zp=i.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Rp=i(Jo)`
  padding-left: 28px;
`,Wp=i.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,Hp=i(C.button)`
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
`,Yp=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"},{type:"liquid_fund_credit",label:"LF Credit",hint:"Add to fund",color:"#8b5cf6"},{type:"liquid_fund_debit",label:"LF Debit",hint:"Withdraw from fund",color:"#a855f7"}],Vp=An(),on=wo(),sn=ko(),fi=[.4,0,.2,1],Up=({onAddTransaction:t,defaultDate:n,categories:a=[]})=>{const[r,o]=h.useState("credit_card_spend"),[c,l]=h.useState(""),[d,p]=h.useState(""),[s,u]=h.useState(""),[g,x]=h.useState(""),[f,w]=h.useState(n||me(new Date)),[k,S]=h.useState(""),[I,v]=h.useState(!1),j=h.useRef(null),_=r==="credit_card_spend"||r==="bank_debit";h.useEffect(()=>{n&&w(n)},[n]);const A=h.useMemo(()=>{switch(r){case"credit_card_spend":case"cc_payment":return Vp;case"bank_debit":case"bank_credit":return on;case"liquid_fund_credit":case"liquid_fund_debit":return sn?[sn]:[];default:return Me}},[r]),D=h.useCallback(()=>{switch(r){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";case"liquid_fund_credit":case"liquid_fund_debit":return"Liquid Fund";default:return"Select account..."}},[r]);h.useEffect(()=>{(r==="liquid_fund_credit"||r==="liquid_fund_debit")&&sn&&l(sn.id)},[r]);const B=r==="liquid_fund_credit"||r==="liquid_fund_debit",F=r&&c&&parseFloat(s)>0&&f&&(!B||d),y=h.useCallback(()=>{o(""),l(""),p(""),u(""),x(""),S("")},[]),b=h.useCallback(()=>{if(!r||!c||!s||!f)return;const $=(r==="cc_payment"||r==="liquid_fund_credit"||r==="liquid_fund_debit")&&d?d:void 0,m=Me.find(V=>V.id===c),L=d?Me.find(V=>V.id===d):void 0;let M="";switch(r){case"credit_card_spend":M=`Spent on ${m==null?void 0:m.name}`;break;case"cc_payment":M=L?`Payment to ${m==null?void 0:m.name} from ${L.name}`:`Payment to ${m==null?void 0:m.name}`;break;case"bank_debit":M=`Debited from ${m==null?void 0:m.name}`;break;case"bank_credit":M=`Credited to ${m==null?void 0:m.name}`;break;case"liquid_fund_credit":M=L?`Invested in Liquid Fund from ${L.name}`:"Invested in Liquid Fund";break;case"liquid_fund_debit":M=L?`Withdrawn from Liquid Fund to ${L.name}`:"Withdrawn from Liquid Fund";break}const G=wl(r,c,parseFloat(s),g||M,f,$,_&&k?k:void 0);t(G),y()},[r,c,d,s,g,f,k,_,t,y]),T=h.useMemo(()=>{const m=s.replace(/[^0-9.]/g,"").split(".");let L=m[0];const M=m[1];if(L.length>3){let G=L.substring(L.length-3),V=L.substring(0,L.length-3);V=V.replace(/\B(?=(\d{2})+(?!\d))/g,","),L=V+","+G}return M!==void 0?`${L}.${M}`:L},[s]),O=h.useCallback($=>{const m=$.target.value.replace(/,/g,"");(m===""||/^\d*\.?\d*$/.test(m))&&u(m)},[]),P=$=>new Date($+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs($p,{children:[e.jsx(Lp,{children:Yp.map(({type:$,label:m,hint:L,color:M})=>e.jsxs(_p,{type:"button",$active:r===$,$color:M,onClick:()=>{r!==$&&(o($),l(""),p(""))},whileTap:{scale:.98},transition:{duration:.1,ease:fi},children:[e.jsx(Ap,{children:m}),e.jsx(Op,{children:L})]},$))}),e.jsxs("div",{children:[e.jsx(Bp,{children:e.jsxs(Fp,{children:[r!=="liquid_fund_credit"&&r!=="liquid_fund_debit"&&e.jsxs(Oe,{children:[e.jsx(Be,{children:r==="credit_card_spend"||r==="cc_payment"?"Credit Card":"Bank Account"}),e.jsxs(Bt,{value:c,onChange:$=>l($.target.value),children:[e.jsx("option",{value:"",children:D()}),A.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="cc_payment"&&e.jsxs(Oe,{children:[e.jsx(Be,{children:"Paid From (Optional)"}),e.jsxs(Bt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),on.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="liquid_fund_credit"&&e.jsxs(Oe,{children:[e.jsx(Be,{children:"Transfer From Bank Account"}),e.jsxs(Bt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),on.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),r==="liquid_fund_debit"&&e.jsxs(Oe,{children:[e.jsx(Be,{children:"Transfer To Bank Account"}),e.jsxs(Bt,{value:d,onChange:$=>p($.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),on.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]}),e.jsxs(Oe,{children:[e.jsx(Be,{children:"Amount"}),e.jsxs(Np,{children:[e.jsx(zp,{children:"₹"}),e.jsx(Rp,{type:"text",inputMode:"decimal",placeholder:"0",value:T,onChange:O})]})]}),e.jsxs(Oe,{children:[e.jsx(Be,{children:"Date"}),e.jsxs(Mp,{children:[e.jsx(Pp,{children:P(f)}),e.jsx(Ep,{ref:j,onClick:()=>v(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Wt,{isOpen:I,onClose:()=>v(!1),selectedDate:f,onDateSelect:w,triggerRef:j})]})]}),e.jsxs(Oe,{children:[e.jsx(Be,{children:"Description (Optional)"}),e.jsx(Jo,{type:"text",placeholder:"Add a note...",value:g,onChange:$=>x($.target.value)})]}),_&&a.length>0&&e.jsxs(Oe,{children:[e.jsx(Be,{children:"Category (Optional)"}),e.jsxs(Bt,{value:k,onChange:$=>S($.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),a.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))]})]})]})}),e.jsx(Wp,{children:e.jsx(Hp,{type:"button",onClick:b,disabled:!F,whileTap:F?{scale:.98}:{},transition:{duration:.1,ease:fi},children:"Add Transaction"})})]})]})},qp=h.memo(Up),$n={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},Gp=t=>{switch(t){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},Kp=i.section`
  border-bottom: 1px solid var(--border);
`,Jp=i.div`
  padding: ${$n.section}px 0;

  @media (max-width: 640px) {
    padding: ${$n.sectionMobile}px 0;
  }
`,Zp=i(C.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,Xp=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Qp=i.div`
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
`,ex=i.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,tx=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,nx=i(C.span)`
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
`,rx=i(C.div)`
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
`,ax=i(C.div)`
  overflow: hidden;
`,ix=i.div`
  padding-top: ${$n.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${$n.contentGapMobile}px;
  }
`,ox=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),Ln=[.32,.72,0,1],sx={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:Ln},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:Ln},opacity:{duration:.25,delay:.05}}}},cx=({title:t,icon:n,accent:a,badge:r,defaultOpen:o=!0,isOpen:c,onOpenChange:l,collapseOnClickOutside:d=!1,children:p})=>{const[s,u]=h.useState(o),g=h.useRef(null),x=c!==void 0,f=x?c:s,w=Gp(a),k=()=>{const S=!f;x?l==null||l(S):u(S)};return h.useEffect(()=>{if(!d||!f)return;const S=I=>{g.current&&!g.current.contains(I.target)&&(x?l==null||l(!1):u(!1))};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S)}},[d,f,x,l]),e.jsx(Kp,{ref:g,children:e.jsxs(Jp,{children:[e.jsxs(Zp,{type:"button",onClick:k,whileTap:{scale:.995},transition:{duration:.1},children:[e.jsxs(Xp,{children:[e.jsx(Qp,{$color:w,children:n}),e.jsx(ex,{children:t})]}),e.jsxs(tx,{children:[e.jsx(U,{mode:"wait",children:r!==void 0&&e.jsx(nx,{$color:w,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:Ln},children:r},r)}),e.jsx(rx,{animate:{rotate:f?180:0},transition:{duration:.25,ease:Ln},children:e.jsx(ox,{})})]})]}),e.jsx(U,{initial:!1,children:f&&e.jsx(ax,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:sx,children:e.jsx(ix,{children:p})},"content")})]})})},lx=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,dx=i.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,ux=i(C.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,px=i.div`
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
`,Zo=i(C.div)`
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
`,xx=i.div`
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
`,hx=i.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,gx=i.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,fx=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,mx=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,vx=i.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,yx=i(C.button)`
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

  ${Zo}:hover & {
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
`,bx=i(C.div)`
  padding: 48px 24px;
  text-align: center;
`,jx=i.div`
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
`,wx=i.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,kx=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,Cx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),e.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),e.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),Sx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),mi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]}),Dx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]}),Tx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Ix=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),vi=[.32,.72,0,1],$x=t=>{switch(t){case"credit_card_spend":return e.jsx(Sx,{});case"cc_payment":return e.jsx(mi,{});case"bank_debit":return e.jsx(mi,{});case"bank_credit":return e.jsx(Dx,{})}},yi=t=>t==="bank_credit",Lx=t=>{const n=new Date(t),a=new Date,r=new Date(a);return r.setDate(r.getDate()-1),t===a.toISOString().split("T")[0]?"Today":t===r.toISOString().split("T")[0]?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},_x=({transactions:t,onDeleteTransaction:n,selectedDate:a})=>{const{filteredTransactions:r,groupedTransactions:o}=h.useMemo(()=>{const d=new Date(a),p=t.filter(u=>new Date(u.date)<=d).sort((u,g)=>{const x=g.date.localeCompare(u.date);return x!==0?x:g.id.localeCompare(u.id)}),s={};return p.forEach(u=>{s[u.date]||(s[u.date]=[]),s[u.date].push(u)}),{filteredTransactions:p,groupedTransactions:s}},[t,a]),c=h.useCallback(d=>{n(d)},[n]),l=Object.keys(o).sort((d,p)=>p.localeCompare(d));return e.jsx(cx,{title:"Transactions",icon:e.jsx(Cx,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:e.jsx(lx,{children:e.jsx(dx,{children:r.length===0?e.jsxs(bx,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:vi},children:[e.jsx(jx,{children:e.jsx(Ix,{})}),e.jsx(wx,{children:"No Transactions"}),e.jsx(kx,{children:"Add your first transaction above"})]}):l.map(d=>e.jsxs(ux,{children:[e.jsx(px,{children:Lx(d)}),e.jsx(U,{mode:"popLayout",children:o[d].map(p=>{var u;const s=Nt(p.accountId);return e.jsxs(Zo,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:vi},layout:!0,children:[e.jsx(xx,{$type:p.type,children:$x(p.type)}),e.jsxs(hx,{children:[e.jsx(gx,{children:p.description}),e.jsx(fx,{children:(u=s==null?void 0:s.name)==null?void 0:u.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(mx,{children:[e.jsxs(vx,{$positive:yi(p.type),children:[yi(p.type)?"+":"-",Y(p.amount)]}),e.jsx(yx,{type:"button",onClick:()=>c(p.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(Tx,{})})]})]},p.id)})})]},d))})})})};h.memo(_x);const Ax=i(C.div)`
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
`,Ox=i(C.div)`
  width: 100%;
  max-width: 440px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Bx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Fx=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Xo=i(C.button)`
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
`,Mx=i(Xo)`
  left: 12px;
  color: var(--text-secondary);
`,Px=i(Xo)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Ex=i.div`
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
`,cn=i.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,ln=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`,dn=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,un=i.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  gap: 12px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,pn=i.div`
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
`,xn=i.div`
  flex: 1;
  min-width: 0;
`,hn=i.div`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,gn=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,fn=i.div`
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
`,mn=i.input`
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
`,Nx=i.div`
  padding: 8px 14px 12px;
  display: flex;
  gap: 8px;
`,bi=i.button`
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
`,zx=i.div`
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Rx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),e.jsx("polyline",{points:"5 6 12 3 19 6"}),e.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),e.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),Wx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Hx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Yx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),Qo=[.25,.1,.25,1],Vx={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Ux={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:Qo}}},qx=({isOpen:t,onClose:n,initialBalances:a,initialCCBills:r,ccLimits:o,onSave:c})=>{const[l,d]=h.useState({}),[p,s]=h.useState({}),[u,g]=h.useState({}),[x,f]=h.useState({}),[w,k]=h.useState(""),S=wo(),I=An(),v=ko();h.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),h.useEffect(()=>{var b;if(t){const T=me(new Date),O={};S.forEach(L=>{var M;O[L.id]=((M=a[L.id])==null?void 0:M.toString())||""}),d(O),v&&k(((b=a[v.id])==null?void 0:b.toString())||"");const P={},$={};I.forEach(L=>{const M=_n(r[L.id],T);P[L.id]=M.amount>0?M.amount.toString():"",$[L.id]=M.type}),s(P),g($);const m={};I.forEach(L=>{var M;m[L.id]=((M=o[L.id])==null?void 0:M.toString())||""}),f(m)}},[t,a,r,o,v]);const j=()=>{const b=me(new Date),T={};if(Object.entries(l).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0;T[$]=L}),v){const $=parseFloat(w.replace(/,/g,""))||0;T[v.id]=$}const O={};Object.entries(p).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0,M=r[$],G=typeof M=="object"?M.setupDate:b,V={amount:L,type:u[$]||"billed",setupDate:typeof M=="object"&&M.amount===L?G:b};O[$]=V});const P={};Object.entries(x).forEach(([$,m])=>{const L=parseFloat(m.replace(/,/g,""))||0;L>0&&(P[$]=L)}),c(T,O,P),n()},_=b=>{const T=b.replace(/[^0-9]/g,"");if(!T)return"";if(T.length>3){let O=T.substring(T.length-3),P=T.substring(0,T.length-3);return P=P.replace(/\B(?=(\d{2})+(?!\d))/g,","),P+","+O}return T},A=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&d(P=>({...P,[b]:O}))},D=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&s(P=>({...P,[b]:O}))},B=(b,T)=>{const O=T.replace(/,/g,"");(O===""||/^\d+$/.test(O))&&f(P=>({...P,[b]:O}))},F=b=>{const T=b.replace(/,/g,"");(T===""||/^\d+$/.test(T))&&k(T)},y=b=>{if(b>3&&b<21)return"th";switch(b%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return e.jsx(U,{children:t&&e.jsx(Ax,{variants:Vx,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:Qo},onClick:n,children:e.jsxs(Ox,{variants:Ux,initial:"hidden",animate:"visible",exit:"exit",onClick:b=>b.stopPropagation(),children:[e.jsxs(Bx,{children:[e.jsx(Mx,{onClick:n,children:"Cancel"}),e.jsx(Fx,{children:"Balances & Limits"}),e.jsx(Px,{onClick:j,children:"Done"})]}),e.jsxs(Ex,{children:[e.jsxs(cn,{children:[e.jsx(ln,{children:"Bank Accounts"}),e.jsx(dn,{children:S.map(b=>e.jsxs(un,{children:[e.jsx(pn,{$color:"#007AFF",children:e.jsx(Rx,{})}),e.jsxs(xn,{children:[e.jsx(hn,{children:b.name.replace(" Bank","")}),e.jsx(gn,{children:"Current balance"})]}),e.jsx(fn,{children:e.jsx(mn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(l[b.id]||""),onChange:T=>A(b.id,T.target.value)})})]},b.id))})]}),v&&e.jsxs(cn,{children:[e.jsx(ln,{children:"Investments"}),e.jsx(dn,{children:e.jsxs(un,{children:[e.jsx(pn,{$color:"#AF52DE",children:e.jsx(Yx,{})}),e.jsxs(xn,{children:[e.jsx(hn,{children:"Liquid Fund"}),e.jsx(gn,{children:"Current investment value"})]}),e.jsx(fn,{children:e.jsx(mn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(w),onChange:b=>F(b.target.value)})})]})})]}),e.jsxs(cn,{children:[e.jsx(ln,{children:"Credit Card Bills"}),e.jsx(dn,{children:I.map(b=>e.jsxs(zx,{children:[e.jsxs(un,{style:{borderBottom:"none"},children:[e.jsx(pn,{$color:"#FF9500",children:e.jsx(Wx,{})}),e.jsxs(xn,{children:[e.jsx(hn,{children:b.name.replace(" Credit Card","")}),e.jsx(gn,{children:"Outstanding amount"})]}),e.jsx(fn,{children:e.jsx(mn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(p[b.id]||""),onChange:T=>D(b.id,T.target.value)})})]}),e.jsxs(Nx,{children:[e.jsx(bi,{type:"button",$active:u[b.id]==="billed",onClick:()=>g(T=>({...T,[b.id]:"billed"})),children:"Billed"}),e.jsx(bi,{type:"button",$active:u[b.id]==="unbilled",onClick:()=>g(T=>({...T,[b.id]:"unbilled"})),children:"Unbilled"})]})]},b.id))})]}),e.jsxs(cn,{children:[e.jsx(ln,{children:"Spending Limits"}),e.jsx(dn,{children:I.map(b=>{const T=yo[b.id];return e.jsxs(un,{children:[e.jsx(pn,{$color:"#34C759",children:e.jsx(Hx,{})}),e.jsxs(xn,{children:[e.jsx(hn,{children:b.name.replace(" Credit Card","")}),T&&e.jsxs(gn,{children:["Resets on ",T,y(T)]})]}),e.jsx(fn,{children:e.jsx(mn,{type:"text",inputMode:"numeric",placeholder:"0",value:_(x[b.id]||""),onChange:O=>B(b.id,O.target.value)})})]},b.id)})})]})]})]})})})},Gx=i(C.div)`
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
`,Kx=i(C.div)`
  width: 100%;
  max-width: 400px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Jx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Zx=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,es=i(C.button)`
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
`,Xx=i(es)`
  left: 12px;
  color: var(--text-secondary);
`,Qx=i(es)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,eh=i.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,ji=i.div`
  padding: 16px;
`,wi=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`,th=i.div`
  display: flex;
  gap: 10px;
`,nh=i.input`
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
`,rh=i(C.button)`
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
`,ah=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,ih=i(C.div)`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,oh=i.span`
  flex: 1;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,sh=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,aa=i(C.button)`
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
`,ch=i(aa)`
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`,lh=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,dh=i.div`
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
`,uh=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,ph=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
`,xh=i(C.div)`
  position: absolute;
  inset: 0;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`,hh=i.input`
  flex: 1;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--accent);
  border-radius: 10px;
  outline: none;
`,gh=i.div`
  position: relative;
`,fh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),mh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),vh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}),e.jsx("path",{d:"M7 7h.01"})]}),yh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),ts=[.25,.1,.25,1],bh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},jh={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:ts}}},wh=({isOpen:t,onClose:n,categories:a,onSave:r})=>{const[o,c]=h.useState(a),[l,d]=h.useState(""),[p,s]=h.useState(null),[u,g]=h.useState(""),x=h.useRef(null);h.useEffect(()=>{t&&(c(a),d(""),s(null))},[t,a]),h.useEffect(()=>{p&&x.current&&x.current.focus()},[p]);const f=h.useCallback(()=>{if(!l.trim())return;const v={id:jo(),name:l.trim()};c(j=>[...j,v]),d("")},[l]),w=h.useCallback(v=>{c(j=>j.filter(_=>_.id!==v))},[]),k=h.useCallback(v=>{s(v.id),g(v.name)},[]),S=h.useCallback(()=>{!p||!u.trim()||(c(v=>v.map(j=>j.id===p?{...j,name:u.trim()}:j)),s(null),g(""))},[p,u]),I=h.useCallback(()=>{r(o),n()},[o,r,n]);return e.jsx(U,{children:t&&e.jsx(Gx,{variants:bh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:ts},onClick:n,children:e.jsxs(Kx,{variants:jh,initial:"hidden",animate:"visible",exit:"exit",onClick:v=>v.stopPropagation(),children:[e.jsxs(Jx,{children:[e.jsx(Xx,{onClick:n,children:"Cancel"}),e.jsx(Zx,{children:"Categories"}),e.jsx(Qx,{onClick:I,children:"Done"})]}),e.jsxs(eh,{children:[e.jsxs(ji,{children:[e.jsx(wi,{children:"Add New"}),e.jsxs(th,{children:[e.jsx(nh,{type:"text",placeholder:"Category name",value:l,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&f()}),e.jsx(rh,{onClick:f,disabled:!l.trim(),whileTap:{scale:.98},children:"Add"})]})]}),e.jsxs(ji,{children:[e.jsx(wi,{children:"Your Categories"}),o.length===0?e.jsxs(lh,{children:[e.jsx(dh,{children:e.jsx(vh,{})}),e.jsx(uh,{children:"No Categories"}),e.jsx(ph,{children:"Add a category to organize your transactions"})]}):e.jsx(ah,{children:e.jsx(U,{children:o.map(v=>e.jsxs(gh,{children:[e.jsxs(ih,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,height:0},layout:!0,children:[e.jsx(oh,{children:v.name}),e.jsxs(sh,{children:[e.jsx(aa,{onClick:()=>k(v),whileTap:{scale:.95},children:e.jsx(fh,{})}),e.jsx(ch,{onClick:()=>w(v.id),whileTap:{scale:.95},children:e.jsx(mh,{})})]})]}),e.jsx(U,{children:p===v.id&&e.jsxs(xh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(hh,{ref:x,type:"text",value:u,onChange:j=>g(j.target.value),onKeyDown:j=>{j.key==="Enter"&&S(),j.key==="Escape"&&s(null)},onBlur:S}),e.jsx(aa,{onClick:S,whileTap:{scale:.95},style:{color:"var(--accent)"},children:e.jsx(yh,{})})]})})]},v.id))})})]})]})]})})})},kh=i(C.div)`
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
`,Ch=i(C.div)`
  width: 100%;
  max-width: 440px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
`,Sh=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
`,Dh=i.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
`,Th=i(C.button)`
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
`,Ih=i.div`
  padding: 20px;
`,vn=i.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`,yn=i.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 8px;
`,ns=i.input`
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
`,$h=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,Lh=i.span`
  position: absolute;
  left: 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,_h=i(ns)`
  padding-left: 30px;
`,Ah=i.select`
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
`,Oh=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,Bh=i.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,Fh=i(C.button).attrs({type:"button"})`
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
`,Mh=i.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
`,ki=i(C.button)`
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
`,Ph=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),rs=[.25,.1,.25,1],Eh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Nh={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.15,ease:rs}}},zh=({isOpen:t,onClose:n,transaction:a,categories:r,onSave:o})=>{const[c,l]=h.useState(""),[d,p]=h.useState(""),[s,u]=h.useState(""),[g,x]=h.useState(""),[f,w]=h.useState(!1),k=h.useRef(null);h.useEffect(()=>{t&&a&&(l(a.amount.toString()),p(a.date),u(a.description),x(a.categoryId||""))},[t,a]);const S=h.useMemo(()=>{const B=c.replace(/[^0-9.]/g,"").split(".");let F=B[0];const y=B[1];if(F.length>3){let b=F.substring(F.length-3),T=F.substring(0,F.length-3);T=T.replace(/\B(?=(\d{2})+(?!\d))/g,","),F=T+","+b}return y!==void 0?`${F}.${y}`:F},[c]),I=h.useCallback(D=>{const B=D.target.value.replace(/,/g,"");(B===""||/^\d*\.?\d*$/.test(B))&&l(B)},[]),v=D=>new Date(D+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),j=h.useCallback(()=>{if(!a)return;const D={...a,amount:parseFloat(c)||a.amount,date:d||a.date,description:s,categoryId:g||void 0};o(D),n()},[a,c,d,s,g,o,n]),_=parseFloat(c)>0&&d,A=a&&(a.type==="credit_card_spend"||a.type==="bank_debit");return e.jsx(U,{children:t&&a&&e.jsx(kh,{variants:Eh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:rs},onClick:n,children:e.jsxs(Ch,{variants:Nh,initial:"hidden",animate:"visible",exit:"exit",onClick:D=>D.stopPropagation(),children:[e.jsxs(Sh,{children:[e.jsx(Dh,{children:"Edit Transaction"}),e.jsx(Th,{onClick:n,whileTap:{scale:.95},children:e.jsx(Ph,{})})]}),e.jsxs(Ih,{children:[e.jsxs(vn,{children:[e.jsx(yn,{children:"Amount"}),e.jsxs($h,{children:[e.jsx(Lh,{children:"₹"}),e.jsx(_h,{type:"text",inputMode:"decimal",placeholder:"0",value:S,onChange:I})]})]}),e.jsxs(vn,{children:[e.jsx(yn,{children:"Date"}),e.jsxs(Oh,{children:[e.jsx(Bh,{children:v(d)}),e.jsx(Fh,{ref:k,onClick:()=>w(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Wt,{isOpen:f,onClose:()=>w(!1),selectedDate:d,onDateSelect:p,triggerRef:k})]})]}),e.jsxs(vn,{children:[e.jsx(yn,{children:"Description"}),e.jsx(ns,{type:"text",placeholder:"Add a note...",value:s,onChange:D=>u(D.target.value)})]}),A&&e.jsxs(vn,{children:[e.jsx(yn,{children:"Category"}),e.jsxs(Ah,{value:g,onChange:D=>x(D.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),r.map(D=>e.jsx("option",{value:D.id,children:D.name},D.id))]})]})]}),e.jsxs(Mh,{children:[e.jsx(ki,{onClick:n,whileTap:{scale:.98},children:"Cancel"}),e.jsx(ki,{$primary:!0,onClick:j,disabled:!_,whileTap:_?{scale:.98}:{},children:"Save"})]})]})})})},Rh=h.memo(function({balances:n,ccLimits:a,creditCardDetailedBalances:r}){return e.jsx(Ip,{balances:n,ccLimits:a,creditCardDetailedBalances:r})}),Wh=i(C.div)`
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
`,Hh=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,Yh=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,Vh=i.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,Uh=i.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,qh=i(C.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,Gh=i.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,Kh=i(C.div)`
  width: 100%;
`,Jh=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Zh=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,Xh=i.input`
  display: none;
`,Qh=i.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,e0=i(C.button)`
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
`,t0=i.div`
  display: flex;
  padding: 3px;
  margin: 8px 0;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,Ci=i(C.button)`
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
`,n0=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,r0=i.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`,a0=i.div`
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
`,i0=i.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
`,o0=i.div`
  color: var(--text-tertiary);
  transform: rotate(${({$expanded:t})=>t?"180deg":"0deg"});
  transition: transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`,s0=i.div`
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
`,c0=i.div`
  /* Content container */
`,l0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,bn=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,jn=i.label`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Si=i.select`
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
`,d0=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,u0=i.button`
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
`,p0=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Di=i.button`
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
`,x0=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,h0=i.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 10px;
`,g0=i(C.button)`
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
`,f0=i(C.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,m0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,wn=i(C.div)`
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
`,kn=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Cn=i.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
`,v0=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
`,y0=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px 0;
`,Ti=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ii=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,$i=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Li=i.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  letter-spacing: -0.02em;
`,_i=i.div`
  height: 10px;
  background: var(--bg-tertiary);
  border-radius: 5px;
  overflow: hidden;
`,Ai=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 5px;
`,b0=i.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,j0=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,w0=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
  font-weight: 500;
`,k0=i.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$color:t})=>t||"var(--text-primary)"};
`,vr=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,yr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
`,br=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,jr=i.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,wr=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kr=i.div`
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
`,Cr=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  ${({$isFirst:t})=>t&&"border-radius: 6px 0 0 6px;"}
  ${({$isLast:t})=>t&&"border-radius: 0 6px 6px 0;"}
  ${({$isFirst:t,$isLast:n})=>t&&n&&"border-radius: 6px;"}
`,Sr=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Dr=i.div`
  width: 4px;
  height: 40px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Tr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ir=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$r=i.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Lr=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex-shrink: 0;
`,_r=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ar=i.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Or=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,Br=i.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Fr=i(C.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,C0=i(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
`,Mr=i(C.div)`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  padding: 4px;
  margin: -4px;
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-tertiary);
  }

  &:active {
    background: var(--bg-primary);
  }
`,S0=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Oi=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,D0=i.div`
  /* Full height - page scrolls naturally */
`,T0=i(C.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,I0=i.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,$0=i(C.div)`
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
`,L0=i.div`
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
`,_0=i.div`
  flex: 1;
  min-width: 0;
`,A0=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,O0=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,B0=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,F0=i.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,M0=i.div`
  display: flex;
  gap: 4px;
`,Bi=i(C.button)`
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
`,P0=i.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  border-radius: 6px;
  margin-left: 8px;
`,E0=i(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,as=i.div`
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
`,is=i.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,os=i.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,N0=i(C.div)`
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
`,z0=i(C.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`,R0=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`,W0=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,H0=i.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Y0=i.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V0=i(C.button)`
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
`,U0=i.div`
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
`,q0=i.div`
  display: flex;
  gap: 12px;
  padding: 12px 8px;
  margin-bottom: 8px;
`,Fi=i.div`
  flex: 1;
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 12px;
  text-align: center;
`,Mi=i.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  letter-spacing: -0.02em;
`,Pi=i.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-top: 4px;
`,G0=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,K0=i(C.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;

  &:hover {
    background: var(--bg-primary);
  }
`,J0=i.div`
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
`,Z0=i.div`
  flex: 1;
  min-width: 0;
`,X0=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Q0=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 6px;
`,eg=i.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#34C759":"#FF3B30"};
  text-align: right;
  flex-shrink: 0;
`,tg=i.div`
  padding: 48px 20px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 15px;
`,ng=i(C.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Pr=i(C.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Er=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Ei=i(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Nr=i(C.button)`
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
`,zr=i.div`
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
`,Rr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Wr=i.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,Hr=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,Ni=i.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,zi=i.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,rg=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Ri=i(C.button)`
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
`,Wi=i.div`
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
`,Hi=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Yi=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,ag=h.memo(function({creditCardDetailedBalances:n,ccLimits:a}){return e.jsx(Jh,{children:n.map((r,o)=>e.jsx(cp,{detailedBalance:r,index:o,limit:a[r.account.id]},r.account.id))})}),ig=h.memo(function({categories:n,onAddTransaction:a}){return e.jsx(Zh,{children:e.jsx(qp,{onAddTransaction:a,categories:n})})}),og=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),sg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Vi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),cg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),lg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),dg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("polyline",{points:"9 12 11 14 15 10"})]}),ug=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),pg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),xg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),hg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),gg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),fg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),mg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),vg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),yg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),bg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),jg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),wg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),kg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),e.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),Cg=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),ss=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),Ui=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),qi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Sg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),Dg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Tg=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"18 15 12 9 6 15"})}),Ke=[{id:"summary",label:"Summary",icon:og(),accent:"green"},{id:"cards",label:"Cards",icon:sg(),accent:"pink"},{id:"transactions",label:"History",icon:gg(),accent:"blue"},{id:"add",label:"Add",icon:fg(),accent:"orange"},{id:"manage",label:"Manage",icon:mg(),accent:"purple"}],Ig=[{id:"hdfc-bank",label:"HDFC Bank"},{id:"icici-bank",label:"ICICI Bank"},{id:"hdfc-cc",label:"HDFC CC"},{id:"axis-cc",label:"Axis CC"},{id:"icici-cc",label:"ICICI CC"},{id:"yes-cc",label:"Yes CC"},{id:"liquid-fund",label:"Liquid Fund"}],Te=["#FF3B30","#FF9500","#FFCC00","#34C759","#007AFF","#AF52DE"],Gi={bank:"#007AFF",credit_card:"#FF3B30",liquid_fund:"#AF52DE"},Ki={credit_card_spend:"#FF3B30",cc_payment:"#007AFF",bank_debit:"#FF9500",bank_credit:"#34C759",liquid_fund_credit:"#AF52DE",liquid_fund_debit:"#5856D6"},ee=[.25,.1,.25,1],$g={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:ee}}},Lg={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},Et=["bank_credit","liquid_fund_debit"],bt=["credit_card_spend","cc_payment","bank_debit","liquid_fund_credit"],_g=h.memo(function({categoriesCount:n,transactionsCount:a,onOpenBalanceModal:r,onOpenCategoryModal:o,onExport:c,onImport:l}){return e.jsxs(ng,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:ee},children:[e.jsxs(Pr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:ee},children:[e.jsx(Er,{children:"Configuration"}),e.jsxs(Ei,{children:[e.jsxs(Nr,{onClick:r,whileTap:{scale:.99},children:[e.jsx(zr,{$color:"#007AFF",children:e.jsx(xg,{})}),e.jsxs(Rr,{children:[e.jsx(Wr,{children:"Balances & Limits"}),e.jsx(Hr,{children:"Set initial values and card limits"})]}),e.jsx(Ni,{children:e.jsx(Ui,{})})]}),e.jsxs(Nr,{onClick:o,whileTap:{scale:.99},children:[e.jsx(zr,{$color:"#FF9500",children:e.jsx(kg,{})}),e.jsxs(Rr,{children:[e.jsx(Wr,{children:"Categories"}),e.jsx(Hr,{children:"Organize your transactions"})]}),e.jsx(zi,{children:n}),e.jsx(Ni,{children:e.jsx(Ui,{})})]})]})]}),e.jsxs(Pr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:ee},children:[e.jsx(Er,{children:"Data"}),e.jsxs(rg,{children:[e.jsxs(Ri,{type:"button",$variant:"export",onClick:c,whileTap:{scale:.97},children:[e.jsx(Wi,{$color:"#34C759",children:e.jsx(vg,{})}),e.jsx(Hi,{children:"Export"}),e.jsx(Yi,{children:"Save backup file"})]}),e.jsxs(Ri,{type:"button",$variant:"import",onClick:l,whileTap:{scale:.97},children:[e.jsx(Wi,{$color:"#007AFF",children:e.jsx(yg,{})}),e.jsx(Hi,{children:"Import"}),e.jsx(Yi,{children:"Restore from file"})]})]})]}),e.jsxs(Pr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:ee},children:[e.jsx(Er,{children:"About"}),e.jsx(Ei,{children:e.jsxs(Nr,{as:"div",style:{cursor:"default"},children:[e.jsx(zr,{$color:"#8E8E93",children:e.jsx(hg,{})}),e.jsxs(Rr,{children:[e.jsx(Wr,{children:"Transactions"}),e.jsx(Hr,{children:"Total records stored"})]}),e.jsx(zi,{children:a})]})})]})]})}),Ag=t=>{switch(t){case"credit_card_spend":return Vi();case"bank_credit":return cg();case"cc_payment":return dg();case"bank_debit":return lg();case"liquid_fund_credit":return ug();case"liquid_fund_debit":return pg();default:return Vi()}},cs=t=>Et.includes(t),Og=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},Ji=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),Zi=()=>{const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),1);return ls(n)},Xi=()=>ls(new Date),ls=t=>{const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},Bg=t=>t.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Ge=(t,n)=>n>0?t/n*100:0,Fg=h.memo(function({filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:o,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:w,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:j,filterStartDateRef:_,filterEndDateRef:A}){return e.jsxs(n0,{children:[e.jsxs(r0,{onClick:a,children:[e.jsxs(a0,{children:[e.jsx(Cg,{}),"Filters",f>0&&e.jsxs(i0,{children:[f," active"]})]}),e.jsx(o0,{$expanded:n,children:e.jsx(ss,{})})]}),e.jsx(s0,{$expanded:n,children:e.jsx("div",{children:e.jsxs(c0,{children:[e.jsxs(l0,{children:[e.jsxs(bn,{style:{gridColumn:"1 / -1"},children:[e.jsx(jn,{children:"Period"}),e.jsxs(p0,{children:[e.jsxs(Di,{ref:_,type:"button",onClick:()=>I(!0),children:[Ji(r),e.jsx(qi,{})]}),e.jsx(Wt,{isOpen:S,onClose:()=>I(!1),selectedDate:r,onDateSelect:D=>{o(D),I(!1)},triggerRef:_}),e.jsx(x0,{children:"to"}),e.jsxs(Di,{ref:A,type:"button",onClick:()=>j(!0),children:[Ji(c),e.jsx(qi,{})]}),e.jsx(Wt,{isOpen:v,onClose:()=>j(!1),selectedDate:c,onDateSelect:D=>{l(D),j(!1)},triggerRef:A})]})]}),e.jsxs(bn,{children:[e.jsx(jn,{children:"Category"}),e.jsxs(Si,{value:d,onChange:D=>p(D.target.value),children:[e.jsx("option",{value:"all",children:"All Categories"}),k.map(D=>e.jsx("option",{value:D.id,children:D.name},D.id))]})]}),e.jsxs(bn,{children:[e.jsx(jn,{children:"Money Flow"}),e.jsxs(Si,{value:s,onChange:D=>u(D.target.value),children:[e.jsx("option",{value:"all",children:"All Transactions"}),e.jsx("option",{value:"credit",children:"Incoming"}),e.jsx("option",{value:"debit",children:"Outgoing"})]})]}),e.jsxs(bn,{style:{gridColumn:"1 / -1"},children:[e.jsxs(jn,{children:["Account"," ",g.length>0&&`(${g.length} selected)`]}),e.jsx(d0,{children:Ig.map(D=>e.jsx(u0,{type:"button",$selected:g.includes(D.id),onClick:()=>x(D.id),children:D.label},D.id))})]})]}),e.jsx(h0,{children:e.jsx(g0,{onClick:w,whileTap:{scale:.98},children:"Reset Filters"})})]})})})]})}),Mg=h.memo(function({insights:n,hasTransactions:a,activeFilterCount:r,onDrillDown:o}){const{totalCategoryAmount:c,categorySegments:l}=h.useMemo(()=>{const s=n.categoryBreakdown.reduce((x,f)=>x+f.amount,0);let u=0;const g=n.categoryBreakdown.map((x,f)=>{const w=Ge(x.amount,s),k=u;return u+=w,{...x,percent:w,startPercent:k,color:Te[f%Te.length]}});return{totalCategoryAmount:s,categorySegments:g}},[n.categoryBreakdown]),d=h.useMemo(()=>n.accountBreakdown.reduce((s,u)=>s+u.amount,0),[n.accountBreakdown]),p=h.useMemo(()=>n.typeBreakdown.reduce((s,u)=>s+u.amount,0),[n.typeBreakdown]);return a?e.jsxs(f0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:ee},children:[e.jsxs(wn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.4,ease:ee},children:[e.jsxs(kn,{children:[e.jsx(Cn,{children:"Money Flow"}),e.jsxs(v0,{children:[n.totalCount," transactions"]})]}),e.jsxs(y0,{children:[e.jsxs(Ti,{children:[e.jsxs(Ii,{children:[e.jsx($i,{children:"Incoming"}),e.jsx(Li,{$color:"#34C759",children:Y(n.totalIncoming)})]}),e.jsx(_i,{children:e.jsx(Ai,{$color:"#34C759",initial:{width:0},animate:{width:`${Ge(n.totalIncoming,Math.max(n.totalIncoming,n.totalOutgoing))}%`},transition:{delay:.2,duration:.6,ease:ee}})})]}),e.jsxs(Ti,{children:[e.jsxs(Ii,{children:[e.jsx($i,{children:"Outgoing"}),e.jsx(Li,{$color:"#FF3B30",children:Y(n.totalOutgoing)})]}),e.jsx(_i,{children:e.jsx(Ai,{$color:"#FF3B30",initial:{width:0},animate:{width:`${Ge(n.totalOutgoing,Math.max(n.totalIncoming,n.totalOutgoing))}%`},transition:{delay:.3,duration:.6,ease:ee}})})]}),e.jsx(b0,{children:e.jsxs(j0,{children:[e.jsx(w0,{children:"Net Flow"}),e.jsxs(k0,{$color:n.netFlow>=0?"#34C759":"#FF3B30",children:[n.netFlow>=0?"+":"",Y(n.netFlow)]})]})})]})]}),e.jsxs(m0,{children:[n.categoryBreakdown.length>0&&e.jsxs(wn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4,ease:ee},children:[e.jsx(kn,{children:e.jsx(Cn,{children:"Spending by Category"})}),e.jsxs(vr,{children:[e.jsxs(yr,{children:[e.jsx(br,{children:"Total Spending"}),e.jsx(jr,{children:Y(c)})]}),e.jsx(wr,{children:e.jsx(kr,{children:l.map((s,u)=>e.jsx(Cr,{$color:s.color,$isFirst:u===0,$isLast:u===l.length-1,initial:{width:0},animate:{width:`${s.percent}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id))})}),e.jsx(Sr,{children:l.map((s,u)=>e.jsxs(Mr,{onClick:()=>o({type:"category",id:s.id,label:s.name,color:s.color}),whileTap:{scale:.98},children:[e.jsx(Dr,{$color:s.color}),e.jsxs(Tr,{children:[e.jsxs(Ir,{children:[e.jsx($r,{children:s.name}),e.jsx(Lr,{children:Y(s.amount)})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{$color:s.color,children:[s.percent.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Fr,{$color:s.color,initial:{width:0},animate:{width:`${s.percent}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Or,{children:[s.count," txn"]})]})]})]},s.id))})]})]}),n.accountBreakdown.length>0&&e.jsxs(wn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.4,ease:ee},children:[e.jsx(kn,{children:e.jsx(Cn,{children:"Activity by Account"})}),e.jsxs(vr,{children:[e.jsxs(yr,{children:[e.jsx(br,{children:"Total Activity"}),e.jsx(jr,{children:Y(d)})]}),e.jsx(wr,{children:e.jsx(kr,{children:n.accountBreakdown.map((s,u)=>{const g=Ge(s.amount,d),x=Gi[s.type]||Te[u%Te.length];return e.jsx(Cr,{$color:x,$isFirst:u===0,$isLast:u===n.accountBreakdown.length-1,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id)})})}),e.jsx(Sr,{children:n.accountBreakdown.map((s,u)=>{const g=Ge(s.amount,d),x=Gi[s.type]||Te[u%Te.length];return e.jsxs(Mr,{onClick:()=>o({type:"account",id:s.id,label:s.name,color:x}),whileTap:{scale:.98},children:[e.jsx(Dr,{$color:x}),e.jsxs(Tr,{children:[e.jsxs(Ir,{children:[e.jsx($r,{children:s.name}),e.jsx(Lr,{children:Y(s.amount)})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{$color:x,children:[g.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Fr,{$color:x,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Or,{children:[s.count," txn"]})]})]})]},s.id)})})]})]}),n.typeBreakdown.length>0&&e.jsxs(wn,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4,ease:ee},children:[e.jsx(kn,{children:e.jsx(Cn,{children:"Transaction Types"})}),e.jsxs(vr,{children:[e.jsxs(yr,{children:[e.jsx(br,{children:"Total Volume"}),e.jsx(jr,{children:Y(p)})]}),e.jsx(wr,{children:e.jsx(kr,{children:n.typeBreakdown.map((s,u)=>{const g=Ge(s.amount,p),x=Ki[s.id]||Te[u%Te.length];return e.jsx(Cr,{$color:x,$isFirst:u===0,$isLast:u===n.typeBreakdown.length-1,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.2+u*.05,duration:.5,ease:ee}},s.id)})})}),e.jsx(Sr,{children:n.typeBreakdown.map((s,u)=>{const g=Ge(s.amount,p),x=Ki[s.id]||Te[u%Te.length];return e.jsxs(Mr,{onClick:()=>o({type:"transactionType",id:s.id,label:s.label,color:x}),whileTap:{scale:.98},children:[e.jsx(Dr,{$color:x}),e.jsxs(Tr,{children:[e.jsxs(Ir,{children:[e.jsx($r,{children:s.label}),e.jsx(Lr,{children:Y(s.amount)})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{$color:x,children:[g.toFixed(1),"%"]}),e.jsx(Br,{children:e.jsx(Fr,{$color:x,initial:{width:0},animate:{width:`${g}%`},transition:{delay:.3+u*.05,duration:.4,ease:ee}})}),e.jsxs(Or,{children:[s.count," txn"]})]})]})]},s.id)})})]})]})]})]}):e.jsxs(C0,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx(as,{children:e.jsx(Sg,{})}),e.jsx(is,{children:"No Data to Analyze"}),e.jsx(os,{children:r>0?"Try adjusting your filters":"Add transactions to see insights"})]})}),Pg=h.memo(function({groupedTransactions:n,categories:a,activeFilterCount:r,onEditTransaction:o,onDeleteTransaction:c}){const l=Object.keys(n).sort((d,p)=>p.localeCompare(d));return l.length===0?e.jsx(Oi,{children:e.jsxs(E0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx(as,{children:e.jsx(bg,{})}),e.jsx(is,{children:"No Transactions"}),e.jsx(os,{children:r>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):e.jsx(Oi,{children:e.jsx(D0,{children:e.jsx(U,{mode:"popLayout",children:l.map(d=>e.jsxs(T0,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:ee},children:[e.jsx(I0,{children:Og(d)}),n[d].map(p=>{const s=Nt(p.accountId),u=p.categoryId?a.find(x=>x.id===p.categoryId):null,g=cs(p.type);return e.jsxs($0,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:ee},children:[e.jsx(L0,{$type:p.type,children:Ag(p.type)}),e.jsxs(_0,{children:[e.jsxs(A0,{children:[p.description,u&&e.jsx(P0,{children:u.name})]}),e.jsx(O0,{children:(s==null?void 0:s.name)||"Unknown Account"})]}),e.jsxs(B0,{children:[e.jsxs(F0,{$positive:g,children:[g?"+":"-",Y(p.amount)]}),e.jsxs(M0,{children:[e.jsx(Bi,{onClick:()=>o(p),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(wg,{})}),e.jsx(Bi,{$danger:!0,onClick:()=>c(p.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(jg,{})})]})]})]},p.id)})]},d))})})})}),Eg=h.memo(function({drillDown:n,transactions:a,onClose:r}){return e.jsx(U,{children:n&&e.jsx(N0,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:r,children:e.jsxs(z0,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:o=>o.stopPropagation(),children:[e.jsxs(R0,{children:[e.jsxs(W0,{children:[e.jsx(H0,{$color:n.color}),e.jsx(Y0,{children:n.label})]}),e.jsx(V0,{onClick:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Dg,{})})]}),e.jsx(U0,{children:a.length===0?e.jsx(tg,{children:"No transactions found"}):e.jsxs(e.Fragment,{children:[e.jsxs(q0,{children:[e.jsxs(Fi,{children:[e.jsx(Mi,{children:a.length}),e.jsx(Pi,{children:"Transactions"})]}),e.jsxs(Fi,{children:[e.jsx(Mi,{$color:n.color,children:Y(a.reduce((o,c)=>o+c.amount,0))}),e.jsx(Pi,{children:"Total Amount"})]})]}),e.jsx(G0,{children:a.map((o,c)=>{var p;const l=Nt(o.accountId),d=cs(o.type);return e.jsxs(K0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:c*.03,duration:.2},children:[e.jsx(J0,{$positive:d,children:d?e.jsx(ss,{}):e.jsx(Tg,{})}),e.jsxs(Z0,{children:[e.jsx(X0,{children:o.description}),e.jsxs(Q0,{children:[e.jsx("span",{children:(p=l==null?void 0:l.name)==null?void 0:p.replace(" Credit Card"," CC").replace(" Bank","")}),e.jsx("span",{children:"•"}),e.jsx("span",{children:new Date(o.date).toLocaleDateString("en-IN",{day:"numeric",month:"short"})})]})]}),e.jsxs(eg,{$positive:d,children:[d?"+":"-",Y(o.amount)]})]},o.id)})})]})})]})})})}),Ng=h.memo(function({filterExpanded:n,onToggleFilterExpanded:a,filterStartDate:r,onStartDateChange:o,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:w,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:j,filterStartDateRef:_,filterEndDateRef:A,historySubTab:D,onSubTabChange:B,filteredTransactions:F,groupedTransactions:y,insights:b,drillDown:T,drillDownTransactions:O,onDrillDown:P,onCloseDrillDown:$,onEditTransaction:m,onDeleteTransaction:L}){return e.jsxs(e.Fragment,{children:[e.jsxs(S0,{children:[e.jsx(Fg,{filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:o,filterEndDate:c,onEndDateChange:l,filterCategory:d,onCategoryChange:p,filterType:s,onTypeChange:u,filterAccounts:g,onToggleAccount:x,activeFilterCount:f,onResetFilters:w,categories:k,filterStartCalendarOpen:S,onStartCalendarOpenChange:I,filterEndCalendarOpen:v,onEndCalendarOpenChange:j,filterStartDateRef:_,filterEndDateRef:A}),e.jsxs(t0,{children:[e.jsx(Ci,{$active:D==="insights",onClick:()=>B("insights"),whileTap:{scale:.98},children:"Insights"}),e.jsx(Ci,{$active:D==="transactions",onClick:()=>B("transactions"),whileTap:{scale:.98},children:"Transactions"})]}),e.jsx(U,{mode:"wait",children:D==="insights"?e.jsx(Mg,{insights:b,hasTransactions:F.length>0,activeFilterCount:f,onDrillDown:P},"insights"):e.jsx(Pg,{groupedTransactions:y,categories:k,activeFilterCount:f,onEditTransaction:m,onDeleteTransaction:L},"transactions")})]}),e.jsx(Eg,{drillDown:T,transactions:O,onClose:$})]})});function zg(){const[t,n]=h.useState([]),[a,r]=h.useState({}),[o,c]=h.useState({}),[l,d]=h.useState({}),[p,s]=h.useState([]),u=h.useRef(null);h.useEffect(()=>{const j=pl(),_=xl(),A=hl(),D=gl(),B=fl();n(j),r(_),c(A),d(D),s(B)},[]);const g=h.useCallback(j=>{n(_=>{const A=[..._,j];return requestAnimationFrame(()=>en(A)),A})},[]),x=h.useCallback(j=>{n(_=>{const A=_.filter(D=>D.id!==j);return requestAnimationFrame(()=>en(A)),A})},[]),f=h.useCallback(j=>{n(_=>{const A=_.map(D=>D.id===j.id?j:D);return requestAnimationFrame(()=>en(A)),A})},[]),w=h.useCallback(j=>{s(j),requestAnimationFrame(()=>Ga(j))},[]),k=h.useCallback((j,_,A)=>{r(j),c(_),d(A),requestAnimationFrame(()=>{Va(j),Ua(_),qa(A)})},[]),S=h.useCallback(()=>{Cl(t,a,o,l,p)},[t,a,o,l,p]),I=h.useCallback(()=>{var j;(j=u.current)==null||j.click()},[]),v=h.useCallback(j=>{var D;const _=(D=j.target.files)==null?void 0:D[0];if(!_)return;const A=new FileReader;A.onload=B=>{var b;const F=(b=B.target)==null?void 0:b.result,y=Dl(F);y?window.confirm(`Import backup from ${new Date(y.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${y.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(n(y.transactions),r(y.initialBalances),c(y.initialCCBills),d(y.ccLimits||{}),s(y.categories||[]),en(y.transactions),Va(y.initialBalances),Ua(y.initialCCBills),qa(y.ccLimits||{}),Ga(y.categories||[])):alert("Invalid backup file.")},A.readAsText(_),j.target.value=""},[]);return{transactions:t,initialBalances:a,initialCCBills:o,ccLimits:l,categories:p,addTransaction:g,deleteTransaction:x,updateTransaction:f,saveCategories:w,saveInitialData:k,handleExport:S,handleImportClick:I,fileInputRef:u,handleFileChange:v}}function Rg(t){const[n,a]=h.useState(!1),[r,o]=h.useState(Zi),[c,l]=h.useState(Xi),[d,p]=h.useState("all"),[s,u]=h.useState("all"),[g,x]=h.useState([]),[f,w]=h.useState(!1),[k,S]=h.useState(!1),I=h.useRef(null),v=h.useRef(null),j=[...Et],_=[...bt],{filteredTransactions:A,groupedTransactions:D,activeFilterCount:B}=h.useMemo(()=>{let b=t.filter(P=>!(P.date<r||P.date>c||d!=="all"&&(!P.categoryId||P.categoryId!==d)||s!=="all"&&(s==="credit"&&!j.includes(P.type)||s==="debit"&&!_.includes(P.type))||g.length>0&&!g.includes(P.accountId)));b=b.sort((P,$)=>{const m=$.date.localeCompare(P.date);return m!==0?m:$.id.localeCompare(P.id)});const T=Bg(b);let O=0;return d!=="all"&&O++,s!=="all"&&O++,g.length>0&&O++,{filteredTransactions:b,groupedTransactions:T,activeFilterCount:O}},[t,r,c,d,s,g]),F=h.useCallback(b=>{x(T=>T.includes(b)?T.filter(O=>O!==b):[...T,b])},[]),y=h.useCallback(()=>{o(Zi()),l(Xi()),p("all"),u("all"),x([])},[]);return{filterExpanded:n,setFilterExpanded:a,filterStartDate:r,setFilterStartDate:o,filterEndDate:c,setFilterEndDate:l,filterCategory:d,setFilterCategory:p,filterType:s,setFilterType:u,filterAccounts:g,toggleAccountFilter:F,filterStartCalendarOpen:f,setFilterStartCalendarOpen:w,filterEndCalendarOpen:k,setFilterEndCalendarOpen:S,filterStartDateRef:I,filterEndDateRef:v,filteredTransactions:A,groupedTransactions:D,activeFilterCount:B,resetFilters:y}}function Wg(t,n,a,r){return{insights:h.useMemo(()=>{const c=t,l=An();let d=0;const p={};l.forEach(y=>{const b=_n(a[y.id],r);b.amount>0&&(d+=b.amount,p[y.id]=b.amount)});const s=c.filter(y=>Et.includes(y.type)).reduce((y,b)=>y+b.amount,0),g=c.filter(y=>bt.includes(y.type)).reduce((y,b)=>y+b.amount,0)+d,x=s-g,f=c.filter(y=>Et.includes(y.type)).length,w=c.filter(y=>bt.includes(y.type)).length+(d>0?1:0),k=f>0?s/f:0,S=w>0?g/w:0,I={};d>0&&(I["initial-balance"]={id:"initial-balance",name:"Initial Balance",amount:d,count:Object.keys(p).length}),c.forEach(y=>{var b;if(bt.includes(y.type)){const T=y.categoryId||"uncategorized",O=y.categoryId?((b=n.find(P=>P.id===y.categoryId))==null?void 0:b.name)||"Unknown":"Uncategorized";I[T]||(I[T]={id:T,name:O,amount:0,count:0}),I[T].amount+=y.amount,I[T].count++}});const v=Object.entries(I).map(([y,b])=>({...b,id:y})).sort((y,b)=>b.amount-y.amount).slice(0,6),j={};Object.entries(p).forEach(([y,b])=>{const T=Nt(y);T&&(j[y]={id:y,name:T.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:b,count:1,type:T.type})}),c.forEach(y=>{const b=Nt(y.accountId);b&&(j[y.accountId]||(j[y.accountId]={id:y.accountId,name:b.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:0,count:0,type:b.type}),j[y.accountId].amount+=y.amount,j[y.accountId].count++)});const _=Object.entries(j).map(([y,b])=>({...b,id:y})).sort((y,b)=>b.amount-y.amount),A={credit_card_spend:{id:"credit_card_spend",label:"CC Spending",amount:d,count:d>0?1:0},cc_payment:{id:"cc_payment",label:"CC Payments",amount:0,count:0},bank_debit:{id:"bank_debit",label:"Bank Debits",amount:0,count:0},bank_credit:{id:"bank_credit",label:"Bank Credits",amount:0,count:0},liquid_fund_credit:{id:"liquid_fund_credit",label:"LF Deposits",amount:0,count:0},liquid_fund_debit:{id:"liquid_fund_debit",label:"LF Withdrawals",amount:0,count:0}};c.forEach(y=>{A[y.type]&&(A[y.type].amount+=y.amount,A[y.type].count++)});const D=Object.entries(A).map(([y,b])=>({...b,id:y})).filter(y=>y.count>0||y.amount>0).sort((y,b)=>b.amount-y.amount),B=[...c].filter(y=>bt.includes(y.type)).sort((y,b)=>b.amount-y.amount).slice(0,3),F=[...c].filter(y=>Et.includes(y.type)).sort((y,b)=>b.amount-y.amount).slice(0,3);return{totalIncoming:s,totalOutgoing:g,netFlow:x,incomingCount:f,outgoingCount:w,totalCount:c.length,avgIncoming:k,avgOutgoing:S,categoryBreakdown:v,accountBreakdown:_,typeBreakdown:D,largestOutgoing:B,largestIncoming:F}},[t,n,a,r])}}function Hg(){const[t,n]=h.useState("summary"),[a,r]=h.useState("transactions"),[[,o],c]=h.useState([0,0]),l=h.useCallback(p=>{const s=Ke.findIndex(g=>g.id===p),u=Ke.findIndex(g=>g.id===t);c([s,s>u?1:-1]),n(p)},[t]),d=h.useCallback((p,s)=>{const x=Ke.findIndex(f=>f.id===t);(s.offset.x<-50||s.velocity.x<-500)&&x<Ke.length-1?l(Ke[x+1].id):(s.offset.x>50||s.velocity.x>500)&&x>0&&l(Ke[x-1].id)},[t,l]);return{activeTab:t,historySubTab:a,direction:o,handleTabChange:l,setHistorySubTab:r,handleDragEnd:d}}function Yg(t){const[n,a]=h.useState(null);h.useEffect(()=>{if(n)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[n]);const r=h.useMemo(()=>n?t.filter(c=>{switch(n.type){case"category":return n.id==="uncategorized"?!c.categoryId&&bt.includes(c.type):c.categoryId===n.id;case"account":return c.accountId===n.id;case"transactionType":return c.type===n.id;default:return!1}}).sort((c,l)=>l.date.localeCompare(c.date)||l.amount-c.amount):[],[n,t]);return{drillDown:n,setDrillDown:a,drillDownTransactions:r,closeDrillDown:()=>a(null)}}const Vg=()=>{const[t,n]=h.useState(me(new Date)),[a,r]=h.useState(!1),[o,c]=h.useState(!1),[l,d]=h.useState(null),{transactions:p,initialBalances:s,initialCCBills:u,ccLimits:g,categories:x,addTransaction:f,deleteTransaction:w,updateTransaction:k,saveCategories:S,saveInitialData:I,handleExport:v,handleImportClick:j,fileInputRef:_,handleFileChange:A}=zg(),{activeTab:D,historySubTab:B,direction:F,handleTabChange:y,setHistorySubTab:b,handleDragEnd:T}=Hg(),{filterExpanded:O,setFilterExpanded:P,filterStartDate:$,setFilterStartDate:m,filterEndDate:L,setFilterEndDate:M,filterCategory:G,setFilterCategory:V,filterType:K,setFilterType:H,filterAccounts:ue,toggleAccountFilter:re,filterStartCalendarOpen:ie,setFilterStartCalendarOpen:W,filterEndCalendarOpen:xe,setFilterEndCalendarOpen:Ie,filterStartDateRef:he,filterEndDateRef:pe,filteredTransactions:ve,groupedTransactions:$e,activeFilterCount:ye,resetFilters:Ct}=Rg(p),{insights:X}=Wg(ve,x,u,t),{drillDown:Ne,setDrillDown:oe,drillDownTransactions:tt,closeDrillDown:qt}=Yg(ve),Gt=h.useMemo(()=>jl(p,t,s,u),[t,p,s,u]),Kt=h.useMemo(()=>An().map(Wn=>yl(Wn,p,t,u)),[p,t,u]),zn=be=>{f(be),y("transactions")},Rn=()=>{switch(D){case"summary":return e.jsx(Rh,{balances:Gt,ccLimits:g,creditCardDetailedBalances:Kt});case"cards":return e.jsx(ag,{creditCardDetailedBalances:Kt,ccLimits:g});case"transactions":return e.jsx(Ng,{filterExpanded:O,onToggleFilterExpanded:()=>P(!O),filterStartDate:$,onStartDateChange:m,filterEndDate:L,onEndDateChange:M,filterCategory:G,onCategoryChange:V,filterType:K,onTypeChange:H,filterAccounts:ue,onToggleAccount:re,activeFilterCount:ye,onResetFilters:Ct,categories:x,filterStartCalendarOpen:ie,onStartCalendarOpenChange:W,filterEndCalendarOpen:xe,onEndCalendarOpenChange:Ie,filterStartDateRef:he,filterEndDateRef:pe,historySubTab:B,onSubTabChange:b,filteredTransactions:ve,groupedTransactions:$e,insights:X,drillDown:Ne,drillDownTransactions:tt,onDrillDown:oe,onCloseDrillDown:qt,onEditTransaction:d,onDeleteTransaction:w});case"add":return e.jsx(ig,{categories:x,onAddTransaction:zn});case"manage":return e.jsx(_g,{categoriesCount:x.length,transactionsCount:p.length,onOpenBalanceModal:()=>r(!0),onOpenCategoryModal:()=>c(!0),onExport:v,onImport:j});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(Hh,{children:e.jsxs(Yh,{children:[e.jsx(Vh,{children:e.jsx(Ou,{selectedDate:t,onDateChange:n})}),e.jsx(Qh,{children:Ke.map(be=>e.jsx(e0,{$active:D===be.id,onClick:()=>y(be.id),whileTap:{scale:.98},children:be.label},be.id))})]})}),e.jsxs(Wh,{variants:$g,initial:"hidden",animate:"visible",children:[e.jsx(qh,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:T,children:e.jsxs(po,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(Uh,{}),e.jsx(Gh,{style:{flex:1},children:e.jsx(U,{mode:"wait",custom:F,children:e.jsx(Kh,{custom:F,variants:Lg,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:Rn()},D)})})]})}),e.jsx(Xh,{ref:_,type:"file",accept:".json",onChange:A}),e.jsx(qx,{isOpen:a,onClose:()=>r(!1),initialBalances:s,initialCCBills:u,ccLimits:g,onSave:I}),e.jsx(wh,{isOpen:o,onClose:()=>c(!1),categories:x,onSave:S}),e.jsx(zh,{isOpen:!!l,onClose:()=>d(null),transaction:l,categories:x,onSave:k})]})]})},ds=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),Ug=async(t,n,a,r=48)=>{try{const o=await ds(),c=Math.min(n,a)*.03,l=n-r-c,d=a-r-c;t.globalAlpha=.7,t.drawImage(o,l,d,r,r),t.globalAlpha=1}catch(o){console.warn("Failed to load watermark logo:",o)}},ia=(t,n,a)=>{const r=[],o=d=>{const p=[];let s=d;for(;s.length>0;){let u=s.length;for(;u>0&&t.measureText(s.slice(0,u)).width>a;)u--;u=Math.max(1,u);const g=s.slice(0,u),x=g.lastIndexOf("/"),f=g.lastIndexOf("-"),w=g.lastIndexOf(".");let k=u;const S=[x,f,w].filter(I=>I>0&&I<u-1);S.length>0&&(k=Math.max(...S)+1),p.push(s.slice(0,k)),s=s.slice(k)}return p},c=n.split(" ");let l="";for(const d of c)if(t.measureText(d).width>a){l&&(r.push(l),l="");const s=o(d);for(let u=0;u<s.length;u++)u<s.length-1?r.push(s[u]):l=s[u]}else{const s=l?`${l} ${d}`:d;t.measureText(s).width>a&&l?(r.push(l),l=d):l=s}return l&&r.push(l),r},qg=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:o,backgroundColor:c,alignment:l,aspectRatio:d,padding:p}=t,s=document.createElement("canvas");s.width=d.width,s.height=d.height;const u=s.getContext("2d");if(!u)throw new Error("Failed to get canvas context");u.fillStyle=c,u.fillRect(0,0,s.width,s.height);const g=a*(d.width/1080);u.font=`600 ${g}px ${r}`,u.fillStyle=o;const x=p*(d.width/1080),f=s.width-x*2,w=n.split(`
`),k=[];for(const A of w)if(A.trim()==="")k.push("");else{const D=ia(u,A,f);k.push(...D)}const S=g*1.4,I=k.length*S;let v=(s.height-I)/2+g;u.textAlign=l;let j;switch(l){case"left":j=x;break;case"right":j=s.width-x;break;default:j=s.width/2}for(const A of k)A!==""&&u.fillText(A,j,v),v+=S;const _=Math.min(s.width,s.height)*.06;return await Ug(u,s.width,s.height,_),s.toDataURL("image/png",1)},Gg=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:o}=t,c=document.createElement("canvas");c.width=a.width,c.height=a.height;const l=c.getContext("2d");if(!l)throw new Error("Failed to get canvas context");const d=a.width/1080,p=a.height>a.width,s=r==="#000000"?"#ffffff":"#000000",u=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";l.fillStyle=r,l.fillRect(0,0,c.width,c.height);const g=64*d,x=c.width-g*2,f=20*d,w=36*d,k=(p?44:40)*d,S=(p?24:22)*d,I=18*d,v=k*1.25,j=S*1.45,_=p?5:4,A=p?4:3;l.font=`700 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`;const D=ia(l,n.title,x),B=D.slice(0,_);if(D.length>_&&B.length>0){const W=B[B.length-1];W.endsWith("...")||(B[B.length-1]=W.slice(0,-3)+"...")}l.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`;const F=n.description?ia(l,n.description,x):[],y=F.slice(0,A);if(F.length>A&&y.length>0){const W=y[y.length-1];W.endsWith("...")||(y[y.length-1]=W.slice(0,-3)+"...")}const b=w+f,T=B.length*v,O=y.length>0?f+y.length*j:0,P=b+T+O,$=Math.min(c.width,c.height)*.045,m=g+$+16*d,L=c.height-m-g,M=L-P-f*2;let G=0;if(n.image&&M>100*d){const W=p?c.width*.5:c.width*.4,xe=120*d;G=Math.min(W,Math.max(xe,M))}const V=G>0?f+G:0,K=P+V;let H=g+Math.max(0,(L-K)/2);if(n.favicon)try{const W=await Qi(n.favicon);l.save(),l.beginPath(),l.arc(g+w/2,H+w/2,w/2,0,Math.PI*2),l.closePath(),l.clip(),l.drawImage(W,g,H,w,w),l.restore()}catch{l.fillStyle=o,l.beginPath(),l.arc(g+w/2,H+w/2,w/2,0,Math.PI*2),l.fill()}n.siteName&&(l.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=u,l.textAlign="left",l.textBaseline="middle",l.fillText(n.siteName,g+w+10*d,H+w/2)),H+=w+f,l.font=`700 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=s,l.textAlign="left",l.textBaseline="top";for(const W of B)l.fillText(W,g,H),H+=v;if(y.length>0){H+=f,l.font=`400 ${S}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=u;for(const W of y)l.fillText(W,g,H),H+=j}if(n.image&&G>0){H+=f;try{const W=await Qi(n.image),xe=x;l.save(),Kg(l,g,H,xe,G,10*d),l.clip();const Ie=W.width/W.height,he=xe/G;let pe=0,ve=0,$e=W.width,ye=W.height;Ie>he?($e=W.height*he,pe=(W.width-$e)/2):(ye=W.width/he,ve=(W.height-ye)/2),l.drawImage(W,pe,ve,$e,ye,g,H,xe,G),l.restore()}catch{}}const ue=c.height-g;l.font=`500 ${I}px -apple-system, BlinkMacSystemFont, monospace`,l.fillStyle=o;const re=x-$-16*d;let ie=n.url;for(;l.measureText(ie).width>re&&ie.length>20;)ie=ie.slice(0,-4)+"...";l.textAlign="left",l.textBaseline="middle",l.fillText(ie,g,ue-$/2);try{const W=await ds();l.globalAlpha=.7,l.drawImage(W,c.width-g-$,ue-$,$,$),l.globalAlpha=1}catch{}return c.toDataURL("image/png",1)},Qi=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),Kg=(t,n,a,r,o,c)=>{t.beginPath(),t.moveTo(n+c,a),t.lineTo(n+r-c,a),t.quadraticCurveTo(n+r,a,n+r,a+c),t.lineTo(n+r,a+o-c),t.quadraticCurveTo(n+r,a+o,n+r-c,a+o),t.lineTo(n+c,a+o),t.quadraticCurveTo(n,a+o,n,a+o-c),t.lineTo(n,a+c),t.quadraticCurveTo(n,a,n+c,a),t.closePath()},Jg=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},Zg=async t=>{var o,c;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const l=`https://api.microlink.io?url=${encodeURIComponent(t)}`,d=await fetch(l);if(!d.ok)return r;const p=await d.json();return p.status==="success"&&p.data?{title:p.data.title||a,description:p.data.description||"",image:((o=p.data.image)==null?void 0:o.url)||null,siteName:p.data.publisher||a,url:t,favicon:((c=p.data.logo)==null?void 0:c.url)||r.favicon}:r}catch(l){return console.warn("Failed to fetch URL metadata:",l),r}},eo=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],Xg='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',Qg=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},ef=i.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,tf=i.div`
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
`,nf=i.div`
  width: 100%;
  max-width: 600px;
`,rf=i.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,af=i.div`
  position: absolute;
  inset: 0;
`,of=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,sf=i(C.div)`
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
`,cf=i.div`
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
`,lf=i.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Ft=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Mt=i.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,df=i.textarea`
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
`,to=i.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,no=i.button`
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
`,uf=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,pf=i.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,xf=i.input`
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
`,hf=i.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,gf=i(C.button)`
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
`,ff=i(C.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,mf=i.input`
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
`,vf=i.textarea`
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
`,yf=i(C.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,bf=i(C.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,jf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),wf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),kf=()=>{const{isDark:t}=sa(),[n,a]=h.useState(""),[r,o]=h.useState(64),[c,l]=h.useState("left"),[d,p]=h.useState(eo[1]),[s,u]=h.useState(null),[g,x]=h.useState(!1),[f,w]=h.useState(null),[k,S]=h.useState(""),[I,v]=h.useState(""),[j,_]=h.useState(!1),[A,D]=h.useState(null),B=h.useMemo(()=>Qg(n),[n]),F=t?"#000000":"#ffffff",y=t?"#ffffff":"#000000",b=`${d.height/d.width*100}%`,T=h.useCallback(async()=>{if(!(!B||!n.trim())){_(!0),D(null),u(null);try{const m=await Zg(n.trim());w(m),S(m.title),v(m.description)}catch{D("Unable to fetch URL preview")}_(!1)}},[n,B]),O=h.useCallback(async()=>{if(!n.trim()||B){B||u(null);return}x(!0);try{const m=await qg({text:n.trim(),fontSize:r,fontFamily:Xg,textColor:y,backgroundColor:F,alignment:c,aspectRatio:d,padding:80});u(m)}catch(m){console.error("Preview generation failed:",m)}x(!1)},[n,B,r,c,d,F,y]),P=h.useCallback(async()=>{if(f){x(!0);try{const m=await Gg({metadata:{...f,title:k||f.title,description:I||f.description},aspectRatio:d,backgroundColor:F,accentColor:"#2A9D8F"});u(m)}catch(m){console.error("URL preview generation failed:",m)}x(!1)}},[f,k,I,d,F]);h.useEffect(()=>{if(B)return;const m=setTimeout(O,200);return()=>clearTimeout(m)},[O,B]),h.useEffect(()=>{B?T():(w(null),S(""),v(""),D(null))},[B,T]),h.useEffect(()=>{f&&P()},[f,k,I,d,P]);const $=()=>{if(s){const M=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;Jg(s,M)}};return e.jsxs(ef,{children:[e.jsx(tf,{children:e.jsx(nf,{children:e.jsx(rf,{$bgColor:F,$paddingBottom:b,children:e.jsxs(af,{children:[s&&e.jsx(of,{src:s,alt:"Preview"}),e.jsx(U,{children:!s&&e.jsxs(sf,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(wf,{}),e.jsx("span",{children:B?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(cf,{children:e.jsxs(lf,{children:[e.jsxs(Ft,{children:[e.jsx(Mt,{children:"Content"}),e.jsx(df,{value:n,onChange:m=>a(m.target.value),onContextMenu:m=>m.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),B?e.jsxs(e.Fragment,{children:[j&&e.jsx(Ft,{style:{alignItems:"center"},children:e.jsx(bf,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),A&&e.jsx(yf,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:A}),f&&e.jsxs(ff,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(Mt,{children:"Edit Details"}),e.jsx(mf,{value:k,onChange:m=>S(m.target.value),placeholder:"Title"}),e.jsx(vf,{value:I,onChange:m=>v(m.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Ft,{children:[e.jsx(Mt,{children:"Font Size"}),e.jsxs(uf,{children:[e.jsx(pf,{children:e.jsx(xf,{type:"range",min:"24",max:"120",value:r,onChange:m=>o(Number(m.target.value))})}),e.jsx(hf,{children:r})]})]}),e.jsxs(Ft,{children:[e.jsx(Mt,{children:"Alignment"}),e.jsx(to,{children:["left","center","right"].map(m=>e.jsx(no,{$active:c===m,onClick:()=>l(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),e.jsxs(Ft,{children:[e.jsx(Mt,{children:"Format"}),e.jsx(to,{children:eo.map(m=>e.jsx(no,{$active:d.id===m.id,onClick:()=>p(m),children:m.name},m.id))})]}),e.jsxs(gf,{onClick:$,disabled:!s||g,whileTap:{scale:.98},children:[e.jsx(jf,{}),"Download Image"]})]})})]})},Cf=i(C.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,Sf={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},Df=()=>e.jsx(Cf,{variants:Sf,initial:"hidden",animate:"visible",children:e.jsx(kf,{})}),Tf=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},If=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),$f=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),Lf=i.div`
  min-height: 100vh;
  position: relative;
`,_f=i.main`
  position: relative;
  z-index: 1;
`,Af=i.a`
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
`,Of=jt`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,ro=i.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,ao=i.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${Of} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,io=i.p`
  color: var(--text-secondary);
  font-size: 15px;
`,Bf=i.button`
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
`,Ff=()=>{const t=Is(),n=$s();return h.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function Mf(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=Ps(),o=h.useMemo(()=>Tf()?If:$f,[]);return n||!t&&!a?e.jsxs(ro,{children:[e.jsx(ao,{children:e.jsx(o,{})}),e.jsx(io,{children:"Authenticating..."})]}):a&&!t?e.jsxs(ro,{children:[e.jsx(ao,{style:{animation:"none",opacity:1},children:e.jsx(o,{})}),e.jsx(io,{children:"Authentication required to continue"}),e.jsx(Bf,{onClick:r,children:"Try Again"})]}):e.jsxs(Lf,{children:[e.jsx(Ff,{}),e.jsx(Af,{href:"#main-content",children:"Skip to main content"}),e.jsx(Rs,{}),e.jsx(Zs,{}),e.jsx(_f,{id:"main-content",children:e.jsxs(Ds,{children:[e.jsx(St,{path:"/",element:e.jsx(pc,{})}),e.jsx(St,{path:"/tax-manager",element:e.jsx(ul,{})}),e.jsx(St,{path:"/expense-manager",element:e.jsx(Vg,{})}),e.jsx(St,{path:"/canvas-manager",element:e.jsx(Df,{})}),e.jsx(St,{path:"/tax-calculator",element:e.jsx(Ts,{to:"/tax-manager",replace:!0})})]})})]})}function Pf(){return e.jsx(Ss,{basename:"/tools",children:e.jsx(_s,{children:e.jsxs(Ms,{children:[e.jsx(Es,{}),e.jsx(Mf,{})]})})})}so(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(Pf,{})}));
