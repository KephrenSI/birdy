
import React, { Component } from 'react';
import {View, Button } from 'react-native';
import { Root } from './config/router';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import firebase from 'firebase';

export default class App extends Component{

    state = {loggedIn:null, clicked:true};

    onButtonPress = () => {
        this.setState({
            clicked: false
        });
    };

    onButtonPressed = () => {
        this.setState({
            clicked: true
        });
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyChwT71DqRtA2HJo259Kc5mkLzGSGM3rXk",
            authDomain: "birdy-5494b.firebaseapp.com",
            databaseURL: "https://birdy-5494b.firebaseio.com",
            projectId: "birdy-5494b",
            storageBucket: "",
            messagingSenderId: "693671389056"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }
            else {
                this.setState({loggedIn:false});
            }
        });
    }

    render(){
        if (this.state.loggedIn) {
            return <Root />;
        } else if(this.state.clicked) {
            return (
                <View>
                    <SignIn />
                    <Button
                        title='Pas encore inscrit ?'
                        onPress={() => this.onButtonPress()}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <SignUp />
                    <Button
                        title='Déjà inscrit ?'
                        onPress={() => this.onButtonPressed()}
                    />


                </View>
            );
        }
    }
}
