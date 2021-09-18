// config.js
module.exports = {
    github: {
        username: 'AdityaTeltia', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'aditya-teltia',
        twitter: 'TeltiaAditya',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://AdityaTeltia.github.io',
        phone: '9255790854',
        email: 'teltia.aditya22@gmail.com'
    },
    skills: [
        'JavaScript',
        'React.js',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'ExpressJS',
        'Golang',
        'Git',
        'CSS',
    ],
    experiences: [
        { 
            company: 'Intangles Pvt Ltd',
            position: 'Software Engineer Intern',
            from: 'August 2021',
            to: 'Present'
        },
        { 
            company: 'Acciojobs',
            position: 'Full Stack Engineer Intern',
            from: 'May 2021',
            to: 'August 2021'
        },
    ],
    education: [
        { 
            institution: 'Delhi Technological University',
            degree: 'Bachelor of Technology (COE)',
            from: '2020',
            to: 'Present'
        },
        { 
            institution: 'G.R.M Public School',
            degree: 'Senior Secondary School',
            from: '2019',
            to: '2020',
        }
    ],
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}