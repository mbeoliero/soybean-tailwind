import FlipText from '@/components/FilpText';
import SystemLogo from '@/components/SystemLogo';
import { LangSwitch } from '@/features/lang';
import { ThemeSchemaSwitch } from '@/features/theme';

const Header = memo(() => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between">
      <SystemLogo className="h-16 w-16 text-primary sm:h-12 sm:w-12" />

      <FlipText
        className="text-7xl text-primary font-medium sm:text-5xl"
        word={t('system.title')}
      />

      <div className="flex flex-col">
        <ThemeSchemaSwitch
          className="text-xl sm:text-lg"
          showTooltip={false}
        />
        <LangSwitch showTooltip={false} />
      </div>
    </header>
  );
});

export default Header;
