import {useEffect, useState} from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import useStore from './store';

import './App.css'

export default function App() {

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  };
  
  const { data } = useQuery('posts', fetchPosts);
  const { setPosts } = useStore();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data, setPosts]);

  return (
    <div className="p-4">
      <ul className="divide-y divide-gray-200">
        {data && data.map(post => (
          <li key={post.id} className="py-2">{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
