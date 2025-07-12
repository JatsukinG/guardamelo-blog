'use client'
import clsx from 'clsx'
// import { useRouter } from 'next/navigation'
// import { Button } from '@/components'
import challenges from '@/modules/challenges/challenges.json'

type Difficulty = "easy" | "medium" | "hard"

interface DifficultyObj {
  color: string
  translation: string
}

const difficulties: Record<Difficulty, DifficultyObj>  = {
  easy: {
    color: 'bg-green-600',
    translation: 'Fácil',
  },
  medium: {
    color: 'bg-yellow-600',
    translation: 'Medio',
  },
  hard: {
    color: 'bg-red-600',
    translation: 'Difícil',
  },
}


const Page = () => {
  // const router = useRouter()

  return (
      <div className="p-4 md:p-8">
        <div className="container">
          <h3 className="text-lg font-bold text-purple-800 dark:text-purple-600 border-b-1 pb-2 mb-4">
            Javascript
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              challenges.map(challenge => (
                  <div
                      key={challenge.id}
                      className={clsx([
                        'w-full flex flex-col bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow',
                        'dark:bg-neutral-800 border-l-8 border-purple-600',
                      ])}
                  >
                    <div className="flex justify-between items-start flex-grow">
                      <div>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">{challenge.title}</h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-200">{challenge.longDescription}</p>
                      </div>
                      <span
                          className={clsx([
                            'text-xs font-medium px-2 py-1 rounded-full text-white',
                            difficulties[challenge.difficulty as Difficulty].color,
                          ])}
                      >
                        {difficulties[challenge.difficulty as Difficulty].translation}
                      </span>
                    </div>
                    {/*<Button*/}
                    {/*    className="mt-3"*/}
                    {/*    onClick={() => router.push(`/challenges/${challenge.id}`)}*/}
                    {/*>*/}
                    {/*  Intentalo!*/}
                    {/*</Button>*/}
                  </div>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Page