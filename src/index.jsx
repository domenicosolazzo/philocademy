/** @jsx React.DOM */
var React         = require('react');
var HomeComponent = require('./components/home/home.jsx');

React.render(
  <HomeComponent/>,
  document.getElementById("react-container")
);