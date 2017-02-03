import React from 'react';
import Helmet from 'react-helmet';

let Dogs = React.createClass({
    render: function() {
        return (
            <div>
                <Helmet
                    title="Dogs"
                    meta={[
                        {property: 'og:title', content: 'Dogs'},
                    ]} />
                <h1>Dogs</h1>
            </div>
        );
    }
});

export default Dogs;
