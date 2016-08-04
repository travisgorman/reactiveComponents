import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
// import 5 card components
import Modal1 from './components/Modal1';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';


// Nav Component — Link to components
const App = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="card">
          <Link to="Modal1">Jackie</Link>
          <Link to="/Modal2">Marlon</Link>
          <Link to="/Modal3">Jermaine</Link>
          <Link to="/Modal4">Tito</Link>
          <Link to="/Modal5">Michael</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
});
// Router — on URL, call components
const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="Modal1*" component={Modal1}/>
      <Route path="Modal2" component={Modal2}/>
      <Route path="Modal3" component={Modal3}/>
      <Route path="Modal4" component={Modal4}/>
      <Route path="Modal5" component={Modal5}/>
    </Route>
  </Router>
)

ReactDOM.render( router, document.getElementById( 'container' ));
