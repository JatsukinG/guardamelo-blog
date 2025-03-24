import type { Post } from '@/types'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const jsonPath = path.join(process.cwd(), 'public/posts/posts.json')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const data = JSON.parse(jsonContent)

  const post = data.posts.find((p: Post) => p.id.toString() === params.id || p.slug === params.id)

  if (!post) {
    return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'public', post.fileUrl)
  const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : ''

  return NextResponse.json({ ...post, content: fileContent })
}