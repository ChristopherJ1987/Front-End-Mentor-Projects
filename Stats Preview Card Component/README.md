# Frontend Mentor - Stats Preview Card Component Solution

This is a solution to the [Stats Preview Card Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Stats Preview Card Component Solution](#frontend-mentor---stats-preview-card-component-solution)
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

### Screenshot

![](./design/desktop-design.jpg)

I am using the images provided in the design folder for screenshot images. When I used my own screenshots they all had different sizes and warped the grid i had layed out on my homepage. The images provided in the design folder are close enough to what I have made to not notice the difference, and allow a more pleasing user experience.

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Stats Preview Card Project](https://transcendent-kitsune-6a71ee.netlify.app/stats%20preview%20card%20component/)
- Live Site URL: [Front End Mentor Projects](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS Custom Properties
- Flexbox
- Mobile-First Workflow

### What I Learned

While I was working on this project I realized that even though I have more to learn, I have learned quite a bit of stuff already. There were a lot of aspects of this project that I already knew, but I just haven't used that much in other projects. This project is helping me to iron out some wrinkles I have had with using min and max widths while reminding me I know things that I didn't use to know, like reversing row directions to easily move elements.

HTML:
- the code snippet below uses the picture and source tags to use different images based on the applications screen size.
```html
        <picture>
          <source media="(max-width:600px)" srcset="./images/image-header-mobile.jpg">
          <source media="(min-width:600px)" srcset="./images/image-header-desktop.jpg">
          <img src="./images/image-header-mobile.jpg" alt="image header">
        </picture>
```
CSS:
- the code snippet below is related to the card wrapper and card elements from the HTML, and it shows how display: flex; can be used with flex-direction to move the elements where you want within their parent element.
```css
    .wrapper {
        top: 50%;
        left: 50%;
        width: 80%;
        display: flex;
        min-width: 940px;
        position: absolute;
        align-items: center;
        border-radius: 1rem;
        flex-direction: column;
        transform: translate(-50%, -50%);
    }
    .card {
        width: 100%;
        display: flex;
        min-width: 777px;
        max-width: 943px;
        text-align: center;
        border-radius: 1rem;
        flex-direction: row-reverse;
        background-color: var(--darkDesaturatedBlue);
    }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I still need to work on best practices when it comes to using min and max widths and heights. I haven't used them much before, but I tried using them more in this project and it is obvious that I need to practice more. 

### Useful Resources

- [W3Schools](https://www.w3schools.com/tags/tag_picture.asp) - Just a really nice reference for the how to use the picture tag in HTML.
- [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-get-rid-of-the-gap-under-the-image/) - I found this to help me get rid of some white space under my picture tag, and it was literally just making the css selector display: block;.
- [DEV](https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio) - I was having a hard time figuring out what I needed to do about the overlay color, and this gave me an interesting way to approach the problem that I wasn't thinking of.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor Profile - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

I want to thank whoever created Front End Mentor, and Chris Thompson who was my teacher at the Coding Dojo in Dallas.