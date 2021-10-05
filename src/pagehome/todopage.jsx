import React  from 'react'
import Pageblock from '../pagehome/pageblock'
import Home from '../pagehome/home'
import Pageartcl from '../pagehome/pageartcl'
import Pageblock02 from '../pagehome/pageblock02'
import Menu from '../template/menu'


export default props => (
  <div>
  <Menu/>
  <Home/>
  <Pageblock/>
  <Pageartcl/>
  <Pageblock02/>
</div>
)
