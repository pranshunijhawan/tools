import{j as e,m as y,A as ie}from"./vendor-animation-IVPYdfZu.js";import{a as po,r as x,L as va,B as fs,R as ms,b as Mt,N as vs,u as ys,c as bs}from"./vendor-react-DST-UJPA.js";import{f as js,d as i,m as Lt,l as it}from"./vendor-styles-CTnQ9FWC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();var xo,Ea=po;xo=Ea.createRoot,Ea.hydrateRoot;const ho=x.createContext({isDark:!0,toggleTheme:()=>{}}),ws=({children:t})=>{const[n,a]=x.useState(()=>{if(typeof window<"u"){const o=localStorage.getItem("theme");return o?o==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}return!0});x.useEffect(()=>{document.documentElement.setAttribute("data-theme",n?"dark":"light"),localStorage.setItem("theme",n?"dark":"light")},[n]),x.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)"),c=s=>{localStorage.getItem("theme")||a(s.matches)};return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]);const r=()=>a(!n);return e.jsx(ho.Provider,{value:{isDark:n,toggleTheme:r},children:t})},ya=()=>{const t=x.useContext(ho);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},go=x.createContext(null),lr="tools-auth-session",dr="tools-webauthn-credential",ks=()=>!!(window.PublicKeyCredential&&typeof window.PublicKeyCredential=="function"),Cs=async()=>{if(!ks())return!1;try{return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()}catch{return!1}},ur=()=>{const t=new Uint8Array(32);return crypto.getRandomValues(t),t},Ss=t=>{const n=new Uint8Array(t);let a="";return n.forEach(r=>a+=String.fromCharCode(r)),btoa(a)},Ds=t=>{const n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return a.buffer},Ts=({children:t})=>{const[n,a]=x.useState(!1),[r,o]=x.useState(!0),[c,s]=x.useState(!1),l=x.useRef(!1),u=async()=>{try{const f={challenge:ur(),rp:{name:"pranshunijhawan.dev",id:window.location.hostname},user:{id:ur(),name:"auth@pranshunijhawan.dev",displayName:"pranshunijhawan.dev"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{authenticatorAttachment:"platform",userVerification:"required",residentKey:"preferred"},timeout:6e4,attestation:"none"},b=await navigator.credentials.create({publicKey:f});return b?(localStorage.setItem(dr,Ss(b.rawId)),!0):!1}catch(h){return console.error("Registration failed:",h),!1}},d=async()=>{try{const h=localStorage.getItem(dr),b={challenge:ur(),timeout:6e4,userVerification:"required",rpId:window.location.hostname,...h&&{allowCredentials:[{type:"public-key",id:Ds(h),transports:["internal"]}]}};return!!await navigator.credentials.get({publicKey:b})}catch(h){return console.error("Authentication failed:",h),!1}},p=x.useCallback(async()=>{o(!0),s(!1);const h=sessionStorage.getItem(lr);if(h)try{const{timestamp:b}=JSON.parse(h);if(Date.now()-b<24*60*60*1e3){a(!0),o(!1);return}}catch{}if(!await Cs()){a(!0),sessionStorage.setItem(lr,JSON.stringify({timestamp:Date.now()})),o(!1);return}try{const b=localStorage.getItem(dr);let j=!1;b?j=await d():j=await u(),j?(a(!0),sessionStorage.setItem(lr,JSON.stringify({timestamp:Date.now()}))):s(!0)}catch{s(!0)}o(!1)},[]);x.useEffect(()=>{l.current||(l.current=!0,p())},[p]);const g=x.useCallback(()=>{p()},[p]);return e.jsx(go.Provider,{value:{isAuthenticated:n,isLoading:r,authFailed:c,retryAuth:g},children:t})},$s=()=>{const t=x.useContext(go);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Is=js`
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
`,Ls=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`,_s=i.div`
  position: absolute;
  inset: 0;
  background: ${({$isDark:t})=>t?`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.05) 0%, transparent 50%)`:`radial-gradient(ellipse 80% 50% at 50% -10%, rgba(42, 157, 143, 0.04) 0%, transparent 50%),
       radial-gradient(ellipse 60% 40% at 100% 100%, rgba(67, 97, 165, 0.03) 0%, transparent 50%)`};
  pointer-events: none;
`,As=()=>{const{isDark:t}=ya();return e.jsx(Ls,{children:e.jsx(_s,{$isDark:t})})},Os=i(y.nav)`
  position: fixed;
  top: auto;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
`,Fs=i.div`
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
`,Bs=i(va)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: var(--radius-md);
  transition: background var(--timing-small) var(--ease-standard);

  &:hover {
    background: var(--glass-bg-hover);
  }
`,Ms=i.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-sm);
`,Ps=i.div`
  width: 1px;
  height: 24px;
  background: var(--border);
`,Es=i(y.button)`
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
`,Ns=i(y.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,zs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),Ws=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Rs=()=>{const{isDark:t,toggleTheme:n}=ya();return e.jsx(Os,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:20,delay:.1},children:e.jsxs(Fs,{children:[e.jsx(Bs,{to:"/","aria-label":"Go to homepage",children:e.jsx(Ms,{src:"/tools/images/logo-optimized.webp",alt:"Tools"})}),e.jsx(Ps,{}),e.jsx(Es,{onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":t?"Switch to light mode":"Switch to dark mode",children:e.jsx(ie,{mode:"wait",children:e.jsx(Ns,{initial:{opacity:0,rotate:-90,scale:.5},animate:{opacity:1,rotate:0,scale:1},exit:{opacity:0,rotate:90,scale:.5},transition:{duration:.2},children:t?e.jsx(Ws,{}):e.jsx(zs,{})},t?"moon":"sun")})})]})})},Hs=i(y.div)`
  position: relative;
`,Ys=i(va)`
  display: block;
  text-decoration: none;
  color: inherit;
`,fo=i(y.div)`
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
`,Vs=i(y.div)`
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

  ${fo}:hover &::before {
    opacity: 0.3;
  }
`,Us=i.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,qs={hidden:{opacity:0,y:40,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)",transition:{type:"spring",stiffness:100,damping:20}}},Gs={hover:{y:-8,transition:{type:"spring",stiffness:400,damping:25}},tap:{scale:.98}},Ks=({title:t,icon:n,to:a})=>e.jsx(Hs,{variants:qs,whileHover:"hover",whileTap:"tap",children:e.jsx(Ys,{to:a,children:e.jsxs(fo,{variants:Gs,children:[e.jsx(Vs,{children:n}),e.jsx(Us,{children:t})]})})}),Js=i.div`
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
`,Xs=i(y.div)`
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
`,Zs={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},Qs=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}),e.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"10",x2:"8",y2:"10.01"}),e.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"10.01"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"10.01"}),e.jsx("line",{x1:"8",y1:"14",x2:"8",y2:"14.01"}),e.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"14.01"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"14.01"}),e.jsx("line",{x1:"8",y1:"18",x2:"8",y2:"18.01"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"18.01"}),e.jsx("line",{x1:"16",y1:"18",x2:"16",y2:"18.01"})]}),ec=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M1 10h22"}),e.jsx("path",{d:"M17 14h.01"})]}),tc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),nc=[{id:"tax-manager",title:"Tax Manager",icon:e.jsx(Qs,{}),to:"/tax-manager"},{id:"expense-manager",title:"Expense Manager",icon:e.jsx(ec,{}),to:"/expense-manager"},{id:"canvas-manager",title:"Canvas Manager",icon:e.jsx(tc,{}),to:"/canvas-manager"}],rc=()=>e.jsx(Js,{children:e.jsx(Xs,{variants:Zs,initial:"hidden",animate:"visible",children:nc.map(t=>e.jsx(Ks,{title:t.title,icon:t.icon,to:t.to},t.id))})}),mo=i.div`
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
`;const Fn=[{from:0,to:4e5,rate:0},{from:4e5,to:8e5,rate:5},{from:8e5,to:12e5,rate:10},{from:12e5,to:16e5,rate:15},{from:16e5,to:2e6,rate:20},{from:2e6,to:24e5,rate:25},{from:24e5,to:null,rate:30}],Na=75e3,Tt=4,ac=12e5,ic=6e4,za=5e6,Wa=10,oc=12,sc=1800;function ot(t){const n=t<0,r=Math.abs(Math.round(t)).toString();if(r.length<=3)return(n?"-":"")+r;let o="";const c=r.slice(-3),s=r.slice(0,-3);if(s.length>0){const l=[];let u=s;for(;u.length>0;)u.length>=2?(l.unshift(u.slice(-2)),u=u.slice(0,-2)):(l.unshift(u),u="");o=l.join(",")+","+c}else o=c;return(n?"-":"")+o}function V(t){return"₹"+ot(t)}function U(t){const n=t<0,a=Math.abs(t),r=Math.round(a*100)/100,[o,c]=r.toFixed(2).split(".");return(n?"-":"")+"₹"+ot(parseInt(o))+"."+c}function Ra(t){return t===null?"+":t===0?"0":t>=1e5?`${t/1e5}L`:ot(t)}function cc(t){for(let n=Fn.length-1;n>=0;n--)if(t>Fn[n].from)return Fn[n].rate;return 0}function lc(t){const n=[];let a=t,r=0;for(const o of Fn){const c=o.from,l=(o.to??1/0)-c;if(a<=0){n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:0,taxInSlab:0});continue}const u=Math.min(a,l),d=u*o.rate/100;n.push({from:c,to:o.to,rate:o.rate,taxableInSlab:u>0?u:0,taxInSlab:d}),r+=d,a-=u}return{slabs:n,totalTax:r}}function dc(t,n){if(n>za){const r=t*(1+Wa/100)*(1+Tt/100),o=n-za,s=(t+o)*(1+Tt/100),l=s<r,u=Math.min(r,s),d=u/(1+Tt/100),p=d-t,g=u-d;return{surchargeApplicable:!0,surchargeRate:Wa,surchargeAmount:p,marginalReliefApplied:l,taxAfterSurcharge:d,cess:g,totalTax:u}}else{const a=t*(Tt/100),r=t+a;return{surchargeApplicable:!1,surchargeRate:0,surchargeAmount:0,marginalReliefApplied:!1,taxAfterSurcharge:t,cess:a,totalTax:r}}}function Ha(t,n,a,r,o,c,s){const l=t*n/100,u=t-l;let d=0;o==="percentage"?d=t*c/100:o==="amount"&&(d=c);const p=t+d;let g=0,h=0;a&&(r==="percentage"?(g=l*oc/100,h=g):(g=sc*12,h=g));const f=t-h,b=s.map(pe=>({name:pe.name,amount:pe.amount*12})),j=b.reduce((pe,be)=>pe+be.amount,0),w=Math.max(0,f-Na),{slabs:$,totalTax:v}=lc(w);let D=0,F=v;w<=ac&&(D=Math.min(v,ic),F=Math.max(0,v-D));const{surchargeApplicable:z,surchargeRate:O,surchargeAmount:M,marginalReliefApplied:P,taxAfterSurcharge:W,cess:T,totalTax:S}=dc(F,w),E=g+h,Y=S,k=g+S+j,m=f-g-S-j,C=m/12,A=f>0?S/f*100:0,oe=cc(w);let ne=0,ae=d;if(d>0&&oe>0){let pe=d*oe/100;z&&(pe=pe*(1+O/100)),ne=pe*(1+Tt/100),ae=d-ne}const te=m+ae,ye=te/12;return{baseSalary:t,basicSalary:l,hra:u,bonus:d,totalEarnings:p,employeePF:g,employerPF:h,grossSalary:f,standardDeduction:Na,additionalDeductions:b,totalAdditionalDeductions:j,taxableIncome:w,slabs:$,taxBeforeSurcharge:v,surchargeApplicable:z,surchargeRate:O,surchargeAmount:M,marginalReliefApplied:P,taxAfterSurcharge:W,cessRate:Tt,cess:T,totalTax:S,rebate87A:D,totalPFDeduction:E,totalTaxDeduction:Y,totalDeductions:k,netSalaryYearly:m,netSalaryMonthly:C,effectiveTaxRate:A,bonusTaxRate:oe,bonusTaxAmount:ne,bonusAfterTax:ae,totalIncomeYearly:te,totalIncomeMonthly:ye}}function uc(t){const n=Ha(t.baseSalary,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions);let a=null;const r=t.hikePercentage||0;if(r>0){const o=t.baseSalary*(1+r/100);a=Ha(o,t.basicPercentage,t.calculatePF,t.pfType,t.bonusType,t.bonusValue,t.additionalDeductions)}return{...n,hikePercentage:r,postHike:a}}const ba="taxCalculatorInput";function pc(t){localStorage.setItem(ba,JSON.stringify(t))}function xc(){localStorage.removeItem(ba)}function vo(){const t=localStorage.getItem(ba);if(t)try{return JSON.parse(t)}catch{return null}return null}const hc={financialYear:"FY 2025-26"},gc=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Pt=i.div`
  padding: 16px;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`,Et=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`,Nt=i.div`
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
`,zt=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,fc=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 2fr 1fr;
  }
`,pt=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ya=i.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Je=i.input`
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
`,pr=i.div`
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
`,xr=i.div`
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
`,Wt=i(y.button)`
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
`,mc=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,hr=i(y.div)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`,gr=i(y.button)`
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
`,vc=i(y.button)`
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
`,yc=i.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border);
`,bc=i(y.button)`
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
`,jc=i(y.button)`
  height: 48px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
`,wc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),kc=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),Cc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Sc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),Dc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),Tc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),fr=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Mn={type:"spring",stiffness:300,damping:30,mass:.8},$c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:Mn}},Ic={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1,transition:{height:{...Mn},opacity:{duration:.2,delay:.1}}},exit:{height:0,opacity:0,transition:{height:{...Mn},opacity:{duration:.1}}}},Lc={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:Mn},exit:{opacity:0,x:-20,transition:{duration:.15}}};function mr(t){const n=t.replace(/[^\d]/g,"");return n?ot(parseInt(n)):""}function cn(t){return parseInt(t.replace(/,/g,""))||0}const _c=({onCalculate:t,onReset:n,autoCalculate:a=!1})=>{const[r,o]=x.useState(""),[c,s]=x.useState("50"),[l,u]=x.useState("percentage"),[d,p]=x.useState("none"),[g,h]=x.useState(""),[f,b]=x.useState([]),[j,w]=x.useState(""),[$,v]=x.useState(!1),D=x.useRef(!1);x.useEffect(()=>{const m=vo();m&&(o(ot(m.baseSalary)),s(m.basicPercentage.toString()),u(m.pfType),p(m.bonusType),h(m.bonusValue>0?m.bonusType==="amount"?ot(m.bonusValue):m.bonusValue.toString():""),b(m.additionalDeductions.map(C=>({name:C.name,amount:ot(C.amount)}))),w(m.hikePercentage>0?m.hikePercentage.toString():"")),v(!0)},[]),x.useEffect(()=>{$&&a&&r&&!D.current&&(D.current=!0,setTimeout(()=>{T()},100))},[$,a,r]);const F=m=>{o(mr(m))},z=m=>{h(mr(m))},O=(m,C)=>{const A=[...f];A[m].amount=mr(C),b(A)},M=()=>{b([...f,{name:"",amount:""}])},P=m=>{b(f.filter((C,A)=>A!==m))},W=(m,C)=>{const A=[...f];A[m].name=C,b(A)},T=()=>{const m={baseSalary:cn(r),basicPercentage:parseFloat(c)||50,calculatePF:!0,pfType:l,bonusType:d,bonusValue:d==="amount"?cn(g):parseFloat(g)||0,additionalDeductions:f.filter(C=>C.name&&C.amount).map(C=>({name:C.name,amount:cn(C.amount)})),hikePercentage:parseFloat(j)||0};pc(m),t(m)},S=()=>{o(""),s("50"),u("percentage"),p("none"),h(""),b([]),w(""),xc(),n==null||n()},Y=cn(r)>0,k=r||f.length>0||d!=="none"||j;return e.jsxs(gc,{variants:$c,initial:"hidden",animate:"visible",children:[e.jsxs(Pt,{children:[e.jsxs(Et,{children:[e.jsx(Nt,{$color:"#10b981",children:e.jsx(wc,{})}),e.jsx(zt,{children:"Salary Details"})]}),e.jsxs(fc,{children:[e.jsxs(pt,{children:[e.jsx(Ya,{children:"Yearly CTC *"}),e.jsx(pr,{children:e.jsx(Je,{type:"text",inputMode:"numeric",placeholder:"e.g., 10,00,000",value:r,onChange:m=>F(m.target.value)})})]}),e.jsxs(pt,{children:[e.jsx(Ya,{children:"Basic %"}),e.jsx(xr,{children:e.jsx(Je,{type:"number",inputMode:"numeric",placeholder:"50",value:c,onChange:m=>s(m.target.value),min:"0",max:"100"})})]})]})]}),e.jsxs(Pt,{children:[e.jsxs(Et,{children:[e.jsx(Nt,{$color:"#3b82f6",children:e.jsx(kc,{})}),e.jsx(zt,{children:"Provident Fund"})]}),e.jsxs(Va,{children:[e.jsx(Wt,{$active:l==="percentage",onClick:()=>u("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"12% of Basic"}),e.jsx(Wt,{$active:l==="flat",onClick:()=>u("flat"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Flat ₹1,800/mo"})]})]}),e.jsxs(Pt,{children:[e.jsxs(Et,{children:[e.jsx(Nt,{$color:"#f59e0b",children:e.jsx(Cc,{})}),e.jsx(zt,{children:"Bonus (Optional)"})]}),e.jsxs(Va,{children:[e.jsx(Wt,{$active:d==="none",onClick:()=>p("none"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"None"}),e.jsx(Wt,{$active:d==="percentage",onClick:()=>p("percentage"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Percentage"}),e.jsx(Wt,{$active:d==="amount",onClick:()=>p("amount"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Amount"})]}),e.jsx(ie,{initial:!1,children:d!=="none"&&e.jsx(y.div,{initial:"hidden",animate:"visible",exit:"exit",variants:Ic,style:{overflow:"hidden",marginTop:"12px"},children:e.jsxs(hr,{children:[e.jsx(pt,{style:{flex:1},children:d==="percentage"?e.jsx(xr,{children:e.jsx(Je,{type:"number",inputMode:"numeric",placeholder:"e.g., 10",value:g,onChange:m=>h(m.target.value)})}):e.jsx(pr,{children:e.jsx(Je,{type:"text",inputMode:"numeric",placeholder:"e.g., 1,00,000",value:g,onChange:m=>z(m.target.value)})})}),e.jsx(ie,{children:g&&e.jsx(gr,{onClick:()=>h(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(fr,{})})})]})},"bonus-input")})]}),e.jsxs(Pt,{children:[e.jsxs(Et,{children:[e.jsx(Nt,{$color:"#ec4899",children:e.jsx(Sc,{})}),e.jsx(zt,{children:"Monthly Deductions"})]}),e.jsxs(mc,{children:[e.jsx(ie,{mode:"popLayout",children:f.map((m,C)=>e.jsxs(hr,{variants:Lc,initial:"hidden",animate:"visible",exit:"exit",layout:!0,children:[e.jsx(pt,{style:{flex:1},children:e.jsx(Je,{type:"text",placeholder:"Name (e.g., Cab)",value:m.name,onChange:A=>W(C,A.target.value)})}),e.jsx(pt,{style:{flex:1},children:e.jsx(pr,{children:e.jsx(Je,{type:"text",inputMode:"numeric",placeholder:"Amount",value:m.amount,onChange:A=>O(C,A.target.value)})})}),e.jsx(gr,{onClick:()=>P(C),whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(fr,{})})]},C))}),e.jsxs(vc,{onClick:M,whileHover:{scale:1.01},whileTap:{scale:.99},children:[e.jsx(Tc,{}),"Add Deduction"]})]})]}),e.jsxs(Pt,{children:[e.jsxs(Et,{children:[e.jsx(Nt,{$color:"#8b5cf6",children:e.jsx(Dc,{})}),e.jsx(zt,{children:"Hike / Appraisal"})]}),e.jsxs(hr,{children:[e.jsx(pt,{style:{flex:1},children:e.jsx(xr,{children:e.jsx(Je,{type:"number",inputMode:"numeric",placeholder:"e.g., 15",value:j,onChange:m=>w(m.target.value),min:"0",max:"200"})})}),e.jsx(ie,{children:j&&e.jsx(gr,{onClick:()=>w(""),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(fr,{})})})]})]}),e.jsxs(yc,{children:[e.jsx(bc,{onClick:T,disabled:!Y,whileHover:Y?{scale:1.02}:{},whileTap:Y?{scale:.98}:{},children:"Calculate Tax"}),e.jsx(ie,{children:k&&e.jsx(jc,{onClick:S,initial:{opacity:0,scale:.8,width:0},animate:{opacity:1,scale:1,width:"auto"},exit:{opacity:0,scale:.8,width:0},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Reset"})})]})]})},Ac=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Xe=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Ze=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--border);
  gap: 12px;
  flex-wrap: wrap;
`,Qe=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,et=i.div`
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
`,tt=i.h3`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,nt=i.div`
  padding: 16px;
`,Rt=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ae=i.span`
  display: inline-flex;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 20px;
  background: ${({$color:t})=>t?`${t}15`:"rgba(var(--accent-rgb), 0.1)"};
  color: ${({$color:t})=>t||"var(--accent)"};
`,vr=i(y.div)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: ${({$gradient:t})=>t||"linear-gradient(135deg, #10b981 0%, #059669 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,yr=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 6px;
`,br=i.div`
  display: flex;
  background: var(--bg-tertiary);
  border-radius: 8px;
  padding: 3px;
  gap: 2px;
`,xt=i.button`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: ${({$active:t})=>t?"white":"var(--text-secondary)"};
  background: ${({$active:t})=>t?"var(--accent)":"transparent"};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
`,Oc=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ht=i.div`
  padding: 12px;
  background: var(--bg-tertiary);
  border-radius: 12px;
`,gt=i.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 4px;
`,ft=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,mt=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Ee=i.div`
  height: 1px;
  background: var(--border);
  margin: 16px 0;
`,xe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 12px;
`,he=i.span`
  font-size: 14px;
  font-weight: ${({$bold:t})=>t?"600":"400"};
  color: ${({$bold:t})=>t?"var(--text-primary)":"var(--text-secondary)"};
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`,Q=i.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({$highlight:t,$negative:n})=>t?"#10b981":n?"#ef4444":"var(--text-primary)"};
  text-align: right;
  flex-shrink: 0;
`,ke=i.div`
  text-align: right;
  flex-shrink: 0;
`,Ce=i.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-tertiary)"};
  margin-top: 2px;
`,Fc=i.div`
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
`,Re=i.div`
  font-size: 13px;
  color: ${({$highlight:t,$muted:n})=>t?"#10b981":n?"var(--text-tertiary)":"var(--text-primary)"};
  font-weight: ${({$highlight:t})=>t?"600":"500"};
  text-align: ${({$align:t})=>t||"left"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Bc=i(y.div)`
  height: 4px;
  background: ${({$color:t})=>t};
  border-radius: 2px;
  margin-top: 4px;
