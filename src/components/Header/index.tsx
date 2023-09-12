import { Github, Heart } from 'lucide-react'
import { Button, Separator } from '@/components'

export const Header = () => (
  <header className='flex items-center justify-between border-b px-6 py-3'>
    <h1 className='text-xl font-bold'>upload.ia</h1>

    <div className='flex items-center gap-3'>
      <span className='text-muted-foreground text-sm'>Desenvolvido com</span>
      <Heart className='h-4 w-4' color='red' enableBackground='2' />

      <Separator orientation='vertical' className='h-6' />

      <Button variant='outline'>
        <Github className='mr-2 h-4 w-4' />
        Github
      </Button>
    </div>
  </header>
)
