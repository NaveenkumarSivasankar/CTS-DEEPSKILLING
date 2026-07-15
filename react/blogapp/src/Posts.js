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
      const posts = data.map((item) => {
        const professionalTitle = item.title
          ? `${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`
          : 'Professional Insight';

        const professionalBody = item.body
          ? `This article explores ${item.title.toLowerCase()} in a thoughtful and professional manner. It presents practical insights, highlights key ideas, and offers a clear perspective for readers who value reliable and well-structured information.`
          : 'This post provides a professional overview of the topic with clear insights and practical perspective.';

        return new Post(item.userId, item.id, professionalTitle, professionalBody);
      });
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
