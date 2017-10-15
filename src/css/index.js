import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { colorSchemes } from './colorSchemes';

export let palette = {
  black: '#336',
  gr1: '#99a',
  gr2: '#ccc',
  light: '#fafafa',
  light2: '#f1f1f1',
  blue: '#58f',
  light_blue: '#9cf',
  red: '#f56',
  white: '#fff',
  error: '#e00',
}

palette = {
  black: '#ff0',
  gr1: '#ba0',
  gr2: '#a80',
  light: '#111',
  light2: '#222',
  blue: '#8a0',
  light_blue: '#693',
  blue_inactive: '#897',
  red: '#d90',
  red_inactive: '#874',
  white: '#000',
  error: '#d00',
}
// palette.light2 = '#ff6';
// palette.light = '#f44';

palette = colorSchemes.get('darkNgreen');

export const colors = {
  dark: palette.black,
  semi_dark: palette.gr1,
	mid: palette.gr2,
	light: palette.light,
	bg: /*'transparent',//*/ palette.light2,
  primary: palette.blue,
  primary_light: palette.light_blue,
  primary_disabled: palette.blue_inactive,
	secondary: palette.red,
  secondary_disabled: palette.red_inactive,
	on_primary: palette.light,
	on_secondary: palette.light,
	menu: palette.white,
  error: palette.error,
  white: '#fefefe',
}

const double = x => {
  return x.toFixed(2) -0
}

export const em = m => {
	return double(m * 12);
}

const device_dims = Dimensions.get('screen'),
      dw = device_dims.width,
      dh = device_dims.height;

export const width = Math.min(dw, dh);
export const height = Math.max(dw, dh);

export const vw = m => {
  return double(m / 100 * width);
}

export const vh = m => {
  return double(m / 100 * height);
}

export const rgba = (hex, trans) => {
  return hex + trans;
}

const app_css = {
	body: {
		backgroundColor: colors.bg,
    flex: 1,
	},
	
	txt: {
		color: colors.dark,
    textAlign: 'center',
	},
  
  text_error: {
    color: colors.error,
    textAlign: 'center',
    padding: em(0.5),
    margin: em(0.5),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: em(0.3),
  },
  
  drawer: {
    backgroundColor: colors.light,
    ...Platform.select({
      android: {
        paddingTop: 30,
      },
    }),
    zIndex: 11,
  },
  drawer_item: {
    
  },
  drawer_item_txt: {
    // color: colors.dark,
  },
  drawer_label: {
    padding: 16,
    fontWeight: 'bold',
  },
  
  stack_header: {
    backgroundColor: colors.light,
    ...Platform.select({
      android: {
        paddingTop: 30,
        paddingBottom: 10,
        height: 65,
      },
    }),
  },
  
  view: {
    flex: 1,
    paddingTop: 24,
    // backgroundColor: colors.bg,
  },
  
  scrolling_view: {
    padding: 0,
    // marginTop: 25,
    minHeight: '100%',
  },
  
  content_wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  content_wrapper2: {
    alignItems: 'stretch',
  },
  
  item: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  
  btn: {
    backgroundColor: colors.primary,
  },
  btn_txt: {
    color: colors.on_primary,
    textAlign: 'center',
    width: '100%',
  },
  
  header: {
    backgroundColor: colors.primary,
    padding: 10,
  },
  header_text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.on_primary,
  },
  header_no_header: {
    paddingTop: 30,
  },
  
  footer: {
    
  },
  footer_empty: {
    minHeight: 1,
    zIndex: -1,
  },
  
  menu: {
    flex: 1,
    backgroundColor: colors.menu,
  },
  
  list: {
    marginTop: 0,
    borderTopColor: colors.mid,
  },
  list_item: {
    backgroundColor: colors.light,
    borderBottomColor: colors.mid,
  },
  list_item_txt: {
    color: colors.dark,
  },
  
  main_loader: {
    height: '100%',
    padding: 20,
  },
  
  input: {
    borderColor: colors.mid,
    borderBottomColor: colors.mid,
  },
  input_txt: {
    color: colors.semi_dark,
  },
  placeholder: {
    color: colors.mid,
  },
  
  view_center: {
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: colors.bg,
  },
  
  btn_home: {
    marginVertical: 5,
    borderRadius: 5,
  },
  btn_home2: {
    backgroundColor: colors.secondary,
    width: '80%',
    marginHorizontal: '10%',
  },
  btn_home_disabled: {
    backgroundColor: colors.primary_disabled,
  },
  btn_home2_disabled: {
    backgroundColor: colors.secondary_disabled,
  },
  
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    minWidth: '100%',
    minHeight: '100%',
    // paddingTop: 30,
  },
  
  bg_animated: {
    animated: {
      height: height *2,
    },
    
    wrapper: {
      flex: 1,
      position: 'relative',
      width: '100%',
      // borderWidth: 3,
      // borderStyle: 'dashed',
      // borderColor: 'red',
      // borderRadius: 2,
    },
    
    img_wrapper: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      height: '100%',
      // borderWidth: 3,
      // borderStyle: 'solid',
      // borderColor: 'yellow',
      // borderRadius: 2,
    },
    
    img: {
      
    },
    
    content: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      height: '100%',
      width: '100%',
      // borderWidth: 3,
      // borderStyle: 'dotted',
      // borderColor: 'blue',
      // borderRadius: 2,
    },
  },
  
  columns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  column: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  
  block: {
    marginBottom: em(2),
  },
  
  h_centered: {
    alignItems: 'center',
  },
  v_centered: {
    alignItems: 'center',
  },
  
  grid_wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%',
  },
  grid_row: {
    flex: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    borderRadius: 2, // android fix for border style
  },
  grid: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 0,
    borderStyle: 'dashed',
    borderColor: colors.secondary,
    borderRadius: 2, // android fix for border style
  },
  grid_33: {
    width: '33%',
  },
  
  popup: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    zIndex: 9,
  },
  
  menu_opener: {
    position: 'absolute',
    top: 24+5,
    left: 5,
    padding: 6,
    paddingBottom: 0,
    backgroundColor: colors.light,
    borderRadius: 5,
    zIndex: 8,
  },
  // menu_opener_txt: {
  //   fontSize: em(3),
  //   fontWeight: 'bold',
  //   color: colors.semi_dark,
  // },
  menu_opener_dot: {
    backgroundColor: colors.semi_dark,
    width: 24,
    height: 3,
    borderRadius: 1.5,
    marginBottom: 6,
  },
