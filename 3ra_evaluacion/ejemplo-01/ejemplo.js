/*
ejemplo 01
*/
/*
x=6
y=5
w=4
v=8
u=7
*/


x=Math.floor(Math.random() * 10);
y=Math.floor(Math.random() * 10);
w=Math.floor(Math.random() * 10);
v=Math.floor(Math.random() * 10);
u=Math.floor(Math.random() * 10);

z=(((x+y)-w)*v)/u

//z= Math.floor(Math.random() * 10);

if(z>10){ console.log("es mayor que 10")}
else if(z<10){ console.log("es menor que 10")}
else { console.log("es 10")}
 console.log("la z es=" + z)
