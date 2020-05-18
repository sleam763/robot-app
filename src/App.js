import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Signout from './Signout'
import Logo from './Logo'
import Rank from './Rank'
import Input from './Input'
import Signin from './Signin'
import CardList from './robot/CardList'
import SearchBox from './robot/SearchBox'
import Scroll from './robot/Scroll'
import Signup from './Signup'
import Indecision from './robot/Indecision'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      robots: [],
      searchfield: '',
      onSignin: 'signin'
    }
  }

  onSearch=(event)=>{
    this.setState({searchfield: event.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({robots: users})})
  }

  render(){
    const filteredRobot=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div>
        <Router>
          <div >
            <nav>
              <ul id='ul'>
                <li><Link to='/'>NaN</Link></li>
                {/* <li><Link to='/signup'>signup</Link></li> */}
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/decide'>Decide</Link></li>
                <li><Link to='/user'>User</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path='/' exact={true}><Signin/></Route>
              <Route path='/signup'><Signup/></Route>
              <Route path='/home'><SearchBox onSearch={this.onSearch}/> <br/> <Scroll><CardList robots={filteredRobot}/> </Scroll></Route>
              <Route path='/decide'><Indecision/></Route>
              <Route path='/user'><Signout/> <Logo/> <br/> <Rank/> <br/> <Input/></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
};

export default App;
