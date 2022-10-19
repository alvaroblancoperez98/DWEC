setTimeout(() => {
    var titulo = document.getElementById("pregunta");
    titulo.innerText = "Sé solo feo";
    titulo.style.backgroundColor = "blue";
    titulo.style.color = "white";
    subventana.close();
} , 6000); //El texto cambiara a los 6 segundos

var subventana = window.open("https://www.google.es", "nueva", "height=800, width=600");