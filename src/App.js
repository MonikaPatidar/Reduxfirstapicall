import React from 'react'
import UsersContainer from './Component/UserContainer'
// import HookCakeShop from './Component/HookscakeShop'
// import IcecreamShop from './Component/IceCreamShop'
import Store from './Component/redux/CakeStore'
import {Provider} from 'react-redux';
import './App.css';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <HookCakeShop />
        <IcecreamShop /> */}
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
