import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {NavigationBar} from '@shoutem/ui'
import {NavigationActions} from 'react-navigation';
import {LinearGradient} from 'expo';
import Colors from '../constants/Colors';
import contextualMenuImage from '../assets/icons/contextual-menu.png';
import backImage from '../assets/icons/back.png';

const styles = StyleSheet.create({
    container: {
        height: 70,
        alignSelf: 'stretch'
    }
});

export default class TopNavigationGem extends React.Component {
    static propTypes = {};

    openContextualPanel = () => {
        if (this.props.onOpenContextualPanel) {
            this.props.onOpenContextualPanel();
        }
    };

    getGradient = () => {
        if (this.props.navigationOptions.noBackground === true) {
            return [Colors.white, Colors.white];
        }
        return [Colors.gradientStart, Colors.gradientEnd];
    };

    goBack = () => {
        if (this.props.backButtonAction) {
            this.props.backButtonAction();
        } else {
            const backAction = NavigationActions.back();
            this.props.navigation.dispatch(backAction);
        }
    };

    renderCenterComponent = () => {
        if (this.props.navigationOptions.titleState) {
            return <Text style={{fontSize: 16}}>{this.props.navigationOptions.titleState}</Text>;
        }
        return (<TouchableHighlight underlayColor={Colors.tintColor}
                                    onPress={this.openContextualPanel}>
            <Image source={contextualMenuImage}/>
        </TouchableHighlight>);
    };

    renderLeftComponent = () => {
        if (this.props.navigationOptions.hasHistory) {
            return (<TouchableHighlight underlayColor={Colors.tintColor}
                                        onPress={this.goBack}
                                        style={{marginLeft: 10}}>
                <Image source={backImage}/>
            </TouchableHighlight>);
        }
        return null;
    };

    render() {
        return (
            <LinearGradient colors={this.getGradient()}
                            end={[1, 0]}
                            style={styles.container}>
                <NavigationBar styleName="clear"
                               centerComponent={this.renderCenterComponent()}
                               leftComponent={this.renderLeftComponent()}/>
            </LinearGradient>
        );
    }
}
