import classNames from 'clsx';

import type { ButtonTabProps } from '../../types';

import ChromeTabBg from './ChromeTabBg';
import { useTap } from './hook';
import styles from './index.module.css';

const ChromeTab = ({
  active,
  children,
  className,
  darkMode,
  onClick,
  prefix,
  style,
  suffix,
  ...rest
}: ButtonTabProps) => {
  const tap = useTap(onClick);

  return (
    <div
      {...rest}
      {...tap}
      style={{ ...style }}
      className={classNames(
        'relative inline-flex cursor-pointer items-center justify-center gap-4 whitespace-nowrap px-6 py-1.5 -mr-[18px]',
        [
          styles['chrome-tab'],
          { [styles['chrome-tab_dark']]: darkMode },
          { [styles['chrome-tab_active']]: active },
          { [styles['chrome-tab_active_dark']]: active && darkMode },
          className
        ]
      )}
      onClick={onClick}
    >
      <div
        className={classNames('pointer-events-none absolute left-0 top-0 h-full w-full -z-10', [
          styles['chrome-tab__bg']
        ])}
      >
        <ChromeTabBg />
      </div>
      {prefix}
      {children}
      {suffix}
      <div className={classNames('absolute right-[7px] h-4 w-px bg-[#1f2225]', [styles['chrome-tab-divider']])} />
    </div>
  );
};

export default ChromeTab;
