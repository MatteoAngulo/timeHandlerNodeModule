const argumentos = process.argv.slice(2);

let min = 1;
let max = 100;

if (argumentos.length >= 2) {
  try {
    const minParseado = parseInt(argumentos[0], 10);
    const maxParseado = parseInt(argumentos[1], 10);

    if (
      !isNaN(minParseado) &&
      !isNaN(maxParseado) &&
      minParseado < maxParseado
    ) {
      min = minParseado;
      max = maxParseado;
    } else {
      console.log(
        "Rango inválido, por favor usar número, se usarán los rangos por defecto (1-100)"
      );
    }
  } catch (error) {
    console.error("error: ", error);
  }
}

const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Su número random entre ${min} y ${max} es: ${numeroRandom}`);
