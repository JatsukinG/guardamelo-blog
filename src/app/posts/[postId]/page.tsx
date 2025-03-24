import type { Post } from '@/types'
import { getPostById, getPosts } from '@/api/posts'
import MarkdownViewer from '@/components/markdown/MarkdownViewer'

export async function generateStaticParams() {
  const posts = getPosts() ?? []

  return posts.map((post: Post) => ({
    postId: post.id.toString(),
  }))
}

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params
  const post = getPostById(postId)

  if (!post) return <span>No encontrado</span>

  return (
      <section className="container py-4 md:py-8">
        <MarkdownViewer content={post.content as string ?? ''}/>
      </section>
  )
}

export default Page