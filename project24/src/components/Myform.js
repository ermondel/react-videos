import React, { Component } from 'react';

class Myform extends Component {
    state = {
        val: ''
    }

    handlerOnChange = event => {
        // console.log(event.target.value);
        this.setState({
            val: event.target.value
        });
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.handlerOnChange} />
                <p>{this.state.val}</p>
            </form>
        );
    }
}

export default Myform;
