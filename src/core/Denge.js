export const Denge = (userRoutes) => {
  const routerList = userRoutes;
  const navigateToUrl = (url) => {
    history.pushState(null, null, url);
    routerView();
  };

  const routerView = () => {
    const routes = routerList;

    const routesConfig = routes.map((route) => {
      return {
        route: route,
        isMatch: location.pathname === route.path,
      };
    });

    let matchedRoute = routesConfig.find(
      (routesConfig) => routesConfig.isMatch
    );

    document.querySelector("#root").innerHTML = matchedRoute.route.page();
  };

   const changeRouterLink = (event) => {
    event.preventDefault();
    navigateToUrl(event.target.href);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-router-link]").forEach(routerLink => routerLink.addEventListener("click", changeRouterLink))
    routerView();
  });

  window.addEventListener("popstate", routerView);
};

export let setTitle = (title) => {
  document.title = title;
};
