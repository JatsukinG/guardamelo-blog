import type { Post } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { getPosts } from '@/api/posts'

const Posts = () => {
  const posts = getPosts() ?? []

  return (
      <section className="py-12">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post: Post) => (
              <Link
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className={clsx([
                    'group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300',
                    'dark:bg-gray-800 hover:cursor-pointer hover:shadow-lg hover:-translate-y-1',
                  ])}

              >
                <div className="relative h-48 w-full">
                  <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-purple-600 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
                </div>
              </Link>
          ))}
        </div>
      </section>
  )
}

export default Posts