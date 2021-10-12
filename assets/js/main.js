/* foglio di javascript */

/*
    Hamburger menu:
        mostrare / nascondere il menù principale
            (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
*/


//quando clicco sul hamburger
//mostra menu-hamburger
//per chiuderlo clicca sulla croce

/*  STRUMENTI
        - selettori
            -hamburger document.querySelector("selezione")


*/

const hamburger = document.querySelector("a>i");
console.log(hamburger.classList)
const hamburger_menu = document.getElementById("hamburger-menu")
console.log(hamburger_menu.classList)

const cross = document.getElementById("cross");
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







/*
const cross = document.querySelector("close");
console.log(cross.classList) */