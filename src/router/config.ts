const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/about",
    exact: true,
    component: "About",
  },
  {
    path: "/services",
    exact: true,
    component: "Services",
  }
];

export default routes;
