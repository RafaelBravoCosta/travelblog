import "../src/styles/styles.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../src/Page/Home";
import About from "./Page/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactUs/ContactUs";
import Help from "../src/Page/Help"; 


function App() {
  return (
    <div className="App">

    <div>
      <Router>
        
        <div>
        
        
        
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path='/Help' component={Help} />
          </Switch>
          <Footer/>
        
        </div>

      </Router>
    </div>
    </div>
  );
}

export default App;
