import React from 'react';
import { 
    View, Text, 
    ScrollView, ActivityIndicator, Image
} from 'react-native';
import ContentShow from '../../../../utils/contentShow';

const ArticleScreen = () => {
    return (
        <ScrollView>
            <View>
                <Image 
                    source={{uri:'https://picsum.photos/200/300.jpg'}}
                    style={{width:'100%', height:200}}
                    PlaceholderContent={<ActivityIndicator/>}
                />
                <ContentShow/>
            </View>
        </ScrollView>
    )
}

export default ArticleScreen;