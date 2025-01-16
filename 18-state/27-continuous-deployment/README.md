# CI/CD Using GitHub Actions

In this guide, we will explore how applications are constantly updated and released to the public smoothly and seamlessly: we will revisit GitHub Actions to set up automated continuous deployment of an application to Render. **Continuous deployment (CD)** describes the automated process by which new features and bug fixes are delivered to end users.

CD often accompanies **continuous integration (CI)**, which describes when developers merge all their existing copies of code into a shared branch several times a day. As changes to a repository compound on each other, developers encounter more complications when submitting their work. The **CI/CD pipeline**, then, keeps the codebase up to date and evolving with the developers that work on it.

Although this particular guide covers continuous deployment with Render, you can use the same process for other platforms, such as Netlify, Vercel, and many others. There is no shortage of cloud providers that you can choose from to deploy your applications -- and because technologies are constantly emerging and evolving, developers need to be well-rounded and adaptable to new platforms.

## Create the App

First we will create an app that will eventually be used by GitHub Actions to automatically deploy to Render.

1. Create a new boilerplate React application in a directory of your choice. After the app has been created, navigate to that directory, as follows:

   ```sh
   npm create vite@4.4.1 github-cd
   cd github-cd
   ```

2. Navigate to GitHub and create a new repository of the same name. Opt out of the README and `.gitignore` initialization.

3. Initialize the vite app as a git repository, as follows:

   ```sh
   git init
   ```

4. Copy the remote URL from your newly created GitHub repository and add it to your current project, as follows:

   ```sh
   git remote add origin <github_remote_url>
   ```

5. Add commit and push to GitHub so we can connect to the GitHub repo with Render.

## Create a Render App

The Render dashboard allows us to easily create an app and link an existing GitHub repository to it to deploy. By default Render will have continous deployment enabled via automated deploys. First, we will connect our app to Render and show how this functionality works, then we will disable automated deploys and show a more customized version using GitHub actions.

1. Create a new Render app by clicking the "New" button on the right side of the navbar, as shown in the following image:

   ![Screenshot of the Render dashboard. A button with the text "New +" is on the right side of the navbar.](./Images/01-dashboard-navbar.png)

2. Select "Static Site" from the dropdown menu, as shown in the following image:

   ![Screenshot of the Render dashboard after clicking on the "New +" button. A dropdown menu appears with several options.  The first choice has the text "Static Site".](./Images/02-static-site.png)

3. Search for your GitHub repository to connect to and click the "Connect" button once you have found it, as shown in the following image:

   ![Screenshot of the Render page for building a new Static Site. The first option shown is to connect to an existing git repositiory owned by the user. There is a search bar to search for the repository. Below the search bar is a list of results matching the search with a button to connect to the repository for each result.](./Images/03-connect-repo.png)

4. If this is your first time deploying to Render, you will need to allow access to your GitHub repositories. Click on the "+ Connect account" link under the GitHub heading, as shown in the following image:

   ![Screenshot of the Render create web service page. A link with the text "+ Connect account" is on the Right side of the page, under a heading with an icon of the Github logo and the text "GitHub".](./Images/04-connect-github.png)

5. Next, install Render to your GitHub account, providing access to all of your repositories, as shown in the following image:

   ![Screenshot of the GitHub allow permissions page. A radio button with the text "All repositories" is selected in the middle of the page, and a button with the text "Install" is towards the bottom of the page.](./Images/05-allow-github-access.png)

6. You will now be able to search for and connect to your GitHub repository as shown previously.

7. Give your new Render app a unique name, as shown in the following image. It does not have to match the repo name, but it is useful to do so to keep track of which app is attached to which repo:

   ![Screenshot of the Render create static site page. An input with the label "Name" is at the top of the page and has been given the value of "github-cd".](./Images/06-name-app.png)

8. Render needs to know which steps need to be taken to get your app up and running. In the case of a static React app, we need to run `npm run build` to build and compile our resources. Scroll to the section "Build Command" and update the field to `npm run build`. Render also needs to know which directory to publish after the build has taken place. By default, render will create a build repository called `dist`, so update this value to be `dist`:

   ![Screenshot of the Render create web service page partially scrolled from the top. An input with the label "Build Command" has been given the value of "npm run build," and an input with the value of "publish directory" has been given the value "dist".](./Images/07-build-publish.png)

9. Next, click the "Create Static Site" button, as shown in the following image:

   ![Screenshot of the Render create static site page scrolled to the bottom. A button with the text "Create Static Site" appears at the bottom of the page.](./Images/08-create-button.png)

