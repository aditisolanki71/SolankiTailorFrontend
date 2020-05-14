import React from 'react';
import Header from './containers/Homepage/Header/index'
import SidebarPage from './containers/Homepage/Sidebar/index'
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends React.Component {
  render() {
  return (
    <div>
        <Header />
        <SidebarPage />
      </div>
   )};
}

export default App;
