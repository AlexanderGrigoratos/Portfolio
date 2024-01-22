import logo from './logo.svg';
import './App.css';
import { Navigation } from './Components/Navigation';
import { HomeComponent } from './Components/HomeComponent';
import { SkillsComponent } from './Components/SkillsComponent';
import { AboutComponent } from './Components/AboutComponent';
import { ContacComponent } from './Components/ContacComponent';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <Navigation/>
      <HomeComponent/>
      <SkillsComponent/>
      <AboutComponent/>
      <ContacComponent/>
      <Footer/>
    </div>
  );
}

export default App;
