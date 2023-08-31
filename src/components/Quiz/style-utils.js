import { AUDIENCE_TYPES, NARRATIVE_TYPES } from './constants'

export const BREAKPOINT = {
  XS: `(max-width: 30em)`,
  S: `(max-width: 40em)`,
  M: `(max-width: 50em)`,
  L: `(max-width: 60em)`,
  XL: `(max-width: 70em)`,
}

export const TYPE_SIZE = {
  XL: '4rem',
  L: '3rem',
  M: ' 13px',
  S: '0.9rem',
}

export const COLORS = {
  LIGHTEST_GRAY: '#F9F9F9',
  GRAY: '#E5E5E5',
  MEDIUM_GRAY: '#707070',
  DARKEST_GRAY: '#43464b',
  DARK_BLACK: '#000',
  BLACK: '#222',
  WHITE: '#FFFFFF',

  // Audience Colors
  PEOPLE_POWER: '#FFAFFF',
  IF_YOU_SAY_SO: '#AE8E5A',
  TOUGH_COOKIES: '#3DA8A9',
  DONT_TREAD_ON_ME: '#FF7D41',

  // Narrative Colors
  SAFETY_NET: '#9E8EFA',
  JOBS_GROWTH: '#7CFAC3',
  HELPING_HANDS: '#70C8FA',
  STRONG_TOGETHER: '#C4AE8E',
  DAMAGED: '#FD9F9F',

  VOTE_FOR_X: '#9E8EFA',
  CAPITAL_AND_LABOR: '#FFC8F0',
  SAFETY_NET: '#7CFAC3',
  ROBIN_HOOD: '#A7EFFF',
  HELPING_HANDS: '#70C8FA',
  THE_GRIND: '#FF5A5A',
  EQUITY_GAP: '#969696',
  NOT_LIKE_US: '#FFAB6D',

  // Color Palettes
  // NOTE: These colors go lightest to darkest && added black as a filler color since palettes only go up-to 7
  PEOPLE_POWER_PALETTE: [
    '#FFE6FF',
    '#FFCCFF',
    '#FFB3FF',
    '#FF99FF',
    '#E052E0',
    '#A329A3',
    '#4C194D',
  ],
  IF_YOU_SAY_SO_PALETTE: [
    '#E0D3B8',
    '#D1BD94',
    '#C2A770',
    '#B3914D',
    '#8F743D',
    '#6B572E',
    '#473A1F',
  ],
  TOUGH_COOKIES_PALETTE: [
    '#B3E1E5',
    '#8CD3D9',
    '#66C4CC',
    '#40B5BF',
    '#339199',
    '#266D73',
    '#1A484C',
  ],
  DONT_TREAD_ON_ME_PALETTE: [
    '#FFD8CC',
    '#FFB399',
    '#FF8C66',
    '#FF6633',
    '#FF4000',
    '#CC3300',
    '#992600',
  ],
}

export const BORDER_RADIUS = 'border-radius: 15px;'
export const BORDER_RADIUS_SMALL = 'border-radius: 10px;'
export const BORDER_RADIUS_LARGE = 'border-radius: 20px;'
export const BORDER_RADIUS_XLARGE = 'border-radius: 25px;'
export const DEFAULT_BOX_SHADOW =
  'box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 2px 20px rgba(0, 0, 0, 0.05);'
export const DEFAULT_TRANSITION_ALL = `
  transition: all 300ms cubic-bezier(0.33, 1, 0.68, 1);
  @media (prefers-reduced-motion) {
    transition: none;
  }
`

export const getAudienceTypeColor = (audience) => {
  switch (audience) {
    case AUDIENCE_TYPES.PEOPLE_POWER:
      return COLORS.PEOPLE_POWER
    case AUDIENCE_TYPES.IF_YOU_SAY_SO:
      return COLORS.IF_YOU_SAY_SO
    case AUDIENCE_TYPES.TOUGH_COOKIES:
      return COLORS.TOUGH_COOKIES
    case AUDIENCE_TYPES.DONT_TREAD_ON_ME:
      return COLORS.DONT_TREAD_ON_ME
  }
}

export const getNarrativeTypeColor = (narrative) => {
  switch (narrative) {
    case NARRATIVE_TYPES.SAFETY_NET:
      return COLORS.SAFETY_NET
    case NARRATIVE_TYPES.JOBS_GROWTH:
      return COLORS.JOBS_GROWTH
    case NARRATIVE_TYPES.HELPING_HANDS:
      return COLORS.HELPING_HANDS
    case NARRATIVE_TYPES.STRONG_TOGETHER:
      return COLORS.STRONG_TOGETHER
    case NARRATIVE_TYPES.DAMAGED:
      return COLORS.DAMAGED

    case NARRATIVE_TYPES.VOTE_FOR_X:
      return COLORS.VOTE_FOR_X
    case NARRATIVE_TYPES.CAPITAL_AND_LABOR:
      return COLORS.CAPITAL_AND_LABOR
    case NARRATIVE_TYPES.SAFETY_NET:
      return COLORS.SAFETY_NET
    case NARRATIVE_TYPES.ROBIN_HOOD:
      return COLORS.ROBIN_HOOD
    case NARRATIVE_TYPES.HELPING_HANDS:
      return COLORS.HELPING_HANDS
    case NARRATIVE_TYPES.THE_GRIND:
      return COLORS.THE_GRIND
    case NARRATIVE_TYPES.EQUITY_GAP:
      return COLORS.EQUITY_GAP
    case NARRATIVE_TYPES.NOT_LIKE_US:
      return COLORS.NOT_LIKE_US
  }
  return COLORS.LIGHTEST_GRAY
}