10. The next page will log all the actions being taken to set up your server. Once your server goes live, you can use the provided link toward the top of the page to view your live site, as shown in the following image:

    ![Screenshot of the Render static site instance page. A link to the live deployed site appears on the top left of the screen.](./Images/09-initial-deploy.png)

11. Click on "Settings" from the menu on the left of the page, and scroll down in the "Build & Deploy" section below the publish directory and notice the setting for "Auto-Deploy" is on by default:

    ![Screenshot of the Render application settings page. It is scrolled down to show the settings for build command, publish directory, and auto-deploy from top to bottom. The setting for auto-deploy has a dropdown menu with the word "Yes" selected.](./Images/10-auto-deploy-setting.png)

12. To test out the Auto-deploy feature, make a change to the h1 tag of your document and then add, commit and push this change to tracked branch (main by default). Once you have done this, you can see the re-deploy take place in the event log:

    ![Screenshot of the Render Events page. It shows at the top of a log a successful deploy and below it a log for the start of a redploy based on a push.](./Images/11-event-log-autodeploy.png)

Great, we now have a working continous deployment configuration, but in the next steps lets look at how to make this a safer process using GitHub Actions. One flaw that we have right now, is that pushes to main are deployed without any automated testing. In the next sections, we will setup a GitHub Action that will only deploy our push once we have passed a test case that we will create.

## Setup a test

1. Add the following script to your `package.json`:

   ```json
   "scripts": {
     "test": "vitest"
   }
   ```

2. Add `@testing-libary/react`, `happy-dom`, and `vitest` as devDependencies with the following command:

   ```sh
   npm i -D @testing-library/react happy-dom vitest
   ```

3. Add the following snippet to your `vite` configuration in `vite.config.js`:

   ```js
   test: {
     globals: true,
     environment: 'happy-dom',
     setupFiles: './src/tests/setup.js',
   },
   ```

4. Create a folder called `tests` in the `src` directory and create a file within it called `App.test.jsx`.

5. Add the following code to the `App.test.jsx` file:

   ```js
   import { render } from "@testing-library/react";
   import App from "../App";

   it("renders with the h1 content as Deploy to Render", () => {
     render(<App />);

     const h1 = document.querySelector("h1");
     expect(h1.textContent).toBe("Deploy to Render");
   });
   ```

6. Create a file called `setup.js` within the `tests` folder and add the following code:

   ```js
   import { afterEach } from "vitest";
   import { cleanup } from "@testing-library/react";

   // runs a cleanup after each test case (e.g. clearing happydom)
   afterEach(() => {
     cleanup();
   });
   ```

7. Run your test using `npm run test` and verify that the test worked correctly and had a failing result.

## Create main.yml

1. Create a new folder called `.github` and another folder inside of it called `workflows`. After this, we will create the `main.yml` file, defining the workflow for GitHub. See the following example:

   ```sh
   mkdir .github && cd .github
   mkdir workflows && cd workflows
   touch main.yml
   ```

   **Note**: Any file prefixed by a `.` is hidden to the operating system. Running `ls` won't show those files or folders. To see them, run `ls -a`. The `-a` flag stands for "all."

2. In your code editor, open `.github/workflows/main.yml` and add the following content:

   ```yml
   # .github/workflows/main.yml

   on:
     push:
       branches: [main]

   jobs:
     ci:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Test
           run: |
             npm install
             npm run test

         - name: Deploy
           # Only run this step if the branch is main
           if: github.ref == 'refs/heads/main'
           env:
             deploy_url: ${{ secrets.RENDER_DEPLOY_HOOK_URL }}
           run: |
             curl "$deploy_url"
   ```

   - **yml** is a human-readable language intended for config files that are used with programs that store or transmit data. Think of yml, or **YAML**, as a more readable version of XML or JSON. Indentation and whitespace are important in YAML. Using spaces instead of tabs for indentation is encouraged.

   - The first part of the file tells GitHub that when a push to the branch (`main`) occurs, some work should be performed. Update the word `main` in the following code if your default branch name is different:

     ```yml
     on:
       push:
         branches:
           - main
     ```

   - The latter half of this file tells GitHub that the action should be run on a container using the latest version of Ubuntu, a popular Linux distribution. A **container** is a virtual machine that runs on a server either locally or remotely. In this case, the container is being hosted by GitHub. Refer to the following example:

     ```yml
     jobs:
       ci:
         runs-on: ubuntu-latest
     ```

   - The `main.yml` file also specifies some actions, to check out the main branch and to deploy to Render. The steps are then defined as Test and Deploy. At the Test step, the test that we currently have defined in our project will execute, and the workflow will only move on to the next step if the test step succeeded. In the second Deploy step, if the tests passed and the branch is main, the deploy will be run using our Render deploy hook URL:

     ```yml
     steps:
       - uses: actions/checkout@v4
       - name: Test
         run: |
           npm install
           npm run test

       - name: Deploy
         # Only run this step if the branch is main
         if: github.ref == 'refs/heads/main'
         env:
           deploy_url: ${{ secrets.RENDER_DEPLOY_HOOK_URL }}
         run: |
           curl "$deploy_url"
     ```

   - You can specify multiple workflows that get triggered by different events on different branches. For example, if you want to run tests every time someone makes a pull request to `develop`, you can set up a workflow for that!

