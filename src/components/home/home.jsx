'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

module.exports = React.createClass({
  render() {
    return (
    	<section>
    		<Navbar brand='Philocademy' toggleNavKey={0}>
			    <Nav right eventKey={0}> {/* This is the eventKey referenced */}
			      <NavItem eventKey={1} href='#'>Stoics</NavItem>
			      <NavItem eventKey={2} href='#'>About</NavItem>
			    </Nav>
			  </Navbar>
      		<div className="main">Welcome to Philocademy</div>
      	</section>
    );
  }
});