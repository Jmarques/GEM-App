export const FromLeft = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.8, 1, 1],
    });

    const translateX = position.interpolate({
        inputRange: inputRange,
        outputRange: [-100, 0, 0]
    });

    return {
        opacity,
        transform: [
            {translateX}
        ]
    };
};