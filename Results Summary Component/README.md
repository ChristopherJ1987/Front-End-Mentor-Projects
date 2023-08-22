# Frontend Mentor - Results Summary Component Solution

This is a solution to the [Results Summary Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Results Summary Component Solution](#frontend-mentor---results-summary-component-solution)
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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Solution URL: [Results Summary Component Solution](https://transcendent-kitsune-6a71ee.netlify.app/results%20summary%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- CSS Grid
- Mobile-First Workflow

### What I Learned

I really enjoyed being able to use HTML, CSS, and JS to complete this project. I chose to showcase the code snippets below to show how this project uses JS to take information from the data.json file and diplay it on the webpage or in the DOM and the CSS allows this project to become respoinsive to desktop and mobile devices.

HTML:
- the script tag at the end of my html code allowed me to link my JS to my HTML
```html
<script type="module" src="script.js"></script>
```

CSS:
- the @media selectors allow me to set CSS code to respond to different device screen sizes
```css
@media only screen and (max-width: 600px) {
  /* CSS Code Here */
}
@media only screen and (min-width: 1025px) {
  /* CSS Code Here */
}
```

JS:
- this import allows my JS file to import the data from the data.json file
```js
import data from "./data.json" assert {type: 'json'};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I am more comfortable with Mobile-First Design than I was before this challenge, but I think for my continued development I will try to focus more on file structure and application architecture before beginning any projects. I am just throwing this together as I go, and I think my future applications would benefit greatly if I spent a day to draw out the ideas I have floating around in my head.

### Useful Resources

![](./assets/images/@media.webp)

## Author

- Portfolio Website - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

Thank you to whoever created Front End Mentor.