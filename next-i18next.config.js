/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
        // defaultLocale: 'en',
        // locales: ['en', 'de'],
        locales: ['default', 'en', 'de'],
        defaultLocale: 'default',
        // localeDetection: false,
    },
    returnObjects: true,
    resources: {
        de: {
            // common: require('./public/locales/de/common.json'),
            // cv: {
            //     work: require('@manuel-bieh/cv/data/de/work.json'),
            //     education: require('@manuel-bieh/cv/data/de/education.json'),
            //     qualifications: require('@manuel-bieh/cv/data/de/qualifications.json'),
            //     skills: require('@manuel-bieh/cv/data/de/skills.json'),
            //     projects: require('@manuel-bieh/cv/data/de/projects.json'),
            //     content: require('@manuel-bieh/cv/data/de/content.json'),
            // },
            common: {
                ...require('./public/locales/de/common.json'),
                cv: {
                    work: require('@manuel-bieh/cv/data/de/work.json'),
                    education: require('@manuel-bieh/cv/data/de/education.json'),
                    qualifications: require('@manuel-bieh/cv/data/de/qualifications.json'),
                    skills: require('@manuel-bieh/cv/data/de/skills.json'),
                    projects: require('@manuel-bieh/cv/data/de/projects.json'),
                    content: require('@manuel-bieh/cv/data/de/content.json'),
                },
            },
        },
        en: {
            // common: require('./public/locales/en/common.json'),
            // cv: {
            //     work: require('@manuel-bieh/cv/data/en/work.json'),
            //     education: require('@manuel-bieh/cv/data/en/education.json'),
            //     qualifications: require('@manuel-bieh/cv/data/en/qualifications.json'),
            //     skills: require('@manuel-bieh/cv/data/en/skills.json'),
            //     projects: require('@manuel-bieh/cv/data/en/projects.json'),
            //     content: require('@manuel-bieh/cv/data/en/content.json'),
            // },
            common: {
                ...require('./public/locales/en/common.json'),
                cv: {
                    work: require('@manuel-bieh/cv/data/en/work.json'),
                    education: require('@manuel-bieh/cv/data/en/education.json'),
                    qualifications: require('@manuel-bieh/cv/data/en/qualifications.json'),
                    skills: require('@manuel-bieh/cv/data/en/skills.json'),
                    projects: require('@manuel-bieh/cv/data/en/projects.json'),
                    content: require('@manuel-bieh/cv/data/en/content.json'),
                },
            },
        },
    },
};
