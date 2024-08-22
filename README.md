# E-commerce WebApp con React y Firebase

## Estructura del Proyecto

- **NavBar**
  - `CartWidget.jsx`: Muestra un ícono del carrito con la cantidad de productos en el mismo.
- **ItemListContainer**
  - `ItemListContainer.jsx`: Componente contenedor que maneja la lógica de obtener y mostrar la lista de productos.
  - `ItemList.jsx`: Componente de presentación que renderiza una lista de productos.
  - `Item.jsx`: Componente de presentación que muestra un producto individual.
- **ItemDetailContainer**
  - `ItemDetailContainer.jsx`: Componente contenedor que maneja la lógica de obtener y mostrar los detalles de un producto.
  - `ItemDetail.jsx`: Componente de presentación que muestra los detalles de un producto y el componente `ItemCount`.
  - `ItemCount.jsx`: Permite al usuario seleccionar la cantidad de unidades a agregar al carrito.
- **Cart**
  - `CartItem.jsx`: Muestra un producto individual en el carrito.
  - `Cart.jsx`: Muestra la lista de productos en el carrito.
- **Checkout**
  - `CheckoutForm.jsx`: Formulario para completar la compra y generar una orden en Firebase.
- **CategoryContainer**
  - `CategoryContainer.jsx`: Filtra los productos por categoría y muestra el listado correspondiente.


## Tecnologías Utilizadas

- **React**: Framework para la construcción de la interfaz de usuario.
- **Firebase**: Utilizado como base de datos (Realtime Database).
- **React Router**: Para la navegación entre las diferentes vistas de la aplicación.
- **Context API**: Para la gestión del estado global del carrito de compras.

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm start` para iniciar la aplicación.

Project Console: https://console.firebase.google.com/project/react-ecommerce-83a28/overview
Hosting URL: https://react-ecommerce-83a28.web.app