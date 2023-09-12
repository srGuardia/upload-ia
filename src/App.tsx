import {
  Button,
  Header,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Textarea,
} from '@/components'
import { FileVideo, Upload, Wand2 } from 'lucide-react'

export function App() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Header />

      <section className='flex flex-1 gap-6 p-6'>
        <div className='flex flex-1 flex-col gap-4'>
          <div className='grid flex-1 grid-rows-2 gap-4'>
            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Inclua um prompt para a IA...'
            />

            <Textarea
              className='resize-none p-4 leading-relaxed'
              placeholder='Resultado gerado pela IA...'
              readOnly
            />
          </div>

          <p className='text-muted-foreground text-sm'>
            Lembre-se: você pode utilizar a variável{' '}
            <code className='text-violet-400'>{'{transcription}'}</code>
            &nbsp; no seu prompt para adicionar o conteúdo da transcrição do
            vídeo selecionado
          </p>
        </div>

        <aside className='w-80 space-y-6'>
          <form className='space-y-6'>
            <label
              htmlFor='video'
              className='text-muted-foreground hover:bg-primary/5 flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm'
            >
              <FileVideo className='h-4 w-4' />
              Selecione um vídeo
            </label>

            <input
              type='file'
              name='video'
              id='video'
              accept='video/mp4'
              className='sr-only'
            />

            <Separator />

            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>
                Prompt de transcrição
              </Label>

              <Textarea
                id='transcription_prompt'
                className='h-20 resize-none leading-relaxed'
                placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'
              ></Textarea>
            </div>

            <Button type='submit' className='w-full'>
              Carregar vídeo
              <Upload className='ml-2 h-4 w-4' />
            </Button>
          </form>

          <Separator />

          <form className='space-y-6'>
            <div className='space-y-2'>
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt...' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='title'>Título do YouTube</SelectItem>
                  <SelectItem value='description'>
                    Descrição do YouTube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>

              <Select disabled name='model_prompt' defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className='text-muted-foreground block text-sm italic'>
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className='text-muted-foreground block text-sm italic leading-relaxed'>
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='ml-2 h-4 w-4' />
            </Button>
          </form>
        </aside>
      </section>
    </main>
  )
}
