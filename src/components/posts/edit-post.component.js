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

        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    componentDidMount() {
        axios.get('https://eager-newton-86421f.netlify.app/posts/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    description: res.data.description
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    onValueChange(e) {
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            description: this.state.description, 
        }

        axios.post('https://eager-newton-86421f.netlify.app/posts/update/' + this.props.match.params.id, post)
            .then(res => window.location = "/posts")
            .catch(err => console.log('Error :' + err));
    }

    render() {
        return (
            <div className="col-md-4 offset-md-4 mt-5 z-depth-1 bg-white" >
                <h3 className="text-center font-weight-bold pt-5" >Edit Post</h3>
                <div className="form-group p-4">
                    <form onSubmit={this.onSubmit}>
                        <MDBInput type="text" label="Title" onChange={this.onValueChange} outline required data-name="title" value={this.state.title} />
                        <MDBInput type="textarea" label="Description" row="8" outline required onChange={this.onValueChange} data-name="description" value={this.state.description} />
                        <MDBBtn type="submit" color="dark" className="btn-block" >Edit Post</MDBBtn>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePost;