let language= 'en'

let docsList = {}
export default docsList = {
        docs :[
        {
          icon: 'mdi-desktop-classic',
          title: 'User Module',
          items:[
            {
                title: "Installation",
                to: '/docs/userModule/installation'
            },
            {
                title: "Features",
                to: '/docs/userModule/documentation'+'_'+language
            }
            ],
            active: false,
        },
        {
            icon: 'mdi-desktop-classic',
            title: 'Other module',
            items:[
              {
                  title: "Installation",
                  to: '/docs/otherModule/installation'
              },
              {
                  title: "Features",
                  to: '/docs/otherModule/features'
              }
              ],
              active: false,
          }
      ],

        menu :[
        {
            icon: 'mdi-apps',
            title: 'Home',
            to: '/'
        },
        {
            icon: 'mdi-chart-bubble',
            title: 'Introduction',
            to: '/docs'
        },
        ]
}

