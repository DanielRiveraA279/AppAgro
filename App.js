import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers/index';
import StackNavigator from './src/routes/StackNavigator';

const initialState = {
  "data_producer": [],
  "producer_activity": [],
  "family_relation": [],
  "producer_vehicle": [],
  "production": [],
  "production_agricultural": [],
  "production_agroindustrial": [],
};

const store = createStore(reducer, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
