import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import Missions from './component/Missions/Missions';
import Profile from './component/Profile/Profile';
import Rockets from './component/Rockets/Rockets';

function App() {
  return (
   <Layout>
      <Routes>
        <Route  path="/profile" element={<Profile />}/>
        <Route  path="/missions" element={<Missions />}/>
        <Route  path="/*" element={<Rockets />}/>
      </Routes>
   </Layout>
  );
}

export default App;
