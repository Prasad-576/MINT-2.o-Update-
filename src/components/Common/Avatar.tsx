interface AvatarProps {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'w-7 h-7 text-[10px]',
  md: 'w-9 h-9 text-xs',
  lg: 'w-11 h-11 text-sm',
};

const Avatar = ({ src, initials, size = 'md', className = '' }: AvatarProps) => {
  return (
    <div className={`relative flex items-center justify-center rounded-full overflow-hidden bg-teal-primary text-white font-medium ${sizeStyles[size]} ${className}`}>
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
