import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { FadeIn } from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tech Company',
    location: 'India (Remote)',
    period: '2023 - Present',
    type: 'Full-time',
    description:
      'Leading frontend development for enterprise web applications, focusing on React, Next.js, and modern animation libraries.',
    achievements: [
      'Led frontend architecture for 3 major product launches',
      'Reduced load time by 40% through performance optimization',
      'Implemented design system used across 5 projects',
      'Mentored 2 junior developers in React best practices',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Agency',
    location: 'India',
    period: '2022 - 2023',
    type: 'Full-time',
    description:
      'Built end-to-end web applications for various clients, handling both frontend and backend development.',
    achievements: [
      'Delivered 5+ client projects from concept to deployment',
      'Built real-time features using WebSocket integration',
      'Implemented OAuth authentication for enterprise clients',
      'Created RESTful APIs serving 10k+ daily requests',
    ],
    technologies: ['React', 'FastAPI', 'MongoDB', 'Redux', 'JWT'],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Startup',
    location: 'India',
    period: '2021 - 2022',
    type: 'Full-time',
    description:
      'Started professional journey focusing on React development and building responsive web applications.',
    achievements: [
      'Developed responsive UI components from Figma designs',
      'Participated in agile development processes',
      'Contributed to internal tools and dashboards',
      'Learned best practices for code quality and testing',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
  },
];

const Experience = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <FadeIn>
            <span className="text-sm font-medium text-primary mb-4 block text-center">
              Career Journey
            </span>
          </FadeIn>
          <SectionHeading
            title="Work Experience"
            subtitle="A timeline of my professional growth and the impact I've made along the way"
          />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <motion.div
                  className="relative pl-8 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-xl">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Years of Experience', value: '2+' },
              { label: 'Projects Completed', value: '6+' },
              { label: 'Technologies Used', value: '20+' },
              { label: 'Happy Clients', value: '5+' },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
