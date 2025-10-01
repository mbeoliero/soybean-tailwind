import clsx from 'clsx';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import SystemLogo from '@/components/SystemLogo';

interface Props extends Omit<LinkProps, 'to'> {
  /** Whether to show the title */
  showTitle?: boolean;
}
const GlobalLogo: FC<Props> = memo(({ className, showTitle = true, ...props }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={clsx('w-full flex items-center justify-center whitespace-nowrap overflow-hidden', className)}
      to={import.meta.env.VITE_ROUTE_HOME}
      {...props}
    >
      <SystemLogo className="text-4xl text-primary" />
      <h2
        className="pl-2 text-xl text-primary font-bold transition duration-300 ease-in-out"
        style={{ display: showTitle ? 'block' : 'none' }}
      >
        {t('system.title')}
      </h2>
    </Link>
  );
});

export default GlobalLogo;
