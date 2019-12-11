import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
import Postadd from './componemts/Postadd';
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
import Bookpg from './componemts/Bookpg';
import Categories from './componemts/Categories';
window.jQuery = jQuery;

$(document).ready(function() {

    //Vertical Tab
    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

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
                        <Route path="/postadd" component={Postadd} />
                        <Route path="/privacy" component={Privacy} />
                        <Route path="/locations" component={Locations} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/singleresult" component={Singleresult} />
                        <Route path="/sitemap" component={Sitemap} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/complaints" component={Complaints} />
                        <Route path="/payrent" component={Payrent} />
                        <Route path="/bookpg" component={Bookpg} />
                        <Route path="/categories" component={Categories} />
                    </Switch>
                </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
