'use client';
const ErrorPage = ({error}) => {
  return (
    <div className="mt-2 text-2xl">{error.message}</div>
  )
}
export default ErrorPage