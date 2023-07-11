// import { DefaultLayoutSearch } from '~/components/Layout';
// import { DefaultLayoutPremiumDow } from '~/components/Layout';
// import { DefaultLayoutSupport } from '~/components/Layout';

import Home from '~/pages/Home';

const publicRoutes = [
  { path: '/', component: Home },
  // { path: '/search', component: Search, layout: DefaultLayoutSearch },
  // { path: '/premium', component: Premium, layout: DefaultLayoutPremiumDow },
  // { path: '/download', component: Download, layout: DefaultLayoutPremiumDow },
  // { path: '/support', component: Support, layout: DefaultLayoutSupport },
  // { path: '/login', component: Login, layout: null },
  // { path: '/register', component: Register, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
