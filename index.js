import { Http3Server } from '@fails-components/webtransport'
import { readFileSync, existsSync } from 'fs'

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

// let cert_text = readFileSync("./cert.txt", "utf8")

// console.log(cert_text)

const path = '../Chase + Pato - Ghosts - Latest/cert.txt'

try {
  if (existsSync(path))
  {
    let cert_text = readFileSync(path, "utf8")
    console.log(cert_text)
  }
} catch(err) {
  console.error(err)
}


// let cert_text = Buffer(`{"private":"-----BEGIN PRIVATE KEY-----\r\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgzgSM8VgGjyPy+K11\r\nNX7hUaj5frGD5Am1KQo9DQkKPnyhRANCAASCKRErpq5iJJGlT+sMLk61wCS8lGAY\r\nYeZvH6F6cbv9Tr6q0siMbkQGFWvWbjNE5K0NhRNGxKTzGl92HWIOfv3C\r\n-----END PRIVATE KEY-----\r\n","public":"-----BEGIN PUBLIC KEY-----\r\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgikRK6auYiSRpU/rDC5OtcAkvJRg\r\nGGHmbx+henG7/U6+qtLIjG5EBhVr1m4zROStDYUTRsSk8xpfdh1iDn79wg==\r\n-----END PUBLIC KEY-----\r\n","cert":"-----BEGIN CERTIFICATE-----\r\nMIIB9zCCAc6gAwIBAgIJMO/xyHiv9KkmMAwGCCqGSM49BAMCBQAwdTEMMAoGA1UE\r\nBhMDVVNBMQ4wDAYDVQQIEwVUZXhhczEQMA4GA1UEBxMHSG91c3RvbjEvMC0GA1UE\r\nChMmV2ViVHJhbnNwb3J0IFRlc3QgU2VydmVyOiBDaGFzZSArIFBhdG8xEjAQBgNV\r\nBAMTCTEyNy4wLjAuMTAeFw0yMjA3MjQyMTAyMDJaFw0yMjA4MDYyMTAyMDJaMHUx\r\nDDAKBgNVBAYTA1VTQTEOMAwGA1UECBMFVGV4YXMxEDAOBgNVBAcTB0hvdXN0b24x\r\nLzAtBgNVBAoTJldlYlRyYW5zcG9ydCBUZXN0IFNlcnZlcjogQ2hhc2UgKyBQYXRv\r\nMRIwEAYDVQQDEwkxMjcuMC4wLjEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASC\r\nKRErpq5iJJGlT+sMLk61wCS8lGAYYeZvH6F6cbv9Tr6q0siMbkQGFWvWbjNE5K0N\r\nhRNGxKTzGl92HWIOfv3Co0UwQzAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIC9DAm\r\nBgNVHREEHzAdhhtodHRwOi8vZXhhbXBsZS5vcmcvd2ViaWQjbWUwDAYIKoZIzj0E\r\nAwIFAAMVAFtvYmplY3QgQXJyYXlCdWZmZXJd\r\n-----END CERTIFICATE-----\r\n","hash":{"type":"Buffer","data":[41,143,3,146,180,46,233,107,152,209,5,207,149,127,60,38,171,105,60,2,173,241,20,179,207,198,83,101,201,103,126,199]},"fingerprint":"29:8F:03:92:B4:2E:E9:6B:98:D1:05:CF:95:7F:3C:26:AB:69:3C:02:AD:F1:14:B3:CF:C6:53:65:C9:67:7E:C7"}`)

// console.log(cert_text)

// const certificate = JSON.parse(cert_text)

