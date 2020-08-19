import {StyleSheet} from 'react-native';
import {COLORS} from '../config/colors';
import { FONTS } from '../config/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#b0bfbc",
  },
  top_container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#b0bfbc",
    alignItems: 'flex-start',
  },
  justify_between: {
    justifyContent: 'space-between',
  },
  align_items_center: {
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  logo_sm: {
    height: 75,
    width: 50,
  },
  info_icon: {
    alignSelf: 'center',
    fontSize: 30,
    paddingRight: 50,
  },
  go_icon: {
    alignSelf: 'center',
    fontSize: 30,
    position: 'absolute',
    right: -50,
  },
  logo_xsm: {
    height: 50,
    width: 35,
  },
  input: {
    height: 55,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20,
    borderWidth: 0.7,
    borderColor: 'white',
    color: 'rgb(224,224,224)',
    borderRadius: 10,
    padding: 15,
  },
  center: {
    alignSelf: 'center',
  },
  color_w: {
    color: 'white',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  color_main: {
    color: '#00A79A',
  },
  button: {
    height: 40,
    margin: 15,
    marginTop: 50,
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  video_container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  video_tile: {
    aspectRatio: 1,
    width: '100%',
  },
  video_wide_tile: {
    aspectRatio: 1,
    width: 350,
  },
  m_10: {
    margin: 10,
  },
  pd_5: {
    paddingRight: 2,
    paddingLeft: 2,
  },
  background_video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  top_right_corner: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  bottom_center: {
    position: 'absolute',
    bottom: 15,
    left: '43%',
  },
  imvelo_logo_inner: {
    padding: 1,
    backgroundColor: '#292e45',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  imvelo_logo_outter: {
    backgroundColor: '#c7cbd9',
    borderRadius: 100,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video_footer: {
    backgroundColor: COLORS.opposite,
    padding: 10,
  },
  video_subtitle: {
    color: 'black',
    fontSize: 11,
  },
  space_between: {
    justifyContent: 'space-between',
  },
  video_info: {
    backgroundColor: '#141B41',
    padding: 15,
  },
  video_side_info: {
    backgroundColor: 'rgba(30,30,30,0.78)',
    position: 'absolute',
    zIndex: 999,
    top: 0,
    right: 0,
    height: '100%',
  },
  right_center: {
    position: 'absolute',
    right: 0,
    top: '50%',
  },
  left_bottom: {
    position: 'absolute',
    left: 0,
    top: '70%',
  },
  text_description: {
    color: '#ffb73b',
    textAlign: 'center',
  },
  chipListContainer: {
    paddingBottom: 12,
    paddingTop: 12,
    backgroundColor: "#f1f1f1"
  },
  productContentListContainer: {
    paddingBottom: 12,
  },
  productListContainer: {
    paddingStart: 12,
    paddingEnd: 12,
  },
  productSeparator: {
    height: 8, 
    width: "90%",
    backgroundColor: "transparent",
  },
  productTouchableContainer: {
    backgroundColor: "#f1f1f1",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 1,
    marginBottom: 2,
    borderColor: "rgba(0,0,0,0.005)",
    borderWidth: 1,
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    overflow: "hidden",
  },
  productImage: {
    flex: 30,
    width: "100%",
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  productTextContainer: {
    flex: 70,
    width: "100%"
  },
  productTitle: {
    flex: 5,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 12,
    paddingStart: 12,
    paddingEnd: 12
  },
  productDescription: {
    flex: 90,
    fontSize: 14,
    paddingBottom: 12,    
    paddingStart: 12,
    paddingEnd: 12,
  },
  productPrice: {
    flex: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: "green",
    paddingStart: 12,
    paddingEnd: 12,    
  },
  video_title: {
    zIndex: 1,
    position: 'absolute',
    top: '10%',
    right: '35%',
    color: 'white',
    fontWeight: 'bold',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  map_image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  wide_tile: {
    alignItems: 'center',
    margin: 20,
    padding: 5,
  },
  wide_tile_image: {
    width: 360,
    height: 180,
  },
  compilation_title: {
    color: 'white',
    fontSize: 20,
  },
  compilation_title_container: {
    padding: 20,
    position: 'relative',
  },
  info_container: {
    height: 170,
    padding: 10,
  },
  main_video: {
    width: '100%',
    aspectRatio: 1,
    marginTop: -90,
  },
  main_video_title: {
    fontFamily: FONTS.roboto,
    fontWeight: 'bold',
  },
  main_video_subtitle: {
    fontFamily: FONTS.roboto,
    fontSize: 11,
    color: 'grey',
  },
  main_video_desc_container: {
    margin: 10,
    marginTop: -80,
  },
  subtitle: {
    fontWeight: 'bold',
  },
  up_next_image: {
    height: 200,
    width: 350,
    borderWidth: 1,
    borderColor: 'black',
  },
  up_next_image_container: {
    marginBottom: 10,
  },
  up_next_list: {
    margin: 1,
  },
  up_next_container: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
