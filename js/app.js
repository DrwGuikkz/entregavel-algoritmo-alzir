const app = (()=>{
  const els = {
    cover:document.getElementById('cover'),
    algList:document.getElementById('alg-list'),
    algsUl:document.getElementById('algorithms'),
    codeView:document.getElementById('code-view'),
    sourceCode:document.getElementById('source-code'),
    codeName:document.getElementById('code-name'),
    executeBtn:document.getElementById('execute-btn'),
    execModal:document.getElementById('exec-modal'),
    modalForm:document.getElementById('modal-form'),
    modalOutput:document.getElementById('modal-output'),
    runCodeBtn:document.getElementById('run-code'),
    closeModalBtn:document.getElementById('close-modal')
  }

  let state = {lang:null, key:null}

  function $(sel){return document.querySelectorAll(sel)}

  function init(){
    document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=onLang)
    document.getElementById('back-from-list').onclick = ()=>{els.algList.classList.add('hidden');els.cover.classList.remove('hidden')}
    document.getElementById('back-from-code').onclick = ()=>{els.codeView.classList.add('hidden');els.algList.classList.remove('hidden')}
    els.executeBtn.onclick = openModal
    els.closeModalBtn.onclick = closeModal
    els.runCodeBtn.onclick = runModal
  }

  function onLang(e){
    state.lang = e.currentTarget.dataset.lang
    renderAlgList()
    els.cover.classList.add('hidden')
    els.algList.classList.remove('hidden')
  }

  function renderAlgList(){
    els.algsUl.innerHTML = ''
    Object.keys(ALGORITHMS).forEach(k=>{
      const li = document.createElement('li'); li.textContent = ALGORITHMS[k].name; li.dataset.key=k;
      li.onclick = ()=>openCode(k)
      els.algsUl.appendChild(li)
    })
  }

  function openCode(key){
    state.key = key
    const meta = ALGORITHMS[key]
    els.codeName.textContent = meta.name
    els.sourceCode.textContent = (state.lang==='java'? meta.display.java : meta.display.js)
    els.algList.classList.add('hidden')
    els.codeView.classList.remove('hidden')
    els.codeView.classList.add('centralize-enter')
    setTimeout(()=>els.codeView.classList.remove('centralize-enter'),450)
  }

  function openModal(){
    const meta = ALGORITHMS[state.key]
    els.modalForm.innerHTML = ''
    els.modalOutput.textContent = ''
    meta.params.forEach(p=>{
      const label = document.createElement('label'); label.textContent = p.label
      const input = document.createElement('input'); input.name = p.name; input.type = p.type==='number'? 'number' : 'text'
      input.required = true
      els.modalForm.appendChild(label); els.modalForm.appendChild(input)
    })
    els.execModal.classList.remove('hidden')
  }

  function closeModal(){ els.execModal.classList.add('hidden') }

  function runModal(ev){
    ev.preventDefault()
    const form = new FormData(els.modalForm)
    const args = {}
    for(const [k,v] of form.entries()) args[k]=v
    // convert number types
    const params = ALGORITHMS[state.key].params
    params.forEach(p=>{ if(p.type==='number') args[p.name]=Number(args[p.name]) })
    const res = ALGORITHMS[state.key].run(args)
    els.modalOutput.textContent = res.out
  }

  return {init}
})()

window.addEventListener('DOMContentLoaded', ()=>{app.init()})
