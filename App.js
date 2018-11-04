
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,

} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {n: 0, botao: 'Start'};
        this.timer = null;

        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }

    start() {
        let s = this.state;

        if(this.timer != null) {
            // Parar o timer
            clearInterval(this.timer);
            this.timer = null;
            s.botao = "Start";

        } else {
            // Começar o timer
            this.timer = setInterval(()=> {
                let s = this.state;
                s.n += -.1;
                this.setState(s);
            }, 100);

            s.botao = "Stop";
        }

        this.setState(s); 
    }

    reset() {
        if(this.timer != null) {
            // Parar o timer
            clearInterval(this.timer);
            this.timer = null;
        }

        let s = this.state;
        s.n = 0;
        this.setState(s);
    }
    
    render() {
        return (
           
            <View style = {styles.body}>
                
                <Image source = {require('./images/relogio.png')} />
                <Text style = {styles.timer}>{this.state.n.toFixed(1)}</Text>
                
                <View style ={styles.botaoArea}>

                    <TouchableOpacity style = {styles.botao} onPress = {this.start}>

                        <Text style = {styles.botaoText}>{this.state.botao}</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.botao} onPress = {this.reset}>

                        <Text style = {styles.botaoText}>Reset</Text>

                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    body: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c1f30',
    },

    timer: {
        color: '#baa07a',
        fontSize: 70,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: -150,
    },

    botaoArea: {
        flexDirection: 'row',
        height: 40,
        marginTop: 80,
    },

    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#886532',
        height: 40,
        boerderRadius: 5,
        margin: 10,
    },

    botaoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

});
