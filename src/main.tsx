import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
