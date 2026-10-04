// =========================
// MENU FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.filter;

    menuCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// =========================
// ORDER
// =========================

let order = [];

// اضافه کردن محصول

function addToOrder(name, price) {
  const existingItem = order.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    order.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  updateCart();

  showToast(`${name} به سفارش اضافه شد ☕`);
}

// =========================
// UPDATE CART
// =========================

function updateCart() {
  const cartCount = document.getElementById("cartCount");

  const totalQuantity = order.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }
}

// =========================
// OPEN ORDER
// =========================

function openOrder() {
  const overlay = document.getElementById("orderOverlay");

  renderOrder();

  overlay.classList.add("active");

  document.body.style.overflow = "hidden";
}

// =========================
// CLOSE ORDER
// =========================

function closeOrder(event) {
  if (event && event.target !== document.getElementById("orderOverlay")) {
    return;
  }

  const overlay = document.getElementById("orderOverlay");

  overlay.classList.remove("active");

  document.body.style.overflow = "";
}

// =========================
// SHOW PRODUCTS
// =========================

function renderOrder() {
  const orderItems = document.getElementById("orderItems");
  const orderTotal = document.getElementById("orderTotal");

  if (order.length === 0) {
    orderItems.innerHTML = `
            <p class="empty-order">
                هنوز چیزی انتخاب نکردی ☕
            </p>
        `;

    orderTotal.textContent = "۰ تومان";

    return;
  }

  orderItems.innerHTML = "";

  let total = 0;

  order.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    const div = document.createElement("div");

    div.className = "order-item";

    div.innerHTML = `

            <div class="order-info">

                <h4>${item.name}</h4>

                <span>
                    ${item.price.toLocaleString()} تومان
                </span>

            </div>


            <div class="quantity">

                <button onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="changeQuantity(${index}, -1)">
                    −
                </button>

            </div>

        `;

    orderItems.appendChild(div);
  });

  orderTotal.textContent = total.toLocaleString() + " تومان";
}

// =========================
// CHANGE QUANTITY
// =========================

function changeQuantity(index, amount) {
  order[index].quantity += amount;

  if (order[index].quantity <= 0) {
    order.splice(index, 1);
  }

  updateCart();

  renderOrder();
}

// =========================
// SUBMIT ORDER
// =========================

function submitOrder() {
  if (order.length === 0) {
    alert("اول حداقل یک محصول انتخاب کن ☕");

    return;
  }

  alert(
    "سفارش شما با موفقیت ثبت شد 🤎\n\n" + "ممنون که Pelazho را انتخاب کردی!"
  );

  order = [];

  updateCart();

  closeOrder();
}

// =========================
// TOAST
// =========================

function showToast(message) {
  const toast = document.createElement("div");

  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";

  toast.style.background = "#38291f";
  toast.style.color = "white";

  toast.style.padding = "13px 22px";

  toast.style.borderRadius = "30px";

  toast.style.zIndex = "10000";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2200);
}

// =========================
// SCROLL TO MENU
// =========================

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
  });
}

// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
