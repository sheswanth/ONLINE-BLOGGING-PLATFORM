import React, { useState, useEffect } from 'react';
import './posts.css';

function Posts() {
  const initialPosts = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D',
      title: 'Introduction to React',
      description: 'Learn the basics of React and build interactive user interfaces.',
      likes: 15,
      comments: 5,
      views: 0,
      link: 'https://www.bacancytechnology.com/blog/react/'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1516571802202-335011e323a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsbGluZyUyMGFkdmVudHVyZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Traveling Adventures',
      description: 'Explore the world through the eyes of a passionate traveler.',
      likes: 23,
      comments: 8,
      views: 0,
      link: 'https://worldexpeditions.com/blog/9-reasons-adventure-travel-is-good-for-you'
    },{
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
      title: 'Photography Tips and Tricks',
      description: 'Learn how to capture stunning photos with these essential photography tips.',
      likes: 18,
      comments: 7,
      views: 0,
      link: 'https://photographylife.com/photography-tips-for-beginners'
    },
    
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Tech Trends 2024',
      description: 'Stay updated on the latest technological advancements and trends shaping the year 2022.',
      likes: 28,
      comments: 6,
      views: 0,
      link: 'https://radixweb.com/blog/top-technology-trends'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvJTIwZnJlaW5kbHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D',
      title: 'Green Living: Eco-Friendly Tips',
      description: 'Make small changes in your lifestyle to contribute to a more sustainable and eco-friendly environment.',
      likes: 22,
      comments: 9,
      views: 0,
      link: 'https://www.bacancytechnology.com/blog/green-living-eco-friendly-tips/'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1460533893735-45cea2212645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERJWSUyMEhvbWUlMjBEZWNvciUyMElkZWFzfGVufDB8fDB8fHww',
      title: 'DIY Home Decor Ideas',
      description: 'Spruce up your living space with these creative and budget-friendly DIY home decor ideas.',
      likes: 35,
      comments: 11,
      views: 0,
      link: 'https://www.bacancytechnology.com/blog/diy-home-decor-ideas/'
    },
  ];

  const [posts, setPosts] = useState(() => {
    // Retrieve posts from localStorage, if available
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  useEffect(() => {
    // Save posts to localStorage whenever posts change
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const incrementViews = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === id) {
          const updatedPost = { ...post, views: post.views + 1 };
          // Update localStorage with the updated view count
          localStorage.setItem(`post_${id}_views`, updatedPost.views.toString());
          return updatedPost;
        }
        return post;
      })
    );
  };

  useEffect(() => {
    // Update views from localStorage when component mounts
    setPosts(prevPosts =>
      prevPosts.map(post => {
        const storedViews = localStorage.getItem(`post_${post.id}_views`);
        if (storedViews !== null) {
          return { ...post, views: parseInt(storedViews) };
        }
        return post;
      })
    );
  }, []);

  return (
    <div className="posts-container">
      {posts.map(post => (
        <a key={post.id} href={post.link} className="blog-box" onClick={() => incrementViews(post.id)}>
          <div className="blog-content">
            <img src={post.imageUrl} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-stats">
              <span>
                <img src="https://via.placeholder.com/20" alt="Like Icon" />
                {post.likes}
              </span>
              <span>Comments: {post.comments}</span>
              <span>Views: {post.views}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Posts;
