import{j as e,m as b,A as K}from"./vendor-animation-BytCmOQI.js";import{a as So,r as x,L as ea,B as Ks,u as $o,R as Xs,b as jt,N as Aa,c as Js}from"./vendor-react-YDq69VoU.js";import{f as Co,d as o,m as N,l as Je}from"./vendor-styles-C2HPJuBO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var To,La=So;To=La.createRoot,La.hydrateRoot;const Do=x.createContext({isDark:!0,toggleTheme:()=>{}}),Pa=({children:t})=>{const[n,a]=x.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});x.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),x.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),s=l=>{localStorage.getItem("theme")||a(l.matches)};return i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[]);const r=()=>a(!n);return e.jsx(Do.Provider,{value:{isDark:n,toggleTheme:r},children:t})},ta=()=>{const t=x.useContext(Do);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Mo=x.createContext(null),ir="tools-auth-session",or="tools-webauthn-credential",Zs=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),el=async()=>{if(!Zs())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},sr=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},tl=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},nl=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},rl=({children:t})=>{const[n,a]=x.useState(!1),[r,i]=x.useState(!0),[s,l]=x.useState(!1),d=x.useRef(!1),u=async()=>{try{const m={challenge:sr(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:sr(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},w=await navigator.credentials.create({publicKey:m});return w?(localStorage.setItem(or,tl(w.rawId)),!0):!1}catch(f){return console.error("Registration failed:",f),!1}},c=async()=>{try{const f=localStorage.getItem(or),w={challenge:sr(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...f&&{allowCredentials:[{type:"public-key",id:nl(f),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:w})}catch(f){return console.error("Authentication failed:",f),!1}},p=x.useCallback(async()=>{i(!0),l(!1);const f=sessionStorage.getItem(ir);if(f)try{const{timestamp:w}=JSON.parse(f);if(Date.now()-w<24*60*60*1e3){a(!0),i(!1);return}}catch{}if(!await el()){a(!0),sessionStorage.setItem(ir,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const w=localStorage.getItem(or);let j=!1;w?j=await c():j=await u(),j?(a(!0),sessionStorage.setItem(ir,JSON.stringify({timestamp:Date.now()}))):l(!0)}catch{l(!0)}i(!1)},[]);x.useEffect(()=>{d.current||(d.current=!0,p())},[p]);const g=x.useCallback(()=>{p()},[p]);return e.jsx(Mo.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:s,retryAuth:g},children:t})},al=()=>{const t=x.useContext(Mo);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Oa=Co`
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
`,il=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,ol=o.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,sl=()=>{const{isDark:t}=ta();return e.jsx(il,{children:e.jsx(ol,{$isDark:t})})},ll=o(b.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,cl=o.div`
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
`,dl=o(ea)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,pl=o.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,xl=o.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,ul=o(b.button)`
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
`,hl=o(b.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,fl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),gl=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),ml=()=>{const{isDark:t,toggleTheme:n}=ta();return e.jsx(ll,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(cl,{children:[e.jsx(dl,{to:"/","aria-label":"Go to homepage",children:e.jsx(pl,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(xl,{}),e.jsx(ul,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(K,{mode:"wait",children:e.jsx(hl,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(gl,{}):e.jsx(fl,{})},t?"moon":"sun")})})]})})},yl=o(b.div)`
  position: relative;
`,vl=o(ea)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Io=o(b.div)`
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
`,bl=o(b.div)`
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

  ${Io}:hover &::before {
    opacity: 0.3;
  }
`,jl=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,wl={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},kl={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},Sl=({title:t,icon:n,to:a})=>e.jsx(yl,{variants:wl,whileHover:"hover",whileTap:"tap",children:e.jsx(vl,{to:a,children:e.jsxs(Io,{variants:kl,children:[e.jsx(bl,{children:n}),e.jsx(jl,{children:t})]})})}),$l=o.div`
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
`,Cl=o(b.div)`
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
`,Tl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Dl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),Ml=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),Il=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Al=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(Dl,{}),to:"/tax-manager"},{id:"netfolio",title:"NetFolio",icon:e.jsx(Ml,{}),to:"/netfolio"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(Il,{}),to:"/canvas-manager"}],Ll=()=>e.jsx($l,{children:e.jsx(Cl,{variants:Tl,initial:"hidden",animate:"visible",children:Al.map(t=>e.jsx(Sl,{title:t.title,icon:t.icon,to:t.to},t.id))})}),Ao=o.div`
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
`;const Fn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Ea=75e3,Pt=4,Pl=12e5,Ol=6e4,Fa=5e6,_a=10,El=12,Fl=1800;function fe(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let i="";const s=r.slice(-3),l=r.slice(0,-3);if(l.length>0){const d=[];let u=l;for(;u.length>0;)u.length>=2?(d.unshift(u.slice(-2)),u=u.slice(0,-2)):(d.unshift(u),u="");i=d.join(",")+","+s}else i=s;return(n?"-":"")+i}function _(t){return"₹"+fe(t)}function R(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[i,s]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+fe(parseInt(i))+"."+s}function Na(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:fe(t)}function _l(t){for(let n=Fn.length-1;n>=0;n--)if(t>Fn[n].from)return Fn[n].rate;return 0}function Nl(t){const n=[];let a=t,r=0;for(const i of Fn){const s=i.from,d=(i.to??1/0)-s;if(a<=0){n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const u=Math.min(a,d),c=u*i.rate/100;n.push({from:s,to:i.to,rate:i.rate,taxableInSlab:u>0?u:0,taxInSlab:c}),r+=c,a-=u}return{slabs:n,totalTax:r}}function Rl(t,n){if(n>Fa){const r=t*(1+_a/100)*(1+Pt/100),i=n-Fa,l=(t+i)*(1+Pt/100),d=l<r,u=Math.min(r,l),c=u/(1+Pt/100),p=c-t,g=u-c;return{surchargeApplicable:!0,surchargeRate:_a,surchargeAmount:p,marginalReliefApplied:d,taxAfterSurcharge:c,cess:g,totalTax:u}}else{const a=t*(Pt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function Ra(t,n,a,r,i,s,l){const d=t*n/100,u=t-d;let c=0;i==="percentage"?c=t*s/100:i==="amount"&&(c=s);const p=t+c;let g=0,f=0;a&&(r==="percentage"?(g=d*El/100,f=g):(g=Fl*12,f=g));const m=t-f,w=l.map(ee=>({name:ee.name,amount:ee.amount*12})),j=w.reduce((ee,Se)=>ee+Se.amount,0),y=Math.max(0,m-Ea),{slabs:v,totalTax:S}=Nl(y);let M=0,D=S;y<=Pl&&(M=Math.min(S,Ol),D=Math.max(0,S-M));const{surchargeApplicable:A,surchargeRate:T,surchargeAmount:k,marginalReliefApplied:L,taxAfterSurcharge:I,cess:$,totalTax:P}=Rl(D,y),H=g+f,J=P,V=g+P+j,C=m-g-P-j,F=C/12,Q=m>0?P/m*100:0,O=_l(y);let ie=0,Z=c;if(c>0&&O>0){let ee=c*O/100;A&&(ee=ee*(1+T/100)),ie=ee*(1+Pt/100),Z=c-ie}const U=C+Z,je=U/12;return{baseSalary:t,basicSalary:d,hra:u,bonus:c,totalEarnings:p,employeePF:g,employerPF:f,grossSalary:m,standardDeduction:Ea,additionalDeductions:w,totalAdditionalDeductions:j,taxableIncome:y,slabs:v,taxBeforeSurcharge:S,surchargeApplicable:A,surchargeRate:T,surchargeAmount:k,marginalReliefApplied:L,taxAfterSurcharge:I,cessRate:Pt,cess:$,totalTax:P,rebate87A:M,totalPFDeduction:H,totalTaxDeduction:J,totalDeductions:V,netSalaryYearly:C,netSalaryMonthly:F,effectiveTaxRate:Q,bonusTaxRate:O,bonusTaxAmount:ie,bonusAfterTax:Z,totalIncomeYearly:U,totalIncomeMonthly:je}}function zl(t){const n=Ra(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const i=t.baseSalary*(1+r/100);a=Ra(i,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const na="taxCalculatorInput";function Bl(t){localStorage.setItem(na,JSON.stringify(t))}function Wl(){localStorage.removeItem(na)}function Lo(){const t=localStorage.getItem(na);if(t)try{return JSON.parse(t)}catch{return null}return null}const Hl={financialYear:"FY 2025-26"},Yl=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Xt=o.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,Jt=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,Zt=o.div`
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
`,en=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Gl=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,wt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,za=o.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,ot=o.input`
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
`,lr=o.div`
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
`,cr=o.div`
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
`,Ba=o.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,tn=o(b.button)`
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
`,Vl=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,dr=o(b.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,pr=o(b.button)`
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
`,Ql=o(b.button)`
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
`,Ul=o.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,ql=o(b.button)`
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
`,Kl=o(b.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Xl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Jl=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Zl=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),ec=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),tc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),nc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),xr=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Nn={type:"spring",stiffness:300,damping:30,mass:.8},rc={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Nn}},ac={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Nn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Nn},opacity:{duration:.1}}}},ic={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Nn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function ur(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function wn(t){return parseInt(t.replace(/,/g,""))||0}const oc=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,i]=x.useState(""),[s,l]=x.useState("50"),[d,u]=x.useState("percentage"),[c,p]=x.useState("none"),[g,f]=x.useState(""),[m,w]=x.useState([]),[j,y]=x.useState(""),[v,S]=x.useState(!1),M=x.useRef(!1);x.useEffect(()=>{const C=Lo();C&&(i(fe(C.baseSalary)),l(C.basicPercentage.toString()),u(C.pfType),p(C.bonusType),f(C.bonusValue>0?C.bonusType==="amount"?fe(C.bonusValue):C.bonusValue.toString():""),w(C.additionalDeductions.map(F=>({name:F.name,amount:fe(F.amount)}))),y(C.hikePercentage>0?C.hikePercentage.toString():"")),S(!0)},[]),x.useEffect(()=>{v&&a&&r&&!M.current&&(M.current=!0,setTimeout(()=>{$()},100))},[v,a,r]);const D=C=>{i(ur(C))},A=C=>{f(ur(C))},T=(C,F)=>{const Q=[...m];Q[C].amount=ur(F),w(Q)},k=()=>{w([...m,{name:"",amount:""}])},L=C=>{w(m.filter((F,Q)=>Q!==C))},I=(C,F)=>{const Q=[...m];Q[C].name=F,w(Q)},$=()=>{const C={baseSalary:wn(r),basicPercentage:parseFloat(s)||50,calculatePF:!0,pfType:d,bonusType:c,bonusValue:c==="amount"?wn(g):parseFloat(g)||0,additionalDeductions:m.filter(F=>F.name&&F.amount).map(F=>({name:F.name,amount:wn(F.amount)})),hikePercentage:parseFloat(j)||0};Bl(C),t(C)},P=()=>{i(""),l("50"),u("percentage"),p("none"),f(""),w([]),y(""),Wl(),n==null||n()},J=wn(r)>0,V=r||m.length>0||c!=="none"||j;return e.jsxs(Yl,{variants:rc,initial:"hidden",animate:"visible",children:[e.jsxs(Xt,{children:[e.jsxs(Jt,{children:[e.jsx(Zt,{$color:"#10b981",children:e.jsx(Xl,{})}),e.jsx(en,{children:"Salary Details"})]}),e.jsxs(Gl,{children:[e.jsxs(wt,{children:[e.jsx(za,{children:"Yearly CTC *"}),e.jsx(lr,{children:e.jsx(ot,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:C=>D(C.target.value)})})]}),e.jsxs(wt,{children:[e.jsx(za,{children:"Basic %"}),e.jsx(cr,{children:e.jsx(ot,{type:"number",inputMode:"numeric",placeholder:"50",value:s,onChange:C=>l(C.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(Xt,{children:[e.jsxs(Jt,{children:[e.jsx(Zt,{$color:"#3b82f6",children:e.jsx(Jl,{})}),e.jsx(en,{children:"Provident Fund"})]}),e.jsxs(Ba,{children:[e.jsx(tn,{$active:d==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(tn,{$active:d==="flat",onClick:()=>u("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(Xt,{children:[e.jsxs(Jt,{children:[e.jsx(Zt,{$color:"#f59e0b",children:e.jsx(Zl,{})}),e.jsx(en,{children:"Bonus (Optional)"})]}),e.jsxs(Ba,{children:[e.jsx(tn,{$active:c==="none",onClick:()=>p("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(tn,{$active:c==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(tn,{$active:c==="amount",onClick:()=>p("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(K,{initial:!1,children:c!=="none"&&e.jsx(b.div,{initial:"hidden",animate:"visible",exit:"exit",variants:ac,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(dr,{children:[e.jsx(wt,{style:{flex:1},children:c==="percentage"?e.jsx(cr,{children:e.jsx(ot,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:C=>f(C.target.value)})}):e.jsx(lr,{children:e.jsx(ot,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:C=>A(C.target.value)})})}),e.jsx(K,{children:g&&e.jsx(pr,{onClick:()=>f(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(xr,{})})})]})},"bonus-input")})]}),e.jsxs(Xt,{children:[e.jsxs(Jt,{children:[e.jsx(Zt,{$color:"#ec4899",children:e.jsx(ec,{})}),e.jsx(en,{children:"Monthly Deductions"})]}),e.jsxs(Vl,{children:[e.jsx(K,{mode:"popLayout",children:m.map((C,F)=>e.jsxs(dr,{variants:ic,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(wt,{style:{flex:1},children:e.jsx(ot,{type:"text",placeholder:"Name (e.g., Cab)",value:C.name,onChange:Q=>I(F,Q.target.value)})}),e.jsx(wt,{style:{flex:1},children:e.jsx(lr,{children:e.jsx(ot,{type:"text",inputMode:"numeric",placeholder:"Amount",value:C.amount,onChange:Q=>T(F,Q.target.value)})})}),e.jsx(pr,{onClick:()=>L(F),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(xr,{})})]},F))}),e.jsxs(Ql,{onClick:k,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(nc,{}),"Add Deduction"]})]})]}),e.jsxs(Xt,{children:[e.jsxs(Jt,{children:[e.jsx(Zt,{$color:"#8b5cf6",children:e.jsx(tc,{})}),e.jsx(en,{children:"Hike / Appraisal"})]}),e.jsxs(dr,{children:[e.jsx(wt,{style:{flex:1},children:e.jsx(cr,{children:e.jsx(ot,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:j,onChange:C=>y(C.target.value),min:"0",max:"200"})})}),e.jsx(K,{children:j&&e.jsx(pr,{onClick:()=>y(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(xr,{})})})]})]}),e.jsxs(Ul,{children:[e.jsx(ql,{onClick:$,disabled:!J,whileHover:J?{scale:1.02}:{},whileTap:J?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(K,{children:V&&e.jsx(Kl,{onClick:P,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},sc=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,st=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,lt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,ct=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,dt=o.div`
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
`,pt=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,xt=o.div`
  padding: 16px;
`,nn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Le=o.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,hr=o(b.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,fr=o.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,gr=o.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,kt=o.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,lc=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,St=o.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,$t=o.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Ct=o.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Tt=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Re=o.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,le=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,ce=o.span`
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
`,ve=o.div`
  text-align: right;
  flex-shrink: 0;
`,be=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,cc=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Wa=o(b.div)`
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
`,Ue=o.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dc=o(b.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,pc=o.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,xc=o(b.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,uc=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,hc=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,fc=o.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,gc=o.span`
  font-size: 12px;
  color: var(--text-secondary);
