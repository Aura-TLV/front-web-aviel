import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { COOKIE_ACCEPTED_NAME, COOKIE_ACCEPTED_BTN_STYLE, COOKIE_ACCEPTED_STYLE, COOKIE_EXPIRES_DAYS } from '../../utils/consts';

const NotFound = () => {

  const { t } = useTranslation();

  return (
    <>
      <div>{t('general.notFound')}</div>
      <Link to='/'>{t('general.goToHomePage')}</Link>
      <CookieConsent
        location="bottom"
        buttonText={t('cookies.btnOK')}
        cookieName={COOKIE_ACCEPTED_NAME}
        style={COOKIE_ACCEPTED_STYLE}
        buttonStyle={COOKIE_ACCEPTED_BTN_STYLE}
        expires={COOKIE_EXPIRES_DAYS}
      >
        {t('cookies.message')}
      </CookieConsent>
    </>
  )
}

export default NotFound;