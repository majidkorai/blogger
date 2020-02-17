import React, { useEffect } from 'react';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';

export default observer(({ store }) => {

    useEffect(() => {
        store.fetchPosts();
    });

    const handleDeletePost = (id) => {
        store.deletePost(id);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Post Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {store.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <Button onClick={() => handleDeletePost(post.id)} type="button">X</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
});