var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('diste click')

    var datos = new FormData(formulario);

    // console.log(datos)
    // console.log(datos.get('nombre'))

    fetch('../contactform/contactengine.php',{
        method:'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            if( data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error, llena todo los campos
                </div>
                `;
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    Mensaje Enviado
                </div>
                `;
                formulario.reset();
            }
        })

})


