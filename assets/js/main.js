/* foglio di javascript */

/*
    Hamburger menu:
        mostrare / nascondere il menù principale
            (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/



/*  STRUMENTI
- selettori
-hamburger document.querySelector("selezione")
- aggiunta di evento
-element.addEventListener(event, function, useCapture)
*/
/* 
    //quando clicco sul hamburger
    //mostra menu-hamburger
    //per chiuderlo clicca sulla croce
*/

//selezione icona hamburger
const hamburger = document.querySelector("a>i");
console.log(hamburger.classList)

//selezione hamburger-menu
const hamburger_menu = document.querySelector(".hamburger-menu")
console.log(hamburger_menu.classList)

//selezione icona cross
const cross = document.querySelector('.close > i');
console.log(cross.classList)


/* apertura hamburger-menur */
hamburger.addEventListener("click", function () {
    console.log('Apri hamburger-menu')
    hamburger_menu.style.display = "block"
}
)
/* chiusura hamburger-menu*/
cross.addEventListener("click", function () {
    console.log('chiudi hamburger-menu')
    hamburger_menu.style.display = "none"
})

