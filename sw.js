// 簡單版 Service Worker：確保 PWA 可安裝，但不快取，避免您修改程式後手機看不到更新
self.addEventListener('fetch', function(event) {
  // 直接通過，不做快取
  return;
});
