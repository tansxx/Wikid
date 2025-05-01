import { ButtonHTMLAttributes } from 'react';

type HtmlButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface PrimaryButtonProps {
  children: React.ReactNode; 
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
  height?: 48 | 45 | 44; 
  variant?: 'filled-green' | 'filled-gray' | 'outlined-green' | 'outlined-gray';
  type?: HtmlButtonType['type']; 
}

export default function PrimaryButton({
  children,
  onClick,
  size = 'md',
  height = 48, 
  variant = 'filled-green',
  type = 'button',
}: PrimaryButtonProps) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'filled-green':
        return 'bg-[#4CBFA4] text-white border-none';
      case 'filled-gray':
        return 'bg-[#C6CADA] text-white border-none';
      case 'outlined-green':
        return 'bg-transparent text-[#4CBFA4] border border-solid border-[1px] border-[#4CBFA4]';
      case 'outlined-gray':
        return 'bg-transparent text-[#666666] border border-solid border-[1px] border-[#C6CADA]';
    }
  };

  const sizeStyles = {
    xs: 'py-1 px-2 text-xs',
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl',
  };

  const dynamicHeight = `${height}px`;

  return (
    <button
      type={type}
      className={`flex items-center justify-center box-border rounded-lg font-medium cursor-pointer transition-colors duration-200 ease-in-out hover:opacity-90 ${sizeStyles[size]} ${getVariantStyle()}`}

      onClick={onClick}
      style={{ height: dynamicHeight }}
    >
      {children}
    </button>
  );
}
