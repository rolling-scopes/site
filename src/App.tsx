import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { RSNumbers } from './components/RSNumbers/RSNumbers';
import { RSPlaces } from './components/RSPlaces/RSPlaces';
import { RSPictures } from './components/RSPictures/RSPictures';
import { RSSchool } from './components/RSSchool/RSSchool';

import './App.scss';
import { RSSchoolPrinciples } from './components/RSSchoolPrinciples/RSSchoolPrinciples';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <RSNumbers />
      <RSPlaces />
      <RSPictures />
      <RSSchool />
      <RSSchoolPrinciples />
    </div>
  );
}

export default App;
