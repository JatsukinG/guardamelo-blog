import type { Post } from '@/types'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const jsonPath = path.join(process.cwd(), 'public/posts/posts.json')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const data = JSON.parse(jsonContent)

  const posts = data.posts.map((post: Post) => {
    const filePath = path.join(process.cwd(), 'public', post.fileUrl)
    const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : ''
    return { ...post, content: fileContent } as Post
  })

  return NextResponse.json({ posts })
}