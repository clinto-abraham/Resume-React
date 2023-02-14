import { createSlice } from '../Utils/exports'

const initialState = {
    seconds: 20,
    color: 'white',
    render: 0,
    verse: 0,
    progress: 0,
    page: 1,
    pathname: '/',
    currentYear: new Date().getFullYear(),
    selected: false,
    footerItems: [
        {
            url: 'https://github.com/clinto92',
            name: 'Github',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: 'https://www.linkedin.com/in/clinto-abraham/',
            name: 'Linkedin',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: 'https://twitter.com/ClintoAbraham92',
            name: 'Twitter',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: 'https://stackoverflow.com/users/14870101/clinto-92-abraham',
            name: 'Stackoverflow',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: 'https://clinto.netlify.app/',
            name: 'Portfolio',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            url: '/privacy-&-policy',
            name: 'Privacy & Policy',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: '/terms-of-service',
            name: 'Terms Of Service',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            url: '/about',
            name: 'About',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: 'https://www.linkedin.com/in/clinto-abraham/',
            name: 'Comments',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: '/favorites',
            name: 'Favorites',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: '/family-tree',
            name: 'Family Tree',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        {
            url: '/',
            name: 'Home',
            target: '_blank',
            rel: 'noopener noreferrer',
        },
        
    ],
}

export const footerSlice = createSlice({
    name: 'footerUtils',
    initialState,
    reducers: {
        registerSeconds: (state, action) => {
            state.seconds = action.payload;
        },
        registerColor: (state, action) => {
            state.color = action.payload;
        },
        registerRendering: (state, action) => {
            state.render = action.payload;
        },
        registerVerse: (state, action) => {
            state.verse = action.payload;
        },
        registerProgress: (state, action) => {
            state.progress = action.payload;
        },
        registerPage: (state, action) => {
            state.page = action.payload;
        },
        registerPathname: (state, action) => {
            state.pathname = action.payload;
        },
          registerSelected: (state, action) => {
            state.selected = action.payload;
        },
    }
})

export const { 
    registerSeconds, 
    registerColor, 
    registerRendering, 
    registerVerse, 
    registerProgress, 
    registerPage, 
    registerPathname,
    registerSelected,
 } = footerSlice.actions

export default footerSlice.reducer;