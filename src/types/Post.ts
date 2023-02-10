import PostBase from './PostBase'

export default interface Post extends PostBase {
  isSentToSubscribers: boolean
  isScratch: boolean
}
