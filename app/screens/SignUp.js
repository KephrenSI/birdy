import React, {Component} from 'react';
import {View, Text, Button, TextInput, ScrollView} from 'react-native';
import {Field, Spinner} from '../../src/components/common';
import MainStyles from '../../src/components/styles/MainStyles';
import firebase from 'firebase';

class SignUp extends Component {

    pushFirebase() {
        const fb = firebase.database().ref();

        const last_name = this.state.last_name;
        const first_name = this.state.first_name;
        const user_name = this.state.user_name;
        const email = this.state.email;
        const password = this.state.password;
        const bagueur_id = this.state.bagueur_id;


        data = {last_name, first_name, user_name, email, password, bagueur_id};
        fb.child('users/').push(data);
    }

    onButtonPress() {

        this.setState({error: '', loading: true});

        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.pushFirebase());

    }



    state = {email: '', password: '', error: '', loading: false};

    constructor(props) {
        super(props);
        this.state = {last_name: '', first_name: '', user_name: '', email: '', password: '', bagueur_id: ''};
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <View>
                <Button
                    title='S enregistrer'
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


                    <Text>Nom</Text>
                    <TextInput
                        onChangeText={(last_name) => this.setState({last_name})}
                        value={this.state.last_name}
                        name="last_name"
                    />
                    <Text>Prénom</Text>
                    <TextInput
                        onChangeText={(first_name) => this.setState({first_name})}
                        value={this.state.first_name}
                        name="first_name"
                    />
                    <Text>Nom d'utilisateur</Text>
                    <TextInput
                        onChangeText={(user_name) => this.setState({user_name})}
                        value={this.state.user_name}
                        name="user_name"
                    />
                    <Text>Numéro de bagueur unique</Text>
                    <TextInput
                        onChangeText={(bagueur_id) => this.setState({bagueur_id})}
                        value={this.state.bagueur_id}
                        name="bagueur_id"
                    />
                    <Text>Email</Text>
                    <TextInput
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        name="email"
                    />
                    <Text>Mot de passe</Text>
                    <TextInput
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        name="password"
                    />
                    <View>
                        <Button
                            title='azerty'
                            onPress={() => this.onButtonPress()}
                        />
                    </View>

                <Text>
                    {this.state.message}
                    {this.state.error}
                </Text>
            </View>
        )
    }
}

export default SignUp;