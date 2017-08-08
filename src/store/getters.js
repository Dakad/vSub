import * as types from './types';


export const langs = state => state.langs

export const errors = state => state.errors

export const isDragging = state => state.dragdrop.dragging

export const hasSummary = state => state.dropped.summaryList.length > 0

