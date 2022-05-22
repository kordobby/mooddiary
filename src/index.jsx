import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import App from './App';
import GlobalStyle from './GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <GlobalStyle />
  <App />
  </HashRouter>
);