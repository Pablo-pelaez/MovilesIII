document.addEventListener('DOMContentLoaded', function(){
    const imagenes = [
        {
            'name': 'Roma',
            'img': 'img/img1.jpg'
        },
        {
            'name': 'Londres',
            'img': 'img/img2.jpg'
        },
        {
            'name': 'París',
            'img': 'img/img3.jpg'
        },
        {
            'name': 'Montaña',
            'img': 'img/img4.jpg'
        },
        {
            'name': 'Fruta',
            'img': 'img/img5.jpg'
        },
        
//-------------------------------------------------
        {
            'name': 'Roma',
            'img': 'img/img1.jpg'
        },
        {
            'name': 'Londres',
            'img': 'img/img2.jpg'
        },
        {
            'name': 'París',
            'img': 'img/img3.jpg'
        },
        {
            'name': 'Montaña',
            'img': 'img/img4.jpg'
        },
        {
            'name': 'Fruta',
            'img': 'img/img5.jpg'
        }
    ]

    let imgElegida = [];
    let imgElegidaId = [];
    let tarjetas = document.querySelector(".tarjetas");
    let numIntentosGanados = [];
    let intentos = document.querySelector('.resultado');

    imagenes.sort( ()=> .2 - Math.random() )

    function crearCuadro(){
        for (let i=0; i< imagenes.length; i++){
            const img = document.createElement('img');
            img.setAttribute('src', 'img/img6.jpg');
            img.setAttribute('data-id', i);
            img.setAttribute('style', 'width: 300px');
            tarjetas.appendChild(img);
            img.addEventListener('click', descubrirTarjetas)
        }
    }

    //Función para mostrar la imagen oculta
    function descubrirTarjetas(){
        if(this.getAttribute('src') == 'img/img6.jpg'){
        let imgId = this.getAttribute('data-id');
        imgElegida.push(imagenes[imgId].name);
        imgElegidaId.push(imgId);
        this.setAttribute('src',imagenes[imgId].img);
        }
        if(imgElegida.length === 2){
            setTimeout(compararImagen, 500)
            
        }
    }

    function compararImagen(){
        var imagen = document.querySelectorAll('img');
        
        const opcionUnoId = imgElegidaId[0];
        const opcionDosId = imgElegidaId[1];

        if (imgElegida[0] === imgElegida[1] && imgElegida[0]){
            alert("Acertado");
            imagen[opcionUnoId].setAttribute('src', 'img/img7.png');
            imagen[opcionDosId].setAttribute('src', 'img/img7.png');
            numIntentosGanados.push(imgElegida);
        }
        else{
            alert("Fallaste");
            imagen[opcionUnoId].setAttribute('src', 'img/img6.jpg');
            imagen[opcionDosId].setAttribute('src', 'img/img6.jpg');
        }

        imgElegida = [];
        imgElegidaId = [];

        intentos.textContent = numIntentosGanados.length;

        if(numIntentosGanados.length === imagenes.length / 2){
            intentos.textContent = 'Ganaste';
        }

    }

    crearCuadro()
    
});
