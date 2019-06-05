import React from 'react';
import Clock from 'react-live-clock';

/*class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    render() {
        return (
            <p className="App-clock">
                The time is {time}.
            </p>
        );
    }
}

export default Clock;*/

class MyClock extends React.Component {
    render() {
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    }
}

/*
class Clock extends React.Component {
    render() {
        let now = new Date();
        let wasDate = new Date("Thu Jul 18 2013 15:48:59 GMT+0400");

        return (
            <div>
                <p>This was <Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative /></p>
            </div>
        )
    }
}*/
// export default MyClock;
