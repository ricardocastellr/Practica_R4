import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

import { Artist } from './types/artist-types';

interface Props {
  artists: Artist
}

export default class ArtistList extends Component<Props>{
  state = {
    dataSource: new ListView.DataSource({ rowHasChanged: (r1: Artist, r2: Artist) => r1 !== r2 })
  }

  updateDataSource = (data: Artist) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  handlePress(artist: Artist) {

  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist: Artist) => {
          return (
            <TouchableOpacity onPress={() => this.handlePress(artist)}>
              <ArtistBox artist={artist as any} />
            </TouchableOpacity>
          )
        }
        }
      />
    )
  }
}
