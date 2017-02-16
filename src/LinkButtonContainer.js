import React from 'react';
import LinkButton from './LinkButton';

class LinkButtonContainer extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <LinkButton href="/properties" flat primary>
                        Touch me!
                    </LinkButton>
                </div>
                <div>
                    <LinkButton href="/properties" flat={false} primary>
                        Touch me!
                    </LinkButton>
                </div>
            </div>
        );
    }
}

export default LinkButtonContainer;