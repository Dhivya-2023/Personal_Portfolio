import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Lock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  badge?: 'LIVE' | 'NDA' | 'DEMO' | 'CASE_STUDY';
  liveUrl?: string;
  demoVideo?: string;
  caseStudyUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDemo?: (videoUrl: string) => void;
  onViewOverview?: (project: Project) => void;
}

export const ProjectCard = ({ project, onViewDemo, onViewOverview }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXVal = ((y - centerY) / centerY) * -8;
    const rotateYVal = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'LIVE':
        return 'default';
      case 'NDA':
        return 'secondary';
      case 'DEMO':
        return 'outline';
      case 'CASE_STUDY':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getBadgeLabel = (badge: string) => {
    switch (badge) {
      case 'CASE_STUDY':
        return 'Case Study';
      default:
        return badge;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden border border-border transition-shadow duration-300"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)',
        }}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Badge */}
          {project.badge && (
            <Badge
              variant={getBadgeVariant(project.badge)}
              className="absolute top-4 right-4"
            >
              {project.badge === 'NDA' && <Lock className="w-3 h-3 mr-1" />}
              {getBadgeLabel(project.badge)}
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button variant="accent" size="sm" className="flex-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.demoVideo && (
              <Button
  variant="heroOutline"
  size="sm"
  className="flex-1"
  asChild
>
  <a
    href={project.demoVideo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Play className="w-4 h-4 mr-1" />
    Watch Demo
  </a>
</Button>

            )}
            {project.badge === 'NDA' && (
              <Button
                variant="heroOutline"
                size="sm"
                className="flex-1"
                onClick={() => onViewOverview?.(project)}
              >
                <FileText className="w-4 h-4 mr-1" />
                Overview
              </Button>
            )}
            {project.caseStudyUrl && (
              <Button variant="heroOutline" size="sm" className="flex-1" asChild>
                <a href={project.caseStudyUrl}>
                  <FileText className="w-4 h-4 mr-1" />
                  Case Study
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
