import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Lokasi Toko</a>
          <a href="#">FAQ</a>
          <a href="#">News</a>
          <a href="#">Lowongan</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/E1eng"
          >
            &nbsp; Teddy Al Ghozali
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
