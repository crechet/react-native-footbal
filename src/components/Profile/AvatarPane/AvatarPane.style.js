import { StyleSheet } from 'react-native';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: scale(39),
    paddingRight: scale(62),
    paddingLeft: scale(62),
    paddingBottom: scale(40)
  }
});

export default styles;
