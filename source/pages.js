// Блокировка прокрутки страницы
document.body.style.overflow = 'hidden';

// Через 3 секунды скрываем лоадер и разблокируем прокрутку
setTimeout(function() {
  document.getElementById('loader').style.display = 'none';
  document.body.style.overflow = 'auto';  // Разблокируем прокрутку
}, 1000);


function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
