import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { FadeIn } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: 'rbg-research',
    title: 'RBG Research Company Website',
    subtitle: 'Corporate Website Redesign',
    description:
      'Complete redesign and development of a professional company website with modern aesthetics and automated deployment.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    metrics: [
      { icon: Clock, label: 'Timeline', value: '4 weeks' },
      { icon: Users, label: 'Team Size', value: '1 developer' },
      { icon: Zap, label: 'Performance', value: '95+ Lighthouse' },
    ],
    technologies: ['React', 'Tailwind CSS', 'GitHub Pages', 'GitHub Actions'],
    highlights: [
      'Modern, responsive design',
      'Automated CI/CD pipeline',
      'SEO optimization',
      'Contact form integration',
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <FadeIn>
            <span className="text-sm font-medium text-primary mb-4 block text-center">
              In-Depth Analysis
            </span>
          </FadeIn>
          <SectionHeading
            title="Case Studies"
            subtitle="Detailed breakdowns of select projects, exploring the problems, solutions, and outcomes"
          />
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} delay={index * 0.1}>
                <motion.article
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative group">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-secondary">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-sm text-primary font-medium">{study.subtitle}</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{study.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-3 bg-secondary rounded-xl">
                          <metric.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <div className="font-semibold">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {study.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Button variant="accent" asChild>
                      <Link to={`/case-studies/${study.id}`}>
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              More Case Studies Coming Soon<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm continuously documenting my project experiences. Check back for more 
              detailed breakdowns of interesting challenges and solutions.
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
