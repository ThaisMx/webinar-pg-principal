import type { Metadata } from 'next'
import './globals.css'
import GoogleTagManager from '@/components/GoogleTagManager'

export const metadata: Metadata = {
  title: 'Página de Confirmação',
  description: 'Página de confirmação da sua aula',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
