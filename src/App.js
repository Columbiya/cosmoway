import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { useState } from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Wallet from './Components/Wallet/Wallet';
import Connect_Metamask from './Components/Connect Metamask/Connect_metamask';
import ReferalTree from './Components/ReferalTree/ReferalTree';

const App = (props) => {
  const IMAGE = 'IMAGE'
  const WHITE = 'WHITE'

  let [background, changeBackground] = useState(IMAGE)
  return (
    <div className={background == IMAGE ? 'bg-image': 'white'}>
      <Header />
      <Routes>
        <Route path="wallet" element={<Wallet changeBackground={changeBackground} background={WHITE} />} />
        <Route path="connect" element={<Connect_Metamask changeBackground={changeBackground} background={IMAGE} />} />
        <Route path="referal-tree" element={<ReferalTree changeBackground={changeBackground} background={WHITE} />} />
        <Route path='/' element={<Main changeBackground={changeBackground} background={IMAGE} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