`,Mc=i.div`
  display: flex;
  height: 28px;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
`,Pc=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
`,Ec=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Nc=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,zc=i.div`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
`,Wc=i.span`
  font-size: 12px;
  color: var(--text-secondary);
`,Rc=i.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
`,Ht=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`,Oe=i.div`
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
`,Be=i.div`
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
`,Yt=i.div`
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
`,Hc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Yc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),e.jsx("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),e.jsx("path",{d:"M12 17.5v-11"})]}),Vc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M3 9h18"}),e.jsx("path",{d:"M9 21V9"})]}),Uc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}),e.jsx("path",{d:"M12 8v13"}),e.jsx("path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}),e.jsx("path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"})]}),Ka=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}),e.jsx("polyline",{points:"16 7 22 7 22 13"})]}),qc=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),Gc={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.1}}},rt={hidden:{opacity:0,y:15},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:30}}},Kc=({breakdown:t})=>{const[n,a]=x.useState("monthly"),r=n==="monthly"?1/12:1,o=h=>h===0?"#10b981":h<=10?"#3BB4B1":h<=20?"#4361A5":h<=25?"#6B8DD6":"#7BA7D9",c=Math.max(...t.slabs.map(h=>h.taxInSlab),1),l=(()=>{const h=n==="monthly"?.08333333333333333:1,f=[{label:"In-Hand",value:t.netSalaryYearly*h,color:"#10b981"},{label:"Tax",value:t.totalTax*h,color:"#4361A5"},{label:"PF",value:t.employeePF*h,color:"#3BB4B1"}];return t.totalAdditionalDeductions>0&&f.push({label:"Other",value:t.totalAdditionalDeductions*h,color:"#7BA7D9"}),f})(),u=l.reduce((h,f)=>h+f.value,0),d=[];t.surchargeApplicable&&d.push(`<strong>${t.surchargeRate}% surcharge</strong> applied (income > ₹50L)${t.marginalReliefApplied?" with marginal relief":""}`),t.rebate87A>0&&d.push(`<strong>Section 87A rebate</strong> of ${V(t.rebate87A)} applied`),t.effectiveTaxRate>0&&d.push(`Effective tax rate: <strong>${t.effectiveTaxRate.toFixed(1)}%</strong> of gross salary`);const p=!!t.postHike,g=t.bonus>0;return e.jsxs(Ac,{variants:Gc,initial:"hidden",animate:"visible",children:[p&&e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#3b82f6",children:e.jsx(Ka,{})}),e.jsx(tt,{children:"Base Salary (CTC)"})]}),e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsx(nt,{children:e.jsxs(Ht,{children:[e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Current"}),e.jsx(Be,{children:V(t.baseSalary)})]}),e.jsxs(Oe,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike"}),e.jsx(Be,{children:V(t.postHike.baseSalary)}),e.jsxs(Yt,{children:["+",V(t.postHike.baseSalary-t.baseSalary)]})]})]})})]}),e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#10b981",children:e.jsx(Hc,{})}),e.jsx(tt,{children:"In-Hand Salary"})]}),e.jsxs(Rt,{children:[p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(br,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsx(nt,{children:p?e.jsxs(Ht,{children:[e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Current"}),e.jsx(Be,{children:U(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]}),e.jsxs(Oe,{$highlight:!0,children:[e.jsxs(Fe,{children:["After ",t.hikePercentage,"% Hike"]}),e.jsx(Be,{children:U(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)}),e.jsxs(Yt,{children:["+",V(n==="monthly"?t.postHike.netSalaryMonthly-t.netSalaryMonthly:t.postHike.netSalaryYearly-t.netSalaryYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(vr,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:300,damping:25},children:U(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)},n),e.jsxs(yr,{children:[n==="monthly"?"Per month":"Per year"," (after all deductions)"]})]})})]}),g&&e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#f59e0b",children:e.jsx(Uc,{})}),e.jsx(tt,{children:"Bonus"})]}),p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]}),e.jsxs(nt,{children:[p?e.jsxs(e.Fragment,{children:[e.jsxs(Ht,{children:[e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Current Gross"}),e.jsx(Be,{children:V(t.bonus)})]}),e.jsxs(Oe,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike Gross"}),e.jsx(Be,{children:V(t.postHike.bonus)}),e.jsxs(Yt,{children:["+",V(t.postHike.bonus-t.bonus)]})]})]}),e.jsx(Ee,{}),e.jsxs(Ht,{children:[e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Current In-Hand"}),e.jsx(Be,{children:U(t.bonusAfterTax)})]}),e.jsxs(Oe,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike In-Hand"}),e.jsx(Be,{children:U(t.postHike.bonusAfterTax)}),e.jsxs(Yt,{children:["+",V(t.postHike.bonusAfterTax-t.bonusAfterTax)]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(vr,{$gradient:"linear-gradient(135deg, #f59e0b, #ef4444)",children:V(t.bonus)}),e.jsx(yr,{children:"Gross Bonus (before tax)"}),e.jsx(Ee,{}),e.jsxs(xe,{children:[e.jsxs(he,{children:["Tax Deducted (",t.bonusTaxRate,"%",t.surchargeApplicable?" + surcharge":""," + cess)"]}),e.jsxs(Q,{$negative:!0,children:["-",U(t.bonusTaxAmount)]})]}),e.jsxs(xe,{children:[e.jsx(he,{$bold:!0,children:"In-Hand Bonus"}),e.jsx(Q,{$highlight:!0,children:U(t.bonusAfterTax)})]})]}),e.jsx(Ee,{}),e.jsx(qa,{style:{borderLeftColor:"#f59e0b"},children:e.jsxs(Ga,{children:["Bonus is taxed at your ",e.jsxs("strong",{children:["highest slab rate (",t.bonusTaxRate,"%)"]}),t.surchargeApplicable?` + ${t.surchargeRate}% surcharge`:""," + ",t.cessRate,"% cess"]})})]})]}),g&&e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#8b5cf6",children:e.jsx(Ka,{})}),e.jsx(tt,{children:"Total Combined Income"})]}),e.jsxs(Rt,{children:[p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsx(Ae,{children:"Yearly"})]})]}),e.jsxs(nt,{children:[p?e.jsxs(Ht,{children:[e.jsxs(Oe,{children:[e.jsx(Fe,{children:"Current Total"}),e.jsx(Be,{children:U(t.totalIncomeYearly)})]}),e.jsxs(Oe,{$highlight:!0,children:[e.jsx(Fe,{children:"After Hike Total"}),e.jsx(Be,{children:U(t.postHike.totalIncomeYearly)}),e.jsxs(Yt,{children:["+",V(t.postHike.totalIncomeYearly-t.totalIncomeYearly)]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(vr,{$gradient:"linear-gradient(135deg, #8b5cf6, #3b82f6)",children:U(t.totalIncomeYearly)}),e.jsx(yr,{children:"Base salary + Bonus (after tax)"})]}),e.jsx(Ee,{}),e.jsxs(xe,{children:[e.jsx(he,{children:"Base In-Hand (Yearly)"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:U(t.netSalaryYearly)}),e.jsxs(Ce,{$positive:!0,children:["→ ",U(t.postHike.netSalaryYearly)]})]}):e.jsx(Q,{children:U(t.netSalaryYearly)})]}),e.jsxs(xe,{children:[e.jsx(he,{children:"Bonus In-Hand"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:U(t.bonusAfterTax)}),e.jsxs(Ce,{$positive:!0,children:["→ ",U(t.postHike.bonusAfterTax)]})]}):e.jsx(Q,{children:U(t.bonusAfterTax)})]}),e.jsxs(xe,{children:[e.jsx(he,{$bold:!0,children:"Total Combined"}),p?e.jsxs(ke,{children:[e.jsx(Q,{$highlight:!0,children:U(t.totalIncomeYearly)}),e.jsxs(Ce,{$positive:!0,children:["→ ",U(t.postHike.totalIncomeYearly)]})]}):e.jsx(Q,{$highlight:!0,children:U(t.totalIncomeYearly)})]})]})]}),e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#ec4899",children:e.jsx(Vc,{})}),e.jsx(tt,{children:"Summary"})]}),e.jsxs(Rt,{children:[p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(br,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(nt,{children:[e.jsxs(Oc,{children:[e.jsxs(ht,{children:[e.jsx(gt,{children:"Gross Salary"}),e.jsx(ft,{children:V(t.grossSalary*r)}),p&&e.jsxs(mt,{$positive:!0,children:["→ ",V(t.postHike.grossSalary*r)]})]}),e.jsxs(ht,{children:[e.jsx(gt,{children:"Total Tax"}),e.jsx(ft,{children:U(t.totalTax*r)}),p&&e.jsxs(mt,{children:["→ ",U(t.postHike.totalTax*r)]})]}),e.jsxs(ht,{children:[e.jsx(gt,{children:"Employee PF"}),e.jsx(ft,{children:V(t.employeePF*r)}),p&&e.jsxs(mt,{$positive:!0,children:["→ ",V(t.postHike.employeePF*r)]})]}),e.jsxs(ht,{children:[e.jsx(gt,{children:"Employer PF"}),e.jsx(ft,{children:V(t.employerPF*r)}),p&&e.jsxs(mt,{$positive:!0,children:["→ ",V(t.postHike.employerPF*r)]})]}),e.jsxs(ht,{children:[e.jsx(gt,{children:"Total PF"}),e.jsx(ft,{children:V((t.employeePF+t.employerPF)*r)}),p&&e.jsxs(mt,{$positive:!0,children:["→ ",V((t.postHike.employeePF+t.postHike.employerPF)*r)]})]}),e.jsxs(ht,{children:[e.jsx(gt,{children:"Eff. Tax Rate"}),e.jsxs(ft,{children:[t.effectiveTaxRate.toFixed(2),"%"]}),p&&e.jsxs(mt,{children:["→ ",t.postHike.effectiveTaxRate.toFixed(2),"%"]})]})]}),e.jsx(Ee,{}),e.jsxs("div",{style:{fontSize:12,fontWeight:500,color:"var(--text-secondary)",marginBottom:8},children:["Salary Distribution (",n==="monthly"?"Monthly":"Yearly",")"]}),e.jsx(Mc,{children:l.map((h,f)=>e.jsx(Pc,{$color:h.color,initial:{width:0},animate:{width:`${h.value/u*100}%`},transition:{delay:.3+f*.1,duration:.5}},f))}),e.jsx(Ec,{children:l.map((h,f)=>e.jsxs(Nc,{children:[e.jsx(zc,{$color:h.color}),e.jsx(Wc,{children:h.label}),e.jsx(Rc,{children:V(h.value)})]},f))}),d.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ee,{}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:d.map((h,f)=>e.jsx(qa,{children:e.jsx(Ga,{dangerouslySetInnerHTML:{__html:h}})},f))})]})]})]}),e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#10b981",children:e.jsx(qc,{})}),e.jsx(tt,{children:"Breakdown"})]}),e.jsxs(Rt,{children:[p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]}),e.jsxs(br,{children:[e.jsx(xt,{$active:n==="monthly",onClick:()=>a("monthly"),children:"Monthly"}),e.jsx(xt,{$active:n==="yearly",onClick:()=>a("yearly"),children:"Yearly"})]})]})]}),e.jsxs(nt,{children:[e.jsxs(xe,{children:[e.jsx(he,{children:"Base Salary (CTC)"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:V(t.baseSalary*r)}),e.jsxs(Ce,{$positive:!0,children:["→ ",V(t.postHike.baseSalary*r)]})]}):e.jsx(Q,{children:V(t.baseSalary*r)})]}),t.employerPF>0&&e.jsxs(xe,{children:[e.jsx(he,{children:"Less: Employer PF"}),p?e.jsxs(ke,{children:[e.jsxs(Q,{$negative:!0,children:["-",V(t.employerPF*r)]}),e.jsxs(Ce,{children:["→ -",V(t.postHike.employerPF*r)]})]}):e.jsxs(Q,{$negative:!0,children:["-",V(t.employerPF*r)]})]}),e.jsxs(xe,{children:[e.jsx(he,{$bold:!0,children:"Gross Salary"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:V(t.grossSalary*r)}),e.jsxs(Ce,{$positive:!0,children:["→ ",V(t.postHike.grossSalary*r)]})]}):e.jsx(Q,{children:V(t.grossSalary*r)})]}),e.jsxs(xe,{children:[e.jsx(he,{children:"Less: Standard Deduction"}),e.jsxs(Q,{$negative:!0,children:["-",V(t.standardDeduction*r)]})]}),e.jsxs(xe,{children:[e.jsx(he,{$bold:!0,children:"Taxable Income"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:V(t.taxableIncome*r)}),e.jsxs(Ce,{$positive:!0,children:["→ ",V(t.postHike.taxableIncome*r)]})]}):e.jsx(Q,{children:V(t.taxableIncome*r)})]}),e.jsx(Ee,{}),e.jsxs(xe,{children:[e.jsx(he,{children:"Less: Income Tax"}),p?e.jsxs(ke,{children:[e.jsxs(Q,{$negative:!0,children:["-",U(t.totalTax*r)]}),e.jsxs(Ce,{children:["→ -",U(t.postHike.totalTax*r)]})]}):e.jsxs(Q,{$negative:!0,children:["-",U(t.totalTax*r)]})]}),t.employeePF>0&&e.jsxs(xe,{children:[e.jsx(he,{children:"Less: Employee PF"}),p?e.jsxs(ke,{children:[e.jsxs(Q,{$negative:!0,children:["-",V(t.employeePF*r)]}),e.jsxs(Ce,{children:["→ -",V(t.postHike.employeePF*r)]})]}):e.jsxs(Q,{$negative:!0,children:["-",V(t.employeePF*r)]})]}),t.additionalDeductions.map((h,f)=>e.jsxs(xe,{children:[e.jsxs(he,{children:["Less: ",h.name]}),e.jsxs(Q,{$negative:!0,children:["-",V(h.amount*r)]})]},f)),e.jsx(Ee,{}),e.jsxs(xe,{children:[e.jsxs(he,{$bold:!0,children:["Net In-Hand (",n==="monthly"?"Monthly":"Yearly",")"]}),p?e.jsxs(ke,{children:[e.jsx(Q,{$highlight:!0,children:U(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)}),e.jsxs(Ce,{$positive:!0,children:["→ ",U(n==="monthly"?t.postHike.netSalaryMonthly:t.postHike.netSalaryYearly)]})]}):e.jsx(Q,{$highlight:!0,children:U(n==="monthly"?t.netSalaryMonthly:t.netSalaryYearly)})]})]})]}),e.jsxs(Xe,{variants:rt,children:[e.jsxs(Ze,{children:[e.jsxs(Qe,{children:[e.jsx(et,{$color:"#3b82f6",children:e.jsx(Yc,{})}),e.jsx(tt,{children:"Tax Slabs"})]}),e.jsxs(Rt,{children:[e.jsx(Ae,{children:hc.financialYear}),p&&e.jsxs(Ae,{$color:"#10b981",children:["+",t.hikePercentage,"% Hike"]})]})]}),e.jsxs(nt,{children:[e.jsxs(Fc,{children:[e.jsxs(Ua,{$header:!0,children:[e.jsx(Re,{children:"Slab"}),e.jsx(Re,{$align:"center",children:"Rate"}),e.jsx(Re,{$align:"right",children:"Amount"}),e.jsx(Re,{$align:"right",children:"Tax"})]}),e.jsx(ie,{children:t.slabs.map((h,f)=>e.jsxs(Ua,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:f*.03},children:[e.jsxs(Re,{children:[Ra(h.from)," - ",Ra(h.to),h.taxableInSlab>0&&e.jsx(Bc,{$color:o(h.rate),initial:{width:0},animate:{width:`${Math.max(h.taxInSlab/c*100,8)}%`},transition:{delay:.2+f*.03,duration:.4}})]}),e.jsxs(Re,{$align:"center",$highlight:h.rate===0,children:[h.rate,"%"]}),e.jsx(Re,{$align:"right",$muted:h.taxableInSlab===0,children:h.taxableInSlab>0?V(h.taxableInSlab):"-"}),e.jsx(Re,{$align:"right",$muted:h.taxInSlab===0,children:h.taxInSlab>0?V(h.taxInSlab):"-"})]},f))})]}),e.jsx(Ee,{}),e.jsxs(xe,{children:[e.jsx(he,{children:"Tax Before Surcharge"}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:U(t.taxBeforeSurcharge)}),e.jsxs(Ce,{children:["→ ",U(t.postHike.taxBeforeSurcharge)]})]}):e.jsx(Q,{children:U(t.taxBeforeSurcharge)})]}),t.rebate87A>0&&e.jsxs(xe,{children:[e.jsx(he,{children:"Section 87A Rebate"}),e.jsxs(Q,{$negative:!0,children:["-",V(t.rebate87A)]})]}),t.surchargeApplicable&&e.jsxs(xe,{children:[e.jsxs(he,{children:["Surcharge (",t.surchargeRate,"%)",t.marginalReliefApplied&&e.jsx(Ae,{$color:"#f59e0b",children:"Marginal Relief"})]}),p&&t.postHike.surchargeApplicable?e.jsxs(ke,{children:[e.jsx(Q,{children:U(t.surchargeAmount)}),e.jsxs(Ce,{children:["→ ",U(t.postHike.surchargeAmount)]})]}):e.jsx(Q,{children:U(t.surchargeAmount)})]}),e.jsxs(xe,{children:[e.jsxs(he,{children:["Cess (",t.cessRate,"%)"]}),p?e.jsxs(ke,{children:[e.jsx(Q,{children:U(t.cess)}),e.jsxs(Ce,{children:["→ ",U(t.postHike.cess)]})]}):e.jsx(Q,{children:U(t.cess)})]}),e.jsxs(xe,{children:[e.jsx(he,{$bold:!0,children:"Total Tax"}),p?e.jsxs(ke,{children:[e.jsx(Q,{$highlight:!0,children:U(t.totalTax)}),e.jsxs(Ce,{children:["→ ",U(t.postHike.totalTax)]})]}):e.jsx(Q,{$highlight:!0,children:U(t.totalTax)})]})]})]})]})},Jc=i(y.div)`
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
`,Xc=i.div`
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
`,Zc=i(y.div)`
  min-width: 0;

  @media (min-width: 1024px) {
    position: sticky;
    top: var(--space-lg);
  }
`,Qc=i(y.div)`
  min-width: 0;
  scroll-margin-top: var(--space-lg);

  @media (max-width: 640px) {
    scroll-margin-top: var(--space-md);
  }
`,el={type:"spring",stiffness:300,damping:30,mass:.8},tl={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},Ja={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:el}},nl=()=>{const[t,n]=x.useState(null),[a,r]=x.useState(!1);x.useEffect(()=>{const s=vo();s&&s.baseSalary>0&&r(!0)},[]);const o=x.useCallback(s=>{const l=uc(s);n(l),window.innerWidth<1024&&setTimeout(()=>{var u;(u=document.getElementById("results"))==null||u.scrollIntoView({behavior:"smooth"})},100)},[]),c=x.useCallback(()=>{n(null)},[]);return e.jsx(Jc,{variants:tl,initial:"hidden",animate:"visible",children:e.jsx(mo,{$maxWidth:"wide",children:e.jsxs(Xc,{children:[e.jsx(Zc,{variants:Ja,children:e.jsx(_c,{onCalculate:o,onReset:c,autoCalculate:a})}),e.jsx(Qc,{id:"results",variants:Ja,children:t&&e.jsx(Kc,{breakdown:t},"results")})]})})})};function yo(t){var n,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(n=0;n<o;n++)t[n]&&(a=yo(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function zn(){for(var t,n,a=0,r="",o=arguments.length;a<o;a++)(t=arguments[a])&&(n=yo(t))&&(r&&(r+=" "),r+=n);return r}const rl=(t,n,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const o=Object.getOwnPropertyDescriptor(t,a),c=Object.getOwnPropertyDescriptor(n,a);!al(o,c)&&r||Object.defineProperty(t,a,c)},al=function(t,n){return t===void 0||t.configurable||t.writable===n.writable&&t.enumerable===n.enumerable&&t.configurable===n.configurable&&(t.writable||t.value===n.value)},il=(t,n)=>{const a=Object.getPrototypeOf(n);a!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,a)},ol=(t,n)=>`/* Wrapped ${t}*/
${n}`,sl=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),cl=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),ll=(t,n,a)=>{const r=a===""?"":`with ${a.trim()}() `,o=ol.bind(null,r,n.toString());Object.defineProperty(o,"name",cl);const{writable:c,enumerable:s,configurable:l}=sl;Object.defineProperty(t,"toString",{value:o,writable:c,enumerable:s,configurable:l})};function dl(t,n,{ignoreNonConfigurable:a=!1}={}){const{name:r}=t;for(const o of Reflect.ownKeys(n))rl(t,n,o,a);return il(t,n),ll(t,n,r),t}const ln=2147483647,ul=new WeakMap,jr=new WeakMap,pl=new WeakMap;function xl(t,n){const a=t.get(n);if(a){if(a.maxAge<=Date.now()){t.delete(n);return}return a}}function bo(t,{cacheKey:n,cache:a=new Map,maxAge:r}={}){if(r===0)return t;if(typeof r=="number"&&Number.isFinite(r)){if(r>ln)throw new TypeError(`The \`maxAge\` option cannot exceed ${ln}.`);if(r<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const o=function(...c){var p;const s=n?n(c):c[0],l=xl(a,s);if(l)return l.data;const u=t.apply(this,c),d=typeof r=="function"?r(...c):r;if(d!==void 0&&d!==Number.POSITIVE_INFINITY){if(!Number.isFinite(d))throw new TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(d<=0)return u;if(d>ln)throw new TypeError(`The \`maxAge\` function result cannot exceed ${ln}.`)}if(a.set(s,{data:u,maxAge:d===void 0||d===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+d}),d!==void 0&&d!==Number.POSITIVE_INFINITY){const g=setTimeout(()=>{var f;a.delete(s),(f=jr.get(o))==null||f.delete(g)},d);(p=g.unref)==null||p.call(g);const h=jr.get(o)??new Set;h.add(g),jr.set(o,h)}return u};return dl(o,t,{ignoreNonConfigurable:!0}),ul.set(o,a),pl.set(o,n??(c=>c[0])),o}function hl(t){return typeof t=="string"}function gl(t,n,a){return a.indexOf(t)===n}function fl(t){return t.toLowerCase()===t}function Xa(t){return t.indexOf(",")===-1?t:t.split(",")}function ta(t){if(!t)return t;if(t==="C"||t==="posix"||t==="POSIX")return"en-US";if(t.indexOf(".")!==-1){var n=t.split(".")[0],a=n===void 0?"":n;return ta(a)}if(t.indexOf("@")!==-1){var r=t.split("@")[0],a=r===void 0?"":r;return ta(a)}if(t.indexOf("-")===-1||!fl(t))return t;var o=t.split("-"),c=o[0],s=o[1],l=s===void 0?"":s;return"".concat(c,"-").concat(l.toUpperCase())}function ml(t){var n=t===void 0?{}:t,a=n.useFallbackLocale,r=a===void 0?!0:a,o=n.fallbackLocale,c=o===void 0?"en-US":o,s=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],u=[],d=0,p=l;d<p.length;d++){var g=p[d];u=u.concat(Xa(g))}var h=navigator.language,f=h&&Xa(h);s=s.concat(u,f)}return r&&s.push(c),s.filter(hl).map(ta).filter(gl)}var vl=bo(ml,{cacheKey:JSON.stringify});function yl(t){return vl(t)[0]||null}var jo=bo(yl,{cacheKey:JSON.stringify});function Ne(t,n,a){return function(o,c=a){const s=t(o)+c;return n(s)}}function Zt(t){return function(a){return new Date(t(a).getTime()-1)}}function Qt(t,n){return function(r){return[t(r),n(r)]}}function ce(t){if(t instanceof Date)return t.getFullYear();if(typeof t=="number")return t;const n=Number.parseInt(t,10);if(typeof t=="string"&&!Number.isNaN(n))return n;throw new Error(`Failed to get year from date: ${t}.`)}function qe(t){if(t instanceof Date)return t.getMonth();throw new Error(`Failed to get month from date: ${t}.`)}function Wn(t){if(t instanceof Date)return t.getDate();throw new Error(`Failed to get year from date: ${t}.`)}function _t(t){const n=ce(t),a=n+(-n+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const bl=Ne(ce,_t,-100),wo=Ne(ce,_t,100),ja=Zt(wo),jl=Ne(ce,ja,-100),ko=Qt(_t,ja);function Ge(t){const n=ce(t),a=n+(-n+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}const Co=Ne(ce,Ge,-10),wa=Ne(ce,Ge,10),Rn=Zt(wa),So=Ne(ce,Rn,-10),Do=Qt(Ge,Rn);function At(t){const n=ce(t),a=new Date;return a.setFullYear(n,0,1),a.setHours(0,0,0,0),a}const To=Ne(ce,At,-1),ka=Ne(ce,At,1),Hn=Zt(ka),$o=Ne(ce,Hn,-1),wl=Qt(At,Hn);function Ca(t,n){return function(r,o=n){const c=ce(r),s=qe(r)+o,l=new Date;return l.setFullYear(c,s,1),l.setHours(0,0,0,0),t(l)}}function ct(t){const n=ce(t),a=qe(t),r=new Date;return r.setFullYear(n,a,1),r.setHours(0,0,0,0),r}const Io=Ca(ct,-1),Sa=Ca(ct,1),en=Zt(Sa),Lo=Ca(en,-1),kl=Qt(ct,en);function Cl(t,n){return function(r,o=n){const c=ce(r),s=qe(r),l=Wn(r)+o,u=new Date;return u.setFullYear(c,s,l),u.setHours(0,0,0,0),t(u)}}function tn(t){const n=ce(t),a=qe(t),r=Wn(t),o=new Date;return o.setFullYear(n,a,r),o.setHours(0,0,0,0),o}const Sl=Cl(tn,1),Da=Zt(Sl),Dl=Qt(tn,Da);function _o(t){return Wn(en(t))}var fe={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Tl={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},Ta=[0,1,2,3,4,5,6],wr=new Map;function $l(t){return function(a,r){var o=a||jo();wr.has(o)||wr.set(o,new Map);var c=wr.get(o);return c.has(t)||c.set(t,new Intl.DateTimeFormat(o||void 0,t).format),c.get(t)(r)}}function Il(t){var n=new Date(t);return new Date(n.setHours(12))}function lt(t){return function(n,a){return $l(t)(n,Il(a))}}var Ll={day:"numeric"},_l={day:"numeric",month:"long",year:"numeric"},Al={month:"long"},Ol={month:"long",year:"numeric"},Fl={weekday:"short"},Bl={weekday:"long"},Ml={year:"numeric"},Pl=lt(Ll),El=lt(_l),Nl=lt(Al),Ao=lt(Ol),zl=lt(Fl),Wl=lt(Bl),Yn=lt(Ml),Rl=Ta[0],Hl=Ta[5],Za=Ta[6];function Kt(t,n){n===void 0&&(n=fe.ISO_8601);var a=t.getDay();switch(n){case fe.ISO_8601:return(a+6)%7;case fe.ISLAMIC:return(a+1)%7;case fe.HEBREW:case fe.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function Yl(t){var n=_t(t);return ce(n)}function Vl(t){var n=Ge(t);return ce(n)}function na(t,n){n===void 0&&(n=fe.ISO_8601);var a=ce(t),r=qe(t),o=t.getDate()-Kt(t,n);return new Date(a,r,o)}function Ul(t,n){n===void 0&&(n=fe.ISO_8601);var a=n===fe.GREGORY?fe.GREGORY:fe.ISO_8601,r=na(t,n),o=ce(t)+1,c,s;do c=new Date(o,0,a===fe.ISO_8601?4:1),s=na(c,n),o-=1;while(t<s);return Math.round((r.getTime()-s.getTime())/(864e5*7))+1}function st(t,n){switch(t){case"century":return _t(n);case"decade":return Ge(n);case"year":return At(n);case"month":return ct(n);case"day":return tn(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function ql(t,n){switch(t){case"century":return bl(n);case"decade":return Co(n);case"year":return To(n);case"month":return Io(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Oo(t,n){switch(t){case"century":return wo(n);case"decade":return wa(n);case"year":return ka(n);case"month":return Sa(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Gl(t,n){switch(t){case"decade":return Co(n,-100);case"year":return To(n,-10);case"month":return Io(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Kl(t,n){switch(t){case"decade":return wa(n,100);case"year":return ka(n,10);case"month":return Sa(n,12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Fo(t,n){switch(t){case"century":return ja(n);case"decade":return Rn(n);case"year":return Hn(n);case"month":return en(n);case"day":return Da(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Jl(t,n){switch(t){case"century":return jl(n);case"decade":return So(n);case"year":return $o(n);case"month":return Lo(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Xl(t,n){switch(t){case"decade":return So(n,-100);case"year":return $o(n,-10);case"month":return Lo(n,-12);default:throw new Error("Invalid rangeType: ".concat(t))}}function Qa(t,n){switch(t){case"century":return ko(n);case"decade":return Do(n);case"year":return wl(n);case"month":return kl(n);case"day":return Dl(n);default:throw new Error("Invalid rangeType: ".concat(t))}}function Zl(t,n,a){var r=[n,a].sort(function(o,c){return o.getTime()-c.getTime()});return[st(t,r[0]),Fo(t,r[1])]}function Bo(t,n,a){return a.map(function(r){return(n||Yn)(t,r)}).join(" – ")}function Ql(t,n,a){return Bo(t,n,ko(a))}function Mo(t,n,a){return Bo(t,n,Do(a))}function ed(t){return t.getDay()===new Date().getDay()}function Po(t,n){n===void 0&&(n=fe.ISO_8601);var a=t.getDay();switch(n){case fe.ISLAMIC:case fe.HEBREW:return a===Hl||a===Za;case fe.ISO_8601:case fe.GREGORY:return a===Za||a===Rl;default:throw new Error("Unsupported calendar type.")}}var Me="react-calendar__navigation";function td(t){var n=t.activeStartDate,a=t.drillUp,r=t.formatMonthYear,o=r===void 0?Ao:r,c=t.formatYear,s=c===void 0?Yn:c,l=t.locale,u=t.maxDate,d=t.minDate,p=t.navigationAriaLabel,g=p===void 0?"":p,h=t.navigationAriaLive,f=t.navigationLabel,b=t.next2AriaLabel,j=b===void 0?"":b,w=t.next2Label,$=w===void 0?"»":w,v=t.nextAriaLabel,D=v===void 0?"":v,F=t.nextLabel,z=F===void 0?"›":F,O=t.prev2AriaLabel,M=O===void 0?"":O,P=t.prev2Label,W=P===void 0?"«":P,T=t.prevAriaLabel,S=T===void 0?"":T,E=t.prevLabel,Y=E===void 0?"‹":E,k=t.setActiveStartDate,m=t.showDoubleView,C=t.view,A=t.views,oe=A.indexOf(C)>0,ne=C!=="century",ae=ql(C,n),te=ne?Gl(C,n):void 0,ye=Oo(C,n),pe=ne?Kl(C,n):void 0,be=function(){if(ae.getFullYear()<0)return!0;var se=Jl(C,n);return d&&d>=se}(),J=ne&&function(){if(te.getFullYear()<0)return!0;var se=Xl(C,n);return d&&d>=se}(),Se=u&&u<ye,De=ne&&u&&u<pe;function Ie(){k(ae,"prev")}function Te(){k(te,"prev2")}function Pe(){k(ye,"next")}function $e(){k(pe,"next2")}function we(se){var ze=function(){switch(C){case"century":return Ql(l,s,se);case"decade":return Mo(l,s,se);case"year":return s(l,se);case"month":return o(l,se);default:throw new Error("Invalid view: ".concat(C,"."))}}();return f?f({date:se,label:ze,locale:l||jo()||void 0,view:C}):ze}function Ot(){var se="".concat(Me,"__label");return e.jsxs("button",{"aria-label":g,"aria-live":h,className:se,disabled:!oe,onClick:a,style:{flexGrow:1},type:"button",children:[e.jsx("span",{className:"".concat(se,"__labelText ").concat(se,"__labelText--from"),children:we(n)}),m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"".concat(se,"__divider"),children:" – "}),e.jsx("span",{className:"".concat(se,"__labelText ").concat(se,"__labelText--to"),children:we(ye)})]}):null]})}return e.jsxs("div",{className:Me,children:[W!==null&&ne?e.jsx("button",{"aria-label":M,className:"".concat(Me,"__arrow ").concat(Me,"__prev2-button"),disabled:J,onClick:Te,type:"button",children:W}):null,Y!==null&&e.jsx("button",{"aria-label":S,className:"".concat(Me,"__arrow ").concat(Me,"__prev-button"),disabled:be,onClick:Ie,type:"button",children:Y}),Ot(),z!==null&&e.jsx("button",{"aria-label":D,className:"".concat(Me,"__arrow ").concat(Me,"__next-button"),disabled:Se,onClick:Pe,type:"button",children:z}),$!==null&&ne?e.jsx("button",{"aria-label":j,className:"".concat(Me,"__arrow ").concat(Me,"__next2-button"),disabled:De,onClick:$e,type:"button",children:$}):null]})}var $t=function(){return $t=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},$t.apply(this,arguments)},nd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function ei(t){return"".concat(t,"%")}function $a(t){var n=t.children,a=t.className,r=t.count,o=t.direction,c=t.offset,s=t.style,l=t.wrap,u=nd(t,["children","className","count","direction","offset","style","wrap"]);return e.jsx("div",$t({className:a,style:$t({display:"flex",flexDirection:o,flexWrap:l?"wrap":"nowrap"},s)},u,{children:x.Children.map(n,function(d,p){var g=c&&p===0?ei(100*c/r):null;return x.cloneElement(d,$t($t({},d.props),{style:{flexBasis:ei(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:g,marginInlineStart:g,marginInlineEnd:0}}))})}))}function rd(t,n,a){return n&&n>t?n:a&&a<t?a:t}function Jt(t,n){return n[0]<=t&&n[1]>=t}function ad(t,n){return t[0]<=n[0]&&t[1]>=n[1]}function Eo(t,n){return Jt(t[0],n)||Jt(t[1],n)}function ti(t,n,a){var r=Eo(n,t),o=[];if(r){o.push(a);var c=Jt(t[0],n),s=Jt(t[1],n);c&&o.push("".concat(a,"Start")),s&&o.push("".concat(a,"End")),c&&s&&o.push("".concat(a,"BothEnds"))}return o}function id(t){return Array.isArray(t)?t[0]!==null&&t[1]!==null:t!==null}function od(t){if(!t)throw new Error("args is required");var n=t.value,a=t.date,r=t.hover,o="react-calendar__tile",c=[o];if(!a)return c;var s=new Date,l=function(){if(Array.isArray(a))return a;var f=t.dateType;if(!f)throw new Error("dateType is required when date is not an array of two dates");return Qa(f,a)}();if(Jt(s,l)&&c.push("".concat(o,"--now")),!n||!id(n))return c;var u=function(){if(Array.isArray(n))return n;var f=t.valueType;if(!f)throw new Error("valueType is required when value is not an array of two dates");return Qa(f,n)}();ad(u,l)?c.push("".concat(o,"--active")):Eo(u,l)&&c.push("".concat(o,"--hasActive"));var d=ti(u,l,"".concat(o,"--range"));c.push.apply(c,d);var p=Array.isArray(n)?n:[n];if(r&&p.length===1){var g=r>u[0]?[u[0],r]:[r,u[0]],h=ti(g,l,"".concat(o,"--hover"));c.push.apply(c,h)}return c}function Vn(t){for(var n=t.className,a=t.count,r=a===void 0?3:a,o=t.dateTransform,c=t.dateType,s=t.end,l=t.hover,u=t.offset,d=t.renderTile,p=t.start,g=t.step,h=g===void 0?1:g,f=t.value,b=t.valueType,j=[],w=p;w<=s;w+=h){var $=o(w);j.push(d({classes:od({date:$,dateType:c,hover:l,value:f,valueType:b}),date:$}))}return e.jsx($a,{className:n,count:r,offset:u,wrap:!0,children:j})}function Un(t){var n=t.activeStartDate,a=t.children,r=t.classes,o=t.date,c=t.formatAbbr,s=t.locale,l=t.maxDate,u=t.maxDateTransform,d=t.minDate,p=t.minDateTransform,g=t.onClick,h=t.onMouseOver,f=t.style,b=t.tileClassName,j=t.tileContent,w=t.tileDisabled,$=t.view,v=x.useMemo(function(){var F={activeStartDate:n,date:o,view:$};return typeof b=="function"?b(F):b},[n,o,b,$]),D=x.useMemo(function(){var F={activeStartDate:n,date:o,view:$};return typeof j=="function"?j(F):j},[n,o,j,$]);return e.jsxs("button",{className:zn(r,v),disabled:d&&p(d)>o||l&&u(l)<o||(w==null?void 0:w({activeStartDate:n,date:o,view:$})),onClick:g?function(F){return g(o,F)}:void 0,onFocus:h?function(){return h(o)}:void 0,onMouseOver:h?function(){return h(o)}:void 0,style:f,type:"button",children:[c?e.jsx("abbr",{"aria-label":c(s,o),children:a}):a,D]})}var ra=function(){return ra=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ra.apply(this,arguments)},sd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ni="react-calendar__century-view__decades__decade";function cd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentCentury,o=t.formatYear,c=o===void 0?Yn:o,s=sd(t,["classes","currentCentury","formatYear"]),l=s.date,u=s.locale,d=[];return a&&d.push.apply(d,a),d.push(ni),_t(l).getFullYear()!==r&&d.push("".concat(ni,"--neighboringCentury")),e.jsx(Un,ra({},s,{classes:d,maxDateTransform:Rn,minDateTransform:Ge,view:"century",children:Mo(u,c,l)}))}var aa=function(){return aa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},aa.apply(this,arguments)},ri=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function ld(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringCentury,o=t.value,c=t.valueType,s=ri(t,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=Yl(n),u=l+(r?119:99);return e.jsx(Vn,{className:"react-calendar__century-view__decades",dateTransform:Ge,dateType:"decade",end:u,hover:a,renderTile:function(d){var p=d.date,g=ri(d,["date"]);return e.jsx(cd,aa({},s,g,{activeStartDate:n,currentCentury:l,date:p}),p.getTime())},start:l,step:10,value:o,valueType:c})}var ia=function(){return ia=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ia.apply(this,arguments)};function dd(t){function n(){return e.jsx(ld,ia({},t))}return e.jsx("div",{className:"react-calendar__century-view",children:n()})}var oa=function(){return oa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},oa.apply(this,arguments)},ud=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},ai="react-calendar__decade-view__years__year";function pd(t){var n=t.classes,a=n===void 0?[]:n,r=t.currentDecade,o=t.formatYear,c=o===void 0?Yn:o,s=ud(t,["classes","currentDecade","formatYear"]),l=s.date,u=s.locale,d=[];return a&&d.push.apply(d,a),d.push(ai),Ge(l).getFullYear()!==r&&d.push("".concat(ai,"--neighboringDecade")),e.jsx(Un,oa({},s,{classes:d,maxDateTransform:Hn,minDateTransform:At,view:"decade",children:c(u,l)}))}var sa=function(){return sa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},sa.apply(this,arguments)},ii=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function xd(t){var n=t.activeStartDate,a=t.hover,r=t.showNeighboringDecade,o=t.value,c=t.valueType,s=ii(t,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=Vl(n),u=l+(r?11:9);return e.jsx(Vn,{className:"react-calendar__decade-view__years",dateTransform:At,dateType:"year",end:u,hover:a,renderTile:function(d){var p=d.date,g=ii(d,["date"]);return e.jsx(pd,sa({},s,g,{activeStartDate:n,currentDecade:l,date:p}),p.getTime())},start:l,value:o,valueType:c})}var ca=function(){return ca=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ca.apply(this,arguments)};function hd(t){function n(){return e.jsx(xd,ca({},t))}return e.jsx("div",{className:"react-calendar__decade-view",children:n()})}var la=function(){return la=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},la.apply(this,arguments)},gd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},oi=function(t,n,a){if(a||arguments.length===2)for(var r=0,o=n.length,c;r<o;r++)(c||!(r in n))&&(c||(c=Array.prototype.slice.call(n,0,r)),c[r]=n[r]);return t.concat(c||Array.prototype.slice.call(n))},fd="react-calendar__year-view__months__month";function md(t){var n=t.classes,a=n===void 0?[]:n,r=t.formatMonth,o=r===void 0?Nl:r,c=t.formatMonthYear,s=c===void 0?Ao:c,l=gd(t,["classes","formatMonth","formatMonthYear"]),u=l.date,d=l.locale;return e.jsx(Un,la({},l,{classes:oi(oi([],a,!0),[fd],!1),formatAbbr:s,maxDateTransform:en,minDateTransform:ct,view:"year",children:o(d,u)}))}var da=function(){return da=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},da.apply(this,arguments)},si=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function vd(t){var n=t.activeStartDate,a=t.hover,r=t.value,o=t.valueType,c=si(t,["activeStartDate","hover","value","valueType"]),s=0,l=11,u=ce(n);return e.jsx(Vn,{className:"react-calendar__year-view__months",dateTransform:function(d){var p=new Date;return p.setFullYear(u,d,1),ct(p)},dateType:"month",end:l,hover:a,renderTile:function(d){var p=d.date,g=si(d,["date"]);return e.jsx(md,da({},c,g,{activeStartDate:n,date:p}),p.getTime())},start:s,value:r,valueType:o})}var ua=function(){return ua=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ua.apply(this,arguments)};function yd(t){function n(){return e.jsx(vd,ua({},t))}return e.jsx("div",{className:"react-calendar__year-view",children:n()})}var pa=function(){return pa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pa.apply(this,arguments)},bd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},kr="react-calendar__month-view__days__day";function jd(t){var n=t.calendarType,a=t.classes,r=a===void 0?[]:a,o=t.currentMonthIndex,c=t.formatDay,s=c===void 0?Pl:c,l=t.formatLongDate,u=l===void 0?El:l,d=bd(t,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),p=d.date,g=d.locale,h=[];return r&&h.push.apply(h,r),h.push(kr),Po(p,n)&&h.push("".concat(kr,"--weekend")),p.getMonth()!==o&&h.push("".concat(kr,"--neighboringMonth")),e.jsx(Un,pa({},d,{classes:h,formatAbbr:u,maxDateTransform:Da,minDateTransform:tn,view:"month",children:s(g,p)}))}var xa=function(){return xa=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xa.apply(this,arguments)},ci=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function wd(t){var n=t.activeStartDate,a=t.calendarType,r=t.hover,o=t.showFixedNumberOfWeeks,c=t.showNeighboringMonth,s=t.value,l=t.valueType,u=ci(t,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=ce(n),p=qe(n),g=o||c,h=Kt(n,a),f=g?0:h,b=(g?-h:0)+1,j=function(){if(o)return b+6*7-1;var w=_o(n);if(c){var $=new Date;$.setFullYear(d,p,w),$.setHours(0,0,0,0);var v=7-Kt($,a)-1;return w+v}return w}();return e.jsx(Vn,{className:"react-calendar__month-view__days",count:7,dateTransform:function(w){var $=new Date;return $.setFullYear(d,p,w),tn($)},dateType:"day",hover:r,end:j,renderTile:function(w){var $=w.date,v=ci(w,["date"]);return e.jsx(jd,xa({},u,v,{activeStartDate:n,calendarType:a,currentMonthIndex:p,date:$}),$.getTime())},offset:f,start:b,value:s,valueType:l})}var No="react-calendar__month-view__weekdays",Cr="".concat(No,"__weekday");function kd(t){for(var n=t.calendarType,a=t.formatShortWeekday,r=a===void 0?zl:a,o=t.formatWeekday,c=o===void 0?Wl:o,s=t.locale,l=t.onMouseLeave,u=new Date,d=ct(u),p=ce(d),g=qe(d),h=[],f=1;f<=7;f+=1){var b=new Date(p,g,f-Kt(d,n)),j=c(s,b);h.push(e.jsx("div",{className:zn(Cr,ed(b)&&"".concat(Cr,"--current"),Po(b,n)&&"".concat(Cr,"--weekend")),children:e.jsx("abbr",{"aria-label":j,title:j,children:r(s,b).replace(".","")})},f))}return e.jsx($a,{className:No,count:7,onFocus:l,onMouseOver:l,children:h})}var Pn=function(){return Pn=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pn.apply(this,arguments)},li=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},di="react-calendar__tile";function Cd(t){var n=t.onClickWeekNumber,a=t.weekNumber,r=e.jsx("span",{children:a});if(n){var o=t.date,c=t.onClickWeekNumber,s=t.weekNumber,l=li(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("button",Pn({},l,{className:di,onClick:function(u){return c(s,o,u)},type:"button",children:r}))}else{t.date,t.onClickWeekNumber,t.weekNumber;var l=li(t,["date","onClickWeekNumber","weekNumber"]);return e.jsx("div",Pn({},l,{className:di,children:r}))}}function Sd(t){var n=t.activeStartDate,a=t.calendarType,r=t.onClickWeekNumber,o=t.onMouseLeave,c=t.showFixedNumberOfWeeks,s=function(){if(c)return 6;var d=_o(n),p=Kt(n,a),g=d-(7-p);return 1+Math.ceil(g/7)}(),l=function(){for(var d=ce(n),p=qe(n),g=Wn(n),h=[],f=0;f<s;f+=1)h.push(na(new Date(d,p,g+f*7),a));return h}(),u=l.map(function(d){return Ul(d,a)});return e.jsx($a,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:o,onMouseOver:o,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:u.map(function(d,p){var g=l[p];if(!g)throw new Error("date is not defined");return e.jsx(Cd,{date:g,onClickWeekNumber:r,weekNumber:d},d)})})}var ha=function(){return ha=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ha.apply(this,arguments)},Dd=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Td(t){if(t)for(var n=0,a=Object.entries(Tl);n<a.length;n++){var r=a[n],o=r[0],c=r[1];if(c.includes(t))return o}return fe.ISO_8601}function $d(t){var n=t.activeStartDate,a=t.locale,r=t.onMouseLeave,o=t.showFixedNumberOfWeeks,c=t.calendarType,s=c===void 0?Td(a):c,l=t.formatShortWeekday,u=t.formatWeekday,d=t.onClickWeekNumber,p=t.showWeekNumbers,g=Dd(t,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function h(){return e.jsx(kd,{calendarType:s,formatShortWeekday:l,formatWeekday:u,locale:a,onMouseLeave:r})}function f(){return p?e.jsx(Sd,{activeStartDate:n,calendarType:s,onClickWeekNumber:d,onMouseLeave:r,showFixedNumberOfWeeks:o}):null}function b(){return e.jsx(wd,ha({calendarType:s},g))}var j="react-calendar__month-view";return e.jsx("div",{className:zn(j,p?"".concat(j,"--weekNumbers"):""),children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[f(),e.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[h(),b()]})]})})}var It=function(){return It=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},It.apply(this,arguments)},dn="react-calendar",Bn=["century","decade","year","month"],Id=["decade","year","month","day"],Ia=new Date;Ia.setFullYear(1,0,1);Ia.setHours(0,0,0,0);var Ld=new Date(864e13);function Gt(t){return t instanceof Date?t:new Date(t)}function zo(t,n){return Bn.slice(Bn.indexOf(t),Bn.indexOf(n)+1)}function _d(t,n,a){var r=zo(n,a);return r.indexOf(t)!==-1}function La(t,n,a){return t&&_d(t,n,a)?t:a}function Wo(t){var n=Bn.indexOf(t);return Id[n]}function Ad(t,n){var a=Array.isArray(t)?t[n]:t;if(!a)return null;var r=Gt(a);if(Number.isNaN(r.getTime()))throw new Error("Invalid date: ".concat(t));return r}function Ro(t,n){var a=t.value,r=t.minDate,o=t.maxDate,c=t.maxDetail,s=Ad(a,n);if(!s)return null;var l=Wo(c),u=function(){switch(n){case 0:return st(l,s);case 1:return Fo(l,s);default:throw new Error("Invalid index value: ".concat(n))}}();return rd(u,r,o)}var _a=function(t){return Ro(t,0)},Ho=function(t){return Ro(t,1)},Od=function(t){return[_a,Ho].map(function(n){return n(t)})};function Yo(t){var n=t.maxDate,a=t.maxDetail,r=t.minDate,o=t.minDetail,c=t.value,s=t.view,l=La(s,o,a),u=_a({value:c,minDate:r,maxDate:n,maxDetail:a})||new Date;return st(l,u)}function Fd(t){var n=t.activeStartDate,a=t.defaultActiveStartDate,r=t.defaultValue,o=t.defaultView,c=t.maxDate,s=t.maxDetail,l=t.minDate,u=t.minDetail,d=t.value,p=t.view,g=La(p,u,s),h=n||a;return h?st(g,h):Yo({maxDate:c,maxDetail:s,minDate:l,minDetail:u,value:d||r,view:p||o})}function Sr(t){return t&&(!Array.isArray(t)||t.length===1)}function un(t,n){return t instanceof Date&&n instanceof Date&&t.getTime()===n.getTime()}var Bd=x.forwardRef(function(n,a){var r=n.activeStartDate,o=n.allowPartialRange,c=n.calendarType,s=n.className,l=n.defaultActiveStartDate,u=n.defaultValue,d=n.defaultView,p=n.formatDay,g=n.formatLongDate,h=n.formatMonth,f=n.formatMonthYear,b=n.formatShortWeekday,j=n.formatWeekday,w=n.formatYear,$=n.goToRangeStartOnSelect,v=$===void 0?!0:$,D=n.inputRef,F=n.locale,z=n.maxDate,O=z===void 0?Ld:z,M=n.maxDetail,P=M===void 0?"month":M,W=n.minDate,T=W===void 0?Ia:W,S=n.minDetail,E=S===void 0?"century":S,Y=n.navigationAriaLabel,k=n.navigationAriaLive,m=n.navigationLabel,C=n.next2AriaLabel,A=n.next2Label,oe=n.nextAriaLabel,ne=n.nextLabel,ae=n.onActiveStartDateChange,te=n.onChange,ye=n.onClickDay,pe=n.onClickDecade,be=n.onClickMonth,J=n.onClickWeekNumber,Se=n.onClickYear,De=n.onDrillDown,Ie=n.onDrillUp,Te=n.onViewChange,Pe=n.prev2AriaLabel,$e=n.prev2Label,we=n.prevAriaLabel,Ot=n.prevLabel,se=n.returnValue,ze=se===void 0?"start":se,ge=n.selectRange,q=n.showDoubleView,nn=n.showFixedNumberOfWeeks,rn=n.showNavigation,qn=rn===void 0?!0:rn,Gn=n.showNeighboringCentury,Kn=n.showNeighboringDecade,an=n.showNeighboringMonth,Jn=an===void 0?!0:an,Xn=n.showWeekNumbers,Zn=n.tileClassName,Qn=n.tileContent,er=n.tileDisabled,Ft=n.value,_=n.view,N=x.useState(l),K=N[0],H=N[1],I=x.useState(null),R=I[0],X=I[1],B=x.useState(Array.isArray(u)?u.map(function(G){return G!==null?Gt(G):null}):u!=null?Gt(u):null),Z=B[0],tr=B[1],We=x.useState(d),nr=We[0],Ke=We[1],me=r||K||Fd({activeStartDate:r,defaultActiveStartDate:l,defaultValue:u,defaultView:d,maxDate:O,maxDetail:P,minDate:T,minDetail:E,value:Ft,view:_}),ve=function(){var G=function(){return ge&&Sr(Z)?Z:Ft!==void 0?Ft:Z}();return G?Array.isArray(G)?G.map(function(le){return le!==null?Gt(le):null}):G!==null?Gt(G):null:null}(),dt=Wo(P),L=La(_||nr,E,P),ee=zo(E,P),ut=ge?R:null,Bt=ee.indexOf(L)<ee.length-1,on=ee.indexOf(L)>0,Ma=x.useCallback(function(G){var le=function(){switch(ze){case"start":return _a;case"end":return Ho;case"range":return Od;default:throw new Error("Invalid returnValue.")}}();return le({maxDate:O,maxDetail:P,minDate:T,value:G})},[O,P,T,ze]),rr=x.useCallback(function(G,le){H(G);var ue={action:le,activeStartDate:G,value:ve,view:L};ae&&!un(me,G)&&ae(ue)},[me,ae,ve,L]),sn=x.useCallback(function(G,le){var ue=function(){switch(L){case"century":return pe;case"decade":return Se;case"year":return be;case"month":return ye;default:throw new Error("Invalid view: ".concat(L,"."))}}();ue&&ue(G,le)},[ye,pe,be,Se,L]),ar=x.useCallback(function(G,le){if(Bt){sn(G,le);var ue=ee[ee.indexOf(L)+1];if(!ue)throw new Error("Attempted to drill down from the lowest view.");H(G),Ke(ue);var Le={action:"drillDown",activeStartDate:G,value:ve,view:ue};ae&&!un(me,G)&&ae(Le),Te&&L!==ue&&Te(Le),De&&De(Le)}},[me,Bt,ae,sn,De,Te,ve,L,ee]),ir=x.useCallback(function(){if(on){var G=ee[ee.indexOf(L)-1];if(!G)throw new Error("Attempted to drill up from the highest view.");var le=st(G,me);H(le),Ke(G);var ue={action:"drillUp",activeStartDate:le,value:ve,view:G};ae&&!un(me,le)&&ae(ue),Te&&L!==G&&Te(ue),Ie&&Ie(ue)}},[me,on,ae,Ie,Te,ve,L,ee]),or=x.useCallback(function(G,le){var ue=ve;sn(G,le);var Le=ge&&!Sr(ue),_e;if(ge)if(Le)_e=st(dt,G);else{if(!ue)throw new Error("previousValue is required");if(Array.isArray(ue))throw new Error("previousValue must not be an array");_e=Zl(dt,ue,G)}else _e=Ma(G);var cr=!ge||Le||v?Yo({maxDate:O,maxDetail:P,minDate:T,minDetail:E,value:_e,view:L}):null;le.persist(),H(cr),tr(_e);var hs={action:"onChange",activeStartDate:cr,value:_e,view:L};if(ae&&!un(me,cr)&&ae(hs),te)if(ge){var gs=Sr(_e);if(!gs)te(_e||null,le);else if(o){if(Array.isArray(_e))throw new Error("value must not be an array");te([_e||null,null],le)}}else te(_e||null,le)},[me,o,Ma,v,O,P,T,E,ae,te,sn,ge,ve,dt,L]);function us(G){X(G)}function sr(){X(null)}x.useImperativeHandle(a,function(){return{activeStartDate:me,drillDown:ar,drillUp:ir,onChange:or,setActiveStartDate:rr,value:ve,view:L}},[me,ar,ir,or,rr,ve,L]);function Pa(G){var le=G?Oo(L,me):st(L,me),ue=Bt?ar:or,Le={activeStartDate:le,hover:ut,locale:F,maxDate:O,minDate:T,onClick:ue,onMouseOver:ge?us:void 0,tileClassName:Zn,tileContent:Qn,tileDisabled:er,value:ve,valueType:dt};switch(L){case"century":return e.jsx(dd,It({formatYear:w,showNeighboringCentury:Gn},Le));case"decade":return e.jsx(hd,It({formatYear:w,showNeighboringDecade:Kn},Le));case"year":return e.jsx(yd,It({formatMonth:h,formatMonthYear:f},Le));case"month":return e.jsx($d,It({calendarType:c,formatDay:p,formatLongDate:g,formatShortWeekday:b,formatWeekday:j,onClickWeekNumber:J,onMouseLeave:ge?sr:void 0,showFixedNumberOfWeeks:typeof nn<"u"?nn:q,showNeighboringMonth:Jn,showWeekNumbers:Xn},Le));default:throw new Error("Invalid view: ".concat(L,"."))}}function ps(){return qn?e.jsx(td,{activeStartDate:me,drillUp:ir,formatMonthYear:f,formatYear:w,locale:F,maxDate:O,minDate:T,navigationAriaLabel:Y,navigationAriaLive:k,navigationLabel:m,next2AriaLabel:C,next2Label:A,nextAriaLabel:oe,nextLabel:ne,prev2AriaLabel:Pe,prev2Label:$e,prevAriaLabel:we,prevLabel:Ot,setActiveStartDate:rr,showDoubleView:q,view:L,views:ee}):null}var xs=Array.isArray(ve)?ve:[ve];return e.jsxs("div",{className:zn(dn,ge&&xs.length===1&&"".concat(dn,"--selectRange"),q&&"".concat(dn,"--doubleView"),s),ref:D,children:[ps(),e.jsxs("div",{className:"".concat(dn,"__viewContainer"),onBlur:ge?sr:void 0,onMouseLeave:ge?sr:void 0,children:[Pa(),q?Pa(!0):null]})]})});const Ue=[{id:"hdfc-bank",name:"HDFC Bank",type:"bank",bank:"hdfc",color:"#004C8F"},{id:"icici-bank",name:"ICICI Bank",type:"bank",bank:"icici",color:"#F58220"},{id:"hdfc-cc",name:"HDFC Credit Card",type:"credit_card",bank:"hdfc",statementDate:12,dueDate:1,color:"#004C8F"},{id:"axis-cc",name:"Axis Credit Card",type:"credit_card",bank:"axis",statementDate:12,dueDate:1,color:"#97144D"},{id:"icici-cc",name:"ICICI Credit Card",type:"credit_card",bank:"icici",statementDate:15,dueDate:5,color:"#F58220"},{id:"yes-cc",name:"Yes Bank Credit Card",type:"credit_card",bank:"yes",statementDate:12,dueDate:1,color:"#0066B3"},{id:"liquid-fund",name:"Liquid Fund",type:"liquid_fund",bank:"hdfc",color:"#8b5cf6"}],Vo="expense-manager-transactions",Uo="expense-manager-initial-balances",qo="expense-manager-initial-cc-bills",Go="expense-manager-cc-limits",Ko="expense-manager-categories";function Aa(t,n){return t===void 0?{amount:0,type:"billed",setupDate:n}:typeof t=="number"?{amount:t,type:"billed",setupDate:n}:t}const Jo={"hdfc-cc":12,"axis-cc":12,"yes-cc":12,"icici-cc":15};function pn(t){localStorage.setItem(Vo,JSON.stringify(t))}function Md(){const t=localStorage.getItem(Vo);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function ui(t){localStorage.setItem(Uo,JSON.stringify(t))}function Pd(){const t=localStorage.getItem(Uo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function pi(t){localStorage.setItem(qo,JSON.stringify(t))}function Ed(){const t=localStorage.getItem(qo);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function xi(t){localStorage.setItem(Go,JSON.stringify(t))}function Nd(){const t=localStorage.getItem(Go);if(t)try{return JSON.parse(t)}catch{return{}}return{}}function hi(t){localStorage.setItem(Ko,JSON.stringify(t))}function zd(){const t=localStorage.getItem(Ko);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function Wd(t,n){return t.find(a=>a.id===n)}function je(t){const n=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${a}-${r}`}function Xo(t){return new Date(t+"T00:00:00")}function Rd(t){return t===je(new Date)}function Hd(t,n){if(!t.statementDate)return"";const a=Xo(n),r=a.getFullYear(),o=a.getMonth(),c=a.getDate();let s=r,l=o;c<t.statementDate&&(l-=1,l<0&&(l=11,s-=1));const u=new Date(s,l,t.statementDate);return je(u)}function gi(t,n){const a=Jo[t];if(!a)return"";const r=Xo(n),o=r.getFullYear(),c=r.getMonth(),s=r.getDate();let l=o,u=c;s<a&&(u-=1,u<0&&(u=11,l-=1));const d=new Date(l,u,a);return je(d)}function Yd(t,n,a,r){const o=gi(t.id,a),c=n.filter(v=>v.date<=a&&v.accountId===t.id),s=c.filter(v=>v.type==="credit_card_spend"&&v.date<o).reduce((v,D)=>v+D.amount,0),l=c.filter(v=>v.type==="credit_card_spend"&&v.date>=o).reduce((v,D)=>v+D.amount,0),u=c.filter(v=>v.type==="cc_payment").reduce((v,D)=>v+D.amount,0),d=Aa(r[t.id],a);let p=0,g=0;if(d.amount>0){const v=gi(t.id,d.setupDate),D=o===v,F=o>v&&new Date(o).getTime()-new Date(v).getTime()<45*24*60*60*1e3;d.type==="unbilled"?D?g=d.amount:F&&(p=d.amount):(D||F)&&(p=d.amount)}const h=l+g,f=s+p,b=h;let j=f,w=b,$=u;if($>0){const v=Math.min($,j);j-=v,$-=v}return $>0&&(w=Math.max(0,w-$)),{account:t,billDue:j,unbilled:w,totalOutstanding:j+w,cycleStart:o,cycleSpending:h}}function Vd(t,n,a,r,o={}){const c=n.filter(l=>l.date<=a&&(l.accountId===t.id||l.linkedAccountId===t.id));let s=0;if(t.type==="bank"){s=r[t.id]||0;for(const l of c)l.accountId===t.id&&(l.type==="bank_credit"?s+=l.amount:l.type==="bank_debit"&&(s-=l.amount)),l.linkedAccountId===t.id&&l.type==="cc_payment"&&(s-=l.amount),l.linkedAccountId===t.id&&l.type==="liquid_fund_credit"&&(s-=l.amount),l.linkedAccountId===t.id&&l.type==="liquid_fund_debit"&&(s+=l.amount);return{account:t,balance:s}}else if(t.type==="liquid_fund"){s=r[t.id]||0;for(const l of c)l.accountId===t.id&&(l.type==="liquid_fund_credit"?s+=l.amount:l.type==="liquid_fund_debit"&&(s-=l.amount));return{account:t,balance:s}}else{s=-Aa(o[t.id],a).amount;for(const h of c)h.accountId===t.id&&(h.type==="credit_card_spend"?s-=h.amount:h.type==="cc_payment"&&(s+=h.amount));const d=Hd(t,a),g=c.filter(h=>h.date>d&&h.accountId===t.id&&h.type==="credit_card_spend").reduce((h,f)=>h+f.amount,0);return{account:t,balance:s,pendingBill:g,totalOutstanding:Math.abs(Math.min(0,s))}}}function Ud(t,n,a,r={}){return Ue.map(o=>Vd(o,t,n,a,r))}function Zo(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function qd(t,n,a,r,o,c,s){return{id:Zo(),date:o,type:t,accountId:n,amount:a,description:r,linkedAccountId:c,categoryId:s,createdAt:new Date().toISOString()}}function re(t){const a=Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:"INR"});return t<0?`-${a}`:a}function ga(t){return Ue.find(n=>n.id===t)}function Qo(){return Ue.filter(t=>t.type==="bank")}function Oa(){return Ue.filter(t=>t.type==="credit_card")}function es(){return Ue.find(t=>t.type==="liquid_fund")}function Gd(t,n,a,r={},o=[]){const c={version:"1.2",exportedAt:new Date().toISOString(),transactions:t,initialBalances:n,initialCCBills:a,ccLimits:r,categories:o};return JSON.stringify(c,null,2)}function Kd(t,n,a,r={},o=[]){const c=Gd(t,n,a,r,o),s=new Blob([c],{type:"application/json"}),l=URL.createObjectURL(s),u=document.createElement("a"),d=new Date().toISOString().split("T")[0];u.href=l,u.download=`expense-backup-${d}.json`,document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}function Jd(t){if(!t||typeof t!="object")return!1;const n=t;if(!Array.isArray(n.transactions)||typeof n.initialBalances!="object"||n.initialBalances===null||typeof n.initialCCBills!="object"||n.initialCCBills===null||n.ccLimits!==void 0&&(typeof n.ccLimits!="object"||n.ccLimits===null))return!1;for(const a of n.transactions){if(!a||typeof a!="object")return!1;const r=a;if(typeof r.id!="string"||typeof r.date!="string"||typeof r.type!="string"||typeof r.accountId!="string"||typeof r.amount!="number"||typeof r.description!="string")return!1}return!0}function Xd(t){try{const n=JSON.parse(t);return Jd(n)?n:null}catch{return null}}const Zd=Lt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Qd=Lt`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,eu=Lt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
`,tu=Lt`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`,nu=Lt`
  from { opacity: 0; }
  to { opacity: 1; }
`,ru=i.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  animation: ${nu} 0.15s ease-out;
`,au=i.div`
  position: fixed;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  z-index: 9999;
  width: 280px;
  transform-origin: ${({$openUpward:t})=>t?"bottom right":"top right"};
  
  ${({$isClosing:t,$openUpward:n})=>t?n?it`animation: ${tu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:it`animation: ${eu} 0.15s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:n?it`animation: ${Qd} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`:it`animation: ${Zd} 0.2s cubic-bezier(0.32, 0.72, 0, 1) forwards;`}
`,iu=i.div`
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
`,Xt=({isOpen:t,onClose:n,selectedDate:a,onDateSelect:r,triggerRef:o})=>{const c=x.useRef(null),[s,l]=x.useState(!1),[u,d]=x.useState(!1),[p,g]=x.useState(!1),[h,f]=x.useState({top:0,left:0});x.useEffect(()=>{if(t&&(o!=null&&o.current)){const v=o.current.getBoundingClientRect(),D=280,F=320,z=8,M=window.innerHeight-v.bottom-z<F;g(M);let P;M?P=v.top-F-z:P=v.bottom+z;let W=v.right-D;W<8&&(W=8),W+D>window.innerWidth-8&&(W=window.innerWidth-D-8),P<8&&(P=8),f({top:P,left:W}),d(!0),l(!1)}},[t,o]);const b=x.useCallback(()=>{l(!0),setTimeout(()=>{d(!1),l(!1),n()},150)},[n]),j=x.useCallback(v=>{c.current&&!c.current.contains(v.target)&&b()},[b]);x.useEffect(()=>{if(t){const v=setTimeout(()=>{document.addEventListener("mousedown",j)},10);return()=>{clearTimeout(v),document.removeEventListener("mousedown",j)}}},[t,j]);const w=x.useCallback(v=>{v instanceof Date&&(r(je(v)),b())},[r,b]);if(!u)return null;const $=new Date(a+"T00:00:00");return po.createPortal(e.jsxs("div",{"data-calendar-portal":!0,children:[e.jsx(ru,{onClick:b}),e.jsx(au,{ref:c,$isClosing:s,$openUpward:p,$top:h.top,$left:h.left,children:e.jsx(iu,{children:e.jsx(Bd,{onChange:w,value:$,calendarType:"iso8601",prev2Label:null,next2Label:null,prevLabel:"‹",nextLabel:"›",formatShortWeekday:(v,D)=>D.toLocaleDateString("en-US",{weekday:"narrow"})})})})]}),document.body)},ou=i(y.div)`
  position: relative;
  border-radius: 16px;
  overflow: visible;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
`,su=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  gap: 12px;

  @media (max-width: 640px) {
    padding: 4px;
    gap: 8px;
  }
`,cu=i.button`
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
`,lu=i.div`
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
`,du=i(Fa)`
  height: 14px;
`,uu=i(Fa)`
  height: 32px;
  
  @media (max-width: 640px) {
    height: 28px;
  }
`,pu=i(Fa)`
  height: 22px;
  justify-content: flex-start;
  
  @media (max-width: 640px) {
    height: 18px;
  }
`,xu=i(y.span)`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
`,hu=i(y.span)`
  font-size: 32px;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`,gu=i.div`
  width: 1px;
  height: 40px;
  background: var(--border);
`,fu=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,mu=i(y.div)`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,vu=i.span`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
`,yu=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 8px;

  @media (max-width: 640px) {
    gap: 8px;
    padding-right: 6px;
  }
`,bu=i.div`
  min-width: 64px;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    min-width: 56px;
  }
`,ju=i(y.button).attrs({type:"button"})`
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
`,wu=i.div`
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
`,ku=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})}),Cu=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),xn=[.25,.1,.25,1],Su=({selectedDate:t,onDateChange:n})=>{const[a,r]=x.useState(!1),[o,c]=x.useState(1),s=x.useRef(null),l=x.useRef(t);if(l.current!==t){const v=new Date(l.current+"T00:00:00"),D=new Date(t+"T00:00:00");c(D>v?1:-1),l.current=t}const u=x.useCallback(v=>{v.preventDefault(),v.stopPropagation();const D=je(new Date),F=new Date(t+"T00:00:00"),z=new Date(D+"T00:00:00");c(z>F?1:-1),n(D)},[t,n]),d=x.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(-1);const D=new Date(t+"T00:00:00");D.setDate(D.getDate()-1),n(je(D))},[t,n]),p=x.useCallback(v=>{v.preventDefault(),v.stopPropagation(),c(1);const D=new Date(t+"T00:00:00");D.setDate(D.getDate()+1),n(je(D))},[t,n]),g=Rd(t),h=new Date(t+"T00:00:00"),f=h.getDate(),b=h.toLocaleDateString("en-US",{month:"short"}),j=h.toLocaleDateString("en-US",{weekday:"long"}),w=h.getFullYear(),$={enter:{y:o*20,opacity:0},center:{y:0,opacity:1},exit:{y:o*-20,opacity:0}};return e.jsxs(ou,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.2,ease:xn},children:[e.jsxs(su,{children:[e.jsxs(cu,{ref:s,onClick:()=>r(!0),type:"button",children:[e.jsxs(lu,{children:[e.jsx(du,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(xu,{variants:$,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:xn},children:b},b)})}),e.jsx(uu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(hu,{variants:$,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:xn},children:f},f)})})]}),e.jsx(gu,{}),e.jsxs(fu,{children:[e.jsx(pu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx(mu,{variants:$,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:xn},children:j},j)})}),e.jsx(vu,{children:w})]})]}),e.jsxs(yu,{children:[e.jsx(bu,{children:e.jsx(ie,{children:!g&&e.jsx(ju,{onClick:u,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2,ease:[.25,.1,.25,1]},children:"Today"})})}),e.jsxs(wu,{children:[e.jsx(fi,{onClick:d,whileTap:{scale:.95},children:e.jsx(ku,{})}),e.jsx(fi,{onClick:p,whileTap:{scale:.95},children:e.jsx(Cu,{})})]})]})]}),e.jsx(Xt,{isOpen:a,onClose:()=>r(!1),selectedDate:t,onDateSelect:n,triggerRef:s})]})};i(y.div)`
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

  ${({$interactive:t})=>t&&it`
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
`;i(va)`
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
  
  ${({$variant:t})=>t==="accent"?it`
    background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15), rgba(var(--blue-rgb), 0.1));
    border: 1px solid rgba(var(--accent-rgb), 0.2);
    color: var(--accent);
  `:it`
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-secondary));
    -webkit-backdrop-filter: blur(var(--glass-blur-secondary));
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
  `}
`;const Du=i.span`
  display: inline-flex;
  align-items: baseline;
  overflow: hidden;
`,Tu=i.span`
  display: inline-block;
  position: relative;
  overflow: hidden;
`,$u=i(y.span)`
  display: inline-block;
`,Iu=i.span`
  display: inline-block;
`,Lu=[.25,.1,.25,1],_u=({value:t,className:n})=>{const a=x.useMemo(()=>t.split("").map((r,o)=>({char:r,key:`${o}-${r}`,isDigit:/[0-9]/.test(r)})),[t]);return e.jsx(Du,{className:n,children:a.map(({char:r,key:o,isDigit:c},s)=>c?e.jsx(Tu,{children:e.jsx(ie,{mode:"popLayout",initial:!1,children:e.jsx($u,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{duration:.25,ease:Lu},children:r},o)})},`wrapper-${s}`):e.jsx(Iu,{children:r},`static-${s}`))})},Ve=x.memo(_u);i.h1`
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
`;const Au=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,Ou=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,Fu=i.div`
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
`,Bu=i.div`
  flex: 1;
  min-width: 0;
`,Mu=i.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`,Pu=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Eu=i.span`
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
`,Nu=i.div`
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
`,zu=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,Wu=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,Ru=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,Hu=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,Yu=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Vu=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Uu=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,qu=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,Gu=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,Ku=i(y.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Ju={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg",axis:"/tools/images/Axis.svg",yes:"/tools/images/Yes.svg"},Xu=t=>{const n=Ju[t];return n?e.jsx("img",{src:n,alt:`${t.toUpperCase()} Bank`}):null},Zu=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short"}),bi=[.25,.1,.25,1],Qu=({detailedBalance:t,index:n=0,limit:a})=>{const{account:r,billDue:o,unbilled:c,totalOutstanding:s,cycleStart:l,cycleSpending:u}=t,d=a!==void 0&&a>0,p=d?Math.max(0,a-u):0,g=d?u/a*100:0,h=d&&u>a,f=h?"#ef4444":g>80?"#f59e0b":"#10b981",b=()=>o>0?"due":c>0?"unbilled":"clear",j=()=>{switch(b()){case"due":return"Bill Due";case"unbilled":return"Unbilled";case"clear":return"Clear"}};return e.jsxs(Au,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2,ease:bi,delay:n*.02},children:[e.jsxs(Ou,{children:[e.jsx(Fu,{children:Xu(r.bank)}),e.jsxs(Bu,{children:[e.jsxs(Mu,{children:[r.name.replace(" Credit Card","").replace(" Bank","")," Bank"]}),e.jsxs(Pu,{children:["Cycle from ",Zu(l)]})]}),e.jsx(Eu,{$status:b(),children:j()})]}),e.jsxs(Nu,{children:[e.jsxs(mi,{children:[e.jsx(vi,{children:"Bill Due"}),e.jsx(yi,{$color:o>0?"#ef4444":"#10b981",children:e.jsx(Ve,{value:re(o)})})]}),e.jsxs(mi,{$align:"right",children:[e.jsx(vi,{children:"Unbilled"}),e.jsx(yi,{$color:c>0?"#f59e0b":"var(--text-tertiary)",children:e.jsx(Ve,{value:re(c)})})]})]}),d&&e.jsxs(zu,{children:[e.jsxs(Wu,{children:[e.jsxs(Yu,{children:[e.jsx(Vu,{children:"Virtual Limit"}),e.jsx(Uu,{children:re(a)})]}),e.jsxs(qu,{children:[e.jsx(Gu,{children:h?"Over By":"Available"}),e.jsx(Ku,{$color:f,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:re(h?s-a:p)},p)]})]}),e.jsx(Ru,{children:e.jsx(Hu,{$color:f,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:bi,delay:.1}})})]})]})},ep=x.memo(Qu),tp=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),np=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Dr=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Tr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;
`,$r=i.h3`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`,rp=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,ap=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`,vt=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  overflow: hidden;
`,yt=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,bt=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`,jt=i.div`
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
`,wt=i.div`
  min-width: 0;
`,kt=i.div`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ct=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,St=i.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({$color:t})=>t||"var(--text-primary)"};
  font-variant-numeric: tabular-nums;
  text-align: right;
  white-space: nowrap;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`,ip=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
`,op=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
`,sp=i.div`
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,cp=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,lp=i.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,dp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,up=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,pp=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`,xp=i.span`
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`,hp=i(y.span)`
  font-size: 15px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,ji={hdfc:"/tools/images/HDFC.svg",icici:"/tools/images/ICICI.svg"},gp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),e.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),e.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),fp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M6 12h.01M18 12h.01"})]}),mp=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Ba=[.25,.1,.25,1],vp={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:Ba,staggerChildren:.05}}},Dt={hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:.25,ease:Ba}}},yp=({balances:t,ccLimits:n={},creditCardDetailedBalances:a=[]})=>{const{hdfcBalance:r,iciciBalance:o,liquidFundBalance:c,netCash:s,totalCCOutstanding:l,netPosition:u,totalLimit:d,totalLimitRemaining:p,limitPercentage:g,limitColor:h}=x.useMemo(()=>{const b=t.find(S=>S.account.id==="hdfc-bank"),j=t.find(S=>S.account.id==="icici-bank"),w=t.find(S=>S.account.id==="liquid-fund"),$=t.filter(S=>S.account.type==="credit_card"),v=(b==null?void 0:b.balance)||0,D=(j==null?void 0:j.balance)||0,F=(w==null?void 0:w.balance)||0,z=$.reduce((S,E)=>S+(E.totalOutstanding||0),0);let O=0;for(const S of a){const E=n[S.account.id]||0;E>0&&(O+=E)}const M=Math.max(0,O-z),P=O>0?z/O*100:0,T=z>O&&O>0?"#ef4444":P>80?"#f59e0b":"#10b981";return{hdfcBalance:v,iciciBalance:D,liquidFundBalance:F,netCash:v-z+F,totalCCOutstanding:z,netPosition:v-z,totalLimit:O,totalLimitRemaining:M,limitPercentage:P,limitColor:T}},[t,n,a]),f=d>0;return e.jsxs(np,{variants:vp,initial:"hidden",animate:"visible",children:[e.jsxs(Dr,{children:[e.jsx(Tr,{children:e.jsx($r,{children:"Bank Accounts"})}),e.jsxs(rp,{children:[e.jsx(vt,{variants:Dt,children:e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#004C8F",children:e.jsx("img",{src:ji.hdfc,alt:"HDFC"})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"HDFC Bank"}),e.jsx(Ct,{children:"Savings"})]})]}),e.jsx(St,{$color:r>=0?"#10b981":"#ef4444",children:e.jsx(Ve,{value:re(r)})})]})}),e.jsx(vt,{variants:Dt,children:e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#F58220",children:e.jsx("img",{src:ji.icici,alt:"ICICI"})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"ICICI Bank"}),e.jsx(Ct,{children:"Savings"})]})]}),e.jsx(St,{$color:o>=0?"#10b981":"#ef4444",children:e.jsx(Ve,{value:re(o)})})]})})]})]}),e.jsxs(Dr,{children:[e.jsx(Tr,{children:e.jsx($r,{children:"Investments"})}),e.jsx(vt,{variants:Dt,children:e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#8b5cf6",children:e.jsx(tp,{})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"Liquid Fund"}),e.jsx(Ct,{children:"Short-term Investment"})]})]}),e.jsx(St,{$color:c>=0?"#8b5cf6":"#ef4444",children:e.jsx(Ve,{value:re(c)})})]})})]}),e.jsxs(Dr,{children:[e.jsx(Tr,{children:e.jsx($r,{children:"Position Summary"})}),e.jsxs(ap,{children:[e.jsx(vt,{variants:Dt,children:e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#3b82f6",children:e.jsx(gp,{})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"Net Position"}),e.jsx(Ct,{children:"HDFC − CC Due"})]})]}),e.jsx(St,{$color:u>=0?"#3b82f6":"#ef4444",children:e.jsx(Ve,{value:re(u)})})]})}),e.jsx(vt,{variants:Dt,children:e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#22c55e",children:e.jsx(fp,{})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"Net Cash"}),e.jsx(Ct,{children:"Net Position + LF"})]})]}),e.jsx(St,{$color:s>=0?"#22c55e":"#ef4444",children:e.jsx(Ve,{value:re(s)})})]})}),e.jsxs(vt,{variants:Dt,children:[e.jsxs(yt,{children:[e.jsxs(bt,{children:[e.jsx(jt,{$color:"#ef4444",children:e.jsx(mp,{})}),e.jsxs(wt,{children:[e.jsx(kt,{children:"Credit Cards"}),e.jsx(Ct,{children:"Total Outstanding"})]})]}),e.jsx(St,{$color:l>0?"#ef4444":"#10b981",children:e.jsx(Ve,{value:`${l>0?"-":""}${re(l)}`})})]}),f&&e.jsxs(ip,{children:[e.jsxs(op,{children:[e.jsxs(lp,{children:[e.jsx(dp,{children:"Combined Limit"}),e.jsx(up,{children:re(d)})]}),e.jsxs(pp,{children:[e.jsx(xp,{children:g>100?"Over By":"Available"}),e.jsx(hp,{$color:h,initial:{opacity:0},animate:{opacity:1},transition:{duration:.15},children:g>100?re(l-d):re(p)},p)]})]}),e.jsx(sp,{children:e.jsx(cp,{$color:h,initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:.4,ease:Ba,delay:.1}})})]})]})]})]})]})},bp=x.memo(yp),jp=i.div`
  display: flex;
  flex-direction: column;
`,wp=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`,kp=i(y.button)`
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
`,Cp=i.span`
  font-weight: 600;
  display: block;
  font-size: 15px;
`,Sp=i.span`
  font-size: 12px;
  opacity: 0.7;
  display: block;
  margin-top: 4px;
`,Dp=i.div`
  margin-top: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Tp=i.div`
  padding: 0;
`,He=i.div`
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Ye=i.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 6px;
`,ts=i.input`
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
`,$p=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ip=i.span`
  font-size: 17px;
  font-weight: 500;
  color: var(--text-primary);
`,Lp=i(y.button).attrs({type:"button"})`
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
`,Vt=i.select`
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
`,_p=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,Ap=i.span`
  position: absolute;
  left: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,Op=i(ts)`
  padding-left: 28px;
`,Fp=i.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`,Bp=i(y.button)`
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
`,Mp=[{type:"credit_card_spend",label:"CC Spend",hint:"Purchase on card",color:"#ef4444"},{type:"cc_payment",label:"CC Payment",hint:"Pay CC bill",color:"#10b981"},{type:"bank_debit",label:"Bank Debit",hint:"UPI/Card/Transfer",color:"#f59e0b"},{type:"bank_credit",label:"Bank Credit",hint:"Salary/Refund",color:"#3b82f6"},{type:"liquid_fund_credit",label:"LF Credit",hint:"Add to fund",color:"#8b5cf6"},{type:"liquid_fund_debit",label:"LF Debit",hint:"Withdraw from fund",color:"#a855f7"}],Pp=Oa(),hn=Qo(),gn=es(),wi=[.4,0,.2,1],Ep=({onAddTransaction:t,defaultDate:n,categories:a=[]})=>{const[r,o]=x.useState("credit_card_spend"),[c,s]=x.useState(""),[l,u]=x.useState(""),[d,p]=x.useState(""),[g,h]=x.useState(""),[f,b]=x.useState(n||je(new Date)),[j,w]=x.useState(""),[$,v]=x.useState(!1),D=x.useRef(null),F=r==="credit_card_spend"||r==="bank_debit";x.useEffect(()=>{n&&b(n)},[n]);const z=x.useMemo(()=>{switch(r){case"credit_card_spend":case"cc_payment":return Pp;case"bank_debit":case"bank_credit":return hn;case"liquid_fund_credit":case"liquid_fund_debit":return gn?[gn]:[];default:return Ue}},[r]),O=x.useCallback(()=>{switch(r){case"credit_card_spend":case"cc_payment":return"Select card...";case"bank_debit":case"bank_credit":return"Select bank...";case"liquid_fund_credit":case"liquid_fund_debit":return"Liquid Fund";default:return"Select account..."}},[r]);x.useEffect(()=>{(r==="liquid_fund_credit"||r==="liquid_fund_debit")&&gn&&s(gn.id)},[r]);const M=r==="liquid_fund_credit"||r==="liquid_fund_debit",P=r&&c&&parseFloat(d)>0&&f&&(!M||l),W=x.useCallback(()=>{o(""),s(""),u(""),p(""),h(""),w("")},[]),T=x.useCallback(()=>{if(!r||!c||!d||!f)return;const k=(r==="cc_payment"||r==="liquid_fund_credit"||r==="liquid_fund_debit")&&l?l:void 0,m=Ue.find(ne=>ne.id===c),C=l?Ue.find(ne=>ne.id===l):void 0;let A="";switch(r){case"credit_card_spend":A=`Spent on ${m==null?void 0:m.name}`;break;case"cc_payment":A=C?`Payment to ${m==null?void 0:m.name} from ${C.name}`:`Payment to ${m==null?void 0:m.name}`;break;case"bank_debit":A=`Debited from ${m==null?void 0:m.name}`;break;case"bank_credit":A=`Credited to ${m==null?void 0:m.name}`;break;case"liquid_fund_credit":A=C?`Invested in Liquid Fund from ${C.name}`:"Invested in Liquid Fund";break;case"liquid_fund_debit":A=C?`Withdrawn from Liquid Fund to ${C.name}`:"Withdrawn from Liquid Fund";break}const oe=qd(r,c,parseFloat(d),g||A,f,k,F&&j?j:void 0);t(oe),W()},[r,c,l,d,g,f,j,F,t,W]),S=x.useMemo(()=>{const m=d.replace(/[^0-9.]/g,"").split(".");let C=m[0];const A=m[1];if(C.length>3){let oe=C.substring(C.length-3),ne=C.substring(0,C.length-3);ne=ne.replace(/\B(?=(\d{2})+(?!\d))/g,","),C=ne+","+oe}return A!==void 0?`${C}.${A}`:C},[d]),E=x.useCallback(k=>{const m=k.target.value.replace(/,/g,"");(m===""||/^\d*\.?\d*$/.test(m))&&p(m)},[]),Y=k=>new Date(k+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});return e.jsxs(jp,{children:[e.jsx(wp,{children:Mp.map(({type:k,label:m,hint:C,color:A})=>e.jsxs(kp,{type:"button",$active:r===k,$color:A,onClick:()=>{r!==k&&(o(k),s(""),u(""))},whileTap:{scale:.98},transition:{duration:.1,ease:wi},children:[e.jsx(Cp,{children:m}),e.jsx(Sp,{children:C})]},k))}),e.jsxs("div",{children:[e.jsx(Dp,{children:e.jsxs(Tp,{children:[r!=="liquid_fund_credit"&&r!=="liquid_fund_debit"&&e.jsxs(He,{children:[e.jsx(Ye,{children:r==="credit_card_spend"||r==="cc_payment"?"Credit Card":"Bank Account"}),e.jsxs(Vt,{value:c,onChange:k=>s(k.target.value),children:[e.jsx("option",{value:"",children:O()}),z.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))]})]}),r==="cc_payment"&&e.jsxs(He,{children:[e.jsx(Ye,{children:"Paid From (Optional)"}),e.jsxs(Vt,{value:l,onChange:k=>u(k.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),hn.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))]})]}),r==="liquid_fund_credit"&&e.jsxs(He,{children:[e.jsx(Ye,{children:"Transfer From Bank Account"}),e.jsxs(Vt,{value:l,onChange:k=>u(k.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),hn.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))]})]}),r==="liquid_fund_debit"&&e.jsxs(He,{children:[e.jsx(Ye,{children:"Transfer To Bank Account"}),e.jsxs(Vt,{value:l,onChange:k=>u(k.target.value),children:[e.jsx("option",{value:"",children:"Select bank account..."}),hn.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))]})]}),e.jsxs(He,{children:[e.jsx(Ye,{children:"Amount"}),e.jsxs(_p,{children:[e.jsx(Ap,{children:"₹"}),e.jsx(Op,{type:"text",inputMode:"decimal",placeholder:"0",value:S,onChange:E})]})]}),e.jsxs(He,{children:[e.jsx(Ye,{children:"Date"}),e.jsxs($p,{children:[e.jsx(Ip,{children:Y(f)}),e.jsx(Lp,{ref:D,onClick:()=>v(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Xt,{isOpen:$,onClose:()=>v(!1),selectedDate:f,onDateSelect:b,triggerRef:D})]})]}),e.jsxs(He,{children:[e.jsx(Ye,{children:"Description (Optional)"}),e.jsx(ts,{type:"text",placeholder:"Add a note...",value:g,onChange:k=>h(k.target.value)})]}),F&&a.length>0&&e.jsxs(He,{children:[e.jsx(Ye,{children:"Category (Optional)"}),e.jsxs(Vt,{value:j,onChange:k=>w(k.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),a.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id))]})]})]})}),e.jsx(Fp,{children:e.jsx(Bp,{type:"button",onClick:T,disabled:!P,whileTap:P?{scale:.98}:{},transition:{duration:.1,ease:wi},children:"Add Transaction"})})]})]})},Np=x.memo(Ep),En={section:24,sectionMobile:20,contentGap:20,contentGapMobile:16},zp=t=>{switch(t){case"green":return"#10b981";case"orange":return"#f59e0b";case"pink":return"#ec4899";case"blue":return"#3b82f6";case"purple":return"#8b5cf6"}},Wp=i.section`
  border-bottom: 1px solid var(--border);
`,Rp=i.div`
  padding: ${En.section}px 0;

  @media (max-width: 640px) {
    padding: ${En.sectionMobile}px 0;
  }
`,Hp=i(y.button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,Yp=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Vp=i.div`
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
`,Up=i.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 19px;
  }
`,qp=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gp=i(y.span)`
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
`,Kp=i(y.div)`
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
`,Jp=i(y.div)`
  overflow: hidden;
`,Xp=i.div`
  padding-top: ${En.contentGap}px;

  @media (max-width: 640px) {
    padding-top: ${En.contentGapMobile}px;
  }
`,Zp=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),Nn=[.32,.72,0,1],Qp={collapsed:{height:0,opacity:0,transition:{height:{duration:.3,ease:Nn},opacity:{duration:.2}}},expanded:{height:"auto",opacity:1,transition:{height:{duration:.3,ease:Nn},opacity:{duration:.25,delay:.05}}}},ex=({title:t,icon:n,accent:a,badge:r,defaultOpen:o=!0,isOpen:c,onOpenChange:s,collapseOnClickOutside:l=!1,children:u})=>{const[d,p]=x.useState(o),g=x.useRef(null),h=c!==void 0,f=h?c:d,b=zp(a),j=()=>{const w=!f;h?s==null||s(w):p(w)};return x.useEffect(()=>{if(!l||!f)return;const w=$=>{g.current&&!g.current.contains($.target)&&(h?s==null||s(!1):p(!1))};return document.addEventListener("mousedown",w),document.addEventListener("touchstart",w),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("touchstart",w)}},[l,f,h,s]),e.jsx(Wp,{ref:g,children:e.jsxs(Rp,{children:[e.jsxs(Hp,{type:"button",onClick:j,whileTap:{scale:.995},transition:{duration:.1},children:[e.jsxs(Yp,{children:[e.jsx(Vp,{$color:b,children:n}),e.jsx(Up,{children:t})]}),e.jsxs(qp,{children:[e.jsx(ie,{mode:"wait",children:r!==void 0&&e.jsx(Gp,{$color:b,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.2,ease:Nn},children:r},r)}),e.jsx(Kp,{animate:{rotate:f?180:0},transition:{duration:.25,ease:Nn},children:e.jsx(Zp,{})})]})]}),e.jsx(ie,{initial:!1,children:f&&e.jsx(Jp,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:Qp,children:e.jsx(Xp,{children:u})},"content")})]})})},tx=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,nx=i.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`,rx=i(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,ax=i.div`
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
`,ns=i(y.div)`
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
`,ix=i.div`
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
`,ox=i.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,sx=i.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,cx=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,lx=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 12px;
`,dx=i.div`
  font-size: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({$positive:t})=>t?"#10b981":"var(--text-primary)"};
  text-align: right;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 15px;
  }
`,ux=i(y.button)`
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

  ${ns}:hover & {
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
`,px=i(y.div)`
  padding: 48px 24px;
  text-align: center;
`,xx=i.div`
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
`,hx=i.p`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
`,gx=i.p`
  font-size: 13px;
  color: var(--text-tertiary);
`,fx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"9",y1:"6",x2:"20",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"20",y2:"12"}),e.jsx("line",{x1:"9",y1:"18",x2:"20",y2:"18"}),e.jsx("circle",{cx:"4.5",cy:"6",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),e.jsx("circle",{cx:"4.5",cy:"18",r:"1.5",fill:"currentColor",stroke:"none"})]}),mx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),ki=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]}),vx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("polyline",{points:"19 12 12 19 5 12"})]}),yx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),bx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),Ci=[.32,.72,0,1],jx=t=>{switch(t){case"credit_card_spend":return e.jsx(mx,{});case"cc_payment":return e.jsx(ki,{});case"bank_debit":return e.jsx(ki,{});case"bank_credit":return e.jsx(vx,{})}},Si=t=>t==="bank_credit",wx=t=>{const n=new Date(t),a=new Date,r=new Date(a);return r.setDate(r.getDate()-1),t===a.toISOString().split("T")[0]?"Today":t===r.toISOString().split("T")[0]?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},kx=({transactions:t,onDeleteTransaction:n,selectedDate:a})=>{const{filteredTransactions:r,groupedTransactions:o}=x.useMemo(()=>{const l=new Date(a),u=t.filter(p=>new Date(p.date)<=l).sort((p,g)=>{const h=g.date.localeCompare(p.date);return h!==0?h:g.id.localeCompare(p.id)}),d={};return u.forEach(p=>{d[p.date]||(d[p.date]=[]),d[p.date].push(p)}),{filteredTransactions:u,groupedTransactions:d}},[t,a]),c=x.useCallback(l=>{n(l)},[n]),s=Object.keys(o).sort((l,u)=>u.localeCompare(l));return e.jsx(ex,{title:"Transactions",icon:e.jsx(fx,{}),accent:"blue",badge:r.length,defaultOpen:!0,children:e.jsx(tx,{children:e.jsx(nx,{children:r.length===0?e.jsxs(px,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:Ci},children:[e.jsx(xx,{children:e.jsx(bx,{})}),e.jsx(hx,{children:"No Transactions"}),e.jsx(gx,{children:"Add your first transaction above"})]}):s.map(l=>e.jsxs(rx,{children:[e.jsx(ax,{children:wx(l)}),e.jsx(ie,{mode:"popLayout",children:o[l].map(u=>{var p;const d=ga(u.accountId);return e.jsxs(ns,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:Ci},layout:!0,children:[e.jsx(ix,{$type:u.type,children:jx(u.type)}),e.jsxs(ox,{children:[e.jsx(sx,{children:u.description}),e.jsx(cx,{children:(p=d==null?void 0:d.name)==null?void 0:p.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(lx,{children:[e.jsxs(dx,{$positive:Si(u.type),children:[Si(u.type)?"+":"-",re(u.amount)]}),e.jsx(ux,{type:"button",onClick:()=>c(u.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(yx,{})})]})]},u.id)})})]},l))})})})};x.memo(kx);const Cx=i(y.div)`
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
`,Sx=i(y.div)`
  width: 100%;
  max-width: 440px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Dx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Tx=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,rs=i(y.button)`
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
`,$x=i(rs)`
  left: 12px;
  color: var(--text-secondary);
`,Ix=i(rs)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Lx=i.div`
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
`,fn=i.div`
  padding: 16px;

  & + & {
    border-top: 1px solid var(--border);
  }
`,mn=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 4px;
  margin-bottom: 10px;
`,vn=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,yn=i.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  gap: 12px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,bn=i.div`
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
`,jn=i.div`
  flex: 1;
  min-width: 0;
`,wn=i.div`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,kn=i.div`
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 2px;
`,Cn=i.div`
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
`,Sn=i.input`
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
`,_x=i.div`
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
`,Ax=i.div`
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Ox=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"21"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),e.jsx("polyline",{points:"5 6 12 3 19 6"}),e.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"21"}),e.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"21"})]}),Fx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),Bx=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Mx=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})}),as=[.25,.1,.25,1],Px={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},Ex={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:as}}},Nx=({isOpen:t,onClose:n,initialBalances:a,initialCCBills:r,ccLimits:o,onSave:c})=>{const[s,l]=x.useState({}),[u,d]=x.useState({}),[p,g]=x.useState({}),[h,f]=x.useState({}),[b,j]=x.useState(""),w=Qo(),$=Oa(),v=es();x.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),x.useEffect(()=>{var T;if(t){const S=je(new Date),E={};w.forEach(C=>{var A;E[C.id]=((A=a[C.id])==null?void 0:A.toString())||""}),l(E),v&&j(((T=a[v.id])==null?void 0:T.toString())||"");const Y={},k={};$.forEach(C=>{const A=Aa(r[C.id],S);Y[C.id]=A.amount>0?A.amount.toString():"",k[C.id]=A.type}),d(Y),g(k);const m={};$.forEach(C=>{var A;m[C.id]=((A=o[C.id])==null?void 0:A.toString())||""}),f(m)}},[t,a,r,o,v]);const D=()=>{const T=je(new Date),S={};if(Object.entries(s).forEach(([k,m])=>{const C=parseFloat(m.replace(/,/g,""))||0;S[k]=C}),v){const k=parseFloat(b.replace(/,/g,""))||0;S[v.id]=k}const E={};Object.entries(u).forEach(([k,m])=>{const C=parseFloat(m.replace(/,/g,""))||0,A=r[k],oe=typeof A=="object"?A.setupDate:T,ne={amount:C,type:p[k]||"billed",setupDate:typeof A=="object"&&A.amount===C?oe:T};E[k]=ne});const Y={};Object.entries(h).forEach(([k,m])=>{const C=parseFloat(m.replace(/,/g,""))||0;C>0&&(Y[k]=C)}),c(S,E,Y),n()},F=T=>{const S=T.replace(/[^0-9]/g,"");if(!S)return"";if(S.length>3){let E=S.substring(S.length-3),Y=S.substring(0,S.length-3);return Y=Y.replace(/\B(?=(\d{2})+(?!\d))/g,","),Y+","+E}return S},z=(T,S)=>{const E=S.replace(/,/g,"");(E===""||/^\d+$/.test(E))&&l(Y=>({...Y,[T]:E}))},O=(T,S)=>{const E=S.replace(/,/g,"");(E===""||/^\d+$/.test(E))&&d(Y=>({...Y,[T]:E}))},M=(T,S)=>{const E=S.replace(/,/g,"");(E===""||/^\d+$/.test(E))&&f(Y=>({...Y,[T]:E}))},P=T=>{const S=T.replace(/,/g,"");(S===""||/^\d+$/.test(S))&&j(S)},W=T=>{if(T>3&&T<21)return"th";switch(T%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};return e.jsx(ie,{children:t&&e.jsx(Cx,{variants:Px,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:as},onClick:n,children:e.jsxs(Sx,{variants:Ex,initial:"hidden",animate:"visible",exit:"exit",onClick:T=>T.stopPropagation(),children:[e.jsxs(Dx,{children:[e.jsx($x,{onClick:n,children:"Cancel"}),e.jsx(Tx,{children:"Balances & Limits"}),e.jsx(Ix,{onClick:D,children:"Done"})]}),e.jsxs(Lx,{children:[e.jsxs(fn,{children:[e.jsx(mn,{children:"Bank Accounts"}),e.jsx(vn,{children:w.map(T=>e.jsxs(yn,{children:[e.jsx(bn,{$color:"#007AFF",children:e.jsx(Ox,{})}),e.jsxs(jn,{children:[e.jsx(wn,{children:T.name.replace(" Bank","")}),e.jsx(kn,{children:"Current balance"})]}),e.jsx(Cn,{children:e.jsx(Sn,{type:"text",inputMode:"numeric",placeholder:"0",value:F(s[T.id]||""),onChange:S=>z(T.id,S.target.value)})})]},T.id))})]}),v&&e.jsxs(fn,{children:[e.jsx(mn,{children:"Investments"}),e.jsx(vn,{children:e.jsxs(yn,{children:[e.jsx(bn,{$color:"#AF52DE",children:e.jsx(Mx,{})}),e.jsxs(jn,{children:[e.jsx(wn,{children:"Liquid Fund"}),e.jsx(kn,{children:"Current investment value"})]}),e.jsx(Cn,{children:e.jsx(Sn,{type:"text",inputMode:"numeric",placeholder:"0",value:F(b),onChange:T=>P(T.target.value)})})]})})]}),e.jsxs(fn,{children:[e.jsx(mn,{children:"Credit Card Bills"}),e.jsx(vn,{children:$.map(T=>e.jsxs(Ax,{children:[e.jsxs(yn,{style:{borderBottom:"none"},children:[e.jsx(bn,{$color:"#FF9500",children:e.jsx(Fx,{})}),e.jsxs(jn,{children:[e.jsx(wn,{children:T.name.replace(" Credit Card","")}),e.jsx(kn,{children:"Outstanding amount"})]}),e.jsx(Cn,{children:e.jsx(Sn,{type:"text",inputMode:"numeric",placeholder:"0",value:F(u[T.id]||""),onChange:S=>O(T.id,S.target.value)})})]}),e.jsxs(_x,{children:[e.jsx(Di,{type:"button",$active:p[T.id]==="billed",onClick:()=>g(S=>({...S,[T.id]:"billed"})),children:"Billed"}),e.jsx(Di,{type:"button",$active:p[T.id]==="unbilled",onClick:()=>g(S=>({...S,[T.id]:"unbilled"})),children:"Unbilled"})]})]},T.id))})]}),e.jsxs(fn,{children:[e.jsx(mn,{children:"Spending Limits"}),e.jsx(vn,{children:$.map(T=>{const S=Jo[T.id];return e.jsxs(yn,{children:[e.jsx(bn,{$color:"#34C759",children:e.jsx(Bx,{})}),e.jsxs(jn,{children:[e.jsx(wn,{children:T.name.replace(" Credit Card","")}),S&&e.jsxs(kn,{children:["Resets on ",S,W(S)]})]}),e.jsx(Cn,{children:e.jsx(Sn,{type:"text",inputMode:"numeric",placeholder:"0",value:F(h[T.id]||""),onChange:E=>M(T.id,E.target.value)})})]},T.id)})})]})]})]})})})},zx=i(y.div)`
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
`,Wx=i(y.div)`
  width: 100%;
  max-width: 400px;
  max-height: 85vh;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Rx=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  position: relative;
`,Hx=i.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`,is=i(y.button)`
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
`,Yx=i(is)`
  left: 12px;
  color: var(--text-secondary);
