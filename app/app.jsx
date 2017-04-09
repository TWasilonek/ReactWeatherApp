/* globals $ jQuery */
'use strict';
/* =========== Requires =========== */
var React = require('react');
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

// Load foundation using css-loader (css!) and style-loader (style!) ( both save-dev packages )
require("style!css!foundation-sites/dist/foundation.min.css");
// fire-up foundation
$(document).foundation();

/* =========== Action! =========== */

// render the app
ReactDOM.render(
    <Router history={ hashHistory }>
        {/* Use the component 'Main' for the root route */}
        <Route path="/" component={ Main }>
            
            {/* Route 'About' */}
            <Route path="about" component={ About }/>
            
            {/* Route 'Examples' */}
            <Route path="examples" component={ Examples }/>js
            
            {/* This is the default content of the "/" route */}
            <IndexRoute component={ Weather }/>
        </Route>
    </Router>,
    document.getElementById('app')
);