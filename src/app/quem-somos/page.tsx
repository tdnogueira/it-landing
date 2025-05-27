"use client";

import { useDarkMode } from "@/hooks/useDarkMode"; // ajuste o caminho se necessário
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function QuemSomos() {
  const [darkMode, setDarkMode] = useDarkMode();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <header className="flex justify-between items-center p-4 shadow-md">
          <h1
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => router.push("/")}
          >
            IT
          </h1>
          <nav className="space-x-4 text-sm font-semibold">
            <Link
              href="/"
              className={`hover:underline ${
                pathname === "/" ? "text-primary underline" : ""
              }`}
            >
              Início
            </Link>
            <a
              href="/quem-somos"
              className={`hover:underline ${
                pathname === "/quem-somos" ? "text-primary underline" : ""
              }`}
            >
              Quem somos
            </a>
            <a href="#valores" className="hover:underline">
              Missão & Valores
            </a>
            <a href="#contato" className="hover:underline">
              Fale conosco
            </a>
            <a href="/aluno">Área do Aluno</a>
            <a href="/admin">Administrativo</a>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto p-8">
          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
              <span role="img" aria-label="Foguete">
                🚀
              </span>{" "}
              Quem somos
            </h2>
            <p className="mb-4">
              Na <strong>IT</strong>, unimos gente e estratégia pra fazer
              negócios crescerem e pessoas se encontrarem. Acreditamos que toda
              empresa pode entregar mais valor quando entende melhor quem está
              do outro lado — seja um cliente, colaborador ou parceiro.
            </p>
            <p className="mb-4">
              Nascemos com o pé na tecnologia e o coração no desenvolvimento
              humano. Nosso time vive no cruzamento entre consultoria de gente
              grande e a agilidade de uma startup, entregando soluções
              personalizadas pra empresas que querem evoluir e pra pessoas que
              querem transformar suas vidas.
            </p>
            <p>
              Seja melhorando a experiência do cliente com cliente oculto,
              fortalecendo equipes com consultoria em RH e auditorias, ou
              guiando jovens e adultos em orientação de carreira e educação
              financeira, a gente está aqui pra fazer diferença de verdade. Sem
              enrolação. Sem fórmula mágica. Com entrega real.
            </p>
          </section>
        </main>

        <footer className="text-center text-sm p-4 border-t dark:border-gray-700">
          © {new Date().getFullYear()} IT. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
