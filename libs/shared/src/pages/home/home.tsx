import React from 'react';
import { SafeAreaView, StatusBar, View, Text as RNText } from 'react-native';
import { styled } from 'nativewind';

const Text = styled(RNText, 'font-bold text-4xl');

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text
                        className="text-center text-blue-600"
                        testID="heading"
                    >
                        Text using NativeWind
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Home;
