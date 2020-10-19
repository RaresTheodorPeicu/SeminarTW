import { createServer, request } from 'http';

const server = createServer((request, response) => {
    response.end('Hello World\n')

})

server.listen(8000, () => {
    console.log('Server is running')
})


