import DarkModeContainer from '@/components/DarkModeContainer';
import FullScreen from '@/components/FullScreen';
import { GLOBAL_HEADER_MENU_ID } from '@/constants/app';
import { LangSwitch } from '@/features/lang';
import { MenuToggler } from '@/features/menu';
import { ThemeSchemaSwitch } from '@/features/theme';

import GlobalLogo from '../GlobalLogo';
import GlobalSearch from '../global-search/GlobalSearch';

import GlobalBreadcrumb from './components/Breadcrumb';
import ThemeButton from './components/ThemeButton';
import UserAvatar from './components/UserAvatar';

interface Props {
  isMobile: boolean;
  mode: UnionKey.ThemeLayoutMode;
  reverse?: boolean;
  siderWidth: number;
}

const HEADER_PROPS_CONFIG: Record<UnionKey.ThemeLayoutMode, App.Global.HeaderProps> = {
  horizontal: {
    showLogo: true,
    showMenu: true,
    showMenuToggler: false
  },
  'horizontal-mix': {
    showLogo: true,
    showMenu: true,
    showMenuToggler: false
  },
  vertical: {
    showLogo: false,
    showMenu: false,
    showMenuToggler: true
  },
  'vertical-mix': {
    showLogo: false,
    showMenu: false,
    showMenuToggler: false
  }
};

const GlobalHeader: FC<Props> = memo(({ isMobile, mode, reverse, siderWidth }) => {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);

  const { showLogo, showMenu, showMenuToggler } = HEADER_PROPS_CONFIG[mode];

  const showToggler = reverse ? true : showMenuToggler;

  return (
    <DarkModeContainer className="h-full flex items-center px-3 shadow-header">
      {showLogo && (
        <GlobalLogo
          className="h-full"
          style={{ width: `${siderWidth}px` }}
        />
      )}

      {showToggler && <MenuToggler />}

      <div
        className="h-full flex items-center flex-1 overflow-hidden"
        id={GLOBAL_HEADER_MENU_ID}
      >
        {!isMobile && !showMenu && (
          <div className="bg-container text-base-text transition-300 size-full flex-y-center px-16px shadow-tab">
            <div className="h-full flex-1-hidden">
              <div className="h-full text-left">
                <div className="inline-block h-full">
                  <div className="h-full flex pr-18px items-end">
                    <GlobalBreadcrumb className="ml-3 flex-nowrap whitespace-nowrap overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-full flex items-center justify-end">
        <GlobalSearch />

        {!isMobile && (
          <FullScreen
            className="px-3"
            full={isFullscreen}
            toggleFullscreen={toggleFullscreen}
          />
        )}

        <LangSwitch className="px-3" />

        <ThemeSchemaSwitch className="px-3" />

        <ThemeButton />

        <UserAvatar />
      </div>
    </DarkModeContainer>
  );
});

export default GlobalHeader;
