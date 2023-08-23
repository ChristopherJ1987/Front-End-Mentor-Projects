# Frontend Mentor - Product Preview Card Component Solution

This is a solution to the [Product Preview Card Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Product Preview Card Component Solution](#frontend-mentor---product-preview-card-component-solution)
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
- See hover and focus states for interactive elements

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Product Preview Card Component Solution](https://transcendent-kitsune-6a71ee.netlify.app/product%20preview%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- Mobile-First Workflow

### What I Learned

I started this knowing more about how to set up the responsive designs from working with a mobile first approach with this project. I found that I can use certain HTML tags to choose which image I would use based on the application screen size.

HTML:
- the code below shows the new HTML tags I worked with that allow me to choose which image will be displayed dependent upon the application screen size.
```html
<picture>
  <source srcset="./images/image-product-mobile.jpg" media="(max-width: 600px)">
  <source srcset="./images/image-product-desktop.jpg" media="(max-width: 2000px)">
  <img src="images/image-product-mobile.jpg" alt="product image">
</picture>
```

CSS:
- the code below is used to import fonts from google fonts and use them in your application.
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I learned some new HTML tags with this project, and it taught me that even though I felt very comfortable and knowledgeable with HTML that I will always have something new I can learn. I need to continue levelling up skills I do not currently have, and also the ones I feel comfortable with so I do not become complacent.

### Useful Resources

- [W3Schools](https://www.w3schools.com/tags/tag_picture.asp) - This helped me learn how to use the picture tag.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

I want to thank whoever created Front End Mentor, and Chris Thompson who was my teacher at the Coding Dojo in Dallas.