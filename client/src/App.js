import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UploadScreen from './Screens/UploadScreen';
import WallScreen from './Screens/WallScreen';
import ImageScreen from './Screens/ImageScreen';

function App() {
  return (
    <div className="App">
      <Router>
      <header><Header/></header>
      <main>
      <Switch>
          <Route exact path='/' component={() => <Banner />} />
          <Route exact path='/wall' component={() => <WallScreen />} />
          <Route exact path='/upload' component={() => <UploadScreen />} />
          <Route exact path='/images/:id' component={() => <ImageScreen />} />

        </Switch>
      </main>
      <footer><Footer/></footer>
      </Router>
    </div>
  );
}

export default App;
