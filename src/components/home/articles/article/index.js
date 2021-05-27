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
import {useRoute} from '@react-navigation/native'

// const image = require('./imageTest.jpg')

const ArticleScreen = () => {
    const {params} = useRoute();
    return (

        <ScrollView>
            <View>
                <Image
                    source={{ uri: params.postData.image }}
                    style={{ width: '100%', height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <ContentShow params={params}/>
            </View>
        </ScrollView>

    )
}
export default ArticleScreen;