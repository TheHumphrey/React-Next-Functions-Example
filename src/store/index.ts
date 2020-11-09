import { createStore, Store } from 'redux';

import rootReducer from './ducks/rootReducer';

import { ConfigTable } from '@app/interfaces/TableFilter';

export interface ApplicationState {
  configTable: ConfigTable;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
