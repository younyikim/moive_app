import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from './component/Navigation';
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />

      {/* Router안에 있는 Route 들은 모두 props를 갖는다. */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;