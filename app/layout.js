import { Inter } from 'next/font/google'
import '@styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-grid.min.css" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