`,mc=o.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,rn=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Pe=o.div`
  padding: 14px;
  background: ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Oe=o.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Ee=o.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,an=o.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,Ha=o(b.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,Ya=o.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,yc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),vc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),bc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),jc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ga=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),wc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),kc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ut={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},Sc=({breakdown:t})=>{const[n,a]=x.useState("monthly"),r=n==="monthly"?1/12:1,i=f=>f===0?"#10b981":f<=10?"#3BB4B1":f<=20?"#4361A5":f<=25?"#6B8DD6":"#7BA7D9",s=Math.max(...t.slabs.map(f=>f.taxInSlab),1),d=(()=>{const f=n==="monthly"?.08333333333333333:1,m=[{label:"In-Hand",value:t.netSalaryYearly*f,color:"#10b981"},{label:"Tax",value:t.totalTax*f,color:"#4361A5"},{label:"PF",value:t.employeePF*f,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&m.push({label:"Other",value:t.totalAdditionalDeductions*f,color:"#7BA7D9"}),m})(),u=d.reduce((f,m)=>f+m.value,0),c=[];t.surchargeApplicable&&c.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&c.push(`<strong>Section 87A rebate</strong> of ${_(t.rebate87A)} applied`),t.effectiveTaxRate>0&&c.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const p=!!t.postHike,g=t.bonus>0;return e.jsxs(sc,{variants:kc,initial:"hidden",animate:"visible",children:[p&&e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#3b82f6",children:e.jsx(Ga,{})}),e.jsx(pt,{children:"Base Salary (CTC)"})]}),e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(xt,{children:e.jsxs(rn,{children:[e.jsxs(Pe,{children:[e.jsx(Oe,{children:"Current"}),e.jsx(Ee,{children:_(t.baseSalary)})]}),e.jsxs(Pe,{$highlight:!0,children:[e.jsx(Oe,{children:"After Hike"}),e.jsx(Ee,{children:_(t.postHike.baseSalary)}),e.jsxs(an,{children:["+",_(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#10b981",children:e.jsx(yc,{})}),e.jsx(pt,{children:"In-Hand Salary"})]}),e.jsxs(nn,{children:[p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(gr,{children:[e.jsx(kt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(kt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(xt,{children:p?e.jsxs(rn,{children:[e.jsxs(Pe,{children:[e.jsx(Oe,{children:"Current"}),e.jsx(Ee,{children:R(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(Pe,{$highlight:!0,children:[e.jsxs(Oe,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Ee,{children:R(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(an,{children:["+",_(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(hr,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:R(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(fr,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#f59e0b",children:e.jsx(jc,{})}),e.jsx(pt,{children:"Bonus"})]}),p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(xt,{children:[p?e.jsxs(e.Fragment,{children:[e.jsxs(rn,{children:[e.jsxs(Pe,{children:[e.jsx(Oe,{children:"Current Gross"}),e.jsx(Ee,{children:_(t.bonus)})]}),e.jsxs(Pe,{$highlight:!0,children:[e.jsx(Oe,{children:"After Hike Gross"}),e.jsx(Ee,{children:_(t.postHike.bonus)}),e.jsxs(an,{children:["+",_(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Re,{}),e.jsxs(rn,{children:[e.jsxs(Pe,{children:[e.jsx(Oe,{children:"Current In-Hand"}),e.jsx(Ee,{children:R(t.bonusAfterTax)})]}),e.jsxs(Pe,{$highlight:!0,children:[e.jsx(Oe,{children:"After Hike In-Hand"}),e.jsx(Ee,{children:R(t.postHike.bonusAfterTax)}),e.jsxs(an,{children:["+",_(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(hr,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:_(t.bonus)}),e.jsx(fr,{children:"Gross Bonus (before tax)"}),e.jsx(Re,{}),e.jsxs(le,{children:[e.jsxs(ce,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(W,{$negative:!0,children:["-",R(t.bonusTaxAmount)]})]}),e.jsxs(le,{children:[e.jsx(ce,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(W,{$highlight:!0,children:R(t.bonusAfterTax)})]})]}),e.jsx(Re,{}),e.jsx(Ha,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(Ya,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#8b5cf6",children:e.jsx(Ga,{})}),e.jsx(pt,{children:"Total Combined Income"})]}),e.jsxs(nn,{children:[p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx(Le,{children:"Yearly"})]})]}),e.jsxs(xt,{children:[p?e.jsxs(rn,{children:[e.jsxs(Pe,{children:[e.jsx(Oe,{children:"Current Total"}),e.jsx(Ee,{children:R(t.totalIncomeYearly)})]}),e.jsxs(Pe,{$highlight:!0,children:[e.jsx(Oe,{children:"After Hike Total"}),e.jsx(Ee,{children:R(t.postHike.totalIncomeYearly)}),e.jsxs(an,{children:["+",_(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(hr,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:R(t.totalIncomeYearly)}),e.jsx(fr,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Re,{}),e.jsxs(le,{children:[e.jsx(ce,{children:"Base In-Hand (Yearly)"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:R(t.netSalaryYearly)}),e.jsxs(be,{$positive:!0,children:["→ ",R(t.postHike.netSalaryYearly)]})]}):e.jsx(W,{children:R(t.netSalaryYearly)})]}),e.jsxs(le,{children:[e.jsx(ce,{children:"Bonus In-Hand"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:R(t.bonusAfterTax)}),e.jsxs(be,{$positive:!0,children:["→ ",R(t.postHike.bonusAfterTax)]})]}):e.jsx(W,{children:R(t.bonusAfterTax)})]}),e.jsxs(le,{children:[e.jsx(ce,{$bold:!0,children:"Total Combined"}),p?e.jsxs(ve,{children:[e.jsx(W,{$highlight:!0,children:R(t.totalIncomeYearly)}),e.jsxs(be,{$positive:!0,children:["→ ",R(t.postHike.totalIncomeYearly)]})]}):e.jsx(W,{$highlight:!0,children:R(t.totalIncomeYearly)})]})]})]}),e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#ec4899",children:e.jsx(bc,{})}),e.jsx(pt,{children:"Summary"})]}),e.jsxs(nn,{children:[p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(gr,{children:[e.jsx(kt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(kt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(xt,{children:[e.jsxs(lc,{children:[e.jsxs(St,{children:[e.jsx($t,{children:"Gross Salary"}),e.jsx(Ct,{children:_(t.grossSalary*r)}),p&&e.jsxs(Tt,{$positive:!0,children:["→ ",_(t.postHike.grossSalary*r)]})]}),e.jsxs(St,{children:[e.jsx($t,{children:"Total Tax"}),e.jsx(Ct,{children:R(t.totalTax*r)}),p&&e.jsxs(Tt,{children:["→ ",R(t.postHike.totalTax*r)]})]}),e.jsxs(St,{children:[e.jsx($t,{children:"Employee PF"}),e.jsx(Ct,{children:_(t.employeePF*r)}),p&&e.jsxs(Tt,{$positive:!0,children:["→ ",_(t.postHike.employeePF*r)]})]}),e.jsxs(St,{children:[e.jsx($t,{children:"Employer PF"}),e.jsx(Ct,{children:_(t.employerPF*r)}),p&&e.jsxs(Tt,{$positive:!0,children:["→ ",_(t.postHike.employerPF*r)]})]}),e.jsxs(St,{children:[e.jsx($t,{children:"Total PF"}),e.jsx(Ct,{children:_((t.employeePF+t.employerPF)*r)}),p&&e.jsxs(Tt,{$positive:!0,children:["→ ",_((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(St,{children:[e.jsx($t,{children:"Eff. Tax Rate"}),e.jsxs(Ct,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),p&&e.jsxs(Tt,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Re,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(pc,{children:d.map((f,m)=>e.jsx(xc,{$color:f.color,initial:{width:0},animate:{width:`${f.value/u*100}%`},transition:{delay:.3+m*.1,duration:.5}},m))}),e.jsx(uc,{children:d.map((f,m)=>e.jsxs(hc,{children:[e.jsx(fc,{$color:f.color}),e.jsx(gc,{children:f.label}),e.jsx(mc,{children:_(f.value)})]},m))}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Re,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:c.map((f,m)=>e.jsx(Ha,{children:e.jsx(Ya,{dangerouslySetInnerHTML:{__html:f}})},m))})]})]})]}),e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#10b981",children:e.jsx(wc,{})}),e.jsx(pt,{children:"Breakdown"})]}),e.jsxs(nn,{children:[p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(gr,{children:[e.jsx(kt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(kt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(xt,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"Base Salary (CTC)"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:_(t.baseSalary*r)}),e.jsxs(be,{$positive:!0,children:["→ ",_(t.postHike.baseSalary*r)]})]}):e.jsx(W,{children:_(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(le,{children:[e.jsx(ce,{children:"Less: Employer PF"}),p?e.jsxs(ve,{children:[e.jsxs(W,{$negative:!0,children:["-",_(t.employerPF*r)]}),e.jsxs(be,{children:["→ -",_(t.postHike.employerPF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",_(t.employerPF*r)]})]}),e.jsxs(le,{children:[e.jsx(ce,{$bold:!0,children:"Gross Salary"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:_(t.grossSalary*r)}),e.jsxs(be,{$positive:!0,children:["→ ",_(t.postHike.grossSalary*r)]})]}):e.jsx(W,{children:_(t.grossSalary*r)})]}),e.jsxs(le,{children:[e.jsx(ce,{children:"Less: Standard Deduction"}),e.jsxs(W,{$negative:!0,children:["-",_(t.standardDeduction*r)]})]}),e.jsxs(le,{children:[e.jsx(ce,{$bold:!0,children:"Taxable Income"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:_(t.taxableIncome*r)}),e.jsxs(be,{$positive:!0,children:["→ ",_(t.postHike.taxableIncome*r)]})]}):e.jsx(W,{children:_(t.taxableIncome*r)})]}),e.jsx(Re,{}),e.jsxs(le,{children:[e.jsx(ce,{children:"Less: Income Tax"}),p?e.jsxs(ve,{children:[e.jsxs(W,{$negative:!0,children:["-",R(t.totalTax*r)]}),e.jsxs(be,{children:["→ -",R(t.postHike.totalTax*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",R(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(le,{children:[e.jsx(ce,{children:"Less: Employee PF"}),p?e.jsxs(ve,{children:[e.jsxs(W,{$negative:!0,children:["-",_(t.employeePF*r)]}),e.jsxs(be,{children:["→ -",_(t.postHike.employeePF*r)]})]}):e.jsxs(W,{$negative:!0,children:["-",_(t.employeePF*r)]})]}),t.additionalDeductions.map((f,m)=>e.jsxs(le,{children:[e.jsxs(ce,{children:["Less: ",f.name]}),e.jsxs(W,{$negative:!0,children:["-",_(f.amount*r)]})]},m)),e.jsx(Re,{}),e.jsxs(le,{children:[e.jsxs(ce,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),p?e.jsxs(ve,{children:[e.jsx(W,{$highlight:!0,children:R(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(be,{$positive:!0,children:["→ ",R(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(W,{$highlight:!0,children:R(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(st,{variants:ut,children:[e.jsxs(lt,{children:[e.jsxs(ct,{children:[e.jsx(dt,{$color:"#3b82f6",children:e.jsx(vc,{})}),e.jsx(pt,{children:"Tax Slabs"})]}),e.jsxs(nn,{children:[e.jsx(Le,{children:Hl.financialYear}),p&&e.jsxs(Le,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(xt,{children:[e.jsxs(cc,{children:[e.jsxs(Wa,{$header:!0,children:[e.jsx(Ue,{children:"Slab"}),e.jsx(Ue,{$align:"center",children:"Rate"}),e.jsx(Ue,{$align:"right",children:"Amount"}),e.jsx(Ue,{$align:"right",children:"Tax"})]}),e.jsx(K,{children:t.slabs.map((f,m)=>e.jsxs(Wa,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:m*.03},children:[e.jsxs(Ue,{children:[Na(f.from)," - ",Na(f.to),f.taxableInSlab>0&&e.jsx(dc,{$color:i(f.rate),initial:{width:0},animate:{width:`${Math.max(f.taxInSlab/s*100,8)}%`},transition:{delay:.2+m*.03,duration:.4}})]}),e.jsxs(Ue,{$align:"center",$highlight:f.rate===0,children:[f.rate,"%"]}),e.jsx(Ue,{$align:"right",$muted:f.taxableInSlab===0,children:f.taxableInSlab>0?_(f.taxableInSlab):"-"}),e.jsx(Ue,{$align:"right",$muted:f.taxInSlab===0,children:f.taxInSlab>0?_(f.taxInSlab):"-"})]},m))})]}),e.jsx(Re,{}),e.jsxs(le,{children:[e.jsx(ce,{children:"Tax Before Surcharge"}),p?e.jsxs(ve,{children:[e.jsx(W,{children:R(t.taxBeforeSurcharge)}),e.jsxs(be,{children:["→ ",R(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(W,{children:R(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(le,{children:[e.jsx(ce,{children:"Section 87A Rebate"}),e.jsxs(W,{$negative:!0,children:["-",_(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(le,{children:[e.jsxs(ce,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx(Le,{$color:"#f59e0b",children:"Marginal Relief"})]}),p&&t.postHike.surchargeApplicable?e.jsxs(ve,{children:[e.jsx(W,{children:R(t.surchargeAmount)}),e.jsxs(be,{children:["→ ",R(t.postHike.surchargeAmount)]})]}):e.jsx(W,{children:R(t.surchargeAmount)})]}),e.jsxs(le,{children:[e.jsxs(ce,{children:["Cess (",t.cessRate,"%)"]}),p?e.jsxs(ve,{children:[e.jsx(W,{children:R(t.cess)}),e.jsxs(be,{children:["→ ",R(t.postHike.cess)]})]}):e.jsx(W,{children:R(t.cess)})]}),e.jsxs(le,{children:[e.jsx(ce,{$bold:!0,children:"Total Tax"}),p?e.jsxs(ve,{children:[e.jsx(W,{$highlight:!0,children:R(t.totalTax)}),e.jsxs(be,{children:["→ ",R(t.postHike.totalTax)]})]}):e.jsx(W,{$highlight:!0,children:R(t.totalTax)})]})]})]})]})},$c=o(b.div)`
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
`,Cc=o.div`
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
`,Tc=o(b.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,Dc=o(b.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,Mc={type:"spring",stiffness:300,damping:30,mass:.8},Ic={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Va={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Mc}},Ac=()=>{const[t,n]=x.useState(null),[a,r]=x.useState(!1);x.useEffect(()=>{const l=Lo();l&&l.baseSalary>0&&r(!0)},[]);const i=x.useCallback(l=>{const d=zl(l);n(d),window.innerWidth<1024&&setTimeout(()=>{var u;(u=document.getElementById("results"))==null||u.scrollIntoView({behavior:"smooth"})},100)},[]),s=x.useCallback(()=>{n(null)},[]);return e.jsx($c,{variants:Ic,initial:"hidden",animate:"visible",children:e.jsx(Ao,{$maxWidth:"wide",children:e.jsxs(Cc,{children:[e.jsx(Tc,{variants:Va,children:e.jsx(oc,{onCalculate:i,onReset:s,autoCalculate:a})}),e.jsx(Dc,{id:"results",variants:Va,children:t&&e.jsx(Sc,{breakdown:t},"results")})]})})})},Ze=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",color:"#2B6CB0"},{id:"icici-bank",name:"ICICI Bank",type:"bank",color:"#F58220"},{id:"mutual-funds",name:"Mutual Funds",type:"investment",color:"#8b5cf6"},{id:"ppf",name:"Public Provident Fund",type:"investment",color:"#10b981"},{id:"pf",name:"Provident Fund",type:"investment",color:"#3b82f6"}],Po="netfolio-transactions",Oo="netfolio-initial-balances";function kn(t){localStorage.setItem(Po,JSON.stringify(t))}function Lc(){const t=localStorage.getItem(Po);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Qa(t){localStorage.setItem(Oo,JSON.stringify(t))}function Pc(){const t=localStorage.getItem(Oo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function Me(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function Oc(t){return t===Me(new Date)}function Ec(t,n,a,r){const i=n.filter(l=>l.date<=a&&(l.accountId===t.id||l.linkedAccountId===t.id));let s=r[t.id]||0;if(t.type==="bank")for(const l of i)l.accountId===t.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===t.id&&(l.type==="investment_credit"?s-=l.amount:l.type==="investment_debit"&&(s+=l.amount));else for(const l of i)l.accountId===t.id&&(l.type==="investment_credit"?s+=l.amount:l.type==="investment_debit"&&(s-=l.amount));return{account:t,balance:s}}function Fc(t,n,a){return Ze.map(r=>Ec(r,t,n,a))}function Bn(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function _c(t,n,a,r,i,s){return{id:Bn(),date:i,type:t,accountId:n,amount:a,description:r,linkedAccountId:s,createdAt:new Date().toISOString()}}function q(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Nc(t){switch(t){case"bank_debit":return"Bank Debit";case"bank_credit":return"Bank Credit";case"investment_credit":return"Investment Deposit";case"investment_debit":return"Investment Withdrawal"}}function Rc(t){return Ze.find(n=>n.id===t)}function Ke(){return Ze.filter(t=>t.type==="bank")}function Fr(){return Ze.filter(t=>t.type==="investment")}function zc(t,n){const a={version:"2.0",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n};return JSON.stringify(a,null,2)}function Bc(t,n){const a=zc(t,n),r=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(r),s=document.createElement("a"),l=new Date().toISOString().split("T")[0];s.href=i,s.download=`netfolio-backup-${l}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)}function Wc(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null)return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Hc(t){try{const n=JSON.parse(t);return Wc(n)?n:null}catch{return null}}function Eo(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(a=Eo(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function Wn(){for(var t,n,a=0,r="",i=arguments.length;a<i;a++)(t=arguments[a])&&(n=Eo(t))&&(r&&(r+=" "),r+=n);return r}const Yc=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const i=Object.getOwnPropertyDescriptor(t,a),s=Object.getOwnPropertyDescriptor(n,a);!Gc(i,s)&&r||Object.defineProperty(t,a,s)},Gc=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},Vc=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},Qc=(t,n)=>`/* Wrapped ${t}*/
${n}`,Uc=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),qc=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Kc=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,i=Qc.bind(null,r,n.toString());Object.defineProperty(i,"name",qc);const{writable:s,enumerable:l,configurable:d}=Uc;Object.defineProperty(t,"toString",{value:i,writable:s,enumerable:l,configurable:d})};function Xc(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const i of Reflect.ownKeys(n))Yc(t,n,i,a);return Vc(t,n),Kc(t,n,r),t}const Sn=2147483647,Jc=new WeakMap,mr=new WeakMap,Zc=new WeakMap;function ed(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function Fo(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>Sn)throw new TypeError(`The \`maxAge\` option cannot exceed ${Sn}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...s){var p;const l=n?n(s):s[0],d=ed(a,l);if(d)return d.data;const u=t.apply(this,s),c=typeof r=="function"?r(...s):r;if(c!==void 0&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return u;if(c>Sn)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Sn}.`)}if(a.set(l,{data:u,maxAge:c===void 0||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),c!==void 0&&c!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var m;a.delete(l),(m=mr.get(i))==null||m.delete(g)},c);(p=g.unref)==null||p.call(g);const f=mr.get(i)??new Set;f.add(g),mr.set(i,f)}return u};return Xc(i,t,{ignoreNonConfigurable:!0}),Jc.set(i,a),Zc.set(i,n??(s=>s[0])),i}function td(t){return typeof t=="string"}function nd(t,n,a){return a.indexOf(t)===n}function rd(t){return t.toLowerCase()===t}function Ua(t){return t.indexOf(",")===-1?t:t.split(",")}function _r(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return _r(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return _r(a)}if(t.indexOf("-")===-1||!rd(t))return t;var i=t.split("-"),s=i[0],l=i[1],d=l===void 0?"":l;return"".concat(s,"-").concat(d.toUpperCase())}function ad(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,i=n.fallbackLocale,s=i===void 0?"en-US":i,l=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],u=[],c=0,p=d;c<p.length;c++){var g=p[c];u=u.concat(Ua(g))}var f=navigator.language,m=f&&Ua(f);l=l.concat(u,m)}return r&&l.push(s),l.filter(td).map(_r).filter(nd)}var id=Fo(ad,{cacheKey:JSON.stringify});function od(t){return id(t)[0]||null}var _o=Fo(od,{cacheKey:JSON.stringify});function Ve(t,n,a){return function(i,s=a){const l=t(i)+s;return n(l)}}function hn(t){return function(a){return new Date(t(a).getTime()-1)}}function fn(t,n){return function(r){return[t(r),n(r)]}}function X(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function nt(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function Hn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function Ft(t){const n=X(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const sd=Ve(X,Ft,-100),No=Ve(X,Ft,100),ra=hn(No),ld=Ve(X,ra,-100),Ro=fn(Ft,ra);function rt(t){const n=X(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const zo=Ve(X,rt,-10),aa=Ve(X,rt,10),Yn=hn(aa),Bo=Ve(X,Yn,-10),Wo=fn(rt,Yn);function _t(t){const n=X(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Ho=Ve(X,_t,-1),ia=Ve(X,_t,1),Gn=hn(ia),Yo=Ve(X,Gn,-1),cd=fn(_t,Gn);function oa(t,n){return function(r,i=n){const s=X(r),l=nt(r)+i,d=new Date;return d.setFullYear(s,l,1),d.setHours(0,0,0,0),t(d)}}function yt(t){const n=X(t),a=nt(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Go=oa(yt,-1),sa=oa(yt,1),gn=hn(sa),Vo=oa(gn,-1),dd=fn(yt,gn);function pd(t,n){return function(r,i=n){const s=X(r),l=nt(r),d=Hn(r)+i,u=new Date;return u.setFullYear(s,l,d),u.setHours(0,0,0,0),t(u)}}function mn(t){const n=X(t),a=nt(t),r=Hn(t),i=new Date;return i.setFullYear(n,a,r),i.setHours(0,0,0,0),i}const xd=pd(mn,1),la=hn(xd),ud=fn(mn,la);function Qo(t){return Hn(gn(t))}var he={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},hd={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ca=[0,1,2,3,4,5,6],yr=new Map;function fd(t){return function(a,r){var i=a||_o();yr.has(i)||yr.set(i,new Map);var s=yr.get(i);return s.has(t)||s.set(t,new Intl.DateTimeFormat(i||void 0,t).format),s.get(t)(r)}}function gd(t){var n=new Date(t);return new Date(n.setHours(12))}function vt(t){return function(n,a){return fd(t)(n,gd(a))}}var md={day:"numeric"},yd={day:"numeric",month:"long",year:"numeric"},vd={month:"long"},bd={month:"long",year:"numeric"},jd={weekday:"short"},wd={weekday:"long"},kd={year:"numeric"},Sd=vt(md),$d=vt(yd),Cd=vt(vd),Uo=vt(bd),Td=vt(jd),Dd=vt(wd),Vn=vt(kd),Md=ca[0],Id=ca[5],qa=ca[6];function dn(t,n){n===void 0&&(n=he.ISO_8601);var a=t.getDay();switch(n){case he.ISO_8601:return(a+6)%7;case he.ISLAMIC:return(a+1)%7;case he.HEBREW:case he.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function Ad(t){var n=Ft(t);return X(n)}function Ld(t){var n=rt(t);return X(n)}function Nr(t,n){n===void 0&&(n=he.ISO_8601);var a=X(t),r=nt(t),i=t.getDate()-dn(t,n);return new Date(a,r,i)}function Pd(t,n){n===void 0&&(n=he.ISO_8601);var a=n===he.GREGORY?he.GREGORY:he.ISO_8601,r=Nr(t,n),i=X(t)+1,s,l;do s=new Date(i,0,a===he.ISO_8601?4:1),l=Nr(s,n),i-=1;while(t<l);return Math.round((r.getTime()-l.getTime())/(864e5*7))+1}function ft(t,n){switch(t){case"century":return Ft(n);case"decade":return rt(n);case"year":return _t(n);case"month":return yt(n);case"day":return mn(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Od(t,n){switch(t){case"century":return sd(n);case"decade":return zo(n);case"year":return Ho(n);case"month":return Go(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function qo(t,n){switch(t){case"century":return No(n);case"decade":return aa(n);case"year":return ia(n);case"month":return sa(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ed(t,n){switch(t){case"decade":return zo(n,-100);case"year":return Ho(n,-10);case"month":return Go(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Fd(t,n){switch(t){case"decade":return aa(n,100);case"year":return ia(n,10);case"month":return sa(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ko(t,n){switch(t){case"century":return ra(n);case"decade":return Yn(n);case"year":return Gn(n);case"month":return gn(n);case"day":return la(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function _d(t,n){switch(t){case"century":return ld(n);case"decade":return Bo(n);case"year":return Yo(n);case"month":return Vo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Nd(t,n){switch(t){case"decade":return Bo(n,-100);case"year":return Yo(n,-10);case"month":return Vo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ka(t,n){switch(t){case"century":return Ro(n);case"decade":return Wo(n);case"year":return cd(n);case"month":return dd(n);case"day":return ud(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Rd(t,n,a){var r=[n,a].sort(function(i,s){return i.getTime()-s.getTime()});return[ft(t,r[0]),Ko(t,r[1])]}function Xo(t,n,a){return a.map(function(r){return(n||Vn)(t,r)}).join(" – ")}function zd(t,n,a){return Xo(t,n,Ro(a))}function Jo(t,n,a){return Xo(t,n,Wo(a))}function Bd(t){return t.getDay()===new Date().getDay()}function Zo(t,n){n===void 0&&(n=he.ISO_8601);var a=t.getDay();switch(n){case he.ISLAMIC:case he.HEBREW:return a===Id||a===qa;case he.ISO_8601:case he.GREGORY:return a===qa||a===Md;default:throw new Error("Unsupported calendar type.")}}var Fe="react-calendar__navigation";function Wd(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,i=r===void 0?Uo:r,s=t.formatYear,l=s===void 0?Vn:s,d=t.locale,u=t.maxDate,c=t.minDate,p=t.navigationAriaLabel,g=p===void 0?"":p,f=t.navigationAriaLive,m=t.navigationLabel,w=t.next2AriaLabel,j=w===void 0?"":w,y=t.next2Label,v=y===void 0?"»":y,S=t.nextAriaLabel,M=S===void 0?"":S,D=t.nextLabel,A=D===void 0?"›":D,T=t.prev2AriaLabel,k=T===void 0?"":T,L=t.prev2Label,I=L===void 0?"«":L,$=t.prevAriaLabel,P=$===void 0?"":$,H=t.prevLabel,J=H===void 0?"‹":H,V=t.setActiveStartDate,C=t.showDoubleView,F=t.view,Q=t.views,O=Q.indexOf(F)>0,ie=F!=="century",Z=Od(F,n),U=ie?Ed(F,n):void 0,je=qo(F,n),ee=ie?Fd(F,n):void 0,Se=function(){if(Z.getFullYear()<0)return!0;var se=_d(F,n);return c&&c>=se}(),Y=ie&&function(){if(U.getFullYear()<0)return!0;var se=Nd(F,n);return c&&c>=se}(),Ie=u&&u<je,at=ie&&u&&u<ee;function Ne(){V(Z,"prev")}function Ce(){V(U,"prev2")}function bt(){V(je,"next")}function it(){V(ee,"next2")}function Qe(se){var Kt=function(){switch(F){case"century":return zd(d,l,se);case"decade":return Jo(d,l,se);case"year":return l(d,se);case"month":return i(d,se);default:throw new Error("Invalid view: ".concat(F,"."))}}();return m?m({date:se,label:Kt,locale:d||_o()||void 0,view:F}):Kt}function qn(){var se="".concat(Fe,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":f,className:se,disabled:!O,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(se,"__labelText ").concat(se,"__labelText--from"),children:Qe(n)}),C?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(se,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(se,"__labelText ").concat(se,"__labelText--to"),children:Qe(je)})]}):null]})}return e.jsxs("div",{className:Fe,children:[I!==null&&ie?e.jsx("button",{"aria-label":k,className:"".concat(Fe,"__arrow ").concat(Fe,"__prev2-button"),disabled:Y,onClick:Ce,type:"button",children:I}):null,J!==null&&e.jsx("button",{"aria-label":P,className:"".concat(Fe,"__arrow ").concat(Fe,"__prev-button"),disabled:Se,onClick:Ne,type:"button",children:J}),qn(),A!==null&&e.jsx("button",{"aria-label":M,className:"".concat(Fe,"__arrow ").concat(Fe,"__next-button"),disabled:Ie,onClick:bt,type:"button",children:A}),v!==null&&ie?e.jsx("button",{"aria-label":j,className:"".concat(Fe,"__arrow ").concat(Fe,"__next2-button"),disabled:at,onClick:it,type:"button",children:v}):null]})}var Ot=function(){return Ot=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ot.apply(this,arguments)},Hd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Xa(t){return"".concat(t,"%")}function da(t){var n=t.children,a=t.className,r=t.count,i=t.direction,s=t.offset,l=t.style,d=t.wrap,u=Hd(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",Ot({className:a,style:Ot({display:"flex",flexDirection:i,flexWrap:d?"wrap":"nowrap"},l)},u,{children:x.Children.map(n,function(c,p){var g=s&&p===0?Xa(100*s/r):null;return x.cloneElement(c,Ot(Ot({},c.props),{style:{flexBasis:Xa(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function Yd(t,n,a){return n&&n>t?n:a&&a<t?a:t}function pn(t,n){return n[0]<=t&&n[1]>=t}function Gd(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function es(t,n){return pn(t[0],n)||pn(t[1],n)}function Ja(t,n,a){var r=es(n,t),i=[];if(r){i.push(a);var s=pn(t[0],n),l=pn(t[1],n);s&&i.push("".concat(a,"Start")),l&&i.push("".concat(a,"End")),s&&l&&i.push("".concat(a,"BothEnds"))}return i}function Vd(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function Qd(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,i="react-calendar__tile",s=[i];if(!a)return s;var l=new Date,d=function(){if(Array.isArray(a))return a;var m=t.dateType;if(!m)throw new Error("dateType is required when date is not an array of two dates");return Ka(m,a)}();if(pn(l,d)&&s.push("".concat(i,"--now")),!n||!Vd(n))return s;var u=function(){if(Array.isArray(n))return n;var m=t.valueType;if(!m)throw new Error("valueType is required when value is not an array of two dates");return Ka(m,n)}();Gd(u,d)?s.push("".concat(i,"--active")):es(u,d)&&s.push("".concat(i,"--hasActive"));var c=Ja(u,d,"".concat(i,"--range"));s.push.apply(s,c);var p=Array.isArray(n)?n:[n];if(r&&p.length===1){var g=r>u[0]?[u[0],r]:[r,u[0]],f=Ja(g,d,"".concat(i,"--hover"));s.push.apply(s,f)}return s}function Qn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,i=t.dateTransform,s=t.dateType,l=t.end,d=t.hover,u=t.offset,c=t.renderTile,p=t.start,g=t.step,f=g===void 0?1:g,m=t.value,w=t.valueType,j=[],y=p;y<=l;y+=f){var v=i(y);j.push(c({classes:Qd({date:v,dateType:s,hover:d,value:m,valueType:w}),date:v}))}return e.jsx(da,{className:n,count:r,offset:u,wrap:!0,children:j})}function Un(t){var n=t.activeStartDate,a=t.children,r=t.classes,i=t.date,s=t.formatAbbr,l=t.locale,d=t.maxDate,u=t.maxDateTransform,c=t.minDate,p=t.minDateTransform,g=t.onClick,f=t.onMouseOver,m=t.style,w=t.tileClassName,j=t.tileContent,y=t.tileDisabled,v=t.view,S=x.useMemo(function(){var D={activeStartDate:n,date:i,view:v};return typeof w=="function"?w(D):w},[n,i,w,v]),M=x.useMemo(function(){var D={activeStartDate:n,date:i,view:v};return typeof j=="function"?j(D):j},[n,i,j,v]);return e.jsxs("button",{className:Wn(r,S),disabled:c&&p(c)>i||d&&u(d)<i||(y==null?void 0:y({activeStartDate:n,date:i,view:v})),onClick:g?function(D){return g(i,D)}:void 0,onFocus:f?function(){return f(i)}:void 0,onMouseOver:f?function(){return f(i)}:void 0,style:m,type:"button",children:[s?e.jsx("abbr",{"aria-label":s(l,i),children:a}):a,M]})}var Rr=function(){return Rr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Rr.apply(this,arguments)},Ud=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},Za="react-calendar__century-view__decades__decade";function qd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,i=t.formatYear,s=i===void 0?Vn:i,l=Ud(t,["classes","currentCentury","formatYear"]),d=l.date,u=l.locale,c=[];return a&&c.push.apply(c,a),c.push(Za),Ft(d).getFullYear()!==r&&c.push("".concat(Za,"--neighboringCentury")),e.jsx(Un,Rr({},l,{classes:c,maxDateTransform:Yn,minDateTransform:rt,view:"century",children:Jo(u,s,d)}))}var zr=function(){return zr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zr.apply(this,arguments)},ei=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function Kd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,i=t.value,s=t.valueType,l=ei(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=Ad(n),u=d+(r?119:99);return e.jsx(Qn,{className:"react-calendar__century-view__decades",dateTransform:rt,dateType:"decade",end:u,hover:a,renderTile:function(c){var p=c.date,g=ei(c,["date"]);return e.jsx(qd,zr({},l,g,{activeStartDate:n,currentCentury:d,date:p}),p.getTime())},start:d,step:10,value:i,valueType:s})}var Br=function(){return Br=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Br.apply(this,arguments)};function Xd(t){function n(){return e.jsx(Kd,Br({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var Wr=function(){return Wr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wr.apply(this,arguments)},Jd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},ti="react-calendar__decade-view__years__year";function Zd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,i=t.formatYear,s=i===void 0?Vn:i,l=Jd(t,["classes","currentDecade","formatYear"]),d=l.date,u=l.locale,c=[];return a&&c.push.apply(c,a),c.push(ti),rt(d).getFullYear()!==r&&c.push("".concat(ti,"--neighboringDecade")),e.jsx(Un,Wr({},l,{classes:c,maxDateTransform:Gn,minDateTransform:_t,view:"decade",children:s(u,d)}))}var Hr=function(){return Hr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Hr.apply(this,arguments)},ni=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function e0(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,i=t.value,s=t.valueType,l=ni(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=Ld(n),u=d+(r?11:9);return e.jsx(Qn,{className:"react-calendar__decade-view__years",dateTransform:_t,dateType:"year",end:u,hover:a,renderTile:function(c){var p=c.date,g=ni(c,["date"]);return e.jsx(Zd,Hr({},l,g,{activeStartDate:n,currentDecade:d,date:p}),p.getTime())},start:d,value:i,valueType:s})}var Yr=function(){return Yr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Yr.apply(this,arguments)};function t0(t){function n(){return e.jsx(e0,Yr({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var Gr=function(){return Gr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gr.apply(this,arguments)},n0=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},ri=function(t,n,a){if(a||arguments.length===2)for(var r=0,i=n.length,s;r<i;r++)(s||!(r in n))&&(s||(s=Array.prototype.slice.call(n,0,r)),s[r]=n[r]);return t.concat(s||Array.prototype.slice.call(n))},r0="react-calendar__year-view__months__month";function a0(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,i=r===void 0?Cd:r,s=t.formatMonthYear,l=s===void 0?Uo:s,d=n0(t,["classes","formatMonth","formatMonthYear"]),u=d.date,c=d.locale;return e.jsx(Un,Gr({},d,{classes:ri(ri([],a,!0),[r0],!1),formatAbbr:l,maxDateTransform:gn,minDateTransform:yt,view:"year",children:i(c,u)}))}var Vr=function(){return Vr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vr.apply(this,arguments)},ai=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function i0(t){var n=t.activeStartDate,a=t.hover,r=t.value,i=t.valueType,s=ai(t,["activeStartDate","hover","value","valueType"]),l=0,d=11,u=X(n);return e.jsx(Qn,{className:"react-calendar__year-view__months",dateTransform:function(c){var p=new Date;return p.setFullYear(u,c,1),yt(p)},dateType:"month",end:d,hover:a,renderTile:function(c){var p=c.date,g=ai(c,["date"]);return e.jsx(a0,Vr({},s,g,{activeStartDate:n,date:p}),p.getTime())},start:l,value:r,valueType:i})}var Qr=function(){return Qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qr.apply(this,arguments)};function o0(t){function n(){return e.jsx(i0,Qr({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var Ur=function(){return Ur=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ur.apply(this,arguments)},s0=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},vr="react-calendar__month-view__days__day";function l0(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,i=t.currentMonthIndex,s=t.formatDay,l=s===void 0?Sd:s,d=t.formatLongDate,u=d===void 0?$d:d,c=s0(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=c.date,g=c.locale,f=[];return r&&f.push.apply(f,r),f.push(vr),Zo(p,n)&&f.push("".concat(vr,"--weekend")),p.getMonth()!==i&&f.push("".concat(vr,"--neighboringMonth")),e.jsx(Un,Ur({},c,{classes:f,formatAbbr:u,maxDateTransform:la,minDateTransform:mn,view:"month",children:l(g,p)}))}var qr=function(){return qr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qr.apply(this,arguments)},ii=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function c0(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,i=t.showFixedNumberOfWeeks,s=t.showNeighboringMonth,l=t.value,d=t.valueType,u=ii(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=X(n),p=nt(n),g=i||s,f=dn(n,a),m=g?0:f,w=(g?-f:0)+1,j=function(){if(i)return w+6*7-1;var y=Qo(n);if(s){var v=new Date;v.setFullYear(c,p,y),v.setHours(0,0,0,0);var S=7-dn(v,a)-1;return y+S}return y}();return e.jsx(Qn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(y){var v=new Date;return v.setFullYear(c,p,y),mn(v)},dateType:"day",hover:r,end:j,renderTile:function(y){var v=y.date,S=ii(y,["date"]);return e.jsx(l0,qr({},u,S,{activeStartDate:n,calendarType:a,currentMonthIndex:p,date:v}),v.getTime())},offset:m,start:w,value:l,valueType:d})}var ts="react-calendar__month-view__weekdays",br="".concat(ts,"__weekday");function d0(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?Td:a,i=t.formatWeekday,s=i===void 0?Dd:i,l=t.locale,d=t.onMouseLeave,u=new Date,c=yt(u),p=X(c),g=nt(c),f=[],m=1;m<=7;m+=1){var w=new Date(p,g,m-dn(c,n)),j=s(l,w);f.push(e.jsx("div",{className:Wn(br,Bd(w)&&"".concat(br,"--current"),Zo(w,n)&&"".concat(br,"--weekend")),children:e.jsx("abbr",{"aria-label":j,title:j,children:r(l,w).replace(".","")})},m))}return e.jsx(da,{className:ts,count:7,onFocus:d,onMouseOver:d,children:f})}var Rn=function(){return Rn=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Rn.apply(this,arguments)},oi=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a},si="react-calendar__tile";function p0(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var i=t.date,s=t.onClickWeekNumber,l=t.weekNumber,d=oi(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",Rn({},d,{className:si,onClick:function(u){return s(l,i,u)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var d=oi(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",Rn({},d,{className:si,children:r}))}}function x0(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,i=t.onMouseLeave,s=t.showFixedNumberOfWeeks,l=function(){if(s)return 6;var c=Qo(n),p=dn(n,a),g=c-(7-p);return 1+Math.ceil(g/7)}(),d=function(){for(var c=X(n),p=nt(n),g=Hn(n),f=[],m=0;m<l;m+=1)f.push(Nr(new Date(c,p,g+m*7),a));return f}(),u=d.map(function(c){return Pd(c,a)});return e.jsx(da,{className:"react-calendar__month-view__weekNumbers",count:l,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:u.map(function(c,p){var g=d[p];if(!g)throw new Error("date is not defined");return e.jsx(p0,{date:g,onClickWeekNumber:r,weekNumber:c},c)})})}var Kr=function(){return Kr=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Kr.apply(this,arguments)},u0=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};function h0(t){if(t)for(var n=0,a=Object.entries(hd);n<a.length;n++){var r=a[n],i=r[0],s=r[1];if(s.includes(t))return i}return he.ISO_8601}function f0(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,i=t.showFixedNumberOfWeeks,s=t.calendarType,l=s===void 0?h0(a):s,d=t.formatShortWeekday,u=t.formatWeekday,c=t.onClickWeekNumber,p=t.showWeekNumbers,g=u0(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function f(){return e.jsx(d0,{calendarType:l,formatShortWeekday:d,formatWeekday:u,locale:a,onMouseLeave:r})}function m(){return p?e.jsx(x0,{activeStartDate:n,calendarType:l,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function w(){return e.jsx(c0,Kr({calendarType:l},g))}var j="react-calendar__month-view";return e.jsx("div",{className:Wn(j,p?"".concat(j,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[m(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[f(),w()]})]})})}var Et=function(){return Et=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Et.apply(this,arguments)},$n="react-calendar",_n=["century","decade","year","month"],g0=["decade","year","month","day"],pa=new Date;pa.setFullYear(1,0,1);pa.setHours(0,0,0,0);var m0=new Date(864e13);function cn(t){return t instanceof Date?t:new Date(t)}function ns(t,n){return _n.slice(_n.indexOf(t),_n.indexOf(n)+1)}function y0(t,n,a){var r=ns(n,a);return r.indexOf(t)!==-1}function xa(t,n,a){return t&&y0(t,n,a)?t:a}function rs(t){var n=_n.indexOf(t);return g0[n]}function v0(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=cn(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function as(t,n){var a=t.value,r=t.minDate,i=t.maxDate,s=t.maxDetail,l=v0(a,n);if(!l)return null;var d=rs(s),u=function(){switch(n){case 0:return ft(d,l);case 1:return Ko(d,l);default:throw new Error("Invalid index value: ".concat(n))}}();return Yd(u,r,i)}var ua=function(t){return as(t,0)},is=function(t){return as(t,1)},b0=function(t){return[ua,is].map(function(n){return n(t)})};function os(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,i=t.minDetail,s=t.value,l=t.view,d=xa(l,i,a),u=ua({value:s,minDate:r,maxDate:n,maxDetail:a})||new Date;return ft(d,u)}function j0(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,i=t.defaultView,s=t.maxDate,l=t.maxDetail,d=t.minDate,u=t.minDetail,c=t.value,p=t.view,g=xa(p,u,l),f=n||a;return f?ft(g,f):os({maxDate:s,maxDetail:l,minDate:d,minDetail:u,value:c||r,view:p||i})}function jr(t){return t&&(!Array.isArray(t)||t.length===1)}function Cn(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var w0=x.forwardRef(function(n,a){var r=n.activeStartDate,i=n.allowPartialRange,s=n.calendarType,l=n.className,d=n.defaultActiveStartDate,u=n.defaultValue,c=n.defaultView,p=n.formatDay,g=n.formatLongDate,f=n.formatMonth,m=n.formatMonthYear,w=n.formatShortWeekday,j=n.formatWeekday,y=n.formatYear,v=n.goToRangeStartOnSelect,S=v===void 0?!0:v,M=n.inputRef,D=n.locale,A=n.maxDate,T=A===void 0?m0:A,k=n.maxDetail,L=k===void 0?"month":k,I=n.minDate,$=I===void 0?pa:I,P=n.minDetail,H=P===void 0?"century":P,J=n.navigationAriaLabel,V=n.navigationAriaLive,C=n.navigationLabel,F=n.next2AriaLabel,Q=n.next2Label,O=n.nextAriaLabel,ie=n.nextLabel,Z=n.onActiveStartDateChange,U=n.onChange,je=n.onClickDay,ee=n.onClickDecade,Se=n.onClickMonth,Y=n.onClickWeekNumber,Ie=n.onClickYear,at=n.onDrillDown,Ne=n.onDrillUp,Ce=n.onViewChange,bt=n.prev2AriaLabel,it=n.prev2Label,Qe=n.prevAriaLabel,qn=n.prevLabel,se=n.returnValue,Kt=se===void 0?"start":se,$e=n.selectRange,yn=n.showDoubleView,ya=n.showFixedNumberOfWeeks,va=n.showNavigation,Ls=va===void 0?!0:va,Ps=n.showNeighboringCentury,Os=n.showNeighboringDecade,ba=n.showNeighboringMonth,Es=ba===void 0?!0:ba,Fs=n.showWeekNumbers,_s=n.tileClassName,Ns=n.tileContent,Rs=n.tileDisabled,Kn=n.value,ja=n.view,wa=x.useState(d),zs=wa[0],vn=wa[1],ka=x.useState(null),Bs=ka[0],Sa=ka[1],$a=x.useState(Array.isArray(u)?u.map(function(B){return B!==null?cn(B):null}):u!=null?cn(u):null),Xn=$a[0],Ws=$a[1],Ca=x.useState(c),Hs=Ca[0],Ta=Ca[1],me=r||zs||j0({activeStartDate:r,defaultActiveStartDate:d,defaultValue:u,defaultView:c,maxDate:T,maxDetail:L,minDate:$,minDetail:H,value:Kn,view:ja}),ye=function(){var B=function(){return $e&&jr(Xn)?Xn:Kn!==void 0?Kn:Xn}();return B?Array.isArray(B)?B.map(function(ne){return ne!==null?cn(ne):null}):B!==null?cn(B):null:null}(),bn=rs(L),te=xa(ja||Hs,H,L),Ae=ns(H,L),Ys=$e?Bs:null,Jn=Ae.indexOf(te)<Ae.length-1,Da=Ae.indexOf(te)>0,Ma=x.useCallback(function(B){var ne=function(){switch(Kt){case"start":return ua;case"end":return is;case"range":return b0;default:throw new Error("Invalid returnValue.")}}();return ne({maxDate:T,maxDetail:L,minDate:$,value:B})},[T,L,$,Kt]),Zn=x.useCallback(function(B,ne){vn(B);var oe={action:ne,activeStartDate:B,value:ye,view:te};Z&&!Cn(me,B)&&Z(oe)},[me,Z,ye,te]),jn=x.useCallback(function(B,ne){var oe=function(){switch(te){case"century":return ee;case"decade":return Ie;case"year":return Se;case"month":return je;default:throw new Error("Invalid view: ".concat(te,"."))}}();oe&&oe(B,ne)},[je,ee,Se,Ie,te]),er=x.useCallback(function(B,ne){if(Jn){jn(B,ne);var oe=Ae[Ae.indexOf(te)+1];if(!oe)throw new Error("Attempted to drill down from the lowest view.");vn(B),Ta(oe);var Te={action:"drillDown",activeStartDate:B,value:ye,view:oe};Z&&!Cn(me,B)&&Z(Te),Ce&&te!==oe&&Ce(Te),at&&at(Te)}},[me,Jn,Z,jn,at,Ce,ye,te,Ae]),tr=x.useCallback(function(){if(Da){var B=Ae[Ae.indexOf(te)-1];if(!B)throw new Error("Attempted to drill up from the highest view.");var ne=ft(B,me);vn(ne),Ta(B);var oe={action:"drillUp",activeStartDate:ne,value:ye,view:B};Z&&!Cn(me,ne)&&Z(oe),Ce&&te!==B&&Ce(oe),Ne&&Ne(oe)}},[me,Da,Z,Ne,Ce,ye,te,Ae]),nr=x.useCallback(function(B,ne){var oe=ye;jn(B,ne);var Te=$e&&!jr(oe),De;if($e)if(Te)De=ft(bn,B);else{if(!oe)throw new Error("previousValue is required");if(Array.isArray(oe))throw new Error("previousValue must not be an array");De=Rd(bn,oe,B)}else De=Ma(B);var ar=!$e||Te||S?os({maxDate:T,maxDetail:L,minDate:$,minDetail:H,value:De,view:te}):null;ne.persist(),vn(ar),Ws(De);var Us={action:"onChange",activeStartDate:ar,value:De,view:te};if(Z&&!Cn(me,ar)&&Z(Us),U)if($e){var qs=jr(De);if(!qs)U(De||null,ne);else if(i){if(Array.isArray(De))throw new Error("value must not be an array");U([De||null,null],ne)}}else U(De||null,ne)},[me,i,Ma,S,T,L,$,H,Z,U,jn,$e,ye,bn,te]);function Gs(B){Sa(B)}function rr(){Sa(null)}x.useImperativeHandle(a,function(){return{activeStartDate:me,drillDown:er,drillUp:tr,onChange:nr,setActiveStartDate:Zn,value:ye,view:te}},[me,er,tr,nr,Zn,ye,te]);function Ia(B){var ne=B?qo(te,me):ft(te,me),oe=Jn?er:nr,Te={activeStartDate:ne,hover:Ys,locale:D,maxDate:T,minDate:$,onClick:oe,onMouseOver:$e?Gs:void 0,tileClassName:_s,tileContent:Ns,tileDisabled:Rs,value:ye,valueType:bn};switch(te){case"century":return e.jsx(Xd,Et({formatYear:y,showNeighboringCentury:Ps},Te));case"decade":return e.jsx(t0,Et({formatYear:y,showNeighboringDecade:Os},Te));case"year":return e.jsx(o0,Et({formatMonth:f,formatMonthYear:m},Te));case"month":return e.jsx(f0,Et({calendarType:s,formatDay:p,formatLongDate:g,formatShortWeekday:w,formatWeekday:j,onClickWeekNumber:Y,onMouseLeave:$e?rr:void 0,showFixedNumberOfWeeks:typeof ya<"u"?ya:yn,showNeighboringMonth:Es,showWeekNumbers:Fs},Te));default:throw new Error("Invalid view: ".concat(te,"."))}}function Vs(){return Ls?e.jsx(Wd,{activeStartDate:me,drillUp:tr,formatMonthYear:m,formatYear:y,locale:D,maxDate:T,minDate:$,navigationAriaLabel:J,navigationAriaLive:V,navigationLabel:C,next2AriaLabel:F,next2Label:Q,nextAriaLabel:O,nextLabel:ie,prev2AriaLabel:bt,prev2Label:it,prevAriaLabel:Qe,prevLabel:qn,setActiveStartDate:Zn,showDoubleView:yn,view:te,views:Ae}):null}var Qs=Array.isArray(ye)?ye:[ye];return e.jsxs("div",{className:Wn($n,$e&&Qs.length===1&&"".concat($n,"--selectRange"),yn&&"".concat($n,"--doubleView"),l),ref:M,children:[Vs(),e.jsxs("div",{className:"".concat($n,"__viewContainer"),onBlur:$e?rr:void 0,onMouseLeave:$e?rr:void 0,children:[Ia(),yn?Ia(!0):null]})]})});const k0=N`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,S0=N`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,$0=N`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,C0=N`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,T0=N`
  from { opacity: 0; }
  to { opacity: 1; }
`,D0=o.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${T0} 0.15s ease-out;
`,M0=o.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?Je`animation: ${C0} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${$0} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?Je`animation: ${S0} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:Je`animation: ${k0} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,I0=o.div`
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
`,tt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:i,monthOnly:s=!1})=>{const l=x.useRef(null),[d,u]=x.useState(!1),[c,p]=x.useState(!1),[g,f]=x.useState(!1),[m,w]=x.useState({top:0,left:0});x.useEffect(()=>{if(t&&(i!=null&&i.current)){const M=i.current.getBoundingClientRect(),D=280,A=s?240:320,T=8,L=window.innerHeight-M.bottom-T<A;f(L);let I;L?I=M.top-A-T:I=M.bottom+T;let $=M.right-D;$<8&&($=8),$+D>window.innerWidth-8&&($=window.innerWidth-D-8),I<8&&(I=8),w({top:I,left:$}),p(!0),u(!1)}},[t,i]);const j=x.useCallback(()=>{u(!0),setTimeout(()=>{p(!1),u(!1),n()},150)},[n]),y=x.useCallback(M=>{l.current&&!l.current.contains(M.target)&&j()},[j]);x.useEffect(()=>{if(t){const M=setTimeout(()=>{document.addEventListener("mousedown",y)},10);return()=>{clearTimeout(M),document.removeEventListener("mousedown",y)}}},[t,y]);const v=x.useCallback(M=>{M instanceof Date&&(r(Me(M)),j())},[r,j]);if(!c)return null;const S=new Date(a+"T00:00:00");return So.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(D0,{onClick:j}),e.jsx(M0,{ref:l,$isClosing:d,$openUpward:g,$top:m.top,$left:m.left,children:e.jsx(I0,{children:e.jsx(w0,{onChange:v,value:S,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",...s?{view:"year",maxDetail:"year"}:{formatShortWeekday:(M,D)=>D.toLocaleDateString("en-US",{weekday:"narrow"})}})})})]}),document.body)},A0=o(b.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,L0=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,P0=o.button`
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
`,O0=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,ha=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,E0=o(ha)`
  height: 14px;
`,F0=o(ha)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,_0=o(ha)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,N0=o(b.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,R0=o(b.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,z0=o.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,B0=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,W0=o(b.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,H0=o.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,Y0=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,G0=o.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,V0=o(b.button).attrs({type:"button"})`
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
`,Q0=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,li=o(b.button).attrs({type:"button"})`
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
`,U0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),q0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),Tn=[.25,.1,.25,1],K0=50,X0=({selectedDate:t,onDateChange:n})=>{const[a,r]=x.useState(!1),[i,s]=x.useState(1),l=x.useRef(null),d=x.useRef(t),u=x.useRef(null);if(d.current!==t){const T=new Date(d.current+"T00:00:00"),k=new Date(t+"T00:00:00");s(k>T?1:-1),d.current=t}const c=x.useCallback(T=>{T.preventDefault(),T.stopPropagation();const k=Me(new Date),L=new Date(t+"T00:00:00"),I=new Date(k+"T00:00:00");s(I>L?1:-1),n(k)},[t,n]),p=x.useCallback(T=>{T.preventDefault(),T.stopPropagation(),s(-1);const k=new Date(t+"T00:00:00");k.setDate(k.getDate()-1),n(Me(k))},[t,n]),g=x.useCallback(T=>{T.preventDefault(),T.stopPropagation(),s(1);const k=new Date(t+"T00:00:00");k.setDate(k.getDate()+1),n(Me(k))},[t,n]),f=x.useCallback(T=>{const k=new Date(t+"T00:00:00"),L=k.getDate();k.setDate(1),k.setMonth(k.getMonth()+T);const I=new Date(k.getFullYear(),k.getMonth()+1,0).getDate();k.setDate(Math.min(L,I)),s(T>0?1:-1),n(Me(k))},[t,n]),m=x.useCallback(T=>{const k=T.touches[0];u.current={x:k.clientX,y:k.clientY}},[]),w=x.useCallback(T=>{if(!u.current)return;const k=T.changedTouches[0],L=k.clientX-u.current.x,I=k.clientY-u.current.y;u.current=null,Math.abs(L)>K0&&Math.abs(L)>Math.abs(I)*1.5&&f(L<0?1:-1)},[f]),j=Oc(t),y=new Date(t+"T00:00:00"),v=y.getDate(),S=y.toLocaleDateString("en-US",{month:"short"}),M=y.toLocaleDateString("en-US",{weekday:"long"}),D=y.getFullYear(),A={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return e.jsxs(A0,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:Tn},onTouchStart:m,onTouchEnd:w,children:[e.jsxs(L0,{children:[e.jsxs(P0,{ref:l,onClick:()=>r(!0),type:"button",children:[e.jsxs(O0,{children:[e.jsx(E0,{children:e.jsx(K,{mode:"popLayout",initial:!1,children:e.jsx(N0,{variants:A,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Tn},children:S},S)})}),e.jsx(F0,{children:e.jsx(K,{mode:"popLayout",initial:!1,children:e.jsx(R0,{variants:A,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Tn},children:v},v)})})]}),e.jsx(z0,{}),e.jsxs(B0,{children:[e.jsx(_0,{children:e.jsx(K,{mode:"popLayout",initial:!1,children:e.jsx(W0,{variants:A,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Tn},children:M},M)})}),e.jsx(H0,{children:D})]})]}),e.jsxs(Y0,{children:[e.jsx(G0,{children:e.jsx(K,{children:!j&&e.jsx(V0,{onClick:c,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Q0,{children:[e.jsx(li,{onClick:p,whileTap:{scale:.95},children:e.jsx(U0,{})}),e.jsx(li,{onClick:g,whileTap:{scale:.95},children:e.jsx(q0,{})})]})]})]}),e.jsx(tt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:l})]})},J0=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Dt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Mt=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,wr=o.select`
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
`,ci=o.input`
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
`,Z0=o.button`
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
`,ep=o(b.button)`
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
`,tp=[{value:"bank_debit",label:"Bank Debit"},{value:"bank_credit",label:"Bank Credit"},{value:"investment_credit",label:"Investment Deposit"},{value:"investment_debit",label:"Investment Withdrawal"}];function np(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function rp(t){return parseInt(t.replace(/,/g,""))||0}const ap=({onAddTransaction:t,defaultDate:n})=>{const[a,r]=x.useState("bank_debit"),[i,s]=x.useState(Ze[0].id),[l,d]=x.useState(""),[u,c]=x.useState(""),[p,g]=x.useState(""),[f,m]=x.useState(n||Me(new Date));x.useEffect(()=>{n&&m(n)},[n]);const[w,j]=x.useState(!1),y=x.useRef(null),v=a==="investment_credit"||a==="investment_debit",S=x.useMemo(()=>v?Fr():Ke(),[v]),M=x.useMemo(()=>a==="investment_credit"||a==="investment_debit"?Ke():[],[a]),D=v&&i!=="pf",A=x.useCallback($=>{r($);const P=$==="investment_credit"||$==="investment_debit",H=P?Fr():Ke(),J=H.length>0?H[0].id:"";s(J);const V=Ke();P&&J!=="pf"&&V.length>0?d(V[0].id):d("")},[]),T=rp(u),k=i&&T>0&&p.trim(),L=x.useCallback(()=>{if(!k)return;const $=_c(a,i,T,p.trim(),f,D?l:void 0);t($),c(""),g("")},[a,i,T,p,f,l,D,k,t]),I=$=>new Date($+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(J0,{children:[e.jsxs(Dt,{children:[e.jsx(Mt,{children:"Type"}),e.jsx(wr,{value:a,onChange:$=>A($.target.value),children:tp.map($=>e.jsx("option",{value:$.value,children:$.label},$.value))})]}),e.jsxs(Dt,{children:[e.jsx(Mt,{children:v?"Investment Account":"Bank Account"}),e.jsx(wr,{value:i,onChange:$=>{const P=$.target.value;if(s(P),P==="pf")d("");else if(v&&!l){const H=Ke();H.length>0&&d(H[0].id)}},children:S.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))})]}),D&&e.jsxs(Dt,{children:[e.jsx(Mt,{children:a==="investment_credit"?"From Bank":"To Bank"}),e.jsx(wr,{value:l,onChange:$=>d($.target.value),children:M.map($=>e.jsx("option",{value:$.id,children:$.name},$.id))})]}),e.jsxs(Dt,{children:[e.jsx(Mt,{children:"Amount"}),e.jsx(ci,{type:"text",inputMode:"numeric",placeholder:"0",value:u,onChange:$=>c(np($.target.value))})]}),e.jsxs(Dt,{children:[e.jsx(Mt,{children:"Description"}),e.jsx(ci,{type:"text",placeholder:"What's this for?",value:p,onChange:$=>g($.target.value),onKeyDown:$=>$.key==="Enter"&&L()})]}),e.jsxs(Dt,{children:[e.jsx(Mt,{children:"Date"}),e.jsx(Z0,{ref:y,type:"button",onClick:()=>j(!0),children:I(f)}),e.jsx(tt,{isOpen:w,onClose:()=>j(!1),selectedDate:f,onDateSelect:$=>{m($),j(!1)},triggerRef:y})]}),e.jsx(ep,{disabled:!k,onClick:L,whileTap:{scale:.98},children:"Add Transaction"})]})},ip=x.memo(ap),fa=[.25,.1,.25,1],Nt={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Rt={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:fa}}};function zt(t){x.useEffect(()=>{if(t)return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.documentElement.style.overflow="",document.body.style.overflow="",document.body.style.touchAction=""}},[t])}const Bt=o(b.div)`
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
`,Wt=o(b.div)`
  width: 100%;
  max-width: ${({$maxWidth:t})=>t||"440px"};
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Ht=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Yt=o.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,ss=o(b.button)`
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
`,Gt=o(ss)`
  left: 12px;
  color: var(--text-secondary);
`,Vt=o(ss)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Qt=o.div`
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
`,gt=o.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,di=o.div`
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
`;o(b.button)`
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
`;o(b.button)`
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
`;const op=o(b.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,sp=o.div`
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
`,lp=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,cp=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
`;function dp({icon:t,title:n,subtitle:a,className:r}){return e.jsxs(op,{className:r,initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:fa},children:[t&&e.jsx(sp,{children:t}),e.jsx(lp,{children:n}),a&&e.jsx(cp,{children:a})]})}const pp=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  & + & {
    border-top: 1px solid var(--border);
  }
`,xp=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,up=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,hp=o.input`
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
`;function fp(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function gp(t){return parseInt(t.replace(/,/g,""))||0}const mp=({isOpen:t,onClose:n,initialBalances:a,onSave:r})=>{const[i,s]=x.useState({});zt(t),x.useEffect(()=>{if(t){const p={};Ze.forEach(g=>{const f=a[g.id];p[g.id]=f?fe(f):""}),s(p)}},[t,a]);const l=()=>{const p={};Object.entries(i).forEach(([g,f])=>{const m=gp(f);m!==0&&(p[g]=m)}),r(p),n()},d=Ze.filter(p=>p.type==="bank"),u=Ze.filter(p=>p.type==="investment"),c=p=>p.map(g=>e.jsxs(pp,{children:[e.jsx(xp,{$color:g.color}),e.jsx(up,{children:g.name}),e.jsx(hp,{type:"text",inputMode:"numeric",placeholder:"0",value:i[g.id]||"",onChange:f=>s(m=>({...m,[g.id]:fp(f.target.value)}))})]},g.id));return e.jsx(K,{children:t&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:p=>p.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:"Initial Balances"}),e.jsx(Vt,{onClick:l,children:"Save"})]}),e.jsxs(Qt,{children:[e.jsxs(gt,{children:[e.jsx(di,{children:"Bank Accounts"}),c(d)]}),e.jsxs(gt,{children:[e.jsx(di,{children:"Investments"}),c(u)]})]})]})})})},It=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`,At=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,pi=o.input`
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
`,xi=o.select`
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
`,yp=o.button`
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
`,vp=o.div`
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`;function bp(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function jp(t){return parseInt(t.replace(/,/g,""))||0}const wp=({isOpen:t,onClose:n,transaction:a,onSave:r})=>{const[i,s]=x.useState(""),[l,d]=x.useState(""),[u,c]=x.useState(""),[p,g]=x.useState(""),[f,m]=x.useState(""),[w,j]=x.useState(!1),y=x.useRef(null);zt(t),x.useEffect(()=>{t&&a&&(s(fe(a.amount)),d(a.description),c(a.date),g(a.accountId),m(a.linkedAccountId||""))},[t,a]);const v=(a==null?void 0:a.type)==="investment_credit"||(a==null?void 0:a.type)==="investment_debit",S=x.useMemo(()=>a?v?Fr():Ke():[],[a,v]),M=jp(i),D=x.useCallback(()=>{if(!a)return;const k={...a,amount:M,description:l.trim(),date:u,accountId:p,linkedAccountId:v&&p!=="pf"?f:void 0};r(k),n()},[a,M,l,u,p,f,v,r,n]),A=M>0&&l.trim(),T=k=>new Date(k+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsx(K,{children:t&&a&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:k=>k.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:"Edit Transaction"}),e.jsx(Vt,{onClick:D,disabled:!A,children:"Save"})]}),e.jsx(Qt,{children:e.jsxs(gt,{children:[e.jsxs(It,{children:[e.jsx(At,{children:"Type"}),e.jsx(vp,{children:Nc(a.type)})]}),e.jsxs(It,{children:[e.jsx(At,{children:"Account"}),e.jsx(xi,{value:p,onChange:k=>g(k.target.value),children:S.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))})]}),v&&p!=="pf"&&e.jsxs(It,{children:[e.jsx(At,{children:a.type==="investment_credit"?"From Bank":"To Bank"}),e.jsx(xi,{value:f,onChange:k=>m(k.target.value),children:Ke().map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))})]}),e.jsxs(It,{children:[e.jsx(At,{children:"Amount"}),e.jsx(pi,{type:"text",inputMode:"numeric",value:i,onChange:k=>s(bp(k.target.value))})]}),e.jsxs(It,{children:[e.jsx(At,{children:"Description"}),e.jsx(pi,{type:"text",value:l,onChange:k=>d(k.target.value)})]}),e.jsxs(It,{children:[e.jsx(At,{children:"Date"}),e.jsx(yp,{ref:y,type:"button",onClick:()=>j(!0),children:T(u)}),e.jsx(tt,{isOpen:w,onClose:()=>j(!1),selectedDate:u,onDateSelect:k=>{c(k),j(!1)},triggerRef:y})]})]})})]})})})};function Ut(t,n,a){const r=n/12;return r===0?t/a:t*r*Math.pow(1+r,a)/(Math.pow(1+r,a)-1)}function ls(t,n){const a=new Date(t+"T00:00:00");return a.setMonth(a.getMonth()+n),a.toLocaleDateString("en-US",{month:"long",year:"numeric"})}function kp(t,n){const a=new Date(t+"T00:00:00");return a.setMonth(a.getMonth()+n),new Date(a.getFullYear(),a.getMonth()+1,0).getDate()}function Sp(t,n){const a=new Date(t+"T00:00:00");a.setMonth(a.getMonth()+n);const r=a.getFullYear();return r%4===0&&r%100!==0||r%400===0?366:365}function $p(t,n){const a=new Date(t.startDate+"T00:00:00"),r=n||new Date;let i=(r.getFullYear()-a.getFullYear())*12+(r.getMonth()-a.getMonth());return t.emiDay&&r.getDate()>=t.emiDay&&(i+=1),Math.max(0,i)}function cs(t,n,a){let r=t.annualRate,i=-1;for(const s of n)s.fromMonthIndex<=a&&s.fromMonthIndex>i&&(r=s.annualRate,i=s.fromMonthIndex);return r}function ds(t,n,a,r){const i=kp(a,r),s=Sp(a,r);return t*n*i/s}function Cp(t,n=[]){const a=Ut(t.principal,t.annualRate,t.tenureMonths),r=[];let i=t.principal;const s=t.tenureMonths+60;for(let l=0;l<s&&i>.5;l++){const d=cs(t,n,l),u=ds(i,d,t.startDate,l),c=Math.min(a-u,i),p=Math.max(0,i-c);r.push({monthIndex:l,monthLabel:ls(t.startDate,l),openingBalance:i,emi:i<a?i+u:a,interest:u,principalFromEMI:c,partialPayment:0,totalPrincipal:c,closingBalance:p}),i=p}return r}function ps(t,n,a=[]){const r=Ut(t.principal,t.annualRate,t.tenureMonths),i=[];let s=t.principal;const l=new Map;for(const u of n)l.set(u.monthIndex,(l.get(u.monthIndex)||0)+u.amount);const d=t.tenureMonths+60;for(let u=0;u<d&&s>.5;u++){const c=cs(t,a,u),p=ds(s,c,t.startDate,u),g=l.get(u)||0,f=Math.min(r-p,s),m=Math.min(f+g,s),w=Math.max(0,s-m);i.push({monthIndex:u,monthLabel:ls(t.startDate,u),openingBalance:s,emi:s<r?s+p:r,interest:p,principalFromEMI:Math.min(f,s),partialPayment:Math.min(g,s-f>0?s-f:0),totalPrincipal:m,closingBalance:w}),s=w}return i}function xs(t,n,a=[],r){const i=Ut(t.principal,t.annualRate,t.tenureMonths),s=Cp(t,a),l=ps(t,n,a),d=$p(t,r),u=s.reduce((y,v)=>y+v.interest,0),c=l.reduce((y,v)=>y+v.interest,0),p=l.filter(y=>y.monthIndex<d),g=p.reduce((y,v)=>y+v.totalPrincipal,0),f=p.reduce((y,v)=>y+v.interest,0),m=Math.max(0,t.principal-g),j=l.filter(y=>y.monthIndex>=d).reduce((y,v)=>y+v.interest,0);return{emi:i,originalTotalInterest:u,adjustedTotalInterest:c,interestSaved:u-c,totalPrincipalPaid:g,totalPrincipalLeft:m,totalInterestPaid:f,totalInterestLeft:j,originalTenure:s.length,adjustedTenure:l.length,schedule:l,originalSchedule:s}}const Tp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),Dp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),ui=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),Mp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),Ip=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),Ap=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Lp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"}),e.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),Pp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 21h18"}),e.jsx("path",{d:"M5 21V7l7-4 7 4v14"}),e.jsx("path",{d:"M9 21v-6h6v6"}),e.jsx("path",{d:"M10 10h4"})]}),Op=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2"}),e.jsx("path",{d:"M12 11v6"}),e.jsx("path",{d:"M9 14h6"}),e.jsx("path",{d:"M16 7V5a4 4 0 0 0-8 0v2"})]}),Ep=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"3",width:"20",height:"18",rx:"2"}),e.jsx("path",{d:"M2 9h20"}),e.jsx("path",{d:"M2 15h20"}),e.jsx("path",{d:"M9 3v18"})]}),Fp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 17h14M5 17a2 2 0 0 1-2-2V9l2.5-5h9L17 9v6a2 2 0 0 1-2 2"}),e.jsx("circle",{cx:"7.5",cy:"17",r:"2"}),e.jsx("circle",{cx:"16.5",cy:"17",r:"2"}),e.jsx("path",{d:"M3 9h18"})]}),_p=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 10.182V22h18V10.182L12 2z"}),e.jsx("rect",{x:"9",y:"14",width:"6",height:"8"})]}),Np=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),Rp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),zp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),Xr=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Bp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),Wp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),Hp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),Yp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),us=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),hs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Gp=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),hi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),xe=fa,ht=[{id:"summary",label:"Summary",icon:Tp(),accent:"green"},{id:"transactions",label:"History",icon:zp(),accent:"blue"},{id:"add",label:"Add",icon:Xr(),accent:"orange"},{id:"liabilities",label:"Liabilities",icon:Ep(),accent:"red"},{id:"manage",label:"Manage",icon:Bp(),accent:"purple"}],et={car:{label:"Car",color:"#FF6B35"},home:{label:"Home",color:"#2B6CB0"},personal:{label:"Personal",color:"#8b5cf6"}},Vp=["bank_credit","investment_debit"],Qp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:xe}}},Up={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},qp=o(b.div)`
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
`,Kp=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,Xp=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,Jp=o.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,Zp=o.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,ex=o(b.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,tx=o.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,nx=o(b.div)`
  width: 100%;
`,rx=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,ax=o.input`
  display: none;
`,ix=o.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,ox=o(b.button)`
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
`,sx=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
`,lx=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,fi=o.button`
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
`,cx=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
  flex-shrink: 0;
`,dx=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,gi=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,px=o.div``,xx=o(b.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,ux=o.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,hx=o(b.div)`
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
`,fx=o.div`
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
`,gx=o.div`
  flex: 1;
  min-width: 0;
`,mx=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,yx=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,vx=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,bx=o.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,jx=o.div`
  display: flex;
  gap: 4px;
`,mi=o(b.button)`
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
`,wx=o(b.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,kx=o.div`
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
`,Sx=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,$x=o.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,Cx=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,kr=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Sr=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,yi=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,vi=o(b.button)`
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
`,bi=o.div`
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
`,ji=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,wi=o.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,ki=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,Tx=o.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,Dx=o.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,Mx=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Si=o(b.button)`
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
`,$i=o.div`
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
`,Ci=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Ti=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,Di=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px;
`,Ix=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Ax=o.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 14px 16px 4px;
`,Lx=o.div`
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  padding: 4px 16px 14px;
`,Px=o.div`
  height: 6px;
  display: flex;
  margin: 0 16px 14px;
  border-radius: 3px;
  overflow: hidden;
  gap: 2px;
`,Mi=o.div`
  width: ${({$width:t})=>t}%;
  background: ${({$color:t})=>t};
  border-radius: 3px;
  min-width: 4px;
`,Ii=o.div`
  display: flex;
  border-top: 1px solid var(--border);
`,Dn=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 16px;

  & + & {
    border-left: 1px solid var(--border);
  }
`,Mn=o.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
`,Ai=o.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,In=o.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({$positive:t})=>t?"#34C759":"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
`,Ox=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ex=o(b.button)`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;

  &:hover {
    background: var(--bg-tertiary);
  }
`,Fx=o.div`
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: ${({$color:t})=>`${t}18`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
    color: ${({$color:t})=>t};
  }
`,_x=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Nx=o.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rx=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,zx=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
`,Bx=o.span`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,Wx=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,Hx=o.div`
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
`,Yx=o.div`
  height: 100%;
  width: ${({$pct:t})=>`${Math.min(100,Math.max(0,t))}%`};
  background: ${({$color:t})=>t};
  border-radius: 2px;
  transition: width 0.4s ease;
`,Li=o(b.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
  background: rgba(42, 157, 143, 0.08);
  border: 1.5px dashed rgba(42, 157, 143, 0.35);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(42, 157, 143, 0.14);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,Gx=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Vx=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Qx=o(b.button)`
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
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,Ux=o.span`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qx=o.div`
  display: flex;
  gap: 8px;
`,Pi=o(b.button)`
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

  svg {
    width: 16px;
    height: 16px;
  }
`;o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;o(b.div)`
  background: ${({$accent:t})=>t?"rgba(52, 199, 89, 0.08)":"var(--bg-secondary)"};
  border: 1px solid ${({$accent:t})=>t?"rgba(52, 199, 89, 0.2)":"var(--border)"};
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;o.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;o.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$positive:t,$negative:n})=>t?"#34C759":n?"#FF3B30":"var(--text-primary)"};
`;o.span`
  font-size: 12px;
  color: var(--text-tertiary);
`;o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`;o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
`;o.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;o(b.button)`
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background: rgba(42, 157, 143, 0.1);
  }
`;o.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;o.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  min-width: 600px;
`;o.thead`
  position: sticky;
  top: 0;
  z-index: 1;

  th {
    padding: 10px 12px;
    text-align: right;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    background: var(--bg-tertiary);
    border-bottom: 1px solid var(--border);
    white-space: nowrap;

    &:first-child {
      text-align: left;
    }
  }
`;o.tr`
  background: ${({$hasPartial:t})=>t?"rgba(42, 157, 143, 0.06)":"transparent"};
  opacity: ${({$isPast:t})=>t?.6:1};

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  td {
    padding: 10px 12px;
    text-align: right;
    font-size: 13px;
    font-weight: 400;
    color: var(--text-primary);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;

    &:first-child {
      text-align: left;
      color: var(--text-secondary);
      font-weight: 500;
    }
  }
`;o.span`
  color: var(--accent);
  font-weight: 600;
`;o.button`
  background: none;
  border: none;
  color: #FF3B30;
  cursor: pointer;
  padding: 2px;
  margin-left: 4px;
  font-size: 11px;
  opacity: 0.7;
  vertical-align: middle;

  &:hover {
    opacity: 1;
  }
`;const de=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`,pe=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,ke=o.input`
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

  &:read-only {
    opacity: 0.6;
    cursor: default;
  }
`,Kx=o.select`
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
`,fs=o.div`
  display: flex;
  gap: 8px;
`,gs=o.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1.5px solid ${({$active:t,$color:n})=>t?n:"var(--border)"};
  background: ${({$active:t,$color:n})=>t?`${n}15`:"var(--bg-tertiary)"};
  color: ${({$active:t,$color:n})=>t?n:"var(--text-secondary)"};
`,ms=o.div`
  padding: 14px;
  background: rgba(42, 157, 143, 0.08);
  border: 1px solid rgba(42, 157, 143, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ys=o.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,vs=o.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--accent);
`,ga=o.button`
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
`,Xx=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Jx=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
`,Zx=o.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,eu=o(b.button)`
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background: rgba(42, 157, 143, 0.1);
  }
`,tu=o.div`
  display: flex;
  flex-direction: column;
`,Oi=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,$r=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$initial:t})=>t?"var(--text-tertiary)":"var(--accent)"};
  flex-shrink: 0;
`,Ei=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,Fi=o.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`,_i=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,Ni=o(b.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(42, 157, 143, 0.08);
  border: none;
  border-radius: 50%;
  color: var(--accent);
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 13px;
    height: 13px;
  }

  &:hover {
    background: rgba(42, 157, 143, 0.15);
  }
`,Ri=o(b.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 59, 48, 0.08);
  border: none;
  border-radius: 50%;
  color: #FF3B30;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: rgba(255, 59, 48, 0.15);
  }
`,nu=o.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
  color: var(--text-tertiary);
`,ru=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,au=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
`,iu=o.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,ou=o(b.button)`
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
    background: rgba(42, 157, 143, 0.1);
  }
`,su=o.div`
  display: flex;
  flex-direction: column;
`,lu=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,cu=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,du=o.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
`,pu=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,xu=o.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
  color: var(--text-tertiary);
`;function uu(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function hu(t){return parseInt(t.replace(/,/g,""))||0}function fu(t){const n=new Date(t+"T00:00:00");return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-01`}function gu(t){return new Date(t+"T00:00:00").toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const mu=({isOpen:t,onClose:n,onSave:a})=>{const[r,i]=x.useState(""),[s,l]=x.useState("home"),[d,u]=x.useState(""),[c,p]=x.useState(""),[g,f]=x.useState(""),[m,w]=x.useState("1"),[j,y]=x.useState(()=>Me(new Date)),[v,S]=x.useState(!1),M=x.useRef(null);zt(t);const D=hu(d),A=parseFloat(c)||0,T=parseInt(g)||0,k=x.useMemo(()=>D>0&&A>0&&T>0?Ut(D,A/100,T):0,[D,A,T]),L=r.trim()&&D>0&&A>0&&T>0&&j,I=x.useCallback(()=>{if(!L)return;const $=parseInt(m)||1,P={id:Bn(),name:r.trim(),type:s,principal:D,annualRate:A/100,tenureMonths:T,emiDay:Math.min(28,Math.max(1,$)),startDate:fu(j),createdAt:new Date().toISOString()};a(P),n(),i(""),l("home"),u(""),p(""),f(""),w("1")},[L,r,s,D,A,T,m,j,a,n]);return e.jsx(K,{children:t&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:$=>$.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:"Add Loan"}),e.jsx(Vt,{onClick:I,disabled:!L,children:"Save"})]}),e.jsx(Qt,{children:e.jsxs(gt,{children:[e.jsxs(de,{children:[e.jsx(pe,{children:"Loan Name"}),e.jsx(ke,{type:"text",placeholder:"e.g. HDFC Car Loan",value:r,onChange:$=>i($.target.value)})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Loan Type"}),e.jsx(fs,{children:Object.keys(et).map($=>e.jsx(gs,{type:"button",$active:s===$,$color:et[$].color,onClick:()=>l($),children:et[$].label},$))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Total Loan Principal"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"0",value:d,onChange:$=>u(uu($.target.value))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Annual Interest Rate (%)"}),e.jsx(ke,{type:"text",inputMode:"decimal",placeholder:"e.g. 8.55",value:c,onChange:$=>p($.target.value)})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Tenure (Months)"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"e.g. 84",value:g,onChange:$=>f($.target.value.replace(/[^\d]/g,""))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"EMI Debit Day"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"e.g. 18",value:m,onChange:$=>w($.target.value.replace(/[^\d]/g,""))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"EMI Start Month"}),e.jsx(ga,{ref:M,type:"button",onClick:()=>S(!0),children:gu(j)}),e.jsx(tt,{isOpen:v,onClose:()=>S(!1),selectedDate:j,onDateSelect:$=>{y($),S(!1)},triggerRef:M,monthOnly:!0})]}),k>0&&e.jsxs(ms,{children:[e.jsx(ys,{children:"Monthly EMI"}),e.jsx(vs,{children:q(Math.round(k))})]})]})})]})})})};function yu(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function vu(t){return parseInt(t.replace(/,/g,""))||0}function bu(t){const n=new Date(t+"T00:00:00");return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-01`}function ju(t){return new Date(t+"T00:00:00").toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const wu=({isOpen:t,onClose:n,loan:a,onSave:r})=>{const[i,s]=x.useState(""),[l,d]=x.useState("home"),[u,c]=x.useState(""),[p,g]=x.useState(""),[f,m]=x.useState(""),[w,j]=x.useState("1"),[y,v]=x.useState(""),[S,M]=x.useState(!1),D=x.useRef(null);zt(t),x.useEffect(()=>{t&&a&&(s(a.name),d(a.type),c(fe(a.principal)),g(String(a.annualRate*100)),m(String(a.tenureMonths)),j(String(a.emiDay||1)),v(a.startDate))},[t,a]);const A=vu(u),T=parseFloat(p)||0,k=parseInt(f)||0,L=x.useMemo(()=>A>0&&T>0&&k>0?Ut(A,T/100,k):0,[A,T,k]),I=i.trim()&&A>0&&T>0&&k>0&&y,$=x.useCallback(()=>{if(!I||!a)return;const P=parseInt(w)||1,H={...a,name:i.trim(),type:l,principal:A,annualRate:T/100,tenureMonths:k,emiDay:Math.min(28,Math.max(1,P)),startDate:bu(y)};r(H),n()},[I,a,i,l,A,T,k,w,y,r,n]);return e.jsx(K,{children:t&&a&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:P=>P.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:"Edit Loan"}),e.jsx(Vt,{onClick:$,disabled:!I,children:"Save"})]}),e.jsx(Qt,{children:e.jsxs(gt,{children:[e.jsxs(de,{children:[e.jsx(pe,{children:"Loan Name"}),e.jsx(ke,{type:"text",value:i,onChange:P=>s(P.target.value)})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Loan Type"}),e.jsx(fs,{children:Object.keys(et).map(P=>e.jsx(gs,{type:"button",$active:l===P,$color:et[P].color,onClick:()=>d(P),children:et[P].label},P))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Total Loan Principal"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"0",value:u,onChange:P=>c(yu(P.target.value))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Annual Interest Rate (%)"}),e.jsx(ke,{type:"text",inputMode:"decimal",placeholder:"e.g. 8.55",value:p,onChange:P=>g(P.target.value)})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Tenure (Months)"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"e.g. 84",value:f,onChange:P=>m(P.target.value.replace(/[^\d]/g,""))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"EMI Debit Day"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"e.g. 18",value:w,onChange:P=>j(P.target.value.replace(/[^\d]/g,""))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"EMI Start Month"}),e.jsx(ga,{ref:D,type:"button",onClick:()=>M(!0),children:y?ju(y):"Select date..."}),e.jsx(tt,{isOpen:S,onClose:()=>M(!1),selectedDate:y,onDateSelect:P=>{v(P),M(!1)},triggerRef:D,monthOnly:!0})]}),L>0&&e.jsxs(ms,{children:[e.jsx(ys,{children:"Monthly EMI"}),e.jsx(vs,{children:q(Math.round(L))})]})]})})]})})})};function ku(t){const n=t.replace(/[^\d]/g,"");return n?fe(parseInt(n)):""}function Su(t){return parseInt(t.replace(/,/g,""))||0}const $u=({isOpen:t,onClose:n,loan:a,existingPayments:r,editingPayment:i,onSave:s})=>{const[l,d]=x.useState(""),[u,c]=x.useState(""),[p,g]=x.useState("");zt(t),x.useEffect(()=>{t&&i?(d(String(i.monthIndex)),c(fe(i.amount)),g(i.note||"")):t||(d(""),c(""),g(""))},[t,i]);const f=x.useMemo(()=>i?r.filter(S=>S.id!==i.id):r,[r,i]),m=x.useMemo(()=>a?ps(a,f).map(M=>({index:M.monthIndex,label:M.monthLabel,balance:M.openingBalance})):[],[a,f]),w=Su(u),j=l!==""&&w>0,y=x.useCallback(()=>{if(!j||!a)return;const S={id:(i==null?void 0:i.id)??Bn(),loanId:a.id,monthIndex:parseInt(l),amount:w,note:p.trim()||void 0,createdAt:(i==null?void 0:i.createdAt)??new Date().toISOString()};s(S),n()},[j,a,i,l,w,p,s,n]),v=!!i;return e.jsx(K,{children:t&&a&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:S=>S.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:v?"Edit Payment":"Partial Payment"}),e.jsx(Vt,{onClick:y,disabled:!j,children:"Save"})]}),e.jsx(Qt,{children:e.jsxs(gt,{children:[e.jsxs(de,{children:[e.jsx(pe,{children:"Month"}),e.jsxs(Kx,{value:l,onChange:S=>d(S.target.value),children:[e.jsx("option",{value:"",children:"Select month..."}),m.map(S=>e.jsx("option",{value:S.index,children:S.label},S.index))]})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Amount"}),e.jsx(ke,{type:"text",inputMode:"numeric",placeholder:"0",value:u,onChange:S=>c(ku(S.target.value))})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"Note (Optional)"}),e.jsx(ke,{type:"text",placeholder:"e.g. Bonus payout",value:p,onChange:S=>g(S.target.value)})]})]})})]})})})};function zi(t,n){const a=new Date(t.startDate+"T00:00:00");return a.setMonth(a.getMonth()+n),`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-01`}function Cu(t,n){const a=new Date(t.startDate+"T00:00:00"),r=new Date(n+"T00:00:00");return(r.getFullYear()-a.getFullYear())*12+(r.getMonth()-a.getMonth())}function Tu(t){return new Date(t+"T00:00:00").toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const Du=({isOpen:t,onClose:n,loan:a,editingRateChange:r,onSave:i})=>{const[s,l]=x.useState(()=>Me(new Date)),[d,u]=x.useState(""),[c,p]=x.useState(!1),g=x.useRef(null);zt(t),x.useEffect(()=>{t&&r&&a?(l(zi(a,r.fromMonthIndex)),u((r.annualRate*100).toString())):t||(l(Me(new Date)),u(""))},[t,r,a]);const f=x.useMemo(()=>a?Cu(a,s):0,[a,s]),m=parseFloat(d)||0,w=a&&m>0&&f>0,j=x.useCallback(()=>{if(!w||!a)return;const S={id:(r==null?void 0:r.id)??Bn(),loanId:a.id,fromMonthIndex:f,annualRate:m/100,createdAt:(r==null?void 0:r.createdAt)??new Date().toISOString()};i(S),n()},[w,a,r,f,m,i,n]),y=x.useMemo(()=>a?zi(a,Math.max(1,f)):s,[a,f,s]),v=!!r;return e.jsx(K,{children:t&&a&&e.jsx(Bt,{variants:Nt,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:e.jsxs(Wt,{variants:Rt,initial:"hidden",animate:"visible",exit:"exit",onClick:S=>S.stopPropagation(),children:[e.jsxs(Ht,{children:[e.jsx(Gt,{onClick:n,children:"Cancel"}),e.jsx(Yt,{children:v?"Edit Rate Change":"Rate Change"}),e.jsx(Vt,{onClick:j,disabled:!w,children:"Save"})]}),e.jsx(Qt,{children:e.jsxs(gt,{children:[e.jsxs(de,{children:[e.jsx(pe,{children:"Effective From Month"}),e.jsx(ga,{ref:g,type:"button",onClick:()=>p(!0),children:Tu(s)}),e.jsx(tt,{isOpen:c,onClose:()=>p(!1),selectedDate:y,onDateSelect:S=>{l(S),p(!1)},triggerRef:g,monthOnly:!0}),f<=0&&e.jsx("span",{style:{fontSize:12,color:"#FF3B30"},children:"Must be after the loan start month"})]}),e.jsxs(de,{children:[e.jsx(pe,{children:"New Annual Interest Rate (%)"}),e.jsx(ke,{type:"text",inputMode:"decimal",placeholder:`e.g. ${(((a==null?void 0:a.annualRate)??0)*100).toFixed(2)}`,value:d,onChange:S=>u(S.target.value)})]})]})})]})})})};o(b.div)`
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
`;o(ea)`
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
`;const Mu=o.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,Iu=o.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,Au=o(b.span)`
  display: inline-block;
`,Lu=o.span`
  display: inline-block;
`,Pu=[.25,.1,.25,1],Ou=({value:t,className:n})=>{const a=x.useMemo(()=>t.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(Mu,{className:n,children:a.map(({char:r,key:i,isDigit:s},l)=>s?e.jsx(Iu,{children:e.jsx(K,{mode:"popLayout",initial:!1,children:e.jsx(Au,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:Pu},children:r},i)})},`wrapper-${l}`):e.jsx(Lu,{children:r},`static-${l}`))})},ae=x.memo(Ou);o.h1`
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
`;const Bi={"hdfc-bank":"/tools/images/HDFC.svg","icici-bank":"/tools/images/ICICI.svg"},Eu={"mutual-funds":Lp,ppf:Pp,pf:Op},Fu=o(b.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Wi=o.div`
  height: 1px;
  background: var(--border);
  margin: 0 4px;
`,_u=o.div`
  font-size: 24px;
  font-weight: 800;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  padding: 4px 16px 14px;
`,Nu=o.div`
  height: 6px;
  display: flex;
  margin: 0 16px 14px;
  border-radius: 3px;
  overflow: hidden;
  gap: 2px;
`,Hi=o.div`
  width: ${({$width:t})=>t}%;
  background: ${({$color:t})=>t};
  border-radius: 3px;
  min-width: 4px;
`,Ru=o.div`
  display: flex;
  border-top: 1px solid var(--border);
`,Yi=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 16px;

  & + & {
    border-left: 1px solid var(--border);
  }
`,Gi=o.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
`,An=o.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Vi=o.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,Cr=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Tr=o.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 14px 16px 4px;
`,Qi=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,Ui=o.div`
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
`,qi=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,Ki=o.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,zu=x.memo(function({balances:n}){const a=n.filter(p=>p.account.type==="bank"),r=n.filter(p=>p.account.type==="investment"),i=a.reduce((p,g)=>p+g.balance,0),s=r.reduce((p,g)=>p+g.balance,0),l=i+s,d=Math.abs(i)+Math.abs(s),u=d>0?Math.abs(i)/d*100:50,c=d>0?Math.abs(s)/d*100:50;return e.jsxs(Fu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[e.jsxs(Cr,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.25,ease:xe},children:[e.jsx(Tr,{children:"Net Worth"}),e.jsx(_u,{$positive:l>=0,children:e.jsx(ae,{value:q(l)})}),e.jsxs(Nu,{children:[e.jsx(Hi,{$width:u,$color:"#2B6CB0"}),e.jsx(Hi,{$width:c,$color:"#8b5cf6"})]}),e.jsxs(Ru,{children:[e.jsxs(Yi,{children:[e.jsxs(Gi,{children:[e.jsx(An,{$color:"#2B6CB0"}),"Bank Accounts"]}),e.jsx(Vi,{$positive:i>=0,children:e.jsx(ae,{value:q(i)})})]}),e.jsxs(Yi,{children:[e.jsxs(Gi,{children:[e.jsx(An,{$color:"#8b5cf6"}),"Investments"]}),e.jsx(Vi,{$positive:s>=0,children:e.jsx(ae,{value:q(s)})})]})]})]}),e.jsx(Wi,{}),e.jsxs(Cr,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:xe},children:[e.jsxs(Tr,{children:[e.jsx(An,{$color:"#2B6CB0"}),"Bank Accounts"]}),a.map(({account:p,balance:g})=>e.jsxs(Qi,{children:[e.jsx(Ui,{$color:p.color,children:Bi[p.id]&&e.jsx("img",{src:Bi[p.id],alt:""})}),e.jsx(qi,{children:p.name}),e.jsx(Ki,{$positive:g>=0,children:e.jsx(ae,{value:q(g)})})]},p.id))]}),e.jsx(Wi,{}),e.jsxs(Cr,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.12,duration:.3,ease:xe},children:[e.jsxs(Tr,{children:[e.jsx(An,{$color:"#8b5cf6"}),"Investments"]}),r.map(({account:p,balance:g})=>{const f=Eu[p.id];return e.jsxs(Qi,{children:[e.jsx(Ui,{$color:p.color,children:f&&e.jsx(f,{})}),e.jsx(qi,{children:p.name}),e.jsx(Ki,{$positive:g>=0,children:e.jsx(ae,{value:q(g)})})]},p.id)})]})]})}),Bu=t=>{switch(t){case"bank_credit":return Dp();case"bank_debit":return ui();case"investment_credit":return Mp();case"investment_debit":return Ip();default:return ui()}},Wu=t=>Vp.includes(t),Hu=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},Xi=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),bs=t=>{const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},Yu=t=>t.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Gu=x.memo(function({filterStartDate:n,onStartDateChange:a,filterEndDate:r,onEndDateChange:i}){const[s,l]=x.useState(!1),[d,u]=x.useState(!1),c=x.useRef(null),p=x.useRef(null);return e.jsx(sx,{children:e.jsxs(lx,{children:[e.jsxs(fi,{ref:c,type:"button",onClick:()=>l(!0),children:[Xi(n),e.jsx(hi,{})]}),e.jsx(tt,{isOpen:s,onClose:()=>l(!1),selectedDate:n,onDateSelect:g=>{a(g),l(!1)},triggerRef:c}),e.jsx(cx,{children:"to"}),e.jsxs(fi,{ref:p,type:"button",onClick:()=>u(!0),children:[Xi(r),e.jsx(hi,{})]}),e.jsx(tt,{isOpen:d,onClose:()=>u(!1),selectedDate:r,onDateSelect:g=>{i(g),u(!1)},triggerRef:p})]})})}),Vu=x.memo(function({groupedTransactions:n,activeFilterCount:a,onEditTransaction:r,onDeleteTransaction:i}){const s=Object.keys(n).sort((l,d)=>d.localeCompare(l));return s.length===0?e.jsx(gi,{children:e.jsxs(wx,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsx(kx,{children:e.jsx(Yp,{})}),e.jsx(Sx,{children:"No Transactions"}),e.jsx($x,{children:a>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):e.jsx(gi,{children:e.jsx(px,{children:e.jsx(K,{mode:"popLayout",children:s.map(l=>e.jsxs(xx,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:xe},children:[e.jsx(ux,{children:Hu(l)}),n[l].map(d=>{const u=Rc(d.accountId),c=Wu(d.type);return e.jsxs(hx,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:xe},children:[e.jsx(fx,{$type:d.type,children:Bu(d.type)}),e.jsxs(gx,{children:[e.jsx(mx,{children:d.description}),e.jsx(yx,{children:(u==null?void 0:u.name)||"Unknown Account"})]}),e.jsxs(vx,{children:[e.jsxs(bx,{$positive:c,children:[c?"+":"-",q(d.amount)]}),e.jsxs(jx,{children:[e.jsx(mi,{onClick:()=>r(d),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(hs,{})}),e.jsx(mi,{$danger:!0,onClick:()=>i(d.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(us,{})})]})]})]},d.id)})]},l))})})})});function Dr(t){const n=new Date(t+"T00:00:00");return bs(new Date(n.getFullYear(),n.getMonth(),1))}function Mr(t){const n=new Date(t+"T00:00:00");return bs(new Date(n.getFullYear(),n.getMonth()+1,0))}function Qu(t,n){const[a,r]=x.useState(()=>Dr(n)),[i,s]=x.useState(()=>Mr(n)),l=x.useRef(n),d=x.useRef(!1);x.useEffect(()=>{l.current!==n&&(l.current=n,d.current=!1,r(Dr(n)),s(Mr(n)))},[n]);const u=x.useCallback(m=>{d.current=!0,r(m)},[]),c=x.useCallback(m=>{d.current=!0,s(m)},[]),{filteredTransactions:p,groupedTransactions:g,activeFilterCount:f}=x.useMemo(()=>{let m=t.filter(y=>y.date>=a&&y.date<=i);m=m.sort((y,v)=>{const S=v.date.localeCompare(y.date);return S!==0?S:v.id.localeCompare(y.id)});const w=Yu(m),j=a===Dr(n)&&i===Mr(n);return{filteredTransactions:m,groupedTransactions:w,activeFilterCount:j?0:1}},[t,a,i,n]);return{filterStartDate:a,setFilterStartDate:u,filterEndDate:i,setFilterEndDate:c,filteredTransactions:p,groupedTransactions:g,activeFilterCount:f}}const Uu=x.memo(function({transactions:n,selectedDate:a,onEditTransaction:r,onDeleteTransaction:i}){const{filterStartDate:s,setFilterStartDate:l,filterEndDate:d,setFilterEndDate:u,groupedTransactions:c,activeFilterCount:p}=Qu(n,a);return e.jsxs(dx,{children:[e.jsx(Gu,{filterStartDate:s,onStartDateChange:l,filterEndDate:d,onEndDateChange:u}),e.jsx(Vu,{groupedTransactions:c,activeFilterCount:p,onEditTransaction:r,onDeleteTransaction:i})]})}),qu=x.memo(function({onAddTransaction:n,selectedDate:a}){return e.jsx(rx,{children:e.jsx(ip,{onAddTransaction:n,defaultDate:a})})}),Ku=x.memo(function({transactionsCount:n,onOpenBalanceModal:a,onExport:r,onImport:i}){return e.jsxs(Cx,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:xe},children:[e.jsxs(kr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:xe},children:[e.jsx(Sr,{children:"Configuration"}),e.jsx(yi,{children:e.jsxs(vi,{onClick:a,whileTap:{scale:.99},children:[e.jsx(bi,{$color:"#007AFF",children:e.jsx(Ap,{})}),e.jsxs(ji,{children:[e.jsx(wi,{children:"Initial Balances"}),e.jsx(ki,{children:"Set starting balances for all accounts"})]}),e.jsx(Tx,{children:e.jsx(Gp,{})})]})})]}),e.jsxs(kr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:xe},children:[e.jsx(Sr,{children:"Data"}),e.jsxs(Mx,{children:[e.jsxs(Si,{type:"button",$variant:"export",onClick:r,whileTap:{scale:.97},children:[e.jsx($i,{$color:"#34C759",children:e.jsx(Wp,{})}),e.jsx(Ci,{children:"Export"}),e.jsx(Ti,{children:"Save backup file"})]}),e.jsxs(Si,{type:"button",$variant:"import",onClick:i,whileTap:{scale:.97},children:[e.jsx($i,{$color:"#007AFF",children:e.jsx(Hp,{})}),e.jsx(Ci,{children:"Import"}),e.jsx(Ti,{children:"Restore from file"})]})]})]}),e.jsxs(kr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:xe},children:[e.jsx(Sr,{children:"About"}),e.jsx(yi,{children:e.jsxs(vi,{as:"div",style:{cursor:"default"},children:[e.jsx(bi,{$color:"#8E8E93",children:e.jsx(Rp,{})}),e.jsxs(ji,{children:[e.jsx(wi,{children:"Transactions"}),e.jsx(ki,{children:"Total records stored"})]}),e.jsx(Dx,{children:n})]})})]})]})}),Ji=o(b.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Zi=o.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 14px 16px 4px;
`,eo=o.div`
  font-size: 24px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  padding: 4px 16px 14px;
`,Xu=o.div`
  height: 6px;
  display: flex;
  margin: 0 16px 14px;
  border-radius: 3px;
  overflow: hidden;
  gap: 2px;
`,to=o.div`
  width: ${({$width:t})=>t}%;
  background: ${({$color:t})=>t};
  border-radius: 3px;
  min-width: 4px;
`,Ir=o.div`
  display: flex;
  border-top: 1px solid var(--border);
`,ze=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 16px;

  & + & {
    border-left: 1px solid var(--border);
  }
`,Be=o.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
`,no=o.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,We=o.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
`,Ju=o.div`
  display: flex;
  border-top: 1px solid rgba(52, 199, 89, 0.15);
  background: rgba(52, 199, 89, 0.05);
`,Zu=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),ro=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ao=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),e.jsx("path",{d:"m15 5 4 4"})]});function Ar(t,n){const a=new Date(t+"T00:00:00");return a.setMonth(a.getMonth()+n),a.toLocaleDateString("en-IN",{month:"long",year:"numeric"})}const eh=x.memo(function({loan:n,partialPayments:a,rateChanges:r,selectedDate:i,onBack:s,onEdit:l,onDelete:d,onAddPartialPayment:u,onUpdatePartialPayment:c,onDeletePartialPayment:p,onAddRateChange:g,onUpdateRateChange:f,onDeleteRateChange:m}){const[w,j]=x.useState(!1),[y,v]=x.useState(!1),[S,M]=x.useState(null),[D,A]=x.useState(null),T=x.useMemo(()=>a.filter(O=>O.loanId===n.id),[a,n.id]),k=x.useMemo(()=>r.filter(O=>O.loanId===n.id).sort((O,ie)=>ie.fromMonthIndex-O.fromMonthIndex),[r,n.id]),L=x.useMemo(()=>new Date(i+"T00:00:00"),[i]),I=x.useMemo(()=>xs(n,T,k,L),[n,T,k,L]),$=n.principal>0?Math.min(100,I.totalPrincipalPaid/n.principal*100):0,P=()=>{window.confirm(`Delete "${n.name}"? This will also remove all partial payments and rate changes for this loan.`)&&(d(n.id),s())},H=()=>{M(null),j(!0)},J=O=>{M(O),j(!0)},V=O=>{S?c(O):u(O)},C=()=>{A(null),v(!0)},F=O=>{A(O),v(!0)},Q=O=>{D?f(O):g(O)};return e.jsxs(e.Fragment,{children:[e.jsxs(Gx,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.25,ease:xe},children:[e.jsxs(Vx,{children:[e.jsx(Qx,{onClick:s,whileTap:{scale:.92},children:e.jsx(Zu,{})}),e.jsx(Ux,{children:n.name}),e.jsxs(qx,{children:[e.jsx(Pi,{onClick:()=>l(n),whileTap:{scale:.92},children:e.jsx(hs,{})}),e.jsx(Pi,{onClick:P,whileTap:{scale:.92},children:e.jsx(us,{})})]})]}),e.jsxs(Ji,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.25,ease:xe},children:[e.jsx(Zi,{children:"Loan Details"}),e.jsx(eo,{children:e.jsx(ae,{value:q(n.principal)})}),e.jsxs(Ir,{children:[e.jsxs(ze,{children:[e.jsx(Be,{children:"Rate of Interest"}),e.jsxs(We,{children:[(n.annualRate*100).toFixed(2),"%"]})]}),e.jsxs(ze,{children:[e.jsx(Be,{children:"Tenure"}),e.jsxs(We,{children:[n.tenureMonths," months"]})]}),e.jsxs(ze,{children:[e.jsx(Be,{children:"Monthly EMI"}),e.jsx(We,{children:e.jsx(ae,{value:q(Math.round(I.emi))})})]})]})]}),e.jsxs(Ji,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.05,duration:.25,ease:xe},children:[e.jsx(Zi,{children:"Repayment Progress"}),e.jsx(eo,{children:e.jsx(ae,{value:q(Math.round(I.totalPrincipalLeft))})}),e.jsxs(Xu,{children:[e.jsx(to,{$width:$,$color:"#34C759"}),e.jsx(to,{$width:100-$,$color:"#FF3B30"})]}),e.jsxs(Ir,{children:[e.jsxs(ze,{children:[e.jsxs(Be,{children:[e.jsx(no,{$color:"#34C759"}),"Principal Paid"]}),e.jsx(We,{children:e.jsx(ae,{value:q(Math.round(I.totalPrincipalPaid))})})]}),e.jsxs(ze,{children:[e.jsxs(Be,{children:[e.jsx(no,{$color:"#FF3B30"}),"Principal Left"]}),e.jsx(We,{children:e.jsx(ae,{value:q(Math.round(I.totalPrincipalLeft))})})]})]}),e.jsxs(Ir,{children:[e.jsxs(ze,{children:[e.jsx(Be,{children:"Interest Paid"}),e.jsx(We,{$color:"#FF3B30",children:e.jsx(ae,{value:q(Math.round(I.totalInterestPaid))})})]}),e.jsxs(ze,{children:[e.jsx(Be,{children:"Interest Left"}),e.jsx(We,{$color:"#FF3B30",children:e.jsx(ae,{value:q(Math.round(I.totalInterestLeft))})})]})]}),(I.interestSaved>0||I.originalTenure-I.adjustedTenure>0)&&e.jsxs(Ju,{children:[I.interestSaved>0&&e.jsxs(ze,{children:[e.jsx(Be,{children:"Interest Saved"}),e.jsx(We,{$color:"#34C759",children:e.jsx(ae,{value:q(Math.round(I.interestSaved))})})]}),I.originalTenure-I.adjustedTenure>0&&e.jsxs(ze,{children:[e.jsx(Be,{children:"Tenure Saved"}),e.jsxs(We,{$color:"#34C759",children:[I.originalTenure-I.adjustedTenure," months"]})]})]})]}),e.jsxs(Xx,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1,duration:.2,ease:xe},children:[e.jsxs(Jx,{children:[e.jsx(Zx,{children:"Interest Rate History"}),e.jsx(eu,{type:"button",onClick:C,whileTap:{scale:.96},children:"+ Add Change"})]}),e.jsxs(tu,{children:[k.length===0&&e.jsx(nu,{children:"No rate changes recorded"}),k.map(O=>e.jsxs(Oi,{children:[e.jsx($r,{}),e.jsxs(Ei,{children:[e.jsxs(Fi,{children:[(O.annualRate*100).toFixed(2),"%"]}),e.jsxs(_i,{children:["From ",Ar(n.startDate,O.fromMonthIndex)]})]}),e.jsx(Ni,{onClick:()=>F(O),whileTap:{scale:.9},children:e.jsx(ao,{})}),e.jsx(Ri,{onClick:()=>m(O.id),whileTap:{scale:.9},children:e.jsx(ro,{})})]},O.id)),e.jsxs(Oi,{children:[e.jsx($r,{$initial:!0}),e.jsxs(Ei,{children:[e.jsxs(Fi,{children:[(n.annualRate*100).toFixed(2),"%"]}),e.jsxs(_i,{children:["Initial rate · ",Ar(n.startDate,0)]})]})]})]})]}),e.jsxs(ru,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.15,duration:.2,ease:xe},children:[e.jsxs(au,{children:[e.jsx(iu,{children:"Partial Payments"}),e.jsx(ou,{type:"button",onClick:H,whileTap:{scale:.96},children:"+ Add Payment"})]}),e.jsxs(su,{children:[T.length===0&&e.jsx(xu,{children:"No partial payments recorded"}),[...T].sort((O,ie)=>ie.monthIndex-O.monthIndex).map(O=>e.jsxs(lu,{children:[e.jsx($r,{}),e.jsxs(cu,{children:[e.jsx(du,{children:e.jsx(ae,{value:q(O.amount)})}),e.jsxs(pu,{children:[Ar(n.startDate,O.monthIndex),O.note?` · ${O.note}`:""]})]}),e.jsx(Ni,{onClick:()=>J(O),whileTap:{scale:.9},children:e.jsx(ao,{})}),e.jsx(Ri,{onClick:()=>p(O.id),whileTap:{scale:.9},children:e.jsx(ro,{})})]},O.id))]})]})]}),e.jsx($u,{isOpen:w,onClose:()=>{j(!1),M(null)},loan:n,existingPayments:T,editingPayment:S,onSave:V}),e.jsx(Du,{isOpen:y,onClose:()=>{v(!1),A(null)},loan:n,editingRateChange:D,onSave:Q})]})}),th={car:Fp,home:_p,personal:Np},nh=x.memo(function({loans:n,partialPayments:a,rateChanges:r,selectedDate:i,onAddLoan:s,onEditLoan:l,onDeleteLoan:d,onAddPartialPayment:u,onUpdatePartialPayment:c,onDeletePartialPayment:p,onAddRateChange:g,onUpdateRateChange:f,onDeleteRateChange:m}){const[w,j]=x.useState(null),y=w?n.find(D=>D.id===w):null,v=x.useMemo(()=>new Date(i+"T00:00:00"),[i]),S=x.useMemo(()=>n.map(D=>{const A=a.filter(k=>k.loanId===D.id),T=r.filter(k=>k.loanId===D.id);return{loan:D,summary:xs(D,A,T,v)}}),[n,a,r,v]),M=x.useMemo(()=>{let D=0,A=0,T=0,k=0,L=0;for(const{loan:P,summary:H}of S)D+=P.principal,A+=H.totalPrincipalLeft,T+=H.totalPrincipalPaid,k+=Ut(P.principal,P.annualRate,P.tenureMonths),L+=H.interestSaved;const I=D>0?T/D*100:0,$=D>0?A/D*100:0;return{totalPrincipal:D,outstanding:A,paid:T,monthlyEMI:k,totalSaved:L,paidPct:I,remainPct:$}},[S]);return y?e.jsx(eh,{loan:y,partialPayments:a,rateChanges:r,selectedDate:i,onBack:()=>j(null),onEdit:l,onDelete:D=>{d(D),j(null)},onAddPartialPayment:u,onUpdatePartialPayment:c,onDeletePartialPayment:p,onAddRateChange:g,onUpdateRateChange:f,onDeleteRateChange:m}):n.length===0?e.jsxs(Di,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:xe},children:[e.jsxs(Li,{onClick:s,whileTap:{scale:.97},children:[e.jsx(Xr,{})," Add Loan"]}),e.jsx(dp,{title:"No Loans",subtitle:"Add your first loan to start tracking liabilities and amortization schedules."})]}):e.jsxs(Di,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:xe},children:[e.jsxs(Li,{onClick:s,whileTap:{scale:.97},children:[e.jsx(Xr,{})," Add Loan"]}),e.jsxs(Ix,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,ease:xe},children:[e.jsx(Ax,{children:"Total Outstanding"}),e.jsx(Lx,{children:e.jsx(ae,{value:q(Math.round(M.outstanding))})}),e.jsxs(Px,{children:[e.jsx(Mi,{$width:M.paidPct,$color:"#34C759"}),e.jsx(Mi,{$width:M.remainPct,$color:"#FF3B30"})]}),e.jsxs(Ii,{children:[e.jsxs(Dn,{children:[e.jsxs(Mn,{children:[e.jsx(Ai,{$color:"#34C759"}),"Paid"]}),e.jsx(In,{children:e.jsx(ae,{value:q(Math.round(M.paid))})})]}),e.jsxs(Dn,{children:[e.jsxs(Mn,{children:[e.jsx(Ai,{$color:"#FF3B30"}),"Remaining"]}),e.jsx(In,{children:e.jsx(ae,{value:q(Math.round(M.outstanding))})})]})]}),e.jsxs(Ii,{children:[e.jsxs(Dn,{children:[e.jsx(Mn,{children:"Monthly EMI"}),e.jsx(In,{children:e.jsx(ae,{value:q(Math.round(M.monthlyEMI))})})]}),M.totalSaved>0&&e.jsxs(Dn,{children:[e.jsx(Mn,{children:"Interest Saved"}),e.jsx(In,{$positive:!0,children:e.jsx(ae,{value:q(Math.round(M.totalSaved))})})]})]})]}),e.jsx(Ox,{children:S.map(({loan:D,summary:A},T)=>{const k=th[D.type],L=et[D.type].color,I=D.principal>0?A.totalPrincipalPaid/D.principal*100:0;return e.jsxs(Ex,{onClick:()=>j(D.id),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:T*.05,duration:.3,ease:xe},whileTap:{scale:.98},children:[e.jsx(Fx,{$color:L,children:e.jsx(k,{})}),e.jsxs(_x,{children:[e.jsx(Nx,{children:D.name}),e.jsxs(Rx,{children:[et[D.type].label," · ",D.annualRate*100,"%"]}),e.jsx(Hx,{children:e.jsx(Yx,{$pct:I,$color:L})})]}),e.jsxs(zx,{children:[e.jsx(Bx,{children:e.jsx(ae,{value:q(Math.round(A.totalPrincipalLeft))})}),e.jsxs(Wx,{children:[e.jsx(ae,{value:q(Math.round(A.emi))}),"/mo"]})]})]},D.id)})})]})});function rh(){const[t,n]=x.useState([]),[a,r]=x.useState({}),i=x.useRef(null);x.useEffect(()=>{n(Lc()),r(Pc())},[]);const s=x.useCallback(f=>{n(m=>{const w=[...m,f];return requestAnimationFrame(()=>kn(w)),w})},[]),l=x.useCallback(f=>{n(m=>{const w=m.filter(j=>j.id!==f);return requestAnimationFrame(()=>kn(w)),w})},[]),d=x.useCallback(f=>{n(m=>{const w=m.map(j=>j.id===f.id?f:j);return requestAnimationFrame(()=>kn(w)),w})},[]),u=x.useCallback(f=>{r(f),requestAnimationFrame(()=>Qa(f))},[]),c=x.useCallback(()=>{Bc(t,a)},[t,a]),p=x.useCallback(()=>{var f;(f=i.current)==null||f.click()},[]),g=x.useCallback(f=>{var j;const m=(j=f.target.files)==null?void 0:j[0];if(!m)return;const w=new FileReader;w.onload=y=>{var M;const v=(M=y.target)==null?void 0:M.result,S=Hc(v);S?window.confirm(`Import backup from ${new Date(S.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${S.transactions.length} transactions

This action cannot be undone.`)&&(n(S.transactions),r(S.initialBalances),kn(S.transactions),Qa(S.initialBalances)):alert("Invalid backup file.")},w.readAsText(m),f.target.value=""},[]);return{transactions:t,initialBalances:a,addTransaction:s,deleteTransaction:l,updateTransaction:d,saveInitialData:u,handleExport:c,handleImportClick:p,fileInputRef:i,handleFileChange:g}}function ah(){const[t,n]=x.useState("summary"),[[,a],r]=x.useState([0,0]),i=x.useCallback(l=>{const d=ht.findIndex(c=>c.id===l),u=ht.findIndex(c=>c.id===t);r([d,d>u?1:-1]),n(l),window.scrollTo(0,0)},[t]),s=x.useCallback((l,d)=>{const p=ht.findIndex(g=>g.id===t);(d.offset.x<-50||d.velocity.x<-500)&&p<ht.length-1?i(ht[p+1].id):(d.offset.x>50||d.velocity.x>500)&&p>0&&i(ht[p-1].id)},[t,i]);return{activeTab:t,direction:a,handleTabChange:i,handleDragEnd:s}}const js="netfolio-loans",ws="netfolio-partial-payments",ks="netfolio-rate-changes";function Lr(t){localStorage.setItem(js,JSON.stringify(t))}function ih(){const t=localStorage.getItem(js);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Ln(t){localStorage.setItem(ws,JSON.stringify(t))}function oh(){const t=localStorage.getItem(ws);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Pn(t){localStorage.setItem(ks,JSON.stringify(t))}function sh(){const t=localStorage.getItem(ks);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function lh(){const[t,n]=x.useState([]),[a,r]=x.useState([]),[i,s]=x.useState([]);x.useEffect(()=>{n(ih()),r(oh()),s(sh())},[]);const l=x.useCallback(j=>{n(y=>{const v=[...y,j];return requestAnimationFrame(()=>Lr(v)),v})},[]),d=x.useCallback(j=>{n(y=>{const v=y.map(S=>S.id===j.id?j:S);return requestAnimationFrame(()=>Lr(v)),v})},[]),u=x.useCallback(j=>{n(y=>{const v=y.filter(S=>S.id!==j);return requestAnimationFrame(()=>Lr(v)),v}),r(y=>{const v=y.filter(S=>S.loanId!==j);return requestAnimationFrame(()=>Ln(v)),v}),s(y=>{const v=y.filter(S=>S.loanId!==j);return requestAnimationFrame(()=>Pn(v)),v})},[]),c=x.useCallback(j=>{r(y=>{const v=[...y,j];return requestAnimationFrame(()=>Ln(v)),v})},[]),p=x.useCallback(j=>{r(y=>{const v=y.map(S=>S.id===j.id?j:S);return requestAnimationFrame(()=>Ln(v)),v})},[]),g=x.useCallback(j=>{r(y=>{const v=y.filter(S=>S.id!==j);return requestAnimationFrame(()=>Ln(v)),v})},[]),f=x.useCallback(j=>{s(y=>{const v=[...y,j];return requestAnimationFrame(()=>Pn(v)),v})},[]),m=x.useCallback(j=>{s(y=>{const v=y.map(S=>S.id===j.id?j:S);return requestAnimationFrame(()=>Pn(v)),v})},[]),w=x.useCallback(j=>{s(y=>{const v=y.filter(S=>S.id!==j);return requestAnimationFrame(()=>Pn(v)),v})},[]);return{loans:t,partialPayments:a,rateChanges:i,addLoan:l,updateLoan:d,deleteLoan:u,addPartialPayment:c,updatePartialPayment:p,deletePartialPayment:g,addRateChange:f,updateRateChange:m,deleteRateChange:w}}const ch=()=>{const[t,n]=x.useState(Me(new Date)),[a,r]=x.useState(!1),[i,s]=x.useState(null),[l,d]=x.useState(!1),[u,c]=x.useState(null),{transactions:p,initialBalances:g,addTransaction:f,deleteTransaction:m,updateTransaction:w,saveInitialData:j,handleExport:y,handleImportClick:v,fileInputRef:S,handleFileChange:M}=rh(),{loans:D,partialPayments:A,rateChanges:T,addLoan:k,updateLoan:L,deleteLoan:I,addPartialPayment:$,updatePartialPayment:P,deletePartialPayment:H,addRateChange:J,updateRateChange:V,deleteRateChange:C}=lh(),{activeTab:F,direction:Q,handleTabChange:O,handleDragEnd:ie}=ah(),Z=x.useMemo(()=>Fc(p,t,g),[t,p,g]),U=ee=>{f(ee),O("transactions")},je=()=>{switch(F){case"summary":return e.jsx(zu,{balances:Z});case"transactions":return e.jsx(Uu,{transactions:p,selectedDate:t,onEditTransaction:s,onDeleteTransaction:m});case"add":return e.jsx(qu,{onAddTransaction:U,selectedDate:t});case"liabilities":return e.jsx(nh,{loans:D,partialPayments:A,rateChanges:T,selectedDate:t,onAddLoan:()=>d(!0),onEditLoan:c,onDeleteLoan:I,onAddPartialPayment:$,onUpdatePartialPayment:P,onDeletePartialPayment:H,onAddRateChange:J,onUpdateRateChange:V,onDeleteRateChange:C});case"manage":return e.jsx(Ku,{transactionsCount:p.length,onOpenBalanceModal:()=>r(!0),onExport:y,onImport:v});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(Kp,{children:e.jsxs(Xp,{children:[e.jsx(Jp,{children:e.jsx(X0,{selectedDate:t,onDateChange:n})}),e.jsx(ix,{children:ht.map(ee=>e.jsx(ox,{$active:F===ee.id,onClick:()=>O(ee.id),whileTap:{scale:.98},children:ee.label},ee.id))})]})}),e.jsxs(qp,{variants:Qp,initial:"hidden",animate:"visible",children:[e.jsx(ex,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:ie,children:e.jsxs(Ao,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(Zp,{}),e.jsx(tx,{style:{flex:1},children:e.jsx(K,{mode:"wait",custom:Q,children:e.jsx(nx,{custom:Q,variants:Up,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:je()},F)})})]})}),e.jsx(ax,{ref:S,type:"file",accept:".json",onChange:M}),e.jsx(mp,{isOpen:a,onClose:()=>r(!1),initialBalances:g,onSave:j}),e.jsx(wp,{isOpen:!!i,onClose:()=>s(null),transaction:i,onSave:w}),e.jsx(mu,{isOpen:l,onClose:()=>d(!1),onSave:k}),e.jsx(wu,{isOpen:!!u,onClose:()=>c(null),loan:u,onSave:L})]})]})},Ss=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),dh=async(t,n,a,r=48)=>{try{const i=await Ss(),s=Math.min(n,a)*.03,l=n-r-s,d=a-r-s;t.globalAlpha=.7,t.drawImage(i,l,d,r,r),t.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},Jr=(t,n,a)=>{const r=[],i=d=>{const u=[];let c=d;for(;c.length>0;){let p=c.length;for(;p>0&&t.measureText(c.slice(0,p)).width>a;)p--;p=Math.max(1,p);const g=c.slice(0,p),f=g.lastIndexOf("/"),m=g.lastIndexOf("-"),w=g.lastIndexOf(".");let j=p;const y=[f,m,w].filter(v=>v>0&&v<p-1);y.length>0&&(j=Math.max(...y)+1),u.push(c.slice(0,j)),c=c.slice(j)}return u},s=n.split(" ");let l="";for(const d of s)if(t.measureText(d).width>a){l&&(r.push(l),l="");const c=i(d);for(let p=0;p<c.length;p++)p<c.length-1?r.push(c[p]):l=c[p]}else{const c=l?`${l} ${d}`:d;t.measureText(c).width>a&&l?(r.push(l),l=d):l=c}return l&&r.push(l),r},ph=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:i,backgroundColor:s,alignment:l,aspectRatio:d,padding:u}=t,c=document.createElement("canvas");c.width=d.width,c.height=d.height;const p=c.getContext("2d");if(!p)throw new Error("Failed to get canvas context");p.fillStyle=s,p.fillRect(0,0,c.width,c.height);const g=a*(d.width/1080);p.font=`600 ${g}px ${r}`,p.fillStyle=i;const f=u*(d.width/1080),m=c.width-f*2,w=n.split(`
`),j=[];for(const A of w)if(A.trim()==="")j.push("");else{const T=Jr(p,A,m);j.push(...T)}const y=g*1.4,v=j.length*y;let S=(c.height-v)/2+g;p.textAlign=l;let M;switch(l){case"left":M=f;break;case"right":M=c.width-f;break;default:M=c.width/2}for(const A of j)A!==""&&p.fillText(A,M,S),S+=y;const D=Math.min(c.width,c.height)*.06;return await dh(p,c.width,c.height,D),c.toDataURL("image/png",1)},xh=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:i}=t,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const l=s.getContext("2d");if(!l)throw new Error("Failed to get canvas context");const d=a.width/1080,u=a.height>a.width,c=r==="#000000"?"#ffffff":"#000000",p=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";l.fillStyle=r,l.fillRect(0,0,s.width,s.height);const g=64*d,f=s.width-g*2,m=20*d,w=36*d,j=(u?44:40)*d,y=(u?24:22)*d,v=18*d,S=j*1.25,M=y*1.45,D=u?5:4,A=u?4:3;l.font=`700 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`;const T=Jr(l,n.title,f),k=T.slice(0,D);if(T.length>D&&k.length>0){const Y=k[k.length-1];Y.endsWith("...")||(k[k.length-1]=Y.slice(0,-3)+"...")}l.font=`400 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`;const L=n.description?Jr(l,n.description,f):[],I=L.slice(0,A);if(L.length>A&&I.length>0){const Y=I[I.length-1];Y.endsWith("...")||(I[I.length-1]=Y.slice(0,-3)+"...")}const $=w+m,P=k.length*S,H=I.length>0?m+I.length*M:0,J=$+P+H,V=Math.min(s.width,s.height)*.045,C=g+V+16*d,F=s.height-C-g,Q=F-J-m*2;let O=0;if(n.image&&Q>100*d){const Y=u?s.width*.5:s.width*.4,Ie=120*d;O=Math.min(Y,Math.max(Ie,Q))}const ie=O>0?m+O:0,Z=J+ie;let U=g+Math.max(0,(F-Z)/2);if(n.favicon)try{const Y=await io(n.favicon);l.save(),l.beginPath(),l.arc(g+w/2,U+w/2,w/2,0,Math.PI*2),l.closePath(),l.clip(),l.drawImage(Y,g,U,w,w),l.restore()}catch{l.fillStyle=i,l.beginPath(),l.arc(g+w/2,U+w/2,w/2,0,Math.PI*2),l.fill()}n.siteName&&(l.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=p,l.textAlign="left",l.textBaseline="middle",l.fillText(n.siteName,g+w+10*d,U+w/2)),U+=w+m,l.font=`700 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=c,l.textAlign="left",l.textBaseline="top";for(const Y of k)l.fillText(Y,g,U),U+=S;if(I.length>0){U+=m,l.font=`400 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`,l.fillStyle=p;for(const Y of I)l.fillText(Y,g,U),U+=M}if(n.image&&O>0){U+=m;try{const Y=await io(n.image),Ie=f;l.save(),uh(l,g,U,Ie,O,10*d),l.clip();const at=Y.width/Y.height,Ne=Ie/O;let Ce=0,bt=0,it=Y.width,Qe=Y.height;at>Ne?(it=Y.height*Ne,Ce=(Y.width-it)/2):(Qe=Y.width/Ne,bt=(Y.height-Qe)/2),l.drawImage(Y,Ce,bt,it,Qe,g,U,Ie,O),l.restore()}catch{}}const je=s.height-g;l.font=`500 ${v}px -apple-system, BlinkMacSystemFont, monospace`,l.fillStyle=i;const ee=f-V-16*d;let Se=n.url;for(;l.measureText(Se).width>ee&&Se.length>20;)Se=Se.slice(0,-4)+"...";l.textAlign="left",l.textBaseline="middle",l.fillText(Se,g,je-V/2);try{const Y=await Ss();l.globalAlpha=.7,l.drawImage(Y,s.width-g-V,je-V,V,V),l.globalAlpha=1}catch{}return s.toDataURL("image/png",1)},io=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),uh=(t,n,a,r,i,s)=>{t.beginPath(),t.moveTo(n+s,a),t.lineTo(n+r-s,a),t.quadraticCurveTo(n+r,a,n+r,a+s),t.lineTo(n+r,a+i-s),t.quadraticCurveTo(n+r,a+i,n+r-s,a+i),t.lineTo(n+s,a+i),t.quadraticCurveTo(n,a+i,n,a+i-s),t.lineTo(n,a+s),t.quadraticCurveTo(n,a,n+s,a),t.closePath()},hh=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},fh=async t=>{var i,s;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const l=`https://api.microlink.io?url=${encodeURIComponent(t)}`,d=await fetch(l);if(!d.ok)return r;const u=await d.json();return u.status==="success"&&u.data?{title:u.data.title||a,description:u.data.description||"",image:((i=u.data.image)==null?void 0:i.url)||null,siteName:u.data.publisher||a,url:t,favicon:((s=u.data.logo)==null?void 0:s.url)||r.favicon}:r}catch(l){return console.warn("Failed to fetch URL metadata:",l),r}},oo=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],gh='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',mh=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},yh=o.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,vh=o.div`
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
`,bh=o.div`
  width: 100%;
  max-width: 600px;
`,jh=o.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,wh=o.div`
  position: absolute;
  inset: 0;
`,kh=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,Sh=o(b.div)`
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
`,$h=o.div`
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
`,Ch=o.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,on=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,sn=o.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,Th=o.textarea`
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
`,so=o.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,lo=o.button`
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
`,Dh=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Mh=o.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,Ih=o.input`
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
`,Ah=o.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,Lh=o(b.button)`
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
`,Ph=o(b.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Oh=o.input`
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
`,Eh=o.textarea`
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
`,Fh=o(b.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,_h=o(b.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,Nh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),Rh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),zh=()=>{const{isDark:t}=ta(),[n,a]=x.useState(""),[r,i]=x.useState(64),[s,l]=x.useState("left"),[d,u]=x.useState(oo[1]),[c,p]=x.useState(null),[g,f]=x.useState(!1),[m,w]=x.useState(null),[j,y]=x.useState(""),[v,S]=x.useState(""),[M,D]=x.useState(!1),[A,T]=x.useState(null),k=x.useMemo(()=>mh(n),[n]),L=t?"#000000":"#ffffff",I=t?"#ffffff":"#000000",$=`${d.height/d.width*100}%`,P=x.useCallback(async()=>{if(!(!k||!n.trim())){D(!0),T(null),p(null);try{const C=await fh(n.trim());w(C),y(C.title),S(C.description)}catch{T("Unable to fetch URL preview")}D(!1)}},[n,k]),H=x.useCallback(async()=>{if(!n.trim()||k){k||p(null);return}f(!0);try{const C=await ph({text:n.trim(),fontSize:r,fontFamily:gh,textColor:I,backgroundColor:L,alignment:s,aspectRatio:d,padding:80});p(C)}catch(C){console.error("Preview generation failed:",C)}f(!1)},[n,k,r,s,d,L,I]),J=x.useCallback(async()=>{if(m){f(!0);try{const C=await xh({metadata:{...m,title:j||m.title,description:v||m.description},aspectRatio:d,backgroundColor:L,accentColor:"#2A9D8F"});p(C)}catch(C){console.error("URL preview generation failed:",C)}f(!1)}},[m,j,v,d,L]);x.useEffect(()=>{if(k)return;const C=setTimeout(H,200);return()=>clearTimeout(C)},[H,k]),x.useEffect(()=>{k?P():(w(null),y(""),S(""),T(null))},[k,P]),x.useEffect(()=>{m&&J()},[m,j,v,d,J]);const V=()=>{if(c){const Q=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;hh(c,Q)}};return e.jsxs(yh,{children:[e.jsx(vh,{children:e.jsx(bh,{children:e.jsx(jh,{$bgColor:L,$paddingBottom:$,children:e.jsxs(wh,{children:[c&&e.jsx(kh,{src:c,alt:"Preview"}),e.jsx(K,{children:!c&&e.jsxs(Sh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(Rh,{}),e.jsx("span",{children:k?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx($h,{children:e.jsxs(Ch,{children:[e.jsxs(on,{children:[e.jsx(sn,{children:"Content"}),e.jsx(Th,{value:n,onChange:C=>a(C.target.value),onContextMenu:C=>C.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),k?e.jsxs(e.Fragment,{children:[M&&e.jsx(on,{style:{alignItems:"center"},children:e.jsx(_h,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),A&&e.jsx(Fh,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:A}),m&&e.jsxs(Ph,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(sn,{children:"Edit Details"}),e.jsx(Oh,{value:j,onChange:C=>y(C.target.value),placeholder:"Title"}),e.jsx(Eh,{value:v,onChange:C=>S(C.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(on,{children:[e.jsx(sn,{children:"Font Size"}),e.jsxs(Dh,{children:[e.jsx(Mh,{children:e.jsx(Ih,{type:"range",min:"24",max:"120",value:r,onChange:C=>i(Number(C.target.value))})}),e.jsx(Ah,{children:r})]})]}),e.jsxs(on,{children:[e.jsx(sn,{children:"Alignment"}),e.jsx(so,{children:["left","center","right"].map(C=>e.jsx(lo,{$active:s===C,onClick:()=>l(C),children:C.charAt(0).toUpperCase()+C.slice(1)},C))})]})]}),e.jsxs(on,{children:[e.jsx(sn,{children:"Format"}),e.jsx(so,{children:oo.map(C=>e.jsx(lo,{$active:d.id===C.id,onClick:()=>u(C),children:C.name},C.id))})]}),e.jsxs(Lh,{onClick:V,disabled:!c||g,whileTap:{scale:.98},children:[e.jsx(Nh,{}),"Download Image"]})]})})]})},Bh=o(b.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,Wh={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},Hh=()=>e.jsx(Bh,{variants:Wh,initial:"hidden",animate:"visible",children:e.jsx(zh,{})}),h={bg:"#FFF8F0",bgAlt:"#FDE8EE",card:"#FFFFFF",cardBorder:"rgba(196, 69, 105, 0.10)",textPrimary:"#2D1B30",textSecondary:"#6B4D5E",textMuted:"#B8929E",accent:"#C44569",accentSoft:"#E8758A",blush:"#F5C6D0",softPink:"#FDE8EE",warmGold:"#C9956B",gold:"#E8C496",goldLight:"#F5E6D0",lavender:"#F0E6F6"},E={display:"'Playfair Display', Georgia, serif",body:"'Cormorant Garamond', 'Times New Roman', serif",script:"'Dancing Script', cursive"},$s="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",G={gentle:[.25,.1,.25,1],cinematic:[.16,1,.3,1]},Yh=Co`
  @import url('${$s}');
`,Gh=N`
  0%, 100% { transform: translateY(0) rotate(-8deg); }
  50% { transform: translateY(-18px) rotate(4deg); }
`,Vh=N`
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-14px) rotate(-6deg); }
`,Qh=o.div`
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(165deg, ${h.bg} 0%, ${h.bgAlt} 45%, ${h.bg} 100%);
  color: ${h.textPrimary};
  font-family: ${E.body};
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
`,mt=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),Uh=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  color: ${h.blush};
  opacity: 0.18;
  pointer-events: none;
  animation: ${t=>t.$anim==="a"?Gh:Vh} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;

  svg {
    width: 100%;
    height: 100%;
  }
`,qh=[{x:"6%",y:"8%",size:38,anim:"a",dur:9,delay:0},{x:"88%",y:"14%",size:26,anim:"b",dur:11,delay:2},{x:"12%",y:"78%",size:30,anim:"b",dur:10,delay:1},{x:"82%",y:"72%",size:22,anim:"a",dur:8,delay:3},{x:"48%",y:"3%",size:18,anim:"a",dur:12,delay:5},{x:"93%",y:"46%",size:32,anim:"b",dur:9,delay:4},{x:"3%",y:"42%",size:20,anim:"a",dur:10,delay:6},{x:"72%",y:"90%",size:24,anim:"b",dur:11,delay:2}],Kh=()=>e.jsx(e.Fragment,{children:qh.map((t,n)=>e.jsx(Uh,{$x:t.x,$y:t.y,$size:t.size,$anim:t.anim,$dur:t.dur,$delay:t.delay,children:e.jsx(mt,{})},n))}),Xh=o(b.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Jh=o(b.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`,Zh=o(b.button)`
  font-family: ${E.body};
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.03em;
  color: ${h.accent};
  background: ${h.card};
  border: 1.5px solid ${h.blush};
  padding: 16px 44px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 4px 20px rgba(196, 69, 105, 0.12);
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.2s ease;

  &:hover {
    border-color: ${h.accent};
    box-shadow: 0 6px 28px rgba(196, 69, 105, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,xn=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${h.blush};
  margin: 24px 0;

  &::before, &::after {
    content: '';
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${h.blush}, transparent);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,ef={enter:{opacity:0},center:{opacity:1,transition:{duration:1,ease:[.25,.1,.25,1]}},exit:{opacity:0,transition:{duration:.6,ease:[.25,.1,.25,1]}}},tf=o.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;function nf(t,n,a,r){t.save(),t.translate(n,a);const i=r/2;t.beginPath(),t.moveTo(0,i*.4),t.bezierCurveTo(-i*.05,-i*.2,-i*.7,-i*.4,-i*.7,i*.05),t.bezierCurveTo(-i*.7,i*.4,0,i*.7,0,i),t.bezierCurveTo(0,i*.7,i*.7,i*.4,i*.7,i*.05),t.bezierCurveTo(i*.7,-i*.4,i*.05,-i*.2,0,i*.4),t.closePath(),t.fill(),t.restore()}function rf(t,n,a,r){const i=r/2,s=i*.3;t.beginPath();for(let l=0;l<4;l++){const d=l*Math.PI/2;t.lineTo(n+Math.cos(d)*i,a+Math.sin(d)*i);const u=d+Math.PI/4;t.lineTo(n+Math.cos(u)*s,a+Math.sin(u)*s)}t.closePath(),t.fill()}const co=[h.accent,h.accentSoft,h.blush,h.warmGold,h.gold];function po(t,n,a){const r=co[Math.floor(Math.random()*co.length)],i=Math.random()>.55;if(t==="ambient")return{x:Math.random()*n,y:a+20,vx:(Math.random()-.5)*.5,vy:-(Math.random()*.8+.3),size:Math.random()*14+6,opacity:Math.random()*.35+.15,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.02,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*500+350};if(t==="burst"){const s=Math.random()*Math.PI*2,l=Math.random()*5+2;return{x:n/2,y:a/2,vx:Math.cos(s)*l,vy:Math.sin(s)*l,size:Math.random()*18+8,opacity:.9,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.06,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*100+60}}return{x:Math.random()*n,y:-20,vx:(Math.random()-.5)*1.2,vy:Math.random()*1.8+.8,size:Math.random()*20+8,opacity:Math.random()*.5+.25,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-.5)*.03,color:r,type:i?"sparkle":"heart",life:0,maxLife:Math.random()*350+200}}const _e=({mode:t,density:n})=>{const a=x.useRef(null);return x.useEffect(()=>{const r=a.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let s,l=[];const d=n??(t==="ambient"?30:t==="burst"?70:90),u=t==="ambient"?.2:t==="burst"?0:.7,c=()=>{const g=window.devicePixelRatio||1;r.width=r.offsetWidth*g,r.height=r.offsetHeight*g,i.setTransform(g,0,0,g,0,0)};if(c(),window.addEventListener("resize",c),t==="burst")for(let g=0;g<d;g++)l.push(po("burst",r.offsetWidth,r.offsetHeight));const p=()=>{i.clearRect(0,0,r.offsetWidth,r.offsetHeight),t!=="burst"&&l.length<d&&Math.random()<u&&l.push(po(t,r.offsetWidth,r.offsetHeight));for(let g=l.length-1;g>=0;g--){const f=l[g];f.x+=f.vx,f.y+=f.vy,f.rotation+=f.rotationSpeed,f.life++,t==="burst"&&(f.vx*=.96,f.vy*=.96,f.vy+=.04);const m=f.life/f.maxLife,w=m>.7?f.opacity*(1-(m-.7)/.3):f.opacity;if(f.life>=f.maxLife){l.splice(g,1);continue}i.save(),i.globalAlpha=Math.max(0,w),i.fillStyle=f.color,i.translate(f.x,f.y),i.rotate(f.rotation),f.type==="heart"?nf(i,0,0,f.size):(i.shadowBlur=f.size*.8,i.shadowColor=f.color,rf(i,0,0,f.size*.5)),i.restore()}s=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(s),window.removeEventListener("resize",c)}},[t,n]),e.jsx(tf,{ref:a})},Cs=22,Ts=.88,un=Cs*Ts,af=N`
  0% { transform: translateX(0); }
  ${Ts*100}% { transform: translateX(-160px); }
  100% { transform: translateX(-160px); }
`,xo=N`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
`,of=N`
  0%, 100% { transform: scaleX(1) skewX(0deg); }
  30% { transform: scaleX(1.05) skewX(3deg); }
  70% { transform: scaleX(0.95) skewX(-2deg); }
`,sf=N`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-12deg); }
  75% { transform: rotate(12deg); }
`,lf=N`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(12deg); }
  75% { transform: rotate(-12deg); }
`,cf=N`
  0% { transform: translateX(500px); }
  100% { transform: translateX(-500px); }
`,df=o.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%) perspective(600px) rotateX(2deg);
  width: min(94vw, 520px);
  height: 240px;
  pointer-events: none;
  z-index: 0;
`,pf=o.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: drop-shadow(0 4px 12px rgba(45, 27, 48, 0.08));
`,xf=o.g`
  animation: ${af} ${Cs}s cubic-bezier(0.22, 0.6, 0.36, 1) forwards;
`,uf=o.g`
  animation: ${xo} 0.6s ease-in-out;
  animation-duration: ${un}s;
  animation-timing-function: ease-in-out;
  animation-name: ${xo};
  animation-iteration-count: ${Math.floor(un/.6)};
  animation-fill-mode: forwards;
`,hf=o.g`
  animation: ${of} 0.8s ease-in-out;
  animation-iteration-count: ${Math.floor(un/.8)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,ff=o.g`
  animation: ${sf} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(un/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,gf=o.g`
  animation: ${lf} 0.6s ease-in-out;
  animation-iteration-count: ${Math.floor(un/.6)};
  animation-fill-mode: forwards;
  transform-origin: 0 0;
`,mf=o.g`
  animation: ${cf} 14s linear 5s forwards;
`,He=h.accent,we=h.warmGold,re=h.textMuted,ge=h.blush,yf=({storyDone:t})=>e.jsx(df,{style:{opacity:t?0:.55,transition:"opacity 1.5s ease"},children:e.jsxs(pf,{viewBox:"0 0 520 240",fill:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:h.softPink,stopOpacity:"0.15"}),e.jsx("stop",{offset:"100%",stopColor:h.bgAlt,stopOpacity:"0.05"})]}),e.jsxs("linearGradient",{id:"platform",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:re,stopOpacity:"0.6"}),e.jsx("stop",{offset:"100%",stopColor:re,stopOpacity:"0.35"})]}),e.jsxs("linearGradient",{id:"canopy",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:re,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:ge,stopOpacity:"0.2"})]}),e.jsxs("linearGradient",{id:"pillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:re,stopOpacity:"0.5"}),e.jsx("stop",{offset:"50%",stopColor:re,stopOpacity:"0.35"}),e.jsx("stop",{offset:"100%",stopColor:re,stopOpacity:"0.5"})]}),e.jsxs("linearGradient",{id:"trainBody",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:we,stopOpacity:"0.7"}),e.jsx("stop",{offset:"100%",stopColor:h.gold,stopOpacity:"0.4"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"blur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("rect",{x:"0",y:"0",width:"520",height:"240",fill:"url(#sky)"}),e.jsx("rect",{x:"5",y:"40",width:"36",height:"80",rx:"2",fill:re,opacity:"0.18"}),e.jsx("rect",{x:"12",y:"48",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.15"}),e.jsx("rect",{x:"22",y:"48",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.12"}),e.jsx("rect",{x:"12",y:"62",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.1"}),e.jsx("rect",{x:"46",y:"55",width:"28",height:"65",rx:"2",fill:re,opacity:"0.15"}),e.jsx("rect",{x:"52",y:"62",width:"6",height:"8",rx:"1",fill:ge,opacity:"0.12"}),e.jsx("rect",{x:"80",y:"28",width:"32",height:"92",rx:"2",fill:re,opacity:"0.2"}),e.jsx("rect",{x:"86",y:"36",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.15"}),e.jsx("rect",{x:"98",y:"36",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.12"}),e.jsx("rect",{x:"86",y:"52",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.1"}),e.jsx("rect",{x:"98",y:"52",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.13"}),e.jsx("rect",{x:"410",y:"42",width:"30",height:"78",rx:"2",fill:re,opacity:"0.18"}),e.jsx("rect",{x:"416",y:"50",width:"7",height:"9",rx:"1",fill:ge,opacity:"0.12"}),e.jsx("rect",{x:"427",y:"50",width:"7",height:"9",rx:"1",fill:ge,opacity:"0.1"}),e.jsx("rect",{x:"446",y:"30",width:"38",height:"90",rx:"2",fill:re,opacity:"0.22"}),e.jsx("rect",{x:"452",y:"38",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.15"}),e.jsx("rect",{x:"464",y:"38",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.12"}),e.jsx("rect",{x:"452",y:"54",width:"8",height:"10",rx:"1",fill:ge,opacity:"0.1"}),e.jsx("rect",{x:"490",y:"58",width:"24",height:"62",rx:"2",fill:re,opacity:"0.15"}),e.jsxs(mf,{children:[e.jsx("rect",{x:"0",y:"68",width:"160",height:"38",rx:"10",fill:"url(#trainBody)"}),e.jsx("rect",{x:"0",y:"68",width:"160",height:"6",rx:"3",fill:we,opacity:"0.4"}),[0,1,2,3,4,5].map(n=>e.jsx("rect",{x:12+n*26,y:"78",width:"18",height:"18",rx:"3",fill:h.goldLight,opacity:"0.5"},n)),e.jsx("rect",{x:"0",y:"100",width:"160",height:"4",rx:"2",fill:re,opacity:"0.3"})]}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",fill:"url(#canopy)"}),e.jsx("path",{d:"M100 82 Q140 48, 260 42 Q380 48, 420 82",stroke:re,strokeWidth:"3",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M105 82 Q145 52, 260 46 Q375 52, 415 82",stroke:ge,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("rect",{x:"128",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"60",width:"12",height:"90",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"382",y:"78",width:"10",height:"72",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"14",rx:"4",fill:"url(#platform)"}),e.jsx("rect",{x:"95",y:"162",width:"330",height:"3",rx:"1",fill:re,opacity:"0.15"}),e.jsx("rect",{x:"90",y:"148",width:"340",height:"3",rx:"1",fill:we,opacity:"0.3"}),e.jsx("rect",{x:"140",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"254",y:"162",width:"14",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("rect",{x:"368",y:"162",width:"12",height:"56",rx:"2",fill:"url(#pillar)"}),e.jsx("line",{x1:"100",y1:"132",x2:"420",y2:"132",stroke:re,strokeWidth:"1.5",opacity:"0.25"}),[0,1,2,3,4,5,6,7].map(n=>e.jsx("line",{x1:120+n*38,y1:"132",x2:120+n*38,y2:"148",stroke:re,strokeWidth:"1",opacity:"0.2"},`r${n}`)),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",fill:h.card,opacity:"0.55"}),e.jsx("rect",{x:"200",y:"46",width:"120",height:"28",rx:"5",stroke:we,strokeWidth:"1.5",fill:"none",opacity:"0.4"}),e.jsx("text",{x:"260",y:"65",textAnchor:"middle",fontFamily:"sans-serif",fontSize:"13",fontWeight:"700",letterSpacing:"3",fill:He,opacity:"0.7",children:"MG ROAD"}),e.jsx("rect",{x:"0",y:"218",width:"520",height:"22",rx:"0",fill:re,opacity:"0.08"}),e.jsx("line",{x1:"0",y1:"218",x2:"520",y2:"218",stroke:re,strokeWidth:"1",opacity:"0.2"}),e.jsxs("g",{transform:"translate(195, 78)",children:[e.jsx("ellipse",{cx:"0",cy:"70",rx:"12",ry:"3",fill:re,opacity:"0.18"}),e.jsx("circle",{cx:"0",cy:"0",r:"9",fill:He}),e.jsx("path",{d:"M-8,-5 Q-9,-10 -3,-12 Q3,-13 8,-9 Q10,-5 8,-3",fill:He,opacity:"0.8"}),e.jsx("rect",{x:"-3",y:"8",width:"6",height:"6",rx:"1",fill:He}),e.jsx("path",{d:"M-14,14 Q-15,36 -10,48 L10,48 Q15,36 14,14 Z",fill:He,opacity:"0.9"}),e.jsx("path",{d:"M-14,16 Q-20,30 -16,42",stroke:He,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M14,16 Q18,28 17,38",stroke:He,strokeWidth:"4.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M-6,48 L-8,70",stroke:He,strokeWidth:"5.5",strokeLinecap:"round"}),e.jsx("path",{d:"M6,48 L7,70",stroke:He,strokeWidth:"5.5",strokeLinecap:"round"})]}),e.jsx(xf,{children:e.jsx(uf,{children:e.jsxs("g",{transform:"translate(400, 98)",children:[e.jsx("ellipse",{cx:"0",cy:"50",rx:"9",ry:"3",fill:re,opacity:"0.15"}),e.jsxs(hf,{children:[e.jsx("path",{d:"M-5,-6 Q-8,-10 -4,-12 Q2,-13 6,-10 Q8,-6 7,-3",fill:we}),e.jsx("path",{d:"M5,-4 Q10,0 12,10 Q11,18 8,13 Q7,7 5,2",fill:we,opacity:"0.65"}),e.jsx("path",{d:"M7,-3 Q13,3 15,14 Q13,20 10,11",fill:we,opacity:"0.4"})]}),e.jsx("circle",{cx:"0",cy:"0",r:"7.5",fill:we}),e.jsx("rect",{x:"-1.5",y:"7",width:"3",height:"3",rx:"1",fill:we}),e.jsx("path",{d:"M-8,10 Q-10,18 -8,26 L-3,31 L3,31 L8,26 Q10,18 8,10 Z",fill:we,opacity:"0.85"}),e.jsx("path",{d:"M-3,29 Q-5,37 -12,50 L12,50 Q5,37 3,29 Z",fill:we,opacity:"0.65"}),e.jsx(ff,{children:e.jsx("path",{d:"M-8,12 Q-13,20 -11,28",stroke:we,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})}),e.jsx(gf,{children:e.jsx("path",{d:"M8,12 Q12,20 10,26",stroke:we,strokeWidth:"3.5",strokeLinecap:"round",fill:"none"})})]})})})]})}),vf=N`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,bf=N`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`,jf=N`
  0% { transform: translateY(0) scale(1); opacity: 0.25; }
  50% { opacity: 0.4; }
  100% { transform: translateY(-100vh) scale(0.6); opacity: 0; }
`,wf=N`
  0%, 100% { opacity: 0.15; transform: scale(0.8); }
  50% { opacity: 0.6; transform: scale(1.2); }
`,kf=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Sf=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 45%, ${h.blush}50 0%, transparent 100%),
    radial-gradient(ellipse 70% 50% at 30% 20%, ${h.softPink}30 0%, transparent 100%),
    radial-gradient(ellipse 60% 40% at 75% 75%, ${h.goldLight}30 0%, transparent 100%);
`,$f=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50%;
  background: ${t=>t.$color};
  filter: blur(${t=>t.$size*.4}px);
  animation: ${bf} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,Cf=[{x:"15%",y:"20%",size:120,color:`${h.blush}40`,dur:7,delay:0},{x:"75%",y:"15%",size:90,color:`${h.softPink}35`,dur:9,delay:2},{x:"60%",y:"70%",size:110,color:`${h.goldLight}30`,dur:8,delay:1},{x:"20%",y:"75%",size:80,color:`${h.blush}30`,dur:10,delay:3},{x:"50%",y:"40%",size:160,color:`${h.softPink}20`,dur:6,delay:.5},{x:"85%",y:"50%",size:70,color:`${h.goldLight}25`,dur:11,delay:4},{x:"8%",y:"45%",size:60,color:`${h.lavender}25`,dur:8,delay:2}],Tf=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: -20px;
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  border-radius: 50% 0 50% 0;
  background: ${h.blush};
  opacity: 0.25;
  animation: ${jf} ${t=>t.$dur}s linear ${t=>t.$delay}s infinite;
  pointer-events: none;
`,Df=[{x:"10%",size:10,dur:12,delay:0},{x:"25%",size:8,dur:14,delay:3},{x:"42%",size:12,dur:11,delay:1},{x:"58%",size:7,dur:15,delay:5},{x:"72%",size:9,dur:13,delay:2},{x:"88%",size:11,dur:12,delay:4},{x:"35%",size:6,dur:16,delay:7},{x:"65%",size:8,dur:14,delay:6}],Mf=o.div`
  position: absolute;
  left: ${t=>t.$x};
  top: ${t=>t.$y};
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${h.warmGold};
  box-shadow: 0 0 6px 2px ${h.warmGold}60;
  animation: ${wf} ${t=>t.$dur}s ease-in-out ${t=>t.$delay}s infinite;
  pointer-events: none;
`,If=[{x:"12%",y:"18%",dur:3,delay:0},{x:"82%",y:"12%",dur:4,delay:1.5},{x:"22%",y:"82%",dur:3.5,delay:.5},{x:"72%",y:"78%",dur:4.5,delay:2},{x:"48%",y:"8%",dur:3,delay:1},{x:"90%",y:"42%",dur:5,delay:3},{x:"5%",y:"55%",dur:3.5,delay:.8},{x:"65%",y:"25%",dur:4,delay:2.5},{x:"38%",y:"92%",dur:3,delay:1.2},{x:"55%",y:"60%",dur:4.5,delay:.3}],Af=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  width: 100%;
`,Lf=o.div`
  position: relative;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pf=o(b.div)`
  position: absolute;
  font-family: ${E.body};
  font-size: clamp(22px, 5.2vw, 32px);
  font-weight: 500;
  color: ${h.textPrimary};
  line-height: 1.55;
  max-width: 520px;
  padding: 0 20px;
`,Pr=o.span`
  color: ${h.accent};
  font-family: ${E.display};
  font-style: italic;
  font-weight: 600;
`,On=o.span`
  color: ${h.warmGold};
  font-family: ${E.script};
  font-size: 1.15em;
`,Of=o.span`
  color: ${h.textSecondary};
  font-style: italic;
`,Ef=N`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(2.5); }
`,Ff=N`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`,_f=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,Nf=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, ${h.warmGold}50 0%, ${h.accent}20 40%, transparent 70%);
  animation: ${Ef} 1.8s ease-out forwards;
  animation-play-state: ${t=>t.$visible?"running":"paused"};
  opacity: 0;
  pointer-events: none;
`,Rf=o(b.div)`
  font-family: ${E.display};
  font-size: clamp(64px, 16vw, 110px);
  font-weight: 600;
  font-style: italic;
  color: ${h.accent};
  text-shadow:
    0 0 40px ${h.accent}30,
    0 4px 20px ${h.accent}15;
  position: relative;
`,zf=o(b.div)`
  width: 80%;
  height: 2px;
  margin-top: 4px;
  background: linear-gradient(90deg, transparent, ${h.warmGold}, transparent);
  transform-origin: center;
  animation: ${Ff} 0.8s ease-out forwards;
`,Bf=o(b.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${h.warmGold}40 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${vf} 3s ease-in-out infinite;
  -webkit-background-clip: text;
  background-clip: text;
  mix-blend-mode: overlay;
  pointer-events: none;
`,Wf=N`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Hf=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`,Yf=o(b.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(260px, 70vw, 400px);
  height: clamp(100px, 25vw, 160px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    ${h.warmGold}28 0%,
    ${h.goldLight}15 40%,
    ${h.blush}08 65%,
    transparent 100%
  );
  pointer-events: none;
`,Gf=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 clamp(8px, 2vw, 14px);
  position: relative;
`,uo=o(b.span)`
  font-family: ${E.body};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: 400;
  font-style: italic;
  color: ${h.textSecondary};
  line-height: 1.4;
`,Vf=o(b.span)`
  font-family: ${E.display};
  font-size: clamp(40px, 10vw, 64px);
  font-weight: 700;
  font-style: italic;
  background: linear-gradient(
    90deg,
    ${h.warmGold} 0%,
    ${h.gold} 25%,
    #f5d5a0 50%,
    ${h.gold} 75%,
    ${h.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Wf} 4s linear infinite;
  filter: drop-shadow(0 2px 16px ${h.warmGold}30);
  line-height: 1.2;
`,Qf=o(b.span)`
  font-family: ${E.body};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 400;
  font-style: italic;
  color: ${h.textMuted};
  margin-top: 8px;
  letter-spacing: 0.04em;
`,Uf=o(b.div)`
  width: clamp(100px, 30vw, 180px);
  height: 1.5px;
  margin-top: 6px;
  background: linear-gradient(90deg, transparent, ${h.warmGold}50, transparent);
  transform-origin: center;
`,qf=N`
  0%, 100% {
    filter: drop-shadow(0 0 12px ${h.accent}40);
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 28px ${h.accent}70);
    transform: scale(1.08);
  }
`,Kf=o(b.button)`
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
`,Xf=o.div`
  width: 56px;
  height: 56px;
  color: ${h.accent};
  animation: ${qf} 2.5s ease-in-out infinite;

  svg { width: 100%; height: 100%; }
`,Jf=o.span`
  font-family: ${E.body};
  font-size: clamp(16px, 3.5vw, 20px);
  font-weight: 500;
  color: ${h.textMuted};
  letter-spacing: 0.08em;
`,Or=[e.jsxs(e.Fragment,{children:["Twelve years ago,",e.jsx("br",{}),"a boy met an ",e.jsx(Pr,{children:"angel"}),"..."]}),e.jsxs(e.Fragment,{children:["She was ",e.jsx(On,{children:"grace"}),", ",e.jsx(On,{children:"beauty"}),",",e.jsx("br",{}),"and everything he could never be."]}),e.jsxs(e.Fragment,{children:["She didn't just love him —",e.jsx("br",{}),"she ",e.jsx(Pr,{children:"made"})," him who he is."]}),e.jsxs(e.Fragment,{children:["His ",e.jsx(On,{children:"strength"}),". His ",e.jsx(On,{children:"inspiration"}),".",e.jsx("br",{}),"His ",e.jsx(Pr,{children:"everything"}),"."]}),e.jsx(e.Fragment,{children:e.jsx(Of,{children:"Maa was right all along..."})})],ho=4500,fo=1e3,Zf=({onComplete:t})=>{const[n,a]=x.useState(-1),[r,i]=x.useState(!1),[s,l]=x.useState(0);return x.useEffect(()=>{const d=[];d.push(setTimeout(()=>a(0),800));for(let c=1;c<Or.length;c++)d.push(setTimeout(()=>a(c),800+c*ho));const u=800+Or.length*ho;return d.push(setTimeout(()=>{a(-1),i(!0)},u)),()=>d.forEach(clearTimeout)},[]),e.jsxs(kf,{children:[e.jsx(Sf,{}),Cf.map((d,u)=>e.jsx($f,{$x:d.x,$y:d.y,$size:d.size,$color:d.color,$dur:d.dur,$delay:d.delay},`b${u}`)),Df.map((d,u)=>e.jsx(Tf,{$x:d.x,$size:d.size,$dur:d.dur,$delay:d.delay},`p${u}`)),If.map((d,u)=>e.jsx(Mf,{$x:d.x,$y:d.y,$dur:d.dur,$delay:d.delay},`s${u}`)),e.jsx(_e,{mode:"ambient",density:40}),e.jsx(yf,{storyDone:r}),e.jsxs(Af,{children:[e.jsx(Lf,{style:{opacity:r?0:1,transition:`opacity ${fo}ms ease`},children:Or.map((d,u)=>e.jsx(Pf,{initial:{opacity:0,y:16,scale:.96},animate:{opacity:n===u?1:0,y:n===u?0:n>u?-16:16,scale:n===u?1:.96},transition:{duration:fo/1e3,ease:G.cinematic},children:d},u))}),e.jsxs(_f,{children:[e.jsx(Nf,{$visible:r}),e.jsxs(Rf,{initial:{opacity:0,scale:1.3,filter:"blur(16px)"},animate:{opacity:r?1:0,scale:r?1:1.3,filter:r?"blur(0px)":"blur(16px)"},transition:{duration:1.6,ease:G.cinematic,delay:r?.3:0},onAnimationComplete:()=>{r&&s===0&&setTimeout(()=>l(1),500)},children:["Riya",r&&e.jsx(Bf,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8}})]}),r&&e.jsx(zf,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.3}})]}),e.jsx(b.div,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,ease:G.gentle},children:e.jsx(xn,{children:e.jsx(mt,{})})}),e.jsxs(Hf,{children:[e.jsx(Yf,{initial:{opacity:0,scale:.5},animate:{opacity:s>=1?.35:0,scale:s>=1?1.1:.5},transition:{duration:2,ease:G.cinematic}}),e.jsxs(Gf,{children:[e.jsx(uo,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:G.cinematic,delay:(s>=1,0)},children:"You are"}),e.jsx(uo,{initial:{opacity:0,y:12},animate:{opacity:s>=1?1:0,y:s>=1?0:12},transition:{duration:1,ease:G.cinematic,delay:s>=1?.4:0},children:"my"})]}),e.jsx(Vf,{initial:{opacity:0,scale:.7,filter:"blur(8px)"},animate:{opacity:s>=1?1:0,scale:s>=1?1:.7,filter:s>=1?"blur(0px)":"blur(8px)"},transition:{duration:1.4,ease:G.cinematic,delay:s>=1?.8:0},onAnimationComplete:()=>{s===1&&setTimeout(()=>l(2),800)},children:"Luck"}),e.jsx(Uf,{initial:{opacity:0,scaleX:0},animate:{opacity:s>=1?1:0,scaleX:s>=1?1:0},transition:{duration:.8,ease:G.gentle,delay:s>=1?1.6:0}}),e.jsx(Qf,{initial:{opacity:0},animate:{opacity:s>=1?1:0},transition:{duration:1,delay:s>=1?2:0},children:"— what Maa always said"})]}),e.jsxs(Kf,{initial:{opacity:0,y:20},animate:{opacity:s>=2?1:0,y:s>=2?0:20},transition:{duration:.8,ease:G.gentle},onClick:t,style:{pointerEvents:s>=2?"auto":"none"},children:[e.jsx(Xf,{children:e.jsx(mt,{})}),e.jsx(Jf,{children:"tap to open"})]})]})]})},ln=[{question:"What year did our story begin?",options:["2013","2014","2015","2016"],correctIndex:1,correctReaction:"Of course you remember. How could you forget?",wrongReaction:"Riya... it's literally the reason this page exists."},{question:"What month did I propose?",options:["January","March","June","December"],correctIndex:1,correctReaction:"March 19th. The best decision I ever made.",wrongReaction:"I'm going to pretend you didn't just say that."},{question:"What was the first movie we watched together?",options:["Queen","Highway","Gunday","2 States"],correctIndex:1,correctReaction:"Highway. Alia, the mountains, and us — just beginning.",wrongReaction:"Hmm, I think your memory needs a little love. It was Highway!"},{question:"What was the first meal I cooked for you?",options:["Maggi","Aloo Paratha","Dal Chawal","Pasta"],correctIndex:1,correctReaction:"Aloo Paratha. Made with love and a little too much oil.",wrongReaction:"It was Aloo Paratha, Riya. The one I was so nervous making!"},{question:"What's my most annoying habit that you secretly love?",options:["Overthinking","Being early","Bad jokes","All of the above"],correctIndex:3,correctReaction:"The fact that you love all of it makes me love you more.",wrongReaction:"Oh come on — it's all of them and you know it."},{question:"How many years has it been today?",options:["10","11","12","Who's counting?"],correctIndex:2,correctReaction:"12 years. And somehow it still feels brand new.",wrongReaction:"12, Riya. TWELVE. And I'd do twelve hundred more."}],En={perfect:"You know us like the back of your hand. But then again, you've always known my heart better than I do.",great:"Almost perfect — just like us. Not flawless, but absolutely beautiful.",good:"You might have missed a few, but you've never missed a beat when it comes to loving me.",any:"No matter the score, you're still my favourite person in every room, every city, every lifetime."},eg=o(b.div)`
  width: 88px;
  height: 88px;
  margin: 0 auto 12px;
`,tg=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:h.softPink,stroke:h.accent,strokeWidth:"2"}),e.jsx("circle",{cx:"22",cy:"44",r:"7",fill:h.accentSoft,opacity:"0.5"}),e.jsx("circle",{cx:"58",cy:"44",r:"7",fill:h.accentSoft,opacity:"0.5"}),e.jsx("path",{d:"M24 34 Q30 28 36 34",stroke:h.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M44 34 Q50 28 56 34",stroke:h.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M28 48 Q40 58 52 48",stroke:h.textPrimary,strokeWidth:"2.5",strokeLinecap:"round",fill:"none"}),e.jsx("path",{d:"M40 16 C40 14 36 10 33 13 C30 16 40 22 40 22 C40 22 50 16 47 13 C44 10 40 14 40 16Z",fill:h.accent})]}),ng=()=>e.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[e.jsx("circle",{cx:"40",cy:"40",r:"38",fill:h.goldLight,stroke:h.warmGold,strokeWidth:"2"}),e.jsx("circle",{cx:"30",cy:"34",r:"5",fill:h.card}),e.jsx("circle",{cx:"30",cy:"34",r:"2.5",fill:h.textPrimary}),e.jsx("circle",{cx:"50",cy:"34",r:"5",fill:h.card}),e.jsx("circle",{cx:"50",cy:"34",r:"2.5",fill:h.textPrimary}),e.jsx("path",{d:"M44 24 Q50 20 56 24",stroke:h.textPrimary,strokeWidth:"2",strokeLinecap:"round",fill:"none"}),e.jsx("ellipse",{cx:"40",cy:"52",rx:"6",ry:"7",fill:"none",stroke:h.textPrimary,strokeWidth:"2"}),e.jsx("text",{x:"60",y:"22",fill:h.warmGold,fontSize:"16",fontWeight:"bold",fontFamily:"serif",children:"?"})]}),rg=({correct:t})=>e.jsx(eg,{initial:{scale:0,rotate:-20},animate:{scale:1,rotate:t?0:8},transition:{type:"spring",stiffness:260,damping:18},children:t?e.jsx(tg,{}):e.jsx(ng,{})}),ag=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ig=o(b.h2)`
  font-family: ${E.display};
  font-size: clamp(26px, 5vw, 34px);
  font-weight: 500;
  font-style: italic;
  color: ${h.textPrimary};
  margin-bottom: 4px;
  text-align: center;
`,og=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 36px;
`,sg=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:t,$done:n})=>t?h.accent:n?h.blush:h.cardBorder};
  transition: background 0.4s ease, transform 0.3s ease;
  transform: ${({$active:t})=>t?"scale(1.3)":"scale(1)"};
`,lg=o.div`
  width: 100%;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,cg=o(b.div)`
  width: 100%;
  background: ${h.card};
  border: 1px solid ${h.cardBorder};
  border-radius: 24px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(196, 69, 105, 0.08);
`,dg=o.h3`
  font-family: ${E.display};
  font-size: clamp(24px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${h.textPrimary};
  margin-bottom: 28px;
  line-height: 1.4;
  text-align: center;
`,pg=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,xg=o(b.button)`
  font-family: ${E.body};
  font-size: 20px;
  font-weight: 600;
  padding: 16px 24px;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background 0.35s ease, border-color 0.35s ease, opacity 0.35s ease;

  color: ${({$state:t})=>t==="correct"||t==="wrong"?h.card:h.textPrimary};

  background: ${({$state:t})=>t==="correct"?h.accent:t==="wrong"?"#D4636C":h.softPink};

  border: 1.5px solid ${({$state:t})=>t==="correct"?h.accent:t==="wrong"?"#D4636C":h.blush};

  opacity: ${({$state:t})=>t==="dimmed"?.35:1};
  pointer-events: ${({$state:t})=>t!=="idle"?"none":"auto"};

  &:hover {
    background: ${({$state:t})=>t==="idle"?h.blush:void 0};
    border-color: ${({$state:t})=>t==="idle"?h.accentSoft:void 0};
  }
`,ug=o(b.div)`
  text-align: center;
  margin-top: 20px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hg=o.p`
  font-family: ${E.body};
  font-size: 20px;
  font-style: italic;
  color: ${h.textSecondary};
  line-height: 1.6;
  max-width: 380px;
`,fg=o(b.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`,gg=o.div`
  font-family: ${E.display};
  font-size: clamp(60px, 14vw, 80px);
  font-weight: 700;
  color: ${h.accent};
  margin-bottom: 4px;
`,mg=o.div`
  font-family: ${E.body};
  font-size: 18px;
  color: ${h.textMuted};
  letter-spacing: 0.06em;
  margin-bottom: 28px;
`,yg=o.p`
  font-family: ${E.body};
  font-size: 22px;
  font-style: italic;
  color: ${h.textPrimary};
  line-height: 1.7;
  max-width: 420px;
`,vg=({onComplete:t})=>{const[n,a]=x.useState(0),[r,i]=x.useState(null),[s,l]=x.useState(0),[d,u]=x.useState(!1),[c,p]=x.useState(!1),g=ln[n],f=r===(g==null?void 0:g.correctIndex),m=x.useCallback(y=>{r===null&&(i(y),y===g.correctIndex&&(l(v=>v+1),p(!0),setTimeout(()=>p(!1),1800)),setTimeout(()=>{n<ln.length-1?(a(v=>v+1),i(null)):u(!0)},2600))},[r,n,g]),w=y=>r===null?"idle":y===g.correctIndex?"correct":y===r?"wrong":"dimmed",j=()=>{const y=s/ln.length;return y===1?En.perfect:y>=.7?En.great:y>=.4?En.good:En.any};return e.jsxs(e.Fragment,{children:[c&&e.jsx(_e,{mode:"burst"}),e.jsx(ag,{children:e.jsx(K,{mode:"wait",children:d?e.jsxs(fg,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},transition:{duration:.8,ease:G.cinematic},children:[e.jsxs(gg,{children:[s,"/",ln.length]}),e.jsx(mg,{children:"Your Score"}),e.jsx(xn,{children:e.jsx(mt,{})}),e.jsx(yg,{children:j()}),e.jsx(Zh,{onClick:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.8},whileTap:{scale:.97},children:"Take me deeper..."})]},"score"):e.jsxs(b.div,{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.55,ease:G.gentle},children:[e.jsx(ig,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:"Do you know us?"}),e.jsx(xn,{children:e.jsx(mt,{})}),e.jsx(og,{children:ln.map((y,v)=>e.jsx(sg,{$active:v===n,$done:v<n},v))}),e.jsxs(lg,{children:[e.jsxs(cg,{children:[e.jsx(dg,{children:g.question}),e.jsx(pg,{children:g.options.map((y,v)=>e.jsx(xg,{$state:w(v),onClick:()=>m(v),whileTap:r===null?{scale:.98}:void 0,children:y},v))})]}),e.jsx(K,{children:r!==null&&e.jsxs(ug,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[e.jsx(rg,{correct:f}),e.jsx(hg,{children:f?g.correctReaction:g.wrongReaction})]})})]})]},n)})})]})};o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;o(b.div)`
  width: 100%;
  max-width: 460px;
  background: ${h.card};
  border: 1.5px solid ${h.cardBorder};
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
  font-family: ${E.display};
  font-size: clamp(140px, 30vw, 200px);
  font-weight: 700;
  color: ${h.softPink};
  pointer-events: none;
  line-height: 1;
  user-select: none;
`;o.div`
  font-family: ${E.display};
  font-size: clamp(14px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${h.accent};
  background: ${h.softPink};
  padding: 6px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
`;o.p`
  font-family: ${E.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-weight: 500;
  color: ${h.textPrimary};
  line-height: 1.7;
  max-width: 380px;
  position: relative;
  margin-bottom: 16px;
`;o.p`
  font-family: ${E.body};
  font-size: clamp(18px, 4vw, 21px);
  font-style: italic;
  color: ${h.textSecondary};
  line-height: 1.7;
  max-width: 360px;
  position: relative;
`;o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
`;o(b.button)`
  font-family: ${E.body};
  font-size: 18px;
  font-weight: 600;
  color: ${({$disabled:t})=>t?h.textMuted:h.accent};
  background: ${h.card};
  border: 1.5px solid ${({$disabled:t})=>t?h.cardBorder:h.blush};
  padding: 12px 28px;
  border-radius: 30px;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
  opacity: ${({$disabled:t})=>t?.4:1};
  box-shadow: 0 2px 12px rgba(196, 69, 105, 0.06);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({$disabled:t})=>t?void 0:h.accent};
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
  background: ${({$active:t,$visited:n})=>t?h.accent:n?h.blush:h.cardBorder};
  transition: all 0.4s ease;
`;o(b.div)`
  width: 100%;
  max-width: 460px;
  background: ${h.card};
  border: 1.5px solid ${h.cardBorder};
  border-radius: 28px;
  padding: 44px 28px;
  box-shadow: 0 12px 48px rgba(196, 69, 105, 0.08);
  text-align: center;
`;o.h3`
  font-family: ${E.display};
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 500;
  font-style: italic;
  color: ${h.textPrimary};
  margin-bottom: 4px;
`;o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
`;o.div`
  background: ${h.softPink};
  border-radius: 16px;
  padding: 16px 12px;
`;o.div`
  font-family: ${E.display};
  font-size: clamp(28px, 6vw, 36px);
  font-weight: 700;
  color: ${h.accent};
`;o.div`
  font-family: ${E.body};
  font-size: 16px;
  color: ${h.textMuted};
  margin-top: 2px;
`;o.p`
  font-family: ${E.body};
  font-size: clamp(20px, 4.5vw, 24px);
  font-style: italic;
  color: ${h.textSecondary};
  margin-top: 8px;
`;const Lt=[{text:`I remember the moment
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
every single day.`,style:"dramatic"},{text:"Forever starts now.",style:"finale"}],bg="Yours, always and after",jg=N`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,wg=N`
  0%, 100% { opacity: 0; transform: scale(0.6); }
  40% { opacity: 0.75; transform: scale(1.15); }
  60% { opacity: 0.4; transform: scale(0.95); }
`,kg=N`
  0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.2; }
  50% { opacity: 0.32; }
  100% { transform: translateY(-110vh) scale(0.5) rotate(50deg); opacity: 0; }
`,Sg=N`
  0% { transform: translate(0, 0); }
  25% { transform: translate(25px, -18px); }
  50% { transform: translate(-18px, 12px); }
  75% { transform: translate(12px, 22px); }
  100% { transform: translate(0, 0); }
`,$g=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    170deg,
    ${h.bg} 0%,
    ${h.softPink}15 25%,
    ${h.bg} 45%,
    ${h.lavender}12 65%,
    ${h.bgAlt} 85%,
    ${h.bg} 100%
  );
`,Cg=o.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 40% at 50% 50%, ${h.blush}40 0%, transparent 100%),
    radial-gradient(ellipse 55% 45% at 28% 32%, ${h.softPink}22 0%, transparent 100%),
    radial-gradient(ellipse 45% 35% at 72% 68%, ${h.goldLight}25 0%, transparent 100%);
