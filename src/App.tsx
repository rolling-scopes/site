import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { About } from './components/About/About';
import { RSNumbers } from './components/RSNumbers/RSNumbers';
import { RSPlaces } from './components/RSPlaces/RSPlaces';
import { RSPictures } from './components/RSPictures/RSPictures';
import { RSSchool } from './components/RSSchool/RSSchool';
import { RSSchoolPrinciples } from './components/RSSchoolPrinciples/RSSchoolPrinciples';
import { OurAlumni } from './components/OurAlumni/OurAlumni';
import { Events } from './components/Events/Events';

import './App.scss';

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
      <OurAlumni />
      <Events />
    </div>
  );
}

export default App;
