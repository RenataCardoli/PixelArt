var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

//Agrego la paleta de colores
for (var i = 0; i < nombreColores.length; i++) {
  var nuevoDiv = document.createElement("div");
  nuevoDiv.style.backgroundColor = nombreColores[i];
  nuevoDiv.className = "color-paleta";
  nuevoDiv.addEventListener("click", CambiarColorIndicador);

  paleta.appendChild(nuevoDiv);
}

//Agrego los pixeles a la grilla
for (var i = 0; i < 1750; i++) {
  var nuevoDiv = document.createElement("div");
  nuevoDiv.addEventListener("click", pintarPixel);
  nuevoDiv.addEventListener("mouseover", pintarPixelSeguido); 
  nuevoDiv.classList.add("pixel");
  grillaPixeles.appendChild(nuevoDiv);
}

//Poner color seleccionado en el indicador de color
var indicadorDeColor = document.getElementById("indicador-de-color");
var indicadorDeColorMensaje = document.getElementById("indicador-de-color-mensaje");

function CambiarColorIndicador(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.background = colorActual;
  })
);

//Pintar un pixel cuando se clickea sobre él
function pintarPixel(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

//detectar mouse
var MousePresionado = false;

var dibujarMouse = document.querySelector("body");
dibujarMouse.addEventListener("mousedown", modificarMousePresionado); 
dibujarMouse.addEventListener("mouseup", modificarMouseSuelto);

function modificarMousePresionado() {
  MousePresionado = true;
}

function modificarMouseSuelto() {
  MousePresionado = false;
}

function pintarPixelSeguido(e) {
  if (MousePresionado == true) {
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
}

//para cargar el Batman
var ImagenBatman = document.getElementById("batman");
ImagenBatman.addEventListener("click", function() {
  cargarSuperheroe(batman);
});

// para cargar el Flash
var ImagenBatman = document.getElementById("flash");
ImagenBatman.addEventListener("click", function() {
  cargarSuperheroe(flash);
});

//para cargar el invisible
var ImagenBatman = document.getElementById("invisible");
ImagenBatman.addEventListener("click", function() {
  cargarSuperheroe(invisible);
});

//para cargar el mujer maravilla
var ImagenBatman = document.getElementById("wonder");
ImagenBatman.addEventListener("click", function() {
  cargarSuperheroe(wonder);
});


//borrar el dibujo 
var BorrarDibujo = document.getElementById("borrar");
BorrarDibujo.addEventListener("click", function() {
  var $pixeles = $("#grilla-pixeles div");
  $pixeles.animate({ "background-color": "white" }, 1000);
});

//guardar el Dibujo
var GuardarDibujo = document.getElementById("guardar");
GuardarDibujo.addEventListener("click", guardarPixelArt);



