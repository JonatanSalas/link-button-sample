import React from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import { Link } from 'react-router';

const LinkButton = ({ flat, children, style, className, href }) => {
    const containerElement = <Link to={href}/>;
    const buttonProps = {
        containerElement,
        className,
        style
    };

    if (flat) {
        return (
            <FlatButton {...buttonProps}>
                {children}
            </FlatButton>
        )
    } else {
        return (
            <RaisedButton {...buttonProps}>
                {children}
            </RaisedButton>
        )
    }
}

class LinkButtonContainer extends React.Component {
    render() {
        return (
            <LinkButton href="/properties" flat>
                Touch me!
            </LinkButton>
        );
    }
}

export default LinkButtonContainer;