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
        return <div>salut {this.props.name}  <br/>
        compteur: {this.state.counter}<br/>
        {this.state.counter >= 10 && <div>vous avez dépassé 10</div>}
        <button onClick={this.increment}>Incrémenter</button>
        </div>
    }

    increment(){
        this.setState({counter: this.state.counter +1})
    }
}