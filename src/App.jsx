import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.png';
import Logo from './components/common/Logo';
import Navbar from './components/common/Navbar';

import NotFound from './components/pages/NotFound';

import './i18n';
import Jobs from './components/pages/Jobs';
import About from './components/pages/About';
import HowTo from './components/pages/HowTo';
import Contacts from './components/pages/Contacts';
import './App.css'
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import ConfirmationCode from './components/pages/Login/ConfirmationCode';
import Adverts from './components/pages/Adverts';

const App = () => {
    return (
        <Router>

            <header className="row">
                <div className="col-4">
                    <Logo logo={logo} />
                </div>
                <div className="col-8">
                    <Navbar />
                </div>
            </header>

            <Routes>
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/how-to' element={<HowTo />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/login' element={<Login />} />
                <Route path='/reg' element={<Registration />} />
                <Route path='/confirm' element={<ConfirmationCode />} />
                <Route path='/' element={<Adverts />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App;
