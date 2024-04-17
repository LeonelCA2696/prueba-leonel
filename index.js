{
  /**
// Mark y John están tratando de comparar su IMC (índice de masa corporal),
// que se calcula mediante la fórmula: IMC = masa / altura ^ 2 = masa / (altura * altura).
// (masa en kg y altura en metros).

// 1. Almacene la masa y la altura de Mark y John en variables
// 2. Calcula el IMC de ambos
// 3. Cree una variable booleana que contenga información sobre si Mark tiene un IMC más alto que John.
// 4. Imprima una cadena en la consola que contenga la variable del paso 3.
// (Algo así como "¿Es el IMC de Mark más alto que el de John? Verdadero"). */
}

// ## Masa - Punto 1
// Mark
var masaMark = 100;
var alturaMark = 5.9;
// Jhon
var masaJhon = 123;
var alturaJhon = 6.2;

// ## IMC - Punto 2
var imcMark = masaMark / (alturaMark * 2);
var imcJhon = alturaJhon / (alturaJhon * 2);

// ## - Punto 3
var isMarkMayor = imcMark > imcJhon;

console.log("¿Es el IMC de Mark más alto que el de John? ", isMarkMayor);
