import React from 'react';
import Header from './containers/Dashboard/Header'
import SidebarPage from './containers/Dashboard/Sidebar'
import Banner from './containers/Dashboard/Banner'
import Topdesign from './containers/Dashboard/Topdesign'
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
        <Banner />
        <Topdesign />
      </div>
   )};
}

export default App;