`,Vx=i(is)`
  right: 12px;
  color: var(--accent);
  font-weight: 600;
`,Ux=i.div`
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
`,qx=i.div`
  display: flex;
  gap: 10px;
`,Gx=i.input`
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
`,Kx=i(y.button)`
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
`,Jx=i.div`
  background: var(--bg-tertiary);
  border-radius: 12px;
  overflow: hidden;
`,Xx=i(y.div)`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  gap: 14px;
  border-bottom: 1px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`,Zx=i.span`
  flex: 1;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
`,Qx=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,fa=i(y.button)`
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
`,eh=i(fa)`
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`,th=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,nh=i.div`
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
`,rh=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
`,ah=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
`,ih=i(y.div)`
  position: absolute;
  inset: 0;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`,oh=i.input`
  flex: 1;
  padding: 12px 14px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  background: var(--bg-secondary);
  border: 1px solid var(--accent);
  border-radius: 10px;
  outline: none;
`,sh=i.div`
  position: relative;
`,ch=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),lh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),dh=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"}),e.jsx("path",{d:"M7 7h.01"})]}),uh=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),os=[.25,.1,.25,1],ph={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},xh={hidden:{opacity:0,scale:.95,y:10},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:10,transition:{duration:.15,ease:os}}},hh=({isOpen:t,onClose:n,categories:a,onSave:r})=>{const[o,c]=x.useState(a),[s,l]=x.useState(""),[u,d]=x.useState(null),[p,g]=x.useState(""),h=x.useRef(null);x.useEffect(()=>{t&&(c(a),l(""),d(null))},[t,a]),x.useEffect(()=>{u&&h.current&&h.current.focus()},[u]);const f=x.useCallback(()=>{if(!s.trim())return;const v={id:Zo(),name:s.trim()};c(D=>[...D,v]),l("")},[s]),b=x.useCallback(v=>{c(D=>D.filter(F=>F.id!==v))},[]),j=x.useCallback(v=>{d(v.id),g(v.name)},[]),w=x.useCallback(()=>{!u||!p.trim()||(c(v=>v.map(D=>D.id===u?{...D,name:p.trim()}:D)),d(null),g(""))},[u,p]),$=x.useCallback(()=>{r(o),n()},[o,r,n]);return e.jsx(ie,{children:t&&e.jsx(zx,{variants:ph,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:os},onClick:n,children:e.jsxs(Wx,{variants:xh,initial:"hidden",animate:"visible",exit:"exit",onClick:v=>v.stopPropagation(),children:[e.jsxs(Rx,{children:[e.jsx(Yx,{onClick:n,children:"Cancel"}),e.jsx(Hx,{children:"Categories"}),e.jsx(Vx,{onClick:$,children:"Done"})]}),e.jsxs(Ux,{children:[e.jsxs(Ti,{children:[e.jsx($i,{children:"Add New"}),e.jsxs(qx,{children:[e.jsx(Gx,{type:"text",placeholder:"Category name",value:s,onChange:v=>l(v.target.value),onKeyDown:v=>v.key==="Enter"&&f()}),e.jsx(Kx,{onClick:f,disabled:!s.trim(),whileTap:{scale:.98},children:"Add"})]})]}),e.jsxs(Ti,{children:[e.jsx($i,{children:"Your Categories"}),o.length===0?e.jsxs(th,{children:[e.jsx(nh,{children:e.jsx(dh,{})}),e.jsx(rh,{children:"No Categories"}),e.jsx(ah,{children:"Add a category to organize your transactions"})]}):e.jsx(Jx,{children:e.jsx(ie,{children:o.map(v=>e.jsxs(sh,{children:[e.jsxs(Xx,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,height:0},layout:!0,children:[e.jsx(Zx,{children:v.name}),e.jsxs(Qx,{children:[e.jsx(fa,{onClick:()=>j(v),whileTap:{scale:.95},children:e.jsx(ch,{})}),e.jsx(eh,{onClick:()=>b(v.id),whileTap:{scale:.95},children:e.jsx(lh,{})})]})]}),e.jsx(ie,{children:u===v.id&&e.jsxs(ih,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx(oh,{ref:h,type:"text",value:p,onChange:D=>g(D.target.value),onKeyDown:D=>{D.key==="Enter"&&w(),D.key==="Escape"&&d(null)},onBlur:w}),e.jsx(fa,{onClick:w,whileTap:{scale:.95},style:{color:"var(--accent)"},children:e.jsx(uh,{})})]})})]},v.id))})})]})]})]})})})},gh=i(y.div)`
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
`,fh=i(y.div)`
  width: 100%;
  max-width: 440px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
