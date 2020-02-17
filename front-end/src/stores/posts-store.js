import { action, observable, flow, decorate } from 'mobx';

class PostStore {
    posts = [];
    
    fetchPosts = flow(function* () {
        try {
            const response = yield fetch("http://localhost:2000/posts");
            const data = yield response.json();
            this.onSuccess(data);
        } catch (error) {
            this.onError(error);
        }
    });

    createPost = flow(function* (post, successHandler= {}) {
        try {
            const response = yield fetch("http://localhost:2000/posts", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post)
            });
            yield response.json();
            successHandler();
        } catch (error) {
            this.onError(error);
        }
    })

    deletePost = flow(function* (postId){
        try {
            const response = yield fetch(`http://localhost:2000/posts/${postId}`, {
                method: 'delete'
            });
            yield response.json();
        } catch (error) {
            this.onError(error);
        }
    })

    onSuccess(data) {
        this.posts = data;
    }

    onError(error) {
        console.log(error);
    }
}

decorate(PostStore, {
    posts: observable,
    fetchPosts: action,
    onSuccess: action,
    onError: action
})

export default PostStore;