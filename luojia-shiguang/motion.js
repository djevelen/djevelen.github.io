// GSAP 动效独立于出题、判分状态；本地依赖，离线可用。
(() => {
 const g=window.gsap, slots=new Map();
 const toggle=document.getElementById('motion-toggle');
 let enabled=true, reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 try{enabled=localStorage.getItem('luojia-motion')!=='off';}catch{}
 const allowed=()=>!!g&&enabled&&!reduced;
 function stop(key){slots.get(key)?.revert();slots.delete(key);}
 function stopAll(){for(const key of [...slots.keys()])stop(key);document.querySelectorAll('.celebration').forEach(el=>el.remove());}
 function run(key,fn){stop(key);if(allowed())slots.set(key,g.context(fn));}
 function sync(){toggle.textContent=!g?'动画不可用':reduced?'动画：已减弱':enabled?'动画：开':'动画：关';toggle.setAttribute('aria-pressed',String(allowed()));toggle.disabled=!g||reduced;}
 toggle.onclick=()=>{enabled=!enabled;stopAll();sync();try{localStorage.setItem('luojia-motion',enabled?'on':'off');}catch{}};
 if(g){const mm=g.matchMedia();mm.add({all:'all',reduce:'(prefers-reduced-motion: reduce)'},ctx=>{reduced=ctx.conditions.reduce;stopAll();sync();});}
 sync();
 function card(){run('card',()=>{g.fromTo('#card > *',{y:8,autoAlpha:0},{y:0,autoAlpha:1,duration:.3,stagger:.025,ease:'power2.out',clearProps:'transform,opacity,visibility'});});}
 function focusGame(){const end=document.getElementById('game').getBoundingClientRect().top+scrollY-24;if(!allowed()){window.scrollTo(0,end);return;}run('scroll',()=>{const state={y:scrollY};g.to(state,{y:end,duration:.65,ease:'power3.inOut',onUpdate:()=>window.scrollTo(0,state.y)});});}
 window.GameMotion={
  focusGame,
  score(total){const arc=document.getElementById('score-arc');if(!arc)return;stop('score');const previous=Number(arc.getAttribute('stroke-dashoffset'));arc.setAttribute('stroke-dashoffset',String(100-total));run('score',()=>g.fromTo(arc,{strokeDashoffset:previous},{strokeDashoffset:100-total,duration:.5,ease:'power2.out',clearProps:'strokeDashoffset'}));},
  clearCard(){stop('card');stop('result');stop('feedback');document.querySelectorAll('.celebration').forEach(el=>el.remove());},
  clearMap(){stop('pin');stop('answer');},
  intro(){run('intro',()=>{g.from(['.map-panel','.score-strip','.question-card','.guide'],{y:24,autoAlpha:0,duration:.65,stagger:.13,ease:'power3.out',clearProps:'transform,opacity,visibility'});});},
  card,
  pin(){run('pin',()=>{const circles=document.querySelectorAll('#selection-layer > g > circle');g.fromTo(circles,{scale:.3,transformOrigin:'50% 50%'},{scale:1,duration:.38,ease:'back.out(1.35)',clearProps:'transform'});});},
  answer(){run('answer',()=>{const circle=document.querySelector('#answer-layer > circle');if(!circle)return;g.fromTo(circle,{scale:.15,opacity:0,transformOrigin:'50% 50%'},{scale:1,opacity:1,duration:.55,ease:'power2.out',clearProps:'transform,opacity'});});},
  feedback(correct){card();run('feedback',()=>{if(correct){g.fromTo('#score',{scale:1.08},{scale:1,duration:.45,ease:'power3.out',clearProps:'transform'});g.fromTo('.feedback strong',{opacity:.45},{opacity:1,duration:.3,clearProps:'opacity'});}else{g.fromTo('.feedback',{x:-4},{x:0,duration:.3,ease:'power2.out',clearProps:'transform'});}});},
  result(total){card();run('result',()=>{g.fromTo('.result-number',{scale:.96,opacity:.5},{scale:1,opacity:1,duration:.45,ease:'power2.out',clearProps:'transform,opacity'});});},
 };
 const hoverCards='.map-panel,.score-strip,.question-card,.guide';
 document.addEventListener('pointerover',event=>{if(!allowed()||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const target=event.target.closest(hoverCards);if(!target||target.contains(event.relatedTarget))return;stop('intro');run('hover:'+target.classList[0],()=>g.to(target,{scale:1.05,duration:.28,ease:'power2.out',overwrite:'auto'}));});
 document.addEventListener('pointerout',event=>{const target=event.target.closest(hoverCards);if(!target||target.contains(event.relatedTarget))return;const key='hover:'+target.classList[0];if(!slots.has(key))return;const scale=Number(g.getProperty(target,'scale'));if(allowed())run(key,()=>g.fromTo(target,{scale},{scale:1,duration:.25,ease:'power2.out',clearProps:'transform'}));else stop(key);});
 window.addEventListener('wheel',()=>stop('scroll'),{passive:true});window.addEventListener('touchstart',()=>stop('scroll'),{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAll();});
})();