`,Tg=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50%;
  background: ${t=>t.$c};
  filter: blur(${t=>t.$s*.45}px);
  animation:
    ${jg} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite,
    ${Sg} ${t=>t.$d*2.5}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,Dg=[{x:"12%",y:"18%",s:130,c:`${h.blush}35`,d:7,dl:0},{x:"78%",y:"12%",s:100,c:`${h.softPink}28`,d:9,dl:2},{x:"62%",y:"72%",s:120,c:`${h.goldLight}25`,d:8,dl:1},{x:"20%",y:"68%",s:85,c:`${h.lavender}28`,d:10,dl:3},{x:"48%",y:"42%",s:170,c:`${h.softPink}16`,d:6,dl:.5},{x:"86%",y:"48%",s:70,c:`${h.goldLight}20`,d:11,dl:4}],Mg=o.div`
  position: absolute;
  left: ${t=>t.$x}; bottom: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  opacity: 0.2;
  animation: ${kg} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
`,Ig=[{x:"8%",s:11,d:13,dl:0,c:h.blush},{x:"24%",s:8,d:15,dl:3,c:h.softPink},{x:"40%",s:12,d:12,dl:1,c:h.blush},{x:"56%",s:7,d:16,dl:5,c:h.goldLight},{x:"70%",s:10,d:14,dl:2,c:h.blush},{x:"84%",s:9,d:13,dl:4,c:h.softPink},{x:"16%",s:7,d:15,dl:6,c:h.goldLight},{x:"92%",s:10,d:14,dl:1,c:h.blush}],Ag=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: ${t=>t.$y};
  width: 3.5px; height: 3.5px;
  border-radius: 50%;
  background: ${h.warmGold};
  box-shadow: 0 0 7px 2px ${h.warmGold}45;
  animation: ${wg} ${t=>t.$d}s ease-in-out ${t=>t.$dl}s infinite;
  pointer-events: none;
`,Lg=[{x:"15%",y:"14%",d:3.2,dl:0},{x:"80%",y:"9%",d:4,dl:1.5},{x:"25%",y:"85%",d:3.6,dl:.5},{x:"70%",y:"80%",d:4.2,dl:2},{x:"46%",y:"7%",d:3,dl:1},{x:"91%",y:"40%",d:5,dl:3},{x:"6%",y:"54%",d:3.4,dl:.8},{x:"60%",y:"24%",d:4.5,dl:2.5},{x:"38%",y:"92%",d:3.2,dl:1.2},{x:"84%",y:"60%",d:4,dl:.3}],go={whisper:`radial-gradient(ellipse 60% 50% at 50% 50%, ${h.lavender}30 0%, transparent 70%)`,body:`radial-gradient(ellipse 55% 45% at 50% 50%, ${h.softPink}28 0%, transparent 70%)`,accent:`radial-gradient(ellipse 50% 40% at 50% 50%, ${h.blush}40 0%, transparent 65%)`,gold:`radial-gradient(ellipse 55% 45% at 50% 50%, ${h.goldLight}45 0%, transparent 65%)`,dramatic:`radial-gradient(ellipse 45% 35% at 50% 50%, ${h.accent}18 0%, ${h.blush}20 40%, transparent 70%)`,finale:`radial-gradient(ellipse 60% 50% at 50% 50%, ${h.accent}25 0%, ${h.blush}18 35%, transparent 65%)`},Pg=o(b.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
`,Og=N`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,Eg=N`
  0%, 100% { text-shadow: 0 0 30px ${h.accent}30, 0 0 60px ${h.accent}15; }
  50% { text-shadow: 0 0 50px ${h.accent}45, 0 0 90px ${h.accent}20; }
`,qt=Je`
  position: absolute;
  width: 100%;
  white-space: pre-line;
  text-align: center;
`,Fg=o(b.p)`
  ${qt}
  font-family: ${E.body};
  font-size: clamp(20px, 4.8vw, 28px);
  font-weight: 400;
  font-style: italic;
  color: ${h.textSecondary};
  line-height: 1.75;
  letter-spacing: 0.01em;
`,_g=o(b.p)`
  ${qt}
  font-family: ${E.body};
  font-size: clamp(22px, 5.2vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${h.textPrimary};
  line-height: 1.65;
`,Ng=o(b.p)`
  ${qt}
  font-family: ${E.display};
  font-size: clamp(24px, 5.8vw, 34px);
  font-weight: 600;
  font-style: italic;
  color: ${h.accent};
  line-height: 1.55;
  text-shadow: 0 2px 16px ${h.accent}18;
`,Rg=o(b.p)`
  ${qt}
  font-family: ${E.script};
  font-size: clamp(26px, 6.5vw, 38px);
  font-weight: 400;
  background: linear-gradient(
    90deg,
    ${h.warmGold} 0%,
    ${h.gold} 30%,
    #f5d5a0 50%,
    ${h.gold} 70%,
    ${h.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Og} 5s linear infinite;
  line-height: 1.6;
  filter: drop-shadow(0 2px 12px ${h.warmGold}25);
`,zg=o(b.p)`
  ${qt}
  font-family: ${E.display};
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  font-style: italic;
  color: ${h.accent};
  line-height: 1.4;
  text-shadow:
    0 0 24px ${h.accent}28,
    0 4px 20px ${h.accent}12;
`,Bg=o(b.p)`
  ${qt}
  font-family: ${E.display};
  font-size: clamp(34px, 10vw, 58px);
  font-weight: 700;
  font-style: italic;
  color: ${h.accent};
  line-height: 1.3;
  animation: ${Eg} 2.5s ease-in-out infinite;
`,Wg={whisper:Fg,body:_g,accent:Ng,gold:Rg,dramatic:zg,finale:Bg},Ds={whisper:{from:"up",blur:6,scale:.98},body:{from:"down",blur:5,scale:.97},accent:{from:"scale",blur:8,scale:.88},gold:{from:"up",blur:6,scale:.95},dramatic:{from:"scale",blur:12,scale:.75},finale:{from:"scale",blur:16,scale:.6}};function mo(t){const n=Ds[t];return{opacity:0,y:n.from==="up"?24:n.from==="down"?-24:0,scale:n.scale,filter:`blur(${n.blur}px)`}}function Hg(){return{opacity:1,y:0,scale:1,filter:"blur(0px)"}}function Yg(t){return{opacity:0,y:-16,scale:.97,filter:`blur(${Math.min(Ds[t].blur,5)}px)`}}const Gg=N`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,Vg=o(b.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,Qg=o.p`
  font-family: ${E.script};
  font-size: clamp(30px, 8vw, 44px);
  color: ${h.warmGold};
  text-shadow:
    0 0 24px ${h.warmGold}30,
    0 2px 12px ${h.warmGold}18;
`,Ug=o.div`
  width: clamp(120px, 40vw, 200px);
  height: 1.5px;
  background: linear-gradient(90deg, transparent, ${h.warmGold}55, transparent);
  transform-origin: center;
  animation: ${Gg} 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`,qg=o(b.div)`
  position: absolute;
  bottom: max(30px, 4vh);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  align-items: center;
`,Kg=o.div`
  width: ${t=>t.$a?"22px":"5px"};
  height: 5px;
  border-radius: 3px;
  background: ${t=>t.$a?h.accent:t.$p?h.blush:`${h.textMuted}25`};
  opacity: ${t=>t.$a?1:t.$p?.6:.35};
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
`,Xg=o.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
`,Jg={whisper:4600,body:4600,accent:4400,gold:4800,dramatic:4200,finale:5e3},Zg={whisper:1,body:1,accent:.9,gold:1.1,dramatic:1.3,finale:1.6},e1=({onComplete:t})=>{const[n,a]=x.useState(-1),[r,i]=x.useState(!1),[s,l]=x.useState(!1),d=x.useMemo(()=>{const c=[];let p=900;for(let g=0;g<Lt.length;g++)c.push(p),p+=Jg[Lt[g].style];return{starts:c,sigAt:p,fadeAt:p+4200,doneAt:p+5600}},[]);x.useEffect(()=>{const c=[],p=t;return d.starts.forEach((g,f)=>{c.push(setTimeout(()=>a(f),g))}),c.push(setTimeout(()=>{a(-2),i(!0)},d.sigAt)),c.push(setTimeout(()=>l(!0),d.fadeAt)),c.push(setTimeout(()=>p(),d.doneAt)),()=>c.forEach(clearTimeout)},[]);const u=n>=0&&n<Lt.length?Lt[n].style:null;return e.jsxs($g,{children:[e.jsx(Cg,{}),Dg.map((c,p)=>e.jsx(Tg,{$x:c.x,$y:c.y,$s:c.s,$c:c.c,$d:c.d,$dl:c.dl},p)),Ig.map((c,p)=>e.jsx(Mg,{$x:c.x,$s:c.s,$d:c.d,$dl:c.dl,$c:c.c},p)),Lg.map((c,p)=>e.jsx(Ag,{$x:c.x,$y:c.y,$d:c.d,$dl:c.dl},p)),e.jsx(_e,{mode:"ambient",density:20}),e.jsx(Pg,{animate:{background:u?go[u]:r?go.gold:"none"},transition:{duration:1.6,ease:[.25,.1,.25,1]}}),e.jsxs(Xg,{children:[Lt.map((c,p)=>{const g=Wg[c.style],f=n===p,m=n>p||n===-2;return e.jsx(g,{initial:mo(c.style),animate:f?Hg():m?Yg(c.style):mo(c.style),transition:{duration:Zg[c.style],ease:G.cinematic},style:{pointerEvents:"none"},children:c.text},p)}),e.jsxs(Vg,{initial:{opacity:0,scale:.85,filter:"blur(8px)"},animate:{opacity:r&&!s?1:0,scale:r?1:.85,filter:r&&!s?"blur(0px)":"blur(8px)"},transition:{duration:1.3,ease:G.gentle},children:[e.jsx(Qg,{children:bg}),r&&!s&&e.jsx(Ug,{})]})]}),e.jsx(qg,{initial:{opacity:0},animate:{opacity:s?0:n>=0?.85:0},transition:{duration:.6},children:Lt.map((c,p)=>e.jsx(Kg,{$a:n===p,$p:n>p},p))})]})},Zr=["For 12 years, you have been my everything.","For years, we have waited.","Every delay.","Every storm.","Every test.","Only made me more certain.","That you are my forever.","This year, Riya…"],Ms=["I choose you.","I'll always choose you.","Here's to the future we've been dreaming of."],t1="Happy 12th Anniversary, my love",n1="19 March 2014  →  19 March 2026  →  ∞",r1="Every love story is beautiful, but ours is my favourite.",a1=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
`,i1=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`,o1=o(b.p)`
  font-family: ${E.display};
  font-size: clamp(22px, 5vw, 30px);
  font-weight: 500;
  font-style: italic;
  color: ${({$gold:t})=>t?h.warmGold:h.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
`,s1=N`
  0%, 100% { filter: drop-shadow(0 0 6px ${h.warmGold}40); }
  50% { filter: drop-shadow(0 0 20px ${h.warmGold}80); }
`,l1=o(b.div)`
  margin: 24px 0 20px;
  animation: ${s1} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
`,c1=o(b.p)`
  font-family: ${E.display};
  font-size: clamp(24px, 5.5vw, 34px);
  font-weight: ${({$gold:t})=>t?600:500};
  font-style: italic;
  color: ${({$gold:t})=>t?h.accent:h.textPrimary};
  line-height: 1.5;
  padding: 4px 0;
  position: relative;
  z-index: 1;
  text-align: center;
`,zn=2,Is=Zr.length*zn+1.2,As=Is+2,d1=As+Ms.length*zn+3,p1=({onComplete:t})=>{const[n,a]=x.useState(0),[r,i]=x.useState(!1),[s,l]=x.useState(!1),[d,u]=x.useState(!1);return x.useEffect(()=>{const c=[],p=t;return Zr.forEach((g,f)=>{c.push(setTimeout(()=>a(f+1),(f+1)*zn*1e3))}),c.push(setTimeout(()=>{i(!0),u(!0),setTimeout(()=>u(!1),2200)},Is*1e3)),c.push(setTimeout(()=>l(!0),As*1e3)),c.push(setTimeout(()=>p(),d1*1e3)),()=>c.forEach(clearTimeout)},[]),e.jsxs(a1,{children:[d&&e.jsx(_e,{mode:"burst",density:55}),e.jsx(i1,{children:Zr.map((c,p)=>e.jsx(o1,{$gold:c.startsWith("This year"),initial:{opacity:0},animate:{opacity:p<n?1:0},transition:{duration:1,ease:G.cinematic},children:c},p))}),e.jsx(b.div,{initial:{opacity:0},animate:{opacity:r?1:0},transition:{duration:.6},style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e.jsx(xn,{children:e.jsx(mt,{})})}),e.jsx(l1,{initial:{opacity:0,scale:.5},animate:{opacity:r?1:0,scale:r?1:.5},transition:{duration:1.2,ease:G.cinematic},children:e.jsxs("svg",{width:"140",height:"90",viewBox:"0 0 140 90",fill:"none",children:[e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:h.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:h.warmGold,strokeWidth:"3",opacity:"0.85"}),e.jsx("ellipse",{cx:"48",cy:"45",rx:"34",ry:"34",stroke:h.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsx("ellipse",{cx:"92",cy:"45",rx:"34",ry:"34",stroke:h.gold,strokeWidth:"1.5",opacity:"0.25"}),e.jsxs("circle",{cx:"70",cy:"45",r:"4",fill:h.warmGold,children:[e.jsx("animate",{attributeName:"r",values:"3;5;3",dur:"2s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]})]})}),Ms.map((c,p)=>e.jsx(c1,{$gold:p===0,initial:{opacity:0,y:12},animate:{opacity:s?1:0,y:s?0:12},transition:{delay:s?p*zn:0,duration:1,ease:G.cinematic},children:c},`a-${p}`))]})},x1=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,u1=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,h1=N`
  0%, 100% { text-shadow: 0 0 20px rgba(196, 69, 105, 0.2), 0 4px 40px rgba(196, 69, 105, 0.1); }
  50% { text-shadow: 0 0 40px rgba(196, 69, 105, 0.4), 0 4px 60px rgba(196, 69, 105, 0.2); }
`,f1=o.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`,ma=o(b.span)`
  font-family: ${E.display};
  font-weight: 700;
  font-style: italic;
  line-height: 1.1;
  display: inline-block;
`,g1=o(ma)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${h.textPrimary};
  margin-right: clamp(12px, 3vw, 20px);
`,m1=o(ma)`
  font-size: clamp(72px, 18vw, 120px);
  color: ${h.accent};
  animation: ${h1} 3s ease-in-out infinite;
  margin-right: clamp(12px, 3vw, 20px);
`,y1=o(ma)`
  font-size: clamp(52px, 12vw, 80px);
  color: ${h.warmGold};
`,v1=o(b.div)`
  color: ${h.accent};
  margin-top: 24px;

  svg {
    width: clamp(40px, 10vw, 64px);
    height: clamp(40px, 10vw, 64px);
  }
`,b1=N`
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.15); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  56% { transform: scale(1); }
`,j1=o.div`
  animation: ${b1} 1.8s ease-in-out infinite;
  display: flex;
`,w1=o(b.p)`
  font-family: ${E.body};
  font-size: clamp(20px, 4.5vw, 26px);
  font-style: italic;
  font-weight: 500;
  color: ${h.textSecondary};
  margin-top: 32px;
  max-width: 400px;
  line-height: 1.6;
`,k1=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),S1=({onComplete:t})=>{const[n,a]=x.useState(0),[r,i]=x.useState(!1);return x.useEffect(()=>{const s=t,l=[setTimeout(()=>a(1),800),setTimeout(()=>{a(2),i(!0),setTimeout(()=>i(!1),2e3)},2e3),setTimeout(()=>a(3),3200),setTimeout(()=>a(4),4800),setTimeout(()=>s(),8e3)];return()=>l.forEach(clearTimeout)},[]),e.jsxs(x1,{children:[e.jsx(_e,{mode:"ambient",density:20}),r&&e.jsx(_e,{mode:"burst",density:50}),e.jsxs(u1,{children:[e.jsxs(f1,{children:[e.jsx(g1,{initial:{opacity:0,x:-30},animate:{opacity:n>=1?1:0,x:n>=1?0:-30},transition:{duration:.8,ease:G.cinematic},children:"I"}),e.jsx(m1,{initial:{opacity:0,scale:.3},animate:{opacity:n>=2?1:0,scale:n>=2?1:.3},transition:{type:"spring",stiffness:100,damping:12},children:"Love"}),e.jsx(y1,{initial:{opacity:0,x:30},animate:{opacity:n>=3?1:0,x:n>=3?0:30},transition:{duration:.8,ease:G.cinematic},children:"You"})]}),e.jsx(v1,{initial:{opacity:0,scale:0},animate:{opacity:n>=3?1:0,scale:n>=3?1:0},transition:{type:"spring",stiffness:200,damping:12,delay:n>=3?.3:0},children:e.jsx(j1,{children:e.jsx(k1,{})})}),e.jsxs(w1,{initial:{opacity:0,y:12},animate:{opacity:n>=4?1:0,y:n>=4?0:12},transition:{duration:1,ease:G.gentle},children:["More than words could ever say.",e.jsx("br",{}),"More than twelve years could ever show."]})]})]})},$1=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,C1=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,yo=o(b.p)`
  font-family: ${E.display};
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 500;
  font-style: italic;
  color: ${h.textPrimary};
  line-height: 1.4;
  margin-bottom: 8px;
`,T1=N`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,D1=o(b.h1)`
  font-family: ${E.display};
  font-size: clamp(44px, 11vw, 80px);
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
  margin-top: 12px;
  background: linear-gradient(
    90deg,
    ${h.warmGold} 0%,
    ${h.accent} 25%,
    ${h.warmGold} 50%,
    ${h.accent} 75%,
    ${h.warmGold} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${T1} 4s linear infinite;
  filter: drop-shadow(0 4px 24px rgba(201, 149, 107, 0.3));
`,M1=N`
  0%, 100% { filter: drop-shadow(0 0 8px ${h.warmGold}60); }
  50% { filter: drop-shadow(0 0 24px ${h.warmGold}AA); }
`,I1=o(b.div)`
  margin: 32px 0 24px;
  animation: ${M1} 2.5s ease-in-out infinite;
`,A1=N`
  0%, 100% { box-shadow: 0 4px 24px rgba(196, 69, 105, 0.2); }
  50% { box-shadow: 0 8px 40px rgba(196, 69, 105, 0.4); }
`,L1=o(b.button)`
  font-family: ${E.display};
  font-size: clamp(26px, 6vw, 36px);
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.06em;
  color: ${h.card};
  background: linear-gradient(135deg, ${h.accent}, ${h.accentSoft});
  border: none;
  padding: 20px 72px;
  border-radius: 60px;
  cursor: pointer;
  margin-top: 36px;
  animation: ${A1} 2.5s ease-in-out infinite;

  &:active { transform: scale(0.95) !important; }
`,P1=o(b.p)`
  font-family: ${E.script};
  font-size: clamp(32px, 8vw, 52px);
  color: ${h.accent};
  margin-top: 40px;
`,O1=()=>e.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",children:[e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:h.warmGold,strokeWidth:"4"}),e.jsx("ellipse",{cx:"50",cy:"58",rx:"28",ry:"24",stroke:h.gold,strokeWidth:"1.5",opacity:"0.4"}),e.jsx("polygon",{points:"50,20 38,38 50,34 62,38",fill:h.gold,stroke:h.warmGold,strokeWidth:"1.5"}),e.jsx("polygon",{points:"50,20 62,38 50,34",fill:"rgba(255,255,255,0.6)"}),e.jsx("circle",{cx:"50",cy:"26",r:"2",fill:h.card,children:e.jsx("animate",{attributeName:"opacity",values:"0.4;1;0.4",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"50",y1:"10",x2:"50",y2:"14",stroke:h.warmGold,strokeWidth:"1.5",opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"36",y1:"18",x2:"38",y2:"22",stroke:h.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"64",y1:"18",x2:"62",y2:"22",stroke:h.warmGold,strokeWidth:"1.5",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.8;0.2",dur:"2.2s",repeatCount:"indefinite"})})]}),E1=({onComplete:t})=>{const[n,a]=x.useState(0),[r,i]=x.useState(!1),[s,l]=x.useState(!1);x.useEffect(()=>{const c=[setTimeout(()=>a(1),1200),setTimeout(()=>a(2),3200),setTimeout(()=>{a(3),i(!0),setTimeout(()=>i(!1),2500)},5500),setTimeout(()=>a(4),7500),setTimeout(()=>a(5),9e3)];return()=>c.forEach(clearTimeout)},[]);const d=()=>{l(!0),i(!0),setTimeout(()=>{i(!1),t()},3e3)},u=n>=5&&!s;return e.jsxs($1,{children:[e.jsx(_e,{mode:"ambient",density:15}),r&&e.jsx(_e,{mode:"burst",density:80}),e.jsxs(C1,{children:[e.jsx(yo,{initial:{opacity:0,y:16},animate:{opacity:n>=1?1:0,y:n>=1?0:16},transition:{duration:1.2,ease:G.cinematic},children:"Riya..."}),e.jsx(yo,{initial:{opacity:0,y:16},animate:{opacity:n>=2?1:0,y:n>=2?0:16},transition:{duration:1.2,ease:G.cinematic},children:"I have one question..."}),e.jsxs(D1,{initial:{opacity:0,scale:.6},animate:{opacity:n>=3?1:0,scale:n>=3?1:.6},transition:{type:"spring",stiffness:80,damping:12},children:["Will You",e.jsx("br",{}),"Marry Me?"]}),e.jsx(I1,{initial:{opacity:0,y:20},animate:{opacity:n>=4&&!s?1:0,y:n>=4?0:20},transition:{duration:1,ease:G.cinematic},children:e.jsx(O1,{})}),e.jsx(L1,{initial:{opacity:0,scale:.8},animate:{opacity:u?1:0,scale:u?1:.8},transition:{type:"spring",stiffness:120,damping:10},onClick:d,style:{pointerEvents:u?"auto":"none"},children:"Yes!"}),e.jsx(P1,{initial:{opacity:0,scale:.5},animate:{opacity:s?1:0,scale:s?1:.5},transition:{type:"spring",stiffness:100,damping:10},children:"She said Yes!"})]})]})},Xe="#E57373",ue="#F9A825",Ge="#FFD54F",qe="#8D6E63",Er="#F5D5C0",F1="#F0CDB5",z="#DAA520",Ye="#B71C1C",_1=N`
  0% { transform: translateY(-20px) rotate(0deg); opacity: 0.65; }
  50% { opacity: 0.85; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
`,N1=N`
  0%, 100% { transform: rotate(0deg); }
  30% { transform: rotate(3deg); }
  70% { transform: rotate(-3deg); }
`,R1=N`
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  100% { transform: translateY(-70px) scale(0.4); opacity: 0; }
`,z1=o.div`
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
`,B1=o(b.div)`
  position: relative;
  z-index: 1;
  width: min(90vw, 480px);
  display: flex;
  flex-direction: column;
  align-items: center;
`,W1=o.svg`
  width: 100%;
  height: auto;
  overflow: visible;
`,H1=o.g`
  animation: ${N1} 5s ease-in-out infinite;
  transform-origin: center bottom;
`,Y1=o.div`
  position: absolute;
  left: ${t=>t.$x}; top: -20px;
  width: ${t=>t.$s}px; height: ${t=>t.$s}px;
  border-radius: 50% 0 50% 0;
  background: ${t=>t.$c};
  animation: ${_1} ${t=>t.$d}s linear ${t=>t.$dl}s infinite;
  pointer-events: none;
  opacity: 0.55;
`,G1=[{x:"6%",s:9,d:7,dl:0,c:Xe},{x:"16%",s:7,d:9,dl:1.5,c:Ge},{x:"28%",s:10,d:6,dl:.5,c:Xe},{x:"40%",s:7,d:8,dl:2,c:ue},{x:"52%",s:9,d:7,dl:1,c:Xe},{x:"62%",s:6,d:10,dl:3,c:Ge},{x:"74%",s:8,d:6.5,dl:.8,c:Xe},{x:"84%",s:7,d:8,dl:2.5,c:ue},{x:"92%",s:9,d:7,dl:1.2,c:Xe},{x:"48%",s:5,d:9,dl:4,c:Ge},{x:"20%",s:8,d:7.5,dl:3.5,c:ue},{x:"70%",s:6,d:8.5,dl:.3,c:Xe}],V1=o.div`
  position: absolute;
  left: ${t=>t.$x};
  bottom: 35%;
  width: 14px; height: 14px;
  color: ${h.accent};
  animation: ${R1} 3.5s ease-out ${t=>t.$dl}s infinite;
  pointer-events: none;
  svg { width: 100%; height: 100%; }
`,Q1=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),U1=N`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`,q1=N`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`,K1=o(b.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: clamp(16px, 3vh, 28px);
  gap: 6px;
`,X1=o(b.span)`
  font-family: ${E.display};
  font-size: clamp(13px, 3vw, 16px);
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    ${h.warmGold} 0%,
    #f5d5a0 50%,
    ${h.warmGold} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${U1} 5s linear infinite;
`,J1=o(b.div)`
  width: clamp(60px, 20vw, 100px);
  height: 1px;
  background: linear-gradient(90deg, transparent, ${h.warmGold}50, transparent);
  transform-origin: center;
`,vo=o(J1)`
  animation: ${q1} 1s ease forwards;
`,bo=o(b.p)`
  font-family: ${E.script};
  font-size: ${t=>t.$primary?"clamp(26px, 6.5vw, 38px)":"clamp(22px, 5.5vw, 32px)"};
  font-weight: ${t=>t.$primary?700:400};
  color: ${t=>t.$primary?h.accent:h.textPrimary};
  text-shadow: ${t=>t.$primary?`0 2px 16px ${h.accent}20`:"none"};
  line-height: 1.3;
`,Z1=o(b.span)`
  font-family: ${E.display};
  font-size: clamp(16px, 4vw, 22px);
  font-style: italic;
  color: ${h.warmGold};
  filter: drop-shadow(0 1px 6px ${h.warmGold}25);
`,em=({onComplete:t})=>{const[n,a]=x.useState(0);return x.useEffect(()=>{const r=t,i=[setTimeout(()=>a(1),500),setTimeout(()=>a(2),1800),setTimeout(()=>a(3),4e3),setTimeout(()=>r(),9e3)];return()=>i.forEach(clearTimeout)},[]),e.jsxs(z1,{children:[e.jsx(_e,{mode:"celebration",density:50}),G1.map((r,i)=>e.jsx(Y1,{$x:r.x,$s:r.s,$d:r.d,$dl:r.dl,$c:r.c},i)),["30%","45%","60%","75%"].map((r,i)=>e.jsx(V1,{$x:r,$dl:i*1,children:e.jsx(Q1,{})},i)),e.jsxs(B1,{initial:{opacity:0},animate:{opacity:n>=1?1:0},transition:{duration:1.5,ease:G.cinematic},children:[e.jsxs(W1,{viewBox:"0 0 400 380",preserveAspectRatio:"xMidYMid meet",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"wMandapRoof",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:Ye,stopOpacity:"0.85"}),e.jsx("stop",{offset:"100%",stopColor:Xe,stopOpacity:"0.55"})]}),e.jsxs("linearGradient",{id:"wPillar",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"0.65"}),e.jsx("stop",{offset:"50%",stopColor:Ge,stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0.65"})]}),e.jsxs("radialGradient",{id:"wFire",cx:"50%",cy:"80%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FF6F00",stopOpacity:"0.9"}),e.jsx("stop",{offset:"60%",stopColor:ue,stopOpacity:"0.5"}),e.jsx("stop",{offset:"100%",stopColor:"transparent"})]}),e.jsxs("linearGradient",{id:"wSky",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFF8F0",stopOpacity:"0"}),e.jsx("stop",{offset:"100%",stopColor:Ge,stopOpacity:"0.08"})]})]}),e.jsx("rect",{x:"0",y:"0",width:"400",height:"380",fill:"url(#wSky)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",fill:"url(#wMandapRoof)"}),e.jsx("path",{d:"M90 80 Q110 20, 200 12 Q290 20, 310 80",stroke:Ye,strokeWidth:"2",fill:"none",opacity:"0.6"}),e.jsx("ellipse",{cx:"200",cy:"14",rx:"6",ry:"8",fill:z,opacity:"0.8"}),e.jsx("circle",{cx:"200",cy:"7",r:"3",fill:Ge,opacity:"0.7"}),e.jsx("path",{d:"M105 75 Q150 50, 200 46 Q250 50, 295 75",fill:Xe,opacity:"0.3"}),Array.from({length:12}).map((r,i)=>{const s=100+i*17;return e.jsx("circle",{cx:s,cy:78,r:4.5,fill:Ge,opacity:"0.45"},`sc${i}`)}),e.jsx("rect",{x:"95",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"291",y:"76",width:"14",height:"200",rx:"3",fill:"url(#wPillar)"}),e.jsx("rect",{x:"140",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),e.jsx("rect",{x:"250",y:"76",width:"10",height:"200",rx:"2",fill:"url(#wPillar)",opacity:"0.5"}),[0,1,2,3,4,5,6].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"102",cy:92+r*24,r:"5",fill:ue,opacity:"0.55"}),e.jsx("circle",{cx:"298",cy:92+r*24,r:"5",fill:ue,opacity:"0.55"})]},`gL${r}`)),e.jsx("path",{d:"M109 82 Q200 110, 291 82",stroke:ue,strokeWidth:"4.5",fill:"none",opacity:"0.45"}),e.jsx("path",{d:"M109 88 Q200 114, 291 88",stroke:Ge,strokeWidth:"2.5",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M109 82 Q85 140, 109 200",stroke:ue,strokeWidth:"3",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M291 82 Q315 140, 291 200",stroke:ue,strokeWidth:"3",fill:"none",opacity:"0.3"}),Array.from({length:8}).map((r,i)=>e.jsx("circle",{cx:115+i*24,cy:55+i%2*12,r:"2.5",fill:Ge,children:e.jsx("animate",{attributeName:"opacity",values:"0.2;0.9;0.2",dur:`${1.5+i*.25}s`,repeatCount:"indefinite"})},`tw${i}`)),e.jsx("rect",{x:"80",y:"276",width:"240",height:"14",rx:"4",fill:qe,opacity:"0.3"}),e.jsx("rect",{x:"80",y:"276",width:"240",height:"4",rx:"2",fill:ue,opacity:"0.2"}),e.jsx("rect",{x:"85",y:"286",width:"230",height:"3",rx:"1",fill:qe,opacity:"0.15"}),e.jsxs("g",{transform:"translate(200, 252)",children:[e.jsx("ellipse",{cx:"0",cy:"8",rx:"16",ry:"5",fill:qe,opacity:"0.25"}),e.jsx("ellipse",{cx:"0",cy:"0",rx:"10",ry:"14",fill:"url(#wFire)",opacity:"0.7",children:e.jsx("animate",{attributeName:"ry",values:"12;16;12",dur:"1.2s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"-3",cy:"-4",rx:"4",ry:"8",fill:"#FFAB00",opacity:"0.5",children:e.jsx("animate",{attributeName:"ry",values:"7;10;7",dur:"0.8s",repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"2",cy:"-2",rx:"3",ry:"6",fill:"#FFD54F",opacity:"0.4",children:e.jsx("animate",{attributeName:"ry",values:"5;8;5",dur:"1s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"0",cy:"0",r:"24",fill:"#FF6F00",opacity:"0.06",children:e.jsx("animate",{attributeName:"r",values:"20;28;20",dur:"1.5s",repeatCount:"indefinite"})})]}),e.jsxs(H1,{children:[e.jsxs("g",{transform:"translate(232, 140)",children:[e.jsx("ellipse",{cx:"0",cy:"-4",rx:"12",ry:"10",fill:"#2D1B30",opacity:"0.55"}),e.jsx("circle",{cx:"0",cy:"2",r:"11",fill:F1,opacity:"0.85"}),e.jsx("circle",{cx:"-4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("circle",{cx:"4",cy:"0",r:"1.2",fill:"#3E2723",opacity:"0.55"}),e.jsx("path",{d:"M-3,5 Q0,8 3,5",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-16,14 Q-18,50 -14,94 L14,94 Q18,50 16,14 Z",fill:z,opacity:"0.7"}),e.jsx("path",{d:"M-8,14 Q0,10 8,14",stroke:z,strokeWidth:"2",fill:"none",opacity:"0.5"}),e.jsx("line",{x1:"0",y1:"16",x2:"0",y2:"88",stroke:ue,strokeWidth:"1",opacity:"0.3"}),[24,36,48,60].map(r=>e.jsx("circle",{cx:"0",cy:r,r:"1.5",fill:ue,opacity:"0.4"},`btn${r}`)),e.jsx("path",{d:"M-16,18 Q-24,40 -20,70",stroke:Ye,strokeWidth:"5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),e.jsx("path",{d:"M-16,20 Q-24,42 -20,60",stroke:z,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M16,20 Q22,38 18,56",stroke:z,strokeWidth:"5.5",strokeLinecap:"round",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-6,94 L-7,114",stroke:z,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("path",{d:"M6,94 L7,114",stroke:z,strokeWidth:"6",strokeLinecap:"round",opacity:"0.55"}),e.jsx("ellipse",{cx:"-7",cy:"116",rx:"5",ry:"3",fill:qe,opacity:"0.5"}),e.jsx("ellipse",{cx:"7",cy:"116",rx:"5",ry:"3",fill:qe,opacity:"0.5"}),e.jsx("path",{d:"M-10,115 Q-7,112 -4,115",fill:qe,opacity:"0.3"}),e.jsx("path",{d:"M4,115 Q7,112 10,115",fill:qe,opacity:"0.3"})]}),e.jsxs("g",{transform:"translate(164, 152)",children:[e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",fill:Ye,opacity:"0.8"}),e.jsx("path",{d:"M-14,-22 Q0,-32 14,-22",stroke:z,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),e.jsx("circle",{cx:"0",cy:"-18",r:"3",fill:z,opacity:"0.85",children:e.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-20 Q-16,-14 -16,-8 Q-17,0 -16,8 Q-15,16 -12,22",stroke:z,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M-13,-18 Q-14,-12 -14,-6 Q-15,2 -14,10 Q-13,18 -11,24",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"-16",cy:"-8",r:"1.8",fill:z,opacity:"0.6"}),e.jsx("circle",{cx:"-16",cy:"2",r:"2",fill:z,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"-14",cy:"12",r:"2.2",fill:z,opacity:"0.6"}),e.jsx("circle",{cx:"-12",cy:"22",r:"2.5",fill:z,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M14,-20 Q16,-14 16,-8 Q17,0 16,8 Q15,16 12,22",stroke:z,strokeWidth:"1.2",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M13,-18 Q14,-12 14,-6 Q15,2 14,10 Q13,18 11,24",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.45"}),e.jsx("circle",{cx:"16",cy:"-8",r:"1.8",fill:z,opacity:"0.6"}),e.jsx("circle",{cx:"16",cy:"2",r:"2",fill:z,opacity:"0.55",children:e.jsx("animate",{attributeName:"opacity",values:"0.4;0.7;0.4",dur:"3s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"14",cy:"12",r:"2.2",fill:z,opacity:"0.6"}),e.jsx("circle",{cx:"12",cy:"22",r:"2.5",fill:z,opacity:"0.65",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.8;0.5",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,-18 Q-18,-8 -16,6 Q-10,12 0,14 Q10,12 16,6 Q18,-8 14,-18 Z",fill:Ye,opacity:"0.7"}),e.jsx("path",{d:"M-12,-12 Q0,-6 12,-12",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.5"}),e.jsx("path",{d:"M-10,-6 Q0,0 10,-6",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"0",cy:"-6",r:"10",fill:Er,opacity:"0.88"}),e.jsx("circle",{cx:"-3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("circle",{cx:"3.5",cy:"-8",r:"1.2",fill:"#3E2723",opacity:"0.6"}),e.jsx("path",{d:"M-3,-4 Q0,-1 3,-4",stroke:"#3E2723",strokeWidth:"0.8",fill:"none",opacity:"0.4"}),e.jsx("circle",{cx:"2",cy:"-5",r:"2",stroke:z,strokeWidth:"0.7",fill:"none",opacity:"0.55"}),e.jsx("circle",{cx:"3.2",cy:"-4",r:"0.8",fill:z,opacity:"0.6"}),e.jsx("path",{d:"M-9,4 Q-10,8 -8,12 Q0,16 8,12 Q10,8 9,4",stroke:z,strokeWidth:"2",fill:"none",opacity:"0.65"}),e.jsx("path",{d:"M-7,8 Q0,14 7,8",stroke:z,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"0",cy:"14",r:"2.5",fill:z,opacity:"0.7",children:e.jsx("animate",{attributeName:"opacity",values:"0.5;0.9;0.5",dur:"3s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M-14,12 Q-16,28 -14,44 L14,44 Q16,28 14,12 Z",fill:Ye,opacity:"0.7"}),e.jsx("path",{d:"M-12,18 Q0,22 12,18",stroke:z,strokeWidth:"1",fill:"none",opacity:"0.4"}),e.jsx("path",{d:"M-11,26 Q0,30 11,26",stroke:z,strokeWidth:"1",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-10,34 Q0,38 10,34",stroke:z,strokeWidth:"1",fill:"none",opacity:"0.3"}),e.jsx("path",{d:"M-14,42 L14,42",stroke:z,strokeWidth:"2",opacity:"0.4"}),e.jsx("path",{d:"M-14,44 Q-20,62 -26,96 L26,96 Q20,62 14,44 Z",fill:Ye,opacity:"0.6"}),e.jsx("path",{d:"M-24,88 Q0,96 24,88",stroke:z,strokeWidth:"1.5",fill:"none",opacity:"0.35"}),e.jsx("path",{d:"M-26,96 L26,96",stroke:z,strokeWidth:"2.5",opacity:"0.45"}),e.jsx("path",{d:"M-18,60 Q0,66 18,60",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-20,72 Q0,78 20,72",stroke:z,strokeWidth:"0.8",fill:"none",opacity:"0.25"}),e.jsx("path",{d:"M-14,16 Q-22,32 -18,48",stroke:Ye,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),e.jsx("path",{d:"M14,16 Q20,30 17,46",stroke:Ye,strokeWidth:"4",strokeLinecap:"round",fill:"none",opacity:"0.6"}),[42,45,48].map(r=>e.jsxs("g",{children:[e.jsx("circle",{cx:"-18",cy:r,r:"2.5",stroke:z,strokeWidth:"1",fill:"none",opacity:"0.5"}),e.jsx("circle",{cx:"17",cy:r-2,r:"2.5",stroke:z,strokeWidth:"1",fill:"none",opacity:"0.5"})]},`blL${r}`)),e.jsx("circle",{cx:"-18",cy:"50",r:"3",fill:Er,opacity:"0.7"}),e.jsx("circle",{cx:"17",cy:"48",r:"3",fill:Er,opacity:"0.7"}),e.jsx("circle",{cx:"-18",cy:"50",r:"2",fill:"#C47A5A",opacity:"0.2"}),e.jsx("circle",{cx:"17",cy:"48",r:"2",fill:"#C47A5A",opacity:"0.2"})]}),e.jsx("path",{d:"M216,196 Q200,190 184,200",stroke:ue,strokeWidth:"3.5",fill:"none",opacity:"0.4",strokeLinecap:"round"}),[0,1,2,3,4].map(r=>e.jsx("circle",{cx:216-r*8,cy:196+Math.sin(r*.8)*4,r:"2.5",fill:ue,opacity:"0.5"},`jm${r}`))]}),[95,130,265,300].map((r,i)=>e.jsxs("g",{transform:`translate(${r}, 270)`,children:[e.jsx("path",{d:"M-4,0 Q0,-6 4,0 Z",fill:"#FF6F00",opacity:"0.5",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.7;0.3",dur:`${1.2+i*.3}s`,repeatCount:"indefinite"})}),e.jsx("ellipse",{cx:"0",cy:"2",rx:"5",ry:"2.5",fill:qe,opacity:"0.4"})]},`diya${i}`)),[115,155,245,285].map((r,i)=>e.jsx("g",{children:[0,1,2,3,4,5].map(s=>e.jsx("circle",{cx:r,cy:82+s*12,r:"3",fill:ue,opacity:.35-s*.04,children:e.jsx("animate",{attributeName:"opacity",values:`${.25-s*.03};${.45-s*.03};${.25-s*.03}`,dur:`${2+i*.5}s`,repeatCount:"indefinite"})},`mg${i}${s}`))},`mg${i}`)),e.jsx("ellipse",{cx:"200",cy:"290",rx:"120",ry:"8",fill:"#FF6F00",opacity:"0.04",children:e.jsx("animate",{attributeName:"opacity",values:"0.03;0.07;0.03",dur:"2s",repeatCount:"indefinite"})})]}),e.jsxs(K1,{initial:{opacity:0},animate:{opacity:n>=2?1:0},transition:{duration:1},children:[e.jsx(X1,{initial:{opacity:0,y:8},animate:{opacity:n>=2?1:0,y:n>=2?0:8},transition:{duration:1,ease:G.cinematic,delay:(n>=2,0)},children:"RSVP"}),n>=2&&e.jsx(vo,{}),e.jsx(bo,{$primary:!0,initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:G.cinematic,delay:n>=2?.5:0},children:"Mrs Riya Pranshu Nijhawan"}),e.jsx(Z1,{initial:{opacity:0,scale:.7},animate:{opacity:n>=2?1:0,scale:n>=2?1:.7},transition:{duration:.8,ease:G.gentle,delay:n>=2?1:0},children:"&"}),e.jsx(bo,{initial:{opacity:0,y:10},animate:{opacity:n>=2?1:0,y:n>=2?0:10},transition:{duration:1.2,ease:G.cinematic,delay:n>=2?1.3:0},children:"Mr Pranshu Nijhawan"}),n>=2&&e.jsx(vo,{})]})]})]})},tm=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,nm=o.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`,rm=o(b.h1)`
  font-family: ${E.display};
  font-size: clamp(32px, 7vw, 50px);
  font-weight: 600;
  font-style: italic;
  color: ${h.accent};
  line-height: 1.3;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(196, 69, 105, 0.15);
`,am=o(b.p)`
  font-family: ${E.body};
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 600;
  color: ${h.warmGold};
  letter-spacing: 0.06em;
  margin-bottom: 32px;
`,im=o(b.p)`
  font-family: ${E.body};
  font-size: clamp(22px, 5vw, 28px);
  font-style: italic;
  font-weight: 500;
  color: ${h.textSecondary};
  line-height: 1.7;
  max-width: 460px;
`,om=o(b.p)`
  font-family: ${E.script};
  font-size: clamp(28px, 6vw, 40px);
  color: ${h.warmGold};
  margin-top: 40px;
`,sm=()=>e.jsxs(tm,{children:[e.jsx(_e,{mode:"celebration",density:80}),e.jsxs(nm,{children:[e.jsx(rm,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.6,duration:1.2,ease:G.cinematic},children:t1}),e.jsx(am,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:1},children:n1}),e.jsx(xn,{children:e.jsx(mt,{})}),e.jsx(im,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:3.2,duration:1.2,ease:G.gentle},children:r1}),e.jsx(om,{initial:{opacity:0},animate:{opacity:1},transition:{delay:4.6,duration:1},children:"Forever yours"})]})]});function lm(){const[t,n]=x.useState(1),a=x.useCallback(()=>{n(r=>r>=8?r:r+1)},[]);return{currentAct:t,nextAct:a}}const cm=new Set,dm={1:t=>e.jsx(Zf,{onComplete:t}),2:t=>e.jsx(vg,{onComplete:t}),3:t=>e.jsx(e1,{onComplete:t}),4:t=>e.jsx(p1,{onComplete:t}),5:t=>e.jsx(S1,{onComplete:t}),6:t=>e.jsx(E1,{onComplete:t}),7:t=>e.jsx(em,{onComplete:t}),8:()=>e.jsx(sm,{})},pm=()=>{const{currentAct:t,nextAct:n}=lm();return x.useEffect(()=>{const a=document.createElement("link");return a.rel="stylesheet",a.href=$s,document.head.appendChild(a),()=>{document.head.removeChild(a)}},[]),x.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),e.jsxs(e.Fragment,{children:[e.jsx(Yh,{}),e.jsxs(Qh,{children:[e.jsx(Kh,{}),e.jsx(K,{mode:"wait",children:[1,2,3,4,5,6,7,8].map(a=>{if(t!==a)return null;const r=cm.has(a)?Jh:Xh;return e.jsx(r,{variants:ef,initial:"enter",animate:"center",exit:"exit",children:dm[a](n)},`act${a}`)})})]})]})},xm=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},um=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),hm=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),fm=o.div`
  min-height: 100vh;
  position: relative;
`,gm=o.main`
  position: relative;
  z-index: 1;
`,mm=o.a`
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
`,ym=N`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,jo=o.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,wo=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${ym} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ko=o.p`
  color: var(--text-secondary);
  font-size: 15px;
