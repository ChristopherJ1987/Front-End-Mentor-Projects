# Frontend Mentor - Order Summary Card Solution

This is a solution to the [Order Summary Card Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Order Summary Card Solution](#frontend-mentor---order-summary-card-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Order Summary Component Solution](https://transcendent-kitsune-6a71ee.netlify.app/order%20summary%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- Mobile-First Workflow

### What I Learned

I worked more with svg files, and I leanered how to work with their fill color and size. I spent more time working with positioning and flex items, thinking about how to structure the project, and I still had some things to go back and add to the structure. It was easier to write CSS for this project because of the time I spent thinking about and laying out the HTML structure.

HTML:
- the code below is the part I had to go back and add in after I planned out my HTML. The spacing required an extra div that I didn't originally plan for, but besides that the reason I like this code is because this HTML plus the CSS I added allows me to make both display: flex; ** I never used to think of this, and now I just do it which is progress ** and this makes setting responsive spacing super easy.
```html
  <div class="orderPlan">
    <div class="orderPlanLeft">
      <img src="./images/icon-music.svg" alt="music icon" class="musicIcon">
      <div class="pricePlan">
        <p class="typeOfPlan">Annual Plan</p>
        <p class="costOfPlan">$59.99/year</p>
      </div>
    </div>
    <p class="changePlan">Change</p>
  </div>
```
CSS:
- the code below is the double display: flex; I mentioned above with the HTML code snippet. I used to get so tripped up over how to use display: flex; and I'm so happy that I am using it more easily and correctly in my projects.
```css
  .orderPlan {
      margin: 1rem;
      display: flex;
      padding: 0 1rem;
      border-radius: 1rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: hsla(225, 100%, 94%, 0.325);
  }
  .orderPlanLeft {
      display: flex;
      margin-right: 10px;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
  }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I just realized that I may be using rem when I should really be using px for certain things in my CSS code, and I want to be more aware of that going forward. This project was really nice, and I am going to look for the next project to keep my skills fresh while learning new skills.

### Useful Resources

- [HubSpot](https://blog.hubspot.com/website/center-div-css) - I have used this link in almost every project to horizontally and vertically center a div so I thought I would put it in the resource section whil I was thinking about it with this project.
- [Webflow](https://discourse.webflow.com/t/how-to-change-svg-colors/114001) - This showed me how to alter the svg code slightly so I can change the fill color.
- [CSS Tricks](https://css-tricks.com/snippets/css/css-box-shadow/) - This was a great resource for helping me get the box shadow I wanted.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

I want to thank whoever created Front End Mentor, and Chris Thompson who was my teacher at the Coding Dojo in Dallas.