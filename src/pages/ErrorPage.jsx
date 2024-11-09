
import NavBar from "../components/NavBar"; // Importing NavBar
import "./ErrorPage.css"; // Optional: you can style the ErrorPage if needed

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </>
  );
}

export default ErrorPage;
