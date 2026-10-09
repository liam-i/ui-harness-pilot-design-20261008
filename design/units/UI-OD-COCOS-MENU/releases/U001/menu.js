const menu=document.querySelector('#menu'),session=document.querySelector('#session'),dialog=document.querySelector('#reset-dialog');
let started=false;
function showSession(){menu.hidden=true;session.hidden=false}
function showMenu(){session.hidden=true;menu.hidden=false}
function showReset(){document.querySelector('#reset-detail').textContent=started?'Your session will stay available.':'You can start a new session next.';dialog.showModal()}
document.querySelector('#new-game').onclick=()=>{started=true;document.querySelector('#continue').disabled=false;showSession()};
document.querySelector('#continue').onclick=()=>{if(started)showSession()};
document.querySelector('#menu-back').onclick=showMenu;
document.querySelector('#reset-best').onclick=showReset;
document.querySelector('#cancel').onclick=()=>dialog.close();
document.querySelector('#confirm-reset').onclick=()=>{document.querySelector('#best').textContent='0';dialog.close()};
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!dialog.open&&!session.hidden){event.preventDefault();showMenu()}});
// Explicit reference states for design review only; native lifecycle is tested in the consumer.
const query=new URLSearchParams(location.search),state=query.get('state')||'default';
const known=['default','resumable','zero-empty','zero-resumable','reset-empty','reset-resumable','active'];
if(known.includes(state)){
 started=['resumable','zero-resumable','reset-resumable','active'].includes(state);
 document.querySelector('#continue').disabled=!started;
 if(state.startsWith('zero-')||query.get('best')==='0')document.querySelector('#best').textContent='0';
 if(state==='active')showSession();
 if(state.startsWith('reset-'))showReset();
}
