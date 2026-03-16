import{j as e,m as y,A as ee}from"./vendor-animation-BytCmOQI.js";import{a as Ci,r as f,L as Sr,B as qo,u as Ti,R as Ko,b as dt,N as ea,c as Xo}from"./vendor-react-YDq69VoU.js";import{f as Di,d as o,m as M,l as Re}from"./vendor-styles-C2HPJuBO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var Ai,ta=Ci;Ai=ta.createRoot,ta.hydrateRoot;const Ii=f.createContext({isDark:!0,toggleTheme:()=>{}}),na=({children:t})=>{const[n,a]=f.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});f.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),f.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=l=>{localStorage.getItem("theme")||a(l.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>a(!n);return e.jsx(Ii.Provider,{value:{isDark:n,toggleTheme:r},children:t})},Cr=()=>{const t=f.useContext(Ii);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Mi=f.createContext(null),Pn="tools-auth-session",_n="tools-webauthn-credential",Jo=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Zo=async()=>{if(!Jo())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},En=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},es=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},ts=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},ns=({children:t})=>{const[n,a]=f.useState(!1),[r,i]=f.useState(!0),[s,l]=f.useState(!1),d=f.useRef(!1),h=async()=>{try{const m={challenge:En(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:En(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},v=await navigator.credentials.create({publicKey:m});return v?(localStorage.setItem(_n,es(v.rawId)),!0):!1}catch(u){return console.error("Registration failed:",u),!1}},c=async()=>{try{const u=localStorage.getItem(_n),v={challenge:En(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...u&&{allowCredentials:[{type:"public-key",id:ts(u),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:v})}catch(u){return console.error("Authentication failed:",u),!1}},p=f.useCallback(async()=>{i(!0),l(!1);const u=sessionStorage.getItem(Pn);if(u)try{const{timestamp:v}=JSON.parse(u);if(Date.now()-v<24*60*60*1e3){a(!0),i(!1);return}}catch{}if(!await Zo()){a(!0),sessionStorage.setItem(Pn,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const v=localStorage.getItem(_n);let w=!1;v?w=await c():w=await h(),w?(a(!0),sessionStorage.setItem(Pn,JSON.stringify({timestamp:Date.now()}))):l(!0)}catch{l(!0)}i(!1)},[]);f.useEffect(()=>{d.current||(d.current=!0,p())},[p]);const g=f.useCallback(()=>{p()},[p]);return e.jsx(Mi.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:s,retryAuth:g},children:t})},rs=()=>{const t=f.useContext(Mi);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},ra=Di`
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
`,as=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,is=o.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,os=()=>{const{isDark:t}=Cr();return e.jsx(as,{children:e.jsx(is,{$isDark:t})})},ss=o(y.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,ls=o.div`
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
`,cs=o(Sr)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,ds=o.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,ps=o.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,xs=o(y.button)`
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
`,us=o(y.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,hs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),fs=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),gs=()=>{const{isDark:t,toggleTheme:n}=Cr();return e.jsx(ss,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(ls,{children:[e.jsx(cs,{to:"/","aria-label":"Go to homepage",children:e.jsx(ds,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(ps,{}),e.jsx(xs,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(ee,{mode:"wait",children:e.jsx(us,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(fs,{}):e.jsx(hs,{})},t?"moon":"sun")})})]})})},ms=o(y.div)`
  position: relative;
`,ys=o(Sr)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Li=o(y.div)`
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
`,vs=o(y.div)`
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

  ${Li}:hover &::before {
    opacity: 0.3;
  }
`,bs=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,js={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},ws={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},ks=({title:t,icon:n,to:a})=>e.jsx(ms,{variants:js,whileHover:"hover",whileTap:"tap",children:e.jsx(ys,{to:a,children:e.jsxs(Li,{variants:ws,children:[e.jsx(vs,{children:n}),e.jsx(bs,{children:t})]})})}),$s=o.div`
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
`,Ss=o(y.div)`
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
`,Cs={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Ts=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),Ds=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),As=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Is=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(Ts,{}),to:"/tax-manager"},{id:"netfolio",title:"NetFolio",icon:e.jsx(Ds,{}),to:"/netfolio"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(As,{}),to:"/canvas-manager"}],Ms=()=>e.jsx($s,{children:e.jsx(Ss,{variants:Cs,initial:"hidden",animate:"visible",children:Is.map(t=>e.jsx(ks,{title:t.title,icon:t.icon,to:t.to},t.id))})}),Oi=o.div`
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
`;const xn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],aa=75e3,kt=4,Ls=12e5,Os=6e4,ia=5e6,oa=10,Ps=12,_s=1800;function He(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let i="";const s=r.slice(-3),l=r.slice(0,-3);if(l.length>0){const d=[];let h=l;for(;h.length>0;)h.length>=2?(d.unshift(h.slice(-2)),h=h.slice(0,-2)):(d.unshift(h),h="");i=d.join(",")+","+s}else i=s;return(n?"-":"")+i}function I(t){return"₹"+He(t)}function L(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[i,s]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+He(parseInt(i))+"."+s}function sa(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:He(t)}function Es(t){for(let n=xn.length-1;n>=0;n--)if(t>xn[n].from)return xn[n].rate;return 0}function Fs(t){const n=[];let a=t,r=0;for(const i of xn){const s=i.from,d=(i.to??1/0)-s;if(a<=0){n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const h=Math.min(a,d),c=h*i.rate/100;n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:h>0?h:0,taxInSlab:c}),r+=c,a-=h}return{slabs:n,totalTax:r}}function Ns(t,n){if(n>ia){const r=t*(1+oa/100)*(1+kt/100),i=n-ia,l=(t+i)*(1+kt/100),d=l<r,h=Math.min(r,l),c=h/(1+kt/100),p=c-t,g=h-c;return{surchargeApplicable:!0,surchargeRate:oa,surchargeAmount:p,marginalReliefApplied:d,taxAfterSurcharge:c,cess:g,totalTax:h}}else{const a=t*(kt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function la(t,n,a,r,i,s,l){const d=t*n/100,h=t-d;let c=0;i==="percentage"?c=t*s/100:i==="amount"&&(c=s);const p=t+c;let g=0,u=0;a&&(r==="percentage"?(g=d*Ps/100,u=g):(g=_s*12,u=g));const m=t-u,v=l.map(se=>({name:se.name,amount:se.amount*12})),w=v.reduce((se,ge)=>se+ge.amount,0),j=Math.max(0,m-aa),{slabs:k,totalTax:$}=Fs(j);let T=0,O=$;j<=Ls&&(T=Math.min($,Os),O=Math.max(0,$-T));const{surchargeApplicable:F,surchargeRate:S,surchargeAmount:A,marginalReliefApplied:N,taxAfterSurcharge:z,cess:C,totalTax:Y}=Ns(O,j),U=g+u,te=Y,V=g+Y+w,b=m-g-Y-w,P=b/12,q=m>0?Y/m*100:0,le=Es(j);let de=0,X=c;if(c>0&&le>0){let se=c*le/100;F&&(se=se*(1+S/100)),de=se*(1+kt/100),X=c-de}const H=b+X,ye=H/12;return{baseSalary:t,basicSalary:d,hra:h,bonus:c,totalEarnings:p,employeePF:g,employerPF:u,grossSalary:m,standardDeduction:aa,additionalDeductions:v,totalAdditionalDeductions:w,taxableIncome:j,slabs:k,taxBeforeSurcharge:$,surchargeApplicable:F,surchargeRate:S,surchargeAmount:A,marginalReliefApplied:N,taxAfterSurcharge:z,cessRate:kt,cess:C,totalTax:Y,rebate87A:T,totalPFDeduction:U,totalTaxDeduction:te,totalDeductions:V,netSalaryYearly:b,netSalaryMonthly:P,effectiveTaxRate:q,bonusTaxRate:le,bonusTaxAmount:de,bonusAfterTax:X,totalIncomeYearly:H,totalIncomeMonthly:ye}}function Ws(t){const n=la(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const i=t.baseSalary*(1+r/100);a=la(i,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const Tr="taxCalculatorInput";function zs(t){localStorage.setItem(Tr,JSON.stringify(t))}function Bs(){localStorage.removeItem(Tr)}function Pi(){const t=localStorage.getItem(Tr);if(t)try{return JSON.parse(t)}catch{return null}return null}const Rs={financialYear:"FY 2025-26"},Hs=o(y.div)`
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
`,Ys=o.div`
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
`,ca=o.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,qe=o.input`
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
`,Fn=o.div`
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
`,da=o.div`
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
`,Gs=o.div`
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
`,Vs=o(y.button)`
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
`,Qs=o.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,Us=o(y.button)`
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
`,qs=o(y.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Ks=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Xs=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Js=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Zs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),el=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),tl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Bn=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),hn={type:"spring",stiffness:300,damping:30,mass:.8},nl={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:hn}},rl={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...hn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...hn},opacity:{duration:.1}}}},al={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:hn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function Rn(t){const n=t.replace(/[^\d]/g,"");return n?He(parseInt(n)):""}function nn(t){return parseInt(t.replace(/,/g,""))||0}const il=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,i]=f.useState(""),[s,l]=f.useState("50"),[d,h]=f.useState("percentage"),[c,p]=f.useState("none"),[g,u]=f.useState(""),[m,v]=f.useState([]),[w,j]=f.useState(""),[k,$]=f.useState(!1),T=f.useRef(!1);f.useEffect(()=>{const b=Pi();b&&(i(He(b.baseSalary)),l(b.basicPercentage.toString()),h(b.pfType),p(b.bonusType),u(b.bonusValue>0?b.bonusType==="amount"?He(b.bonusValue):b.bonusValue.toString():""),v(b.additionalDeductions.map(P=>({name:P.name,amount:He(P.amount)}))),j(b.hikePercentage>0?b.hikePercentage.toString():"")),$(!0)},[]),f.useEffect(()=>{k&&a&&r&&!T.current&&(T.current=!0,setTimeout(()=>{C()},100))},[k,a,r]);const O=b=>{i(Rn(b))},F=b=>{u(Rn(b))},S=(b,P)=>{const q=[...m];q[b].amount=Rn(P),v(q)},A=()=>{v([...m,{name:"",amount:""}])},N=b=>{v(m.filter((P,q)=>q!==b))},z=(b,P)=>{const q=[...m];q[b].name=P,v(q)},C=()=>{const b={baseSalary:nn(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:d,bonusType:c,bonusValue:c==="amount"?nn(g):parseFloat(g)||0,additionalDeductions:m.filter(P=>P.name&&P.amount).map(P=>({name:P.name,amount:nn(P.amount)})),hikePercentage:parseFloat(w)||0};zs(b),t(b)},Y=()=>{i(""),l("50"),h("percentage"),p("none"),u(""),v([]),j(""),Bs(),n==null||n()},te=nn(r)>0,V=r||m.length>0||c!=="none"||w;return e.jsxs(Hs,{variants:nl,initial:"hidden",animate:"visible",children:[e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#10b981",children:e.jsx(Ks,{})}),e.jsx(Ot,{children:"Salary Details"})]}),e.jsxs(Ys,{children:[e.jsxs(pt,{children:[e.jsx(ca,{children:"Yearly CTC *"}),e.jsx(Fn,{children:e.jsx(qe,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:b=>O(b.target.value)})})]}),e.jsxs(pt,{children:[e.jsx(ca,{children:"Basic %"}),e.jsx(Nn,{children:e.jsx(qe,{type:"number",inputMode:"numeric",placeholder:"50",value:s,onChange:b=>l(b.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#3b82f6",children:e.jsx(Xs,{})}),e.jsx(Ot,{children:"Provident Fund"})]}),e.jsxs(da,{children:[e.jsx(Pt,{$active:d==="percentage",onClick:()=>h("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(Pt,{$active:d==="flat",onClick:()=>h("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#f59e0b",children:e.jsx(Js,{})}),e.jsx(Ot,{children:"Bonus (Optional)"})]}),e.jsxs(da,{children:[e.jsx(Pt,{$active:c==="none",onClick:()=>p("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(Pt,{$active:c==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(Pt,{$active:c==="amount",onClick:()=>p("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(ee,{initial:!1,children:c!=="none"&&e.jsx(y.div,{initial:"hidden",animate:"visible",exit:"exit",variants:rl,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(Wn,{children:[e.jsx(pt,{style:{flex:1},children:c==="percentage"?e.jsx(Nn,{children:e.jsx(qe,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:b=>u(b.target.value)})}):e.jsx(Fn,{children:e.jsx(qe,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:b=>F(b.target.value)})})}),e.jsx(ee,{children:g&&e.jsx(zn,{onClick:()=>u(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})})]})},"bonus-input")})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#ec4899",children:e.jsx(Zs,{})}),e.jsx(Ot,{children:"Monthly Deductions"})]}),e.jsxs(Gs,{children:[e.jsx(ee,{mode:"popLayout",children:m.map((b,P)=>e.jsxs(Wn,{variants:al,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(pt,{style:{flex:1},children:e.jsx(qe,{type:"text",placeholder:"Name (e.g., Cab)",value:b.name,onChange:q=>z(P,q.target.value)})}),e.jsx(pt,{style:{flex:1},children:e.jsx(Fn,{children:e.jsx(qe,{type:"text",inputMode:"numeric",placeholder:"Amount",value:b.amount,onChange:q=>S(P,q.target.value)})})}),e.jsx(zn,{onClick:()=>N(P),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})]},P))}),e.jsxs(Vs,{onClick:A,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(tl,{}),"Add Deduction"]})]})]}),e.jsxs(It,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{$color:"#8b5cf6",children:e.jsx(el,{})}),e.jsx(Ot,{children:"Hike / Appraisal"})]}),e.jsxs(Wn,{children:[e.jsx(pt,{style:{flex:1},children:e.jsx(Nn,{children:e.jsx(qe,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:b=>j(b.target.value),min:"0",max:"200"})})}),e.jsx(ee,{children:w&&e.jsx(zn,{onClick:()=>j(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(Bn,{})})})]})]}),e.jsxs(Qs,{children:[e.jsx(Us,{onClick:C,disabled:!te,whileHover:te?{scale:1.02}:{},whileTap:te?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(ee,{children:V&&e.jsx(qs,{onClick:Y,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},ol=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ke=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Xe=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,Je=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ze=o.div`
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
`,et=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,tt=o.div`
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
`,sl=o.div`
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
`,Le=o.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,re=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,ae=o.span`
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
`,ll=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,pa=o(y.div)`
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
`,cl=o(y.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,dl=o.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,pl=o(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,xl=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,ul=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,hl=o.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,fl=o.span`
  font-size: 12px;
  color: var(--text-secondary);
