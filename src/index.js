import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './index.css';
import App from './App';
import Alladds from './componemts/Alladds';
import CatSingle from './componemts/CatSingle';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contactus from './componemts/Contactus';
import Faqs from './componemts/Faqs';
import Feedback from './componemts/Feedback';
import Help from './componemts/Help';
import Howitwork from './componemts/Howitwork';
import Mobileapp from './componemts/Mobileapp';
import ApplyPG from './componemts/ApplyPG';
import Privacy from './componemts/Privacy';
import Locations from './componemts/Locations';
import Login from './componemts/Login';
import Signup from './componemts/Signup';
import Singleresult from './componemts/Singleresult';
import Sitemap from './componemts/Sitemap';
import Terms from './componemts/Terms';
import jQuery from 'jquery';
import Complaints from './componemts/Complaints';
import Payrent from './componemts/Payrent';
window.jQuery = jQuery;

ReactDOM.render(
                <Router>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route path="/login" component={Login} />
                        <Route path='/alladds' component={Alladds} />
                        <Route path='/catsingle' component={CatSingle} />
                        <Route path="/contactus" component={Contactus} />
                        <Route path="/faqs" component={Faqs} />
                        <Route path="/feedback" component={Feedback} />
                        <Route path="/help" component={Help} />
                        <Route path="/howitwork" component={Howitwork} />
                        <Route path="/mobileapp" component={Mobileapp} />
                        <Route path="/applypg" component={ApplyPG} />
                        <Route path="/privacy" component={Privacy} />
                        <Route path="/locations" component={Locations} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/singleresult" component={Singleresult} />
                        <Route path="/sitemap" component={Sitemap} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/complaints" component={Complaints} />
                        <Route path="/payrent" component={Payrent} />
                    </Switch>
                </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
