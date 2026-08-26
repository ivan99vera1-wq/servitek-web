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
    src: '/images/logo/logo1.png',
    width: 40,
    height: 40,
  },
  vertical: {
    src: '/images/logo/logo2.png',
    width: 60,
    height: 120,
  },
  horizontal: {
    src: '/images/logo/logo3.png',
    width: 180,
    height: 40,
  },
};

export function Logo({ variant = 'horizontal', className = '', light = false }: LogoProps) {
  const config = logoConfig[variant];
  const logoSrc = light ? config.src.replace('.png', '-white.png') : config.src;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src={config.src}
        alt="SERVITEK"
        width={config.width}
        height={config.height}
        className="h-auto w-auto"
        priority
      />
    </Link>
  );
}
