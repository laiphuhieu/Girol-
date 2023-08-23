var categories = [
  { id: 1, title: "INFINITY MEDS Injection" },
  { id: 2, title: "INFINITY MEDS Oral" },
  { id: 3, title: "SYNERGENYX Injection" },
  { id: 4, title: "SYNERGENYX Oral" },
  { id: 5 },
  { id: 6 },
];

var products = [
  {
    id: 1,
    category: 2,
    name: "Trenbolon.HAHAHAAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 1,
    name: "CLEN.B",
    img: "./assets/img/placeholder.png",
  },
  {
    id: 1,
    category: 1,
    name: "Trenbolon.HAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 3,
    name: "CLEN.B",
    img: "./assets/img/placeholder.png",
  },
  {
    id: 1,
    category: 1,
    name: "Trenbolon.HAHAHAAH",
    img: "./assets/img/TRENBOLONE.H-scaled.jpg",
  },
  {
    id: 1,
    category: 2,
    name: "TrenbolonHAHAAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 3,
    name: "TrenbolonHAH",
    img: "./assets/img/TRENBOLONE.H-scaled.jpg",
  },
  {
    id: 1,
    category: 2,
    name: "CLEN.B",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 4,
    name: "TrenbolonAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 1,
    name: "Trenbolon.HAHAHAAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 4,
    name: "TrenbolonAAHAH",
    img: "./assets/img/placeholder.png",
  },
  {
    id: 1,
    category: 1,
    name: "Trenbolon.HAHAHAAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 4,
    name: "Trenbolon.HAHAHAAHAH",
    img: "./assets/img/placeholder.png",
  },
  {
    id: 1,
    category: 3,
    name: "Trenbolon.HAHAHAAHAH",
    img: "./assets/img/CLEN.B-scaled.jpg",
  },
  {
    id: 1,
    category: 2,
    name: "CLEN.B",
    img: "./assets/img/TRENBOLONE.H-scaled.jpg",
  },
  {
    id: 1,
    category: 1,
    name: "Trenbolon",
    img: "./assets/img/placeholder.png",
  },
];

var msnry;
var grid;

function initSlider() {
  let slider = tns({
    container: ".hero-banner",
    slideBy: 1,
    autoplay: false,
    nav:false,
    controls: true,
    speed: 500,
    prevButton: ".btn-left",
    nextButton: ".btn-right",
  });
}

function initProductsSlider() {
  let slider2 = tns({
    container: ".slider-container",
    items: 1,
    nav: true,
    mouseDrag: true,
    speed: 1000,
    navAsThumbnails: true,
    // controlsContainer: ".products-slider-controler",
    preventActionWhenRunning: true,
  });
}

function handleMobileBar() {
  let btnMenu = document.querySelector(".menu-device-btn");
  let btnCloseMobileBar = document.querySelector(".close-menu");
  let home = document.querySelector(".home");
  let btnShowSubNav = document.querySelector(".more");
  let subNav = document.querySelector(".sub-nav2");

  btnMenu.addEventListener("click", function (e) {
    e.preventDefault();
    home.classList.add("mobile-active");
  });

  btnCloseMobileBar.addEventListener("click", function (e) {
    e.preventDefault();
    home.classList.remove("mobile-active");
  });

  btnShowSubNav.addEventListener("click", function (e) {
    e.preventDefault();
    subNav.classList.toggle("show");
    btnShowSubNav.classList.toggle("show");
  });
}

function handleMobileBarWindowResize() {
  let windowWidth = window.innerWidth;
  let home = document.querySelector(".home");
  let subNav = document.querySelector(".sub-nav2");
  let btnShowSubNav = document.querySelector(".more");

  function clearStateMobileBar() {
    home.classList.remove("mobile-active");
    btnShowSubNav.classList.remove("show");
    subNav.classList.remove("show");
  }

  if (windowWidth > 1023) clearStateMobileBar();
}

function handleMasonry() {
  imagesLoaded(grid, function () {
    msnry = new Masonry(grid, {
      // options
      itemSelector: ".product-wrapper",
      columnWidth: ".product-wrapper:not(.is-hidden)",
    });
  });
}

function getSiblings(elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === elem) continue;
    siblings.push(sibling);
  }
  return siblings;
}

function handleClickCategoryFilter() {
  let listItems = document.querySelectorAll(".category-item");

  for (let listItem of listItems) {
    listItem.addEventListener("click", function (e) {
      const _this = this;
      const itemSiblings = getSiblings(listItem);

      listItem.classList.add("is-active");

      for (let itemSibling of itemSiblings) {
        if (itemSibling.classList.contains("is-active")) {
          itemSibling.classList.remove("is-active");
        }
      }

      const catIdIsActived = _this.getAttribute("data-tab-category");

      filterProductItem(catIdIsActived);
    });
  }
}

function filterProductItem(catId) {
  if (catId === "all") {
    // remove is-hidden for all items
    const productItems = document.querySelectorAll(".product-wrapper");

    for (const productItem of productItems) {
      productItem.classList.remove("is-hidden");
    }
  } else {
    // add is-hidden for excluded items of actived category
    const productItems = document.querySelectorAll(".product-wrapper");

    for (let productItem of productItems) {
      const productItemId = productItem.getAttribute("data-tab-category-item");
      if (productItemId !== catId) {
        productItem.classList.add("is-hidden");
      } else {
        productItem.classList.remove("is-hidden");
      }
    }
  }

  msnry.layout();
}

function initCategory() {
  let listCategory = document.querySelector(".categories");
  let listTabCategoryItem = document.querySelector(".grid");

  //init category
  function initCategory(category) {
    let categoryHeading = document.createElement("li");
    let linkCategoryItem = document.createElement("span");

    linkCategoryItem.innerHTML = `${category.title}`;
    categoryHeading.appendChild(linkCategoryItem);
    categoryHeading.classList.add("category-item");
    categoryHeading.setAttribute("data-tab-category", category.id);
    listCategory.appendChild(categoryHeading);
  }

  // init category product
  function initCategoryItem(product) {
    let productList = document.createElement("div");
    let productContent = document.createElement("div");
    let productImg = document.createElement("img");
    let productOverlay = document.createElement("div");
    let productInfo = `<a href="#" class="info">
    <h4 class="title">${product.name}</h4>
  </a>`;

    productList.classList.add(
      "product-wrapper",
      "product-item-width4",
      "product-item-width6"
    );
    productList.setAttribute("data-tab-category-item", product.category);
    productImg.src = "./assets/img/CLEN.B-scaled.jpg";

    productContent.classList.add("product");
    productOverlay.classList.add("overlay");

    productContent.innerHTML = productInfo;
    productContent.appendChild(productOverlay);
    productContent.appendChild(productImg);

    productList.appendChild(productContent);
    listTabCategoryItem.appendChild(productList);
  }

  for (let category of categories) {
    initCategory(category);
  }

  for (let product of products) {
    initCategoryItem(product);
  }
}

window.addEventListener("resize", function () {
  handleMobileBarWindowResize();
});

window.onload = () => {
  grid = document.querySelector(".grid");

  initCategory();
  initSlider();
  handleMasonry();
  handleMobileBar();
  initProductsSlider();
  handleClickCategoryFilter();
};
