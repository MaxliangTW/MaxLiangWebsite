import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Max Liang',
  description: 'Max Liang 的個人網站',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
