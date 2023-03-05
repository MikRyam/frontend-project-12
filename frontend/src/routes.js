const apiPath = '/api/v1';

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  homePagePath: () => '/',
  aboutPagePath: () => '/about',
  loginPagePath: () => '/login',
  signUpPagePath: () => '/signup',
};

