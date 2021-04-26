import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
    Appbar, TextInput, Divider, Button, Title
} from 'react-native-paper';

const ProfileScreen = () => {
    return (
        <ScrollView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => alert('back')} />
                <Appbar.Content title='profile' subtitle='Redwire' />
            </Appbar.Header>
            <View style={{ padding: 20 }}>
                <Title>Your user Login data</Title>
                <TextInput
                    label='email'
                    value={''}
                    onChangeText={text => console.log('hey')}
                    mode='outlined'
                />
                <TextInput
                    label='password'
                    value={''}
                    onChangeText={text => console.log('hey')}
                    mode='outlined'
                />
                <Button 
                    mode='contained'
                    onPress={()=>console.log('pressed')}
                >Update
                </Button>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen;