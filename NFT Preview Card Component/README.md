# Frontend Mentor - NFT Preview Card Component Solution

This is a solution to the [NFT Preview Card Component Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - NFT Preview Card Component Solution](#frontend-mentor---nft-preview-card-component-solution)
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

- Solution URL: [NFT Preview Card Component Solution](https://transcendent-kitsune-6a71ee.netlify.app/nft%20preview%20card%20component/)
- Live Site URL: [Front End Mentor Challenges](https://transcendent-kitsune-6a71ee.netlify.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I Learned

I had to find a way to add a hover overlay to the NFT image, and sizing and placement is still proving to be an issue that I need to resolve.

HTML:
- the code below allows me to have the overlay image in the web application, but does not show the image until I use CSS to add the hover effect.
```html
      <div class="image">
        <img id="equilibriumImage" src="./images/image-equilibrium.jpg" alt="equilibrium image">
        <div class="overlay fadeEffect">
          <img id="viewImage" src="./images/icon-view.svg" alt="view image">
        </div>
      </div>
```
CSS:
- the code below allows me to use CSS to add the overlay hover effect to the NFT image.
```css
    #equilibriumImage {
        width: 99%;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.75rem;
    }
    #equlibriumImage:hover {
        background-color: var(--cyan, 0.7%);
    }
    .image {
        position: relative;
    }
    .overlay {
        opacity: 0;
        cursor: pointer;
        position: absolute;
        transition: all 0.4s ease;
    }
    .image:hover .overlay {
        opacity: 0.5;
    }
    .fadeEffect {
        top: 0;
        left: 100px;
        width: 99%;
        height: 99%;
        border-radius: 0.75rem;
        transform: translateX(-21.25%);
        background-color: var(--cyan);
    }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued Development

I still have to learn more about sizing and placement. Since this is a responsive design I would like the image and overlay image to fit appropriately regardless of the screen size. It is not currently fitting at all points when I resize the application, but I will continue to learn how to make that possible.

### Useful Resources

- [Image Kit](https://imagekit.io/blog/css-image-overlay/) - This showed me more about information on how to use the position in CSS.
- [W3Schools](https://www.w3schools.com/howto/howto_css_image_overlay_title.asp) - More information about how to use an overlay.

## Author

- Portfolio - [Christopher J](https://clever-sunburst-739be9.netlify.app/)
- Frontend Mentor - [@ChristopherJ1987](https://www.frontendmentor.io/profile/ChristopherJ1987)

## Acknowledgments

Thanks to Chris Thompson who was my teacher at Coding Dojo Dallas, and whoever created Front End Mentor.