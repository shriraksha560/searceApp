import React from 'react';
import {
  ActivityIndicator,
  FlatList,
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
import DashboardStyle from './DashboardStyles';
import DashboardStyles from './DashboardStyles';
import NavigationStack from '../navigationStack/NavigationStack';
function DashboardComponent(props) {
  const {navigation, tag, data, setData} = props;
  return (
    <View style={{flex: CommonStyles.flex}}>
      <View style={{height: heightPercentageToDP(8)}}>
        <Header
          style={CommonStyles.headerStyle}
          androidStatusBarColor={Colors.statusbarcolor}>
          <Body>
            <Title style={{marginLeft: responsiveHorizontalSize(5)}}>
              {Strings.WELCOME}
            </Title>
          </Body>
        </Header>
      </View>
      <ScrollView>
        {data.length > 0 ? (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
             

              var date = new Date(item.creation_date);

              var res = date.toLocaleString();
              return (
                <Card
                  style={DashboardStyles.cardStyle}
                  cardElevation={2}
                  cardMaxElevation={2}
                  cornerRadius={10}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={DashboardStyle.squareView}>
                      <Text style={DashboardStyle.bountyStyle}>
                        +{item.bounty_amount}
                      </Text>
                    </View>

                    <Text style={DashboardStyle.dateStyle}>{res}</Text>
                  </View>
                  <Text style={DashboardStyle.questionStyle}>{item.title}</Text>

                  <View style={{flexDirection: 'row'}}>
                    {item.tags.map((tag) => {
                      return (
                        <View style={DashboardStyle.tagView}>
                          <Text style={DashboardStyle.tagNameStyle}>{tag}</Text>
                        </View>
                      );
                    })}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={DashboardStyle.scoreViewStyle}>
                      <Text style={DashboardStyle.scoreTextStyle}>
                        {item.score} score
                      </Text>
                      <Text style={DashboardStyle.scoreTextStyle}>
                        {item.view_count} views
                      </Text>
                      <Text style={DashboardStyle.scoreTextStyle}>
                        {item.answer_count} counts
                      </Text>
                    </View>
                    <TouchableHighlight
                      underlayColor={Colors.white}
                      onPress={() => {
                        navigation.navigate('UserProfileContainer', {
                          id: item.owner.user_id,
                          name: item.owner.display_name,
                          image: item.owner.profile_image,
                          link: item.owner.link,
                          reputation: item.owner.reputation,
                        });
                      }}>
                      <View style={DashboardStyle.nameViewStyle}>
                        <Text style={DashboardStyle.nameStyle}>
                          {item.owner.display_name}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </Card>
              );
            }}
            keyExtractor={(item) => item.value}
          />
        ) : (
          <ActivityIndicator
            style={CommonStyles.activityIndictorStyle}
            size="large"
            color={Colors.primaryColor}
          />
        )}
      </ScrollView>
    </View>
  );
}
export default DashboardComponent;
