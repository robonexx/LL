import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/classnames';

export const buttonVariants = cva(
  'px-8 py-3 rounded-xl font-heading font-bold transition  text-center w-64',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-400 hover:bg-indigo-600 text-neutral-100',
        secondary: 'bg-orange text-neutral-100',
        outline: 'bg-none shadow-[inset_0_0_0_2px_#0015CE] text-neutral-900 hover:shadow-[inset_0_0_0_2px_#737fee] ',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
