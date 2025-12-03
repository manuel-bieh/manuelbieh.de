// import the original type declarations
import 'i18next';

import { resources } from '../../next-i18next.config.js';

// react-i18next versions higher than 11.11.0
declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        // resources: (typeof resources)['en']['cv'] & (typeof resources)['en']['common'];
        resources: (typeof resources)['en'];
        // allowObjectInHTMLChildren: true;
    }
}
