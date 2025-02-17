import { Image,View,Text, StyleSheet, Platform, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const Home = () =>{
  return (
    <View style={styles.root} >
      <View style={styles.statusBarIPhone1313Pro} testID="1090:969">
      </View>
      <View style={styles.frame39} testID="1090:970">
        <View style={styles.frame41} testID="1090:971">
          <Text style={styles.helloKai} testID="1090:972">
            {`hello Kai,`}
          </Text>
           <Image source={require("../assets/images/profile.png")} style={styles.profile} ></Image>
        </View>
        <View style={styles.frame38} testID="1090:977">
          <View style={styles.frame35} testID="1090:978">
            <View style={styles.frame89} testID="1090:979">
              <View style={styles.feSearch} testID="1090:980">
                {/* <Vector/> */}
              </View>
              <View style={styles.group34} testID="1090:983">
                <Text style={styles.search} testID="1090:984">
                  {`Search`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frame1} testID="1090:985">
            <View style={styles.frame25} testID="1090:986">
              <Text style={styles.tranding} testID="1090:987">
                {`Tranding`}
              </Text>
            </View>
            <View style={styles.frame27} testID="1090:988">
              <Text style={styles.expensive} testID="1090:989">
                {`Expensive`}
              </Text>
            </View>
            <View style={styles.frame26} testID="1090:990">
              <Text style={styles.vagitarian} testID="1090:991">
                {`Vagitarian`}
              </Text>
            </View>
          </View>
          <Text style={styles.restaurants} testID="1090:992">
            {`Restaurants`}
          </Text>
        </View>
        
        <ImageBackground source={require("../assets/images/b.png")} style={styles.frame892} testID="1090:993">
        {/* <LinearGradient
        //   colors={['transparent', 'transparent']} // Gradient colors (from black to transparent)
          style={styles.gradient}
        > */}
          <View style={styles.frame13}  testID="1090:994">
            <View style={styles.frame72} testID="1090:995">
              <View style={styles.group79} testID="1090:996">
                {/* <WeuiLocationFilled/> */}
                <Text style={styles.roorkee} testID="1090:999">
                  {`Roorkee`}
                </Text>
              </View>
              {/* <Image url={ellipse10} width={3.47} height={3.47}/> */}
              <View style={styles.group78} testID="1090:1001">
                <Text style={styles.$35} testID="1090:1002">
                  {`3.5`}
                </Text>
                <View style={styles.frame74} testID="1090:1003">
                  {/* <Vector2/> */}
                </View>
              </View>
            </View>
            <Text style={styles.painAuChocolat} testID="1090:1005">
              {`Pain au Chocolat`}
            </Text>
          </View>
          {/* </LinearGradient> */}
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    profile:{
        height: 56.85,
        width: 56.85,
        overflow: 'hidden',
        borderRadius: 28.425,
       

    },
    gradient:{
        height: 487.41299,
    paddingTop: 31.2,
    paddingLeft: 20.8,
    paddingBottom: 31.2,
    paddingRight: 20.8,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    rowGap: 3.467,
    columnGap: 3.467,
    alignSelf: 'stretch',
    overflow: 'hidden', // Ensures that content respects border radius
    borderRadius: 26, 
    backgroundColor: 'rgba(196, 196, 196, 0.10196078568696976)',
     

    },
  root: {
    minHeight: 845.302,
    paddingTop: 0,
    paddingLeft: 14.8,
    paddingBottom: 23.92,
    paddingRight: 14.8,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 6.933,
    columnGap: 6.933,
    backgroundColor: 'rgba(14, 14, 14, 1)',
  },
  statusBarIPhone1313Pro: {
    width: 390.14401,
    height: 47.017,
  },
  helloKai: {
    width: 206.267,
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 37.44,
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  frame39: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 21.84,
    columnGap: 21.84,
    alignSelf: 'stretch',
  },
  frame41: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  frame38: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 24.613,
    columnGap: 24.613,
    alignSelf: 'stretch',
  },
  frame35: {
    height: 47.493,
    paddingTop: 14.747,
    paddingLeft: 13.867,
    paddingBottom: 10.747,
    paddingRight: 13.867,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 3.467,
    columnGap: 3.467,
    alignSelf: 'stretch',
    borderBottomLeftRadius: 35.013,
    borderBottomRightRadius: 35.013,
    borderTopLeftRadius: 35.013,
    borderTopRightRadius: 35.013,
    backgroundColor: 'rgba(217, 217, 217, 0.10196078568696976)',
  },
  frame89: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 11.787,
    columnGap: 11.787,
    alignSelf: 'stretch',
  },
  feSearch: {
    width: 25.832,
    paddingTop: 2.08,
    paddingLeft: 2.08,
    paddingBottom: 2.08,
    paddingRight: 2.08,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 3.467,
    columnGap: 3.467,
  },
  search: {
    width: 48.523,
    color: 'rgba(143, 143, 143, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  group34: {
    width: 48.523,
    height: 18,
  },
  tranding: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14.582,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 15.053,
  },
  frame1: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 7.28,
    columnGap: 7.28,
    alignSelf: 'stretch',
  },
  frame25: {
    flexDirection: 'row',
    height: 45.067,
    paddingTop: 14.907,
    paddingLeft: 22.187,
    paddingBottom: 11.907,
    paddingRight: 22.187,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
    borderBottomLeftRadius: 43.333,
    borderBottomRightRadius: 43.333,
    borderTopLeftRadius: 43.333,
    borderTopRightRadius: 43.333,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  expensive: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14.582,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 15.053,
  },
  frame27: {
    flexDirection: 'row',
    height: 45.067,
    paddingTop: 14.907,
    paddingLeft: 22.187,
    paddingBottom: 11.907,
    paddingRight: 22.187,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
    borderBottomLeftRadius: 43.333,
    borderBottomRightRadius: 43.333,
    borderTopLeftRadius: 43.333,
    borderTopRightRadius: 43.333,
    backgroundColor: 'rgba(217, 217, 217, 0.10196078568696976)',
  },
  vagitarian: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 14.582,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 15.053,
  },
  frame26: {
    flexDirection: 'row',
    height: 45.067,
    paddingTop: 14.907,
    paddingLeft: 22.187,
    paddingBottom: 11.907,
    paddingRight: 22.187,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
    borderRadius: 43.333,
    backgroundColor: 'rgba(217, 217, 217, 0.10196078568696976)',
  },
  restaurants: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 18.624,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  roorkee: {
    color: 'rgba(255, 255, 255, 0.800000011920929)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  frame892: {
    height: 487.41299,
    paddingTop: 31.2,
    paddingLeft: 20.8,
    paddingBottom: 31.2,
    paddingRight: 20.8,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    rowGap: 3.467,
    columnGap: 3.467,
    alignSelf: 'stretch',
    overflow: 'hidden', // Ensures that content respects border radius
    borderRadius: 26, 
    backgroundColor: 'rgba(196, 196, 196, 0.10196078568696976)',
  },
  frame13: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 1.387,
    columnGap: 1.387,
    alignSelf: 'stretch',
  },
  frame72: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 5.547,
    columnGap: 5.547,
  },
  group79: {
    width: 76.373,
    height: 18,
  },
  $35: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  group78: {
    width: 41.231,
    height: 18,
  },
  frame74: {
    paddingTop: 0.934,
    paddingLeft: 0.934,
    paddingBottom: 0.934,
    paddingRight: 0.934,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 4.671,
    columnGap: 4.671,
  },
  painAuChocolat: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 33.455,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});

export default Home;