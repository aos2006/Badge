import React from 'react';
import Badge from '';
import { ComponentsStory } from 'components/ComponentsStory';
import { text, number } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

ComponentsStory.add('Badge', () => (
  <div>
      <Badge>a</Badge>
    {/*<div style={{ display: 'none' }}>*/}
      {/*<Badge>{1000}</Badge>*/}
    {/*</div>*/}
    {/*{withPropsCombinations(Badge, {*/}
      {/*children: [10, 1000],*/}
    {/*})()}*/}
  </div>
));
