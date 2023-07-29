# Features
## Carpeta chats
- Cree la carpeta chats dentro de la carpeta Home
- Cree una carpeta components, un layout, un loading y un page para la carpeta chats
### components
- Cree un componente llamado Conversations el cual es la vista de la lista de conversaciones
### page
- En el page hice una vista con un buscador y una lista de las conversaciones del usuario logeado
- Utilice el componente Conversations  para poder mapear las conversaciones del usuario logeado
- 
## Carpeta [chatUser]
- Cree la carpeta [chatUser] dentro de la carpeta chats para poder mostrar el chat de la conversacion seleccionada en el Page de la carpeta chat
- Cree una carpeta components, un layout y un page para la carpeta [chatUser]
### components
- Cree 3 componentes, ChatHeader donde hice el encabezado con los datos del chat,	ChatKeyBoard, donde esta el textArea para escribir y botones para enviar o subir una imagen y TextBubble, donde hice el diseño de cada mensaje de texto enviado en el chat.
### layout
- Cree la vista de escritorio del buscador y la lista de conversaciones del usuario logeado, el cual se muestra en escritorio y se esconde en la vista movil
### page
- Utilice El ChatHeader y el ChatKeyBoard para el encabezado y teclado del chat 
- Utilicé el componente TextBubble para mapear los mensajes de texto enviados en el chat.

 ## Notes
 - La forma en la que esta pensada la vista de escritorio requiere que se recargue la pagina completa, por lo que el loading aparece cada que se abre un chat.
