import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { FadeIn } from '@/components/AnimatedText';
import {
  Code2,
  Palette,
  Zap,
  Database,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Boxes,
  Layout as LayoutIcon,
  Smartphone,
  Shield,
  Globe,
  Workflow,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Primary Focus',
    description: 'Deep expertise in modern frontend technologies and performance optimization',
    skills: [
      { name: 'React.js', icon: Code2, isPrimary: true },
      { name: 'Next.js 14', icon: Globe, isPrimary: true },
      { name: 'Tailwind CSS', icon: Palette, isPrimary: true },
      { name: 'Framer Motion', icon: Zap, isPrimary: true },
      { name: 'Redux', icon: Boxes, isPrimary: true },
      { name: 'TypeScript', icon: Code2, isPrimary: true },
      { name: 'Responsive Design', icon: Smartphone, isPrimary: false },
      { name: 'Performance Optimization', icon: Zap, isPrimary: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Secondary Focus',
    description: 'Solid foundation in server-side development and API design',
    skills: [
      { name: 'FastAPI', icon: Server, isPrimary: false },
      { name: 'NestJS', icon: Server, isPrimary: false },
      { name: 'REST APIs', icon: Globe, isPrimary: false },
      { name: 'JWT Auth', icon: Shield, isPrimary: false },
      { name: 'OAuth', icon: Shield, isPrimary: false },
      { name: 'WebSocket', icon: Zap, isPrimary: false },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    subtitle: 'Data Management',
    description: 'Experience with both SQL and NoSQL databases',
    skills: [
      { name: 'MongoDB Atlas', icon: Database, isPrimary: false },
      { name: 'MySQL', icon: Database, isPrimary: false },
      { name: 'Prisma ORM', icon: Database, isPrimary: false },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'DevOps & Workflow',
    description: 'Modern development tools and CI/CD pipelines',
    skills: [
      { name: 'Git & GitHub', icon: GitBranch, isPrimary: false },
      { name: 'GitHub Actions', icon: Workflow, isPrimary: false },
      { name: 'Vercel', icon: Cloud, isPrimary: false },
      { name: 'Railway', icon: Cloud, isPrimary: false },
      { name: 'Swagger', icon: Terminal, isPrimary: false },
    ],
  },
];

const Skills = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <FadeIn>
            <span className="text-sm font-medium text-primary mb-4 block text-center">
              Technical Expertise
            </span>
          </FadeIn>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="A comprehensive overview of my technical stack, with frontend development as my primary focus"
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <FadeIn key={category.id} delay={categoryIndex * 0.1}>
                <div>
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl md:text-3xl font-display font-bold">
                        {category.title}
                      </h2>
                      {category.id === 'frontend' && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div
                    className={`grid gap-4 ${
                      category.id === 'frontend'
                        ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                        : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
                    }`}
                  >
                    {category.skills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        category={category.id as 'frontend' | 'backend' | 'database' | 'tools'}
                        isPrimary={skill.isPrimary}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Highlight */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <LayoutIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">UI Engineering</h3>
                <p className="text-muted-foreground">
                  Expertise in building complex, interactive user interfaces with attention 
                  to performance, accessibility, and user experience.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Animation & Motion</h3>
                <p className="text-muted-foreground">
                  Creating delightful micro-interactions and smooth page transitions 
                  using Framer Motion and CSS animations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">Full-Stack Capability</h3>
                <p className="text-muted-foreground">
                  Solid backend foundations with FastAPI and NestJS, enabling end-to-end 
                  feature development when needed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
