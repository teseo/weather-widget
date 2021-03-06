![](screenshot/widget.png) 

# Instructions

After cloning this repo, in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
![](screenshot/tests.png) 

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

The deployment can be seen [https://teseo.github.io/weather-widget](https://teseo.github.io/weather-widget).

## Thoughts

Is the first time that I work with typescript (I worked with flow), in general basis,
I wouldn't abuse of the `any` type as I've done in this code test.

As for the UI I got some inspiration in the Google Weather Widget.

In this test I'm using Edinburgh as city and query once the api to avoid saturating my account. Ideally it should have
an input to enter the city you want to see the weather forecast. The api call can be seen in the network tab within the Chrome dev tools.

I used `styled components` because I think it makes the code more readable and gives more flexibility to work with CSS dynamically

I was a bit rusty after the paternity leave and I had to refresh my knowledge on redux and catch up with React.js after 8 months.

I wrote tests for the redux async action, for the reducer and in general I left the test from the create-react-app as 
I had it open in my terminal all the time and was very useful to see if anything was broken. The components are very simple
and they just render props, it wouldn't add much value matching against snapshots as snapshot tests are hard to mantain. 
Ideally I'd use enzyme and jest for complex components testing.

Is the first time that I deploy a page to github pages. In a commercial site, the open weather api key wouln't be in this repo.
