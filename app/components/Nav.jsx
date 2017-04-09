var React = require("react");
var {Link, IndexLink} = require('react-router');   // equals to Link = require('react-router').link; indexLink = require('react-router').indexLink

var Nav = React.createClass({
    /* ====== REACT METHODS ====== */
    
    /* ====== USER METHODS ====== */
    onSearch: function (e) {
        e.preventDefault();
        alert('Not yet wired up');
    },
    
    /* ====== THE RENDER METHOD ====== */
    render: function (props)  {
        return (
            <div className="top-bar">
                {/* In React you should use 'className' instead of 'class' */ }
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            {/* IndexLink is a component of react-router.
                                It should be used to the IndexRoute if it was set (see app.js -- IndexRoute is 'Weather')
                            */}
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            {/* Link is a component of react-router.
                                It allows for custom behavior, eg:
                                 - activeClassName : it will add the specified class once the 
                                                     specified route is in active state
                                 - activeStyle : it will add the specified style once the 
                                                  specified route is in active state
                            */}
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );   
    }
});


module.exports = Nav;
