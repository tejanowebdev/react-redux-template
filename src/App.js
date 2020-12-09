import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemComponent from './components/ItemComponent';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store/store';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer/>
      {
        // <ItemComponent cake/>
        // <ItemComponent/>
        // <CakeContainer/>
        // <HooksCakeContainer/>
        // <IceCreamContainer/>
        // <NewCakeContainer/>
      }
      </div>
    </Provider>
  );
}

export default App;
