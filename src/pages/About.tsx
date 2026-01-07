import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { FadeIn, RevealText } from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Full Stack Developer',
    company: 'Current Position',
    description: 'Built end-to-end solutions using React, FastAPI, and various databases for enterprise clients.',
    icon: Briefcase,
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    company: 'Previous Role',
    description: 'Learning frontend development for complex web applications with React, Next.js, and modern animation libraries.',
    icon: Briefcase,
  },
  {
    year: '2022',
    title: 'Junior Developer',
    company: 'Started Career',
    description: 'Began professional journey focusing on React development and building responsive web applications.',
    icon: GraduationCap,
  },
];

const values = [
  {
    title: 'Performance First',
    description: 'Every millisecond counts. I optimize for speed without compromising on user experience.',
  },
  {
    title: 'Clean Architecture',
    description: 'Maintainable, scalable code that teams can build upon confidently.',
  },
  {
    title: 'User-Centric Design',
    description: 'Beautiful interfaces that are intuitive and accessible to everyone.',
  },
  {
    title: 'Continuous Learning',
    description: 'Staying current with modern technologies and best practices.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <span className="text-sm font-medium text-primary mb-4 block">About Me</span>
              </FadeIn>
              <RevealText>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                  Building digital experiences that matter<span className="text-primary">.</span>
                </h1>
              </RevealText>
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm Dhivya, a passionate Frontend Developer based in India with a strong 
                  foundation in full-stack development. I specialize in creating performant, 
                  accessible, and visually stunning web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise in React, Next.js, and modern CSS frameworks, combined with 
                  backend experience in FastAPI and NestJS, I bridge the gap between beautiful 
                  designs and robust implementations.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>Open to opportunities</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* <FadeIn direction="right" delay={0.4}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/datwcxi7y/image/upload/v1767727724/Dhivya-Photo_kqrohk.jpg"
                    alt="Dhivya N - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
               
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary rounded-2xl -z-10" />
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            title="What I Value"
            subtitle="Principles that guide my work and development philosophy"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <motion.div
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                  whileHover={{ y: -4 }}
                >
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="My Journey"
            subtitle="A brief timeline of my professional experience"
          />

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <motion.div
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
                  whileHover={{ x: 4 }}
                >
                  {/* Dot */}
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-3 h-3 text-primary" />
                  </div>

                  {/* Year */}
                  <span className="text-sm font-medium text-primary">{item.year}</span>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Beyond the Code<span className="text-primary">.</span>
              </h2>
              <p className="text-background/70 text-lg leading-relaxed">
                When I'm not crafting user interfaces or optimizing performance, you'll find me 
                exploring new technologies, contributing to open source, or enjoying a good cup 
                of coffee while reading about the latest in web development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default About;
