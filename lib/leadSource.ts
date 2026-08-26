export const LEAD_SOURCES = ['english', 'spanish', 'english-groups', 'osmoklasista'] as const
export type LeadSource = (typeof LEAD_SOURCES)[number]

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  english: 'Angielski',
  spanish: 'Hiszpański',
  'english-groups': 'Angielski – Grupy',
  osmoklasista: 'Egzamin Ósmoklasisty',
}

export const THANK_YOU_PATHS: Record<LeadSource, string> = {
  english: '/dziekujeangielski',
  spanish: '/dziekujehiszpanski',
  'english-groups': '/dziekujeangielskigrupy',
  osmoklasista: '/dziekujeangielskiosmoklasista',
}

export const SPANISH_LEVELS = ['Dopiero zaczynam', 'Znam już podstawy'] as const
export type SpanishLevel = (typeof SPANISH_LEVELS)[number]

export const ENGLISH_GROUPS_LEVELS = [
  'Ruszam prawie od zera',
  'Coś wiem, ale boję się mówić',
  'Konwersacje B1',
] as const
export type EnglishGroupsLevel = (typeof ENGLISH_GROUPS_LEVELS)[number]

export const ENGLISH_GROUPS_FREQUENCIES = ['1x w tygodniu', '2x w tygodniu'] as const
export type EnglishGroupsFrequency = (typeof ENGLISH_GROUPS_FREQUENCIES)[number]

export const OSMOKLASISTA_BOTTOM_INTERESTS = [
  'Zajęcia w kameralnej grupie (2–3 osoby)',
  'Zajęcia indywidualne (1 na 1)',
  'Chcę skonsultować wybór po lekcji próbnej',
] as const
export type OsmoklasistaBottomInterest = (typeof OSMOKLASISTA_BOTTOM_INTERESTS)[number]
