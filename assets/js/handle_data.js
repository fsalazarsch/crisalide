// Función para cargar y mostrar el archivo JSON.
// Función para cargar y mostrar el archivo JSON.
async function cargarJSON(ruta) {
    try {
        // Realiza una solicitud HTTP para cargar el archivo JSON.
        const response = await fetch('assets/data/'+ruta+'.json');

        // Verifica si la solicitud fue exitosa.
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }

        // Parsea el contenido JSON.
        const data = await response.json();

        // Obtén el contenedor y la lista en el documento HTML.
        const jsonContainer = document.getElementById('json-container-'+ruta);
        const jsonList = document.getElementById(ruta);


        // Itera sobre los elementos del JSON y crea una lista.
        data.forEach(item => {
            

            const divElement = document.createElement('div');
            divElement.className = 'resume-item';
            const h4Element = document.createElement('h4');
            if (item.data)
                h4Element.innerHTML = item.posicion+ "<a href="+item.data+"><i class=\"fa-solid fa-download\"></i></a>"
            else
                h4Element.textContent = item.posicion; 
            divElement.appendChild(h4Element);
            const h5Element = document.createElement('h5');
            h5Element.textContent = item.tiempo; 
            divElement.appendChild(h5Element);

            const pElement = document.createElement('p');
            pElement.innerHTML = "<em>"+item.lugar+"</em>"; 
            divElement.appendChild(pElement);
            
            divElement.innerHTML += item.cuerpo;



            //const listItem = document.createElement('li');
            //listItem.textContent = `Nombre: ${item.nombre}, Edad: ${item.edad}, Ciudad: ${item.ciudad}`;
            jsonList.appendChild(divElement);
        });

        // Agrega la lista al contenedor.
        if (jsonContainer && jsonList) {
            jsonContainer.appendChild(jsonList);
        }
    } catch (error) {
        console.error(error);
    }
}

// Llama a la función para cargar el archivo JSON cuando la página se carga completamente.
window.onload = cargarJSON("experience");
window.onload = cargarJSON("education");
window.onload = cargarJSON("certifications");
window.onload = cargarJSON("languages");
