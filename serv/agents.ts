import { FastifyRequest, FastifyReply } from "fastify";

interface Ability {
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Role {
  displayName: string;
  displayIcon: string;
}

interface Agent {
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  role: Role;
  abilities: Ability[];
}

export async function getAgents(req: FastifyRequest, res: FastifyReply) {
  const response = await fetch(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );
  const data = await response.json();

  // format
  const agents: Agent[] = data.data.map((agent: any) => ({
    displayName: agent.displayName,
    description: agent.description,
    displayIcon: agent.displayIcon,
    fullPortrait: agent.fullPortrait,
    role: {
      displayName: agent.role.displayName,
      displayIcon: agent.role.displayIcon,
    },
    abilities: agent.abilities.map((ability: any) => ({
      displayName: ability.displayName,
      description: ability.description,
      displayIcon: ability.displayIcon,
    })),
  }));

  res.send(agents);
}
