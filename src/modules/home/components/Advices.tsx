const Advices = () => {
  return (
      <section className="bg-gradient-to-r from-orange-900 to-purple-800 text-white">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades?</h2>
            <p className="text-indigo-100 mb-8 max-w-3xl mx-auto">
              Nuestras guías te llevarán desde los conceptos básicos hasta técnicas avanzadas.
              Perfectas para principiantes y desarrolladores experimentados.
            </p>
            <button
                className="bg-white text-purple-700 font-medium py-3 px-6 rounded-md shadow-md hover:bg-purple-50 transition-colors">
              Explorar todas las guías
            </button>
          </div>
        </div>
      </section>
  )
}

export default Advices