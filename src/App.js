import React from 'react';
import './App.css';

import { GetRequest } from './GetRequest';

const App = () => {
  return (
    <div class="page_container">
      <div id="content-wrap">
      <h1 class="ms_header">movie search</h1>
      <GetRequest />
      </div>
      <div class="footer"><footer>© Cami Godfrey 2021 | All Rights Reserved</footer></div>
    </div>
  );
}

export default App
