import Image from 'next/image'

import Professor1 from '@/public/images/Professor1.jpeg'
import Professor2 from '@/public/images/Professor2.png'
import Professor3 from '@/public/images/Professor3.jpeg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Professores</h2>
            <p className="text-xl text-gray-400">Conheça nossos professores!</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={Professor3} width={48} height={48} alt="Paulo" />
                  
                </div>
                </div>
              <blockquote className="text-lg text-gray-400 grow"> Diretor Executivo no Parque de Inovação Tecnológica de Joinville e Região - Inovaparq, Mestrado em Engenharia de Processos (UNIVILLE, 2008), Especialização em Redes De Computadores (UFSC, 2002), Ciência da Computação (UNIVALI, 1998).</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Paulo Marcondes Bousfield</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://br.linkedin.com/in/paulo-marcondes-bousfield-44331738">Conheça</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={Professor2} width={48} height={48} alt="Vanessa" />
                  
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Coordenadora do Bacharelado em Engenharia de Software, Mestre em Engenharia de Produção (UFSC, 2002). Bacharel em Informatica (UFPR, 1996).</blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Vanessa de Oliveira Collere</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://br.linkedin.com/in/vanessa-de-oliveira-collere-9467634">Conheça</a>
            </div>
            </div>

            
            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={Professor1} width={48} height={48} alt="Leanderson" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Mestre em Computação Aplicada (UDESC, 2015) e Bacharel em Sistemas de Informação (UNIVILLE, 2011).</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Leanderson André</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://leandersonandre.com/">Conheça</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
