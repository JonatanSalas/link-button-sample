import React, { PropTypes } from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import { Link } from 'react-router';

const LinkButton = ({ flat, children, style, className, href, ...props }) => {
    const containerElement = <Link to={href}/>;
    const buttonProps = {
        containerElement,
        className,
        style
    };

    if (flat) {
        return (
            <FlatButton {...buttonProps} {...props}>
                {children}
            </FlatButton>
        )
    } else {
        return (
            <RaisedButton {...buttonProps} {...props}>
                {children}
            </RaisedButton>
        )
    }
}

LinkButton.propTypes = {
    flat: PropTypes.bool.isRequired,
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    style: PropTypes.string,
    className: PropTypes.string
}

export default LinkButton;