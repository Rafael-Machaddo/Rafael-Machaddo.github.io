import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">PARCEIROS</h2>
            <p className="text-xl text-gray-400">Conheça alguns parceiros que já fizeram softwares com a gente!</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">A Docol SA é uma empresa brasileira líder na fabricação de metais sanitários, como torneiras e chuveiros. Fundada em 1956, é conhecida pela qualidade, inovação tecnológica e compromisso com a sustentabilidade.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Docol SA.</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.docol.com.br/">Conheça</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  
                </div>
                </div>
              <blockquote className="text-lg text-gray-400 grow">— Descrição XXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Empresa</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Conheça</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  
                </div>
                </div>
              <blockquote className="text-lg text-gray-400 grow">— Descrição XXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Empresa</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Conheça</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
