const request = (obj) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(); //POST Method

    xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status <300){
            obj.success(xhr.responseText);
        } else{
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        };
    });
};


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
    request({
        method: 'GET',
        url: href,
        success(response){
            loadResult(response)
        },
        error(errorText){
            console.log(errorText)
        }
    });
};
function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}