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
            <div className="min-h-screen bg-gray-950 text-white font-mono">

            {/* Navbar */}
            <nav className="border-b border-gray-800 px-8 py-4 flex items-center justify-between">
                <span className="text-blue-400 font-bold text-lg">vitor.dev</span>
                <div className="flex gap-6 text-sm text-gray-400">
                <button
                    onClick={() => setAba("sobre")}
                    className={aba === "sobre" ? "text-white border-b border-white pb-1" : "hover:text-white"}
                >
                    about
                </button>
                <button
                    onClick={() => setAba("projetos")}
                    className={aba === "projetos" ? "text-white border-b border-white pb-1" : "hover:text-white"}
                >
                    projects
                </button>
                </div>
            </nav>

            <main className="max-w-2xl mx-auto px-6 py-16">

                {/* Aba Sobre */}
                {aba === "sobre" && (
                <div className="space-y-6">
                    <div className="flex items-center gap-5">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQFR-jslLyo8oA/profile-displayphoto-scale_400_400/B4DZiwEFJ5GgAo-/0/1755300517815?e=1781740800&v=beta&t=z4_1wxUfosCFuqolrUXYK1yiw06s1oU822vBFbyQQ10"
                        className="w-20 h-20 rounded-full border-2 border-gray-700"
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
                    <p className="text-sm text-gray-500 mb-6">// projects</p>
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
