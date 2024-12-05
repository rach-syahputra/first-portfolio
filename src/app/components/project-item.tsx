import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Badge from '@/components/badge'
import Button from '@/components/button'
import Description from '@/components/description'
import Title from '@/components/title'
import ImageCollage from './image-collage'
import { Colors, Images } from '@/lib/types'

interface ProjectItemProps {
  project: {
    title: string
    images: Images
    techStacks: {
      name: string
      color: Colors
    }[]
    description: string
    link: {
      live: string
      code: string
    }
  }
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { title, images, techStacks, description, link } = project

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex w-full flex-col items-center justify-center gap-8 py-4'>
        <Title className='xl:hidden'>{title}</Title>
        <div className='flex flex-col items-center justify-center gap-4 xl:flex-row xl:gap-8'>
          <ImageCollage images={images} />
          <div className='flex flex-1 flex-col items-center justify-center gap-4 xl:h-[290px] xl:items-start xl:justify-between'>
            <div className='flex flex-col items-center justify-center gap-4 xl:items-start'>
              <Title className='hidden xl:block'>{title}</Title>
              <div className='xs-w-full flex w-[300px] max-w-[380px] flex-wrap items-center justify-center gap-2 xs:w-full lg:max-w-full xl:justify-start'>
                {techStacks.map((techStack, index) => (
                  <Badge key={index} color={techStack.color}>
                    {techStack.name}
                  </Badge>
                ))}
              </div>
              <Description className='xl:text-left'>{description}</Description>
            </div>
            <div className='flex gap-4'>
              <Link href={link.live}>
                <Button className='group flex items-center justify-center gap-2'>
                  Live Site{' '}
                  <ArrowUpRight
                    size={16}
                    className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Button>
              </Link>
              <Link href={link.code}>
                <Button
                  variant='secondary'
                  className='group flex items-center justify-center gap-2'
                >
                  Source Code{' '}
                  <ArrowUpRight
                    size={16}
                    className='transition-all duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
