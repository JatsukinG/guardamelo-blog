import type { Post } from '@/types'
import MarkdownViewer from '@/components/markdown/MarkdownViewer'

const postsEndpoint = `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`

export async function generateStaticParams() {
  const res = await fetch(postsEndpoint)
  const parsedRes = await res.json()
  const posts = parsedRes.posts ?? []

  return posts.map((post: Post) => ({
    postId: post.id.toString(),
  }))
}

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params
  const res = await fetch(`${postsEndpoint}/${postId}`)
  const post = await res.json() as Post

  if (!post) return <span>No encontrado</span>

  return (
      <section className="container py-4 md:py-8">
        <MarkdownViewer content={post.content as string ?? ''}/>
      </section>
  )
}

export default Page