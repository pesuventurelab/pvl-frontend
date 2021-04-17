export const setTheme = (theme) => {
  let curUserInfo = JSON.parse(localStorage.getItem("pvlUserInfo"));

  if (curUserInfo === null) {
    curUserInfo = {
      theme: "light",
    };
    localStorage.setItem("pvlUserInfo", JSON.stringify(curUserInfo));
  } else {
    curUserInfo.theme = theme;
    localStorage.setItem("pvlUserInfo", JSON.stringify(curUserInfo));
  }
  document.documentElement.setAttribute("data-theme", curUserInfo.theme);
};
