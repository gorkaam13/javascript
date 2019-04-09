/*
Crear una página HTML con los datos meteorológicos 
usando nodejs.
las imágenes (sol, nubes, ...)
nube: http://www.euskalmet.euskadi.eus/appcont/meteorologia/meteodat/images/12.png
...
*/


var express = require('express');
var app = express();

tiempo = [
  {dia:"martes", cielo:"sol_lluvioso", temperatura:12},
  {dia:"Miércoles", cielo:"sol_lluvioso", temperatura:12},
  {dia:"Jueves", cielo:"lluvia", temperatura:20},
  {dia:"Viernes", cielo:"sol_lluvioso", temperatura:23},
  {dia:"Sábado", cielo:"sol_nuboso", temperatura:10},
  {dia:"Domingo", cielo:"sol_nuboso", temperatura:5}
]

app.get('/', function (req, res) {

  var i;
  var r=[];
  console.log("Días lluviosos:")
  for (i = 0; i < tiempo.length; i++) { 
      //console.log(i)
      if (tiempo[i].cielo == "lluvia") {
          //console.log(tiempo[i].dia + " " + tiempo[i].cielo)
          console.log(tiempo[i].dia)
          r[r.length] = tiempo[i].dia
      }
  }
  res.send(r);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
