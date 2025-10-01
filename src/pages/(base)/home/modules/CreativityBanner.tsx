const CreativityBanner = () => {
  const { t } = useTranslation();

  return (
    <ACard
      className="h-full flex flex-col items-stretch card-wrapper" // Changed
      size="small"
      styles={{ body: { flex: 1, overflow: 'hidden' } }}
      title={t('page.home.creativity')}
      variant="borderless"
    >
      <div className="h-full flex justify-center items-center">
        {' '}
        {/* Changed */}
        <IconLocalBanner className="text-[400px] text-primary sm:text-[320px]" /> {/* Changed */}
      </div>
    </ACard>
  );
};

export default CreativityBanner;
