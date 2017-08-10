import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {ListView} from '@shoutem/ui';
import AbstractGemScreen from '../../AbstractGem.screen';
import {FeedElementComponent} from '../gem/components/FeedElement.component';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }
});

export class ListSaveScreen extends AbstractGemScreen {
    static navigationOptions = {
        header: null
    };

    renderRowView = (rowData) => {
        return <FeedElementComponent gemData={rowData}/>;
    };

    render() {
        return super.render(
            <View style={styles.container}>
                <ListView data={this.props.saveStore}
                          style={{listContent: {backgroundColor: 'transparent'}}}
                          renderRow={this.renderRowView}/>
            </View>
        , true);
    }
}

const mapStores = (store) => {
    return {
        saveStore: store.saveReducer
    };
};

export default connect(mapStores)(ListSaveScreen);
