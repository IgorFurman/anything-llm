import AgentFlow from "./AgentFlow";
import AgentSkill from "./AgentSkill";
import SlashCommand from "./SlashCommand";
import SystemPrompt from "./SystemPrompt";
import UnknownItem from "./Unknown";

const HubItemComponent = {
  "agent-skill": AgentSkill,
  "system-prompt": SystemPrompt,
  "slash-command": SlashCommand,
  "agent-flow": AgentFlow,
  unknown: UnknownItem,
};

export default HubItemComponent;
