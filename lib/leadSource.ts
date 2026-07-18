export const LEAD_SOURCES = ['english', 'spanish'] as const
export type LeadSource = (typeof LEAD_SOURCES)[number]

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  english: 'Angielski',
  spanish: 'Hiszpański',
}

export const THANK_YOU_PATHS: Record<LeadSource, string> = {
  english: '/dziekuje',
  spanish: '/dziekujehiszpanski',
}

export const SPANISH_LEVELS = ['Dopiero zaczynam', 'Znam już podstawy'] as const
export type SpanishLevel = (typeof SPANISH_LEVELS)[number]
