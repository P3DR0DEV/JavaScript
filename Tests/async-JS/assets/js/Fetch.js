const click = document.addEventListener('click',(e)=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag ==='a'){
        e.preventDefault()
        loadPage(el);
    };
});

function loadPage(el) {
    const href = el.getAttribute('href')
    fetch(href)
      .then(resposta => {
            if (resposta.status !== 200) throw new Error('Erro 404!') // status 200 - OK if > 200 maybe Error
            return resposta.text() // inner text === html puro 
    })
        .then(html => loadResult(html));
    
};

function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}