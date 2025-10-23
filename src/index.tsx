import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';

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
// TODO: Check Memoized Components Verbiage.
// TODO: Check Memoized Components Context Verbiage.
// TODO: Check Memoized Components Redux Verbiage.
// TODO: Check Context vs Redux Verbiage.
// TODO: Check useEffect vs useMemo Verbiage.
// TODO: Check Infinite Render Loops Verbiage.
// TODO: Check Expandable List Verbiage.
// TODO: Check Expandable List Redux Verbiage.
// TODO: Identify places that still need generated code



const root = ReactDOM.createRoot(document.getElementById('root')!);
enableMocking();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
