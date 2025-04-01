import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, Clock } from "lucide-react"

export default function ConfirmacaoWebinar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="py-4 text-center border-b">
        <h1 className="text-2xl font-bold">
          Asia Forex Mentor<sup>®</sup>
        </h1>
      </header>

      {/* Seção do Banner Azul */}
      <section className="bg-blue-500 text-white py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Você está registrado para o webinar!</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Esta página redirecionará automaticamente para a sala de exibição quando o webinar estiver programado para
          começar.
        </p>
        <p className="max-w-3xl mx-auto">
          Você pode acessar esta página a qualquer momento usando o URL abaixo. Você também receberá um e-mail de
          confirmação com um link para esta página.
        </p>
      </section>

      {/* Seção do Link do Webinar */}
      <div className="max-w-4xl mx-auto w-full px-4 py-8">
        <div className="text-center mb-6">
          <p className="font-medium mb-2">Link da sua sessão de webinar:</p>
          <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded">
            <input
              type="text"
              value="https://webinar.asiaforexmentor.com/webinar/thankyou/66c2a70c1611b0"
              readOnly
              className="bg-transparent flex-1 text-sm outline-none"
            />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Apresentador */}
          <div className="text-center">
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/will.jpg`}
                alt="Willian Aksenen"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mb-1">Apresentado por:</p>
            <p className="font-bold">Willian Aksenen</p>
          </div>

          {/* O que Você Vai Aprender */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-center mb-6">
              Aqui está o que você vai aprender durante este webinar gratuito ao vivo:
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como identificar negociações altamente lucrativas que podem gerar muito dinheiro em menos de 10
                  minutos por dia
                </span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>Como obter lucros insanos e ainda assim estar livre de riscos</span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como ganhar e se tornar lucrativo consistentemente mesmo se você for um novo trader sem conhecimento e
                  ainda assim manter um estilo de vida
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data e Hora */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {/* Caixa de Data */}
          <div className="bg-white shadow-md rounded-md overflow-hidden w-32">
            <div className="bg-blue-500 text-white text-center py-2">
              <p className="font-medium">MARÇO</p>
            </div>
            <div className="text-center py-4">
              <p className="text-5xl font-bold">27</p>
            </div>
          </div>

          {/* Hora */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <p className="font-medium">11:45 AM GMT-3</p>
            </div>
            <p className="font-medium mb-2">O webinar começa em:</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <p className="text-xl font-bold">0</p>
                <p className="text-xs">dias</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">0</p>
                <p className="text-xs">hrs</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">10</p>
                <p className="text-xs">mins</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">33</p>
                <p className="text-xs">segs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Bônus */}
        <div className="text-center mb-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Como prometido, pegue seu BÔNUS GRÁTIS aqui!
          </Button>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-auto py-4 text-center text-sm text-gray-600">
        <p>Copyright © 2025 Asiaforexmentor.com. Todos os Direitos Reservados.</p>
      </footer>
    </div>
  )
}