`,vm=o.button`
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
`,bm=()=>{const t=Js(),n=$o();return x.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function jm(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=al(),i=x.useMemo(()=>xm()?um:hm,[]);return n||!t&&!a?e.jsxs(jo,{children:[e.jsx(wo,{children:e.jsx(i,{})}),e.jsx(ko,{children:"Authenticating..."})]}):a&&!t?e.jsxs(jo,{children:[e.jsx(wo,{style:{animation:"none",opacity:1},children:e.jsx(i,{})}),e.jsx(ko,{children:"Authentication required to continue"}),e.jsx(vm,{onClick:r,children:"Try Again"})]}):e.jsxs(fm,{children:[e.jsx(bm,{}),e.jsx(mm,{href:"#main-content",children:"Skip to main content"}),e.jsx(sl,{}),e.jsx(ml,{}),e.jsx(gm,{id:"main-content",children:e.jsxs(Xs,{children:[e.jsx(jt,{path:"/",element:e.jsx(Ll,{})}),e.jsx(jt,{path:"/tax-manager",element:e.jsx(Ac,{})}),e.jsx(jt,{path:"/netfolio",element:e.jsx(ch,{})}),e.jsx(jt,{path:"/expense-manager",element:e.jsx(Aa,{to:"/netfolio",replace:!0})}),e.jsx(jt,{path:"/canvas-manager",element:e.jsx(Hh,{})}),e.jsx(jt,{path:"/tax-calculator",element:e.jsx(Aa,{to:"/tax-manager",replace:!0})})]})})]})}function wm(){return $o().pathname==="/us"?e.jsxs(Pa,{children:[e.jsx(Oa,{}),e.jsx(pm,{})]}):e.jsx(Pa,{children:e.jsxs(rl,{children:[e.jsx(Oa,{}),e.jsx(jm,{})]})})}function km(){return e.jsx(Ks,{basename:"/tools",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(wm,{})})}To(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(km,{})}));
