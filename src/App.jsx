import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomeNavbar';
import Ranjit from './profiles/Ranjit';
import Anna from './profiles/Anna';
import PK from './profiles/PK';
import Robin from './profiles/Robin';
import Robert from './profiles/Robert';
import Sarah from './profiles/Sarah';
import Martha from './profiles/Martha';
import Nicole from './profiles/Nicole';
import Antoin from './profiles/Antoin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path='/news' component={News} />
          <Route path='/ranjit' component={Ranjit} />
          <Route path='/anna' component={Anna} />
          <Route path='/pk' component={PK} />
          <Route path='/antoin' component={Antoin} />
          <Route path='/nicole' component={Nicole} />
          <Route path='/martha' component={Martha} />
          <Route path='/sarah' component={Sarah} />
          <Route path='/robert' component={Robert} />
          <Route path='/robin' component={Robin} />
        </div>
      </Router>
    )
  }
}

export default App;
