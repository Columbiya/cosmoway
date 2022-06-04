import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Wallet from './Components/Wallet/Wallet';
import ReferalTree from './Components/ReferalTree/ReferalTree';
import Dashboard from './Components/Dashboard/Dashboard';
import { REFERAL_TREE_PATH, WALLET_PATH, DASHBOARD_PATH } from './consts';

const App = (props) => {

  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path={WALLET_PATH} element={<Wallet />} />
        <Route path={REFERAL_TREE_PATH} element={<ReferalTree />} />
        <Route path={DASHBOARD_PATH} element={<Dashboard />} />
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
