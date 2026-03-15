import{j as t,m as C,A as te}from"./vendor-animation-IVPYdfZu.js";import{a as _a,r as h,L as Kn,B as Ui,R as Gi,b as qe,N as kr,u as qi,c as Ki}from"./vendor-react-DST-UJPA.js";import{f as Ji,d as o,m as lt,l as We}from"./vendor-styles-CTnQ9FWC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();var $a,Sr=_a;$a=Sr.createRoot,Sr.hydrateRoot;const Ma=h.createContext({isDark:!0,toggleTheme:()=>{}}),Xi=({children:e})=>{const[n,a]=h.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),h.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),l=s=>{localStorage.getItem("theme")||a(s.matches)};return i.addEventListener("change",l),()=>i.removeEventListener("change",l)},[]);const r=()=>a(!n);return t.jsx(Ma.Provider,{value:{isDark:n,toggleTheme:r},children:e})},Jn=()=>{const e=h.useContext(Ma);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},Pa=h.createContext(null),cn="tools-auth-session",dn="tools-webauthn-credential",Zi=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Qi=async()=>{if(!Zi())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},un=()=>{const e=new Uint8Array(32);return crypto.getRandomValues(e),e},eo=e=>{const n=new Uint8Array(e);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},to=e=>{const n=atob(e),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},no=({children:e})=>{const[n,a]=h.useState(!1),[r,i]=h.useState(!0),[l,s]=h.useState(!1),d=h.useRef(!1),x=async()=>{try{const f={challenge:un(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:un(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},v=await navigator.credentials.create({publicKey:f});return v?(localStorage.setItem(dn,eo(v.rawId)),!0):!1}catch(p){return console.error("Registration failed:",p),!1}},c=async()=>{try{const p=localStorage.getItem(dn),v={challenge:un(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...p&&{allowCredentials:[{type:"public-key",id:to(p),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:v})}catch(p){return console.error("Authentication failed:",p),!1}},u=h.useCallback(async()=>{i(!0),s(!1);const p=sessionStorage.getItem(cn);if(p)try{const{timestamp:v}=JSON.parse(p);if(Date.now()-v<24*60*60*1e3){a(!0),i(!1);return}}catch{}if(!await Qi()){a(!0),sessionStorage.setItem(cn,JSON.stringify({timestamp:Date.now()})),i(!1);return}try{const v=localStorage.getItem(dn);let y=!1;v?y=await c():y=await x(),y?(a(!0),sessionStorage.setItem(cn,JSON.stringify({timestamp:Date.now()}))):s(!0)}catch{s(!0)}i(!1)},[]);h.useEffect(()=>{d.current||(d.current=!0,u())},[u]);const g=h.useCallback(()=>{u()},[u]);return t.jsx(Pa.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:l,retryAuth:g},children:e})},ro=()=>{const e=h.useContext(Pa);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},ao=Ji`
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
`,io=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,oo=o.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:e})=>e?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,so=()=>{const{isDark:e}=Jn();return t.jsx(io,{children:t.jsx(oo,{$isDark:e})})},lo=o(C.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,co=o.div`
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
`,uo=o(Kn)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,po=o.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,xo=o.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,ho=o(C.button)`
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
`,go=o(C.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,fo=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"5"}),t.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),t.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),t.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),t.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),t.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),t.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),t.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),t.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),vo=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),mo=()=>{const{isDark:e,toggleTheme:n}=Jn();return t.jsx(lo,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:t.jsxs(co,{children:[t.jsx(uo,{to:"/","aria-label":"Go to homepage",children:t.jsx(po,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),t.jsx(xo,{}),t.jsx(ho,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":e?"Switch to light mode":"Switch to dark mode",children:t.jsx(te,{mode:"wait",children:t.jsx(go,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:e?t.jsx(vo,{}):t.jsx(fo,{})},e?"moon":"sun")})})]})})},yo=o(C.div)`
  position: relative;
`,bo=o(Kn)`
  display: block;
  text-decoration: none;
  color: inherit;
`,Fa=o(C.div)`
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
`,jo=o(C.div)`
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

  ${Fa}:hover &::before {
    opacity: 0.3;
  }
`,wo=o.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,ko={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},So={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},Co=({title:e,icon:n,to:a})=>t.jsx(yo,{variants:ko,whileHover:"hover",whileTap:"tap",children:t.jsx(bo,{to:a,children:t.jsxs(Fa,{variants:So,children:[t.jsx(jo,{children:n}),t.jsx(wo,{children:e})]})})}),Do=o.div`
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
`,To=o(C.div)`
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
`,Io={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Ao=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),t.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),t.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),t.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),t.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),t.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),t.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),t.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),t.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),t.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),t.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),Oo=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),t.jsx("path",{d:"M1 10h22"}),t.jsx("path",{d:"M17 14h.01"})]}),Lo=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),t.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),t.jsx("polyline",{points:"21 15 16 10 5 21"})]}),_o=[{id:"tax-manager",title:"Tax Manager",icon:t.jsx(Ao,{}),to:"/tax-manager"},{id:"netfolio",title:"NetFolio",icon:t.jsx(Oo,{}),to:"/netfolio"},{id:"canvas-manager",title:"Canvas Manager",icon:t.jsx(Lo,{}),to:"/canvas-manager"}],$o=()=>t.jsx(Do,{children:t.jsx(To,{variants:Io,initial:"hidden",animate:"visible",children:_o.map(e=>t.jsx(Co,{title:e.title,icon:e.icon,to:e.to},e.id))})}),Na=o.div`
  width: 100%;
  max-width: ${({$maxWidth:e="wide"})=>{switch(e){case"narrow":return"680px";case"content":return"980px";case"wide":return"1200px";case"full":return"1440px";default:return"1200px"}}};
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
`;const Rt=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Cr=75e3,it=4,Mo=12e5,Po=6e4,Dr=5e6,Tr=10,Fo=12,No=1800;function ze(e){const n=e<0,r=Math.abs(Math.round(e)).toString();if(r.length<=3)return(n?"-":"")+r;let i="";const l=r.slice(-3),s=r.slice(0,-3);if(s.length>0){const d=[];let x=s;for(;x.length>0;)x.length>=2?(d.unshift(x.slice(-2)),x=x.slice(0,-2)):(d.unshift(x),x="");i=d.join(",")+","+l}else i=l;return(n?"-":"")+i}function L(e){return"₹"+ze(e)}function _(e){const n=e<0,a=Math.abs(e),r=Math.round(a*100)/100,[i,l]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+ze(parseInt(i))+"."+l}function Ir(e){return e===null?"+":e===0?"0":e>=1e5?`${e/1e5}L`:ze(e)}function Eo(e){for(let n=Rt.length-1;n>=0;n--)if(e>Rt[n].from)return Rt[n].rate;return 0}function Bo(e){const n=[];let a=e,r=0;for(const i of Rt){const l=i.from,d=(i.to??1/0)-l;if(a<=0){n.push({from:l,to:i.to,rate:i.rate,taxableInSlab:0,taxInSlab:0});continue}const x=Math.min(a,d),c=x*i.rate/100;n.push({from:l,to:i.to,rate:i.rate,taxableInSlab:x>0?x:0,taxInSlab:c}),r+=c,a-=x}return{slabs:n,totalTax:r}}function Ro(e,n){if(n>Dr){const r=e*(1+Tr/100)*(1+it/100),i=n-Dr,s=(e+i)*(1+it/100),d=s<r,x=Math.min(r,s),c=x/(1+it/100),u=c-e,g=x-c;return{surchargeApplicable:!0,surchargeRate:Tr,surchargeAmount:u,marginalReliefApplied:d,taxAfterSurcharge:c,cess:g,totalTax:x}}else{const a=e*(it/100),r=e+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:e,cess:a,totalTax:r}}}function Ar(e,n,a,r,i,l,s){const d=e*n/100,x=e-d;let c=0;i==="percentage"?c=e*l/100:i==="amount"&&(c=l);const u=e+c;let g=0,p=0;a&&(r==="percentage"?(g=d*Fo/100,p=g):(g=No*12,p=g));const f=e-p,v=s.map(Z=>({name:Z.name,amount:Z.amount*12})),y=v.reduce((Z,ae)=>Z+ae.amount,0),b=Math.max(0,f-Cr),{slabs:k,totalTax:w}=Bo(b);let S=0,I=w;b<=Mo&&(S=Math.min(w,Po),I=Math.max(0,w-S));const{surchargeApplicable:A,surchargeRate:D,surchargeAmount:$,marginalReliefApplied:j,taxAfterSurcharge:T,cess:P,totalTax:N}=Ro(I,b),R=g+p,G=N,V=g+N+y,m=f-g-N-y,O=m/12,W=f>0?N/f*100:0,Q=Eo(b);let re=0,H=c;if(c>0&&Q>0){let Z=c*Q/100;A&&(Z=Z*(1+D/100)),re=Z*(1+it/100),H=c-re}const B=m+H,ce=B/12;return{baseSalary:e,basicSalary:d,hra:x,bonus:c,totalEarnings:u,employeePF:g,employerPF:p,grossSalary:f,standardDeduction:Cr,additionalDeductions:v,totalAdditionalDeductions:y,taxableIncome:b,slabs:k,taxBeforeSurcharge:w,surchargeApplicable:A,surchargeRate:D,surchargeAmount:$,marginalReliefApplied:j,taxAfterSurcharge:T,cessRate:it,cess:P,totalTax:N,rebate87A:S,totalPFDeduction:R,totalTaxDeduction:G,totalDeductions:V,netSalaryYearly:m,netSalaryMonthly:O,effectiveTaxRate:W,bonusTaxRate:Q,bonusTaxAmount:re,bonusAfterTax:H,totalIncomeYearly:B,totalIncomeMonthly:ce}}function Wo(e){const n=Ar(e.baseSalary,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions);let a=null;const r=e.hikePercentage||0;if(r>0){const i=e.baseSalary*(1+r/100);a=Ar(i,e.basicPercentage,e.calculatePF,e.pfType,e.bonusType,e.bonusValue,e.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const Xn="taxCalculatorInput";function zo(e){localStorage.setItem(Xn,JSON.stringify(e))}function Ho(){localStorage.removeItem(Xn)}function Ea(){const e=localStorage.getItem(Xn);if(e)try{return JSON.parse(e)}catch{return null}return null}const Yo={financialYear:"FY 2025-26"},Vo=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,pt=o.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,xt=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,ht=o.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e||"var(--accent)"};
  }
`,gt=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Uo=o.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,Ke=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Or=o.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,_e=o.input`
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
`,pn=o.div`
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
`,xn=o.div`
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
`,Lr=o.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,ft=o(C.button)`
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$active:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
`,Go=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,hn=o(C.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,gn=o(C.button)`
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
`,qo=o(C.button)`
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
`,Ko=o.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,Jo=o(C.button)`
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
`,Xo=o(C.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Zo=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),t.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),t.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Qo=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),es=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),t.jsx("path",{d:"M12 8v13"}),t.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),t.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),ts=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("path",{d:"M8 12h8"})]}),ns=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),t.jsx("polyline",{points:"16 7 22 7 22 13"})]}),rs=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),t.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),fn=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ht={type:"spring",stiffness:300,damping:30,mass:.8},as={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Ht}},is={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Ht},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Ht},opacity:{duration:.1}}}},os={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Ht},exit:{opacity:0,x:-20,transition:{duration:.15}}};function vn(e){const n=e.replace(/[^\d]/g,"");return n?ze(parseInt(n)):""}function Mt(e){return parseInt(e.replace(/,/g,""))||0}const ss=({onCalculate:e,onReset:n,autoCalculate:a=!1})=>{const[r,i]=h.useState(""),[l,s]=h.useState("50"),[d,x]=h.useState("percentage"),[c,u]=h.useState("none"),[g,p]=h.useState(""),[f,v]=h.useState([]),[y,b]=h.useState(""),[k,w]=h.useState(!1),S=h.useRef(!1);h.useEffect(()=>{const m=Ea();m&&(i(ze(m.baseSalary)),s(m.basicPercentage.toString()),x(m.pfType),u(m.bonusType),p(m.bonusValue>0?m.bonusType==="amount"?ze(m.bonusValue):m.bonusValue.toString():""),v(m.additionalDeductions.map(O=>({name:O.name,amount:ze(O.amount)}))),b(m.hikePercentage>0?m.hikePercentage.toString():"")),w(!0)},[]),h.useEffect(()=>{k&&a&&r&&!S.current&&(S.current=!0,setTimeout(()=>{P()},100))},[k,a,r]);const I=m=>{i(vn(m))},A=m=>{p(vn(m))},D=(m,O)=>{const W=[...f];W[m].amount=vn(O),v(W)},$=()=>{v([...f,{name:"",amount:""}])},j=m=>{v(f.filter((O,W)=>W!==m))},T=(m,O)=>{const W=[...f];W[m].name=O,v(W)},P=()=>{const m={baseSalary:Mt(r),basicPercentage:parseFloat(l)||50,calculatePF:!0,pfType:d,bonusType:c,bonusValue:c==="amount"?Mt(g):parseFloat(g)||0,additionalDeductions:f.filter(O=>O.name&&O.amount).map(O=>({name:O.name,amount:Mt(O.amount)})),hikePercentage:parseFloat(y)||0};zo(m),e(m)},N=()=>{i(""),s("50"),x("percentage"),u("none"),p(""),v([]),b(""),Ho(),n==null||n()},G=Mt(r)>0,V=r||f.length>0||c!=="none"||y;return t.jsxs(Vo,{variants:as,initial:"hidden",animate:"visible",children:[t.jsxs(pt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{$color:"#10b981",children:t.jsx(Zo,{})}),t.jsx(gt,{children:"Salary Details"})]}),t.jsxs(Uo,{children:[t.jsxs(Ke,{children:[t.jsx(Or,{children:"Yearly CTC *"}),t.jsx(pn,{children:t.jsx(_e,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:m=>I(m.target.value)})})]}),t.jsxs(Ke,{children:[t.jsx(Or,{children:"Basic %"}),t.jsx(xn,{children:t.jsx(_e,{type:"number",inputMode:"numeric",placeholder:"50",value:l,onChange:m=>s(m.target.value),min:"0",max:"100"})})]})]})]}),t.jsxs(pt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{$color:"#3b82f6",children:t.jsx(Qo,{})}),t.jsx(gt,{children:"Provident Fund"})]}),t.jsxs(Lr,{children:[t.jsx(ft,{$active:d==="percentage",onClick:()=>x("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),t.jsx(ft,{$active:d==="flat",onClick:()=>x("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),t.jsxs(pt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{$color:"#f59e0b",children:t.jsx(es,{})}),t.jsx(gt,{children:"Bonus (Optional)"})]}),t.jsxs(Lr,{children:[t.jsx(ft,{$active:c==="none",onClick:()=>u("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),t.jsx(ft,{$active:c==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),t.jsx(ft,{$active:c==="amount",onClick:()=>u("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),t.jsx(te,{initial:!1,children:c!=="none"&&t.jsx(C.div,{initial:"hidden",animate:"visible",exit:"exit",variants:is,style:{overflow:"hidden",marginTop:"12px"},children:t.jsxs(hn,{children:[t.jsx(Ke,{style:{flex:1},children:c==="percentage"?t.jsx(xn,{children:t.jsx(_e,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:m=>p(m.target.value)})}):t.jsx(pn,{children:t.jsx(_e,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:m=>A(m.target.value)})})}),t.jsx(te,{children:g&&t.jsx(gn,{onClick:()=>p(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(fn,{})})})]})},"bonus-input")})]}),t.jsxs(pt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{$color:"#ec4899",children:t.jsx(ts,{})}),t.jsx(gt,{children:"Monthly Deductions"})]}),t.jsxs(Go,{children:[t.jsx(te,{mode:"popLayout",children:f.map((m,O)=>t.jsxs(hn,{variants:os,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[t.jsx(Ke,{style:{flex:1},children:t.jsx(_e,{type:"text",placeholder:"Name (e.g., Cab)",value:m.name,onChange:W=>T(O,W.target.value)})}),t.jsx(Ke,{style:{flex:1},children:t.jsx(pn,{children:t.jsx(_e,{type:"text",inputMode:"numeric",placeholder:"Amount",value:m.amount,onChange:W=>D(O,W.target.value)})})}),t.jsx(gn,{onClick:()=>j(O),whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(fn,{})})]},O))}),t.jsxs(qo,{onClick:$,whileHover:{scale:1.01},whileTap:{scale:.99},children:[t.jsx(rs,{}),"Add Deduction"]})]})]}),t.jsxs(pt,{children:[t.jsxs(xt,{children:[t.jsx(ht,{$color:"#8b5cf6",children:t.jsx(ns,{})}),t.jsx(gt,{children:"Hike / Appraisal"})]}),t.jsxs(hn,{children:[t.jsx(Ke,{style:{flex:1},children:t.jsx(xn,{children:t.jsx(_e,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:y,onChange:m=>b(m.target.value),min:"0",max:"200"})})}),t.jsx(te,{children:y&&t.jsx(gn,{onClick:()=>b(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(fn,{})})})]})]}),t.jsxs(Ko,{children:[t.jsx(Jo,{onClick:P,disabled:!G,whileHover:G?{scale:1.02}:{},whileTap:G?{scale:.98}:{},children:"Calculate Tax"}),t.jsx(te,{children:V&&t.jsx(Xo,{onClick:N,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},ls=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$e=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Me=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,Pe=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Fe=o.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${({$color:e})=>e||"var(--accent)"};
  }
`,Ne=o.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,Ee=o.div`
  padding: 16px;
`,vt=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ge=o.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:e})=>e?`${e}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:e})=>e||"var(--accent)"};
`,mn=o(C.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:e})=>e||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,yn=o.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,bn=o.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,Je=o.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$active:e})=>e?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,cs=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xe=o.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,Ze=o.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,Qe=o.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,et=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,je=o.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,J=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,X=o.span`
  font-size: 14px;
  font-weight: ${({$bold:e})=>e?"600":"400"};
  color: ${({$bold:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,F=o.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:e,$negative:n})=>e?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,se=o.div`
  text-align: right;
  flex-shrink: 0;
`,le=o.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:e})=>e?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,ds=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,_r=o(C.div)`
  display: grid;
  grid-template-columns: 1fr 50px 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  
  ${({$header:e})=>e&&`
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
`,Ce=o.div`
  font-size: 13px;
  color: ${({$highlight:e,$muted:n})=>e?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:e})=>e?"600":"500"};
  text-align: ${({$align:e})=>e||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,us=o(C.div)`
  height: 4px;
  background: ${({$color:e})=>e};
  border-radius: 2px;
  margin-top: 4px;
`,ps=o.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,xs=o(C.div)`
  height: 100%;
  background: ${({$color:e})=>e};
`,hs=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,gs=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,fs=o.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:e})=>e};
`,vs=o.span`
  font-size: 12px;
  color: var(--text-secondary);
