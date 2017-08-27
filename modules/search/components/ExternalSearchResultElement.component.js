import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import StyledText from '../../../components/StyledText';
import StyledTitle from '../../../components/StyledTitle';
import Colors from '../../../constants/Colors';
import GradientBackground from '../../../components/GradientBackground';
import listGemOffImage from '../../../assets/icons/list-gem-off@2x.png';
import loveImage from '../../../assets/icons/love@2x.png';

const styles = StyleSheet.create({
    highlight: {
        alignSelf: 'stretch'
    },
    container: {
        paddingBottom: 10,
        paddingTop: 8,
        paddingLeft: 35,
        paddingRight: 15
    },
    button: {
        flex: 1,
        marginTop: 5,
        borderRadius: 20
    },
    innerButton: {
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default class ExternalSearchResultElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    pressed = () => {
        this.setState({
            selected: true
        });
    };

    selected = (type) => {
        if (this.props.elementPressed) {
            this.props.elementPressed(this.props.result, type);
        }
    };

    selectedStyle = () => {
        return this.state.selected ? {backgroundColor: Colors.white} : {};
    };

    renderButtons = () => {
        if (this.state.selected) {
            return (<View style={{flexDirection: 'row', alignSelf: 'stretch'}}>
                <TouchableHighlight
                    style={[styles.button, {marginRight: 5}]}
                    underlayColor={Colors.tintColor}
                    onPress={() => this.selected('gem')}>
                    <View>
                        <GradientBackground style={styles.innerButton}>
                            <Image source={listGemOffImage}/>
                            <StyledText style={{marginLeft: 10}}>Gem it</StyledText>
                        </GradientBackground>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.button, {marginLeft: 5}]}
                    underlayColor={Colors.tintColor}
                    onPress={() => this.selected('save')}>
                    <View>
                        <GradientBackground style={styles.innerButton}>
                            <Image source={loveImage}/>
                            <StyledText style={{marginLeft: 10}}>Save it</StyledText>
                        </GradientBackground>
                    </View>
                </TouchableHighlight>
            </View>);
        }
        return null;
    };

    render() {
        return (
            <TouchableHighlight onPress={() => this.pressed()}
                                underlayColor={Colors.white}
                                style={[styles.highlight, this.selectedStyle()]}>
                <View style={[styles.container]}>
                    <StyledText>{this.props.result.category}</StyledText>
                    <StyledTitle numberOfLines={1}>{this.props.result.title}</StyledTitle>
                    <StyledText>{this.props.result.shortLabel}</StyledText>
                    {this.renderButtons()}
                </View>
            </TouchableHighlight>
        );
    }
}
