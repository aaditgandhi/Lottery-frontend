import './App.css';
import { MoralisProvider } from 'react-moralis';
import { Header } from './Components/Header';
import { LotteryEntrance } from './Components/LotteryEntrance';
import { NotificationProvider } from '@web3uikit/core';

function App() {
  return(
    <MoralisProvider initializeOnMount = {false}>
      <NotificationProvider>
        <Header />
        <LotteryEntrance />
      </NotificationProvider>
    </MoralisProvider>  
  )
}

export default App;
