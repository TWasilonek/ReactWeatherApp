var React = require("react");
var {Link, IndexLink} = require('react-router');   // equals to Link = require('react-router').link; indexLink = require('react-router').indexLink

var Nav = (props) => {
    return (
        <div>
            <h2>Nav Components</h2>
            {/* IndexLink is a component of react-router.
                It should be used to the IndexRoute if it was set (see app.js -- IndexRoute is 'Weather')
            */}
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            
            {/* Link is a component of react-router.
                It allows for custom behavior, eg:
                 - activeClassName : it will add the specified class once the 
                                     specified route is in active state
                 - activeStyle : it will add the specified style once the 
                                  specified route is in active state
            */}
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
    );   
};

module.exports = Nav;