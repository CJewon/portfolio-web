import {Route, Routes, BrowserRouter} from 'react-router-dom'

import Main from './Component/Main';
import NeneRenewalSite from './Component/NeneRenewalSite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio-web' element={<Main></Main>} ></Route>
          <Route path='/portfolio-web/NeneRenewalSite' element={<NeneRenewalSite></NeneRenewalSite>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
