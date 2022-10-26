var formulario=document.getElementById("formulario"),respuesta=document.getElementById("respuesta");formulario.addEventListener("submit",function(e){e.preventDefault(),fetch("../contactform/formularioservicios.php",{method:"POST",body:new FormData(formulario)}).then(e=>e.json()).then(e=>{"error"===e?respuesta.innerHTML=`
                <div class="alert alert-danger" role="alert">
                    Error, llena todo los campos
                </div>
                `:(respuesta.innerHTML=`
                <div class="alert alert-primary" role="alert">
                    Mensaje Enviado
                </div>
                `,formulario.reset())})});