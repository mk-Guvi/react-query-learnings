import axios from 'axios'
import { useQuery } from 'react-query'
const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const RQSuperHeroPage = () => {
  const { isLoading, data, error, isError } = useQuery(
    'super-hero-unique-id',
    fetchSuperHeros,
  )
  if (isLoading) {
    return <h2>Loading..</h2>
  }
  if (isError) {
    return <h2>{(error as Record<string, string>)?.message}</h2>
  }
  return (
    <>
      <h2>Rq Super Heroes Page</h2>
      {data?.data?.map((hero: Record<string, string>) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}
