const React = require("react");

// const Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>    
//         );
//     }
// });

/* Stateless functional component */
/*
 * If you have a component that only renterds something to the screen,
 * without doing anything else, and without maintaining any state
 * there is a shorter syntax you can use.
*/
const Examples = (props) => {
    return (
        <h3>Examples</h3>    
    );
};

module.exports = Examples;