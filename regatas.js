/*
Este código a continuación crea un selector de idioma simple con un select y dos opciones: "Español" y "Inglés". 
El atributo selected en la opción de español asegura que esté seleccionado por defecto. Cuando el 
usuario cambia la selección, el evento change del select dispara una función que obtiene el valor 
seleccionado y cuando se cambie su valor se llame a la función translate().*/

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
    const selectedValue = languageSelect.value;
    translate(selectedValue);
});

/*
FUNCIÓN TRANSLATE()
Esta función debe de leer el valor del selector y hacer la petición HTTP del archivo json correspondiente con el  
idioma seleccionado.*/

let translate = async (value) => {
    let peticion = await fetch(`./api/${value}`, {
        method: "GET",
    });
    if (peticion.status === 200) {
        let datos = await peticion.json();
        // Obtener todos los elementos con el atributo data-translate
        const elementsToTranslate = document.querySelectorAll('[data-translate]');

        // Iterar sobre cada elemento y reemplazar su contenido con la traducción correspondiente
        elementsToTranslate.forEach((element) => {
            const translationKey = element.dataset.translate;
            element.innerHTML = datos[translationKey];
        });
    }
};