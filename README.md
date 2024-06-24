
# Frontend en React, usando NextJS

## Instrucciones de uso

1. ```bun install```
2. ```bunx prisma db push```
3. ```bunx prisma db seed```
4. ```bun run dev```

*Es necesario tener un archivo `.env` con ```DATABASE_URL="file:./dev.db"``` como contenido*


## Enunciado

Se trata de hacer una aplicación con NextJS (así pues, full-stack) que sea muy simple pero utilice las partes clave de dNextJS para hacer un primer uso en un proyecto con la intención de practicar, antes de hacer el proyecto. Es necesario tocar el máximo de las siguientes características de NextJS (con AppRouter):

1. App Router, es decir las carpetas como rutas (`page.tsx`).
2. Usar [ShadcnUI](https://ui.shadcn.com) para componentes de interface.
3. Usar layouts (`layout.tsx`), errores (`error.tsx`) y loading (`loading.tsx`).
4. Usar [actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) para hacer cosas en el servidor.

La idea subyacente a la aplicación es libre completamente, pero debe ser sencilla (queremos programar una "prueba de concepto", no una app entera), y de la misma envergadura que el proyecto que se hizo en clase (el TODO List). Algunos ejemplos:

- Un pequeño gestor de ficheros: se muestra una lista de ficheros y se puede 1) añadir un fichero (con un campo de formulario), 2) borrar un fichero, 3) descargar un fichero. Una opción muy chula es que se pueda [arrastarar un fichero](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Este ejercicio no requiere una base de datos, realmente.

- Un foro donde la gente puede hacer comentarios. En realidad es un foro público y no hay que hacer login para poder comentar, pero al poner un comentario se le pide al usuario alguna información por si luego quiere poder borrar sus mensajes. Cada mensaje tiene texto, nombre del autor y fecha.

- Editor de una receta: se puede editar una descripción y luego una lista de ingredientes. Cada ingrediente es lo mínimo: nombre y cantidad. En principio solo hay una receta, y es recomendable no usar base de datos y guardar solo un fichero JSON. Aunque una vez hecho eso, es fácil permitir tener más de una receta.


