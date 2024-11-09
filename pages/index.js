// // src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'
ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
// import React, { Component } from 'react';
// class App extends Component {
//   render() {
//     return (
//       <p>Hello world!</p>
//     );
//   }
// }
// export default App;