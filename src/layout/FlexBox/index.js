import React from 'react';
import PropTypes from 'prop-types';

import {
    ALIGN_CONTENT,
    ALIGN_ITEMS,
    FLEX_DIRECTION,
    FLEX_WRAP,
    JUSTIFY_CONTENT,
} from './constants';

const FlexBox = ({
    alignItems,
    alignContent,
    flexDirection,
    justifyContent,
    flexWrap,
    style,
    children,
}) => {
    const divStyle = {
        alignItems,
        alignContent,
        display: 'flex',
        flexDirection,
        justifyContent,
        flexWrap,
        ...style,
    };

    return <div style={divStyle}>{children}</div>;
};

FlexBox.propTypes = {
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    children: PropTypes.node.isRequired,
    flexDirection: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    style: PropTypes.object,
};

export {
    FlexBox,
    ALIGN_CONTENT,
    ALIGN_ITEMS,
    FLEX_DIRECTION,
    FLEX_WRAP,
    JUSTIFY_CONTENT,
};
