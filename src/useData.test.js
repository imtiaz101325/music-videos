import { renderHook } from '@testing-library/react-hooks'

import useData from './useData'

beforeEach(() => {
  fetch.resetMocks();
});

test('should reflect loading state', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useData())

  expect(result.current.loading).toBe(true)

  await waitForNextUpdate()

  expect(result.current.loading).toBe(false)
})

test('should load data', async () => {
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

  const { result, waitForNextUpdate } = renderHook(() => useData())

  expect(result.current.data).toBe(undefined)

  await waitForNextUpdate()

  expect(result.current.data).toStrictEqual(data)
})

test('should handle error', async () => {
  fetch.mockReject(() => Promise.reject("API is down"))

  const { result, waitForNextUpdate } = renderHook(() => useData())

  expect(result.current.error).toBe(undefined)

  await waitForNextUpdate()

  expect(result.current.error).toBeTruthy()
})