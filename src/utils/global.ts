export function useNavigateMethods() {
  // 返回
  const handleNavigateBack = (delta: number) => {    
    uni.navigateBack({ delta });
  };

  // 路由跳转
  const handleNavigateTo = (url: string, tabPage = false) => {
    if (tabPage) {
      uni.switchTab({ url })
    } else {
      uni.navigateTo({ url });
    }
  };

  return {
    handleNavigateBack,
    handleNavigateTo,
  };
}
