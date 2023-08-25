const form = document.querySelector(".form");
const template = document.querySelector(".thankYouCardHolder");
const wrapper = document.querySelector(".ratingCardHolder");

function handleSubmit(event) {
    event.preventDefault();
    const rating = new FormData(event.target).get("rating");
    if(rating) {
        wrapper.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating);
    }
}

form.addEventListener("submit", handleSubmit);