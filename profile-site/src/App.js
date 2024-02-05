import {Route, Routes, Link, BrowserRouter} from 'react-router-dom'

import Main from './Component/Main';
import NeneRenewalSite from './Component/NeneRenewalSite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio-web/profile-site' element={<Main></Main>} ></Route>
          <Route path='/portfolio-web/profile-site/NeneRenewalSite' element={<NeneRenewalSite></NeneRenewalSite>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
