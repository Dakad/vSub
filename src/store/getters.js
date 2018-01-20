import * as types from './types';


export const langs = state => state.langs

export const hasErrors = state => state.errors

export const isLoading = state => state.loader.loading

export const isDragging = state => state.dragdrop.dragging

export const hasSummary = state => state.dropped.summaryList.length > 0

export const getSummary = ({ dropped }) => {
    return (hash) => dropped.summaryList.find(s => s.hash == hash)
}

export const getSummaryList = ({ dropped }) => {
    return (term, ss, ep) => {
        if (!term) return dropped.summaryList
        const regex = new RegExp(term, 'i')
        return dropped.summaryList.filter(s => s.name.search(regex))
    }
}

export const hasSub = state => (vidHash, langs = 'eng') => {
    const sub = state.subtitles.fetched[vidHash]
    if (!sub) return false
    if (typeof value == 'string') langs = Array.of(langs)
    return langs.every(l => sub[l] !== undefined)
}

export const getFetchedSubs = ({ subtitles }) => {
    return (hash, lang) => {
        // ? Has fetched for this vidHash ? 
        if (!subtitles.fetched.hasOwnProperty(hash))
            return {}

        const subs = subtitles.fetched[hash]

        // ? Want by the lang ?
        if (lang !== undefined)
            return (subs || {}).hasOwnProperty(lang) ? subs[lang] : [];

        return subs
    }
}

export const getFetchedSubLangs = ({ subtitles }) => {
    return (hash) => {
        // ? Has fetched some subs for this vidHash ? 
        return (subtitles.fetched.hasOwnProperty(hash)) ?
            Object.keys(subtitles.fetched[hash]) :
            []
    }
}

export const getDownloadedSub = ({ subtitles }) => {
    return (hash, lang) => {
        const containsLang = lang && (subtitles.downloaded[hash] || {}).hasOwnProperty(lang)
        if (!subtitles.downloaded.hasOwnProperty(hash) || !containsLang)
            return {}

        const subs = subtitles.downloaded[hash]
        return (subs && containsLang) ? subs[lang] : subs;
    }
}

export const getNotificationsList = ({ notifications }) => notifications.list

export const getNotif = ({ notifications }) => notifications.list[notifications.list.length - 1]