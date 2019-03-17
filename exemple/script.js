window.onload = function() {

  CookieManager.set("utm_source", "google", 3);
  CookieManager.set("utm_medium", "banner", 3);

  console.log(CookieManager.get("utm_source"));

  CookieManager.update("utm_medium", "cpc", 3);

  CookieManager.delete("utm_medium");

  console.log(CookieManager.getAll());

  CookieManager.clear();

};
