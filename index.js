// rating card elements
const one = document.getElementById(1);
const two = document.getElementById(2);
const three = document.getElementById(3);
const four = document.getElementById(4);
const five = document.getElementById(5);
const submit = document.getElementById("submit");

// thank you card elements
const article = document.getElementById("thank-you-card");
const pic = document.getElementById("thank-you-pic");
const result = document.getElementById("result");
const thankYou = document.getElementById("thank-you_");
const thankParagraph = document.getElementById("thank-you-p");

// rating value to display in thank you card
let userChoose = "0";

// circle clicked
one.addEventListener("click", () => {
  rating(one);
})

two.addEventListener("click", () => {
  rating(two);
})

three.addEventListener("click", () => {
  rating(three);
})

four.addEventListener("click", () => {
  rating(four);
})

five.addEventListener("click", () => {
  rating(five);
})

function rating(arg) {
  one.classList.remove("clicked");
  two.classList.remove("clicked");
  three.classList.remove("clicked");
  four.classList.remove("clicked");
  five.classList.remove("clicked");
  arg.classList.add("clicked");
  userChoose = arg.getAttribute("data-value");
}

// submit clicked
submit.addEventListener("click", () => {
  article.classList.remove("index");
  pic.classList.remove("index");
  result.classList.remove("index");
  result.innerText = `You selected ${userChoose} out of 5`;
  thankYou.classList.remove("index");
  thankParagraph.classList.remove("index");
})