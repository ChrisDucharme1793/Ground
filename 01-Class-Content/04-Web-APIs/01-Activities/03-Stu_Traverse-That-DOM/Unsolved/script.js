/* # Traverse That DOM
In this activity you are going to use the Chrome Dev Console and `.style.property` to change the styling of elements on our page.

* Using the provided `index.html`, complete the following

  * Target the div with the ID of `articles`.

    * Change its font size to `50px`.
    * Change its first childs, last child to have a font color of `blue`.
    * Change its previous sibling to have a background color of `black`.

  * Target the div with the ID of `main`.
    * Change its second child node so the text is `underlined`.
    * Change its last child element to have a font size of `50px`.
    * Change its first child element to have a font color of `orange`.
    * Change its last child elements parent to have a font size of `40px`.

## Bonus

* Change 3 other elements styles that we did not ask for above.*/

const main = document.getElementById("main")  
const articles = document.getElementById("articles")

articles.style.fontSize = "50px";

main.style.backgroundColor = "green";
main.style.fontSize = "10px";
main.style.textDecoration = "underline"

articles.children[0].lastElementChild.style.color = "blue"
articles.children[0].style.fontSize = "50px";
articles.previousElementSibling.style.background = "black"

main.childNodes[1].style.textDecoration = "underline";
main.lastElementChild.style.fontSize = "50px";
main.firstElementChild.style.color = "orange";
main.lastElementChild.parentElement.style.fontSize = "40px"
