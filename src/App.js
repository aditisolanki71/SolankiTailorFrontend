import React from 'react';
import Navbar from './containers/Navbar/index'
import Header from './containers/Header/index'
import Contentdata from './containers/Contentdata/index'
class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="navbar">
        <Navbar /> 
      </div>
      <div className= "contentdata">
        <Contentdata />
      </div>
    </div>
  )};
}

export default App;
