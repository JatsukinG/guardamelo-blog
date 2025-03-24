import './loader.css'

const LoadingPage = () => {
  return (
      <div className="fixed inset-0 bg-white/80 dark:bg-black/30 backdrop-blur-sm z-50 flex">
        <div className="m-auto loader">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
      </div>
  )
}

export default LoadingPage