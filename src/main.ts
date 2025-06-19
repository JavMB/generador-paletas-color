import "./style.css";

/*
Cuando generas colores en formato HEX (por ejemplo, #a1b2c3), necesitas 6 dígitos hexadecimales (0-9, a-f),
 precedidos por #.
Cada par representa rojo, verde y azul en hexadecimal:

#RRGGBB
Ejemplo: #12e4af
Por lo tanto, debes generar un string de 6 caracteres hexadecimales aleatorios.
*/
const hexChars = "0123456789abcdef";

function generatePalette() {
  let rgb = "#";

  for (let index = 0; index < 6; index++) {
    rgb += randomChar(hexChars);
  }
  return rgb;
}
function randomChar(chars: string): string {
  return chars[Math.floor(Math.random() * chars.length)];
}
