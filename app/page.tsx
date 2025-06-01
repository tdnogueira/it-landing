import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Empresas from '@/components/Empresas';
import Profissionais from '@/components/Profissionais';
import Contato from '@/components/Contato';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Empresas />
      <Profissionais />
      <Contato />
    </main>
  );
}
