import React, {Component} from 'react';
import { View, ListView } from 'react-native';
import { ListItem } from 'react-native-elements';

import firebase from 'firebase';

class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
        this.birdsRef = this.getRef().child('birds');
    }

    singlebird = (bird) => {
        this.props.navigation.navigate('Details', { ...bird });
    };

    getRef() {
        return firebase.database().ref();
    }

    listenForItems(birdsRef) {
        birdsRef.on('value', (snap) => {

            // get children as an array
            var birds = [];
            snap.forEach((child) => {
                birds.push({
                    age: child.val().age,
                    adiposity: child.val().adiposity,
                    bird_name: child.val().bird_name,
                    latin_bird_name: child.val().latin_bird_name,
                    ring_number: child.val().ring_number,
                    ring_type: child.val().ring_type,
                    sex: child.val().sex,
                    weight: child.val().weight,
                    wing_size: child.val().wing_size,
                    user_id: child.val().user_id,
                    _key: child.key
                });
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(birds)
            });

        });
    }

    componentDidMount() {
        this.listenForItems(this.birdsRef);
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(bird) => this._renderItem(bird)}
                    enableEmptySections={true}
                />
            </View>
        )
    }
    _renderItem(bird) {

        return (
            <View>
                <ListItem
                    key={bird.user_id}
                    title={bird.bird_name}
                    subtitle={bird.user_id}
                    onPress={() => this.singlebird(bird)}
                />
            </View>
        );
    }
}

export default Accueil;
