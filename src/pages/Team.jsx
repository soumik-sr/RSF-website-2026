import Navbar from "../components/NavbarV2/Navbar.jsx";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";

export default function Team() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <main style={{ padding: "4rem 1.5rem", maxWidth: "1200px", margin: "auto" }}>
        <h1>Our Team</h1>
        <p>Meet the people behind RSF.</p>
      </main>
    </>
  );
}
