var React = require("react");
var Nav   = require("Nav");

// var Main = React.createClass({
//     render () {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {/* this.props.children is provided by react-router. 
//                     It means that here I want to render the child components of
//                     the route (check app.jsx to see example)
//                 */}
//                 {this.props.children}
//             </div>
//         );
//     } 
// });

/* Stateless functional component */
/*
 * If you have a component that only renterds something to the screen,
 * without doing anything else, and without maintaining any state
 * there is a shorter syntax you can use.
*/

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main</h2>
            {/* this.props.children is provided by react-router. 
                It means that here I want to render the child components of
                the route (check app.jsx to see example)
            */}
            {props.children}
        </div>
    );
};


module.exports = Main;