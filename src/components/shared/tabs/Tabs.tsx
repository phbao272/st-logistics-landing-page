'use client';

import { useState } from 'react';
import { Tabs } from '@mantine/core';
import classes from './styles.module.css';
import { IconArrowRight } from '@tabler/icons-react';

export interface IOptionTab {
  title: string;
  content: React.JSX.Element;
}

interface TabsCustomProps {
  placement?: 'left' | 'right' | 'top';
  options: IOptionTab[];
}

const TabsCustom = ({ placement = 'left', options }: TabsCustomProps) => {
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  if (placement === 'top') {
    return (
      <Tabs value={value} onChange={setValue} className="rounded-[30px] bg-white p-[30px]">
        <Tabs.List className={classes.list}>
          <Tabs.Tab value="1" className={classes.tab}>
            First tab
          </Tabs.Tab>
          <Tabs.Tab value="2" className={classes.tab}>
            Second tab
          </Tabs.Tab>
          <Tabs.Tab value="3" className={classes.tab}>
            Third tab
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="1">First tab content</Tabs.Panel>
        <Tabs.Panel value="2">Second tab content</Tabs.Panel>
        <Tabs.Panel value="3">Third tab content</Tabs.Panel>
      </Tabs>
    );
  }

  return (
    <Tabs
      variant="none"
      value={value}
      onChange={setValue}
      orientation="vertical"
      placement={placement}
      className="gap-[30px] rounded-[30px] bg-white p-[30px]"
    >
      <Tabs.List className={classes.list}>
        {options.map((option, index) => (
          <Tabs.Tab
            value={String(index + 1)}
            ref={setControlRef(String(index + 1))}
            className={classes.tab}
            rightSection={<IconArrowRight size={20} />}
            key={option.title}
          >
            {option.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {options.map((option, index) =>
        value === String(index + 1) ? (
          <Tabs.Panel value={String(index + 1)} key={option.title}>
            {option.content}
          </Tabs.Panel>
        ) : null,
      )}
    </Tabs>
  );
};

export { TabsCustom };
