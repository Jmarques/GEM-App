import React from 'react';
import {StyleSheet, View} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';
import FeedElementComponent from './FeedElement.component';
import QuickAddGemComponent from './QuickAddGem.component';

const styles = StyleSheet.create({
    container: {
        paddingTop: 6,
        paddingBottom: 6
    }
});

const listGems = [
    {
        title: 'Salut',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Ça va',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Bien?',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Salut',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Ça va',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Bien?',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Salut',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Ça va',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    },
    {
        title: 'Bien?',
        image: `http://loremflickr.com/320/240/duck/all?key=${Math.random()}`
    }
];

const listToDisplay = listGems.slice(0);
listToDisplay.unshift({
    type: 'QuickAddGemComponent'
});

export default class FeedComponent extends React.Component {
    onFetch = (page = 1, callback) => {
        setTimeout(() => {
            console.log('page', page);
            if (page === 1) {
                return callback(listToDisplay);
            }
            return callback(listGems);
        });
    };

    renderRowView = (rowData) => {
        return rowData.type === 'QuickAddGemComponent' ?
            <QuickAddGemComponent/> :
            <FeedElementComponent
                gemData={rowData}
            />;
    };

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    onFetch={this.onFetch}
                    rowView={this.renderRowView}
                />
            </View>
        );
    }
}
