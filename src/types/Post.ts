import PostBase from './PostBase'

export default interface Post extends PostBase {
  content: string
  isSentToSubscribers: boolean
  isScratch: boolean
}
