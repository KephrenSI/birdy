import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
// import { oiseaux } from '../config/data-oiseaux';

// import firebase from 'firebase';
import oiseaux from '../config/data-oiseaux.json';

class Encyclopedie extends Component {
  onLearnMore = (oiseau) => {
    this.props.navigation.navigate('Details', { ...oiseau });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {oiseaux.map((oiseau) => (
            <ListItem
              key={oiseau.id}
              
              avatar={{ uri: oiseau.picture.thumbnail }}
              title={`${oiseau.nom.toUpperCase()}`}
              subtitle={oiseau.latin}
              onPress={() => this.onLearnMore(oiseau)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Encyclopedie;
