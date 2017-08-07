import {FromLeft} from './FromLeft.transition';
import {FromBottom} from './FromBottom.transition';
import {FromTop} from './FromTop.transition';

export const TransitionEngine = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {

            const {position, scene} = sceneProps;
            const {index, route} = scene;
            const params = route.params || {}; // <- That's new
            const transition = params.transition || 'default'; // <- That's new

            return {
                fromLeft: FromLeft(index, position),
                fromBottom: FromBottom(index, position),
                fromTop: FromTop(index, position),
                default: FromLeft(index, position),
            }[transition];
        }
    }
};