import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import RouterPanel from './RouterPanel';

function App() {
    return ( <
        div className = "App" > { < RouterPanel / > } { /* <NavBar /> */ } { /* <h2 > Hello </h2> */ } <
        /div>
    );
}

export default App;