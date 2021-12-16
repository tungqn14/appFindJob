import {StyleSheet, Dimensions} from 'react-native';
const maxWidth = Dimensions.get('screen').width;
const maxHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  model_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  model_contain: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  v_row_between: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  model_style: {
    width: maxWidth,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '92%',
    backgroundColor: '#fff',
  },
});
export default styles;
