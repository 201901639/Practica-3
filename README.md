# Practica-3
Repositorio de la práctica de Java Script

Vamos a traducir mi página web anterior

Para ello, he seguido los siguientes pasos:

1. He creado una carpeta "api" en mi proyecto web con los siguientes ficheros:

    Fichero: es.index.json
    Contenido:
    {
        "title": "RFEV",
        "h1": "Real Federación Española de Vela",
        "div class = mis-categorias Regatas": "Regatas",
        "div class = mis-categorias Regatistas": "Regatistas",
        "div class = mis-categorias Multimedia": "Multimedia"
    }

    Fichero: en.index.json
    Contenido:
    {
        "title": "RSSF",
        "h1": "Royal Spanish Sailing Federation",
        "div class = mis-categorias Regatas": "Races",
        "div class = mis-categorias Regatistas": "Sailors",
        "div class = mis-categorias Multimedia": "Photos & Videos"
    }

    Fichero: es.regatas.json y en.regatas.json que hacen lo mismo pero para la página Regatas

2. He usado Fetch para hacer peticiones HTTP por JS y así recuperar esos JSON con el método GET a la URL ./api/es.index/regatas.json

3. He creado un selector de idioma, con el español seleccionado por defecto. El "value" de las opciones coincide con el nombre del fichero JSON con sus traducciones: "es.index.json", etc.

4. Ese selector tiende un evento que cuando se cambia su valor se llama a una función JS que be creado: translate()

5. Esa función lee el valor del selector y hace la petición HTTP del punto 2 con la URL correcta para el idioma seleccionado.

6. Una vez tengo el JSON con las traducciones, he seleccionado con el DOM los elementos cuyos contenidos queremos reemplazar, sin embargo mis etiquetas <a> no funcionan cuando se hace el reemplazo, no he sabido darles funcionalidad una vez reemplazado el texto de los "botones". Para identificarlos, les he puesto un atributo "data-translate" con un valor que coincide con el nombre de la clave en el JSON He usado un querySelectorAll para obtener todos a la vez. Para recuperar el valor del data-translate en cada elemento he utilizado elemento.dataset.translate