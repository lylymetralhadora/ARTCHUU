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
        const response = await fetch('http://localhost:3000/api/get/getArtes');
        const data = await response.json();
        
        const arteList = document.getElementById('arte-list');
        arteList.innerHTML = '';

        console.log(data)
        data.data.forEach(arte => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `http://localhost:3000/uploads/${arte.arte}`;
        li.appendChild(img);
        const p = document.createElement('p')
        p.innerText = `${arte.legenda}`

        arteList.appendChild(li);
        arteList.appendChild(p);
        }
        
        // } catch (error) {
        //     console.error('erro:', error);
        //     const errorElement = document.getElementById('error-element');
        //     errorElement.textContent = 'erro ao carregar';
        // }
    );
}

fetchArtes();