const MIN_LOADING_TIME = 300
const startTime = performance.now()

window.onload = () => {
  const elapsed = performance.now() - startTime
  const wait = Math.max(MIN_LOADING_TIME - elapsed, 0)

  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('hidden')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, wait)
}