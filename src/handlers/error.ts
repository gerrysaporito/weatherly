/*
 * @description: Handler to display errors without shutting down the server.
 *
 * @param: error (Exception Object)
 * @param: request (Object)
 * @param: response (Object)
 * @param: next (Function)
 * @return Object
 */
export default function errorHandler(
  error: any,
  req: any,
  res: any,
  next: any
) {
  return res.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Something went wrong.",
      info: error.info || { request: req },
    },
  });
}
