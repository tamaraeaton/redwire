import React from 'react';
import {
    View, Text, 
    ScrollView, ActivityIndicator
} from 'react-native';
import { Image } from 'react-native-elements';

import ContentShow from '../../../../utils/contentShow';
const image = require('./imageTest.jpg')
const ArticleScreen = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    source={{ uri: 'https://picsum.photos/200/300.jpg' }}
                    style={{ width: '100%', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Image
                    containerStyle={{}}
                    onLongPress={() => console.log("onLongPress()")}
                    onPress={() => console.log("onPress()")}
                    placeholderStyle={{}}
                    transitionDuration={1000}
                    source={{
                        uri:
                            "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png"
                    }}
                    style={{ width: 200, height: 200 }}
                />
                <ContentShow />
            </View>
        </ScrollView>
    )
}
export default ArticleScreen;