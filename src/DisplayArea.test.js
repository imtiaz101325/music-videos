import { render, screen } from '@testing-library/react';

import { DisplayArea } from './DisplayArea';

test('renders images', async () => {
  render(<DisplayArea items={[
    {
      "id": 501437,
      "artist": "Pants Velour",
      "title": "All In",
      "release_year": 2014,
      "genre_id": 14,
      "image_url": "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg"
    }
  ]}/>)

  const imageNode = screen.getByAltText(/all in/i)
  expect(imageNode).toBeInTheDocument()
})
