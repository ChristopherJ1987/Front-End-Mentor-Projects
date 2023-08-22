# Frontend Mentor - QR Code Component Solution

This is a solution to the [QR Code Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - QR Code Component Solution](#frontend-mentor---qr-code-component-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
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

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [QR Code Component Solution](https://transcendent-kitsune-6a71ee.netlify.app/qr%20code%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- CSS Grid
- Mobile-First Workflow

### What I Learned

This was a relatively simple project, but this challenge allowed me to begin my Front End Mentor journey. This was a great first challenge as I was able to spend most of my time getting used to the Front End Mentor website and dashboard and also spend time getting used to the starter files and structure of the challenges.

HTML:
- Linking the CSS and HTML may be the most important code snippet as this project is mainly about how elements are displayed.
```html
<link rel="stylesheet" href="style.css">
```
CSS:
- This code snippet places the element in the middle of the page and delivers the main aspect of this challenge.
```css
.qrCard {
    top: 50%;
    left: 50%;
    padding: 10px;
    display: flex;
    max-width: 325px;
    position: absolute;
    border-radius: 1rem;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I think moving forward with future projects I will need to work on being more mindul in how I structure my CSS code. This was a relatively small project, but when the projects get bigger I want to be able to easily read my code.

### Useful Resources

- [W3Schools](https://www.w3schools.com/) - W3Schools offers a wide range of services and products for beginners and professionals, helping millions of people everyday to learn and master new skills.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing) - As you start to work on larger stylesheets and big projects you will discover that maintaining a huge CSS file can be challenging. In this article we will take a brief look at some best practices for writing your CSS to make it easily maintainable, and some of the solutions you will find in use by others to help improve maintainability.

## Author

- Portfolio Website - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

Thank you to whoever created Front End Mentor.