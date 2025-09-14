import React from 'react';

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  title,
  className,
  variant = 'primary',
  ...props
}) => {

  const baseContainerClasses = 'inline-flex items-center backdrop-blur-md rounded-full px-6 py-2 border';
  const baseTextClasses = 'font-medium xs:text-base text-sm';

  const variantStyles = {
    primary: {
      container: 'bg-primary/10 border-primary',
      text: 'text-primary',
    },
    secondary: {
      container: 'bg-white/20 border-white/30',
      text: 'text-white/70',
    },
  };

  const currentVariant = variantStyles[variant];

  const containerClasses = `${baseContainerClasses} ${currentVariant.container} ${className}`;
  const textClasses = `${baseTextClasses} ${currentVariant.text}`;

  return (
    <div className={containerClasses} {...props}>
      <span className={textClasses}>
        {title}
      </span>
    </div>
  );
};

export default SectionBadge;