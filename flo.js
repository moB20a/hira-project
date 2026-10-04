// ============================
// MENU FILTER
// ============================

const tabs = document.querySelectorAll(".tab");
const menuItems = document.querySelectorAll(".menu-item");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    const category = tab.dataset.category;

    menuItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "flex";

        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, 50);
      } else {
        item.style.opacity = "0";
        item.style.transform = "translateY(15px)";

        setTimeout(() => {
          item.style.display = "none";
        }, 250);
      }
    });
  });
});

// ============================
// RESERVATION MODAL
// ============================

const modal = document.getElementById("reservationModal");

function openReservation() {
  modal.classList.add("show");
}

function closeReservation() {
  modal.classList.remove("show");
}

// کلیک بیرون از باکس

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeReservation();
  }
});

// ============================
// RESERVE
// ============================

function reserveTable() {
  const name = document.querySelector('.modal-box input[type="text"]').value;

  if (name.trim() === "") {
    alert("لطفاً نام خود را وارد کنید.");

    return;
  }

  alert(`مرسی ${name} 🌸\nدرخواست رزرو شما ثبت شد.`);

  closeReservation();
}

// ============================
// ABOUT BUTTON
// ============================

function showMessage() {
  alert(
    "به گل باول خوش آمدید 🌷\n\n" +
      "اینجا قراره قهوه، گل و لحظه‌های خوب کنار هم قرار بگیرن."
  );
}
