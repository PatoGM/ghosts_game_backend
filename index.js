import { Http3Server } from '@fails-components/webtransport'
import { readFileSync } from 'fs'

const attrs = [
    { shortName: 'C', value: 'USA' },
    { shortName: 'ST', value: 'Texas' },
    { shortName: 'L', value: 'Houston' },
    { shortName: 'O', value: 'WebTransport Test Server: Chase + Pato' },
    { shortName: 'CN', value: '127.0.0.1' }
]

// const certificate = await generateWebTransportCertificate(attrs, {
//     days: 13
// })

// console.log(JSON.stringify(certificate))

let cert_text = readFileSync("./cert.txt", "utf8")

// console.log(cert_text)

const certificate = JSON.parse(cert_text)

console.log("Success!")
console.log("Success 2!")
console.log("Success latest!")

const server = new Http3Server
    (
        {
            port: 44331,
            host: "127.0.0.1",
            secret: "mysecret",
            cert: certificate.cert,
            privKey: certificate.private
        }
    )

const stream = await server.sessionStream('/')

const reader = stream.getReader()

console.log(reader)

console.log(certificate.hash)