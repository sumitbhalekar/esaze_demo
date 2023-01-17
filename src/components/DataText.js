import {PropTypes} from 'prop-types';
import {StyleSheet, Text} from 'react-native';

export const DataText = props => {
  const {title, value} = props;
  return <Text style={styles.textStyle}> {title + value}</Text>;
};

export const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

DataText.prototype = {
  title: PropTypes.string,
  value: PropTypes.string,
};