`,mh=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
`,vh=i.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
`,yh=i(y.button)`
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
`,bh=i.div`
  padding: 20px;
`,Dn=i.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`,Tn=i.label`
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  margin-bottom: 8px;
`,ss=i.input`
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
`,jh=i.div`
  display: flex;
  align-items: center;
  position: relative;
`,wh=i.span`
  position: absolute;
  left: 14px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-tertiary);
  pointer-events: none;
`,kh=i(ss)`
  padding-left: 30px;
`,Ch=i.select`
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
`,Sh=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 10px;
`,Dh=i.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
`,Th=i(y.button).attrs({type:"button"})`
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
`,$h=i.div`
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
`,Ih=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),cs=[.25,.1,.25,1],Lh={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},_h={hidden:{opacity:0,scale:.95,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:400,damping:30}},exit:{opacity:0,scale:.95,y:20,transition:{duration:.15,ease:cs}}},Ah=({isOpen:t,onClose:n,transaction:a,categories:r,onSave:o})=>{const[c,s]=x.useState(""),[l,u]=x.useState(""),[d,p]=x.useState(""),[g,h]=x.useState(""),[f,b]=x.useState(!1),j=x.useRef(null);x.useEffect(()=>{t&&a&&(s(a.amount.toString()),u(a.date),p(a.description),h(a.categoryId||""))},[t,a]);const w=x.useMemo(()=>{const M=c.replace(/[^0-9.]/g,"").split(".");let P=M[0];const W=M[1];if(P.length>3){let T=P.substring(P.length-3),S=P.substring(0,P.length-3);S=S.replace(/\B(?=(\d{2})+(?!\d))/g,","),P=S+","+T}return W!==void 0?`${P}.${W}`:P},[c]),$=x.useCallback(O=>{const M=O.target.value.replace(/,/g,"");(M===""||/^\d*\.?\d*$/.test(M))&&s(M)},[]),v=O=>new Date(O+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),D=x.useCallback(()=>{if(!a)return;const O={...a,amount:parseFloat(c)||a.amount,date:l||a.date,description:d,categoryId:g||void 0};o(O),n()},[a,c,l,d,g,o,n]),F=parseFloat(c)>0&&l,z=a&&(a.type==="credit_card_spend"||a.type==="bank_debit");return e.jsx(ie,{children:t&&a&&e.jsx(gh,{variants:Lh,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:cs},onClick:n,children:e.jsxs(fh,{variants:_h,initial:"hidden",animate:"visible",exit:"exit",onClick:O=>O.stopPropagation(),children:[e.jsxs(mh,{children:[e.jsx(vh,{children:"Edit Transaction"}),e.jsx(yh,{onClick:n,whileTap:{scale:.95},children:e.jsx(Ih,{})})]}),e.jsxs(bh,{children:[e.jsxs(Dn,{children:[e.jsx(Tn,{children:"Amount"}),e.jsxs(jh,{children:[e.jsx(wh,{children:"₹"}),e.jsx(kh,{type:"text",inputMode:"decimal",placeholder:"0",value:w,onChange:$})]})]}),e.jsxs(Dn,{children:[e.jsx(Tn,{children:"Date"}),e.jsxs(Sh,{children:[e.jsx(Dh,{children:v(l)}),e.jsx(Th,{ref:j,onClick:()=>b(!0),whileTap:{scale:.95},children:"Change"}),e.jsx(Xt,{isOpen:f,onClose:()=>b(!1),selectedDate:l,onDateSelect:u,triggerRef:j})]})]}),e.jsxs(Dn,{children:[e.jsx(Tn,{children:"Description"}),e.jsx(ss,{type:"text",placeholder:"Add a note...",value:d,onChange:O=>p(O.target.value)})]}),z&&e.jsxs(Dn,{children:[e.jsx(Tn,{children:"Category"}),e.jsxs(Ch,{value:g,onChange:O=>h(O.target.value),children:[e.jsx("option",{value:"",children:"No Category"}),r.map(O=>e.jsx("option",{value:O.id,children:O.name},O.id))]})]})]}),e.jsxs($h,{children:[e.jsx(Ii,{onClick:n,whileTap:{scale:.98},children:"Cancel"}),e.jsx(Ii,{$primary:!0,onClick:D,disabled:!F,whileTap:F?{scale:.98}:{},children:"Save"})]})]})})})},Oh=i(y.div)`
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
`,Fh=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  background: var(--bg-primary);
  padding-bottom: 16px;
