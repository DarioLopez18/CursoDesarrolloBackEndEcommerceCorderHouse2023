/*
Practica de módulos nativos: fs + crypto

Se creará una clase 'UserManager' que permitirá guardar usuarios en un archivo. El usuario se recibirá con contraseña en string plano, y se deberá
guardar la contraseña hasheada con crypto.Utilizar modelos nativos fs y crypto, el manager debe contar con los siguientes métodos:

->El método crear usuario, debe recibir un objeto con los campos:
    ->Nombre
    ->Apellido
    ->Nombre de usuario
    ->Contraseña
->El método debe guardar un usuario en un archivo 'Usuarios.json', recordando que la contraseña debe estar hasheada por seguridad
->El método 'Validad usaurio' recibirá el nombre de usuario que quiero validar, seguido de la contraseña, debe poder leer el json previamente generado con
el arreglo de usuarios y hacer la comparacion de contraseñas, si coinciden el usuario y la contraseña debe devolver un mensaje 'Logueado', en caso contrario
indicar error si el usuario no existe, o si la contraseña no coincide.
*/