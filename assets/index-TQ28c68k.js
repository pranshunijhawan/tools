import{j as e,m as y,A as Z}from"./vendor-animation-BytCmOQI.js";import{a as yi,r as h,L as kr,B as zo,u as vi,R as Bo,b as dt,N as Jr,c as Ro}from"./vendor-react-YDq69VoU.js";import{f as bi,d as o,m as M,l as Re}from"./vendor-styles-C2HPJuBO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var ji,Zr=yi;ji=Zr.createRoot,Zr.hydrateRoot;const wi=h.createContext({isDark:!0,toggleTheme:()=>{}}),ea=({children:t})=>{const[n,a]=h.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),h.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=l=>{localStorage.getItem("theme")||a(l.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>a(!n);return e.jsx(wi.Provider,{value:{isDark:n,toggleTheme:r},children:t})},$r=()=>{const t=h.useContext(wi);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},ki=h.createContext(null),Pn="tools-auth-session",_n="tools-webauthn-credential",Ho=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Yo=async()=>{if(!Ho())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},Fn=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},Go=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},Vo=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},Qo=({children:t})=>{const[n,a]=h.useState(!1),[r,i]=h.useState(!0),[s,l]=h.useState(!1),d=h.useRef(!1),f=async()=>{try{const m={challenge:Fn(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:Fn(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},v=await navigator.credentials.create({publicKey:m});return v?(localStorage.setItem(_n,Go(v.rawId)),!0):!1}catch(u){return console.error("Registration failed:",u),!1}},c=async()=>{try{const u=localStorage.getItem(_n),v={challenge:Fn(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...u&&{allowCredentials:[{type:"public-key",id:Vo(u),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:v})}catch(u){return console.error("Authentication failed:",u),!1}},x=h.useCallback(async()=>{i(!0),l(!1);const u=sessionStorage.getItem(Pn);if(u)try{const{timestamp:v}=JSON.parse(u);if(Date.now()-v<24*60*60*1e3){a(!0),i(!1);return}}catch{}if(!await Yo()){a(!0),sessionStorage.setItem(Pn,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const v=localStorage.getItem(_n);let w=!1;v?w=await c():w=await f(),w?(a(!0),sessionStorage.setItem(Pn,JSON.stringify({timestamp:Date.now()}))):l(!0)}catch{l(!0)}i(!1)},[]);h.useEffect(()=>{d.current||(d.current=!0,x())},[x]);const g=h.useCallback(()=>{x()},[x]);return e.jsx(ki.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:s,retryAuth:g},children:t})},Uo=()=>{const t=h.useContext(ki);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},ta=bi`
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
`,qo=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,Ko=o.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Xo=()=>{const{isDark:t}=$r();return e.jsx(qo,{children:e.jsx(Ko,{$isDark:t})})},Jo=o(y.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,Zo=o.div`
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
`,es=o(kr)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,ts=o.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,ns=o.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,rs=o(y.button)`
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
`,as=o(y.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,is=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),os=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),ss=()=>{const{isDark:t,toggleTheme:n}=$r();return e.jsx(Jo,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(Zo,{children:[e.jsx(es,{to:"/","aria-label":"Go to homepage",children:e.jsx(ts,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(ns,{}),e.jsx(rs,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(Z,{mode:"wait",children:e.jsx(as,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(os,{}):e.jsx(is,{})},t?"moon":"sun")})})]})})},ls=o(y.div)`
  position: relative;
`,cs=o(kr)`
  display: block;
  text-decoration: none;
  color: inherit;
`,$i=o(y.div)`
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
`,ds=o(y.div)`
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

  ${$i}:hover &::before {
    opacity: 0.3;
  }
`,ps=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,xs={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},us={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},hs=({title:t,icon:n,to:a})=>e.jsx(ls,{variants:xs,whileHover:"hover",whileTap:"tap",children:e.jsx(cs,{to:a,children:e.jsxs($i,{variants:us,children:[e.jsx(ds,{children:n}),e.jsx(ps,{children:t})]})})}),fs=o.div`
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
`,gs=o(y.div)`
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
`,ms={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ys=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),vs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),bs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),js=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(ys,{}),to:"/tax-manager"},{id:"netfolio",title:"NetFolio",icon:e.jsx(vs,{}),to:"/netfolio"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(bs,{}),to:"/canvas-manager"}],ws=()=>e.jsx(fs,{children:e.jsx(gs,{variants:ms,initial:"hidden",animate:"visible",children:js.map(t=>e.jsx(hs,{title:t.title,icon:t.icon,to:t.to},t.id))})}),Si=o.div`
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
`;const pn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],na=75e3,wt=4,ks=12e5,$s=6e4,ra=5e6,aa=10,Ss=12,Cs=1800;function rt(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let i="";const s=r.slice(-3),l=r.slice(0,-3);if(l.length>0){const d=[];let f=l;for(;f.length>0;)f.length>=2?(d.unshift(f.slice(-2)),f=f.slice(0,-2)):(d.unshift(f),f="");i=d.join(",")+","+s}else i=s;return(n?"-":"")+i}function I(t){return"₹"+rt(t)}function P(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[i,s]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+rt(parseInt(i))+"."+s}function ia(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:rt(t)}function Ts(t){for(let n=pn.length-1;n>=0;n--)if(t>pn[n].from)return pn[n].rate;return 0}function Ds(t){const n=[];let a=t,r=0;for(const i of pn){const s=i.from,d=(i.to??1/0)-s;if(a<=0){n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const f=Math.min(a,d),c=f*i.rate/100;n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:f>0?f:0,taxInSlab:c}),r+=c,a-=f}return{slabs:n,totalTax:r}}function As(t,n){if(n>ra){const r=t*(1+aa/100)*(1+wt/100),i=n-ra,l=(t+i)*(1+wt/100),d=l<r,f=Math.min(r,l),c=f/(1+wt/100),x=c-t,g=f-c;return{surchargeApplicable:!0,surchargeRate:aa,surchargeAmount:x,marginalReliefApplied:d,taxAfterSurcharge:c,cess:g,totalTax:f}}else{const a=t*(wt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function oa(t,n,a,r,i,s,l){const d=t*n/100,f=t-d;let c=0;i==="percentage"?c=t*s/100:i==="amount"&&(c=s);const x=t+c;let g=0,u=0;a&&(r==="percentage"?(g=d*Ss/100,u=g):(g=Cs*12,u=g));const m=t-u,v=l.map(se=>({name:se.name,amount:se.amount*12})),w=v.reduce((se,ge)=>se+ge.amount,0),b=Math.max(0,m-na),{slabs:k,totalTax:$}=Ds(b);let C=0,L=$;b<=ks&&(C=Math.min($,$s),L=Math.max(0,$-C));const{surchargeApplicable:O,surchargeRate:T,surchargeAmount:A,marginalReliefApplied:S,taxAfterSurcharge:N,cess:R,totalTax:K}=As(L,b),ee=g+u,oe=K,X=g+K+w,j=m-g-K-w,_=j/12,V=m>0?K/m*100:0,le=Ts(b);let de=0,U=c;if(c>0&&le>0){let se=c*le/100;O&&(se=se*(1+T/100)),de=se*(1+wt/100),U=c-de}const H=j+U,ye=H/12;return{baseSalary:t,basicSalary:d,hra:f,bonus:c,totalEarnings:x,employeePF:g,employerPF:u,grossSalary:m,standardDeduction:na,additionalDeductions:v,totalAdditionalDeductions:w,taxableIncome:b,slabs:k,taxBeforeSurcharge:$,surchargeApplicable:O,surchargeRate:T,surchargeAmount:A,marginalReliefApplied:S,taxAfterSurcharge:N,cessRate:wt,cess:R,totalTax:K,rebate87A:C,totalPFDeduction:ee,totalTaxDeduction:oe,totalDeductions:X,netSalaryYearly:j,netSalaryMonthly:_,effectiveTaxRate:V,bonusTaxRate:le,bonusTaxAmount:de,bonusAfterTax:U,totalIncomeYearly:H,totalIncomeMonthly:ye}}function Is(t){const n=oa(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const i=t.baseSalary*(1+r/100);a=oa(i,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const Sr="taxCalculatorInput";function Ms(t){localStorage.setItem(Sr,JSON.stringify(t))}function Ls(){localStorage.removeItem(Sr)}function Ci(){const t=localStorage.getItem(Sr);if(t)try{return JSON.parse(t)}catch{return null}return null}const Os={financialYear:"FY 2025-26"},Ps=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,It=o.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,Mt=o.div`
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
`,Ot=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,_s=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,pt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,sa=o.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Ue=o.input`
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
`,En=o.div`
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
`,Nn=o.div`
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
`,la=o.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Pt=o(y.button)`
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
`,Fs=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wn=o(y.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,zn=o(y.button)`
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
`,Es=o(y.button)`
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
`,Ns=o.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,Ws=o(y.button)`
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
`,zs=o(y.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Bs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Rs=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Hs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ys=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),Gs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Vs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Bn=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),hn={type:"spring",stiffness:300,damping:30,mass:.8},Qs={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:hn}},Us={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...hn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...hn},opacity:{duration:.1}}}},qs={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:hn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function Rn(t){const n=t.replace(/[^\d]/g,"");return n?rt(parseInt(n)):""}function tn(t){return parseInt(t.replace(/,/g,""))||0}const Ks=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,i]=h.useState(""),[s,l]=h.useState("50"),[d,f]=h.useState("percentage"),[c,x]=h.useState("none"),[g,u]=h.useState(""),[m,v]=h.useState([]),[w,b]=h.useState(""),[k,$]=h.useState(!1),C=h.useRef(!1);h.useEffect(()=>{const j=Ci();j&&(i(rt(j.baseSalary)),l(j.basicPercentage.toString()),f(j.pfType),x(j.bonusType),u(j.bonusValue>0?j.bonusType==="amount"?rt(j.bonusValue):j.bonusValue.toString():""),v(j.additionalDeductions.map(_=>({name:_.name,amount:rt(_.amount)}))),b(j.hikePercentage>0?j.hikePercentage.toString():"")),$(!0)},[]),h.useEffect(()=>{k&&a&&r&&!C.current&&(C.current=!0,setTimeout(()=>{R()},100))},[k,a,r]);const L=j=>{i(Rn(j))},O=j=>{u(Rn(j))},T=(j,_)=>{const V=[...m];V[j].amount=Rn(_),v(V)},A=()=>{v([...m,{name:"",amount:""}])},S=j=>{v(m.filter((_,V)=>V!==j))},N=(j,_)=>{const V=[...m];V[j].name=_,v(V)},R=()=>{const j={baseSalary:tn(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:d,bonusType:c,bonusValue:c==="amount"?tn(g):parseFloat(g)||0,additionalDeductions:m.filter(_=>_.name&&_.amount).map(_=>({name:_.name,amount:tn(_.amount)})),hikePercentage:parseFloat(w)||0};Ms(j),t(j)},K=()=>{i(""),l("50"),f("percentage"),x("none"),u(""),v([]),b(""),Ls(),n==null||n()},oe=tn(r)>0,X=r||m.length>0||c!=="none"||w;return e.jsxs(Ps,{variants:Qs,initial:"hidden",animate:"visible",children:[e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#10b981",children:e.jsx(Bs,{})}),e.jsx(Ot,{children:"Salary Details"})]}),e.jsxs(_s,{children:[e.jsxs(pt,{children:[e.jsx(sa,{children:"Yearly CTC *"}),e.jsx(En,{children:e.jsx(Ue,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:j=>L(j.target.value)})})]}),e.jsxs(pt,{children:[e.jsx(sa,{children:"Basic %"}),e.jsx(Nn,{children:e.jsx(Ue,{type:"number",inputMode:"numeric",placeholder:"50",value:s,onChange:j=>l(j.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#3b82f6",children:e.jsx(Rs,{})}),e.jsx(Ot,{children:"Provident Fund"})]}),e.jsxs(la,{children:[e.jsx(Pt,{$active:d==="percentage",onClick:()=>f("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(Pt,{$active:d==="flat",onClick:()=>f("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#f59e0b",children:e.jsx(Hs,{})}),e.jsx(Ot,{children:"Bonus (Optional)"})]}),e.jsxs(la,{children:[e.jsx(Pt,{$active:c==="none",onClick:()=>x("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(Pt,{$active:c==="percentage",onClick:()=>x("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(Pt,{$active:c==="amount",onClick:()=>x("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(Z,{initial:!1,children:c!=="none"&&e.jsx(y.div,{initial:"hidden",animate:"visible",exit:"exit",variants:Us,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(Wn,{children:[e.jsx(pt,{style:{flex:1},children:c==="percentage"?e.jsx(Nn,{children:e.jsx(Ue,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:j=>u(j.target.value)})}):e.jsx(En,{children:e.jsx(Ue,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:j=>O(j.target.value)})})}),e.jsx(Z,{children:g&&e.jsx(zn,{onClick:()=>u(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})})]})},"bonus-input")})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#ec4899",children:e.jsx(Ys,{})}),e.jsx(Ot,{children:"Monthly Deductions"})]}),e.jsxs(Fs,{children:[e.jsx(Z,{mode:"popLayout",children:m.map((j,_)=>e.jsxs(Wn,{variants:qs,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(pt,{style:{flex:1},children:e.jsx(Ue,{type:"text",placeholder:"Name (e.g., Cab)",value:j.name,onChange:V=>N(_,V.target.value)})}),e.jsx(pt,{style:{flex:1},children:e.jsx(En,{children:e.jsx(Ue,{type:"text",inputMode:"numeric",placeholder:"Amount",value:j.amount,onChange:V=>T(_,V.target.value)})})}),e.jsx(zn,{onClick:()=>S(_),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})]},_))}),e.jsxs(Es,{onClick:A,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(Vs,{}),"Add Deduction"]})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#8b5cf6",children:e.jsx(Gs,{})}),e.jsx(Ot,{children:"Hike / Appraisal"})]}),e.jsxs(Wn,{children:[e.jsx(pt,{style:{flex:1},children:e.jsx(Nn,{children:e.jsx(Ue,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:j=>b(j.target.value),min:"0",max:"200"})})}),e.jsx(Z,{children:w&&e.jsx(zn,{onClick:()=>b(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})})]})]}),e.jsxs(Ns,{children:[e.jsx(Ws,{onClick:R,disabled:!oe,whileHover:oe?{scale:1.02}:{},whileTap:oe?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(Z,{children:X&&e.jsx(zs,{onClick:K,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},Xs=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qe=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Ke=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,Xe=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Je=o.div`
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
`,Ze=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,et=o.div`
  padding: 16px;