// }

// export const app_css = {
  counter: {
    backgroundColor: colors.bg,
    fontSize: em(8),
    ...Platform.select({
      ios: {
        lineHeight: em(12),
      },
      android: {
        lineHeight: em(11),
      },
    }),
    textAlign: 'center',
    width: em(12),
    height: em(12),
    borderRadius: em(6),
    borderWidth: em(0.3),
    borderStyle: 'solid',
    borderColor: colors.dark,
    overflow: 'hidden',
  },
  
  settings_color: {
    width: 60,
    height: 60,
    maxWidth: '100%',
  },
  
  setup_lang_item: {
    backgroundColor: colors.dark,
    width: 150,
    height: 100,
    maxWidth: '100%',
    overflow: 'hidden',
  },
  setup_lang_txt: {
    
  },
  setup_lang_img: {
    width: '100%',
    height: '100%',
  },
  setup_lang_item_border: {
    borderRadius: em(0.7),
  },
  
  map: {
    wrapper: {
      flex: 1,
      width: '100%',
      zIndex: 1,
      position: 'relative',
      // borderWidth: 2,
      // borderStyle: 'dashed',
      // borderColor: 'cyan',
      // borderRadius: 2,
    },
    inner: {
      // borderColor: 'red',
      // borderStyle: 'dotted',
    },
  },
  
  form: {
    wrapper: {
      flex: 0,
      width: '100%',
      // height: em(4),
      position: 'absolute',
      bottom: 5,
      zIndex: 15,
    },
    opener: {
      borderRadius: 0,
    },
    
    form: {
      backgroundColor: colors.white,
      width: '100%',
      // height: 500,
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: 'cyan',
      borderRadius: 2,
    },
    label: {
      fontSize: em(1.3),
      color: colors.secondary,
    },
    input: {
      // backgroundColor: 'red',
      // borderBottomColor: colors.secondary,
      // borderBottomStyle: 'solid',
      // borderBottomWidth: 3,
    },
    input_text: {
      color: colors.light,
      // paddingVertical: em(0.5),
      paddingHorizontal: em(0.5),
      fontSize: em(1.3),
    },
    placeholder: {
      color: rgba(colors.light, '22'),
    },
  },
}

export const css = app_css;// new StyleSheet.create(app_css);
