// ?1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.


    // alert("Hola mundo")

// ?2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

//  document.write("<h1>Hello world<h1>")

 //?3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.


//  document.write(3+5)


//  ?4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

//  const nombre=prompt("Escriba Su nombre")
//  document.write("Hola "+nombre)

// ? 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// let num1=parseInt(prompt("Escriba el primer numero"))
// let num2=parseInt(prompt("EScriba el segundo numero"))
// document.write(num1+num2)



//? Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


//    let num1=parseInt(prompt("Escriba el primer numero"))
//    let num2=parseInt(prompt("EScriba el segundo numero"))
//    if(num1>num2){
//     document.write("El numero mayor es "+num1)
//    }else if(num2>num1){
//     document.write("El numero mayor es "+num2 )
//    }
// ?7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


//   let num1=parseInt(prompt("Escriba el primer numero"))
//   let num2=parseInt(prompt("Escriba el segundo numero"))
//   let num3=parseInt(prompt("Escriba el tercer numero"))
//   if(num1>num2&&num3){
//     document.write(`El numero ${num1} es mayor que los numeros  ${num2} y ${num3}`)
//   }else if (num2>num1&&num3){
//     document.write(`El numero ${num2} es mayor que los numero ${num1} y ${num3}`)
//   }else if(num3>num2&&num1){
//     document.write(`El numero ${num3} es mayor que los numeros ${num1} y ${num2}`)
//   }

// ?8.- Escribe un programa que pida un número y diga si es divisible por 2

// let num=parseInt(prompt("Escriba un numero"))
//  if(num%2==0){
//     document.write("El numero es divisible por 2")
//  }else{
//     document.write("Numero no divisible")
//  }
// ?9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// ?Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)


// const Frace=prompt("Escriba una Frace")
// const vocales="aeiouAEIOU";
// let VocalesEncontradas=0;
// let listavocales=""
// for(let i=1;i<Frace.length;i++){
//     if(vocales.includes(Frace.charAt(i))){

//     listavocales+=Frace.charAt(i)
//      VocalesEncontradas++

//     }
     
    
          
    
// }

//   document.write(`<p>son ${VocalesEncontradas} las vocales encontradas y son  ${listavocales}</p>`)




// ?10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)


// let num = parseInt(prompt("Escriba un número"));

// if (num % 2 === 0) {
//     document.write(num + " es divisible por 2<br>");
// } else if (num % 3 === 0) {
//     document.write(num + " es divisible por 3<br>");
// } else if (num % 5 === 0) {
//     document.write(num + " es divisible por 5<br>");
// } else if (num % 7 === 0) {
//     document.write(num + " es divisible por 7<br>");
// } else {
//     document.write(num + " no es divisible ni por 2, ni por 3, ni por 5, ni por 7<br>");
// }

// ?11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let num=parseInt(prompt("Escriba un numero"))
let numeros=[];


for(let i=0;i<num;i++){
    if(num %i===0){
        
        numeros.push(i)
    }
}
document.write("El numero "+num+ " es divisible por los siguientes numero "+numeros.join(', '))