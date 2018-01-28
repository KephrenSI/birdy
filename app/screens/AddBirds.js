import React, {Component} from 'react';
import {ScrollView, View, Text, Field, Button, TextInput, FormInput, FormLabel, FormValidationMessage} from 'react-native';

import firebase from 'firebase';

class AddBirds extends Component {

    pushFirebaseRepeat() {
        const {navigate} = this.props.navigation;
        const fb = firebase.database().ref();

        const ring_number = this.state.ring_number;
        const bird_name = this.state.bird_name;
        const latin_bird_name = this.state.latin_bird_name;
        const ring_type = this.state.ring_type;
        const wing_size = this.state.wing_size;
        const weight = this.state.weight;
        const adiposity = this.state.adiposity;
        const sex = this.state.sex;
        const age = this.state.age;
        const user_id = firebase.auth().currentUser.uid;

        data = {ring_number, bird_name, latin_bird_name, ring_type, wing_size, weight, adiposity, sex, age, user_id};
        fb.child('birds/').push(data);

        navigate('AddBirds');
    }

    pushFirebaseEnd() {
        const {navigate} = this.props.navigation;
        const fb = firebase.database().ref();

        const ring_number = this.state.ring_number;
        const bird_name = this.state.bird_name;
        const latin_bird_name = this.state.latin_bird_name;
        const ring_type = this.state.ring_type;
        const wing_size = this.state.wing_size;
        const weight = this.state.weight;
        const adiposity = this.state.adiposity;
        const sex = this.state.sex;
        const age = this.state.age;
        const user_id = firebase.auth().currentUser.uid;

        data = {ring_number, bird_name, latin_bird_name, ring_type, wing_size, weight, adiposity, sex, age, user_id};
        fb.child('birds/').push(data);

        navigate('Accueil');
    }

    constructor(props) {
        super(props);
        this.state = {ring_number: '', bird_name: '', latin_bird_name: '', ring_type: '', wing_size: '', weight: '', adiposity: '', sex: '', age: ''};
    }

    render() {

        return (
            <ScrollView>
                <Text>Numéro de bague</Text>
                <TextInput
                    onChangeText={(ring_number) => this.setState({ring_number})}
                    value={this.state.ring_number}
                    name="numéro"
                />
                <Text>Nom</Text>
                <TextInput
                    onChangeText={(bird_name) => this.setState({bird_name})}
                    value={this.state.bird_name}
                    name="nom"
                />
                <Text>Nom latin</Text>
                <TextInput
                    onChangeText={(latin_bird_name) => this.setState({latin_bird_name})}
                    value={this.state.latin_bird_name}
                    name="nom_latin"
                />
                <Text>Type de bague</Text>
                <TextInput
                    onChangeText={(ring_type) => this.setState({ring_type})}
                    value={this.state.ring_type}
                    name="type_de_bague"
                />
                <Text>Dimention de l'aile</Text>
                <TextInput
                    onChangeText={(wing_size) => this.setState({wing_size})}
                    value={this.state.wing_size}
                    name="dimention_de_l_aile"
                />
                <Text>Poids</Text>
                <TextInput
                    onChangeText={(weight) => this.setState({weight})}
                    value={this.state.weight}
                    name="poids"
                />
                <Text>Adiposité</Text>
                <TextInput
                    onChangeText={(adiposite) => this.setState({adiposite})}
                    value={this.state.adiposite}
                    name="adiposite"
                />
                <Text>Sexe</Text>
                <TextInput
                    onChangeText={(sex) => this.setState({sex})}
                    value={this.state.sex}
                    name="sex"
                />
                <Text>Âge</Text>
                <TextInput
                    onChangeText={(age) => this.setState({age})}
                    value={this.state.age}
                    name="age"
                />
                <View>
                    <Button
                        title='Ajouter et recommencer'
                        onPress={() => this.pushFirebaseRepeat()}
                    />
                    <Button
                        title='Ajouter et terminer'
                        onPress={() => this.pushFirebaseEnd()}
                    />
                </View>

            </ScrollView>
        );
    }
}

export default AddBirds;
