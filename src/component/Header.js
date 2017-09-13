import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
      <div className="header clearfix">
        <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect} className="pull-right">
          <NavItem eventKey={1} href="/home">Home</NavItem>
          <NavItem eventKey={2} title="Item">Experience</NavItem>
          <NavItem eventKey={3}>Education</NavItem>
          <NavItem eventKey={4}>Skills</NavItem>
          <NavItem eventKey={5}>Interest</NavItem>
          <NavItem eventKey={6}>Contact</NavItem>
        </Nav>
        <h3 className="text-muted">Arnaud Baali</h3>
      </div>
    );
  }
}