`,Bh=i.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);

  @media (max-width: 640px) {
    padding: 0 var(--space-md);
  }
`,Mh=i.div`
  padding: 16px 0 16px;

  @media (max-width: 640px) {
    padding: 16px 0 16px;
  }
`,Ph=i.div`
  display: flex;
  padding: 3px;
  background: var(--bg-tertiary);
  border-radius: 10px;
`,Eh=i(y.button)`
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
`,Nh=i.div`
  height: 184px;

  @media (max-width: 640px) {
    height: 162px;
  }
`,zh=i(y.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  touch-action: pan-y pinch-zoom;
`,Wh=i.div`
  position: relative;
  min-height: 400px;
  overflow: hidden;
`,Rh=i(y.div)`
  width: 100%;
`,Hh=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Yh=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Vh=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,Uh=i.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
`,qh=i.div`
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
`,Gh=i.span`
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.1);
  padding: 2px 8px;
  border-radius: 10px;
`,Kh=i.div`
  color: var(--text-tertiary);
  transform: rotate(${({$expanded:t})=>t?"180deg":"0deg"});
  transition: transform 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }
`,Jh=i(y.div)`
  overflow: hidden;
`,Xh=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,$n=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,In=i.label`
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
`,Zh=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Qh=i.button`
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
`,e0=i.div`
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
`,t0=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,n0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ln=i(y.div)`
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
`,_n=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,An=i.h3`
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -0.01em;
`,On=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
  font-weight: 500;
`,r0=i.div`
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
`,Fi=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Bi=i.span`
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
`,a0=i.div`
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
`,Ir=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Lr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
`,_r=i.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
`,Ar=i.span`
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`,Or=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Fr=i.div`
  height: 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
`,Br=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  ${({$isFirst:t})=>t&&"border-radius: 6px 0 0 6px;"}
  ${({$isLast:t})=>t&&"border-radius: 0 6px 6px 0;"}
  ${({$isFirst:t,$isLast:n})=>t&&n&&"border-radius: 6px;"}
`,Mr=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Pr=i(y.div)`
  display: flex;
  align-items: center;
  gap: 14px;
`,Er=i.div`
  width: 4px;
  height: 40px;
  border-radius: 2px;
  background: ${({$color:t})=>t};
  flex-shrink: 0;
`,Nr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,zr=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Wr=i.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rr=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  flex-shrink: 0;
`,Hr=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Yr=i.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({$color:t})=>t};
`,Vr=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
`,Ur=i.div`
  flex: 1;
  height: 4px;
  background: var(--bg-tertiary);
  border-radius: 2px;
  overflow: hidden;
`,qr=i(y.div)`
  height: 100%;
  background: ${({$color:t})=>t};
  border-radius: 2px;
`,i0=i(y.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
`,o0=i.div`
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
`,s0=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,c0=i.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 10px;
`,l0=i(y.button)`
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
`,d0=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
`,u0=i.div`
  /* Full height - page scrolls naturally */
`,p0=i(y.div)`
  &:not(:first-child) {
    border-top: 1px solid var(--border);
  }
`,x0=i.div`
  padding: 12px 16px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  background: var(--bg-tertiary);
`,h0=i(y.div)`
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
`,g0=i.div`
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
`,f0=i.div`
  flex: 1;
  min-width: 0;
`,m0=i.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,v0=i.div`
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 2px;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`,y0=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,b0=i.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({$positive:t})=>t?"#10b981":"#ef4444"};
  font-variant-numeric: tabular-nums;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`,j0=i.div`
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
`,w0=i.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  background: var(--bg-tertiary);
  border-radius: 6px;
  margin-left: 8px;
`,k0=i(y.div)`
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
`,C0=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 32px;
`,Gr=i(y.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Kr=i.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 0 16px;
  margin-bottom: 4px;
`,Ui=i(y.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
`,Jr=i(y.button)`
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
`,Xr=i.div`
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
`,Zr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,Qr=i.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary);
`,ea=i.span`
  font-size: 13px;
  color: var(--text-tertiary);
`,qi=i.div`
  color: var(--text-tertiary);
  opacity: 0.5;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,Gi=i.span`
  font-size: 15px;
  color: var(--text-tertiary);
  margin-right: 4px;
`,S0=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`,Ki=i(y.button)`
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
`,Ji=i.div`
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
`,Xi=i.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
`,Zi=i.span`
  font-size: 12px;
  color: var(--text-tertiary);
  text-align: center;
`,D0=i.input`
  display: none;
`,T0=i.div`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  max-width: 500px;
  margin: 0 auto;
`,$0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),I0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),L0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),_0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),ls=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),A0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),O0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),F0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),Qi=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),e.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),B0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),e.jsx("polyline",{points:"17 6 23 6 23 12"})]}),M0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"17 1 21 5 17 9"}),e.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.jsx("polyline",{points:"7 23 3 19 7 15"}),e.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})]}),P0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),e.jsx("polyline",{points:"9 12 11 14 15 10"})]}),E0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"16 12 12 8 8 12"})]}),N0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}),e.jsx("polyline",{points:"8 12 12 16 16 12"})]}),z0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),e.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),W0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),R0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),H0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),e.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),Y0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),V0=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})}),eo=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})}),to=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),U0=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}),e.jsx("path",{d:"M22 12A10 10 0 0 0 12 2v10z"})]}),de=[.25,.1,.25,1],q0={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2,ease:de}}},G0={enter:t=>({x:t>0?40:-40,opacity:0}),center:{x:0,opacity:1},exit:t=>({x:t<0?40:-40,opacity:0})},K0=t=>{switch(t){case"credit_card_spend":return e.jsx(Qi,{});case"bank_credit":return e.jsx(B0,{});case"cc_payment":return e.jsx(P0,{});case"bank_debit":return e.jsx(M0,{});case"liquid_fund_credit":return e.jsx(E0,{});case"liquid_fund_debit":return e.jsx(N0,{});default:return e.jsx(Qi,{})}},no=t=>t==="bank_credit"||t==="liquid_fund_credit",J0=t=>{const n=new Date(t+"T00:00:00"),a=new Date;a.setHours(0,0,0,0);const r=new Date(a);return r.setDate(r.getDate()-1),n.getTime()===a.getTime()?"Today":n.getTime()===r.getTime()?"Yesterday":n.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})},ro=t=>new Date(t+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),at=[{id:"summary",label:"Summary",icon:e.jsx($0,{}),accent:"green"},{id:"cards",label:"Cards",icon:e.jsx(I0,{}),accent:"pink"},{id:"transactions",label:"History",icon:e.jsx(L0,{}),accent:"blue"},{id:"add",label:"Add",icon:e.jsx(_0,{}),accent:"orange"},{id:"manage",label:"Manage",icon:e.jsx(ls,{}),accent:"purple"}],X0=()=>{const[t,n]=x.useState(je(new Date)),[a,r]=x.useState([]),[o,c]=x.useState({}),[s,l]=x.useState({}),[u,d]=x.useState({}),[p,g]=x.useState([]),[h,f]=x.useState(!1),[b,j]=x.useState(!1),[w,$]=x.useState(null),[v,D]=x.useState("summary"),[[,F],z]=x.useState([0,0]),O=x.useRef(null),[M,P]=x.useState(!1),[W,T]=x.useState(()=>{const _=new Date;return je(new Date(_.getFullYear(),_.getMonth(),1))}),[S,E]=x.useState(()=>je(new Date)),[Y,k]=x.useState("all"),[m,C]=x.useState("all"),[A,oe]=x.useState([]),[ne,ae]=x.useState(!1),[te,ye]=x.useState(!1),pe=x.useRef(null),be=x.useRef(null),[J,Se]=x.useState("transactions"),De=x.useCallback(_=>{const N=at.findIndex(H=>H.id===_),K=at.findIndex(H=>H.id===v);z([N,N>K?1:-1]),D(_)},[v]),Ie=x.useCallback((_,N)=>{const I=at.findIndex(R=>R.id===v);(N.offset.x<-50||N.velocity.x<-500)&&I<at.length-1?De(at[I+1].id):(N.offset.x>50||N.velocity.x>500)&&I>0&&De(at[I-1].id)},[v,De]);x.useEffect(()=>{const _=Md(),N=Pd(),K=Ed(),H=Nd(),I=zd();r(_),c(N),l(K),d(H),g(I)},[]);const Te=x.useMemo(()=>Ud(a,t,o,s),[t,a,o,s]),Pe=x.useMemo(()=>Oa().map(N=>Yd(N,a,t,s)),[a,t,s]),$e=["bank_credit","liquid_fund_debit"],we=["credit_card_spend","cc_payment","bank_debit","liquid_fund_credit"],Ot=[{id:"hdfc-bank",label:"HDFC Bank"},{id:"icici-bank",label:"ICICI Bank"},{id:"hdfc-cc",label:"HDFC CC"},{id:"axis-cc",label:"Axis CC"},{id:"icici-cc",label:"ICICI CC"},{id:"yes-cc",label:"Yes CC"},{id:"liquid-fund",label:"Liquid Fund"}],{filteredTransactions:se,groupedTransactions:ze,activeFilterCount:ge}=x.useMemo(()=>{let _=a.filter(H=>!(H.date<W||H.date>S||Y!=="all"&&(!H.categoryId||H.categoryId!==Y)||m!=="all"&&(m==="credit"&&!$e.includes(H.type)||m==="debit"&&!we.includes(H.type))||A.length>0&&!A.includes(H.accountId)));_=_.sort((H,I)=>{const R=I.date.localeCompare(H.date);return R!==0?R:I.id.localeCompare(H.id)});const N={};_.forEach(H=>{N[H.date]||(N[H.date]=[]),N[H.date].push(H)});let K=0;return Y!=="all"&&K++,m!=="all"&&K++,A.length>0&&K++,{filteredTransactions:_,groupedTransactions:N,activeFilterCount:K}},[a,W,S,Y,m,A]),q=x.useMemo(()=>{const _=se,N=_.filter(L=>$e.includes(L.type)).reduce((L,ee)=>L+ee.amount,0),K=_.filter(L=>we.includes(L.type)).reduce((L,ee)=>L+ee.amount,0),H=N-K,I=_.filter(L=>$e.includes(L.type)).length,R=_.filter(L=>we.includes(L.type)).length,X=I>0?N/I:0,B=R>0?K/R:0,Z={};_.forEach(L=>{var ee;if(we.includes(L.type)){const ut=L.categoryId||"uncategorized",Bt=L.categoryId?((ee=p.find(on=>on.id===L.categoryId))==null?void 0:ee.name)||"Unknown":"Uncategorized";Z[ut]||(Z[ut]={name:Bt,amount:0,count:0}),Z[ut].amount+=L.amount,Z[ut].count++}});const tr=Object.values(Z).sort((L,ee)=>ee.amount-L.amount).slice(0,6),We={};_.forEach(L=>{const ee=ga(L.accountId);ee&&(We[L.accountId]||(We[L.accountId]={name:ee.name.replace(" Credit Card"," CC").replace(" Bank",""),amount:0,count:0,type:ee.type}),We[L.accountId].amount+=L.amount,We[L.accountId].count++)});const nr=Object.values(We).sort((L,ee)=>ee.amount-L.amount),Ke={credit_card_spend:{label:"CC Spending",amount:0,count:0},cc_payment:{label:"CC Payments",amount:0,count:0},bank_debit:{label:"Bank Debits",amount:0,count:0},bank_credit:{label:"Bank Credits",amount:0,count:0},liquid_fund_credit:{label:"LF Deposits",amount:0,count:0},liquid_fund_debit:{label:"LF Withdrawals",amount:0,count:0}};_.forEach(L=>{Ke[L.type]&&(Ke[L.type].amount+=L.amount,Ke[L.type].count++)});const me=Object.values(Ke).filter(L=>L.count>0).sort((L,ee)=>ee.amount-L.amount),ve=[..._].filter(L=>we.includes(L.type)).sort((L,ee)=>ee.amount-L.amount).slice(0,3),dt=[..._].filter(L=>$e.includes(L.type)).sort((L,ee)=>ee.amount-L.amount).slice(0,3);return{totalIncoming:N,totalOutgoing:K,netFlow:H,incomingCount:I,outgoingCount:R,totalCount:_.length,avgIncoming:X,avgOutgoing:B,categoryBreakdown:tr,accountBreakdown:nr,typeBreakdown:me,largestOutgoing:ve,largestIncoming:dt}},[se,p]),nn=Object.keys(ze).sort((_,N)=>N.localeCompare(_)),rn=x.useCallback(_=>{r(N=>{const K=[...N,_];return requestAnimationFrame(()=>pn(K)),K}),De("transactions")},[]),qn=x.useCallback(_=>{r(N=>{const K=N.filter(H=>H.id!==_);return requestAnimationFrame(()=>pn(K)),K})},[]),Gn=x.useCallback(_=>{r(N=>{const K=N.map(H=>H.id===_.id?_:H);return requestAnimationFrame(()=>pn(K)),K})},[]),Kn=x.useCallback(_=>{g(_),requestAnimationFrame(()=>hi(_))},[]),an=x.useCallback(()=>{const _=new Date;T(je(new Date(_.getFullYear(),_.getMonth(),1))),E(je(_)),k("all"),C("all"),oe([])},[]),Jn=x.useCallback(_=>{oe(N=>N.includes(_)?N.filter(K=>K!==_):[...N,_])},[]),Xn=x.useCallback((_,N,K)=>{c(_),l(N),d(K),requestAnimationFrame(()=>{ui(_),pi(N),xi(K)})},[]),Zn=x.useCallback(()=>{Kd(a,o,s,u,p)},[a,o,s,u,p]),Qn=x.useCallback(()=>{var _;(_=O.current)==null||_.click()},[]),er=x.useCallback(_=>{var H;const N=(H=_.target.files)==null?void 0:H[0];if(!N)return;const K=new FileReader;K.onload=I=>{var B;const R=(B=I.target)==null?void 0:B.result,X=Xd(R);X?window.confirm(`Import backup from ${new Date(X.exportedAt).toLocaleDateString()}?

This will replace all current data:
• ${X.transactions.length} transactions
• Initial balances, CC bills, and limits

This action cannot be undone.`)&&(r(X.transactions),c(X.initialBalances),l(X.initialCCBills),d(X.ccLimits||{}),g(X.categories||[]),pn(X.transactions),ui(X.initialBalances),pi(X.initialCCBills),xi(X.ccLimits||{}),hi(X.categories||[])):alert("Invalid backup file.")},K.readAsText(N),_.target.value=""},[]),Ft=()=>{switch(v){case"summary":return e.jsx(bp,{balances:Te,ccLimits:u,creditCardDetailedBalances:Pe});case"cards":return e.jsx(Hh,{children:Pe.map((I,R)=>e.jsx(ep,{detailedBalance:I,index:R,limit:u[I.account.id]},I.account.id))});case"transactions":const _=["#FF3B30","#FF9500","#FFCC00","#34C759","#007AFF","#AF52DE"],N=q.categoryBreakdown.reduce((I,R)=>I+R.amount,0);let K=0;const H=q.categoryBreakdown.map((I,R)=>{const X=N>0?I.amount/N*100:0,B=K;return K+=X,{...I,percent:X,startPercent:B,color:_[R%_.length]}});return e.jsxs(Yh,{children:[e.jsxs(Vh,{children:[e.jsxs(Uh,{onClick:()=>P(!M),children:[e.jsxs(qh,{children:[e.jsx(Y0,{}),"Filters",ge>0&&e.jsxs(Gh,{children:[ge," active"]})]}),e.jsx(Kh,{$expanded:M,children:e.jsx(V0,{})})]}),e.jsx(ie,{children:M&&e.jsxs(Jh,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2,ease:de},children:[e.jsxs(Xh,{children:[e.jsxs($n,{style:{gridColumn:"1 / -1"},children:[e.jsx(In,{children:"Period"}),e.jsxs(o0,{children:[e.jsxs(Wi,{ref:pe,type:"button",onClick:()=>ae(!0),children:[ro(W),e.jsx(to,{})]}),e.jsx(Xt,{isOpen:ne,onClose:()=>ae(!1),selectedDate:W,onDateSelect:I=>{T(I),ae(!1)},triggerRef:pe}),e.jsx(s0,{children:"to"}),e.jsxs(Wi,{ref:be,type:"button",onClick:()=>ye(!0),children:[ro(S),e.jsx(to,{})]}),e.jsx(Xt,{isOpen:te,onClose:()=>ye(!1),selectedDate:S,onDateSelect:I=>{E(I),ye(!1)},triggerRef:be})]})]}),e.jsxs($n,{children:[e.jsx(In,{children:"Category"}),e.jsxs(Li,{value:Y,onChange:I=>k(I.target.value),children:[e.jsx("option",{value:"all",children:"All Categories"}),p.map(I=>e.jsx("option",{value:I.id,children:I.name},I.id))]})]}),e.jsxs($n,{children:[e.jsx(In,{children:"Money Flow"}),e.jsxs(Li,{value:m,onChange:I=>C(I.target.value),children:[e.jsx("option",{value:"all",children:"All Transactions"}),e.jsx("option",{value:"credit",children:"Incoming"}),e.jsx("option",{value:"debit",children:"Outgoing"})]})]}),e.jsxs($n,{style:{gridColumn:"1 / -1"},children:[e.jsxs(In,{children:["Account ",A.length>0&&`(${A.length} selected)`]}),e.jsx(Zh,{children:Ot.map(I=>e.jsx(Qh,{type:"button",$selected:A.includes(I.id),onClick:()=>Jn(I.id),children:I.label},I.id))})]})]}),e.jsx(c0,{children:e.jsx(l0,{onClick:an,whileTap:{scale:.98},children:"Reset Filters"})})]})})]}),e.jsxs(e0,{children:[e.jsx(_i,{$active:J==="insights",onClick:()=>Se("insights"),whileTap:{scale:.98},children:"Insights"}),e.jsx(_i,{$active:J==="transactions",onClick:()=>Se("transactions"),whileTap:{scale:.98},children:"Transactions"})]}),e.jsx(ie,{mode:"wait",children:J==="insights"?e.jsx(t0,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:de},children:se.length===0?e.jsxs(i0,{initial:{opacity:0},animate:{opacity:1},children:[e.jsx(Hi,{children:e.jsx(U0,{})}),e.jsx(Yi,{children:"No Data to Analyze"}),e.jsx(Vi,{children:ge>0?"Try adjusting your filters":"Add transactions to see insights"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Ln,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.4,ease:de},children:[e.jsxs(_n,{children:[e.jsx(An,{children:"Money Flow"}),e.jsxs(On,{children:[q.totalCount," transactions"]})]}),e.jsxs(r0,{children:[e.jsxs(Ai,{children:[e.jsxs(Oi,{children:[e.jsx(Fi,{children:"Incoming"}),e.jsx(Bi,{$color:"#34C759",children:re(q.totalIncoming)})]}),e.jsx(Mi,{children:e.jsx(Pi,{$color:"#34C759",initial:{width:0},animate:{width:`${q.totalIncoming+q.totalOutgoing>0?q.totalIncoming/(q.totalIncoming+q.totalOutgoing)*100:0}%`},transition:{delay:.2,duration:.6,ease:de}})})]}),e.jsxs(Ai,{children:[e.jsxs(Oi,{children:[e.jsx(Fi,{children:"Outgoing"}),e.jsx(Bi,{$color:"#FF3B30",children:re(q.totalOutgoing)})]}),e.jsx(Mi,{children:e.jsx(Pi,{$color:"#FF3B30",initial:{width:0},animate:{width:`${q.totalIncoming+q.totalOutgoing>0?q.totalOutgoing/(q.totalIncoming+q.totalOutgoing)*100:0}%`},transition:{delay:.25,duration:.6,ease:de}})})]}),e.jsxs(a0,{children:[e.jsxs(Ei,{children:[e.jsx(Ni,{children:"Net Flow"}),e.jsxs(zi,{$color:q.netFlow>=0?"#34C759":"#FF3B30",children:[q.netFlow>=0?"+":"",re(q.netFlow)]})]}),e.jsxs(Ei,{children:[e.jsx(Ni,{children:"Avg. Transaction"}),e.jsx(zi,{children:re(q.totalCount>0?(q.totalIncoming+q.totalOutgoing)/q.totalCount:0)})]})]})]})]}),e.jsxs(n0,{children:[q.categoryBreakdown.length>0&&e.jsxs(Ln,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.4,ease:de},children:[e.jsxs(_n,{children:[e.jsx(An,{children:"Spending by Category"}),e.jsxs(On,{children:[q.categoryBreakdown.length," categories"]})]}),e.jsxs(Ir,{children:[e.jsxs(Lr,{children:[e.jsx(_r,{children:"Total Spent"}),e.jsx(Ar,{children:re(N)})]}),e.jsx(Or,{children:e.jsx(Fr,{children:H.map((I,R)=>e.jsx(Br,{$color:I.color,$isFirst:R===0,$isLast:R===H.length-1,initial:{width:0},animate:{width:`${I.percent}%`},transition:{delay:.2+R*.05,duration:.5,ease:de}},I.name))})}),e.jsx(Mr,{children:H.map((I,R)=>e.jsxs(Pr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.3+R*.06,duration:.3},children:[e.jsx(Er,{$color:I.color}),e.jsxs(Nr,{children:[e.jsxs(zr,{children:[e.jsx(Wr,{children:I.name}),e.jsx(Rr,{children:re(I.amount)})]}),e.jsxs(Hr,{children:[e.jsxs(Yr,{$color:I.color,children:[I.percent.toFixed(1),"%"]}),e.jsx(Ur,{children:e.jsx(qr,{$color:I.color,initial:{width:0},animate:{width:`${I.percent}%`},transition:{delay:.4+R*.06,duration:.4,ease:de}})}),e.jsxs(Vr,{children:[I.count," transactions"]})]})]})]},I.name))})]})]}),q.accountBreakdown.length>0&&(()=>{const I=q.accountBreakdown.reduce((B,Z)=>B+Z.amount,0),R={bank:"#007AFF",credit_card:"#FF9500",liquid_fund:"#AF52DE"},X=q.accountBreakdown.map(B=>({...B,percent:I>0?B.amount/I*100:0,color:R[B.type]||"#34C759"}));return e.jsxs(Ln,{$span:2,initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.4,ease:de},children:[e.jsxs(_n,{children:[e.jsx(An,{children:"Activity by Account"}),e.jsxs(On,{children:[q.accountBreakdown.length," accounts"]})]}),e.jsxs(Ir,{children:[e.jsxs(Lr,{children:[e.jsx(_r,{children:"Total Activity"}),e.jsx(Ar,{children:re(I)})]}),e.jsx(Or,{children:e.jsx(Fr,{children:X.map((B,Z)=>e.jsx(Br,{$color:B.color,$isFirst:Z===0,$isLast:Z===X.length-1,initial:{width:0},animate:{width:`${B.percent}%`},transition:{delay:.2+Z*.05,duration:.5,ease:de}},B.name))})}),e.jsx(Mr,{children:X.map((B,Z)=>e.jsxs(Pr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.3+Z*.06,duration:.3},children:[e.jsx(Er,{$color:B.color}),e.jsxs(Nr,{children:[e.jsxs(zr,{children:[e.jsx(Wr,{children:B.name}),e.jsx(Rr,{children:re(B.amount)})]}),e.jsxs(Hr,{children:[e.jsxs(Yr,{$color:B.color,children:[B.percent.toFixed(1),"%"]}),e.jsx(Ur,{children:e.jsx(qr,{$color:B.color,initial:{width:0},animate:{width:`${B.percent}%`},transition:{delay:.4+Z*.06,duration:.4,ease:de}})}),e.jsxs(Vr,{children:[B.count," transactions"]})]})]})]},B.name))})]})]})})()]}),q.typeBreakdown.length>0&&(()=>{const I=q.typeBreakdown.reduce((B,Z)=>B+Z.amount,0),R={"CC Spending":"#FF3B30","CC Payments":"#FF9500","Bank Debits":"#007AFF","Bank Credits":"#34C759","LF Deposits":"#AF52DE","LF Withdrawals":"#5856D6"},X=q.typeBreakdown.map((B,Z)=>({...B,percent:I>0?B.amount/I*100:0,color:R[B.label]||_[Z%_.length]}));return e.jsxs(Ln,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.2,duration:.4,ease:de},children:[e.jsxs(_n,{children:[e.jsx(An,{children:"Transaction Types"}),e.jsxs(On,{children:[q.typeBreakdown.length," types"]})]}),e.jsxs(Ir,{children:[e.jsxs(Lr,{children:[e.jsx(_r,{children:"Total Volume"}),e.jsx(Ar,{children:re(I)})]}),e.jsx(Or,{children:e.jsx(Fr,{children:X.map((B,Z)=>e.jsx(Br,{$color:B.color,$isFirst:Z===0,$isLast:Z===X.length-1,initial:{width:0},animate:{width:`${B.percent}%`},transition:{delay:.25+Z*.05,duration:.5,ease:de}},B.label))})}),e.jsx(Mr,{children:X.map((B,Z)=>e.jsxs(Pr,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:.35+Z*.06,duration:.3},children:[e.jsx(Er,{$color:B.color}),e.jsxs(Nr,{children:[e.jsxs(zr,{children:[e.jsx(Wr,{children:B.label}),e.jsx(Rr,{children:re(B.amount)})]}),e.jsxs(Hr,{children:[e.jsxs(Yr,{$color:B.color,children:[B.percent.toFixed(1),"%"]}),e.jsx(Ur,{children:e.jsx(qr,{$color:B.color,initial:{width:0},animate:{width:`${B.percent}%`},transition:{delay:.45+Z*.06,duration:.4,ease:de}})}),e.jsxs(Vr,{children:[B.count," transactions"]})]})]})]},B.label))})]})]})})()]})},"insights"):e.jsx(d0,{as:y.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2,ease:de},children:e.jsx(u0,{children:se.length===0?e.jsxs(k0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,ease:de},children:[e.jsx(Hi,{children:e.jsx(z0,{})}),e.jsx(Yi,{children:"No Transactions"}),e.jsx(Vi,{children:ge>0?"Try adjusting your filters":"Add your first transaction"})]}):nn.map(I=>e.jsxs(p0,{children:[e.jsx(x0,{children:J0(I)}),e.jsx(ie,{mode:"popLayout",children:ze[I].map(R=>{var Z;const X=ga(R.accountId),B=R.categoryId?Wd(p,R.categoryId):void 0;return e.jsxs(h0,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2,ease:de},layout:!0,children:[e.jsx(g0,{$type:R.type,children:K0(R.type)}),e.jsxs(f0,{children:[e.jsxs(m0,{children:[R.description,B&&e.jsx(w0,{children:B.name})]}),e.jsx(v0,{children:(Z=X==null?void 0:X.name)==null?void 0:Z.replace(" Credit Card"," CC").replace(" Bank","")})]}),e.jsxs(y0,{children:[e.jsxs(b0,{$positive:no(R.type),children:[no(R.type)?"+":"-",re(R.amount)]}),e.jsxs(j0,{children:[e.jsx(Ri,{type:"button",onClick:()=>$(R),"aria-label":"Edit transaction",whileTap:{scale:.95},children:e.jsx(R0,{})}),e.jsx(Ri,{$danger:!0,type:"button",onClick:()=>qn(R.id),"aria-label":"Delete transaction",whileTap:{scale:.95},children:e.jsx(W0,{})})]})]})]},R.id)})})]},I))})},"transactions")})]});case"add":return e.jsx(T0,{children:e.jsx(Np,{onAddTransaction:rn,defaultDate:t,categories:p})});case"manage":return e.jsxs(C0,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[e.jsxs(Gr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.05,duration:.3,ease:de},children:[e.jsx(Kr,{children:"Settings"}),e.jsxs(Ui,{children:[e.jsxs(Jr,{type:"button",onClick:()=>f(!0),whileTap:{scale:.98},children:[e.jsx(Xr,{$color:"#007AFF",children:e.jsx(ls,{})}),e.jsxs(Zr,{children:[e.jsx(Qr,{children:"Balances & Limits"}),e.jsx(ea,{children:"Configure initial balances and credit limits"})]}),e.jsx(qi,{children:e.jsx(eo,{})})]}),e.jsxs(Jr,{type:"button",onClick:()=>j(!0),whileTap:{scale:.98},children:[e.jsx(Xr,{$color:"#FF9500",children:e.jsx(H0,{})}),e.jsxs(Zr,{children:[e.jsx(Qr,{children:"Categories"}),e.jsx(ea,{children:"Organize your transactions"})]}),e.jsx(Gi,{children:p.length}),e.jsx(qi,{children:e.jsx(eo,{})})]})]})]}),e.jsxs(Gr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3,ease:de},children:[e.jsx(Kr,{children:"Data"}),e.jsxs(S0,{children:[e.jsxs(Ki,{type:"button",$variant:"export",onClick:Zn,whileTap:{scale:.97},children:[e.jsx(Ji,{$color:"#34C759",children:e.jsx(A0,{})}),e.jsx(Xi,{children:"Export"}),e.jsx(Zi,{children:"Save backup file"})]}),e.jsxs(Ki,{type:"button",$variant:"import",onClick:Qn,whileTap:{scale:.97},children:[e.jsx(Ji,{$color:"#007AFF",children:e.jsx(O0,{})}),e.jsx(Xi,{children:"Import"}),e.jsx(Zi,{children:"Restore from file"})]})]})]}),e.jsxs(Gr,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.15,duration:.3,ease:de},children:[e.jsx(Kr,{children:"About"}),e.jsx(Ui,{children:e.jsxs(Jr,{as:"div",style:{cursor:"default"},children:[e.jsx(Xr,{$color:"#8E8E93",children:e.jsx(F0,{})}),e.jsxs(Zr,{children:[e.jsx(Qr,{children:"Transactions"}),e.jsx(ea,{children:"Total records stored"})]}),e.jsx(Gi,{children:a.length})]})})]})]})}};return e.jsxs(e.Fragment,{children:[e.jsx(Fh,{children:e.jsxs(Bh,{children:[e.jsx(Mh,{children:e.jsx(Su,{selectedDate:t,onDateChange:n})}),e.jsx(Ph,{children:at.map(_=>e.jsx(Eh,{$active:v===_.id,onClick:()=>De(_.id),whileTap:{scale:.98},children:_.label},_.id))})]})}),e.jsxs(Oh,{variants:q0,initial:"hidden",animate:"visible",children:[e.jsx(zh,{drag:"x",dragConstraints:{left:0,right:0},dragElastic:.15,onDragEnd:Ie,children:e.jsxs(mo,{$maxWidth:"wide",style:{flex:1,display:"flex",flexDirection:"column"},children:[e.jsx(Nh,{}),e.jsx(Wh,{style:{flex:1},children:e.jsx(ie,{mode:"wait",custom:F,children:e.jsx(Rh,{custom:F,variants:G0,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:500,damping:40},opacity:{duration:.15}},children:Ft()},v)})})]})}),e.jsx(D0,{ref:O,type:"file",accept:".json",onChange:er}),e.jsx(Nx,{isOpen:h,onClose:()=>f(!1),initialBalances:o,initialCCBills:s,ccLimits:u,onSave:Xn}),e.jsx(hh,{isOpen:b,onClose:()=>j(!1),categories:p,onSave:Kn}),e.jsx(Ah,{isOpen:!!w,onClose:()=>$(null),transaction:w,categories:p,onSave:Gn})]})]})},ds=()=>new Promise((t,n)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=n,a.src="/tools/images/logo-optimized.png"}),Z0=async(t,n,a,r=48)=>{try{const o=await ds(),c=Math.min(n,a)*.03,s=n-r-c,l=a-r-c;t.globalAlpha=.7,t.drawImage(o,s,l,r,r),t.globalAlpha=1}catch(o){console.warn("Failed to load watermark logo:",o)}},ma=(t,n,a)=>{const r=[],o=l=>{const u=[];let d=l;for(;d.length>0;){let p=d.length;for(;p>0&&t.measureText(d.slice(0,p)).width>a;)p--;p=Math.max(1,p);const g=d.slice(0,p),h=g.lastIndexOf("/"),f=g.lastIndexOf("-"),b=g.lastIndexOf(".");let j=p;const w=[h,f,b].filter($=>$>0&&$<p-1);w.length>0&&(j=Math.max(...w)+1),u.push(d.slice(0,j)),d=d.slice(j)}return u},c=n.split(" ");let s="";for(const l of c)if(t.measureText(l).width>a){s&&(r.push(s),s="");const d=o(l);for(let p=0;p<d.length;p++)p<d.length-1?r.push(d[p]):s=d[p]}else{const d=s?`${s} ${l}`:l;t.measureText(d).width>a&&s?(r.push(s),s=l):s=d}return s&&r.push(s),r},Q0=async t=>{const{text:n,fontSize:a,fontFamily:r,textColor:o,backgroundColor:c,alignment:s,aspectRatio:l,padding:u}=t,d=document.createElement("canvas");d.width=l.width,d.height=l.height;const p=d.getContext("2d");if(!p)throw new Error("Failed to get canvas context");p.fillStyle=c,p.fillRect(0,0,d.width,d.height);const g=a*(l.width/1080);p.font=`600 ${g}px ${r}`,p.fillStyle=o;const h=u*(l.width/1080),f=d.width-h*2,b=n.split(`
`),j=[];for(const z of b)if(z.trim()==="")j.push("");else{const O=ma(p,z,f);j.push(...O)}const w=g*1.4,$=j.length*w;let v=(d.height-$)/2+g;p.textAlign=s;let D;switch(s){case"left":D=h;break;case"right":D=d.width-h;break;default:D=d.width/2}for(const z of j)z!==""&&p.fillText(z,D,v),v+=w;const F=Math.min(d.width,d.height)*.06;return await Z0(p,d.width,d.height,F),d.toDataURL("image/png",1)},eg=async t=>{const{metadata:n,aspectRatio:a,backgroundColor:r,accentColor:o}=t,c=document.createElement("canvas");c.width=a.width,c.height=a.height;const s=c.getContext("2d");if(!s)throw new Error("Failed to get canvas context");const l=a.width/1080,u=a.height>a.width,d=r==="#000000"?"#ffffff":"#000000",p=r==="#000000"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)";s.fillStyle=r,s.fillRect(0,0,c.width,c.height);const g=64*l,h=c.width-g*2,f=20*l,b=36*l,j=(u?44:40)*l,w=(u?24:22)*l,$=18*l,v=j*1.25,D=w*1.45,F=u?5:4,z=u?4:3;s.font=`700 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`;const O=ma(s,n.title,h),M=O.slice(0,F);if(O.length>F&&M.length>0){const J=M[M.length-1];J.endsWith("...")||(M[M.length-1]=J.slice(0,-3)+"...")}s.font=`400 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`;const P=n.description?ma(s,n.description,h):[],W=P.slice(0,z);if(P.length>z&&W.length>0){const J=W[W.length-1];J.endsWith("...")||(W[W.length-1]=J.slice(0,-3)+"...")}const T=b+f,S=M.length*v,E=W.length>0?f+W.length*D:0,Y=T+S+E,k=Math.min(c.width,c.height)*.045,m=g+k+16*l,C=c.height-m-g,A=C-Y-f*2;let oe=0;if(n.image&&A>100*l){const J=u?c.width*.5:c.width*.4,Se=120*l;oe=Math.min(J,Math.max(Se,A))}const ne=oe>0?f+oe:0,ae=Y+ne;let te=g+Math.max(0,(C-ae)/2);if(n.favicon)try{const J=await ao(n.favicon);s.save(),s.beginPath(),s.arc(g+b/2,te+b/2,b/2,0,Math.PI*2),s.closePath(),s.clip(),s.drawImage(J,g,te,b,b),s.restore()}catch{s.fillStyle=o,s.beginPath(),s.arc(g+b/2,te+b/2,b/2,0,Math.PI*2),s.fill()}n.siteName&&(s.font=`500 ${22*l}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=p,s.textAlign="left",s.textBaseline="middle",s.fillText(n.siteName,g+b+10*l,te+b/2)),te+=b+f,s.font=`700 ${j}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=d,s.textAlign="left",s.textBaseline="top";for(const J of M)s.fillText(J,g,te),te+=v;if(W.length>0){te+=f,s.font=`400 ${w}px -apple-system, BlinkMacSystemFont, sans-serif`,s.fillStyle=p;for(const J of W)s.fillText(J,g,te),te+=D}if(n.image&&oe>0){te+=f;try{const J=await ao(n.image),Se=h;s.save(),tg(s,g,te,Se,oe,10*l),s.clip();const De=J.width/J.height,Ie=Se/oe;let Te=0,Pe=0,$e=J.width,we=J.height;De>Ie?($e=J.height*Ie,Te=(J.width-$e)/2):(we=J.width/Ie,Pe=(J.height-we)/2),s.drawImage(J,Te,Pe,$e,we,g,te,Se,oe),s.restore()}catch{}}const ye=c.height-g;s.font=`500 ${$}px -apple-system, BlinkMacSystemFont, monospace`,s.fillStyle=o;const pe=h-k-16*l;let be=n.url;for(;s.measureText(be).width>pe&&be.length>20;)be=be.slice(0,-4)+"...";s.textAlign="left",s.textBaseline="middle",s.fillText(be,g,ye-k/2);try{const J=await ds();s.globalAlpha=.7,s.drawImage(J,c.width-g-k,ye-k,k,k),s.globalAlpha=1}catch{}return c.toDataURL("image/png",1)},ao=t=>new Promise((n,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>n(r),r.onerror=a,r.src=t}),tg=(t,n,a,r,o,c)=>{t.beginPath(),t.moveTo(n+c,a),t.lineTo(n+r-c,a),t.quadraticCurveTo(n+r,a,n+r,a+c),t.lineTo(n+r,a+o-c),t.quadraticCurveTo(n+r,a+o,n+r-c,a+o),t.lineTo(n+c,a+o),t.quadraticCurveTo(n,a+o,n,a+o-c),t.lineTo(n,a+c),t.quadraticCurveTo(n,a,n+c,a),t.closePath()},ng=(t,n)=>{const a=document.createElement("a");a.download=n,a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},rg=async t=>{var o,c;const a=new URL(t).hostname.replace("www.",""),r={title:a,description:"",image:null,siteName:a,url:t,favicon:`https://www.google.com/s2/favicons?domain=${a}&sz=128`};try{const s=`https://api.microlink.io?url=${encodeURIComponent(t)}`,l=await fetch(s);if(!l.ok)return r;const u=await l.json();return u.status==="success"&&u.data?{title:u.data.title||a,description:u.data.description||"",image:((o=u.data.image)==null?void 0:o.url)||null,siteName:u.data.publisher||a,url:t,favicon:((c=u.data.logo)==null?void 0:c.url)||r.favicon}:r}catch(s){return console.warn("Failed to fetch URL metadata:",s),r}},io=[{id:"1:1",name:"Square",ratio:"1:1",width:1080,height:1080,category:"social",description:"Instagram feed"},{id:"9:16",name:"Vertical",ratio:"9:16",width:1080,height:1920,category:"social",description:"Stories & Reels"}],ag='-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',ig=t=>{const n=t.trim();if(!n.startsWith("http://")&&!n.startsWith("https://"))return!1;try{return new URL(n),!0}catch{return!1}},og=i.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`,sg=i.div`
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
`,cg=i.div`
  width: 100%;
  max-width: 600px;
