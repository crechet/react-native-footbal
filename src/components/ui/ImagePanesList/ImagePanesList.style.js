import { StyleSheet } from 'react-native';
import { globalColors, fonts } from '../../../styles/variables';
import { scale } from '../../../styles/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.grey,
    padding: scale(10)
  },
  panesContainer: {
    flex: 1,
    borderRadius: scale(5),
    borderWidth: 0,
    backgroundColor: globalColors.grey,
    elevation: 1,
    marginBottom: scale(12)
  }
});

export default styles;
