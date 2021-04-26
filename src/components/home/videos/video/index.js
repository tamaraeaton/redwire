import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ContentShow from '../../../../utils/contentShow';
import Youtube from 'react-native-youtube';
// import { WebView } from 'react-native-webview';

const VideoScreen = () => {
    return (
        <ScrollView>
            <View>
                <Youtube 
                    apiKey='AIzaSyD9VvrK1fINUFiNT4bz7OovGvB3Ub1xjxE'
                    videoId='N_lrrq_opng'
                    play={false}

                    onReady={e => console.log('ready')}
                    onChangeState={e => console.log(e)}
onError={error => console.log(error)}

                    style={{alignSelf:'stretch', height:300}}
                />
                {/* <WebView
                    source={{ uri: 'https://infinite.red' }}
                    style={{ marginTop: 20 }}
                /> */}
                <ContentShow />
            </View>
        </ScrollView>
    )
}

export default VideoScreen;