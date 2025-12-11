import { writable } from 'svelte/store';

export const currentLang = writable<'ru' | 'en'>('ru');

export function toggleLanguage() {
    currentLang.update(l => l === 'ru' ? 'en' : 'ru');
}