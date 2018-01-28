import React, {Component} from 'react';
import {ScrollView, View, Text, Field, Button, TextInput, FormInput, FormLabel, FormValidationMessage} from 'react-native'; // 'custom'
import firebase from 'firebase';

class AddLocation extends Component {

    pushFirebase() {
        const {navigate} = this.props.navigation;
        const fb = firebase.database().ref();

        const capture_type = this.state.capture_type;
        const capture_date = this.state.capture_date;
        const map = this.state.map;
        const address = this.state.address;
        const user_id = firebase.auth().currentUser.uid;

        data = {capture_type, capture_date, map, address, user_id};
        fb.child('locations/').push(data);

        navigate('AddBirds');
    }

    constructor(props) {
        super(props);
        this.state = {capture_type: '', capture_date: '', map: '', address: ''};
    }

    render() {

        return (
            <ScrollView>
                <Text>Type de capture</Text>
                <TextInput
                    onChangeText={(capture_type) => this.setState({capture_type})}
                    value={this.state.capture_type}
                    name="capture_type"
                />
                <Text>Date</Text>
                <TextInput
                    onChangeText={(capture_date) => this.setState({capture_date})}
                    value={this.state.capture_date}
                    name="capture_date"
                />
                <Text>Carte</Text>
                <TextInput
                    onChangeText={(map) => this.setState({map})}
                    value={this.state.map}
                    name="map"
                />
                <Text>Adresse</Text>
                <TextInput
                    onChangeText={(address) => this.setState({address})}
                    value={this.state.address}
                    name="address"
                />

                <View>
                    <Button
                        title='Suivant'
                        onPress={() => this.pushFirebase()}
                    />
                </View>

            </ScrollView>
        );
    }
}

export default AddLocation;
