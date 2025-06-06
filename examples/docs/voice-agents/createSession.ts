import { RealtimeAgent, RealtimeSession } from '@openai/agents/realtime';

const agent = new RealtimeAgent({
  name: 'Greeter',
  instructions: 'Greet the user with cheer and answer questions.',
});

async function main() {
  // define which agent you want to start your session with
  const session = new RealtimeSession(agent, {
    model: 'gpt-4o-realtime-preview-2025-06-03',
  });
  // start your session
  await session.connect({ apiKey: '<your api key>' });
}
