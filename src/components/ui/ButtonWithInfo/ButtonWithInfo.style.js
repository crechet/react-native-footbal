import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../styles/variables';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scale(3),
    backgroundColor: globalColors.greenDark,
    paddingTop: scale(10),
    paddingBottom: scale(10)
  },
  text: {
    color: globalColors.white,
    fontSize: scale(14),
    fontFamily: fonts.sfuiSemibold
  },
  textLeft: {
    marginLeft: scale(20)
  },
  textRight: {
    marginRight: scale(20)
  }
});

export default styles;
