import React from 'react';
import B from '@latoken-component/badge';
import { ComponentsStory } from 'components/ComponentsStory';
import { text, number } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import { Button } from 'antd';

ComponentsStory.add('Badge', () => (
  <div>
	  <B>{100}</B>
	  {/*<Badge>{1}</Badge>*/}
      {/*<Badge>{100}</Badge>*/}
    {/*<div style={{ display: 'none' }}>*/}
      {/*<Badge>{1000}</Badge>*/}
    {/*</div>*/}
    {/*{withPropsCombinations(Badge, {*/}
      {/*children: [10, 1000],*/}
    {/*})()}*/}
  </div>
));
