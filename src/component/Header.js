import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {

  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

  render() {
    return (
      <div className="header clearfix">
        <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect} className="pull-right">
          <NavItem eventKey={1} href="/home"><FontAwesome name={'home'}/> Home</NavItem>
          <NavItem eventKey={2} title="Item"><FontAwesome name={'cog'}/> Experience</NavItem>
          <NavItem eventKey={3}><FontAwesome name={'graduation-cap'}/> Education</NavItem>
          <NavItem eventKey={4}><FontAwesome name={'sliders'}/> Skills</NavItem>
          <NavItem eventKey={5}><FontAwesome name={'futbol-o'}/> Interest</NavItem>
          <NavItem eventKey={6}><FontAwesome name={'envelope'}/> Contact</NavItem>
        </Nav>
        <h3 className="text-muted">Arnaud Baali</h3>
      </div>
    );
  }
}
