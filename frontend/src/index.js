import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import init from './init';

const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const dom = await init();
  root.render(dom);

  reportWebVitals();
};

run();
