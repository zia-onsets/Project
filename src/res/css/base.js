// src/res/styles/base.js
import {Dimensions,StyleSheet} from 'react-native';

const generateBaselineCSS = (type) => {
    let values = {};
    for (const key in BASELINE_GAPS) {
        values[`${type.short}${key}`] = {
            [type.long]: BASELINE_GAPS[key],
        };
        for (const dimKey in BASELINE_GAPS_DIRECTIONS) {
            values[`${type.short}${dimKey}${key}`] = {
                [`${type.long}${BASELINE_GAPS_DIRECTIONS[dimKey]}`]: BASELINE_GAPS[
                    key
                ],
            };
        }
    }
    return values;
};

function generateFontSizes() {
    let values= {};
    for (let i = 0; i < 80; i = i + 2) {
        i != 0
            ? (values[`fs${i}x`] = {fontSize: i})
            : (values[`fx${i}`] = {fontSize: i});
    }
    return values;
}

// export const DARK_LOGO = require('./../images/blacklogo.png');
// export const NO_IMAGE = require('./../images/noimage.png');
const BASELINE_GAPS_DIRECTIONS= {
    T: 'Top',
    R: 'Right',
    B: 'Bottom',
    L: 'Left',
    H: 'Horizontal',
    V: 'Vertical',
};

const BASELINE_GAPS = {
    'Auto': 'auto',
    '0': 0, '05x': 4, '1x': 8, '1_5x': 12, '2x': 16, '3x': 24, '4x': 32,
    '5x': 42, '6x': 48, '7x': 56, '8x': 64, '9x': 72, '10x': 80,
    '11x': 80, '12x': 80, '13x': 80, '14x': 80, '15x': 80
};

export const DIMENSIONS = {
    fullWidth: Dimensions.get('window').width,
    fullHeight: Dimensions.get('window').height,
};

export const THEME_COLORS = {
    primary: '#F1804D',
    secondary: '#F9A01B',
    tertiary: '#5DA6A7',
    black:'#000000',
    headerColor:'#1C1E28',
    white:'#ffffff'
};

export const THEME_TEXT_COLORS = {
    primary: '#333333',
    secondary: '#254B5A',
    tertiary: '#5DA6A7',
    errorBG:'rgb(198, 14, 14)',
    errorText:'#ffffff',
    placeHolder:'#808080',
    callBtn:"#44ce48"
};

export const COLORS = {
    success: '#14df18',
}

const MARGIN = generateBaselineCSS({ short: 'm', long: 'margin' });
const PADDING = generateBaselineCSS({ short: 'p', long: 'padding' });
const FONT_SIZES = generateFontSizes();

export const baseStyles = StyleSheet.create({
    ...MARGIN,
    ...PADDING,
    ...FONT_SIZES,
    themeHeader: {
        backgroundColor: THEME_COLORS.primary,
    },
    body: {
        color: THEME_TEXT_COLORS.primary,
        backgroundColor: 'transparent',
        fontFamily: 'Roboto Condensed, sans-serif'
    },
    flex: {
        display: 'flex'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    flexCenter: {
        // flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    logoContainer: {
        ...MARGIN.mB3x,
        ...PADDING.pT8x,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnPrimary: {
        paddingVertical: 12,
        backgroundColor: THEME_COLORS.primary,
    },
    btnPrimaryTitle: {
        color: "#FFFFFF"
    },
    cardContainer: {
        ...MARGIN.mB2x,
        ...PADDING.p1_5x,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    }
});