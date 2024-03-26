import http from 'node:http'
// CommonJS => Use export pattern x require.

const users = []
 
const server = http.createServer((request, response) => {
    const { method, url} = request

    if (method == 'GET' && url == '/users') {
        return request
        .setHeader ('content-type', 'application/JSON')
        .end (JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push ({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        })
        return response.writeHead(201).end()
    }
    return response.writeHead(404).end()
})

server.listen(3333)
// Listen to port 3333 on localhost. 