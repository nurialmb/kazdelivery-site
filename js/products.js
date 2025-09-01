// Sample product data
const products = [
  {
    name: "Этиленгликоль",
    // image: "images/ethyleneglycol.png",
    whatsappLink: "https://wa.me/77009786168?text=Здравствуйте! Интересует Серная кислота"
  },
  {
    name: "ИОМС-1",
    image: "images/ammonium_nitrate.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Аммиачная селитра"
  },
  {
    name: "Сульфат алюминия",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Ортофосфорная кислота",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Пропиленгликоль",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "УЩР",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Иодид калия",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Силикагель",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Муравьиная кислота",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Лимонная кислота",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000"
  },
  {
    name: "Сильфоуголь",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Кварцевый песок",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Известь негашенная комовая",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Барит",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Катионит",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "КМЦ",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Сульфат аммония",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Бентонит",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Активированный уголь",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Лигносульфонат",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Соль техническая",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Жидкое стекло",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Кальций хлористый",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Известь гидратная пушонка",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Известь негашенная дробленная",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },
  {
    name: "Маршалит",
    image: "images/activated_carbon.jpg",
    whatsappLink: "https://wa.me/77470000000?text=Здравствуйте! Интересует Активированный уголь"
  },

];

// Pagination variables
const itemsPerPage = 16;
const urlPage = new URLSearchParams(window.location.search).get("page");
let currentPage = parseInt(urlPage) || 1;


// Render products
function renderProducts(page) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = products.slice(start, end);

  paginatedItems.forEach((product, index) => {
    const actualIndex = (page - 1) * itemsPerPage + index; // use the page arg
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.setAttribute("data-name", product.name.toLowerCase());

    // ✅ only add ?page=N when N > 1
    const pageQS = page > 1 ? `&page=${page}` : "";
    card.innerHTML = `
      <h3><a href="product.html?id=${actualIndex}${pageQS}">${product.name}</a></h3>
    `;

    container.appendChild(card);
  });

  renderPagination();
}

function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("productContainer");
  const pagination = document.getElementById("pagination");

  if (query) {
    // show all items for searching
    container.innerHTML = "";
    products.forEach((product, index) => {
      if (product.name.toLowerCase().includes(query)) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.setAttribute("data-name", product.name.toLowerCase());
        card.innerHTML = `
          <h3><a href="product.html?id=${index}">${product.name}</a></h3>
        `;
        container.appendChild(card);
      }
    });
    pagination.style.display = "none";
  } else {
    // return to paginated view
    renderProducts(currentPage);
    pagination.style.display = "flex";
  }
}



// Render pagination buttons
function renderPagination() {
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("pagination-btn");
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts(currentPage);
    });
    pagination.appendChild(btn);
  }
}

// Initial load
renderProducts(currentPage);
