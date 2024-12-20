class Exception extends Error {
  code: number
  constructor(code: number, message: string) {
    super(message)
    this.code = code
    this.message = message
  }
}

export default Exception
