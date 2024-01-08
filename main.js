(function(){
  const anioCopy = document.getElementById("anioCopy");
const aniosEns =  document.getElementById("aniosEns");
const ensenar = document.querySelector(".ensenar");
const profesor = document.querySelector(".modalProfesor");
const closeModal = document.querySelector(".btn-closeModal");
const menu = document.querySelector("#menu");
const menuPrincipal = document.querySelector(".menu_principal");
anioCopy.textContent = new Date().getFullYear();
aniosEns.textContent = new Date().getFullYear() - 2008;
const btn = document.getElementById("button");
const fomulario = document.getElementById("form");
const cartas = document.querySelector(".cardContainer")


menu.addEventListener("click",()=>{
  if(menuPrincipal.classList.contains('oculto')){
    menuPrincipal.classList.toggle('oculto')
  }else{
    menuPrincipal.classList.toggle('oculto')
  }
})


ensenar.addEventListener('click',()=>{
  profesor.style.display = "grid"
})
closeModal.addEventListener('click',()=>{
  profesor.style.display = "none"
})

fomulario.addEventListener("submit", function(event){
  event.preventDefault();
  if(form_name.value=='' || reply_to.value=='' || message.value==''){
    alert("Hay campos vacios");
  }else{
    
    btn.value = "Enviando...";
    const serviceID = "service_t855crg";
    const templateID = "template_5dsarek";
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = "Enviado";
        alert("Mensaje Enviado");
        window.location.reload()
      }, (err) => {
        btn.value = "No Enviado";
        alert("No fue posible enviar " + JSON.stringify(err));
      });
  }
  });

  async function traerProyectos(){
    const response = await fetch("./proyectos.json")
    const datos = await response.json()
    datos.forEach(item=>{
      const {nombre,descripcion,url,imagen}=item
      cartas.innerHTML+=`
      <div class="card" id="card">
        <div class="cardBackground" style="background-image: url('${imagen}')">  
        </div>
        <div class="cardInfo">
            <h3 class="cardTitle">${nombre}</h3>
            <p class="cardText">${descripcion}</p>
            <div class="btn-visitar"><a href="${url}" target=blanck>Visitar</a></div>
        </div>
            
    </div>`
      
    })
  }

  traerProyectos()
})()