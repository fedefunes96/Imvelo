import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  align_items_center: {
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: 'center',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 8,
  },
  video_tile: {
    aspectRatio: 1,
    width: 172,
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
});
