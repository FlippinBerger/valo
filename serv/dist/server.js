import Fastify from "fastify";
import { getAgents } from "./agents.js";
const fastify = Fastify({
    logger: true,
});
fastify.get("/", (req, res) => {
    res.send("welcome to the valo server");
});
fastify.get("/agents", getAgents);
try {
    await fastify.listen({ port: 3000 });
}
catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
