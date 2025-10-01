import { useRoute } from '@/features/router';

const Component = () => {
  const { params } = useRoute<null, null, { slug: string[] }>();

  const { t } = useTranslation();

  return (
    <ACard
      className="h-full"
      title="Role Info"
    >
      <div className="mt-4 text-center text-lg">{t('page.manage.roleDetail.content')}</div>

      <div className="mt-4 text-center text-lg">{t('page.manage.roleDetail.explain')}</div>

      {params?.slug?.map((item, index) => (
        <div
          className="text-center text-lg"
          key={item}
        >
          第 {index + 1} 级: {item}
        </div>
      ))}
    </ACard>
  );
};

export default Component;
