const CreativityBanner = () => {
  const { t } = useTranslation();

  return (
    <ACard
      className="h-full flex flex-col card-wrapper"
      size="small"
      styles={{ body: { flex: 1, overflow: 'hidden' } }}
      title={t('page.home.creativity')}
      variant="borderless"
    >
      <div className="h-full flex items-center justify-center">
        <IconLocalBanner className="text-100 text-primary sm:text-80" />
      </div>
    </ACard>
  );
};

export default CreativityBanner;
