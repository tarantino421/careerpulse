const faqsBtn = document.querySelectorAll(".faqs-btn");
const accBlocks = document.querySelectorAll(".faqs-block");

faqsBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accBlocks[index].classList.toggle("active");
    faqsBtn[index].classList.toggle("active");
  });
});

// Перевірка, чи клік відбувся поза акордеон-блоками і кнопками фільтра
document.addEventListener("click", (event) => {
  const target = event.target;

  if (!target.closest(".faqs-block") && !target.closest(".faqs-btn")) {
    accBlocks.forEach((block) => {
      block.classList.remove("active");
    });
    faqsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
});
