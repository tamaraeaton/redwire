import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';


const ContentShow = ({params}) => {

    // const text = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`

    return(
        <View>
            <View style={{padding:10}}>
            <Text style={styles.articleTitle}>
                {params.postData.title}
            </Text>
            <Text style={styles.articleContent}>
                {params.postData.content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n')}
            </Text>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    articleTitle:{
        fontSize:30,
        marginBottom:30,
        fontWeight:'300',
        color:'#444444'
    },
    articleContent:{
        fontSize:18,
        color:'#444444'
    }
})

export default ContentShow;