import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class DimForm extends Component{
    state={
        width: 0,
        height: 0
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.updateDim(this.state.width, this.state.height);
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Width(ft)</label>
                    <input 
                        onChange = {event => {
                            this.setState({
                                width: event.target.value
                            })
                        }}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Height(ft)</label>
                    <input 
                        onChange = {event => {
                            this.setState({
                                height: event.target.value
                            })
                        }}
                    />
                </Form.Field>
                <Button type='submit'>Create</Button>
            </Form>
        )
    }
    
}

export default DimForm
