const arrayUsers = [];
const usernombre =  document.querySelector("#nombre");
const userapellido =  document.querySelector("#apellido");
const useremail =  document.querySelector("#email");
const userticket =  document.querySelector("#ticket");
const formcontainer = document.querySelector(".formContainer")
const sorteo = document.querySelector(".sorteoBtn")
const celular = document.querySelector("#celular")
const submit = document.querySelector(".btnprimary")
var codigo = Math.floor(Math.random() * (999999 - 111111) + 1);

class Usuario {
    constructor(nombre, apellido, email, ticket){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.ticket = ticket;
    }
}

const newParticipant = () => {
    var nombre = usernombre.value;
    var apellido = userapellido.value;
    var email = useremail.value;
    var ticket = parseInt(userticket.value);
    let nuevoParticipante = new Usuario(nombre, apellido, email, ticket);
    arrayUsers.push(nuevoParticipante);
    console.log(arrayUsers)
    
    return nuevoParticipante;
    
}

submit.addEventListener("click", () => {
    newParticipant();
    
    

})


function hola(newParticipant){
    Swal.fire("Compra Completa!", `Se han comprado ${arrayUsers[0].ticket} tickets por la suma de $ ${arrayUsers[0].ticket*precioticket1} a nombre de: ${arrayUsers[0].nombre} ${arrayUsers[0].apellido} con el email: ${arrayUsers[0].email}`)
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    
    
    alert("hola")
    alert(arrayUsers[0].nombre)
    
    


}



