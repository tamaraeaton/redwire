import React from 'react';
import {
    View, Text, Image,
    ScrollView, ActivityIndicator
} from 'react-native';
// ISS - Image not working when pulling from 'react-native-elements'
// import { Image } from 'react-native-elements';
// import Image from 'react-native-elements';
// import * from 'react-native-elements';

import ContentShow from '../../../../utils/contentShow';

// const image = require('./imageTest.jpg')

const ArticleScreen = () => {
    return (

        <ScrollView>
            <View>
                <Image
                    source={{ uri: 'https://picsum.photos/200/300.jpg' }}
                    style={{ width: '100%', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <ContentShow />
            </View>
        </ScrollView>

    )
}
export default ArticleScreen;