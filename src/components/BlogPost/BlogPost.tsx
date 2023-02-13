import React, { useEffect, useState } from 'react'
import './BlogPost.sass'
import { NavLink, useParams } from 'react-router-dom'
import Post from '../../types/Post'
import BlogPage from '../BlogPage/BlogPage'
import PostService from '../../services/PostService'
import moment from 'moment'
import MDEditor from '@uiw/react-md-editor'

const BlogPost: React.FC = () => {
  const { slug } = useParams()
  const postService = new PostService()

  const [post, setPost] = useState<Post | undefined>()

  useEffect(() => {
    fetchPost().catch(console.error)
  }, [])

  const fetchPost = async (): Promise<void> => {
    if (slug == null) {
      console.log('Slug cannot be empty or whitespace')
      return
    }
    const data = await postService.get(slug)
    setPost(data)
    console.log(`Fetched post: ${JSON.stringify(data)}`)
  }

  return (
    <BlogPage>
      {post !== undefined && (
        <div className="blog-post">
          <NavLink
            to={`/category/${post.category}`}
            className="category slide-in-right"
          >
            {post.category}
          </NavLink>

          <h1 className="like slide-in-right">{post.title}</h1>
          <hr />

          <div className="like slide-in-left">
            <h2 className="date">
              {moment(post.publishDate).format('DD.MM.YYYY')}
            </h2>
          </div>

          <img src={post.imageUrl} alt="" className="image appears-fadein" />

          <div id="content" className="appears-fadein" data-color-mode="light">
            <div className="wmde-markdown-var"> </div>
            <MDEditor.Markdown
              source={post.content}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </div>

          <div className="tags">
            {post.tags.map((tag, index) => (
              <span key={index}>
                <NavLink to={`/tag/${tag}`} />
              </span>
            ))}
          </div>
        </div>
      )}
    </BlogPage>
  )
}

export default BlogPost
