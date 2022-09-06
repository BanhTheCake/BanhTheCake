import './App.scss';

import { Navbars } from './components'
import { Header, Skills, Project, KeepInTouch, Footer } from './layout'

function App() {
  return (
    <div className='app'>
      <Navbars />
      <Header />
      <Skills />
      <Project />
      <KeepInTouch />
      <Footer />
    </div>    
  );
}

export default App;
