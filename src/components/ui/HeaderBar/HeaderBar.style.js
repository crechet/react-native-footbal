import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../styles/variables';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    height: scale(44),
    // Android shadow.
    elevation: 1
  },
  alignLeft: {
    position: 'absolute',
    left: scale(15)
  },
  iconContainer: {
    padding: scale(3)
  },
  title: {
    fontFamily: fonts.sfuiSemibold,
    fontSize: scale(17),
    lineHeight: scale(20),
    color: globalColors.black,
    textAlign: 'center'
  }
});
