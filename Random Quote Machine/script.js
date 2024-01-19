const frasesFamosasJS = [
  {
    frase: "JavaScript es el lenguaje de programación de la web.",
    autor: "Douglas Crockford",
  },
  {
    frase:
      "La programación es la única disciplina en la que uno nunca termina de aprender.",
    autor: "Andy Hunt",
  },
  {
    frase: "La única forma de hacer un gran trabajo es amar lo que haces.",
    autor: "Steve Jobs",
  },
  {
    frase: "El software, como el sexo, es mejor cuando es gratis.",
    autor: "Linus Torvalds",
  },
  {
    frase: "La vida es demasiado corta para código mal escrito.",
    autor: "David Heinemeier Hansson",
  },
  {
    frase:
      "El código que no se ha escrito aún es siempre el más rápido, el más eficiente y el más libre de errores.",
    autor: "Marc Andreessen",
  },
  {
    frase:
      "El arte de la programación consiste en organizar y dominar la complejidad.",
    autor: "Edsger Dijkstra",
  },
  {
    frase: "No puedes tener una buena salida sin una buena entrada.",
    autor: "Gary Kildall",
  },
  {
    frase:
      "La optimización prematura es la raíz de todos los males (o la mayoría de ellos) en programación.",
    autor: "Donald Knuth",
  },
  {
    frase: "El mejor código es aquel que no necesita ser escrito.",
    autor: "Ward Cunningham",
  },
  {
    frase:
      "Siempre codea como si la persona que mantendrá tu código fuera un psicópata violento que sabe dónde vives.",
    autor: "Rick Osborne",
  },
  {
    frase:
      "En teoría, la teoría y la práctica son lo mismo. En la práctica, no lo son.",
    autor: "Yogi Berra",
  },
  {
    frase:
      "La programación es el acto de esconder las complicaciones de un sistema y mostrar solo la simplicidad.",
    autor: "Kristian K. Stangeland",
  },
  {
    frase:
      "No te preocupes si no funciona bien. Si todo estuviera correcto, estarías despedido.",
    autor: "Ley de Mosher",
  },
  {
    frase: "La mejor forma de predecir el futuro es implementarlo.",
    autor: "David Heinemeier Hansson",
  },
  {
    frase:
      "La programación es como escribir un libro; escribir el primer capítulo es fácil, el problema es que se vuelve cada vez más difícil a medida que avanzas.",
    autor: "Richard Powers",
  },
];
const coloresPasteles = [
  "#FFB6C1", // Rosa Pastel
  "#87CEEB", // Azul Cielo Pastel
  "#98FB98", // Verde Menta
  "#FFDAB9", // Amarillo Melocotón
  "#E6E6FA", // Lavanda
  "#FFDAB9", // Melocotón Claro
];
const text = document.getElementById("text");
const author = document.getElementById("author");
const newB = document.getElementById("new");
const newQuote = () => {
  const index = Math.floor(Math.random() * frasesFamosasJS.length);
  const cIndex = Math.floor(Math.random() * coloresPasteles.length);
  text.textContent = frasesFamosasJS[index].frase;
  author.textContent = frasesFamosasJS[index].autor;
  console.log(coloresPasteles[cIndex]);
  document.documentElement.style.setProperty(
    "--color",
    coloresPasteles[cIndex]
  );
};
document.addEventListener("DOMContentLoaded", newQuote);
newB.addEventListener("click", newQuote);
