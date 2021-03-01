import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../themes/variables/ResponsiveSizes';
import FontSize from '../../themes/variables/FontSizes';
import Colors from '../../themes/variables/Colors';
export default {
  logoStyle: {
    alignSelf: 'center',
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(50),
    marginVertical: responsiveVerticalSize(8),
  },
  appNameStyle: {
    marginVertical: responsiveVerticalSize(1),
    color: Colors.primaryColor,
    textAlign: 'center',
    fontSize: responsiveFontSize(FontSize.textSize30),
  },
  descriptionStyle: {
    marginVertical: responsiveVerticalSize(1),
    color: Colors.grey,

    textAlign: 'center',
  },
  textBoxViewStyle: {
    borderColor: Colors.primaryColor,
    marginVertical: responsiveVerticalSize(1),
    marginHorizontal: responsiveHorizontalSize(4),

    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },
  textBoxViewPasswordStyle: {
    borderColor: Colors.primaryColor,
    marginVertical: responsiveVerticalSize(1),
    marginHorizontal: responsiveHorizontalSize(4),

    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputIcon: {
    marginHorizontal: responsiveHorizontalSize(2),
    marginVertical: responsiveVerticalSize(2),
  },
  mobileTextInput: {
    borderBottomColor: Colors.white,
    flex: 1,
  },
  eyeIconStyle: {
    marginHorizontal: responsiveHorizontalSize(4),
  },
};
