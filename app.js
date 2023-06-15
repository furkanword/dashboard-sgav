var enlaces = document.getElementsByClassName('enlace');
const contenedor = document.getElementById('contentphp');

enlaces.forEach((val,id) => {
    val.removeEventListener('click', cargarpagina);
    val.addEvenListener('click', cargarpagina);
});

function cargarpagina(urldestino){
    var url = urldestino;
    console.log(url);
   fetch(url)
    .then(function(response){
        if(response.ok){
            return response.text();
        }
        throw new Error('Error en la solicitud HTTP');
    })
    .then(function(data){
        contenedor.innerHTML = '';
        let html = new DOMParser().parseFromString(data, 'text/html');
        let js = document.createElement('script');
        if(html.head.children.length >0){
            js. src = html.head.children[0].src;
            js.defer;
            document.head.appendChild(js);
        }
        contenedor.append(...html.body.children);
    })
    .catch(function(error){
        console.log('Error: '+ error.message);
    });
}
