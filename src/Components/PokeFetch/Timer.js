import React, { Component } from "react";

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 10
        }
        this.startTimer = this.startTimer.bind(this)
    }

    startTimer() {
        if(this.state.time >= 0){
            this.timer = setInterval(() => this.setState({
                time: this.state.time - 1
            }), 1000)
            console.log("start")
        } else {
            this.timer = 0
        }
    }


    render() {
        return (
            <div>
                <h1>Time: {this.state.time}</h1>
                <button onClick={this.startTimer}>Timer</button>
            </div>
        )
    }
}

export default Timer;