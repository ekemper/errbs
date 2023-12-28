import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Errbs</h1>
        <Search />
      </header>
    </div>
  );
}

export default App;
