let  edad = Number(process.argv[2]);
let reciboTextoVoF = (process.argv[3]);

// Carlos, eso se lo conoce como "castear" (viene de cast en inglés), busca en google como castear una variable en javascript
// con eso creo que lo vas a sacar adelante
const stringToBoolean = (stringValue) => {
    switch(stringValue?.toLowerCase()?.trim()){
        case "true": 
        case "yes": 
        case "1": 
          return true;
        case "false": 
        case "no": 
        case "0": 
        case null: 
        case undefined:
          return false;

        default: 
          return JSON.parse(stringValue);
    }
  }
const activo = stringToBoolean(reciboTextoVoF);
if (edad >= 18) {
 if (activo){   
  console.log(`La persona puede ingresar ya que tiene: ${edad} y su condicion es activo:${activo} es mayor de edad y esta activa`);
     }else{
        console.log(`La persona es mayor de edad ${edad} pero activo es: ${activo} por eso no puede entrar`);
     }
}else {
    console.log(`La persona tiene: ${edad} por eso no puede entrar`)
}
    