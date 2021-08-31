document.addEventListener('DOMContentLoaded', function(){
    let tarjetas = document.querySelector(".tarjetas");

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
        {
            'name': 'incognita',
            'img': 'img/img6.jpg'
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
        },
        {
            'name': 'incognita',
            'img': 'img/img6.jpg'
        }
    ]

    let imgElegida = [];
    let imgElegidaImg = [];

    function crearCuadro(){
        for (let i=0; i< imagenes.length; i++){
            const img = document.createElement('img');
            img.setAttribute('src', 'img/img6.jpg');
            img.setAttribute('data-id', i);
            img.setAttribute('style', 'width: 200px');
            tarjetas.appendChild(img);
        }
    }

    function compararTarjetas(){

    }

    crearCuadro()
    
});
