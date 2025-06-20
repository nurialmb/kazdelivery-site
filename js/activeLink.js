console.log("JS is running...");

const currentPage = location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {
  const href = link.getAttribute("href");

  if (
    href === currentPage ||
    (href.includes("index") && currentPage === "") // for homepage with blank path
  ) {
    link.classList.add("active");
  }
});
