import React, {Component} from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {Tile, List, ListItem} from 'react-native-elements';

class OiseauDetail extends Component {
    render() {
        const {picture, nom, latin, ordre, famille, vie, habitat, nidation, alimentation, distribution} = this.props.navigation.state.params;
        const {imageStyle, textStyle} = styles;

        return (
            <ScrollView>
                <Tile
                    imageSrc={{uri: picture.large}}
                    featured
                    title={`${nom.toUpperCase()}`}
                    caption={`${nom.toUpperCase()} ${latin.toUpperCase()}`}
                />

                <List>
                    <ListItem
                        title="Ordre"
                        rightTitle={ordre}
                        hideChevron
                    />
                    <ListItem
                        title="Famille"
                        rightTitle={famille}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Vie"
                        rightTitle={vie}
                        hideChevron
                    />
                </List>

                <Text
                    style={textStyle}
                >
                    {habitat}
                </Text>
                <Text
                    style={textStyle}
                >
                    {nidation}
                </Text>
                <Text
                    style={textStyle}
                >
                    {alimentation}
                </Text>

                <Image
                    resizeMode='contain'
                    style={imageStyle}
                    source={{uri: distribution}}
                />
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        marginTop: 5
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
        margin: 10
    }
}

export default OiseauDetail;