`,gl=o.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,Et=o.div`
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
`,Ft=o.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,xa=o(y.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,ua=o.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,ml=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),yl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),vl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),bl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),ha=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),jl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),wl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},nt={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},kl=({breakdown:t})=>{const[n,a]=f.useState("monthly"),r=n==="monthly"?1/12:1,i=u=>u===0?"#10b981":u<=10?"#3BB4B1":u<=20?"#4361A5":u<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...t.slabs.map(u=>u.taxInSlab),1),d=(()=>{const u=n==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:t.netSalaryYearly*u,color:"#10b981"},{label:"Tax",value:t.totalTax*u,color:"#4361A5"},{label:"PF",value:t.employeePF*u,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&m.push({label:"Other",value:t.totalAdditionalDeductions*u,color:"#7BA7D9"}),m})(),h=d.reduce((u,m)=>u+m.value,0),c=[];t.surchargeApplicable&&c.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&c.push(`<strong>Section 87A rebate</strong> of ${I(t.rebate87A)} applied`),t.effectiveTaxRate>0&&c.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const p=!!t.postHike,g=t.bonus>0;return e.jsxs(ol,{variants:wl,initial:"hidden",animate:"visible",children:[p&&e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#3b82f6",children:e.jsx(ha,{})}),e.jsx(et,{children:"Base Salary (CTC)"})]}),e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(tt,{children:e.jsxs(Et,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Te,{children:I(t.baseSalary)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike"}),e.jsx(Te,{children:I(t.postHike.baseSalary)}),e.jsxs(Ft,{children:["+",I(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#10b981",children:e.jsx(ml,{})}),e.jsx(et,{children:"In-Hand Salary"})]}),e.jsxs(_t,{children:[p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(tt,{children:p?e.jsxs(Et,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current"}),e.jsx(Te,{children:L(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsxs(Ce,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Te,{children:L(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Ft,{children:["+",I(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:L(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(Yn,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#f59e0b",children:e.jsx(bl,{})}),e.jsx(et,{children:"Bonus"})]}),p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(tt,{children:[p?e.jsxs(e.Fragment,{children:[e.jsxs(Et,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current Gross"}),e.jsx(Te,{children:I(t.bonus)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Gross"}),e.jsx(Te,{children:I(t.postHike.bonus)}),e.jsxs(Ft,{children:["+",I(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Le,{}),e.jsxs(Et,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current In-Hand"}),e.jsx(Te,{children:L(t.bonusAfterTax)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike In-Hand"}),e.jsx(Te,{children:L(t.postHike.bonusAfterTax)}),e.jsxs(Ft,{children:["+",I(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:I(t.bonus)}),e.jsx(Yn,{children:"Gross Bonus (before tax)"}),e.jsx(Le,{}),e.jsxs(re,{children:[e.jsxs(ae,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(W,{$negative:!0,children:["-",L(t.bonusTaxAmount)]})]}),e.jsxs(re,{children:[e.jsx(ae,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(W,{$highlight:!0,children:L(t.bonusAfterTax)})]})]}),e.jsx(Le,{}),e.jsx(xa,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(ua,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#8b5cf6",children:e.jsx(ha,{})}),e.jsx(et,{children:"Total Combined Income"})]}),e.jsxs(_t,{children:[p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx($e,{children:"Yearly"})]})]}),e.jsxs(tt,{children:[p?e.jsxs(Et,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:"Current Total"}),e.jsx(Te,{children:L(t.totalIncomeYearly)})]}),e.jsxs(Se,{$highlight:!0,children:[e.jsx(Ce,{children:"After Hike Total"}),e.jsx(Te,{children:L(t.postHike.totalIncomeYearly)}),e.jsxs(Ft,{children:["+",I(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Hn,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:L(t.totalIncomeYearly)}),e.jsx(Yn,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Le,{}),e.jsxs(re,{children:[e.jsx(ae,{children:"Base In-Hand (Yearly)"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:L(t.netSalaryYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",L(t.postHike.netSalaryYearly)]})]}):e.jsx(W,{children:L(t.netSalaryYearly)})]}),e.jsxs(re,{children:[e.jsx(ae,{children:"Bonus In-Hand"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:L(t.bonusAfterTax)}),e.jsxs(he,{$positive:!0,children:["→ ",L(t.postHike.bonusAfterTax)]})]}):e.jsx(W,{children:L(t.bonusAfterTax)})]}),e.jsxs(re,{children:[e.jsx(ae,{$bold:!0,children:"Total Combined"}),p?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:L(t.totalIncomeYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",L(t.postHike.totalIncomeYearly)]})]}):e.jsx(W,{$highlight:!0,children:L(t.totalIncomeYearly)})]})]})]}),e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#ec4899",children:e.jsx(vl,{})}),e.jsx(et,{children:"Summary"})]}),e.jsxs(_t,{children:[p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(tt,{children:[e.jsxs(sl,{children:[e.jsxs(ut,{children:[e.jsx(ht,{children:"Gross Salary"}),e.jsx(ft,{children:I(t.grossSalary*r)}),p&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.grossSalary*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Total Tax"}),e.jsx(ft,{children:L(t.totalTax*r)}),p&&e.jsxs(gt,{children:["→ ",L(t.postHike.totalTax*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Employee PF"}),e.jsx(ft,{children:I(t.employeePF*r)}),p&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.employeePF*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Employer PF"}),e.jsx(ft,{children:I(t.employerPF*r)}),p&&e.jsxs(gt,{$positive:!0,children:["→ ",I(t.postHike.employerPF*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Total PF"}),e.jsx(ft,{children:I((t.employeePF+t.employerPF)*r)}),p&&e.jsxs(gt,{$positive:!0,children:["→ ",I((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(ut,{children:[e.jsx(ht,{children:"Eff. Tax Rate"}),e.jsxs(ft,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),p&&e.jsxs(gt,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Le,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(dl,{children:d.map((u,m)=>e.jsx(pl,{$color:u.color,initial:{width:0},animate:{width:`${u.value/h*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),e.jsx(xl,{children:d.map((u,m)=>e.jsxs(ul,{children:[e.jsx(hl,{$color:u.color}),e.jsx(fl,{children:u.label}),e.jsx(gl,{children:I(u.value)})]},m))}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:c.map((u,m)=>e.jsx(xa,{children:e.jsx(ua,{dangerouslySetInnerHTML:{__html:u}})},m))})]})]})]}),e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#10b981",children:e.jsx(jl,{})}),e.jsx(et,{children:"Breakdown"})]}),e.jsxs(_t,{children:[p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(Gn,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(tt,{children:[e.jsxs(re,{children:[e.jsx(ae,{children:"Base Salary (CTC)"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.baseSalary*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.baseSalary*r)]})]}):e.jsx(W,{children:I(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(re,{children:[e.jsx(ae,{children:"Less: Employer PF"}),p?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",I(t.employerPF*r)]}),e.jsxs(he,{children:["→ -",I(t.postHike.employerPF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",I(t.employerPF*r)]})]}),e.jsxs(re,{children:[e.jsx(ae,{$bold:!0,children:"Gross Salary"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.grossSalary*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.grossSalary*r)]})]}):e.jsx(W,{children:I(t.grossSalary*r)})]}),e.jsxs(re,{children:[e.jsx(ae,{children:"Less: Standard Deduction"}),e.jsxs(W,{$negative:!0,children:["-",I(t.standardDeduction*r)]})]}),e.jsxs(re,{children:[e.jsx(ae,{$bold:!0,children:"Taxable Income"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:I(t.taxableIncome*r)}),e.jsxs(he,{$positive:!0,children:["→ ",I(t.postHike.taxableIncome*r)]})]}):e.jsx(W,{children:I(t.taxableIncome*r)})]}),e.jsx(Le,{}),e.jsxs(re,{children:[e.jsx(ae,{children:"Less: Income Tax"}),p?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",L(t.totalTax*r)]}),e.jsxs(he,{children:["→ -",L(t.postHike.totalTax*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",L(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(re,{children:[e.jsx(ae,{children:"Less: Employee PF"}),p?e.jsxs(ue,{children:[e.jsxs(W,{$negative:!0,children:["-",I(t.employeePF*r)]}),e.jsxs(he,{children:["→ -",I(t.postHike.employeePF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",I(t.employeePF*r)]})]}),t.additionalDeductions.map((u,m)=>e.jsxs(re,{children:[e.jsxs(ae,{children:["Less: ",u.name]}),e.jsxs(W,{$negative:!0,children:["-",I(u.amount*r)]})]},m)),e.jsx(Le,{}),e.jsxs(re,{children:[e.jsxs(ae,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),p?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:L(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(he,{$positive:!0,children:["→ ",L(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(W,{$highlight:!0,children:L(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(Ke,{variants:nt,children:[e.jsxs(Xe,{children:[e.jsxs(Je,{children:[e.jsx(Ze,{$color:"#3b82f6",children:e.jsx(yl,{})}),e.jsx(et,{children:"Tax Slabs"})]}),e.jsxs(_t,{children:[e.jsx($e,{children:Rs.financialYear}),p&&e.jsxs($e,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(tt,{children:[e.jsxs(ll,{children:[e.jsxs(pa,{$header:!0,children:[e.jsx(Ne,{children:"Slab"}),e.jsx(Ne,{$align:"center",children:"Rate"}),e.jsx(Ne,{$align:"right",children:"Amount"}),e.jsx(Ne,{$align:"right",children:"Tax"})]}),e.jsx(ee,{children:t.slabs.map((u,m)=>e.jsxs(pa,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[e.jsxs(Ne,{children:[sa(u.from)," - ",sa(u.to),u.taxableInSlab>0&&e.jsx(cl,{$color:i(u.rate),initial:{width:0},animate:{width:`${Math.max(u.taxInSlab/s*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),e.jsxs(Ne,{$align:"center",$highlight:u.rate===0,children:[u.rate,"%"]}),e.jsx(Ne,{$align:"right",$muted:u.taxableInSlab===0,children:u.taxableInSlab>0?I(u.taxableInSlab):"-"}),e.jsx(Ne,{$align:"right",$muted:u.taxInSlab===0,children:u.taxInSlab>0?I(u.taxInSlab):"-"})]},m))})]}),e.jsx(Le,{}),e.jsxs(re,{children:[e.jsx(ae,{children:"Tax Before Surcharge"}),p?e.jsxs(ue,{children:[e.jsx(W,{children:L(t.taxBeforeSurcharge)}),e.jsxs(he,{children:["→ ",L(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(W,{children:L(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(re,{children:[e.jsx(ae,{children:"Section 87A Rebate"}),e.jsxs(W,{$negative:!0,children:["-",I(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(re,{children:[e.jsxs(ae,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx($e,{$color:"#f59e0b",children:"Marginal Relief"})]}),p&&t.postHike.surchargeApplicable?e.jsxs(ue,{children:[e.jsx(W,{children:L(t.surchargeAmount)}),e.jsxs(he,{children:["→ ",L(t.postHike.surchargeAmount)]})]}):e.jsx(W,{children:L(t.surchargeAmount)})]}),e.jsxs(re,{children:[e.jsxs(ae,{children:["Cess (",t.cessRate,"%)"]}),p?e.jsxs(ue,{children:[e.jsx(W,{children:L(t.cess)}),e.jsxs(he,{children:["→ ",L(t.postHike.cess)]})]}):e.jsx(W,{children:L(t.cess)})]}),e.jsxs(re,{children:[e.jsx(ae,{$bold:!0,children:"Total Tax"}),p?e.jsxs(ue,{children:[e.jsx(W,{$highlight:!0,children:L(t.totalTax)}),e.jsxs(he,{children:["→ ",L(t.postHike.totalTax)]})]}):e.jsx(W,{$highlight:!0,children:L(t.totalTax)})]})]})]})]})},$l=o(y.div)`
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
`,Sl=o.div`
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
`,Cl=o(y.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,Tl=o(y.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,Dl={type:"spring",stiffness:300,damping:30,mass:.8},Al={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},fa={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Dl}},Il=()=>{const[t,n]=f.useState(null),[a,r]=f.useState(!1);f.useEffect(()=>{const l=Pi();l&&l.baseSalary>0&&r(!0)},[]);const i=f.useCallback(l=>{const d=Ws(l);n(d),window.innerWidth<1024&&setTimeout(()=>{var h;(h=document.getElementById("results"))==null||h.scrollIntoView({behavior:"smooth"})},100)},[]),s=f.useCallback(()=>{n(null)},[]);return e.jsx($l,{variants:Al,initial:"hidden",animate:"visible",children:e.jsx(Oi,{$maxWidth:"wide",children:e.jsxs(Sl,{children:[e.jsx(Cl,{variants:fa,children:e.jsx(il,{onCalculate:i,onReset:s,autoCalculate:a})}),e.jsx(Tl,{id:"results",variants:fa,children:t&&e.jsx(kl,{breakdown:t},"results")})]})})})},Ye=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",color:"#2B6CB0"},{id:"icici-bank",name:"ICICI Bank",type:"bank",color:"#F58220"},{id:"mutual-funds",name:"Mutual Funds",type:"investment",color:"#8b5cf6"},{id:"ppf",name:"Public Provident Fund",type:"investment",color:"#10b981"},{id:"pf",name:"Provident Fund",type:"investment",color:"#3b82f6"}],_i="netfolio-transactions",Ei="netfolio-initial-balances";function rn(t){localStorage.setItem(_i,JSON.stringify(t))}function Ml(){const t=localStorage.getItem(_i);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function ga(t){localStorage.setItem(Ei,JSON.stringify(t))}function Ll(){const t=localStorage.getItem(Ei);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function at(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function Ol(t){return t===at(new Date)}function Pl(t,n,a,r){const i=n.filter(l=>l.date<=a&&(l.accountId===t.id||l.linkedAccountId===t.id));let s=r[t.id]||0;if(t.type==="bank")for(const l of i)l.accountId===t.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===t.id&&(l.type==="investment_credit"?s-=l.amount:l.type==="investment_debit"&&(s+=l.amount));else for(const l of i)l.accountId===t.id&&(l.type==="investment_credit"?s+=l.amount:l.type==="investment_debit"&&(s-=l.amount));return{account:t,balance:s}}function _l(t,n,a){return Ye.map(r=>Pl(r,t,n,a))}function El(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function Fl(t,n,a,r,i,s){return{id:El(),date:i,type:t,accountId:n,amount:a,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function wt(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Nl(t){switch(t){case"bank_debit":return"Bank Debit";case"bank_credit":return"Bank Credit";case"investment_credit":return"Investment Deposit";case"investment_debit":return"Investment Withdrawal"}}function Wl(t){return Ye.find(n=>n.id===t)}function ze(){return Ye.filter(t=>t.type==="bank")}function sr(){return Ye.filter(t=>t.type==="investment")}function zl(t,n){const a={version:"2.0",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n};return JSON.stringify(a,null,2)}function Bl(t,n){const a=zl(t,n),r=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(r),s=document.createElement("a"),l=new Date().toISOString().split("T")[0];s.href=i,s.download=`netfolio-backup-${l}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}function Rl(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null)return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Hl(t){try{const n=JSON.parse(t);return Rl(n)?n:null}catch{return null}}function Fi(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(a=Fi(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function mn(){for(var t,n,a=0,r="",i=arguments.length;a<i;a++)(t=arguments[a])&&(n=Fi(t))&&(r&&(r+=" "),r+=n);return r}const Yl=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const i=Object.getOwnPropertyDescriptor(t,a),s=Object.getOwnPropertyDescriptor(n,a);!Gl(i,s)&&r||Object.defineProperty(t,a,s)},Gl=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},Vl=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},Ql=(t,n)=>`/* Wrapped ${t}*/
${n}`,Ul=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ql=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Kl=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,i=Ql.bind(null,r,n.toString());Object.defineProperty(i,"name",ql);const{writable:s,enumerable:l,configurable:d}=Ul;Object.defineProperty(t,"toString",{value:i,writable:s,enumerable:l,configurable:d})};function Xl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const i of Reflect.ownKeys(n))Yl(t,n,i,a);return Vl(t,n),Kl(t,n,r),t}const an=2147483647,Jl=new WeakMap,Vn=new WeakMap,Zl=new WeakMap;function ec(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function Ni(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>an)throw new TypeError(`The \`maxAge\` option cannot exceed ${an}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...s){var p;const l=n?n(s):s[0],d=ec(a,l);if(d)return d.data;const h=t.apply(this,s),c=typeof r=="function"?r(...s):r;if(c!==void 0&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return h;if(c>an)throw new TypeError(`The \`maxAge\` function result cannot exceed ${an}.`)}if(a.set(l,{data:h,maxAge:c===void 0||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),c!==void 0&&c!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var m;a.delete(l),(m=Vn.get(i))==null||m.delete(g)},c);(p=g.unref)==null||p.call(g);const u=Vn.get(i)??new Set;u.add(g),Vn.set(i,u)}return h};return Xl(i,t,{ignoreNonConfigurable:!0}),Jl.set(i,a),Zl.set(i,n??(s=>s[0])),i}function tc(t){return typeof t=="string"}function nc(t,n,a){return a.indexOf(t)===n}function rc(t){return t.toLowerCase()===t}function ma(t){return t.indexOf(",")===-1?t:t.split(",")}function lr(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return lr(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return lr(a)}if(t.indexOf("-")===-1||!rc(t))return t;var i=t.split("-"),s=i[0],l=i[1],d=l===void 0?"":l;return"".concat(s,"-").concat(d.toUpperCase())}function ac(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,i=n.fallbackLocale,s=i===void 0?"en-US":i,l=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],h=[],c=0,p=d;c<p.length;c++){var g=p[c];h=h.concat(ma(g))}var u=navigator.language,m=u&&ma(u);l=l.concat(h,m)}return r&&l.push(s),l.filter(tc).map(lr).filter(nc)}var ic=Ni(ac,{cacheKey:JSON.stringify});function oc(t){return ic(t)[0]||null}var Wi=Ni(oc,{cacheKey:JSON.stringify});function Ee(t,n,a){return function(i,s=a){const l=t(i)+s;return n(l)}}function Ut(t){return function(a){return new Date(t(a).getTime()-1)}}function qt(t,n){return function(r){return[t(r),n(r)]}}function G(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function Ge(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function yn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function Ct(t){const n=G(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const sc=Ee(G,Ct,-100),zi=Ee(G,Ct,100),Dr=Ut(zi),lc=Ee(G,Dr,-100),Bi=qt(Ct,Dr);function Ve(t){const n=G(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Ri=Ee(G,Ve,-10),Ar=Ee(G,Ve,10),vn=Ut(Ar),Hi=Ee(G,vn,-10),Yi=qt(Ve,vn);function Tt(t){const n=G(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Gi=Ee(G,Tt,-1),Ir=Ee(G,Tt,1),bn=Ut(Ir),Vi=Ee(G,bn,-1),cc=qt(Tt,bn);function Mr(t,n){return function(r,i=n){const s=G(r),l=Ge(r)+i,d=new Date;return d.setFullYear(s,l,1),d.setHours(0,0,0,0),t(d)}}function st(t){const n=G(t),a=Ge(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Qi=Mr(st,-1),Lr=Mr(st,1),Kt=Ut(Lr),Ui=Mr(Kt,-1),dc=qt(st,Kt);function pc(t,n){return function(r,i=n){const s=G(r),l=Ge(r),d=yn(r)+i,h=new Date;return h.setFullYear(s,l,d),h.setHours(0,0,0,0),t(h)}}function Xt(t){const n=G(t),a=Ge(t),r=yn(t),i=new Date;return i.setFullYear(n,a,r),i.setHours(0,0,0,0),i}const xc=pc(Xt,1),Or=Ut(xc),uc=qt(Xt,Or);function qi(t){return yn(Kt(t))}var oe={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},hc={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Pr=[0,1,2,3,4,5,6],Qn=new Map;function fc(t){return function(a,r){var i=a||Wi();Qn.has(i)||Qn.set(i,new Map);var s=Qn.get(i);return s.has(t)||s.set(t,new Intl.DateTimeFormat(i||void 0,t).format),s.get(t)(r)}}function gc(t){var n=new Date(t);return new Date(n.setHours(12))}function lt(t){return function(n,a){return fc(t)(n,gc(a))}}var mc={day:"numeric"},yc={day:"numeric",month:"long",year:"numeric"},vc={month:"long"},bc={month:"long",year:"numeric"},jc={weekday:"short"},wc={weekday:"long"},kc={year:"numeric"},$c=lt(mc),Sc=lt(yc),Cc=lt(vc),Ki=lt(bc),Tc=lt(jc),Dc=lt(wc),jn=lt(kc),Ac=Pr[0],Ic=Pr[5],ya=Pr[6];function Ht(t,n){n===void 0&&(n=oe.ISO_8601);var a=t.getDay();switch(n){case oe.ISO_8601:return(a+6)%7;case oe.ISLAMIC:return(a+1)%7;case oe.HEBREW:case oe.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function Mc(t){var n=Ct(t);return G(n)}function Lc(t){var n=Ve(t);return G(n)}function cr(t,n){n===void 0&&(n=oe.ISO_8601);var a=G(t),r=Ge(t),i=t.getDate()-Ht(t,n);return new Date(a,r,i)}function Oc(t,n){n===void 0&&(n=oe.ISO_8601);var a=n===oe.GREGORY?oe.GREGORY:oe.ISO_8601,r=cr(t,n),i=G(t)+1,s,l;do s=new Date(i,0,a===oe.ISO_8601?4:1),l=cr(s,n),i-=1;while(t<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function it(t,n){switch(t){case"century":return Ct(n);case"decade":return Ve(n);case"year":return Tt(n);case"month":return st(n);case"day":return Xt(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Pc(t,n){switch(t){case"century":return sc(n);case"decade":return Ri(n);case"year":return Gi(n);case"month":return Qi(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Xi(t,n){switch(t){case"century":return zi(n);case"decade":return Ar(n);case"year":return Ir(n);case"month":return Lr(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function _c(t,n){switch(t){case"decade":return Ri(n,-100);case"year":return Gi(n,-10);case"month":return Qi(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ec(t,n){switch(t){case"decade":return Ar(n,100);case"year":return Ir(n,10);case"month":return Lr(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ji(t,n){switch(t){case"century":return Dr(n);case"decade":return vn(n);case"year":return bn(n);case"month":return Kt(n);case"day":return Or(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Fc(t,n){switch(t){case"century":return lc(n);case"decade":return Hi(n);case"year":return Vi(n);case"month":return Ui(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Nc(t,n){switch(t){case"decade":return Hi(n,-100);case"year":return Vi(n,-10);case"month":return Ui(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function va(t,n){switch(t){case"century":return Bi(n);case"decade":return Yi(n);case"year":return cc(n);case"month":return dc(n);case"day":return uc(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Wc(t,n,a){var r=[n,a].sort(function(i,s){return i.getTime()-s.getTime()});return[it(t,r[0]),Ji(t,r[1])]}function Zi(t,n,a){return a.map(function(r){return(n||jn)(t,r)}).join(" – ")}function zc(t,n,a){return Zi(t,n,Bi(a))}function eo(t,n,a){return Zi(t,n,Yi(a))}function Bc(t){return t.getDay()===new Date().getDay()}function to(t,n){n===void 0&&(n=oe.ISO_8601);var a=t.getDay();switch(n){case oe.ISLAMIC:case oe.HEBREW:return a===Ic||a===ya;case oe.ISO_8601:case oe.GREGORY:return a===ya||a===Ac;default:throw new Error("Unsupported calendar type.")}}var De="react-calendar__navigation";function Rc(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,i=r===void 0?Ki:r,s=t.formatYear,l=s===void 0?jn:s,d=t.locale,h=t.maxDate,c=t.minDate,p=t.navigationAriaLabel,g=p===void 0?"":p,u=t.navigationAriaLive,m=t.navigationLabel,v=t.next2AriaLabel,w=v===void 0?"":v,j=t.next2Label,k=j===void 0?"»":j,$=t.nextAriaLabel,T=$===void 0?"":$,O=t.nextLabel,F=O===void 0?"›":O,S=t.prev2AriaLabel,A=S===void 0?"":S,N=t.prev2Label,z=N===void 0?"«":N,C=t.prevAriaLabel,Y=C===void 0?"":C,U=t.prevLabel,te=U===void 0?"‹":U,V=t.setActiveStartDate,b=t.showDoubleView,P=t.view,q=t.views,le=q.indexOf(P)>0,de=P!=="century",X=Pc(P,n),H=de?_c(P,n):void 0,ye=Xi(P,n),se=de?Ec(P,n):void 0,ge=function(){if(X.getFullYear()<0)return!0;var ne=Fc(P,n);return c&&c>=ne}(),B=de&&function(){if(H.getFullYear()<0)return!0;var ne=Nc(P,n);return c&&c>=ne}(),we=h&&h<ye,Qe=de&&h&&h<se;function Me(){V(X,"prev")}function ve(){V(H,"prev2")}function ct(){V(ye,"next")}function Ue(){V(se,"next2")}function Fe(ne){var At=function(){switch(P){case"century":return zc(d,l,ne);case"decade":return eo(d,l,ne);case"year":return l(d,ne);case"month":return i(d,ne);default:throw new Error("Invalid view: ".concat(P,"."))}}();return m?m({date:ne,label:At,locale:d||Wi()||void 0,view:P}):At}function $n(){var ne="".concat(De,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":u,className:ne,disabled:!le,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(ne,"__labelText ").concat(ne,"__labelText--from"),children:Fe(n)}),b?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(ne,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(ne,"__labelText ").concat(ne,"__labelText--to"),children:Fe(ye)})]}):null]})}return e.jsxs("div",{className:De,children:[z!==null&&de?e.jsx("button",{"aria-label":A,className:"".concat(De,"__arrow ").concat(De,"__prev2-button"),disabled:B,onClick:ve,type:"button",children:z}):null,te!==null&&e.jsx("button",{"aria-label":Y,className:"".concat(De,"__arrow ").concat(De,"__prev-button"),disabled:ge,onClick:Me,type:"button",children:te}),$n(),F!==null&&e.jsx("button",{"aria-label":T,className:"".concat(De,"__arrow ").concat(De,"__next-button"),disabled:we,onClick:ct,type:"button",children:F}),k!==null&&de?e.jsx("button",{"aria-label":w,className:"".concat(De,"__arrow ").concat(De,"__next2-button"),disabled:Qe,onClick:Ue,type:"button",children:k}):null]})}var $t=function(){return $t=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$t.apply(this,arguments)},Hc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ba(t){return"".concat(t,"%")}function _r(t){var n=t.children,a=t.className,r=t.count,i=t.direction,s=t.offset,l=t.style,d=t.wrap,h=Hc(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",$t({className:a,style:$t({display:"flex",flexDirection:i,flexWrap:d?"wrap":"nowrap"},l)},h,{children:f.Children.map(n,function(c,p){var g=s&&p===0?ba(100*s/r):null;return f.cloneElement(c,$t($t({},c.props),{style:{flexBasis:ba(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function Yc(t,n,a){return n&&n>t?n:a&&a<t?a:t}function Yt(t,n){return n[0]<=t&&n[1]>=t}function Gc(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function no(t,n){return Yt(t[0],n)||Yt(t[1],n)}function ja(t,n,a){var r=no(n,t),i=[];if(r){i.push(a);var s=Yt(t[0],n),l=Yt(t[1],n);s&&i.push("".concat(a,"Start")),l&&i.push("".concat(a,"End")),s&&l&&i.push("".concat(a,"BothEnds"))}return i}function Vc(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Qc(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,i="react-calendar__tile",s=[i];if(!a)return s;var l=new Date,d=function(){if(Array.isArray(a))return a;var m=t.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return va(m,a)}();if(Yt(l,d)&&s.push("".concat(i,"--now")),!n||!Vc(n))return s;var h=function(){if(Array.isArray(n))return n;var m=t.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return va(m,n)}();Gc(h,d)?s.push("".concat(i,"--active")):no(h,d)&&s.push("".concat(i,"--hasActive"));var c=ja(h,d,"".concat(i,"--range"));s.push.apply(s,c);var p=Array.isArray(n)?n:[n];if(r&&p.length===1){var g=r>h[0]?[h[0],r]:[r,h[0]],u=ja(g,d,"".concat(i,"--hover"));s.push.apply(s,u)}return s}function wn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,i=t.dateTransform,s=t.dateType,l=t.end,d=t.hover,h=t.offset,c=t.renderTile,p=t.start,g=t.step,u=g===void 0?1:g,m=t.value,v=t.valueType,w=[],j=p;j<=l;j+=u){var k=i(j);w.push(c({classes:Qc({date:k,dateType:s,hover:d,value:m,valueType:v}),date:k}))}return e.jsx(_r,{className:n,count:r,offset:h,wrap:!0,children:w})}function kn(t){var n=t.activeStartDate,a=t.children,r=t.classes,i=t.date,s=t.formatAbbr,l=t.locale,d=t.maxDate,h=t.maxDateTransform,c=t.minDate,p=t.minDateTransform,g=t.onClick,u=t.onMouseOver,m=t.style,v=t.tileClassName,w=t.tileContent,j=t.tileDisabled,k=t.view,$=f.useMemo(function(){var O={activeStartDate:n,date:i,view:k};return typeof v=="function"?v(O):v},[n,i,v,k]),T=f.useMemo(function(){var O={activeStartDate:n,date:i,view:k};return typeof w=="function"?w(O):w},[n,i,w,k]);return e.jsxs("button",{className:mn(r,$),disabled:c&&p(c)>i||d&&h(d)<i||(j==null?void 0:j({activeStartDate:n,date:i,view:k})),onClick:g?function(O){return g(i,O)}:void 0,onFocus:u?function(){return u(i)}:void 0,onMouseOver:u?function(){return u(i)}:void 0,style:m,type:"button",children:[s?e.jsx("abbr",{"aria-label":s(l,i),children:a}):a,T]})}var dr=function(){return dr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},dr.apply(this,arguments)},Uc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},wa="react-calendar__century-view__decades__decade";function qc(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,i=t.formatYear,s=i===void 0?jn:i,l=Uc(t,["classes","currentCentury","formatYear"]),d=l.date,h=l.locale,c=[];return a&&c.push.apply(c,a),c.push(wa),Ct(d).getFullYear()!==r&&c.push("".concat(wa,"--neighboringCentury")),e.jsx(kn,dr({},l,{classes:c,maxDateTransform:vn,minDateTransform:Ve,view:"century",children:eo(h,s,d)}))}var pr=function(){return pr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pr.apply(this,arguments)},ka=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Kc(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,i=t.value,s=t.valueType,l=ka(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=Mc(n),h=d+(r?119:99);return e.jsx(wn,{className:"react-calendar__century-view__decades",dateTransform:Ve,dateType:"decade",end:h,hover:a,renderTile:function(c){var p=c.date,g=ka(c,["date"]);return e.jsx(qc,pr({},l,g,{activeStartDate:n,currentCentury:d,date:p}),p.getTime())},start:d,step:10,value:i,valueType:s})}var xr=function(){return xr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xr.apply(this,arguments)};function Xc(t){function n(){return e.jsx(Kc,xr({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var ur=function(){return ur=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ur.apply(this,arguments)},Jc=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},$a="react-calendar__decade-view__years__year";function Zc(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,i=t.formatYear,s=i===void 0?jn:i,l=Jc(t,["classes","currentDecade","formatYear"]),d=l.date,h=l.locale,c=[];return a&&c.push.apply(c,a),c.push($a),Ve(d).getFullYear()!==r&&c.push("".concat($a,"--neighboringDecade")),e.jsx(kn,ur({},l,{classes:c,maxDateTransform:bn,minDateTransform:Tt,view:"decade",children:s(h,d)}))}var hr=function(){return hr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hr.apply(this,arguments)},Sa=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function ed(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,i=t.value,s=t.valueType,l=Sa(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=Lc(n),h=d+(r?11:9);return e.jsx(wn,{className:"react-calendar__decade-view__years",dateTransform:Tt,dateType:"year",end:h,hover:a,renderTile:function(c){var p=c.date,g=Sa(c,["date"]);return e.jsx(Zc,hr({},l,g,{activeStartDate:n,currentDecade:d,date:p}),p.getTime())},start:d,value:i,valueType:s})}var fr=function(){return fr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fr.apply(this,arguments)};function td(t){function n(){return e.jsx(ed,fr({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var gr=function(){return gr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gr.apply(this,arguments)},nd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Ca=function(t,n,a){if(a||arguments.length===2)for(var r=0,i=n.length,s;r<i;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return t.concat(s||Array.prototype.slice.call(n))},rd="react-calendar__year-view__months__month";function ad(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,i=r===void 0?Cc:r,s=t.formatMonthYear,l=s===void 0?Ki:s,d=nd(t,["classes","formatMonth","formatMonthYear"]),h=d.date,c=d.locale;return e.jsx(kn,gr({},d,{classes:Ca(Ca([],a,!0),[rd],!1),formatAbbr:l,maxDateTransform:Kt,minDateTransform:st,view:"year",children:i(c,h)}))}var mr=function(){return mr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mr.apply(this,arguments)},Ta=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function id(t){var n=t.activeStartDate,a=t.hover,r=t.value,i=t.valueType,s=Ta(t,["activeStartDate","hover","value","valueType"]),l=0,d=11,h=G(n);return e.jsx(wn,{className:"react-calendar__year-view__months",dateTransform:function(c){var p=new Date;return p.setFullYear(h,c,1),st(p)},dateType:"month",end:d,hover:a,renderTile:function(c){var p=c.date,g=Ta(c,["date"]);return e.jsx(ad,mr({},s,g,{activeStartDate:n,date:p}),p.getTime())},start:l,value:r,valueType:i})}var yr=function(){return yr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yr.apply(this,arguments)};function od(t){function n(){return e.jsx(id,yr({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var vr=function(){return vr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vr.apply(this,arguments)},sd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Un="react-calendar__month-view__days__day";function ld(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,i=t.currentMonthIndex,s=t.formatDay,l=s===void 0?$c:s,d=t.formatLongDate,h=d===void 0?Sc:d,c=sd(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=c.date,g=c.locale,u=[];return r&&u.push.apply(u,r),u.push(Un),to(p,n)&&u.push("".concat(Un,"--weekend")),p.getMonth()!==i&&u.push("".concat(Un,"--neighboringMonth")),e.jsx(kn,vr({},c,{classes:u,formatAbbr:h,maxDateTransform:Or,minDateTransform:Xt,view:"month",children:l(g,p)}))}var br=function(){return br=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},br.apply(this,arguments)},Da=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function cd(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,i=t.showFixedNumberOfWeeks,s=t.showNeighboringMonth,l=t.value,d=t.valueType,h=Da(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=G(n),p=Ge(n),g=i||s,u=Ht(n,a),m=g?0:u,v=(g?-u:0)+1,w=function(){if(i)return v+6*7-1;var j=qi(n);if(s){var k=new Date;k.setFullYear(c,p,j),k.setHours(0,0,0,0);var $=7-Ht(k,a)-1;return j+$}return j}();return e.jsx(wn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(j){var k=new Date;return k.setFullYear(c,p,j),Xt(k)},dateType:"day",hover:r,end:w,renderTile:function(j){var k=j.date,$=Da(j,["date"]);return e.jsx(ld,br({},h,$,{activeStartDate:n,calendarType:a,currentMonthIndex:p,date:k}),k.getTime())},offset:m,start:v,value:l,valueType:d})}var ro="react-calendar__month-view__weekdays",qn="".concat(ro,"__weekday");function dd(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?Tc:a,i=t.formatWeekday,s=i===void 0?Dc:i,l=t.locale,d=t.onMouseLeave,h=new Date,c=st(h),p=G(c),g=Ge(c),u=[],m=1;m<=7;m+=1){var v=new Date(p,g,m-Ht(c,n)),w=s(l,v);u.push(e.jsx("div",{className:mn(qn,Bc(v)&&"".concat(qn,"--current"),to(v,n)&&"".concat(qn,"--weekend")),children:e.jsx("abbr",{"aria-label":w,title:w,children:r(l,v).replace(".","")})},m))}return e.jsx(_r,{className:ro,count:7,onFocus:d,onMouseOver:d,children:u})}var fn=function(){return fn=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fn.apply(this,arguments)},Aa=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Ia="react-calendar__tile";function pd(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var i=t.date,s=t.onClickWeekNumber,l=t.weekNumber,d=Aa(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",fn({},d,{className:Ia,onClick:function(h){return s(l,i,h)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=Aa(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",fn({},d,{className:Ia,children:r}))}}function xd(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,i=t.onMouseLeave,s=t.showFixedNumberOfWeeks,l=function(){if(s)return 6;var c=qi(n),p=Ht(n,a),g=c-(7-p);return 1+Math.ceil(g/7)}(),d=function(){for(var c=G(n),p=Ge(n),g=yn(n),u=[],m=0;m<l;m+=1)u.push(cr(new Date(c,p,g+m*7),a));return u}(),h=d.map(function(c){return Oc(c,a)});return e.jsx(_r,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:h.map(function(c,p){var g=d[p];if(!g)throw new Error("date is not defined");return e.jsx(pd,{date:g,onClickWeekNumber:r,weekNumber:c},c)})})}var jr=function(){return jr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jr.apply(this,arguments)},ud=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function hd(t){if(t)for(var n=0,a=Object.entries(hc);n<a.length;n++){var r=a[n],i=r[0],s=r[1];if(s.includes(t))return i}return oe.ISO_8601}function fd(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,i=t.showFixedNumberOfWeeks,s=t.calendarType,l=s===void 0?hd(a):s,d=t.formatShortWeekday,h=t.formatWeekday,c=t.onClickWeekNumber,p=t.showWeekNumbers,g=ud(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function u(){return e.jsx(dd,{calendarType:l,formatShortWeekday:d,formatWeekday:h,locale:a,onMouseLeave:r})}function m(){return p?e.jsx(xd,{activeStartDate:n,calendarType:l,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function v(){return e.jsx(cd,jr({calendarType:l},g))}var w="react-calendar__month-view";return e.jsx("div",{className:mn(w,p?"".concat(w,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[u(),v()]})]})})}var St=function(){return St=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},St.apply(this,arguments)},on="react-calendar",un=["century","decade","year","month"],gd=["decade","year","month","day"],Er=new Date;Er.setFullYear(1,0,1);Er.setHours(0,0,0,0);var md=new Date(864e13);function Rt(t){return t instanceof Date?t:new Date(t)}function ao(t,n){return un.slice(un.indexOf(t),un.indexOf(n)+1)}function yd(t,n,a){var r=ao(n,a);return r.indexOf(t)!==-1}function Fr(t,n,a){return t&&yd(t,n,a)?t:a}function io(t){var n=un.indexOf(t);return gd[n]}function vd(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Rt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function oo(t,n){var a=t.value,r=t.minDate,i=t.maxDate,s=t.maxDetail,l=vd(a,n);if(!l)return null;var d=io(s),h=function(){switch(n){case 0:return it(d,l);case 1:return Ji(d,l);default:throw new Error("Invalid index value: ".concat(n))}}();return Yc(h,r,i)}var Nr=function(t){return oo(t,0)},so=function(t){return oo(t,1)},bd=function(t){return[Nr,so].map(function(n){return n(t)})};function lo(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,i=t.minDetail,s=t.value,l=t.view,d=Fr(l,i,a),h=Nr({value:s,minDate:r,maxDate:n,maxDetail:a})||new Date;return it(d,h)}function jd(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,i=t.defaultView,s=t.maxDate,l=t.maxDetail,d=t.minDate,h=t.minDetail,c=t.value,p=t.view,g=Fr(p,h,l),u=n||a;return u?it(g,u):lo({maxDate:s,maxDetail:l,minDate:d,minDetail:h,value:c||r,view:p||i})}function Kn(t){return t&&(!Array.isArray(t)||t.length===1)}function sn(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var wd=f.forwardRef(function(n,a){var r=n.activeStartDate,i=n.allowPartialRange,s=n.calendarType,l=n.className,d=n.defaultActiveStartDate,h=n.defaultValue,c=n.defaultView,p=n.formatDay,g=n.formatLongDate,u=n.formatMonth,m=n.formatMonthYear,v=n.formatShortWeekday,w=n.formatWeekday,j=n.formatYear,k=n.goToRangeStartOnSelect,$=k===void 0?!0:k,T=n.inputRef,O=n.locale,F=n.maxDate,S=F===void 0?md:F,A=n.maxDetail,N=A===void 0?"month":A,z=n.minDate,C=z===void 0?Er:z,Y=n.minDetail,U=Y===void 0?"century":Y,te=n.navigationAriaLabel,V=n.navigationAriaLive,b=n.navigationLabel,P=n.next2AriaLabel,q=n.next2Label,le=n.nextAriaLabel,de=n.nextLabel,X=n.onActiveStartDateChange,H=n.onChange,ye=n.onClickDay,se=n.onClickDecade,ge=n.onClickMonth,B=n.onClickWeekNumber,we=n.onClickYear,Qe=n.onDrillDown,Me=n.onDrillUp,ve=n.onViewChange,ct=n.prev2AriaLabel,Ue=n.prev2Label,Fe=n.prevAriaLabel,$n=n.prevLabel,ne=n.returnValue,At=ne===void 0?"start":ne,me=n.selectRange,Jt=n.showDoubleView,Br=n.showFixedNumberOfWeeks,Rr=n.showNavigation,Mo=Rr===void 0?!0:Rr,Lo=n.showNeighboringCentury,Oo=n.showNeighboringDecade,Hr=n.showNeighboringMonth,Po=Hr===void 0?!0:Hr,_o=n.showWeekNumbers,Eo=n.tileClassName,Fo=n.tileContent,No=n.tileDisabled,Sn=n.value,Yr=n.view,Gr=f.useState(d),Wo=Gr[0],Zt=Gr[1],Vr=f.useState(null),zo=Vr[0],Qr=Vr[1],Ur=f.useState(Array.isArray(h)?h.map(function(E){return E!==null?Rt(E):null}):h!=null?Rt(h):null),Cn=Ur[0],Bo=Ur[1],qr=f.useState(c),Ro=qr[0],Kr=qr[1],pe=r||Wo||jd({activeStartDate:r,defaultActiveStartDate:d,defaultValue:h,defaultView:c,maxDate:S,maxDetail:N,minDate:C,minDetail:U,value:Sn,view:Yr}),xe=function(){var E=function(){return me&&Kn(Cn)?Cn:Sn!==void 0?Sn:Cn}();return E?Array.isArray(E)?E.map(function(K){return K!==null?Rt(K):null}):E!==null?Rt(E):null:null}(),en=io(N),Q=Fr(Yr||Ro,U,N),ke=ao(U,N),Ho=me?zo:null,Tn=ke.indexOf(Q)<ke.length-1,Xr=ke.indexOf(Q)>0,Jr=f.useCallback(function(E){var K=function(){switch(At){case"start":return Nr;case"end":return so;case"range":return bd;default:throw new Error("Invalid returnValue.")}}();return K({maxDate:S,maxDetail:N,minDate:C,value:E})},[S,N,C,At]),Dn=f.useCallback(function(E,K){Zt(E);var Z={action:K,activeStartDate:E,value:xe,view:Q};X&&!sn(pe,E)&&X(Z)},[pe,X,xe,Q]),tn=f.useCallback(function(E,K){var Z=function(){switch(Q){case"century":return se;case"decade":return we;case"year":return ge;case"month":return ye;default:throw new Error("Invalid view: ".concat(Q,"."))}}();Z&&Z(E,K)},[ye,se,ge,we,Q]),An=f.useCallback(function(E,K){if(Tn){tn(E,K);var Z=ke[ke.indexOf(Q)+1];if(!Z)throw new Error("Attempted to drill down from the lowest view.");Zt(E),Kr(Z);var be={action:"drillDown",activeStartDate:E,value:xe,view:Z};X&&!sn(pe,E)&&X(be),ve&&Q!==Z&&ve(be),Qe&&Qe(be)}},[pe,Tn,X,tn,Qe,ve,xe,Q,ke]),In=f.useCallback(function(){if(Xr){var E=ke[ke.indexOf(Q)-1];if(!E)throw new Error("Attempted to drill up from the highest view.");var K=it(E,pe);Zt(K),Kr(E);var Z={action:"drillUp",activeStartDate:K,value:xe,view:E};X&&!sn(pe,K)&&X(Z),ve&&Q!==E&&ve(Z),Me&&Me(Z)}},[pe,Xr,X,Me,ve,xe,Q,ke]),Mn=f.useCallback(function(E,K){var Z=xe;tn(E,K);var be=me&&!Kn(Z),je;if(me)if(be)je=it(en,E);else{if(!Z)throw new Error("previousValue is required");if(Array.isArray(Z))throw new Error("previousValue must not be an array");je=Wc(en,Z,E)}else je=Jr(E);var On=!me||be||$?lo({maxDate:S,maxDetail:N,minDate:C,minDetail:U,value:je,view:Q}):null;K.persist(),Zt(On),Bo(je);var Qo={action:"onChange",activeStartDate:On,value:je,view:Q};if(X&&!sn(pe,On)&&X(Qo),H)if(me){var Uo=Kn(je);if(!Uo)H(je||null,K);else if(i){if(Array.isArray(je))throw new Error("value must not be an array");H([je||null,null],K)}}else H(je||null,K)},[pe,i,Jr,$,S,N,C,U,X,H,tn,me,xe,en,Q]);function Yo(E){Qr(E)}function Ln(){Qr(null)}f.useImperativeHandle(a,function(){return{activeStartDate:pe,drillDown:An,drillUp:In,onChange:Mn,setActiveStartDate:Dn,value:xe,view:Q}},[pe,An,In,Mn,Dn,xe,Q]);function Zr(E){var K=E?Xi(Q,pe):it(Q,pe),Z=Tn?An:Mn,be={activeStartDate:K,hover:Ho,locale:O,maxDate:S,minDate:C,onClick:Z,onMouseOver:me?Yo:void 0,tileClassName:Eo,tileContent:Fo,tileDisabled:No,value:xe,valueType:en};switch(Q){case"century":return e.jsx(Xc,St({formatYear:j,showNeighboringCentury:Lo},be));case"decade":return e.jsx(td,St({formatYear:j,showNeighboringDecade:Oo},be));case"year":return e.jsx(od,St({formatMonth:u,formatMonthYear:m},be));case"month":return e.jsx(fd,St({calendarType:s,formatDay:p,formatLongDate:g,formatShortWeekday:v,formatWeekday:w,onClickWeekNumber:B,onMouseLeave:me?Ln:void 0,showFixedNumberOfWeeks:typeof Br<"u"?Br:Jt,showNeighboringMonth:Po,showWeekNumbers:_o},be));default:throw new Error("Invalid view: ".concat(Q,"."))}}function Go(){return Mo?e.jsx(Rc,{activeStartDate:pe,drillUp:In,formatMonthYear:m,formatYear:j,locale:O,maxDate:S,minDate:C,navigationAriaLabel:te,navigationAriaLive:V,navigationLabel:b,next2AriaLabel:P,next2Label:q,nextAriaLabel:le,nextLabel:de,prev2AriaLabel:ct,prev2Label:Ue,prevAriaLabel:Fe,prevLabel:$n,setActiveStartDate:Dn,showDoubleView:Jt,view:Q,views:ke}):null}var Vo=Array.isArray(xe)?xe:[xe];return e.jsxs("div",{className:mn(on,me&&Vo.length===1&&"".concat(on,"--selectRange"),Jt&&"".concat(on,"--doubleView"),l),ref:T,children:[Go(),e.jsxs("div",{className:"".concat(on,"__viewContainer"),onBlur:me?Ln:void 0,onMouseLeave:me?Ln:void 0,children:[Zr(),Jt?Zr(!0):null]})]})});const kd=M`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,$d=M`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Sd=M`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,Cd=M`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,Td=M`
  from { opacity: 0; }
  to { opacity: 1; }
`,Dd=o.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${Td} 0.15s ease-out;
`,Ad=o.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?Re`animation: ${Cd} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Re`animation: ${Sd} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?Re`animation: ${$d} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Re`animation: ${kd} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,Id=o.div`
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
`,Gt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:i})=>{const s=f.useRef(null),[l,d]=f.useState(!1),[h,c]=f.useState(!1),[p,g]=f.useState(!1),[u,m]=f.useState({top:0,left:0});f.useEffect(()=>{if(t&&(i!=null&&i.current)){const $=i.current.getBoundingClientRect(),T=280,O=320,F=8,A=window.innerHeight-$.bottom-F<O;g(A);let N;A?N=$.top-O-F:N=$.bottom+F;let z=$.right-T;z<8&&(z=8),z+T>window.innerWidth-8&&(z=window.innerWidth-T-8),N<8&&(N=8),m({top:N,left:z}),c(!0),d(!1)}},[t,i]);const v=f.useCallback(()=>{d(!0),setTimeout(()=>{c(!1),d(!1),n()},150)},[n]),w=f.useCallback($=>{s.current&&!s.current.contains($.target)&&v()},[v]);f.useEffect(()=>{if(t){const $=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout($),document.removeEventListener("mousedown",w)}}},[t,w]);const j=f.useCallback($=>{$ instanceof Date&&(r(at($)),v())},[r,v]);if(!h)return null;const k=new Date(a+"T00:00:00");return Ci.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(Dd,{onClick:v}),e.jsx(Ad,{ref:s,$isClosing:l,$openUpward:p,$top:u.top,$left:u.left,children:e.jsx(Id,{children:e.jsx(wd,{onChange:j,value:k,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:($,T)=>T.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},Md=o(y.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,Ld=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,Od=o.button`
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
`,Pd=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,Wr=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,_d=o(Wr)`
  height: 14px;
`,Ed=o(Wr)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,Fd=o(Wr)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,Nd=o(y.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,Wd=o(y.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,zd=o.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,Bd=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Rd=o(y.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Hd=o.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,Yd=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,Gd=o.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,Vd=o(y.button).attrs({type:"button"})`
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
`,Qd=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,Ma=o(y.button).attrs({type:"button"})`
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
`,Ud=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),qd=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),ln=[.25,.1,.25,1],Kd=({selectedDate:t,onDateChange:n})=>{const[a,r]=f.useState(!1),[i,s]=f.useState(1),l=f.useRef(null),d=f.useRef(t);if(d.current!==t){const $=new Date(d.current+"T00:00:00"),T=new Date(t+"T00:00:00");s(T>$?1:-1),d.current=t}const h=f.useCallback($=>{$.preventDefault(),$.stopPropagation();const T=at(new Date),O=new Date(t+"T00:00:00"),F=new Date(T+"T00:00:00");s(F>O?1:-1),n(T)},[t,n]),c=f.useCallback($=>{$.preventDefault(),$.stopPropagation(),s(-1);const T=new Date(t+"T00:00:00");T.setDate(T.getDate()-1),n(at(T))},[t,n]),p=f.useCallback($=>{$.preventDefault(),$.stopPropagation(),s(1);const T=new Date(t+"T00:00:00");T.setDate(T.getDate()+1),n(at(T))},[t,n]),g=Ol(t),u=new Date(t+"T00:00:00"),m=u.getDate(),v=u.toLocaleDateString("en-US",{month:"short"}),w=u.toLocaleDateString("en-US",{weekday:"long"}),j=u.getFullYear(),k={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return e.jsxs(Md,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:ln},children:[e.jsxs(Ld,{children:[e.jsxs(Od,{ref:l,onClick:()=>r(!0),type:"button",children:[e.jsxs(Pd,{children:[e.jsx(_d,{children:e.jsx(ee,{mode:"popLayout",initial:!1,children:e.jsx(Nd,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ln},children:v},v)})}),e.jsx(Ed,{children:e.jsx(ee,{mode:"popLayout",initial:!1,children:e.jsx(Wd,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ln},children:m},m)})})]}),e.jsx(zd,{}),e.jsxs(Bd,{children:[e.jsx(Fd,{children:e.jsx(ee,{mode:"popLayout",initial:!1,children:e.jsx(Rd,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:ln},children:w},w)})}),e.jsx(Hd,{children:j})]})]}),e.jsxs(Yd,{children:[e.jsx(Gd,{children:e.jsx(ee,{children:!g&&e.jsx(Vd,{onClick:h,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Qd,{children:[e.jsx(Ma,{onClick:c,whileTap:{scale:.95},children:e.jsx(Ud,{})}),e.jsx(Ma,{onClick:p,whileTap:{scale:.95},children:e.jsx(qd,{})})]})]})]}),e.jsx(Gt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:l})]})},Xd=o.div`
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
`,La=o.input`
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
`,Jd=o.button`
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
`,Zd=o(y.button)`
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
`,e0=[{value:"bank_debit",label:"Bank Debit"},{value:"bank_credit",label:"Bank Credit"},{value:"investment_credit",label:"Investment Deposit"},{value:"investment_debit",label:"Investment Withdrawal"}];function t0(t){const n=t.replace(/[^\d]/g,"");return n?He(parseInt(n)):""}function n0(t){return parseInt(t.replace(/,/g,""))||0}const r0=({onAddTransaction:t,defaultDate:n})=>{const[a,r]=f.useState("bank_debit"),[i,s]=f.useState(Ye[0].id),[l,d]=f.useState(""),[h,c]=f.useState(""),[p,g]=f.useState(""),[u,m]=f.useState(n||at(new Date));f.useEffect(()=>{n&&m(n)},[n]);const[v,w]=f.useState(!1),j=f.useRef(null),k=a==="investment_credit"||a==="investment_debit",$=f.useMemo(()=>k?sr():ze(),[k]),T=f.useMemo(()=>a==="investment_credit"||a==="investment_debit"?ze():[],[a]),O=k&&i!=="pf",F=f.useCallback(C=>{r(C);const Y=C==="investment_credit"||C==="investment_debit",U=Y?sr():ze(),te=U.length>0?U[0].id:"";s(te);const V=ze();Y&&te!=="pf"&&V.length>0?d(V[0].id):d("")},[]),S=n0(h),A=i&&S>0&&p.trim(),N=f.useCallback(()=>{if(!A)return;const C=Fl(a,i,S,p.trim(),u,O?l:void 0);t(C),c(""),g("")},[a,i,S,p,u,l,O,A,t]),z=C=>new Date(C+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(Xd,{children:[e.jsxs(mt,{children:[e.jsx(yt,{children:"Type"}),e.jsx(Xn,{value:a,onChange:C=>F(C.target.value),children:e0.map(C=>e.jsx("option",{value:C.value,children:C.label},C.value))})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:k?"Investment Account":"Bank Account"}),e.jsx(Xn,{value:i,onChange:C=>{const Y=C.target.value;if(s(Y),Y==="pf")d("");else if(k&&!l){const U=ze();U.length>0&&d(U[0].id)}},children:$.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))})]}),O&&e.jsxs(mt,{children:[e.jsx(yt,{children:a==="investment_credit"?"From Bank":"To Bank"}),e.jsx(Xn,{value:l,onChange:C=>d(C.target.value),children:T.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Amount"}),e.jsx(La,{type:"text",inputMode:"numeric",placeholder:"0",value:h,onChange:C=>c(t0(C.target.value))})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Description"}),e.jsx(La,{type:"text",placeholder:"What's this for?",value:p,onChange:C=>g(C.target.value),onKeyDown:C=>C.key==="Enter"&&N()})]}),e.jsxs(mt,{children:[e.jsx(yt,{children:"Date"}),e.jsx(Jd,{ref:j,type:"button",onClick:()=>w(!0),children:z(u)}),e.jsx(Gt,{isOpen:v,onClose:()=>w(!1),selectedDate:u,onDateSelect:C=>{m(C),w(!1)},triggerRef:j})]}),e.jsx(Zd,{disabled:!A,onClick:N,whileTap:{scale:.98},children:"Add Transaction"})]})},a0=f.memo(r0),co=[.25,.1,.25,1],po={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},xo={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:co}}};function uo(t){f.useEffect(()=>{if(t)return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.documentElement.style.overflow="",document.body.style.overflow="",document.body.style.touchAction=""}},[t])}const ho=o(y.div)`
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
`,fo=o(y.div)`
  width: 100%;
  max-width: ${({$maxWidth:t})=>t||"440px"};
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,go=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,mo=o.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,yo=o(y.button)`
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
`,vo=o(yo)`
  left: 12px;
  color: var(--text-secondary);
`,bo=o(yo)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,jo=o.div`
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
`,wr=o.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,Oa=o.div`
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
`;const i0=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  & + & {
    border-top: 1px solid var(--border);
  }
`,o0=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,s0=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,l0=o.input`
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
`,c0=({isOpen:t,onClose:n,initialBalances:a,onSave:r})=>{const[i,s]=f.useState({});uo(t),f.useEffect(()=>{if(t){const p={};Ye.forEach(g=>{const u=a[g.id];p[g.id]=u?String(u):""}),s(p)}},[t,a]);const l=()=>{const p={};Object.entries(i).forEach(([g,u])=>{const m=parseFloat(u);!isNaN(m)&&m!==0&&(p[g]=m)}),r(p),n()},d=Ye.filter(p=>p.type==="bank"),h=Ye.filter(p=>p.type==="investment"),c=p=>p.map(g=>e.jsxs(i0,{children:[e.jsx(o0,{$color:g.color}),e.jsx(s0,{children:g.name}),e.jsx(l0,{type:"number",inputMode:"decimal",placeholder:"0",value:i[g.id]||"",onChange:u=>s(m=>({...m,[g.id]:u.target.value}))})]},g.id));return e.jsx(ee,{children:t&&e.jsx(ho,{variants:po,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(fo,{variants:xo,initial:"hidden",animate:"visible",exit:"exit",onClick:p=>p.stopPropagation(),children:[e.jsxs(go,{children:[e.jsx(vo,{onClick:n,children:"Cancel"}),e.jsx(mo,{children:"Initial Balances"}),e.jsx(bo,{onClick:l,children:"Save"})]}),e.jsxs(jo,{children:[e.jsxs(wr,{children:[e.jsx(Oa,{children:"Bank Accounts"}),c(d)]}),e.jsxs(wr,{children:[e.jsx(Oa,{children:"Investments"}),c(h)]})]})]})})})},vt=o.div`
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
`,Pa=o.input`
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
`,_a=o.select`
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
`,d0=o.button`
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
`,p0=o.div`
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,x0=({isOpen:t,onClose:n,transaction:a,onSave:r})=>{const[i,s]=f.useState(""),[l,d]=f.useState(""),[h,c]=f.useState(""),[p,g]=f.useState(""),[u,m]=f.useState(""),[v,w]=f.useState(!1),j=f.useRef(null);uo(t),f.useEffect(()=>{t&&a&&(s(String(a.amount)),d(a.description),c(a.date),g(a.accountId),m(a.linkedAccountId||""))},[t,a]);const k=(a==null?void 0:a.type)==="investment_credit"||(a==null?void 0:a.type)==="investment_debit",$=f.useMemo(()=>a?k?sr():ze():[],[a,k]),T=f.useCallback(()=>{if(!a)return;const S={...a,amount:parseFloat(i),description:l.trim(),date:h,accountId:p,linkedAccountId:k&&p!=="pf"?u:void 0};r(S),n()},[a,i,l,h,p,u,k,r,n]),O=parseFloat(i)>0&&l.trim(),F=S=>new Date(S+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsx(ee,{children:t&&a&&e.jsx(ho,{variants:po,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(fo,{variants:xo,initial:"hidden",animate:"visible",exit:"exit",onClick:S=>S.stopPropagation(),children:[e.jsxs(go,{children:[e.jsx(vo,{onClick:n,children:"Cancel"}),e.jsx(mo,{children:"Edit Transaction"}),e.jsx(bo,{onClick:T,disabled:!O,children:"Save"})]}),e.jsx(jo,{children:e.jsxs(wr,{children:[e.jsxs(vt,{children:[e.jsx(bt,{children:"Type"}),e.jsx(p0,{children:Nl(a.type)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Account"}),e.jsx(_a,{value:p,onChange:S=>g(S.target.value),children:$.map(S=>e.jsx("option",{value:S.id,children:S.name},S.id))})]}),k&&p!=="pf"&&e.jsxs(vt,{children:[e.jsx(bt,{children:a.type==="investment_credit"?"From Bank":"To Bank"}),e.jsx(_a,{value:u,onChange:S=>m(S.target.value),children:ze().map(S=>e.jsx("option",{value:S.id,children:S.name},S.id))})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Amount"}),e.jsx(Pa,{type:"number",inputMode:"decimal",value:i,onChange:S=>s(S.target.value)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Description"}),e.jsx(Pa,{type:"text",value:l,onChange:S=>d(S.target.value)})]}),e.jsxs(vt,{children:[e.jsx(bt,{children:"Date"}),e.jsx(d0,{ref:j,type:"button",onClick:()=>w(!0),children:F(h)}),e.jsx(Gt,{isOpen:v,onClose:()=>w(!1),selectedDate:h,onDateSelect:S=>{c(S),w(!1)},triggerRef:j})]})]})})]})})})};o(y.div)`
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
`;o(Sr)`
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
`;const u0=o.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,h0=o.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,f0=o(y.span)`
  display: inline-block;
`,g0=o.span`
  display: inline-block;
`,m0=[.25,.1,.25,1],y0=({value:t,className:n})=>{const a=f.useMemo(()=>t.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(u0,{className:n,children:a.map(({char:r,key:i,isDigit:s},l)=>s?e.jsx(h0,{children:e.jsx(ee,{mode:"popLayout",initial:!1,children:e.jsx(f0,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:m0},children:r},i)})},`wrapper-${l}`):e.jsx(g0,{children:r},`static-${l}`))})},Nt=f.memo(y0);o.h1`
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
`;const v0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),b0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),Ea=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),j0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),w0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),k0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),$0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"}),e.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),S0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M5 21V7l7-4 7 4v14"}),e.jsx("path",{d:"M9 21v-6h6v6"}),e.jsx("path",{d:"M10 10h4"})]}),C0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2"}),e.jsx("path",{d:"M12 11v6"}),e.jsx("path",{d:"M9 14h6"}),e.jsx("path",{d:"M16 7V5a4 4 0 0 0-8 0v2"})]}),T0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),D0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),A0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),I0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),M0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),L0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),O0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),P0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),_0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),E0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),Fa=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Ae=co,rt=[{id:"summary",label:"Summary",icon:v0(),accent:"green"},{id:"transactions",label:"History",icon:D0(),accent:"blue"},{id:"add",label:"Add",icon:A0(),accent:"orange"},{id:"manage",label:"Manage",icon:I0(),accent:"purple"}],F0=["bank_credit","investment_debit"],N0={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ae}}},W0={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},Na={"hdfc-bank":"/tools/images/HDFC.svg","icici-bank":"/tools/images/ICICI.svg"},z0={"mutual-funds":$0,ppf:S0,pf:C0},B0=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Wa=o.div`
  height: 1px;
  background: var(--border);
  margin: 0 4px;
`,R0=o.div`
  font-size: 24px;
  font-weight: 800;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  padding: 4px 16px 14px;
`,H0=o.div`
  height: 6px;
  display: flex;
  margin: 0 16px 14px;
  border-radius: 3px;
  overflow: hidden;
  gap: 2px;
`,za=o.div`
  width: ${({$width:t})=>t}%;
  background: ${({$color:t})=>t};
  border-radius: 3px;
  min-width: 4px;
`,Y0=o.div`
  display: flex;
  border-top: 1px solid var(--border);
`,Ba=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 16px;

  & + & {
    border-left: 1px solid var(--border);
  }
`,Ra=o.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
`,cn=o.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Ha=o.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,Jn=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Zn=o.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 14px 16px 4px;
`,Ya=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,Ga=o.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({$color:t})=>`${t}14`};

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:t})=>t};
  }
`,Va=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,Qa=o.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,G0=f.memo(function({balances:n}){const a=n.filter(p=>p.account.type==="bank"),r=n.filter(p=>p.account.type==="investment"),i=a.reduce((p,g)=>p+g.balance,0),s=r.reduce((p,g)=>p+g.balance,0),l=i+s,d=Math.abs(i)+Math.abs(s),h=d>0?Math.abs(i)/d*100:50,c=d>0?Math.abs(s)/d*100:50;return e.jsxs(B0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[e.jsxs(Jn,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.25,ease:Ae},children:[e.jsx(Zn,{children:"Net Worth"}),e.jsx(R0,{$positive:l>=0,children:e.jsx(Nt,{value:wt(l)})}),e.jsxs(H0,{children:[e.jsx(za,{$width:h,$color:"#2B6CB0"}),e.jsx(za,{$width:c,$color:"#8b5cf6"})]}),e.jsxs(Y0,{children:[e.jsxs(Ba,{children:[e.jsxs(Ra,{children:[e.jsx(cn,{$color:"#2B6CB0"}),"Bank Accounts"]}),e.jsx(Ha,{$positive:i>=0,children:e.jsx(Nt,{value:wt(i)})})]}),e.jsxs(Ba,{children:[e.jsxs(Ra,{children:[e.jsx(cn,{$color:"#8b5cf6"}),"Investments"]}),e.jsx(Ha,{$positive:s>=0,children:e.jsx(Nt,{value:wt(s)})})]})]})]}),e.jsx(Wa,{}),e.jsxs(Jn,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:Ae},children:[e.jsxs(Zn,{children:[e.jsx(cn,{$color:"#2B6CB0"}),"Bank Accounts"]}),a.map(({account:p,balance:g})=>e.jsxs(Ya,{children:[e.jsx(Ga,{$color:p.color,children:Na[p.id]&&e.jsx("img",{src:Na[p.id],alt:""})}),e.jsx(Va,{children:p.name}),e.jsx(Qa,{$positive:g>=0,children:e.jsx(Nt,{value:wt(g)})})]},p.id))]}),e.jsx(Wa,{}),e.jsxs(Jn,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.12,duration:.3,ease:Ae},children:[e.jsxs(Zn,{children:[e.jsx(cn,{$color:"#8b5cf6"}),"Investments"]}),r.map(({account:p,balance:g})=>{const u=z0[p.id];return e.jsxs(Ya,{children:[e.jsx(Ga,{$color:p.color,children:u&&e.jsx(u,{})}),e.jsx(Va,{children:p.name}),e.jsx(Qa,{$positive:g>=0,children:e.jsx(Nt,{value:wt(g)})})]},p.id)})]})]})}),V0=o(y.div)`
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
`,Q0=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,U0=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,q0=o.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,K0=o.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,X0=o(y.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,J0=o.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,Z0=o(y.div)`
  width: 100%;
`,ep=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,tp=o.input`
  display: none;
`,np=o.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,rp=o(y.button)`
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
`,ap=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
`,ip=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Ua=o.button`
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
`,op=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
  flex-shrink: 0;
`,sp=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,qa=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,lp=o.div``,cp=o(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,dp=o.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,pp=o(y.div)`
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
`,xp=o.div`
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
`,up=o.div`
  flex: 1;
  min-width: 0;
`,hp=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,fp=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,gp=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,mp=o.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,yp=o.div`
  display: flex;
  gap: 4px;
`,Ka=o(y.button)`
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
`,vp=o(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,bp=o.div`
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
`,jp=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,wp=o.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,kp=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,er=o(y.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tr=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Xa=o(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Ja=o(y.button)`
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
`,Za=o.div`
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
`,ei=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ti=o.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,ni=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,$p=o.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,Sp=o.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,Cp=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,ri=o(y.button)`
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
`,ai=o.div`
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
`,ii=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,oi=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,Tp=t=>{switch(t){case"bank_credit":return b0();case"bank_debit":return Ea();case"investment_credit":return j0();case"investment_debit":return w0();default:return Ea()}},Dp=t=>F0.includes(t),Ap=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},si=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),wo=t=>{const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},Ip=t=>t.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Mp=f.memo(function({filterStartDate:n,onStartDateChange:a,filterEndDate:r,onEndDateChange:i}){const[s,l]=f.useState(!1),[d,h]=f.useState(!1),c=f.useRef(null),p=f.useRef(null);return e.jsx(ap,{children:e.jsxs(ip,{children:[e.jsxs(Ua,{ref:c,type:"button",onClick:()=>l(!0),children:[si(n),e.jsx(Fa,{})]}),e.jsx(Gt,{isOpen:s,onClose:()=>l(!1),selectedDate:n,onDateSelect:g=>{a(g),l(!1)},triggerRef:c}),e.jsx(op,{children:"to"}),e.jsxs(Ua,{ref:p,type:"button",onClick:()=>h(!0),children:[si(r),e.jsx(Fa,{})]}),e.jsx(Gt,{isOpen:d,onClose:()=>h(!1),selectedDate:r,onDateSelect:g=>{i(g),h(!1)},triggerRef:p})]})})}),Lp=f.memo(function({groupedTransactions:n,activeFilterCount:a,onEditTransaction:r,onDeleteTransaction:i}){const s=Object.keys(n).sort((l,d)=>d.localeCompare(l));return s.length===0?e.jsx(qa,{children:e.jsxs(vp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx(bp,{children:e.jsx(O0,{})}),e.jsx(jp,{children:"No Transactions"}),e.jsx(wp,{children:a>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):e.jsx(qa,{children:e.jsx(lp,{children:e.jsx(ee,{mode:"popLayout",children:s.map(l=>e.jsxs(cp,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:Ae},children:[e.jsx(dp,{children:Ap(l)}),n[l].map(d=>{const h=Wl(d.accountId),c=Dp(d.type);return e.jsxs(pp,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:Ae},children:[e.jsx(xp,{$type:d.type,children:Tp(d.type)}),e.jsxs(up,{children:[e.jsx(hp,{children:d.description}),e.jsx(fp,{children:(h==null?void 0:h.name)||"Unknown Account"})]}),e.jsxs(gp,{children:[e.jsxs(mp,{$positive:c,children:[c?"+":"-",wt(d.amount)]}),e.jsxs(yp,{children:[e.jsx(Ka,{onClick:()=>r(d),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(_0,{})}),e.jsx(Ka,{$danger:!0,onClick:()=>i(d.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(P0,{})})]})]})]},d.id)})]},l))})})})});function nr(t){const n=new Date(t+"T00:00:00");return wo(new Date(n.getFullYear(),n.getMonth(),1))}function rr(t){const n=new Date(t+"T00:00:00");return wo(new Date(n.getFullYear(),n.getMonth()+1,0))}function Op(t,n){const[a,r]=f.useState(()=>nr(n)),[i,s]=f.useState(()=>rr(n)),l=f.useRef(n),d=f.useRef(!1);f.useEffect(()=>{l.current!==n&&(l.current=n,d.current=!1,r(nr(n)),s(rr(n)))},[n]);const h=f.useCallback(m=>{d.current=!0,r(m)},[]),c=f.useCallback(m=>{d.current=!0,s(m)},[]),{filteredTransactions:p,groupedTransactions:g,activeFilterCount:u}=f.useMemo(()=>{let m=t.filter(j=>j.date>=a&&j.date<=i);m=m.sort((j,k)=>{const $=k.date.localeCompare(j.date);return $!==0?$:k.id.localeCompare(j.id)});const v=Ip(m),w=a===nr(n)&&i===rr(n);return{filteredTransactions:m,groupedTransactions:v,activeFilterCount:w?0:1}},[t,a,i,n]);return{filterStartDate:a,setFilterStartDate:h,filterEndDate:i,setFilterEndDate:c,filteredTransactions:p,groupedTransactions:g,activeFilterCount:u}}const Pp=f.memo(function({transactions:n,selectedDate:a,onEditTransaction:r,onDeleteTransaction:i}){const{filterStartDate:s,setFilterStartDate:l,filterEndDate:d,setFilterEndDate:h,groupedTransactions:c,activeFilterCount:p}=Op(n,a);return e.jsxs(sp,{children:[e.jsx(Mp,{filterStartDate:s,onStartDateChange:l,filterEndDate:d,onEndDateChange:h}),e.jsx(Lp,{groupedTransactions:c,activeFilterCount:p,onEditTransaction:r,onDeleteTransaction:i})]})}),_p=f.memo(function({onAddTransaction:n,selectedDate:a}){return e.jsx(ep,{children:e.jsx(a0,{onAddTransaction:n,defaultDate:a})})}),Ep=f.memo(function({transactionsCount:n,onOpenBalanceModal:a,onExport:r,onImport:i}){return e.jsxs(kp,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:Ae},children:[e.jsxs(er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:Ae},children:[e.jsx(tr,{children:"Configuration"}),e.jsx(Xa,{children:e.jsxs(Ja,{onClick:a,whileTap:{scale:.99},children:[e.jsx(Za,{$color:"#007AFF",children:e.jsx(k0,{})}),e.jsxs(ei,{children:[e.jsx(ti,{children:"Initial Balances"}),e.jsx(ni,{children:"Set starting balances for all accounts"})]}),e.jsx($p,{children:e.jsx(E0,{})})]})})]}),e.jsxs(er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:Ae},children:[e.jsx(tr,{children:"Data"}),e.jsxs(Cp,{children:[e.jsxs(ri,{type:"button",$variant:"export",onClick:r,whileTap:{scale:.97},children:[e.jsx(ai,{$color:"#34C759",children:e.jsx(M0,{})}),e.jsx(ii,{children:"Export"}),e.jsx(oi,{children:"Save backup file"})]}),e.jsxs(ri,{type:"button",$variant:"import",onClick:i,whileTap:{scale:.97},children:[e.jsx(ai,{$color:"#007AFF",children:e.jsx(L0,{})}),e.jsx(ii,{children:"Import"}),e.jsx(oi,{children:"Restore from file"})]})]})]}),e.jsxs(er,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:Ae},children:[e.jsx(tr,{children:"About"}),e.jsx(Xa,{children:e.jsxs(Ja,{as:"div",style:{cursor:"default"},children:[e.jsx(Za,{$color:"#8E8E93",children:e.jsx(T0,{})}),e.jsxs(ei,{children:[e.jsx(ti,{children:"Transactions"}),e.jsx(ni,{children:"Total records stored"})]}),e.jsx(Sp,{children:n})]})})]})]})});function Fp(){const[t,n]=f.useState([]),[a,r]=f.useState({}),i=f.useRef(null);f.useEffect(()=>{n(Ml()),r(Ll())},[]);const s=f.useCallback(u=>{n(m=>{const v=[...m,u];return requestAnimationFrame(()=>rn(v)),v})},[]),l=f.useCallback(u=>{n(m=>{const v=m.filter(w=>w.id!==u);return requestAnimationFrame(()=>rn(v)),v})},[]),d=f.useCallback(u=>{n(m=>{const v=m.map(w=>w.id===u.id?u:w);return requestAnimationFrame(()=>rn(v)),v})},[]),h=f.useCallback(u=>{r(u),requestAnimationFrame(()=>ga(u))},[]),c=f.useCallback(()=>{Bl(t,a)},[t,a]),p=f.useCallback(()=>{var u;(u=i.current)==null||u.click()},[]),g=f.useCallback(u=>{var w;const m=(w=u.target.files)==null?void 0:w[0];if(!m)return;const v=new FileReader;v.onload=j=>{var T;const k=(T=j.target)==null?void 0:T.result,$=Hl(k);$?window.confirm(`Import backup from ${new Date($.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${$.transactions.length} transactions

This action cannot be undone.`)&&(n($.transactions),r($.initialBalances),rn($.transactions),ga($.initialBalances)):alert("Invalid backup file.")},v.readAsText(m),u.target.value=""},[]);return{transactions:t,initialBalances:a,addTransaction:s,deleteTransaction:l,updateTransaction:d,saveInitialData:h,handleExport:c,handleImportClick:p,fileInputRef:i,handleFileChange:g}}function Np(){const[t,n]=f.useState("summary"),[[,a],r]=f.useState([0,0]),i=f.useCallback(l=>{const d=rt.findIndex(c=>c.id===l),h=rt.findIndex(c=>c.id===t);r([d,d>h?1:-1]),n(l),window.scrollTo(0,0)},[t]),s=f.useCallback((l,d)=>{const p=rt.findIndex(g=>g.id===t);(d.offset.x<-50||d.velocity.x<-500)&&p<rt.length-1?i(rt[p+1].id):(d.offset.x>50||d.velocity.x>500)&&p>0&&i(rt[p-1].id)},[t,i]);return{activeTab:t,direction:a,handleTabChange:i,handleDragEnd:s}}const Wp=()=>{const[t,n]=f.useState(at(new Date)),[a,r]=f.useState(!1),[i,s]=f.useState(null),{transactions:l,initialBalances:d,addTransaction:h,deleteTransaction:c,updateTransaction:p,saveInitialData:g,handleExport:u,handleImportClick:m,fileInputRef:v,handleFileChange:w}=Fp(),{activeTab:j,direction:k,handleTabChange:$,handleDragEnd:T}=Np(),O=f.useMemo(()=>_l(l,t,d),[t,l,d]),F=A=>{h(A),$("transactions")},S=()=>{switch(j){case"summary":return e.jsx(G0,{balances:O});case"transactions":return e.jsx(Pp,{transactions:l,selectedDate:t,onEditTransaction:s,onDeleteTransaction:c});case"add":return e.jsx(_p,{onAddTransaction:F,selectedDate:t});case"manage":return e.jsx(Ep,{transactionsCount:l.length,onOpenBalanceModal:()=>r(!0),onExport:u,onImport:m});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(Q0,{children:e.jsxs(U0,{children:[e.jsx(q0,{children:e.jsx(Kd,{selectedDate:t,onDateChange:n})}),e.jsx(np,{children:rt.map(A=>e.jsx(rp,{$active:j===A.id,onClick:()=>$(A.id),whileTap:{scale:.98},children:A.label},A.id))})]})}),e.jsxs(V0,{variants:N0,initial:"hidden",animate:"visible",children:[e.jsx(X0,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:T,children:e.jsxs(Oi,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(K0,{}),e.jsx(J0,{style:{flex:1},children:e.jsx(ee,{mode:"wait",custom:k,children:e.jsx(Z0,{custom:k,variants:W0,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:S()},j)})})]})}),e.jsx(tp,{ref:v,type:"file",accept:".json",onChange:w}),e.jsx(c0,{isOpen:a,onClose:()=>r(!1),initialBalances:d,onSave:g}),e.jsx(x0,{isOpen:!!i,onClose:()=>s(null),transaction:i,onSave:p})]})]})},ko=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),zp=async(t,n,a,r=48)=>{try{const i=await ko(),s=Math.min(n,a)*.03,l=n-r-s,d=a-r-s;t.globalAlpha=.7,t.drawImage(i,l,d,r,r),t.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},kr=(t,n,a)=>{const r=[],i=d=>{const h=[];let c=d;for(;c.length>0;){let p=c.length;for(;p>0&&t.measureText(c.slice(0,p)).width>a;)p--;p=Math.max(1,p);const g=c.slice(0,p),u=g.lastIndexOf("/"),m=g.lastIndexOf("-"),v=g.lastIndexOf(".");let w=p;const j=[u,m,v].filter(k=>k>0&&k<p-1);j.length>0&&(w=Math.max(...j)+1),h.push(c.slice(0,w)),c=c.slice(w)}return h},s=n.split(" ");let l="";for(const d of s)if(t.measureText(d).width>a){l&&(r.push(l),l="");const c=i(d);for(let p=0;p<c.length;p++)p<c.length-1?r.push(c[p]):l=c[p]}else{const c=l?`${l} ${d}`:d;t.measureText(c).width>a&&l?(r.push(l),l=d):l=c}return l&&r.push(l),r},Bp=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:i,backgroundColor:s,alignment:l,aspectRatio:d,padding:h}=t,c=document.createElement("canvas");c.width=d.width,c.height=d.height;const p=c.getContext("2d");if(!p)throw new Error("Failed to get canvas context");p.fillStyle=s,p.fillRect(0,0,c.width,c.height);const g=a*(d.width/1080);p.font=`600 ${g}px ${r}`,p.fillStyle=i;const u=h*(d.width/1080),m=c.width-u*2,v=n.split(`
`),w=[];for(const F of v)if(F.trim()==="")w.push("");else{const S=kr(p,F,m);w.push(...S)}const j=g*1.4,k=w.length*j;let $=(c.height-k)/2+g;p.textAlign=l;let T;switch(l){case"left":T=u;break;case"right":T=c.width-u;break;default:T=c.width/2}for(const F of w)F!==""&&p.fillText(F,T,$),$+=j;const O=Math.min(c.width,c.height)*.06;return await zp(p,c.width,c.height,O),c.toDataURL("image/png",1)},Rp=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:i}=t,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const l=s.getContext("2d");if(!l)throw new Error("Failed to get canvas context");const d=a.width/1080,h=a.height>a.width,c=r==="#000000"?"#ffffff":"#000000",p=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";l.fillStyle=r,l.fillRect(0,0,s.width,s.height);const g=64*d,u=s.width-g*2,m=20*d,v=36*d,w=(h?44:40)*d,j=(h?24:22)*d,k=18*d,$=w*1.25,T=j*1.45,O=h?5:4,F=h?4:3;l.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const S=kr(l,n.title,u),A=S.slice(0,O);if(S.length>O&&A.length>0){const B=A[A.length-1];B.endsWith("...")||(A[A.length-1]=B.slice(0,-3)+"...")}l.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`;const N=n.description?kr(l,n.description,u):[],z=N.slice(0,F);if(N.length>F&&z.length>0){const B=z[z.length-1];B.endsWith("...")||(z[z.length-1]=B.slice(0,-3)+"...")}const C=v+m,Y=A.length*$,U=z.length>0?m+z.length*T:0,te=C+Y+U,V=Math.min(s.width,s.height)*.045,b=g+V+16*d,P=s.height-b-g,q=P-te-m*2;let le=0;if(n.image&&q>100*d){const B=h?s.width*.5:s.width*.4,we=120*d;le=Math.min(B,Math.max(we,q))}const de=le>0?m+le:0,X=te+de;let H=g+Math.max(0,(P-X)/2);if(n.favicon)try{const B=await li(n.favicon);l.save(),l.beginPath(),l.arc(g+v/2,H+v/2,v/2,0,Math.PI*2),l.closePath(),l.clip(),l.drawImage(B,g,H,v,v),l.restore()}catch{l.fillStyle=i,l.beginPath(),l.arc(g+v/2,H+v/2,v/2,0,Math.PI*2),l.fill()}n.siteName&&(l.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=p,l.textAlign="left",l.textBaseline="middle",l.fillText(n.siteName,g+v+10*d,H+v/2)),H+=v+m,l.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=c,l.textAlign="left",l.textBaseline="top";for(const B of A)l.fillText(B,g,H),H+=$;if(z.length>0){H+=m,l.font=`400 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=p;for(const B of z)l.fillText(B,g,H),H+=T}if(n.image&&le>0){H+=m;try{const B=await li(n.image),we=u;l.save(),Hp(l,g,H,we,le,10*d),l.clip();const Qe=B.width/B.height,Me=we/le;let ve=0,ct=0,Ue=B.width,Fe=B.height;Qe>Me?(Ue=B.height*Me,ve=(B.width-Ue)/2):(Fe=B.width/Me,ct=(B.height-Fe)/2),l.drawImage(B,ve,ct,Ue,Fe,g,H,we,le),l.restore()}catch{}}const ye=s.height-g;l.font=`500 ${k}px -apple-system, BlinkMacSystemFont, monospace`,l.fillStyle=i;const se=u-V-16*d;let ge=n.url;for(;l.measureText(ge).width>se&&ge.length>20;)ge=ge.slice(0,-4)+"...";l.textAlign="left",l.textBaseline="middle",l.fillText(ge,g,ye-V/2);try{const B=await ko();l.globalAlpha=.7,l.drawImage(B,s.width-g-V,ye-V,V,V),l.globalAlpha=1}catch{}return s.toDataURL("image/png",1)},li=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),Hp=(t,n,a,r,i,s)=>{t.beginPath(),t.moveTo(n+s,a),t.lineTo(n+r-s,a),t.quadraticCurveTo(n+r,a,n+r,a+s),t.lineTo(n+r,a+i-s),t.quadraticCurveTo(n+r,a+i,n+r-s,a+i),t.lineTo(n+s,a+i),t.quadraticCurveTo(n,a+i,n,a+i-s),t.lineTo(n,a+s),t.quadraticCurveTo(n,a,n+s,a),t.closePath()},Yp=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},Gp=async t=>{var i,s;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const l=`https://api.microlink.io?url=${encodeURIComponent(t)}`,d=await fetch(l);if(!d.ok)return r;const h=await d.json();return h.status==="success"&&h.data?{title:h.data.title||a,description:h.data.description||"",image:((i=h.data.image)==null?void 0:i.url)||null,siteName:h.data.publisher||a,url:t,favicon:((s=h.data.logo)==null?void 0:s.url)||r.favicon}:r}catch(l){return console.warn("Failed to fetch URL metadata:",l),r}},ci=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],Vp='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',Qp=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},Up=o.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,qp=o.div`
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
`,Kp=o.div`
  width: 100%;
  max-width: 600px;
`,Xp=o.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,Jp=o.div`
  position: absolute;
  inset: 0;
`,Zp=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,ex=o(y.div)`
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
`,tx=o.div`
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
`,nx=o.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Wt=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,zt=o.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,rx=o.textarea`
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
`,di=o.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,pi=o.button`
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
`,ax=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,ix=o.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,ox=o.input`
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
`,sx=o.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,lx=o(y.button)`
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
`,cx=o(y.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,dx=o.input`
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
`,px=o.textarea`
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
`,xx=o(y.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,ux=o(y.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,hx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),fx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),gx=()=>{const{isDark:t}=Cr(),[n,a]=f.useState(""),[r,i]=f.useState(64),[s,l]=f.useState("left"),[d,h]=f.useState(ci[1]),[c,p]=f.useState(null),[g,u]=f.useState(!1),[m,v]=f.useState(null),[w,j]=f.useState(""),[k,$]=f.useState(""),[T,O]=f.useState(!1),[F,S]=f.useState(null),A=f.useMemo(()=>Qp(n),[n]),N=t?"#000000":"#ffffff",z=t?"#ffffff":"#000000",C=`${d.height/d.width*100}%`,Y=f.useCallback(async()=>{if(!(!A||!n.trim())){O(!0),S(null),p(null);try{const b=await Gp(n.trim());v(b),j(b.title),$(b.description)}catch{S("Unable to fetch URL preview")}O(!1)}},[n,A]),U=f.useCallback(async()=>{if(!n.trim()||A){A||p(null);return}u(!0);try{const b=await Bp({text:n.trim(),fontSize:r,fontFamily:Vp,textColor:z,backgroundColor:N,alignment:s,aspectRatio:d,padding:80});p(b)}catch(b){console.error("Preview generation failed:",b)}u(!1)},[n,A,r,s,d,N,z]),te=f.useCallback(async()=>{if(m){u(!0);try{const b=await Rp({metadata:{...m,title:w||m.title,description:k||m.description},aspectRatio:d,backgroundColor:N,accentColor:"#2A9D8F"});p(b)}catch(b){console.error("URL preview generation failed:",b)}u(!1)}},[m,w,k,d,N]);f.useEffect(()=>{if(A)return;const b=setTimeout(U,200);return()=>clearTimeout(b)},[U,A]),f.useEffect(()=>{A?Y():(v(null),j(""),$(""),S(null))},[A,Y]),f.useEffect(()=>{m&&te()},[m,w,k,d,te]);const V=()=>{if(c){const q=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;Yp(c,q)}};return e.jsxs(Up,{children:[e.jsx(qp,{children:e.jsx(Kp,{children:e.jsx(Xp,{$bgColor:N,$paddingBottom:C,children:e.jsxs(Jp,{children:[c&&e.jsx(Zp,{src:c,alt:"Preview"}),e.jsx(ee,{children:!c&&e.jsxs(ex,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(fx,{}),e.jsx("span",{children:A?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(tx,{children:e.jsxs(nx,{children:[e.jsxs(Wt,{children:[e.jsx(zt,{children:"Content"}),e.jsx(rx,{value:n,onChange:b=>a(b.target.value),onContextMenu:b=>b.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),A?e.jsxs(e.Fragment,{children:[T&&e.jsx(Wt,{style:{alignItems:"center"},children:e.jsx(ux,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),F&&e.jsx(xx,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:F}),m&&e.jsxs(cx,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(zt,{children:"Edit Details"}),e.jsx(dx,{value:w,onChange:b=>j(b.target.value),placeholder:"Title"}),e.jsx(px,{value:k,onChange:b=>$(b.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Wt,{children:[e.jsx(zt,{children:"Font Size"}),e.jsxs(ax,{children:[e.jsx(ix,{children:e.jsx(ox,{type:"range",min:"24",max:"120",value:r,onChange:b=>i(Number(b.target.value))})}),e.jsx(sx,{children:r})]})]}),e.jsxs(Wt,{children:[e.jsx(zt,{children:"Alignment"}),e.jsx(di,{children:["left","center","right"].map(b=>e.jsx(pi,{$active:s===b,onClick:()=>l(b),children:b.charAt(0).toUpperCase()+b.slice(1)},b))})]})]}),e.jsxs(Wt,{children:[e.jsx(zt,{children:"Format"}),e.jsx(di,{children:ci.map(b=>e.jsx(pi,{$active:d.id===b.id,onClick:()=>h(b),children:b.name},b.id))})]}),e.jsxs(lx,{onClick:V,disabled:!c||g,whileTap:{scale:.98},children:[e.jsx(hx,{}),"Download Image"]})]})})]})},mx=o(y.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,yx={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},vx=()=>e.jsx(mx,{variants:yx,initial:"hidden",animate:"visible",children:e.jsx(gx,{})}),x={bg:"#FFF8F0",bgAlt:"#FDE8EE",card:"#FFFFFF",cardBorder:"rgba(196, 69, 105, 0.10)",textPrimary:"#2D1B30",textSecondary:"#6B4D5E",textMuted:"#B8929E",accent:"#C44569",accentSoft:"#E8758A",blush:"#F5C6D0",softPink:"#FDE8EE",warmGold:"#C9956B",gold:"#E8C496",goldLight:"#F5E6D0",lavender:"#F0E6F6"},D={display:"'Playfair Display', Georgia, serif",body:"'Cormorant Garamond', 'Times New Roman', serif",script:"'Dancing Script', cursive"},$o="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",R={gentle:[.25,.1,.25,1],cinematic:[.16,1,.3,1]},bx=Di`
  @import url('${$o}');
`,jx=M`
  0%, 100% { transform: translateY(0) rotate(-8deg); }
  50% { transform: translateY(-18px) rotate(4deg); }
`,wx=M`
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-14px) rotate(-6deg); }
`,kx=o.div`
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(165deg, ${x.bg} 0%, ${x.bgAlt} 45%, ${x.bg} 100%);
  color: ${x.textPrimary};
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
`,ot=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),$x=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  color: ${x.blush};
  opacity: 0.18;
  pointer-events: none;
  animation: ${t=>t.$anim==="a"?jx:wx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`,Sx=[{x:"6%",y:"8%",size:38,anim:"a",dur:9,delay:0},{x:"88%",y:"14%",size:26,anim:"b",dur:11,delay:2},{x:"12%",y:"78%",size:30,anim:"b",dur:10,delay:1},{x:"82%",y:"72%",size:22,anim:"a",dur:8,delay:3},{x:"48%",y:"3%",size:18,anim:"a",dur:12,delay:5},{x:"93%",y:"46%",size:32,anim:"b",dur:9,delay:4},{x:"3%",y:"42%",size:20,anim:"a",dur:10,delay:6},{x:"72%",y:"90%",size:24,anim:"b",dur:11,delay:2}],Cx=()=>e.jsx(e.Fragment,{children:Sx.map((t,n)=>e.jsx($x,{$x:t.x,$y:t.y,$size:t.size,$anim:t.anim,$dur:t.dur,$delay:t.delay,children:e.jsx(ot,{})},n))}),Tx=o(y.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Dx=o(y.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`,Ax=o(y.button)`
  font-family: ${D.body};
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.03em;
  color: ${x.accent};
  background: ${x.card};
  border: 1.5px solid ${x.blush};
  padding: 16px 44px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 4px 20px rgba(196, 69, 105, 0.12);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.2s ease;

  &:hover {
    border-color: ${x.accent};
    box-shadow: 0 6px 28px rgba(196, 69, 105, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,Vt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${x.blush};
  margin: 24px 0;

  &::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${x.blush}, transparent);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Ix={enter:{opacity:0},center:{opacity:1,transition:{duration:1,ease:[.25,.1,.25,1]}},exit:{opacity:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},Mx=o.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;function Lx(t,n,a,r){t.save(),t.translate(n,a);const i=r/2;t.beginPath(),t.moveTo(0,i*.4),t.bezierCurveTo(-i*.05,-i*.2,-i*.7,-i*.4,-i*.7,i*.05),t.bezierCurveTo(-i*.7,i*.4,0,i*.7,0,i),t.bezierCurveTo(0,i*.7,i*.7,i*.4,i*.7,i*.05),t.bezierCurveTo(i*.7,-i*.4,i*.05,-i*.2,0,i*.4),t.closePath(),t.fill(),t.restore()}function Ox(t,n,a,r){const i=r/2,s=i*.3;t.beginPath();for(let l=0;l<4;l++){const d=l*Math.PI/2;t.lineTo(n+Math.cos(d)*i,a+Math.sin(d)*i);const h=d+Math.PI/4;t.lineTo(n+Math.cos(h)*s,a+Math.sin(h)*s)}t.closePath(),t.fill()}const xi=[x.accent,x.accentSoft,x.blush,x.warmGold,x.gold];function ui(t,n,a){const r=xi[Math.floor(Math.random()*xi.length)],i=Math.random()>.55;if(t==="ambient")return{x:Math.random()*n,y:a+20,vx:(Math.random()-.5)*.5,vy:-(Math.random()*.8+.3),size:Math.random()*14+6,opacity:Math.random()*.35+.15,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.02,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*500+350};if(t==="burst"){const s=Math.random()*Math.PI*2,l=Math.random()*5+2;return{x:n/2,y:a/2,vx:Math.cos(s)*l,vy:Math.sin(s)*l,size:Math.random()*18+8,opacity:.9,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.06,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*100+60}}return{x:Math.random()*n,y:-20,vx:(Math.random()-.5)*1.2,vy:Math.random()*1.8+.8,size:Math.random()*20+8,opacity:Math.random()*.5+.25,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.03,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*350+200}}const Ie=({mode:t,density:n})=>{const a=f.useRef(null);return f.useEffect(()=>{const r=a.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let s,l=[];const d=n??(t==="ambient"?30:t==="burst"?70:90),h=t==="ambient"?.2:t==="burst"?0:.7,c=()=>{const g=window.devicePixelRatio||1;r.width=r.offsetWidth*g,r.height=r.offsetHeight*g,i.setTransform(g,0,0,g,0,0)};if(c(),window.addEventListener("resize",c),t==="burst")for(let g=0;g<d;g++)l.push(ui("burst",r.offsetWidth,r.offsetHeight));const p=()=>{i.clearRect(0,0,r.offsetWidth,r.offsetHeight),t!=="burst"&&l.length<d&&Math.random()<h&&l.push(ui(t,r.offsetWidth,r.offsetHeight));for(let g=l.length-1;g>=0;g--){const u=l[g];u.x+=u.vx,u.y+=u.vy,u.rotation+=u.rotationSpeed,u.life++,t==="burst"&&(u.vx*=.96,u.vy*=.96,u.vy+=.04);const m=u.life/u.maxLife,v=m>.7?u.opacity*(1-(m-.7)/.3):u.opacity;if(u.life>=u.maxLife){l.splice(g,1);continue}i.save(),i.globalAlpha=Math.max(0,v),i.fillStyle=u.color,i.translate(u.x,u.y),i.rotate(u.rotation),u.type==="heart"?Lx(i,0,0,u.size):(i.shadowBlur=u.size*.8,i.shadowColor=u.color,Ox(i,0,0,u.size*.5)),i.restore()}s=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",c)}},[t,n]),e.jsx(Mx,{ref:a})},So=22,Co=.88,Qt=So*Co,Px=M`
  0% { transform: translateX(0); }
  ${Co*100}% { transform: translateX(-160px); }
  100% { transform: translateX(-160px); }
`,hi=M`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
`,_x=M`
  0%, 100% { transform: scaleX(1) skewX(0deg); }
  30% { transform: scaleX(1.05) skewX(3deg); }
  70% { transform: scaleX(0.95) skewX(-2deg); }
`,Ex=M`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-12deg); }
  75% { transform: rotate(12deg); }
`,Fx=M`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(12deg); }
  75% { transform: rotate(-12deg); }
`,Nx=M`
  0% { transform: translateX(500px); }
  100% { transform: translateX(-500px); }
`,Wx=o.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%) perspective(600px) rotateX(2deg);
  width: min(94vw, 520px);
  height: 240px;
  pointer-events: none;
  z-index: 0;
`,zx=o.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 4px 12px rgba(45, 27, 48, 0.08));
`,Bx=o.g`
  animation: ${Px} ${So}s cubic-bezier(0.22, 0.6, 0.36, 1) forwards;
`,Rx=o.g`
  animation: ${hi} 0.6s ease-in-out;
  animation-duration: ${Qt}s;
  animation-timing-function: ease-in-out;
  animation-name: ${hi};
  animation-iteration-count: ${Math.floor(Qt/.6)};
  animation-fill-mode: forwards;
`,Hx=o.g`
  animation: ${_x} 0.8s ease-in-out;
  animation-iteration-count: ${Math.floor(Qt/.8)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,Yx=o.g`
  animation: ${Ex} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(Qt/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,Gx=o.g`
  animation: ${Fx} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(Qt/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,Vx=o.g`
  animation: ${Nx} 14s linear 5s forwards;
`,Oe=x.accent,fe=x.warmGold,J=x.textMuted,ce=x.blush,Qx=({storyDone:t})=>e.jsx(Wx,{style:{opacity:t?0:.55,transition:"opacity 1.5s ease"},children:e.jsxs(zx,{viewBox:"0 0 520 240",fill:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:x.softPink,stopOpacity:"0.15"}),e.jsx("stop",{offset:"100%",stopColor:x.bgAlt,stopOpacity:"0.05"})]}),e.jsxs("linearGradient",{id:"platform",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:J,stopOpacity:"0.6"}),e.jsx("stop",{offset:"100%",stopColor:J,stopOpacity:"0.35"})]}),e.jsxs("linearGradient",{id:"canopy",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:J,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"pillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:J,stopOpacity:"0.5"}),e.jsx("stop",{offset:"50%",stopColor:J,stopOpacity:"0.35"}),e.jsx("stop",{offset:"100%",stopColor:J,stopOpacity:"0.5"})]}),e.jsxs("linearGradient",{id:"trainBody",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:fe,stopOpacity:"0.7"}),e.jsx("stop",{offset:"100%",stopColor:x.gold,stopOpacity:"0.4"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("rect",{x:"0",y:"0",width:"520",height:"240",fill:"url(#sky)"}),e.jsx("rect",{x:"5",y:"40",width:"36",height:"80",rx:"2",fill:J,opacity:"0.18"}),e.jsx("rect",{x:"12",y:"48",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"22",y:"48",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"12",y:"62",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"46",y:"55",width:"28",height:"65",rx:"2",fill:J,opacity:"0.15"}),e.jsx("rect",{x:"52",y:"62",width:"6",height:"8",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"80",y:"28",width:"32",height:"92",rx:"2",fill:J,opacity:"0.2"}),e.jsx("rect",{x:"86",y:"36",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"98",y:"36",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"86",y:"52",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"98",y:"52",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.13"}),e.jsx("rect",{x:"410",y:"42",width:"30",height:"78",rx:"2",fill:J,opacity:"0.18"}),e.jsx("rect",{x:"416",y:"50",width:"7",height:"9",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"427",y:"50",width:"7",height:"9",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"446",y:"30",width:"38",height:"90",rx:"2",fill:J,opacity:"0.22"}),e.jsx("rect",{x:"452",y:"38",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.15"}),e.jsx("rect",{x:"464",y:"38",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.12"}),e.jsx("rect",{x:"452",y:"54",width:"8",height:"10",rx:"1",fill:ce,opacity:"0.1"}),e.jsx("rect",{x:"490",y:"58",width:"24",height:"62",rx:"2",fill:J,opacity:"0.15"}),e.jsxs(Vx,{children:[e.jsx("rect",{x:"0",y:"68",width:"160",height:"38",rx:"10",fill:"url(#trainBody)"}),e.jsx("rect",{x:"0",y:"68",width:"160",height:"6",rx:"3",fill:fe,opacity:"0.4"}),[0,1,2,3,4,5].map(n=>e.jsx("rect",{x:12+n*26,y:"78",width:"18",height:"18",rx:"3",fill:x.goldLight,opacity:"0.5"},n)),e.jsx("rect",{x:"0",y:"100",width:"160",height:"4",rx:"2",fill:J,opacity:"0.3"})]}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",fill:"url(#canopy)"}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",stroke:J,strokeWidth:"3",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M105 82 Q145 52, 260 46 Q375 52, 415 82",stroke:ce,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("rect",{x:"128",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"60",width:"12",height:"90",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"382",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"14",rx:"4",fill:"url(#platform)"}),e.jsx("rect",{x:"95",y:"162",width:"330",height:"3",rx:"1",fill:J,opacity:"0.15"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"3",rx:"1",fill:fe,opacity:"0.3"}),e.jsx("rect",{x:"140",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"162",width:"14",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"368",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("line",{x1:"100",y1:"132",x2:"420",y2:"132",stroke:J,strokeWidth:"1.5",opacity:"0.25"}),[0,1,2,3,4,5,6,7].map(n=>e.jsx("line",{x1:120+n*38,y1:"132",x2:120+n*38,y2:"148",stroke:J,strokeWidth:"1",opacity:"0.2"},`r${n}`)),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",fill:x.card,opacity:"0.55"}),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",stroke:fe,strokeWidth:"1.5",fill:"none",opacity:"0.4"}),e.jsx("text",{x:"260",y:"65",textAnchor:"middle",fontFamily:"sans-serif",fontSize:"13",fontWeight:"700",letterSpacing:"3",fill:Oe,opacity:"0.7",children:"MG ROAD"}),e.jsx("rect",{x:"0",y:"218",width:"520",height:"22",rx:"0",fill:J,opacity:"0.08"}),e.jsx("line",{x1:"0",y1:"218",x2:"520",y2:"218",stroke:J,strokeWidth:"1",opacity:"0.2"}),e.jsxs("g",{transform:"translate(195, 78)",children:[e.jsx("ellipse",{cx:"0",cy:"70",rx:"12",ry:"3",fill:J,opacity:"0.18"}),e.jsx("circle",{cx:"0",cy:"0",r:"9",fill:Oe}),e.jsx("path",{d:"M-8,-5 Q-9,-10 -3,-12 Q3,-13 8,-9 Q10,-5 8,-3",fill:Oe,opacity:"0.8"}),e.jsx("rect",{x:"-3",y:"8",width:"6",height:"6",rx:"1",fill:Oe}),e.jsx("path",{d:"M-14,14 Q-15,36 -10,48 L10,48 Q15,36 14,14 Z",fill:Oe,opacity:"0.9"}),e.jsx("path",{d:"M-14,16 Q-20,30 -16,42",stroke:Oe,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M14,16 Q18,28 17,38",stroke:Oe,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M-6,48 L-8,70",stroke:Oe,strokeWidth:"5.5",strokeLinecap:"round"}),e.jsx("path",{d:"M6,48 L7,70",stroke:Oe,strokeWidth:"5.5",strokeLinecap:"round"})]}),e.jsx(Bx,{children:e.jsx(Rx,{children:e.jsxs("g",{transform:"translate(400, 98)",children:[e.jsx("ellipse",{cx:"0",cy:"50",rx:"9",ry:"3",fill:J,opacity:"0.15"}),e.jsxs(Hx,{children:[e.jsx("path",{d:"M-5,-6 Q-8,-10 -4,-12 Q2,-13 6,-10 Q8,-6 7,-3",fill:fe}),e.jsx("path",{d:"M5,-4 Q10,0 12,10 Q11,18 8,13 Q7,7 5,2",fill:fe,opacity:"0.65"}),e.jsx("path",{d:"M7,-3 Q13,3 15,14 Q13,20 10,11",fill:fe,opacity:"0.4"})]}),e.jsx("circle",{cx:"0",cy:"0",r:"7.5",fill:fe}),e.jsx("rect",{x:"-1.5",y:"7",width:"3",height:"3",rx:"1",fill:fe}),e.jsx("path",{d:"M-8,10 Q-10,18 -8,26 L-3,31 L3,31 L8,26 Q10,18 8,10 Z",fill:fe,opacity:"0.85"}),e.jsx("path",{d:"M-3,29 Q-5,37 -12,50 L12,50 Q5,37 3,29 Z",fill:fe,opacity:"0.65"}),e.jsx(Yx,{children:e.jsx("path",{d:"M-8,12 Q-13,20 -11,28",stroke:fe,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})}),e.jsx(Gx,{children:e.jsx("path",{d:"M8,12 Q12,20 10,26",stroke:fe,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})})]})})})]})}),Ux=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,qx=M`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`,Kx=M`
  0% { transform: translateY(0) scale(1); opacity: 0.25; }
  50% { opacity: 0.4; }
  100% { transform: translateY(-100vh) scale(0.6); opacity: 0; }
`,Xx=M`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 0.6; transform: scale(1.2); }
`,Jx=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Zx=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 45%, ${x.blush}50 0%, transparent 100%),
    radial-gradient(ellipse 70% 50% at 30% 20%, ${x.softPink}30 0%, transparent 100%),
    radial-gradient(ellipse 60% 40% at 75% 75%, ${x.goldLight}30 0%, transparent 100%);
`,eu=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50%;
  background: ${t=>t.$color};
  filter: blur(${t=>t.$size*.4}px);
  animation: ${qx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,tu=[{x:"15%",y:"20%",size:120,color:`${x.blush}40`,dur:7,delay:0},{x:"75%",y:"15%",size:90,color:`${x.softPink}35`,dur:9,delay:2},{x:"60%",y:"70%",size:110,color:`${x.goldLight}30`,dur:8,delay:1},{x:"20%",y:"75%",size:80,color:`${x.blush}30`,dur:10,delay:3},{x:"50%",y:"40%",size:160,color:`${x.softPink}20`,dur:6,delay:.5},{x:"85%",y:"50%",size:70,color:`${x.goldLight}25`,dur:11,delay:4},{x:"8%",y:"45%",size:60,color:`${x.lavender}25`,dur:8,delay:2}],nu=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: -20px;
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50% 0 50% 0;
  background: ${x.blush};
  opacity: 0.25;
  animation: ${Kx} ${t=>t.$dur}s linear ${t=>t.$delay}s infinite;
  pointer-events: none;
`,ru=[{x:"10%",size:10,dur:12,delay:0},{x:"25%",size:8,dur:14,delay:3},{x:"42%",size:12,dur:11,delay:1},{x:"58%",size:7,dur:15,delay:5},{x:"72%",size:9,dur:13,delay:2},{x:"88%",size:11,dur:12,delay:4},{x:"35%",size:6,dur:16,delay:7},{x:"65%",size:8,dur:14,delay:6}],au=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${x.warmGold};
  box-shadow: 0 0 6px 2px ${x.warmGold}60;
  animation: ${Xx} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,iu=[{x:"12%",y:"18%",dur:3,delay:0},{x:"82%",y:"12%",dur:4,delay:1.5},{x:"22%",y:"82%",dur:3.5,delay:.5},{x:"72%",y:"78%",dur:4.5,delay:2},{x:"48%",y:"8%",dur:3,delay:1},{x:"90%",y:"42%",dur:5,delay:3},{x:"5%",y:"55%",dur:3.5,delay:.8},{x:"65%",y:"25%",dur:4,delay:2.5},{x:"38%",y:"92%",dur:3,delay:1.2},{x:"55%",y:"60%",dur:4.5,delay:.3}],ou=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  width: 100%;
`,su=o.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`,lu=o(y.div)`
  position: absolute;
  font-family: ${D.body};
  font-size: clamp(22px, 5.2vw, 32px);
  font-weight: 500;
  color: ${x.textPrimary};
  line-height: 1.55;
  max-width: 520px;
  padding: 0 20px;
`,ar=o.span`
  color: ${x.accent};
  font-family: ${D.display};
  font-style: italic;
  font-weight: 600;
`,dn=o.span`
  color: ${x.warmGold};
  font-family: ${D.script};
  font-size: 1.15em;
`,cu=o.span`
  color: ${x.textSecondary};
  font-style: italic;
`,du=M`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(2.5); }
`,pu=M`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`,xu=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,uu=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, ${x.warmGold}50 0%, ${x.accent}20 40%, transparent 70%);
  animation: ${du} 1.8s ease-out forwards;
  animation-play-state: ${t=>t.$visible?"running":"paused"};
  opacity: 0;
  pointer-events: none;
`,hu=o(y.div)`
  font-family: ${D.display};
  font-size: clamp(64px, 16vw, 110px);
  font-weight: 600;
  font-style: italic;
  color: ${x.accent};
  text-shadow:
    0 0 40px ${x.accent}30,
    0 4px 20px ${x.accent}15;
  position: relative;
`,fu=o(y.div)`
  width: 80%;
  height: 2px;
  margin-top: 4px;
  background: linear-gradient(90deg, transparent, ${x.warmGold}, transparent);
  transform-origin: center;
  animation: ${pu} 0.8s ease-out forwards;
`,gu=o(y.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${x.warmGold}40 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${Ux} 3s ease-in-out infinite;
  -webkit-background-clip: text;
  background-clip: text;
  mix-blend-mode: overlay;
  pointer-events: none;
`,mu=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,yu=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,vu=o(y.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(260px, 70vw, 400px);
  height: clamp(100px, 25vw, 160px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    ${x.warmGold}28 0%,
    ${x.goldLight}15 40%,
    ${x.blush}08 65%,
    transparent 100%
  );
  pointer-events: none;
`,bu=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 clamp(8px, 2vw, 14px);
  position: relative;
`,fi=o(y.span)`
  font-family: ${D.body};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: 400;
  font-style: italic;
  color: ${x.textSecondary};
  line-height: 1.4;
`,ju=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(40px, 10vw, 64px);
  font-weight: 700;
  font-style: italic;
  background: linear-gradient(
    90deg,
    ${x.warmGold} 0%,
    ${x.gold} 25%,
    #f5d5a0 50%,
    ${x.gold} 75%,
    ${x.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${mu} 4s linear infinite;
  filter: drop-shadow(0 2px 16px ${x.warmGold}30);
  line-height: 1.2;
`,wu=o(y.span)`
  font-family: ${D.body};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 400;
  font-style: italic;
  color: ${x.textMuted};
  margin-top: 8px;
  letter-spacing: 0.04em;
`,ku=o(y.div)`
  width: clamp(100px, 30vw, 180px);
  height: 1.5px;
  margin-top: 6px;
  background: linear-gradient(90deg, transparent, ${x.warmGold}50, transparent);
  transform-origin: center;
`,$u=M`
  0%, 100% {
    filter: drop-shadow(0 0 12px ${x.accent}40);
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 28px ${x.accent}70);
    transform: scale(1.08);
  }
`,Su=o(y.button)`
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
`,Cu=o.div`
  width: 56px;
  height: 56px;
  color: ${x.accent};
  animation: ${$u} 2.5s ease-in-out infinite;

  svg { width: 100%; height: 100%; }
`,Tu=o.span`
  font-family: ${D.body};
  font-size: clamp(16px, 3.5vw, 20px);
  font-weight: 500;
  color: ${x.textMuted};
  letter-spacing: 0.08em;
`,ir=[e.jsxs(e.Fragment,{children:["Twelve years ago,",e.jsx("br",{}),"a boy met an ",e.jsx(ar,{children:"angel"}),"..."]}),e.jsxs(e.Fragment,{children:["She was ",e.jsx(dn,{children:"grace"}),", ",e.jsx(dn,{children:"beauty"}),",",e.jsx("br",{}),"and everything he could never be."]}),e.jsxs(e.Fragment,{children:["She didn't just love him —",e.jsx("br",{}),"she ",e.jsx(ar,{children:"made"})," him who he is."]}),e.jsxs(e.Fragment,{children:["His ",e.jsx(dn,{children:"strength"}),". His ",e.jsx(dn,{children:"inspiration"}),".",e.jsx("br",{}),"His ",e.jsx(ar,{children:"everything"}),"."]}),e.jsx(e.Fragment,{children:e.jsx(cu,{children:"Maa was right all along..."})})],gi=4500,mi=1e3,Du=({onComplete:t})=>{const[n,a]=f.useState(-1),[r,i]=f.useState(!1),[s,l]=f.useState(0);return f.useEffect(()=>{const d=[];d.push(setTimeout(()=>a(0),800));for(let c=1;c<ir.length;c++)d.push(setTimeout(()=>a(c),800+c*gi));const h=800+ir.length*gi;return d.push(setTimeout(()=>{a(-1),i(!0)},h)),()=>d.forEach(clearTimeout)},[]),e.jsxs(Jx,{children:[e.jsx(Zx,{}),tu.map((d,h)=>e.jsx(eu,{$x:d.x,$y:d.y,$size:d.size,$color:d.color,$dur:d.dur,$delay:d.delay},`b${h}`)),ru.map((d,h)=>e.jsx(nu,{$x:d.x,$size:d.size,$dur:d.dur,$delay:d.delay},`p${h}`)),iu.map((d,h)=>e.jsx(au,{$x:d.x,$y:d.y,$dur:d.dur,$delay:d.delay},`s${h}`)),e.jsx(Ie,{mode:"ambient",density:40}),e.jsx(Qx,{storyDone:r}),e.jsxs(ou,{children:[e.jsx(su,{style:{opacity:r?0:1,transition:`opacity ${mi}ms ease`},children:ir.map((d,h)=>e.jsx(lu,{initial:{opacity:0,y:16,scale:.96},animate:{opacity:n===h?1:0,y:n===h?0:n>h?-16:16,scale:n===h?1:.96},transition:{duration:mi/1e3,ease:R.cinematic},children:d},h))}),e.jsxs(xu,{children:[e.jsx(uu,{$visible:r}),e.jsxs(hu,{initial:{opacity:0,scale:1.3,filter:"blur(16px)"},animate:{opacity:r?1:0,scale:r?1:1.3,filter:r?"blur(0px)":"blur(16px)"},transition:{duration:1.6,ease:R.cinematic,delay:r?.3:0},onAnimationComplete:()=>{r&&s===0&&setTimeout(()=>l(1),500)},children:["Riya",r&&e.jsx(gu,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8}})]}),r&&e.jsx(fu,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.3}})]}),e.jsx(y.div,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,ease:R.gentle},children:e.jsx(Vt,{children:e.jsx(ot,{})})}),e.jsxs(yu,{children:[e.jsx(vu,{initial:{opacity:0,scale:.5},animate:{opacity:s>=1?.35:0,scale:s>=1?1.1:.5},transition:{duration:2,ease:R.cinematic}}),e.jsxs(bu,{children:[e.jsx(fi,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:R.cinematic,delay:(s>=1,0)},children:"You are"}),e.jsx(fi,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:R.cinematic,delay:s>=1?.4:0},children:"my"})]}),e.jsx(ju,{initial:{opacity:0,scale:.7,filter:"blur(8px)"},animate:{opacity:s>=1?1:0,scale:s>=1?1:.7,filter:s>=1?"blur(0px)":"blur(8px)"},transition:{duration:1.4,ease:R.cinematic,delay:s>=1?.8:0},onAnimationComplete:()=>{s===1&&setTimeout(()=>l(2),800)},children:"Luck"}),e.jsx(ku,{initial:{opacity:0,scaleX:0},animate:{opacity:s>=1?1:0,scaleX:s>=1?1:0},transition:{duration:.8,ease:R.gentle,delay:s>=1?1.6:0}}),e.jsx(wu,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,delay:s>=1?2:0},children:"— what Maa always said"})]}),e.jsxs(Su,{initial:{opacity:0,y:20},animate:{opacity:s>=2?1:0,y:s>=2?0:20},transition:{duration:.8,ease:R.gentle},onClick:t,style:{pointerEvents:s>=2?"auto":"none"},children:[e.jsx(Cu,{children:e.jsx(ot,{})}),e.jsx(Tu,{children:"tap to open"})]})]})]})},Bt=[{question:"What year did our story begin?",options:["2013","2014","2015","2016"],correctIndex:1,correctReaction:"Of course you remember. How could you forget?",wrongReaction:"Riya... it's literally the reason this page exists."},{question:"What month did I propose?",options:["January","March","June","December"],correctIndex:1,correctReaction:"March 19th. The best decision I ever made.",wrongReaction:"I'm going to pretend you didn't just say that."},{question:"What was the first movie we watched together?",options:["Queen","Highway","Gunday","2 States"],correctIndex:1,correctReaction:"Highway. Alia, the mountains, and us — just beginning.",wrongReaction:"Hmm, I think your memory needs a little love. It was Highway!"},{question:"What was the first meal I cooked for you?",options:["Maggi","Aloo Paratha","Dal Chawal","Pasta"],correctIndex:1,correctReaction:"Aloo Paratha. Made with love and a little too much oil.",wrongReaction:"It was Aloo Paratha, Riya. The one I was so nervous making!"},{question:"What's my most annoying habit that you secretly love?",options:["Overthinking","Being early","Bad jokes","All of the above"],correctIndex:3,correctReaction:"The fact that you love all of it makes me love you more.",wrongReaction:"Oh come on — it's all of them and you know it."},{question:"How many years has it been today?",options:["10","11","12","Who's counting?"],correctIndex:2,correctReaction:"12 years. And somehow it still feels brand new.",wrongReaction:"12, Riya. TWELVE. And I'd do twelve hundred more."}],pn={perfect:"You know us like the back of your hand. But then again, you've always known my heart better than I do.",great:"Almost perfect — just like us. Not flawless, but absolutely beautiful.",good:"You might have missed a few, but you've never missed a beat when it comes to loving me.",any:"No matter the score, you're still my favourite person in every room, every city, every lifetime."},Au=o(y.div)`
  width: 88px;
  height: 88px;
  margin: 0 auto 12px;
`,Iu=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:x.softPink,stroke:x.accent,strokeWidth:"2"}),e.jsx("circle",{cx:"22",cy:"44",r:"7",fill:x.accentSoft,opacity:"0.5"}),e.jsx("circle",{cx:"58",cy:"44",r:"7",fill:x.accentSoft,opacity:"0.5"}),e.jsx("path",{d:"M24 34 Q30 28 36 34",stroke:x.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M44 34 Q50 28 56 34",stroke:x.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M28 48 Q40 58 52 48",stroke:x.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M40 16 C40 14 36 10 33 13 C30 16 40 22 40 22 C40 22 50 16 47 13 C44 10 40 14 40 16Z",fill:x.accent})]}),Mu=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:x.goldLight,stroke:x.warmGold,strokeWidth:"2"}),e.jsx("circle",{cx:"30",cy:"34",r:"5",fill:x.card}),e.jsx("circle",{cx:"30",cy:"34",r:"2.5",fill:x.textPrimary}),e.jsx("circle",{cx:"50",cy:"34",r:"5",fill:x.card}),e.jsx("circle",{cx:"50",cy:"34",r:"2.5",fill:x.textPrimary}),e.jsx("path",{d:"M44 24 Q50 20 56 24",stroke:x.textPrimary,strokeWidth:"2",strokeLinecap:"round",fill:"none"}),e.jsx("ellipse",{cx:"40",cy:"52",rx:"6",ry:"7",fill:"none",stroke:x.textPrimary,strokeWidth:"2"}),e.jsx("text",{x:"60",y:"22",fill:x.warmGold,fontSize:"16",fontWeight:"bold",fontFamily:"serif",children:"?"})]}),Lu=({correct:t})=>e.jsx(Au,{initial:{scale:0,rotate:-20},animate:{scale:1,rotate:t?0:8},transition:{type:"spring",stiffness:260,damping:18},children:t?e.jsx(Iu,{}):e.jsx(Mu,{})}),Ou=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pu=o(y.h2)`
  font-family: ${D.display};
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 500;
  font-style: italic;
  color: ${x.textPrimary};
  margin-bottom: 4px;
  text-align: center;
`,_u=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 36px;
`,Eu=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:t,$done:n})=>t?x.accent:n?x.blush:x.cardBorder};
  transition: background 0.4s ease, transform 0.3s ease;
  transform: ${({$active:t})=>t?"scale(1.3)":"scale(1)"};
`,Fu=o.div`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,Nu=o(y.div)`
  width: 100%;
  background: ${x.card};
  border: 1px solid ${x.cardBorder};
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(196, 69, 105, 0.08);
`,Wu=o.h3`
  font-family: ${D.display};
  font-size: clamp(24px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${x.textPrimary};
  margin-bottom: 28px;
  line-height: 1.4;
  text-align: center;
`,zu=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Bu=o(y.button)`
  font-family: ${D.body};
  font-size: 20px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background 0.35s ease, border-color 0.35s ease, opacity 0.35s ease;

  color: ${({$state:t})=>t==="correct"||t==="wrong"?x.card:x.textPrimary};

  background: ${({$state:t})=>t==="correct"?x.accent:t==="wrong"?"#D4636C":x.softPink};

  border: 1.5px solid ${({$state:t})=>t==="correct"?x.accent:t==="wrong"?"#D4636C":x.blush};

  opacity: ${({$state:t})=>t==="dimmed"?.35:1};
  pointer-events: ${({$state:t})=>t!=="idle"?"none":"auto"};

  &:hover {
    background: ${({$state:t})=>t==="idle"?x.blush:void 0};
    border-color: ${({$state:t})=>t==="idle"?x.accentSoft:void 0};
  }
`,Ru=o(y.div)`
  text-align: center;
  margin-top: 20px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Hu=o.p`
  font-family: ${D.body};
  font-size: 20px;
  font-style: italic;
  color: ${x.textSecondary};
  line-height: 1.6;
  max-width: 380px;
`,Yu=o(y.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`,Gu=o.div`
  font-family: ${D.display};
  font-size: clamp(60px, 14vw, 80px);
  font-weight: 700;
  color: ${x.accent};
  margin-bottom: 4px;
`,Vu=o.div`
  font-family: ${D.body};
  font-size: 18px;
  color: ${x.textMuted};
  letter-spacing: 0.06em;
  margin-bottom: 28px;
`,Qu=o.p`
  font-family: ${D.body};
  font-size: 22px;
  font-style: italic;
  color: ${x.textPrimary};
  line-height: 1.7;
  max-width: 420px;
`,Uu=({onComplete:t})=>{const[n,a]=f.useState(0),[r,i]=f.useState(null),[s,l]=f.useState(0),[d,h]=f.useState(!1),[c,p]=f.useState(!1),g=Bt[n],u=r===(g==null?void 0:g.correctIndex),m=f.useCallback(j=>{r===null&&(i(j),j===g.correctIndex&&(l(k=>k+1),p(!0),setTimeout(()=>p(!1),1800)),setTimeout(()=>{n<Bt.length-1?(a(k=>k+1),i(null)):h(!0)},2600))},[r,n,g]),v=j=>r===null?"idle":j===g.correctIndex?"correct":j===r?"wrong":"dimmed",w=()=>{const j=s/Bt.length;return j===1?pn.perfect:j>=.7?pn.great:j>=.4?pn.good:pn.any};return e.jsxs(e.Fragment,{children:[c&&e.jsx(Ie,{mode:"burst"}),e.jsx(Ou,{children:e.jsx(ee,{mode:"wait",children:d?e.jsxs(Yu,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.8,ease:R.cinematic},children:[e.jsxs(Gu,{children:[s,"/",Bt.length]}),e.jsx(Vu,{children:"Your Score"}),e.jsx(Vt,{children:e.jsx(ot,{})}),e.jsx(Qu,{children:w()}),e.jsx(Ax,{onClick:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8},whileTap:{scale:.97},children:"Take me deeper..."})]},"score"):e.jsxs(y.div,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.55,ease:R.gentle},children:[e.jsx(Pu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:"Do you know us?"}),e.jsx(Vt,{children:e.jsx(ot,{})}),e.jsx(_u,{children:Bt.map((j,k)=>e.jsx(Eu,{$active:k===n,$done:k<n},k))}),e.jsxs(Fu,{children:[e.jsxs(Nu,{children:[e.jsx(Wu,{children:g.question}),e.jsx(zu,{children:g.options.map((j,k)=>e.jsx(Bu,{$state:v(k),onClick:()=>m(k),whileTap:r===null?{scale:.98}:void 0,children:j},k))})]}),e.jsx(ee,{children:r!==null&&e.jsxs(Ru,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[e.jsx(Lu,{correct:u}),e.jsx(Hu,{children:u?g.correctReaction:g.wrongReaction})]})})]})]},n)})})]})};o.div`
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
  background: ${x.card};
  border: 1.5px solid ${x.cardBorder};
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
  color: ${x.softPink};
  pointer-events: none;
  line-height: 1;
  user-select: none;
`;o.div`
  font-family: ${D.display};
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${x.accent};
  background: ${x.softPink};
  padding: 6px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-weight: 500;
  color: ${x.textPrimary};
  line-height: 1.7;
  max-width: 380px;
  position: relative;
  margin-bottom: 16px;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(18px, 4vw, 21px);
  font-style: italic;
  color: ${x.textSecondary};
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
  color: ${({$disabled:t})=>t?x.textMuted:x.accent};
  background: ${x.card};
  border: 1.5px solid ${({$disabled:t})=>t?x.cardBorder:x.blush};
  padding: 12px 28px;
  border-radius: 30px;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
  opacity: ${({$disabled:t})=>t?.4:1};
  box-shadow: 0 2px 12px rgba(196, 69, 105, 0.06);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({$disabled:t})=>t?void 0:x.accent};
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
  background: ${({$active:t,$visited:n})=>t?x.accent:n?x.blush:x.cardBorder};
  transition: all 0.4s ease;
`;o(y.div)`
  width: 100%;
  max-width: 460px;
  background: ${x.card};
  border: 1.5px solid ${x.cardBorder};
  border-radius: 28px;
  padding: 44px 28px;
  box-shadow: 0 12px 48px rgba(196, 69, 105, 0.08);
  text-align: center;
`;o.h3`
  font-family: ${D.display};
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 500;
  font-style: italic;
  color: ${x.textPrimary};
  margin-bottom: 4px;
`;o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
`;o.div`
  background: ${x.softPink};
  border-radius: 16px;
  padding: 16px 12px;
`;o.div`
  font-family: ${D.display};
  font-size: clamp(28px, 6vw, 36px);
  font-weight: 700;
  color: ${x.accent};
`;o.div`
  font-family: ${D.body};
  font-size: 16px;
  color: ${x.textMuted};
  margin-top: 2px;
`;o.p`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-style: italic;
  color: ${x.textSecondary};
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
every single day.`,style:"dramatic"},{text:"Forever starts now.",style:"finale"}],qu="Yours, always and after",Ku=M`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,Xu=M`
  0%, 100% { opacity: 0; transform: scale(0.6); }
  40% { opacity: 0.75; transform: scale(1.15); }
  60% { opacity: 0.4; transform: scale(0.95); }
`,Ju=M`
  0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.2; }
  50% { opacity: 0.32; }
  100% { transform: translateY(-110vh) scale(0.5) rotate(50deg); opacity: 0; }
`,Zu=M`
  0% { transform: translate(0, 0); }
  25% { transform: translate(25px, -18px); }
  50% { transform: translate(-18px, 12px); }
  75% { transform: translate(12px, 22px); }
  100% { transform: translate(0, 0); }
`,eh=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    170deg,
    ${x.bg} 0%,
    ${x.softPink}15 25%,
    ${x.bg} 45%,
    ${x.lavender}12 65%,
    ${x.bgAlt} 85%,
    ${x.bg} 100%
  );
`,th=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 50%, ${x.blush}40 0%, transparent 100%),
    radial-gradient(ellipse 55% 45% at 28% 32%, ${x.softPink}22 0%, transparent 100%),
    radial-gradient(ellipse 45% 35% at 72% 68%, ${x.goldLight}25 0%, transparent 100%);
`,nh=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50%;
  background: ${t=>t.$c};
  filter: blur(${t=>t.$s*.45}px);
  animation:
    ${Ku} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite,
    ${Zu} ${t=>t.$d*2.5}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,rh=[{x:"12%",y:"18%",s:130,c:`${x.blush}35`,d:7,dl:0},{x:"78%",y:"12%",s:100,c:`${x.softPink}28`,d:9,dl:2},{x:"62%",y:"72%",s:120,c:`${x.goldLight}25`,d:8,dl:1},{x:"20%",y:"68%",s:85,c:`${x.lavender}28`,d:10,dl:3},{x:"48%",y:"42%",s:170,c:`${x.softPink}16`,d:6,dl:.5},{x:"86%",y:"48%",s:70,c:`${x.goldLight}20`,d:11,dl:4}],ah=o.div`
  position: absolute;
  left: ${t=>t.$x}; bottom: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  opacity: 0.2;
  animation: ${Ju} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
`,ih=[{x:"8%",s:11,d:13,dl:0,c:x.blush},{x:"24%",s:8,d:15,dl:3,c:x.softPink},{x:"40%",s:12,d:12,dl:1,c:x.blush},{x:"56%",s:7,d:16,dl:5,c:x.goldLight},{x:"70%",s:10,d:14,dl:2,c:x.blush},{x:"84%",s:9,d:13,dl:4,c:x.softPink},{x:"16%",s:7,d:15,dl:6,c:x.goldLight},{x:"92%",s:10,d:14,dl:1,c:x.blush}],oh=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: 3.5px; height: 3.5px;
  border-radius: 50%;
  background: ${x.warmGold};
  box-shadow: 0 0 7px 2px ${x.warmGold}45;
  animation: ${Xu} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,sh=[{x:"15%",y:"14%",d:3.2,dl:0},{x:"80%",y:"9%",d:4,dl:1.5},{x:"25%",y:"85%",d:3.6,dl:.5},{x:"70%",y:"80%",d:4.2,dl:2},{x:"46%",y:"7%",d:3,dl:1},{x:"91%",y:"40%",d:5,dl:3},{x:"6%",y:"54%",d:3.4,dl:.8},{x:"60%",y:"24%",d:4.5,dl:2.5},{x:"38%",y:"92%",d:3.2,dl:1.2},{x:"84%",y:"60%",d:4,dl:.3}],yi={whisper:`radial-gradient(ellipse 60% 50% at 50% 50%, ${x.lavender}30 0%, transparent 70%)`,body:`radial-gradient(ellipse 55% 45% at 50% 50%, ${x.softPink}28 0%, transparent 70%)`,accent:`radial-gradient(ellipse 50% 40% at 50% 50%, ${x.blush}40 0%, transparent 65%)`,gold:`radial-gradient(ellipse 55% 45% at 50% 50%, ${x.goldLight}45 0%, transparent 65%)`,dramatic:`radial-gradient(ellipse 45% 35% at 50% 50%, ${x.accent}18 0%, ${x.blush}20 40%, transparent 70%)`,finale:`radial-gradient(ellipse 60% 50% at 50% 50%, ${x.accent}25 0%, ${x.blush}18 35%, transparent 65%)`},lh=o(y.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,ch=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,dh=M`
  0%, 100% { text-shadow: 0 0 30px ${x.accent}30, 0 0 60px ${x.accent}15; }
  50% { text-shadow: 0 0 50px ${x.accent}45, 0 0 90px ${x.accent}20; }
`,Dt=Re`
  position: absolute;
  width: 100%;
  white-space: pre-line;
  text-align: center;
`,ph=o(y.p)`
  ${Dt}
  font-family: ${D.body};
  font-size: clamp(20px, 4.8vw, 28px);
  font-weight: 400;
  font-style: italic;
  color: ${x.textSecondary};
  line-height: 1.75;
  letter-spacing: 0.01em;
`,xh=o(y.p)`
  ${Dt}
  font-family: ${D.body};
  font-size: clamp(22px, 5.2vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${x.textPrimary};
  line-height: 1.65;
`,uh=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(24px, 5.8vw, 34px);
  font-weight: 600;
  font-style: italic;
  color: ${x.accent};
  line-height: 1.55;
  text-shadow: 0 2px 16px ${x.accent}18;
`,hh=o(y.p)`
  ${Dt}
  font-family: ${D.script};
  font-size: clamp(26px, 6.5vw, 38px);
  font-weight: 400;
  background: linear-gradient(
    90deg,
    ${x.warmGold} 0%,
    ${x.gold} 30%,
    #f5d5a0 50%,
    ${x.gold} 70%,
    ${x.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${ch} 5s linear infinite;
  line-height: 1.6;
  filter: drop-shadow(0 2px 12px ${x.warmGold}25);
`,fh=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  font-style: italic;
  color: ${x.accent};
  line-height: 1.4;
  text-shadow:
    0 0 24px ${x.accent}28,
    0 4px 20px ${x.accent}12;
`,gh=o(y.p)`
  ${Dt}
  font-family: ${D.display};
  font-size: clamp(34px, 10vw, 58px);
  font-weight: 700;
  font-style: italic;
  color: ${x.accent};
  line-height: 1.3;
  animation: ${dh} 2.5s ease-in-out infinite;
`,mh={whisper:ph,body:xh,accent:uh,gold:hh,dramatic:fh,finale:gh},To={whisper:{from:"up",blur:6,scale:.98},body:{from:"down",blur:5,scale:.97},accent:{from:"scale",blur:8,scale:.88},gold:{from:"up",blur:6,scale:.95},dramatic:{from:"scale",blur:12,scale:.75},finale:{from:"scale",blur:16,scale:.6}};function vi(t){const n=To[t];return{opacity:0,y:n.from==="up"?24:n.from==="down"?-24:0,scale:n.scale,filter:`blur(${n.blur}px)`}}function yh(){return{opacity:1,y:0,scale:1,filter:"blur(0px)"}}function vh(t){return{opacity:0,y:-16,scale:.97,filter:`blur(${Math.min(To[t].blur,5)}px)`}}const bh=M`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,jh=o(y.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,wh=o.p`
  font-family: ${D.script};
  font-size: clamp(30px, 8vw, 44px);
  color: ${x.warmGold};
  text-shadow:
    0 0 24px ${x.warmGold}30,
    0 2px 12px ${x.warmGold}18;
`,kh=o.div`
  width: clamp(120px, 40vw, 200px);
  height: 1.5px;
  background: linear-gradient(90deg, transparent, ${x.warmGold}55, transparent);
  transform-origin: center;
  animation: ${bh} 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`,$h=o(y.div)`
  position: absolute;
  bottom: max(30px, 4vh);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  align-items: center;
`,Sh=o.div`
  width: ${t=>t.$a?"22px":"5px"};
  height: 5px;
  border-radius: 3px;
  background: ${t=>t.$a?x.accent:t.$p?x.blush:`${x.textMuted}25`};
  opacity: ${t=>t.$a?1:t.$p?.6:.35};
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
`,Ch=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
`,Th={whisper:4600,body:4600,accent:4400,gold:4800,dramatic:4200,finale:5e3},Dh={whisper:1,body:1,accent:.9,gold:1.1,dramatic:1.3,finale:1.6},Ah=({onComplete:t})=>{const[n,a]=f.useState(-1),[r,i]=f.useState(!1),[s,l]=f.useState(!1),d=f.useMemo(()=>{const c=[];let p=900;for(let g=0;g<jt.length;g++)c.push(p),p+=Th[jt[g].style];return{starts:c,sigAt:p,fadeAt:p+4200,doneAt:p+5600}},[]);f.useEffect(()=>{const c=[],p=t;return d.starts.forEach((g,u)=>{c.push(setTimeout(()=>a(u),g))}),c.push(setTimeout(()=>{a(-2),i(!0)},d.sigAt)),c.push(setTimeout(()=>l(!0),d.fadeAt)),c.push(setTimeout(()=>p(),d.doneAt)),()=>c.forEach(clearTimeout)},[]);const h=n>=0&&n<jt.length?jt[n].style:null;return e.jsxs(eh,{children:[e.jsx(th,{}),rh.map((c,p)=>e.jsx(nh,{$x:c.x,$y:c.y,$s:c.s,$c:c.c,$d:c.d,$dl:c.dl},p)),ih.map((c,p)=>e.jsx(ah,{$x:c.x,$s:c.s,$d:c.d,$dl:c.dl,$c:c.c},p)),sh.map((c,p)=>e.jsx(oh,{$x:c.x,$y:c.y,$d:c.d,$dl:c.dl},p)),e.jsx(Ie,{mode:"ambient",density:20}),e.jsx(lh,{animate:{background:h?yi[h]:r?yi.gold:"none"},transition:{duration:1.6,ease:[.25,.1,.25,1]}}),e.jsxs(Ch,{children:[jt.map((c,p)=>{const g=mh[c.style],u=n===p,m=n>p||n===-2;return e.jsx(g,{initial:vi(c.style),animate:u?yh():m?vh(c.style):vi(c.style),transition:{duration:Dh[c.style],ease:R.cinematic},style:{pointerEvents:"none"},children:c.text},p)}),e.jsxs(jh,{initial:{opacity:0,scale:.85,filter:"blur(8px)"},animate:{opacity:r&&!s?1:0,scale:r?1:.85,filter:r&&!s?"blur(0px)":"blur(8px)"},transition:{duration:1.3,ease:R.gentle},children:[e.jsx(wh,{children:qu}),r&&!s&&e.jsx(kh,{})]})]}),e.jsx($h,{initial:{opacity:0},animate:{opacity:s?0:n>=0?.85:0},transition:{duration:.6},children:jt.map((c,p)=>e.jsx(Sh,{$a:n===p,$p:n>p},p))})]})},$r=["For 12 years, you have been my everything.","For years, we have waited.","Every delay.","Every storm.","Every test.","Only made me more certain.","That you are my forever.","This year, Riya…"],Do=["I choose you.","I'll always choose you.","Here's to the future we've been dreaming of."],Ih="Happy 12th Anniversary, my love",Mh="19 March 2014  →  19 March 2026  →  ∞",Lh="Every love story is beautiful, but ours is my favourite.",Oh=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
`,Ph=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`,_h=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(22px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${({$gold:t})=>t?x.warmGold:x.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
`,Eh=M`
  0%, 100% { filter: drop-shadow(0 0 6px ${x.warmGold}40); }
  50% { filter: drop-shadow(0 0 20px ${x.warmGold}80); }
`,Fh=o(y.div)`
  margin: 24px 0 20px;
  animation: ${Eh} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
`,Nh=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: ${({$gold:t})=>t?600:500};
  font-style: italic;
  color: ${({$gold:t})=>t?x.accent:x.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
  position: relative;
  z-index: 1;
  text-align: center;
`,gn=2,Ao=$r.length*gn+1.2,Io=Ao+2,Wh=Io+Do.length*gn+3,zh=({onComplete:t})=>{const[n,a]=f.useState(0),[r,i]=f.useState(!1),[s,l]=f.useState(!1),[d,h]=f.useState(!1);return f.useEffect(()=>{const c=[],p=t;return $r.forEach((g,u)=>{c.push(setTimeout(()=>a(u+1),(u+1)*gn*1e3))}),c.push(setTimeout(()=>{i(!0),h(!0),setTimeout(()=>h(!1),2200)},Ao*1e3)),c.push(setTimeout(()=>l(!0),Io*1e3)),c.push(setTimeout(()=>p(),Wh*1e3)),()=>c.forEach(clearTimeout)},[]),e.jsxs(Oh,{children:[d&&e.jsx(Ie,{mode:"burst",density:55}),e.jsx(Ph,{children:$r.map((c,p)=>e.jsx(_h,{$gold:c.startsWith("This year"),initial:{opacity:0},animate:{opacity:p<n?1:0},transition:{duration:1,ease:R.cinematic},children:c},p))}),e.jsx(y.div,{initial:{opacity:0},animate:{opacity:r?1:0},transition:{duration:.6},style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(Vt,{children:e.jsx(ot,{})})}),e.jsx(Fh,{initial:{opacity:0,scale:.5},animate:{opacity:r?1:0,scale:r?1:.5},transition:{duration:1.2,ease:R.cinematic},children:e.jsxs("svg",{width:"140",height:"90",viewBox:"0 0 140 90",fill:"none",children:[e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:x.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:x.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:x.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:x.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsxs("circle",{cx:"70",cy:"45",r:"4",fill:x.warmGold,children:[e.jsx("animate",{attributeName:"r",values:"3;5;3",dur:"2s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]})]})}),Do.map((c,p)=>e.jsx(Nh,{$gold:p===0,initial:{opacity:0,y:12},animate:{opacity:s?1:0,y:s?0:12},transition:{delay:s?p*gn:0,duration:1,ease:R.cinematic},children:c},`a-${p}`))]})},Bh=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Rh=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,Hh=M`
  0%, 100% { text-shadow: 0 0 20px rgba(196, 69, 105, 0.2), 0 4px 40px rgba(196, 69, 105, 0.1); }
  50% { text-shadow: 0 0 40px rgba(196, 69, 105, 0.4), 0 4px 60px rgba(196, 69, 105, 0.2); }
`,Yh=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`,zr=o(y.span)`
  font-family: ${D.display};
  font-weight: 700;
  font-style: italic;
  line-height: 1.1;
  display: inline-block;
`,Gh=o(zr)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${x.textPrimary};
  margin-right: clamp(12px, 3vw, 20px);
`,Vh=o(zr)`
  font-size: clamp(72px, 18vw, 120px);
  color: ${x.accent};
  animation: ${Hh} 3s ease-in-out infinite;
  margin-right: clamp(12px, 3vw, 20px);
`,Qh=o(zr)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${x.warmGold};
`,Uh=o(y.div)`
  color: ${x.accent};
  margin-top: 24px;

  svg {
    width: clamp(40px, 10vw, 64px);
    height: clamp(40px, 10vw, 64px);
  }
`,qh=M`
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  56% { transform: scale(1); }
`,Kh=o.div`
  animation: ${qh} 1.8s ease-in-out infinite;
  display: flex;
`,Xh=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(20px, 4.5vw, 26px);
  font-style: italic;
  font-weight: 500;
  color: ${x.textSecondary};
  margin-top: 32px;
  max-width: 400px;
  line-height: 1.6;
`,Jh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),Zh=({onComplete:t})=>{const[n,a]=f.useState(0),[r,i]=f.useState(!1);return f.useEffect(()=>{const s=t,l=[setTimeout(()=>a(1),800),setTimeout(()=>{a(2),i(!0),setTimeout(()=>i(!1),2e3)},2e3),setTimeout(()=>a(3),3200),setTimeout(()=>a(4),4800),setTimeout(()=>s(),8e3)];return()=>l.forEach(clearTimeout)},[]),e.jsxs(Bh,{children:[e.jsx(Ie,{mode:"ambient",density:20}),r&&e.jsx(Ie,{mode:"burst",density:50}),e.jsxs(Rh,{children:[e.jsxs(Yh,{children:[e.jsx(Gh,{initial:{opacity:0,x:-30},animate:{opacity:n>=1?1:0,x:n>=1?0:-30},transition:{duration:.8,ease:R.cinematic},children:"I"}),e.jsx(Vh,{initial:{opacity:0,scale:.3},animate:{opacity:n>=2?1:0,scale:n>=2?1:.3},transition:{type:"spring",stiffness:100,damping:12},children:"Love"}),e.jsx(Qh,{initial:{opacity:0,x:30},animate:{opacity:n>=3?1:0,x:n>=3?0:30},transition:{duration:.8,ease:R.cinematic},children:"You"})]}),e.jsx(Uh,{initial:{opacity:0,scale:0},animate:{opacity:n>=3?1:0,scale:n>=3?1:0},transition:{type:"spring",stiffness:200,damping:12,delay:n>=3?.3:0},children:e.jsx(Kh,{children:e.jsx(Jh,{})})}),e.jsxs(Xh,{initial:{opacity:0,y:12},animate:{opacity:n>=4?1:0,y:n>=4?0:12},transition:{duration:1,ease:R.gentle},children:["More than words could ever say.",e.jsx("br",{}),"More than twelve years could ever show."]})]})]})},ef=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,tf=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,bi=o(y.p)`
  font-family: ${D.display};
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 500;
  font-style: italic;
  color: ${x.textPrimary};
  line-height: 1.4;
  margin-bottom: 8px;
`,nf=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,rf=o(y.h1)`
  font-family: ${D.display};
  font-size: clamp(44px, 11vw, 80px);
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  margin-top: 12px;
  background: linear-gradient(
    90deg,
    ${x.warmGold} 0%,
    ${x.accent} 25%,
    ${x.warmGold} 50%,
    ${x.accent} 75%,
    ${x.warmGold} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${nf} 4s linear infinite;
  filter: drop-shadow(0 4px 24px rgba(201, 149, 107, 0.3));
`,af=M`
  0%, 100% { filter: drop-shadow(0 0 8px ${x.warmGold}60); }
  50% { filter: drop-shadow(0 0 24px ${x.warmGold}AA); }
`,of=o(y.div)`
  margin: 32px 0 24px;
  animation: ${af} 2.5s ease-in-out infinite;
`,sf=M`
  0%, 100% { box-shadow: 0 4px 24px rgba(196, 69, 105, 0.2); }
  50% { box-shadow: 0 8px 40px rgba(196, 69, 105, 0.4); }
`,lf=o(y.button)`
  font-family: ${D.display};
  font-size: clamp(26px, 6vw, 36px);
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.06em;
  color: ${x.card};
  background: linear-gradient(135deg, ${x.accent}, ${x.accentSoft});
  border: none;
  padding: 20px 72px;
  border-radius: 60px;
  cursor: pointer;
  margin-top: 36px;
  animation: ${sf} 2.5s ease-in-out infinite;

  &:active { transform: scale(0.95) !important; }
`,cf=o(y.p)`
  font-family: ${D.script};
  font-size: clamp(32px, 8vw, 52px);
  color: ${x.accent};
  margin-top: 40px;
`,df=()=>e.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:[e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:x.warmGold,strokeWidth:"4"}),e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:x.gold,strokeWidth:"1.5",opacity:"0.4"}),e.jsx("polygon",{points:"50,20 38,38 50,34 62,38",fill:x.gold,stroke:x.warmGold,strokeWidth:"1.5"}),e.jsx("polygon",{points:"50,20 62,38 50,34",fill:"rgba(255,255,255,0.6)"}),e.jsx("circle",{cx:"50",cy:"26",r:"2",fill:x.card,children:e.jsx("animate",{attributeName:"opacity",values:"0.4;1;0.4",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"50",y1:"10",x2:"50",y2:"14",stroke:x.warmGold,strokeWidth:"1.5",opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"36",y1:"18",x2:"38",y2:"22",stroke:x.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"64",y1:"18",x2:"62",y2:"22",stroke:x.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.2s",repeatCount:"indefinite"})})]}),pf=({onComplete:t})=>{const[n,a]=f.useState(0),[r,i]=f.useState(!1),[s,l]=f.useState(!1);f.useEffect(()=>{const c=[setTimeout(()=>a(1),1200),setTimeout(()=>a(2),3200),setTimeout(()=>{a(3),i(!0),setTimeout(()=>i(!1),2500)},5500),setTimeout(()=>a(4),7500),setTimeout(()=>a(5),9e3)];return()=>c.forEach(clearTimeout)},[]);const d=()=>{l(!0),i(!0),setTimeout(()=>{i(!1),t()},3e3)},h=n>=5&&!s;return e.jsxs(ef,{children:[e.jsx(Ie,{mode:"ambient",density:15}),r&&e.jsx(Ie,{mode:"burst",density:80}),e.jsxs(tf,{children:[e.jsx(bi,{initial:{opacity:0,y:16},animate:{opacity:n>=1?1:0,y:n>=1?0:16},transition:{duration:1.2,ease:R.cinematic},children:"Riya..."}),e.jsx(bi,{initial:{opacity:0,y:16},animate:{opacity:n>=2?1:0,y:n>=2?0:16},transition:{duration:1.2,ease:R.cinematic},children:"I have one question..."}),e.jsxs(rf,{initial:{opacity:0,scale:.6},animate:{opacity:n>=3?1:0,scale:n>=3?1:.6},transition:{type:"spring",stiffness:80,damping:12},children:["Will You",e.jsx("br",{}),"Marry Me?"]}),e.jsx(of,{initial:{opacity:0,y:20},animate:{opacity:n>=4&&!s?1:0,y:n>=4?0:20},transition:{duration:1,ease:R.cinematic},children:e.jsx(df,{})}),e.jsx(lf,{initial:{opacity:0,scale:.8},animate:{opacity:h?1:0,scale:h?1:.8},transition:{type:"spring",stiffness:120,damping:10},onClick:d,style:{pointerEvents:h?"auto":"none"},children:"Yes!"}),e.jsx(cf,{initial:{opacity:0,scale:.5},animate:{opacity:s?1:0,scale:s?1:.5},transition:{type:"spring",stiffness:100,damping:10},children:"She said Yes!"})]})]})},Be="#E57373",ie="#F9A825",_e="#FFD54F",We="#8D6E63",or="#F5D5C0",xf="#F0CDB5",_="#DAA520",Pe="#B71C1C",uf=M`
  0% { transform: translateY(-20px) rotate(0deg); opacity: 0.65; }
  50% { opacity: 0.85; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
`,hf=M`
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(3deg); }
  70% { transform: rotate(-3deg); }
`,ff=M`
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  100% { transform: translateY(-70px) scale(0.4); opacity: 0; }
`,gf=o.div`
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
`,mf=o(y.div)`
  position: relative;
  z-index: 1;
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  align-items: center;
`,yf=o.svg`
  width: 100%;
  height: auto;
  overflow: visible;
`,vf=o.g`
  animation: ${hf} 5s ease-in-out infinite;
  transform-origin: center bottom;
`,bf=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  animation: ${uf} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
  opacity: 0.55;
`,jf=[{x:"6%",s:9,d:7,dl:0,c:Be},{x:"16%",s:7,d:9,dl:1.5,c:_e},{x:"28%",s:10,d:6,dl:.5,c:Be},{x:"40%",s:7,d:8,dl:2,c:ie},{x:"52%",s:9,d:7,dl:1,c:Be},{x:"62%",s:6,d:10,dl:3,c:_e},{x:"74%",s:8,d:6.5,dl:.8,c:Be},{x:"84%",s:7,d:8,dl:2.5,c:ie},{x:"92%",s:9,d:7,dl:1.2,c:Be},{x:"48%",s:5,d:9,dl:4,c:_e},{x:"20%",s:8,d:7.5,dl:3.5,c:ie},{x:"70%",s:6,d:8.5,dl:.3,c:Be}],wf=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: 35%;
  width: 14px; height: 14px;
  color: ${x.accent};
  animation: ${ff} 3.5s ease-out ${t=>t.$dl}s infinite;
  pointer-events: none;
  svg { width: 100%; height: 100%; }
`,kf=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),$f=M`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Sf=M`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,Cf=o(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(16px, 3vh, 28px);
  gap: 6px;
`,Tf=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    ${x.warmGold} 0%,
    #f5d5a0 50%,
    ${x.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${$f} 5s linear infinite;
`,Df=o(y.div)`
  width: clamp(60px, 20vw, 100px);
  height: 1px;
  background: linear-gradient(90deg, transparent, ${x.warmGold}50, transparent);
  transform-origin: center;
`,ji=o(Df)`
  animation: ${Sf} 1s ease forwards;
`,wi=o(y.p)`
  font-family: ${D.script};
  font-size: ${t=>t.$primary?"clamp(26px, 6.5vw, 38px)":"clamp(22px, 5.5vw, 32px)"};
  font-weight: ${t=>t.$primary?700:400};
  color: ${t=>t.$primary?x.accent:x.textPrimary};
  text-shadow: ${t=>t.$primary?`0 2px 16px ${x.accent}20`:"none"};
  line-height: 1.3;
`,Af=o(y.span)`
  font-family: ${D.display};
  font-size: clamp(16px, 4vw, 22px);
  font-style: italic;
  color: ${x.warmGold};
  filter: drop-shadow(0 1px 6px ${x.warmGold}25);
`,If=({onComplete:t})=>{const[n,a]=f.useState(0);return f.useEffect(()=>{const r=t,i=[setTimeout(()=>a(1),500),setTimeout(()=>a(2),1800),setTimeout(()=>a(3),4e3),setTimeout(()=>r(),9e3)];return()=>i.forEach(clearTimeout)},[]),e.jsxs(gf,{children:[e.jsx(Ie,{mode:"celebration",density:50}),jf.map((r,i)=>e.jsx(bf,{$x:r.x,$s:r.s,$d:r.d,$dl:r.dl,$c:r.c},i)),["30%","45%","60%","75%"].map((r,i)=>e.jsx(wf,{$x:r,$dl:i*1,children:e.jsx(kf,{})},i)),e.jsxs(mf,{initial:{opacity:0},animate:{opacity:n>=1?1:0},transition:{duration:1.5,ease:R.cinematic},children:[e.jsxs(yf,{viewBox:"0 0 400 380",preserveAspectRatio:"xMidYMid meet",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"wMandapRoof",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:Pe,stopOpacity:"0.85"}),e.jsx("stop",{offset:"100%",stopColor:Be,stopOpacity:"0.55"})]}),e.jsxs("linearGradient",{id:"wPillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:ie,stopOpacity:"0.65"}),e.jsx("stop",{offset:"50%",stopColor:_e,stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:ie,stopOpacity:"0.65"})]}),e.jsxs("radialGradient",{id:"wFire",cx:"50%",cy:"80%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF6F00",stopOpacity:"0.9"}),e.jsx("stop",{offset:"60%",stopColor:ie,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:"transparent"})]}),e.jsxs("linearGradient",{id:"wSky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFF8F0",stopOpacity:"0"}),e.jsx("stop",{offset:"100%",stopColor:_e,stopOpacity:"0.08"})]})]}),e.jsx("rect",{x:"0",y:"0",width:"400",height:"380",fill:"url(#wSky)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",fill:"url(#wMandapRoof)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",stroke:Pe,strokeWidth:"2",fill:"none",opacity:"0.6"}),e.jsx("ellipse",{cx:"200",cy:"14",rx:"6",ry:"8",fill:_,opacity:"0.8"}),e.jsx("circle",{cx:"200",cy:"7",r:"3",fill:_e,opacity:"0.7"}),e.jsx("path",{d:"M105 75 Q150 50, 200 46 Q250 50, 295 75",fill:Be,opacity:"0.3"}),Array.from({length:12}).map((r,i)=>{const s=100+i*17;return e.jsx("circle",{cx:s,cy:78,r:4.5,fill:_e,opacity:"0.45"},`sc${i}`)}),e.jsx("rect",{x:"95",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"291",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"140",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),e.jsx("rect",{x:"250",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),[0,1,2,3,4,5,6].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"102",cy:92+r*24,r:"5",fill:ie,opacity:"0.55"}),e.jsx("circle",{cx:"298",cy:92+r*24,r:"5",fill:ie,opacity:"0.55"})]},`gL${r}`)),e.jsx("path",{d:"M109 82 Q200 110, 291 82",stroke:ie,strokeWidth:"4.5",fill:"none",opacity:"0.45"}),e.jsx("path",{d:"M109 88 Q200 114, 291 88",stroke:_e,strokeWidth:"2.5",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M109 82 Q85 140, 109 200",stroke:ie,strokeWidth:"3",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M291 82 Q315 140, 291 200",stroke:ie,strokeWidth:"3",fill:"none",opacity:"0.3"}),Array.from({length:8}).map((r,i)=>e.jsx("circle",{cx:115+i*24,cy:55+i%2*12,r:"2.5",fill:_e,children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.9;0.2",dur:`${1.5+i*.25}s`,repeatCount:"indefinite"})},`tw${i}`)),e.jsx("rect",{x:"80",y:"276",width:"240",height:"14",rx:"4",fill:We,opacity:"0.3"}),e.jsx("rect",{x:"80",y:"276",width:"240",height:"4",rx:"2",fill:ie,opacity:"0.2"}),e.jsx("rect",{x:"85",y:"286",width:"230",height:"3",rx:"1",fill:We,opacity:"0.15"}),e.jsxs("g",{transform:"translate(200, 252)",children:[e.jsx("ellipse",{cx:"0",cy:"8",rx:"16",ry:"5",fill:We,opacity:"0.25"}),e.jsx("ellipse",{cx:"0",cy:"0",rx:"10",ry:"14",fill:"url(#wFire)",opacity:"0.7",children:e.jsx("animate",{attributeName:"ry",values:"12;16;12",dur:"1.2s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"-3",cy:"-4",rx:"4",ry:"8",fill:"#FFAB00",opacity:"0.5",children:e.jsx("animate",{attributeName:"ry",values:"7;10;7",dur:"0.8s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"2",cy:"-2",rx:"3",ry:"6",fill:"#FFD54F",opacity:"0.4",children:e.jsx("animate",{attributeName:"ry",values:"5;8;5",dur:"1s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"0",cy:"0",r:"24",fill:"#FF6F00",opacity:"0.06",children:e.jsx("animate",{attributeName:"r",values:"20;28;20",dur:"1.5s",repeatCount:"indefinite"})})]}),e.jsxs(vf,{children:[e.jsxs("g",{transform:"translate(232, 140)",children:[e.jsx("ellipse",{cx:"0",cy:"-4",rx:"12",ry:"10",fill:"#2D1B30",opacity:"0.55"}),e.jsx("circle",{cx:"0",cy:"2",r:"11",fill:xf,opacity:"0.85"}),e.jsx("circle",{cx:"-4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("circle",{cx:"4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("path",{d:"M-3,5 Q0,8 3,5",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-16,14 Q-18,50 -14,94 L14,94 Q18,50 16,14 Z",fill:_,opacity:"0.7"}),e.jsx("path",{d:"M-8,14 Q0,10 8,14",stroke:_,strokeWidth:"2",fill:"none",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"16",x2:"0",y2:"88",stroke:ie,strokeWidth:"1",opacity:"0.3"}),[24,36,48,60].map(r=>e.jsx("circle",{cx:"0",cy:r,r:"1.5",fill:ie,opacity:"0.4"},`btn${r}`)),e.jsx("path",{d:"M-16,18 Q-24,40 -20,70",stroke:Pe,strokeWidth:"5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),e.jsx("path",{d:"M-16,20 Q-24,42 -20,60",stroke:_,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M16,20 Q22,38 18,56",stroke:_,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-6,94 L-7,114",stroke:_,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("path",{d:"M6,94 L7,114",stroke:_,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("ellipse",{cx:"-7",cy:"116",rx:"5",ry:"3",fill:We,opacity:"0.5"}),e.jsx("ellipse",{cx:"7",cy:"116",rx:"5",ry:"3",fill:We,opacity:"0.5"}),e.jsx("path",{d:"M-10,115 Q-7,112 -4,115",fill:We,opacity:"0.3"}),e.jsx("path",{d:"M4,115 Q7,112 10,115",fill:We,opacity:"0.3"})]}),e.jsxs("g",{transform:"translate(164, 152)",children:[e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",fill:Pe,opacity:"0.8"}),e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",stroke:_,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),e.jsx("circle",{cx:"0",cy:"-18",r:"3",fill:_,opacity:"0.85",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-20 Q-16,-14 -16,-8 Q-17,0 -16,8 Q-15,16 -12,22",stroke:_,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M-13,-18 Q-14,-12 -14,-6 Q-15,2 -14,10 Q-13,18 -11,24",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"-16",cy:"-8",r:"1.8",fill:_,opacity:"0.6"}),e.jsx("circle",{cx:"-16",cy:"2",r:"2",fill:_,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"-14",cy:"12",r:"2.2",fill:_,opacity:"0.6"}),e.jsx("circle",{cx:"-12",cy:"22",r:"2.5",fill:_,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M14,-20 Q16,-14 16,-8 Q17,0 16,8 Q15,16 12,22",stroke:_,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M13,-18 Q14,-12 14,-6 Q15,2 14,10 Q13,18 11,24",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"16",cy:"-8",r:"1.8",fill:_,opacity:"0.6"}),e.jsx("circle",{cx:"16",cy:"2",r:"2",fill:_,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"14",cy:"12",r:"2.2",fill:_,opacity:"0.6"}),e.jsx("circle",{cx:"12",cy:"22",r:"2.5",fill:_,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-18 Q-18,-8 -16,6 Q-10,12 0,14 Q10,12 16,6 Q18,-8 14,-18 Z",fill:Pe,opacity:"0.7"}),e.jsx("path",{d:"M-12,-12 Q0,-6 12,-12",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M-10,-6 Q0,0 10,-6",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"0",cy:"-6",r:"10",fill:or,opacity:"0.88"}),e.jsx("circle",{cx:"-3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("circle",{cx:"3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("path",{d:"M-3,-4 Q0,-1 3,-4",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"2",cy:"-5",r:"2",stroke:_,strokeWidth:"0.7",fill:"none",opacity:"0.55"}),e.jsx("circle",{cx:"3.2",cy:"-4",r:"0.8",fill:_,opacity:"0.6"}),e.jsx("path",{d:"M-9,4 Q-10,8 -8,12 Q0,16 8,12 Q10,8 9,4",stroke:_,strokeWidth:"2",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-7,8 Q0,14 7,8",stroke:_,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"0",cy:"14",r:"2.5",fill:_,opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.9;0.5",dur:"3s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,12 Q-16,28 -14,44 L14,44 Q16,28 14,12 Z",fill:Pe,opacity:"0.7"}),e.jsx("path",{d:"M-12,18 Q0,22 12,18",stroke:_,strokeWidth:"1",fill:"none",opacity:"0.4"}),e.jsx("path",{d:"M-11,26 Q0,30 11,26",stroke:_,strokeWidth:"1",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-10,34 Q0,38 10,34",stroke:_,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M-14,42 L14,42",stroke:_,strokeWidth:"2",opacity:"0.4"}),e.jsx("path",{d:"M-14,44 Q-20,62 -26,96 L26,96 Q20,62 14,44 Z",fill:Pe,opacity:"0.6"}),e.jsx("path",{d:"M-24,88 Q0,96 24,88",stroke:_,strokeWidth:"1.5",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-26,96 L26,96",stroke:_,strokeWidth:"2.5",opacity:"0.45"}),e.jsx("path",{d:"M-18,60 Q0,66 18,60",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-20,72 Q0,78 20,72",stroke:_,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-14,16 Q-22,32 -18,48",stroke:Pe,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M14,16 Q20,30 17,46",stroke:Pe,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),[42,45,48].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"-18",cy:r,r:"2.5",stroke:_,strokeWidth:"1",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"17",cy:r-2,r:"2.5",stroke:_,strokeWidth:"1",fill:"none",opacity:"0.5"})]},`blL${r}`)),e.jsx("circle",{cx:"-18",cy:"50",r:"3",fill:or,opacity:"0.7"}),e.jsx("circle",{cx:"17",cy:"48",r:"3",fill:or,opacity:"0.7"}),e.jsx("circle",{cx:"-18",cy:"50",r:"2",fill:"#C47A5A",opacity:"0.2"}),e.jsx("circle",{cx:"17",cy:"48",r:"2",fill:"#C47A5A",opacity:"0.2"})]}),e.jsx("path",{d:"M216,196 Q200,190 184,200",stroke:ie,strokeWidth:"3.5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),[0,1,2,3,4].map(r=>e.jsx("circle",{cx:216-r*8,cy:196+Math.sin(r*.8)*4,r:"2.5",fill:ie,opacity:"0.5"},`jm${r}`))]}),[95,130,265,300].map((r,i)=>e.jsxs("g",{transform:`translate(${r}, 270)`,children:[e.jsx("path",{d:"M-4,0 Q0,-6 4,0 Z",fill:"#FF6F00",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.7;0.3",dur:`${1.2+i*.3}s`,repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"0",cy:"2",rx:"5",ry:"2.5",fill:We,opacity:"0.4"})]},`diya${i}`)),[115,155,245,285].map((r,i)=>e.jsx("g",{children:[0,1,2,3,4,5].map(s=>e.jsx("circle",{cx:r,cy:82+s*12,r:"3",fill:ie,opacity:.35-s*.04,children:e.jsx("animate",{attributeName:"opacity",values:`${.25-s*.03};${.45-s*.03};${.25-s*.03}`,dur:`${2+i*.5}s`,repeatCount:"indefinite"})},`mg${i}${s}`))},`mg${i}`)),e.jsx("ellipse",{cx:"200",cy:"290",rx:"120",ry:"8",fill:"#FF6F00",opacity:"0.04",children:e.jsx("animate",{attributeName:"opacity",values:"0.03;0.07;0.03",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs(Cf,{initial:{opacity:0},animate:{opacity:n>=2?1:0},transition:{duration:1},children:[e.jsx(Tf,{initial:{opacity:0,y:8},animate:{opacity:n>=2?1:0,y:n>=2?0:8},transition:{duration:1,ease:R.cinematic,delay:(n>=2,0)},children:"RSVP"}),n>=2&&e.jsx(ji,{}),e.jsx(wi,{$primary:!0,initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:R.cinematic,delay:n>=2?.5:0},children:"Mrs Riya Pranshu Nijhawan"}),e.jsx(Af,{initial:{opacity:0,scale:.7},animate:{opacity:n>=2?1:0,scale:n>=2?1:.7},transition:{duration:.8,ease:R.gentle,delay:n>=2?1:0},children:"&"}),e.jsx(wi,{initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:R.cinematic,delay:n>=2?1.3:0},children:"Mr Pranshu Nijhawan"}),n>=2&&e.jsx(ji,{})]})]})]})},Mf=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Lf=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,Of=o(y.h1)`
  font-family: ${D.display};
  font-size: clamp(32px, 7vw, 50px);
  font-weight: 600;
  font-style: italic;
  color: ${x.accent};
  line-height: 1.3;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(196, 69, 105, 0.15);
`,Pf=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 600;
  color: ${x.warmGold};
  letter-spacing: 0.06em;
  margin-bottom: 32px;
`,_f=o(y.p)`
  font-family: ${D.body};
  font-size: clamp(22px, 5vw, 28px);
  font-style: italic;
  font-weight: 500;
  color: ${x.textSecondary};
  line-height: 1.7;
  max-width: 460px;
`,Ef=o(y.p)`
  font-family: ${D.script};
  font-size: clamp(28px, 6vw, 40px);
  color: ${x.warmGold};
  margin-top: 40px;
`,Ff=()=>e.jsxs(Mf,{children:[e.jsx(Ie,{mode:"celebration",density:80}),e.jsxs(Lf,{children:[e.jsx(Of,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.6,duration:1.2,ease:R.cinematic},children:Ih}),e.jsx(Pf,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:1},children:Mh}),e.jsx(Vt,{children:e.jsx(ot,{})}),e.jsx(_f,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:3.2,duration:1.2,ease:R.gentle},children:Lh}),e.jsx(Ef,{initial:{opacity:0},animate:{opacity:1},transition:{delay:4.6,duration:1},children:"Forever yours"})]})]});function Nf(){const[t,n]=f.useState(1),a=f.useCallback(()=>{n(r=>r>=8?r:r+1)},[]);return{currentAct:t,nextAct:a}}const Wf=new Set,zf={1:t=>e.jsx(Du,{onComplete:t}),2:t=>e.jsx(Uu,{onComplete:t}),3:t=>e.jsx(Ah,{onComplete:t}),4:t=>e.jsx(zh,{onComplete:t}),5:t=>e.jsx(Zh,{onComplete:t}),6:t=>e.jsx(pf,{onComplete:t}),7:t=>e.jsx(If,{onComplete:t}),8:()=>e.jsx(Ff,{})},Bf=()=>{const{currentAct:t,nextAct:n}=Nf();return f.useEffect(()=>{const a=document.createElement("link");return a.rel="stylesheet",a.href=$o,document.head.appendChild(a),()=>{document.head.removeChild(a)}},[]),f.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),e.jsxs(e.Fragment,{children:[e.jsx(bx,{}),e.jsxs(kx,{children:[e.jsx(Cx,{}),e.jsx(ee,{mode:"wait",children:[1,2,3,4,5,6,7,8].map(a=>{if(t!==a)return null;const r=Wf.has(a)?Dx:Tx;return e.jsx(r,{variants:Ix,initial:"enter",animate:"center",exit:"exit",children:zf[a](n)},`act${a}`)})})]})]})},Rf=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},Hf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),Yf=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),Gf=o.div`
  min-height: 100vh;
  position: relative;
`,Vf=o.main`
  position: relative;
  z-index: 1;
`,Qf=o.a`
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
`,Uf=M`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,ki=o.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,$i=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${Uf} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Si=o.p`
  color: var(--text-secondary);
  font-size: 15px;
`,qf=o.button`
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
`,Kf=()=>{const t=Xo(),n=Ti();return f.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function Xf(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=rs(),i=f.useMemo(()=>Rf()?Hf:Yf,[]);return n||!t&&!a?e.jsxs(ki,{children:[e.jsx($i,{children:e.jsx(i,{})}),e.jsx(Si,{children:"Authenticating..."})]}):a&&!t?e.jsxs(ki,{children:[e.jsx($i,{style:{animation:"none",opacity:1},children:e.jsx(i,{})}),e.jsx(Si,{children:"Authentication required to continue"}),e.jsx(qf,{onClick:r,children:"Try Again"})]}):e.jsxs(Gf,{children:[e.jsx(Kf,{}),e.jsx(Qf,{href:"#main-content",children:"Skip to main content"}),e.jsx(os,{}),e.jsx(gs,{}),e.jsx(Vf,{id:"main-content",children:e.jsxs(Ko,{children:[e.jsx(dt,{path:"/",element:e.jsx(Ms,{})}),e.jsx(dt,{path:"/tax-manager",element:e.jsx(Il,{})}),e.jsx(dt,{path:"/netfolio",element:e.jsx(Wp,{})}),e.jsx(dt,{path:"/expense-manager",element:e.jsx(ea,{to:"/netfolio",replace:!0})}),e.jsx(dt,{path:"/canvas-manager",element:e.jsx(vx,{})}),e.jsx(dt,{path:"/tax-calculator",element:e.jsx(ea,{to:"/tax-manager",replace:!0})})]})})]})}function Jf(){return Ti().pathname==="/us"?e.jsxs(na,{children:[e.jsx(ra,{}),e.jsx(Bf,{})]}):e.jsx(na,{children:e.jsxs(ns,{children:[e.jsx(ra,{}),e.jsx(Xf,{})]})})}function Zf(){return e.jsx(qo,{basename:"/tools",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(Jf,{})})}Ai(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(Zf,{})}));
