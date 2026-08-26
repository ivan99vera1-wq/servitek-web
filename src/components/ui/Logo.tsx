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
    src: '/images/logo/logo-principal.png',
    width: 140,
    height: 47,
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
        className="h-20 w-auto"
        priority
      />
    </Link>
  );
}
