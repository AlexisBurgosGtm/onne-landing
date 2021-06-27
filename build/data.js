let rootCarrusel = document.getElementById('rootCarrusel');
let rootProductos = document.getElementById('rootProductos');


let productos = [
        {
            "codigo": 1,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/1.jpg"

        },
        {
            "codigo": 2,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/2.jpg"

        },
        {
            "codigo": 3,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/3.jpg"

        },
        {
            "codigo": 4,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/4.jpg"

        },
        {
            "codigo": 5,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/5.jpg"

        },
        {
            "codigo": 6,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/6.jpg"

        },
        {
            "codigo": 7,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/7.jpg"

        },
        {
            "codigo": 8,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/8.jpg"

        },
        {
            "codigo": 9,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/9.jpg"

        },
        {
            "codigo": 10,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/10.jpg"

        },
        {
            "codigo": 11,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/11.jpg"

        },
        {
            "codigo": 12,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/12.jpg"

        },
        {
            "codigo": 13,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/13.jpg"

        },
        {
            "codigo": 14,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/14.jpg"

        },
        {
            "codigo": 15,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/15.jpg"

        },
        {
            "codigo": 16,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/16.jpg"

        },
        {
            "codigo": 17,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/17.jpg"

        },
        {
            "codigo": 18,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/18.jpg"

        },
        {
            "codigo": 19,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/19.jpg"

        },
        {
            "codigo": 20,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/20.jpg"

        },
        {
            "codigo": 21,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/21.jpg"

        },
        {
            "codigo": 22,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/22.jpg"

        },
        {
            "codigo": 23,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/23.jpg"

        },
        {
            "codigo": 24,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/24.jpg"

        },
        {
            "codigo": 25,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/25.jpg"

        },
        {
            "codigo": 26,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/26.jpg"

        },
        {
            "codigo": 27,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/27.jpg"

        },
        {
            "codigo": 28,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/28.jpg"

        },
        {
            "codigo": 29,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/29.jpg"

        },
        {
            "codigo": 30,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/30.jpg"

        },
        {
            "codigo": 31,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/31.jpg"

        },
        {
            "codigo": 32,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/32.jpg"

        },
        {
            "codigo": 33,
            "titulo": "nombre del articulo",
            "descripcion": "Descripcion del articulo",
            "precio": "Q 100.00",
            "url":"./img/product/33.jpg"
        }
    ];


function getCarrusel(){
    rootCarrusel.innerHTML = `
        <div class="single-hero-slide" style="background-image: url('img/landing/1.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Descuentos</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">35% en el segundo accesorio</p><a class="btn btn-primary btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="single-hero-slide" style="background-image: url('img/landing/2.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Variedad de accesorios</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms"></p><a class="btn btn-success btn-sm" href="#" data-animation="fadeInUp" data-delay="500ms" data-wow-duration="1000ms"></a>
            </div>
          </div>
        </div>
          
        <div class="single-hero-slide" style="background-image: url('img/landing/3.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Mayoristas</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms"></p><a class="btn btn-danger btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Saber más</a>
            </div>
          </div>
        </div>
    `
}

function getProductos(){
    
    let str = '';

    productos.map((rows)=>{
        str = str + `
            <div class="col-6 col-md-4 col-lg-3">
              <div class="card top-product-card">
                <div class="card-body">
                    <span class="badge badge-success">
                        Normal
                    </span>
                    <a class="wishlist-btn" href="#">
                        <i class="lni lni-heart"></i>
                    </a>
                    <a class="product-thumbnail d-block" href="#">
                        <img class="mb-2" src=${rows.url} alt=${rows.titulo} id='codigo-${rows.codigo}' onclick="openFullscreen('codigo-${rows.codigo}')">
                    </a>
                    <a class="product-title d-block" href="#">
                        ${rows.titulo}
                    </a>
                    <p class="sale-price">${rows.precio}</p>
                    
                    <a class="btn btn-success btn-sm add2cart-notify" 
                    href="https://api.whatsapp.com/send?phone=50258805114&text=Hola%20MariaAccesorios%2C%20me%20interesa%20este%20producto%20${rows.titulo.replace(' ','%20')}" target="_blank">
                        <i class="lni lni-whatsapp"></i>
                    </a>
                </div>
              </div>
            </div>
        `    
    });

    rootProductos.innerHTML = str;

};

function openFullscreen(idElement) {
    let elem = document.getElementById(idElement);

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
}

//getCarrusel();
getProductos();