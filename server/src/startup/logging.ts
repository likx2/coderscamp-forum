export function startupLogging(): void {
  // Exceptions handler
  process.on('uncaughtException', (ex) => {
    console.error('UNCAUGHT EXCEPTION!')
    console.error(ex.message)
    console.error(ex)
    process.exit(1)
  })

  // Promise Rejections Handler
  process.on('unhandledRejection', (ex) => {
    console.error('UNHANDLED REJECTION!')
    console.error(ex)
    process.exit(1)
  })
}
