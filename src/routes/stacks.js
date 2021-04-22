import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VideosScreen from '../components/home/videos';
import VideoScreen from '../components/home/videos/video';
import HomeScreen from '../components/home/articles';
import ArticleScreen from '../components/home/articles/article';


export const Stack = createStackNavigator();

export const VideosStack = () => {
    return (
    <Stack.Navigator
        initialRouteName="Videos_screen"
    >
        <Stack.Screen name="Videos_screen" component={VideosScreen}/>
        <Stack.Screen name="Video_screen" component={VideoScreen}/>
    </Stack.Navigator>
    )}

export const HomeStack = () => {
    return (
    <Stack.Navigator
        initialRouteName="Home_screen"
    >
        <Stack.Screen name="Home_screen" component={HomeScreen}/>
        <Stack.Screen name="Article_screen" component={ArticleScreen}/>
    </Stack.Navigator>
    )}
