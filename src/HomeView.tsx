import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Artist } from './types/artist-types'

import Artistlist from './ArtistList'
import { getMusicData } from './api-client'

export default class HomeView extends Component<Artist> {
    state = {
        artists: null
    }
    
    componentDidMount () {
        getMusicData(). then(data => this.setState({ artists: data}))
    }
    render() {
        const artists = this.state.artists

        return (
            <View style={styles.container}>
                {artists && <Artistlist artists={artists}/>}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    }    
})
