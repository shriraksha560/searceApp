import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import LoginStyles from './LoginStyles';
import CommonStyles from '../../utils/CommonStyles';
import {Body, Button, Card, Header, Left, Right, Title} from 'native-base';
import {
  heightPercentageToDP,
  responsiveHorizontalSize,
  responsiveVerticalSize,
} from '../../themes/variables/ResponsiveSizes';
import Colors from '../../themes/variables/Colors';
import Strings from '../../themes/variables/Strings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontSize from '../../themes/variables/FontSizes';
import {ConsoleLogs} from '../../utils/ConsoleLogs';
function LoginComponent(props) {
  const {
    tag,
    navigation,
    email,
    setEmail,
    password,
    setPassword,
    passwordShown,
    setPasswordShown,
    togglePasswordVisiblity,
    loginClicked,
    setLoginClicked,
    handleLogin,
  } = props;
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.statusbarcolor}
        translucent={true}
      />
      <Image
        style={LoginStyles.logoStyle}
        source={require('../../assets/logo.png')}
      />
      <Text style={LoginStyles.appNameStyle}>{Strings.APP_NAME}</Text>
      <Text style={LoginStyles.descriptionStyle}>
        {Strings.APP_DESCRIPTION}
      </Text>

      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: responsiveVerticalSize(2),
          marginHorizontal: responsiveHorizontalSize(2),
        }}>
        <KeyboardAvoidingView>
          <View style={LoginStyles.textBoxViewStyle}>
            <Icon
              name={'user'}
              size={26}
              color={Colors.primaryColor}
              style={LoginStyles.textInputIcon}
            />
            <TextInput
              style={LoginStyles.mobileTextInput}
              placeholder={Strings.PLACEHOLDER_EMAIL_ID}
              keyboardType="default"
              underlineColorAndroid="transparent"
              value={email}
              ref={(input) => {
                //  textInputEmail = input;
              }}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
          </View>
          <View style={LoginStyles.textBoxViewPasswordStyle}>
            <Icon
              name={'lock'}
              size={26}
              color={Colors.primaryColor}
              style={LoginStyles.textInputIcon}
            />
            <TextInput
              style={LoginStyles.mobileTextInput}
              placeholder={Strings.PLACEHOLDER_PASSWORD}
              keyboardType="default"
              secureTextEntry={passwordShown}
              ref={(input) => {
                //   textInputPassword = input;
              }}
              value={password}
              onChangeText={(p) => {
                setPassword(p);
              }}
            />
            {passwordShown == false ? (
              <Icon
                style={LoginStyles.eyeIconStyle}
                name={'eye'}
                size={16}
                secureTextEntry={passwordShown}
                onPress={togglePasswordVisiblity}
                color={Colors.primaryColor}
              />
            ) : (
              <Icon
                style={LoginStyles.eyeIconStyle}
                name={'eye-slash'}
                size={16}
                onPress={togglePasswordVisiblity}
                color={Colors.primaryColor}
              />
            )}
          </View>
          {!email.trim() || !password.trim() ? (
            <TouchableOpacity
              style={[
                CommonStyles.buttonContainer,
                CommonStyles.buttonContainerGrey,
              ]}
              onPress={() => {
                alert('Please enter valid fields');
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: FontSize.textSize15,
                  fontWeight: 'bold',
                }}>
                {Strings.LOGIN}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              underlayColor={Colors.primaryColor}
              style={[
                CommonStyles.buttonContainer,
                CommonStyles.loginButtonBlue,
              ]}
              onPress={() => {
                ConsoleLogs(tag, 'On click of Login button');
                // setLoginClicked(true);
                handleLogin(email, password);
              }}>
              {loginClicked === false ? (
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: FontSize.textSize15,
                    fontWeight: 'bold',
                  }}>
                  {Strings.LOGIN}
                </Text>
              ) : (
                <ActivityIndicator size="small" color={Colors.white} />
              )}
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
export default LoginComponent;
