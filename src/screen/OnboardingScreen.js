import React from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <TouchableOpacity 
        style={{ marginHorizontal:10, marginLeft: 20 }}
        {...props}
    >
        <Text style={{ fontSize:16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity 
        style={{ marginHorizontal:10, marginRight: 20 }}
        {...props}
    >
        <Text style={{ fontSize:16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity 
        style={{ marginHorizontal:10, marginRight: 20 }}
        {...props}
    >
        <Text style={{ fontSize:16 }}>Done</Text>
    </TouchableOpacity>
);

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
           style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
           }}
        />
    );
}

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.navigate("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../assets/images/onboarding/Image1.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../assets/images/onboarding/Image2.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../../assets/images/onboarding/Image3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});