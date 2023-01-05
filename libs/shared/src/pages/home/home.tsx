import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text testID="heading">Shared</Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Home;
