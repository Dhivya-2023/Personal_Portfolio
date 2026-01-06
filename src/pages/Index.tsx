import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedName, Typewriter, FadeIn } from '@/components/AnimatedText';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const roles = [
  'Frontend Developer',
  'React Specialist',
  'Full Stack Engineer',
  'UI/UX Enthusiast',
];

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Technologies', value: '10+' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-4">
              <AnimatedName name="Dhivya N" />
              <span className="text-primary">.</span>
            </h1>

            {/* Role with Typewriter */}
            <FadeIn delay={0.6}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-muted-foreground mb-6">
                <Typewriter texts={roles} />
              </div>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.8}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Crafting scalable, animated, and performance-driven web applications 
                with modern frontend excellence and full-stack foundations.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={1}>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/book-meeting">Book a Meeting</Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="gap-2" asChild>
  <a href="/Dhivya_resume.pdf" download="Dhivya_N_Resume.pdf">
    <Download className="w-5 h-5" />
    Download Resume
  </a>
</Button>

              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={1.2}>
              <div className="flex gap-12 mt-16 pt-8 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-display font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            title="Featured Work"
            subtitle="A selection of projects showcasing frontend expertise and full-stack capabilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <span className="text-sm font-medium text-primary mb-4 block">About Me</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
                  Frontend-focused<span className="text-primary">.</span><br />
                  Full-stack capable<span className="text-primary">.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I specialize in building performant, accessible, and visually stunning 
                  web applications. With deep expertise in React and modern frontend 
                  technologies, combined with solid backend experience, I deliver 
                  end-to-end solutions that users love.
                </p>
                <Button variant="minimal" asChild>
                  <Link to="/about">
                    Learn more about me
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'React.js', highlight: true },
                  { label: 'Next.js 14', highlight: true },
                  { label: 'Tailwind CSS', highlight: true },
                  { label: 'Framer Motion', highlight: true },
                  { label: 'FastAPI', highlight: false },
                  { label: 'NestJS', highlight: false },
                  { label: 'MongoDB', highlight: false },
                  { label: 'PostgreSQL', highlight: false },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className={`p-4 rounded-xl border transition-colors ${
                      skill.highlight
                        ? 'border-primary/30 bg-primary/5'
                        : 'border-border bg-card'
                    }`}
                  >
                    <span className={`font-medium ${skill.highlight ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Let's build something amazing<span className="text-primary">.</span>
            </h2>
            <p className="text-background/70 text-lg max-w-2xl mx-auto mb-10">
              Have a project in mind or looking for a frontend specialist? 
              I'm always open to discussing new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/book-meeting">
                  Book a Meeting
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
