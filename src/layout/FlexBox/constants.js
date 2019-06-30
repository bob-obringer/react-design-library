const FLEX_DIRECTION = {
    ROW: 'row',
    ROW_REVERSE: 'row-reverse',
    COLUMN: 'column',
    COLUMN_REVERSE: 'column-reverse'
};

const FLEX_WRAP = {
    NOWRAP: 'nowrap',
    WRAP: 'wrap',
    WRAP_REVERSE: 'wrap-reverse'
};

const ALIGN_ITEMS = {
    STRETCH: 'stretch',
    FLEX_START: 'flex-start',
    FLEX_END: 'flex-end',
    CENTER: 'center',
    BASELINE: 'baseline'
};

const contentConstants = {
    FLEX_START: 'flex-start',
    FLEX_END: 'flex-end',
    CENTER: 'center',
    SPACE_AROUND: 'space-around',
    SPACE_BETWEEN: 'space-between',
    SPACE_EVENLY: 'space-evenly'
};

const JUSTIFY_CONTENT = contentConstants;
const ALIGN_CONTENT = contentConstants;

export {
    FLEX_DIRECTION,
    ALIGN_ITEMS,
    ALIGN_CONTENT,
    JUSTIFY_CONTENT,
    FLEX_WRAP
};
