import mainStyle from './styles/mainStyles.module.css';
import {Navbar} from './components/navbar/Navbar';
import {Footer} from "./components/footer/Footer";
import {HomePage} from './pages/homePage/HomePage';
import {ContactsPage} from "./pages/contactsPage/ContactsPage";
import {ProjectPage} from "./pages/projectPage/projectPage";
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ProjectsPage} from "./pages/projectsPage/ProjectsPage";
import {ScrollToTop} from './utils/scrollToTop';


function App() {
  return (
    <div className={mainStyle.App}>
        <HashRouter>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/projectsPage' element={<ProjectsPage/>} />
                <Route path='/projectPage/:id' element={<ProjectPage/>} />
                <Route path='/contactsPage' element={<ContactsPage/>} />
            </Routes>

            <Footer/>

        </HashRouter>


    </div>
  );
}

export default App;
