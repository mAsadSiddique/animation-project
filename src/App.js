import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import RouterPanel from './RouterPanel';




function App() {
    return (
        <div className="App" >
            {< RouterPanel />}
        </div>
    );
}

export default App;