import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
    render() {
        const {id, title} = this.props.post;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-sm btn-primary">Ver</Link>
                    <button type="button" className="btn btn-sm btn-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}

export default Post;