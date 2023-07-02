import { Inter } from 'next/font/google'
import Bottom from './bottom'
import { SafeArea, NumberKeyboard, PasscodeInput, Space, Button } from 'antd-mobile'
import Div100vh from 'react-div-100vh'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Div100vh
      className={`flex flex-col h-0 items-stretch justify-between ${inter.className}`}
    >
      <div className='flex flex-1 flex-col items-center justify-center'>
        <PasscodeInput seperated length={3} plain keyboard={<NumberKeyboard />} />
        <Button>Submit</Button>
      </div>
      <div>
        <Bottom />
      </div>
      <SafeArea position='bottom' />
    </Div100vh>
  )
}
