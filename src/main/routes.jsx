import React from 'react'
import {BrowserRouter ,Redirect, Route, Switch} from 'react-router-dom'

import Pageview from '../page/pageview'
import Pageheader from '../page/pageheader'
import Todopage from '../pagehome/todopage'
import Pagehistory from '../page/pagehistory'

import Carbono from '../page/linkpage/Carbono'
import Litio from '../page/linkpage/Litio'
import Cadmio from '../page/linkpage/Cadmio'
import Hidrogenio from '../page/linkpage/Hidrogenio'
import Oxigenio from '../page/linkpage/Oxigenio'


export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Todopage}></Route>
        <Route  path='/pageview' component={Pageview}></Route>
          <Route   path='/pageheader' component={Pageheader}></Route>
          <Route   path='/pagehistory' component={Pagehistory}></Route>

          <Route   path='/Carbono' component={Carbono}></Route>
           <Route   path='/Litio' component={Litio}></Route>
          <Route   path='/Cadmio' component={Cadmio}></Route>
          <Route   path='/Hidrogenio' component={Hidrogenio}></Route>
          <Route   path='/Oxigenio' component={Oxigenio}></Route>
        <Redirect from='*' to='/'/>
    </Switch>
  </BrowserRouter>
)
