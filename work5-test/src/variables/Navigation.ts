import home from '../assets/img/navigation-images/home.svg'
import myMarkets from '../assets/img/navigation-images/my-markets.svg'
import promoMaterials from '../assets/img/navigation-images/promo-materials.svg'
import statistic from '../assets/img/navigation-images/statistic.svg'
import balance from '../assets/img/navigation-images/balance.svg'
import personal from '../assets/img/navigation-images/personal.svg'
import faq from '../assets/img/navigation-images/faq.svg'
import support from '../assets/img/navigation-images/support.svg'

import activeHome from '../assets/img/navigation-images/active-home.svg'
import activeMyMarkets from '../assets/img/navigation-images/active-my-markets.svg'
import activePromoMaterials from '../assets/img/navigation-images/active-promo-materials.svg'
import activeStatistic from '../assets/img/navigation-images/active-statistic.svg'
import activeBalance from '../assets/img/navigation-images/active-balance.svg'
import activePersonal from '../assets/img/navigation-images/active-personal.svg'
import activeFaq from '../assets/img/navigation-images/active-faq.svg'
import activeSupport from '../assets/img/navigation-images/active-support.svg'

export const navigationObject = {
    home: {
        active: activeHome,
        default: home,
        name: 'Главная',
        pathName: '/'
    },
    markets: {
        active: activeMyMarkets,
        default: myMarkets,
        name: 'Мои магазины',
        pathName: '/markets'
    },
    statistic: {
        active: activeStatistic,
        default: statistic,
        name: 'Статистика',
        pathName: '/statistic'
    },
    promo: {
        active: activePromoMaterials,
        default: promoMaterials,
        name: 'Промоматаериалы',
        pathName: '/promo'
    },
    personal: {
        active: activePersonal,
        default: personal,
        name: 'Персональные данные',
        pathName: '/personal'
    },
    faq: {
        active: activeFaq,
        default: faq,
        name: 'FAQ',
        pathName: '/faq'
    },
    support: {
        active: activeSupport,
        default: support,
        name: 'Техническая поддержка',
        pathName: '/support'
    },
    balance: {
        active: activeBalance,
        default: balance,
        name: 'Баланс',
        pathName: '/balance'
    }
}
