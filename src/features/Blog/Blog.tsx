import React, { useEffect, useState } from 'react'
import './Blog.sass'
import Page from '../../components/Page/Page'
import ShortPost from '../../types/ShortPost'
import PostService from '../../services/PostService'
import BlogPostShort from '../../components/BlogPostShort/BlogPostShort'

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<ShortPost[]>([])
  const postService = new PostService()

  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    const fetchPosts = async (): Promise<void> => {
      setPosts(await postService.getAll())
    }
    fetchPosts().catch(console.error)

    return () => {
      document.body.classList.remove('light')
    }
  }, [])

  return (
    <Page>
      <div className="blog">
        {posts.map((post, i) => (
          <BlogPostShort data={post} key={i} />
        ))}
      </div>
    </Page>
  )
}

export default Blog
