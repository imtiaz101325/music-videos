import { useEffect, useState } from "react"

export default function useData() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      const url = 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json'
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData({
          ...data,
          videos: data.videos.map(video => {
            return {
              ...video,
              genre: data.genres.find(({ id }) => id === video.genre_id)?.name
            }
          })
        })
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }

    setLoading(true)
    fetchData()
  }, [])

  return {data, loading, error}
}