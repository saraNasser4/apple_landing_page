'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
      <Image src="/logo.svg" alt="Logo" width={25} height={25} className={`${theme === 'dark' ? 'invert-25 hover:invert-0' : 'invert-100 hover:invert-75'}`} />
    </button>
  );
}

export default ThemeToggle;