import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from './Text';
import { Header } from './Header';
import { Footer } from './Footer';

import { css } from '../css';

export const ScreenViewScroll = (props) => {
  let footer = props.footer ? (
    <Footer>{props.footer}</Footer>
  ) : (
    <Footer empty />
  );
  
  let header = props.title ? (
    <Header notop={typeof props.notop != 'undefined'}>
      <Text>{props.title}</Text>
    </Header>
  ) : null;

  return (
      <ScrollView style={[css.view, css.scrolling_view]}>
        {header}
        <View style={[css.content_wrapper, css.content_wrapper2]}>
          {props.children}
        </View>
        {footer}
      </ScrollView>
  );
}
