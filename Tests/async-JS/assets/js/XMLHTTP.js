const request = (obj) =>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(); //POST Method
    
        xhr.addEventListener('load', ()=>{
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.responseText);
            } else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            };
        });
    })
};


const click = document.addEventListener('click',(e)=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag ==='a'){
        e.preventDefault()
        loadPage(el);
    };
});


async function loadPage(el) {
    const href = el.getAttribute('href')
    try{
        const objConfig = {
            method: 'GET',
            url: href,
    };} catch(e){
        console.log(e)
    }

    const response = await request(objConfig);
    loadResult(response);
};
function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}