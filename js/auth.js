let users = {
  admin: {
    regUsernameValue: "admin",
    regPasswordValue: "admin1234",
  },
  user0: {
    regUsernameValue: "user",
    regPasswordValue: "user1234",
  },
  user1: {
    regUsernameValue: "user111",
    regPasswordValue: "user12345",
  },
};

let formClose = document.querySelectorAll(".form__close");
let authSpan = document.querySelectorAll(".auth__span");
let authOpen = document.querySelector(".popup__link");
let input = document.querySelectorAll(".input");

let menuLogout = document.querySelector(".header__logOut");
let menuAdmin = document.querySelector(".header__admin");
let menuProfile = document.querySelector(".header__profile");

let authScreen = document.querySelector(".auth__fullscreen");
let authForm = document.querySelector(".auth__form");
let authTitle = document.querySelector(".auth__title");
let authUsername = document.querySelector(".auth__username");
let authPassword = document.querySelector(".auth__password");
let authLink = document.querySelector(".auth__link");
let authBtn = document.querySelector(".auth__btn");
let AuthErrorMessage = document.querySelector(".auth__error-message");

let regScreen = document.querySelector(".reg__fullscreen");
let regForm = document.querySelector(".reg__form");
let regTitle = document.querySelector(".reg__title");
let regUsername = document.querySelector(".reg__username");
let regPassword = document.querySelector(".reg__password");
let regRePassword = document.querySelector(".reg__repassword");
let regLink = document.querySelector(".reg__link");
let regBtn = document.querySelector(".reg__btn");
let RegErrorMessage = document.querySelector(".reg__error-message");

authOpen.onclick = (e) => {
  authScreen.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "13px";
  headerContainer.style.paddingRight = "63px";
  binBtn.style.marginRight = "17px";
  e.preventDefault();
  //   document.querySelector('.popup__link-item').style.color = '#ddd'
};

formClose.forEach((e) => {
  e.addEventListener("click", () => {
    let screen = document.querySelectorAll(".fullscreen");
    for (var i = 0; i < screen.length; i++) {
      screen[i].style.display = "none";
      input.forEach((e) => (e.value = ""));
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "";
      headerContainer.style.paddingRight = "";
      binBtn.style.marginRight = "";
    }
  });
});

menuLogout.onclick = () => {
  localStorage.clear();
  location.reload();
};

authLink.onclick = () => {
  regScreen.style.display = "block";
  authScreen.style.display = "none";

  AuthErrorMessage.style.display = "none";
  authSpan.forEach((e) => (e.style.color = ""));

  input.forEach((e) => (e.value = ""));
};

regLink.onclick = () => {
  authScreen.style.display = "block";
  regScreen.style.display = "none";

  RegErrorMessage.style.display = "none";
  authSpan.forEach((e) => (e.style.color = ""));

  input.forEach((e) => (e.value = ""));
};

authBtn.addEventListener("click", () => {
  let authUsernameValue = document.querySelector(".auth__username").value;
  let authPasswordValue = document.querySelector(".auth__password").value;
  let authSpan = document.querySelectorAll(".auth__span");
  let AuthErrorMessage = document.querySelector(".auth__error-message");

  function authError() {
    AuthErrorMessage.style.display = "block";
    AuthErrorMessage.style.color = "#d42d2d";
    authSpan.forEach((e) => (e.style.color = "#d42d2d"));
  }

  for (const key in users) {
    if (
      users[key]["regUsernameValue"] == authUsernameValue &&
      users[key]["regPasswordValue"] == authPasswordValue
    ) {
      localStorage.setItem("role", key);
    }
  }

  let role = localStorage.getItem("role");

  if (localStorage.role == null) {
    authError();
    AuthErrorMessage.innerHTML = "???????????????? ?????????? ?????? ????????????";

    document.querySelectorAll(".input").forEach((e) =>
      e.addEventListener("mousedown", () => {
        authSpan.forEach((eve) => (eve.style.color = ""));
        AuthErrorMessage.style.display = "none";
      })
    );
  } else {
    if (role == "admin") {
      authScreen.style.display = "none";
      authOpen.style.display = "none";
      menuLogout.style.display = "block";
      menuAdmin.style.display = "block";
    } else {
      authScreen.style.display = "none";
      authOpen.style.display = "none";
      menuLogout.style.display = "block";
      menuProfile.style.display = "block";
    }
  }
});

regBtn.addEventListener("click", () => {
  let regUsernameValue = document.querySelector(".reg__username").value;
  let regPasswordValue = document.querySelector(".reg__password").value.trim();
  let regRePasswordValue = document
    .querySelector(".reg__repassword")
    .value.trim();
  let authSpan = document.querySelectorAll(".auth__span");
  let regErrorMessage = document.querySelector(".reg__error-message");

  function regError() {
    regErrorMessage.style.display = "block";
    regErrorMessage.style.color = "#d42d2d";
    authSpan.forEach((e) => (e.style.color = "#d42d2d"));
  }

  //   function regComplete() {
  //     regScreen.style.display = "none";
  //     authScreen.style.display = "block";

  //     input.forEach((e) => (e.value = ""));

  //     regErrorMessage.style.display = "none";
  //   }

  function regSucces() {
    regErrorMessage.style.display = "block";
    regErrorMessage.style.color = "green";
    regErrorMessage.innerHTML = "???????????????? ??????????????????????";
    authSpan.forEach((e) => (e.style.color = ""));
  }

  for (const key in users) {
    if (users[key]["regUsernameValue"] == regUsernameValue) {
      regError();
      regErrorMessage.innerHTML = "?????????? ?????? ???????????????????????? <br> ?????? ????????????????????";
      break;
    } else if (
      regPasswordValue.length === 0 ||
      regRePasswordValue.length === 0
    ) {
      regError();
      regErrorMessage.innerHTML = "?????????????????? ?????? ????????";
    } else if (regPasswordValue != regRePasswordValue) {
      regError();
      regErrorMessage.innerHTML = "???????????? ???? ??????????????????";
    } else {
      regSucces();

      users[regUsernameValue] = { regUsernameValue, regPasswordValue };
    }
    document.querySelectorAll(".input").forEach((e) =>
      e.addEventListener("mousedown", () => {
        regErrorMessage.style.display = "none";
        authSpan.forEach((e) => (e.style.color = ""));
      })
    );
  }
});
