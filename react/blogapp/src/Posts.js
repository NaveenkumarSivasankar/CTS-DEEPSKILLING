import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      const posts = data.map((item) => new Post(item.userId, item.id, item.title, item.body));
      this.setState({ posts, loading: false, error: null });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
      console.error(error);
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ error: error.message });
    console.error('Error caught:', error, info);
    alert(error.message);
  }

  render() {
    const { posts, loading, error } = this.state;

    if (error) {
      return React.createElement('div', null, 'Error: ', error);
    }

    if (loading) {
      return React.createElement('div', null, 'Loading Posts...');
    }

    return React.createElement(
      'div',
      { style: { padding: '20px', maxWidth: '800px', margin: '0 auto' } },
      React.createElement('h1', null, 'Blog Posts'),
      posts.map((post) =>
        React.createElement(
          'div',
          { key: post.id, style: { marginBottom: '20px' } },
          React.createElement('h2', null, post.title),
          React.createElement('p', null, post.body),
          React.createElement('hr', null)
        )
      )
    );
  }
}

export default Posts;
