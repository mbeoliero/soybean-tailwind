import type { MenuProps } from 'antd';

import { selectToken, selectUserInfo } from '@/features/auth/authStore';
import { useRouter } from '@/features/router';

const UserAvatar = memo(() => {
  const token = useAppSelector(selectToken);

  const { t } = useTranslation();

  const userInfo = useAppSelector(selectUserInfo);

  const { navigate } = useRouter();

  function logout() {
    window?.$modal?.confirm({
      cancelText: t('common.cancel'),
      content: t('common.logoutConfirm'),
      okText: t('common.confirm'),
      onOk: () => {
        navigate('/login-out');
      },
      title: t('common.tip')
    });
  }

  function onClick({ key }: { key: string }) {
    if (key === '1') {
      logout();
    } else {
      navigate('/user-center');
    }
  }

  function loginOrRegister() {
    navigate('/login');
  }

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <div className="flex items-center justify-center gap-2">
          <SvgIcon
            className="text-gray-500"
            icon="ph:user-circle"
          />
          {t('common.userCenter')}
        </div>
      )
    },
    {
      type: 'divider'
    },
    {
      key: '1',
      label: (
        <div className="flex items-center justify-center gap-2">
          <SvgIcon
            className="text-gray-500"
            icon="ph:sign-out"
          />
          {t('common.logout')}
        </div>
      )
    }
  ];

  return token ? (
    <ADropdown
      menu={{ items, onClick }}
      placement="bottomRight"
      trigger={['click']}
    >
      <div className="flex items-center gap-2">
        <ButtonIcon className="px-3">
          <SvgIcon
            className="text-gray-500"
            icon="ph:user-circle"
          />
          <span className="text-4 font-medium">{userInfo.userName}</span>
        </ButtonIcon>
      </div>
    </ADropdown>
  ) : (
    <AButton onClick={loginOrRegister}>{t('page.login.common.loginOrRegister')}</AButton>
  );
});

export default UserAvatar;
