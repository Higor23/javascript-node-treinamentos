// É possível pegar o elemento pela tag, id, class.
// Não retorna uma collection
// Ele não retorna uma collection.
// Caso a busca seja pela tag, ele retorna sempre a primeira tag.
console.log(
    document.querySelectorAll(".times"),
    document.getElementById("futebol-europeu").querySelectorAll(".times")[0].innerHTML
);