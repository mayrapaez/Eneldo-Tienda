Proyecto Final para la cursada de ReactJs en Coderhouse Este proyecto fue desarrollado como ejercitación de los conceptos vistos en clase durante la cursada online de ReactJs en Coderhouse.

De qué se trata el proyecto Este proyecto es la simulación de un ecommerce, en este caso, la tienda de una dietetica.

Qué funcionalidades tiene el proyecto La aplicación se extiende sólo del lado del cliente, es decir, sólo cuenta con el Frontend del desarrollo.

Integración con Firestore La aplicación está integrada a Cloud Firestore, un servicio de base de datos de Firebase (Google). Este servicio permite almacenar datos, tales como un listado de productos y sus características, y pedir esos datos desde la aplicación.

React-router-dom React-dom es utilizado en la aplicación para crear rutas de navegación dinámicas.

General El usuario recibe una landing con un catálogo de productos, cada uno con un enlace para ver su detalle. Además, tiene la posibilidad de navegar hacia distintas categorías desde la barra de navegación, las cuales filtrarán los productos mostrados en pantalla por la categoría respectiva. Una vez en el detalle, el usuario podrá seleccionar una cantidad de ese producto para añadir al carrito, limitado por un stock. Una vez agregado, podrá seguir su compra o terminarla. En caso de seguir será redirigido al catálogo, y en caso de terminar, al carrito. En el carrito verá los productos agregados con sus cantidades, subtotales y el valor total de la compra. Tendrá la opción de quitar productos por tipo y de vaciar el carrito completo. Por último, tendrá la opción de comprar. Al decidirse por comprar se le pedirá que complete unos datos, tras lo cual se generará su orden y se le dará un número de orden.

Cómo descargar e instalar este proyecto:

Descargar el repositorio Ir a "Code" (botón verde) -> "Descargar ZIP".

Descomprimir la carpeta en el directorio deseado

Abrir la consola para instalar dependencias Hacer click en la barra de dirección de la carpeta del repositorio, escribir "cmd" y dar Enter. La consola se abrirá ya ubicada en el directorio correcto. Escribir en la consola "npm i" y dar Enter. Esto hará que npm lea el archivo "package.json" del directorio y descargue las dependencias utilizadas en el proyecto.

Correr el proyecto Ahora ya podés iniciar el entonrno de trabajo. En la consola, situado en el directorio del proyecto, ingresar "npm start", Enter, y esperar a que npm abra la aplicación en el navegador. Asegurate de tener un editor de código para trabajar sobre el proyecto (por ejemplo: Visual Studio Code).