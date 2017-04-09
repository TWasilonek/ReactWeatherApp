const React = require("react");

// const About = React.createClass({
//     render: function () {
//         return ( 
//             <h3>About Component</h3>
//         );
//     }
// });


/* Stateless functional component */
/*
 * If you have a component that only renterds something to the screen,
 * without doing anything else, and without maintaining any state
 * there is a shorter syntax you can use.
*/
const About = (props) => {
    return ( 
        <h3>About</h3>
    );
}


module.exports = About;