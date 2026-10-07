const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "This is just a big header that says hello and welcome here !";
    message.style.color = "purple";
    message.style.fontSize = "40px";
    

}


button.addEventListener("click", changeMessage);

