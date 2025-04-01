"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, Clock } from "lucide-react"

export default function ConfirmacaoWebinarComTemporizador() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 10,
    seconds: 33,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://webinar.asiaforexmentor.com/webinar/thankyou/66c2a70c1611b0")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="py-4 text-center border-b">
        <h1 className="text-2xl font-bold">
          Willian Aksenen<sup>®</sup>
        </h1>
      </header>

      {/* Seção do Banner Azul */}
      <section className="bg-blue-500 text-white py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Você está registrado para a aula!</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Esta página redirecionará automaticamente para a sala de exibição quando a aula estiver programada para
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
          <p className="font-medium mb-2">Link da sua aula:</p>
          <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded">
            <input
              type="text"
              value="https://webinar.asiaforexmentor.com/webinar/thankyou/66c2a70c1611b0"
              readOnly
              className="bg-transparent flex-1 text-sm outline-none"
            />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Seção de Compartilhamento */}
        <div className="text-center mb-6">
          <p className="font-medium mb-2">Compartilhar:</p>
          <div className="flex justify-center gap-2">
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">f</span> Facebook
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">𝕏</span> Twitter
            </a>
          </div>
        </div>

        {/* Links do Calendário */}
        <div className="text-center mb-8">
          <p className="font-medium mb-2">Adicionar aos links do calendário:</p>
          <div className="flex justify-center gap-2">
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">G</span> Google Agenda
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-600 text-sm flex items-center">
              <span className="mr-1">O</span> Outlook Agenda
            </a>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Apresentador */}
          <div className="text-center bg-gradient-to-b from-blue-50 to-white p-4 rounded-lg border border-blue-100 shadow-sm">
            <div className="relative mx-auto w-32 h-32 mb-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-md"></div>
              <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Apresentador"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-blue-600 font-medium mb-1">Apresentado por:</p>
            <p className="font-bold text-lg mb-1">Willian Aksenen</p>
            <p className="text-sm text-gray-600 mb-2">Trader Profissional & Mentor</p>
            <div className="flex justify-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                6+ Anos de Experiência
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Especialista em Forex reconhecido internacionalmente com mais de 15.000 alunos de sucesso em todo o mundo.
            </p>
          </div>

          {/* O que Você Vai Aprender */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-center mb-6">
              Aqui está o que você vai aprender durante esta aula gratuita ao vivo:
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
            <p className="font-medium mb-2">A aula começa em:</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.days}</p>
                <p className="text-xs">dias</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.hours}</p>
                <p className="text-xs">hrs</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.minutes}</p>
                <p className="text-xs">mins</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.seconds}</p>
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
        <p>Copyright © 2024 WillianAksenen Todos os Direitos Reservados.</p>
      </footer>
    </div>
  )
}

