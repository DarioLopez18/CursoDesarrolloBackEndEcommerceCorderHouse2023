var socket = io()

socket.on('evento_para_socket_individual',data=>{
    console.log(data)
})

socket.on('evento_para_todos_menos_el_socket_actual',data=>{
    console.log(data)
})

socket.on('evento_para_todos',data=>{
    let html = document.getElementById('msn').innerHTML
    html += `<p>${data}</p>`
    document.getElementById('msn').innerHTML = html
})

document.getElementById('form').onsubmit = e =>{
    e.preventDefault()
    const mensaje = document.getElementById('txt').value
    socket.emit('message',mensaje)
}

