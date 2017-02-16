import React, { PropTypes } from 'react';
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

LinkButton.propTypes = {
    flat: PropTypes.bool.isRequired,
    href: PropTypes.bool.isRequired,
    children: PropTypes.array.isRequired,
    style: PropTypes.string,
    className: PropTypes.string
}

export default LinkButton;