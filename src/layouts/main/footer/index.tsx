const Footer = () => {
  return (
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-200 flex">
        <div className="mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-xl font-bold text-white mb-4">Guardamelo Blog</h3>
          <p className="mb-4 text-sm md:text-base">
            Recursos de alta calidad para aprender programación y desarrollo web.
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Guardamelo Blog. Todos los derechos reservados.
          </p>
        </div>
      </footer>
  )
}

export default Footer