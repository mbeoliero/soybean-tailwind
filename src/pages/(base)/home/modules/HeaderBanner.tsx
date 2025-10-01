import avatar from '@/assets/imgs/soybean.jpg';
import { selectUserInfo } from '@/features/auth/authStore';

interface StatisticData {
  id: number;
  title: string;
  value: string;
}

const HeaderBanner = () => {
  const { t } = useTranslation();

  const userInfo = useAppSelector(selectUserInfo);

  const statisticData: StatisticData[] = [
    {
      id: 0,
      title: t('page.home.projectCount'),
      value: '25'
    },
    {
      id: 1,
      title: t('page.home.todo'),
      value: '4/16'
    },
    {
      id: 2,
      title: t('page.home.message'),
      value: '12'
    }
  ];
  return (
    <ACard
      className="card-wrapper"
      variant="borderless"
    >
      <ARow gutter={[16, 16]}>
        <ACol
          md={18}
          span={24}
        >
          <div className="flex items-center">
            <div className="w-18 h-18 shrink-0 overflow-hidden rounded-full">
              <img
                className="w-full h-full"
                src={avatar}
              />
            </div>
            <div className="pl-3">
              <h3 className="text-lg font-semibold">{t('page.home.greeting', { userName: userInfo.userName })}</h3>
              <p className="text-gray-400 leading-7">{t('page.home.weatherDesc')}</p>
            </div>
          </div>
        </ACol>

        <ACol
          md={6}
          span={24}
        >
          <ASpace
            className="w-full justify-end"
            size={24}
          >
            {statisticData.map(item => (
              <AStatistic
                className="whitespace-nowrap"
                key={item.id}
                {...item}
              />
            ))}
          </ASpace>
        </ACol>
      </ARow>
    </ACard>
  );
};

export default HeaderBanner;
