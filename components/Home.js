import React from 'react';
import Helmet from 'react-helmet';

let Home = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="Home"
                    meta={[
                        {property: 'og:title', content: 'Home'},
                    ]} />
                <h3>Home Page</h3>
            </div>
        );
    }
});

export default Home;
