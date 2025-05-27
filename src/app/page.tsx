"use client";

import { useDarkMode } from "@/hooks/useDarkMode"; // ajuste o caminho se necessário
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold text-primary cursor-pointer">
          <Link href="/">IT</Link>
        </h1>
        <nav className="space-x-4 text-sm font-semibold">
          <a href="/quem-somos" className="hover:underline">
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
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              if (typeof window !== "undefined") {
                if (!darkMode) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              }
            }}
            className="ml-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">
            Desperte seu potencial com a IT 🚀
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Consultoria de carreira e educação financeira para jovens que querem
            transformar o futuro
          </p>
        </section>

        <section id="sobre" className="space-y-2">
          <h3 className="text-2xl font-semibold">Quem somos</h3>
          <p>
            Somos uma plataforma dedicada a preparar jovens para os desafios do
            mercado de trabalho com orientação de carreira, planejamento
            financeiro e conteúdos didáticos práticos.
          </p>
        </section>

        <section id="valores" className="space-y-2">
          <h3 className="text-2xl font-semibold">Missão, Visão e Valores</h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>Missão:</strong> Empoderar jovens com conhecimento e
              atitude.
            </li>
            <li>
              <strong>Visão:</strong> Ser referência em preparação profissional
              para a juventude.
            </li>
            <li>
              <strong>Valores:</strong> Acolhimento, inovação, acessibilidade e
              ética.
            </li>
          </ul>
        </section>

        <section id="contato" className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Fale com a gente</h3>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            WhatsApp
          </a>
        </section>
      </main>

      <footer className="text-center text-sm p-4 border-t dark:border-gray-700">
        © {new Date().getFullYear()} IT. Todos os direitos reservados.
      </footer>
    </div>
  );
}
