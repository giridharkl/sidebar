import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import MapLeaflet from './components/map';

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
      <div>
        <SideNav onToggle={this.onToggle}>
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
        <MapLeaflet expanded={this.state.expanded}></MapLeaflet>
      </div>
    );
  }
}

export default App;
