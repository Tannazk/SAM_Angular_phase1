import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Systems',
    title: true
  },
  {
    name: 'SEA-SFP',
    url: 'buttons/buttons',
    iconComponent: { name: 'cil-cursor' }

  },
  {
    name: 'SCE',
    url: '/forms/form-control',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'SCT',
    url: '/notifications/alerts',
    iconComponent: { name: 'cil-bell' }
  },
  {
    name: 'SCAP',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' }
  },
  {
    title: true,
    name: 'Extras'
  },

  {
    name: 'Documents',
    url: '/base',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'SEA-SFP',
        url: '/base/accordion'
      },
      {
        name: 'SCE',
        url: '/base/breadcrumbs'
      },
      {
        name: 'SCT',
        url: '/base/cards'
      },
      {
        name: 'SCAP',
        url: '/base/carousel'
      }
    ]
  },
  
  {
    name: 'Configuration',
    url: 'https://coreui.io/angular/docs/templates/installation',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  }
];
