import React, {useEffect} from 'react';
import { 
    View, Text, 
    Button, ScrollView, 
    TouchableOpacity, StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {getArticles} from '../../../store/actions';

    
const HomeScreen = ({ navigation }) => {
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getArticles())
    },[dispatch])

    const renderCard = () => {
        return (
        <TouchableOpacity
            onLongPress={()=>navigation.navigate('Article_screen',{
                id:'1234',
                postData: {title:'lkjlk', content: ''}
            })}
        >
            <Card>
                <Card.Title style={styles.cardTitle}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                </Card.Title>
           
            <Card.Divider/>
            <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
            </Text>
            </Card>
        </TouchableOpacity>
        )}

    return (
        <ScrollView>
            {renderCard()}
            {renderCard()}
            {renderCard()}
            {renderCard()}
            {renderCard()}
            {renderCard()}
            {renderCard()}
            {renderCard()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardTitle:{
        fontSize:20,
        textAlign:'left'
    },
    cardText:{
        marginBottom:10,
        marginTop:10
    }
})

export default HomeScreen;