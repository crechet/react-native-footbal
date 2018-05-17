import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../styles/variables';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    height: scale(59),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(20),
    paddingRight: scale(20)
  },
  imageContainer: {
    marginRight: scale(17)
  },
  image: {
    maxHeight: scale(13)
  },
  inputContainer: {
    flex: 1
  },
  input: {
    width: '100%',
    fontFamily: fonts.sfuiLight,
    fontSize: scale(16),
  }
});

export default styles;
