import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  isPrimary?: boolean;
}

export const SkillCard = ({ name, icon: Icon, category, isPrimary = false }: SkillCardProps) => {
  return (
    <motion.div
      className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-default ${
        isPrimary
          ? 'border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/10'
          : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
      }`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isPrimary
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary group-hover:bg-primary/20'
          }`}
        >
          <Icon className={`w-5 h-5 ${!isPrimary && 'group-hover:text-primary transition-colors'}`} />
        </div>
        <span className={`font-medium ${isPrimary ? 'text-foreground' : 'text-foreground/80'}`}>
          {name}
        </span>
      </div>
      
      {/* Hover glow effect for primary skills */}
      {isPrimary && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl" />
        </div>
      )}
    </motion.div>
  );
};
