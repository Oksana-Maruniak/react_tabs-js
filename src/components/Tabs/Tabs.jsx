import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': selectedTabId === tab })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              onClick={() => {
                setSelectedTabId(tab);
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {`${selectedTabId.content}`}
    </div>
  </div>
);
