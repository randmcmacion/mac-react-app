import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Post = props => {
    return(
        <tr>
            <td>{props.post.title}</td>
            <td>{props.post.description}</td> 
            <td className="text-center">
                <Link to={'/posts/edit/'+props.post._id} className="btn btn-sm btn-primary">Edit</Link>
                <a href="#" onClick={()=> {props.delete_post(props.post._id)}} className="btn btn-sm btn-danger">Delete</a>
            </td>
        </tr>
    )
}

export default class AllPosts extends Component {

    constructor(props){
        super(props)

        this.delete_post = this.delete_post.bind(this);
        this.state = {post: []}
    }

    componentDidMount(){

        axios.get('https://hgc-intranet-backend.herokuapp.com/posts/')
            .then(res => {
                this.setState({post: res.data})
            })
            .catch(error => {
                console.log(error);
            })

            
    }

    delete_post(id){
        axios.delete('https://hgc-intranet-backend.herokuapp.com/posts/'+id)
            .then(res => console.log(res.data))
            this.setState({
                post: this.state.post.filter(el => el._id !== id)
            })
    }

    posts(){
        return this.state.post.map(current_post => {
            return <Post post={current_post} delete_post={this.delete_post} key={current_post._id} />
        })
    }
    

    render(){
        return(
            <div className="container mt-5"> 
                <table className="table table-bordered table-hover table-condensed  z-depth-1 bg-white">
                    <thead className="thead-dark">
                    <tr>
                           <th>Title</th>
                           <th>Description</th> 
                           <th className="text-center">Actions</th>
                       </tr>
                    </thead>
                    <tbody>
                        {this.posts()}
                    </tbody>
                </table>    
            </div>
        )
    }


}