/*$(document).ready(function () {
    $("h1").css("color", "red");
})*/
// Si el script tag esta en el head antes del index.js

//Si esta al final antes del body tag y antes del index.js, se puede omitir el .ready

//Select Element
$("h1"); //reemplaza el document.querySelectorAll

//Manipulate Styles
$("h1").css("color"); //Obtine el color del h1
$("h1").css("color", "red"); //Cambia el color del h1 al del segundo parametro - No recomendable - Se hace con CSS mejor
$("h1").addClass("big-title"); //Agresa al objeto el estilo CSS especificado
$("h1").removeClass("big-title"); //Elimina al objeto el estilo CSS especificado
$("h1").addClass("big-title margin-50"); //Agresa al objeto los estilos CSS especificados
$("h1").hasClass("margin-50"); //Retorna un booleano si el h1 tiene esa clase

//Manipulate Text
$("button").text("New Text"); //Cambia TODOS los botones por New Text
$("button").html("<em>New Text 2</em>"); //agreha HTML en vez del innerHTML

//Manipulate attributes - img src, href
$("a").attr("href"); //Obtiene el valor del atributo del a
$("a").attr("href", "https://espanol.yahoo.com"); //Cambia el atributo al especificado como segundo parametro
$("h1").attr("class"); //Obtiene todas las clases que tiene el h1

//Add Event Listeners
$("button").click(
  //Pasa una funcion anonima
  function () {
    //Pasa una funcion anonima
    $("h1").css("color", "purple"); //No es necesario hacer el for del Drum kit, ya que el $ ya toma todos los elementos "button" del html
  }
);

$("input").keypress(function (event) {
  console.log(event.key); //Cada que se ingresa una letra con teclado, se imprime en consola
});

$(document).keypress(function (event) {
  $("h1").text(event.key); //Cada que se ingresa una letra con teclado, se cambia el h1
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "green"); //El on es ms flexible, primer parametro se especifica el evento y el segundo la funcion anonima
});

//Add and remove elements
$("button").remove(); //Elimina todos los botones

$("h1").before("<button>Before</button>"); //Agrega el boton antes del h1
$("h1").prepend("<button>Prepend</button>"); //Agrega el boton entre la etiqueta h1, antes del texto
$("h1").after("<button>After</button>"); //Agrega el boton despues del h1
$("h1").append("<button>Append</button>"); //Agrega el boton entre la etiqueta h1, despues del texto

//Animations
$("button").on("click", function () {
  //$("h1").hide(); //Oculta el elemento
  //$("h1").show(); //Muestra el elemento
  //$("h1").toggle(); //Intercala entre mostrar y ocultar
  //$("h1").fadeOut(); //Reduce la opacidad hasta desaparecerlo
  //$("h1").fadeIn();//Aparece el elemento y aumenta la opacidad
  //$("h1").fadeToggle();//Intercala entre fadeOut y fadeIn
  //$("h1").slideUp();//Colapsa el elemento de abajo hacia arriba
  //$("h1").slideDown();//aumenta el elemento de arriba hacia abajo
  //$("h1").slideToggle();//Intercala entre slideDown y slideUp

  //$("h1").animate({ opacity: 0.1 }); //Custom CSS - solo funciona con numeros

  $("h1").fadeOut().fadeIn().animate({ margin: 0.1, "padding-left": "350px" }); //Se concatenan en orden
});
