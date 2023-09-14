# Frontend Mentor - Profile Card Component Solution

This is a solution to the [Profile Card Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Profile Card Component Solution](#frontend-mentor---profile-card-component-solution)
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

- Build out the project to the designs provided

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Profile Card Project](https://transcendent-kitsune-6a71ee.netlify.app/profile%20card%20component/)
- Live Site URL: [Front End Mentor Projects](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- Mobile-First Workflow

### What I Learned

I spent a lot of time working with positioning in this project. I learned more about absolute positioning as the background required images to be applied absolutely.

HTML:
- the code snippet below seems like nothing until the CSS is added...
```html
  <div>
    <img src="./images/bg-pattern-top.svg" alt="circle" class="backgroundTopImage">
  </div>
  <div>
    <img src="./images/bg-pattern-bottom.svg" alt="circle" class="backgroundBottomImage">
  </div>
```
CSS:
- the code snippet below places the background images on the screen in an absolute position so it seems as though it is all just one background.
```css
  .backgroundTopImage {
      top: 0;
      left: 0;
      z-index: -5;
      position: absolute;
      transform: translate(-30%, -50%);
      background: url(./images/bg-pattern-top.svg);
  }
  .backgroundBottomImage {
      right: 0;
      bottom: 0;
      z-index: -5;
      position: absolute;
      transform: translate(20%, 60%);
      background: url(./images/bg-pattern-bottom.svg);
  }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I still need to understand more about responsive design and how to go from mobile to desktop without having skewed elements. On this project I think there is an issue with my profile image being centered when changing the screen size, and I'm not sure how to best fix that issue.

### Useful Resources

- [Email on Acid](https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/) - I really just liked the name of this site, but it had a good article about @media queries.
- [W3 Schools](https://www.w3schools.com/css/css3_backgrounds.asp) - This helped me understand how to add multiple background images and position them.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

I want to thank whoever created Front End Mentor, and Chris Thompson who was my teacher at the Coding Dojo in Dallas.