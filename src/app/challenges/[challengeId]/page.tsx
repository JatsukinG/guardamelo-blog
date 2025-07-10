import { CodeEditor } from '@/components'
import challenges from '@/modules/challenges/challenges.json'

const Page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { challengeId } = await params
  const challenge = challenges.find(challenge => challenge.id == challengeId)

  if (!challengeId || !challenge) return <span>No encontrado</span>

  return (
      <div className="p-4 md:p-8">
        <div className="container p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white dark:bg-neutral-800 rounded-lg p-4 md:p-8 min-h-[60vh]">
            <CodeEditor/>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 md:p-8">
            <h2 className="text-lg text-neutral-800 dark:text-whhite font-bold">{challenge.title}</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-200">{challenge.longDescription}</p>
          </div>
        </div>
      </div>
  )
}

export default Page