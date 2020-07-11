export default function errorHandler(
  error: any,
  request: any,
  response: any,
  next: any
) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Something went wrong.",
      info: error.info || {},
    },
  });
}
