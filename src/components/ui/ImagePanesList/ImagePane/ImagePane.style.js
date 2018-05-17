import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../../styles/variables';
import { scale } from '../../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    borderBottomWidth: 1,
    borderColor: globalColors.greyDarkOne
  },
  title: {
    fontFamily: fonts.sfuiSemibold,
    color: globalColors.black,
    fontSize: scale(17),
    marginTop: scale(14)
  },
  topPane: {
    borderTopLeftRadius: scale(3),
    borderTopRightRadius: scale(3),
  },
  bottomPane: {
    borderBottomLeftRadius: scale(3),
    borderBottomRightRadius: scale(3),
    borderBottomWidth: 0
  }
});
