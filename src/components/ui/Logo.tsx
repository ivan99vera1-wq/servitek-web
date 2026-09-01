import Image from 'next/image';
import Link from 'next/link';

type LogoVariant = 'symbol' | 'vertical' | 'horizontal';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  light?: boolean;
}

const logoConfig = {
  symbol: {
    src: '/logo-s.png',
    width: 40,
    height: 40,
  },
  vertical: {
    src: '/images/logo/logo-principal.webp',
    width: 60,
    height: 120,
  },
  horizontal: {
    src: '/images/logo/logo-principal.webp',
    width: 180,
    height: 60,
  },
};

export function Logo({ variant = 'horizontal', className = '', light = false }: LogoProps) {
  const config = logoConfig[variant];

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={config.src}
        alt="SERVITEK"
        width={config.width}
        height={config.height}
        className="h-auto w-auto"
        style={{ maxHeight: variant === 'horizontal' ? '48px' : variant === 'symbol' ? '40px' : '120px' }}
        priority
      />
    </Link>
  );
}
