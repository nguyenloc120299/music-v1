
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuMysic from './component/main/AuMyMusic';
import ChauAMusic from './component/main/ChauAMusic';
import KhongLoiMusic from './component/main/KhongLoiMusic';
import VietNamMusic from './component/main/VietNamMusic';
import NhacHQ from './component/music/NhacHQ';
import NhacTre from './component/music/NhacTre';
import NhacTruTinh from './component/music/NhacTruTinh';
import PopAM from './component/music/PopAM';
import RapViet from './component/music/RapViet';
import Footer from './component/page/footer/Footer';
import Home from './component/page/home/Home';
import Topbar from './component/topbar/Header'
function App() {
 
    <img src='loading.gif' alt=''/>
  return (
    <Router>
      <div className="App">
        <Topbar />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/nhactre' component={NhacTre}/>
        <Route path='/nhactrutinh' component={NhacTruTinh}/>
        <Route path='/nhachanquoc' component={NhacHQ}/>
        <Route path='/popAumy' component={PopAM}/>
        <Route path='/rapviet' component={RapViet}/>
        <Route path='/nhacvietnam' component={VietNamMusic}/>
        <Route path='/nhacchaua' component={ChauAMusic}/>
        <Route path='/nhacaumy' component={AuMysic}/>
        <Route path='/nhackhongloi' component={KhongLoiMusic} />
      </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
