const t=["keydown","wheel","mousewheel","mousedown","mousemove","touchstart","touchmove","MSPointerDown","MSPointerMove"],e={events:t,isActive:!1,timeout:1e4};function s(t){clearTimeout(this.timer),!1===this.isActive&&(this.isActive=!0,this.listeners.forEach((e=>e(this.isActive,t)))),this.timer=setTimeout((()=>{this.isActive=!1,this.listeners.forEach((t=>t(this.isActive)))}),this.settings.timeout)}class i{constructor(t={}){this.settings={...e,...t},this.isActive=this.settings.isActive,this.timer=null,this.listeners=new Set}observe(){const t=s.bind(this);this.settings.isActive&&t(),this.settings.events.forEach((e=>{document.addEventListener(e,t)}))}unobserve(){clearTimeout(this.timer),this.settings.events.forEach((t=>{document.removeEventListener(t,s.bind(this))}))}addListener(t){return this.listeners.add(t),this}removeListener(t){return this.listeners.delete(t),this}}export{i as UserIdleObserver,t as domEvents};