`,_t=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,$e=o.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,Hn=o(y.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Yn=o.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,Gn=o.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,xt=o.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,Js=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ut=o.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,ht=o.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,ft=o.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,gt=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Me=o.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,ne=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,re=o.span`
  font-size: 14px;
  font-weight: ${({$bold:t})=>t?"600":"400"};
  color: ${({$bold:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,W=o.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:t,$negative:n})=>t?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,ue=o.div`
  text-align: right;
  flex-shrink: 0;
`,he=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Zs=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ca=o(y.div)`
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
`,Ne=o.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,el=o(y.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,tl=o.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,nl=o(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,rl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,al=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,il=o.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,ol=o.span`
  font-size: 12px;
  color: var(--text-secondary);
`,sl=o.span`
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
`,Se=o.div`
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
`,Te=o.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,Et=o.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,da=o(y.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,pa=o.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,ll=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),cl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),dl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),pl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),xa=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),xl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),ul={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},tt={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},hl=({breakdown:t})=>{const[n,a]=h.useState("monthly"),r=n==="monthly"?1/12:1,i=u=>u===0?"#10b981":u<=10?"#3BB4B1":u<=20?"#4361A5":u<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...t.slabs.map(u=>u.taxInSlab),1),d=(()=>{const u=n==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:t.netSalaryYearly*u,color:"#10b981"},{label:"Tax",value:t.totalTax*u,color:"#4361A5"},{label:"PF",value:t.employeePF*u,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&m.push({label:"Other",value:t.totalAdditionalDeductions*u,color:"#7BA7D9"}),m})(),f=d.reduce((u,m)=>u+m.value,0),c=[];t.surchargeApplicable&&c.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&c.push(`<strong>Section 87A rebate</strong> of ${I(t.rebate87A)} applied`),t.effectiveTaxRate>0&&c.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const x=!!t.postHike,g=t.bonus>0;return e.jsxs(Xs,{variants:ul,initial:"hidden",animate:"visible",children:[x&&e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#3b82f6",children:e.jsx(xa,{})}),e.jsx(Ze,{children:"Base Salary (CTC)"})]}),e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(et,{children:e.jsxs(Ft,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Te,{children:I(t.baseSalary)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike"}),e.jsx(Te,{children:I(t.postHike.baseSalary)}),e.jsxs(Et,{children:["+",I(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#10b981",children:e.jsx(ll,{})}),e.jsx(Ze,{children:"In-Hand Salary"})]}),e.jsxs(_t,{children:[x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(et,{children:x?e.jsxs(Ft,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Te,{children:P(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsxs(Ce,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Te,{children:P(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Et,{children:["+",I(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:P(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(Yn,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#f59e0b",children:e.jsx(pl,{})}),e.jsx(Ze,{children:"Bonus"})]}),x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(et,{children:[x?e.jsxs(e.Fragment,{children:[e.jsxs(Ft,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current Gross"}),e.jsx(Te,{children:I(t.bonus)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Gross"}),e.jsx(Te,{children:I(t.postHike.bonus)}),e.jsxs(Et,{children:["+",I(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Me,{}),e.jsxs(Ft,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current In-Hand"}),e.jsx(Te,{children:P(t.bonusAfterTax)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike In-Hand"}),e.jsx(Te,{children:P(t.postHike.bonusAfterTax)}),e.jsxs(Et,{children:["+",I(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:I(t.bonus)}),e.jsx(Yn,{children:"Gross Bonus (before tax)"}),e.jsx(Me,{}),e.jsxs(ne,{children:[e.jsxs(re,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(W,{$negative:!0,children:["-",P(t.bonusTaxAmount)]})]}),e.jsxs(ne,{children:[e.jsx(re,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(W,{$highlight:!0,children:P(t.bonusAfterTax)})]})]}),e.jsx(Me,{}),e.jsx(da,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(pa,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#8b5cf6",children:e.jsx(xa,{})}),e.jsx(Ze,{children:"Total Combined Income"})]}),e.jsxs(_t,{children:[x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx($e,{children:"Yearly"})]})]}),e.jsxs(et,{children:[x?e.jsxs(Ft,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current Total"}),e.jsx(Te,{children:P(t.totalIncomeYearly)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Total"}),e.jsx(Te,{children:P(t.postHike.totalIncomeYearly)}),e.jsxs(Et,{children:["+",I(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:P(t.totalIncomeYearly)}),e.jsx(Yn,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Me,{}),e.jsxs(ne,{children:[e.jsx(re,{children:"Base In-Hand (Yearly)"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:P(t.netSalaryYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",P(t.postHike.netSalaryYearly)]})]}):e.jsx(W,{children:P(t.netSalaryYearly)})]}),e.jsxs(ne,{children:[e.jsx(re,{children:"Bonus In-Hand"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:P(t.bonusAfterTax)}),e.jsxs(he,{$positive:!0,children:["→ ",P(t.postHike.bonusAfterTax)]})]}):e.jsx(W,{children:P(t.bonusAfterTax)})]}),e.jsxs(ne,{children:[e.jsx(re,{$bold:!0,children:"Total Combined"}),x?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:P(t.totalIncomeYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",P(t.postHike.totalIncomeYearly)]})]}):e.jsx(W,{$highlight:!0,children:P(t.totalIncomeYearly)})]})]})]}),e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#ec4899",children:e.jsx(dl,{})}),e.jsx(Ze,{children:"Summary"})]}),e.jsxs(_t,{children:[x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(et,{children:[e.jsxs(Js,{children:[e.jsxs(ut,{children:[e.jsx(ht,{children:"Gross Salary"}),e.jsx(ft,{children:I(t.grossSalary*r)}),x&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.grossSalary*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Total Tax"}),e.jsx(ft,{children:P(t.totalTax*r)}),x&&e.jsxs(gt,{children:["→ ",P(t.postHike.totalTax*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Employee PF"}),e.jsx(ft,{children:I(t.employeePF*r)}),x&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.employeePF*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Employer PF"}),e.jsx(ft,{children:I(t.employerPF*r)}),x&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.employerPF*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Total PF"}),e.jsx(ft,{children:I((t.employeePF+t.employerPF)*r)}),x&&e.jsxs(gt,{$positive:!0,children:["→ ",I((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Eff. Tax Rate"}),e.jsxs(ft,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),x&&e.jsxs(gt,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Me,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(tl,{children:d.map((u,m)=>e.jsx(nl,{$color:u.color,initial:{width:0},animate:{width:`${u.value/f*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),e.jsx(rl,{children:d.map((u,m)=>e.jsxs(al,{children:[e.jsx(il,{$color:u.color}),e.jsx(ol,{children:u.label}),e.jsx(sl,{children:I(u.value)})]},m))}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Me,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:c.map((u,m)=>e.jsx(da,{children:e.jsx(pa,{dangerouslySetInnerHTML:{__html:u}})},m))})]})]})]}),e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#10b981",children:e.jsx(xl,{})}),e.jsx(Ze,{children:"Breakdown"})]}),e.jsxs(_t,{children:[x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(et,{children:[e.jsxs(ne,{children:[e.jsx(re,{children:"Base Salary (CTC)"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.baseSalary*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.baseSalary*r)]})]}):e.jsx(W,{children:I(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(ne,{children:[e.jsx(re,{children:"Less: Employer PF"}),x?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",I(t.employerPF*r)]}),e.jsxs(he,{children:["→ -",I(t.postHike.employerPF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",I(t.employerPF*r)]})]}),e.jsxs(ne,{children:[e.jsx(re,{$bold:!0,children:"Gross Salary"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.grossSalary*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.grossSalary*r)]})]}):e.jsx(W,{children:I(t.grossSalary*r)})]}),e.jsxs(ne,{children:[e.jsx(re,{children:"Less: Standard Deduction"}),e.jsxs(W,{$negative:!0,children:["-",I(t.standardDeduction*r)]})]}),e.jsxs(ne,{children:[e.jsx(re,{$bold:!0,children:"Taxable Income"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.taxableIncome*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.taxableIncome*r)]})]}):e.jsx(W,{children:I(t.taxableIncome*r)})]}),e.jsx(Me,{}),e.jsxs(ne,{children:[e.jsx(re,{children:"Less: Income Tax"}),x?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",P(t.totalTax*r)]}),e.jsxs(he,{children:["→ -",P(t.postHike.totalTax*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",P(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(ne,{children:[e.jsx(re,{children:"Less: Employee PF"}),x?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",I(t.employeePF*r)]}),e.jsxs(he,{children:["→ -",I(t.postHike.employeePF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",I(t.employeePF*r)]})]}),t.additionalDeductions.map((u,m)=>e.jsxs(ne,{children:[e.jsxs(re,{children:["Less: ",u.name]}),e.jsxs(W,{$negative:!0,children:["-",I(u.amount*r)]})]},m)),e.jsx(Me,{}),e.jsxs(ne,{children:[e.jsxs(re,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),x?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:P(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",P(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(W,{$highlight:!0,children:P(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(qe,{variants:tt,children:[e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(Je,{$color:"#3b82f6",children:e.jsx(cl,{})}),e.jsx(Ze,{children:"Tax Slabs"})]}),e.jsxs(_t,{children:[e.jsx($e,{children:Os.financialYear}),x&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(et,{children:[e.jsxs(Zs,{children:[e.jsxs(ca,{$header:!0,children:[e.jsx(Ne,{children:"Slab"}),e.jsx(Ne,{$align:"center",children:"Rate"}),e.jsx(Ne,{$align:"right",children:"Amount"}),e.jsx(Ne,{$align:"right",children:"Tax"})]}),e.jsx(Z,{children:t.slabs.map((u,m)=>e.jsxs(ca,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[e.jsxs(Ne,{children:[ia(u.from)," - ",ia(u.to),u.taxableInSlab>0&&e.jsx(el,{$color:i(u.rate),initial:{width:0},animate:{width:`${Math.max(u.taxInSlab/s*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),e.jsxs(Ne,{$align:"center",$highlight:u.rate===0,children:[u.rate,"%"]}),e.jsx(Ne,{$align:"right",$muted:u.taxableInSlab===0,children:u.taxableInSlab>0?I(u.taxableInSlab):"-"}),e.jsx(Ne,{$align:"right",$muted:u.taxInSlab===0,children:u.taxInSlab>0?I(u.taxInSlab):"-"})]},m))})]}),e.jsx(Me,{}),e.jsxs(ne,{children:[e.jsx(re,{children:"Tax Before Surcharge"}),x?e.jsxs(ue,{children:[e.jsx(W,{children:P(t.taxBeforeSurcharge)}),e.jsxs(he,{children:["→ ",P(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(W,{children:P(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(ne,{children:[e.jsx(re,{children:"Section 87A Rebate"}),e.jsxs(W,{$negative:!0,children:["-",I(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(ne,{children:[e.jsxs(re,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx($e,{$color:"#f59e0b",children:"Marginal Relief"})]}),x&&t.postHike.surchargeApplicable?e.jsxs(ue,{children:[e.jsx(W,{children:P(t.surchargeAmount)}),e.jsxs(he,{children:["→ ",P(t.postHike.surchargeAmount)]})]}):e.jsx(W,{children:P(t.surchargeAmount)})]}),e.jsxs(ne,{children:[e.jsxs(re,{children:["Cess (",t.cessRate,"%)"]}),x?e.jsxs(ue,{children:[e.jsx(W,{children:P(t.cess)}),e.jsxs(he,{children:["→ ",P(t.postHike.cess)]})]}):e.jsx(W,{children:P(t.cess)})]}),e.jsxs(ne,{children:[e.jsx(re,{$bold:!0,children:"Total Tax"}),x?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:P(t.totalTax)}),e.jsxs(he,{children:["→ ",P(t.postHike.totalTax)]})]}):e.jsx(W,{$highlight:!0,children:P(t.totalTax)})]})]})]})]})},fl=o(y.div)`
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
`,ml=o(y.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,yl=o(y.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,vl={type:"spring",stiffness:300,damping:30,mass:.8},bl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},ua={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:vl}},jl=()=>{const[t,n]=h.useState(null),[a,r]=h.useState(!1);h.useEffect(()=>{const l=Ci();l&&l.baseSalary>0&&r(!0)},[]);const i=h.useCallback(l=>{const d=Is(l);n(d),window.innerWidth<1024&&setTimeout(()=>{var f;(f=document.getElementById("results"))==null||f.scrollIntoView({behavior:"smooth"})},100)},[]),s=h.useCallback(()=>{n(null)},[]);return e.jsx(fl,{variants:bl,initial:"hidden",animate:"visible",children:e.jsx(Si,{$maxWidth:"wide",children:e.jsxs(gl,{children:[e.jsx(ml,{variants:ua,children:e.jsx(Ks,{onCalculate:i,onReset:s,autoCalculate:a})}),e.jsx(yl,{id:"results",variants:ua,children:t&&e.jsx(hl,{breakdown:t},"results")})]})})})},He=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",color:"#F58220"},{id:"mutual-funds",name:"Mutual Funds",type:"investment",color:"#8b5cf6"},{id:"ppf",name:"Public Provident Fund",type:"investment",color:"#10b981"},{id:"pf",name:"Provident Fund",type:"investment",color:"#3b82f6"}],Ti="netfolio-transactions",Di="netfolio-initial-balances";function nn(t){localStorage.setItem(Ti,JSON.stringify(t))}function wl(){const t=localStorage.getItem(Ti);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function ha(t){localStorage.setItem(Di,JSON.stringify(t))}function kl(){const t=localStorage.getItem(Di);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function at(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function $l(t){return t===at(new Date)}function Sl(t,n,a,r){const i=n.filter(l=>l.date<=a&&(l.accountId===t.id||l.linkedAccountId===t.id));let s=r[t.id]||0;if(t.type==="bank")for(const l of i)l.accountId===t.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===t.id&&(l.type==="investment_credit"?s-=l.amount:l.type==="investment_debit"&&(s+=l.amount));else for(const l of i)l.accountId===t.id&&(l.type==="investment_credit"?s+=l.amount:l.type==="investment_debit"&&(s-=l.amount));return{account:t,balance:s}}function Cl(t,n,a){return He.map(r=>Sl(r,t,n,a))}function Tl(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function Dl(t,n,a,r,i,s){return{id:Tl(),date:i,type:t,accountId:n,amount:a,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function xn(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Al(t){switch(t){case"bank_debit":return"Bank Debit";case"bank_credit":return"Bank Credit";case"investment_credit":return"Investment Deposit";case"investment_debit":return"Investment Withdrawal"}}function Il(t){return He.find(n=>n.id===t)}function ze(){return He.filter(t=>t.type==="bank")}function ir(){return He.filter(t=>t.type==="investment")}function Ml(t,n){const a={version:"2.0",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n};return JSON.stringify(a,null,2)}function Ll(t,n){const a=Ml(t,n),r=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(r),s=document.createElement("a"),l=new Date().toISOString().split("T")[0];s.href=i,s.download=`netfolio-backup-${l}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}function Ol(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null)return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Pl(t){try{const n=JSON.parse(t);return Ol(n)?n:null}catch{return null}}function Ai(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(a=Ai(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function mn(){for(var t,n,a=0,r="",i=arguments.length;a<i;a++)(t=arguments[a])&&(n=Ai(t))&&(r&&(r+=" "),r+=n);return r}const _l=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const i=Object.getOwnPropertyDescriptor(t,a),s=Object.getOwnPropertyDescriptor(n,a);!Fl(i,s)&&r||Object.defineProperty(t,a,s)},Fl=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},El=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},Nl=(t,n)=>`/* Wrapped ${t}*/
${n}`,Wl=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),zl=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Bl=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,i=Nl.bind(null,r,n.toString());Object.defineProperty(i,"name",zl);const{writable:s,enumerable:l,configurable:d}=Wl;Object.defineProperty(t,"toString",{value:i,writable:s,enumerable:l,configurable:d})};function Rl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const i of Reflect.ownKeys(n))_l(t,n,i,a);return El(t,n),Bl(t,n,r),t}const rn=2147483647,Hl=new WeakMap,Vn=new WeakMap,Yl=new WeakMap;function Gl(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function Ii(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>rn)throw new TypeError(`The \`maxAge\` option cannot exceed ${rn}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...s){var x;const l=n?n(s):s[0],d=Gl(a,l);if(d)return d.data;const f=t.apply(this,s),c=typeof r=="function"?r(...s):r;if(c!==void 0&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return f;if(c>rn)throw new TypeError(`The \`maxAge\` function result cannot exceed ${rn}.`)}if(a.set(l,{data:f,maxAge:c===void 0||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),c!==void 0&&c!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var m;a.delete(l),(m=Vn.get(i))==null||m.delete(g)},c);(x=g.unref)==null||x.call(g);const u=Vn.get(i)??new Set;u.add(g),Vn.set(i,u)}return f};return Rl(i,t,{ignoreNonConfigurable:!0}),Hl.set(i,a),Yl.set(i,n??(s=>s[0])),i}function Vl(t){return typeof t=="string"}function Ql(t,n,a){return a.indexOf(t)===n}function Ul(t){return t.toLowerCase()===t}function fa(t){return t.indexOf(",")===-1?t:t.split(",")}function or(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return or(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return or(a)}if(t.indexOf("-")===-1||!Ul(t))return t;var i=t.split("-"),s=i[0],l=i[1],d=l===void 0?"":l;return"".concat(s,"-").concat(d.toUpperCase())}function ql(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,i=n.fallbackLocale,s=i===void 0?"en-US":i,l=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],f=[],c=0,x=d;c<x.length;c++){var g=x[c];f=f.concat(fa(g))}var u=navigator.language,m=u&&fa(u);l=l.concat(f,m)}return r&&l.push(s),l.filter(Vl).map(or).filter(Ql)}var Kl=Ii(ql,{cacheKey:JSON.stringify});function Xl(t){return Kl(t)[0]||null}var Mi=Ii(Xl,{cacheKey:JSON.stringify});function Fe(t,n,a){return function(i,s=a){const l=t(i)+s;return n(l)}}function Qt(t){return function(a){return new Date(t(a).getTime()-1)}}function Ut(t,n){return function(r){return[t(r),n(r)]}}function Y(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function Ye(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function yn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function Ct(t){const n=Y(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Jl=Fe(Y,Ct,-100),Li=Fe(Y,Ct,100),Cr=Qt(Li),Zl=Fe(Y,Cr,-100),Oi=Ut(Ct,Cr);function Ge(t){const n=Y(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Pi=Fe(Y,Ge,-10),Tr=Fe(Y,Ge,10),vn=Qt(Tr),_i=Fe(Y,vn,-10),Fi=Ut(Ge,vn);function Tt(t){const n=Y(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Ei=Fe(Y,Tt,-1),Dr=Fe(Y,Tt,1),bn=Qt(Dr),Ni=Fe(Y,bn,-1),ec=Ut(Tt,bn);function Ar(t,n){return function(r,i=n){const s=Y(r),l=Ye(r)+i,d=new Date;return d.setFullYear(s,l,1),d.setHours(0,0,0,0),t(d)}}function st(t){const n=Y(t),a=Ye(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Wi=Ar(st,-1),Ir=Ar(st,1),qt=Qt(Ir),zi=Ar(qt,-1),tc=Ut(st,qt);function nc(t,n){return function(r,i=n){const s=Y(r),l=Ye(r),d=yn(r)+i,f=new Date;return f.setFullYear(s,l,d),f.setHours(0,0,0,0),t(f)}}function Kt(t){const n=Y(t),a=Ye(t),r=yn(t),i=new Date;return i.setFullYear(n,a,r),i.setHours(0,0,0,0),i}const rc=nc(Kt,1),Mr=Qt(rc),ac=Ut(Kt,Mr);function Bi(t){return yn(qt(t))}var ie={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},ic={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Lr=[0,1,2,3,4,5,6],Qn=new Map;function oc(t){return function(a,r){var i=a||Mi();Qn.has(i)||Qn.set(i,new Map);var s=Qn.get(i);return s.has(t)||s.set(t,new Intl.DateTimeFormat(i||void 0,t).format),s.get(t)(r)}}function sc(t){var n=new Date(t);return new Date(n.setHours(12))}function lt(t){return function(n,a){return oc(t)(n,sc(a))}}var lc={day:"numeric"},cc={day:"numeric",month:"long",year:"numeric"},dc={month:"long"},pc={month:"long",year:"numeric"},xc={weekday:"short"},uc={weekday:"long"},hc={year:"numeric"},fc=lt(lc),gc=lt(cc),mc=lt(dc),Ri=lt(pc),yc=lt(xc),vc=lt(uc),jn=lt(hc),bc=Lr[0],jc=Lr[5],ga=Lr[6];function Rt(t,n){n===void 0&&(n=ie.ISO_8601);var a=t.getDay();switch(n){case ie.ISO_8601:return(a+6)%7;case ie.ISLAMIC:return(a+1)%7;case ie.HEBREW:case ie.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function wc(t){var n=Ct(t);return Y(n)}function kc(t){var n=Ge(t);return Y(n)}function sr(t,n){n===void 0&&(n=ie.ISO_8601);var a=Y(t),r=Ye(t),i=t.getDate()-Rt(t,n);return new Date(a,r,i)}function $c(t,n){n===void 0&&(n=ie.ISO_8601);var a=n===ie.GREGORY?ie.GREGORY:ie.ISO_8601,r=sr(t,n),i=Y(t)+1,s,l;do s=new Date(i,0,a===ie.ISO_8601?4:1),l=sr(s,n),i-=1;while(t<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function it(t,n){switch(t){case"century":return Ct(n);case"decade":return Ge(n);case"year":return Tt(n);case"month":return st(n);case"day":return Kt(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Sc(t,n){switch(t){case"century":return Jl(n);case"decade":return Pi(n);case"year":return Ei(n);case"month":return Wi(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Hi(t,n){switch(t){case"century":return Li(n);case"decade":return Tr(n);case"year":return Dr(n);case"month":return Ir(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Cc(t,n){switch(t){case"decade":return Pi(n,-100);case"year":return Ei(n,-10);case"month":return Wi(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Tc(t,n){switch(t){case"decade":return Tr(n,100);case"year":return Dr(n,10);case"month":return Ir(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Yi(t,n){switch(t){case"century":return Cr(n);case"decade":return vn(n);case"year":return bn(n);case"month":return qt(n);case"day":return Mr(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Dc(t,n){switch(t){case"century":return Zl(n);case"decade":return _i(n);case"year":return Ni(n);case"month":return zi(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ac(t,n){switch(t){case"decade":return _i(n,-100);case"year":return Ni(n,-10);case"month":return zi(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function ma(t,n){switch(t){case"century":return Oi(n);case"decade":return Fi(n);case"year":return ec(n);case"month":return tc(n);case"day":return ac(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ic(t,n,a){var r=[n,a].sort(function(i,s){return i.getTime()-s.getTime()});return[it(t,r[0]),Yi(t,r[1])]}function Gi(t,n,a){return a.map(function(r){return(n||jn)(t,r)}).join(" – ")}function Mc(t,n,a){return Gi(t,n,Oi(a))}function Vi(t,n,a){return Gi(t,n,Fi(a))}function Lc(t){return t.getDay()===new Date().getDay()}function Qi(t,n){n===void 0&&(n=ie.ISO_8601);var a=t.getDay();switch(n){case ie.ISLAMIC:case ie.HEBREW:return a===jc||a===ga;case ie.ISO_8601:case ie.GREGORY:return a===ga||a===bc;default:throw new Error("Unsupported calendar type.")}}var De="react-calendar__navigation";function Oc(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,i=r===void 0?Ri:r,s=t.formatYear,l=s===void 0?jn:s,d=t.locale,f=t.maxDate,c=t.minDate,x=t.navigationAriaLabel,g=x===void 0?"":x,u=t.navigationAriaLive,m=t.navigationLabel,v=t.next2AriaLabel,w=v===void 0?"":v,b=t.next2Label,k=b===void 0?"»":b,$=t.nextAriaLabel,C=$===void 0?"":$,L=t.nextLabel,O=L===void 0?"›":L,T=t.prev2AriaLabel,A=T===void 0?"":T,S=t.prev2Label,N=S===void 0?"«":S,R=t.prevAriaLabel,K=R===void 0?"":R,ee=t.prevLabel,oe=ee===void 0?"‹":ee,X=t.setActiveStartDate,j=t.showDoubleView,_=t.view,V=t.views,le=V.indexOf(_)>0,de=_!=="century",U=Sc(_,n),H=de?Cc(_,n):void 0,ye=Hi(_,n),se=de?Tc(_,n):void 0,ge=function(){if(U.getFullYear()<0)return!0;var te=Dc(_,n);return c&&c>=te}(),z=de&&function(){if(H.getFullYear()<0)return!0;var te=Ac(_,n);return c&&c>=te}(),we=f&&f<ye,Ve=de&&f&&f<se;function Ie(){X(U,"prev")}function ve(){X(H,"prev2")}function ct(){X(ye,"next")}function Qe(){X(se,"next2")}function Ee(te){var At=function(){switch(_){case"century":return Mc(d,l,te);case"decade":return Vi(d,l,te);case"year":return l(d,te);case"month":return i(d,te);default:throw new Error("Invalid view: ".concat(_,"."))}}();return m?m({date:te,label:At,locale:d||Mi()||void 0,view:_}):At}function $n(){var te="".concat(De,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":u,className:te,disabled:!le,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(te,"__labelText ").concat(te,"__labelText--from"),children:Ee(n)}),j?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(te,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(te,"__labelText ").concat(te,"__labelText--to"),children:Ee(ye)})]}):null]})}return e.jsxs("div",{className:De,children:[N!==null&&de?e.jsx("button",{"aria-label":A,className:"".concat(De,"__arrow ").concat(De,"__prev2-button"),disabled:z,onClick:ve,type:"button",children:N}):null,oe!==null&&e.jsx("button",{"aria-label":K,className:"".concat(De,"__arrow ").concat(De,"__prev-button"),disabled:ge,onClick:Ie,type:"button",children:oe}),$n(),O!==null&&e.jsx("button",{"aria-label":C,className:"".concat(De,"__arrow ").concat(De,"__next-button"),disabled:we,onClick:ct,type:"button",children:O}),k!==null&&de?e.jsx("button",{"aria-label":w,className:"".concat(De,"__arrow ").concat(De,"__next2-button"),disabled:Ve,onClick:Qe,type:"button",children:k}):null]})}var kt=function(){return kt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kt.apply(this,arguments)},Pc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ya(t){return"".concat(t,"%")}function Or(t){var n=t.children,a=t.className,r=t.count,i=t.direction,s=t.offset,l=t.style,d=t.wrap,f=Pc(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",kt({className:a,style:kt({display:"flex",flexDirection:i,flexWrap:d?"wrap":"nowrap"},l)},f,{children:h.Children.map(n,function(c,x){var g=s&&x===0?ya(100*s/r):null;return h.cloneElement(c,kt(kt({},c.props),{style:{flexBasis:ya(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function _c(t,n,a){return n&&n>t?n:a&&a<t?a:t}function Ht(t,n){return n[0]<=t&&n[1]>=t}function Fc(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function Ui(t,n){return Ht(t[0],n)||Ht(t[1],n)}function va(t,n,a){var r=Ui(n,t),i=[];if(r){i.push(a);var s=Ht(t[0],n),l=Ht(t[1],n);s&&i.push("".concat(a,"Start")),l&&i.push("".concat(a,"End")),s&&l&&i.push("".concat(a,"BothEnds"))}return i}function Ec(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Nc(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,i="react-calendar__tile",s=[i];if(!a)return s;var l=new Date,d=function(){if(Array.isArray(a))return a;var m=t.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return ma(m,a)}();if(Ht(l,d)&&s.push("".concat(i,"--now")),!n||!Ec(n))return s;var f=function(){if(Array.isArray(n))return n;var m=t.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return ma(m,n)}();Fc(f,d)?s.push("".concat(i,"--active")):Ui(f,d)&&s.push("".concat(i,"--hasActive"));var c=va(f,d,"".concat(i,"--range"));s.push.apply(s,c);var x=Array.isArray(n)?n:[n];if(r&&x.length===1){var g=r>f[0]?[f[0],r]:[r,f[0]],u=va(g,d,"".concat(i,"--hover"));s.push.apply(s,u)}return s}function wn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,i=t.dateTransform,s=t.dateType,l=t.end,d=t.hover,f=t.offset,c=t.renderTile,x=t.start,g=t.step,u=g===void 0?1:g,m=t.value,v=t.valueType,w=[],b=x;b<=l;b+=u){var k=i(b);w.push(c({classes:Nc({date:k,dateType:s,hover:d,value:m,valueType:v}),date:k}))}return e.jsx(Or,{className:n,count:r,offset:f,wrap:!0,children:w})}function kn(t){var n=t.activeStartDate,a=t.children,r=t.classes,i=t.date,s=t.formatAbbr,l=t.locale,d=t.maxDate,f=t.maxDateTransform,c=t.minDate,x=t.minDateTransform,g=t.onClick,u=t.onMouseOver,m=t.style,v=t.tileClassName,w=t.tileContent,b=t.tileDisabled,k=t.view,$=h.useMemo(function(){var L={activeStartDate:n,date:i,view:k};return typeof v=="function"?v(L):v},[n,i,v,k]),C=h.useMemo(function(){var L={activeStartDate:n,date:i,view:k};return typeof w=="function"?w(L):w},[n,i,w,k]);return e.jsxs("button",{className:mn(r,$),disabled:c&&x(c)>i||d&&f(d)<i||(b==null?void 0:b({activeStartDate:n,date:i,view:k})),onClick:g?function(L){return g(i,L)}:void 0,onFocus:u?function(){return u(i)}:void 0,onMouseOver:u?function(){return u(i)}:void 0,style:m,type:"button",children:[s?e.jsx("abbr",{"aria-label":s(l,i),children:a}):a,C]})}var lr=function(){return lr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lr.apply(this,arguments)},Wc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},ba="react-calendar__century-view__decades__decade";function zc(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,i=t.formatYear,s=i===void 0?jn:i,l=Wc(t,["classes","currentCentury","formatYear"]),d=l.date,f=l.locale,c=[];return a&&c.push.apply(c,a),c.push(ba),Ct(d).getFullYear()!==r&&c.push("".concat(ba,"--neighboringCentury")),e.jsx(kn,lr({},l,{classes:c,maxDateTransform:vn,minDateTransform:Ge,view:"century",children:Vi(f,s,d)}))}var cr=function(){return cr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cr.apply(this,arguments)},ja=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Bc(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,i=t.value,s=t.valueType,l=ja(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=wc(n),f=d+(r?119:99);return e.jsx(wn,{className:"react-calendar__century-view__decades",dateTransform:Ge,dateType:"decade",end:f,hover:a,renderTile:function(c){var x=c.date,g=ja(c,["date"]);return e.jsx(zc,cr({},l,g,{activeStartDate:n,currentCentury:d,date:x}),x.getTime())},start:d,step:10,value:i,valueType:s})}var dr=function(){return dr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},dr.apply(this,arguments)};function Rc(t){function n(){return e.jsx(Bc,dr({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var pr=function(){return pr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pr.apply(this,arguments)},Hc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},wa="react-calendar__decade-view__years__year";function Yc(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,i=t.formatYear,s=i===void 0?jn:i,l=Hc(t,["classes","currentDecade","formatYear"]),d=l.date,f=l.locale,c=[];return a&&c.push.apply(c,a),c.push(wa),Ge(d).getFullYear()!==r&&c.push("".concat(wa,"--neighboringDecade")),e.jsx(kn,pr({},l,{classes:c,maxDateTransform:bn,minDateTransform:Tt,view:"decade",children:s(f,d)}))}var xr=function(){return xr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xr.apply(this,arguments)},ka=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Gc(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,i=t.value,s=t.valueType,l=ka(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=kc(n),f=d+(r?11:9);return e.jsx(wn,{className:"react-calendar__decade-view__years",dateTransform:Tt,dateType:"year",end:f,hover:a,renderTile:function(c){var x=c.date,g=ka(c,["date"]);return e.jsx(Yc,xr({},l,g,{activeStartDate:n,currentDecade:d,date:x}),x.getTime())},start:d,value:i,valueType:s})}var ur=function(){return ur=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ur.apply(this,arguments)};function Vc(t){function n(){return e.jsx(Gc,ur({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var hr=function(){return hr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hr.apply(this,arguments)},Qc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},$a=function(t,n,a){if(a||arguments.length===2)for(var r=0,i=n.length,s;r<i;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return t.concat(s||Array.prototype.slice.call(n))},Uc="react-calendar__year-view__months__month";function qc(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,i=r===void 0?mc:r,s=t.formatMonthYear,l=s===void 0?Ri:s,d=Qc(t,["classes","formatMonth","formatMonthYear"]),f=d.date,c=d.locale;return e.jsx(kn,hr({},d,{classes:$a($a([],a,!0),[Uc],!1),formatAbbr:l,maxDateTransform:qt,minDateTransform:st,view:"year",children:i(c,f)}))}var fr=function(){return fr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fr.apply(this,arguments)},Sa=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Kc(t){var n=t.activeStartDate,a=t.hover,r=t.value,i=t.valueType,s=Sa(t,["activeStartDate","hover","value","valueType"]),l=0,d=11,f=Y(n);return e.jsx(wn,{className:"react-calendar__year-view__months",dateTransform:function(c){var x=new Date;return x.setFullYear(f,c,1),st(x)},dateType:"month",end:d,hover:a,renderTile:function(c){var x=c.date,g=Sa(c,["date"]);return e.jsx(qc,fr({},s,g,{activeStartDate:n,date:x}),x.getTime())},start:l,value:r,valueType:i})}var gr=function(){return gr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gr.apply(this,arguments)};function Xc(t){function n(){return e.jsx(Kc,gr({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var mr=function(){return mr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mr.apply(this,arguments)},Jc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Un="react-calendar__month-view__days__day";function Zc(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,i=t.currentMonthIndex,s=t.formatDay,l=s===void 0?fc:s,d=t.formatLongDate,f=d===void 0?gc:d,c=Jc(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),x=c.date,g=c.locale,u=[];return r&&u.push.apply(u,r),u.push(Un),Qi(x,n)&&u.push("".concat(Un,"--weekend")),x.getMonth()!==i&&u.push("".concat(Un,"--neighboringMonth")),e.jsx(kn,mr({},c,{classes:u,formatAbbr:f,maxDateTransform:Mr,minDateTransform:Kt,view:"month",children:l(g,x)}))}var yr=function(){return yr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yr.apply(this,arguments)},Ca=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ed(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,i=t.showFixedNumberOfWeeks,s=t.showNeighboringMonth,l=t.value,d=t.valueType,f=Ca(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=Y(n),x=Ye(n),g=i||s,u=Rt(n,a),m=g?0:u,v=(g?-u:0)+1,w=function(){if(i)return v+6*7-1;var b=Bi(n);if(s){var k=new Date;k.setFullYear(c,x,b),k.setHours(0,0,0,0);var $=7-Rt(k,a)-1;return b+$}return b}();return e.jsx(wn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var k=new Date;return k.setFullYear(c,x,b),Kt(k)},dateType:"day",hover:r,end:w,renderTile:function(b){var k=b.date,$=Ca(b,["date"]);return e.jsx(Zc,yr({},f,$,{activeStartDate:n,calendarType:a,currentMonthIndex:x,date:k}),k.getTime())},offset:m,start:v,value:l,valueType:d})}var qi="react-calendar__month-view__weekdays",qn="".concat(qi,"__weekday");function td(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?yc:a,i=t.formatWeekday,s=i===void 0?vc:i,l=t.locale,d=t.onMouseLeave,f=new Date,c=st(f),x=Y(c),g=Ye(c),u=[],m=1;m<=7;m+=1){var v=new Date(x,g,m-Rt(c,n)),w=s(l,v);u.push(e.jsx("div",{className:mn(qn,Lc(v)&&"".concat(qn,"--current"),Qi(v,n)&&"".concat(qn,"--weekend")),children:e.jsx("abbr",{"aria-label":w,title:w,children:r(l,v).replace(".","")})},m))}return e.jsx(Or,{className:qi,count:7,onFocus:d,onMouseOver:d,children:u})}var fn=function(){return fn=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fn.apply(this,arguments)},Ta=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Da="react-calendar__tile";function nd(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var i=t.date,s=t.onClickWeekNumber,l=t.weekNumber,d=Ta(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",fn({},d,{className:Da,onClick:function(f){return s(l,i,f)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=Ta(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",fn({},d,{className:Da,children:r}))}}function rd(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,i=t.onMouseLeave,s=t.showFixedNumberOfWeeks,l=function(){if(s)return 6;var c=Bi(n),x=Rt(n,a),g=c-(7-x);return 1+Math.ceil(g/7)}(),d=function(){for(var c=Y(n),x=Ye(n),g=yn(n),u=[],m=0;m<l;m+=1)u.push(sr(new Date(c,x,g+m*7),a));return u}(),f=d.map(function(c){return $c(c,a)});return e.jsx(Or,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:f.map(function(c,x){var g=d[x];if(!g)throw new Error("date is not defined");return e.jsx(nd,{date:g,onClickWeekNumber:r,weekNumber:c},c)})})}var vr=function(){return vr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vr.apply(this,arguments)},ad=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function id(t){if(t)for(var n=0,a=Object.entries(ic);n<a.length;n++){var r=a[n],i=r[0],s=r[1];if(s.includes(t))return i}return ie.ISO_8601}function od(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,i=t.showFixedNumberOfWeeks,s=t.calendarType,l=s===void 0?id(a):s,d=t.formatShortWeekday,f=t.formatWeekday,c=t.onClickWeekNumber,x=t.showWeekNumbers,g=ad(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function u(){return e.jsx(td,{calendarType:l,formatShortWeekday:d,formatWeekday:f,locale:a,onMouseLeave:r})}function m(){return x?e.jsx(rd,{activeStartDate:n,calendarType:l,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function v(){return e.jsx(ed,vr({calendarType:l},g))}var w="react-calendar__month-view";return e.jsx("div",{className:mn(w,x?"".concat(w,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[u(),v()]})]})})}var $t=function(){return $t=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$t.apply(this,arguments)},an="react-calendar",un=["century","decade","year","month"],sd=["decade","year","month","day"],Pr=new Date;Pr.setFullYear(1,0,1);Pr.setHours(0,0,0,0);var ld=new Date(864e13);function Bt(t){return t instanceof Date?t:new Date(t)}function Ki(t,n){return un.slice(un.indexOf(t),un.indexOf(n)+1)}function cd(t,n,a){var r=Ki(n,a);return r.indexOf(t)!==-1}function _r(t,n,a){return t&&cd(t,n,a)?t:a}function Xi(t){var n=un.indexOf(t);return sd[n]}function dd(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Bt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function Ji(t,n){var a=t.value,r=t.minDate,i=t.maxDate,s=t.maxDetail,l=dd(a,n);if(!l)return null;var d=Xi(s),f=function(){switch(n){case 0:return it(d,l);case 1:return Yi(d,l);default:throw new Error("Invalid index value: ".concat(n))}}();return _c(f,r,i)}var Fr=function(t){return Ji(t,0)},Zi=function(t){return Ji(t,1)},pd=function(t){return[Fr,Zi].map(function(n){return n(t)})};function eo(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,i=t.minDetail,s=t.value,l=t.view,d=_r(l,i,a),f=Fr({value:s,minDate:r,maxDate:n,maxDetail:a})||new Date;return it(d,f)}function xd(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,i=t.defaultView,s=t.maxDate,l=t.maxDetail,d=t.minDate,f=t.minDetail,c=t.value,x=t.view,g=_r(x,f,l),u=n||a;return u?it(g,u):eo({maxDate:s,maxDetail:l,minDate:d,minDetail:f,value:c||r,view:x||i})}function Kn(t){return t&&(!Array.isArray(t)||t.length===1)}function on(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var ud=h.forwardRef(function(n,a){var r=n.activeStartDate,i=n.allowPartialRange,s=n.calendarType,l=n.className,d=n.defaultActiveStartDate,f=n.defaultValue,c=n.defaultView,x=n.formatDay,g=n.formatLongDate,u=n.formatMonth,m=n.formatMonthYear,v=n.formatShortWeekday,w=n.formatWeekday,b=n.formatYear,k=n.goToRangeStartOnSelect,$=k===void 0?!0:k,C=n.inputRef,L=n.locale,O=n.maxDate,T=O===void 0?ld:O,A=n.maxDetail,S=A===void 0?"month":A,N=n.minDate,R=N===void 0?Pr:N,K=n.minDetail,ee=K===void 0?"century":K,oe=n.navigationAriaLabel,X=n.navigationAriaLive,j=n.navigationLabel,_=n.next2AriaLabel,V=n.next2Label,le=n.nextAriaLabel,de=n.nextLabel,U=n.onActiveStartDateChange,H=n.onChange,ye=n.onClickDay,se=n.onClickDecade,ge=n.onClickMonth,z=n.onClickWeekNumber,we=n.onClickYear,Ve=n.onDrillDown,Ie=n.onDrillUp,ve=n.onViewChange,ct=n.prev2AriaLabel,Qe=n.prev2Label,Ee=n.prevAriaLabel,$n=n.prevLabel,te=n.returnValue,At=te===void 0?"start":te,me=n.selectRange,Xt=n.showDoubleView,Wr=n.showFixedNumberOfWeeks,zr=n.showNavigation,wo=zr===void 0?!0:zr,ko=n.showNeighboringCentury,$o=n.showNeighboringDecade,Br=n.showNeighboringMonth,So=Br===void 0?!0:Br,Co=n.showWeekNumbers,To=n.tileClassName,Do=n.tileContent,Ao=n.tileDisabled,Sn=n.value,Rr=n.view,Hr=h.useState(d),Io=Hr[0],Jt=Hr[1],Yr=h.useState(null),Mo=Yr[0],Gr=Yr[1],Vr=h.useState(Array.isArray(f)?f.map(function(E){return E!==null?Bt(E):null}):f!=null?Bt(f):null),Cn=Vr[0],Lo=Vr[1],Qr=h.useState(c),Oo=Qr[0],Ur=Qr[1],pe=r||Io||xd({activeStartDate:r,defaultActiveStartDate:d,defaultValue:f,defaultView:c,maxDate:T,maxDetail:S,minDate:R,minDetail:ee,value:Sn,view:Rr}),xe=function(){var E=function(){return me&&Kn(Cn)?Cn:Sn!==void 0?Sn:Cn}();return E?Array.isArray(E)?E.map(function(Q){return Q!==null?Bt(Q):null}):E!==null?Bt(E):null:null}(),Zt=Xi(S),G=_r(Rr||Oo,ee,S),ke=Ki(ee,S),Po=me?Mo:null,Tn=ke.indexOf(G)<ke.length-1,qr=ke.indexOf(G)>0,Kr=h.useCallback(function(E){var Q=function(){switch(At){case"start":return Fr;case"end":return Zi;case"range":return pd;default:throw new Error("Invalid returnValue.")}}();return Q({maxDate:T,maxDetail:S,minDate:R,value:E})},[T,S,R,At]),Dn=h.useCallback(function(E,Q){Jt(E);var J={action:Q,activeStartDate:E,value:xe,view:G};U&&!on(pe,E)&&U(J)},[pe,U,xe,G]),en=h.useCallback(function(E,Q){var J=function(){switch(G){case"century":return se;case"decade":return we;case"year":return ge;case"month":return ye;default:throw new Error("Invalid view: ".concat(G,"."))}}();J&&J(E,Q)},[ye,se,ge,we,G]),An=h.useCallback(function(E,Q){if(Tn){en(E,Q);var J=ke[ke.indexOf(G)+1];if(!J)throw new Error("Attempted to drill down from the lowest view.");Jt(E),Ur(J);var be={action:"drillDown",activeStartDate:E,value:xe,view:J};U&&!on(pe,E)&&U(be),ve&&G!==J&&ve(be),Ve&&Ve(be)}},[pe,Tn,U,en,Ve,ve,xe,G,ke]),In=h.useCallback(function(){if(qr){var E=ke[ke.indexOf(G)-1];if(!E)throw new Error("Attempted to drill up from the highest view.");var Q=it(E,pe);Jt(Q),Ur(E);var J={action:"drillUp",activeStartDate:Q,value:xe,view:E};U&&!on(pe,Q)&&U(J),ve&&G!==E&&ve(J),Ie&&Ie(J)}},[pe,qr,U,Ie,ve,xe,G,ke]),Mn=h.useCallback(function(E,Q){var J=xe;en(E,Q);var be=me&&!Kn(J),je;if(me)if(be)je=it(Zt,E);else{if(!J)throw new Error("previousValue is required");if(Array.isArray(J))throw new Error("previousValue must not be an array");je=Ic(Zt,J,E)}else je=Kr(E);var On=!me||be||$?eo({maxDate:T,maxDetail:S,minDate:R,minDetail:ee,value:je,view:G}):null;Q.persist(),Jt(On),Lo(je);var No={action:"onChange",activeStartDate:On,value:je,view:G};if(U&&!on(pe,On)&&U(No),H)if(me){var Wo=Kn(je);if(!Wo)H(je||null,Q);else if(i){if(Array.isArray(je))throw new Error("value must not be an array");H([je||null,null],Q)}}else H(je||null,Q)},[pe,i,Kr,$,T,S,R,ee,U,H,en,me,xe,Zt,G]);function _o(E){Gr(E)}function Ln(){Gr(null)}h.useImperativeHandle(a,function(){return{activeStartDate:pe,drillDown:An,drillUp:In,onChange:Mn,setActiveStartDate:Dn,value:xe,view:G}},[pe,An,In,Mn,Dn,xe,G]);function Xr(E){var Q=E?Hi(G,pe):it(G,pe),J=Tn?An:Mn,be={activeStartDate:Q,hover:Po,locale:L,maxDate:T,minDate:R,onClick:J,onMouseOver:me?_o:void 0,tileClassName:To,tileContent:Do,tileDisabled:Ao,value:xe,valueType:Zt};switch(G){case"century":return e.jsx(Rc,$t({formatYear:b,showNeighboringCentury:ko},be));case"decade":return e.jsx(Vc,$t({formatYear:b,showNeighboringDecade:$o},be));case"year":return e.jsx(Xc,$t({formatMonth:u,formatMonthYear:m},be));case"month":return e.jsx(od,$t({calendarType:s,formatDay:x,formatLongDate:g,formatShortWeekday:v,formatWeekday:w,onClickWeekNumber:z,onMouseLeave:me?Ln:void 0,showFixedNumberOfWeeks:typeof Wr<"u"?Wr:Xt,showNeighboringMonth:So,showWeekNumbers:Co},be));default:throw new Error("Invalid view: ".concat(G,"."))}}function Fo(){return wo?e.jsx(Oc,{activeStartDate:pe,drillUp:In,formatMonthYear:m,formatYear:b,locale:L,maxDate:T,minDate:R,navigationAriaLabel:oe,navigationAriaLive:X,navigationLabel:j,next2AriaLabel:_,next2Label:V,nextAriaLabel:le,nextLabel:de,prev2AriaLabel:ct,prev2Label:Qe,prevAriaLabel:Ee,prevLabel:$n,setActiveStartDate:Dn,showDoubleView:Xt,view:G,views:ke}):null}var Eo=Array.isArray(xe)?xe:[xe];return e.jsxs("div",{className:mn(an,me&&Eo.length===1&&"".concat(an,"--selectRange"),Xt&&"".concat(an,"--doubleView"),l),ref:C,children:[Fo(),e.jsxs("div",{className:"".concat(an,"__viewContainer"),onBlur:me?Ln:void 0,onMouseLeave:me?Ln:void 0,children:[Xr(),Xt?Xr(!0):null]})]})});const hd=M`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,fd=M`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,gd=M`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,md=M`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,yd=M`
  from { opacity: 0; }
  to { opacity: 1; }
`,vd=o.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${yd} 0.15s ease-out;
`,bd=o.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?Re`animation: ${md} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Re`animation: ${gd} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?Re`animation: ${fd} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Re`animation: ${hd} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,jd=o.div`
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
`,Yt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:i})=>{const s=h.useRef(null),[l,d]=h.useState(!1),[f,c]=h.useState(!1),[x,g]=h.useState(!1),[u,m]=h.useState({top:0,left:0});h.useEffect(()=>{if(t&&(i!=null&&i.current)){const $=i.current.getBoundingClientRect(),C=280,L=320,O=8,A=window.innerHeight-$.bottom-O<L;g(A);let S;A?S=$.top-L-O:S=$.bottom+O;let N=$.right-C;N<8&&(N=8),N+C>window.innerWidth-8&&(N=window.innerWidth-C-8),S<8&&(S=8),m({top:S,left:N}),c(!0),d(!1)}},[t,i]);const v=h.useCallback(()=>{d(!0),setTimeout(()=>{c(!1),d(!1),n()},150)},[n]),w=h.useCallback($=>{s.current&&!s.current.contains($.target)&&v()},[v]);h.useEffect(()=>{if(t){const $=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout($),document.removeEventListener("mousedown",w)}}},[t,w]);const b=h.useCallback($=>{$ instanceof Date&&(r(at($)),v())},[r,v]);if(!f)return null;const k=new Date(a+"T00:00:00");return yi.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(vd,{onClick:v}),e.jsx(bd,{ref:s,$isClosing:l,$openUpward:x,$top:u.top,$left:u.left,children:e.jsx(jd,{children:e.jsx(ud,{onChange:b,value:k,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:($,C)=>C.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},wd=o(y.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,kd=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,$d=o.button`
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
`,Sd=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,Er=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,Cd=o(Er)`
  height: 14px;
`,Td=o(Er)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,Dd=o(Er)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,Ad=o(y.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,Id=o(y.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,Md=o.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,Ld=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Od=o(y.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Pd=o.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,_d=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,Fd=o.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,Ed=o(y.button).attrs({type:"button"})`
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
`,Nd=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,Aa=o(y.button).attrs({type:"button"})`
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
`,Wd=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),zd=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),sn=[.25,.1,.25,1],Bd=({selectedDate:t,onDateChange:n})=>{const[a,r]=h.useState(!1),[i,s]=h.useState(1),l=h.useRef(null),d=h.useRef(t);if(d.current!==t){const $=new Date(d.current+"T00:00:00"),C=new Date(t+"T00:00:00");s(C>$?1:-1),d.current=t}const f=h.useCallback($=>{$.preventDefault(),$.stopPropagation();const C=at(new Date),L=new Date(t+"T00:00:00"),O=new Date(C+"T00:00:00");s(O>L?1:-1),n(C)},[t,n]),c=h.useCallback($=>{$.preventDefault(),$.stopPropagation(),s(-1);const C=new Date(t+"T00:00:00");C.setDate(C.getDate()-1),n(at(C))},[t,n]),x=h.useCallback($=>{$.preventDefault(),$.stopPropagation(),s(1);const C=new Date(t+"T00:00:00");C.setDate(C.getDate()+1),n(at(C))},[t,n]),g=$l(t),u=new Date(t+"T00:00:00"),m=u.getDate(),v=u.toLocaleDateString("en-US",{month:"short"}),w=u.toLocaleDateString("en-US",{weekday:"long"}),b=u.getFullYear(),k={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return e.jsxs(wd,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:sn},children:[e.jsxs(kd,{children:[e.jsxs($d,{ref:l,onClick:()=>r(!0),type:"button",children:[e.jsxs(Sd,{children:[e.jsx(Cd,{children:e.jsx(Z,{mode:"popLayout",initial:!1,children:e.jsx(Ad,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:sn},children:v},v)})}),e.jsx(Td,{children:e.jsx(Z,{mode:"popLayout",initial:!1,children:e.jsx(Id,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:sn},children:m},m)})})]}),e.jsx(Md,{}),e.jsxs(Ld,{children:[e.jsx(Dd,{children:e.jsx(Z,{mode:"popLayout",initial:!1,children:e.jsx(Od,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:sn},children:w},w)})}),e.jsx(Pd,{children:b})]})]}),e.jsxs(_d,{children:[e.jsx(Fd,{children:e.jsx(Z,{children:!g&&e.jsx(Ed,{onClick:f,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Nd,{children:[e.jsx(Aa,{onClick:c,whileTap:{scale:.95},children:e.jsx(Wd,{})}),e.jsx(Aa,{onClick:x,whileTap:{scale:.95},children:e.jsx(zd,{})})]})]})]}),e.jsx(Yt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:l})]})},Rd=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,mt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,yt=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Xn=o.select`
  padding: 12px 14px;
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

  &:focus {
    border-color: var(--accent);
  }
`,Ia=o.input`
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
`,Hd=o.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;

  &:hover {
    border-color: var(--text-tertiary);
  }
`,Yd=o(y.button)`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 8px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Gd=[{value:"bank_debit",label:"Bank Debit"},{value:"bank_credit",label:"Bank Credit"},{value:"investment_credit",label:"Investment Deposit"},{value:"investment_debit",label:"Investment Withdrawal"}],Vd=({onAddTransaction:t})=>{const[n,a]=h.useState("bank_debit"),[r,i]=h.useState(He[0].id),[s,l]=h.useState(""),[d,f]=h.useState(""),[c,x]=h.useState(""),[g,u]=h.useState(at(new Date)),[m,v]=h.useState(!1),w=h.useRef(null),b=n==="investment_credit"||n==="investment_debit",k=h.useMemo(()=>b?ir():ze(),[b]),$=h.useMemo(()=>n==="investment_credit"||n==="investment_debit"?ze():[],[n]),C=b&&r!=="pf",L=h.useCallback(S=>{a(S);const N=S==="investment_credit"||S==="investment_debit",R=N?ir():ze(),K=R.length>0?R[0].id:"";i(K);const ee=ze();N&&K!=="pf"&&ee.length>0?l(ee[0].id):l("")},[]),O=r&&parseFloat(d)>0&&c.trim(),T=h.useCallback(()=>{if(!O)return;const S=Dl(n,r,parseFloat(d),c.trim(),g,C?s:void 0);t(S),f(""),x("")},[n,r,d,c,g,s,C,O,t]),A=S=>new Date(S+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(Rd,{children:[e.jsxs(mt,{children:[e.jsx(yt,{children:"Type"}),e.jsx(Xn,{value:n,onChange:S=>L(S.target.value),children:Gd.map(S=>e.jsx("option",{value:S.value,children:S.label},S.value))})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:b?"Investment Account":"Bank Account"}),e.jsx(Xn,{value:r,onChange:S=>{const N=S.target.value;if(i(N),N==="pf")l("");else if(b&&!s){const R=ze();R.length>0&&l(R[0].id)}},children:k.map(S=>e.jsx("option",{value:S.id,children:S.name},S.id))})]}),C&&e.jsxs(mt,{children:[e.jsx(yt,{children:n==="investment_credit"?"From Bank":"To Bank"}),e.jsx(Xn,{value:s,onChange:S=>l(S.target.value),children:$.map(S=>e.jsx("option",{value:S.id,children:S.name},S.id))})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Amount"}),e.jsx(Ia,{type:"number",inputMode:"decimal",placeholder:"0",value:d,onChange:S=>f(S.target.value)})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Description"}),e.jsx(Ia,{type:"text",placeholder:"What's this for?",value:c,onChange:S=>x(S.target.value),onKeyDown:S=>S.key==="Enter"&&T()})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Date"}),e.jsx(Hd,{ref:w,type:"button",onClick:()=>v(!0),children:A(g)}),e.jsx(Yt,{isOpen:m,onClose:()=>v(!1),selectedDate:g,onDateSelect:S=>{u(S),v(!1)},triggerRef:w})]}),e.jsx(Yd,{disabled:!O,onClick:T,whileTap:{scale:.98},children:"Add Transaction"})]})},Qd=h.memo(Vd),to=[.25,.1,.25,1],no={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},ro={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:to}}};function ao(t){h.useEffect(()=>{if(t)return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.documentElement.style.overflow="",document.body.style.overflow="",document.body.style.touchAction=""}},[t])}const io=o(y.div)`
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
`,oo=o(y.div)`
  width: 100%;
  max-width: ${({$maxWidth:t})=>t||"440px"};
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,so=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,lo=o.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,co=o(y.button)`
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
`,po=o(co)`
  left: 12px;
  color: var(--text-secondary);
`,xo=o(co)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,uo=o.div`
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
`,br=o.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,Ma=o.div`
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
`;o(y.button)`
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
`;o(y.button)`
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
`;o(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`;o.div`
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
`;o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`;o.div`
  font-size: 13px;
  color: var(--text-tertiary);
`;const Ud=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  & + & {
    border-top: 1px solid var(--border);
  }
`,qd=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Kd=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,Xd=o.input`
  width: 120px;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-align: right;
  outline: none;

  &:focus {
    border-color: var(--accent);
  }
`,Jd=({isOpen:t,onClose:n,initialBalances:a,onSave:r})=>{const[i,s]=h.useState({});ao(t),h.useEffect(()=>{if(t){const x={};He.forEach(g=>{const u=a[g.id];x[g.id]=u?String(u):""}),s(x)}},[t,a]);const l=()=>{const x={};Object.entries(i).forEach(([g,u])=>{const m=parseFloat(u);!isNaN(m)&&m!==0&&(x[g]=m)}),r(x),n()},d=He.filter(x=>x.type==="bank"),f=He.filter(x=>x.type==="investment"),c=x=>x.map(g=>e.jsxs(Ud,{children:[e.jsx(qd,{$color:g.color}),e.jsx(Kd,{children:g.name}),e.jsx(Xd,{type:"number",inputMode:"decimal",placeholder:"0",value:i[g.id]||"",onChange:u=>s(m=>({...m,[g.id]:u.target.value}))})]},g.id));return e.jsx(Z,{children:t&&e.jsx(io,{variants:no,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(oo,{variants:ro,initial:"hidden",animate:"visible",exit:"exit",onClick:x=>x.stopPropagation(),children:[e.jsxs(so,{children:[e.jsx(po,{onClick:n,children:"Cancel"}),e.jsx(lo,{children:"Initial Balances"}),e.jsx(xo,{onClick:l,children:"Save"})]}),e.jsxs(uo,{children:[e.jsxs(br,{children:[e.jsx(Ma,{children:"Bank Accounts"}),c(d)]}),e.jsxs(br,{children:[e.jsx(Ma,{children:"Investments"}),c(f)]})]})]})})})},vt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`,bt=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,La=o.input`
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: var(--accent);
  }
`,Oa=o.select`
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;

  option {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`,Zd=o.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
`,e0=o.div`
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,t0=({isOpen:t,onClose:n,transaction:a,onSave:r})=>{const[i,s]=h.useState(""),[l,d]=h.useState(""),[f,c]=h.useState(""),[x,g]=h.useState(""),[u,m]=h.useState(""),[v,w]=h.useState(!1),b=h.useRef(null);ao(t),h.useEffect(()=>{t&&a&&(s(String(a.amount)),d(a.description),c(a.date),g(a.accountId),m(a.linkedAccountId||""))},[t,a]);const k=(a==null?void 0:a.type)==="investment_credit"||(a==null?void 0:a.type)==="investment_debit",$=h.useMemo(()=>a?k?ir():ze():[],[a,k]),C=h.useCallback(()=>{if(!a)return;const T={...a,amount:parseFloat(i),description:l.trim(),date:f,accountId:x,linkedAccountId:k&&x!=="pf"?u:void 0};r(T),n()},[a,i,l,f,x,u,k,r,n]),L=parseFloat(i)>0&&l.trim(),O=T=>new Date(T+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsx(Z,{children:t&&a&&e.jsx(io,{variants:no,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(oo,{variants:ro,initial:"hidden",animate:"visible",exit:"exit",onClick:T=>T.stopPropagation(),children:[e.jsxs(so,{children:[e.jsx(po,{onClick:n,children:"Cancel"}),e.jsx(lo,{children:"Edit Transaction"}),e.jsx(xo,{onClick:C,disabled:!L,children:"Save"})]}),e.jsx(uo,{children:e.jsxs(br,{children:[e.jsxs(vt,{children:[e.jsx(bt,{children:"Type"}),e.jsx(e0,{children:Al(a.type)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Account"}),e.jsx(Oa,{value:x,onChange:T=>g(T.target.value),children:$.map(T=>e.jsx("option",{value:T.id,children:T.name},T.id))})]}),k&&x!=="pf"&&e.jsxs(vt,{children:[e.jsx(bt,{children:a.type==="investment_credit"?"From Bank":"To Bank"}),e.jsx(Oa,{value:u,onChange:T=>m(T.target.value),children:ze().map(T=>e.jsx("option",{value:T.id,children:T.name},T.id))})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Amount"}),e.jsx(La,{type:"number",inputMode:"decimal",value:i,onChange:T=>s(T.target.value)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Description"}),e.jsx(La,{type:"text",value:l,onChange:T=>d(T.target.value)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Date"}),e.jsx(Zd,{ref:b,type:"button",onClick:()=>w(!0),children:O(f)}),e.jsx(Yt,{isOpen:v,onClose:()=>w(!1),selectedDate:f,onDateSelect:T=>{c(T),w(!1)},triggerRef:b})]})]})})]})})})};o(y.div)`
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

  ${({$interactive:t})=>t&&Re`
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
`;o(kr)`
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
  
  ${({$variant:t})=>t==="accent"?Re`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:Re`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const n0=o.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,r0=o.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,a0=o(y.span)`
  display: inline-block;
`,i0=o.span`
  display: inline-block;
`,o0=[.25,.1,.25,1],s0=({value:t,className:n})=>{const a=h.useMemo(()=>t.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(n0,{className:n,children:a.map(({char:r,key:i,isDigit:s},l)=>s?e.jsx(r0,{children:e.jsx(Z,{mode:"popLayout",initial:!1,children:e.jsx(a0,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:o0},children:r},i)})},`wrapper-${l}`):e.jsx(i0,{children:r},`static-${l}`))})},Jn=h.memo(s0);o.h1`
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
`;const l0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),c0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),Pa=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),d0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),p0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),x0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),u0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"}),e.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),h0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M5 21V7l7-4 7 4v14"}),e.jsx("path",{d:"M9 21v-6h6v6"}),e.jsx("path",{d:"M10 10h4"})]}),f0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2"}),e.jsx("path",{d:"M12 11v6"}),e.jsx("path",{d:"M9 14h6"}),e.jsx("path",{d:"M16 7V5a4 4 0 0 0-8 0v2"})]}),g0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),m0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),y0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),v0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),b0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),j0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),w0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),k0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),$0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),S0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),_a=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),_e=to,nt=[{id:"summary",label:"Summary",icon:l0(),accent:"green"},{id:"transactions",label:"History",icon:m0(),accent:"blue"},{id:"add",label:"Add",icon:y0(),accent:"orange"},{id:"manage",label:"Manage",icon:v0(),accent:"purple"}],C0=["bank_credit","investment_debit"],T0={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:_e}}},D0={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},A0={"hdfc-bank":"/tools/images/HDFC.svg","icici-bank":"/tools/images/ICICI.svg"},I0={"mutual-funds":u0,ppf:h0,pf:f0},M0=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,L0=o.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0 4px;
`,Fa=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,O0=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,P0=o.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  background: ${({$color:t})=>`${t}15`};

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${({$color:t})=>t};
  }
`,_0=o.span`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,F0=o.span`
  font-size: 17px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,Ea=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: rgba(var(--accent-rgb), 0.06);
  border-top: 1px solid var(--border);
`,Na=o.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
`,Wa=o.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({$positive:t})=>t?"var(--accent)":"#ef4444"};
  letter-spacing: -0.02em;
`,E0=h.memo(function({balances:n}){const a=n.filter(c=>c.account.type==="bank"),r=n.filter(c=>c.account.type==="investment"),i=a.reduce((c,x)=>c+x.balance,0),s=r.reduce((c,x)=>c+x.balance,0),l=i+s,d=(c,x)=>{const g=A0[c],u=I0[c];return e.jsx(P0,{$color:x,children:g?e.jsx("img",{src:g,alt:""}):u?e.jsx(u,{}):null})},f=(c,x,g)=>e.jsxs(y.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:_e},children:[e.jsx(L0,{children:c}),e.jsxs(Fa,{style:{marginTop:8},children:[x.map(({account:u,balance:m})=>e.jsxs(O0,{children:[d(u.id,u.color),e.jsx(_0,{children:u.name}),e.jsx(F0,{$positive:m>=0,children:e.jsx(Jn,{value:xn(m)})})]},u.id)),e.jsxs(Ea,{children:[e.jsx(Na,{children:"Total"}),e.jsx(Wa,{$positive:g>=0,children:e.jsx(Jn,{value:xn(g)})})]})]})]});return e.jsxs(M0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[f("Bank Accounts",a,i),f("Investments",r,s),e.jsx(y.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:_e},children:e.jsx(Fa,{children:e.jsxs(Ea,{children:[e.jsx(Na,{style:{fontSize:16},children:"Net Worth"}),e.jsx(Wa,{$positive:l>=0,style:{fontSize:24},children:e.jsx(Jn,{value:xn(l)})})]})})})]})}),N0=o(y.div)`
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
`,W0=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,z0=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,B0=o.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,R0=o.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,H0=o(y.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,Y0=o.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,G0=o(y.div)`
  width: 100%;
`,V0=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,Q0=o.input`
  display: none;
`,U0=o.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,q0=o(y.button)`
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
`,K0=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
`,X0=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 2px;
`,J0=o.button`
  flex: 1;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:t})=>t?"var(--accent)":"var(--border)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  letter-spacing: 0.02em;

  &:hover {
    background: ${({$active:t})=>t?"var(--accent)":"var(--bg-secondary)"};
    border-color: ${({$active:t})=>t?"var(--accent)":"var(--text-tertiary)"};
  }
`,Z0=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,za=o.button`
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
`,ep=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
  flex-shrink: 0;
`,tp=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Ba=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,np=o.div``,rp=o(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,ap=o.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,ip=o(y.div)`
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
`,op=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:t})=>{switch(t){case"bank_credit":return`
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
          color: #10b981;
        `;case"bank_debit":return`
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
          color: #f59e0b;
        `;case"investment_credit":return`
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%);
          color: #8b5cf6;
        `;case"investment_debit":return`
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
          color: #3b82f6;
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
`,sp=o.div`
  flex: 1;
  min-width: 0;
`,lp=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,cp=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,dp=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,pp=o.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,xp=o.div`
  display: flex;
  gap: 4px;
`,Ra=o(y.button)`
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
`,up=o(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,hp=o.div`
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
`,fp=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,gp=o.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,mp=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Zn=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,er=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Ha=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Ya=o(y.button)`
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
`,Ga=o.div`
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
`,Va=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Qa=o.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,Ua=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,yp=o.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,vp=o.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,bp=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,qa=o(y.button)`
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
`,Ka=o.div`
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
`,Xa=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Ja=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,jp=t=>{switch(t){case"bank_credit":return c0();case"bank_debit":return Pa();case"investment_credit":return d0();case"investment_debit":return p0();default:return Pa()}},wp=t=>C0.includes(t),kp=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},Za=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),St=t=>{const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},$p=t=>t.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Sp=[{key:"1m",label:"Last 1M"},{key:"3m",label:"Last 3M"},{key:"6m",label:"Last 6M"}],Cp=h.memo(function({quickFilter:n,onQuickFilterChange:a,filterStartDate:r,onStartDateChange:i,filterEndDate:s,onEndDateChange:l,onResetFilters:d}){const[f,c]=h.useState(!1),[x,g]=h.useState(!1),u=h.useRef(null),m=h.useRef(null);return e.jsxs(K0,{children:[e.jsx(X0,{children:Sp.map(({key:v,label:w})=>e.jsx(J0,{type:"button",$active:n===v,onClick:()=>n===v?d():a(v),children:w},v))}),e.jsxs(Z0,{children:[e.jsxs(za,{ref:u,type:"button",onClick:()=>c(!0),children:[Za(r),e.jsx(_a,{})]}),e.jsx(Yt,{isOpen:f,onClose:()=>c(!1),selectedDate:r,onDateSelect:v=>{i(v),c(!1)},triggerRef:u}),e.jsx(ep,{children:"to"}),e.jsxs(za,{ref:m,type:"button",onClick:()=>g(!0),children:[Za(s),e.jsx(_a,{})]}),e.jsx(Yt,{isOpen:x,onClose:()=>g(!1),selectedDate:s,onDateSelect:v=>{l(v),g(!1)},triggerRef:m})]})]})}),Tp=h.memo(function({groupedTransactions:n,activeFilterCount:a,onEditTransaction:r,onDeleteTransaction:i}){const s=Object.keys(n).sort((l,d)=>d.localeCompare(l));return s.length===0?e.jsx(Ba,{children:e.jsxs(up,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx(hp,{children:e.jsx(w0,{})}),e.jsx(fp,{children:"No Transactions"}),e.jsx(gp,{children:a>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):e.jsx(Ba,{children:e.jsx(np,{children:e.jsx(Z,{mode:"popLayout",children:s.map(l=>e.jsxs(rp,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:_e},children:[e.jsx(ap,{children:kp(l)}),n[l].map(d=>{const f=Il(d.accountId),c=wp(d.type);return e.jsxs(ip,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:_e},children:[e.jsx(op,{$type:d.type,children:jp(d.type)}),e.jsxs(sp,{children:[e.jsx(lp,{children:d.description}),e.jsx(cp,{children:(f==null?void 0:f.name)||"Unknown Account"})]}),e.jsxs(dp,{children:[e.jsxs(pp,{$positive:c,children:[c?"+":"-",xn(d.amount)]}),e.jsxs(xp,{children:[e.jsx(Ra,{onClick:()=>r(d),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx($0,{})}),e.jsx(Ra,{$danger:!0,onClick:()=>i(d.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(k0,{})})]})]})]},d.id)})]},l))})})})});function tr(t){const n=new Date(t+"T00:00:00");return St(new Date(n.getFullYear(),n.getMonth(),1))}function ln(t){const n=new Date(t+"T00:00:00"),a=new Date;return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()?St(a):St(new Date(n.getFullYear(),n.getMonth()+1,0))}function Dp(t,n){const a=new Date(n+"T00:00:00");switch(t){case"1m":return St(new Date(a.getFullYear(),a.getMonth(),1));case"3m":return St(new Date(a.getFullYear(),a.getMonth()-2,1));case"6m":return St(new Date(a.getFullYear(),a.getMonth()-5,1))}}function Ap(t,n){const[a,r]=h.useState(()=>tr(n)),[i,s]=h.useState(()=>ln(n)),[l,d]=h.useState("1m"),f=h.useRef(n);h.useEffect(()=>{f.current!==n&&(f.current=n,d("1m"),r(tr(n)),s(ln(n)))},[n]);const c=h.useCallback(b=>{r(b),d(null)},[]),x=h.useCallback(b=>{s(b),d(null)},[]),g=h.useCallback(b=>{d(b),r(Dp(b,n)),s(ln(n))},[n]),{filteredTransactions:u,groupedTransactions:m,activeFilterCount:v}=h.useMemo(()=>{let b=t.filter(C=>C.date>=a&&C.date<=i);b=b.sort((C,L)=>{const O=L.date.localeCompare(C.date);return O!==0?O:L.id.localeCompare(C.id)});const k=$p(b);return{filteredTransactions:b,groupedTransactions:k,activeFilterCount:l==="1m"?0:1}},[t,a,i,l]),w=h.useCallback(()=>{d("1m"),r(tr(n)),s(ln(n))},[n]);return{filterStartDate:a,setFilterStartDate:c,filterEndDate:i,setFilterEndDate:x,quickFilter:l,setQuickFilter:g,filteredTransactions:u,groupedTransactions:m,activeFilterCount:v,resetFilters:w}}const Ip=h.memo(function({transactions:n,selectedDate:a,onEditTransaction:r,onDeleteTransaction:i}){const{filterStartDate:s,setFilterStartDate:l,filterEndDate:d,setFilterEndDate:f,quickFilter:c,setQuickFilter:x,groupedTransactions:g,activeFilterCount:u,resetFilters:m}=Ap(n,a);return e.jsxs(tp,{children:[e.jsx(Cp,{quickFilter:c,onQuickFilterChange:x,filterStartDate:s,onStartDateChange:l,filterEndDate:d,onEndDateChange:f,onResetFilters:m}),e.jsx(Tp,{groupedTransactions:g,activeFilterCount:u,onEditTransaction:r,onDeleteTransaction:i})]})}),Mp=h.memo(function({onAddTransaction:n}){return e.jsx(V0,{children:e.jsx(Qd,{onAddTransaction:n})})}),Lp=h.memo(function({transactionsCount:n,onOpenBalanceModal:a,onExport:r,onImport:i}){return e.jsxs(mp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:_e},children:[e.jsxs(Zn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:_e},children:[e.jsx(er,{children:"Configuration"}),e.jsx(Ha,{children:e.jsxs(Ya,{onClick:a,whileTap:{scale:.99},children:[e.jsx(Ga,{$color:"#007AFF",children:e.jsx(x0,{})}),e.jsxs(Va,{children:[e.jsx(Qa,{children:"Initial Balances"}),e.jsx(Ua,{children:"Set starting balances for all accounts"})]}),e.jsx(yp,{children:e.jsx(S0,{})})]})})]}),e.jsxs(Zn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:_e},children:[e.jsx(er,{children:"Data"}),e.jsxs(bp,{children:[e.jsxs(qa,{type:"button",$variant:"export",onClick:r,whileTap:{scale:.97},children:[e.jsx(Ka,{$color:"#34C759",children:e.jsx(b0,{})}),e.jsx(Xa,{children:"Export"}),e.jsx(Ja,{children:"Save backup file"})]}),e.jsxs(qa,{type:"button",$variant:"import",onClick:i,whileTap:{scale:.97},children:[e.jsx(Ka,{$color:"#007AFF",children:e.jsx(j0,{})}),e.jsx(Xa,{children:"Import"}),e.jsx(Ja,{children:"Restore from file"})]})]})]}),e.jsxs(Zn,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:_e},children:[e.jsx(er,{children:"About"}),e.jsx(Ha,{children:e.jsxs(Ya,{as:"div",style:{cursor:"default"},children:[e.jsx(Ga,{$color:"#8E8E93",children:e.jsx(g0,{})}),e.jsxs(Va,{children:[e.jsx(Qa,{children:"Transactions"}),e.jsx(Ua,{children:"Total records stored"})]}),e.jsx(vp,{children:n})]})})]})]})});function Op(){const[t,n]=h.useState([]),[a,r]=h.useState({}),i=h.useRef(null);h.useEffect(()=>{n(wl()),r(kl())},[]);const s=h.useCallback(u=>{n(m=>{const v=[...m,u];return requestAnimationFrame(()=>nn(v)),v})},[]),l=h.useCallback(u=>{n(m=>{const v=m.filter(w=>w.id!==u);return requestAnimationFrame(()=>nn(v)),v})},[]),d=h.useCallback(u=>{n(m=>{const v=m.map(w=>w.id===u.id?u:w);return requestAnimationFrame(()=>nn(v)),v})},[]),f=h.useCallback(u=>{r(u),requestAnimationFrame(()=>ha(u))},[]),c=h.useCallback(()=>{Ll(t,a)},[t,a]),x=h.useCallback(()=>{var u;(u=i.current)==null||u.click()},[]),g=h.useCallback(u=>{var w;const m=(w=u.target.files)==null?void 0:w[0];if(!m)return;const v=new FileReader;v.onload=b=>{var C;const k=(C=b.target)==null?void 0:C.result,$=Pl(k);$?window.confirm(`Import backup from ${new Date($.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${$.transactions.length} transactions

This action cannot be undone.`)&&(n($.transactions),r($.initialBalances),nn($.transactions),ha($.initialBalances)):alert("Invalid backup file.")},v.readAsText(m),u.target.value=""},[]);return{transactions:t,initialBalances:a,addTransaction:s,deleteTransaction:l,updateTransaction:d,saveInitialData:f,handleExport:c,handleImportClick:x,fileInputRef:i,handleFileChange:g}}function Pp(){const[t,n]=h.useState("summary"),[[,a],r]=h.useState([0,0]),i=h.useCallback(l=>{const d=nt.findIndex(c=>c.id===l),f=nt.findIndex(c=>c.id===t);r([d,d>f?1:-1]),n(l),window.scrollTo(0,0)},[t]),s=h.useCallback((l,d)=>{const x=nt.findIndex(g=>g.id===t);(d.offset.x<-50||d.velocity.x<-500)&&x<nt.length-1?i(nt[x+1].id):(d.offset.x>50||d.velocity.x>500)&&x>0&&i(nt[x-1].id)},[t,i]);return{activeTab:t,direction:a,handleTabChange:i,handleDragEnd:s}}const _p=()=>{const[t,n]=h.useState(at(new Date)),[a,r]=h.useState(!1),[i,s]=h.useState(null),{transactions:l,initialBalances:d,addTransaction:f,deleteTransaction:c,updateTransaction:x,saveInitialData:g,handleExport:u,handleImportClick:m,fileInputRef:v,handleFileChange:w}=Op(),{activeTab:b,direction:k,handleTabChange:$,handleDragEnd:C}=Pp(),L=h.useMemo(()=>Cl(l,t,d),[t,l,d]),O=A=>{f(A),$("transactions")},T=()=>{switch(b){case"summary":return e.jsx(E0,{balances:L});case"transactions":return e.jsx(Ip,{transactions:l,selectedDate:t,onEditTransaction:s,onDeleteTransaction:c});case"add":return e.jsx(Mp,{onAddTransaction:O});case"manage":return e.jsx(Lp,{transactionsCount:l.length,onOpenBalanceModal:()=>r(!0),onExport:u,onImport:m});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(W0,{children:e.jsxs(z0,{children:[e.jsx(B0,{children:e.jsx(Bd,{selectedDate:t,onDateChange:n})}),e.jsx(U0,{children:nt.map(A=>e.jsx(q0,{$active:b===A.id,onClick:()=>$(A.id),whileTap:{scale:.98},children:A.label},A.id))})]})}),e.jsxs(N0,{variants:T0,initial:"hidden",animate:"visible",children:[e.jsx(H0,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:C,children:e.jsxs(Si,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(R0,{}),e.jsx(Y0,{style:{flex:1},children:e.jsx(Z,{mode:"wait",custom:k,children:e.jsx(G0,{custom:k,variants:D0,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:T()},b)})})]})}),e.jsx(Q0,{ref:v,type:"file",accept:".json",onChange:w}),e.jsx(Jd,{isOpen:a,onClose:()=>r(!1),initialBalances:d,onSave:g}),e.jsx(t0,{isOpen:!!i,onClose:()=>s(null),transaction:i,onSave:x})]})]})},ho=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),Fp=async(t,n,a,r=48)=>{try{const i=await ho(),s=Math.min(n,a)*.03,l=n-r-s,d=a-r-s;t.globalAlpha=.7,t.drawImage(i,l,d,r,r),t.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},jr=(t,n,a)=>{const r=[],i=d=>{const f=[];let c=d;for(;c.length>0;){let x=c.length;for(;x>0&&t.measureText(c.slice(0,x)).width>a;)x--;x=Math.max(1,x);const g=c.slice(0,x),u=g.lastIndexOf("/"),m=g.lastIndexOf("-"),v=g.lastIndexOf(".");let w=x;const b=[u,m,v].filter(k=>k>0&&k<x-1);b.length>0&&(w=Math.max(...b)+1),f.push(c.slice(0,w)),c=c.slice(w)}return f},s=n.split(" ");let l="";for(const d of s)if(t.measureText(d).width>a){l&&(r.push(l),l="");const c=i(d);for(let x=0;x<c.length;x++)x<c.length-1?r.push(c[x]):l=c[x]}else{const c=l?`${l} ${d}`:d;t.measureText(c).width>a&&l?(r.push(l),l=d):l=c}return l&&r.push(l),r},Ep=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:i,backgroundColor:s,alignment:l,aspectRatio:d,padding:f}=t,c=document.createElement("canvas");c.width=d.width,c.height=d.height;const x=c.getContext("2d");if(!x)throw new Error("Failed to get canvas context");x.fillStyle=s,x.fillRect(0,0,c.width,c.height);const g=a*(d.width/1080);x.font=`600 ${g}px ${r}`,x.fillStyle=i;const u=f*(d.width/1080),m=c.width-u*2,v=n.split(`
`),w=[];for(const O of v)if(O.trim()==="")w.push("");else{const T=jr(x,O,m);w.push(...T)}const b=g*1.4,k=w.length*b;let $=(c.height-k)/2+g;x.textAlign=l;let C;switch(l){case"left":C=u;break;case"right":C=c.width-u;break;default:C=c.width/2}for(const O of w)O!==""&&x.fillText(O,C,$),$+=b;const L=Math.min(c.width,c.height)*.06;return await Fp(x,c.width,c.height,L),c.toDataURL("image/png",1)},Np=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:i}=t,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const l=s.getContext("2d");if(!l)throw new Error("Failed to get canvas context");const d=a.width/1080,f=a.height>a.width,c=r==="#000000"?"#ffffff":"#000000",x=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";l.fillStyle=r,l.fillRect(0,0,s.width,s.height);const g=64*d,u=s.width-g*2,m=20*d,v=36*d,w=(f?44:40)*d,b=(f?24:22)*d,k=18*d,$=w*1.25,C=b*1.45,L=f?5:4,O=f?4:3;l.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const T=jr(l,n.title,u),A=T.slice(0,L);if(T.length>L&&A.length>0){const z=A[A.length-1];z.endsWith("...")||(A[A.length-1]=z.slice(0,-3)+"...")}l.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`;const S=n.description?jr(l,n.description,u):[],N=S.slice(0,O);if(S.length>O&&N.length>0){const z=N[N.length-1];z.endsWith("...")||(N[N.length-1]=z.slice(0,-3)+"...")}const R=v+m,K=A.length*$,ee=N.length>0?m+N.length*C:0,oe=R+K+ee,X=Math.min(s.width,s.height)*.045,j=g+X+16*d,_=s.height-j-g,V=_-oe-m*2;let le=0;if(n.image&&V>100*d){const z=f?s.width*.5:s.width*.4,we=120*d;le=Math.min(z,Math.max(we,V))}const de=le>0?m+le:0,U=oe+de;let H=g+Math.max(0,(_-U)/2);if(n.favicon)try{const z=await ei(n.favicon);l.save(),l.beginPath(),l.arc(g+v/2,H+v/2,v/2,0,Math.PI*2),l.closePath(),l.clip(),l.drawImage(z,g,H,v,v),l.restore()}catch{l.fillStyle=i,l.beginPath(),l.arc(g+v/2,H+v/2,v/2,0,Math.PI*2),l.fill()}n.siteName&&(l.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=x,l.textAlign="left",l.textBaseline="middle",l.fillText(n.siteName,g+v+10*d,H+v/2)),H+=v+m,l.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=c,l.textAlign="left",l.textBaseline="top";for(const z of A)l.fillText(z,g,H),H+=$;if(N.length>0){H+=m,l.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=x;for(const z of N)l.fillText(z,g,H),H+=C}if(n.image&&le>0){H+=m;try{const z=await ei(n.image),we=u;l.save(),Wp(l,g,H,we,le,10*d),l.clip();const Ve=z.width/z.height,Ie=we/le;let ve=0,ct=0,Qe=z.width,Ee=z.height;Ve>Ie?(Qe=z.height*Ie,ve=(z.width-Qe)/2):(Ee=z.width/Ie,ct=(z.height-Ee)/2),l.drawImage(z,ve,ct,Qe,Ee,g,H,we,le),l.restore()}catch{}}const ye=s.height-g;l.font=`500 ${k}px -apple-system, BlinkMacSystemFont, monospace`,l.fillStyle=i;const se=u-X-16*d;let ge=n.url;for(;l.measureText(ge).width>se&&ge.length>20;)ge=ge.slice(0,-4)+"...";l.textAlign="left",l.textBaseline="middle",l.fillText(ge,g,ye-X/2);try{const z=await ho();l.globalAlpha=.7,l.drawImage(z,s.width-g-X,ye-X,X,X),l.globalAlpha=1}catch{}return s.toDataURL("image/png",1)},ei=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),Wp=(t,n,a,r,i,s)=>{t.beginPath(),t.moveTo(n+s,a),t.lineTo(n+r-s,a),t.quadraticCurveTo(n+r,a,n+r,a+s),t.lineTo(n+r,a+i-s),t.quadraticCurveTo(n+r,a+i,n+r-s,a+i),t.lineTo(n+s,a+i),t.quadraticCurveTo(n,a+i,n,a+i-s),t.lineTo(n,a+s),t.quadraticCurveTo(n,a,n+s,a),t.closePath()},zp=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},Bp=async t=>{var i,s;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const l=`https://api.microlink.io?url=${encodeURIComponent(t)}`,d=await fetch(l);if(!d.ok)return r;const f=await d.json();return f.status==="success"&&f.data?{title:f.data.title||a,description:f.data.description||"",image:((i=f.data.image)==null?void 0:i.url)||null,siteName:f.data.publisher||a,url:t,favicon:((s=f.data.logo)==null?void 0:s.url)||r.favicon}:r}catch(l){return console.warn("Failed to fetch URL metadata:",l),r}},ti=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],Rp='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',Hp=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},Yp=o.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,Gp=o.div`
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
`,Vp=o.div`
  width: 100%;
  max-width: 600px;
`,Qp=o.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,Up=o.div`
  position: absolute;
  inset: 0;
`,qp=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,Kp=o(y.div)`
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
`,Xp=o.div`
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
`,Jp=o.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Nt=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wt=o.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,Zp=o.textarea`
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
`,ni=o.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,ri=o.button`
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
`,ex=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,tx=o.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,nx=o.input`
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
`,rx=o.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,ax=o(y.button)`
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
`,ix=o(y.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ox=o.input`
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
`,sx=o.textarea`
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
`,lx=o(y.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,cx=o(y.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,dx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),px=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),xx=()=>{const{isDark:t}=$r(),[n,a]=h.useState(""),[r,i]=h.useState(64),[s,l]=h.useState("left"),[d,f]=h.useState(ti[1]),[c,x]=h.useState(null),[g,u]=h.useState(!1),[m,v]=h.useState(null),[w,b]=h.useState(""),[k,$]=h.useState(""),[C,L]=h.useState(!1),[O,T]=h.useState(null),A=h.useMemo(()=>Hp(n),[n]),S=t?"#000000":"#ffffff",N=t?"#ffffff":"#000000",R=`${d.height/d.width*100}%`,K=h.useCallback(async()=>{if(!(!A||!n.trim())){L(!0),T(null),x(null);try{const j=await Bp(n.trim());v(j),b(j.title),$(j.description)}catch{T("Unable to fetch URL preview")}L(!1)}},[n,A]),ee=h.useCallback(async()=>{if(!n.trim()||A){A||x(null);return}u(!0);try{const j=await Ep({text:n.trim(),fontSize:r,fontFamily:Rp,textColor:N,backgroundColor:S,alignment:s,aspectRatio:d,padding:80});x(j)}catch(j){console.error("Preview generation failed:",j)}u(!1)},[n,A,r,s,d,S,N]),oe=h.useCallback(async()=>{if(m){u(!0);try{const j=await Np({metadata:{...m,title:w||m.title,description:k||m.description},aspectRatio:d,backgroundColor:S,accentColor:"#2A9D8F"});x(j)}catch(j){console.error("URL preview generation failed:",j)}u(!1)}},[m,w,k,d,S]);h.useEffect(()=>{if(A)return;const j=setTimeout(ee,200);return()=>clearTimeout(j)},[ee,A]),h.useEffect(()=>{A?K():(v(null),b(""),$(""),T(null))},[A,K]),h.useEffect(()=>{m&&oe()},[m,w,k,d,oe]);const X=()=>{if(c){const V=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;zp(c,V)}};return e.jsxs(Yp,{children:[e.jsx(Gp,{children:e.jsx(Vp,{children:e.jsx(Qp,{$bgColor:S,$paddingBottom:R,children:e.jsxs(Up,{children:[c&&e.jsx(qp,{src:c,alt:"Preview"}),e.jsx(Z,{children:!c&&e.jsxs(Kp,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(px,{}),e.jsx("span",{children:A?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(Xp,{children:e.jsxs(Jp,{children:[e.jsxs(Nt,{children:[e.jsx(Wt,{children:"Content"}),e.jsx(Zp,{value:n,onChange:j=>a(j.target.value),onContextMenu:j=>j.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),A?e.jsxs(e.Fragment,{children:[C&&e.jsx(Nt,{style:{alignItems:"center"},children:e.jsx(cx,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),O&&e.jsx(lx,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:O}),m&&e.jsxs(ix,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(Wt,{children:"Edit Details"}),e.jsx(ox,{value:w,onChange:j=>b(j.target.value),placeholder:"Title"}),e.jsx(sx,{value:k,onChange:j=>$(j.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Nt,{children:[e.jsx(Wt,{children:"Font Size"}),e.jsxs(ex,{children:[e.jsx(tx,{children:e.jsx(nx,{type:"range",min:"24",max:"120",value:r,onChange:j=>i(Number(j.target.value))})}),e.jsx(rx,{children:r})]})]}),e.jsxs(Nt,{children:[e.jsx(Wt,{children:"Alignment"}),e.jsx(ni,{children:["left","center","right"].map(j=>e.jsx(ri,{$active:s===j,onClick:()=>l(j),children:j.charAt(0).toUpperCase()+j.slice(1)},j))})]})]}),e.jsxs(Nt,{children:[e.jsx(Wt,{children:"Format"}),e.jsx(ni,{children:ti.map(j=>e.jsx(ri,{$active:d.id===j.id,onClick:()=>f(j),children:j.name},j.id))})]}),e.jsxs(ax,{onClick:X,disabled:!c||g,whileTap:{scale:.98},children:[e.jsx(dx,{}),"Download Image"]})]})})]})},ux=o(y.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,hx={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},fx=()=>e.jsx(ux,{variants:hx,initial:"hidden",animate:"visible",children:e.jsx(xx,{})}),p={bg:"#FFF8F0",bgAlt:"#FDE8EE",card:"#FFFFFF",cardBorder:"rgba(196, 69, 105, 0.10)",textPrimary:"#2D1B30",textSecondary:"#6B4D5E",textMuted:"#B8929E",accent:"#C44569",accentSoft:"#E8758A",blush:"#F5C6D0",softPink:"#FDE8EE",warmGold:"#C9956B",gold:"#E8C496",goldLight:"#F5E6D0",lavender:"#F0E6F6"},D={display:"'Playfair Display', Georgia, serif",body:"'Cormorant Garamond', 'Times New Roman', serif",script:"'Dancing Script', cursive"},fo="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",B={gentle:[.25,.1,.25,1],cinematic:[.16,1,.3,1]},gx=bi`
  @import url('${fo}');
`,mx=M`
  0%, 100% { transform: translateY(0) rotate(-8deg); }
  50% { transform: translateY(-18px) rotate(4deg); }
`,yx=M`
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-14px) rotate(-6deg); }
`,vx=o.div`
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(165deg, ${p.bg} 0%, ${p.bgAlt} 45%, ${p.bg} 100%);
  color: ${p.textPrimary};
  font-family: ${D.body};
  font-size: 20px;
  line-height: 1.7;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`,ot=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),bx=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  color: ${p.blush};
  opacity: 0.18;
  pointer-events: none;
  animation: ${t=>t.$anim==="a"?mx:yx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`,jx=[{x:"6%",y:"8%",size:38,anim:"a",dur:9,delay:0},{x:"88%",y:"14%",size:26,anim:"b",dur:11,delay:2},{x:"12%",y:"78%",size:30,anim:"b",dur:10,delay:1},{x:"82%",y:"72%",size:22,anim:"a",dur:8,delay:3},{x:"48%",y:"3%",size:18,anim:"a",dur:12,delay:5},{x:"93%",y:"46%",size:32,anim:"b",dur:9,delay:4},{x:"3%",y:"42%",size:20,anim:"a",dur:10,delay:6},{x:"72%",y:"90%",size:24,anim:"b",dur:11,delay:2}],wx=()=>e.jsx(e.Fragment,{children:jx.map((t,n)=>e.jsx(bx,{$x:t.x,$y:t.y,$size:t.size,$anim:t.anim,$dur:t.dur,$delay:t.delay,children:e.jsx(ot,{})},n))}),kx=o(y.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,$x=o(y.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`,Sx=o(y.button)`
  font-family: ${D.body};
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.03em;
  color: ${p.accent};
  background: ${p.card};
  border: 1.5px solid ${p.blush};
  padding: 16px 44px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 4px 20px rgba(196, 69, 105, 0.12);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.2s ease;

  &:hover {
    border-color: ${p.accent};
    box-shadow: 0 6px 28px rgba(196, 69, 105, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,Gt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${p.blush};
  margin: 24px 0;

  &::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${p.blush}, transparent);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Cx={enter:{opacity:0},center:{opacity:1,transition:{duration:1,ease:[.25,.1,.25,1]}},exit:{opacity:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},Tx=o.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;function Dx(t,n,a,r){t.save(),t.translate(n,a);const i=r/2;t.beginPath(),t.moveTo(0,i*.4),t.bezierCurveTo(-i*.05,-i*.2,-i*.7,-i*.4,-i*.7,i*.05),t.bezierCurveTo(-i*.7,i*.4,0,i*.7,0,i),t.bezierCurveTo(0,i*.7,i*.7,i*.4,i*.7,i*.05),t.bezierCurveTo(i*.7,-i*.4,i*.05,-i*.2,0,i*.4),t.closePath(),t.fill(),t.restore()}function Ax(t,n,a,r){const i=r/2,s=i*.3;t.beginPath();for(let l=0;l<4;l++){const d=l*Math.PI/2;t.lineTo(n+Math.cos(d)*i,a+Math.sin(d)*i);const f=d+Math.PI/4;t.lineTo(n+Math.cos(f)*s,a+Math.sin(f)*s)}t.closePath(),t.fill()}const ai=[p.accent,p.accentSoft,p.blush,p.warmGold,p.gold];function ii(t,n,a){const r=ai[Math.floor(Math.random()*ai.length)],i=Math.random()>.55;if(t==="ambient")return{x:Math.random()*n,y:a+20,vx:(Math.random()-.5)*.5,vy:-(Math.random()*.8+.3),size:Math.random()*14+6,opacity:Math.random()*.35+.15,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.02,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*500+350};if(t==="burst"){const s=Math.random()*Math.PI*2,l=Math.random()*5+2;return{x:n/2,y:a/2,vx:Math.cos(s)*l,vy:Math.sin(s)*l,size:Math.random()*18+8,opacity:.9,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.06,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*100+60}}return{x:Math.random()*n,y:-20,vx:(Math.random()-.5)*1.2,vy:Math.random()*1.8+.8,size:Math.random()*20+8,opacity:Math.random()*.5+.25,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.03,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*350+200}}const Ae=({mode:t,density:n})=>{const a=h.useRef(null);return h.useEffect(()=>{const r=a.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let s,l=[];const d=n??(t==="ambient"?30:t==="burst"?70:90),f=t==="ambient"?.2:t==="burst"?0:.7,c=()=>{const g=window.devicePixelRatio||1;r.width=r.offsetWidth*g,r.height=r.offsetHeight*g,i.setTransform(g,0,0,g,0,0)};if(c(),window.addEventListener("resize",c),t==="burst")for(let g=0;g<d;g++)l.push(ii("burst",r.offsetWidth,r.offsetHeight));const x=()=>{i.clearRect(0,0,r.offsetWidth,r.offsetHeight),t!=="burst"&&l.length<d&&Math.random()<f&&l.push(ii(t,r.offsetWidth,r.offsetHeight));for(let g=l.length-1;g>=0;g--){const u=l[g];u.x+=u.vx,u.y+=u.vy,u.rotation+=u.rotationSpeed,u.life++,t==="burst"&&(u.vx*=.96,u.vy*=.96,u.vy+=.04);const m=u.life/u.maxLife,v=m>.7?u.opacity*(1-(m-.7)/.3):u.opacity;if(u.life>=u.maxLife){l.splice(g,1);continue}i.save(),i.globalAlpha=Math.max(0,v),i.fillStyle=u.color,i.translate(u.x,u.y),i.rotate(u.rotation),u.type==="heart"?Dx(i,0,0,u.size):(i.shadowBlur=u.size*.8,i.shadowColor=u.color,Ax(i,0,0,u.size*.5)),i.restore()}s=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",c)}},[t,n]),e.jsx(Tx,{ref:a})},go=22,mo=.88,Vt=go*mo,Ix=M`
  0% { transform: translateX(0); }
  ${mo*100}% { transform: translateX(-160px); }
  100% { transform: translateX(-160px); }
`,oi=M`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
`,Mx=M`
  0%, 100% { transform: scaleX(1) skewX(0deg); }
  30% { transform: scaleX(1.05) skewX(3deg); }
  70% { transform: scaleX(0.95) skewX(-2deg); }
`,Lx=M`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-12deg); }
  75% { transform: rotate(12deg); }
`,Ox=M`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(12deg); }
  75% { transform: rotate(-12deg); }
`,Px=M`
  0% { transform: translateX(500px); }
  100% { transform: translateX(-500px); }
`,_x=o.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%) perspective(600px) rotateX(2deg);
  width: min(94vw, 520px);
  height: 240px;
  pointer-events: none;
  z-index: 0;
`,Fx=o.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 4px 12px rgba(45, 27, 48, 0.08));
`,Ex=o.g`
  animation: ${Ix} ${go}s cubic-bezier(0.22, 0.6, 0.36, 1) forwards;
`,Nx=o.g`
  animation: ${oi} 0.6s ease-in-out;
  animation-duration: ${Vt}s;
  animation-timing-function: ease-in-out;
  animation-name: ${oi};
  animation-iteration-count: ${Math.floor(Vt/.6)};
  animation-fill-mode: forwards;
`,Wx=o.g`
  animation: ${Mx} 0.8s ease-in-out;
  animation-iteration-count: ${Math.floor(Vt/.8)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,zx=o.g`
  animation: ${Lx} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(Vt/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,Bx=o.g`
  animation: ${Ox} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(Vt/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,Rx=o.g`
  animation: ${Px} 14s linear 5s forwards;
`,Le=p.accent,fe=p.warmGold,q=p.textMuted,ce=p.blush,Hx=({storyDone:t})=>e.jsx(_x,{style:{opacity:t?0:.55,transition:"opacity 1.5s ease"},children:e.jsxs(Fx,{viewBox:"0 0 520 240",fill:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:p.softPink,stopOpacity:"0.15"}),e.jsx("stop",{offset:"100%",stopColor:p.bgAlt,stopOpacity:"0.05"})]}),e.jsxs("linearGradient",{id:"platform",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:q,stopOpacity:"0.6"}),e.jsx("stop",{offset:"100%",stopColor:q,stopOpacity:"0.35"})]}),e.jsxs("linearGradient",{id:"canopy",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:q,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"pillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:q,stopOpacity:"0.5"}),e.jsx("stop",{offset:"50%",stopColor:q,stopOpacity:"0.35"}),e.jsx("stop",{offset:"100%",stopColor:q,stopOpacity:"0.5"})]}),e.jsxs("linearGradient",{id:"trainBody",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:fe,stopOpacity:"0.7"}),e.jsx("stop",{offset:"100%",stopColor:p.gold,stopOpacity:"0.4"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("rect",{x:"0",y:"0",width:"520",height:"240",fill:"url(#sky)"}),e.jsx("rect",{x:"5",y:"40",width:"36",height:"80",rx:"2",fill:q,opacity:"0.18"}),e.jsx("rect",{x:"12",y:"48",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"22",y:"48",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"12",y:"62",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"46",y:"55",width:"28",height:"65",rx:"2",fill:q,opacity:"0.15"}),e.jsx("rect",{x:"52",y:"62",width:"6",height:"8",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"80",y:"28",width:"32",height:"92",rx:"2",fill:q,opacity:"0.2"}),e.jsx("rect",{x:"86",y:"36",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"98",y:"36",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"86",y:"52",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"98",y:"52",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.13"}),e.jsx("rect",{x:"410",y:"42",width:"30",height:"78",rx:"2",fill:q,opacity:"0.18"}),e.jsx("rect",{x:"416",y:"50",width:"7",height:"9",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"427",y:"50",width:"7",height:"9",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"446",y:"30",width:"38",height:"90",rx:"2",fill:q,opacity:"0.22"}),e.jsx("rect",{x:"452",y:"38",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"464",y:"38",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"452",y:"54",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"490",y:"58",width:"24",height:"62",rx:"2",fill:q,opacity:"0.15"}),e.jsxs(Rx,{children:[e.jsx("rect",{x:"0",y:"68",width:"160",height:"38",rx:"10",fill:"url(#trainBody)"}),e.jsx("rect",{x:"0",y:"68",width:"160",height:"6",rx:"3",fill:fe,opacity:"0.4"}),[0,1,2,3,4,5].map(n=>e.jsx("rect",{x:12+n*26,y:"78",width:"18",height:"18",rx:"3",fill:p.goldLight,opacity:"0.5"},n)),e.jsx("rect",{x:"0",y:"100",width:"160",height:"4",rx:"2",fill:q,opacity:"0.3"})]}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",fill:"url(#canopy)"}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",stroke:q,strokeWidth:"3",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M105 82 Q145 52, 260 46 Q375 52, 415 82",stroke:ce,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("rect",{x:"128",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"60",width:"12",height:"90",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"382",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"14",rx:"4",fill:"url(#platform)"}),e.jsx("rect",{x:"95",y:"162",width:"330",height:"3",rx:"1",fill:q,opacity:"0.15"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"3",rx:"1",fill:fe,opacity:"0.3"}),e.jsx("rect",{x:"140",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"162",width:"14",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"368",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("line",{x1:"100",y1:"132",x2:"420",y2:"132",stroke:q,strokeWidth:"1.5",opacity:"0.25"}),[0,1,2,3,4,5,6,7].map(n=>e.jsx("line",{x1:120+n*38,y1:"132",x2:120+n*38,y2:"148",stroke:q,strokeWidth:"1",opacity:"0.2"},`r${n}`)),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",fill:p.card,opacity:"0.55"}),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",stroke:fe,strokeWidth:"1.5",fill:"none",opacity:"0.4"}),e.jsx("text",{x:"260",y:"65",textAnchor:"middle",fontFamily:"sans-serif",fontSize:"13",fontWeight:"700",letterSpacing:"3",fill:Le,opacity:"0.7",children:"MG ROAD"}),e.jsx("rect",{x:"0",y:"218",width:"520",height:"22",rx:"0",fill:q,opacity:"0.08"}),e.jsx("line",{x1:"0",y1:"218",x2:"520",y2:"218",stroke:q,strokeWidth:"1",opacity:"0.2"}),e.jsxs("g",{transform:"translate(195, 78)",children:[e.jsx("ellipse",{cx:"0",cy:"70",rx:"12",ry:"3",fill:q,opacity:"0.18"}),e.jsx("circle",{cx:"0",cy:"0",r:"9",fill:Le}),e.jsx("path",{d:"M-8,-5 Q-9,-10 -3,-12 Q3,-13 8,-9 Q10,-5 8,-3",fill:Le,opacity:"0.8"}),e.jsx("rect",{x:"-3",y:"8",width:"6",height:"6",rx:"1",fill:Le}),e.jsx("path",{d:"M-14,14 Q-15,36 -10,48 L10,48 Q15,36 14,14 Z",fill:Le,opacity:"0.9"}),e.jsx("path",{d:"M-14,16 Q-20,30 -16,42",stroke:Le,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M14,16 Q18,28 17,38",stroke:Le,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M-6,48 L-8,70",stroke:Le,strokeWidth:"5.5",strokeLinecap:"round"}),e.jsx("path",{d:"M6,48 L7,70",stroke:Le,strokeWidth:"5.5",strokeLinecap:"round"})]}),e.jsx(Ex,{children:e.jsx(Nx,{children:e.jsxs("g",{transform:"translate(400, 98)",children:[e.jsx("ellipse",{cx:"0",cy:"50",rx:"9",ry:"3",fill:q,opacity:"0.15"}),e.jsxs(Wx,{children:[e.jsx("path",{d:"M-5,-6 Q-8,-10 -4,-12 Q2,-13 6,-10 Q8,-6 7,-3",fill:fe}),e.jsx("path",{d:"M5,-4 Q10,0 12,10 Q11,18 8,13 Q7,7 5,2",fill:fe,opacity:"0.65"}),e.jsx("path",{d:"M7,-3 Q13,3 15,14 Q13,20 10,11",fill:fe,opacity:"0.4"})]}),e.jsx("circle",{cx:"0",cy:"0",r:"7.5",fill:fe}),e.jsx("rect",{x:"-1.5",y:"7",width:"3",height:"3",rx:"1",fill:fe}),e.jsx("path",{d:"M-8,10 Q-10,18 -8,26 L-3,31 L3,31 L8,26 Q10,18 8,10 Z",fill:fe,opacity:"0.85"}),e.jsx("path",{d:"M-3,29 Q-5,37 -12,50 L12,50 Q5,37 3,29 Z",fill:fe,opacity:"0.65"}),e.jsx(zx,{children:e.jsx("path",{d:"M-8,12 Q-13,20 -11,28",stroke:fe,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})}),e.jsx(Bx,{children:e.jsx("path",{d:"M8,12 Q12,20 10,26",stroke:fe,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})})]})})})]})}),Yx=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Gx=M`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`,Vx=M`
  0% { transform: translateY(0) scale(1); opacity: 0.25; }
  50% { opacity: 0.4; }
  100% { transform: translateY(-100vh) scale(0.6); opacity: 0; }
`,Qx=M`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 0.6; transform: scale(1.2); }
`,Ux=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,qx=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 45%, ${p.blush}50 0%, transparent 100%),
    radial-gradient(ellipse 70% 50% at 30% 20%, ${p.softPink}30 0%, transparent 100%),
    radial-gradient(ellipse 60% 40% at 75% 75%, ${p.goldLight}30 0%, transparent 100%);
`,Kx=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50%;
  background: ${t=>t.$color};
  filter: blur(${t=>t.$size*.4}px);
  animation: ${Gx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,Xx=[{x:"15%",y:"20%",size:120,color:`${p.blush}40`,dur:7,delay:0},{x:"75%",y:"15%",size:90,color:`${p.softPink}35`,dur:9,delay:2},{x:"60%",y:"70%",size:110,color:`${p.goldLight}30`,dur:8,delay:1},{x:"20%",y:"75%",size:80,color:`${p.blush}30`,dur:10,delay:3},{x:"50%",y:"40%",size:160,color:`${p.softPink}20`,dur:6,delay:.5},{x:"85%",y:"50%",size:70,color:`${p.goldLight}25`,dur:11,delay:4},{x:"8%",y:"45%",size:60,color:`${p.lavender}25`,dur:8,delay:2}],Jx=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: -20px;
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50% 0 50% 0;
  background: ${p.blush};
  opacity: 0.25;
  animation: ${Vx} ${t=>t.$dur}s linear ${t=>t.$delay}s infinite;
  pointer-events: none;
`,Zx=[{x:"10%",size:10,dur:12,delay:0},{x:"25%",size:8,dur:14,delay:3},{x:"42%",size:12,dur:11,delay:1},{x:"58%",size:7,dur:15,delay:5},{x:"72%",size:9,dur:13,delay:2},{x:"88%",size:11,dur:12,delay:4},{x:"35%",size:6,dur:16,delay:7},{x:"65%",size:8,dur:14,delay:6}],eu=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${p.warmGold};
  box-shadow: 0 0 6px 2px ${p.warmGold}60;
  animation: ${Qx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,tu=[{x:"12%",y:"18%",dur:3,delay:0},{x:"82%",y:"12%",dur:4,delay:1.5},{x:"22%",y:"82%",dur:3.5,delay:.5},{x:"72%",y:"78%",dur:4.5,delay:2},{x:"48%",y:"8%",dur:3,delay:1},{x:"90%",y:"42%",dur:5,delay:3},{x:"5%",y:"55%",dur:3.5,delay:.8},{x:"65%",y:"25%",dur:4,delay:2.5},{x:"38%",y:"92%",dur:3,delay:1.2},{x:"55%",y:"60%",dur:4.5,delay:.3}],nu=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  width: 100%;
`,ru=o.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`,au=o(y.div)`
  position: absolute;
  font-family: ${D.body};
  font-size: clamp(22px, 5.2vw, 32px);
  font-weight: 500;
  color: ${p.textPrimary};
  line-height: 1.55;
  max-width: 520px;
  padding: 0 20px;
`,nr=o.span`
  color: ${p.accent};
  font-family: ${D.display};
  font-style: italic;
  font-weight: 600;
`,cn=o.span`
  color: ${p.warmGold};
  font-family: ${D.script};
  font-size: 1.15em;
`,iu=o.span`
  color: ${p.textSecondary};
  font-style: italic;
`,ou=M`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(2.5); }
`,su=M`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`,lu=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,cu=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, ${p.warmGold}50 0%, ${p.accent}20 40%, transparent 70%);
  animation: ${ou} 1.8s ease-out forwards;
  animation-play-state: ${t=>t.$visible?"running":"paused"};
  opacity: 0;
  pointer-events: none;
`,du=o(y.div)`
  font-family: ${D.display};
  font-size: clamp(64px, 16vw, 110px);
  font-weight: 600;
  font-style: italic;
  color: ${p.accent};
  text-shadow:
    0 0 40px ${p.accent}30,
    0 4px 20px ${p.accent}15;
  position: relative;
`,pu=o(y.div)`
  width: 80%;
  height: 2px;
  margin-top: 4px;
  background: linear-gradient(90deg, transparent, ${p.warmGold}, transparent);
  transform-origin: center;
  animation: ${su} 0.8s ease-out forwards;
`,xu=o(y.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${p.warmGold}40 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${Yx} 3s ease-in-out infinite;
  -webkit-background-clip: text;
  background-clip: text;
  mix-blend-mode: overlay;
  pointer-events: none;
`,uu=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,hu=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,fu=o(y.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(260px, 70vw, 400px);
  height: clamp(100px, 25vw, 160px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    ${p.warmGold}28 0%,
    ${p.goldLight}15 40%,
    ${p.blush}08 65%,
    transparent 100%
  );
  pointer-events: none;
`,gu=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 clamp(8px, 2vw, 14px);
  position: relative;
`,si=o(y.span)`
  font-family: ${D.body};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: 400;
  font-style: italic;
  color: ${p.textSecondary};
  line-height: 1.4;
`,mu=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(40px, 10vw, 64px);
  font-weight: 700;
  font-style: italic;
  background: linear-gradient(
    90deg,
    ${p.warmGold} 0%,
    ${p.gold} 25%,
    #f5d5a0 50%,
    ${p.gold} 75%,
    ${p.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${uu} 4s linear infinite;
  filter: drop-shadow(0 2px 16px ${p.warmGold}30);
  line-height: 1.2;
`,yu=o(y.span)`
  font-family: ${D.body};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 400;
  font-style: italic;
  color: ${p.textMuted};
  margin-top: 8px;
  letter-spacing: 0.04em;
`,vu=o(y.div)`
  width: clamp(100px, 30vw, 180px);
  height: 1.5px;
  margin-top: 6px;
  background: linear-gradient(90deg, transparent, ${p.warmGold}50, transparent);
  transform-origin: center;
`,bu=M`
  0%, 100% {
    filter: drop-shadow(0 0 12px ${p.accent}40);
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 28px ${p.accent}70);
    transform: scale(1.08);
  }
`,ju=o(y.button)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;
  padding: 16px 32px;

  &:active { transform: scale(0.95); }
`,wu=o.div`
  width: 56px;
  height: 56px;
  color: ${p.accent};
  animation: ${bu} 2.5s ease-in-out infinite;

  svg { width: 100%; height: 100%; }
`,ku=o.span`
  font-family: ${D.body};
  font-size: clamp(16px, 3.5vw, 20px);
  font-weight: 500;
  color: ${p.textMuted};
  letter-spacing: 0.08em;
`,rr=[e.jsxs(e.Fragment,{children:["Twelve years ago,",e.jsx("br",{}),"a boy met an ",e.jsx(nr,{children:"angel"}),"..."]}),e.jsxs(e.Fragment,{children:["She was ",e.jsx(cn,{children:"grace"}),", ",e.jsx(cn,{children:"beauty"}),",",e.jsx("br",{}),"and everything he could never be."]}),e.jsxs(e.Fragment,{children:["She didn't just love him —",e.jsx("br",{}),"she ",e.jsx(nr,{children:"made"})," him who he is."]}),e.jsxs(e.Fragment,{children:["His ",e.jsx(cn,{children:"strength"}),". His ",e.jsx(cn,{children:"inspiration"}),".",e.jsx("br",{}),"His ",e.jsx(nr,{children:"everything"}),"."]}),e.jsx(e.Fragment,{children:e.jsx(iu,{children:"Maa was right all along..."})})],li=4500,ci=1e3,$u=({onComplete:t})=>{const[n,a]=h.useState(-1),[r,i]=h.useState(!1),[s,l]=h.useState(0);return h.useEffect(()=>{const d=[];d.push(setTimeout(()=>a(0),800));for(let c=1;c<rr.length;c++)d.push(setTimeout(()=>a(c),800+c*li));const f=800+rr.length*li;return d.push(setTimeout(()=>{a(-1),i(!0)},f)),()=>d.forEach(clearTimeout)},[]),e.jsxs(Ux,{children:[e.jsx(qx,{}),Xx.map((d,f)=>e.jsx(Kx,{$x:d.x,$y:d.y,$size:d.size,$color:d.color,$dur:d.dur,$delay:d.delay},`b${f}`)),Zx.map((d,f)=>e.jsx(Jx,{$x:d.x,$size:d.size,$dur:d.dur,$delay:d.delay},`p${f}`)),tu.map((d,f)=>e.jsx(eu,{$x:d.x,$y:d.y,$dur:d.dur,$delay:d.delay},`s${f}`)),e.jsx(Ae,{mode:"ambient",density:40}),e.jsx(Hx,{storyDone:r}),e.jsxs(nu,{children:[e.jsx(ru,{style:{opacity:r?0:1,transition:`opacity ${ci}ms ease`},children:rr.map((d,f)=>e.jsx(au,{initial:{opacity:0,y:16,scale:.96},animate:{opacity:n===f?1:0,y:n===f?0:n>f?-16:16,scale:n===f?1:.96},transition:{duration:ci/1e3,ease:B.cinematic},children:d},f))}),e.jsxs(lu,{children:[e.jsx(cu,{$visible:r}),e.jsxs(du,{initial:{opacity:0,scale:1.3,filter:"blur(16px)"},animate:{opacity:r?1:0,scale:r?1:1.3,filter:r?"blur(0px)":"blur(16px)"},transition:{duration:1.6,ease:B.cinematic,delay:r?.3:0},onAnimationComplete:()=>{r&&s===0&&setTimeout(()=>l(1),500)},children:["Riya",r&&e.jsx(xu,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8}})]}),r&&e.jsx(pu,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.3}})]}),e.jsx(y.div,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,ease:B.gentle},children:e.jsx(Gt,{children:e.jsx(ot,{})})}),e.jsxs(hu,{children:[e.jsx(fu,{initial:{opacity:0,scale:.5},animate:{opacity:s>=1?.35:0,scale:s>=1?1.1:.5},transition:{duration:2,ease:B.cinematic}}),e.jsxs(gu,{children:[e.jsx(si,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:B.cinematic,delay:(s>=1,0)},children:"You are"}),e.jsx(si,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:B.cinematic,delay:s>=1?.4:0},children:"my"})]}),e.jsx(mu,{initial:{opacity:0,scale:.7,filter:"blur(8px)"},animate:{opacity:s>=1?1:0,scale:s>=1?1:.7,filter:s>=1?"blur(0px)":"blur(8px)"},transition:{duration:1.4,ease:B.cinematic,delay:s>=1?.8:0},onAnimationComplete:()=>{s===1&&setTimeout(()=>l(2),800)},children:"Luck"}),e.jsx(vu,{initial:{opacity:0,scaleX:0},animate:{opacity:s>=1?1:0,scaleX:s>=1?1:0},transition:{duration:.8,ease:B.gentle,delay:s>=1?1.6:0}}),e.jsx(yu,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,delay:s>=1?2:0},children:"— what Maa always said"})]}),e.jsxs(ju,{initial:{opacity:0,y:20},animate:{opacity:s>=2?1:0,y:s>=2?0:20},transition:{duration:.8,ease:B.gentle},onClick:t,style:{pointerEvents:s>=2?"auto":"none"},children:[e.jsx(wu,{children:e.jsx(ot,{})}),e.jsx(ku,{children:"tap to open"})]})]})]})},zt=[{question:"What year did our story begin?",options:["2013","2014","2015","2016"],correctIndex:1,correctReaction:"Of course you remember. How could you forget?",wrongReaction:"Riya... it's literally the reason this page exists."},{question:"What month did I propose?",options:["January","March","June","December"],correctIndex:1,correctReaction:"March 19th. The best decision I ever made.",wrongReaction:"I'm going to pretend you didn't just say that."},{question:"What was the first movie we watched together?",options:["Queen","Highway","Gunday","2 States"],correctIndex:1,correctReaction:"Highway. Alia, the mountains, and us — just beginning.",wrongReaction:"Hmm, I think your memory needs a little love. It was Highway!"},{question:"What was the first meal I cooked for you?",options:["Maggi","Aloo Paratha","Dal Chawal","Pasta"],correctIndex:1,correctReaction:"Aloo Paratha. Made with love and a little too much oil.",wrongReaction:"It was Aloo Paratha, Riya. The one I was so nervous making!"},{question:"What's my most annoying habit that you secretly love?",options:["Overthinking","Being early","Bad jokes","All of the above"],correctIndex:3,correctReaction:"The fact that you love all of it makes me love you more.",wrongReaction:"Oh come on — it's all of them and you know it."},{question:"How many years has it been today?",options:["10","11","12","Who's counting?"],correctIndex:2,correctReaction:"12 years. And somehow it still feels brand new.",wrongReaction:"12, Riya. TWELVE. And I'd do twelve hundred more."}],dn={perfect:"You know us like the back of your hand. But then again, you've always known my heart better than I do.",great:"Almost perfect — just like us. Not flawless, but absolutely beautiful.",good:"You might have missed a few, but you've never missed a beat when it comes to loving me.",any:"No matter the score, you're still my favourite person in every room, every city, every lifetime."},Su=o(y.div)`
  width: 88px;
  height: 88px;
  margin: 0 auto 12px;
`,Cu=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:p.softPink,stroke:p.accent,strokeWidth:"2"}),e.jsx("circle",{cx:"22",cy:"44",r:"7",fill:p.accentSoft,opacity:"0.5"}),e.jsx("circle",{cx:"58",cy:"44",r:"7",fill:p.accentSoft,opacity:"0.5"}),e.jsx("path",{d:"M24 34 Q30 28 36 34",stroke:p.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M44 34 Q50 28 56 34",stroke:p.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M28 48 Q40 58 52 48",stroke:p.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M40 16 C40 14 36 10 33 13 C30 16 40 22 40 22 C40 22 50 16 47 13 C44 10 40 14 40 16Z",fill:p.accent})]}),Tu=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:p.goldLight,stroke:p.warmGold,strokeWidth:"2"}),e.jsx("circle",{cx:"30",cy:"34",r:"5",fill:p.card}),e.jsx("circle",{cx:"30",cy:"34",r:"2.5",fill:p.textPrimary}),e.jsx("circle",{cx:"50",cy:"34",r:"5",fill:p.card}),e.jsx("circle",{cx:"50",cy:"34",r:"2.5",fill:p.textPrimary}),e.jsx("path",{d:"M44 24 Q50 20 56 24",stroke:p.textPrimary,strokeWidth:"2",strokeLinecap:"round",fill:"none"}),e.jsx("ellipse",{cx:"40",cy:"52",rx:"6",ry:"7",fill:"none",stroke:p.textPrimary,strokeWidth:"2"}),e.jsx("text",{x:"60",y:"22",fill:p.warmGold,fontSize:"16",fontWeight:"bold",fontFamily:"serif",children:"?"})]}),Du=({correct:t})=>e.jsx(Su,{initial:{scale:0,rotate:-20},animate:{scale:1,rotate:t?0:8},transition:{type:"spring",stiffness:260,damping:18},children:t?e.jsx(Cu,{}):e.jsx(Tu,{})}),Au=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Iu=o(y.h2)`
  font-family: ${D.display};
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 500;
  font-style: italic;
  color: ${p.textPrimary};
  margin-bottom: 4px;
  text-align: center;
`,Mu=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 36px;
`,Lu=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:t,$done:n})=>t?p.accent:n?p.blush:p.cardBorder};
  transition: background 0.4s ease, transform 0.3s ease;
  transform: ${({$active:t})=>t?"scale(1.3)":"scale(1)"};
`,Ou=o.div`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Pu=o(y.div)`
  width: 100%;
  background: ${p.card};
  border: 1px solid ${p.cardBorder};
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(196, 69, 105, 0.08);
`,_u=o.h3`
  font-family: ${D.display};
  font-size: clamp(24px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${p.textPrimary};
  margin-bottom: 28px;
  line-height: 1.4;
  text-align: center;
`,Fu=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Eu=o(y.button)`
  font-family: ${D.body};
  font-size: 20px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background 0.35s ease, border-color 0.35s ease, opacity 0.35s ease;

  color: ${({$state:t})=>t==="correct"||t==="wrong"?p.card:p.textPrimary};

  background: ${({$state:t})=>t==="correct"?p.accent:t==="wrong"?"#D4636C":p.softPink};

  border: 1.5px solid ${({$state:t})=>t==="correct"?p.accent:t==="wrong"?"#D4636C":p.blush};

  opacity: ${({$state:t})=>t==="dimmed"?.35:1};
  pointer-events: ${({$state:t})=>t!=="idle"?"none":"auto"};

  &:hover {
    background: ${({$state:t})=>t==="idle"?p.blush:void 0};
    border-color: ${({$state:t})=>t==="idle"?p.accentSoft:void 0};
  }
`,Nu=o(y.div)`
  text-align: center;
  margin-top: 20px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Wu=o.p`
  font-family: ${D.body};
  font-size: 20px;
  font-style: italic;
  color: ${p.textSecondary};
  line-height: 1.6;
  max-width: 380px;
`,zu=o(y.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`,Bu=o.div`
  font-family: ${D.display};
  font-size: clamp(60px, 14vw, 80px);
  font-weight: 700;
  color: ${p.accent};
  margin-bottom: 4px;
`,Ru=o.div`
  font-family: ${D.body};
  font-size: 18px;
  color: ${p.textMuted};
  letter-spacing: 0.06em;
  margin-bottom: 28px;
`,Hu=o.p`
  font-family: ${D.body};
  font-size: 22px;
  font-style: italic;
  color: ${p.textPrimary};
  line-height: 1.7;
  max-width: 420px;
`,Yu=({onComplete:t})=>{const[n,a]=h.useState(0),[r,i]=h.useState(null),[s,l]=h.useState(0),[d,f]=h.useState(!1),[c,x]=h.useState(!1),g=zt[n],u=r===(g==null?void 0:g.correctIndex),m=h.useCallback(b=>{r===null&&(i(b),b===g.correctIndex&&(l(k=>k+1),x(!0),setTimeout(()=>x(!1),1800)),setTimeout(()=>{n<zt.length-1?(a(k=>k+1),i(null)):f(!0)},2600))},[r,n,g]),v=b=>r===null?"idle":b===g.correctIndex?"correct":b===r?"wrong":"dimmed",w=()=>{const b=s/zt.length;return b===1?dn.perfect:b>=.7?dn.great:b>=.4?dn.good:dn.any};return e.jsxs(e.Fragment,{children:[c&&e.jsx(Ae,{mode:"burst"}),e.jsx(Au,{children:e.jsx(Z,{mode:"wait",children:d?e.jsxs(zu,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.8,ease:B.cinematic},children:[e.jsxs(Bu,{children:[s,"/",zt.length]}),e.jsx(Ru,{children:"Your Score"}),e.jsx(Gt,{children:e.jsx(ot,{})}),e.jsx(Hu,{children:w()}),e.jsx(Sx,{onClick:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8},whileTap:{scale:.97},children:"Take me deeper..."})]},"score"):e.jsxs(y.div,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.55,ease:B.gentle},children:[e.jsx(Iu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:"Do you know us?"}),e.jsx(Gt,{children:e.jsx(ot,{})}),e.jsx(Mu,{children:zt.map((b,k)=>e.jsx(Lu,{$active:k===n,$done:k<n},k))}),e.jsxs(Ou,{children:[e.jsxs(Pu,{children:[e.jsx(_u,{children:g.question}),e.jsx(Fu,{children:g.options.map((b,k)=>e.jsx(Eu,{$state:v(k),onClick:()=>m(k),whileTap:r===null?{scale:.98}:void 0,children:b},k))})]}),e.jsx(Z,{children:r!==null&&e.jsxs(Nu,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[e.jsx(Du,{correct:u}),e.jsx(Wu,{children:u?g.correctReaction:g.wrongReaction})]})})]})]},n)})})]})};o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;o(y.div)`
  width: 100%;
  max-width: 460px;
  background: ${p.card};
  border: 1.5px solid ${p.cardBorder};
  border-radius: 28px;
  padding: 44px 28px 36px;
  box-shadow: 0 12px 48px rgba(196, 69, 105, 0.08), 0 2px 8px rgba(196, 69, 105, 0.04);
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${D.display};
  font-size: clamp(140px, 30vw, 200px);
  font-weight: 700;
  color: ${p.softPink};
  pointer-events: none;
  line-height: 1;
  user-select: none;
`;o.div`
  font-family: ${D.display};
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${p.accent};
  background: ${p.softPink};
  padding: 6px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-weight: 500;
  color: ${p.textPrimary};
  line-height: 1.7;
  max-width: 380px;
  position: relative;
  margin-bottom: 16px;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(18px, 4vw, 21px);
  font-style: italic;
  color: ${p.textSecondary};
  line-height: 1.7;
  max-width: 360px;
  position: relative;
`;o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;o(y.button)`
  font-family: ${D.body};
  font-size: 18px;
  font-weight: 600;
  color: ${({$disabled:t})=>t?p.textMuted:p.accent};
  background: ${p.card};
  border: 1.5px solid ${({$disabled:t})=>t?p.cardBorder:p.blush};
  padding: 12px 28px;
  border-radius: 30px;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
  opacity: ${({$disabled:t})=>t?.4:1};
  box-shadow: 0 2px 12px rgba(196, 69, 105, 0.06);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({$disabled:t})=>t?void 0:p.accent};
    box-shadow: ${({$disabled:t})=>t?void 0:"0 4px 18px rgba(196, 69, 105, 0.14)"};
  }
`;o.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;o.div`
  width: ${({$active:t})=>t?"20px":"8px"};
  height: 8px;
  border-radius: 4px;
  background: ${({$active:t,$visited:n})=>t?p.accent:n?p.blush:p.cardBorder};
  transition: all 0.4s ease;
`;o(y.div)`
  width: 100%;
  max-width: 460px;
  background: ${p.card};
  border: 1.5px solid ${p.cardBorder};
  border-radius: 28px;
  padding: 44px 28px;
  box-shadow: 0 12px 48px rgba(196, 69, 105, 0.08);
  text-align: center;
`;o.h3`
  font-family: ${D.display};
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 500;
  font-style: italic;
  color: ${p.textPrimary};
  margin-bottom: 4px;
`;o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
`;o.div`
  background: ${p.softPink};
  border-radius: 16px;
  padding: 16px 12px;
`;o.div`
  font-family: ${D.display};
  font-size: clamp(28px, 6vw, 36px);
  font-weight: 700;
  color: ${p.accent};
`;o.div`
  font-family: ${D.body};
  font-size: 16px;
  color: ${p.textMuted};
  margin-top: 2px;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-style: italic;
  color: ${p.textSecondary};
  margin-top: 8px;
`;const jt=[{text:`I remember the moment
my world stood still —
One look at you,
and I knew I always will.`,style:"whisper"},{text:`One glance, Riya.
That's all it took —
My heart surrendered
with a single look.`,style:"accent"},{text:`Something whispered,
certain and true —
My soul already knew
it belonged to you.`,style:"body"},{text:"She is the one.",style:"dramatic"},{text:`No hesitation,
no room for doubt —
Just a quiet knowing
of what love's about.`,style:"whisper"},{text:`I fell for you
that very first day —
And twelve years on,
I fall the same way.`,style:"body"},{text:`They say that love
is patient and kind —
They never say
what patience leaves behind.`,style:"accent"},{text:`The years of waiting,
the plans undone —
Through all of it,
you were the only one.`,style:"whisper"},{text:`But waiting beside you
never felt long —
With you, even silence
felt like a song.`,style:"gold"},{text:`Through every storm,
through every fall —
You were my reason
to stand through it all.`,style:"body"},{text:`We didn't break
beneath the weight we bore —
Each scar just taught us
how to love a little more.`,style:"accent"},{text:`Twelve years of learning
your every sigh —
Twelve years of falling,
and I still don't know why.`,style:"gold"},{text:`I will choose you.
In every life, in every way —
I will choose you,
every single day.`,style:"dramatic"},{text:"Forever starts now.",style:"finale"}],Gu="Yours, always and after",Vu=M`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,Qu=M`
  0%, 100% { opacity: 0; transform: scale(0.6); }
  40% { opacity: 0.75; transform: scale(1.15); }
  60% { opacity: 0.4; transform: scale(0.95); }
`,Uu=M`
  0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.2; }
  50% { opacity: 0.32; }
  100% { transform: translateY(-110vh) scale(0.5) rotate(50deg); opacity: 0; }
`,qu=M`
  0% { transform: translate(0, 0); }
  25% { transform: translate(25px, -18px); }
  50% { transform: translate(-18px, 12px); }
  75% { transform: translate(12px, 22px); }
  100% { transform: translate(0, 0); }
`,Ku=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    170deg,
    ${p.bg} 0%,
    ${p.softPink}15 25%,
    ${p.bg} 45%,
    ${p.lavender}12 65%,
    ${p.bgAlt} 85%,
    ${p.bg} 100%
  );
`,Xu=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 50%, ${p.blush}40 0%, transparent 100%),
    radial-gradient(ellipse 55% 45% at 28% 32%, ${p.softPink}22 0%, transparent 100%),
    radial-gradient(ellipse 45% 35% at 72% 68%, ${p.goldLight}25 0%, transparent 100%);
`,Ju=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50%;
  background: ${t=>t.$c};
  filter: blur(${t=>t.$s*.45}px);
  animation:
    ${Vu} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite,
    ${qu} ${t=>t.$d*2.5}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,Zu=[{x:"12%",y:"18%",s:130,c:`${p.blush}35`,d:7,dl:0},{x:"78%",y:"12%",s:100,c:`${p.softPink}28`,d:9,dl:2},{x:"62%",y:"72%",s:120,c:`${p.goldLight}25`,d:8,dl:1},{x:"20%",y:"68%",s:85,c:`${p.lavender}28`,d:10,dl:3},{x:"48%",y:"42%",s:170,c:`${p.softPink}16`,d:6,dl:.5},{x:"86%",y:"48%",s:70,c:`${p.goldLight}20`,d:11,dl:4}],eh=o.div`
  position: absolute;
  left: ${t=>t.$x}; bottom: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  opacity: 0.2;
  animation: ${Uu} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
`,th=[{x:"8%",s:11,d:13,dl:0,c:p.blush},{x:"24%",s:8,d:15,dl:3,c:p.softPink},{x:"40%",s:12,d:12,dl:1,c:p.blush},{x:"56%",s:7,d:16,dl:5,c:p.goldLight},{x:"70%",s:10,d:14,dl:2,c:p.blush},{x:"84%",s:9,d:13,dl:4,c:p.softPink},{x:"16%",s:7,d:15,dl:6,c:p.goldLight},{x:"92%",s:10,d:14,dl:1,c:p.blush}],nh=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: 3.5px; height: 3.5px;
  border-radius: 50%;
  background: ${p.warmGold};
  box-shadow: 0 0 7px 2px ${p.warmGold}45;
  animation: ${Qu} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,rh=[{x:"15%",y:"14%",d:3.2,dl:0},{x:"80%",y:"9%",d:4,dl:1.5},{x:"25%",y:"85%",d:3.6,dl:.5},{x:"70%",y:"80%",d:4.2,dl:2},{x:"46%",y:"7%",d:3,dl:1},{x:"91%",y:"40%",d:5,dl:3},{x:"6%",y:"54%",d:3.4,dl:.8},{x:"60%",y:"24%",d:4.5,dl:2.5},{x:"38%",y:"92%",d:3.2,dl:1.2},{x:"84%",y:"60%",d:4,dl:.3}],di={whisper:`radial-gradient(ellipse 60% 50% at 50% 50%, ${p.lavender}30 0%, transparent 70%)`,body:`radial-gradient(ellipse 55% 45% at 50% 50%, ${p.softPink}28 0%, transparent 70%)`,accent:`radial-gradient(ellipse 50% 40% at 50% 50%, ${p.blush}40 0%, transparent 65%)`,gold:`radial-gradient(ellipse 55% 45% at 50% 50%, ${p.goldLight}45 0%, transparent 65%)`,dramatic:`radial-gradient(ellipse 45% 35% at 50% 50%, ${p.accent}18 0%, ${p.blush}20 40%, transparent 70%)`,finale:`radial-gradient(ellipse 60% 50% at 50% 50%, ${p.accent}25 0%, ${p.blush}18 35%, transparent 65%)`},ah=o(y.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,ih=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,oh=M`
  0%, 100% { text-shadow: 0 0 30px ${p.accent}30, 0 0 60px ${p.accent}15; }
  50% { text-shadow: 0 0 50px ${p.accent}45, 0 0 90px ${p.accent}20; }
`,Dt=Re`
  position: absolute;
  width: 100%;
  white-space: pre-line;
  text-align: center;
`,sh=o(y.p)`
  ${Dt}
  font-family: ${D.body};
  font-size: clamp(20px, 4.8vw, 28px);
  font-weight: 400;
  font-style: italic;
  color: ${p.textSecondary};
  line-height: 1.75;
  letter-spacing: 0.01em;
`,lh=o(y.p)`
  ${Dt}
  font-family: ${D.body};
  font-size: clamp(22px, 5.2vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${p.textPrimary};
  line-height: 1.65;
`,ch=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(24px, 5.8vw, 34px);
  font-weight: 600;
  font-style: italic;
  color: ${p.accent};
  line-height: 1.55;
  text-shadow: 0 2px 16px ${p.accent}18;
`,dh=o(y.p)`
  ${Dt}
  font-family: ${D.script};
  font-size: clamp(26px, 6.5vw, 38px);
  font-weight: 400;
  background: linear-gradient(
    90deg,
    ${p.warmGold} 0%,
    ${p.gold} 30%,
    #f5d5a0 50%,
    ${p.gold} 70%,
    ${p.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${ih} 5s linear infinite;
  line-height: 1.6;
  filter: drop-shadow(0 2px 12px ${p.warmGold}25);
`,ph=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  font-style: italic;
  color: ${p.accent};
  line-height: 1.4;
  text-shadow:
    0 0 24px ${p.accent}28,
    0 4px 20px ${p.accent}12;
`,xh=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(34px, 10vw, 58px);
  font-weight: 700;
  font-style: italic;
  color: ${p.accent};
  line-height: 1.3;
  animation: ${oh} 2.5s ease-in-out infinite;
`,uh={whisper:sh,body:lh,accent:ch,gold:dh,dramatic:ph,finale:xh},yo={whisper:{from:"up",blur:6,scale:.98},body:{from:"down",blur:5,scale:.97},accent:{from:"scale",blur:8,scale:.88},gold:{from:"up",blur:6,scale:.95},dramatic:{from:"scale",blur:12,scale:.75},finale:{from:"scale",blur:16,scale:.6}};function pi(t){const n=yo[t];return{opacity:0,y:n.from==="up"?24:n.from==="down"?-24:0,scale:n.scale,filter:`blur(${n.blur}px)`}}function hh(){return{opacity:1,y:0,scale:1,filter:"blur(0px)"}}function fh(t){return{opacity:0,y:-16,scale:.97,filter:`blur(${Math.min(yo[t].blur,5)}px)`}}const gh=M`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,mh=o(y.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,yh=o.p`
  font-family: ${D.script};
  font-size: clamp(30px, 8vw, 44px);
  color: ${p.warmGold};
  text-shadow:
    0 0 24px ${p.warmGold}30,
    0 2px 12px ${p.warmGold}18;
`,vh=o.div`
  width: clamp(120px, 40vw, 200px);
  height: 1.5px;
  background: linear-gradient(90deg, transparent, ${p.warmGold}55, transparent);
  transform-origin: center;
  animation: ${gh} 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`,bh=o(y.div)`
  position: absolute;
  bottom: max(30px, 4vh);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  align-items: center;
`,jh=o.div`
  width: ${t=>t.$a?"22px":"5px"};
  height: 5px;
  border-radius: 3px;
  background: ${t=>t.$a?p.accent:t.$p?p.blush:`${p.textMuted}25`};
  opacity: ${t=>t.$a?1:t.$p?.6:.35};
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
`,wh=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
`,kh={whisper:4600,body:4600,accent:4400,gold:4800,dramatic:4200,finale:5e3},$h={whisper:1,body:1,accent:.9,gold:1.1,dramatic:1.3,finale:1.6},Sh=({onComplete:t})=>{const[n,a]=h.useState(-1),[r,i]=h.useState(!1),[s,l]=h.useState(!1),d=h.useMemo(()=>{const c=[];let x=900;for(let g=0;g<jt.length;g++)c.push(x),x+=kh[jt[g].style];return{starts:c,sigAt:x,fadeAt:x+4200,doneAt:x+5600}},[]);h.useEffect(()=>{const c=[],x=t;return d.starts.forEach((g,u)=>{c.push(setTimeout(()=>a(u),g))}),c.push(setTimeout(()=>{a(-2),i(!0)},d.sigAt)),c.push(setTimeout(()=>l(!0),d.fadeAt)),c.push(setTimeout(()=>x(),d.doneAt)),()=>c.forEach(clearTimeout)},[]);const f=n>=0&&n<jt.length?jt[n].style:null;return e.jsxs(Ku,{children:[e.jsx(Xu,{}),Zu.map((c,x)=>e.jsx(Ju,{$x:c.x,$y:c.y,$s:c.s,$c:c.c,$d:c.d,$dl:c.dl},x)),th.map((c,x)=>e.jsx(eh,{$x:c.x,$s:c.s,$d:c.d,$dl:c.dl,$c:c.c},x)),rh.map((c,x)=>e.jsx(nh,{$x:c.x,$y:c.y,$d:c.d,$dl:c.dl},x)),e.jsx(Ae,{mode:"ambient",density:20}),e.jsx(ah,{animate:{background:f?di[f]:r?di.gold:"none"},transition:{duration:1.6,ease:[.25,.1,.25,1]}}),e.jsxs(wh,{children:[jt.map((c,x)=>{const g=uh[c.style],u=n===x,m=n>x||n===-2;return e.jsx(g,{initial:pi(c.style),animate:u?hh():m?fh(c.style):pi(c.style),transition:{duration:$h[c.style],ease:B.cinematic},style:{pointerEvents:"none"},children:c.text},x)}),e.jsxs(mh,{initial:{opacity:0,scale:.85,filter:"blur(8px)"},animate:{opacity:r&&!s?1:0,scale:r?1:.85,filter:r&&!s?"blur(0px)":"blur(8px)"},transition:{duration:1.3,ease:B.gentle},children:[e.jsx(yh,{children:Gu}),r&&!s&&e.jsx(vh,{})]})]}),e.jsx(bh,{initial:{opacity:0},animate:{opacity:s?0:n>=0?.85:0},transition:{duration:.6},children:jt.map((c,x)=>e.jsx(jh,{$a:n===x,$p:n>x},x))})]})},wr=["For 12 years, you have been my everything.","For years, we have waited.","Every delay.","Every storm.","Every test.","Only made me more certain.","That you are my forever.","This year, Riya…"],vo=["I choose you.","I'll always choose you.","Here's to the future we've been dreaming of."],Ch="Happy 12th Anniversary, my love",Th="19 March 2014  →  19 March 2026  →  ∞",Dh="Every love story is beautiful, but ours is my favourite.",Ah=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
`,Ih=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`,Mh=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(22px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${({$gold:t})=>t?p.warmGold:p.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
`,Lh=M`
  0%, 100% { filter: drop-shadow(0 0 6px ${p.warmGold}40); }
  50% { filter: drop-shadow(0 0 20px ${p.warmGold}80); }
`,Oh=o(y.div)`
  margin: 24px 0 20px;
  animation: ${Lh} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
`,Ph=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: ${({$gold:t})=>t?600:500};
  font-style: italic;
  color: ${({$gold:t})=>t?p.accent:p.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
  position: relative;
  z-index: 1;
  text-align: center;
`,gn=2,bo=wr.length*gn+1.2,jo=bo+2,_h=jo+vo.length*gn+3,Fh=({onComplete:t})=>{const[n,a]=h.useState(0),[r,i]=h.useState(!1),[s,l]=h.useState(!1),[d,f]=h.useState(!1);return h.useEffect(()=>{const c=[],x=t;return wr.forEach((g,u)=>{c.push(setTimeout(()=>a(u+1),(u+1)*gn*1e3))}),c.push(setTimeout(()=>{i(!0),f(!0),setTimeout(()=>f(!1),2200)},bo*1e3)),c.push(setTimeout(()=>l(!0),jo*1e3)),c.push(setTimeout(()=>x(),_h*1e3)),()=>c.forEach(clearTimeout)},[]),e.jsxs(Ah,{children:[d&&e.jsx(Ae,{mode:"burst",density:55}),e.jsx(Ih,{children:wr.map((c,x)=>e.jsx(Mh,{$gold:c.startsWith("This year"),initial:{opacity:0},animate:{opacity:x<n?1:0},transition:{duration:1,ease:B.cinematic},children:c},x))}),e.jsx(y.div,{initial:{opacity:0},animate:{opacity:r?1:0},transition:{duration:.6},style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(Gt,{children:e.jsx(ot,{})})}),e.jsx(Oh,{initial:{opacity:0,scale:.5},animate:{opacity:r?1:0,scale:r?1:.5},transition:{duration:1.2,ease:B.cinematic},children:e.jsxs("svg",{width:"140",height:"90",viewBox:"0 0 140 90",fill:"none",children:[e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:p.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:p.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:p.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:p.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsxs("circle",{cx:"70",cy:"45",r:"4",fill:p.warmGold,children:[e.jsx("animate",{attributeName:"r",values:"3;5;3",dur:"2s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]})]})}),vo.map((c,x)=>e.jsx(Ph,{$gold:x===0,initial:{opacity:0,y:12},animate:{opacity:s?1:0,y:s?0:12},transition:{delay:s?x*gn:0,duration:1,ease:B.cinematic},children:c},`a-${x}`))]})},Eh=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Nh=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,Wh=M`
  0%, 100% { text-shadow: 0 0 20px rgba(196, 69, 105, 0.2), 0 4px 40px rgba(196, 69, 105, 0.1); }
  50% { text-shadow: 0 0 40px rgba(196, 69, 105, 0.4), 0 4px 60px rgba(196, 69, 105, 0.2); }
`,zh=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`,Nr=o(y.span)`
  font-family: ${D.display};
  font-weight: 700;
  font-style: italic;
  line-height: 1.1;
  display: inline-block;
`,Bh=o(Nr)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${p.textPrimary};
  margin-right: clamp(12px, 3vw, 20px);
`,Rh=o(Nr)`
  font-size: clamp(72px, 18vw, 120px);
  color: ${p.accent};
  animation: ${Wh} 3s ease-in-out infinite;
  margin-right: clamp(12px, 3vw, 20px);
`,Hh=o(Nr)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${p.warmGold};
`,Yh=o(y.div)`
  color: ${p.accent};
  margin-top: 24px;

  svg {
    width: clamp(40px, 10vw, 64px);
    height: clamp(40px, 10vw, 64px);
  }
`,Gh=M`
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  56% { transform: scale(1); }
`,Vh=o.div`
  animation: ${Gh} 1.8s ease-in-out infinite;
  display: flex;
`,Qh=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 26px);
  font-style: italic;
  font-weight: 500;
  color: ${p.textSecondary};
  margin-top: 32px;
  max-width: 400px;
  line-height: 1.6;
`,Uh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),qh=({onComplete:t})=>{const[n,a]=h.useState(0),[r,i]=h.useState(!1);return h.useEffect(()=>{const s=t,l=[setTimeout(()=>a(1),800),setTimeout(()=>{a(2),i(!0),setTimeout(()=>i(!1),2e3)},2e3),setTimeout(()=>a(3),3200),setTimeout(()=>a(4),4800),setTimeout(()=>s(),8e3)];return()=>l.forEach(clearTimeout)},[]),e.jsxs(Eh,{children:[e.jsx(Ae,{mode:"ambient",density:20}),r&&e.jsx(Ae,{mode:"burst",density:50}),e.jsxs(Nh,{children:[e.jsxs(zh,{children:[e.jsx(Bh,{initial:{opacity:0,x:-30},animate:{opacity:n>=1?1:0,x:n>=1?0:-30},transition:{duration:.8,ease:B.cinematic},children:"I"}),e.jsx(Rh,{initial:{opacity:0,scale:.3},animate:{opacity:n>=2?1:0,scale:n>=2?1:.3},transition:{type:"spring",stiffness:100,damping:12},children:"Love"}),e.jsx(Hh,{initial:{opacity:0,x:30},animate:{opacity:n>=3?1:0,x:n>=3?0:30},transition:{duration:.8,ease:B.cinematic},children:"You"})]}),e.jsx(Yh,{initial:{opacity:0,scale:0},animate:{opacity:n>=3?1:0,scale:n>=3?1:0},transition:{type:"spring",stiffness:200,damping:12,delay:n>=3?.3:0},children:e.jsx(Vh,{children:e.jsx(Uh,{})})}),e.jsxs(Qh,{initial:{opacity:0,y:12},animate:{opacity:n>=4?1:0,y:n>=4?0:12},transition:{duration:1,ease:B.gentle},children:["More than words could ever say.",e.jsx("br",{}),"More than twelve years could ever show."]})]})]})},Kh=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Xh=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,xi=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 500;
  font-style: italic;
  color: ${p.textPrimary};
  line-height: 1.4;
  margin-bottom: 8px;
`,Jh=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Zh=o(y.h1)`
  font-family: ${D.display};
  font-size: clamp(44px, 11vw, 80px);
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  margin-top: 12px;
  background: linear-gradient(
    90deg,
    ${p.warmGold} 0%,
    ${p.accent} 25%,
    ${p.warmGold} 50%,
    ${p.accent} 75%,
    ${p.warmGold} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Jh} 4s linear infinite;
  filter: drop-shadow(0 4px 24px rgba(201, 149, 107, 0.3));
`,ef=M`
  0%, 100% { filter: drop-shadow(0 0 8px ${p.warmGold}60); }
  50% { filter: drop-shadow(0 0 24px ${p.warmGold}AA); }
`,tf=o(y.div)`
  margin: 32px 0 24px;
  animation: ${ef} 2.5s ease-in-out infinite;
`,nf=M`
  0%, 100% { box-shadow: 0 4px 24px rgba(196, 69, 105, 0.2); }
  50% { box-shadow: 0 8px 40px rgba(196, 69, 105, 0.4); }
`,rf=o(y.button)`
  font-family: ${D.display};
  font-size: clamp(26px, 6vw, 36px);
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.06em;
  color: ${p.card};
  background: linear-gradient(135deg, ${p.accent}, ${p.accentSoft});
  border: none;
  padding: 20px 72px;
  border-radius: 60px;
  cursor: pointer;
  margin-top: 36px;
  animation: ${nf} 2.5s ease-in-out infinite;

  &:active { transform: scale(0.95) !important; }
`,af=o(y.p)`
  font-family: ${D.script};
  font-size: clamp(32px, 8vw, 52px);
  color: ${p.accent};
  margin-top: 40px;
`,of=()=>e.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:[e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:p.warmGold,strokeWidth:"4"}),e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:p.gold,strokeWidth:"1.5",opacity:"0.4"}),e.jsx("polygon",{points:"50,20 38,38 50,34 62,38",fill:p.gold,stroke:p.warmGold,strokeWidth:"1.5"}),e.jsx("polygon",{points:"50,20 62,38 50,34",fill:"rgba(255,255,255,0.6)"}),e.jsx("circle",{cx:"50",cy:"26",r:"2",fill:p.card,children:e.jsx("animate",{attributeName:"opacity",values:"0.4;1;0.4",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"50",y1:"10",x2:"50",y2:"14",stroke:p.warmGold,strokeWidth:"1.5",opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"36",y1:"18",x2:"38",y2:"22",stroke:p.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"64",y1:"18",x2:"62",y2:"22",stroke:p.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.2s",repeatCount:"indefinite"})})]}),sf=({onComplete:t})=>{const[n,a]=h.useState(0),[r,i]=h.useState(!1),[s,l]=h.useState(!1);h.useEffect(()=>{const c=[setTimeout(()=>a(1),1200),setTimeout(()=>a(2),3200),setTimeout(()=>{a(3),i(!0),setTimeout(()=>i(!1),2500)},5500),setTimeout(()=>a(4),7500),setTimeout(()=>a(5),9e3)];return()=>c.forEach(clearTimeout)},[]);const d=()=>{l(!0),i(!0),setTimeout(()=>{i(!1),t()},3e3)},f=n>=5&&!s;return e.jsxs(Kh,{children:[e.jsx(Ae,{mode:"ambient",density:15}),r&&e.jsx(Ae,{mode:"burst",density:80}),e.jsxs(Xh,{children:[e.jsx(xi,{initial:{opacity:0,y:16},animate:{opacity:n>=1?1:0,y:n>=1?0:16},transition:{duration:1.2,ease:B.cinematic},children:"Riya..."}),e.jsx(xi,{initial:{opacity:0,y:16},animate:{opacity:n>=2?1:0,y:n>=2?0:16},transition:{duration:1.2,ease:B.cinematic},children:"I have one question..."}),e.jsxs(Zh,{initial:{opacity:0,scale:.6},animate:{opacity:n>=3?1:0,scale:n>=3?1:.6},transition:{type:"spring",stiffness:80,damping:12},children:["Will You",e.jsx("br",{}),"Marry Me?"]}),e.jsx(tf,{initial:{opacity:0,y:20},animate:{opacity:n>=4&&!s?1:0,y:n>=4?0:20},transition:{duration:1,ease:B.cinematic},children:e.jsx(of,{})}),e.jsx(rf,{initial:{opacity:0,scale:.8},animate:{opacity:f?1:0,scale:f?1:.8},transition:{type:"spring",stiffness:120,damping:10},onClick:d,style:{pointerEvents:f?"auto":"none"},children:"Yes!"}),e.jsx(af,{initial:{opacity:0,scale:.5},animate:{opacity:s?1:0,scale:s?1:.5},transition:{type:"spring",stiffness:100,damping:10},children:"She said Yes!"})]})]})},Be="#E57373",ae="#F9A825",Pe="#FFD54F",We="#8D6E63",ar="#F5D5C0",lf="#F0CDB5",F="#DAA520",Oe="#B71C1C",cf=M`
  0% { transform: translateY(-20px) rotate(0deg); opacity: 0.65; }
  50% { opacity: 0.85; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
`,df=M`
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(3deg); }
  70% { transform: rotate(-3deg); }
`,pf=M`
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  100% { transform: translateY(-70px) scale(0.4); opacity: 0; }
`,xf=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    175deg,
    #FFF8F0 0%,
    #FFF0E0 25%,
    #FFE8D6 50%,
    #FDE8EE 75%,
    #FFF8F0 100%
  );
`,uf=o(y.div)`
  position: relative;
  z-index: 1;
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  align-items: center;
`,hf=o.svg`
  width: 100%;
  height: auto;
  overflow: visible;
`,ff=o.g`
  animation: ${df} 5s ease-in-out infinite;
  transform-origin: center bottom;
`,gf=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  animation: ${cf} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
  opacity: 0.55;
`,mf=[{x:"6%",s:9,d:7,dl:0,c:Be},{x:"16%",s:7,d:9,dl:1.5,c:Pe},{x:"28%",s:10,d:6,dl:.5,c:Be},{x:"40%",s:7,d:8,dl:2,c:ae},{x:"52%",s:9,d:7,dl:1,c:Be},{x:"62%",s:6,d:10,dl:3,c:Pe},{x:"74%",s:8,d:6.5,dl:.8,c:Be},{x:"84%",s:7,d:8,dl:2.5,c:ae},{x:"92%",s:9,d:7,dl:1.2,c:Be},{x:"48%",s:5,d:9,dl:4,c:Pe},{x:"20%",s:8,d:7.5,dl:3.5,c:ae},{x:"70%",s:6,d:8.5,dl:.3,c:Be}],yf=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: 35%;
  width: 14px; height: 14px;
  color: ${p.accent};
  animation: ${pf} 3.5s ease-out ${t=>t.$dl}s infinite;
  pointer-events: none;
  svg { width: 100%; height: 100%; }
`,vf=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),bf=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,jf=M`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,wf=o(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(16px, 3vh, 28px);
  gap: 6px;
`,kf=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    ${p.warmGold} 0%,
    #f5d5a0 50%,
    ${p.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${bf} 5s linear infinite;
`,$f=o(y.div)`
  width: clamp(60px, 20vw, 100px);
  height: 1px;
  background: linear-gradient(90deg, transparent, ${p.warmGold}50, transparent);
  transform-origin: center;
`,ui=o($f)`
  animation: ${jf} 1s ease forwards;
`,hi=o(y.p)`
  font-family: ${D.script};
  font-size: ${t=>t.$primary?"clamp(26px, 6.5vw, 38px)":"clamp(22px, 5.5vw, 32px)"};
  font-weight: ${t=>t.$primary?700:400};
  color: ${t=>t.$primary?p.accent:p.textPrimary};
  text-shadow: ${t=>t.$primary?`0 2px 16px ${p.accent}20`:"none"};
  line-height: 1.3;
`,Sf=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(16px, 4vw, 22px);
  font-style: italic;
  color: ${p.warmGold};
  filter: drop-shadow(0 1px 6px ${p.warmGold}25);
`,Cf=({onComplete:t})=>{const[n,a]=h.useState(0);return h.useEffect(()=>{const r=t,i=[setTimeout(()=>a(1),500),setTimeout(()=>a(2),1800),setTimeout(()=>a(3),4e3),setTimeout(()=>r(),9e3)];return()=>i.forEach(clearTimeout)},[]),e.jsxs(xf,{children:[e.jsx(Ae,{mode:"celebration",density:50}),mf.map((r,i)=>e.jsx(gf,{$x:r.x,$s:r.s,$d:r.d,$dl:r.dl,$c:r.c},i)),["30%","45%","60%","75%"].map((r,i)=>e.jsx(yf,{$x:r,$dl:i*1,children:e.jsx(vf,{})},i)),e.jsxs(uf,{initial:{opacity:0},animate:{opacity:n>=1?1:0},transition:{duration:1.5,ease:B.cinematic},children:[e.jsxs(hf,{viewBox:"0 0 400 380",preserveAspectRatio:"xMidYMid meet",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"wMandapRoof",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:Oe,stopOpacity:"0.85"}),e.jsx("stop",{offset:"100%",stopColor:Be,stopOpacity:"0.55"})]}),e.jsxs("linearGradient",{id:"wPillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:ae,stopOpacity:"0.65"}),e.jsx("stop",{offset:"50%",stopColor:Pe,stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:ae,stopOpacity:"0.65"})]}),e.jsxs("radialGradient",{id:"wFire",cx:"50%",cy:"80%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF6F00",stopOpacity:"0.9"}),e.jsx("stop",{offset:"60%",stopColor:ae,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:"transparent"})]}),e.jsxs("linearGradient",{id:"wSky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFF8F0",stopOpacity:"0"}),e.jsx("stop",{offset:"100%",stopColor:Pe,stopOpacity:"0.08"})]})]}),e.jsx("rect",{x:"0",y:"0",width:"400",height:"380",fill:"url(#wSky)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",fill:"url(#wMandapRoof)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",stroke:Oe,strokeWidth:"2",fill:"none",opacity:"0.6"}),e.jsx("ellipse",{cx:"200",cy:"14",rx:"6",ry:"8",fill:F,opacity:"0.8"}),e.jsx("circle",{cx:"200",cy:"7",r:"3",fill:Pe,opacity:"0.7"}),e.jsx("path",{d:"M105 75 Q150 50, 200 46 Q250 50, 295 75",fill:Be,opacity:"0.3"}),Array.from({length:12}).map((r,i)=>{const s=100+i*17;return e.jsx("circle",{cx:s,cy:78,r:4.5,fill:Pe,opacity:"0.45"},`sc${i}`)}),e.jsx("rect",{x:"95",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"291",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"140",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),e.jsx("rect",{x:"250",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),[0,1,2,3,4,5,6].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"102",cy:92+r*24,r:"5",fill:ae,opacity:"0.55"}),e.jsx("circle",{cx:"298",cy:92+r*24,r:"5",fill:ae,opacity:"0.55"})]},`gL${r}`)),e.jsx("path",{d:"M109 82 Q200 110, 291 82",stroke:ae,strokeWidth:"4.5",fill:"none",opacity:"0.45"}),e.jsx("path",{d:"M109 88 Q200 114, 291 88",stroke:Pe,strokeWidth:"2.5",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M109 82 Q85 140, 109 200",stroke:ae,strokeWidth:"3",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M291 82 Q315 140, 291 200",stroke:ae,strokeWidth:"3",fill:"none",opacity:"0.3"}),Array.from({length:8}).map((r,i)=>e.jsx("circle",{cx:115+i*24,cy:55+i%2*12,r:"2.5",fill:Pe,children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.9;0.2",dur:`${1.5+i*.25}s`,repeatCount:"indefinite"})},`tw${i}`)),e.jsx("rect",{x:"80",y:"276",width:"240",height:"14",rx:"4",fill:We,opacity:"0.3"}),e.jsx("rect",{x:"80",y:"276",width:"240",height:"4",rx:"2",fill:ae,opacity:"0.2"}),e.jsx("rect",{x:"85",y:"286",width:"230",height:"3",rx:"1",fill:We,opacity:"0.15"}),e.jsxs("g",{transform:"translate(200, 252)",children:[e.jsx("ellipse",{cx:"0",cy:"8",rx:"16",ry:"5",fill:We,opacity:"0.25"}),e.jsx("ellipse",{cx:"0",cy:"0",rx:"10",ry:"14",fill:"url(#wFire)",opacity:"0.7",children:e.jsx("animate",{attributeName:"ry",values:"12;16;12",dur:"1.2s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"-3",cy:"-4",rx:"4",ry:"8",fill:"#FFAB00",opacity:"0.5",children:e.jsx("animate",{attributeName:"ry",values:"7;10;7",dur:"0.8s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"2",cy:"-2",rx:"3",ry:"6",fill:"#FFD54F",opacity:"0.4",children:e.jsx("animate",{attributeName:"ry",values:"5;8;5",dur:"1s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"0",cy:"0",r:"24",fill:"#FF6F00",opacity:"0.06",children:e.jsx("animate",{attributeName:"r",values:"20;28;20",dur:"1.5s",repeatCount:"indefinite"})})]}),e.jsxs(ff,{children:[e.jsxs("g",{transform:"translate(232, 140)",children:[e.jsx("ellipse",{cx:"0",cy:"-4",rx:"12",ry:"10",fill:"#2D1B30",opacity:"0.55"}),e.jsx("circle",{cx:"0",cy:"2",r:"11",fill:lf,opacity:"0.85"}),e.jsx("circle",{cx:"-4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("circle",{cx:"4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("path",{d:"M-3,5 Q0,8 3,5",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-16,14 Q-18,50 -14,94 L14,94 Q18,50 16,14 Z",fill:F,opacity:"0.7"}),e.jsx("path",{d:"M-8,14 Q0,10 8,14",stroke:F,strokeWidth:"2",fill:"none",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"16",x2:"0",y2:"88",stroke:ae,strokeWidth:"1",opacity:"0.3"}),[24,36,48,60].map(r=>e.jsx("circle",{cx:"0",cy:r,r:"1.5",fill:ae,opacity:"0.4"},`btn${r}`)),e.jsx("path",{d:"M-16,18 Q-24,40 -20,70",stroke:Oe,strokeWidth:"5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),e.jsx("path",{d:"M-16,20 Q-24,42 -20,60",stroke:F,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M16,20 Q22,38 18,56",stroke:F,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-6,94 L-7,114",stroke:F,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("path",{d:"M6,94 L7,114",stroke:F,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("ellipse",{cx:"-7",cy:"116",rx:"5",ry:"3",fill:We,opacity:"0.5"}),e.jsx("ellipse",{cx:"7",cy:"116",rx:"5",ry:"3",fill:We,opacity:"0.5"}),e.jsx("path",{d:"M-10,115 Q-7,112 -4,115",fill:We,opacity:"0.3"}),e.jsx("path",{d:"M4,115 Q7,112 10,115",fill:We,opacity:"0.3"})]}),e.jsxs("g",{transform:"translate(164, 152)",children:[e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",fill:Oe,opacity:"0.8"}),e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",stroke:F,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),e.jsx("circle",{cx:"0",cy:"-18",r:"3",fill:F,opacity:"0.85",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-20 Q-16,-14 -16,-8 Q-17,0 -16,8 Q-15,16 -12,22",stroke:F,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M-13,-18 Q-14,-12 -14,-6 Q-15,2 -14,10 Q-13,18 -11,24",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"-16",cy:"-8",r:"1.8",fill:F,opacity:"0.6"}),e.jsx("circle",{cx:"-16",cy:"2",r:"2",fill:F,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"-14",cy:"12",r:"2.2",fill:F,opacity:"0.6"}),e.jsx("circle",{cx:"-12",cy:"22",r:"2.5",fill:F,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M14,-20 Q16,-14 16,-8 Q17,0 16,8 Q15,16 12,22",stroke:F,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M13,-18 Q14,-12 14,-6 Q15,2 14,10 Q13,18 11,24",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"16",cy:"-8",r:"1.8",fill:F,opacity:"0.6"}),e.jsx("circle",{cx:"16",cy:"2",r:"2",fill:F,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"14",cy:"12",r:"2.2",fill:F,opacity:"0.6"}),e.jsx("circle",{cx:"12",cy:"22",r:"2.5",fill:F,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-18 Q-18,-8 -16,6 Q-10,12 0,14 Q10,12 16,6 Q18,-8 14,-18 Z",fill:Oe,opacity:"0.7"}),e.jsx("path",{d:"M-12,-12 Q0,-6 12,-12",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M-10,-6 Q0,0 10,-6",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"0",cy:"-6",r:"10",fill:ar,opacity:"0.88"}),e.jsx("circle",{cx:"-3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("circle",{cx:"3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("path",{d:"M-3,-4 Q0,-1 3,-4",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"2",cy:"-5",r:"2",stroke:F,strokeWidth:"0.7",fill:"none",opacity:"0.55"}),e.jsx("circle",{cx:"3.2",cy:"-4",r:"0.8",fill:F,opacity:"0.6"}),e.jsx("path",{d:"M-9,4 Q-10,8 -8,12 Q0,16 8,12 Q10,8 9,4",stroke:F,strokeWidth:"2",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-7,8 Q0,14 7,8",stroke:F,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"0",cy:"14",r:"2.5",fill:F,opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.9;0.5",dur:"3s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,12 Q-16,28 -14,44 L14,44 Q16,28 14,12 Z",fill:Oe,opacity:"0.7"}),e.jsx("path",{d:"M-12,18 Q0,22 12,18",stroke:F,strokeWidth:"1",fill:"none",opacity:"0.4"}),e.jsx("path",{d:"M-11,26 Q0,30 11,26",stroke:F,strokeWidth:"1",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-10,34 Q0,38 10,34",stroke:F,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M-14,42 L14,42",stroke:F,strokeWidth:"2",opacity:"0.4"}),e.jsx("path",{d:"M-14,44 Q-20,62 -26,96 L26,96 Q20,62 14,44 Z",fill:Oe,opacity:"0.6"}),e.jsx("path",{d:"M-24,88 Q0,96 24,88",stroke:F,strokeWidth:"1.5",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-26,96 L26,96",stroke:F,strokeWidth:"2.5",opacity:"0.45"}),e.jsx("path",{d:"M-18,60 Q0,66 18,60",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-20,72 Q0,78 20,72",stroke:F,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-14,16 Q-22,32 -18,48",stroke:Oe,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M14,16 Q20,30 17,46",stroke:Oe,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),[42,45,48].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"-18",cy:r,r:"2.5",stroke:F,strokeWidth:"1",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"17",cy:r-2,r:"2.5",stroke:F,strokeWidth:"1",fill:"none",opacity:"0.5"})]},`blL${r}`)),e.jsx("circle",{cx:"-18",cy:"50",r:"3",fill:ar,opacity:"0.7"}),e.jsx("circle",{cx:"17",cy:"48",r:"3",fill:ar,opacity:"0.7"}),e.jsx("circle",{cx:"-18",cy:"50",r:"2",fill:"#C47A5A",opacity:"0.2"}),e.jsx("circle",{cx:"17",cy:"48",r:"2",fill:"#C47A5A",opacity:"0.2"})]}),e.jsx("path",{d:"M216,196 Q200,190 184,200",stroke:ae,strokeWidth:"3.5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),[0,1,2,3,4].map(r=>e.jsx("circle",{cx:216-r*8,cy:196+Math.sin(r*.8)*4,r:"2.5",fill:ae,opacity:"0.5"},`jm${r}`))]}),[95,130,265,300].map((r,i)=>e.jsxs("g",{transform:`translate(${r}, 270)`,children:[e.jsx("path",{d:"M-4,0 Q0,-6 4,0 Z",fill:"#FF6F00",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.7;0.3",dur:`${1.2+i*.3}s`,repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"0",cy:"2",rx:"5",ry:"2.5",fill:We,opacity:"0.4"})]},`diya${i}`)),[115,155,245,285].map((r,i)=>e.jsx("g",{children:[0,1,2,3,4,5].map(s=>e.jsx("circle",{cx:r,cy:82+s*12,r:"3",fill:ae,opacity:.35-s*.04,children:e.jsx("animate",{attributeName:"opacity",values:`${.25-s*.03};${.45-s*.03};${.25-s*.03}`,dur:`${2+i*.5}s`,repeatCount:"indefinite"})},`mg${i}${s}`))},`mg${i}`)),e.jsx("ellipse",{cx:"200",cy:"290",rx:"120",ry:"8",fill:"#FF6F00",opacity:"0.04",children:e.jsx("animate",{attributeName:"opacity",values:"0.03;0.07;0.03",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs(wf,{initial:{opacity:0},animate:{opacity:n>=2?1:0},transition:{duration:1},children:[e.jsx(kf,{initial:{opacity:0,y:8},animate:{opacity:n>=2?1:0,y:n>=2?0:8},transition:{duration:1,ease:B.cinematic,delay:(n>=2,0)},children:"RSVP"}),n>=2&&e.jsx(ui,{}),e.jsx(hi,{$primary:!0,initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:B.cinematic,delay:n>=2?.5:0},children:"Mrs Riya Pranshu Nijhawan"}),e.jsx(Sf,{initial:{opacity:0,scale:.7},animate:{opacity:n>=2?1:0,scale:n>=2?1:.7},transition:{duration:.8,ease:B.gentle,delay:n>=2?1:0},children:"&"}),e.jsx(hi,{initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:B.cinematic,delay:n>=2?1.3:0},children:"Mr Pranshu Nijhawan"}),n>=2&&e.jsx(ui,{})]})]})]})},Tf=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Df=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,Af=o(y.h1)`
  font-family: ${D.display};
  font-size: clamp(32px, 7vw, 50px);
  font-weight: 600;
  font-style: italic;
  color: ${p.accent};
  line-height: 1.3;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(196, 69, 105, 0.15);
`,If=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 600;
  color: ${p.warmGold};
  letter-spacing: 0.06em;
  margin-bottom: 32px;
`,Mf=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(22px, 5vw, 28px);
  font-style: italic;
  font-weight: 500;
  color: ${p.textSecondary};
  line-height: 1.7;
  max-width: 460px;
`,Lf=o(y.p)`
  font-family: ${D.script};
  font-size: clamp(28px, 6vw, 40px);
  color: ${p.warmGold};
  margin-top: 40px;
`,Of=()=>e.jsxs(Tf,{children:[e.jsx(Ae,{mode:"celebration",density:80}),e.jsxs(Df,{children:[e.jsx(Af,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.6,duration:1.2,ease:B.cinematic},children:Ch}),e.jsx(If,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:1},children:Th}),e.jsx(Gt,{children:e.jsx(ot,{})}),e.jsx(Mf,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:3.2,duration:1.2,ease:B.gentle},children:Dh}),e.jsx(Lf,{initial:{opacity:0},animate:{opacity:1},transition:{delay:4.6,duration:1},children:"Forever yours"})]})]});function Pf(){const[t,n]=h.useState(1),a=h.useCallback(()=>{n(r=>r>=8?r:r+1)},[]);return{currentAct:t,nextAct:a}}const _f=new Set,Ff={1:t=>e.jsx($u,{onComplete:t}),2:t=>e.jsx(Yu,{onComplete:t}),3:t=>e.jsx(Sh,{onComplete:t}),4:t=>e.jsx(Fh,{onComplete:t}),5:t=>e.jsx(qh,{onComplete:t}),6:t=>e.jsx(sf,{onComplete:t}),7:t=>e.jsx(Cf,{onComplete:t}),8:()=>e.jsx(Of,{})},Ef=()=>{const{currentAct:t,nextAct:n}=Pf();return h.useEffect(()=>{const a=document.createElement("link");return a.rel="stylesheet",a.href=fo,document.head.appendChild(a),()=>{document.head.removeChild(a)}},[]),h.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),e.jsxs(e.Fragment,{children:[e.jsx(gx,{}),e.jsxs(vx,{children:[e.jsx(wx,{}),e.jsx(Z,{mode:"wait",children:[1,2,3,4,5,6,7,8].map(a=>{if(t!==a)return null;const r=_f.has(a)?$x:kx;return e.jsx(r,{variants:Cx,initial:"enter",animate:"center",exit:"exit",children:Ff[a](n)},`act${a}`)})})]})]})},Nf=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},Wf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),zf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),Bf=o.div`
  min-height: 100vh;
  position: relative;
`,Rf=o.main`
  position: relative;
  z-index: 1;
`,Hf=o.a`
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
`,Yf=M`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,fi=o.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,gi=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${Yf} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,mi=o.p`
  color: var(--text-secondary);
  font-size: 15px;
`,Gf=o.button`
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
`,Vf=()=>{const t=Ro(),n=vi();return h.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function Qf(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=Uo(),i=h.useMemo(()=>Nf()?Wf:zf,[]);return n||!t&&!a?e.jsxs(fi,{children:[e.jsx(gi,{children:e.jsx(i,{})}),e.jsx(mi,{children:"Authenticating..."})]}):a&&!t?e.jsxs(fi,{children:[e.jsx(gi,{style:{animation:"none",opacity:1},children:e.jsx(i,{})}),e.jsx(mi,{children:"Authentication required to continue"}),e.jsx(Gf,{onClick:r,children:"Try Again"})]}):e.jsxs(Bf,{children:[e.jsx(Vf,{}),e.jsx(Hf,{href:"#main-content",children:"Skip to main content"}),e.jsx(Xo,{}),e.jsx(ss,{}),e.jsx(Rf,{id:"main-content",children:e.jsxs(Bo,{children:[e.jsx(dt,{path:"/",element:e.jsx(ws,{})}),e.jsx(dt,{path:"/tax-manager",element:e.jsx(jl,{})}),e.jsx(dt,{path:"/netfolio",element:e.jsx(_p,{})}),e.jsx(dt,{path:"/expense-manager",element:e.jsx(Jr,{to:"/netfolio",replace:!0})}),e.jsx(dt,{path:"/canvas-manager",element:e.jsx(fx,{})}),e.jsx(dt,{path:"/tax-calculator",element:e.jsx(Jr,{to:"/tax-manager",replace:!0})})]})})]})}function Uf(){return vi().pathname==="/us"?e.jsxs(ea,{children:[e.jsx(ta,{}),e.jsx(Ef,{})]}):e.jsx(ea,{children:e.jsxs(Qo,{children:[e.jsx(ta,{}),e.jsx(Qf,{})]})})}function qf(){return e.jsx(zo,{basename:"/tools",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(Uf,{})})}ji(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(qf,{})}));
