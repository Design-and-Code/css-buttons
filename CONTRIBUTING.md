# Contributing

Glad to see you want to contribute to this project!

> **Note**
>
> - We donot expect Modified CSS button of existing button.
> 
> - Avoid duplicate contributions, please check if a button already exists before contributing.

## Contents

- [Setup this project](#setup-project)
- [Rules to follow when contributing](#some-rules-to-follow-when-contributing)
- [Add your button to this repo](#add-your-button-to-css-buttons)
- [How to ask help?](#where-can-i-go-for-help)
- [Report a bug/feature request](#report-a-bugrequest-a-feature)

---

## Setup Project

To start contributing, follow the below guidelines:

1. Fork [this](https://github.com/Design-and-Code/css-buttons) repository.

2. Clone your forked copy of the project.

   ```
   git clone https://github.com/<your_username>/css-buttons.git
   ```

3. Navigate to the directory `css-buttons` .

   ```
   cd css-buttons
   ```

4. Add a reference (remote) to the original repository.

   ```
   git remote add upstream https://github.com/Design-and-Code/css-buttons.git
   ```

5. Check the remotes for this repository.

   ```
   git remote -v
   ```

6. Always take a pull from the upstream repository to your main branch to keep it up to date with the main project (updated repository).

   ```
   git pull upstream main
   ```

7. Create a new branch.

   ```
   git checkout -b <your_branch_name>
   ```

# Some rules to follow when Contributing:

- Please follow naming convention for button classes. (Eg. yourname-btn-index aka rajkumar-btn-1)
- Do not change default buttons maked with the ` button-def ` class.
- Do not change any code in the `index.html` file except for button section.
- Do not change any code in the `assets` folder.


## Add your button to css-buttons

1. Add your HTML code in the [index.html](https://github.com/Design-and-Code/css-buttons/blob/main/index.html) file.
2. Add your CSS code in the [buttons.css](https://github.com/Design-and-Code/css-buttons/blob/main/buttons/buttons.css) file.
3. Make sure you do not change any other button's code.
4. For naming css classes use the correct naming conventions - eg. yourname-btn-index or btn-yourname-index.
5. When you open the PR, please include a full screenshot.
6. See below demo code to know how to add your button.

#### Demo code 
```html
    <!-- your-github-username-btn-1 start -->
    <div class="button-container">
            <!-- add your buttons here, eg.-->
            <button class="{your-github-username-btn-index}">
                <span class="{your-github-username-btn-index}"> Example Button </span>
            </button>
            <div class="createdby-section">
                Created by
                <a href="{your-github-link}">{your-github-username}</a>
            </div>
    </div>
    <!-- your-github-username-btn-1 end -->
```
> So it will look like this 
```html
    <!-- Rajkumar-justcoder-btn-1 start -->
    <div class="button-container">
            <!-- add your buttons here, eg.-->
            <button class="rajkumar-justcoder-btn-1">
                <span class="rajkumar-justcoder-btn-1-span"> Example Button </span>
            </button>
            <div class="createdby-section">
                Created by
                <a href="link">Rajkumar-justcoder</a>
            </div>
    </div>
    <!-- Rajkumar-justcoder-btn-1 end -->

```
7. Also if u use any tag like span or div etc then your should have class-name like this: `your_github_username-btn-index-span/text/div` (example: `rajkumar-justcoder-btn-1-span`) as u can see in above given demo code.
8. If using keyframes/animation in css then keyframe name also should be like this: `your_github_username-btn-index-rotate` (example: `rajkumar-justcoder-btn-1-rotate`)


## Push your changes and make a Pull Request

1. Track your changes ✔.

    ```
    git add .
    ```

2. Commit your changes.

    ```
    git commit -m "Relevant message"
    ```

3. Push the committed changes in your feature branch to your remote repo.

    ```
    git push -u origin <your_branch_name>
    ```

4. To create a pull request, click on `Compare & pull requests`.

5. Add appropriate title and description to your pull request explaining your changes and efforts done.

6. Click on `Create pull request`.

7. Voilà! You have made a PR to css-buttons 💥. Wait for your submission to be accepted and your PR to be merged.


## Where can I go for help?

If you need help, you can join our discord server.

<p>
   <a href="https://discord.gg/druweDMn3s">
     <img alt="Discord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"> 
   </a>
</p>

## Report a bug/request a feature

If you find a security vulnerability, do NOT open an issue. [Email](mailto:designandcode.community@gmail.com) us instead.

If you find yourself wishing for a feature that doesn't exist in css-buttons, you are probably not alone. Open an issue on our issues list on GitHub which describes
the feature you would like to see, why you need it, and how it should work.

#### Follow these steps to report a bug/request a feature

- Head over to [issues](https://github.com/Design-and-Code/css-buttons/issues) tab.
- Click on `New issue` in top right corner.
- Add appropriate title and description to your issue.


#### Things to keep in mind while reporting a bug

A good bug report shouldn't leave others needing to chase you up for more information.
Please try to be as detailed as possible in your report.

- What is your environment?
- What steps will reproduce the issue?
- What browser(s) and OS experience the problem?
- What would you expect to be the outcome?
- Provide adequate screenshots/log for the bug.

All these details will help developers to fix any potential bugs.

#### Things to keep in mind while creating a feature request

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project.
It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.