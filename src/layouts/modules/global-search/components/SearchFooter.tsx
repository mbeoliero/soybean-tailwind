import clsx from 'clsx';

import style from './footer.module.scss';

const SearchFooter = () => {
  const { t } = useTranslation();

  return (
    <>
      <ADivider className="my-2px" />
      <div className="h-11 flex items-center justify-center gap-3.5">
        <span className="flex items-center">
          <IconMdiKeyboardReturn className={clsx(style['operate-shadow'], style['operate-item'])} />
          <span>{t('common.confirm')}</span>
        </span>
        <span className="flex items-center">
          <IconMdiArrowUpThin className={clsx(style['operate-shadow'], style['operate-item'])} />
          <IconMdiArrowDownThin className={clsx(style['operate-shadow'], style['operate-item'])} />
          <span>{t('common.switch')}</span>
        </span>
        <span className="flex items-center">
          <IconMdiKeyboardEsc className={clsx(['operate-shadow'], style['operate-item'])} />
          <span>{t('common.close')}</span>
        </span>
      </div>
    </>
  );
};

export default memo(SearchFooter);
