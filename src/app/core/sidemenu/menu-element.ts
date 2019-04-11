export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Payment',
    'icon': 'shopping_basket',
    'link': '/payment',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Comment',
    'icon': 'shopping_basket',
    'link': '/comment/list',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Academy',
    'icon': 'list',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All Cohorts',
        'icon': 'filter_list',
        'link': '/academy/cohorts/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Apprentices',
        'icon': 'filter_list',
        'link': '/academy/apprentices/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
    ]
  },
];
