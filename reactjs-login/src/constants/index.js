export const DEFAULT = {
  TOKEN: "TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const LOCATION = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  IMAGE: "/images",
  PRODUCT: "/products",
  PRODUCT_DETAIL: "/products/:id",
  PLAY_LIST: "/play-list",
  CART_EMPLOYEE: "/cart-employee",
  CART_MANAGER: "/cart-manager",
  BUTTON_ACCORDION: "/button-accordion",
  FORM: "/form",
  DEMO: "/demo",
  TODO:"/todo",
};

export const NON_AUTH = [
  {
    path: LOCATION.LOGIN,
    title: "Đăng nhập",
  },
  {
    path: LOCATION.REGISTER,
    title: "Đăng ký",
  },
];

export const AUTH = [
  {
    path: LOCATION.IMAGE,
    title: "Carousel",
  },
  {
    path: LOCATION.PRODUCT,
    title: "Products",
  },
  {
    path: LOCATION.PLAY_LIST,
    title: "MP3 Player",
  },
  {
    path: LOCATION.CART_EMPLOYEE,
    title: "Employee",
  },
  {
    path: LOCATION.CART_MANAGER,
    title: "Manager",
  },
  {
    path: LOCATION.BUTTON_ACCORDION,
    title: "Accordion",
  },
  {
    path: LOCATION.FORM,
    title: "Form",
  },
  {
    path: LOCATION.REGISTER,
    title: "Create new account",
  },
  {
    path: LOCATION.TODO,
    title: "Todo App",
  },
]
