import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col h-0 items-center justify-between ${inter.className}`}
    >
      <div className='h-full w-full lg: max-w-sm border-2 border-red-100'>
        <div className='rounded-md border-2 border-indigo-600 w-24 h-24'>
          123
        </div>
      </div>

    </main>
  )
}
