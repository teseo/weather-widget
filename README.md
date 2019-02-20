This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Instructions

After cloning this repo, in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deployment

The deployment can be seen [https://teseo.github.io/weather-widget/index.html](https://teseo.github.io/weather-widget/index.html). For some reason the deployment wouldn't
work if there's no `index.html` in the url

## Thoughts

Is the first time that I work with typescript (I worked with flow), in general basis,
I wouldn't abuse of the `any` type as I've done in this code test.

In this test I'm using Edinburgh as city and query once the api to avoid saturating my account. Ideally it should have
an input to enter the city you want to see the weather forecast.

I used `styled components` because I think it makes the code more readable and gives more flexibility to work with CSS dynamically

I was a bit rusty after the paternity leave and I had to refresh my knowledge
on redux.

Is the first time that I deploy a page to github pages. In a commercial site, the open weather api key wouln't be in this repo.
