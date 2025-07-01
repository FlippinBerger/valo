export async function getAgents(req, res) {
    const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
    const data = await response.json();
    // format
    const agents = data.data.map((agent) => ({
        displayName: agent.displayName,
        description: agent.description,
        displayIcon: agent.displayIcon,
        fullPortrait: agent.fullPortrait,
        role: {
            displayName: agent.role.displayName,
            displayIcon: agent.role.displayIcon,
        },
        abilities: agent.abilities.map((ability) => ({
            displayName: ability.displayName,
            description: ability.description,
            displayIcon: ability.displayIcon,
        })),
    }));
    res.send(agents);
}
