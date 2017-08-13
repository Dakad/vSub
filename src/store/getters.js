import * as types from './types';


export const langs = state => state.langs

export const hasErrors = state => state.errors

export const isLoading = state => state.loader.loading

export const isDragging = state => state.dragdrop.dragging

export const hasSummary = state => state.dropped.summaryList.length > 0

export const hasSub = state => (vidHash, langs='eng') => {
    const sub = state.subtitles.list[vidHash]
    if(!sub) return false
    if(typeof value == 'string') langs = Array.of(langs)
    return langs.every(l => sub[l] !== undefined)
}