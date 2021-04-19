import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Login from './pages/Login';
import Schedules from './pages/Schedules';
import NewSchedule from './pages/NewSchedule';
import Schedule from './pages/Schedule';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/schedules' component={Schedules}/>
            <Route path='/schedule/new' component={NewSchedule}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
        </BrowserRouter>
    );
}