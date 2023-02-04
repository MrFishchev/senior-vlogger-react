import React, { useEffect, useState } from 'react'
import './Manage.sass'
import ManagePage from '../../components/ManagePage/ManagePage'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faExternalLinkAlt,
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import BaseDataTable from '../../components/BaseDataTable/BaseDataTable'
import { TableColumn } from 'react-data-table-component'
import PostService from '../../services/PostService'
import ShortPost from '../../types/ShortPost'

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

  const columns: Array<TableColumn<ShortPost>> = [
    {
      name: 'Title',
      selector: (row) => row.title
    },
    {
      name: 'Category',
      selector: (row) => row.category
    },
    {
      name: 'Tags',
      selector: (row) => row.tags?.join(' ') ?? ''
    },
    {
      name: '',
      cell: () => {
        return (
          <span className="table-buttons">
            <button className="btn btn-sm btn-primary mr-2">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            <Link to="">
              <button type="button" className="btn btn-sm btn-warning mr-2">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </Link>
            <button className="btn btn-sm btn-danger">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </span>
        )
      }
    }
  ]

  return (
    <ManagePage>
      <div className="manage p-5 col-xl-11 col-md-12 m-auto">
        <div className="buttons pr-0 pl-0">
          <Link to="posts/create">
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} /> Create New
            </button>
          </Link>
        </div>

        {/* Table with all posts */}
        <BaseDataTable columns={columns} data={posts} />
      </div>
    </ManagePage>
  )
}

export default Blog