`,ms=o.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,mt=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,fe=o.div`
  padding: 14px;
  background: ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:e})=>e?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,ve=o.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,me=o.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,yt=o.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,$r=o(C.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,Mr=o.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,ys=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),t.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),t.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),bs=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),t.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),t.jsx("path",{d:"M12 17.5v-11"})]}),js=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),t.jsx("path",{d:"M3 9h18"}),t.jsx("path",{d:"M9 21V9"})]}),ws=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),t.jsx("path",{d:"M12 8v13"}),t.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),t.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Pr=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),t.jsx("polyline",{points:"16 7 22 7 22 13"})]}),ks=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),t.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),t.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),t.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Ss={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Be={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},Cs=({breakdown:e})=>{const[n,a]=h.useState("monthly"),r=n==="monthly"?1/12:1,i=p=>p===0?"#10b981":p<=10?"#3BB4B1":p<=20?"#4361A5":p<=25?"#6B8DD6":"#7BA7D9",l=Math.max(...e.slabs.map(p=>p.taxInSlab),1),d=(()=>{const p=n==="monthly"?.08333333333333333:1,f=[{label:"In-Hand",value:e.netSalaryYearly*p,color:"#10b981"},{label:"Tax",value:e.totalTax*p,color:"#4361A5"},{label:"PF",value:e.employeePF*p,color:"#3BB4B1"}];return e.totalAdditionalDeductions>0&&f.push({label:"Other",value:e.totalAdditionalDeductions*p,color:"#7BA7D9"}),f})(),x=d.reduce((p,f)=>p+f.value,0),c=[];e.surchargeApplicable&&c.push(`<strong>${e.surchargeRate}% surcharge</strong> applied (income > ₹50L)${e.marginalReliefApplied?" with marginal relief":""}`),e.rebate87A>0&&c.push(`<strong>Section 87A rebate</strong> of ${L(e.rebate87A)} applied`),e.effectiveTaxRate>0&&c.push(`Effective tax rate: <strong>${e.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const u=!!e.postHike,g=e.bonus>0;return t.jsxs(ls,{variants:Ss,initial:"hidden",animate:"visible",children:[u&&t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#3b82f6",children:t.jsx(Pr,{})}),t.jsx(Ne,{children:"Base Salary (CTC)"})]}),t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),t.jsx(Ee,{children:t.jsxs(mt,{children:[t.jsxs(fe,{children:[t.jsx(ve,{children:"Current"}),t.jsx(me,{children:L(e.baseSalary)})]}),t.jsxs(fe,{$highlight:!0,children:[t.jsx(ve,{children:"After Hike"}),t.jsx(me,{children:L(e.postHike.baseSalary)}),t.jsxs(yt,{children:["+",L(e.postHike.baseSalary-e.baseSalary)]})]})]})})]}),t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#10b981",children:t.jsx(ys,{})}),t.jsx(Ne,{children:"In-Hand Salary"})]}),t.jsxs(vt,{children:[u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),t.jsxs(bn,{children:[t.jsx(Je,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),t.jsx(Je,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),t.jsx(Ee,{children:u?t.jsxs(mt,{children:[t.jsxs(fe,{children:[t.jsx(ve,{children:"Current"}),t.jsx(me,{children:_(n==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]}),t.jsxs(fe,{$highlight:!0,children:[t.jsxs(ve,{children:["After ",e.hikePercentage,"% Hike"]}),t.jsx(me,{children:_(n==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)}),t.jsxs(yt,{children:["+",L(n==="monthly"?e.postHike.netSalaryMonthly-e.netSalaryMonthly:e.postHike.netSalaryYearly-e.netSalaryYearly)]})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(mn,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:_(n==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)},n),t.jsxs(yn,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#f59e0b",children:t.jsx(ws,{})}),t.jsx(Ne,{children:"Bonus"})]}),u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]}),t.jsxs(Ee,{children:[u?t.jsxs(t.Fragment,{children:[t.jsxs(mt,{children:[t.jsxs(fe,{children:[t.jsx(ve,{children:"Current Gross"}),t.jsx(me,{children:L(e.bonus)})]}),t.jsxs(fe,{$highlight:!0,children:[t.jsx(ve,{children:"After Hike Gross"}),t.jsx(me,{children:L(e.postHike.bonus)}),t.jsxs(yt,{children:["+",L(e.postHike.bonus-e.bonus)]})]})]}),t.jsx(je,{}),t.jsxs(mt,{children:[t.jsxs(fe,{children:[t.jsx(ve,{children:"Current In-Hand"}),t.jsx(me,{children:_(e.bonusAfterTax)})]}),t.jsxs(fe,{$highlight:!0,children:[t.jsx(ve,{children:"After Hike In-Hand"}),t.jsx(me,{children:_(e.postHike.bonusAfterTax)}),t.jsxs(yt,{children:["+",L(e.postHike.bonusAfterTax-e.bonusAfterTax)]})]})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(mn,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:L(e.bonus)}),t.jsx(yn,{children:"Gross Bonus (before tax)"}),t.jsx(je,{}),t.jsxs(J,{children:[t.jsxs(X,{children:["Tax Deducted (",e.bonusTaxRate,"%",e.surchargeApplicable?" + surcharge":""," + cess)"]}),t.jsxs(F,{$negative:!0,children:["-",_(e.bonusTaxAmount)]})]}),t.jsxs(J,{children:[t.jsx(X,{$bold:!0,children:"In-Hand Bonus"}),t.jsx(F,{$highlight:!0,children:_(e.bonusAfterTax)})]})]}),t.jsx(je,{}),t.jsx($r,{style:{borderLeftColor:"#f59e0b"},children:t.jsxs(Mr,{children:["Bonus is taxed at your ",t.jsxs("strong",{children:["highest slab rate (",e.bonusTaxRate,"%)"]}),e.surchargeApplicable?` + ${e.surchargeRate}% surcharge`:""," + ",e.cessRate,"% cess"]})})]})]}),g&&t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#8b5cf6",children:t.jsx(Pr,{})}),t.jsx(Ne,{children:"Total Combined Income"})]}),t.jsxs(vt,{children:[u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),t.jsx(ge,{children:"Yearly"})]})]}),t.jsxs(Ee,{children:[u?t.jsxs(mt,{children:[t.jsxs(fe,{children:[t.jsx(ve,{children:"Current Total"}),t.jsx(me,{children:_(e.totalIncomeYearly)})]}),t.jsxs(fe,{$highlight:!0,children:[t.jsx(ve,{children:"After Hike Total"}),t.jsx(me,{children:_(e.postHike.totalIncomeYearly)}),t.jsxs(yt,{children:["+",L(e.postHike.totalIncomeYearly-e.totalIncomeYearly)]})]})]}):t.jsxs(t.Fragment,{children:[t.jsx(mn,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:_(e.totalIncomeYearly)}),t.jsx(yn,{children:"Base salary + Bonus (after tax)"})]}),t.jsx(je,{}),t.jsxs(J,{children:[t.jsx(X,{children:"Base In-Hand (Yearly)"}),u?t.jsxs(se,{children:[t.jsx(F,{children:_(e.netSalaryYearly)}),t.jsxs(le,{$positive:!0,children:["→ ",_(e.postHike.netSalaryYearly)]})]}):t.jsx(F,{children:_(e.netSalaryYearly)})]}),t.jsxs(J,{children:[t.jsx(X,{children:"Bonus In-Hand"}),u?t.jsxs(se,{children:[t.jsx(F,{children:_(e.bonusAfterTax)}),t.jsxs(le,{$positive:!0,children:["→ ",_(e.postHike.bonusAfterTax)]})]}):t.jsx(F,{children:_(e.bonusAfterTax)})]}),t.jsxs(J,{children:[t.jsx(X,{$bold:!0,children:"Total Combined"}),u?t.jsxs(se,{children:[t.jsx(F,{$highlight:!0,children:_(e.totalIncomeYearly)}),t.jsxs(le,{$positive:!0,children:["→ ",_(e.postHike.totalIncomeYearly)]})]}):t.jsx(F,{$highlight:!0,children:_(e.totalIncomeYearly)})]})]})]}),t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#ec4899",children:t.jsx(js,{})}),t.jsx(Ne,{children:"Summary"})]}),t.jsxs(vt,{children:[u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),t.jsxs(bn,{children:[t.jsx(Je,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),t.jsx(Je,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),t.jsxs(Ee,{children:[t.jsxs(cs,{children:[t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Gross Salary"}),t.jsx(Qe,{children:L(e.grossSalary*r)}),u&&t.jsxs(et,{$positive:!0,children:["→ ",L(e.postHike.grossSalary*r)]})]}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Total Tax"}),t.jsx(Qe,{children:_(e.totalTax*r)}),u&&t.jsxs(et,{children:["→ ",_(e.postHike.totalTax*r)]})]}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Employee PF"}),t.jsx(Qe,{children:L(e.employeePF*r)}),u&&t.jsxs(et,{$positive:!0,children:["→ ",L(e.postHike.employeePF*r)]})]}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Employer PF"}),t.jsx(Qe,{children:L(e.employerPF*r)}),u&&t.jsxs(et,{$positive:!0,children:["→ ",L(e.postHike.employerPF*r)]})]}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Total PF"}),t.jsx(Qe,{children:L((e.employeePF+e.employerPF)*r)}),u&&t.jsxs(et,{$positive:!0,children:["→ ",L((e.postHike.employeePF+e.postHike.employerPF)*r)]})]}),t.jsxs(Xe,{children:[t.jsx(Ze,{children:"Eff. Tax Rate"}),t.jsxs(Qe,{children:[e.effectiveTaxRate.toFixed(2),"%"]}),u&&t.jsxs(et,{children:["→ ",e.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),t.jsx(je,{}),t.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),t.jsx(ps,{children:d.map((p,f)=>t.jsx(xs,{$color:p.color,initial:{width:0},animate:{width:`${p.value/x*100}%`},transition:{delay:.3+f*.1,duration:.5}},f))}),t.jsx(hs,{children:d.map((p,f)=>t.jsxs(gs,{children:[t.jsx(fs,{$color:p.color}),t.jsx(vs,{children:p.label}),t.jsx(ms,{children:L(p.value)})]},f))}),c.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(je,{}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:c.map((p,f)=>t.jsx($r,{children:t.jsx(Mr,{dangerouslySetInnerHTML:{__html:p}})},f))})]})]})]}),t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#10b981",children:t.jsx(ks,{})}),t.jsx(Ne,{children:"Breakdown"})]}),t.jsxs(vt,{children:[u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]}),t.jsxs(bn,{children:[t.jsx(Je,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),t.jsx(Je,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),t.jsxs(Ee,{children:[t.jsxs(J,{children:[t.jsx(X,{children:"Base Salary (CTC)"}),u?t.jsxs(se,{children:[t.jsx(F,{children:L(e.baseSalary*r)}),t.jsxs(le,{$positive:!0,children:["→ ",L(e.postHike.baseSalary*r)]})]}):t.jsx(F,{children:L(e.baseSalary*r)})]}),e.employerPF>0&&t.jsxs(J,{children:[t.jsx(X,{children:"Less: Employer PF"}),u?t.jsxs(se,{children:[t.jsxs(F,{$negative:!0,children:["-",L(e.employerPF*r)]}),t.jsxs(le,{children:["→ -",L(e.postHike.employerPF*r)]})]}):t.jsxs(F,{$negative:!0,children:["-",L(e.employerPF*r)]})]}),t.jsxs(J,{children:[t.jsx(X,{$bold:!0,children:"Gross Salary"}),u?t.jsxs(se,{children:[t.jsx(F,{children:L(e.grossSalary*r)}),t.jsxs(le,{$positive:!0,children:["→ ",L(e.postHike.grossSalary*r)]})]}):t.jsx(F,{children:L(e.grossSalary*r)})]}),t.jsxs(J,{children:[t.jsx(X,{children:"Less: Standard Deduction"}),t.jsxs(F,{$negative:!0,children:["-",L(e.standardDeduction*r)]})]}),t.jsxs(J,{children:[t.jsx(X,{$bold:!0,children:"Taxable Income"}),u?t.jsxs(se,{children:[t.jsx(F,{children:L(e.taxableIncome*r)}),t.jsxs(le,{$positive:!0,children:["→ ",L(e.postHike.taxableIncome*r)]})]}):t.jsx(F,{children:L(e.taxableIncome*r)})]}),t.jsx(je,{}),t.jsxs(J,{children:[t.jsx(X,{children:"Less: Income Tax"}),u?t.jsxs(se,{children:[t.jsxs(F,{$negative:!0,children:["-",_(e.totalTax*r)]}),t.jsxs(le,{children:["→ -",_(e.postHike.totalTax*r)]})]}):t.jsxs(F,{$negative:!0,children:["-",_(e.totalTax*r)]})]}),e.employeePF>0&&t.jsxs(J,{children:[t.jsx(X,{children:"Less: Employee PF"}),u?t.jsxs(se,{children:[t.jsxs(F,{$negative:!0,children:["-",L(e.employeePF*r)]}),t.jsxs(le,{children:["→ -",L(e.postHike.employeePF*r)]})]}):t.jsxs(F,{$negative:!0,children:["-",L(e.employeePF*r)]})]}),e.additionalDeductions.map((p,f)=>t.jsxs(J,{children:[t.jsxs(X,{children:["Less: ",p.name]}),t.jsxs(F,{$negative:!0,children:["-",L(p.amount*r)]})]},f)),t.jsx(je,{}),t.jsxs(J,{children:[t.jsxs(X,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),u?t.jsxs(se,{children:[t.jsx(F,{$highlight:!0,children:_(n==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)}),t.jsxs(le,{$positive:!0,children:["→ ",_(n==="monthly"?e.postHike.netSalaryMonthly:e.postHike.netSalaryYearly)]})]}):t.jsx(F,{$highlight:!0,children:_(n==="monthly"?e.netSalaryMonthly:e.netSalaryYearly)})]})]})]}),t.jsxs($e,{variants:Be,children:[t.jsxs(Me,{children:[t.jsxs(Pe,{children:[t.jsx(Fe,{$color:"#3b82f6",children:t.jsx(bs,{})}),t.jsx(Ne,{children:"Tax Slabs"})]}),t.jsxs(vt,{children:[t.jsx(ge,{children:Yo.financialYear}),u&&t.jsxs(ge,{$color:"#10b981",children:["+",e.hikePercentage,"% Hike"]})]})]}),t.jsxs(Ee,{children:[t.jsxs(ds,{children:[t.jsxs(_r,{$header:!0,children:[t.jsx(Ce,{children:"Slab"}),t.jsx(Ce,{$align:"center",children:"Rate"}),t.jsx(Ce,{$align:"right",children:"Amount"}),t.jsx(Ce,{$align:"right",children:"Tax"})]}),t.jsx(te,{children:e.slabs.map((p,f)=>t.jsxs(_r,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:f*.03},children:[t.jsxs(Ce,{children:[Ir(p.from)," - ",Ir(p.to),p.taxableInSlab>0&&t.jsx(us,{$color:i(p.rate),initial:{width:0},animate:{width:`${Math.max(p.taxInSlab/l*100,8)}%`},transition:{delay:.2+f*.03,duration:.4}})]}),t.jsxs(Ce,{$align:"center",$highlight:p.rate===0,children:[p.rate,"%"]}),t.jsx(Ce,{$align:"right",$muted:p.taxableInSlab===0,children:p.taxableInSlab>0?L(p.taxableInSlab):"-"}),t.jsx(Ce,{$align:"right",$muted:p.taxInSlab===0,children:p.taxInSlab>0?L(p.taxInSlab):"-"})]},f))})]}),t.jsx(je,{}),t.jsxs(J,{children:[t.jsx(X,{children:"Tax Before Surcharge"}),u?t.jsxs(se,{children:[t.jsx(F,{children:_(e.taxBeforeSurcharge)}),t.jsxs(le,{children:["→ ",_(e.postHike.taxBeforeSurcharge)]})]}):t.jsx(F,{children:_(e.taxBeforeSurcharge)})]}),e.rebate87A>0&&t.jsxs(J,{children:[t.jsx(X,{children:"Section 87A Rebate"}),t.jsxs(F,{$negative:!0,children:["-",L(e.rebate87A)]})]}),e.surchargeApplicable&&t.jsxs(J,{children:[t.jsxs(X,{children:["Surcharge (",e.surchargeRate,"%)",e.marginalReliefApplied&&t.jsx(ge,{$color:"#f59e0b",children:"Marginal Relief"})]}),u&&e.postHike.surchargeApplicable?t.jsxs(se,{children:[t.jsx(F,{children:_(e.surchargeAmount)}),t.jsxs(le,{children:["→ ",_(e.postHike.surchargeAmount)]})]}):t.jsx(F,{children:_(e.surchargeAmount)})]}),t.jsxs(J,{children:[t.jsxs(X,{children:["Cess (",e.cessRate,"%)"]}),u?t.jsxs(se,{children:[t.jsx(F,{children:_(e.cess)}),t.jsxs(le,{children:["→ ",_(e.postHike.cess)]})]}):t.jsx(F,{children:_(e.cess)})]}),t.jsxs(J,{children:[t.jsx(X,{$bold:!0,children:"Total Tax"}),u?t.jsxs(se,{children:[t.jsx(F,{$highlight:!0,children:_(e.totalTax)}),t.jsxs(le,{children:["→ ",_(e.postHike.totalTax)]})]}):t.jsx(F,{$highlight:!0,children:_(e.totalTax)})]})]})]})]})},Ds=o(C.div)`
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
`,Ts=o.div`
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
`,Is=o(C.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,As=o(C.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,Os={type:"spring",stiffness:300,damping:30,mass:.8},Ls={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Fr={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Os}},_s=()=>{const[e,n]=h.useState(null),[a,r]=h.useState(!1);h.useEffect(()=>{const s=Ea();s&&s.baseSalary>0&&r(!0)},[]);const i=h.useCallback(s=>{const d=Wo(s);n(d),window.innerWidth<1024&&setTimeout(()=>{var x;(x=document.getElementById("results"))==null||x.scrollIntoView({behavior:"smooth"})},100)},[]),l=h.useCallback(()=>{n(null)},[]);return t.jsx(Ds,{variants:Ls,initial:"hidden",animate:"visible",children:t.jsx(Na,{$maxWidth:"wide",children:t.jsxs(Ts,{children:[t.jsx(Is,{variants:Fr,children:t.jsx(ss,{onCalculate:i,onReset:l,autoCalculate:a})}),t.jsx(As,{id:"results",variants:Fr,children:e&&t.jsx(Cs,{breakdown:e},"results")})]})})})},Te=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",color:"#F58220"},{id:"mutual-funds",name:"Mutual Funds",type:"investment",color:"#8b5cf6"},{id:"ppf",name:"Public Provident Fund",type:"investment",color:"#10b981"},{id:"pf",name:"Provident Fund",type:"investment",color:"#3b82f6"}],Ba="netfolio-transactions",Ra="netfolio-initial-balances";function Pt(e){localStorage.setItem(Ba,JSON.stringify(e))}function $s(){const e=localStorage.getItem(Ba);if(e)try{return JSON.parse(e)}catch{return[]}return[]}function Nr(e){localStorage.setItem(Ra,JSON.stringify(e))}function Ms(){const e=localStorage.getItem(Ra);if(e)try{return JSON.parse(e)}catch{return{}}return{}}function He(e){const n=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function Ps(e){return e===He(new Date)}function Fs(e,n,a,r){const i=n.filter(s=>s.date<=a&&(s.accountId===e.id||s.linkedAccountId===e.id));let l=r[e.id]||0;if(e.type==="bank")for(const s of i)s.accountId===e.id&&(s.type==="bank_credit"?l+=s.amount:s.type==="bank_debit"&&(l-=s.amount)),s.linkedAccountId===e.id&&(s.type==="investment_credit"?l-=s.amount:s.type==="investment_debit"&&(l+=s.amount));else for(const s of i)s.accountId===e.id&&(s.type==="investment_credit"?l+=s.amount:s.type==="investment_debit"&&(l-=s.amount));return{account:e,balance:l}}function Ns(e,n,a){return Te.map(r=>Fs(r,e,n,a))}function Es(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function Bs(e,n,a,r,i,l){return{id:Es(),date:i,type:e,accountId:n,amount:a,description:r,linkedAccountId:l,createdAt:new Date().toISOString()}}function Wt(e){const a=Math.abs(e).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return e<0?`-${a}`:a}function Rs(e){switch(e){case"bank_debit":return"Bank Debit";case"bank_credit":return"Bank Credit";case"investment_credit":return"Investment Deposit";case"investment_debit":return"Investment Withdrawal"}}function Ws(e){return Te.find(n=>n.id===e)}function De(){return Te.filter(e=>e.type==="bank")}function _n(){return Te.filter(e=>e.type==="investment")}function zs(e,n){const a={version:"2.0",exportedAt:new Date().toISOString(),transactions:e,initialBalances:n};return JSON.stringify(a,null,2)}function Hs(e,n){const a=zs(e,n),r=new Blob([a],{type:"application/json"}),i=URL.createObjectURL(r),l=document.createElement("a"),s=new Date().toISOString().split("T")[0];l.href=i,l.download=`netfolio-backup-${s}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(i)}function Ys(e){if(!e||typeof e!="object")return!1;const n=e;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null)return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Vs(e){try{const n=JSON.parse(e);return Ys(n)?n:null}catch{return null}}function Wa(e){var n,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(a=Wa(e[n]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Vt(){for(var e,n,a=0,r="",i=arguments.length;a<i;a++)(e=arguments[a])&&(n=Wa(e))&&(r&&(r+=" "),r+=n);return r}const Us=(e,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const i=Object.getOwnPropertyDescriptor(e,a),l=Object.getOwnPropertyDescriptor(n,a);!Gs(i,l)&&r||Object.defineProperty(e,a,l)},Gs=function(e,n){return e===void 0||e.configurable||e.writable===n.writable&&e.enumerable===n.enumerable&&e.configurable===n.configurable&&(e.writable||e.value===n.value)},qs=(e,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,a)},Ks=(e,n)=>`/* Wrapped ${e}*/
${n}`,Js=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Xs=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Zs=(e,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,i=Ks.bind(null,r,n.toString());Object.defineProperty(i,"name",Xs);const{writable:l,enumerable:s,configurable:d}=Js;Object.defineProperty(e,"toString",{value:i,writable:l,enumerable:s,configurable:d})};function Qs(e,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=e;for(const i of Reflect.ownKeys(n))Us(e,n,i,a);return qs(e,n),Zs(e,n,r),e}const Ft=2147483647,el=new WeakMap,jn=new WeakMap,tl=new WeakMap;function nl(e,n){const a=e.get(n);if(a){if(a.maxAge<=Date.now()){e.delete(n);return}return a}}function za(e,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return e;if(typeof r=="number"&&Number.isFinite(r)){if(r>Ft)throw new TypeError(`The \`maxAge\` option cannot exceed ${Ft}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const i=function(...l){var u;const s=n?n(l):l[0],d=nl(a,s);if(d)return d.data;const x=e.apply(this,l),c=typeof r=="function"?r(...l):r;if(c!==void 0&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return x;if(c>Ft)throw new TypeError(`The \`maxAge\` function result cannot exceed ${Ft}.`)}if(a.set(s,{data:x,maxAge:c===void 0||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),c!==void 0&&c!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var f;a.delete(s),(f=jn.get(i))==null||f.delete(g)},c);(u=g.unref)==null||u.call(g);const p=jn.get(i)??new Set;p.add(g),jn.set(i,p)}return x};return Qs(i,e,{ignoreNonConfigurable:!0}),el.set(i,a),tl.set(i,n??(l=>l[0])),i}function rl(e){return typeof e=="string"}function al(e,n,a){return a.indexOf(e)===n}function il(e){return e.toLowerCase()===e}function Er(e){return e.indexOf(",")===-1?e:e.split(",")}function $n(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var n=e.split(".")[0],a=n===void 0?"":n;return $n(a)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],a=r===void 0?"":r;return $n(a)}if(e.indexOf("-")===-1||!il(e))return e;var i=e.split("-"),l=i[0],s=i[1],d=s===void 0?"":s;return"".concat(l,"-").concat(d.toUpperCase())}function ol(e){var n=e===void 0?{}:e,a=n.useFallbackLocale,r=a===void 0?!0:a,i=n.fallbackLocale,l=i===void 0?"en-US":i,s=[];if(typeof navigator<"u"){for(var d=navigator.languages||[],x=[],c=0,u=d;c<u.length;c++){var g=u[c];x=x.concat(Er(g))}var p=navigator.language,f=p&&Er(p);s=s.concat(x,f)}return r&&s.push(l),s.filter(rl).map($n).filter(al)}var sl=za(ol,{cacheKey:JSON.stringify});function ll(e){return sl(e)[0]||null}var Ha=za(ll,{cacheKey:JSON.stringify});function ke(e,n,a){return function(i,l=a){const s=e(i)+l;return n(s)}}function Dt(e){return function(a){return new Date(e(a).getTime()-1)}}function Tt(e,n){return function(r){return[e(r),n(r)]}}function z(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;const n=Number.parseInt(e,10);if(typeof e=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${e}.`)}function Ie(e){if(e instanceof Date)return e.getMonth();throw new Error(`Failed to get month from date: ${e}.`)}function Ut(e){if(e instanceof Date)return e.getDate();throw new Error(`Failed to get year from date: ${e}.`)}function ct(e){const n=z(e),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const cl=ke(z,ct,-100),Ya=ke(z,ct,100),Zn=Dt(Ya),dl=ke(z,Zn,-100),Va=Tt(ct,Zn);function Ae(e){const n=z(e),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Ua=ke(z,Ae,-10),Qn=ke(z,Ae,10),Gt=Dt(Qn),Ga=ke(z,Gt,-10),qa=Tt(Ae,Gt);function dt(e){const n=z(e),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Ka=ke(z,dt,-1),er=ke(z,dt,1),qt=Dt(er),Ja=ke(z,qt,-1),ul=Tt(dt,qt);function tr(e,n){return function(r,i=n){const l=z(r),s=Ie(r)+i,d=new Date;return d.setFullYear(l,s,1),d.setHours(0,0,0,0),e(d)}}function Ve(e){const n=z(e),a=Ie(e),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Xa=tr(Ve,-1),nr=tr(Ve,1),It=Dt(nr),Za=tr(It,-1),pl=Tt(Ve,It);function xl(e,n){return function(r,i=n){const l=z(r),s=Ie(r),d=Ut(r)+i,x=new Date;return x.setFullYear(l,s,d),x.setHours(0,0,0,0),e(x)}}function At(e){const n=z(e),a=Ie(e),r=Ut(e),i=new Date;return i.setFullYear(n,a,r),i.setHours(0,0,0,0),i}const hl=xl(At,1),rr=Dt(hl),gl=Tt(At,rr);function Qa(e){return Ut(It(e))}var ne={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},fl={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},ar=[0,1,2,3,4,5,6],wn=new Map;function vl(e){return function(a,r){var i=a||Ha();wn.has(i)||wn.set(i,new Map);var l=wn.get(i);return l.has(e)||l.set(e,new Intl.DateTimeFormat(i||void 0,e).format),l.get(e)(r)}}function ml(e){var n=new Date(e);return new Date(n.setHours(12))}function Ue(e){return function(n,a){return vl(e)(n,ml(a))}}var yl={day:"numeric"},bl={day:"numeric",month:"long",year:"numeric"},jl={month:"long"},wl={month:"long",year:"numeric"},kl={weekday:"short"},Sl={weekday:"long"},Cl={year:"numeric"},Dl=Ue(yl),Tl=Ue(bl),Il=Ue(jl),ei=Ue(wl),Al=Ue(kl),Ol=Ue(Sl),Kt=Ue(Cl),Ll=ar[0],_l=ar[5],Br=ar[6];function kt(e,n){n===void 0&&(n=ne.ISO_8601);var a=e.getDay();switch(n){case ne.ISO_8601:return(a+6)%7;case ne.ISLAMIC:return(a+1)%7;case ne.HEBREW:case ne.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function $l(e){var n=ct(e);return z(n)}function Ml(e){var n=Ae(e);return z(n)}function Mn(e,n){n===void 0&&(n=ne.ISO_8601);var a=z(e),r=Ie(e),i=e.getDate()-kt(e,n);return new Date(a,r,i)}function Pl(e,n){n===void 0&&(n=ne.ISO_8601);var a=n===ne.GREGORY?ne.GREGORY:ne.ISO_8601,r=Mn(e,n),i=z(e)+1,l,s;do l=new Date(i,0,a===ne.ISO_8601?4:1),s=Mn(l,n),i-=1;while(e<s);return Math.round((r.getTime()-s.getTime())/(864e5*7))+1}function Ye(e,n){switch(e){case"century":return ct(n);case"decade":return Ae(n);case"year":return dt(n);case"month":return Ve(n);case"day":return At(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function Fl(e,n){switch(e){case"century":return cl(n);case"decade":return Ua(n);case"year":return Ka(n);case"month":return Xa(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function ti(e,n){switch(e){case"century":return Ya(n);case"decade":return Qn(n);case"year":return er(n);case"month":return nr(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function Nl(e,n){switch(e){case"decade":return Ua(n,-100);case"year":return Ka(n,-10);case"month":return Xa(n,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function El(e,n){switch(e){case"decade":return Qn(n,100);case"year":return er(n,10);case"month":return nr(n,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function ni(e,n){switch(e){case"century":return Zn(n);case"decade":return Gt(n);case"year":return qt(n);case"month":return It(n);case"day":return rr(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function Bl(e,n){switch(e){case"century":return dl(n);case"decade":return Ga(n);case"year":return Ja(n);case"month":return Za(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rl(e,n){switch(e){case"decade":return Ga(n,-100);case"year":return Ja(n,-10);case"month":return Za(n,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Rr(e,n){switch(e){case"century":return Va(n);case"decade":return qa(n);case"year":return ul(n);case"month":return pl(n);case"day":return gl(n);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wl(e,n,a){var r=[n,a].sort(function(i,l){return i.getTime()-l.getTime()});return[Ye(e,r[0]),ni(e,r[1])]}function ri(e,n,a){return a.map(function(r){return(n||Kt)(e,r)}).join(" – ")}function zl(e,n,a){return ri(e,n,Va(a))}function ai(e,n,a){return ri(e,n,qa(a))}function Hl(e){return e.getDay()===new Date().getDay()}function ii(e,n){n===void 0&&(n=ne.ISO_8601);var a=e.getDay();switch(n){case ne.ISLAMIC:case ne.HEBREW:return a===_l||a===Br;case ne.ISO_8601:case ne.GREGORY:return a===Br||a===Ll;default:throw new Error("Unsupported calendar type.")}}var ye="react-calendar__navigation";function Yl(e){var n=e.activeStartDate,a=e.drillUp,r=e.formatMonthYear,i=r===void 0?ei:r,l=e.formatYear,s=l===void 0?Kt:l,d=e.locale,x=e.maxDate,c=e.minDate,u=e.navigationAriaLabel,g=u===void 0?"":u,p=e.navigationAriaLive,f=e.navigationLabel,v=e.next2AriaLabel,y=v===void 0?"":v,b=e.next2Label,k=b===void 0?"»":b,w=e.nextAriaLabel,S=w===void 0?"":w,I=e.nextLabel,A=I===void 0?"›":I,D=e.prev2AriaLabel,$=D===void 0?"":D,j=e.prev2Label,T=j===void 0?"«":j,P=e.prevAriaLabel,N=P===void 0?"":P,R=e.prevLabel,G=R===void 0?"‹":R,V=e.setActiveStartDate,m=e.showDoubleView,O=e.view,W=e.views,Q=W.indexOf(O)>0,re=O!=="century",H=Fl(O,n),B=re?Nl(O,n):void 0,ce=ti(O,n),Z=re?El(O,n):void 0,ae=function(){if(H.getFullYear()<0)return!0;var K=Bl(O,n);return c&&c>=K}(),E=re&&function(){if(B.getFullYear()<0)return!0;var K=Rl(O,n);return c&&c>=K}(),ee=x&&x<ce,Oe=re&&x&&x<Z;function be(){V(H,"prev")}function ue(){V(B,"prev2")}function Ge(){V(ce,"next")}function Le(){V(Z,"next2")}function Se(K){var ut=function(){switch(O){case"century":return zl(d,s,K);case"decade":return ai(d,s,K);case"year":return s(d,K);case"month":return i(d,K);default:throw new Error("Invalid view: ".concat(O,"."))}}();return f?f({date:K,label:ut,locale:d||Ha()||void 0,view:O}):ut}function Zt(){var K="".concat(ye,"__label");return t.jsxs("button",{"aria-label":g,"aria-live":p,className:K,disabled:!Q,onClick:a,style:{flexGrow:1},type:"button",children:[t.jsx("span",{className:"".concat(K,"__labelText ").concat(K,"__labelText--from"),children:Se(n)}),m?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"".concat(K,"__divider"),children:" – "}),t.jsx("span",{className:"".concat(K,"__labelText ").concat(K,"__labelText--to"),children:Se(ce)})]}):null]})}return t.jsxs("div",{className:ye,children:[T!==null&&re?t.jsx("button",{"aria-label":$,className:"".concat(ye,"__arrow ").concat(ye,"__prev2-button"),disabled:E,onClick:ue,type:"button",children:T}):null,G!==null&&t.jsx("button",{"aria-label":N,className:"".concat(ye,"__arrow ").concat(ye,"__prev-button"),disabled:ae,onClick:be,type:"button",children:G}),Zt(),A!==null&&t.jsx("button",{"aria-label":S,className:"".concat(ye,"__arrow ").concat(ye,"__next-button"),disabled:ee,onClick:Ge,type:"button",children:A}),k!==null&&re?t.jsx("button",{"aria-label":y,className:"".concat(ye,"__arrow ").concat(ye,"__next2-button"),disabled:Oe,onClick:Le,type:"button",children:k}):null]})}var ot=function(){return ot=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ot.apply(this,arguments)},Vl=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function Wr(e){return"".concat(e,"%")}function ir(e){var n=e.children,a=e.className,r=e.count,i=e.direction,l=e.offset,s=e.style,d=e.wrap,x=Vl(e,["children","className","count","direction","offset","style","wrap"]);return t.jsx("div",ot({className:a,style:ot({display:"flex",flexDirection:i,flexWrap:d?"wrap":"nowrap"},s)},x,{children:h.Children.map(n,function(c,u){var g=l&&u===0?Wr(100*l/r):null;return h.cloneElement(c,ot(ot({},c.props),{style:{flexBasis:Wr(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function Ul(e,n,a){return n&&n>e?n:a&&a<e?a:e}function St(e,n){return n[0]<=e&&n[1]>=e}function Gl(e,n){return e[0]<=n[0]&&e[1]>=n[1]}function oi(e,n){return St(e[0],n)||St(e[1],n)}function zr(e,n,a){var r=oi(n,e),i=[];if(r){i.push(a);var l=St(e[0],n),s=St(e[1],n);l&&i.push("".concat(a,"Start")),s&&i.push("".concat(a,"End")),l&&s&&i.push("".concat(a,"BothEnds"))}return i}function ql(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function Kl(e){if(!e)throw new Error("args is required");var n=e.value,a=e.date,r=e.hover,i="react-calendar__tile",l=[i];if(!a)return l;var s=new Date,d=function(){if(Array.isArray(a))return a;var f=e.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return Rr(f,a)}();if(St(s,d)&&l.push("".concat(i,"--now")),!n||!ql(n))return l;var x=function(){if(Array.isArray(n))return n;var f=e.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return Rr(f,n)}();Gl(x,d)?l.push("".concat(i,"--active")):oi(x,d)&&l.push("".concat(i,"--hasActive"));var c=zr(x,d,"".concat(i,"--range"));l.push.apply(l,c);var u=Array.isArray(n)?n:[n];if(r&&u.length===1){var g=r>x[0]?[x[0],r]:[r,x[0]],p=zr(g,d,"".concat(i,"--hover"));l.push.apply(l,p)}return l}function Jt(e){for(var n=e.className,a=e.count,r=a===void 0?3:a,i=e.dateTransform,l=e.dateType,s=e.end,d=e.hover,x=e.offset,c=e.renderTile,u=e.start,g=e.step,p=g===void 0?1:g,f=e.value,v=e.valueType,y=[],b=u;b<=s;b+=p){var k=i(b);y.push(c({classes:Kl({date:k,dateType:l,hover:d,value:f,valueType:v}),date:k}))}return t.jsx(ir,{className:n,count:r,offset:x,wrap:!0,children:y})}function Xt(e){var n=e.activeStartDate,a=e.children,r=e.classes,i=e.date,l=e.formatAbbr,s=e.locale,d=e.maxDate,x=e.maxDateTransform,c=e.minDate,u=e.minDateTransform,g=e.onClick,p=e.onMouseOver,f=e.style,v=e.tileClassName,y=e.tileContent,b=e.tileDisabled,k=e.view,w=h.useMemo(function(){var I={activeStartDate:n,date:i,view:k};return typeof v=="function"?v(I):v},[n,i,v,k]),S=h.useMemo(function(){var I={activeStartDate:n,date:i,view:k};return typeof y=="function"?y(I):y},[n,i,y,k]);return t.jsxs("button",{className:Vt(r,w),disabled:c&&u(c)>i||d&&x(d)<i||(b==null?void 0:b({activeStartDate:n,date:i,view:k})),onClick:g?function(I){return g(i,I)}:void 0,onFocus:p?function(){return p(i)}:void 0,onMouseOver:p?function(){return p(i)}:void 0,style:f,type:"button",children:[l?t.jsx("abbr",{"aria-label":l(s,i),children:a}):a,S]})}var Pn=function(){return Pn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Pn.apply(this,arguments)},Jl=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a},Hr="react-calendar__century-view__decades__decade";function Xl(e){var n=e.classes,a=n===void 0?[]:n,r=e.currentCentury,i=e.formatYear,l=i===void 0?Kt:i,s=Jl(e,["classes","currentCentury","formatYear"]),d=s.date,x=s.locale,c=[];return a&&c.push.apply(c,a),c.push(Hr),ct(d).getFullYear()!==r&&c.push("".concat(Hr,"--neighboringCentury")),t.jsx(Xt,Pn({},s,{classes:c,maxDateTransform:Gt,minDateTransform:Ae,view:"century",children:ai(x,l,d)}))}var Fn=function(){return Fn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Fn.apply(this,arguments)},Yr=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function Zl(e){var n=e.activeStartDate,a=e.hover,r=e.showNeighboringCentury,i=e.value,l=e.valueType,s=Yr(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),d=$l(n),x=d+(r?119:99);return t.jsx(Jt,{className:"react-calendar__century-view__decades",dateTransform:Ae,dateType:"decade",end:x,hover:a,renderTile:function(c){var u=c.date,g=Yr(c,["date"]);return t.jsx(Xl,Fn({},s,g,{activeStartDate:n,currentCentury:d,date:u}),u.getTime())},start:d,step:10,value:i,valueType:l})}var Nn=function(){return Nn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Nn.apply(this,arguments)};function Ql(e){function n(){return t.jsx(Zl,Nn({},e))}return t.jsx("div",{className:"react-calendar__century-view",children:n()})}var En=function(){return En=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},En.apply(this,arguments)},ec=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a},Vr="react-calendar__decade-view__years__year";function tc(e){var n=e.classes,a=n===void 0?[]:n,r=e.currentDecade,i=e.formatYear,l=i===void 0?Kt:i,s=ec(e,["classes","currentDecade","formatYear"]),d=s.date,x=s.locale,c=[];return a&&c.push.apply(c,a),c.push(Vr),Ae(d).getFullYear()!==r&&c.push("".concat(Vr,"--neighboringDecade")),t.jsx(Xt,En({},s,{classes:c,maxDateTransform:qt,minDateTransform:dt,view:"decade",children:l(x,d)}))}var Bn=function(){return Bn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Bn.apply(this,arguments)},Ur=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function nc(e){var n=e.activeStartDate,a=e.hover,r=e.showNeighboringDecade,i=e.value,l=e.valueType,s=Ur(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),d=Ml(n),x=d+(r?11:9);return t.jsx(Jt,{className:"react-calendar__decade-view__years",dateTransform:dt,dateType:"year",end:x,hover:a,renderTile:function(c){var u=c.date,g=Ur(c,["date"]);return t.jsx(tc,Bn({},s,g,{activeStartDate:n,currentDecade:d,date:u}),u.getTime())},start:d,value:i,valueType:l})}var Rn=function(){return Rn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Rn.apply(this,arguments)};function rc(e){function n(){return t.jsx(nc,Rn({},e))}return t.jsx("div",{className:"react-calendar__decade-view",children:n()})}var Wn=function(){return Wn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Wn.apply(this,arguments)},ac=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a},Gr=function(e,n,a){if(a||arguments.length===2)for(var r=0,i=n.length,l;r<i;r++)(l||!(r in n))&&(l||(l=Array.prototype.slice.call(n,0,r)),l[r]=n[r]);return e.concat(l||Array.prototype.slice.call(n))},ic="react-calendar__year-view__months__month";function oc(e){var n=e.classes,a=n===void 0?[]:n,r=e.formatMonth,i=r===void 0?Il:r,l=e.formatMonthYear,s=l===void 0?ei:l,d=ac(e,["classes","formatMonth","formatMonthYear"]),x=d.date,c=d.locale;return t.jsx(Xt,Wn({},d,{classes:Gr(Gr([],a,!0),[ic],!1),formatAbbr:s,maxDateTransform:It,minDateTransform:Ve,view:"year",children:i(c,x)}))}var zn=function(){return zn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},zn.apply(this,arguments)},qr=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function sc(e){var n=e.activeStartDate,a=e.hover,r=e.value,i=e.valueType,l=qr(e,["activeStartDate","hover","value","valueType"]),s=0,d=11,x=z(n);return t.jsx(Jt,{className:"react-calendar__year-view__months",dateTransform:function(c){var u=new Date;return u.setFullYear(x,c,1),Ve(u)},dateType:"month",end:d,hover:a,renderTile:function(c){var u=c.date,g=qr(c,["date"]);return t.jsx(oc,zn({},l,g,{activeStartDate:n,date:u}),u.getTime())},start:s,value:r,valueType:i})}var Hn=function(){return Hn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Hn.apply(this,arguments)};function lc(e){function n(){return t.jsx(sc,Hn({},e))}return t.jsx("div",{className:"react-calendar__year-view",children:n()})}var Yn=function(){return Yn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Yn.apply(this,arguments)},cc=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a},kn="react-calendar__month-view__days__day";function dc(e){var n=e.calendarType,a=e.classes,r=a===void 0?[]:a,i=e.currentMonthIndex,l=e.formatDay,s=l===void 0?Dl:l,d=e.formatLongDate,x=d===void 0?Tl:d,c=cc(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),u=c.date,g=c.locale,p=[];return r&&p.push.apply(p,r),p.push(kn),ii(u,n)&&p.push("".concat(kn,"--weekend")),u.getMonth()!==i&&p.push("".concat(kn,"--neighboringMonth")),t.jsx(Xt,Yn({},c,{classes:p,formatAbbr:x,maxDateTransform:rr,minDateTransform:At,view:"month",children:s(g,u)}))}var Vn=function(){return Vn=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Vn.apply(this,arguments)},Kr=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function uc(e){var n=e.activeStartDate,a=e.calendarType,r=e.hover,i=e.showFixedNumberOfWeeks,l=e.showNeighboringMonth,s=e.value,d=e.valueType,x=Kr(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),c=z(n),u=Ie(n),g=i||l,p=kt(n,a),f=g?0:p,v=(g?-p:0)+1,y=function(){if(i)return v+6*7-1;var b=Qa(n);if(l){var k=new Date;k.setFullYear(c,u,b),k.setHours(0,0,0,0);var w=7-kt(k,a)-1;return b+w}return b}();return t.jsx(Jt,{className:"react-calendar__month-view__days",count:7,dateTransform:function(b){var k=new Date;return k.setFullYear(c,u,b),At(k)},dateType:"day",hover:r,end:y,renderTile:function(b){var k=b.date,w=Kr(b,["date"]);return t.jsx(dc,Vn({},x,w,{activeStartDate:n,calendarType:a,currentMonthIndex:u,date:k}),k.getTime())},offset:f,start:v,value:s,valueType:d})}var si="react-calendar__month-view__weekdays",Sn="".concat(si,"__weekday");function pc(e){for(var n=e.calendarType,a=e.formatShortWeekday,r=a===void 0?Al:a,i=e.formatWeekday,l=i===void 0?Ol:i,s=e.locale,d=e.onMouseLeave,x=new Date,c=Ve(x),u=z(c),g=Ie(c),p=[],f=1;f<=7;f+=1){var v=new Date(u,g,f-kt(c,n)),y=l(s,v);p.push(t.jsx("div",{className:Vt(Sn,Hl(v)&&"".concat(Sn,"--current"),ii(v,n)&&"".concat(Sn,"--weekend")),children:t.jsx("abbr",{"aria-label":y,title:y,children:r(s,v).replace(".","")})},f))}return t.jsx(ir,{className:si,count:7,onFocus:d,onMouseOver:d,children:p})}var Yt=function(){return Yt=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Yt.apply(this,arguments)},Jr=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a},Xr="react-calendar__tile";function xc(e){var n=e.onClickWeekNumber,a=e.weekNumber,r=t.jsx("span",{children:a});if(n){var i=e.date,l=e.onClickWeekNumber,s=e.weekNumber,d=Jr(e,["date","onClickWeekNumber","weekNumber"]);return t.jsx("button",Yt({},d,{className:Xr,onClick:function(x){return l(s,i,x)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var d=Jr(e,["date","onClickWeekNumber","weekNumber"]);return t.jsx("div",Yt({},d,{className:Xr,children:r}))}}function hc(e){var n=e.activeStartDate,a=e.calendarType,r=e.onClickWeekNumber,i=e.onMouseLeave,l=e.showFixedNumberOfWeeks,s=function(){if(l)return 6;var c=Qa(n),u=kt(n,a),g=c-(7-u);return 1+Math.ceil(g/7)}(),d=function(){for(var c=z(n),u=Ie(n),g=Ut(n),p=[],f=0;f<s;f+=1)p.push(Mn(new Date(c,u,g+f*7),a));return p}(),x=d.map(function(c){return Pl(c,a)});return t.jsx(ir,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:x.map(function(c,u){var g=d[u];if(!g)throw new Error("date is not defined");return t.jsx(xc,{date:g,onClickWeekNumber:r,weekNumber:c},c)})})}var Un=function(){return Un=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Un.apply(this,arguments)},gc=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function fc(e){if(e)for(var n=0,a=Object.entries(fl);n<a.length;n++){var r=a[n],i=r[0],l=r[1];if(l.includes(e))return i}return ne.ISO_8601}function vc(e){var n=e.activeStartDate,a=e.locale,r=e.onMouseLeave,i=e.showFixedNumberOfWeeks,l=e.calendarType,s=l===void 0?fc(a):l,d=e.formatShortWeekday,x=e.formatWeekday,c=e.onClickWeekNumber,u=e.showWeekNumbers,g=gc(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return t.jsx(pc,{calendarType:s,formatShortWeekday:d,formatWeekday:x,locale:a,onMouseLeave:r})}function f(){return u?t.jsx(hc,{activeStartDate:n,calendarType:s,onClickWeekNumber:c,onMouseLeave:r,showFixedNumberOfWeeks:i}):null}function v(){return t.jsx(uc,Un({calendarType:s},g))}var y="react-calendar__month-view";return t.jsx("div",{className:Vt(y,u?"".concat(y,"--weekNumbers"):""),children:t.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[f(),t.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),v()]})]})})}var st=function(){return st=Object.assign||function(e){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},st.apply(this,arguments)},Nt="react-calendar",zt=["century","decade","year","month"],mc=["decade","year","month","day"],or=new Date;or.setFullYear(1,0,1);or.setHours(0,0,0,0);var yc=new Date(864e13);function wt(e){return e instanceof Date?e:new Date(e)}function li(e,n){return zt.slice(zt.indexOf(e),zt.indexOf(n)+1)}function bc(e,n,a){var r=li(n,a);return r.indexOf(e)!==-1}function sr(e,n,a){return e&&bc(e,n,a)?e:a}function ci(e){var n=zt.indexOf(e);return mc[n]}function jc(e,n){var a=Array.isArray(e)?e[n]:e;if(!a)return null;var r=wt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function di(e,n){var a=e.value,r=e.minDate,i=e.maxDate,l=e.maxDetail,s=jc(a,n);if(!s)return null;var d=ci(l),x=function(){switch(n){case 0:return Ye(d,s);case 1:return ni(d,s);default:throw new Error("Invalid index value: ".concat(n))}}();return Ul(x,r,i)}var lr=function(e){return di(e,0)},ui=function(e){return di(e,1)},wc=function(e){return[lr,ui].map(function(n){return n(e)})};function pi(e){var n=e.maxDate,a=e.maxDetail,r=e.minDate,i=e.minDetail,l=e.value,s=e.view,d=sr(s,i,a),x=lr({value:l,minDate:r,maxDate:n,maxDetail:a})||new Date;return Ye(d,x)}function kc(e){var n=e.activeStartDate,a=e.defaultActiveStartDate,r=e.defaultValue,i=e.defaultView,l=e.maxDate,s=e.maxDetail,d=e.minDate,x=e.minDetail,c=e.value,u=e.view,g=sr(u,x,s),p=n||a;return p?Ye(g,p):pi({maxDate:l,maxDetail:s,minDate:d,minDetail:x,value:c||r,view:u||i})}function Cn(e){return e&&(!Array.isArray(e)||e.length===1)}function Et(e,n){return e instanceof Date&&n instanceof Date&&e.getTime()===n.getTime()}var Sc=h.forwardRef(function(n,a){var r=n.activeStartDate,i=n.allowPartialRange,l=n.calendarType,s=n.className,d=n.defaultActiveStartDate,x=n.defaultValue,c=n.defaultView,u=n.formatDay,g=n.formatLongDate,p=n.formatMonth,f=n.formatMonthYear,v=n.formatShortWeekday,y=n.formatWeekday,b=n.formatYear,k=n.goToRangeStartOnSelect,w=k===void 0?!0:k,S=n.inputRef,I=n.locale,A=n.maxDate,D=A===void 0?yc:A,$=n.maxDetail,j=$===void 0?"month":$,T=n.minDate,P=T===void 0?or:T,N=n.minDetail,R=N===void 0?"century":N,G=n.navigationAriaLabel,V=n.navigationAriaLive,m=n.navigationLabel,O=n.next2AriaLabel,W=n.next2Label,Q=n.nextAriaLabel,re=n.nextLabel,H=n.onActiveStartDateChange,B=n.onChange,ce=n.onClickDay,Z=n.onClickDecade,ae=n.onClickMonth,E=n.onClickWeekNumber,ee=n.onClickYear,Oe=n.onDrillDown,be=n.onDrillUp,ue=n.onViewChange,Ge=n.prev2AriaLabel,Le=n.prev2Label,Se=n.prevAriaLabel,Zt=n.prevLabel,K=n.returnValue,ut=K===void 0?"start":K,de=n.selectRange,Ot=n.showDoubleView,dr=n.showFixedNumberOfWeeks,ur=n.showNavigation,Ii=ur===void 0?!0:ur,Ai=n.showNeighboringCentury,Oi=n.showNeighboringDecade,pr=n.showNeighboringMonth,Li=pr===void 0?!0:pr,_i=n.showWeekNumbers,$i=n.tileClassName,Mi=n.tileContent,Pi=n.tileDisabled,Qt=n.value,xr=n.view,hr=h.useState(d),Fi=hr[0],Lt=hr[1],gr=h.useState(null),Ni=gr[0],fr=gr[1],vr=h.useState(Array.isArray(x)?x.map(function(M){return M!==null?wt(M):null}):x!=null?wt(x):null),en=vr[0],Ei=vr[1],mr=h.useState(c),Bi=mr[0],yr=mr[1],ie=r||Fi||kc({activeStartDate:r,defaultActiveStartDate:d,defaultValue:x,defaultView:c,maxDate:D,maxDetail:j,minDate:P,minDetail:R,value:Qt,view:xr}),oe=function(){var M=function(){return de&&Cn(en)?en:Qt!==void 0?Qt:en}();return M?Array.isArray(M)?M.map(function(U){return U!==null?wt(U):null}):M!==null?wt(M):null:null}(),_t=ci(j),Y=sr(xr||Bi,R,j),he=li(R,j),Ri=de?Ni:null,tn=he.indexOf(Y)<he.length-1,br=he.indexOf(Y)>0,jr=h.useCallback(function(M){var U=function(){switch(ut){case"start":return lr;case"end":return ui;case"range":return wc;default:throw new Error("Invalid returnValue.")}}();return U({maxDate:D,maxDetail:j,minDate:P,value:M})},[D,j,P,ut]),nn=h.useCallback(function(M,U){Lt(M);var q={action:U,activeStartDate:M,value:oe,view:Y};H&&!Et(ie,M)&&H(q)},[ie,H,oe,Y]),$t=h.useCallback(function(M,U){var q=function(){switch(Y){case"century":return Z;case"decade":return ee;case"year":return ae;case"month":return ce;default:throw new Error("Invalid view: ".concat(Y,"."))}}();q&&q(M,U)},[ce,Z,ae,ee,Y]),rn=h.useCallback(function(M,U){if(tn){$t(M,U);var q=he[he.indexOf(Y)+1];if(!q)throw new Error("Attempted to drill down from the lowest view.");Lt(M),yr(q);var pe={action:"drillDown",activeStartDate:M,value:oe,view:q};H&&!Et(ie,M)&&H(pe),ue&&Y!==q&&ue(pe),Oe&&Oe(pe)}},[ie,tn,H,$t,Oe,ue,oe,Y,he]),an=h.useCallback(function(){if(br){var M=he[he.indexOf(Y)-1];if(!M)throw new Error("Attempted to drill up from the highest view.");var U=Ye(M,ie);Lt(U),yr(M);var q={action:"drillUp",activeStartDate:U,value:oe,view:M};H&&!Et(ie,U)&&H(q),ue&&Y!==M&&ue(q),be&&be(q)}},[ie,br,H,be,ue,oe,Y,he]),on=h.useCallback(function(M,U){var q=oe;$t(M,U);var pe=de&&!Cn(q),xe;if(de)if(pe)xe=Ye(_t,M);else{if(!q)throw new Error("previousValue is required");if(Array.isArray(q))throw new Error("previousValue must not be an array");xe=Wl(_t,q,M)}else xe=jr(M);var ln=!de||pe||w?pi({maxDate:D,maxDetail:j,minDate:P,minDetail:R,value:xe,view:Y}):null;U.persist(),Lt(ln),Ei(xe);var Yi={action:"onChange",activeStartDate:ln,value:xe,view:Y};if(H&&!Et(ie,ln)&&H(Yi),B)if(de){var Vi=Cn(xe);if(!Vi)B(xe||null,U);else if(i){if(Array.isArray(xe))throw new Error("value must not be an array");B([xe||null,null],U)}}else B(xe||null,U)},[ie,i,jr,w,D,j,P,R,H,B,$t,de,oe,_t,Y]);function Wi(M){fr(M)}function sn(){fr(null)}h.useImperativeHandle(a,function(){return{activeStartDate:ie,drillDown:rn,drillUp:an,onChange:on,setActiveStartDate:nn,value:oe,view:Y}},[ie,rn,an,on,nn,oe,Y]);function wr(M){var U=M?ti(Y,ie):Ye(Y,ie),q=tn?rn:on,pe={activeStartDate:U,hover:Ri,locale:I,maxDate:D,minDate:P,onClick:q,onMouseOver:de?Wi:void 0,tileClassName:$i,tileContent:Mi,tileDisabled:Pi,value:oe,valueType:_t};switch(Y){case"century":return t.jsx(Ql,st({formatYear:b,showNeighboringCentury:Ai},pe));case"decade":return t.jsx(rc,st({formatYear:b,showNeighboringDecade:Oi},pe));case"year":return t.jsx(lc,st({formatMonth:p,formatMonthYear:f},pe));case"month":return t.jsx(vc,st({calendarType:l,formatDay:u,formatLongDate:g,formatShortWeekday:v,formatWeekday:y,onClickWeekNumber:E,onMouseLeave:de?sn:void 0,showFixedNumberOfWeeks:typeof dr<"u"?dr:Ot,showNeighboringMonth:Li,showWeekNumbers:_i},pe));default:throw new Error("Invalid view: ".concat(Y,"."))}}function zi(){return Ii?t.jsx(Yl,{activeStartDate:ie,drillUp:an,formatMonthYear:f,formatYear:b,locale:I,maxDate:D,minDate:P,navigationAriaLabel:G,navigationAriaLive:V,navigationLabel:m,next2AriaLabel:O,next2Label:W,nextAriaLabel:Q,nextLabel:re,prev2AriaLabel:Ge,prev2Label:Le,prevAriaLabel:Se,prevLabel:Zt,setActiveStartDate:nn,showDoubleView:Ot,view:Y,views:he}):null}var Hi=Array.isArray(oe)?oe:[oe];return t.jsxs("div",{className:Vt(Nt,de&&Hi.length===1&&"".concat(Nt,"--selectRange"),Ot&&"".concat(Nt,"--doubleView"),s),ref:S,children:[zi(),t.jsxs("div",{className:"".concat(Nt,"__viewContainer"),onBlur:de?sn:void 0,onMouseLeave:de?sn:void 0,children:[wr(),Ot?wr(!0):null]})]})});const Cc=lt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Dc=lt`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Tc=lt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,Ic=lt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,Ac=lt`
  from { opacity: 0; }
  to { opacity: 1; }
`,Oc=o.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${Ac} 0.15s ease-out;
`,Lc=o.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:e})=>e?"bottom right":"top right"};
  
  ${({$isClosing:e,$openUpward:n})=>e?n?We`animation: ${Ic} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:We`animation: ${Tc} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?We`animation: ${Dc} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:We`animation: ${Cc} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,_c=o.div`
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
`,Ct=({isOpen:e,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:i})=>{const l=h.useRef(null),[s,d]=h.useState(!1),[x,c]=h.useState(!1),[u,g]=h.useState(!1),[p,f]=h.useState({top:0,left:0});h.useEffect(()=>{if(e&&(i!=null&&i.current)){const w=i.current.getBoundingClientRect(),S=280,I=320,A=8,$=window.innerHeight-w.bottom-A<I;g($);let j;$?j=w.top-I-A:j=w.bottom+A;let T=w.right-S;T<8&&(T=8),T+S>window.innerWidth-8&&(T=window.innerWidth-S-8),j<8&&(j=8),f({top:j,left:T}),c(!0),d(!1)}},[e,i]);const v=h.useCallback(()=>{d(!0),setTimeout(()=>{c(!1),d(!1),n()},150)},[n]),y=h.useCallback(w=>{l.current&&!l.current.contains(w.target)&&v()},[v]);h.useEffect(()=>{if(e){const w=setTimeout(()=>{document.addEventListener("mousedown",y)},10);return()=>{clearTimeout(w),document.removeEventListener("mousedown",y)}}},[e,y]);const b=h.useCallback(w=>{w instanceof Date&&(r(He(w)),v())},[r,v]);if(!x)return null;const k=new Date(a+"T00:00:00");return _a.createPortal(t.jsxs("div",{"data-calendar-portal":!0,children:[t.jsx(Oc,{onClick:v}),t.jsx(Lc,{ref:l,$isClosing:s,$openUpward:u,$top:p.top,$left:p.left,children:t.jsx(_c,{children:t.jsx(Sc,{onChange:b,value:k,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(w,S)=>S.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},$c=o(C.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,Mc=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,Pc=o.button`
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
`,Fc=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,cr=o.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,Nc=o(cr)`
  height: 14px;
`,Ec=o(cr)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,Bc=o(cr)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,Rc=o(C.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,Wc=o(C.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,zc=o.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,Hc=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,Yc=o(C.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,Vc=o.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,Uc=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,Gc=o.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,qc=o(C.button).attrs({type:"button"})`
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
`,Kc=o.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,Zr=o(C.button).attrs({type:"button"})`
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
`,Jc=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"15 18 9 12 15 6"})}),Xc=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})}),Bt=[.25,.1,.25,1],Zc=({selectedDate:e,onDateChange:n})=>{const[a,r]=h.useState(!1),[i,l]=h.useState(1),s=h.useRef(null),d=h.useRef(e);if(d.current!==e){const w=new Date(d.current+"T00:00:00"),S=new Date(e+"T00:00:00");l(S>w?1:-1),d.current=e}const x=h.useCallback(w=>{w.preventDefault(),w.stopPropagation();const S=He(new Date),I=new Date(e+"T00:00:00"),A=new Date(S+"T00:00:00");l(A>I?1:-1),n(S)},[e,n]),c=h.useCallback(w=>{w.preventDefault(),w.stopPropagation(),l(-1);const S=new Date(e+"T00:00:00");S.setDate(S.getDate()-1),n(He(S))},[e,n]),u=h.useCallback(w=>{w.preventDefault(),w.stopPropagation(),l(1);const S=new Date(e+"T00:00:00");S.setDate(S.getDate()+1),n(He(S))},[e,n]),g=Ps(e),p=new Date(e+"T00:00:00"),f=p.getDate(),v=p.toLocaleDateString("en-US",{month:"short"}),y=p.toLocaleDateString("en-US",{weekday:"long"}),b=p.getFullYear(),k={enter:{y:i*20,opacity:0},center:{y:0,opacity:1},exit:{y:i*-20,opacity:0}};return t.jsxs($c,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:Bt},children:[t.jsxs(Mc,{children:[t.jsxs(Pc,{ref:s,onClick:()=>r(!0),type:"button",children:[t.jsxs(Fc,{children:[t.jsx(Nc,{children:t.jsx(te,{mode:"popLayout",initial:!1,children:t.jsx(Rc,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Bt},children:v},v)})}),t.jsx(Ec,{children:t.jsx(te,{mode:"popLayout",initial:!1,children:t.jsx(Wc,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Bt},children:f},f)})})]}),t.jsx(zc,{}),t.jsxs(Hc,{children:[t.jsx(Bc,{children:t.jsx(te,{mode:"popLayout",initial:!1,children:t.jsx(Yc,{variants:k,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:Bt},children:y},y)})}),t.jsx(Vc,{children:b})]})]}),t.jsxs(Uc,{children:[t.jsx(Gc,{children:t.jsx(te,{children:!g&&t.jsx(qc,{onClick:x,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),t.jsxs(Kc,{children:[t.jsx(Zr,{onClick:c,whileTap:{scale:.95},children:t.jsx(Jc,{})}),t.jsx(Zr,{onClick:u,whileTap:{scale:.95},children:t.jsx(Xc,{})})]})]})]}),t.jsx(Ct,{isOpen:a,onClose:()=>r(!1),selectedDate:e,onDateSelect:n,triggerRef:s})]})},Qc=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,tt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,nt=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Dn=o.select`
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
`,Qr=o.input`
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
`,ed=o.button`
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
`,td=o(C.button)`
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
`,nd=[{value:"bank_debit",label:"Bank Debit"},{value:"bank_credit",label:"Bank Credit"},{value:"investment_credit",label:"Investment Deposit"},{value:"investment_debit",label:"Investment Withdrawal"}],rd=({onAddTransaction:e})=>{const[n,a]=h.useState("bank_debit"),[r,i]=h.useState(Te[0].id),[l,s]=h.useState(""),[d,x]=h.useState(""),[c,u]=h.useState(""),[g,p]=h.useState(He(new Date)),[f,v]=h.useState(!1),y=h.useRef(null),b=n==="investment_credit"||n==="investment_debit",k=h.useMemo(()=>b?_n():De(),[b]),w=h.useMemo(()=>n==="investment_credit"||n==="investment_debit"?De():[],[n]),S=b&&r!=="pf",I=h.useCallback(j=>{a(j);const T=j==="investment_credit"||j==="investment_debit",P=T?_n():De(),N=P.length>0?P[0].id:"";i(N);const R=De();T&&N!=="pf"&&R.length>0?s(R[0].id):s("")},[]),A=r&&parseFloat(d)>0&&c.trim(),D=h.useCallback(()=>{if(!A)return;const j=Bs(n,r,parseFloat(d),c.trim(),g,S?l:void 0);e(j),x(""),u("")},[n,r,d,c,g,l,S,A,e]),$=j=>new Date(j+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return t.jsxs(Qc,{children:[t.jsxs(tt,{children:[t.jsx(nt,{children:"Type"}),t.jsx(Dn,{value:n,onChange:j=>I(j.target.value),children:nd.map(j=>t.jsx("option",{value:j.value,children:j.label},j.value))})]}),t.jsxs(tt,{children:[t.jsx(nt,{children:b?"Investment Account":"Bank Account"}),t.jsx(Dn,{value:r,onChange:j=>{const T=j.target.value;if(i(T),T==="pf")s("");else if(b&&!l){const P=De();P.length>0&&s(P[0].id)}},children:k.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))})]}),S&&t.jsxs(tt,{children:[t.jsx(nt,{children:n==="investment_credit"?"From Bank":"To Bank"}),t.jsx(Dn,{value:l,onChange:j=>s(j.target.value),children:w.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))})]}),t.jsxs(tt,{children:[t.jsx(nt,{children:"Amount"}),t.jsx(Qr,{type:"number",inputMode:"decimal",placeholder:"0",value:d,onChange:j=>x(j.target.value)})]}),t.jsxs(tt,{children:[t.jsx(nt,{children:"Description"}),t.jsx(Qr,{type:"text",placeholder:"What's this for?",value:c,onChange:j=>u(j.target.value),onKeyDown:j=>j.key==="Enter"&&D()})]}),t.jsxs(tt,{children:[t.jsx(nt,{children:"Date"}),t.jsx(ed,{ref:y,type:"button",onClick:()=>v(!0),children:$(g)}),t.jsx(Ct,{isOpen:f,onClose:()=>v(!1),selectedDate:g,onDateSelect:j=>{p(j),v(!1)},triggerRef:y})]}),t.jsx(td,{disabled:!A,onClick:D,whileTap:{scale:.98},children:"Add Transaction"})]})},ad=h.memo(rd),xi=[.25,.1,.25,1],hi={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},gi={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:xi}}};function fi(e){h.useEffect(()=>{if(e)return document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",document.body.style.touchAction="none",()=>{document.documentElement.style.overflow="",document.body.style.overflow="",document.body.style.touchAction=""}},[e])}const vi=o(C.div)`
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
`,mi=o(C.div)`
  width: 100%;
  max-width: ${({$maxWidth:e})=>e||"440px"};
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,yi=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,bi=o.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,ji=o(C.button)`
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
`,wi=o(ji)`
  left: 12px;
  color: var(--text-secondary);
`,ki=o(ji)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Si=o.div`
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
`,Gn=o.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,ea=o.div`
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
  color: ${({$primary:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$primary:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$primary:e})=>e?"var(--accent)":"var(--border)"};
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
`;o(C.div)`
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
`;const id=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  & + & {
    border-top: 1px solid var(--border);
  }
`,od=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$color:e})=>e};
  flex-shrink: 0;
`,sd=o.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
`,ld=o.input`
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
`,cd=({isOpen:e,onClose:n,initialBalances:a,onSave:r})=>{const[i,l]=h.useState({});fi(e),h.useEffect(()=>{if(e){const u={};Te.forEach(g=>{const p=a[g.id];u[g.id]=p?String(p):""}),l(u)}},[e,a]);const s=()=>{const u={};Object.entries(i).forEach(([g,p])=>{const f=parseFloat(p);!isNaN(f)&&f!==0&&(u[g]=f)}),r(u),n()},d=Te.filter(u=>u.type==="bank"),x=Te.filter(u=>u.type==="investment"),c=u=>u.map(g=>t.jsxs(id,{children:[t.jsx(od,{$color:g.color}),t.jsx(sd,{children:g.name}),t.jsx(ld,{type:"number",inputMode:"decimal",placeholder:"0",value:i[g.id]||"",onChange:p=>l(f=>({...f,[g.id]:p.target.value}))})]},g.id));return t.jsx(te,{children:e&&t.jsx(vi,{variants:hi,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:t.jsxs(mi,{variants:gi,initial:"hidden",animate:"visible",exit:"exit",onClick:u=>u.stopPropagation(),children:[t.jsxs(yi,{children:[t.jsx(wi,{onClick:n,children:"Cancel"}),t.jsx(bi,{children:"Initial Balances"}),t.jsx(ki,{onClick:s,children:"Save"})]}),t.jsxs(Si,{children:[t.jsxs(Gn,{children:[t.jsx(ea,{children:"Bank Accounts"}),c(d)]}),t.jsxs(Gn,{children:[t.jsx(ea,{children:"Investments"}),c(x)]})]})]})})})},rt=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
`,at=o.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,ta=o.input`
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
`,na=o.select`
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
`,dd=o.button`
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
`,ud=o.div`
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,pd=({isOpen:e,onClose:n,transaction:a,onSave:r})=>{const[i,l]=h.useState(""),[s,d]=h.useState(""),[x,c]=h.useState(""),[u,g]=h.useState(""),[p,f]=h.useState(""),[v,y]=h.useState(!1),b=h.useRef(null);fi(e),h.useEffect(()=>{e&&a&&(l(String(a.amount)),d(a.description),c(a.date),g(a.accountId),f(a.linkedAccountId||""))},[e,a]);const k=(a==null?void 0:a.type)==="investment_credit"||(a==null?void 0:a.type)==="investment_debit",w=h.useMemo(()=>a?k?_n():De():[],[a,k]),S=h.useCallback(()=>{if(!a)return;const D={...a,amount:parseFloat(i),description:s.trim(),date:x,accountId:u,linkedAccountId:k&&u!=="pf"?p:void 0};r(D),n()},[a,i,s,x,u,p,k,r,n]),I=parseFloat(i)>0&&s.trim(),A=D=>new Date(D+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return t.jsx(te,{children:e&&a&&t.jsx(vi,{variants:hi,initial:"hidden",animate:"visible",exit:"exit",onClick:n,children:t.jsxs(mi,{variants:gi,initial:"hidden",animate:"visible",exit:"exit",onClick:D=>D.stopPropagation(),children:[t.jsxs(yi,{children:[t.jsx(wi,{onClick:n,children:"Cancel"}),t.jsx(bi,{children:"Edit Transaction"}),t.jsx(ki,{onClick:S,disabled:!I,children:"Save"})]}),t.jsx(Si,{children:t.jsxs(Gn,{children:[t.jsxs(rt,{children:[t.jsx(at,{children:"Type"}),t.jsx(ud,{children:Rs(a.type)})]}),t.jsxs(rt,{children:[t.jsx(at,{children:"Account"}),t.jsx(na,{value:u,onChange:D=>g(D.target.value),children:w.map(D=>t.jsx("option",{value:D.id,children:D.name},D.id))})]}),k&&u!=="pf"&&t.jsxs(rt,{children:[t.jsx(at,{children:a.type==="investment_credit"?"From Bank":"To Bank"}),t.jsx(na,{value:p,onChange:D=>f(D.target.value),children:De().map(D=>t.jsx("option",{value:D.id,children:D.name},D.id))})]}),t.jsxs(rt,{children:[t.jsx(at,{children:"Amount"}),t.jsx(ta,{type:"number",inputMode:"decimal",value:i,onChange:D=>l(D.target.value)})]}),t.jsxs(rt,{children:[t.jsx(at,{children:"Description"}),t.jsx(ta,{type:"text",value:s,onChange:D=>d(D.target.value)})]}),t.jsxs(rt,{children:[t.jsx(at,{children:"Date"}),t.jsx(dd,{ref:b,type:"button",onClick:()=>y(!0),children:A(x)}),t.jsx(Ct,{isOpen:v,onClose:()=>y(!1),selectedDate:x,onDateSelect:D=>{c(D),y(!1)},triggerRef:b})]})]})})]})})})};o(C.div)`
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

  ${({$interactive:e})=>e&&We`
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
`;o(Kn)`
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
  
  ${({$variant:e})=>e==="accent"?We`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:We`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const xd=o.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,hd=o.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,gd=o(C.span)`
  display: inline-block;
`,fd=o.span`
  display: inline-block;
`,vd=[.25,.1,.25,1],md=({value:e,className:n})=>{const a=h.useMemo(()=>e.split("").map((r,i)=>({char:r,key:`${i}-${r}`,isDigit:/[0-9]/.test(r)})),[e]);return t.jsx(xd,{className:n,children:a.map(({char:r,key:i,isDigit:l},s)=>l?t.jsx(hd,{children:t.jsx(te,{mode:"popLayout",initial:!1,children:t.jsx(gd,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:vd},children:r},i)})},`wrapper-${s}`):t.jsx(fd,{children:r},`static-${s}`))})},Tn=h.memo(md);o.h1`
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
  ${({$animated:e})=>e&&`
    animation: gradientFlow 4s ease infinite;
  `}
`;const yd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),t.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),bd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),t.jsx("polyline",{points:"17 6 23 6 23 12"})]}),ra=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"17 1 21 5 17 9"}),t.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),t.jsx("polyline",{points:"7 23 3 19 7 15"}),t.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),jd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),t.jsx("polyline",{points:"16 12 12 8 8 12"})]}),wd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),t.jsx("polyline",{points:"8 12 12 16 16 12"})]}),kd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),t.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),t.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Sd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),t.jsx("polyline",{points:"16 7 22 7 22 13"}),t.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),Cd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M3 21h18"}),t.jsx("path",{d:"M5 21V7l7-4 7 4v14"}),t.jsx("path",{d:"M9 21v-6h6v6"}),t.jsx("path",{d:"M10 10h4"})]}),Dd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2"}),t.jsx("path",{d:"M12 11v6"}),t.jsx("path",{d:"M9 14h6"}),t.jsx("path",{d:"M16 7V5a4 4 0 0 0-8 0v2"})]}),Td=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),t.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),t.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),Id=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),t.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),t.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),t.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),t.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),t.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),Ad=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),t.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Od=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),Ld=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"7 10 12 15 17 10"}),t.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),_d=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"17 8 12 3 7 8"}),t.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),$d=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),t.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Md=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("polyline",{points:"3 6 5 6 21 6"}),t.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Pd=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Fd=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),Nd=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"6 9 12 15 18 9"})}),Ed=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})}),aa=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),t.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),t.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),t.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),we=xi,Re=[{id:"summary",label:"Summary",icon:yd(),accent:"green"},{id:"transactions",label:"History",icon:Id(),accent:"blue"},{id:"add",label:"Add",icon:Ad(),accent:"orange"},{id:"manage",label:"Manage",icon:Od(),accent:"purple"}],Bd=[{id:"hdfc-bank",label:"HDFC Bank"},{id:"icici-bank",label:"ICICI Bank"},{id:"mutual-funds",label:"Mutual Funds"},{id:"ppf",label:"Public Provident Fund"},{id:"pf",label:"Provident Fund"}],Ci=["bank_credit","investment_debit"],Rd=["bank_debit","investment_credit"],Wd={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:we}}},zd={enter:e=>({x:e>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?40:-40,opacity:0})},Hd={"hdfc-bank":"/tools/images/HDFC.svg","icici-bank":"/tools/images/ICICI.svg"},Yd={"mutual-funds":Sd,ppf:Cd,pf:Dd},Vd=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ud=o.div`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 0 4px;
`,ia=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Gd=o.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,qd=o.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  background: ${({$color:e})=>`${e}15`};

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${({$color:e})=>e};
  }
`,Kd=o.span`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,Jd=o.span`
  font-size: 17px;
  font-weight: 600;
  color: ${({$positive:e})=>e?"var(--text-primary)":"#ef4444"};
  font-variant-numeric: tabular-nums;
`,oa=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: rgba(var(--accent-rgb), 0.06);
  border-top: 1px solid var(--border);
`,sa=o.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
`,la=o.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({$positive:e})=>e?"var(--accent)":"#ef4444"};
  letter-spacing: -0.02em;
`,Xd=h.memo(function({balances:n}){const a=n.filter(c=>c.account.type==="bank"),r=n.filter(c=>c.account.type==="investment"),i=a.reduce((c,u)=>c+u.balance,0),l=r.reduce((c,u)=>c+u.balance,0),s=i+l,d=(c,u)=>{const g=Hd[c],p=Yd[c];return t.jsx(qd,{$color:u,children:g?t.jsx("img",{src:g,alt:""}):p?t.jsx(p,{}):null})},x=(c,u,g)=>t.jsxs(C.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:we},children:[t.jsx(Ud,{children:c}),t.jsxs(ia,{style:{marginTop:8},children:[u.map(({account:p,balance:f})=>t.jsxs(Gd,{children:[d(p.id,p.color),t.jsx(Kd,{children:p.name}),t.jsx(Jd,{$positive:f>=0,children:t.jsx(Tn,{value:Wt(f)})})]},p.id)),t.jsxs(oa,{children:[t.jsx(sa,{children:"Total"}),t.jsx(la,{$positive:g>=0,children:t.jsx(Tn,{value:Wt(g)})})]})]})]});return t.jsxs(Vd,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},children:[x("Bank Accounts",a,i),x("Investments",r,l),t.jsx(C.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:we},children:t.jsx(ia,{children:t.jsxs(oa,{children:[t.jsx(sa,{style:{fontSize:16},children:"Net Worth"}),t.jsx(la,{$positive:s>=0,style:{fontSize:24},children:t.jsx(Tn,{value:Wt(s)})})]})})})]})}),Zd=o(C.div)`
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
`,Qd=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,eu=o.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,tu=o.div`
  padding: 18px 0 18px;

  @media (max-width: 640px) {
    padding: 18px 0 18px;
  }
`,nu=o.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,ru=o(C.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,au=o.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,iu=o(C.div)`
  width: 100%;
`,ou=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,su=o.input`
  display: none;
`,lu=o.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,cu=o(C.button)`
  flex: 1;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({$active:e})=>e?"var(--text-primary)":"var(--text-tertiary)"};
  background: ${({$active:e})=>e?"var(--bg-secondary)":"transparent"};
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;

  ${({$active:e})=>e&&`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  `}

  &:hover:not([disabled]) {
    color: var(--text-secondary);
  }
`,du=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,uu=o.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`,pu=o.div`
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
`,xu=o.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
`,hu=o.div`
  color: var(--text-tertiary);
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`,gu=o.div`
  display: ${({$expanded:e})=>e?"block":"none"};
  animation: ${({$expanded:e})=>e?"filterFadeIn 0.15s ease-out":"none"};

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
`,fu=o.div`
  /* Content container */
`,vu=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,In=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,An=o.label`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,mu=o.select`
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
`,yu=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,bu=o.button`
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${({$selected:e})=>e?"white":"var(--text-secondary)"};
  background: ${({$selected:e})=>e?"var(--accent)":"var(--bg-tertiary)"};
  border: 1px solid ${({$selected:e})=>e?"var(--accent)":"var(--border)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({$selected:e})=>e?"var(--accent)":"var(--bg-secondary)"};
    border-color: ${({$selected:e})=>e?"var(--accent)":"var(--text-tertiary)"};
  }
`,ju=o.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,ca=o.button`
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
`,wu=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,ku=o.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 10px;
`,Su=o(C.button)`
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
`,Cu=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,da=o.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Du=o.div``,Tu=o(C.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,Iu=o.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,Au=o(C.div)`
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
`,Ou=o.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({$type:e})=>{switch(e){case"bank_credit":return`
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
`,Lu=o.div`
  flex: 1;
  min-width: 0;
`,_u=o.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,$u=o.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,Mu=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,Pu=o.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:e})=>e?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,Fu=o.div`
  display: flex;
  gap: 4px;
`,ua=o(C.button)`
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
    background: ${({$danger:e})=>e?"rgba(239, 68, 68, 0.1)":"rgba(59, 130, 246, 0.1)"};
    color: ${({$danger:e})=>e?"#ef4444":"#3b82f6"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Nu=o(C.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,Eu=o.div`
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
`,Bu=o.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,Ru=o.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,Wu=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,On=o(C.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ln=o.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,pa=o(C.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,xa=o(C.button)`
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
`,ha=o.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({$color:e})=>e||"var(--accent)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`,ga=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,fa=o.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,va=o.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,zu=o.div`
  color: var(--text-tertiary);
  opacity: 0.5;

  svg {
    width: 16px;
    height: 16px;
  }
`,Hu=o.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,Yu=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,ma=o(C.button)`
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
    border-color: ${({$variant:e})=>e==="export"?"#34C759":"#007AFF"};
    transform: translateY(-2px);
  }
`,ya=o.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({$color:e})=>`${e}15`};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
    color: ${({$color:e})=>e};
  }
