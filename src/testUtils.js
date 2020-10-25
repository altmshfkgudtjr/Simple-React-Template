import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from 'store/index'

/*
	ui: <React.Component>
	initialStore: <MockStore> Fake Store
*/
export const renderWithRedux = (ui, initialStore=null) => {
  const utils = render(<BrowserRouter>
  					     {initialStore
  					     	? <Provider store={initialStore}>{ui}</Provider>
  					     	: <Provider store={store}>{ui}</Provider>}
  					   </BrowserRouter>);
  return {
    ...utils,
    store
  };
}