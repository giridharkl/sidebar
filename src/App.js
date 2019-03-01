import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'; 
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import MapLeaflet from './components/map';
import Dashboard from './components/dashboard';

class App extends Component {

  state = {
    expanded: false
  };

  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  render() {
    const { expanded } = this.state;
    return (
      <BrowserRouter> 
      <div>
        <SideNav onToggle={this.onToggle} onSelect={(selected) => {
          const to = '/' + selected;
          
          
        }}>
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Home
            </NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                Charts
            </NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>
                  Line Chart
                </NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>
                  Bar Chart
                </NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div style={{
                marginLeft: this.state.expanded ? 240 : 64,
                padding: '0px',
                position: 'absolute',
                height: '100%',
                width: this.state.expanded?'81%':'95%'
          }}>
          <Switch>
            <Route path="/" component={Dashboard} expanded={this.state.expanded} exact/>
            <Route path="/home" component={MapLeaflet} expanded={this.state.expanded}/>
          </Switch>    
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
