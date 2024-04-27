import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 640,
        canvasHeight: 532,
        canvasWidth: 904,
        windowWidth: 1024,
    },
});
