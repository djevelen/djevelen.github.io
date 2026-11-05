// Mobile action bar mirrors the existing action; scoring remains in app.js.
(() => {
 const card=document.getElementById('card');
 const dock=document.createElement('section');
 dock.className='mobile-dock';dock.setAttribute('aria-label','当前题目快捷操作');dock.hidden=true;
 dock.innerHTML='<div class="dock-copy"><span class="dock-hint"></span><strong class="dock-title"></strong></div><button class="dock-action" type="button"></button>';
 document.body.append(dock);
 const action=dock.querySelector('button'),title=dock.querySelector('.dock-title'),hint=dock.querySelector('.dock-hint');
 function source(){return card.querySelector('#submit, #next');}
 function sync(){
  const button=source();dock.hidden=!button;document.body.classList.toggle('has-mobile-dock',!!button);
  if(!button)return;
  title.textContent=card.querySelector('h2')?.textContent||'';
  hint.textContent=card.querySelector('.feedback strong')?.textContent || (button.disabled?'先在地图上点选位置':'已选好，可以确认');
  action.textContent=button.textContent;action.disabled=button.disabled;
 }
 action.onclick=()=>{const button=source();if(button&&!button.disabled)button.click();};
 new MutationObserver(sync).observe(card,{childList:true,subtree:true,attributes:true,attributeFilter:['disabled'],characterData:true});
 sync();
})();
