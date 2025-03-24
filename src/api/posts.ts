import type { Post } from '@/types'
import fs from 'fs'
import path from 'path'

export function getPosts(): Post[] {
  const jsonPath = path.join(process.cwd(), 'public/posts/posts.json')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const data = JSON.parse(jsonContent)

  return data.posts.map((post: Post) => {
    const filePath = path.join(process.cwd(), 'public', post.fileUrl)
    const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : ''
    return { ...post, content: fileContent } as Post
  })
}

export function getPostById(id: string): Post {
  const posts = getPosts() ?? []
  const post = posts.find((p: Post) => p.id.toString() === id || p.slug === id) as Post

  const filePath = path.join(process.cwd(), 'public', post.fileUrl)
  const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : ''

  return { ...post, content: fileContent } as Post
}