import { useState } from "react";

const projetos = [
  {
    nome: "portifoliopaixao",
    descricao: "My first project in React, a portfolio display.",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    nome: "project-2",
    descricao: "My second project.",
    tags: ["SQL", "PHP", "Bootstrap", "JavaScript"],
    link: "https://honeydew-meerkat-656305.hostingersite.com",
  },
];

function Portfolio() {
  const [aba, setAba] = useState("sobre");

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono selection:bg-blue-500/30">

      {/* Navbar */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-gray-950/80 border-b border-gray-800 px-8 py-4 flex items-center justify-between">
        <span className="text-blue-400 font-bold text-lg">vitor.dev</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <button
            onClick={() => setAba("sobre")}
            className={`transition-colors pb-1 ${
              aba === "sobre" ? "text-white border-b-2 border-blue-400" : "hover:text-white"
            }`}
          >
            about
          </button>
          <button
            onClick={() => setAba("projetos")}
            className={`transition-colors pb-1 ${
              aba === "projetos" ? "text-white border-b-2 border-blue-400" : "hover:text-white"
            }`}
          >
            projects
          </button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* Aba Sobre */}
        {aba === "sobre" && (
          <div className="space-y-8 animate-[fadeIn_0.3s_ease-in-out]">
            <div className="flex items-center gap-5">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFR-jslLyo8oA/profile-displayphoto-scale_400_400/B4DZiwEFJ5GgAo-/0/1755300517815?e=1784160000&v=beta&t=IRFTE6_lu34GCJSWm2Yn9J_5b5ZuGfMv-C8bwqnNvz4"
                className="w-20 h-20 rounded-full border-2 border-blue-400/40 shadow-lg shadow-blue-500/10"
              />
              <div>
                <h1 className="text-2xl font-bold">Vitor</h1>
                <p className="text-blue-400 text-sm">Junior Developer</p>
                <p className="text-gray-500 text-sm">Fortaleza, BR</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Studying Analysis and Systems Development at Uninassau, passionate about web development
              and always eager to learn new technologies. I enjoy creating
              clean and efficient code, and I'm excited to
              contribute to innovative projects in the tech world.
            </p>

            <div>
              <p className="text-sm text-gray-500 mb-3">// skills</p>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind", "HTML", "CSS"].map((s) => (
                  <span
                    key={s}
                    className="bg-gray-900 text-blue-400 text-xs px-3 py-1.5 rounded-full border border-gray-800 hover:border-blue-400/50 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="mailto:seuemail@exemplo.com"
                className="inline-block text-sm bg-blue-500 hover:bg-blue-400 transition-colors text-gray-950 font-semibold px-5 py-2.5 rounded-lg"
              >
                contact me →
              </a>
            </div>
          </div>
        )}

        {/* Aba Projetos */}
        {aba === "projetos" && (
          <div className="space-y-4 animate-[fadeIn_0.3s_ease-in-out]">
            <p className="text-sm text-gray-500 mb-6">// projects</p>
            {projetos.map((p) => (
              <div
                key={p.nome}
                className="border border-gray-800 rounded-xl p-5 hover:border-blue-400/50 hover:bg-gray-900/50 transition-all bg-gray-900/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-blue-400 font-bold">{p.nome}</h3>
                  <a href={p.link} className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
                    ver →
                  </a>
                </div>
                <p className="text-gray-400 text-sm mb-3">{p.descricao}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-gray-800 text-xs text-gray-400 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}

export default Portfolio;