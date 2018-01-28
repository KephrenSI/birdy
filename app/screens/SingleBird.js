import React, {Component} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {Tile, List, ListItem} from 'react-native-elements';

class SingleBird extends Component {

    render() {
        const {ring_number, bird_name, latin_bird_name, ring_type, wing_size, weight, adiposity, sex, age, user_id} = this.props.navigation.state.params;


        return (
            <ScrollView>
                <Text>
                    {bird_name}
                </Text>
                <Text>
                    {latin_bird_name}
                </Text>
                <Text>
                    {ring_type}
                </Text>
                <Text>
                    {ring_number}
                </Text>
                <Text>
                    {age}
                </Text>
                <Text>
                    {sex}
                </Text>
                <Text>
                    {weight}
                </Text>
                <Text>
                    {adiposity}
                </Text>
                <Text>
                    {wing_size}
                </Text>
                <Text>
                    {user_id}
                </Text>
            </ScrollView>
        );
    }
}


export default SingleBird;
