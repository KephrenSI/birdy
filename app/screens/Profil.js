import React, {Component} from 'react';
import {ScrollView, Button} from 'react-native';
import {Tile, List, ListItem} from 'react-native-elements';
import {profil} from '../config/data';

import firebase from 'firebase';

class Profil extends Component {

    handleSettingsPress = () => {
        this.props.navigation.navigate('SignUp');
    };

    render() {
        const {buttonStyle} = styles;
        const {picture, email, name, phone} = this.props;

        return (
            <ScrollView>

                <Tile
                    imageSrc={{uri: picture.large}}
                    featured
                    title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                    caption={email}
                />

                <Button
                    onPress={() => firebase.auth().signOut()}
                    title='Log Out'
                    style={buttonStyle}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={phone}
                        hideChevron
                    />
                    <ListItem
                        title="Username"
                        rightTitle={this.props.login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={this.props.dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={this.props.location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

Profil.defaultProps = {...profil};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
    }
};

export default Profil;
