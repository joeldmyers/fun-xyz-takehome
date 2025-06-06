# Fun.xyz Takehome | Joel Myers

To view this on the web, [click here](https://fun-xyz-takehome-git-main-joeldmyers-projects.vercel.app/).

## Running Locally

Step 1: Run `npm i`

Step 2: create a .env.development file. Add `API_BASE_KEY=[Your Funkit API Key]`

Step 3: Run `npm run dev`

## Notes

The main page code is found [here](https://github.com/joeldmyers/fun-xyz-takehome/blob/main/src/app/page.tsx).

### Choices made

- I used [Ant Design](https://ant.design/) to speed up UI development.
- I put the API call behind the API so as not to expose the API key publicly. It still would need to be locked down more with CORS protection (see below)
- I used [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) to manage API calls.
- I set this to refetch data every five seconds, so as to have it be more like a "live streaming" app. This would need discussion with product to consider tradeoffs (e.g., API call costs, rate limits)
- I set up the dollar input in the middle. This wasn't in the wireframe, but I was following "They need a simple tool to select two tokens (a source and a target) and input a USD amount" from the PDF.

### Things I would do if I had more time

- Add unit/UI tests with Jest and React Testing Library
- Add some E2E tests using Playwright or Cypress
- Add in more tokens. This used a const array of the four mentioned in the PDF. In the interest of time I did not add fetching from an API.
- Improve mobile look/layout
- Add CORS restriction on API for security reasons.
- Improve the loading UI. Right now it hides the whole page. That's not a great UX. I would want it to show only for the piece of data that it's loading (here the one column)
- I probably wouldn't have gone with the default CSS Module setup Next.js has. I like Styled Components but am flexible on other approaches (Tailwind etc.)
- If there were more pages and these components were not shared across pages, I would consider putting these components within the main app folder rather than in the shared components folder. Using a component library (Ant Design) made it less necessary for me to create shared components.
- I'd add commas to numbers to make them more readable.
- I'd tighten up types, including ensuring return types on all methods.
