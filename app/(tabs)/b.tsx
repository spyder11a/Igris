import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
} from "react-native";
import Svg, { Circle, Rect, Path } from "react-native-svg";




const ReviewInput = () => {
 

  return (
    <ScrollView>
     <View style={styles.root} >
      <View style={styles.frame116} testID="1293:182">
        <View style={styles.frame114} testID="1293:183">
        <Svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
  <Path d="M7.7068 1.38672L1.4668 7.62672L7.7068 13.8667" stroke="white" strokeWidth={2.08} strokeLinecap="round" strokeLinejoin="round"/>
</Svg>
          <View style={styles.group46} testID="1293:186">
            <View style={styles.frame113} testID="1293:187">
              <Image  source={require("../../assets/images/profile.png")} style={styles.profile}  />
              <View style={styles.frame112} testID="1293:191">
                <Text style={styles.chocolateChips} testID="1293:192">
                  {`Chocolate Chips`}
                </Text>
                <Text style={styles.miltonAbel} testID="1293:193">
                  {`Milton Abel`}
                </Text>
              </View>
            </View>
          </View>
          <Svg  width="30" height="30" viewBox="0 0 30 30" fill="none">
  <Path d="M14.9734 26.2027C14.6135 26.2036 14.2569 26.1333 13.9243 25.9959C13.5916 25.8584 13.2894 25.6566 13.0351 25.4019L3.66208 16.0289C2.92165 15.2804 2.33757 14.3921 1.94386 13.4156C1.55016 12.4392 1.3547 11.3941 1.36888 10.3414C1.37602 9.37666 1.57341 8.4228 1.94977 7.53446C2.32612 6.64612 2.87403 5.84076 3.56212 5.16451C4.25021 4.48825 5.06495 3.9544 5.95968 3.59351C6.85442 3.23263 7.81156 3.0518 8.77628 3.06141C9.75828 3.05152 10.7323 3.23893 11.6405 3.61252C12.5487 3.98612 13.3726 4.5383 14.0634 5.23631L14.2272 5.40011C14.6393 5.81222 15.3075 5.81222 15.7196 5.40011V5.40011C17.0081 4.07748 18.7322 3.26662 20.5727 3.11771C22.4132 2.9688 24.2452 3.49193 25.7296 4.59021C26.5745 5.2409 27.2712 6.06415 27.7731 7.00513C28.275 7.94611 28.5706 8.98322 28.6404 10.0474C28.7101 11.1116 28.5523 12.1784 28.1775 13.1769C27.8027 14.1753 27.2195 15.0824 26.4667 15.8378L16.9117 25.4019C16.6573 25.6566 16.3551 25.8584 16.0225 25.9959C15.6898 26.1333 15.3333 26.2036 14.9734 26.2027ZM8.73988 4.87231C7.29346 4.87083 5.9032 5.43216 4.86328 6.43751C4.33312 6.9476 3.9115 7.55958 3.62377 8.2367C3.33604 8.91381 3.18811 9.64209 3.18888 10.3778C3.18091 11.1871 3.33365 11.9899 3.63826 12.7397C3.94287 13.4895 4.39328 14.1714 4.96338 14.7458L14.3364 24.1188C14.421 24.2041 14.5216 24.2718 14.6325 24.318C14.7434 24.3642 14.8624 24.388 14.9825 24.388C15.1026 24.388 15.2216 24.3642 15.3324 24.318C15.4433 24.2718 15.544 24.2041 15.6286 24.1188L25.1927 14.5456C25.7541 13.9723 26.1878 13.2868 26.4654 12.534C26.743 11.7811 26.8582 10.9781 26.8034 10.1776C26.7548 9.3689 26.532 8.58025 26.1504 7.86562C25.7687 7.15098 25.2372 6.52725 24.5921 6.03711C23.4602 5.20254 22.0634 4.80793 20.6621 4.9268C19.2609 5.04566 17.9506 5.6699 16.9754 6.68321L15.6195 8.07551C15.5349 8.1608 15.4342 8.2285 15.3233 8.2747C15.2125 8.3209 15.0935 8.34468 14.9734 8.34468C14.8533 8.34468 14.7343 8.3209 14.6234 8.2747C14.5125 8.2285 14.4119 8.1608 14.3273 8.07551L12.7803 6.52851C11.7148 5.47225 10.2766 4.87738 8.77628 4.87231H8.73988Z" fill="white" fill-opacity="0.9"/>
</Svg>
        </View>
        <View style={styles.frame115} testID="1293:197">
          <View style={styles.frame65} testID="1293:198">
            <View style={styles.frame45} testID="1293:199">
              <View style={styles.frame13} testID="1293:200">
                <View style={styles.frame66} testID="1293:201">
                  {/* <WeuiLocationFilled/> */}
                  <Text style={styles.fortNegen} testID="1293:204">
                    {`Fort Negen`}
                  </Text>
                </View>
                <Text style={styles.painAuChocolat} testID="1293:205">
                  {`Pain au Chocolat`}
                </Text>
              </View>
              <TouchableOpacity style={styles.frame67} testID="1293:206">
                <Text style={styles.visitNow} testID="1293:208">
                  {`Visit Now`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.frame71} testID="1293:209">
            <Text style={styles.steakTartareBecamePopularInThe19ThCenturyInNewYorkItWasOriginallyMadeWithHamburgSteakBecauseOfThe} testID="1293:210">
              {`Steak tartare became popular in the 19th century in New York. It was originally made with hamburg steak because of the`}
            </Text>
          </View>
        </View>
      </View>
    </View>

    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  profile:{
    height:42.64,
    width:42.64,
    resizeMode: 'contain',
    overflow: 'hidden',
    borderRadius: 21.32,

  },
  root: {
    flexDirection: 'row',
    width: 390,
    paddingTop: 51.653,
    paddingLeft: 0,
    paddingBottom: 26,
    paddingRight: 0,
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
    backgroundColor:'#000000'
  },
  chocolateChips: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  miltonAbel: {
    alignSelf: 'stretch',
    color: 'rgba(255, 255, 255, 0.800000011920929)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  frame116: {
    width: 390,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 537.67999,
    columnGap: 537.67999,
    flexShrink: 0,
  },
  frame114: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingLeft: 29.467,
    paddingBottom: 0,
    paddingRight: 29.467,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  group46: {
    width: 238.983,
    height: 41.947,
  },
  frame113: {
    flexDirection: 'row',
    width: 238.983,
    alignItems: 'center',
    rowGap: 7.627,
    columnGap: 7.627,
  },
  frame112: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 1.387,
    columnGap: 1.387,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  fortNegen: {
    width: 78,
    height: 17.68,
    color: 'rgba(255, 255, 255, 0.6000000238418579)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  frame115: {
    paddingTop: 0,
    paddingLeft: 20.8,
    paddingBottom: 0,
    paddingRight: 20.8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 10.053,
    columnGap: 10.053,
    alignSelf: 'stretch',
  },
  frame65: {
    paddingTop: 11.44,
    paddingLeft: 11.787,
    paddingBottom: 11.44,
    paddingRight: 11.787,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 3.467,
    columnGap: 3.467,
    borderBottomLeftRadius: 15.6,
    borderBottomRightRadius: 15.6,
    borderTopLeftRadius: 15.6,
    borderTopRightRadius: 15.6,
    backgroundColor: 'rgba(75, 75, 75, 0.3019607961177826)',
  },
  frame45: {
    width: 282.53299,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 13.173,
    columnGap: 13.173,
  },
  frame13: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 2.427,
    columnGap: 2.427,
    alignSelf: 'stretch',
  },
  frame66: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
  },
  painAuChocolat: {
    width: 175.067,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 21.493,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  visitNow: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'start',
    fontFamily: 'Inter',
    fontSize: 13.867,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  frame67: {
    width: 282.53299,
    height: 39.52,
    backgroundColor: "#ffffff",
    paddingTop: 11.76,
    paddingLeft: 14.8,
    paddingBottom: 11.76,
    borderRadius: 11.44,
  },
  steakTartareBecamePopularInThe19ThCenturyInNewYorkItWasOriginallyMadeWithHamburgSteakBecauseOfThe: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: 'rgba(255, 255, 255, 0.9019607901573181)',
    fontFamily: 'Inter',
    fontSize: 14.56,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18.72,
  },
  frame71: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingLeft: 6.24,
    paddingBottom: 0,
    paddingRight: 6.24,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3.467,
    columnGap: 3.467,
    alignSelf: 'stretch',
  },
});

export default ReviewInput;
