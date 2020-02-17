import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { useStores } from "./useStore";
import Posts from "./components/posts";
import CreatePost from "./components/create-post";
import Login from "./components/login";
import Home from "./components/home";
import Layout from "./layout";

const App = observer(() => {
  const { postStore, loginStore } = useStores()
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login" render={props => <Login store={loginStore} />}></Route>
          <ProtectedRoute path="/posts" render={props => <Posts store={postStore} />}></ProtectedRoute>
          <ProtectedRoute path="/create-post" render={props => <CreatePost store={postStore} />}></ProtectedRoute>
          <Route path="*" component={() => "404 Not found!"}></Route>
        </Switch>
      </Layout>
    </Router>
  );
});

export default App;
