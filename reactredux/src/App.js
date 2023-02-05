import './App.css';

//We need App to use Redux store so we need to provide it to the app
import { Provider } from 'react-redux';
import store from './redux/store';

import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainerWithNum from './components/CakeContainerWithNum'
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />

        <h1>Using Hooks instead of Connect()</h1>
        <HooksCakeContainer />

        <h1>IceCream Shop = Multiple Reducers</h1>
        <IceCreamContainer/>

        <h1>Buy cakes with specific num</h1>
        <CakeContainerWithNum/>

        <h1>Item Container we modified mapStateToProps to use passed prop</h1>
        <ItemContainer />
        <ItemContainer cake/>

        <h1>Async Actions :D</h1>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