`,lg=i.div`
  position: relative;
  width: 100%;
  padding-bottom: ${({$paddingBottom:t})=>t};
  background: ${({$bgColor:t})=>t};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  transition: padding-bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,dg=i.div`
  position: absolute;
  inset: 0;
`,ug=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  position: absolute;
  inset: 0;
`,pg=i(y.div)`
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
`,xg=i.div`
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
`,hg=i.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    max-width: none;
  }
`,Ut=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,qt=i.label`
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
`,gg=i.textarea`
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
`,oo=i.div`
  display: flex;
  background: var(--glass-bg);
  border-radius: 10px;
  padding: 3px;
  gap: 2px;
`,so=i.button`
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
`,fg=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,mg=i.div`
  flex: 1;
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`,vg=i.input`
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
`,yg=i.span`
  min-width: 48px;
  padding: 6px 10px;
  background: var(--glass-bg);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--text-primary);
  text-align: center;
`,bg=i(y.button)`
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
`,jg=i(y.div)`
  padding: 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,wg=i.input`
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
`,kg=i.textarea`
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
`,Cg=i(y.div)`
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
`,Sg=i(y.div)`
  width: 24px;
  height: 24px;
  border: 2px solid rgba(var(--accent-rgb), 0.2);
  border-top-color: var(--accent);
  border-radius: 50%;
