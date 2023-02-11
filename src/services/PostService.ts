import http from '../http-common'
import PostBase from '../types/PostBase'
import Post from '../types/Post'

const BLOG_API_URL = `${process.env.REACT_APP_BLOG_API_URL}/blog`

class PostService {
  getAll = async (): Promise<PostBase[]> => {
    try {
      const result = await http.get<PostBase[]>(BLOG_API_URL)
      return result.data
    } catch (err) {
      console.log(`Failed to retrieve posts: ${err as string}`)
    }
    return []
  }

  create = async (post: Post): Promise<void> => {
    try {
      await http.post(BLOG_API_URL, JSON.stringify(post))
    } catch (err) {
      console.log(`Failed to create post: ${err as string}`)
    }
  }
}

export default PostService
