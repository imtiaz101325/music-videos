import useData from './useData'

export default function App() {
  const { data, loading, error } = useData()

  return (
    <div>
      {loading && 'loading...'}
      {error && 'error'}
      {data?.videos?.map(
        ({ image_url, title, id }) => <img src={image_url} alt={title} key={id} />
      )}
    </div>
  );
}
