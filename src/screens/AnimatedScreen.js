import React, { Component } from 'react';
import { ComponentForScreen } from '../components/ComponentForScreen';
import { Animated, Easing, View } from 'react-native';
import {
	ScreenView,
	Button,
	Item,
  BgImage,
} from '../components';

import { interpolate } from '../Helper';

import { css, em, width, height } from '../css';

export class AnimatedScreen extends ComponentForScreen {
	constructor(...args) {
		super(...args);
		
		this.state = {
			style: new Animated.Value(0),
			center: {
        w: width /2,
				h: height /2,
			},
			css: {
				b1: {},
				b2: {},
        extra_btn: {},
			}
		}
    
    this.state.css.container = {
      top: this.interpolate(0, -(this.state.center.h -60)),
      width: this.interpolate('70%', '100%'),
    }
    
    this.buttons = [
      {
        title: 'Button 1',
      },
      {
        title: 'Button 2'
      }
    ]
    
    this.extra_button = {};
	}
  
  shouldComponentUpdate() {
  	return true;
  }
  
  mergeState(newState={}, callback=()=>{}) {
  	this.setState(prevSate => {
  		return Object.assign(prevSate, newState);
  	}, () => {callback()});
  }
  
  onButtonPress(num) {
  	let num2 = 3 - num;
  	this.mergeState({
  		css: Object.assign(this.state.css, {
  			[`b${num2}`]: {
  				display: 'none',
  			},
        extra_btn: {
          display: 'none',
        }
  		})
  	})
  	
  	this.animateBtn(() => this.afterButtonPressed(num));
  }
  
  animateBtn(callback=()=>{}) {
    Animated.timing(
      this.state.style,
      {
        toValue: 1,
        duration: 300,
        easing: Easing.easeIn
      }
    ).start((data) => {
      if (data.finished) {
        callback();
      }
    });
  }
  
  afterButtonPressed(num) {
    console.log(`Button number ${num} was pressed!`);
  }
  
  interpolate(start, end) {
  	let anim = this.state.style;
  	return interpolate(anim, start, end);
  }
  
  extraButton() {
    if (!this.extra_button.url) return null;
    
    return (
      <Button
        title={this.extra_button.title}
        onPress={() => this.onExtraButtonPress()}
        style={[css.btn_home, css.btn_home3, this.state.css.extra_btn, { marginTop: em(1) }]}
        disabled={!!this.state.disabled}
        disabledStyle={css.btn_home2_disabled}
        textStyle={css.btn_home3_txt}
      />
    )
  }
  
  onExtraButtonPress() {
    if (this.extra_button.static) this.afterExtraButtonPressed();
    else {
      this.mergeState({
        css: Object.assign(this.state.css, {
          b1: {
            display: 'none',
          },
          b2: {
            display: 'none',
          },
          c1: {
            display: 'none',
          },
          c2: {
            display: 'none',
          },
        })
      })
    
      this.animateBtn(() => this.afterExtraButtonPressed());
    }
  }
  
  afterExtraButtonPressed() {
    this.props.navigation.navigate(this.extra_button.url);
  }
  
  getButton(num) {
    const btn = !this.buttons[num -1].title ? null : (
      <Button
        title={this.buttons[num -1].title}
        onPress={() => this.onButtonPress(num)}
        style={[css.btn_home, this.state.css[`b${num}`]]}
        fontSize={24}
      />
    );
    
    return btn;
  }
	
	render() {
		let item_css = this.state.css.container;
    let outer_css = css.bg_image_inner_centerd;
		
		return (
			<ScreenView>
        <BgImage>
          <View style={outer_css}>
    				<Animated.View style={item_css}>
    					{this.getButton(1)}
    					{this.getButton(2)}
              {this.extraButton()}
            </Animated.View>
          </View>
        </BgImage>
			</ScreenView>
		);
	}
}

