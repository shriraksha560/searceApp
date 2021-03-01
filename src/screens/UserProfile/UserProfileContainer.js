import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import UserProfileComponent from './UserProfileComponent';
import {ConsoleLogs} from '../../utils/ConsoleLogs';

function UserProfileContainer({navigation, route}) {
  // const {navigation} = props;
  const {id, name, image, link, reputation} = route.params;
  ConsoleLogs(tag, 'ID :' + id);
  ConsoleLogs(tag, 'NAME :' + name);
  ConsoleLogs(tag, 'IMAGE :' + image);
  ConsoleLogs(tag, 'LINK :' + link);
  ConsoleLogs(tag, 'REPUTATION :' + reputation);

  const [tags, setTags] = useState([]);
  const [badge, setBadge] = useState([]);
  const [questions, setQuestions] = useState([]);
  function callUserProfileAPI() {
    ConsoleLogs(tag, 'callUserProfileAPI');

    fetch(
      `https://api.stackexchange.com/2.2/users/${id}?order=desc&sort=reputation&site=stackoverflow`,
    )
      .then((response) => response.json())
      .then((json) => {
        // ConsoleLogs(tag, 'BADGE JSON :' + JSON.stringify(json));

        var items = json.items;
        ConsoleLogs(tag, 'ITEMS :' + items);
        const tasks = Object.values(json.items);
        ConsoleLogs(tag, 'BADGE :' + tasks);
        //  setBadge(tasks);
      })
      .catch((error) => {
        ConsoleLogs(tag, 'error' + error);
      });
  }
  function callTagsOnUsersAPI() {
    ConsoleLogs(tag, 'callTagsOnUsersAPI');
    fetch(
      `https://api.stackexchange.com/2.2/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`,
    )
      .then((response) => response.json())
      .then((json) => {
        // ConsoleLogs(tag, ' TAG JSON' + JSON.stringify(json));
        const tasks = Object.values(json.items);
        // ConsoleLogs(tag, ' TAG Tasks :' + tasks);
        setTags(tasks);
      })
      .catch((error) => {
        ConsoleLogs(tag, 'error' + error);
      });
  }
  function callQuestionsOnUsersAPI() {
    ConsoleLogs(tag, 'callQuestionsOnUsersAPI');

    fetch(
      'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow',
    )
      .then((response) => response.json())
      .then((json) => {
        // ConsoleLogs(tag, 'JSON' + JSON.stringify(json));
        const tasks = Object.values(json.items);
        // ConsoleLogs(tag, 'Tasks :' + tasks);
        setQuestions(tasks);
      })
      .catch((error) => {
        ConsoleLogs(tag, 'error' + error);
      });
  }
  useEffect(() => {
    callUserProfileAPI();
    callTagsOnUsersAPI();
    callQuestionsOnUsersAPI();
  });

  let tag = 'UserProfileContainer.js';
  return (
    <UserProfileComponent
      navigation={navigation}
      tag={tag}
      id={id}
      name={name}
      image={image}
      link={link}
      reputation={reputation}
      tags={tags}
      badge={badge}
      questions={questions}
    />
  );
}
export default UserProfileContainer;
