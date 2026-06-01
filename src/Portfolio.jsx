        import { useState } from "react";
        const projetos = [
        {
            nome: "portigoliopaixao",
            descricao: "Meu primeiro projeto em React, exibição de portfólio.",
            tags: ["React", "Tailwind"],
            link: "#",
        },
        {
            nome: "projeto-2",
            descricao: "Em breve...",
            tags: ["SQL", "Node.js"],
            link: "#",
        },
        ];

        function Portfolio() {
        const [aba, setAba] = useState("sobre");

        return (
            <div className="min-h-screen bg-gray-950 text-white font-mono">

            {/* Navbar */}
            <nav className="border-b border-gray-800 px-8 py-4 flex items-center justify-between">
                <span className="text-green-400 font-bold text-lg">vitor.dev</span>
                <div className="flex gap-6 text-sm text-gray-400">
                <button
                    onClick={() => setAba("sobre")}
                    className={aba === "sobre" ? "text-white border-b border-white pb-1" : "hover:text-white"}
                >
                    sobre
                </button>
                <button
                    onClick={() => setAba("projetos")}
                    className={aba === "projetos" ? "text-white border-b border-white pb-1" : "hover:text-white"}
                >
                    projetos
                </button>
                </div>
            </nav>

            <main className="max-w-2xl mx-auto px-6 py-16">

                {/* Aba Sobre */}
                {aba === "sobre" && (
                <div className="space-y-6">
                    <div className="flex items-center gap-5">
                    <img
                        src="https://github.com/identicons/vitor.png"
                        className="w-20 h-20 rounded-full border-2 border-gray-700"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Vitor</h1>
                        <p className="text-blue-400 text-sm">Desenvolvedor Júnior</p>
                        <p className="text-gray-500 text-sm">Fortaleza, BR</p>
                    </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                    Estudando desenvolvimento web com foco em React. 
                    Apaixonado por transformar ideias em interfaces.
                    </p>

                    <div>
                    <p className="text-sm text-gray-500 mb-2">// skills</p>
                    <div className="flex flex-wrap gap-2">
                        {["React", "JavaScript", "Tailwind", "HTML", "CSS"].map((s) => (
                        <span key={s} className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full border border-gray-700">
                            {s}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                )}

                {/* Aba Projetos */}
                {aba === "projetos" && (
                <div className="space-y-4">
                    <p className="text-sm text-gray-500 mb-6">// projetos</p>
                    {projetos.map((p) => (
                    <div key={p.nome} className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all bg-gray-900">
                        <div className="flex items-center justify-between mb-2">
                        <h3 className="text-blue-400 font-bold">{p.nome}</h3>
                        <a href={p.link} className="text-xs text-gray-500 hover:text-white">ver →</a>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{p.descricao}</p>
                        <div className="flex gap-2">
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