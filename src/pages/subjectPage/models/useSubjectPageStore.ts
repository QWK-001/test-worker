import { useState } from 'react';

export default function useSubjectPageStore() {
  const [activeTab, setActiveTab] = useState(1); // 当前选中的标签
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'yellow' | 'green'>('yellow'); // 主题类型
  const [scrollState, setScrollState] = useState(false); // 滚动状态

  const updateActiveTab = (val: number) => {
    setActiveTab(val);
  };
  const updateScrollState = (val: boolean) => {
    setScrollState(val);
  };

  const updateTheme = (val: 'yellow' | 'green') => {
    setTheme(val);
  };

  return {
    activeTab,
    theme,
    updateActiveTab,
    loading,
    updateTheme,
    updateScrollState,
    scrollState,
  };
}
