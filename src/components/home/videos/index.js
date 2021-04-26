import React from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';

const VideosScreen = ({ navigation }) => {

    const renderVideos = () => {
        return (
            <Tile
                imageSrc={{ uri: 'https://picsum.photos/200/300' }}
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                icon={{name:'play-circle', type:'font-awesome', color:'#fff',size:50, marginTop:70}}
                contentContainerStyle={styles.contentContainerStyle}
                containerStyle={styles.containerStyle}
                titleStyle={{fontSize:15}}
                onPress={()=>navigation.navigate('VideoScreen',{
                    id:'123',
                    postData:{}
                })}
            />
        )
    }

    return (
        <ScrollView>
            <View style={{padding:20}}>
                <Text>Videos</Text>
                {renderVideos()}
            </View>
            {/* <Button 
                title="see video"
                onPress={()=> navigation.navigate('Video_screen')}
            /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e1e8ee',
        shadowColor:'rgba(0, 0, 0, .2)'
    },
    containerStyle: {
        width: '100%',
        height:250,
        marginBottom:15
    }
})

export default VideosScreen;