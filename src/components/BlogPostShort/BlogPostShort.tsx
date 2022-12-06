import React from 'react'
import './BlogPostShort.sass'
import { NavLink } from 'react-router-dom'
import ShortPost from '../../types/ShortPost'

const BlogPostShort: React.FC<{ data: ShortPost }> = ({ data }) => {
  return (
    <div className="post-short">
      <NavLink
        className="category slide-in-left"
        to={`/blog/category/${data.category.id}`}
      >
        {data.category.name}
      </NavLink>

      <h1 className="title slide-in-right">
        <NavLink to={`/blog/${data.slug}`}>{data.title}</NavLink>
      </h1>

      <h3 className="date slide-in-left">
        {new Date(data.publishDate).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </h3>

      <NavLink className="image appears-fade-in" to={`/blog/${data.slug}`}>
        <img src={data.imageUrl} alt="" />
      </NavLink>

      <p className="short appears-fade-in">
        {data.description.substring(195)}...
      </p>
      <NavLink
        className="more slide-in-right"
        to={`/blog/${data.slug}`}
        title={data.title}
      >
        Read More
      </NavLink>

      <hr className="separator" />
    </div>
  )
}

export default BlogPostShort
