import './App.css';

import { useState, useEffect } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  'tr': {
    title: 'Merhaba Dünya',
    description: '{count} yeni mesajınız var'
  },
  'en-US': {
    title: 'Hello World',
    description: 'You have {count} new messages'
  }
}

function App() {
  const isLocale = localStorage.getItem('locale')
  const defaultLocale = isLocale ? isLocale : navigator.language
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  console.log(defaultLocale)

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 33 }} />
        </p>

        <br />
        <br />

        <button
          onClick={() => setLocale('en-US')}
        >EN</button>
        <button
          onClick={() => setLocale('tr')}
        >TR</button>
      </IntlProvider>
    </div>
  );
}

export default App;
