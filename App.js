import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
//import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { Dimensions } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const labels = [
  '15/03/2020',
  '14/03/2020',
  '13/03/2020',
  '12/03/2020',
  '11/03/2020',
  '10/03/2020',
  '09/03/2020',
  '08/03/2020',
  '07/03/2020',
  '06/03/2020',
  '05/03/2020',
  '04/03/2020',
  '03/03/2020',
  '02/03/2020',
  '01/03/2020',
  '29/02/2020',
  '28/02/2020',
  '27/02/2020',
  '26/02/2020',
  '25/02/2020',
  '24/02/2020',
  '23/02/2020',
  '22/02/2020',
  '21/02/2020',
  '20/02/2020'
  ];
  const data = [
    561,
    574,
    703,
    770,
    689,
    560,
    714,
    469,
    419,
    431,
    519,
    531,
    534,
    523,
    578,
    575,
    651,
    669,
    750,
    749,
    824,
    819,
    838,
    825,
    841
  ];



export default function App() {
  return (
    <ImageBackground
    style={styles.background}
    source={require('./assets/image_gallery.jpeg')}
    >

    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}> MUS Museum </Text>
        <View style={
          {
            flex:1,
            paddingVertical: '10',
            }}>
          <Image
              style={styles.settings}
              source={require('./assets/haha.svg')}
          />
          </View>
      </View>

    
      <View style={
        {
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '4%',
          height: '90%',
          width: '100%',
          }}>
        <View style={
          {
            flex: 1,
            width: '95%',
            justifyContent: 'center',
            alignItems:'center',
            marginBottom: 100
            }}>
          <Text style={
            {
              textAlign: 'center',
              fontSize: 20,
              color: 'white'

            }}>Visits from 20 February to 15 March </Text>
          <LineChart
            data={{ labels: labels,
            datasets: [{ data: data }],
          }}
            width={Dimensions.get('window').width - 180}
            height={400}
            fromZero={true}
            chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#999999',
            backgroundGradientTo: '#999999',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
            style: { borderRadius: 12, },
            propsForBackgroundLines: {
              strokeWidth: 0
            },
            propsForDots: { r: '4', strokeWidth: '0', stroke: '#ffffff', }, }}
            bezier
            style={{ marginVertical: 5, borderRadius: 15, }}
            />
        </View>
        <View style={
          {
            flex: 1,
            flexDirection: 'row',
            width: '90%',
            }}>

          <View style={
            {
              flex: 1,
              alignContent: 'center'
              }}>
            <Text style={
            {
              textAlign: 'center',
              fontSize: 20,
              color: 'white'

            }}>Positive mentions of MUS on social media </Text>
            <BarChart
              data={{
                labels: ["First half of 2019","First half of 2020"],
                datasets: [
                  {
                    data: [
                    48,
                    40
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width-920} // from react-native
              height={220}
              fromZero={true}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForBackgroundLines: {
                  strokeWidth: 0
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
          <View style={
            {
              flex: 1,
              alignContent: 'center'
              }}>
            <Text style={
            {
              textAlign: 'center',
              fontSize: 20,
              color: 'white'

            }}>Number of group-bookings</Text>
            <BarChart
              data={{
                labels: ["First half of 2019","First half of 2020"],
                datasets: [
                  {
                    data: [
                    210,
                    42
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width-920} // from react-native
              height={220}
              fromZero={true}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForBackgroundLines: {
                  strokeWidth: 0
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </View>

      </View>
    </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(10,10,10,0.5)',
    alignItems: 'center',
    justifyContent: 'top',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  settings: {
    flex: 1,
    resizeMode: 'center',
    paddingTop: '10'

  },
  titleBar: {
    height: '8%',
    width: '100%',
    backgroundColor: 'rgba(10,10,10,0.5)',
    flexDirection: 'row',


},
titleText: {
  flex: 42,
  fontSize: 55,
  color: 'white'
}
});
