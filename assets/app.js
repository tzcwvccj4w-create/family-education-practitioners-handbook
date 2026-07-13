
document.querySelectorAll('[data-copy-target]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const el=document.querySelector(btn.dataset.copyTarget);
    try{
      await navigator.clipboard.writeText(el.innerText);
      const old=btn.textContent; btn.textContent='已复制 ✓';
      setTimeout(()=>btn.textContent=old,1600);
    }catch(e){alert('复制失败，请手动选择文本复制。');}
  });
});