`,Dg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"7 10 12 15 17 10"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),Tg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]}),$g=()=>{const{isDark:t}=ya(),[n,a]=x.useState(""),[r,o]=x.useState(64),[c,s]=x.useState("left"),[l,u]=x.useState(io[1]),[d,p]=x.useState(null),[g,h]=x.useState(!1),[f,b]=x.useState(null),[j,w]=x.useState(""),[$,v]=x.useState(""),[D,F]=x.useState(!1),[z,O]=x.useState(null),M=x.useMemo(()=>ig(n),[n]),P=t?"#000000":"#ffffff",W=t?"#ffffff":"#000000",T=`${l.height/l.width*100}%`,S=x.useCallback(async()=>{if(!(!M||!n.trim())){F(!0),O(null),p(null);try{const m=await rg(n.trim());b(m),w(m.title),v(m.description)}catch{O("Unable to fetch URL preview")}F(!1)}},[n,M]),E=x.useCallback(async()=>{if(!n.trim()||M){M||p(null);return}h(!0);try{const m=await Q0({text:n.trim(),fontSize:r,fontFamily:ag,textColor:W,backgroundColor:P,alignment:c,aspectRatio:l,padding:80});p(m)}catch(m){console.error("Preview generation failed:",m)}h(!1)},[n,M,r,c,l,P,W]),Y=x.useCallback(async()=>{if(f){h(!0);try{const m=await eg({metadata:{...f,title:j||f.title,description:$||f.description},aspectRatio:l,backgroundColor:P,accentColor:"#2A9D8F"});p(m)}catch(m){console.error("URL preview generation failed:",m)}h(!1)}},[f,j,$,l,P]);x.useEffect(()=>{if(M)return;const m=setTimeout(E,200);return()=>clearTimeout(m)},[E,M]),x.useEffect(()=>{M?S():(b(null),w(""),v(""),O(null))},[M,S]),x.useEffect(()=>{f&&Y()},[f,j,$,l,Y]);const k=()=>{if(d){const A=`pn-${new Date().toISOString().replace(/[-:]/g,"").replace("T","-").split(".")[0]}.png`;ng(d,A)}};return e.jsxs(og,{children:[e.jsx(sg,{children:e.jsx(cg,{children:e.jsx(lg,{$bgColor:P,$paddingBottom:T,children:e.jsxs(dg,{children:[d&&e.jsx(ug,{src:d,alt:"Preview"}),e.jsx(ie,{children:!d&&e.jsxs(pg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(Tg,{}),e.jsx("span",{children:M?"Fetch URL to preview":"Type to preview"})]},"placeholder")})]})})})}),e.jsx(xg,{children:e.jsxs(hg,{children:[e.jsxs(Ut,{children:[e.jsx(qt,{children:"Content"}),e.jsx(gg,{value:n,onChange:m=>a(m.target.value),onContextMenu:m=>m.stopPropagation(),placeholder:"Type your text or paste a URL..."})]}),M?e.jsxs(e.Fragment,{children:[D&&e.jsx(Ut,{style:{alignItems:"center"},children:e.jsx(Sg,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}})}),z&&e.jsx(Cg,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:z}),f&&e.jsxs(jg,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[e.jsx(qt,{children:"Edit Details"}),e.jsx(wg,{value:j,onChange:m=>w(m.target.value),placeholder:"Title"}),e.jsx(kg,{value:$,onChange:m=>v(m.target.value),placeholder:"Description"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Ut,{children:[e.jsx(qt,{children:"Font Size"}),e.jsxs(fg,{children:[e.jsx(mg,{children:e.jsx(vg,{type:"range",min:"24",max:"120",value:r,onChange:m=>o(Number(m.target.value))})}),e.jsx(yg,{children:r})]})]}),e.jsxs(Ut,{children:[e.jsx(qt,{children:"Alignment"}),e.jsx(oo,{children:["left","center","right"].map(m=>e.jsx(so,{$active:c===m,onClick:()=>s(m),children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]}),e.jsxs(Ut,{children:[e.jsx(qt,{children:"Format"}),e.jsx(oo,{children:io.map(m=>e.jsx(so,{$active:l.id===m.id,onClick:()=>u(m),children:m.name},m.id))})]}),e.jsxs(bg,{onClick:k,disabled:!d||g,whileTap:{scale:.98},children:[e.jsx(Dg,{}),"Download Image"]})]})})]})},Ig=i(y.div)`
  min-height: 100vh;
  padding-top: 60px;
  background: var(--bg-primary);
  
  @media (max-width: 640px) {
    padding-bottom: 80px;
  }
