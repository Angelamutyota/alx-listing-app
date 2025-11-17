export interface CardProps {
  title: string;
  location?: string;
  price?: string;
  imageSrc: string;
  onPrimaryClick?: () => void;
  primaryLabel?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}