`,ba=o.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,ja=o.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,Vu=e=>{switch(e){case"bank_credit":return bd();case"bank_debit":return ra();case"investment_credit":return jd();case"investment_debit":return wd();default:return ra()}},Uu=e=>Ci.includes(e),Gu=e=>{const n=new Date(e+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},wa=e=>new Date(e+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),ka=()=>{const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),1);return Di(n)},Sa=()=>Di(new Date),Di=e=>{const n=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${a}-${r}`},qu=e=>e.reduce((n,a)=>{const r=a.date;return n[r]||(n[r]=[]),n[r].push(a),n},{}),Ku=h.memo(function({filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:l,onEndDateChange:s,filterType:d,onTypeChange:x,filterAccounts:c,onToggleAccount:u,activeFilterCount:g,onResetFilters:p,filterStartCalendarOpen:f,onStartCalendarOpenChange:v,filterEndCalendarOpen:y,onEndCalendarOpenChange:b,filterStartDateRef:k,filterEndDateRef:w}){return t.jsxs(du,{children:[t.jsxs(uu,{onClick:a,children:[t.jsxs(pu,{children:[t.jsx(Fd,{}),"Filters",g>0&&t.jsxs(xu,{children:[g," active"]})]}),t.jsx(hu,{$expanded:n,children:t.jsx(Nd,{})})]}),t.jsx(gu,{$expanded:n,children:t.jsx("div",{children:t.jsxs(fu,{children:[t.jsxs(vu,{children:[t.jsxs(In,{style:{gridColumn:"1 / -1"},children:[t.jsx(An,{children:"Period"}),t.jsxs(ju,{children:[t.jsxs(ca,{ref:k,type:"button",onClick:()=>v(!0),children:[wa(r),t.jsx(aa,{})]}),t.jsx(Ct,{isOpen:f,onClose:()=>v(!1),selectedDate:r,onDateSelect:S=>{i(S),v(!1)},triggerRef:k}),t.jsx(wu,{children:"to"}),t.jsxs(ca,{ref:w,type:"button",onClick:()=>b(!0),children:[wa(l),t.jsx(aa,{})]}),t.jsx(Ct,{isOpen:y,onClose:()=>b(!1),selectedDate:l,onDateSelect:S=>{s(S),b(!1)},triggerRef:w})]})]}),t.jsxs(In,{children:[t.jsx(An,{children:"Money Flow"}),t.jsxs(mu,{value:d,onChange:S=>x(S.target.value),children:[t.jsx("option",{value:"all",children:"All Transactions"}),t.jsx("option",{value:"credit",children:"Incoming"}),t.jsx("option",{value:"debit",children:"Outgoing"})]})]}),t.jsxs(In,{style:{gridColumn:"1 / -1"},children:[t.jsxs(An,{children:["Account"," ",c.length>0&&`(${c.length} selected)`]}),t.jsx(yu,{children:Bd.map(S=>t.jsx(bu,{type:"button",$selected:c.includes(S.id),onClick:()=>u(S.id),children:S.label},S.id))})]})]}),t.jsx(ku,{children:t.jsx(Su,{onClick:p,whileTap:{scale:.98},children:"Reset Filters"})})]})})})]})}),Ju=h.memo(function({groupedTransactions:n,activeFilterCount:a,onEditTransaction:r,onDeleteTransaction:i}){const l=Object.keys(n).sort((s,d)=>d.localeCompare(s));return l.length===0?t.jsx(da,{children:t.jsxs(Nu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[t.jsx(Eu,{children:t.jsx($d,{})}),t.jsx(Bu,{children:"No Transactions"}),t.jsx(Ru,{children:a>0?"Try adjusting your filters":"Add your first transaction to get started"})]})}):t.jsx(da,{children:t.jsx(Du,{children:t.jsx(te,{mode:"popLayout",children:l.map(s=>t.jsxs(Tu,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,height:0},transition:{duration:.2,ease:we},children:[t.jsx(Iu,{children:Gu(s)}),n[s].map(d=>{const x=Ws(d.accountId),c=Uu(d.type);return t.jsxs(Au,{layout:!0,initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2,ease:we},children:[t.jsx(Ou,{$type:d.type,children:Vu(d.type)}),t.jsxs(Lu,{children:[t.jsx(_u,{children:d.description}),t.jsx($u,{children:(x==null?void 0:x.name)||"Unknown Account"})]}),t.jsxs(Mu,{children:[t.jsxs(Pu,{$positive:c,children:[c?"+":"-",Wt(d.amount)]}),t.jsxs(Fu,{children:[t.jsx(ua,{onClick:()=>r(d),whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(Pd,{})}),t.jsx(ua,{$danger:!0,onClick:()=>i(d.id),whileHover:{scale:1.1},whileTap:{scale:.9},children:t.jsx(Md,{})})]})]})]},d.id)})]},s))})})})}),Xu=h.memo(function({filterExpanded:n,onToggleFilterExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:l,onEndDateChange:s,filterType:d,onTypeChange:x,filterAccounts:c,onToggleAccount:u,activeFilterCount:g,onResetFilters:p,filterStartCalendarOpen:f,onStartCalendarOpenChange:v,filterEndCalendarOpen:y,onEndCalendarOpenChange:b,filterStartDateRef:k,filterEndDateRef:w,groupedTransactions:S,onEditTransaction:I,onDeleteTransaction:A}){return t.jsxs(Cu,{children:[t.jsx(Ku,{filterExpanded:n,onToggleExpanded:a,filterStartDate:r,onStartDateChange:i,filterEndDate:l,onEndDateChange:s,filterType:d,onTypeChange:x,filterAccounts:c,onToggleAccount:u,activeFilterCount:g,onResetFilters:p,filterStartCalendarOpen:f,onStartCalendarOpenChange:v,filterEndCalendarOpen:y,onEndCalendarOpenChange:b,filterStartDateRef:k,filterEndDateRef:w}),t.jsx(Ju,{groupedTransactions:S,activeFilterCount:g,onEditTransaction:I,onDeleteTransaction:A})]})}),Zu=h.memo(function({onAddTransaction:n}){return t.jsx(ou,{children:t.jsx(ad,{onAddTransaction:n})})}),Qu=h.memo(function({transactionsCount:n,onOpenBalanceModal:a,onExport:r,onImport:i}){return t.jsxs(Wu,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:we},children:[t.jsxs(On,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:we},children:[t.jsx(Ln,{children:"Configuration"}),t.jsx(pa,{children:t.jsxs(xa,{onClick:a,whileTap:{scale:.99},children:[t.jsx(ha,{$color:"#007AFF",children:t.jsx(kd,{})}),t.jsxs(ga,{children:[t.jsx(fa,{children:"Initial Balances"}),t.jsx(va,{children:"Set starting balances for all accounts"})]}),t.jsx(zu,{children:t.jsx(Ed,{})})]})})]}),t.jsxs(On,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:we},children:[t.jsx(Ln,{children:"Data"}),t.jsxs(Yu,{children:[t.jsxs(ma,{type:"button",$variant:"export",onClick:r,whileTap:{scale:.97},children:[t.jsx(ya,{$color:"#34C759",children:t.jsx(Ld,{})}),t.jsx(ba,{children:"Export"}),t.jsx(ja,{children:"Save backup file"})]}),t.jsxs(ma,{type:"button",$variant:"import",onClick:i,whileTap:{scale:.97},children:[t.jsx(ya,{$color:"#007AFF",children:t.jsx(_d,{})}),t.jsx(ba,{children:"Import"}),t.jsx(ja,{children:"Restore from file"})]})]})]}),t.jsxs(On,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:we},children:[t.jsx(Ln,{children:"About"}),t.jsx(pa,{children:t.jsxs(xa,{as:"div",style:{cursor:"default"},children:[t.jsx(ha,{$color:"#8E8E93",children:t.jsx(Td,{})}),t.jsxs(ga,{children:[t.jsx(fa,{children:"Transactions"}),t.jsx(va,{children:"Total records stored"})]}),t.jsx(Hu,{children:n})]})})]})]})});function ep(){const[e,n]=h.useState([]),[a,r]=h.useState({}),i=h.useRef(null);h.useEffect(()=>{n($s()),r(Ms())},[]);const l=h.useCallback(p=>{n(f=>{const v=[...f,p];return requestAnimationFrame(()=>Pt(v)),v})},[]),s=h.useCallback(p=>{n(f=>{const v=f.filter(y=>y.id!==p);return requestAnimationFrame(()=>Pt(v)),v})},[]),d=h.useCallback(p=>{n(f=>{const v=f.map(y=>y.id===p.id?p:y);return requestAnimationFrame(()=>Pt(v)),v})},[]),x=h.useCallback(p=>{r(p),requestAnimationFrame(()=>Nr(p))},[]),c=h.useCallback(()=>{Hs(e,a)},[e,a]),u=h.useCallback(()=>{var p;(p=i.current)==null||p.click()},[]),g=h.useCallback(p=>{var y;const f=(y=p.target.files)==null?void 0:y[0];if(!f)return;const v=new FileReader;v.onload=b=>{var S;const k=(S=b.target)==null?void 0:S.result,w=Vs(k);w?window.confirm(`Import backup from ${new Date(w.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${w.transactions.length} transactions

This action cannot be undone.`)&&(n(w.transactions),r(w.initialBalances),Pt(w.transactions),Nr(w.initialBalances)):alert("Invalid backup file.")},v.readAsText(f),p.target.value=""},[]);return{transactions:e,initialBalances:a,addTransaction:l,deleteTransaction:s,updateTransaction:d,saveInitialData:x,handleExport:c,handleImportClick:u,fileInputRef:i,handleFileChange:g}}function tp(e){const[n,a]=h.useState(!1),[r,i]=h.useState(ka),[l,s]=h.useState(Sa),[d,x]=h.useState("all"),[c,u]=h.useState([]),[g,p]=h.useState(!1),[f,v]=h.useState(!1),y=h.useRef(null),b=h.useRef(null),k=[...Ci],w=[...Rd],{filteredTransactions:S,groupedTransactions:I,activeFilterCount:A}=h.useMemo(()=>{let j=e.filter(N=>!(N.date<r||N.date>l||d!=="all"&&(d==="credit"&&!k.includes(N.type)||d==="debit"&&!w.includes(N.type))||c.length>0&&!c.includes(N.accountId)));j=j.sort((N,R)=>{const G=R.date.localeCompare(N.date);return G!==0?G:R.id.localeCompare(N.id)});const T=qu(j);let P=0;return d!=="all"&&P++,c.length>0&&P++,{filteredTransactions:j,groupedTransactions:T,activeFilterCount:P}},[e,r,l,d,c]),D=h.useCallback(j=>{u(T=>T.includes(j)?T.filter(P=>P!==j):[...T,j])},[]),$=h.useCallback(()=>{i(ka()),s(Sa()),x("all"),u([])},[]);return{filterExpanded:n,setFilterExpanded:a,filterStartDate:r,setFilterStartDate:i,filterEndDate:l,setFilterEndDate:s,filterType:d,setFilterType:x,filterAccounts:c,toggleAccountFilter:D,filterStartCalendarOpen:g,setFilterStartCalendarOpen:p,filterEndCalendarOpen:f,setFilterEndCalendarOpen:v,filterStartDateRef:y,filterEndDateRef:b,filteredTransactions:S,groupedTransactions:I,activeFilterCount:A,resetFilters:$}}function np(){const[e,n]=h.useState("summary"),[[,a],r]=h.useState([0,0]),i=h.useCallback(s=>{const d=Re.findIndex(c=>c.id===s),x=Re.findIndex(c=>c.id===e);r([d,d>x?1:-1]),n(s),window.scrollTo(0,0)},[e]),l=h.useCallback((s,d)=>{const u=Re.findIndex(g=>g.id===e);(d.offset.x<-50||d.velocity.x<-500)&&u<Re.length-1?i(Re[u+1].id):(d.offset.x>50||d.velocity.x>500)&&u>0&&i(Re[u-1].id)},[e,i]);return{activeTab:e,direction:a,handleTabChange:i,handleDragEnd:l}}const rp=()=>{const[e,n]=h.useState(He(new Date)),[a,r]=h.useState(!1),[i,l]=h.useState(null),{transactions:s,initialBalances:d,addTransaction:x,deleteTransaction:c,updateTransaction:u,saveInitialData:g,handleExport:p,handleImportClick:f,fileInputRef:v,handleFileChange:y}=ep(),{activeTab:b,direction:k,handleTabChange:w,handleDragEnd:S}=np(),{filterExpanded:I,setFilterExpanded:A,filterStartDate:D,setFilterStartDate:$,filterEndDate:j,setFilterEndDate:T,filterType:P,setFilterType:N,filterAccounts:R,toggleAccountFilter:G,filterStartCalendarOpen:V,setFilterStartCalendarOpen:m,filterEndCalendarOpen:O,setFilterEndCalendarOpen:W,filterStartDateRef:Q,filterEndDateRef:re,groupedTransactions:H,activeFilterCount:B,resetFilters:ce}=tp(s),Z=h.useMemo(()=>Ns(s,e,d),[e,s,d]),ae=ee=>{x(ee),w("transactions")},E=()=>{switch(b){case"summary":return t.jsx(Xd,{balances:Z});case"transactions":return t.jsx(Xu,{filterExpanded:I,onToggleFilterExpanded:()=>A(!I),filterStartDate:D,onStartDateChange:$,filterEndDate:j,onEndDateChange:T,filterType:P,onTypeChange:N,filterAccounts:R,onToggleAccount:G,activeFilterCount:B,onResetFilters:ce,filterStartCalendarOpen:V,onStartCalendarOpenChange:m,filterEndCalendarOpen:O,onEndCalendarOpenChange:W,filterStartDateRef:Q,filterEndDateRef:re,groupedTransactions:H,onEditTransaction:l,onDeleteTransaction:c});case"add":return t.jsx(Zu,{onAddTransaction:ae});case"manage":return t.jsx(Qu,{transactionsCount:s.length,onOpenBalanceModal:()=>r(!0),onExport:p,onImport:f});default:return null}};return t.jsxs(t.Fragment,{children:[t.jsx(Qd,{children:t.jsxs(eu,{children:[t.jsx(tu,{children:t.jsx(Zc,{selectedDate:e,onDateChange:n})}),t.jsx(lu,{children:Re.map(ee=>t.jsx(cu,{$active:b===ee.id,onClick:()=>w(ee.id),whileTap:{scale:.98},children:ee.label},ee.id))})]})}),t.jsxs(Zd,{variants:Wd,initial:"hidden",animate:"visible",children:[t.jsx(ru,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:S,children:t.jsxs(Na,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[t.jsx(nu,{}),t.jsx(au,{style:{flex:1},children:t.jsx(te,{mode:"wait",custom:k,children:t.jsx(iu,{custom:k,variants:zd,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:E()},b)})})]})}),t.jsx(su,{ref:v,type:"file",accept:".json",onChange:y}),t.jsx(cd,{isOpen:a,onClose:()=>r(!1),initialBalances:d,onSave:g}),t.jsx(pd,{isOpen:!!i,onClose:()=>l(null),transaction:i,onSave:u})]})]})},Ti=()=>new Promise((e,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>e(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),ap=async(e,n,a,r=48)=>{try{const i=await Ti(),l=Math.min(n,a)*.03,s=n-r-l,d=a-r-l;e.globalAlpha=.7,e.drawImage(i,s,d,r,r),e.globalAlpha=1}catch(i){console.warn("Failed to load watermark logo:",i)}},qn=(e,n,a)=>{const r=[],i=d=>{const x=[];let c=d;for(;c.length>0;){let u=c.length;for(;u>0&&e.measureText(c.slice(0,u)).width>a;)u--;u=Math.max(1,u);const g=c.slice(0,u),p=g.lastIndexOf("/"),f=g.lastIndexOf("-"),v=g.lastIndexOf(".");let y=u;const b=[p,f,v].filter(k=>k>0&&k<u-1);b.length>0&&(y=Math.max(...b)+1),x.push(c.slice(0,y)),c=c.slice(y)}return x},l=n.split(" ");let s="";for(const d of l)if(e.measureText(d).width>a){s&&(r.push(s),s="");const c=i(d);for(let u=0;u<c.length;u++)u<c.length-1?r.push(c[u]):s=c[u]}else{const c=s?`${s} ${d}`:d;e.measureText(c).width>a&&s?(r.push(s),s=d):s=c}return s&&r.push(s),r},ip=async e=>{const{text:n,fontSize:a,fontFamily:r,textColor:i,backgroundColor:l,alignment:s,aspectRatio:d,padding:x}=e,c=document.createElement("canvas");c.width=d.width,c.height=d.height;const u=c.getContext("2d");if(!u)throw new Error("Failed to get canvas context");u.fillStyle=l,u.fillRect(0,0,c.width,c.height);const g=a*(d.width/1080);u.font=`600 ${g}px ${r}`,u.fillStyle=i;const p=x*(d.width/1080),f=c.width-p*2,v=n.split(`
`),y=[];for(const A of v)if(A.trim()==="")y.push("");else{const D=qn(u,A,f);y.push(...D)}const b=g*1.4,k=y.length*b;let w=(c.height-k)/2+g;u.textAlign=s;let S;switch(s){case"left":S=p;break;case"right":S=c.width-p;break;default:S=c.width/2}for(const A of y)A!==""&&u.fillText(A,S,w),w+=b;const I=Math.min(c.width,c.height)*.06;return await ap(u,c.width,c.height,I),c.toDataURL("image/png",1)},op=async e=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:i}=e,l=document.createElement("canvas");l.width=a.width,l.height=a.height;const s=l.getContext("2d");if(!s)throw new Error("Failed to get canvas context");const d=a.width/1080,x=a.height>a.width,c=r==="#000000"?"#ffffff":"#000000",u=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";s.fillStyle=r,s.fillRect(0,0,l.width,l.height);const g=64*d,p=l.width-g*2,f=20*d,v=36*d,y=(x?44:40)*d,b=(x?24:22)*d,k=18*d,w=y*1.25,S=b*1.45,I=x?5:4,A=x?4:3;s.font=`700 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`;const D=qn(s,n.title,p),$=D.slice(0,I);if(D.length>I&&$.length>0){const E=$[$.length-1];E.endsWith("...")||($[$.length-1]=E.slice(0,-3)+"...")}s.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`;const j=n.description?qn(s,n.description,p):[],T=j.slice(0,A);if(j.length>A&&T.length>0){const E=T[T.length-1];E.endsWith("...")||(T[T.length-1]=E.slice(0,-3)+"...")}const P=v+f,N=$.length*w,R=T.length>0?f+T.length*S:0,G=P+N+R,V=Math.min(l.width,l.height)*.045,m=g+V+16*d,O=l.height-m-g,W=O-G-f*2;let Q=0;if(n.image&&W>100*d){const E=x?l.width*.5:l.width*.4,ee=120*d;Q=Math.min(E,Math.max(ee,W))}const re=Q>0?f+Q:0,H=G+re;let B=g+Math.max(0,(O-H)/2);if(n.favicon)try{const E=await Ca(n.favicon);s.save(),s.beginPath(),s.arc(g+v/2,B+v/2,v/2,0,Math.PI*2),s.closePath(),s.clip(),s.drawImage(E,g,B,v,v),s.restore()}catch{s.fillStyle=i,s.beginPath(),s.arc(g+v/2,B+v/2,v/2,0,Math.PI*2),s.fill()}n.siteName&&(s.font=`500 ${22*d}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=u,s.textAlign="left",s.textBaseline="middle",s.fillText(n.siteName,g+v+10*d,B+v/2)),B+=v+f,s.font=`700 ${y}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=c,s.textAlign="left",s.textBaseline="top";for(const E of $)s.fillText(E,g,B),B+=w;if(T.length>0){B+=f,s.font=`400 ${b}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=u;for(const E of T)s.fillText(E,g,B),B+=S}if(n.image&&Q>0){B+=f;try{const E=await Ca(n.image),ee=p;s.save(),sp(s,g,B,ee,Q,10*d),s.clip();const Oe=E.width/E.height,be=ee/Q;let ue=0,Ge=0,Le=E.width,Se=E.height;Oe>be?(Le=E.height*be,ue=(E.width-Le)/2):(Se=E.width/be,Ge=(E.height-Se)/2),s.drawImage(E,ue,Ge,Le,Se,g,B,ee,Q),s.restore()}catch{}}const ce=l.height-g;s.font=`500 ${k}px -apple-system, BlinkMacSystemFont, monospace`,s.fillStyle=i;const Z=p-V-16*d;let ae=n.url;for(;s.measureText(ae).width>Z&&ae.length>20;)ae=ae.slice(0,-4)+"...";s.textAlign="left",s.textBaseline="middle",s.fillText(ae,g,ce-V/2);try{const E=await Ti();s.globalAlpha=.7,s.drawImage(E,l.width-g-V,ce-V,V,V),s.globalAlpha=1}catch{}return l.toDataURL("image/png",1)},Ca=e=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=e}),sp=(e,n,a,r,i,l)=>{e.beginPath(),e.moveTo(n+l,a),e.lineTo(n+r-l,a),e.quadraticCurveTo(n+r,a,n+r,a+l),e.lineTo(n+r,a+i-l),e.quadraticCurveTo(n+r,a+i,n+r-l,a+i),e.lineTo(n+l,a+i),e.quadraticCurveTo(n,a+i,n,a+i-l),e.lineTo(n,a+l),e.quadraticCurveTo(n,a,n+l,a),e.closePath()},lp=(e,n)=>{const a=document.createElement("a");a.download=n,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},cp=async e=>{var i,l;const a=new URL(e).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:e,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const s=`https://api.microlink.io?url=${encodeURIComponent(e)}`,d=await fetch(s);if(!d.ok)return r;const x=await d.json();return x.status==="success"&&x.data?{title:x.data.title||a,description:x.data.description||"",image:((i=x.data.image)==null?void 0:i.url)||null,siteName:x.data.publisher||a,url:e,favicon:((l=x.data.logo)==null?void 0:l.url)||r.favicon}:r}catch(s){return console.warn("Failed to fetch URL metadata:",s),r}},Da=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],dp='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',up=e=>{const n=e.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},pp=o.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,xp=o.div`
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
`,hp=o.div`
  width: 100%;
  max-width: 600px;
`,gp=o.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:e})=>e};
  background: ${({$bgColor:e})=>e};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,fp=o.div`
  position: absolute;
  inset: 0;
`,vp=o.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,mp=o(C.div)`
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
`,yp=o.div`
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
`,bp=o.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,bt=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jt=o.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,jp=o.textarea`
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
`,Ta=o.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,Ia=o.button`
  flex: 1;
  padding: 10px 16px;
  background: ${({$active:e})=>e?"var(--bg-primary)":"transparent"};
  border: none;
  border-radius: 8px;
  color: ${({$active:e})=>e?"var(--text-primary)":"var(--text-secondary)"};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({$active:e})=>e?"0 1px 3px rgba(0,0,0,0.1)":"none"};
  
  &:hover {
    color: var(--text-primary);
  }
  
  &:active {
    transform: scale(0.98);
  }
