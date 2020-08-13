import React from 'react';
import Navbar from './Navbar';
import Catalogue from './Catalogue';

class Wrapper extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
        <Navbar />
        <Catalogue />
      </>
    );
  }
}

export default Wrapper;
