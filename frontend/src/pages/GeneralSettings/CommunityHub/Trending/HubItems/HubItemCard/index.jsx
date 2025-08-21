import AgentFlowHubCard from "./agentFlow";
import AgentSkillHubCard from "./agentSkill";
import GenericHubCard from "./generic";
import SlashCommandHubCard from "./slashCommand";
import SystemPromptHubCard from "./systemPrompt";

export default function HubItemCard({ type, item }) {
  switch (type) {
    case "systemPrompts":
      return <SystemPromptHubCard item={item} />;
    case "slashCommands":
      return <SlashCommandHubCard item={item} />;
    case "agentSkills":
      return <AgentSkillHubCard item={item} />;
    case "agentFlows":
      return <AgentFlowHubCard item={item} />;
    default:
      return <GenericHubCard item={item} />;
  }
}
