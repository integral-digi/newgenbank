// withIntl.js

import { getIntl } from './i18n';

export default function withIntl(WrappedComponent:any) {
  return function WithIntlWrapper(props) {
    const { locale } = props;
    const intl = getIntl(locale);
    return <WrappedComponent {...props} intl={intl} />;
  };
}
