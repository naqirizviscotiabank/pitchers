

import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {

        type: 'light',
        primary: {
            main: '#4FB3C7' // customise your main color here
        },
        secondary: { main: '#ffffff' },

        error: { main: '#ca0909' },

        sand: { main: '#F4DECB' },
        shell: { main: '#F8EEE7' },
        status: {
            danger: '#b71c1c'
        },


        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});