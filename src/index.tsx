import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import './index.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

// DONE: Check all main page titles and descriptions. - 
// DONE: Check Memoized Components Verbiage.
// TODO: Check Memoized Components Context Verbiage.
// TODO: Check Memoized Components Redux Verbiage.
// TODO: Check Context vs Redux Verbiage.
// TODO: Check useEffect vs useMemo Verbiage.
// TODO: Check Infinite Render Loops Verbiage.
// TODO: Check Expandable List Verbiage.
// TODO: Check Expandable List Redux Verbiage.
// TODO: Generate Code for Context vs Redux
// TODO: Generate Code for useEffect vs useMemo
// DONE: Generate Code for Infinite loop
// DONE: Generate Code for Expandable List
// DONE: Generate Code for Expandable List Redux


const root = ReactDOM.createRoot(document.getElementById('root')!);
enableMocking();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
