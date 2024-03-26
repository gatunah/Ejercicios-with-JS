botonRojo = document.getElementById("btn-1");
botonNaranjo = document.getElementById("btn-2");
botonAmarillo = document.getElementById("btn-3");
botonVerde = document.getElementById("btn-4");
botonCeleste = document.getElementById("btn-5");
botonRosa = document.getElementById("btn-6");


botonRojo.addEventListener("click", function(){
    
    document.getElementById('caja').setAttribute('style', 'background-color: #e53e3e; width: 100%;height: 100%');
    console.log("Clic en el botón Rojo");
})
botonNaranjo.addEventListener("click", function(){

    document.getElementById('caja').setAttribute('style', 'background-color: #dd6b20; width: 100%;height: 100%');
    console.log("Clic en el botón Naranjo");
})
botonAmarillo.addEventListener("click", function(){

    document.getElementById('caja').setAttribute('style', 'background-color: #faf089; width: 100%;height: 100%');
    console.log("Clic en el botón Naranjo");
})
botonVerde.addEventListener("click", function(){

    document.getElementById('caja').setAttribute('style', 'background-color: #48bb78; width: 100%;height: 100%');
    console.log("Clic en el botón Verde");
})
botonCeleste.addEventListener("click", function(){

    document.getElementById('caja').setAttribute('style', 'background-color: #81e6d9; width: 100%;height: 100%');
    console.log("Clic en el botón Celeste");
})
botonRosa.addEventListener("click", function(){

    document.getElementById('caja').setAttribute('style', 'background-color: #d53f8c; width: 100%;height: 100%');
    console.log("Clic en el botón Rosa");
})

