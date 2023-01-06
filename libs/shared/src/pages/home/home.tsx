import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from '../../styles/text/text';
import { View } from '../../styles/view/view';
import Api from '@api';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
    Api.request();
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Text className="text-center font-bold text-4xl text-blue-600" testID="heading">
                        Text using NativeWind
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Home;
