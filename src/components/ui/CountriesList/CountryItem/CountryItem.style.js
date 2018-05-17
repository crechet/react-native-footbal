import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../../styles/variables';
import { scale } from '../../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    paddingTop: scale(17),
    paddingBottom: scale(19),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: globalColors.greyLightOne
  },
  title: {
    fontFamily: fonts.sfuiSemibold,
    color: globalColors.black,
    fontSize: scale(15)
  },
  firstItem: {
    borderTopWidth: scale(1),
    borderTopColor: globalColors.greyLightOne
  },
  lastItem: {
    marginBottom: scale(85)
  },
  itemSelected: {
    backgroundColor: globalColors.greyDarkTwo
  }
});

export default styles;
