// Menambahkan sedikit efek interaktif pada teks ucapan
document
  .getElementById("ucapan-text")
  .addEventListener("mouseover", function () {
    this.style.transform = "rotate(5deg)";
    this.style.transition = "transform 0.3s ease-in-out";
  });

document
  .getElementById("ucapan-text")
  .addEventListener("mouseout", function () {
    this.style.transform = "rotate(0deg)";
  });
