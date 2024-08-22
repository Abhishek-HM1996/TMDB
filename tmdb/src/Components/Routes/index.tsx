import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SignIn from './SignIn';
import Home from '../Home';
import Detail from '../Detail';
import Header from '../Header';
import Favourite from '../Favourite';
import { DETAIL_PAGE, FAVOURITE, HOME, SIGN_IN } from '../../constants';


const AppRoutes = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path={HOME} element={<Home/>} />
          <Route path={FAVOURITE} element={<Favourite/>} />
          <Route path={DETAIL_PAGE} element={<Detail/>} />
          <Route path={SIGN_IN} element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;