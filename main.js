var estaciones=["primavera","verano","otoño","invierno"];
var imagenes=["https://w0.peakpx.com/wallpaper/763/650/HD-wallpaper-pink-flowering-trees-in-spring-parks-trees-spring-flowers-sunshine-nature.jpg","https://i.pinimg.com/1200x/30/77/8d/30778d21ad31296f1c7978fcfb747360.jpg","https://code.jardineriaplantasyflores.com/wp-content/uploads/2015/05/17234600/arce-acer.jpg","https://images.hola.com/imagenes/decoracion/20211118199841/arboles-resisten-frio-heladas-decoracion-jardines-nu/1-21-245/arboles-jardin-resistentes-frio-heladas-hola-decoracion-10-a.jpg"];
var informacion=["La primavera comienza el 19 de marzo y termina el 20 de junio,el clima es templado, las hojas de los arboles son rosas, amarillas y verdes","El verano empieza el 21 de junio y termina el 23 de septiembre,el clima es calido, la torre eifell  se expande unos 15 centimetros ya que esta construida de metal","EL otoño empieza el 23 de septiembre y termina el 21 de diciembre, el clima es un poco frio,las hojas se empiezan a caer","El invierno comienza el 21 de diciembre y termina el 19 de marzo,es la estacion mas fria del año,los dias son cortos y las noches largas."];
var contador=0;
function cambiar(){
  document.getElementById("estaciones").src=imagenes[contador];
  document.getElementById("titulo").innerHTML=estaciones[contador];
  document.getElementById("info").innerHTML=informacion[contador];
  contador++;
  if (contador==4){
    contador=0;
  }
}