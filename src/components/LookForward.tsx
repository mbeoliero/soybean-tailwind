import type { PropsWithChildren } from 'react';

import SvgIcon from './SvgIcon';

const LookForward = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full min-h-[520px] flex flex-col items-center justify-center gap-6 overflow-hidden">
      <div className="flex text-[400px] text-primary">
        <SvgIcon localIcon="expectation" />
      </div>

      {children || <h3 className="text-[28px] text-primary font-medium">{t('common.lookForward')}</h3>}
    </div>
  );
};

export default LookForward;
