import clsx from 'clsx';

interface Props {
  active: boolean;
  enter: () => void;
  menu: App.Global.Menu;
  setActiveRouteName: (name: string) => void;
}

const SearchResult: FC<Props> = memo(({ active, enter, menu, setActiveRouteName }) => {
  function handleMouseEnter() {
    setActiveRouteName(menu.key);
  }

  return (
    <div
      className={clsx(
        'mt-2 h-14 flex items-center cursor-pointer justify-between rounded px-3.5 bg-gray-200 dark:bg-gray-800',
        { 'bg-primary': active },
        { 'text-white': active }
      )}
      onClick={enter}
      onMouseEnter={handleMouseEnter}
    >
      <span className="ml-1.25 flex-1">
        {menu.icon}
        {menu.label}
      </span>

      <IconAntDesignEnterOutlined />
    </div>
  );
});

export default SearchResult;
