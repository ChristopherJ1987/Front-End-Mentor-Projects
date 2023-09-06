# Frontend Mentor - 3-column Preview Card Component Solution

This is a solution to the [3-Column Preview Card Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - 3-column Preview Card Component Solution](#frontend-mentor---3-column-preview-card-component-solution)
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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [3 Column Preview Card Project](https://transcendent-kitsune-6a71ee.netlify.app/3%20column%20preview%20card%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- CSS Grid
- Mobile-First Workflow

### What I Learned

I used min and max widths and heights in this project more effectively than my previous projects, but I still feel like I could learn a more effetive way of using them. 

HTML:
- Having a class and an id on my link button allowed me to give all the link buttons the same styling, but change their individual colors using the id tag.
```html
  <a href="" class="cardButton" id="sedanButton">Learn More</a>
```

CSS:
- I think this is the first time I have actually used the :nth-child() CSS selector in a project, and I was so happy to put it into practice. This CSS selector allowed me to go through each of the HTML elements with the .card class, and style them independently from one another based on which child they were. This allowed me to make them all have different background colors, and pick which corner to give a border-radius to.
```css
  .card:nth-child(1) {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      background-color: var(--brightOrange);
  }
  .card:nth-child(2) {
      background-color: var(--darkCyan);
  }
  .card:nth-child(3) {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      background-color: var(--veryDarkCyan);
  }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

Going forward I still want to practice more with min and max widths and heights. I think my desktop version cuts off the card a little bit right before it moves down to the mobile version, and I need to figure out how to fix that.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) - This was a really good resource on how to use the :nth-child CSS selector.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

I want to thank whoever created Front End Mentor, and Chris Thompson who was my teacher at the Coding Dojo in Dallas.