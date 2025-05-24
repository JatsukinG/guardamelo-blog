import { FaLaptopCode } from 'react-icons/fa'

const Welcome = () => {
  return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <div className="text-center">
          <span className="inline-block text-8xl text-purple-600">
            <FaLaptopCode/>
          </span>
          <h2 className="mt-8 text-3xl md:text-5xl font-extrabold text-neutral-800 dark:text-white mb-4">
            Aprende <span className="text-purple-600">programación</span> de manera simple
          </h2>
          <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Bienvenido a Guardamelo Blog, tu recurso definitivo para aprender diferentes tecnologías
            de programación con guías detalladas y fáciles de seguir.
          </p>
        </div>
      </section>
  )
}

export default Welcome