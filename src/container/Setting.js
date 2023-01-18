import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Button} from '../components/Button';

export const Setting = () => {
  const rightActions = () => {
    return (
      <View style={styles.sliderView}>
        <Text style={styles.sliderText}>Swipe me to continue</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.innerContainer}>
        <Button
          style={styles.firstButton}
          buttonText="Press me"
          textStyle={styles.textStyleSecond}
        />
        <Button
          style={[styles.firstButton, styles.grayColor]}
          buttonText="Press me"
          textStyle={styles.textStyle}
        />
        <Button
          style={[styles.firstButton, styles.secondButtonStyle]}
          buttonText="Press me"
          textStyle={styles.textStyle}
        />
        <Swipeable renderRightActions={rightActions}>
          <Button
            style={[styles.firstButton, styles.secondButtonStyle]}
            buttonText="Press me"
            textStyle={styles.textStyleSecond}
          />
        </Swipeable>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
  innerContainer: {
    alignSelf: 'center',
  },
  grayColor: {
    backgroundColor: 'gray',
  },
  secondButtonStyle: {
    backgroundColor: '#2E9AFE',
  },
  firstButton: {
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  textStyleFirst: {
    color: 'blue',
  },
  textStyleSecond: {
    color: 'white',
  },
  sliderView: {
    flex: 1,
    height: 40,
    marginVertical: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  sliderText: {
    color: 'blue',
    paddingHorizontal: 10,
    fontWeight: '600',
  },
});
