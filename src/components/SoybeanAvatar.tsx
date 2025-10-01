import clsx from 'clsx';

import soybeanAvatar from '@/assets/imgs/soybean.jpg';

const SoybeanAvatar = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      {...props}
      className={clsx('size-72px overflow-hidden rounded-full', className)}
    >
      <img
        className="w-full h-full"
        src={soybeanAvatar}
      />
    </div>
  );
};

export default SoybeanAvatar;
