/*
x = "lluvioso"
y = "nuboso"
z = "Soleado"

temp = ["Sube" , "baja", "igual"]
semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

meteologia = [  semana[2] = {x, "temperaturas " : temp[1]}, 
                semana[3] = {y , "temperaturas " : temp[0]},
                semana[4] = {z , "temperaturas " : temp[0]},
                semana[5] = {z , "temperaturas " : temp[0]},
                semana[6] = {x , "temperaturas " : temp[1]},
                semana[0] = {x , "temperaturas " : temp[1]},

]
console.log(meteologia[0])
*/

    tiempo = [
        {dia:"Miércoles", cielo:"lluvia", temperatura:12},
        {dia:"Jueves", cielo:"Nublado", temperatura:20},
        {dia:"Viernes", cielo:"lluvia", temperatura:23},
        {dia:"Sábado", cielo:"sol", temperatura:10},
        {dia:"Domingo", cielo:"sol", temperatura:5},
        {dia:"lunes", cielo:"Nublado", temperatura:0},
]

    var i;
    for (i = 0; i < tiempo.length; i++) { 
        //console.log(i)
        if (tiempo[i].cielo == "lluvia"){
            console.log(tiempo[i].dia + " " + tiempo[i].cielo + " " +tiempo[i].temperatura)
        }
    }