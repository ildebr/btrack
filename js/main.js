$("div.se").addClass("anim")

var rueda = $("img.rueda-logo");


$(window).scroll(function(){
    console.log("scroll");
    rueda.attr("style", "transform: rotate(" + window.scrollY + "deg)" );
    
    
});



var width = $(window).width();

var ori = $("div.landing-pic img").attr("src");

//$(window).load(foto());
//$(window).resize(foto());




$(document).ready(foto());
$(window).resize(foto());
$(document).ready(()=>{
    
});


$(window).resize(function(){
    width = $(window).outerWidth();
    console.log(width)
    if(width <= 449){
        $("div.landing-pic img").attr("src", ori);
    } else if (width >= 450){
        $("div.landing-pic img").attr("src", "img/bike1.jpg");
    }
});


function foto(){
    width = $(window).outerWidth();
    console.log(width)
    console.log("dentro")
    if(width <= 449){
        $("div.landing-pic img").attr("src", ori);
    } else if (width >= 450){
        $("div.landing-pic img").attr("src", "img/bike2.jpg");
    }

}

/*
document.body.appendChild(
    pieChart([12, 23, 34, 45], 640, 400, 200, 200, 150,
        ['red','blue','yellow','green'],
        ['North','South', 'East', 'West'], 400, 100));
);*/

const saludar = () => {
    console.log("hola");
}

saludar();

const saludo = nombre => console.log('saludo $(nombre)' + nombre);
saludo("puta");

const sumar = (a, b) => a + b;

console.log(sumar(8,9));

const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(el + " está en la posicion " + index) );

const perro = {
    nombre:"kenai",
    ladrar(){
        console.log(this.nombre);

    }
}

perro.ladrar()