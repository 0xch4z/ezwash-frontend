import React, { Component, PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';
import Link from 'next/link';

class NavLink extends Component {
  static propTypes() {
    return {
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    }
  }

  render() {
    const { href, name, index} = this.props;
    return (
      <NavItem eventKey={index}>
        <Link href={href}>
          <div>
            {name}
          </div>
        </Link>
      </NavItem>
    );
  }
}

export default NavLink;