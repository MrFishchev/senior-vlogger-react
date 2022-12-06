import http from '../http-common'
import ShortPost from '../types/ShortPost'

const BLOG_API_URL = process.env.REACT_APP_BLOG_API_URL ?? ''

class PostService {
  getAll = async (): Promise<ShortPost[]> => {
    try {
      const result = await http.get<ShortPost[]>(BLOG_API_URL)
      return result.data
    } catch (err) {
      console.log(`Failed to retrieve posts: ${err as string}`)
    }
    return []
  }
}

export default PostService
