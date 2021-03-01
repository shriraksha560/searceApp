import React, {useState} from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ConsoleLogs} from '../../utils/ConsoleLogs';
import DashboardComponent from './DashboardComponent';

function DashboardContainer(props) {
  const {navigation} = props;

  const [data, setData] = useState([]);

  function getFeaturedQuestionsAPI() {
    ConsoleLogs(tag, 'getFeaturedQuestionsAPI');
    fetch(
      'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow',
    )
      .then((response) => response.json())
      .then((json) => {
        //  ConsoleLogs(tag, 'JSON' + JSON.stringify(json));
        const tasks = Object.values(json.items);
        // ConsoleLogs(tag, 'Tasks :' + tasks);
        setData(tasks);
      })
      .catch((error) => {
        ConsoleLogs(tag, 'error' + error);
      });
  }
  useEffect(() => {
    getFeaturedQuestionsAPI();
  }, []);


 
  const tag = 'DashboardContainer.js';
  return (
    <DashboardComponent
      navigation={navigation}
      tag={tag}
      data={data}
      setData={setData}
    />
  );
}
export default DashboardContainer;
