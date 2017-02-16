import React from 'react';
import LinkButton from './LinkButton';

class LinkButtonContainer extends React.Component {
    render() {
        return (
            <LinkButton href="/properties" flat primary>
                Touch me!
            </LinkButton>
        );
    }
}

export default LinkButtonContainer;