`,wp=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,kp=o.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,Sp=o.input`
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
`,Cp=o.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,Dp=o(C.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 24px;
  background: ${({$variant:e})=>e==="secondary"?"var(--glass-bg)":"var(--accent)"};
  border: ${({$variant:e})=>e==="secondary"?"1px solid var(--glass-border)":"none"};
  border-radius: 14px;
  color: ${({$variant:e})=>e==="secondary"?"var(--text-primary)":"white"};
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
`,Tp=o(C.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ip=o.input`
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
`,Ap=o.textarea`
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
`,Op=o(C.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,Lp=o(C.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,_p=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"7 10 12 15 17 10"}),t.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),$p=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),t.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),t.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Mp=()=>{const{isDark:e}=Jn(),[n,a]=h.useState(""),[r,i]=h.useState(64),[l,s]=h.useState("left"),[d,x]=h.useState(Da[1]),[c,u]=h.useState(null),[g,p]=h.useState(!1),[f,v]=h.useState(null),[y,b]=h.useState(""),[k,w]=h.useState(""),[S,I]=h.useState(!1),[A,D]=h.useState(null),$=h.useMemo(()=>up(n),[n]),j=e?"#000000":"#ffffff",T=e?"#ffffff":"#000000",P=`${d.height/d.width*100}%`,N=h.useCallback(async()=>{if(!(!$||!n.trim())){I(!0),D(null),u(null);try{const m=await cp(n.trim());v(m),b(m.title),w(m.description)}catch{D("Unable to fetch URL preview")}I(!1)}},[n,$]),R=h.useCallback(async()=>{if(!n.trim()||$){$||u(null);return}p(!0);try{const m=await ip({text:n.trim(),fontSize:r,fontFamily:dp,textColor:T,backgroundColor:j,alignment:l,aspectRatio:d,padding:80});u(m)}catch(m){console.error("Preview generation failed:",m)}p(!1)},[n,$,r,l,d,j,T]),G=h.useCallback(async()=>{if(f){p(!0);try{const m=await op({metadata:{...f,title:y||f.title,description:k||f.description},aspectRatio:d,backgroundColor:j,accentColor:"#2A9D8F"});u(m)}catch(m){console.error("URL preview generation failed:",m)}p(!1)}},[f,y,k,d,j]);h.useEffect(()=>{if($)return;const m=setTimeout(R,200);return()=>clearTimeout(m)},[R,$]),h.useEffect(()=>{$?N():(v(null),b(""),w(""),D(null))},[$,N]),h.useEffect(()=>{f&&G()},[f,y,k,d,G]);const V=()=>{if(c){const W=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;lp(c,W)}};return t.jsxs(pp,{children:[t.jsx(xp,{children:t.jsx(hp,{children:t.jsx(gp,{$bgColor:j,$paddingBottom:P,children:t.jsxs(fp,{children:[c&&t.jsx(vp,{src:c,alt:"Preview"}),t.jsx(te,{children:!c&&t.jsxs(mp,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[t.jsx($p,{}),t.jsx("span",{children:$?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),t.jsx(yp,{children:t.jsxs(bp,{children:[t.jsxs(bt,{children:[t.jsx(jt,{children:"Content"}),t.jsx(jp,{value:n,onChange:m=>a(m.target.value),onContextMenu:m=>m.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),$?t.jsxs(t.Fragment,{children:[S&&t.jsx(bt,{style:{alignItems:"center"},children:t.jsx(Lp,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),A&&t.jsx(Op,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:A}),f&&t.jsxs(Tp,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[t.jsx(jt,{children:"Edit Details"}),t.jsx(Ip,{value:y,onChange:m=>b(m.target.value),placeholder:"Title"}),t.jsx(Ap,{value:k,onChange:m=>w(m.target.value),placeholder:"Description"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs(bt,{children:[t.jsx(jt,{children:"Font Size"}),t.jsxs(wp,{children:[t.jsx(kp,{children:t.jsx(Sp,{type:"range",min:"24",max:"120",value:r,onChange:m=>i(Number(m.target.value))})}),t.jsx(Cp,{children:r})]})]}),t.jsxs(bt,{children:[t.jsx(jt,{children:"Alignment"}),t.jsx(Ta,{children:["left","center","right"].map(m=>t.jsx(Ia,{$active:l===m,onClick:()=>s(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),t.jsxs(bt,{children:[t.jsx(jt,{children:"Format"}),t.jsx(Ta,{children:Da.map(m=>t.jsx(Ia,{$active:d.id===m.id,onClick:()=>x(m),children:m.name},m.id))})]}),t.jsxs(Dp,{onClick:V,disabled:!c||g,whileTap:{scale:.98},children:[t.jsx(_p,{}),"Download Image"]})]})})]})},Pp=o(C.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,Fp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},Np=()=>t.jsx(Pp,{variants:Fp,initial:"hidden",animate:"visible",children:t.jsx(Mp,{})}),Ep=()=>{const e=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1)},Bp=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),t.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),t.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),t.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),t.jsx("path",{d:"M8 8v2"}),t.jsx("path",{d:"M16 8v2"}),t.jsx("path",{d:"M12 8v5"}),t.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),Rp=()=>t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[t.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),t.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),t.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),t.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),t.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),t.jsx("path",{d:"M12 10v8"}),t.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),Wp=o.div`
  min-height: 100vh;
  position: relative;
`,zp=o.main`
  position: relative;
  z-index: 1;
`,Hp=o.a`
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
`,Yp=lt`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,Aa=o.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,Oa=o.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${Yp} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,La=o.p`
  color: var(--text-secondary);
  font-size: 15px;
`,Vp=o.button`
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
`,Up=()=>{const e=qi(),n=Ki();return h.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&e(r,{replace:!0})}},[e,n.pathname]),null};function Gp(){const{isAuthenticated:e,isLoading:n,authFailed:a,retryAuth:r}=ro(),i=h.useMemo(()=>Ep()?Bp:Rp,[]);return n||!e&&!a?t.jsxs(Aa,{children:[t.jsx(Oa,{children:t.jsx(i,{})}),t.jsx(La,{children:"Authenticating..."})]}):a&&!e?t.jsxs(Aa,{children:[t.jsx(Oa,{style:{animation:"none",opacity:1},children:t.jsx(i,{})}),t.jsx(La,{children:"Authentication required to continue"}),t.jsx(Vp,{onClick:r,children:"Try Again"})]}):t.jsxs(Wp,{children:[t.jsx(Up,{}),t.jsx(Hp,{href:"#main-content",children:"Skip to main content"}),t.jsx(so,{}),t.jsx(mo,{}),t.jsx(zp,{id:"main-content",children:t.jsxs(Gi,{children:[t.jsx(qe,{path:"/",element:t.jsx($o,{})}),t.jsx(qe,{path:"/tax-manager",element:t.jsx(_s,{})}),t.jsx(qe,{path:"/netfolio",element:t.jsx(rp,{})}),t.jsx(qe,{path:"/expense-manager",element:t.jsx(kr,{to:"/netfolio",replace:!0})}),t.jsx(qe,{path:"/canvas-manager",element:t.jsx(Np,{})}),t.jsx(qe,{path:"/tax-calculator",element:t.jsx(kr,{to:"/tax-manager",replace:!0})})]})})]})}function qp(){return t.jsx(Ui,{basename:"/tools",future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:t.jsx(Xi,{children:t.jsxs(no,{children:[t.jsx(ao,{}),t.jsx(Gp,{})]})})})}$a(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(qp,{})}));
