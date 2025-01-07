import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container text-center py-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-muted">
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="btn btn-primary mt-4">
        Go Back to Home
      </a>
    </div>
  );
}