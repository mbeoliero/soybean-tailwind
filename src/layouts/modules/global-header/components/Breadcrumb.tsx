import type { BreadcrumbProps } from 'antd';
import clsx from 'clsx';

import { useMixMenuContext } from '@/features/menu';

import { getBreadcrumbsByRoute } from './breadcrumbShared.tsx';

const GlobalBreadcrumb: FC<Omit<BreadcrumbProps, 'items'>> = props => {
  const { allMenus: menus, route } = useMixMenuContext();

  const breadcrumb = useMemo(() => {
    return getBreadcrumbsByRoute(route, menus);
  }, [route, menus]);

  return (
    <ABreadcrumb
      {...props}
      items={breadcrumb}
      className={clsx(
        // eslint-disable-next-line react/prop-types
        props.className,
        '[&_.ant-breadcrumb-overlay-link]:!flex',
        '[&_.ant-breadcrumb-overlay-link]:!items-center'
      )}
    />
  );
};

export default GlobalBreadcrumb;
