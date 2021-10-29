import { useEffect, useState } from "react"

export default function useData() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      const url = 'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.jsonn'
      try {
        const response = await fetch(url)
        setData(await response.json())
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