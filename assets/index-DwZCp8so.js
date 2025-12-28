import{j as e,m as y,A as ie}from"./vendor-animation-IVPYdfZu.js";import{a as go,r as x,L as ya,B as ys,R as bs,b as zt,N as js,u as ws,c as ks}from"./vendor-react-DST-UJPA.js";import{f as Cs,d as i,m as Ft,l as dt}from"./vendor-styles-CTnQ9FWC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var fo,Ea=go;fo=Ea.createRoot,Ea.hydrateRoot;const mo=x.createContext({isDark:!0,toggleTheme:()=>{}}),Ss=({children:t})=>{const[n,a]=x.useState(()=>{if(typeof window<"u"){const o=localStorage.getItem("theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});x.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),x.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)"),c=s=>{localStorage.getItem("theme")||a(s.matches)};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]);const r=()=>a(!n);return e.jsx(mo.Provider,{value:{isDark:n,toggleTheme:r},children:t})},ba=()=>{const t=x.useContext(mo);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},vo=x.createContext(null),ur="tools-auth-session",pr="tools-webauthn-credential",Ds=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Ts=async()=>{if(!Ds())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},xr=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},$s=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},Is=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},Ls=({children:t})=>{const[n,a]=x.useState(!1),[r,o]=x.useState(!0),[c,s]=x.useState(!1),l=x.useRef(!1),u=async()=>{try{const f={challenge:xr(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:xr(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},b=await navigator.credentials.create({publicKey:f});return b?(localStorage.setItem(pr,$s(b.rawId)),!0):!1}catch(h){return console.error("Registration failed:",h),!1}},d=async()=>{try{const h=localStorage.getItem(pr),b={challenge:xr(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...h&&{allowCredentials:[{type:"public-key",id:Is(h),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:b})}catch(h){return console.error("Authentication failed:",h),!1}},p=x.useCallback(async()=>{o(!0),s(!1);const h=sessionStorage.getItem(ur);if(h)try{const{timestamp:b}=JSON.parse(h);if(Date.now()-b<24*60*60*1e3){a(!0),o(!1);return}}catch{}if(!await Ts()){a(!0),sessionStorage.setItem(ur,JSON.stringify({timestamp:Date.now()})),o(!1);return}try{const b=localStorage.getItem(pr);let w=!1;b?w=await d():w=await u(),w?(a(!0),sessionStorage.setItem(ur,JSON.stringify({timestamp:Date.now()}))):s(!0)}catch{s(!0)}o(!1)},[]);x.useEffect(()=>{l.current||(l.current=!0,p())},[p]);const g=x.useCallback(()=>{p()},[p]);return e.jsx(vo.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:c,retryAuth:g},children:t})},_s=()=>{const t=x.useContext(vo);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},As=Cs`
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
`,Os=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,Bs=i.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,Fs=()=>{const{isDark:t}=ba();return e.jsx(Os,{children:e.jsx(Bs,{$isDark:t})})},Ms=i(y.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,Ps=i.div`
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
`,Es=i(ya)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,Ns=i.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,zs=i.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,Ws=i(y.button)`
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
`,Rs=i(y.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Hs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Ys=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Vs=()=>{const{isDark:t,toggleTheme:n}=ba();return e.jsx(Ms,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(Ps,{children:[e.jsx(Es,{to:"/","aria-label":"Go to homepage",children:e.jsx(Ns,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(zs,{}),e.jsx(Ws,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(ie,{mode:"wait",children:e.jsx(Rs,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(Ys,{}):e.jsx(Hs,{})},t?"moon":"sun")})})]})})},Us=i(y.div)`
  position: relative;
`,qs=i(ya)`
  display: block;
  text-decoration: none;
  color: inherit;
`,yo=i(y.div)`
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
`,Gs=i(y.div)`
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

  ${yo}:hover &::before {
    opacity: 0.3;
  }
`,Ks=i.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,Js={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},Xs={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},Zs=({title:t,icon:n,to:a})=>e.jsx(Us,{variants:Js,whileHover:"hover",whileTap:"tap",children:e.jsx(qs,{to:a,children:e.jsxs(yo,{variants:Xs,children:[e.jsx(Gs,{children:n}),e.jsx(Ks,{children:t})]})})}),Qs=i.div`
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
`,ec=i(y.div)`
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
`,tc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},nc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),rc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),ac=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),ic=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(nc,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:e.jsx(rc,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(ac,{}),to:"/canvas-manager"}],oc=()=>e.jsx(Qs,{children:e.jsx(ec,{variants:tc,initial:"hidden",animate:"visible",children:ic.map(t=>e.jsx(Zs,{title:t.title,icon:t.icon,to:t.to},t.id))})}),bo=i.div`
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
`;const Pn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Na=75e3,At=4,sc=12e5,cc=6e4,za=5e6,Wa=10,lc=12,dc=1800;function ut(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let o="";const c=r.slice(-3),s=r.slice(0,-3);if(s.length>0){const l=[];let u=s;for(;u.length>0;)u.length>=2?(l.unshift(u.slice(-2)),u=u.slice(0,-2)):(l.unshift(u),u="");o=l.join(",")+","+c}else o=c;return(n?"-":"")+o}function V(t){return"₹"+ut(t)}function q(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[o,c]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+ut(parseInt(o))+"."+c}function Ra(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:ut(t)}function uc(t){for(let n=Pn.length-1;n>=0;n--)if(t>Pn[n].from)return Pn[n].rate;return 0}function pc(t){const n=[];let a=t,r=0;for(const o of Pn){const c=o.from,l=(o.to??1/0)-c;if(a<=0){n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:0,taxInSlab:0});continue}const u=Math.min(a,l),d=u*o.rate/100;n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:u>0?u:0,taxInSlab:d}),r+=d,a-=u}return{slabs:n,totalTax:r}}function xc(t,n){if(n>za){const r=t*(1+Wa/100)*(1+At/100),o=n-za,s=(t+o)*(1+At/100),l=s<r,u=Math.min(r,s),d=u/(1+At/100),p=d-t,g=u-d;return{surchargeApplicable:!0,surchargeRate:Wa,surchargeAmount:p,marginalReliefApplied:l,taxAfterSurcharge:d,cess:g,totalTax:u}}else{const a=t*(At/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function Ha(t,n,a,r,o,c,s){const l=t*n/100,u=t-l;let d=0;o==="percentage"?d=t*c/100:o==="amount"&&(d=c);const p=t+d;let g=0,h=0;a&&(r==="percentage"?(g=l*lc/100,h=g):(g=dc*12,h=g));const f=t-h,b=s.map(ge=>({name:ge.name,amount:ge.amount*12})),w=b.reduce((ge,ke)=>ge+ke.amount,0),k=Math.max(0,f-Na),{slabs:L,totalTax:v}=pc(k);let $=0,F=v;k<=sc&&($=Math.min(v,cc),F=Math.max(0,v-$));const{surchargeApplicable:R,surchargeRate:O,surchargeAmount:P,marginalReliefApplied:E,taxAfterSurcharge:H,cess:I,totalTax:D}=xc(F,k),N=g+h,Y=D,C=g+D+w,m=f-g-D-w,S=m/12,_=f>0?D/f*100:0,ce=uc(k);let ae=0,oe=d;if(d>0&&ce>0){let ge=d*ce/100;R&&(ge=ge*(1+O/100)),ae=ge*(1+At/100),oe=d-ae}const ne=m+oe,we=ne/12;return{baseSalary:t,basicSalary:l,hra:u,bonus:d,totalEarnings:p,employeePF:g,employerPF:h,grossSalary:f,standardDeduction:Na,additionalDeductions:b,totalAdditionalDeductions:w,taxableIncome:k,slabs:L,taxBeforeSurcharge:v,surchargeApplicable:R,surchargeRate:O,surchargeAmount:P,marginalReliefApplied:E,taxAfterSurcharge:H,cessRate:At,cess:I,totalTax:D,rebate87A:$,totalPFDeduction:N,totalTaxDeduction:Y,totalDeductions:C,netSalaryYearly:m,netSalaryMonthly:S,effectiveTaxRate:_,bonusTaxRate:ce,bonusTaxAmount:ae,bonusAfterTax:oe,totalIncomeYearly:ne,totalIncomeMonthly:we}}function hc(t){const n=Ha(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const o=t.baseSalary*(1+r/100);a=Ha(o,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const ja="taxCalculatorInput";function gc(t){localStorage.setItem(ja,JSON.stringify(t))}function fc(){localStorage.removeItem(ja)}function jo(){const t=localStorage.getItem(ja);if(t)try{return JSON.parse(t)}catch{return null}return null}const mc={financialYear:"FY 2025-26"},vc=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Wt=i.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,Rt=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,Ht=i.div`
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
`,Yt=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,yc=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,mt=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ya=i.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,tt=i.input`
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
`,hr=i.div`
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
`,gr=i.div`
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
`,Va=i.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,Vt=i(y.button)`
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
`,bc=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,fr=i(y.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,mr=i(y.button)`
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
`,jc=i(y.button)`
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
`,wc=i.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,kc=i(y.button)`
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
`,Cc=i(y.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,Sc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Dc=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Tc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),$c=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),Ic=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Lc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),vr=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),zn={type:"spring",stiffness:300,damping:30,mass:.8},_c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:zn}},Ac={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...zn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...zn},opacity:{duration:.1}}}},Oc={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:zn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function yr(t){const n=t.replace(/[^\d]/g,"");return n?ut(parseInt(n)):""}function un(t){return parseInt(t.replace(/,/g,""))||0}const Bc=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,o]=x.useState(""),[c,s]=x.useState("50"),[l,u]=x.useState("percentage"),[d,p]=x.useState("none"),[g,h]=x.useState(""),[f,b]=x.useState([]),[w,k]=x.useState(""),[L,v]=x.useState(!1),$=x.useRef(!1);x.useEffect(()=>{const m=jo();m&&(o(ut(m.baseSalary)),s(m.basicPercentage.toString()),u(m.pfType),p(m.bonusType),h(m.bonusValue>0?m.bonusType==="amount"?ut(m.bonusValue):m.bonusValue.toString():""),b(m.additionalDeductions.map(S=>({name:S.name,amount:ut(S.amount)}))),k(m.hikePercentage>0?m.hikePercentage.toString():"")),v(!0)},[]),x.useEffect(()=>{L&&a&&r&&!$.current&&($.current=!0,setTimeout(()=>{I()},100))},[L,a,r]);const F=m=>{o(yr(m))},R=m=>{h(yr(m))},O=(m,S)=>{const _=[...f];_[m].amount=yr(S),b(_)},P=()=>{b([...f,{name:"",amount:""}])},E=m=>{b(f.filter((S,_)=>_!==m))},H=(m,S)=>{const _=[...f];_[m].name=S,b(_)},I=()=>{const m={baseSalary:un(r),basicPercentage:parseFloat(c)||50,calculatePF:!0,pfType:l,bonusType:d,bonusValue:d==="amount"?un(g):parseFloat(g)||0,additionalDeductions:f.filter(S=>S.name&&S.amount).map(S=>({name:S.name,amount:un(S.amount)})),hikePercentage:parseFloat(w)||0};gc(m),t(m)},D=()=>{o(""),s("50"),u("percentage"),p("none"),h(""),b([]),k(""),fc(),n==null||n()},Y=un(r)>0,C=r||f.length>0||d!=="none"||w;return e.jsxs(vc,{variants:_c,initial:"hidden",animate:"visible",children:[e.jsxs(Wt,{children:[e.jsxs(Rt,{children:[e.jsx(Ht,{$color:"#10b981",children:e.jsx(Sc,{})}),e.jsx(Yt,{children:"Salary Details"})]}),e.jsxs(yc,{children:[e.jsxs(mt,{children:[e.jsx(Ya,{children:"Yearly CTC *"}),e.jsx(hr,{children:e.jsx(tt,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:m=>F(m.target.value)})})]}),e.jsxs(mt,{children:[e.jsx(Ya,{children:"Basic %"}),e.jsx(gr,{children:e.jsx(tt,{type:"number",inputMode:"numeric",placeholder:"50",value:c,onChange:m=>s(m.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(Wt,{children:[e.jsxs(Rt,{children:[e.jsx(Ht,{$color:"#3b82f6",children:e.jsx(Dc,{})}),e.jsx(Yt,{children:"Provident Fund"})]}),e.jsxs(Va,{children:[e.jsx(Vt,{$active:l==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(Vt,{$active:l==="flat",onClick:()=>u("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(Wt,{children:[e.jsxs(Rt,{children:[e.jsx(Ht,{$color:"#f59e0b",children:e.jsx(Tc,{})}),e.jsx(Yt,{children:"Bonus (Optional)"})]}),e.jsxs(Va,{children:[e.jsx(Vt,{$active:d==="none",onClick:()=>p("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(Vt,{$active:d==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(Vt,{$active:d==="amount",onClick:()=>p("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(ie,{initial:!1,children:d!=="none"&&e.jsx(y.div,{initial:"hidden",animate:"visible",exit:"exit",variants:Ac,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(fr,{children:[e.jsx(mt,{style:{flex:1},children:d==="percentage"?e.jsx(gr,{children:e.jsx(tt,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:m=>h(m.target.value)})}):e.jsx(hr,{children:e.jsx(tt,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:m=>R(m.target.value)})})}),e.jsx(ie,{children:g&&e.jsx(mr,{onClick:()=>h(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(vr,{})})})]})},"bonus-input")})]}),e.jsxs(Wt,{children:[e.jsxs(Rt,{children:[e.jsx(Ht,{$color:"#ec4899",children:e.jsx($c,{})}),e.jsx(Yt,{children:"Monthly Deductions"})]}),e.jsxs(bc,{children:[e.jsx(ie,{mode:"popLayout",children:f.map((m,S)=>e.jsxs(fr,{variants:Oc,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(mt,{style:{flex:1},children:e.jsx(tt,{type:"text",placeholder:"Name (e.g., Cab)",value:m.name,onChange:_=>H(S,_.target.value)})}),e.jsx(mt,{style:{flex:1},children:e.jsx(hr,{children:e.jsx(tt,{type:"text",inputMode:"numeric",placeholder:"Amount",value:m.amount,onChange:_=>O(S,_.target.value)})})}),e.jsx(mr,{onClick:()=>E(S),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(vr,{})})]},S))}),e.jsxs(jc,{onClick:P,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(Lc,{}),"Add Deduction"]})]})]}),e.jsxs(Wt,{children:[e.jsxs(Rt,{children:[e.jsx(Ht,{$color:"#8b5cf6",children:e.jsx(Ic,{})}),e.jsx(Yt,{children:"Hike / Appraisal"})]}),e.jsxs(fr,{children:[e.jsx(mt,{style:{flex:1},children:e.jsx(gr,{children:e.jsx(tt,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:w,onChange:m=>k(m.target.value),min:"0",max:"200"})})}),e.jsx(ie,{children:w&&e.jsx(mr,{onClick:()=>k(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(vr,{})})})]})]}),e.jsxs(wc,{children:[e.jsx(kc,{onClick:I,disabled:!Y,whileHover:Y?{scale:1.02}:{},whileTap:Y?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(ie,{children:C&&e.jsx(Cc,{onClick:D,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},Fc=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,nt=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,rt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,at=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,it=i.div`
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
`,ot=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,st=i.div`
  padding: 16px;
