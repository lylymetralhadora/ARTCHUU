// const anImage = document.getElementById('anImage');
// const exImage = document.getElementById('exImage');

// anImage.addEventListener('change', () => {
//     const file = anImage.files[0];
//     if (file) {
//         const reader = new FileReader();

//         reader.onload = (e) => {
//             exImage.src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     }
// })

async function fetchArtes() {
    try {
        const response = await fetch('/http://localhost:3000/api/store/getArtes');
        const data = await response.json();

        const arteList = document.getElementById('arte-list');
        arteList.innerHTML = '';

        data.forEach(arte => {
        const li = document.createElement('li');
        li.textContent = arte.nome;
        arteList.appendChild(li)
        });
    } catch (error) {
        console.error('erro:', error);
        const errorElement = document.getElementById('error-element');
        errorElement.textContent = 'erro ao carregar';
    }
}
fetchArtes();