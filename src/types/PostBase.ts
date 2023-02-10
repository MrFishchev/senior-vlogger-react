import Category from './Category'

export default interface PostBase {
  id: number
  title: string
  slug: string
  category: Category
  tags: string[]
  imageUrl: string
  description: string
  publishDate: Date
}
