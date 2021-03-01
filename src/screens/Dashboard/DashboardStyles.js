import Colors from '../../themes/variables/Colors';
import fontSize from '../../themes/variables/FontSizes';
import {
  heightPercentageToDP,
  responsiveHorizontalSize,
  responsiveVerticalSize,
  widthPercentageToDP,
} from '../../themes/variables/ResponsiveSizes';

export default {
  cardStyle: {
    marginRight: responsiveHorizontalSize(1),
    marginLeft: responsiveHorizontalSize(1),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderRadius: 7,
  },
  squareView: {
    backgroundColor: Colors.primaryColor,
    height: heightPercentageToDP(3),
    width: widthPercentageToDP(12),
    marginLeft: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(1),
    marginBottom: responsiveVerticalSize(1),
    borderRadius: 3,
    justifyContent: 'center',
    textAlign: 'center',
  },
  tagView: {
    backgroundColor: Colors.accentColor,
    height: heightPercentageToDP(8),
    width: widthPercentageToDP(18),
    marginLeft: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
    borderRadius: 7,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
  },
  questionStyle: {
    fontSize: fontSize.textSize18,
    color: Colors.primaryColor,
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),

    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
  },
  dateStyle: {
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),

    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
    fontSize: fontSize.textSize15,
    color: Colors.grey,
    justifyContent: 'flex-end',
  },
  bountyStyle: {
    color: Colors.white,
    justifyContent: 'center',
    textAlign: 'center',
  },
  tagNameStyle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  nameViewStyle: {
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
  },
  nameStyle: {
    fontSize: fontSize.textSize18,
    color: Colors.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scoreViewStyle: {
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(1),
    marginBottom: responsiveVerticalSize(1),
  },
  scoreTextStyle: {
    fontSize: fontSize.textSize15,
    color: Colors.primaryColor,
    textAlign: 'center',
  },
 
};
