import { StyleSheet } from 'react-native';
import { scale } from '../../styles/scalingUtils';
import { globalColors, fonts } from '../../styles/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    flex: 1,
    paddingLeft: scale(30),
    paddingRight: scale(30)
  },
  formField: {
    paddingBottom: scale(9),
    marginBottom: scale(26),
    borderBottomWidth: scale(1),
    borderBottomColor: globalColors.greyLightOne
  },
  formFieldLast: {
    marginBottom: 0
  },
  fieldLabel: {
    marginBottom: scale(8),
    fontFamily: fonts.sfuiSemibold,
    fontSize: scale(12),
    color: globalColors.greyDarkThree
  },
  input: {
    width: '100%',
    fontFamily: fonts.sfuiSemibold,
    fontSize: scale(17),
    color: globalColors.black,
    padding: 0
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(5),
    paddingTop: scale(12),
    paddingBottom: scale(12)
  },
  textButtonTitle: {
    fontFamily: fonts.sfuiSemibold,
    fontSize: scale(13),
    color: globalColors.orange
  },
  buttonContainer: {
    marginTop: scale(30),
    marginBottom: scale(5)
  }
});

export default styles;
