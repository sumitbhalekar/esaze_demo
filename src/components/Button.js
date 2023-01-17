import {PropTypes} from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';

export const Button = props => {
  const {onPress, style, buttonText, textStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style} {...props}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

Button.prototype = {
  onPress: PropTypes.Function,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  buttonText: PropTypes.string,
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
