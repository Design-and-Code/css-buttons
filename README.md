# CSS Buttons
> A collection of simple and subtle CSS-only hover animations for buttons. ✨

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat)](https://github.com/Design-and-Code/css-buttons)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/Design-and-Code/css-buttons)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103?style=flat)](https://github.com/Design-and-Code/css-buttons)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Design-and-Code/css-buttons)
[![issues](https://img.shields.io/github/issues/Design-and-Code/css-buttons?color=6CC621)](https://github.com/Design-and-Code/css-buttons)

![Design](https://user-images.githubusercontent.com/65373279/193451212-96c59af4-ff8b-437a-b8da-c4d1ab4a1cc6.png)

# Some rules to follow when Contributing:

- Please follow naming convention for button classes. (Eg. yourname-btn-index or btn-yourname-index)
- Do not change default buttons maked with the ` button-def ` class.
- Do not change any code in the `index.html` file except for button section.
- Do not change any code in the `assets` folder.

# How to contribute by adding more buttons

1. Fork the repo and clone it.
2. Add your HTML code in the [index.html](https://github.com/Design-and-Code/css-buttons/blob/main/index.html) file.
3. Add your CSS code in the [buttons.css](https://github.com/Design-and-Code/css-buttons/blob/main/buttons/buttons.css) file.
4. Make sure you do not change any other button's code (for that, use the correct naming conventions - eg. yourname-btn-index or btn-yourname-index).
5. When you open the PR, please include a full screenshot.

#### Demo code 
```html
    <div class="button-container">
            <!-- add your buttons here, eg.
            <button class="button-{number}"><span> Example Button </span></button>
            </div>
            -->
    </div>
```

### Folder Structure

```
root
├── assets
│   ├── script.js
│   └── css
│       └── style.css
│   
├── buttons
│   └── buttons.css
└── index.html
```
