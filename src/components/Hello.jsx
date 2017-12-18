import React from 'react'

export default class Hello extends React.Component {

    constructor(props){
        super(props)
        this.increment = this.increment.bind(this)
        this.state = {
            counter: 0
        }
    }

    render() {
        return <div>salut {this.props.name}
        compteur: {this.state.counter}<br/>
        <button onClick={this.increment}>Incrémenter</button>
        </div>
    }

    increment(){
        this.setState({counter: this.state.counter +1})
    }
}