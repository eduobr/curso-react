import React from 'react';
import ReactDOM from 'react-dom/client';
// import HelloWorldApp from './HelloWorldApp';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola, Soy Eduardo" subTitle={123} />
        {/* <CounterApp /> */}
    </React.StrictMode>
)