// i need to be able to select the rating from the rating card
// i need to be able to click the submit button
// i need to be able to carry the rating from the rating card and display it on the thank you card
// i need to hide the rating card once the submit button is clicked on the rating card
// i need to diplay the thank you card when the submit button is clicked on the rating card

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