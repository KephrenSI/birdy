import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Field, Spinner} from '../../src/components/common';
import MainStyles from '../../src/components/styles/MainStyles';
import firebase from 'firebase';

class SignIn extends Component {
    state = {email: '', password: '', error: '', loading: false};


    onButtonPress() {
        this.setState({error: '', loading: true});

        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
        })
    }

    onLoginFail() {
        this.setState({
            error: 'Veuillez vérifier l\'email et le mot de passe car nous rencontrons une erreur pour vous connecter',
            loading: false,
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <View>
                <Button
                    title='Se connecter'
                    onPress={this.onButtonPress.bind(this)}>
                </Button>
            </View>
        );
    }

    render() {
        const {buttonContainerStyle} = MainStyles;
        return (
            <View>
                <Field
                    label='Email'
                    placeholder='example@test.com'
                    value={this.state.email}
                    onChangeText={text => this.setState({email: text})}/>

                <Field
                    autoCorrect={false}
                    secureTextEntry
                    label='Password'
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}/>

                <View>
                    {this.renderButton()}
                </View>
                <Text>
                    {this.state.message}
                    {this.state.error}
                </Text>
            </View>
        )
    }
}

export default SignIn;