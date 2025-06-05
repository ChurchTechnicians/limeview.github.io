import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  no: {
    translation: {
      home: 'Hjem',
      browse: 'Bla gjennom',
      categories: 'Kategorier',
      watch: 'Se',
      account: 'Konto',
      contact: 'Kontakt',
      settings: 'Innstillinger',
      admin: 'Admin',
      watchlist: 'Se senere',
      trending: 'Populært',
      help: 'Hjelp'
    }
  },
  en: {
    translation: {
      home: 'Home',
      browse: 'Browse',
      categories: 'Categories',
      watch: 'Watch',
      account: 'Account',
      contact: 'Contact',
      settings: 'Settings',
      admin: 'Admin',
      watchlist: 'Watchlist',
      trending: 'Trending',
      help: 'Help'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'no',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
