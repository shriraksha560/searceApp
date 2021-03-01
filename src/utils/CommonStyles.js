import Colors from '../themes/variables/Colors';
import {
  heightPercentageToDP,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../themes/variables/ResponsiveSizes';
export default {
  flex: 1,
  headerStyle: {
    backgroundColor: Colors.primaryColor,
    // marginTop: responsiveVerticalSize(5),
  },
  buttonContainer: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: responsiveVerticalSize(1),
    marginHorizontal: responsiveHorizontalSize(4),
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(80),
  },
  loginButtonBlue: {
    backgroundColor: Colors.primaryColor,
  },
  loginButtonGrey: {
    backgroundColor: Colors.grey,
  },

  buttonContainerGrey: {
    height: heightPercentageToDP(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',

    marginVertical: responsiveVerticalSize(2),
    width: widthPercentageToDP(80),
    backgroundColor: Colors.grey,
  },
  activityIndictorStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveVerticalSize(40),
  },
};
