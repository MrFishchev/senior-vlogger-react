import React, { useState } from 'react'
import './CreatePost.sass'
import ManagePage from '../../../components/ManagePage/ManagePage'
import Category from '../../../types/Category'
import Creatable from 'react-select/creatable'
import MDEditor from '@uiw/react-md-editor'
import { useNavigate } from 'react-router-dom'
import Post from '../../../types/Post'
import StorageService from '../../../services/StorageService'
import PostService from '../../../services/PostService'

type PostInputTypes = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
const STORAGE_BUCKET_URL = process.env.REACT_APP_STORAGE_BUCKET_URL ?? ''

const CreatePost: React.FC = () => {
  const storageService = new StorageService()
  const postService = new PostService()

  const navigate = useNavigate()
  const categories = Object.values(Category)
    .filter((value) => typeof value === 'string')
    .map((value) => value as string)

  const defaultPost: Post = {
    id: '',
    title: 'My new post title',
    slug: 'my-new-post-title',
    category: Category.Development,
    tags: ['Random', 'Test'],
    imageUrl:
      'https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg',
    description:
      'This post each that just leaf no. He connection interested so we an sympathize advantages. To said is it shed want do. Occasional middletons everything so to. Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he. Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined.',
    publishDate: new Date(),
    isSentToSubscribers: false,
    isScratch: true,
    content: ''
  }

  const [post, setPost] = useState<Post>(defaultPost)
  const handlePostChange = (e: React.ChangeEvent<PostInputTypes>): void => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files != null) {
      setSelectedFile(e.target.files[0])
    }
  }

  const [editorData, setEditorData] = useState<string | undefined>(
    '**Hello world!!!**'
  )

  const savePost = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    if (selectedFile == null && editorData == null) {
      return
    }

    const imageKey = await storageService.saveFileToS3(selectedFile as File)
    console.log(`Saved image: ${imageKey}`)

    post.imageUrl = `${STORAGE_BUCKET_URL}/${imageKey}`
    post.content = editorData ?? ''
    console.debug(post)

    await postService.create(post)
    console.log('Post is created')
  }

  return (
    <ManagePage>
      <div className="wrapper col-lg-7 col-md-10 col-sm-12" id="post-create">
        <div className="col-12 p-0 mt-5 mb-5">
          <button className="btn btn-primary text-white w-100">
            <span>Hide preview</span>
            <span>Show preview</span>
          </button>
        </div>
        {/* <blog-post v-if="preview" :editData="data" :edit="true" /> */}

        <div className="post">
          <form className="form" onSubmit={savePost}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                value={post.title}
                onChange={handlePostChange}
                type="text"
                placeholder="Title"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={post.description}
                onChange={handlePostChange}
                id="description"
                className="form-control"
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                value={post.category}
                onChange={handlePostChange}
                id="category"
                className="form-control"
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <Creatable
                name="tags"
                id="tags"
                isMulti
                className="tags"
                placeholder="Select tags"
                options={[
                  { label: '.NET', value: 'dotnet' },
                  { label: 'AWS', value: 'aws' },
                  { label: 'FINLAND', value: 'relocate' }
                ]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="customFile">Post Image</label>
              <div className="custom-file">
                <input
                  name="file"
                  onInput={handleFileChange}
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label">
                  {selectedFile?.name ?? 'Select file'}
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Image Url</label>
              <input
                name="imageUrl"
                value={post.imageUrl}
                onChange={handlePostChange}
                type="text"
                className="form-control"
                id="image"
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  name="isSentToSubscribers"
                  checked={post.isSentToSubscribers}
                  onChange={handlePostChange}
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Send Mail to Subscribers
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  name="isScratch"
                  checked={post.isScratch}
                  onChange={handlePostChange}
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Scratch (Don&apos;t publish now)
                </label>
              </div>
            </div>

            {/* README of Editor: https://github.com/uiwjs/react-md-editor */}
            <div data-color-mode="light">
              <div className="wmde-markdown-var"> </div>
              <MDEditor value={editorData} onChange={setEditorData} />
            </div>

            <div className="preview" data-color-mode="light">
              <div className="wmde-markdown-var"> </div>
              <MDEditor.Markdown
                source={editorData}
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>

            <div className="buttons mb-5">
              <button className="btn btn-success w-25 text-white" type="submit">
                Create Post
              </button>
              <button
                className="btn btn-danger w-25 text-white"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </ManagePage>
  )
}

export default CreatePost
