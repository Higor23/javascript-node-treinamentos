// É possível pegar o elemento pela tag, id, class.
// Não retorna uma collection
// Ele não retorna uma collection.
// Caso a busca seja pela tag, ele retorna sempre a primeira tag.
console.log(
    document.querySelector("div").innerHTML,
    document.querySelector(".div2").innerHTML,
    document.querySelector("#p2").innerHTML
);