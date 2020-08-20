import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Catalogue from './Catalogue';
import SearchResults from './SearchResults';
import MealsDetails from '../containers/MealsDetails';

class Wrapper extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Route exact path="/" component={Catalogue} />
          <Route exact path="/search" component={SearchResults} />
          <Route path="/meal/:id" component={MealsDetails} />
        </Router>
      </>
    );
  }
}

export default Wrapper;
