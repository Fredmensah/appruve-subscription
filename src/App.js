import React from "react";
import "./App.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import paths from "./utilities/paths";
import Home from "./screens/home/home";
import Checkout from "./screens/checkout/checkout";
import history from "./utilities/history";

function NoMatch() {
    let location = useLocation();

    return (
        <div
            status="404"
            title="404"
            subTitle={`Sorry, the page ${location.pathname} does not exist.`}
            extra={
                <button type="primary" onClick={() => (window.location.href = "/")}>
                    Back Home
                </button>
            }
        />
    );
}

function setPageBackground(backgroundColor = "#fff") {
    document.body.style.backgroundColor = backgroundColor;
}

class App extends React.Component {
    setTitle(title) {
        document.title = title;
    }

    render() {
        const appName = "Appruve Job Application";

        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path={paths.home}
                            render={() => {
                                setPageBackground();
                                this.setTitle(`Home | ${appName}`);
                                return <Home history={history}/>;
                            }}
                        />

                        <Route
                            exact
                            path={paths.payment}
                            render={() => {
                                setPageBackground();
                                this.setTitle(`Checkout | ${appName}`);
                                return <Checkout history={history} />;
                            }}
                        />

                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
