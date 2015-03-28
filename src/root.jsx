var React = require('react'),
    Router = require('react-router'),
    // Views
    Home = require('components/home/home'),
    Github = require('components/github/github'),
    Clients = require('components/clients/clients'),
    Skills = require('components/skills/skills'),
    About = require('components/about/about'),
    Experience = require('components/experience/experience'),
    // The App
    App = require('app'),
    { DefaultRoute, Route, RouteHandler, HistoryLocation, Link } = Router;

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="home" handler={Home} />
    <Route name="github" handler={Github} />
    <Route name="clients" handler={Clients} />
    <Route name="skills" handler={Skills} />
    <Route name="about" handler={About} />
    <Route name="experience" handler={Experience} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('react-container'));
});