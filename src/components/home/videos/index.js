import React from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import { Tile } from 'react-native-elements';

const VideosScreen = ({ navigation }) => {

    const renderVideos = () => {
        <Tile
            imageSrc={'https://picsum.photos/200/300'}
            title={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        />
    }

    return (
        <ScrollView>
            <View>
                <Text>Videos</Text>
                <Tile
                    activeOpacity={0.5}
                    caption="Tile caption"
                    captionStyle={{}}
                    containerStyle={{}}
                    contentContainerStyle={{}}
                    height={300}
                    iconContainerStyle={{}}
                    imageContainerStyle={{}}
                    imageProps={{}}
                    imageSrc="SampleImage"
                    onPress={() => console.log("imageProps()")}
                    overlayContainerStyle={{}}
                    titleStyle={{}}
                    width={400}
                />
                {renderVideos()}
            </View>
            {/* <Button 
                title="see video"
                onPress={()=> navigation.navigate('Video_screen')}
            /> */}
        </ScrollView>
    )
}

export default VideosScreen;