import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Skill } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/skills" Component={Skill} />
        <Route path="/resume" Component={Resume} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
