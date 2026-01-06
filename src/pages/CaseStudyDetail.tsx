import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FadeIn } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Clock, Users, Zap, Target, CheckCircle, AlertCircle } from 'lucide-react';

const caseStudyData = {
  'rbg-research': {
    title: 'RBG Research Company Website',
    subtitle: 'Corporate Website Redesign',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
    metrics: [
      { icon: Clock, label: 'Timeline', value: '4 weeks' },
      { icon: Users, label: 'Team Size', value: '1 developer' },
      { icon: Zap, label: 'Performance', value: '95+ Lighthouse' },
    ],
    technologies: ['React', 'Tailwind CSS', 'GitHub Pages', 'GitHub Actions'],
    overview: `RBG Research needed a modern, professional website to establish their online presence 
    and attract potential clients. The previous website was outdated and lacked the polish expected 
    of a research company. The goal was to create a fast, accessible, and visually impressive website 
    that would reflect the company's expertise and professionalism.`,
    problem: {
      title: 'The Challenge',
      description: `The existing website had several issues that needed addressing:`,
      points: [
        'Outdated design that didn\'t reflect the company\'s expertise',
        'Poor mobile responsiveness affecting user experience',
        'Slow load times impacting SEO and user retention',
        'Manual deployment process causing delays in updates',
        'Lack of SEO optimization limiting organic traffic',
      ],
    },
    solution: {
      title: 'The Solution',
      description: `A complete redesign and rebuild using modern technologies:`,
      points: [
        'Clean, professional design with modern aesthetics',
        'Mobile-first responsive approach',
        'Optimized images and code splitting for performance',
        'Automated CI/CD pipeline with GitHub Actions',
        'Comprehensive SEO implementation',
      ],
    },
    architecture: {
      title: 'Technical Architecture',
      description: `The website was built with a focus on simplicity, performance, and maintainability:`,
      details: [
        {
          title: 'Frontend Framework',
          description: 'React with functional components and hooks for a modern, maintainable codebase.',
        },
        {
          title: 'Styling',
          description: 'Tailwind CSS for rapid, consistent styling with built-in responsive utilities.',
        },
        {
          title: 'Deployment',
          description: 'GitHub Pages for free, reliable hosting with custom domain support.',
        },
        {
          title: 'CI/CD',
          description: 'GitHub Actions for automated testing, building, and deployment on every push.',
        },
      ],
    },
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Lighthouse Performance', value: '95+', description: 'Optimized loading and rendering' },
        { label: 'Mobile Score', value: '100', description: 'Perfect mobile responsiveness' },
        { label: 'Load Time', value: '<2s', description: 'Fast initial page load' },
        { label: 'SEO Score', value: '98', description: 'Comprehensive optimization' },
      ],
    },
    learnings: {
      title: 'Key Learnings',
      points: [
        'The importance of setting up CI/CD early in the project',
        'How Tailwind CSS can significantly speed up development',
        'The value of performance optimization from the start',
        'GitHub Pages is a viable option for static site hosting',
      ],
    },
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudyData[id as keyof typeof caseStudyData] : null;

  if (!study) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Case Study Not Found</h1>
          <Button variant="heroOutline" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Button variant="ghost" asChild>
          <Link to="/case-studies">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <FadeIn>
            <span className="text-sm font-medium text-primary mb-4 block">{study.subtitle}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              {study.title}<span className="text-primary">.</span>
            </h1>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.2}>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-secondary mt-8">
              <img
                src={study.heroImage}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Metrics */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-6 bg-secondary rounded-xl">
                  <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-display font-bold">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.overview}</p>
          </FadeIn>

          {/* Technologies */}
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                  <h2 className="text-2xl font-display font-bold">{study.problem.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{study.problem.description}</p>
                <ul className="space-y-3">
                  {study.problem.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-display font-bold">{study.solution.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{study.solution.description}</p>
                <ul className="space-y-3">
                  {study.solution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-display font-bold mb-4">{study.architecture.title}</h2>
            <p className="text-muted-foreground mb-8">{study.architecture.description}</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {study.architecture.details.map((detail, i) => (
              <FadeIn key={detail.title} delay={i * 0.1}>
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">{detail.title}</h3>
                  <p className="text-sm text-muted-foreground">{detail.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-display font-bold mb-8 text-center">
              {study.results.title}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.metrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-background/60">{metric.description}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl font-display font-bold mb-6">{study.learnings.title}</h2>
            <ul className="space-y-4">
              {study.learnings.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;
