alert("JS OK");
// ```javascript

// /* =========================
//    GET ELEMENTS
// ========================= */

// console.log("JS OK");
// const searchInput = document.getElementById("searchInput");
// const searchBtn = document.getElementById("searchBtn");

// const productCards = document.querySelectorAll(".product-card");

// const filterButtons = document.querySelectorAll(".filter");

// const addCartButtons = document.querySelectorAll(".add-cart");

// const cartBtn = document.getElementById("cartBtn");
// const cartCountElement = document.getElementById("cartCount");

// const accountBtn = document.getElementById("accountBtn");

// const categoryCards = document.querySelectorAll(".category-card");

// const carButtons = document.querySelectorAll(".cars-grid button");

// const aboutBtn = document.getElementById("aboutBtn");

// /* =========================
//    SHOPPING CART
// ========================= */

// let cartCount = 0;

// let cart = [];

// /* =========================
//    ADD TO CART
// ========================= */

// addCartButtons.forEach(function (button) {

//     button.addEventListener("click", function () {

//         const productName = button.dataset.name;

//         const productPrice = Number(button.dataset.price);

//         cart.push({
//             name: productName,
//             price: productPrice
//         });

//         cartCount++;

//         cartCountElement.textContent = cartCount;

//         const oldText = button.textContent;

//         button.textContent = "اضافه شد ✓";

//         button.style.background = "#16a34a";

//         setTimeout(function () {

//             button.textContent = oldText;

//             button.style.background = "";

//         }, 1000);

//     });

// });

// /* =========================
//    CART BUTTON
// ========================= */

// cartBtn.addEventListener("click", function () {

//     if (cart.length === 0) {

//         alert("سبد خرید شما خالی است.");

//         return;

//     }

//     let totalPrice = 0;

//     cart.forEach(function (product) {

//         totalPrice += product.price;

//     });

//     alert(
//         "تعداد کالاها: " +
//         cart.length +
//         "\n\n" +
//         "مبلغ کل: " +
//         totalPrice.toLocaleString("fa-IR") +
//         " تومان"
//     );

// });

// /* =========================
//    SEARCH
// ========================= */

// function searchProducts() {

//     const searchValue =
//         searchInput.value
//             .trim()
//             .toLowerCase();

//     productCards.forEach(function (card) {

//         const productName =
//             card.dataset.name.toLowerCase();

//         const productCategory =
//             card
//                 .querySelector(".product-category")
//                 .textContent
//                 .toLowerCase();

//         if (
//             searchValue === "" ||
//             productName.includes(searchValue) ||
//             productCategory.includes(searchValue)
//         ) {

//             card.style.display = "block";

//         } else {

//             card.style.display = "none";

//         }

//     });

// }

// searchBtn.addEventListener(
//     "click",
//     searchProducts
// );

// searchInput.addEventListener(
//     "keydown",
//     function (event) {

//         if (event.key === "Enter") {

//             searchProducts();

//         }

//     }
// );

// /* =========================
//    PRODUCT FILTER
// ========================= */

// filterButtons.forEach(function (button) {

//     button.addEventListener("click", function () {

//         /* Remove active from all */

//         filterButtons.forEach(function (btn) {

//             btn.classList.remove("active");

//         });

//         /* Add active to selected button */

//         button.classList.add("active");

//         const selectedCategory =
//             button.dataset.category;

//         productCards.forEach(function (card) {

//             const cardCategory =
//                 card.dataset.category;

//             if (
//                 selectedCategory === "all" ||
//                 selectedCategory === cardCategory
//             ) {

//                 card.style.display = "block";

//             } else {

//                 card.style.display = "none";

//             }

//         });

//     });

// });

// /* =========================
//    CATEGORY CARDS
// ========================= */

// categoryCards.forEach(function (card) {

//     card.addEventListener("click", function () {

//         const category =
//             card.dataset.category;

//         /* Go to products */

//         document
//             .getElementById("products")
//             .scrollIntoView({
//                 behavior: "smooth"
//             });

//         /* Find matching filter */

//         filterButtons.forEach(function (button) {

//             button.classList.remove("active");

//             if (
//                 button.dataset.category === category
//             ) {

//                 button.classList.add("active");

//             }

//         });

//         /* Filter products */

//         productCards.forEach(function (product) {

//             if (
//                 product.dataset.category === category
//             ) {

//                 product.style.display = "block";

//             } else {

//                 product.style.display = "none";

//             }

//         });

//     });

// });

// /* =========================
//    CAR BUTTONS
// ========================= */

// carButtons.forEach(function (button) {

//     button.addEventListener("click", function () {

//         const carName =
//             button.dataset.car;

//         alert(
//             "قطعات مناسب " +
//             carName +
//             " به‌زودی نمایش داده می‌شود."
//         );

//     });

// });

// /* =========================
//    ACCOUNT BUTTON
// ========================= */

// accountBtn.addEventListener(
//     "click",
//     function () {

//         alert(
//             "بخش حساب کاربری سپهر به‌زودی فعال می‌شود."
//         );

//     }
// );

// /* =========================
//    ABOUT BUTTON
// ========================= */

// aboutBtn.addEventListener(
//     "click",
//     function () {

//         alert(
//             "سپهر؛ فروشگاه تخصصی لوازم یدکی خودرو."
//         );

//     }
// );

// /* =========================
//    NAVBAR ACTIVE STATE
// ========================= */

// const navLinks =
//     document.querySelectorAll(".navbar a");

// navLinks.forEach(function (link) {

//     link.addEventListener("click", function () {

//         navLinks.forEach(function (item) {

//             item.classList.remove("active");

//         });

//         link.classList.add("active");

//     });

// });

// /* =========================
//    PAGE LOADED
// ========================= */

// console.log(
//     "Sepehr website JavaScript is connected successfully."
// );
// ```;
