// ?Ejersicio de contar caracteres

function caracteres(cadena=""){
    if(!cadena){
        console.log("No ingresaste una cadena")
    }else{
        console.log(`la cadena ${cadena} tiene ${cadena.length} Caracteres`)
    }

}
caracteres("BEBe")
// !Arrow function Codigo elegante

const contarCaracteres=(cadena2="Hola mi amor")=>(!cadena2)?console.warn("La cadena esta vacia"):console.info(`El caracter de ${cadena2} son ${cadena2.length} letras`)
contarCaracteres()


// ?Funhcion que devuelve fraces Recortadas

function Frace(cadena3="",longitud=undefined){
    if(!cadena3){
        console.log("la cadena esta vacia")
    }else{
        console.log(`la cadena se recorto ${cadena3.slice(0,longitud)}`)
    }
}
Frace("Te amo mi amor",6)

// ?funcion que separa los caracteres segun el caracter predeterminado

const CaracterSeparado=(cadena4="",separador=undefined)=>
(!cadena4)
?console.log("LA cadena esta Vacia")
:(separador===undefined)
?console.log("El separador es undefined")
:console.info(JSON.stringify(cadena4.split(separador)))

CaracterSeparado("Y ella es feliz o no es feliz"," ")


// ?Repite la palabra indicada

const Repetir=(Text="",veces=undefined)=>{
    if(!Text)return console.warn("No escribio el caracter");
    if(veces===0)return console.warn("Error en el sistema");
   for(let i=1;i<=veces;i++)console.log(`El texto ${Text} Se Repitio ${veces}`)

   
};
Repetir("Hola",5)