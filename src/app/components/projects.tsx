import Description from '@/components/description'
import Header from '@/components/header'
import Section from '@/components/section'
import ProjectItem from './project-item'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <Section id='projects' className='py-8'>
      <div className='flex flex-col gap-4'>
        <Header>Projects</Header>
        <Description>
          Showcase of my <span className='text-white'>artistic</span> projects
          that I&rsquo;m proud of.
        </Description>
      </div>

      <div className='flex w-full flex-col gap-8'>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}