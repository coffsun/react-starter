import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-1">
            <Link to="/" className="brand-logo center">{this.props.brand}</Link>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  brand: PropTypes.string
};

Header.defaultProps = {
  brand: 'Coffsun'
};

export default withRouter(Header);
