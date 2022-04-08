// import Users1 from '../page/Users1';
// import Users2 from '../page/Users2';
import {Routes, Route} from 'react-router-dom';
import Users from '../page/Users';
import Form from '../page/Form';
import Counter from '../page/Counter';
import Mamos from '../page/Mamos';
import UsersImages from '../page/UsersImages';

const PageRoute = () => {
    return (
        <Routes>
          <Route path="/users-images" element={<UsersImages />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/mamos" element={<Mamos/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/:page" element={<Users />} />
          <Route path="/" element={<Users />} />

          {/* 
          <Route path="/1" element={<Users1 />} />
          <Route path="/2" element={<Users2 />} />
          */}
        </Routes>
    );
};

export default PageRoute;