import { DisplayArea } from './DisplayArea';
import useData from './useData'

export default function App() {
  const { data, loading, error } = useData()

  return (
    <div>
      <h1>Music Videos</h1>
      {loading && 'loading...'}
      {error && 'error'}
      <DisplayArea items={data?.videos} />
    </div>
  );
}
