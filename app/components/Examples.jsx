const React = require("react");
const {Link} = require("react-router");

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
        <div>
            <h1 className="text-center">Examples</h1>  
            <p>Here are a few locations to try out.</p>
            <ol>
                <li>
                    <Link to="/?location=Warszawa">Warsaw, Poland</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio de Janeiro, Brazil</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;  