`,Lg={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},_g=()=>e.jsx(Ig,{variants:Lg,initial:"hidden",animate:"visible",children:e.jsx($g,{})}),Ag=()=>{const t=navigator.userAgent;return!!(/iPhone|iPad|iPod/.test(t)||/Macintosh/.test(t)&&navigator.maxTouchPoints>1)},Og=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 3H5a2 2 0 0 0-2 2v2"}),e.jsx("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),e.jsx("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),e.jsx("path",{d:"M17 21h2a2 2 0 0 0 2-2v-2"}),e.jsx("path",{d:"M8 8v2"}),e.jsx("path",{d:"M16 8v2"}),e.jsx("path",{d:"M12 8v5"}),e.jsx("path",{d:"M8 15c0 1.5 1.8 3 4 3s4-1.5 4-3"})]}),Fg=()=>e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("path",{d:"M12 2C9.5 2 7.5 3.5 6.5 5.5"}),e.jsx("path",{d:"M17.5 5.5c-1-2-3-3.5-5.5-3.5"}),e.jsx("path",{d:"M4 10c0-4.5 3.5-8 8-8s8 3.5 8 8v4c0 4.5-3.5 8-8 8"}),e.jsx("path",{d:"M12 6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"}),e.jsx("path",{d:"M12 6c2.2 0 4 1.8 4 4v2"}),e.jsx("path",{d:"M12 10v8"}),e.jsx("path",{d:"M8 14c0 2.2 1.8 4 4 4"})]}),Bg=i.div`
  min-height: 100vh;
  position: relative;
`,Mg=i.main`
  position: relative;
  z-index: 1;
`,Pg=i.a`
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
`,Eg=Lt`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`,co=i.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  z-index: 10000;
  gap: 24px;
`,lo=i.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  animation: ${Eg} 1.5s ease-in-out infinite;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,uo=i.p`
  color: var(--text-secondary);
  font-size: 15px;
`,Ng=i.button`
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
`,zg=()=>{const t=ys(),n=bs();return x.useEffect(()=>{const a=sessionStorage.getItem("spa-redirect");if(a){sessionStorage.removeItem("spa-redirect");const r=a.replace(/^\/tools/,"")||"/";r!==n.pathname&&t(r,{replace:!0})}},[t,n.pathname]),null};function Wg(){const{isAuthenticated:t,isLoading:n,authFailed:a,retryAuth:r}=$s(),o=x.useMemo(()=>Ag()?Og:Fg,[]);return n||!t&&!a?e.jsxs(co,{children:[e.jsx(lo,{children:e.jsx(o,{})}),e.jsx(uo,{children:"Authenticating..."})]}):a&&!t?e.jsxs(co,{children:[e.jsx(lo,{style:{animation:"none",opacity:1},children:e.jsx(o,{})}),e.jsx(uo,{children:"Authentication required to continue"}),e.jsx(Ng,{onClick:r,children:"Try Again"})]}):e.jsxs(Bg,{children:[e.jsx(zg,{}),e.jsx(Pg,{href:"#main-content",children:"Skip to main content"}),e.jsx(As,{}),e.jsx(Rs,{}),e.jsx(Mg,{id:"main-content",children:e.jsxs(ms,{children:[e.jsx(Mt,{path:"/",element:e.jsx(rc,{})}),e.jsx(Mt,{path:"/tax-manager",element:e.jsx(nl,{})}),e.jsx(Mt,{path:"/expense-manager",element:e.jsx(X0,{})}),e.jsx(Mt,{path:"/canvas-manager",element:e.jsx(_g,{})}),e.jsx(Mt,{path:"/tax-calculator",element:e.jsx(vs,{to:"/tax-manager",replace:!0})})]})})]})}function Rg(){return e.jsx(fs,{basename:"/tools",children:e.jsx(ws,{children:e.jsxs(Ts,{children:[e.jsx(Is,{}),e.jsx(Wg,{})]})})})}xo(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(Rg,{})}));
