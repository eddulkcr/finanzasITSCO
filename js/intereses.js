function interesSimple() {
  // console.log("hola mundo");
  factor = document.getElementById("facTiempo").value;
  monto = document.getElementById("monto").value;
  tiempo = document.getElementById("tiempo").value;
  interes = document.getElementById("interes").value;
  console.log(monto);
  console.log(interes);
  console.log(tiempo);
  console.log(factor);

  var porcenInteres = interes / 100;
  console.log(porcenInteres);
  var facTiempo = parseFloat(tiempo) * parseFloat(factor);
  console.log(tiempo * factor);
  var iS = (parseFloat(monto) * parseFloat(porcenInteres)  * parseFloat(facTiempo) ) / parseFloat(factor);
  console.log(iS);

  document.getElementById(resultadoInteres).value =iS;
  alert("El interes es"+ iS);
  document.getElementById(resultadoInteres).innerHTML = iS;

  return iS;
}

function interesCompuesto(){
  var interesTiempo;
  factor = document.getElementById ("facTiempoCom").value;
  monto = document.getElementById("montoCom").value;
  interes = document.getElementById("interesCom").value;
  tiempo = document.getElementById("tiempoCom").value;
  console.log(monto);
  console.log(interes);
  console.log(tiempo);
  console.log(factor);
  var interesPorcent = interes/100;
  console.log(interesPorcent);
  switch (factor) {
    case 1:
    parseFloat(interesTiempo) = parseFloat(interesPorcent)/12;
      break;
      case 2:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/2;
      break;
      case 3:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/4;
      break;
      case 4:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/6;
      break;
      case 5:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/12;
      break;
      
    default:
      break;
  }
  console.log(parseFloat(interesTiempo));
  var iC = (monto)/(1 + parseFloat(interesTiempo))^tiempo;
  console.log(iC);
}

function valorPresente(){
  var interesTiempo;
  factor = document.getElementById ("facTiempoVp").value;
  monto = document.getElementById("montoVp").value;
  interes = document.getElementById("interesVp").value;
  tiempo = document.getElementById("tiempoVp").value;
  console.log(monto);
  console.log(interes);
  console.log(tiempo);
  console.log(factor);
  var interesPorcent = interes/100;
  console.log(interesPorcent);
  switch (factor) {
    case 1:
    parseFloat(interesTiempo) = parseFloat(interesPorcent)/12;
      break;
      case 2:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/2;
      break;
      case 3:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/4;
      break;
      case 4:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/6;
      break;
      case 5:
      parseFloat(interesTiempo) = parseFloat(interesPorcent)/12;
      break;
      
    default:
      break;
  }
  console.log(parseFloat(interesTiempo));
  var vP = (monto)/(1 + parseFloat(interesTiempo))^tiempo;
  console.log(vP);
}

