import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../styles/variables';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(3),
    backgroundColor: globalColors.greenDark,
    paddingTop: scale(15),
    paddingBottom: scale(16)
  },
  text: {
    color: globalColors.white,
    fontSize: scale(16),
    fontFamily: fonts.sfuiSemibold
  }
});

export default styles;
