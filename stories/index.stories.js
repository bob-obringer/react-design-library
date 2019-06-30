import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {
    FlexBox,
    FLEX_DIRECTION,
    JUSTIFY_CONTENT,
} from '../src/layout/FlexBox';

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
));

storiesOf('Layout', module)
    .add('FlexBox', () => (
        <FlexBox
            flexDirection={FLEX_DIRECTION.ROW_REVERSE}
            justifyContent={JUSTIFY_CONTENT.SPACE_EVENLY}
        >
            <div>Box 1</div>
            <div>Box 2</div>
        </FlexBox>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));
