import React, { useState } from 'react';
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { FormControl, Form, FormLabel, Button } from 'react-bootstrap';

export default observer(({ store }) => {
    const [title, setTitle] = useState('');
    const history = useHistory()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        store.createPost({
            "title": `${title}`,
            "likes": 0
        }, () => {
            history.push('/posts');
        })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormLabel>
                Post Title:
                <FormControl type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </FormLabel>
                <Button type="submit" className="ml-1" variant="primary">Submit</Button>
            </Form>
        </div>
    );
});