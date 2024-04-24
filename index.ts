import { fastify } from "fastify"
import { Resolver } from 'did-resolver'
import { getResolver } from 'itn-did-resolver'

const server = fastify()

server.get("/1.0/identifiers/:did", async (req, res) => {
  try {
    // verify parameter
    const { did } = req.params as { did: string }
    if (!did) throw new Error(`[did] parameter is required.`)

    // verify environment variable
    const didResolverUrl = process.env.DID_RESOLVER_URL
    if (!didResolverUrl) {
      throw new Error(`DID_RESOLVER_URL env variable is not set.`)
    }

    // create DID Resolver
    const itnResolver = getResolver(didResolverUrl)
    const didResolver = new Resolver({
      ...itnResolver
    })

    // resolve DID
    const result = await didResolver.resolve(did)
    res.send(result)

  } catch (e: unknown) {
    console.error(e)
    res.status(500)
    res.send({ error: e instanceof Error ? e.message : e })
  }
})

const port = process.env.PORT || "8080"
const url = await server.listen({
  host: "0.0.0.0",
  port: Number(port),
  backlog: 100000,
})
console.log("==================================");
console.log(`DID Resolver is [${process.env.DID_RESOLVER_URL}]`)
console.log(`Listening at [${url}]`)
