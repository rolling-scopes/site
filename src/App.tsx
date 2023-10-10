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
import { Speakers } from './components/Speakers/Speakers';
import { Merch } from './components/Merch/Merch';
import { Community } from './components/RSCommunity/RSCommunity';
import { Contribute } from './components/Contribute/Contribute';
import { Support } from './components/Support/Support';

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
      <Speakers />
      <Merch />
      <Community />
      <Contribute />
      <Support />
    </div>
  );
}

export default App;
