import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/Home';
import List from './component/List';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list" component={List}/>
        </Switch>
    );
};

export default Main;