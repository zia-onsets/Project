import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Questioncontainer from '../../src/Settings/Compotent/Questioncontainer';
import Qstatement from '../../src/Settings/Compotent/Qstatement';
import MainHeader from '../components/headers/MainHeader';
const Help = props => {
    // <Text style={{ fontFamily: "Segoe UI" }}>

    let Q1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    let Q2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    let Q3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    let Q4 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    const [Imgpath1, setimagepath1] = useState(require('../res/images/pathdown.png'))
    const [Imgpath2, setimagepath2] = useState(require('../res/images/pathdown.png'))
    const [Imgpath3, setimagepath3] = useState(require('../res/images/pathdown.png'))
    const [Imgpath4, setimagepath4] = useState(require('../res/images/pathdown.png'))
    const [question1, setq1] = useState(false);
    const [question2, setq2] = useState(false);
    const [question3, setq3] = useState(false);
    const [question4, setq4] = useState(false);
    const QuestionHandler = (Q) => {
        setq1(false);
        setq2(false);
        setq3(false);
        setq4(false);
        if (Q === 'q1') {
            if (question1 === false) {
                setq1(true)
            }
            if (Imgpath1 === require('../res/images/pathdown.png')) {
                setimagepath1(require('../res/images/pathup.png'))
            }
            else {
                setimagepath1(require('../res/images/pathdown.png'))
            }

        }
        else if (Q === 'q2') {
            if (Imgpath2 === require('../res/images/pathdown.png')) {
                setimagepath2(require('../res/images/pathup.png'))
            }
            else {
                setimagepath2(require('../res/images/pathdown.png'))
            }
            if (question2 === false) {
                setq2(true)
            }
        }
        else if (Q === 'q3') {
            if (Imgpath3 === require('../res/images/pathdown.png')) {
                setimagepath3(require('../res/images/pathup.png'))
            }
            else {
                setimagepath3(require('../res/images/pathdown.png'))
            } if (question3 === false) {
                setq3(true)
            }
        }
        else if (Q === 'q4') {
            if (Imgpath4 === require('../res/images/pathdown.png')) {
                setimagepath4(require('../res/images/pathup.png'))
            }
            else {
                setimagepath4(require('../res/images/pathdown.png'))
            } if (question4 === false) {
                setq4(true)
            }
        }
    }
    return (
        <View style={styles.screen}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="black"  ></StatusBar>
            <MainHeader title='Help'></MainHeader>
            <View style={styles.container}>
                <View style={styles.blockA}>

                </View>
                <View style={styles.blockB}>
                    <Text style={{ fontSize: 24, fontFamily: "IBMPlexSans-Medium" }}>Help</Text>
                </View>
                <View style={styles.blockC}>
                    <Questioncontainer title='Question1' fontFamily='IBMPlexSans-Medium' fontSize={16} fontWeight='500' onSelect={() => { QuestionHandler('q1') }} imgpath={Imgpath1}></Questioncontainer>
                    {question1 && (<Qstatement statement={Q1}></Qstatement>)}

                    <Questioncontainer title='Question2' fontFamily='IBMPlexSans-Medium' fontSize={16} fontWeight='500' onSelect={() => { QuestionHandler('q2') }} imgpath={Imgpath2} ></Questioncontainer>
                    {question2 && (<Qstatement statement={Q2}></Qstatement>)}

                    <Questioncontainer title='Question3' fontFamily='IBMPlexSans-Medium' fontSize={16} fontWeight='500' onSelect={() => { QuestionHandler('q3') }} imgpath={Imgpath3}></Questioncontainer>
                    {question3 && (<Qstatement statement={Q3}></Qstatement>)}

                    <Questioncontainer title='Question4' fontFamily='IBMPlexSans-Medium' fontSize={16} fontWeight='500' onSelect={() => { QuestionHandler('q4') }} imgpath={Imgpath4}></Questioncontainer>
                    {question4 && (<Qstatement statement={Q4}></Qstatement>)}

                </View>

            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    blockA: {
        width: "100%",
        height: "5%",

    },
    blockB: {
        justifyContent: "flex-start",

        width: "100%",
        height: "10%",

    },
    blockC: {

        justifyContent: "flex-start",

        width: "100%",
        height: "85%",

    },
    screen: {
        justifyContent: "flex-start",
        alignItems: 'center',
        width: "100%",
        height: "100%"
    }, container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "78%",
        width: "90%",

    },
});
export default Help;