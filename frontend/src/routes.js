const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  getDataPath: () => [apiPath, 'data'].join('/'),
  homePagePath: () => '/',
  aboutPagePath: () => '/about',
  loginPagePath: () => '/login',
  signUpPagePath: () => '/signup',
};

export default routes;
