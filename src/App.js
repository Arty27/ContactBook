import './styles/App.scss';
import Navbar from './components/navbar';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
      </div>
    </Provider>
  );
}

export default App;
