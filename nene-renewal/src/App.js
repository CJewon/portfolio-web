import Header from './Header';
import Profile from './Profile';
import OverView from './OverView';
import Design from './Design';
import Explain from './Explain';
import End from './End';


import './App.css';
import './Reset.css'


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Profile></Profile>
      <OverView></OverView>
      <Design></Design>
      <Explain></Explain>
      <End></End>
      <section>
        <h3>마무리하며...</h3>
        <p>리뉴얼 작업을 하면서 코드작업하는 시간보다 공부하는 시간이 좀 더 길었던 것 같습니다. 그 만큼 작업하면서 전보다 발전했다라는것을 느낄수있어서 좋았습니다. 앞으로도 열심히 발전하는 개발자가 되겠습니다. </p>
      </section>
    </div>
  );
}

export default App;
