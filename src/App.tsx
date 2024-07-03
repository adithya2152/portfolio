
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import { Home } from './pages/Home';
  import { Skill } from './pages/Skills';
  import { Projects } from './pages/Projects';
  import { Resume } from './pages/Resume';
  import { Details } from './pages/MoreInfo';
  import { Contact } from './pages/Contact';
  import { Nav } from './components/Header';


  function App() {
    
    return (
      <Router>
        <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" Component={Skill} />
          <Route path="/resume" Component={Resume} />
          <Route path="/contact" Component={Contact} />
          <Route path="/projectdetail/:id/:type" Component={Details}/>
        </Routes>
        </div>
      </Router>
    );
  }

  export default App;
