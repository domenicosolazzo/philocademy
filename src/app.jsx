'use strict';

var React = require('react'),
    Router = require('react-router'),
    { Route, RouteHandler, Link } = Router;

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>barless.co</h1>
        <nav className="site-main-nav">
          <Link to="home">Home</Link>
          <Link to="github">Github</Link>
          <Link to="clients">Clients</Link>
          <Link to="skills">Skills</Link>
          <Link to="about">About</Link>
          <Link to="experience">Experience</Link>
        </nav>
        <RouteHandler />
      </div>
    );
  }
});