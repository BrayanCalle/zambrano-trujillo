var formulario=document.getElementById("formulario"),respuesta=document.getElementById("respuesta");formulario.addEventListener("submit",function(e){e.preventDefault();var r=new FormData(formulario);console.log(r),console.log(r.get("nombre")),console.log(r.get("email")),console.log(r.get("telefono")),console.log(r.get("servicio")),console.log(r.get("mensaje")),fetch("../contactform/contactengine.php",{method:"POST",body:r}).then(e=>e.json()).then(e=>{"error"===e?respuesta.innerHTML=`
                <div class="alert alert-danger" role="alert">
                    Error, llena todo los campos
                </div>
                `:(respuesta.innerHTML=`
                <div class="alert alert-primary" role="alert">
                    Mensaje Enviado
                </div>
                `,formulario.reset())})});