# Fun.xyz Takehome | Joel Myers

## Running Locally

Step 1: Run `npm i`

Step 2: create a .env.development file. Add `API_BASE_KEY=[Your Funkit API Key]`

Step 3: Run `npm run dev`

## Notes

### Choices made

- I used [Ant Design](https://ant.design/) to speed up UI development.
- I put the API call behind the API so as not to expose the API key publicly. It still would need to be locked down more with CORS protection (see below)
- I used [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) to manage API calls.
- I set this to refetch data every five seconds, so as to have it be more like a "live streaming" app. This would need discussion with product to consider tradeoffs (e.g., API call costs, rate limits)

### Things I would do if I had more tiime

- Add unit/UI tests with Jest and React Testing Library
- Add some E2E tests using Playwright or Cypress
- Add in more tokens. This used a const array of the four mentioned in the PDF. In the interest of time I did not add fetching from an API.
- Improve mobile look/layout
- Add CORS restriction on API for security reasons.
- Improve the loading UI. Right now it hides the whole page. That's not a great UX. I would want it to show only for the piece of data that it's loading (here the one column)
- I probably wouldn't have gone with the default CSS Module setup Next.js has. I like Styled Components but am flexible on other approaches (Tailwind etc.)
