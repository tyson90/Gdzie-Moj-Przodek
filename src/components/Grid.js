import React, { Children } from 'react';
import { View } from 'react-native';
import { Text } from './Text';

import { css } from '../css';

export const Grid = (props) => {
  let rows = [];
  
  Children.map(props.children, (child, i) => {
    if (i % props.w == 0) rows.push([]);
    rows[rows.length -1].push(child);
  });
  
  return (
    <View style={[css.grid_wrapper, props.style]}>
    {
      rows.map((row, i) => (
        <View style={[css.grid_row]} key={i}>
          {
            row.map((item, j) => (
              <View style={[css.grid]} key={j}>{item}</View>
            ))
          }
        </View>
      ))
    }
    </View>
  )
}
