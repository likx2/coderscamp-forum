export default interface Post {
    _id: string
    author: string
    title: string
    content: string
    imageUrl: string
    hashtags: string[]
    commentsCount: number
    createdAt: string
    updatedAt: string
    _v: number
    reactions: []
}