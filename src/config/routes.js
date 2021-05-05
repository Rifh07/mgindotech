import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar'
import { home, detail, favorite } from '../pages';

function routes() {
    return (
    <Router>
        <Switch>
            <div className="mt-4">
                <Navbar />
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <Route path="/" exact component={home} />
                        <Route path="/:id/details" exact component={detail} />
                        <Route path="/favorite" exact component={favorite} />
                    </div>
                </div>
            </div>
        </Switch>
    </Router>
    )
}

export default routes
