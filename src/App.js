import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import NotFound from 'pages/NotFound'
import RedirectPage from 'pages/RedirectPage'
// Containers
import Modal from 'containers/modal'

const App = () => {
  // Browsers not supported Redirect Page (IE)
  // In development mode, you cannot view the output in the IE browser.
  // But, Don't worry. In production mode, this code works fine.
  const agent = navigator.userAgent.toLowerCase();
  let isRedirect = false;
  if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) isRedirect = true;
  else isRedirect = false;

  return (
    <>
      {isRedirect
        ? <Route path="*" component={RedirectPage} />
        : <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="*" component={NotFound} status={404} />
          </Switch>
      }
      <Modal /> {/* Modal Position */}
    </>
  );
}

export default App
