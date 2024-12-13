
import PropTypes from "prop-types";
import clsx from "clsx";
import React from "react";
  
// eslint-disable-next-line react/display-name
const Button = React.memo(({ 
  onClick, 
  variant, 
  size, 
  className ='', 
  children }) => {

  const baseStyles = 
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

  const variants = {
    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'hover:bg-slate-200 hover:text-accent-foreground',
    ghost2: 'hover:bg-slate-50 hover:text-accent-foreground',
    outline:'border border-input bg-background shadow-sm hover:bg-slate-200 hover:text-accent-foreground '
  };
  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'ghost']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;