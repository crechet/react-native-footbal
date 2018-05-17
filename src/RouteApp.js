import React from 'react';
import { Router, Scene, Tabs } from 'react-native-router-flux';

// Components.
import WhoAreYou from './components/WhoAreYou/WhoAreYou';
import Profile from './components/Profile/Profile';
import Countries from './components/Countries/Countries';

const RouteApp = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Tabs key='mainTabs'
              tabBarPosition='bottom'
              hideTabBar
              hideNavBar
              lazy={false}
              swipeEnabled={true}
              showLabel={false} >

          <Scene key='whoAreYou'
                 initial
                 component={WhoAreYou}
                 hideNavBar />
          <Scene key='countries'
                 component={Countries}
                 hideNavBar />
          <Scene key='profile'
                 component={Profile}
                 hideNavBar />
        </Tabs>
      </Scene>
    </Router>
  );
};

export default RouteApp;
