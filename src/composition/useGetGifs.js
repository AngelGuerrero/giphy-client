import { Service } from '../api/service'

const getPopularGifs = async (q, limit = 25) => {
  const service = new Service(import.meta.env.VITE_GIPHY_URL)

  const query = {
    q,
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    limit,
    rating: 'g'
  }

  const { error, data } = await service.all(
    'search?' + service.createParams(query)
  )

  if (error) {
    return
  }

  return data.data
}

export { getPopularGifs }
