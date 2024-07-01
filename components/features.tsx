export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">A Fábrica de Software da Univille</h2>
            <p className="text-xl text-gray-400">Promovendo Inovação e Colaboração na Área de Computação.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 mb-4">
                    <img className="w-8 h-8 invert-colors" src="https://www.svgrepo.com/show/384034/dart-mission-goal-success.svg" alt="Ícone Missão" />
                </div>
                <h4 className="h4 mb-2">Missão</h4>
                <p className="text-lg text-gray-400 text-center">Facilitar a transferência de conhecimento em Computação entre academia e sociedade, alinhando-se aos Projetos Pedagógicos dos cursos da Univille.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-green-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-green-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-green-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Objetivo Geral</h4>
              <p className="text-lg text-gray-400 text-center">Prestar assessoria, consultoria, treinamento e desenvolver soluções de TI para projetos internos e externos da Univille. </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 mb-4">
                    <img className="w-8 h-8 invert-colors" src="https://www.svgrepo.com/show/506814/computer.svg" alt="Ícone Missão" />
            </div>
              <h4 className="h4 mb-2">Objetivos específicos</h4>
              <p className="text-lg text-gray-400 text-center">Proporcionar aos alunos experiências práticas em TI, aplicar conhecimentos teóricos em projetos reais, promover o pensamento científico, estimular o empreendedorismo e apoiar atividades acadêmicas.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-green-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-green-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Princípios</h4>
              <p className="text-lg text-gray-400 text-center">Promover inovação, manter valores éticos, estimular atividades acadêmicas, fortalecer o relacionamento universidade-comunidade e garantir qualidade nas soluções desenvolvidas.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-green-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-green-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-green-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Áreas de Atuação</h4>
              <p className="text-lg text-gray-400 text-center">Desenvolvimento de software, consultoria em TI, inovação tecnológica e empreendedorismo.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 mb-4">
                    <img className="w-8 h-8 invert-colors" src="https://www.svgrepo.com/show/447910/benefits-welfare-expenses.svg" alt="Ícone Missão" />
                </div>
              <h4 className="h4 mb-2">Benefícios</h4>
              <p className="text-lg text-gray-400 text-center">Acesso a soluções tecnológicas avançadas, impulsionando o desenvolvimento regional e fortalecendo a colaboração universidade-empresa.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
