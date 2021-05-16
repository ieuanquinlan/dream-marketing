import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import VehicleLayout from './pages/VehicleLayout'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Header/>
    <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/what-we-do' component={WhatWeDo} />
            <Route exact path='/vehicle-layout' component={VehicleLayout} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer/>
    </Router>
  );
}

export default App
