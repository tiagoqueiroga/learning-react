import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainMenu from './Template/MainMenu';
import Dashboard from './Dashboard/Dashboard';
import Albums from './Albums/Albums';
import AlbumDetails from './Albums/AlbumDetails';
import Feeds from './Feeds/Feeds';
import FeedDetails from './Feeds/FeedDetails';
import Todo from './Todo/Todo';

import './Custom.css';

// 404 - Not found component
const NotFound = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            {<MainMenu />}
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/feeds" component={props => <Feeds {...props} />} />
              <Route
                path="/feed/:url"
                component={props => {
                  return <FeedDetails {...props} />;
                }}
              />
              <Route exact path="/albums" component={props => <Albums {...props} />} />
              <Route
                path="/album/:id"
                component={props => {
                  return <AlbumDetails {...props} />;
                }}
              />
              <Route exact path="/todo" component={props => <Todo {...props} />} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
