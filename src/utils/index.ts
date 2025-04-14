/**
 * 滚动到页面顶部
 * @param behavior 滚动行为，默认为 'smooth'
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};
