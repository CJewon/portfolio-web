import logo from './logo.svg';
import Header from './Header';
import Profile from './Profile';
import DefaultPage from './DefaultPage';

import './App.css';


function App() {

  const menuList = ['OVERVIEW', 'DESIGH', 'EXPLAIN', 'END'];

  return (
    <div className="App">
      <Header></Header>
      <Profile></Profile>
      <DefaultPage tagName={menuList[0]}></DefaultPage>
      <DefaultPage tagName={menuList[1]}></DefaultPage>
      <DefaultPage tagName={menuList[2]}></DefaultPage>
      <DefaultPage tagName={menuList[3]}></DefaultPage>
      
    </div>
  );
}

export default App;
