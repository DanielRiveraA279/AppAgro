import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './src/reducers/index';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import StackNavigator from './src/routes/StackNavigator';

//-0 const store = createStore(reducer, initialState);
const persistConfig = {
  key: 'root',
  storage,
};
//-1 creamos la persistencia y le asigmaos reducer
const persistedReducer = persistReducer(persistConfig, reducer);

//-2 creamo constante store y le asigmaos el reducer persist
const store = createStore(persistedReducer);
//-3 le asignamos el store al persistor
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
