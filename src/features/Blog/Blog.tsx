import React, { useEffect, useState } from 'react'
import './Blog.sass'
import BlogPage from '../../components/BlogPage/BlogPage'
import PostBase from '../../types/PostBase'
import PostService from '../../services/PostService'
import BlogPostShort from '../../components/BlogPostShort/BlogPostShort'

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<PostBase[]>([])
  const postService = new PostService()

  useEffect(() => {
    fetchPosts().catch(console.error)
  }, [])

  const fetchPosts = async (): Promise<void> => {
    setPosts(await postService.getAll())
  }

  return (
    <BlogPage>
      <div className="blog">
        {posts.map((post, i) => (
          <BlogPostShort data={post} key={i} />
        ))}
      </div>
    </BlogPage>
  )
}

export default Blog
