import {Route, Routes, BrowserRouter} from 'react-router-dom'

import Main from './Component/Main';
import NeneRenewalSite from './Component/NeneRenewalSite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>} ></Route>
          <Route path='/NeneRenewalSite' element={<NeneRenewalSite></NeneRenewalSite>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