`,Ut=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Oe=i.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,br=i(y.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,jr=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,wr=i.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,vt=i.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,Mc=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,yt=i.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,bt=i.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,jt=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,wt=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,We=i.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,me=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,ve=i.span`
  font-size: 14px;
  font-weight: ${({$bold:t})=>t?"600":"400"};
  color: ${({$bold:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,X=i.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:t,$negative:n})=>t?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,De=i.div`
  text-align: right;
  flex-shrink: 0;
`,Te=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Pc=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Ua=i(y.div)`
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
`,Ve=i.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ec=i(y.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,Nc=i.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,zc=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,Wc=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Rc=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Hc=i.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,Yc=i.span`
  font-size: 12px;
  color: var(--text-secondary);
`,Vc=i.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,qt=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Be=i.div`
  padding: 14px;
  background: ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.08)":"var(--bg-tertiary)"};
  border: 1px solid ${({$highlight:t})=>t?"rgba(16, 185, 129, 0.2)":"var(--border)"};
  border-radius: 12px;
`,Fe=i.div`
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`,Me=i.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,Gt=i.div`
  font-size: 12px;
  font-weight: 500;
  color: #10b981;
  margin-top: 4px;
`,qa=i(y.div)`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  border-left: 3px solid var(--accent);
`,Ga=i.div`
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`,Uc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),qc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),Gc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),Kc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ka=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Jc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Xc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},ct={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},Zc=({breakdown:t})=>{const[n,a]=x.useState("monthly"),r=n==="monthly"?1/12:1,o=h=>h===0?"#10b981":h<=10?"#3BB4B1":h<=20?"#4361A5":h<=25?"#6B8DD6":"#7BA7D9",c=Math.max(...t.slabs.map(h=>h.taxInSlab),1),l=(()=>{const h=n==="monthly"?.08333333333333333:1,f=[{label:"In-Hand",value:t.netSalaryYearly*h,color:"#10b981"},{label:"Tax",value:t.totalTax*h,color:"#4361A5"},{label:"PF",value:t.employeePF*h,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&f.push({label:"Other",value:t.totalAdditionalDeductions*h,color:"#7BA7D9"}),f})(),u=l.reduce((h,f)=>h+f.value,0),d=[];t.surchargeApplicable&&d.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${V(t.rebate87A)} applied`),t.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const p=!!t.postHike,g=t.bonus>0;return e.jsxs(Fc,{variants:Xc,initial:"hidden",animate:"visible",children:[p&&e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#3b82f6",children:e.jsx(Ka,{})}),e.jsx(ot,{children:"Base Salary (CTC)"})]}),e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(st,{children:e.jsxs(qt,{children:[e.jsxs(Be,{children:[e.jsx(Fe,{children:"Current"}),e.jsx(Me,{children:V(t.baseSalary)})]}),e.jsxs(Be,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike"}),e.jsx(Me,{children:V(t.postHike.baseSalary)}),e.jsxs(Gt,{children:["+",V(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#10b981",children:e.jsx(Uc,{})}),e.jsx(ot,{children:"In-Hand Salary"})]}),e.jsxs(Ut,{children:[p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(wr,{children:[e.jsx(vt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(vt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(st,{children:p?e.jsxs(qt,{children:[e.jsxs(Be,{children:[e.jsx(Fe,{children:"Current"}),e.jsx(Me,{children:q(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(Be,{$highlight:!0,children:[e.jsxs(Fe,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Me,{children:q(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Gt,{children:["+",V(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(br,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:q(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(jr,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#f59e0b",children:e.jsx(Kc,{})}),e.jsx(ot,{children:"Bonus"})]}),p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(st,{children:[p?e.jsxs(e.Fragment,{children:[e.jsxs(qt,{children:[e.jsxs(Be,{children:[e.jsx(Fe,{children:"Current Gross"}),e.jsx(Me,{children:V(t.bonus)})]}),e.jsxs(Be,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike Gross"}),e.jsx(Me,{children:V(t.postHike.bonus)}),e.jsxs(Gt,{children:["+",V(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(We,{}),e.jsxs(qt,{children:[e.jsxs(Be,{children:[e.jsx(Fe,{children:"Current In-Hand"}),e.jsx(Me,{children:q(t.bonusAfterTax)})]}),e.jsxs(Be,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike In-Hand"}),e.jsx(Me,{children:q(t.postHike.bonusAfterTax)}),e.jsxs(Gt,{children:["+",V(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(br,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:V(t.bonus)}),e.jsx(jr,{children:"Gross Bonus (before tax)"}),e.jsx(We,{}),e.jsxs(me,{children:[e.jsxs(ve,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(X,{$negative:!0,children:["-",q(t.bonusTaxAmount)]})]}),e.jsxs(me,{children:[e.jsx(ve,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(X,{$highlight:!0,children:q(t.bonusAfterTax)})]})]}),e.jsx(We,{}),e.jsx(qa,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(Ga,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#8b5cf6",children:e.jsx(Ka,{})}),e.jsx(ot,{children:"Total Combined Income"})]}),e.jsxs(Ut,{children:[p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx(Oe,{children:"Yearly"})]})]}),e.jsxs(st,{children:[p?e.jsxs(qt,{children:[e.jsxs(Be,{children:[e.jsx(Fe,{children:"Current Total"}),e.jsx(Me,{children:q(t.totalIncomeYearly)})]}),e.jsxs(Be,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike Total"}),e.jsx(Me,{children:q(t.postHike.totalIncomeYearly)}),e.jsxs(Gt,{children:["+",V(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(br,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:q(t.totalIncomeYearly)}),e.jsx(jr,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(We,{}),e.jsxs(me,{children:[e.jsx(ve,{children:"Base In-Hand (Yearly)"}),p?e.jsxs(De,{children:[e.jsx(X,{children:q(t.netSalaryYearly)}),e.jsxs(Te,{$positive:!0,children:["→ ",q(t.postHike.netSalaryYearly)]})]}):e.jsx(X,{children:q(t.netSalaryYearly)})]}),e.jsxs(me,{children:[e.jsx(ve,{children:"Bonus In-Hand"}),p?e.jsxs(De,{children:[e.jsx(X,{children:q(t.bonusAfterTax)}),e.jsxs(Te,{$positive:!0,children:["→ ",q(t.postHike.bonusAfterTax)]})]}):e.jsx(X,{children:q(t.bonusAfterTax)})]}),e.jsxs(me,{children:[e.jsx(ve,{$bold:!0,children:"Total Combined"}),p?e.jsxs(De,{children:[e.jsx(X,{$highlight:!0,children:q(t.totalIncomeYearly)}),e.jsxs(Te,{$positive:!0,children:["→ ",q(t.postHike.totalIncomeYearly)]})]}):e.jsx(X,{$highlight:!0,children:q(t.totalIncomeYearly)})]})]})]}),e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#ec4899",children:e.jsx(Gc,{})}),e.jsx(ot,{children:"Summary"})]}),e.jsxs(Ut,{children:[p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(wr,{children:[e.jsx(vt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(vt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(st,{children:[e.jsxs(Mc,{children:[e.jsxs(yt,{children:[e.jsx(bt,{children:"Gross Salary"}),e.jsx(jt,{children:V(t.grossSalary*r)}),p&&e.jsxs(wt,{$positive:!0,children:["→ ",V(t.postHike.grossSalary*r)]})]}),e.jsxs(yt,{children:[e.jsx(bt,{children:"Total Tax"}),e.jsx(jt,{children:q(t.totalTax*r)}),p&&e.jsxs(wt,{children:["→ ",q(t.postHike.totalTax*r)]})]}),e.jsxs(yt,{children:[e.jsx(bt,{children:"Employee PF"}),e.jsx(jt,{children:V(t.employeePF*r)}),p&&e.jsxs(wt,{$positive:!0,children:["→ ",V(t.postHike.employeePF*r)]})]}),e.jsxs(yt,{children:[e.jsx(bt,{children:"Employer PF"}),e.jsx(jt,{children:V(t.employerPF*r)}),p&&e.jsxs(wt,{$positive:!0,children:["→ ",V(t.postHike.employerPF*r)]})]}),e.jsxs(yt,{children:[e.jsx(bt,{children:"Total PF"}),e.jsx(jt,{children:V((t.employeePF+t.employerPF)*r)}),p&&e.jsxs(wt,{$positive:!0,children:["→ ",V((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(yt,{children:[e.jsx(bt,{children:"Eff. Tax Rate"}),e.jsxs(jt,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),p&&e.jsxs(wt,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(We,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(Nc,{children:l.map((h,f)=>e.jsx(zc,{$color:h.color,initial:{width:0},animate:{width:`${h.value/u*100}%`},transition:{delay:.3+f*.1,duration:.5}},f))}),e.jsx(Wc,{children:l.map((h,f)=>e.jsxs(Rc,{children:[e.jsx(Hc,{$color:h.color}),e.jsx(Yc,{children:h.label}),e.jsx(Vc,{children:V(h.value)})]},f))}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(We,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:d.map((h,f)=>e.jsx(qa,{children:e.jsx(Ga,{dangerouslySetInnerHTML:{__html:h}})},f))})]})]})]}),e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#10b981",children:e.jsx(Jc,{})}),e.jsx(ot,{children:"Breakdown"})]}),e.jsxs(Ut,{children:[p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(wr,{children:[e.jsx(vt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(vt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(st,{children:[e.jsxs(me,{children:[e.jsx(ve,{children:"Base Salary (CTC)"}),p?e.jsxs(De,{children:[e.jsx(X,{children:V(t.baseSalary*r)}),e.jsxs(Te,{$positive:!0,children:["→ ",V(t.postHike.baseSalary*r)]})]}):e.jsx(X,{children:V(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(me,{children:[e.jsx(ve,{children:"Less: Employer PF"}),p?e.jsxs(De,{children:[e.jsxs(X,{$negative:!0,children:["-",V(t.employerPF*r)]}),e.jsxs(Te,{children:["→ -",V(t.postHike.employerPF*r)]})]}):e.jsxs(X,{$negative:!0,children:["-",V(t.employerPF*r)]})]}),e.jsxs(me,{children:[e.jsx(ve,{$bold:!0,children:"Gross Salary"}),p?e.jsxs(De,{children:[e.jsx(X,{children:V(t.grossSalary*r)}),e.jsxs(Te,{$positive:!0,children:["→ ",V(t.postHike.grossSalary*r)]})]}):e.jsx(X,{children:V(t.grossSalary*r)})]}),e.jsxs(me,{children:[e.jsx(ve,{children:"Less: Standard Deduction"}),e.jsxs(X,{$negative:!0,children:["-",V(t.standardDeduction*r)]})]}),e.jsxs(me,{children:[e.jsx(ve,{$bold:!0,children:"Taxable Income"}),p?e.jsxs(De,{children:[e.jsx(X,{children:V(t.taxableIncome*r)}),e.jsxs(Te,{$positive:!0,children:["→ ",V(t.postHike.taxableIncome*r)]})]}):e.jsx(X,{children:V(t.taxableIncome*r)})]}),e.jsx(We,{}),e.jsxs(me,{children:[e.jsx(ve,{children:"Less: Income Tax"}),p?e.jsxs(De,{children:[e.jsxs(X,{$negative:!0,children:["-",q(t.totalTax*r)]}),e.jsxs(Te,{children:["→ -",q(t.postHike.totalTax*r)]})]}):e.jsxs(X,{$negative:!0,children:["-",q(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(me,{children:[e.jsx(ve,{children:"Less: Employee PF"}),p?e.jsxs(De,{children:[e.jsxs(X,{$negative:!0,children:["-",V(t.employeePF*r)]}),e.jsxs(Te,{children:["→ -",V(t.postHike.employeePF*r)]})]}):e.jsxs(X,{$negative:!0,children:["-",V(t.employeePF*r)]})]}),t.additionalDeductions.map((h,f)=>e.jsxs(me,{children:[e.jsxs(ve,{children:["Less: ",h.name]}),e.jsxs(X,{$negative:!0,children:["-",V(h.amount*r)]})]},f)),e.jsx(We,{}),e.jsxs(me,{children:[e.jsxs(ve,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),p?e.jsxs(De,{children:[e.jsx(X,{$highlight:!0,children:q(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(Te,{$positive:!0,children:["→ ",q(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(X,{$highlight:!0,children:q(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(nt,{variants:ct,children:[e.jsxs(rt,{children:[e.jsxs(at,{children:[e.jsx(it,{$color:"#3b82f6",children:e.jsx(qc,{})}),e.jsx(ot,{children:"Tax Slabs"})]}),e.jsxs(Ut,{children:[e.jsx(Oe,{children:mc.financialYear}),p&&e.jsxs(Oe,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(st,{children:[e.jsxs(Pc,{children:[e.jsxs(Ua,{$header:!0,children:[e.jsx(Ve,{children:"Slab"}),e.jsx(Ve,{$align:"center",children:"Rate"}),e.jsx(Ve,{$align:"right",children:"Amount"}),e.jsx(Ve,{$align:"right",children:"Tax"})]}),e.jsx(ie,{children:t.slabs.map((h,f)=>e.jsxs(Ua,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:f*.03},children:[e.jsxs(Ve,{children:[Ra(h.from)," - ",Ra(h.to),h.taxableInSlab>0&&e.jsx(Ec,{$color:o(h.rate),initial:{width:0},animate:{width:`${Math.max(h.taxInSlab/c*100,8)}%`},transition:{delay:.2+f*.03,duration:.4}})]}),e.jsxs(Ve,{$align:"center",$highlight:h.rate===0,children:[h.rate,"%"]}),e.jsx(Ve,{$align:"right",$muted:h.taxableInSlab===0,children:h.taxableInSlab>0?V(h.taxableInSlab):"-"}),e.jsx(Ve,{$align:"right",$muted:h.taxInSlab===0,children:h.taxInSlab>0?V(h.taxInSlab):"-"})]},f))})]}),e.jsx(We,{}),e.jsxs(me,{children:[e.jsx(ve,{children:"Tax Before Surcharge"}),p?e.jsxs(De,{children:[e.jsx(X,{children:q(t.taxBeforeSurcharge)}),e.jsxs(Te,{children:["→ ",q(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(X,{children:q(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(me,{children:[e.jsx(ve,{children:"Section 87A Rebate"}),e.jsxs(X,{$negative:!0,children:["-",V(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(me,{children:[e.jsxs(ve,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx(Oe,{$color:"#f59e0b",children:"Marginal Relief"})]}),p&&t.postHike.surchargeApplicable?e.jsxs(De,{children:[e.jsx(X,{children:q(t.surchargeAmount)}),e.jsxs(Te,{children:["→ ",q(t.postHike.surchargeAmount)]})]}):e.jsx(X,{children:q(t.surchargeAmount)})]}),e.jsxs(me,{children:[e.jsxs(ve,{children:["Cess (",t.cessRate,"%)"]}),p?e.jsxs(De,{children:[e.jsx(X,{children:q(t.cess)}),e.jsxs(Te,{children:["→ ",q(t.postHike.cess)]})]}):e.jsx(X,{children:q(t.cess)})]}),e.jsxs(me,{children:[e.jsx(ve,{$bold:!0,children:"Total Tax"}),p?e.jsxs(De,{children:[e.jsx(X,{$highlight:!0,children:q(t.totalTax)}),e.jsxs(Te,{children:["→ ",q(t.postHike.totalTax)]})]}):e.jsx(X,{$highlight:!0,children:q(t.totalTax)})]})]})]})]})},Qc=i(y.div)`
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
`,el=i.div`
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
`,tl=i(y.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,nl=i(y.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,rl={type:"spring",stiffness:300,damping:30,mass:.8},al={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Ja={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:rl}},il=()=>{const[t,n]=x.useState(null),[a,r]=x.useState(!1);x.useEffect(()=>{const s=jo();s&&s.baseSalary>0&&r(!0)},[]);const o=x.useCallback(s=>{const l=hc(s);n(l),window.innerWidth<1024&&setTimeout(()=>{var u;(u=document.getElementById("results"))==null||u.scrollIntoView({behavior:"smooth"})},100)},[]),c=x.useCallback(()=>{n(null)},[]);return e.jsx(Qc,{variants:al,initial:"hidden",animate:"visible",children:e.jsx(bo,{$maxWidth:"wide",children:e.jsxs(el,{children:[e.jsx(tl,{variants:Ja,children:e.jsx(Bc,{onCalculate:o,onReset:c,autoCalculate:a})}),e.jsx(nl,{id:"results",variants:Ja,children:t&&e.jsx(Zc,{breakdown:t},"results")})]})})})};function wo(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(a=wo(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function Yn(){for(var t,n,a=0,r="",o=arguments.length;a<o;a++)(t=arguments[a])&&(n=wo(t))&&(r&&(r+=" "),r+=n);return r}const ol=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const o=Object.getOwnPropertyDescriptor(t,a),c=Object.getOwnPropertyDescriptor(n,a);!sl(o,c)&&r||Object.defineProperty(t,a,c)},sl=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},cl=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},ll=(t,n)=>`/* Wrapped ${t}*/
${n}`,dl=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),ul=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),pl=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,o=ll.bind(null,r,n.toString());Object.defineProperty(o,"name",ul);const{writable:c,enumerable:s,configurable:l}=dl;Object.defineProperty(t,"toString",{value:o,writable:c,enumerable:s,configurable:l})};function xl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const o of Reflect.ownKeys(n))ol(t,n,o,a);return cl(t,n),pl(t,n,r),t}const pn=2147483647,hl=new WeakMap,kr=new WeakMap,gl=new WeakMap;function fl(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function ko(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>pn)throw new TypeError(`The \`maxAge\` option cannot exceed ${pn}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const o=function(...c){var p;const s=n?n(c):c[0],l=fl(a,s);if(l)return l.data;const u=t.apply(this,c),d=typeof r=="function"?r(...c):r;if(d!==void 0&&d!==Number.POSITIVE_INFINITY){if(!Number.isFinite(d))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(d<=0)return u;if(d>pn)throw new TypeError(`The \`maxAge\` function result cannot exceed ${pn}.`)}if(a.set(s,{data:u,maxAge:d===void 0||d===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+d}),d!==void 0&&d!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var f;a.delete(s),(f=kr.get(o))==null||f.delete(g)},d);(p=g.unref)==null||p.call(g);const h=kr.get(o)??new Set;h.add(g),kr.set(o,h)}return u};return xl(o,t,{ignoreNonConfigurable:!0}),hl.set(o,a),gl.set(o,n??(c=>c[0])),o}function ml(t){return typeof t=="string"}function vl(t,n,a){return a.indexOf(t)===n}function yl(t){return t.toLowerCase()===t}function Xa(t){return t.indexOf(",")===-1?t:t.split(",")}function ra(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return ra(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return ra(a)}if(t.indexOf("-")===-1||!yl(t))return t;var o=t.split("-"),c=o[0],s=o[1],l=s===void 0?"":s;return"".concat(c,"-").concat(l.toUpperCase())}function bl(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,o=n.fallbackLocale,c=o===void 0?"en-US":o,s=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],u=[],d=0,p=l;d<p.length;d++){var g=p[d];u=u.concat(Xa(g))}var h=navigator.language,f=h&&Xa(h);s=s.concat(u,f)}return r&&s.push(c),s.filter(ml).map(ra).filter(vl)}var jl=ko(bl,{cacheKey:JSON.stringify});function wl(t){return jl(t)[0]||null}var Co=ko(wl,{cacheKey:JSON.stringify});function Re(t,n,a){return function(o,c=a){const s=t(o)+c;return n(s)}}function nn(t){return function(a){return new Date(t(a).getTime()-1)}}function rn(t,n){return function(r){return[t(r),n(r)]}}function le(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function Je(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function Vn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function Mt(t){const n=le(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const kl=Re(le,Mt,-100),So=Re(le,Mt,100),wa=nn(So),Cl=Re(le,wa,-100),Do=rn(Mt,wa);function Xe(t){const n=le(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const To=Re(le,Xe,-10),ka=Re(le,Xe,10),Un=nn(ka),$o=Re(le,Un,-10),Io=rn(Xe,Un);function Pt(t){const n=le(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const Lo=Re(le,Pt,-1),Ca=Re(le,Pt,1),qn=nn(Ca),_o=Re(le,qn,-1),Sl=rn(Pt,qn);function Sa(t,n){return function(r,o=n){const c=le(r),s=Je(r)+o,l=new Date;return l.setFullYear(c,s,1),l.setHours(0,0,0,0),t(l)}}function xt(t){const n=le(t),a=Je(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Ao=Sa(xt,-1),Da=Sa(xt,1),an=nn(Da),Oo=Sa(an,-1),Dl=rn(xt,an);function Tl(t,n){return function(r,o=n){const c=le(r),s=Je(r),l=Vn(r)+o,u=new Date;return u.setFullYear(c,s,l),u.setHours(0,0,0,0),t(u)}}function on(t){const n=le(t),a=Je(t),r=Vn(t),o=new Date;return o.setFullYear(n,a,r),o.setHours(0,0,0,0),o}const $l=Tl(on,1),Ta=nn($l),Il=rn(on,Ta);function Bo(t){return Vn(an(t))}var be={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Ll={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},$a=[0,1,2,3,4,5,6],Cr=new Map;function _l(t){return function(a,r){var o=a||Co();Cr.has(o)||Cr.set(o,new Map);var c=Cr.get(o);return c.has(t)||c.set(t,new Intl.DateTimeFormat(o||void 0,t).format),c.get(t)(r)}}function Al(t){var n=new Date(t);return new Date(n.setHours(12))}function ht(t){return function(n,a){return _l(t)(n,Al(a))}}var Ol={day:"numeric"},Bl={day:"numeric",month:"long",year:"numeric"},Fl={month:"long"},Ml={month:"long",year:"numeric"},Pl={weekday:"short"},El={weekday:"long"},Nl={year:"numeric"},zl=ht(Ol),Wl=ht(Bl),Rl=ht(Fl),Fo=ht(Ml),Hl=ht(Pl),Yl=ht(El),Gn=ht(Nl),Vl=$a[0],Ul=$a[5],Za=$a[6];function Qt(t,n){n===void 0&&(n=be.ISO_8601);var a=t.getDay();switch(n){case be.ISO_8601:return(a+6)%7;case be.ISLAMIC:return(a+1)%7;case be.HEBREW:case be.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function ql(t){var n=Mt(t);return le(n)}function Gl(t){var n=Xe(t);return le(n)}function aa(t,n){n===void 0&&(n=be.ISO_8601);var a=le(t),r=Je(t),o=t.getDate()-Qt(t,n);return new Date(a,r,o)}function Kl(t,n){n===void 0&&(n=be.ISO_8601);var a=n===be.GREGORY?be.GREGORY:be.ISO_8601,r=aa(t,n),o=le(t)+1,c,s;do c=new Date(o,0,a===be.ISO_8601?4:1),s=aa(c,n),o-=1;while(t<s);return Math.round((r.getTime()-s.getTime())/(864e5*7))+1}function pt(t,n){switch(t){case"century":return Mt(n);case"decade":return Xe(n);case"year":return Pt(n);case"month":return xt(n);case"day":return on(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Jl(t,n){switch(t){case"century":return kl(n);case"decade":return To(n);case"year":return Lo(n);case"month":return Ao(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Mo(t,n){switch(t){case"century":return So(n);case"decade":return ka(n);case"year":return Ca(n);case"month":return Da(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Xl(t,n){switch(t){case"decade":return To(n,-100);case"year":return Lo(n,-10);case"month":return Ao(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Zl(t,n){switch(t){case"decade":return ka(n,100);case"year":return Ca(n,10);case"month":return Da(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Po(t,n){switch(t){case"century":return wa(n);case"decade":return Un(n);case"year":return qn(n);case"month":return an(n);case"day":return Ta(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Ql(t,n){switch(t){case"century":return Cl(n);case"decade":return $o(n);case"year":return _o(n);case"month":return Oo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function ed(t,n){switch(t){case"decade":return $o(n,-100);case"year":return _o(n,-10);case"month":return Oo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Qa(t,n){switch(t){case"century":return Do(n);case"decade":return Io(n);case"year":return Sl(n);case"month":return Dl(n);case"day":return Il(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function td(t,n,a){var r=[n,a].sort(function(o,c){return o.getTime()-c.getTime()});return[pt(t,r[0]),Po(t,r[1])]}function Eo(t,n,a){return a.map(function(r){return(n||Gn)(t,r)}).join(" – ")}function nd(t,n,a){return Eo(t,n,Do(a))}function No(t,n,a){return Eo(t,n,Io(a))}function rd(t){return t.getDay()===new Date().getDay()}function zo(t,n){n===void 0&&(n=be.ISO_8601);var a=t.getDay();switch(n){case be.ISLAMIC:case be.HEBREW:return a===Ul||a===Za;case be.ISO_8601:case be.GREGORY:return a===Za||a===Vl;default:throw new Error("Unsupported calendar type.")}}var Pe="react-calendar__navigation";function ad(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,o=r===void 0?Fo:r,c=t.formatYear,s=c===void 0?Gn:c,l=t.locale,u=t.maxDate,d=t.minDate,p=t.navigationAriaLabel,g=p===void 0?"":p,h=t.navigationAriaLive,f=t.navigationLabel,b=t.next2AriaLabel,w=b===void 0?"":b,k=t.next2Label,L=k===void 0?"»":k,v=t.nextAriaLabel,$=v===void 0?"":v,F=t.nextLabel,R=F===void 0?"›":F,O=t.prev2AriaLabel,P=O===void 0?"":O,E=t.prev2Label,H=E===void 0?"«":E,I=t.prevAriaLabel,D=I===void 0?"":I,N=t.prevLabel,Y=N===void 0?"‹":N,C=t.setActiveStartDate,m=t.showDoubleView,S=t.view,_=t.views,ce=_.indexOf(S)>0,ae=S!=="century",oe=Jl(S,n),ne=ae?Xl(S,n):void 0,we=Mo(S,n),ge=ae?Zl(S,n):void 0,ke=function(){if(oe.getFullYear()<0)return!0;var re=Ql(S,n);return d&&d>=re}(),J=ae&&function(){if(ne.getFullYear()<0)return!0;var re=ed(S,n);return d&&d>=re}(),$e=u&&u<we,ue=ae&&u&&u<ge;function Ce(){C(oe,"prev")}function ye(){C(ne,"prev2")}function He(){C(we,"next")}function Ee(){C(ge,"next2")}function Le(re){var Ze=function(){switch(S){case"century":return nd(l,s,re);case"decade":return No(l,s,re);case"year":return s(l,re);case"month":return o(l,re);default:throw new Error("Invalid view: ".concat(S,"."))}}();return f?f({date:re,label:Ze,locale:l||Co()||void 0,view:S}):Ze}function Ne(){var re="".concat(Pe,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":h,className:re,disabled:!ce,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(re,"__labelText ").concat(re,"__labelText--from"),children:Le(n)}),m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(re,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(re,"__labelText ").concat(re,"__labelText--to"),children:Le(we)})]}):null]})}return e.jsxs("div",{className:Pe,children:[H!==null&&ae?e.jsx("button",{"aria-label":P,className:"".concat(Pe,"__arrow ").concat(Pe,"__prev2-button"),disabled:J,onClick:ye,type:"button",children:H}):null,Y!==null&&e.jsx("button",{"aria-label":D,className:"".concat(Pe,"__arrow ").concat(Pe,"__prev-button"),disabled:ke,onClick:Ce,type:"button",children:Y}),Ne(),R!==null&&e.jsx("button",{"aria-label":$,className:"".concat(Pe,"__arrow ").concat(Pe,"__next-button"),disabled:$e,onClick:He,type:"button",children:R}),L!==null&&ae?e.jsx("button",{"aria-label":w,className:"".concat(Pe,"__arrow ").concat(Pe,"__next2-button"),disabled:ue,onClick:Ee,type:"button",children:L}):null]})}var Ot=function(){return Ot=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ot.apply(this,arguments)},id=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function ei(t){return"".concat(t,"%")}function Ia(t){var n=t.children,a=t.className,r=t.count,o=t.direction,c=t.offset,s=t.style,l=t.wrap,u=id(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",Ot({className:a,style:Ot({display:"flex",flexDirection:o,flexWrap:l?"wrap":"nowrap"},s)},u,{children:x.Children.map(n,function(d,p){var g=c&&p===0?ei(100*c/r):null;return x.cloneElement(d,Ot(Ot({},d.props),{style:{flexBasis:ei(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function od(t,n,a){return n&&n>t?n:a&&a<t?a:t}function en(t,n){return n[0]<=t&&n[1]>=t}function sd(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function Wo(t,n){return en(t[0],n)||en(t[1],n)}function ti(t,n,a){var r=Wo(n,t),o=[];if(r){o.push(a);var c=en(t[0],n),s=en(t[1],n);c&&o.push("".concat(a,"Start")),s&&o.push("".concat(a,"End")),c&&s&&o.push("".concat(a,"BothEnds"))}return o}function cd(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function ld(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,o="react-calendar__tile",c=[o];if(!a)return c;var s=new Date,l=function(){if(Array.isArray(a))return a;var f=t.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return Qa(f,a)}();if(en(s,l)&&c.push("".concat(o,"--now")),!n||!cd(n))return c;var u=function(){if(Array.isArray(n))return n;var f=t.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return Qa(f,n)}();sd(u,l)?c.push("".concat(o,"--active")):Wo(u,l)&&c.push("".concat(o,"--hasActive"));var d=ti(u,l,"".concat(o,"--range"));c.push.apply(c,d);var p=Array.isArray(n)?n:[n];if(r&&p.length===1){var g=r>u[0]?[u[0],r]:[r,u[0]],h=ti(g,l,"".concat(o,"--hover"));c.push.apply(c,h)}return c}function Kn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,o=t.dateTransform,c=t.dateType,s=t.end,l=t.hover,u=t.offset,d=t.renderTile,p=t.start,g=t.step,h=g===void 0?1:g,f=t.value,b=t.valueType,w=[],k=p;k<=s;k+=h){var L=o(k);w.push(d({classes:ld({date:L,dateType:c,hover:l,value:f,valueType:b}),date:L}))}return e.jsx(Ia,{className:n,count:r,offset:u,wrap:!0,children:w})}function Jn(t){var n=t.activeStartDate,a=t.children,r=t.classes,o=t.date,c=t.formatAbbr,s=t.locale,l=t.maxDate,u=t.maxDateTransform,d=t.minDate,p=t.minDateTransform,g=t.onClick,h=t.onMouseOver,f=t.style,b=t.tileClassName,w=t.tileContent,k=t.tileDisabled,L=t.view,v=x.useMemo(function(){var F={activeStartDate:n,date:o,view:L};return typeof b=="function"?b(F):b},[n,o,b,L]),$=x.useMemo(function(){var F={activeStartDate:n,date:o,view:L};return typeof w=="function"?w(F):w},[n,o,w,L]);return e.jsxs("button",{className:Yn(r,v),disabled:d&&p(d)>o||l&&u(l)<o||(k==null?void 0:k({activeStartDate:n,date:o,view:L})),onClick:g?function(F){return g(o,F)}:void 0,onFocus:h?function(){return h(o)}:void 0,onMouseOver:h?function(){return h(o)}:void 0,style:f,type:"button",children:[c?e.jsx("abbr",{"aria-label":c(s,o),children:a}):a,$]})}var ia=function(){return ia=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ia.apply(this,arguments)},dd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ni="react-calendar__century-view__decades__decade";function ud(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,o=t.formatYear,c=o===void 0?Gn:o,s=dd(t,["classes","currentCentury","formatYear"]),l=s.date,u=s.locale,d=[];return a&&d.push.apply(d,a),d.push(ni),Mt(l).getFullYear()!==r&&d.push("".concat(ni,"--neighboringCentury")),e.jsx(Jn,ia({},s,{classes:d,maxDateTransform:Un,minDateTransform:Xe,view:"century",children:No(u,c,l)}))}var oa=function(){return oa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},oa.apply(this,arguments)},ri=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function pd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,o=t.value,c=t.valueType,s=ri(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=ql(n),u=l+(r?119:99);return e.jsx(Kn,{className:"react-calendar__century-view__decades",dateTransform:Xe,dateType:"decade",end:u,hover:a,renderTile:function(d){var p=d.date,g=ri(d,["date"]);return e.jsx(ud,oa({},s,g,{activeStartDate:n,currentCentury:l,date:p}),p.getTime())},start:l,step:10,value:o,valueType:c})}var sa=function(){return sa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},sa.apply(this,arguments)};function xd(t){function n(){return e.jsx(pd,sa({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var ca=function(){return ca=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ca.apply(this,arguments)},hd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ai="react-calendar__decade-view__years__year";function gd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,o=t.formatYear,c=o===void 0?Gn:o,s=hd(t,["classes","currentDecade","formatYear"]),l=s.date,u=s.locale,d=[];return a&&d.push.apply(d,a),d.push(ai),Xe(l).getFullYear()!==r&&d.push("".concat(ai,"--neighboringDecade")),e.jsx(Jn,ca({},s,{classes:d,maxDateTransform:qn,minDateTransform:Pt,view:"decade",children:c(u,l)}))}var la=function(){return la=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},la.apply(this,arguments)},ii=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function fd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,o=t.value,c=t.valueType,s=ii(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=Gl(n),u=l+(r?11:9);return e.jsx(Kn,{className:"react-calendar__decade-view__years",dateTransform:Pt,dateType:"year",end:u,hover:a,renderTile:function(d){var p=d.date,g=ii(d,["date"]);return e.jsx(gd,la({},s,g,{activeStartDate:n,currentDecade:l,date:p}),p.getTime())},start:l,value:o,valueType:c})}var da=function(){return da=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},da.apply(this,arguments)};function md(t){function n(){return e.jsx(fd,da({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var ua=function(){return ua=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ua.apply(this,arguments)},vd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},oi=function(t,n,a){if(a||arguments.length===2)for(var r=0,o=n.length,c;r<o;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return t.concat(c||Array.prototype.slice.call(n))},yd="react-calendar__year-view__months__month";function bd(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,o=r===void 0?Rl:r,c=t.formatMonthYear,s=c===void 0?Fo:c,l=vd(t,["classes","formatMonth","formatMonthYear"]),u=l.date,d=l.locale;return e.jsx(Jn,ua({},l,{classes:oi(oi([],a,!0),[yd],!1),formatAbbr:s,maxDateTransform:an,minDateTransform:xt,view:"year",children:o(d,u)}))}var pa=function(){return pa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pa.apply(this,arguments)},si=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function jd(t){var n=t.activeStartDate,a=t.hover,r=t.value,o=t.valueType,c=si(t,["activeStartDate","hover","value","valueType"]),s=0,l=11,u=le(n);return e.jsx(Kn,{className:"react-calendar__year-view__months",dateTransform:function(d){var p=new Date;return p.setFullYear(u,d,1),xt(p)},dateType:"month",end:l,hover:a,renderTile:function(d){var p=d.date,g=si(d,["date"]);return e.jsx(bd,pa({},c,g,{activeStartDate:n,date:p}),p.getTime())},start:s,value:r,valueType:o})}var xa=function(){return xa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xa.apply(this,arguments)};function wd(t){function n(){return e.jsx(jd,xa({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var ha=function(){return ha=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ha.apply(this,arguments)},kd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},Sr="react-calendar__month-view__days__day";function Cd(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,o=t.currentMonthIndex,c=t.formatDay,s=c===void 0?zl:c,l=t.formatLongDate,u=l===void 0?Wl:l,d=kd(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=d.date,g=d.locale,h=[];return r&&h.push.apply(h,r),h.push(Sr),zo(p,n)&&h.push("".concat(Sr,"--weekend")),p.getMonth()!==o&&h.push("".concat(Sr,"--neighboringMonth")),e.jsx(Jn,ha({},d,{classes:h,formatAbbr:u,maxDateTransform:Ta,minDateTransform:on,view:"month",children:s(g,p)}))}var ga=function(){return ga=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ga.apply(this,arguments)},ci=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Sd(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,o=t.showFixedNumberOfWeeks,c=t.showNeighboringMonth,s=t.value,l=t.valueType,u=ci(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=le(n),p=Je(n),g=o||c,h=Qt(n,a),f=g?0:h,b=(g?-h:0)+1,w=function(){if(o)return b+6*7-1;var k=Bo(n);if(c){var L=new Date;L.setFullYear(d,p,k),L.setHours(0,0,0,0);var v=7-Qt(L,a)-1;return k+v}return k}();return e.jsx(Kn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(k){var L=new Date;return L.setFullYear(d,p,k),on(L)},dateType:"day",hover:r,end:w,renderTile:function(k){var L=k.date,v=ci(k,["date"]);return e.jsx(Cd,ga({},u,v,{activeStartDate:n,calendarType:a,currentMonthIndex:p,date:L}),L.getTime())},offset:f,start:b,value:s,valueType:l})}var Ro="react-calendar__month-view__weekdays",Dr="".concat(Ro,"__weekday");function Dd(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?Hl:a,o=t.formatWeekday,c=o===void 0?Yl:o,s=t.locale,l=t.onMouseLeave,u=new Date,d=xt(u),p=le(d),g=Je(d),h=[],f=1;f<=7;f+=1){var b=new Date(p,g,f-Qt(d,n)),w=c(s,b);h.push(e.jsx("div",{className:Yn(Dr,rd(b)&&"".concat(Dr,"--current"),zo(b,n)&&"".concat(Dr,"--weekend")),children:e.jsx("abbr",{"aria-label":w,title:w,children:r(s,b).replace(".","")})},f))}return e.jsx(Ia,{className:Ro,count:7,onFocus:l,onMouseOver:l,children:h})}var Wn=function(){return Wn=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Wn.apply(this,arguments)},li=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},di="react-calendar__tile";function Td(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var o=t.date,c=t.onClickWeekNumber,s=t.weekNumber,l=li(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",Wn({},l,{className:di,onClick:function(u){return c(s,o,u)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var l=li(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",Wn({},l,{className:di,children:r}))}}function $d(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,o=t.onMouseLeave,c=t.showFixedNumberOfWeeks,s=function(){if(c)return 6;var d=Bo(n),p=Qt(n,a),g=d-(7-p);return 1+Math.ceil(g/7)}(),l=function(){for(var d=le(n),p=Je(n),g=Vn(n),h=[],f=0;f<s;f+=1)h.push(aa(new Date(d,p,g+f*7),a));return h}(),u=l.map(function(d){return Kl(d,a)});return e.jsx(Ia,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:o,onMouseOver:o,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:u.map(function(d,p){var g=l[p];if(!g)throw new Error("date is not defined");return e.jsx(Td,{date:g,onClickWeekNumber:r,weekNumber:d},d)})})}var fa=function(){return fa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},fa.apply(this,arguments)},Id=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Ld(t){if(t)for(var n=0,a=Object.entries(Ll);n<a.length;n++){var r=a[n],o=r[0],c=r[1];if(c.includes(t))return o}return be.ISO_8601}function _d(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,o=t.showFixedNumberOfWeeks,c=t.calendarType,s=c===void 0?Ld(a):c,l=t.formatShortWeekday,u=t.formatWeekday,d=t.onClickWeekNumber,p=t.showWeekNumbers,g=Id(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function h(){return e.jsx(Dd,{calendarType:s,formatShortWeekday:l,formatWeekday:u,locale:a,onMouseLeave:r})}function f(){return p?e.jsx($d,{activeStartDate:n,calendarType:s,onClickWeekNumber:d,onMouseLeave:r,showFixedNumberOfWeeks:o}):null}function b(){return e.jsx(Sd,fa({calendarType:s},g))}var w="react-calendar__month-view";return e.jsx("div",{className:Yn(w,p?"".concat(w,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[f(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[h(),b()]})]})})}var Bt=function(){return Bt=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Bt.apply(this,arguments)},xn="react-calendar",En=["century","decade","year","month"],Ad=["decade","year","month","day"],La=new Date;La.setFullYear(1,0,1);La.setHours(0,0,0,0);var Od=new Date(864e13);function Zt(t){return t instanceof Date?t:new Date(t)}function Ho(t,n){return En.slice(En.indexOf(t),En.indexOf(n)+1)}function Bd(t,n,a){var r=Ho(n,a);return r.indexOf(t)!==-1}function _a(t,n,a){return t&&Bd(t,n,a)?t:a}function Yo(t){var n=En.indexOf(t);return Ad[n]}function Fd(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Zt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function Vo(t,n){var a=t.value,r=t.minDate,o=t.maxDate,c=t.maxDetail,s=Fd(a,n);if(!s)return null;var l=Yo(c),u=function(){switch(n){case 0:return pt(l,s);case 1:return Po(l,s);default:throw new Error("Invalid index value: ".concat(n))}}();return od(u,r,o)}var Aa=function(t){return Vo(t,0)},Uo=function(t){return Vo(t,1)},Md=function(t){return[Aa,Uo].map(function(n){return n(t)})};function qo(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,o=t.minDetail,c=t.value,s=t.view,l=_a(s,o,a),u=Aa({value:c,minDate:r,maxDate:n,maxDetail:a})||new Date;return pt(l,u)}function Pd(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,o=t.defaultView,c=t.maxDate,s=t.maxDetail,l=t.minDate,u=t.minDetail,d=t.value,p=t.view,g=_a(p,u,s),h=n||a;return h?pt(g,h):qo({maxDate:c,maxDetail:s,minDate:l,minDetail:u,value:d||r,view:p||o})}function Tr(t){return t&&(!Array.isArray(t)||t.length===1)}function hn(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var Ed=x.forwardRef(function(n,a){var r=n.activeStartDate,o=n.allowPartialRange,c=n.calendarType,s=n.className,l=n.defaultActiveStartDate,u=n.defaultValue,d=n.defaultView,p=n.formatDay,g=n.formatLongDate,h=n.formatMonth,f=n.formatMonthYear,b=n.formatShortWeekday,w=n.formatWeekday,k=n.formatYear,L=n.goToRangeStartOnSelect,v=L===void 0?!0:L,$=n.inputRef,F=n.locale,R=n.maxDate,O=R===void 0?Od:R,P=n.maxDetail,E=P===void 0?"month":P,H=n.minDate,I=H===void 0?La:H,D=n.minDetail,N=D===void 0?"century":D,Y=n.navigationAriaLabel,C=n.navigationAriaLive,m=n.navigationLabel,S=n.next2AriaLabel,_=n.next2Label,ce=n.nextAriaLabel,ae=n.nextLabel,oe=n.onActiveStartDateChange,ne=n.onChange,we=n.onClickDay,ge=n.onClickDecade,ke=n.onClickMonth,J=n.onClickWeekNumber,$e=n.onClickYear,ue=n.onDrillDown,Ce=n.onDrillUp,ye=n.onViewChange,He=n.prev2AriaLabel,Ee=n.prev2Label,Le=n.prevAriaLabel,Ne=n.prevLabel,re=n.returnValue,Ze=re===void 0?"start":re,fe=n.selectRange,Qe=n.showDoubleView,et=n.showFixedNumberOfWeeks,K=n.showNavigation,Xn=K===void 0?!0:K,gt=n.showNeighboringCentury,Zn=n.showNeighboringDecade,sn=n.showNeighboringMonth,Qn=sn===void 0?!0:sn,er=n.showWeekNumbers,tr=n.tileClassName,nr=n.tileContent,rr=n.tileDisabled,Et=n.value,cn=n.view,ln=x.useState(l),ar=ln[0],j=ln[1],M=x.useState(null),U=M[0],z=M[1],T=x.useState(Array.isArray(u)?u.map(function(G){return G!==null?Zt(G):null}):u!=null?Zt(u):null),W=T[0],Z=T[1],A=x.useState(d),Q=A[0],dn=A[1],xe=r||ar||Pd({activeStartDate:r,defaultActiveStartDate:l,defaultValue:u,defaultView:d,maxDate:O,maxDetail:E,minDate:I,minDetail:N,value:Et,view:cn}),je=function(){var G=function(){return fe&&Tr(W)?W:Et!==void 0?Et:W}();return G?Array.isArray(G)?G.map(function(de){return de!==null?Zt(de):null}):G!==null?Zt(G):null:null}(),ze=Yo(E),se=_a(cn||Q,N,E),Ie=Ho(N,E),ir=fe?U:null,B=Ie.indexOf(se)<Ie.length-1,ee=Ie.indexOf(se)>0,Ye=x.useCallback(function(G){var de=function(){switch(Ze){case"start":return Aa;case"end":return Uo;case"range":return Md;default:throw new Error("Invalid returnValue.")}}();return de({maxDate:O,maxDetail:E,minDate:I,value:G})},[O,E,I,Ze]),Nt=x.useCallback(function(G,de){j(G);var he={action:de,activeStartDate:G,value:je,view:se};oe&&!hn(xe,G)&&oe(he)},[xe,oe,je,se]),ft=x.useCallback(function(G,de){var he=function(){switch(se){case"century":return ge;case"decade":return $e;case"year":return ke;case"month":return we;default:throw new Error("Invalid view: ".concat(se,"."))}}();he&&he(G,de)},[we,ge,ke,$e,se]),or=x.useCallback(function(G,de){if(B){ft(G,de);var he=Ie[Ie.indexOf(se)+1];if(!he)throw new Error("Attempted to drill down from the lowest view.");j(G),dn(he);var _e={action:"drillDown",activeStartDate:G,value:je,view:he};oe&&!hn(xe,G)&&oe(_e),ye&&se!==he&&ye(_e),ue&&ue(_e)}},[xe,B,oe,ft,ue,ye,je,se,Ie]),sr=x.useCallback(function(){if(ee){var G=Ie[Ie.indexOf(se)-1];if(!G)throw new Error("Attempted to drill up from the highest view.");var de=pt(G,xe);j(de),dn(G);var he={action:"drillUp",activeStartDate:de,value:je,view:G};oe&&!hn(xe,de)&&oe(he),ye&&se!==G&&ye(he),Ce&&Ce(he)}},[xe,ee,oe,Ce,ye,je,se,Ie]),cr=x.useCallback(function(G,de){var he=je;ft(G,de);var _e=fe&&!Tr(he),Ae;if(fe)if(_e)Ae=pt(ze,G);else{if(!he)throw new Error("previousValue is required");if(Array.isArray(he))throw new Error("previousValue must not be an array");Ae=td(ze,he,G)}else Ae=Ye(G);var dr=!fe||_e||v?qo({maxDate:O,maxDetail:E,minDate:I,minDetail:N,value:Ae,view:se}):null;de.persist(),j(dr),Z(Ae);var ms={action:"onChange",activeStartDate:dr,value:Ae,view:se};if(oe&&!hn(xe,dr)&&oe(ms),ne)if(fe){var vs=Tr(Ae);if(!vs)ne(Ae||null,de);else if(o){if(Array.isArray(Ae))throw new Error("value must not be an array");ne([Ae||null,null],de)}}else ne(Ae||null,de)},[xe,o,Ye,v,O,E,I,N,oe,ne,ft,fe,je,ze,se]);function hs(G){z(G)}function lr(){z(null)}x.useImperativeHandle(a,function(){return{activeStartDate:xe,drillDown:or,drillUp:sr,onChange:cr,setActiveStartDate:Nt,value:je,view:se}},[xe,or,sr,cr,Nt,je,se]);function Pa(G){var de=G?Mo(se,xe):pt(se,xe),he=B?or:cr,_e={activeStartDate:de,hover:ir,locale:F,maxDate:O,minDate:I,onClick:he,onMouseOver:fe?hs:void 0,tileClassName:tr,tileContent:nr,tileDisabled:rr,value:je,valueType:ze};switch(se){case"century":return e.jsx(xd,Bt({formatYear:k,showNeighboringCentury:gt},_e));case"decade":return e.jsx(md,Bt({formatYear:k,showNeighboringDecade:Zn},_e));case"year":return e.jsx(wd,Bt({formatMonth:h,formatMonthYear:f},_e));case"month":return e.jsx(_d,Bt({calendarType:c,formatDay:p,formatLongDate:g,formatShortWeekday:b,formatWeekday:w,onClickWeekNumber:J,onMouseLeave:fe?lr:void 0,showFixedNumberOfWeeks:typeof et<"u"?et:Qe,showNeighboringMonth:Qn,showWeekNumbers:er},_e));default:throw new Error("Invalid view: ".concat(se,"."))}}function gs(){return Xn?e.jsx(ad,{activeStartDate:xe,drillUp:sr,formatMonthYear:f,formatYear:k,locale:F,maxDate:O,minDate:I,navigationAriaLabel:Y,navigationAriaLive:C,navigationLabel:m,next2AriaLabel:S,next2Label:_,nextAriaLabel:ce,nextLabel:ae,prev2AriaLabel:He,prev2Label:Ee,prevAriaLabel:Le,prevLabel:Ne,setActiveStartDate:Nt,showDoubleView:Qe,view:se,views:Ie}):null}var fs=Array.isArray(je)?je:[je];return e.jsxs("div",{className:Yn(xn,fe&&fs.length===1&&"".concat(xn,"--selectRange"),Qe&&"".concat(xn,"--doubleView"),s),ref:$,children:[gs(),e.jsxs("div",{className:"".concat(xn,"__viewContainer"),onBlur:fe?lr:void 0,onMouseLeave:fe?lr:void 0,children:[Pa(),Qe?Pa(!0):null]})]})});const Ke=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"},{id:"liquid-fund",name:"Liquid Fund",type:"liquid_fund",bank:"hdfc",color:"#8b5cf6"}],Go="expense-manager-transactions",Ko="expense-manager-initial-balances",Jo="expense-manager-initial-cc-bills",Xo="expense-manager-cc-limits",Zo="expense-manager-categories";function Oa(t,n){return t===void 0?{amount:0,type:"billed",setupDate:n}:typeof t=="number"?{amount:t,type:"billed",setupDate:n}:t}const Qo={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function gn(t){localStorage.setItem(Go,JSON.stringify(t))}function Nd(){const t=localStorage.getItem(Go);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function ui(t){localStorage.setItem(Ko,JSON.stringify(t))}function zd(){const t=localStorage.getItem(Ko);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function pi(t){localStorage.setItem(Jo,JSON.stringify(t))}function Wd(){const t=localStorage.getItem(Jo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function xi(t){localStorage.setItem(Xo,JSON.stringify(t))}function Rd(){const t=localStorage.getItem(Xo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function hi(t){localStorage.setItem(Zo,JSON.stringify(t))}function Hd(){const t=localStorage.getItem(Zo);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Yd(t,n){return t.find(a=>a.id===n)}function Se(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function es(t){return new Date(t+"T00:00:00")}function Vd(t){return t===Se(new Date)}function Ud(t,n){if(!t.statementDate)return"";const a=es(n),r=a.getFullYear(),o=a.getMonth(),c=a.getDate();let s=r,l=o;c<t.statementDate&&(l-=1,l<0&&(l=11,s-=1));const u=new Date(s,l,t.statementDate);return Se(u)}function gi(t,n){const a=Qo[t];if(!a)return"";const r=es(n),o=r.getFullYear(),c=r.getMonth(),s=r.getDate();let l=o,u=c;s<a&&(u-=1,u<0&&(u=11,l-=1));const d=new Date(l,u,a);return Se(d)}function qd(t,n,a,r){const o=gi(t.id,a),c=n.filter(v=>v.date<=a&&v.accountId===t.id),s=c.filter(v=>v.type==="credit_card_spend"&&v.date<o).reduce((v,$)=>v+$.amount,0),l=c.filter(v=>v.type==="credit_card_spend"&&v.date>=o).reduce((v,$)=>v+$.amount,0),u=c.filter(v=>v.type==="cc_payment").reduce((v,$)=>v+$.amount,0),d=Oa(r[t.id],a);let p=0,g=0;if(d.amount>0){const v=gi(t.id,d.setupDate),$=o===v,F=o>v&&new Date(o).getTime()-new Date(v).getTime()<45*24*60*60*1e3;d.type==="unbilled"?$?g=d.amount:F&&(p=d.amount):($||F)&&(p=d.amount)}const h=l+g,f=s+p,b=h;let w=f,k=b,L=u;if(L>0){const v=Math.min(L,w);w-=v,L-=v}return L>0&&(k=Math.max(0,k-L)),{account:t,billDue:w,unbilled:k,totalOutstanding:w+k,cycleStart:o,cycleSpending:h}}function Gd(t,n,a,r,o={}){const c=n.filter(l=>l.date<=a&&(l.accountId===t.id||l.linkedAccountId===t.id));let s=0;if(t.type==="bank"){s=r[t.id]||0;for(const l of c)l.accountId===t.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===t.id&&l.type==="cc_payment"&&(s-=l.amount),l.linkedAccountId===t.id&&l.type==="liquid_fund_credit"&&(s-=l.amount),l.linkedAccountId===t.id&&l.type==="liquid_fund_debit"&&(s+=l.amount);return{account:t,balance:s}}else if(t.type==="liquid_fund"){s=r[t.id]||0;for(const l of c)l.accountId===t.id&&(l.type==="liquid_fund_credit"?s+=l.amount:l.type==="liquid_fund_debit"&&(s-=l.amount));return{account:t,balance:s}}else{s=-Oa(o[t.id],a).amount;for(const h of c)h.accountId===t.id&&(h.type==="credit_card_spend"?s-=h.amount:h.type==="cc_payment"&&(s+=h.amount));const d=Ud(t,a),g=c.filter(h=>h.date>d&&h.accountId===t.id&&h.type==="credit_card_spend").reduce((h,f)=>h+f.amount,0);return{account:t,balance:s,pendingBill:g,totalOutstanding:Math.abs(Math.min(0,s))}}}function Kd(t,n,a,r={}){return Ke.map(o=>Gd(o,t,n,a,r))}function ts(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function Jd(t,n,a,r,o,c,s){return{id:ts(),date:o,type:t,accountId:n,amount:a,description:r,linkedAccountId:c,categoryId:s,createdAt:new Date().toISOString()}}function te(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function Nn(t){return Ke.find(n=>n.id===t)}function ns(){return Ke.filter(t=>t.type==="bank")}function Ba(){return Ke.filter(t=>t.type==="credit_card")}function rs(){return Ke.find(t=>t.type==="liquid_fund")}function Xd(t,n,a,r={},o=[]){const c={version:"1.2",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n,initialCCBills:a,ccLimits:r,categories:o};return JSON.stringify(c,null,2)}function Zd(t,n,a,r={},o=[]){const c=Xd(t,n,a,r,o),s=new Blob([c],{type:"application/json"}),l=URL.createObjectURL(s),u=document.createElement("a"),d=new Date().toISOString().split("T")[0];u.href=l,u.download=`expense-backup-${d}.json`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}function Qd(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null||typeof n.initialCCBills!="object"||n.initialCCBills===null||n.ccLimits!==void 0&&(typeof n.ccLimits!="object"||n.ccLimits===null))return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function eu(t){try{const n=JSON.parse(t);return Qd(n)?n:null}catch{return null}}const tu=Ft`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,nu=Ft`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,ru=Ft`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,au=Ft`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,iu=Ft`
  from { opacity: 0; }
  to { opacity: 1; }
`,ou=i.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${iu} 0.15s ease-out;
`,su=i.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?dt`animation: ${au} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:dt`animation: ${ru} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?dt`animation: ${nu} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:dt`animation: ${tu} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,cu=i.div`
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
`,tn=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:o})=>{const c=x.useRef(null),[s,l]=x.useState(!1),[u,d]=x.useState(!1),[p,g]=x.useState(!1),[h,f]=x.useState({top:0,left:0});x.useEffect(()=>{if(t&&(o!=null&&o.current)){const v=o.current.getBoundingClientRect(),$=280,F=320,R=8,P=window.innerHeight-v.bottom-R<F;g(P);let E;P?E=v.top-F-R:E=v.bottom+R;let H=v.right-$;H<8&&(H=8),H+$>window.innerWidth-8&&(H=window.innerWidth-$-8),E<8&&(E=8),f({top:E,left:H}),d(!0),l(!1)}},[t,o]);const b=x.useCallback(()=>{l(!0),setTimeout(()=>{d(!1),l(!1),n()},150)},[n]),w=x.useCallback(v=>{c.current&&!c.current.contains(v.target)&&b()},[b]);x.useEffect(()=>{if(t){const v=setTimeout(()=>{document.addEventListener("mousedown",w)},10);return()=>{clearTimeout(v),document.removeEventListener("mousedown",w)}}},[t,w]);const k=x.useCallback(v=>{v instanceof Date&&(r(Se(v)),b())},[r,b]);if(!u)return null;const L=new Date(a+"T00:00:00");return go.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(ou,{onClick:b}),e.jsx(su,{ref:c,$isClosing:s,$openUpward:p,$top:h.top,$left:h.left,children:e.jsx(cu,{children:e.jsx(Ed,{onChange:k,value:L,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(v,$)=>$.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},lu=i(y.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,du=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,uu=i.button`
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
`,pu=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
`,Fa=i.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,xu=i(Fa)`
  height: 14px;
`,hu=i(Fa)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,gu=i(Fa)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,fu=i(y.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,mu=i(y.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,vu=i.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,yu=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,bu=i(y.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,ju=i.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,wu=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,ku=i.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,Cu=i(y.button).attrs({type:"button"})`
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
`,Su=i.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 640px) {
    gap: 6px;
  }
`,fi=i(y.button).attrs({type:"button"})`
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
`,Du=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),Tu=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),fn=[.25,.1,.25,1],$u=({selectedDate:t,onDateChange:n})=>{const[a,r]=x.useState(!1),[o,c]=x.useState(1),s=x.useRef(null),l=x.useRef(t);if(l.current!==t){const v=new Date(l.current+"T00:00:00"),$=new Date(t+"T00:00:00");c($>v?1:-1),l.current=t}const u=x.useCallback(v=>{v.preventDefault(),v.stopPropagation();const $=Se(new Date),F=new Date(t+"T00:00:00"),R=new Date($+"T00:00:00");c(R>F?1:-1),n($)},[t,n]),d=x.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(-1);const $=new Date(t+"T00:00:00");$.setDate($.getDate()-1),n(Se($))},[t,n]),p=x.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(1);const $=new Date(t+"T00:00:00");$.setDate($.getDate()+1),n(Se($))},[t,n]),g=Vd(t),h=new Date(t+"T00:00:00"),f=h.getDate(),b=h.toLocaleDateString("en-US",{month:"short"}),w=h.toLocaleDateString("en-US",{weekday:"long"}),k=h.getFullYear(),L={enter:{y:o*20,opacity:0},center:{y:0,opacity:1},exit:{y:o*-20,opacity:0}};return e.jsxs(lu,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:fn},children:[e.jsxs(du,{children:[e.jsxs(uu,{ref:s,onClick:()=>r(!0),type:"button",children:[e.jsxs(pu,{children:[e.jsx(xu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(fu,{variants:L,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:fn},children:b},b)})}),e.jsx(hu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(mu,{variants:L,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:fn},children:f},f)})})]}),e.jsx(vu,{}),e.jsxs(yu,{children:[e.jsx(gu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(bu,{variants:L,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:fn},children:w},w)})}),e.jsx(ju,{children:k})]})]}),e.jsxs(wu,{children:[e.jsx(ku,{children:e.jsx(ie,{children:!g&&e.jsx(Cu,{onClick:u,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(Su,{children:[e.jsx(fi,{onClick:d,whileTap:{scale:.95},children:e.jsx(Du,{})}),e.jsx(fi,{onClick:p,whileTap:{scale:.95},children:e.jsx(Tu,{})})]})]})]}),e.jsx(tn,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:s})]})};i(y.div)`
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

  ${({$interactive:t})=>t&&dt`
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
`;i(ya)`
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
  
  ${({$variant:t})=>t==="accent"?dt`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:dt`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const Iu=i.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,Lu=i.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,_u=i(y.span)`
  display: inline-block;
`,Au=i.span`
  display: inline-block;
`,Ou=[.25,.1,.25,1],Bu=({value:t,className:n})=>{const a=x.useMemo(()=>t.split("").map((r,o)=>({char:r,key:`${o}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(Iu,{className:n,children:a.map(({char:r,key:o,isDigit:c},s)=>c?e.jsx(Lu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(_u,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:Ou},children:r},o)})},`wrapper-${s}`):e.jsx(Au,{children:r},`static-${s}`))})},Ge=x.memo(Bu);i.h1`
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
`;const Fu=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Mu=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Pu=i.div`
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
`,Eu=i.div`
  flex: 1;
  min-width: 0;
`,Nu=i.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,zu=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Wu=i.span`
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
`,Ru=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,mi=i.div`
  text-align: ${({$align:t})=>t||"left"};
`,vi=i.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 4px;
`,yi=i.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,Hu=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,Yu=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,Vu=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Uu=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,qu=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Gu=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Ku=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Ju=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,Xu=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Zu=i(y.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Qu={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},ep=t=>{const n=Qu[t];return n?e.jsx("img",{src:n,alt:`${t.toUpperCase()} Bank`}):null},tp=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),bi=[.25,.1,.25,1],np=({detailedBalance:t,index:n=0,limit:a})=>{const{account:r,billDue:o,unbilled:c,totalOutstanding:s,cycleStart:l,cycleSpending:u}=t,d=a!==void 0&&a>0,p=d?Math.max(0,a-u):0,g=d?u/a*100:0,h=d&&u>a,f=h?"#ef4444":g>80?"#f59e0b":"#10b981",b=()=>o>0?"due":c>0?"unbilled":"clear",w=()=>{switch(b()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return e.jsxs(Fu,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:bi,delay:n*.02},children:[e.jsxs(Mu,{children:[e.jsx(Pu,{children:ep(r.bank)}),e.jsxs(Eu,{children:[e.jsxs(Nu,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),e.jsxs(zu,{children:["Cycle from ",tp(l)]})]}),e.jsx(Wu,{$status:b(),children:w()})]}),e.jsxs(Ru,{children:[e.jsxs(mi,{children:[e.jsx(vi,{children:"Bill Due"}),e.jsx(yi,{$color:o>0?"#ef4444":"#10b981",children:e.jsx(Ge,{value:te(o)})})]}),e.jsxs(mi,{$align:"right",children:[e.jsx(vi,{children:"Unbilled"}),e.jsx(yi,{$color:c>0?"#f59e0b":"var(--text-tertiary)",children:e.jsx(Ge,{value:te(c)})})]})]}),d&&e.jsxs(Hu,{children:[e.jsxs(Yu,{children:[e.jsxs(qu,{children:[e.jsx(Gu,{children:"Virtual Limit"}),e.jsx(Ku,{children:te(a)})]}),e.jsxs(Ju,{children:[e.jsx(Xu,{children:h?"Over By":"Available"}),e.jsx(Zu,{$color:f,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:te(h?s-a:p)},p)]})]}),e.jsx(Vu,{children:e.jsx(Uu,{$color:f,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:bi,delay:.1}})})]})]})},rp=x.memo(np),ap=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),ip=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$r=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ir=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,Lr=i.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,op=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,sp=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,kt=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Ct=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,St=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,Dt=i.div`
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
`,Tt=i.div`
  min-width: 0;
`,$t=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,It=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Lt=i.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,cp=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,lp=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,dp=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,up=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,pp=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,xp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,hp=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,gp=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,fp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,mp=i(y.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,ji={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},vp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),yp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),bp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ma=[.25,.1,.25,1],jp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ma,staggerChildren:.05}}},_t={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:Ma}}},wp=({balances:t,ccLimits:n={},creditCardDetailedBalances:a=[]})=>{const{hdfcBalance:r,iciciBalance:o,liquidFundBalance:c,netCash:s,totalCCOutstanding:l,netPosition:u,totalLimit:d,totalLimitRemaining:p,limitPercentage:g,limitColor:h}=x.useMemo(()=>{const b=t.find(D=>D.account.id==="hdfc-bank"),w=t.find(D=>D.account.id==="icici-bank"),k=t.find(D=>D.account.id==="liquid-fund"),L=t.filter(D=>D.account.type==="credit_card"),v=(b==null?void 0:b.balance)||0,$=(w==null?void 0:w.balance)||0,F=(k==null?void 0:k.balance)||0,R=L.reduce((D,N)=>D+(N.totalOutstanding||0),0);let O=0;for(const D of a){const N=n[D.account.id]||0;N>0&&(O+=N)}const P=Math.max(0,O-R),E=O>0?R/O*100:0,I=R>O&&O>0?"#ef4444":E>80?"#f59e0b":"#10b981";return{hdfcBalance:v,iciciBalance:$,liquidFundBalance:F,netCash:v-R+F,totalCCOutstanding:R,netPosition:v-R,totalLimit:O,totalLimitRemaining:P,limitPercentage:E,limitColor:I}},[t,n,a]),f=d>0;return e.jsxs(ip,{variants:jp,initial:"hidden",animate:"visible",children:[e.jsxs($r,{children:[e.jsx(Ir,{children:e.jsx(Lr,{children:"Bank Accounts"})}),e.jsxs(op,{children:[e.jsx(kt,{variants:_t,children:e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#004C8F",children:e.jsx("img",{src:ji.hdfc,alt:"HDFC"})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"HDFC Bank"}),e.jsx(It,{children:"Savings"})]})]}),e.jsx(Lt,{$color:r>=0?"#10b981":"#ef4444",children:e.jsx(Ge,{value:te(r)})})]})}),e.jsx(kt,{variants:_t,children:e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#F58220",children:e.jsx("img",{src:ji.icici,alt:"ICICI"})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"ICICI Bank"}),e.jsx(It,{children:"Savings"})]})]}),e.jsx(Lt,{$color:o>=0?"#10b981":"#ef4444",children:e.jsx(Ge,{value:te(o)})})]})})]})]}),e.jsxs($r,{children:[e.jsx(Ir,{children:e.jsx(Lr,{children:"Investments"})}),e.jsx(kt,{variants:_t,children:e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#8b5cf6",children:e.jsx(ap,{})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"Liquid Fund"}),e.jsx(It,{children:"Short-term Investment"})]})]}),e.jsx(Lt,{$color:c>=0?"#8b5cf6":"#ef4444",children:e.jsx(Ge,{value:te(c)})})]})})]}),e.jsxs($r,{children:[e.jsx(Ir,{children:e.jsx(Lr,{children:"Position Summary"})}),e.jsxs(sp,{children:[e.jsx(kt,{variants:_t,children:e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#3b82f6",children:e.jsx(vp,{})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"Net Position"}),e.jsx(It,{children:"HDFC − CC Due"})]})]}),e.jsx(Lt,{$color:u>=0?"#3b82f6":"#ef4444",children:e.jsx(Ge,{value:te(u)})})]})}),e.jsx(kt,{variants:_t,children:e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#22c55e",children:e.jsx(yp,{})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"Net Cash"}),e.jsx(It,{children:"Net Position + LF"})]})]}),e.jsx(Lt,{$color:s>=0?"#22c55e":"#ef4444",children:e.jsx(Ge,{value:te(s)})})]})}),e.jsxs(kt,{variants:_t,children:[e.jsxs(Ct,{children:[e.jsxs(St,{children:[e.jsx(Dt,{$color:"#ef4444",children:e.jsx(bp,{})}),e.jsxs(Tt,{children:[e.jsx($t,{children:"Credit Cards"}),e.jsx(It,{children:"Total Outstanding"})]})]}),e.jsx(Lt,{$color:l>0?"#ef4444":"#10b981",children:e.jsx(Ge,{value:`${l>0?"-":""}${te(l)}`})})]}),f&&e.jsxs(cp,{children:[e.jsxs(lp,{children:[e.jsxs(pp,{children:[e.jsx(xp,{children:"Combined Limit"}),e.jsx(hp,{children:te(d)})]}),e.jsxs(gp,{children:[e.jsx(fp,{children:g>100?"Over By":"Available"}),e.jsx(mp,{$color:h,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:g>100?te(l-d):te(p)},p)]})]}),e.jsx(dp,{children:e.jsx(up,{$color:h,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:Ma,delay:.1}})})]})]})]})]})]})},kp=x.memo(wp),Cp=i.div`
  display: flex;
  flex-direction: column;
`,Sp=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`,Dp=i(y.button)`
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
`,Tp=i.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,$p=i.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,Ip=i.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Lp=i.div`
  padding: 0;
`,Ue=i.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,qe=i.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,as=i.input`
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
`,_p=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ap=i.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,Op=i(y.button).attrs({type:"button"})`
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
`,Kt=i.select`
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
`,Bp=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,Fp=i.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Mp=i(as)`
  padding-left: 28px;
`,Pp=i.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,Ep=i(y.button)`
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
`,Np=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"},{type:"liquid_fund_credit",label:"LF Credit",hint:"Add to fund",color:"#8b5cf6"},{type:"liquid_fund_debit",label:"LF Debit",hint:"Withdraw from fund",color:"#a855f7"}],zp=Ba(),mn=ns(),vn=rs(),wi=[.4,0,.2,1],Wp=({onAddTransaction:t,defaultDate:n,categories:a=[]})=>{const[r,o]=x.useState("credit_card_spend"),[c,s]=x.useState(""),[l,u]=x.useState(""),[d,p]=x.useState(""),[g,h]=x.useState(""),[f,b]=x.useState(n||Se(new Date)),[w,k]=x.useState(""),[L,v]=x.useState(!1),$=x.useRef(null),F=r==="credit_card_spend"||r==="bank_debit";x.useEffect(()=>{n&&b(n)},[n]);const R=x.useMemo(()=>{switch(r){case"credit_card_spend":case"cc_payment":return zp;case"bank_debit":case"bank_credit":return mn;case"liquid_fund_credit":case"liquid_fund_debit":return vn?[vn]:[];default:return Ke}},[r]),O=x.useCallback(()=>{switch(r){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";case"liquid_fund_credit":case"liquid_fund_debit":return"Liquid Fund";default:return"Select account..."}},[r]);x.useEffect(()=>{(r==="liquid_fund_credit"||r==="liquid_fund_debit")&&vn&&s(vn.id)},[r]);const P=r==="liquid_fund_credit"||r==="liquid_fund_debit",E=r&&c&&parseFloat(d)>0&&f&&(!P||l),H=x.useCallback(()=>{o(""),s(""),u(""),p(""),h(""),k("")},[]),I=x.useCallback(()=>{if(!r||!c||!d||!f)return;const C=(r==="cc_payment"||r==="liquid_fund_credit"||r==="liquid_fund_debit")&&l?l:void 0,m=Ke.find(ae=>ae.id===c),S=l?Ke.find(ae=>ae.id===l):void 0;let _="";switch(r){case"credit_card_spend":_=`Spent on ${m==null?void 0:m.name}`;break;case"cc_payment":_=S?`Payment to ${m==null?void 0:m.name} from ${S.name}`:`Payment to ${m==null?void 0:m.name}`;break;case"bank_debit":_=`Debited from ${m==null?void 0:m.name}`;break;case"bank_credit":_=`Credited to ${m==null?void 0:m.name}`;break;case"liquid_fund_credit":_=S?`Invested in Liquid Fund from ${S.name}`:"Invested in Liquid Fund";break;case"liquid_fund_debit":_=S?`Withdrawn from Liquid Fund to ${S.name}`:"Withdrawn from Liquid Fund";break}const ce=Jd(r,c,parseFloat(d),g||_,f,C,F&&w?w:void 0);t(ce),H()},[r,c,l,d,g,f,w,F,t,H]),D=x.useMemo(()=>{const m=d.replace(/[^0-9.]/g,"").split(".");let S=m[0];const _=m[1];if(S.length>3){let ce=S.substring(S.length-3),ae=S.substring(0,S.length-3);ae=ae.replace(/\B(?=(\d{2})+(?!\d))/g,","),S=ae+","+ce}return _!==void 0?`${S}.${_}`:S},[d]),N=x.useCallback(C=>{const m=C.target.value.replace(/,/g,"");(m===""||/^\d*\.?\d*$/.test(m))&&p(m)},[]),Y=C=>new Date(C+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(Cp,{children:[e.jsx(Sp,{children:Np.map(({type:C,label:m,hint:S,color:_})=>e.jsxs(Dp,{type:"button",$active:r===C,$color:_,onClick:()=>{r!==C&&(o(C),s(""),u(""))},whileTap:{scale:.98},transition:{duration:.1,ease:wi},children:[e.jsx(Tp,{children:m}),e.jsx($p,{children:S})]},C))}),e.jsxs("div",{children:[e.jsx(Ip,{children:e.jsxs(Lp,{children:[r!=="liquid_fund_credit"&&r!=="liquid_fund_debit"&&e.jsxs(Ue,{children:[e.jsx(qe,{children:r==="credit_card_spend"||r==="cc_payment"?"Credit Card":"Bank Account"}),e.jsxs(Kt,{value:c,onChange:C=>s(C.target.value),children:[e.jsx("option",{value:"",children:O()}),R.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),r==="cc_payment"&&e.jsxs(Ue,{children:[e.jsx(qe,{children:"Paid From (Optional)"}),e.jsxs(Kt,{value:l,onChange:C=>u(C.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),mn.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),r==="liquid_fund_credit"&&e.jsxs(Ue,{children:[e.jsx(qe,{children:"Transfer From Bank Account"}),e.jsxs(Kt,{value:l,onChange:C=>u(C.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),mn.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),r==="liquid_fund_debit"&&e.jsxs(Ue,{children:[e.jsx(qe,{children:"Transfer To Bank Account"}),e.jsxs(Kt,{value:l,onChange:C=>u(C.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),mn.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]}),e.jsxs(Ue,{children:[e.jsx(qe,{children:"Amount"}),e.jsxs(Bp,{children:[e.jsx(Fp,{children:"₹"}),e.jsx(Mp,{type:"text",inputMode:"decimal",placeholder:"0",value:D,onChange:N})]})]}),e.jsxs(Ue,{children:[e.jsx(qe,{children:"Date"}),e.jsxs(_p,{children:[e.jsx(Ap,{children:Y(f)}),e.jsx(Op,{ref:$,onClick:()=>v(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(tn,{isOpen:L,onClose:()=>v(!1),selectedDate:f,onDateSelect:b,triggerRef:$})]})]}),e.jsxs(Ue,{children:[e.jsx(qe,{children:"Description (Optional)"}),e.jsx(as,{type:"text",placeholder:"Add a note...",value:g,onChange:C=>h(C.target.value)})]}),F&&a.length>0&&e.jsxs(Ue,{children:[e.jsx(qe,{children:"Category (Optional)"}),e.jsxs(Kt,{value:w,onChange:C=>k(C.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),a.map(C=>e.jsx("option",{value:C.id,children:C.name},C.id))]})]})]})}),e.jsx(Pp,{children:e.jsx(Ep,{type:"button",onClick:I,disabled:!E,whileTap:E?{scale:.98}:{},transition:{duration:.1,ease:wi},children:"Add Transaction"})})]})]})},Rp=x.memo(Wp),Rn={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},Hp=t=>{switch(t){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},Yp=i.section`
  border-bottom: 1px solid var(--border);
`,Vp=i.div`
  padding: ${Rn.section}px 0;

  @media (max-width: 640px) {
    padding: ${Rn.sectionMobile}px 0;
  }
`,Up=i(y.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,qp=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gp=i.div`
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
`,Kp=i.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,Jp=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Xp=i(y.span)`
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
`,Zp=i(y.div)`
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
`,Qp=i(y.div)`
  overflow: hidden;
`,ex=i.div`
  padding-top: ${Rn.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${Rn.contentGapMobile}px;
  }
`,tx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),Hn=[.32,.72,0,1],nx={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:Hn},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:Hn},opacity:{duration:.25,delay:.05}}}},rx=({title:t,icon:n,accent:a,badge:r,defaultOpen:o=!0,isOpen:c,onOpenChange:s,collapseOnClickOutside:l=!1,children:u})=>{const[d,p]=x.useState(o),g=x.useRef(null),h=c!==void 0,f=h?c:d,b=Hp(a),w=()=>{const k=!f;h?s==null||s(k):p(k)};return x.useEffect(()=>{if(!l||!f)return;const k=L=>{g.current&&!g.current.contains(L.target)&&(h?s==null||s(!1):p(!1))};return document.addEventListener("mousedown",k),document.addEventListener("touchstart",k),()=>{document.removeEventListener("mousedown",k),document.removeEventListener("touchstart",k)}},[l,f,h,s]),e.jsx(Yp,{ref:g,children:e.jsxs(Vp,{children:[e.jsxs(Up,{type:"button",onClick:w,whileTap:{scale:.995},transition:{duration:.1},children:[e.jsxs(qp,{children:[e.jsx(Gp,{$color:b,children:n}),e.jsx(Kp,{children:t})]}),e.jsxs(Jp,{children:[e.jsx(ie,{mode:"wait",children:r!==void 0&&e.jsx(Xp,{$color:b,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:Hn},children:r},r)}),e.jsx(Zp,{animate:{rotate:f?180:0},transition:{duration:.25,ease:Hn},children:e.jsx(tx,{})})]})]}),e.jsx(ie,{initial:!1,children:f&&e.jsx(Qp,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:nx,children:e.jsx(ex,{children:u})},"content")})]})})},ax=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,ix=i.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,ox=i(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,sx=i.div`
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
`,is=i(y.div)`
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
`,cx=i.div`
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
`,lx=i.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,dx=i.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,ux=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,px=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,xx=i.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,hx=i(y.button)`
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

  ${is}:hover & {
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
`,gx=i(y.div)`
  padding: 48px 24px;
  text-align: center;
`,fx=i.div`
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
`,mx=i.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,vx=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,yx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),e.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),e.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),bx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),ki=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]}),jx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]}),wx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),kx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Ci=[.32,.72,0,1],Cx=t=>{switch(t){case"credit_card_spend":return e.jsx(bx,{});case"cc_payment":return e.jsx(ki,{});case"bank_debit":return e.jsx(ki,{});case"bank_credit":return e.jsx(jx,{})}},Si=t=>t==="bank_credit",Sx=t=>{const n=new Date(t),a=new Date,r=new Date(a);return r.setDate(r.getDate()-1),t===a.toISOString().split("T")[0]?"Today":t===r.toISOString().split("T")[0]?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},Dx=({transactions:t,onDeleteTransaction:n,selectedDate:a})=>{const{filteredTransactions:r,groupedTransactions:o}=x.useMemo(()=>{const l=new Date(a),u=t.filter(p=>new Date(p.date)<=l).sort((p,g)=>{const h=g.date.localeCompare(p.date);return h!==0?h:g.id.localeCompare(p.id)}),d={};return u.forEach(p=>{d[p.date]||(d[p.date]=[]),d[p.date].push(p)}),{filteredTransactions:u,groupedTransactions:d}},[t,a]),c=x.useCallback(l=>{n(l)},[n]),s=Object.keys(o).sort((l,u)=>u.localeCompare(l));return e.jsx(rx,{title:"Transactions",icon:e.jsx(yx,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:e.jsx(ax,{children:e.jsx(ix,{children:r.length===0?e.jsxs(gx,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:Ci},children:[e.jsx(fx,{children:e.jsx(kx,{})}),e.jsx(mx,{children:"No Transactions"}),e.jsx(vx,{children:"Add your first transaction above"})]}):s.map(l=>e.jsxs(ox,{children:[e.jsx(sx,{children:Sx(l)}),e.jsx(ie,{mode:"popLayout",children:o[l].map(u=>{var p;const d=Nn(u.accountId);return e.jsxs(is,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:Ci},layout:!0,children:[e.jsx(cx,{$type:u.type,children:Cx(u.type)}),e.jsxs(lx,{children:[e.jsx(dx,{children:u.description}),e.jsx(ux,{children:(p=d==null?void 0:d.name)==null?void 0:p.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(px,{children:[e.jsxs(xx,{$positive:Si(u.type),children:[Si(u.type)?"+":"-",te(u.amount)]}),e.jsx(hx,{type:"button",onClick:()=>c(u.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(wx,{})})]})]},u.id)})})]},l))})})})};x.memo(Dx);const Tx=i(y.div)`
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
`,$x=i(y.div)`
  width: 100%;
  max-width: 440px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Ix=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Lx=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,os=i(y.button)`
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
`,_x=i(os)`
  left: 12px;
  color: var(--text-secondary);
`,Ax=i(os)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Ox=i.div`
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
`,yn=i.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,bn=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`,jn=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,wn=i.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  gap: 12px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,kn=i.div`
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
`,Cn=i.div`
  flex: 1;
  min-width: 0;
`,Sn=i.div`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,Dn=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Tn=i.div`
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
`,$n=i.input`
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
`,Bx=i.div`
  padding: 8px 14px 12px;
  display: flex;
  gap: 8px;
`,Di=i.button`
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
`,Fx=i.div`
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Mx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),e.jsx("polyline",{points:"5 6 12 3 19 6"}),e.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),e.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),Px=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ex=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Nx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),ss=[.25,.1,.25,1],zx={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Wx={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:ss}}},Rx=({isOpen:t,onClose:n,initialBalances:a,initialCCBills:r,ccLimits:o,onSave:c})=>{const[s,l]=x.useState({}),[u,d]=x.useState({}),[p,g]=x.useState({}),[h,f]=x.useState({}),[b,w]=x.useState(""),k=ns(),L=Ba(),v=rs();x.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),x.useEffect(()=>{var I;if(t){const D=Se(new Date),N={};k.forEach(S=>{var _;N[S.id]=((_=a[S.id])==null?void 0:_.toString())||""}),l(N),v&&w(((I=a[v.id])==null?void 0:I.toString())||"");const Y={},C={};L.forEach(S=>{const _=Oa(r[S.id],D);Y[S.id]=_.amount>0?_.amount.toString():"",C[S.id]=_.type}),d(Y),g(C);const m={};L.forEach(S=>{var _;m[S.id]=((_=o[S.id])==null?void 0:_.toString())||""}),f(m)}},[t,a,r,o,v]);const $=()=>{const I=Se(new Date),D={};if(Object.entries(s).forEach(([C,m])=>{const S=parseFloat(m.replace(/,/g,""))||0;D[C]=S}),v){const C=parseFloat(b.replace(/,/g,""))||0;D[v.id]=C}const N={};Object.entries(u).forEach(([C,m])=>{const S=parseFloat(m.replace(/,/g,""))||0,_=r[C],ce=typeof _=="object"?_.setupDate:I,ae={amount:S,type:p[C]||"billed",setupDate:typeof _=="object"&&_.amount===S?ce:I};N[C]=ae});const Y={};Object.entries(h).forEach(([C,m])=>{const S=parseFloat(m.replace(/,/g,""))||0;S>0&&(Y[C]=S)}),c(D,N,Y),n()},F=I=>{const D=I.replace(/[^0-9]/g,"");if(!D)return"";if(D.length>3){let N=D.substring(D.length-3),Y=D.substring(0,D.length-3);return Y=Y.replace(/\B(?=(\d{2})+(?!\d))/g,","),Y+","+N}return D},R=(I,D)=>{const N=D.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&l(Y=>({...Y,[I]:N}))},O=(I,D)=>{const N=D.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&d(Y=>({...Y,[I]:N}))},P=(I,D)=>{const N=D.replace(/,/g,"");(N===""||/^\d+$/.test(N))&&f(Y=>({...Y,[I]:N}))},E=I=>{const D=I.replace(/,/g,"");(D===""||/^\d+$/.test(D))&&w(D)},H=I=>{if(I>3&&I<21)return"th";switch(I%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return e.jsx(ie,{children:t&&e.jsx(Tx,{variants:zx,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:ss},onClick:n,children:e.jsxs($x,{variants:Wx,initial:"hidden",animate:"visible",exit:"exit",onClick:I=>I.stopPropagation(),children:[e.jsxs(Ix,{children:[e.jsx(_x,{onClick:n,children:"Cancel"}),e.jsx(Lx,{children:"Balances & Limits"}),e.jsx(Ax,{onClick:$,children:"Done"})]}),e.jsxs(Ox,{children:[e.jsxs(yn,{children:[e.jsx(bn,{children:"Bank Accounts"}),e.jsx(jn,{children:k.map(I=>e.jsxs(wn,{children:[e.jsx(kn,{$color:"#007AFF",children:e.jsx(Mx,{})}),e.jsxs(Cn,{children:[e.jsx(Sn,{children:I.name.replace(" Bank","")}),e.jsx(Dn,{children:"Current balance"})]}),e.jsx(Tn,{children:e.jsx($n,{type:"text",inputMode:"numeric",placeholder:"0",value:F(s[I.id]||""),onChange:D=>R(I.id,D.target.value)})})]},I.id))})]}),v&&e.jsxs(yn,{children:[e.jsx(bn,{children:"Investments"}),e.jsx(jn,{children:e.jsxs(wn,{children:[e.jsx(kn,{$color:"#AF52DE",children:e.jsx(Nx,{})}),e.jsxs(Cn,{children:[e.jsx(Sn,{children:"Liquid Fund"}),e.jsx(Dn,{children:"Current investment value"})]}),e.jsx(Tn,{children:e.jsx($n,{type:"text",inputMode:"numeric",placeholder:"0",value:F(b),onChange:I=>E(I.target.value)})})]})})]}),e.jsxs(yn,{children:[e.jsx(bn,{children:"Credit Card Bills"}),e.jsx(jn,{children:L.map(I=>e.jsxs(Fx,{children:[e.jsxs(wn,{style:{borderBottom:"none"},children:[e.jsx(kn,{$color:"#FF9500",children:e.jsx(Px,{})}),e.jsxs(Cn,{children:[e.jsx(Sn,{children:I.name.replace(" Credit Card","")}),e.jsx(Dn,{children:"Outstanding amount"})]}),e.jsx(Tn,{children:e.jsx($n,{type:"text",inputMode:"numeric",placeholder:"0",value:F(u[I.id]||""),onChange:D=>O(I.id,D.target.value)})})]}),e.jsxs(Bx,{children:[e.jsx(Di,{type:"button",$active:p[I.id]==="billed",onClick:()=>g(D=>({...D,[I.id]:"billed"})),children:"Billed"}),e.jsx(Di,{type:"button",$active:p[I.id]==="unbilled",onClick:()=>g(D=>({...D,[I.id]:"unbilled"})),children:"Unbilled"})]})]},I.id))})]}),e.jsxs(yn,{children:[e.jsx(bn,{children:"Spending Limits"}),e.jsx(jn,{children:L.map(I=>{const D=Qo[I.id];return e.jsxs(wn,{children:[e.jsx(kn,{$color:"#34C759",children:e.jsx(Ex,{})}),e.jsxs(Cn,{children:[e.jsx(Sn,{children:I.name.replace(" Credit Card","")}),D&&e.jsxs(Dn,{children:["Resets on ",D,H(D)]})]}),e.jsx(Tn,{children:e.jsx($n,{type:"text",inputMode:"numeric",placeholder:"0",value:F(h[I.id]||""),onChange:N=>P(I.id,N.target.value)})})]},I.id)})})]})]})]})})})},Hx=i(y.div)`
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
`,Yx=i(y.div)`
  width: 100%;
  max-width: 400px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Vx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Ux=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,cs=i(y.button)`
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
`,qx=i(cs)`
  left: 12px;
  color: var(--text-secondary);
`,Gx=i(cs)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Kx=i.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`,Ti=i.div`
  padding: 16px;
`,$i=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`,Jx=i.div`
  display: flex;
  gap: 10px;
`,Xx=i.input`
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
`,Zx=i(y.button)`
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
`,Qx=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,eh=i(y.div)`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,th=i.span`
  flex: 1;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,nh=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ma=i(y.button)`
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
`,rh=i(ma)`
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`,ah=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,ih=i.div`
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
`,oh=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,sh=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
`,ch=i(y.div)`
  position: absolute;
  inset: 0;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`,lh=i.input`
  flex: 1;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--accent);
  border-radius: 10px;
  outline: none;
`,dh=i.div`
  position: relative;
`,uh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),ph=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),xh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}),e.jsx("path",{d:"M7 7h.01"})]}),hh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),ls=[.25,.1,.25,1],gh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},fh={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:ls}}},mh=({isOpen:t,onClose:n,categories:a,onSave:r})=>{const[o,c]=x.useState(a),[s,l]=x.useState(""),[u,d]=x.useState(null),[p,g]=x.useState(""),h=x.useRef(null);x.useEffect(()=>{t&&(c(a),l(""),d(null))},[t,a]),x.useEffect(()=>{u&&h.current&&h.current.focus()},[u]);const f=x.useCallback(()=>{if(!s.trim())return;const v={id:ts(),name:s.trim()};c($=>[...$,v]),l("")},[s]),b=x.useCallback(v=>{c($=>$.filter(F=>F.id!==v))},[]),w=x.useCallback(v=>{d(v.id),g(v.name)},[]),k=x.useCallback(()=>{!u||!p.trim()||(c(v=>v.map($=>$.id===u?{...$,name:p.trim()}:$)),d(null),g(""))},[u,p]),L=x.useCallback(()=>{r(o),n()},[o,r,n]);return e.jsx(ie,{children:t&&e.jsx(Hx,{variants:gh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:ls},onClick:n,children:e.jsxs(Yx,{variants:fh,initial:"hidden",animate:"visible",exit:"exit",onClick:v=>v.stopPropagation(),children:[e.jsxs(Vx,{children:[e.jsx(qx,{onClick:n,children:"Cancel"}),e.jsx(Ux,{children:"Categories"}),e.jsx(Gx,{onClick:L,children:"Done"})]}),e.jsxs(Kx,{children:[e.jsxs(Ti,{children:[e.jsx($i,{children:"Add New"}),e.jsxs(Jx,{children:[e.jsx(Xx,{type:"text",placeholder:"Category name",value:s,onChange:v=>l(v.target.value),onKeyDown:v=>v.key==="Enter"&&f()}),e.jsx(Zx,{onClick:f,disabled:!s.trim(),whileTap:{scale:.98},children:"Add"})]})]}),e.jsxs(Ti,{children:[e.jsx($i,{children:"Your Categories"}),o.length===0?e.jsxs(ah,{children:[e.jsx(ih,{children:e.jsx(xh,{})}),e.jsx(oh,{children:"No Categories"}),e.jsx(sh,{children:"Add a category to organize your transactions"})]}):e.jsx(Qx,{children:e.jsx(ie,{children:o.map(v=>e.jsxs(dh,{children:[e.jsxs(eh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,height:0},layout:!0,children:[e.jsx(th,{children:v.name}),e.jsxs(nh,{children:[e.jsx(ma,{onClick:()=>w(v),whileTap:{scale:.95},children:e.jsx(uh,{})}),e.jsx(rh,{onClick:()=>b(v.id),whileTap:{scale:.95},children:e.jsx(ph,{})})]})]}),e.jsx(ie,{children:u===v.id&&e.jsxs(ch,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(lh,{ref:h,type:"text",value:p,onChange:$=>g($.target.value),onKeyDown:$=>{$.key==="Enter"&&k(),$.key==="Escape"&&d(null)},onBlur:k}),e.jsx(ma,{onClick:k,whileTap:{scale:.95},style:{color:"var(--accent)"},children:e.jsx(hh,{})})]})})]},v.id))})})]})]})]})})})},vh=i(y.div)`
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
`,yh=i(y.div)`
  width: 100%;
  max-width: 440px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
`,bh=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
`,jh=i.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
`,wh=i(y.button)`
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
`,kh=i.div`
  padding: 20px;
`,In=i.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`,Ln=i.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 8px;
`,ds=i.input`
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
`,Ch=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,Sh=i.span`
  position: absolute;
  left: 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Dh=i(ds)`
  padding-left: 30px;
`,Th=i.select`
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
`,$h=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,Ih=i.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,Lh=i(y.button).attrs({type:"button"})`
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
`,_h=i.div`
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid var(--border);
`,Ii=i(y.button)`
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
`,Ah=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),us=[.25,.1,.25,1],Oh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Bh={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.15,ease:us}}},Fh=({isOpen:t,onClose:n,transaction:a,categories:r,onSave:o})=>{const[c,s]=x.useState(""),[l,u]=x.useState(""),[d,p]=x.useState(""),[g,h]=x.useState(""),[f,b]=x.useState(!1),w=x.useRef(null);x.useEffect(()=>{t&&a&&(s(a.amount.toString()),u(a.date),p(a.description),h(a.categoryId||""))},[t,a]);const k=x.useMemo(()=>{const P=c.replace(/[^0-9.]/g,"").split(".");let E=P[0];const H=P[1];if(E.length>3){let I=E.substring(E.length-3),D=E.substring(0,E.length-3);D=D.replace(/\B(?=(\d{2})+(?!\d))/g,","),E=D+","+I}return H!==void 0?`${E}.${H}`:E},[c]),L=x.useCallback(O=>{const P=O.target.value.replace(/,/g,"");(P===""||/^\d*\.?\d*$/.test(P))&&s(P)},[]),v=O=>new Date(O+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),$=x.useCallback(()=>{if(!a)return;const O={...a,amount:parseFloat(c)||a.amount,date:l||a.date,description:d,categoryId:g||void 0};o(O),n()},[a,c,l,d,g,o,n]),F=parseFloat(c)>0&&l,R=a&&(a.type==="credit_card_spend"||a.type==="bank_debit");return e.jsx(ie,{children:t&&a&&e.jsx(vh,{variants:Oh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:us},onClick:n,children:e.jsxs(yh,{variants:Bh,initial:"hidden",animate:"visible",exit:"exit",onClick:O=>O.stopPropagation(),children:[e.jsxs(bh,{children:[e.jsx(jh,{children:"Edit Transaction"}),e.jsx(wh,{onClick:n,whileTap:{scale:.95},children:e.jsx(Ah,{})})]}),e.jsxs(kh,{children:[e.jsxs(In,{children:[e.jsx(Ln,{children:"Amount"}),e.jsxs(Ch,{children:[e.jsx(Sh,{children:"₹"}),e.jsx(Dh,{type:"text",inputMode:"decimal",placeholder:"0",value:k,onChange:L})]})]}),e.jsxs(In,{children:[e.jsx(Ln,{children:"Date"}),e.jsxs($h,{children:[e.jsx(Ih,{children:v(l)}),e.jsx(Lh,{ref:w,onClick:()=>b(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(tn,{isOpen:f,onClose:()=>b(!1),selectedDate:l,onDateSelect:u,triggerRef:w})]})]}),e.jsxs(In,{children:[e.jsx(Ln,{children:"Description"}),e.jsx(ds,{type:"text",placeholder:"Add a note...",value:d,onChange:O=>p(O.target.value)})]}),R&&e.jsxs(In,{children:[e.jsx(Ln,{children:"Category"}),e.jsxs(Th,{value:g,onChange:O=>h(O.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),r.map(O=>e.jsx("option",{value:O.id,children:O.name},O.id))]})]})]}),e.jsxs(_h,{children:[e.jsx(Ii,{onClick:n,whileTap:{scale:.98},children:"Cancel"}),e.jsx(Ii,{$primary:!0,onClick:$,disabled:!F,whileTap:F?{scale:.98}:{},children:"Save"})]})]})})})},Mh=i(y.div)`
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
`,Ph=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,Eh=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,Nh=i.div`
  padding: 16px 0 16px;

  @media (max-width: 640px) {
    padding: 16px 0 16px;
  }
`,zh=i.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,Wh=i(y.button)`
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
`,Rh=i.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,Hh=i(y.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,Yh=i.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,Vh=i(y.div)`
  width: 100%;
`,Uh=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,qh=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Gh=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Kh=i.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`,Jh=i.div`
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
`,Xh=i.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
`,Zh=i.div`
  color: var(--text-tertiary);
  transform: rotate(${({$expanded:t})=>t?"180deg":"0deg"});
  transition: transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`,Qh=i(y.div)`
  overflow: hidden;
`,e0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,_n=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,An=i.label`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
`,Li=i.select`
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
`,t0=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,n0=i.button`
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
`,r0=i.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
  margin-bottom: 16px;
`,_i=i(y.button)`
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
`,a0=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,i0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,On=i(y.div)`
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
`,Bn=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Fn=i.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
`,Mn=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
`,o0=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px 0;
`,Ai=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Oi=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,Bi=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Fi=i.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({$color:t})=>t};
  letter-spacing: -0.02em;
`,Mi=i.div`
  height: 10px;
  background: var(--bg-tertiary);
  border-radius: 5px;
  overflow: hidden;
`,Pi=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 5px;
`,s0=i.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,Ei=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ni=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
  font-weight: 500;
`,zi=i.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({$color:t})=>t||"var(--text-primary)"};
`,_r=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ar=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
`,Or=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Br=i.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,Fr=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Mr=i.div`
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
`,Pr=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  ${({$isFirst:t})=>t&&"border-radius: 6px 0 0 6px;"}
  ${({$isLast:t})=>t&&"border-radius: 0 6px 6px 0;"}
  ${({$isFirst:t,$isLast:n})=>t&&n&&"border-radius: 6px;"}
`,Er=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Nr=i.div`
  width: 4px;
  height: 40px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,zr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Wr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Rr=i.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hr=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex-shrink: 0;
`,Yr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Vr=i.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Ur=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,qr=i.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Gr=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,c0=i(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
`,l0=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Wi=i.button`
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
`,d0=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,u0=i.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 10px;
`,p0=i(y.button)`
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
`,x0=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,h0=i.div`
  /* Full height - page scrolls naturally */
`,g0=i(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,f0=i.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,m0=i(y.div)`
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
`,v0=i.div`
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
`,y0=i.div`
  flex: 1;
  min-width: 0;
`,b0=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,j0=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,w0=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,k0=i.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,C0=i.div`
  display: flex;
  gap: 4px;
`,Ri=i(y.button)`
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
`,S0=i.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  border-radius: 6px;
  margin-left: 8px;
`,D0=i(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`,Hi=i.div`
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
`,Yi=i.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,Vi=i.div`
  font-size: 14px;
  color: var(--text-tertiary);
`,T0=i(y.div)`
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
`,$0=i(y.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`,I0=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`,L0=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`,_0=i.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,A0=i.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,O0=i(y.button)`
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
`,B0=i.div`
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
`,F0=i.div`
  display: flex;
  gap: 12px;
  padding: 12px 8px;
  margin-bottom: 8px;
`,Ui=i.div`
  flex: 1;
  background: var(--bg-tertiary);
  border-radius: 12px;
  padding: 12px;
  text-align: center;
`,qi=i.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  letter-spacing: -0.02em;
`,Gi=i.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-top: 4px;
`,M0=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,P0=i(y.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  
  &:hover {
    background: var(--bg-primary);
  }
`,E0=i.div`
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
`,N0=i.div`
  flex: 1;
  min-width: 0;
`,z0=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,W0=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 6px;
`,R0=i.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#34C759":"#FF3B30"};
  text-align: right;
  flex-shrink: 0;
`,H0=i.div`
  padding: 48px 20px;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 15px;
`,Kr=i(y.div)`
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
`,Y0=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Jr=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Xr=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Ki=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Zr=i(y.button)`
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
`,Qr=i.div`
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
`,ea=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ta=i.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,na=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,Ji=i.div`
  color: var(--text-tertiary);
  opacity: 0.5;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,Xi=i.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,V0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Zi=i(y.button)`
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
`,Qi=i.div`
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
`,eo=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,to=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,U0=i.input`
  display: none;
`,q0=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,G0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),K0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),J0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),X0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),ps=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),Z0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),Q0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),eg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),no=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),tg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),ng=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),rg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("polyline",{points:"9 12 11 14 15 10"})]}),ag=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),ig=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),og=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),sg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),cg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),lg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),e.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),dg=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),ug=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),ro=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),ao=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),pg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),pe=[.25,.1,.25,1],xg={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:pe}}},hg={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},gg=t=>{switch(t){case"credit_card_spend":return e.jsx(no,{});case"bank_credit":return e.jsx(tg,{});case"cc_payment":return e.jsx(rg,{});case"bank_debit":return e.jsx(ng,{});case"liquid_fund_credit":return e.jsx(ag,{});case"liquid_fund_debit":return e.jsx(ig,{});default:return e.jsx(no,{})}},io=t=>t==="bank_credit"||t==="liquid_fund_credit",fg=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},oo=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),lt=[{id:"summary",label:"Summary",icon:e.jsx(G0,{}),accent:"green"},{id:"cards",label:"Cards",icon:e.jsx(K0,{}),accent:"pink"},{id:"transactions",label:"History",icon:e.jsx(J0,{}),accent:"blue"},{id:"add",label:"Add",icon:e.jsx(X0,{}),accent:"orange"},{id:"manage",label:"Manage",icon:e.jsx(ps,{}),accent:"purple"}],mg=()=>{const[t,n]=x.useState(Se(new Date)),[a,r]=x.useState([]),[o,c]=x.useState({}),[s,l]=x.useState({}),[u,d]=x.useState({}),[p,g]=x.useState([]),[h,f]=x.useState(!1),[b,w]=x.useState(!1),[k,L]=x.useState(null),[v,$]=x.useState("summary"),[[,F],R]=x.useState([0,0]),O=x.useRef(null),[P,E]=x.useState(!1),[H,I]=x.useState(()=>{const j=new Date;return Se(new Date(j.getFullYear(),j.getMonth(),1))}),[D,N]=x.useState(()=>Se(new Date)),[Y,C]=x.useState("all"),[m,S]=x.useState("all"),[_,ce]=x.useState([]),[ae,oe]=x.useState(!1),[ne,we]=x.useState(!1),ge=x.useRef(null),ke=x.useRef(null),[J,$e]=x.useState("transactions"),[ue,Ce]=x.useState(null),ye=x.useCallback(j=>{const M=lt.findIndex(z=>z.id===j),U=lt.findIndex(z=>z.id===v);R([M,M>U?1:-1]),$(j)},[v]),He=x.useCallback((j,M)=>{const T=lt.findIndex(W=>W.id===v);(M.offset.x<-50||M.velocity.x<-500)&&T<lt.length-1?ye(lt[T+1].id):(M.offset.x>50||M.velocity.x>500)&&T>0&&ye(lt[T-1].id)},[v,ye]);x.useEffect(()=>{const j=Nd(),M=zd(),U=Wd(),z=Rd(),T=Hd();r(j),c(M),l(U),d(z),g(T)},[]),x.useEffect(()=>{if(ue){const j=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${j}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.overflow="hidden"}else{const j=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.overflow="",j&&window.scrollTo(0,parseInt(j||"0",10)*-1)}return()=>{document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.overflow=""}},[ue]);const Ee=x.useMemo(()=>Kd(a,t,o,s),[t,a,o,s]),Le=x.useMemo(()=>Ba().map(M=>qd(M,a,t,s)),[a,t,s]),Ne=["bank_credit","liquid_fund_debit"],re=["credit_card_spend","cc_payment","bank_debit","liquid_fund_credit"],Ze=[{id:"hdfc-bank",label:"HDFC Bank"},{id:"icici-bank",label:"ICICI Bank"},{id:"hdfc-cc",label:"HDFC CC"},{id:"axis-cc",label:"Axis CC"},{id:"icici-cc",label:"ICICI CC"},{id:"yes-cc",label:"Yes CC"},{id:"liquid-fund",label:"Liquid Fund"}],{filteredTransactions:fe,groupedTransactions:Qe,activeFilterCount:et}=x.useMemo(()=>{let j=a.filter(z=>!(z.date<H||z.date>D||Y!=="all"&&(!z.categoryId||z.categoryId!==Y)||m!=="all"&&(m==="credit"&&!Ne.includes(z.type)||m==="debit"&&!re.includes(z.type))||_.length>0&&!_.includes(z.accountId)));j=j.sort((z,T)=>{const W=T.date.localeCompare(z.date);return W!==0?W:T.id.localeCompare(z.id)});const M={};j.forEach(z=>{M[z.date]||(M[z.date]=[]),M[z.date].push(z)});let U=0;return Y!=="all"&&U++,m!=="all"&&U++,_.length>0&&U++,{filteredTransactions:j,groupedTransactions:M,activeFilterCount:U}},[a,H,D,Y,m,_]),K=x.useMemo(()=>{const j=fe,M=j.filter(B=>Ne.includes(B.type)).reduce((B,ee)=>B+ee.amount,0),U=j.filter(B=>re.includes(B.type)).reduce((B,ee)=>B+ee.amount,0),z=M-U,T=j.filter(B=>Ne.includes(B.type)).length,W=j.filter(B=>re.includes(B.type)).length,Z=T>0?M/T:0,A=W>0?U/W:0,Q={};j.forEach(B=>{var ee;if(re.includes(B.type)){const Ye=B.categoryId||"uncategorized",Nt=B.categoryId?((ee=p.find(ft=>ft.id===B.categoryId))==null?void 0:ee.name)||"Unknown":"Uncategorized";Q[Ye]||(Q[Ye]={id:Ye,name:Nt,amount:0,count:0}),Q[Ye].amount+=B.amount,Q[Ye].count++}});const dn=Object.entries(Q).map(([B,ee])=>({...ee,id:B})).sort((B,ee)=>ee.amount-B.amount).slice(0,6),xe={};j.forEach(B=>{const ee=Nn(B.accountId);ee&&(xe[B.accountId]||(xe[B.accountId]={id:B.accountId,name:ee.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:0,count:0,type:ee.type}),xe[B.accountId].amount+=B.amount,xe[B.accountId].count++)});const je=Object.entries(xe).map(([B,ee])=>({...ee,id:B})).sort((B,ee)=>ee.amount-B.amount),ze={credit_card_spend:{id:"credit_card_spend",label:"CC Spending",amount:0,count:0},cc_payment:{id:"cc_payment",label:"CC Payments",amount:0,count:0},bank_debit:{id:"bank_debit",label:"Bank Debits",amount:0,count:0},bank_credit:{id:"bank_credit",label:"Bank Credits",amount:0,count:0},liquid_fund_credit:{id:"liquid_fund_credit",label:"LF Deposits",amount:0,count:0},liquid_fund_debit:{id:"liquid_fund_debit",label:"LF Withdrawals",amount:0,count:0}};j.forEach(B=>{ze[B.type]&&(ze[B.type].amount+=B.amount,ze[B.type].count++)});const se=Object.entries(ze).map(([B,ee])=>({...ee,id:B})).filter(B=>B.count>0).sort((B,ee)=>ee.amount-B.amount),Ie=[...j].filter(B=>re.includes(B.type)).sort((B,ee)=>ee.amount-B.amount).slice(0,3),ir=[...j].filter(B=>Ne.includes(B.type)).sort((B,ee)=>ee.amount-B.amount).slice(0,3);return{totalIncoming:M,totalOutgoing:U,netFlow:z,incomingCount:T,outgoingCount:W,totalCount:j.length,avgIncoming:Z,avgOutgoing:A,categoryBreakdown:dn,accountBreakdown:je,typeBreakdown:se,largestOutgoing:Ie,largestIncoming:ir}},[fe,p]),Xn=Object.keys(Qe).sort((j,M)=>M.localeCompare(j)),gt=x.useMemo(()=>ue?fe.filter(j=>{switch(ue.type){case"category":return ue.id==="uncategorized"?!j.categoryId&&re.includes(j.type):j.categoryId===ue.id;case"account":return j.accountId===ue.id;case"transactionType":return j.type===ue.id;default:return!1}}).sort((j,M)=>M.date.localeCompare(j.date)||M.amount-j.amount):[],[ue,fe,re]),Zn=x.useCallback(j=>{r(M=>{const U=[...M,j];return requestAnimationFrame(()=>gn(U)),U}),ye("transactions")},[]),sn=x.useCallback(j=>{r(M=>{const U=M.filter(z=>z.id!==j);return requestAnimationFrame(()=>gn(U)),U})},[]),Qn=x.useCallback(j=>{r(M=>{const U=M.map(z=>z.id===j.id?j:z);return requestAnimationFrame(()=>gn(U)),U})},[]),er=x.useCallback(j=>{g(j),requestAnimationFrame(()=>hi(j))},[]),tr=x.useCallback(()=>{const j=new Date;I(Se(new Date(j.getFullYear(),j.getMonth(),1))),N(Se(j)),C("all"),S("all"),ce([])},[]),nr=x.useCallback(j=>{ce(M=>M.includes(j)?M.filter(U=>U!==j):[...M,j])},[]),rr=x.useCallback((j,M,U)=>{c(j),l(M),d(U),requestAnimationFrame(()=>{ui(j),pi(M),xi(U)})},[]),Et=x.useCallback(()=>{Zd(a,o,s,u,p)},[a,o,s,u,p]),cn=x.useCallback(()=>{var j;(j=O.current)==null||j.click()},[]),ln=x.useCallback(j=>{var z;const M=(z=j.target.files)==null?void 0:z[0];if(!M)return;const U=new FileReader;U.onload=T=>{var A;const W=(A=T.target)==null?void 0:A.result,Z=eu(W);Z?window.confirm(`Import backup from ${new Date(Z.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${Z.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(Z.transactions),c(Z.initialBalances),l(Z.initialCCBills),d(Z.ccLimits||{}),g(Z.categories||[]),gn(Z.transactions),ui(Z.initialBalances),pi(Z.initialCCBills),xi(Z.ccLimits||{}),hi(Z.categories||[])):alert("Invalid backup file.")},U.readAsText(M),j.target.value=""},[]),ar=()=>{switch(v){case"summary":return e.jsx(kp,{balances:Ee,ccLimits:u,creditCardDetailedBalances:Le});case"cards":return e.jsx(Uh,{children:Le.map((T,W)=>e.jsx(rp,{detailedBalance:T,index:W,limit:u[T.account.id]},T.account.id))});case"transactions":const j=["#FF3B30","#FF9500","#FFCC00","#34C759","#007AFF","#AF52DE"],M=K.categoryBreakdown.reduce((T,W)=>T+W.amount,0);let U=0;const z=K.categoryBreakdown.map((T,W)=>{const Z=M>0?T.amount/M*100:0,A=U;return U+=Z,{...T,percent:Z,startPercent:A,color:j[W%j.length]}});return e.jsxs(qh,{children:[e.jsxs(Gh,{children:[e.jsxs(Kh,{onClick:()=>E(!P),children:[e.jsxs(Jh,{children:[e.jsx(dg,{}),"Filters",et>0&&e.jsxs(Xh,{children:[et," active"]})]}),e.jsx(Zh,{$expanded:P,children:e.jsx(ug,{})})]}),e.jsx(ie,{children:P&&e.jsxs(Qh,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2,ease:pe},children:[e.jsxs(e0,{children:[e.jsxs(_n,{style:{gridColumn:"1 / -1"},children:[e.jsx(An,{children:"Period"}),e.jsxs(l0,{children:[e.jsxs(Wi,{ref:ge,type:"button",onClick:()=>oe(!0),children:[oo(H),e.jsx(ao,{})]}),e.jsx(tn,{isOpen:ae,onClose:()=>oe(!1),selectedDate:H,onDateSelect:T=>{I(T),oe(!1)},triggerRef:ge}),e.jsx(d0,{children:"to"}),e.jsxs(Wi,{ref:ke,type:"button",onClick:()=>we(!0),children:[oo(D),e.jsx(ao,{})]}),e.jsx(tn,{isOpen:ne,onClose:()=>we(!1),selectedDate:D,onDateSelect:T=>{N(T),we(!1)},triggerRef:ke})]})]}),e.jsxs(_n,{children:[e.jsx(An,{children:"Category"}),e.jsxs(Li,{value:Y,onChange:T=>C(T.target.value),children:[e.jsx("option",{value:"all",children:"All Categories"}),p.map(T=>e.jsx("option",{value:T.id,children:T.name},T.id))]})]}),e.jsxs(_n,{children:[e.jsx(An,{children:"Money Flow"}),e.jsxs(Li,{value:m,onChange:T=>S(T.target.value),children:[e.jsx("option",{value:"all",children:"All Transactions"}),e.jsx("option",{value:"credit",children:"Incoming"}),e.jsx("option",{value:"debit",children:"Outgoing"})]})]}),e.jsxs(_n,{style:{gridColumn:"1 / -1"},children:[e.jsxs(An,{children:["Account ",_.length>0&&`(${_.length} selected)`]}),e.jsx(t0,{children:Ze.map(T=>e.jsx(n0,{type:"button",$selected:_.includes(T.id),onClick:()=>nr(T.id),children:T.label},T.id))})]})]}),e.jsx(u0,{children:e.jsx(p0,{onClick:tr,whileTap:{scale:.98},children:"Reset Filters"})})]})})]}),e.jsxs(r0,{children:[e.jsx(_i,{$active:J==="insights",onClick:()=>$e("insights"),whileTap:{scale:.98},children:"Insights"}),e.jsx(_i,{$active:J==="transactions",onClick:()=>$e("transactions"),whileTap:{scale:.98},children:"Transactions"})]}),e.jsx(ie,{mode:"wait",children:J==="insights"?e.jsx(a0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:pe},children:fe.length===0?e.jsxs(c0,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx(Hi,{children:e.jsx(pg,{})}),e.jsx(Yi,{children:"No Data to Analyze"}),e.jsx(Vi,{children:et>0?"Try adjusting your filters":"Add transactions to see insights"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(On,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.4,ease:pe},children:[e.jsxs(Bn,{children:[e.jsx(Fn,{children:"Money Flow"}),e.jsxs(Mn,{children:[K.totalCount," transactions"]})]}),e.jsxs(o0,{children:[e.jsxs(Ai,{children:[e.jsxs(Oi,{children:[e.jsx(Bi,{children:"Incoming"}),e.jsx(Fi,{$color:"#34C759",children:te(K.totalIncoming)})]}),e.jsx(Mi,{children:e.jsx(Pi,{$color:"#34C759",initial:{width:0},animate:{width:`${K.totalIncoming+K.totalOutgoing>0?K.totalIncoming/(K.totalIncoming+K.totalOutgoing)*100:0}%`},transition:{delay:.2,duration:.6,ease:pe}})})]}),e.jsxs(Ai,{children:[e.jsxs(Oi,{children:[e.jsx(Bi,{children:"Outgoing"}),e.jsx(Fi,{$color:"#FF3B30",children:te(K.totalOutgoing)})]}),e.jsx(Mi,{children:e.jsx(Pi,{$color:"#FF3B30",initial:{width:0},animate:{width:`${K.totalIncoming+K.totalOutgoing>0?K.totalOutgoing/(K.totalIncoming+K.totalOutgoing)*100:0}%`},transition:{delay:.25,duration:.6,ease:pe}})})]}),e.jsxs(s0,{children:[e.jsxs(Ei,{children:[e.jsx(Ni,{children:"Net Flow"}),e.jsxs(zi,{$color:K.netFlow>=0?"#34C759":"#FF3B30",children:[K.netFlow>=0?"+":"",te(K.netFlow)]})]}),e.jsxs(Ei,{children:[e.jsx(Ni,{children:"Avg. Transaction"}),e.jsx(zi,{children:te(K.totalCount>0?(K.totalIncoming+K.totalOutgoing)/K.totalCount:0)})]})]})]})]}),e.jsxs(i0,{children:[K.categoryBreakdown.length>0&&e.jsxs(On,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4,ease:pe},children:[e.jsxs(Bn,{children:[e.jsx(Fn,{children:"Spending by Category"}),e.jsxs(Mn,{children:[K.categoryBreakdown.length," categories"]})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{children:[e.jsx(Or,{children:"Total Spent"}),e.jsx(Br,{children:te(M)})]}),e.jsx(Fr,{children:e.jsx(Mr,{children:z.map((T,W)=>e.jsx(Pr,{$color:T.color,$isFirst:W===0,$isLast:W===z.length-1,initial:{width:0},animate:{width:`${T.percent}%`},transition:{delay:.2+W*.05,duration:.5,ease:pe}},T.name))})}),e.jsx(Er,{children:z.map((T,W)=>e.jsxs(Kr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.3+W*.06,duration:.3},onClick:()=>Ce({type:"category",id:T.id,label:T.name,color:T.color}),whileTap:{scale:.98},children:[e.jsx(Nr,{$color:T.color}),e.jsxs(zr,{children:[e.jsxs(Wr,{children:[e.jsx(Rr,{children:T.name}),e.jsx(Hr,{children:te(T.amount)})]}),e.jsxs(Yr,{children:[e.jsxs(Vr,{$color:T.color,children:[T.percent.toFixed(1),"%"]}),e.jsx(qr,{children:e.jsx(Gr,{$color:T.color,initial:{width:0},animate:{width:`${T.percent}%`},transition:{delay:.4+W*.06,duration:.4,ease:pe}})}),e.jsxs(Ur,{children:[T.count," transactions"]})]})]})]},T.name))})]})]}),K.accountBreakdown.length>0&&(()=>{const T=K.accountBreakdown.reduce((A,Q)=>A+Q.amount,0),W={bank:"#007AFF",credit_card:"#FF9500",liquid_fund:"#AF52DE"},Z=K.accountBreakdown.map(A=>({...A,percent:T>0?A.amount/T*100:0,color:W[A.type]||"#34C759"}));return e.jsxs(On,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.4,ease:pe},children:[e.jsxs(Bn,{children:[e.jsx(Fn,{children:"Activity by Account"}),e.jsxs(Mn,{children:[K.accountBreakdown.length," accounts"]})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{children:[e.jsx(Or,{children:"Total Activity"}),e.jsx(Br,{children:te(T)})]}),e.jsx(Fr,{children:e.jsx(Mr,{children:Z.map((A,Q)=>e.jsx(Pr,{$color:A.color,$isFirst:Q===0,$isLast:Q===Z.length-1,initial:{width:0},animate:{width:`${A.percent}%`},transition:{delay:.2+Q*.05,duration:.5,ease:pe}},A.name))})}),e.jsx(Er,{children:Z.map((A,Q)=>e.jsxs(Kr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.3+Q*.06,duration:.3},onClick:()=>Ce({type:"account",id:A.id,label:A.name,color:A.color}),whileTap:{scale:.98},children:[e.jsx(Nr,{$color:A.color}),e.jsxs(zr,{children:[e.jsxs(Wr,{children:[e.jsx(Rr,{children:A.name}),e.jsx(Hr,{children:te(A.amount)})]}),e.jsxs(Yr,{children:[e.jsxs(Vr,{$color:A.color,children:[A.percent.toFixed(1),"%"]}),e.jsx(qr,{children:e.jsx(Gr,{$color:A.color,initial:{width:0},animate:{width:`${A.percent}%`},transition:{delay:.4+Q*.06,duration:.4,ease:pe}})}),e.jsxs(Ur,{children:[A.count," transactions"]})]})]})]},A.name))})]})]})})()]}),K.typeBreakdown.length>0&&(()=>{const T=K.typeBreakdown.reduce((A,Q)=>A+Q.amount,0),W={"CC Spending":"#FF3B30","CC Payments":"#FF9500","Bank Debits":"#007AFF","Bank Credits":"#34C759","LF Deposits":"#AF52DE","LF Withdrawals":"#5856D6"},Z=K.typeBreakdown.map((A,Q)=>({...A,percent:T>0?A.amount/T*100:0,color:W[A.label]||j[Q%j.length]}));return e.jsxs(On,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4,ease:pe},children:[e.jsxs(Bn,{children:[e.jsx(Fn,{children:"Transaction Types"}),e.jsxs(Mn,{children:[K.typeBreakdown.length," types"]})]}),e.jsxs(_r,{children:[e.jsxs(Ar,{children:[e.jsx(Or,{children:"Total Volume"}),e.jsx(Br,{children:te(T)})]}),e.jsx(Fr,{children:e.jsx(Mr,{children:Z.map((A,Q)=>e.jsx(Pr,{$color:A.color,$isFirst:Q===0,$isLast:Q===Z.length-1,initial:{width:0},animate:{width:`${A.percent}%`},transition:{delay:.25+Q*.05,duration:.5,ease:pe}},A.label))})}),e.jsx(Er,{children:Z.map((A,Q)=>e.jsxs(Kr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.35+Q*.06,duration:.3},onClick:()=>Ce({type:"transactionType",id:A.id,label:A.label,color:A.color}),whileTap:{scale:.98},children:[e.jsx(Nr,{$color:A.color}),e.jsxs(zr,{children:[e.jsxs(Wr,{children:[e.jsx(Rr,{children:A.label}),e.jsx(Hr,{children:te(A.amount)})]}),e.jsxs(Yr,{children:[e.jsxs(Vr,{$color:A.color,children:[A.percent.toFixed(1),"%"]}),e.jsx(qr,{children:e.jsx(Gr,{$color:A.color,initial:{width:0},animate:{width:`${A.percent}%`},transition:{delay:.45+Q*.06,duration:.4,ease:pe}})}),e.jsxs(Ur,{children:[A.count," transactions"]})]})]})]},A.label))})]})]})})()]})},"insights"):e.jsx(x0,{as:y.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:pe},children:e.jsx(h0,{children:fe.length===0?e.jsxs(D0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:pe},children:[e.jsx(Hi,{children:e.jsx(og,{})}),e.jsx(Yi,{children:"No Transactions"}),e.jsx(Vi,{children:et>0?"Try adjusting your filters":"Add your first transaction"})]}):Xn.map(T=>e.jsxs(g0,{children:[e.jsx(f0,{children:fg(T)}),e.jsx(ie,{mode:"popLayout",children:Qe[T].map(W=>{var Q;const Z=Nn(W.accountId),A=W.categoryId?Yd(p,W.categoryId):void 0;return e.jsxs(m0,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:pe},layout:!0,children:[e.jsx(v0,{$type:W.type,children:gg(W.type)}),e.jsxs(y0,{children:[e.jsxs(b0,{children:[W.description,A&&e.jsx(S0,{children:A.name})]}),e.jsx(j0,{children:(Q=Z==null?void 0:Z.name)==null?void 0:Q.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(w0,{children:[e.jsxs(k0,{$positive:io(W.type),children:[io(W.type)?"+":"-",te(W.amount)]}),e.jsxs(C0,{children:[e.jsx(Ri,{type:"button",onClick:()=>L(W),"aria-label":"Edit transaction",whileTap:{scale:.95},children:e.jsx(cg,{})}),e.jsx(Ri,{$danger:!0,type:"button",onClick:()=>sn(W.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(sg,{})})]})]})]},W.id)})})]},T))})},"transactions")})]});case"add":return e.jsx(q0,{children:e.jsx(Rp,{onAddTransaction:Zn,defaultDate:t,categories:p})});case"manage":return e.jsxs(Y0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsxs(Jr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:pe},children:[e.jsx(Xr,{children:"Settings"}),e.jsxs(Ki,{children:[e.jsxs(Zr,{type:"button",onClick:()=>f(!0),whileTap:{scale:.98},children:[e.jsx(Qr,{$color:"#007AFF",children:e.jsx(ps,{})}),e.jsxs(ea,{children:[e.jsx(ta,{children:"Balances & Limits"}),e.jsx(na,{children:"Configure initial balances and credit limits"})]}),e.jsx(Ji,{children:e.jsx(ro,{})})]}),e.jsxs(Zr,{type:"button",onClick:()=>w(!0),whileTap:{scale:.98},children:[e.jsx(Qr,{$color:"#FF9500",children:e.jsx(lg,{})}),e.jsxs(ea,{children:[e.jsx(ta,{children:"Categories"}),e.jsx(na,{children:"Organize your transactions"})]}),e.jsx(Xi,{children:p.length}),e.jsx(Ji,{children:e.jsx(ro,{})})]})]})]}),e.jsxs(Jr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:pe},children:[e.jsx(Xr,{children:"Data"}),e.jsxs(V0,{children:[e.jsxs(Zi,{type:"button",$variant:"export",onClick:Et,whileTap:{scale:.97},children:[e.jsx(Qi,{$color:"#34C759",children:e.jsx(Z0,{})}),e.jsx(eo,{children:"Export"}),e.jsx(to,{children:"Save backup file"})]}),e.jsxs(Zi,{type:"button",$variant:"import",onClick:cn,whileTap:{scale:.97},children:[e.jsx(Qi,{$color:"#007AFF",children:e.jsx(Q0,{})}),e.jsx(eo,{children:"Import"}),e.jsx(to,{children:"Restore from file"})]})]})]}),e.jsxs(Jr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:pe},children:[e.jsx(Xr,{children:"About"}),e.jsx(Ki,{children:e.jsxs(Zr,{as:"div",style:{cursor:"default"},children:[e.jsx(Qr,{$color:"#8E8E93",children:e.jsx(eg,{})}),e.jsxs(ea,{children:[e.jsx(ta,{children:"Transactions"}),e.jsx(na,{children:"Total records stored"})]}),e.jsx(Xi,{children:a.length})]})})]})]})}};return e.jsxs(e.Fragment,{children:[e.jsx(Ph,{children:e.jsxs(Eh,{children:[e.jsx(Nh,{children:e.jsx($u,{selectedDate:t,onDateChange:n})}),e.jsx(zh,{children:lt.map(j=>e.jsx(Wh,{$active:v===j.id,onClick:()=>ye(j.id),whileTap:{scale:.98},children:j.label},j.id))})]})}),e.jsxs(Mh,{variants:xg,initial:"hidden",animate:"visible",children:[e.jsx(Hh,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:He,children:e.jsxs(bo,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(Rh,{}),e.jsx(Yh,{style:{flex:1},children:e.jsx(ie,{mode:"wait",custom:F,children:e.jsx(Vh,{custom:F,variants:hg,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:ar()},v)})})]})}),e.jsx(U0,{ref:O,type:"file",accept:".json",onChange:ln}),e.jsx(Rx,{isOpen:h,onClose:()=>f(!1),initialBalances:o,initialCCBills:s,ccLimits:u,onSave:rr}),e.jsx(mh,{isOpen:b,onClose:()=>w(!1),categories:p,onSave:er}),e.jsx(Fh,{isOpen:!!k,onClose:()=>L(null),transaction:k,categories:p,onSave:Qn}),e.jsx(ie,{children:ue&&e.jsx(T0,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:()=>Ce(null),children:e.jsxs($0,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",damping:25,stiffness:300},onClick:j=>j.stopPropagation(),children:[e.jsxs(I0,{children:[e.jsxs(L0,{children:[e.jsx(_0,{$color:ue.color}),e.jsx(A0,{children:ue.label})]}),e.jsx(O0,{onClick:()=>Ce(null),whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx(B0,{children:gt.length===0?e.jsx(H0,{children:"No transactions found"}):e.jsxs(e.Fragment,{children:[e.jsxs(F0,{children:[e.jsxs(Ui,{children:[e.jsx(qi,{children:gt.length}),e.jsx(Gi,{children:"Transactions"})]}),e.jsxs(Ui,{children:[e.jsx(qi,{$color:ue.color,children:te(gt.reduce((j,M)=>j+M.amount,0))}),e.jsx(Gi,{children:"Total Amount"})]})]}),e.jsx(M0,{children:gt.map((j,M)=>{var T;const U=Nn(j.accountId),z=Ne.includes(j.type);return e.jsxs(P0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:M*.03,duration:.2},children:[e.jsx(E0,{$positive:z,children:z?e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}):e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"18 15 12 9 6 15"})})}),e.jsxs(N0,{children:[e.jsx(z0,{children:j.description}),e.jsxs(W0,{children:[e.jsx("span",{children:(T=U==null?void 0:U.name)==null?void 0:T.replace(" Credit Card"," CC").replace(" Bank","")}),e.jsx("span",{children:"•"}),e.jsx("span",{children:new Date(j.date).toLocaleDateString("en-IN",{day:"numeric",month:"short"})})]})]}),e.jsxs(R0,{$positive:z,children:[z?"+":"-",te(j.amount)]})]},j.id)})})]})})]})})})]})]})},xs=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),vg=async(t,n,a,r=48)=>{try{const o=await xs(),c=Math.min(n,a)*.03,s=n-r-c,l=a-r-c;t.globalAlpha=.7,t.drawImage(o,s,l,r,r),t.globalAlpha=1}catch(o){console.warn("Failed to load watermark logo:",o)}},va=(t,n,a)=>{const r=[],o=l=>{const u=[];let d=l;for(;d.length>0;){let p=d.length;for(;p>0&&t.measureText(d.slice(0,p)).width>a;)p--;p=Math.max(1,p);const g=d.slice(0,p),h=g.lastIndexOf("/"),f=g.lastIndexOf("-"),b=g.lastIndexOf(".");let w=p;const k=[h,f,b].filter(L=>L>0&&L<p-1);k.length>0&&(w=Math.max(...k)+1),u.push(d.slice(0,w)),d=d.slice(w)}return u},c=n.split(" ");let s="";for(const l of c)if(t.measureText(l).width>a){s&&(r.push(s),s="");const d=o(l);for(let p=0;p<d.length;p++)p<d.length-1?r.push(d[p]):s=d[p]}else{const d=s?`${s} ${l}`:l;t.measureText(d).width>a&&s?(r.push(s),s=l):s=d}return s&&r.push(s),r},yg=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:o,backgroundColor:c,alignment:s,aspectRatio:l,padding:u}=t,d=document.createElement("canvas");d.width=l.width,d.height=l.height;const p=d.getContext("2d");if(!p)throw new Error("Failed to get canvas context");p.fillStyle=c,p.fillRect(0,0,d.width,d.height);const g=a*(l.width/1080);p.font=`600 ${g}px ${r}`,p.fillStyle=o;const h=u*(l.width/1080),f=d.width-h*2,b=n.split(`
`),w=[];for(const R of b)if(R.trim()==="")w.push("");else{const O=va(p,R,f);w.push(...O)}const k=g*1.4,L=w.length*k;let v=(d.height-L)/2+g;p.textAlign=s;let $;switch(s){case"left":$=h;break;case"right":$=d.width-h;break;default:$=d.width/2}for(const R of w)R!==""&&p.fillText(R,$,v),v+=k;const F=Math.min(d.width,d.height)*.06;return await vg(p,d.width,d.height,F),d.toDataURL("image/png",1)},bg=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:o}=t,c=document.createElement("canvas");c.width=a.width,c.height=a.height;const s=c.getContext("2d");if(!s)throw new Error("Failed to get canvas context");const l=a.width/1080,u=a.height>a.width,d=r==="#000000"?"#ffffff":"#000000",p=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";s.fillStyle=r,s.fillRect(0,0,c.width,c.height);const g=64*l,h=c.width-g*2,f=20*l,b=36*l,w=(u?44:40)*l,k=(u?24:22)*l,L=18*l,v=w*1.25,$=k*1.45,F=u?5:4,R=u?4:3;s.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const O=va(s,n.title,h),P=O.slice(0,F);if(O.length>F&&P.length>0){const J=P[P.length-1];J.endsWith("...")||(P[P.length-1]=J.slice(0,-3)+"...")}s.font=`400 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`;const E=n.description?va(s,n.description,h):[],H=E.slice(0,R);if(E.length>R&&H.length>0){const J=H[H.length-1];J.endsWith("...")||(H[H.length-1]=J.slice(0,-3)+"...")}const I=b+f,D=P.length*v,N=H.length>0?f+H.length*$:0,Y=I+D+N,C=Math.min(c.width,c.height)*.045,m=g+C+16*l,S=c.height-m-g,_=S-Y-f*2;let ce=0;if(n.image&&_>100*l){const J=u?c.width*.5:c.width*.4,$e=120*l;ce=Math.min(J,Math.max($e,_))}const ae=ce>0?f+ce:0,oe=Y+ae;let ne=g+Math.max(0,(S-oe)/2);if(n.favicon)try{const J=await so(n.favicon);s.save(),s.beginPath(),s.arc(g+b/2,ne+b/2,b/2,0,Math.PI*2),s.closePath(),s.clip(),s.drawImage(J,g,ne,b,b),s.restore()}catch{s.fillStyle=o,s.beginPath(),s.arc(g+b/2,ne+b/2,b/2,0,Math.PI*2),s.fill()}n.siteName&&(s.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=p,s.textAlign="left",s.textBaseline="middle",s.fillText(n.siteName,g+b+10*l,ne+b/2)),ne+=b+f,s.font=`700 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=d,s.textAlign="left",s.textBaseline="top";for(const J of P)s.fillText(J,g,ne),ne+=v;if(H.length>0){ne+=f,s.font=`400 ${k}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=p;for(const J of H)s.fillText(J,g,ne),ne+=$}if(n.image&&ce>0){ne+=f;try{const J=await so(n.image),$e=h;s.save(),jg(s,g,ne,$e,ce,10*l),s.clip();const ue=J.width/J.height,Ce=$e/ce;let ye=0,He=0,Ee=J.width,Le=J.height;ue>Ce?(Ee=J.height*Ce,ye=(J.width-Ee)/2):(Le=J.width/Ce,He=(J.height-Le)/2),s.drawImage(J,ye,He,Ee,Le,g,ne,$e,ce),s.restore()}catch{}}const we=c.height-g;s.font=`500 ${L}px -apple-system, BlinkMacSystemFont, monospace`,s.fillStyle=o;const ge=h-C-16*l;let ke=n.url;for(;s.measureText(ke).width>ge&&ke.length>20;)ke=ke.slice(0,-4)+"...";s.textAlign="left",s.textBaseline="middle",s.fillText(ke,g,we-C/2);try{const J=await xs();s.globalAlpha=.7,s.drawImage(J,c.width-g-C,we-C,C,C),s.globalAlpha=1}catch{}return c.toDataURL("image/png",1)},so=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),jg=(t,n,a,r,o,c)=>{t.beginPath(),t.moveTo(n+c,a),t.lineTo(n+r-c,a),t.quadraticCurveTo(n+r,a,n+r,a+c),t.lineTo(n+r,a+o-c),t.quadraticCurveTo(n+r,a+o,n+r-c,a+o),t.lineTo(n+c,a+o),t.quadraticCurveTo(n,a+o,n,a+o-c),t.lineTo(n,a+c),t.quadraticCurveTo(n,a,n+c,a),t.closePath()},wg=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},kg=async t=>{var o,c;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const s=`https://api.microlink.io?url=${encodeURIComponent(t)}`,l=await fetch(s);if(!l.ok)return r;const u=await l.json();return u.status==="success"&&u.data?{title:u.data.title||a,description:u.data.description||"",image:((o=u.data.image)==null?void 0:o.url)||null,siteName:u.data.publisher||a,url:t,favicon:((c=u.data.logo)==null?void 0:c.url)||r.favicon}:r}catch(s){return console.warn("Failed to fetch URL metadata:",s),r}},co=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],Cg='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',Sg=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},Dg=i.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,Tg=i.div`
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
`,$g=i.div`
  width: 100%;
  max-width: 600px;
`,Ig=i.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,Lg=i.div`
  position: absolute;
  inset: 0;
`,_g=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,Ag=i(y.div)`
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
`,Og=i.div`
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
`,Bg=i.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Jt=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Xt=i.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,Fg=i.textarea`
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
`,lo=i.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,uo=i.button`
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
`,Mg=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Pg=i.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,Eg=i.input`
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
`,Ng=i.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,zg=i(y.button)`
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
`,Wg=i(y.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Rg=i.input`
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
`,Hg=i.textarea`
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
`,Yg=i(y.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,Vg=i(y.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,Ug=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),qg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),Gg=()=>{const{isDark:t}=ba(),[n,a]=x.useState(""),[r,o]=x.useState(64),[c,s]=x.useState("left"),[l,u]=x.useState(co[1]),[d,p]=x.useState(null),[g,h]=x.useState(!1),[f,b]=x.useState(null),[w,k]=x.useState(""),[L,v]=x.useState(""),[$,F]=x.useState(!1),[R,O]=x.useState(null),P=x.useMemo(()=>Sg(n),[n]),E=t?"#000000":"#ffffff",H=t?"#ffffff":"#000000",I=`${l.height/l.width*100}%`,D=x.useCallback(async()=>{if(!(!P||!n.trim())){F(!0),O(null),p(null);try{const m=await kg(n.trim());b(m),k(m.title),v(m.description)}catch{O("Unable to fetch URL preview")}F(!1)}},[n,P]),N=x.useCallback(async()=>{if(!n.trim()||P){P||p(null);return}h(!0);try{const m=await yg({text:n.trim(),fontSize:r,fontFamily:Cg,textColor:H,backgroundColor:E,alignment:c,aspectRatio:l,padding:80});p(m)}catch(m){console.error("Preview generation failed:",m)}h(!1)},[n,P,r,c,l,E,H]),Y=x.useCallback(async()=>{if(f){h(!0);try{const m=await bg({metadata:{...f,title:w||f.title,description:L||f.description},aspectRatio:l,backgroundColor:E,accentColor:"#2A9D8F"});p(m)}catch(m){console.error("URL preview generation failed:",m)}h(!1)}},[f,w,L,l,E]);x.useEffect(()=>{if(P)return;const m=setTimeout(N,200);return()=>clearTimeout(m)},[N,P]),x.useEffect(()=>{P?D():(b(null),k(""),v(""),O(null))},[P,D]),x.useEffect(()=>{f&&Y()},[f,w,L,l,Y]);const C=()=>{if(d){const _=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;wg(d,_)}};return e.jsxs(Dg,{children:[e.jsx(Tg,{children:e.jsx($g,{children:e.jsx(Ig,{$bgColor:E,$paddingBottom:I,children:e.jsxs(Lg,{children:[d&&e.jsx(_g,{src:d,alt:"Preview"}),e.jsx(ie,{children:!d&&e.jsxs(Ag,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(qg,{}),e.jsx("span",{children:P?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(Og,{children:e.jsxs(Bg,{children:[e.jsxs(Jt,{children:[e.jsx(Xt,{children:"Content"}),e.jsx(Fg,{value:n,onChange:m=>a(m.target.value),onContextMenu:m=>m.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),P?e.jsxs(e.Fragment,{children:[$&&e.jsx(Jt,{style:{alignItems:"center"},children:e.jsx(Vg,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),R&&e.jsx(Yg,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:R}),f&&e.jsxs(Wg,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(Xt,{children:"Edit Details"}),e.jsx(Rg,{value:w,onChange:m=>k(m.target.value),placeholder:"Title"}),e.jsx(Hg,{value:L,onChange:m=>v(m.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Jt,{children:[e.jsx(Xt,{children:"Font Size"}),e.jsxs(Mg,{children:[e.jsx(Pg,{children:e.jsx(Eg,{type:"range",min:"24",max:"120",value:r,onChange:m=>o(Number(m.target.value))})}),e.jsx(Ng,{children:r})]})]}),e.jsxs(Jt,{children:[e.jsx(Xt,{children:"Alignment"}),e.jsx(lo,{children:["left","center","right"].map(m=>e.jsx(uo,{$active:c===m,onClick:()=>s(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),e.jsxs(Jt,{children:[e.jsx(Xt,{children:"Format"}),e.jsx(lo,{children:co.map(m=>e.jsx(uo,{$active:l.id===m.id,onClick:()=>u(m),children:m.name},m.id))})]}),e.jsxs(zg,{onClick:C,disabled:!d||g,whileTap:{scale:.98},children:[e.jsx(Ug,{}),"Download Image"]})]})})]})},Kg=i(y.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,Jg={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},Xg=()=>e.jsx(Kg,{variants:Jg,initial:"hidden",animate:"visible",children:e.jsx(Gg,{})}),Zg=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},Qg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),ef=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),tf=i.div`
  min-height: 100vh;
  position: relative;
`,nf=i.main`
  position: relative;
  z-index: 1;
`,rf=i.a`
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
`,af=Ft`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,po=i.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,xo=i.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${af} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ho=i.p`
  color: var(--text-secondary);
  font-size: 15px;
`,of=i.button`
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
`,sf=()=>{const t=ws(),n=ks();return x.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function cf(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=_s(),o=x.useMemo(()=>Zg()?Qg:ef,[]);return n||!t&&!a?e.jsxs(po,{children:[e.jsx(xo,{children:e.jsx(o,{})}),e.jsx(ho,{children:"Authenticating..."})]}):a&&!t?e.jsxs(po,{children:[e.jsx(xo,{style:{animation:"none",opacity:1},children:e.jsx(o,{})}),e.jsx(ho,{children:"Authentication required to continue"}),e.jsx(of,{onClick:r,children:"Try Again"})]}):e.jsxs(tf,{children:[e.jsx(sf,{}),e.jsx(rf,{href:"#main-content",children:"Skip to main content"}),e.jsx(Fs,{}),e.jsx(Vs,{}),e.jsx(nf,{id:"main-content",children:e.jsxs(bs,{children:[e.jsx(zt,{path:"/",element:e.jsx(oc,{})}),e.jsx(zt,{path:"/tax-manager",element:e.jsx(il,{})}),e.jsx(zt,{path:"/expense-manager",element:e.jsx(mg,{})}),e.jsx(zt,{path:"/canvas-manager",element:e.jsx(Xg,{})}),e.jsx(zt,{path:"/tax-calculator",element:e.jsx(js,{to:"/tax-manager",replace:!0})})]})})]})}function lf(){return e.jsx(ys,{basename:"/tools",children:e.jsx(Ss,{children:e.jsxs(Ls,{children:[e.jsx(As,{}),e.jsx(cf,{})]})})})}fo(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(lf,{})}));
