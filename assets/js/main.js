function automovil(marca,modelo,color,anio,titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;

}

let automovil1= new automovil("Ford","Fiesta","Azul","2019","Juan");
let automovil2= new automovil("Toyota","Corolla","Blanco","2018","Pedro");
let automovil3= new automovil("KYC","Carga BOX","Rojo","2017","Maria");
let automoviles=[automovil1,automovil2,automovil3];

automovil.prototype.venderAutomovil= function(nuevoTitular){
    this.titular = nuevoTitular;
}

automovil.prototype.verAuto= function(){
    return ` ${this.marca} ${this.modelo} - ${this.anio} - ${this.color} - ${this.titular}`;
}

automovil.prototype.encender= function(){
    alert("El automovil esta en marcha");
}

function mostrarAutos () {
    let lista = document.getElementById("listadoAutos");
    for(let automovils of automoviles){
        let item = document.createElement("li");
        item.innerText = automovils.verAuto();
        lista.appendChild(item);
        console.log(automovils.verAuto());
    }

}