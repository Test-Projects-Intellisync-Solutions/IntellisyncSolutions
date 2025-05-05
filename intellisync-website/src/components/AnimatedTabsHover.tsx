

export function AnimatedTabsHover() {
  const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'GPTBuilder', href: '/gptbuilder' },
  ];
  // Basic active tab detection (client-side only)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <nav aria-label="Main navigation" className="flex flex-row rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1 my-4 mx-6">
      {NAV_LINKS.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          className={`px-2 py-0.5 mx-1 rounded transition-colors duration-300 text-zinc-600 dark:text-zinc-300 hover:text-accent1 dark:hover:text-white ${currentPath === tab.href ? 'bg-accent1 text-primary font-bold' : ''}`}
          aria-current={currentPath === tab.href ? 'page' : undefined}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
}
