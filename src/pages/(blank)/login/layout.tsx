import { getPaletteColorByNumber, mixColor } from '@sa/color';
import { Outlet } from 'react-router-dom';

import WaveBg from '@/components/WaveBg';
import { getThemeSettings, useTheme } from '@/features/theme';

import Header from './modules/Header';

function useBgColor() {
  const COLOR_WHITE = '#ffffff';

  const { darkMode } = useTheme();

  const { themeColor } = useAppSelector(getThemeSettings);

  const bgThemeColor = darkMode ? getPaletteColorByNumber(themeColor, 600) : themeColor;

  const ratio = darkMode ? 0.5 : 0.2;

  const bgColor = mixColor(COLOR_WHITE, themeColor, ratio);

  return {
    bgColor,
    bgThemeColor
  };
}

const LoginLayout = () => {
  const { bgColor, bgThemeColor } = useBgColor();

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-layout"
      style={{ backgroundColor: bgColor }}
    >
      <WaveBg themeColor={bgThemeColor} />

      <ACard
        className="relative z-40 w-auto rounded-3xl"
        variant="borderless"
      >
        <div className="w-[100%] sm:w-[75%]">
          <Header />
          <main className="pt-6">
            <Outlet />
          </main>
        </div>
      </ACard>
    </div>
  );
};

export default LoginLayout;
