/*
 * @description: Handler to display errors without shutting down the server.
 *
 * @param: error (Exception Object)
 * @param: request (Object)
 * @param: response (Object)
 * @param: next (Function)
 * @return Object
 */
export default function errorHandler(err: any, req: any, res: any, next: any) {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || "Oops! Something went wrong.",
      info: err.info || { request: req },
    },
  });
}
