import { Http3Server } from '@fails-components/webtransport'

console.log("Success!")
console.log("Success 2!")
console.log("Success latest!")

const server = new Http3Server
(
    {
        port: 44331,
        host: "127.0.0.1",
    }
)

const stream = await server.sessionStream('/')

const reader = stream.getReader()

console.log(reader)