import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Body, Button, Card, Header, Left, Right, Title} from 'native-base';
import {
  heightPercentageToDP,
  responsiveHorizontalSize,
  responsiveVerticalSize,
} from '../../themes/variables/ResponsiveSizes';
import CommonStyles from '../../utils/CommonStyles';
import Colors from '../../themes/variables/Colors';
import Strings from '../../themes/variables/Strings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontSize from '../../themes/variables/FontSizes';
import {ConsoleLogs} from '../../utils/ConsoleLogs';
import UserProfileStyles from './UserProfileStyles';
function UserProfileComponent(props) {
  const {
    navigation,
    id,
    name,
    image,
    link,
    reputation,
    tags,
    // badge,
    questions,
  } = props;
  // ConsoleLogs(
  //   'tag',
  //   'badge in UserProfileComponent :' + JSON.stringify(badge.badge_counts),
  // );
  return (
    <View style={{flex: CommonStyles.flex}}>
      <View style={{height: heightPercentageToDP(8)}}>
        <Header
          style={CommonStyles.headerStyle}
          androidStatusBarColor={Colors.statusbarcolor}>
          <Left>
            <TouchableOpacity>
              <Icon
                name={'chevron-left'}
                size={26}
                color={Colors.white}
                onPress={(props) => {
                  navigation.goBack(null);
                }}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{marginLeft: responsiveHorizontalSize(5)}}>
              {Strings.USER_PROFILE}
            </Title>
          </Body>
        </Header>
      </View>

      <ScrollView>
        <Card
          style={UserProfileStyles.cardStyle}
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={10}>
          <View style={{flexDirection: 'row'}}>
            <View>
              {image.length > 0 ? (
                <Image
                  style={UserProfileStyles.imageStyle}
                  source={{
                    uri: `${image}`,
                  }}
                />
              ) : (
                <ActivityIndicator
                  style={CommonStyles.activityIndictorStyle}
                  size="large"
                  color={Colors.primaryColor}
                />
              )}
              <Text style={UserProfileStyles.reputationStyle}>
                {reputation} Reputation
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginLeft: responsiveHorizontalSize(3),
                }}>
                {/* <View style={UserProfileStyles.tagViewStyle}>
                  <Text style={UserProfileStyles.tagTextStyle}>1</Text>
                </View>
                <View style={UserProfileStyles.tagViewStyle}>
                  <Text style={UserProfileStyles.tagTextStyle}>1</Text>
                </View>
                <View style={UserProfileStyles.tagViewStyle}>
                  <Text style={UserProfileStyles.tagTextStyle}>1</Text>
                </View> */}

                <ScrollView horizontal={true}>
                  {/* <Text>badge</Text> */}
                </ScrollView>
              </View>
            </View>
            <View style={UserProfileStyles.viewStyle}>
              <Text>Id : {id}</Text>
              <Text style={UserProfileStyles.nameStyle}>{name}</Text>
              <View style={{paddingRight: 4}}>
                <Text style={UserProfileStyles.websiteStyle}>{link}</Text>
              </View>
            </View>
          </View>
        </Card>

        <View>
          <Text style={UserProfileStyles.topTagsHeadingStyle}>Top Tags</Text>

          <ScrollView horizontal={true}>
            <FlatList
              data={tags}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View style={UserProfileStyles.tagView}>
                    <Text style={UserProfileStyles.tagNameStyle}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.value}
            />
          </ScrollView>
          <ScrollView>
            {questions.length > 0 ? (
              <FlatList
                data={questions}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                  var date = new Date(item.creation_date);

                  var res = date.toLocaleString();
                  return (
                    <Card
                      style={UserProfileStyles.questionCardStyle}
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={10}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={UserProfileStyles.squareView}>
                          <Text style={UserProfileStyles.bountyStyle}>
                            +{item.bounty_amount}
                          </Text>
                        </View>

                        <Text style={UserProfileStyles.dateStyle}>{res}</Text>
                      </View>
                      <Text style={UserProfileStyles.questionStyle}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          flex: 3,
                        }}>
                        <View>
                          <View style={UserProfileStyles.scoreMainViewStyle}>
                            <Text style={UserProfileStyles.scoreValueStyle}>
                              {item.score}
                            </Text>
                            <Text style={UserProfileStyles.scoreValueStyle}>
                              {item.view_count}
                            </Text>
                            <Text style={UserProfileStyles.scoreValueStyle}>
                              {item.answer_count}
                            </Text>
                          </View>
                          <View style={UserProfileStyles.scoreMainViewStyle}>
                            <Text style={UserProfileStyles.scoreTitleStyle}>
                              score |
                            </Text>
                            <Text style={UserProfileStyles.scoreTitleStyle}>
                              . ans |
                            </Text>
                            <Text style={UserProfileStyles.scoreTitleStyle}>
                              . count
                            </Text>
                          </View>
                        </View>

                        <View style={UserProfileStyles.nameViewStyle}>
                          <Text style={UserProfileStyles.nameSmallStyle}>
                            {item.owner.display_name}
                          </Text>
                        </View>
                      </View>
                    </Card>
                  );
                }}
                keyExtractor={(item) => item.value}
              />
            ) : (
              <ActivityIndicator style={CommonStyles.activityIndictorStyle} />
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
export default UserProfileComponent;
