import React, { Component } from 'react'
import { MDBInput, MDBBtn } from "mdbreact"
import axios from 'axios';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }

        this.on_submit = this.on_submit.bind(this)
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    on_submit(e) {
        e.preventDefault();
        const health = {
            title: this.state.title,
            description: this.state.description,
        }

        axios.post('https://hgc-intranet-backend.herokuapp.com/posts/create/', health)
            .then(res => window.location = "/posts")
            .catch(err => console.log('Error :' + err));
    }

    render() {
        return (
            <div className="col-md-4 offset-md-4 mt-5 z-depth-1 bg-white" >
                <h3 className="text-center font-weight-bold pt-5" >Create Post</h3>
                <div className="form-group p-4">
                    <form onSubmit={this.on_submit}>
                        <MDBInput type="text" label="Title" onChange={this.onValueChange } outline required data-name = "title" />
                        <MDBInput type="textarea" label="Description" row="8" outline required onChange={this.onValueChange} data-name="description" />
                        <MDBBtn type="submit" color="dark" className="btn-block" >Create Post</MDBBtn>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePost;