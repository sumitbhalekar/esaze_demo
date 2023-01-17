import {PropTypes} from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';

export const TextInputField = props => {
  const {value, placeholder, onChangeText} = props;
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.inputStyles}
    />
  );
};

export const styles = StyleSheet.create({
  inputStyles: {
    height: 45,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

// TextInputField.prototype = {
//   value: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChangeText: PropTypes.Function,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
// };
