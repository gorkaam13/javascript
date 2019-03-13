/*
ejemplo 01
*/



z= -1
while (z != 10){
x=Math.floor(Math.random() * 10);
y=Math.floor(Math.random() * 10);
w=Math.floor(Math.random() * 10);
v=Math.floor(Math.random() * 10);
u=Math.floor(Math.random() * 10);
z=(((x+y)-w)*v)/u

//z= Math.floor(Math.random() * 11);

if(z>10){ console.log("es mayor que 10")}
else if(z<10){ console.log("es menor que 10")}
else { console.log("es 10")}
 console.log("la z es=" + z)
}