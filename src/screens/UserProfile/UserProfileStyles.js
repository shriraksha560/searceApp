import Colors from '../../themes/variables/Colors';
import FontSize from '../../themes/variables/FontSizes';
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
  imageStyle: {
    height: heightPercentageToDP(15),
    width: widthPercentageToDP(30),
    marginLeft: responsiveHorizontalSize(2),
    marginTop: responsiveVerticalSize(2),
    marginBottom: responsiveVerticalSize(2),
  },
  nameStyle: {
    fontSize: FontSize.textSize26,
    color: Colors.primaryColor,
  },
  descriptionStyle: {
    color: Colors.accentColor,
  },
  websiteStyle: {
    color: Colors.accentColor,
    padding: 2,
    marginRight: responsiveHorizontalSize(10),
    fontSize: FontSize.textSize16,
  },
  locationStyle: {
    color: Colors.accentColor,
  },
  viewStyle: {
    marginLeft: responsiveHorizontalSize(3),
    marginTop: responsiveVerticalSize(3),
  },
  reputationStyle: {
    marginLeft: responsiveHorizontalSize(2),
    marginBottom: responsiveVerticalSize(1),

    fontSize: FontSize.textSize16,
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },

  topTagsHeadingStyle: {
    marginLeft: responsiveHorizontalSize(2),
    marginTop: responsiveVerticalSize(1),
    marginBottom: responsiveVerticalSize(2),
    fontSize: FontSize.textSize20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  topTagViewStyle: {
    backgroundColor: Colors.accentColor,
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(30),
    marginBottom: responsiveVerticalSize(2),
    borderRadius: 3,
    marginLeft: responsiveHorizontalSize(2),
  },
  topTagTextStyle: {
    textAlign: 'center',
    color: Colors.black,
    justifyContent: 'center',

    fontWeight: 'bold',
    fontSize: FontSize.textSize18,
    alignItems: 'center',
  },
  scoreViewStyle: {
    marginLeft: responsiveHorizontalSize(2),
    marginTop: responsiveVerticalSize(1),
  },
  scoreMainViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 3,
    marginLeft: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
  },
  tagView: {
    backgroundColor: Colors.accentColor,
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(30),
    marginLeft: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
    borderRadius: 7,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  tagNameStyle: {
    fontWeight: 'bold',
    fontSize: FontSize.textSize15,
  },
  questionCardStyle: {
    marginRight: responsiveHorizontalSize(3),
    marginLeft: responsiveHorizontalSize(3),
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
  bountyStyle: {
    color: Colors.white,
    justifyContent: 'center',
    textAlign: 'center',
  },
  dateStyle: {
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),

    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
    fontSize: FontSize.textSize15,
    color: Colors.grey,
    justifyContent: 'flex-end',
  },
  questionStyle: {
    fontSize: FontSize.textSize18,
    color: Colors.primaryColor,
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
  },
  nameViewStyle: {
    marginLeft: responsiveHorizontalSize(1),
    marginRight: responsiveHorizontalSize(1),
    marginTop: responsiveVerticalSize(0.5),
    marginBottom: responsiveVerticalSize(0.5),
  },
  nameSmallStyle: {
    fontSize: FontSize.textSize15,
    color: Colors.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scoreValueStyle: {
    fontSize: FontSize.textSize18,
    color: Colors.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scoreTitleStyle:{
    fontSize:FontSize.textSize8
  }
};
