import type { Route } from './+types/home';
import { SyndromesTool } from '../components/syndromes-tool';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Chemical Syndrome Diagnosis' },
    { name: 'description', content: 'Chemical syndrome diagnosis system' },
  ];
}

export default function Home() {
  return <SyndromesTool />;
}