const certificate = {
    private: '-----BEGIN PRIVATE KEY-----\r\n' +
        'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgzgSM8VgGjyPy+K11\r\n' +
        'NX7hUaj5frGD5Am1KQo9DQkKPnyhRANCAASCKRErpq5iJJGlT+sMLk61wCS8lGAY\r\n' +
        'YeZvH6F6cbv9Tr6q0siMbkQGFWvWbjNE5K0NhRNGxKTzGl92HWIOfv3C\r\n' +
        '-----END PRIVATE KEY-----\r\n',
    public: '-----BEGIN PUBLIC KEY-----\r\n' +
        'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEgikRK6auYiSRpU/rDC5OtcAkvJRg\r\n' +
        'GGHmbx+henG7/U6+qtLIjG5EBhVr1m4zROStDYUTRsSk8xpfdh1iDn79wg==\r\n' +
        '-----END PUBLIC KEY-----\r\n',
    cert: '-----BEGIN CERTIFICATE-----\r\n' +
        'MIIB9zCCAc6gAwIBAgIJMO/xyHiv9KkmMAwGCCqGSM49BAMCBQAwdTEMMAoGA1UE\r\n' +
        'BhMDVVNBMQ4wDAYDVQQIEwVUZXhhczEQMA4GA1UEBxMHSG91c3RvbjEvMC0GA1UE\r\n' +
        'ChMmV2ViVHJhbnNwb3J0IFRlc3QgU2VydmVyOiBDaGFzZSArIFBhdG8xEjAQBgNV\r\n' +
        'BAMTCTEyNy4wLjAuMTAeFw0yMjA3MjQyMTAyMDJaFw0yMjA4MDYyMTAyMDJaMHUx\r\n' +
        'DDAKBgNVBAYTA1VTQTEOMAwGA1UECBMFVGV4YXMxEDAOBgNVBAcTB0hvdXN0b24x\r\n' +
        'LzAtBgNVBAoTJldlYlRyYW5zcG9ydCBUZXN0IFNlcnZlcjogQ2hhc2UgKyBQYXRv\r\n' +
        'MRIwEAYDVQQDEwkxMjcuMC4wLjEwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASC\r\n' +
        'KRErpq5iJJGlT+sMLk61wCS8lGAYYeZvH6F6cbv9Tr6q0siMbkQGFWvWbjNE5K0N\r\n' +
        'hRNGxKTzGl92HWIOfv3Co0UwQzAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIC9DAm\r\n' +
        'BgNVHREEHzAdhhtodHRwOi8vZXhhbXBsZS5vcmcvd2ViaWQjbWUwDAYIKoZIzj0E\r\n' +
        'AwIFAAMVAFtvYmplY3QgQXJyYXlCdWZmZXJd\r\n' +
        '-----END CERTIFICATE-----\r\n',
    hash: {
        type: 'Buffer',
        data: [
            41, 143, 3, 146, 180, 46, 233, 107,
            152, 209, 5, 207, 149, 127, 60, 38,
            171, 105, 60, 2, 173, 241, 20, 179,
            207, 198, 83, 101, 201, 103, 126, 199
        ]
    },
    fingerprint: '29:8F:03:92:B4:2E:E9:6B:98:D1:05:CF:95:7F:3C:26:AB:69:3C:02:AD:F1:14:B3:CF:C6:53:65:C9:67:7E:C7'
}

console.log("Success!")
console.log("Success 2!")
console.log("Success latest!")

const http3server = new Http3Server
    (
        {
            port: 44331,
            host: "0.0.0.0",
            secret: "mysecret",
            cert: certificate.cert,
            privKey: certificate.private
        }
    )

// console.log(certificate)

// TEMP

export async function incomingBidirectionalEchoTest(session) {
    try {
        const bidiReader = session.incomingBidirectionalStreams.getReader()
        while (true) {
            const bidistr = await bidiReader.read()
            if (bidistr.done) {
                console.log('bidiReader terminated')
                break
            }
            if (bidistr.value) {
                // ok we got a stream
                const bidistream = bidistr.value
                // echo it
                await bidistream.readable.pipeTo(bidistream.writable)
                console.log('bidiReader finished piping')
            }
        }
    } catch (error) {
        console.log('incoming bidiReader exited with', error)
    }
}

export async function outgoingBidirectionalEchoTest(session) {
    try {
        const mybidistream = await session.createBidirectionalStream()
        await mybidistream.readable.pipeTo(mybidistream.writable)
    } catch (error) {
        console.log('outgoing bidiReader exited with', error)
    }
}

export async function unidirectionalEchoTest(session) {
    try {
        const unidiReader = session.incomingUnidirectionalStreams.getReader()
        while (true) {
            const unidistr = await unidiReader.read()
            if (unidistr.done) {
                console.log('unidiReader terminated')
                break
            }
            if (unidistr.value) {
                // ok we got a stream
                const unidistream = unidistr.value
                // echo it
                const uniwritable = await session.createUnidirectionalStream()
                await unidistream.pipeTo(uniwritable)
                console.log('unidiReader finished piping')
            }
        }
    } catch (error) {
        console.log('unidiReader exited with', error)
    }
}

export async function datagramEchoTest(session) {
    try {
        console.log(session)
        console.log(session.datagrams)

        const test = session.datagrams.writable.getWriter()

        test.write(new Uint8Array([1, 2, 3]))

        // const new_stream = new ReadableStream("It works!")
        // console.log(new_stream)
        // session.datagrams.readable.pipeTo(session.datagrams.writable)
        // new_stream.pipeTo(session.datagrams.writable)
    } catch (error) {
        console.log('datagram echo exited with', error)
    }
}

// END TEMP

async function main(server) {
    try {
        const stream = await server.sessionStream('/')

        const reader = stream.getReader()

        while (true) {
            const { done, value } = await reader.read()

            if (done) {
                console.log('Server is gone')
                break
            }

            console.log('got a newsession')

            await value.ready

            console.log('server session is ready')

            const helpfunc = async () => {
                try {
                    const err = await value.closed
                    console.log('server session was closed', err)
                }
                catch (error) {
                    console.log('server session close error:', error)
                }
            }
            helpfunc()

            // TEMP

            // install BidirectionalEchoTest
            incomingBidirectionalEchoTest(value)
            // now send a bidirectional stream out
            outgoingBidirectionalEchoTest(value)
            unidirectionalEchoTest(value)
            console.log('install datagram echo')
            datagramEchoTest(value)

            // END TEMP

            console.log("now what?")
        }
    }
    catch (error) {
        console.log("ERROR:", error)
    }
}

main(http3server)

http3server.startServer()