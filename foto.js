const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const gallery = document.getElementById('gallery');
let imageCount = 0; // Conta o número de imagens

// Função para exibir o modal com a imagem clicada
function showModal(image) {
    modal.style.display = "flex";
    modalImg.src = image.src;
}

function closeModal() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.addEventListener('click', function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
});

// Função para carregar imagens no formato de galeria
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length + imageCount > 200) {
    alert("Você pode adicionar até 200 imagens.");
    return;
    }

    for (let i = 0; i < files.length && imageCount < 200; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = function(e) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = e.target.result;
        img.onclick = () => showModal(img);

        // Botão de exclusão
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = 'X';
        deleteBtn.onclick = () => {
        gallery.removeChild(galleryItem);
        imageCount--;
        }

        galleryItem.appendChild(img);
        galleryItem.appendChild(deleteBtn);
        gallery.appendChild(galleryItem);
        imageCount++;
    }
    reader.readAsDataURL(file);
    }
});