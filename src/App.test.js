import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import App from './App';

beforeEach(() => {
  fetch.resetMocks();
});

test('shows loading indicator', async () => {
  render(<App />)

  const loadingIndicator = screen.getByRole(/progressbar/i)
  expect(loadingIndicator).toBeInTheDocument()
  
  await waitForElementToBeRemoved(() => screen.getByRole(/progressbar/i))
})

test('shows error indicator', async () => {
  fetch.mockReject(() => Promise.reject("API is down"))

  render(<App />);
  
  await waitFor(() => screen.getByText(/Something went wrong/i))
});

test('renders images', async () => {
  const data = {
    "genres": [
      { "id": 14, "name": "Rap/Hip-Hop" }
    ],
    "videos": [
      {
        "id": 501437,
        "artist": "Pants Velour",
        "title": "All In",
        "release_year": 2014,
        "genre_id": 14,
        "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
      }
    ]
  }
  fetch.mockResponseOnce(JSON.stringify(data))

  render(<App />)

  await waitFor(() => screen.getByAltText(/all in/i))
})