## Render Steps

Now we need to turn off auto-deploys so that our workflow will handle deploys. Then, we need to retrieve our deploy hook from our existing Render application to add to GitHub.

1. First, navigate to the Render application that you have previously created. Once there, go to the settings tab and scroll to the "Auto-Deploy" option. Make sure that this option is set to "No". To do so, click the "Edit" button, select "No" from the dropdown menu, and click the "Save Changes" button, as shown in the following:

   ![In Render, option for Auto-Deploy shows a dropdown with the current value of "No" and a button that says "Save Changes" right below it.](./Images/12-auto-deploy-off.png)

2. Next, scroll down to the "Deploy Hook" option immediately below the "Auto-Deploy" option and copy the value of the deploy hook URL by clicking the clipboard icon. We will need to paste this value into our GitHub settings.

## GitHub Steps

1. Navigate to the repository on GitHub and then select Settings for the repository (not your account settings).

2. Select Secrets and variables from the menu on the left, and then click on Actions in the sub-menu, as shown in the following image:

   ![In the repository Settings tab on GitHub, Secrets is selected on the left side of the window, and a button that says "New repository secret" appears on the right.](./Images/13-gh-secret-add.png)

3. Select "New Repository Secret". Name the new secret "RENDER_DEPLOY_HOOK_URL" and then paste in the URL that you copied earlier from Render, as shown in the following image:

   ![On a page called "Actions secrets/New secret", "RENDER_DEPLOY_HOOK_URL" is entered in the Name field, with the URL pasted into the Value field.](Images/14-enter-secret.png)

## Finishing Up

- Once you save your secret, the workflow setup should be complete and we just need to test it.

- Frst, we need to add and commit the current changes and push to GitHub. Once we do this, we should see the workflow invoked, but no new deployment because we should have a failing test.

- Commit your changes, as follows:

  ```sh
  git add -A
  git commit -m "Workflow with failing test"
  git push origin main
  ```

- Any changes that are made to your main branch will invoke your CD workflow on GitHub. Currently we have a failing test, so the action should fail and no deployments should have been triggered, as shown:

  ![In GitHub Actions, a change to the main branch invokes the CD workflow and fails.](./Images/15-workflow-failing-test.png)

- Update the `h1` in `App.jsx` to say "Deploy to Render", so that our test will pass (if the boilerplate application does not have an `h1`, add in an h1 with this content at this point).

- Commit your changes, as follows:

  ```sh
  git add -A
  git commit -m "Workflow with passing test"
  git push origin main
  ```

- Now that the test is passing, the workflow should succeed as follows:

  ![In GitHub Actions, a change to the main branch invokes the CD workflow and succeeds.](./Images/15-workflow-passing-test.png)

- You can also see in the Render event log that a deploy was triggered push with the passing test but not for the push with the failing test:

  ![In the Render event log, at the top of the log, there is a successful deploy for a push with a passing test and below it there is the event of the deploy starting. Beneath these two events there are no deployment events that relate to the push with the failing test.](./Images/16-render-deploy-event.png)

## Conclusion

Congratulations on setting up continuous deployment for your app! It is important to understand how to set up workflows for both your group projects and your future job -- and it can be quite satisfying to push your code to the main branch and watch the deployment log on GitHub. Happy coding!

## Helpful Resources

- [YAML documentation](https://yaml.org/)

- [GitHub documentation on continuous integration](https://docs.github.com/en/actions/guides/about-continuous-integration)

- [GitHub documentation on GitHub Actions](https://docs.github.com/en/actions)

- [Render documentation on deploy hooks](https://render.com/docs/deploy-hooks)

---
