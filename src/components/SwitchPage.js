import React from 'react';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./guideInfo/index";
import SignupEvent from "./signup_event/SignupEvent";
import PaymentSuccessful from "./payment/PaymentSuccessful";
import PaymentPage from "./payment/PaymentPage";
import {fullInfo, guidePath, homePage, paymentPage, paymentSuccessful, signUpEvent} from "../utils/constants";
import StartPage from "./StartPage";

const SwitchPage = () => {
    return (
            <Switch>
                <Route
                    path={`/${paymentSuccessful}/:idExcursion`}
                    render={routerProps => <PaymentSuccessful {...routerProps}/>}
                    exact
                />
                <Route
                    path={`/${paymentPage}/:idExcursion`}
                    render={({match}) => <PaymentPage match={match}/>}
                    exact/>
                <Route
                    path={`/${signUpEvent}/:idExcursion`}
                    render={routerProps => <SignupEvent {...routerProps}/>}
                    exact
                />
                <Route
                    path={`/${fullInfo}/:idExcursion`}
                    render={routerProps => <FullInfoExcursion {...routerProps}/>}
                    exact
                />
                <Route
                    path={`/${guidePath}/:idGuide`}
                    render={({match}) => <GuideInfo match={match}/>}
                    exact
                />
                <Route
                    path={[`/`, `/${homePage}`]}
                    render={routerProps => <StartPage {...routerProps}/>}
                    exact
                />
            </Switch>
    )
}

export default SwitchPage