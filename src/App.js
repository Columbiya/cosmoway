import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Wallet from './Components/Wallet/Wallet';
import ReferalTree from './Components/ReferalTree/ReferalTree';
import Dashboard from './Components/Dashboard/Dashboard';
import { REFERAL_TREE_PATH, WALLET_PATH, DASHBOARD_PATH, BUY_COSMOLAND_PATH, ABOUT_COSMOLANDS_PATH } from './consts';
import metamaskStore from './store/metamaskStore';
import BuyCosmoland from './Components/BuyCosmoland/BuyCosmoland';
import { YMInitializer } from 'react-yandex-metrika';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Cosmolands from './Components/Cosmolands/Cosmolands';
import { observer } from 'mobx-react-lite';
import WithRedirect from './helpers/WithRedirect';

const App = (props) => {

  useEffect(() => {
    async function init() {
      await metamaskStore.init()
      await metamaskStore.checkMetamask()
    }

    init()
  }, [])

  useEffect(() => {
    AOS.init({})
    AOS.refresh()
  }, [])


  return (
    <div className='overflow-hidden'>
      <YMInitializer accounts={[89156244]} options={{webvisor: true, accurateTrackBounce: true, trackLinks: true, clickmap: true}} />
      <Header />
      <Routes>
        <Route path={WALLET_PATH} element={<WithRedirect><Wallet /></WithRedirect>} />
        <Route path={REFERAL_TREE_PATH} element={<WithRedirect><ReferalTree /></WithRedirect>} />
        <Route path={DASHBOARD_PATH} element={<WithRedirect><Dashboard /></WithRedirect>} />
        <Route path={BUY_COSMOLAND_PATH} element={<WithRedirect><BuyCosmoland /></WithRedirect>} />
        <Route path={ABOUT_COSMOLANDS_PATH} element={<WithRedirect><Cosmolands /></WithRedirect>} />
        <Route index element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
