import Treemap from './Treemap';
import data from './data';

function App() {
  return (
    <div className="App">
      <Treemap data={data} height={400} width={600} />
    </div>
  );
}

export default App;
