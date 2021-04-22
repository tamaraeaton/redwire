import React from 'react';
import { View, Text, Button } from 'react-native';

const VideosScreen = ({navigation}) => {
    return (
        <View>
            <Text>Videos</Text>
            <Button 
                title="see video"
                onPress={()=> navigation.navigate('Video_screen')}
            />
        </View>
    )
}

export default VideosScreen;