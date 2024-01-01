// list of proyects
const projects = [
    {   
        name : "Eccomerce OutXtyle", 
        description : "Esta es una tienda de ropa, que cuenta con paginas como inicio, tienda, contacto, terminos y condiciones, ropa filtrada por tipos, pasarela de pago y mensaje de pago satisfactorio. tambien cuenta con secciones como detalle del producto con diferentes opciones, carrito de compras, prendas recomendadas del mes, etc.", 
        imgSrc : "img-outxtyle.avif", 
        enlaceWeb : "https://wmolina17.github.io/Out-Xtyle-Ecommerce/", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "bootstrap",
        git : "git",
        sql : "librerias js",
    },
    {   
        name : "Landing Page Clean Code Ebook", 
        description : "Esta es una web para promocionar el ebook de Clean Code en español el cual es un libro en donde se acumulan detalles y tecnicas para ser un buen programador, aqui las personas podran ver de que trata el libro tema por tema, quien es su autor, opiniones y demas cosas.", 
        imgSrc : "img-cleanCode.avif", 
        enlaceWeb : "https://wmolina17.github.io/Web-Clean-Code-Ebook/", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Real Juventud De America FC", 
        description : "Esta es una pagina web de un equipo de futbol, El CD Real Juventud de América FC el cual es un club deportivo comprometido con los procesos formativos y deportivos con cada afiliado, son una institucion deportiva legal que cuenta con reconocimiento deportivo vigente registrado en la Secretaria Distrital de Recreación , Deportes de Barranquilla y la liga del Atlantico.", 
        imgSrc : "img-webfootball.avif", 
        enlaceWeb : "", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "bootstrap",
        git : "git",
        sql : "",
    },
    {   
        name : "Cafeteria Memorella", 
        description : "Esta es una web cafeteria, esta cuenta con muchas secciones como sobre nosotros, variedades del menu, apartado de reservaciones, apartado de contacto, galeria de productos, slider de testimonios, etc.", 
        imgSrc : "img-memorella.avif", 
        enlaceWeb : "https://wmolina17.github.io/Memorella-coffe-store", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "librerias js",
    },
    {   
        name : "Landing Page One Piece", 
        description : "esta es una landing page de one piece el anime / manga mas vendido del mundo, esta web cuenta con secciones como sobre la serie, la tripulacion, sagas de la serie, el tema central, el autor, donde ver el anime, donde leer el manga, etc.", 
        imgSrc : "img-one-piece-web.avif", 
        enlaceWeb : "https://wmolina17.github.io/One-Piece-web/", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Second Life Donations", 
        description : "esta es una web de donaciones en ingles, enfocada en la donacion de ropa para las personas mas necesitadas, esta cuenta con secciones como sobre nosotros, como donar, donar ahora, top donadores, team del proyecto, porque donar, etc.", 
        imgSrc : "img-secondLife.avif", 
        enlaceWeb : "https://wmolina17.github.io/Second-Life-Donation/", 
        enlaceGit : "https://github.com/Wmolina17/Second-Life-Donation", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "librerias js",
    },
    {   
        name : "Web Clima", 
        description : "esta es una pagina web que consume una api del clima, en donde poner el lugar y te salen caracteristicas como temperatura, sensacion termica, humedad, entre otras cosas del lugar. ", 
        imgSrc : "web-clima.avif", 
        enlaceWeb : "https://wmolina17.github.io/App-clima/", 
        enlaceGit : "https://github.com/Wmolina17/App-clima", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Web Quitador De Fondos", 
        description : "Esta web es una herramienta para las personas que quieran quitar el fondo de cualquier tipo de imagen y luego descargarlas para usarla en cualquier tipo de proyecto. ", 
        imgSrc : "quita-fondos.avif", 
        enlaceWeb : "", 
        enlaceGit : "https://github.com/Wmolina17/Quita-Fondos-React", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "react",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "tailwind",
        git : "git",
        sql : "",
    },
    {   
        name : "Web Buscador De Peliculas", 
        description : "Esta web es una herramienta para las personas que quieran buscar peliculas y saber cuantas peliculas hay de su serie favorita, le das el nombre de una saga de peliculas y te muestra todas las peliculas existentes de dicha saga, consultando en una API de peliculas. ", 
        imgSrc : "web-buscador-peliculas.avif", 
        enlaceWeb : "https://wmolina17.github.io/Buscador-peliculas/", 
        enlaceGit : "https://github.com/Wmolina17/Buscador-peliculas", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Web pomodoro", 
        description : "esta es una pagina web pomodoro, esta es una herramienta para el manejo del tiempo al momento de hacer tareas, aqui agregas tu tarea y se pone en la cola, puedes escoger cuando iniciar una tarea y tendras 25 min para esa actividad, luego 5 minutos de descanso ", 
        imgSrc : "web-pomodoro.avif", 
        enlaceWeb : "https://wmolina17.github.io/Pomodoro/", 
        enlaceGit : "https://github.com/Wmolina17/Pomodoro", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "facebook Frontend Clon", 
        description : "este es un clon de la pagina principal de facebook, cuenta con el maquetado de las secciones, maquetado de posts, sliders de historias, cards de secciones, cards de contactos, cards de grupos, etc. ", 
        imgSrc : "img-facebook-clone.avif", 
        enlaceWeb : "https://wmolina17.github.io/Facebook-Clone/", 
        enlaceGit : "https://github.com/Wmolina17/Facebook-Clone", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "librerias js",
    },
    {   
        name : "Google Frontend Clon", 
        description : "este es un clon de la pagina principal de Google, cuenta con el maquetado de las cards, el input principal, botones, iconos, y la modal de agregar nuevo fichero, entre otros. ", 
        imgSrc : "img-google-clone.avif", 
        enlaceWeb : "https://wmolina17.github.io/Google-clone/", 
        enlaceGit : "https://github.com/Wmolina17/Google-clone", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Juego Tic Tac Toe", 
        description : "Este es un juego donde cada uno coloca sus piezas  sobre un tablero, empiezan a moverse una intersección por turno. El primero que logra hacer una fila con sus tres piezas, gana. En esta variante, con un juego perfecto de ambos bandos, siempre conseguirá la victoria quien empieza la partida. ", 
        imgSrc : "img-tictactoe.avif", 
        enlaceWeb : "", 
        enlaceGit : "", 
        // tecnologias 
        js : "javascript",
        python : "node",
        react : "react",
        html : "",
        css : "css",
        django : "",
        bootstrap : "vite",
        git : "",
        sql : "",
    },
    {   
        name : "App Notas Django", 
        description : "esta es una pagina web de notas en Django framework web de python, esta cuenta con pagina principal, formularios de iniciar sesion / registrarse / crear tarea / modificar tarea conectados a una base datos, vista para las tareas hechas, las no hechas aun, etc. ", 
        imgSrc : "web-notesDjango.avif", 
        enlaceWeb : "", 
        enlaceGit : "https://github.com/Wmolina17/Django-Notes", 
        // tecnologias 
        js : "",
        python : "Python",
        react : "",
        html : "html",
        css : "css",
        django : "django",
        bootstrap : "bootstrap",
        git : "git",
        sql : "sql",
    },
    {   
        name : "Juego Cohete", 
        description : "este es un juego desarrollado en python, basado en esquivar las bombas dirigiendo el cohete con la inclinacion de tu cabeza, en donde se van ganando puntos en base al tiempo transcurrido ", 
        imgSrc : "img-cohetes.avif", 
        enlaceWeb : "", 
        enlaceGit : "https://github.com/Wmolina17/Juego-cohete", 
        // tecnologias 
        js : "",
        python : "Python",
        react : "",
        html : "",
        css : "",
        django : "librerias python",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Juego Dinosauro Google", 
        description : "este es un juego desarrollado en javascript, basado en el juego del dinosaurio de google, cambiandole detalles graficos como espacio, cactus, cielo, contador de puntos basado en el numero de cactus saltados, etc. ", 
        imgSrc : "img-dinoGoogle.avif", 
        enlaceWeb : "https://wmolina17.github.io/Dinosaurio-google/", 
        enlaceGit : "https://github.com/Wmolina17/Dinosaurio-google", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    {   
        name : "Web Calculadora", 
        description : "esta es una pagina web de calculadora, en donde puedes realizar las operaciones matematicas basicas como suma, resta, multiplicacion, division, etc. ", 
        imgSrc : "web-calculadora.avif", 
        enlaceWeb : "", 
        enlaceGit : "https://github.com/Wmolina17/Calculadora", 
        // tecnologias 
        js : "javascript",
        python : "",
        react : "",
        html : "html",
        css : "css",
        django : "",
        bootstrap : "",
        git : "git",
        sql : "",
    },
    
]



// funcionalidad ...
const ContProjects = document.getElementById("cont-cards-portafolio")
  
projects.forEach(project => {
  const divProject = document.createElement("div");

  divProject.innerHTML = `
    <div class="card-p" onclick="mostrarProject(this)">
        <img class="Project-img" src="img-proyectos/${project.imgSrc}"/>
        <div class="tecnologias">
            <p class="html">${project.html}</p>
            <p class="css">${project.css}</p>
            <p class="javascript">${project.js}</p>
            <p class="react">${project.react}</p>
            <p class="python">${project.python}</p>
            <p class="django">${project.django}</p>
            <p class="bootstrap">${project.bootstrap}</p>
            <p class="sql">${project.sql}</p>
            <p class="git">${project.git}</p>
        </div>
        <p class="project-name">${project.name}</p>
        <p class="project-desc">${project.description}</p>
        <a class="btn-2"> Ver Detalles</a>
        <div class="div-none">
            <a href="${project.enlaceGit}" class="project-link-git"></a>
            <a href="${project.enlaceWeb}" class="project-link-web"></a>
        </div>
    </div>
  `;
  ContProjects.appendChild(divProject);
});


// cartura de datos contenedores
const contProjectName = document.getElementsByClassName("cont-nombre-project")[0]
const contProjectDesc = document.getElementsByClassName("cont-desc-project")[0]
const contProjectImg = document.getElementsByClassName("cont-img-project")[0]
const contProjectlink = document.getElementsByClassName("cont-link-web")[0] // href
const contProjectGit = document.getElementsByClassName("cont-link-git")[0] // href
// ------------------------------------------------------------
const contHtml = document.getElementsByClassName("cont-html")[0]
const contCss = document.getElementsByClassName("cont-css")[0]
const contJs = document.getElementsByClassName("cont-javascript")[0]
const contPython = document.getElementsByClassName("cont-python")[0]
const contReact = document.getElementsByClassName("cont-react")[0]
const contDjango = document.getElementsByClassName("cont-django")[0]
const contGit = document.getElementsByClassName("cont-git")[0]
const contSql = document.getElementsByClassName("cont-sql")[0]
const contBootstrap = document.getElementsByClassName("cont-bootstrap")[0]



function mostrarProject(cardProject) {
    // mostrar vista
    const contVista = document.getElementsByClassName("cont-vista-detallada-project")[0]
    contVista.classList.add("left-vista")

    const bgBlack = document.getElementsByClassName("bg-black")[0]
    bgBlack.classList.add("bg-black-vista")

    // captura de datos cards
    const htmlC = cardProject.getElementsByClassName('html')[0];
    const cssC = cardProject.getElementsByClassName('css')[0];
    const javascriptC = cardProject.getElementsByClassName('javascript')[0];
    const reactC = cardProject.getElementsByClassName('react')[0];
    const pythonC = cardProject.getElementsByClassName('python')[0];
    const djangoC = cardProject.getElementsByClassName('django')[0];
    const gitC = cardProject.getElementsByClassName('git')[0];
    const sqlC = cardProject.getElementsByClassName('sql')[0];
    const bootstrapC = cardProject.getElementsByClassName('bootstrap')[0];
    const imgC = cardProject.getElementsByClassName('Project-img')[0];
    const projectNameC = cardProject.getElementsByClassName('project-name')[0];
    const projectDescC = cardProject.getElementsByClassName('project-desc')[0];
    const projectLinkGitC = cardProject.getElementsByClassName('project-link-git')[0];
    const projectLinkWebC = cardProject.getElementsByClassName('project-link-web')[0];


    // intercambio de datos
    contProjectName.innerText = projectNameC.innerText
    contProjectDesc.innerText = projectDescC.innerText
    contProjectImg.src = imgC.src
    contProjectlink.href = projectLinkWebC.href
    contProjectGit.href = projectLinkGitC.href
    contHtml.innerText = htmlC.innerText
    contCss.innerText = cssC.innerText
    contJs.innerText = javascriptC.innerText
    contPython.innerText = pythonC.innerText
    contReact.innerText = reactC.innerText
    contDjango.innerText = djangoC.innerText
    contGit.innerText = gitC.innerText
    contSql.innerText = sqlC.innerText
    contBootstrap.innerText = bootstrapC.innerText

}

function cerrarProject(){
    // cerrar vista
    const contVista = document.getElementsByClassName("cont-vista-detallada-project")[0]
    contVista.classList.remove("left-vista")

    const bgBlack = document.getElementsByClassName("bg-black")[0]
    bgBlack.classList.remove("bg-black-vista")
}

