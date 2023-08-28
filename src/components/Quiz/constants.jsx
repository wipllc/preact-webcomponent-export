import invert from "lodash.invert";
import {styled} from "goober";

const EmojiWrapper = styled('span')`
  position: relative;
  display: inline-block;
`;
const EmojiColor = styled('span')`
  position: absolute;
  left: 0;
  text-shadow: 0 0 0 ${({ color }) => color};
  color: transparent;
  z-index: 1;
  mix-blend-mode: hue;
  top: 0;
`;
const Emoji = styled('span')`
  display: block;
  top: 0;
  left: 0;
`;

export const POST_TYPES = {
  ARTICLE: "article",
  PHOTO: "photo",
  MUSIC: "music",
  TWITTER: "twitter",
  VIDEO: "video",
  TV: "tv",
};

export const VERSION_DATES = {
  v1: 1598227200000,
  v2: 1605484800000,
};

export const MUSIC_PLAYER_TYPES = {
  SPOTIFY: "spotify",
};

export const NARRATIVE_TYPES = {
  VOTE_FOR_X: "Vote for X",
  CAPITAL_AND_LABOR: "Capital & Labor",
  SAFETY_NET: "Safety Net",
  ROBIN_HOOD: "Robin Hood",
  HELPING_HANDS: "Helping Hands",
  THE_GRIND: "The Grind",
  EQUITY_GAP: "Equity Gap",
  NOT_LIKE_US: "Not Like Us",
};

export const NARRATIVE_TYPES_ARRAY = [
  NARRATIVE_TYPES.VOTE_FOR_X,
  NARRATIVE_TYPES.CAPITAL_AND_LABOR,
  NARRATIVE_TYPES.SAFETY_NET,
  NARRATIVE_TYPES.ROBIN_HOOD,
  NARRATIVE_TYPES.HELPING_HANDS,
  NARRATIVE_TYPES.THE_GRIND,
  NARRATIVE_TYPES.EQUITY_GAP,
  NARRATIVE_TYPES.NOT_LIKE_US,
];

export const TOPICS = {
  POVERTY: "Poverty",
  COVID: "COVID",
  BLM: "Black Lives Matter",
};

export const AUDIENCE_TYPES = {
  PEOPLE_POWER: "People Power",
  IF_YOU_SAY_SO: "If You Say So",
  TOUGH_COOKIES: "Tough Cookies",
  DONT_TREAD_ON_ME: "Don't Tread on Me",
};

export const AUDIENCE_TYPES_ARRAY = [
  AUDIENCE_TYPES.PEOPLE_POWER,
  AUDIENCE_TYPES.IF_YOU_SAY_SO,
  AUDIENCE_TYPES.TOUGH_COOKIES,
  AUDIENCE_TYPES.DONT_TREAD_ON_ME,
];

export const AUDIENCE_EMOJI = {
  PEOPLE_POWER: "✊",
  IF_YOU_SAY_SO: "🙃",
  TOUGH_COOKIES: "💪️",
  DONT_TREAD_ON_ME: "⚡",
};

const audienceSlugMapping = {
  "people-power": AUDIENCE_TYPES.PEOPLE_POWER,
  "if-you-say-so": AUDIENCE_TYPES.IF_YOU_SAY_SO,
  "tough-cookies": AUDIENCE_TYPES.TOUGH_COOKIES,
  "dont-tread-on-me": AUDIENCE_TYPES.DONT_TREAD_ON_ME,
};

export const getAudienceSlug = (audience) =>
  invert(audienceSlugMapping)[audience];

export const getAudienceBySlug = (slug) => audienceSlugMapping[slug];

const narrativeSlugMapping = {
  "vote-for-x": NARRATIVE_TYPES.VOTE_FOR_X,
  "capital-and-labor": NARRATIVE_TYPES.CAPITAL_AND_LABOR,
  "safety-net": NARRATIVE_TYPES.SAFETY_NET,
  "robin-hood": NARRATIVE_TYPES.ROBIN_HOOD,
  "helping-hands": NARRATIVE_TYPES.HELPING_HANDS,
  "the-grind": NARRATIVE_TYPES.THE_GRIND,
  "equity-gap": NARRATIVE_TYPES.EQUITY_GAP,
  "not-like-us": NARRATIVE_TYPES.NOT_LIKE_US,
};

export const getNarrativeSlug = (narrative) =>
  invert(narrativeSlugMapping)[narrative];

export const getNarrativeBySlug = (slug) => narrativeSlugMapping[slug];

export const getAudienceEmoji = (audience, shouldTint = true) => {
  let emoji, color;
  switch (audience) {
    case AUDIENCE_TYPES.PEOPLE_POWER:
      emoji = AUDIENCE_EMOJI.PEOPLE_POWER;
      color = "#FF99FF";
      break;
    case AUDIENCE_TYPES.IF_YOU_SAY_SO:
      emoji = AUDIENCE_EMOJI.IF_YOU_SAY_SO;
      color = "#B3914D";
      break;
    case AUDIENCE_TYPES.TOUGH_COOKIES:
      emoji = AUDIENCE_EMOJI.TOUGH_COOKIES;
      color = "#40B5BF";
      break;
    case AUDIENCE_TYPES.DONT_TREAD_ON_ME:
      emoji = AUDIENCE_EMOJI.DONT_TREAD_ON_ME;
      color = "#FF6633";
      break;
  }
  return (
    <EmojiWrapper>
      {shouldTint ? <EmojiColor color={color}>{emoji}</EmojiColor> : null}
      <Emoji>{emoji}</Emoji>
    </EmojiWrapper>
  );
};

export const getAudienceDescription = (audience) => {
  if (audience === AUDIENCE_TYPES.PEOPLE_POWER) {
    return "Community-minded, politically engaged, and ready to fight for system reform to solve social issues. ";
  }
  if (audience === AUDIENCE_TYPES.IF_YOU_SAY_SO) {
    return "Independent realists who know the system is broken but are skeptical that there are real solutions to society's problems. ";
  }
  if (audience === AUDIENCE_TYPES.TOUGH_COOKIES) {
    return "Family-first rule followers who believe that, while the system might be broken, hard work can create success. ";
  }
  if (audience === AUDIENCE_TYPES.DONT_TREAD_ON_ME) {
    return "Achievement-oriented, conservatives who believe that equal opportunity already exists. ";
  }
};

export const getNarrativeDescription = (narrative) => {
  switch (narrative) {
    case NARRATIVE_TYPES.VOTE_FOR_X:
      return "Arguments for and against economic conditions and policies are rendered through the lens of electoral politics, with parties and candidates center stage. ";
    case NARRATIVE_TYPES.CAPITAL_AND_LABOR:
      return "An implied causal chain between a growing economy, abundant jobs, high wages, and individual financial well-being spotlights macro-economic indicators. ";
    case NARRATIVE_TYPES.SAFETY_NET:
      return "Government programs to mitigate the systemic effects of poverty take center stage in often abstract discussions of need, cost, efficacy, efficiency, and trade-offs. ";
    case NARRATIVE_TYPES.ROBIN_HOOD:
      return 'Finger pointing at businesses and billionaires who pile up profit, while the 99% struggle, suffer, and raise their voices to "eat the rich." ';
    case NARRATIVE_TYPES.HELPING_HANDS:
      return 'The heroes are the helpers in these feel-good, food-focused, sometimes religiously inflected accounts of people "giving back" to a proverbial, persistent "poor." ';
    case NARRATIVE_TYPES.THE_GRIND:
      return 'Dispatches from a daily struggle to "touch money" chronicle first-hand the trials and tribulations of repeatedly reaching for financial well-being. ';
    case NARRATIVE_TYPES.EQUITY_GAP:
      return "Intersectional stories of race and gender disparity illustrate how some people are more vulnerable to poverty and focus blame on inequitable systems. ";
    case NARRATIVE_TYPES.NOT_LIKE_US:
      return "Innuendo, association, and coded rhetoric conspire to cast people in poverty as bogeymen threatening society from a shadowy otherworld. ";
  }
};

export const getLongNarrativeDescription = (narrative) => {
  switch (narrative) {
    case NARRATIVE_TYPES.VOTE_FOR_X:
      return [
        "Arguments for and against economic conditions and policies are rendered through the lens of electoral politics, with parties and candidates center stage. ",
        "In this narrative, people in poverty hardly figure, except as instruments in others’ political agendas. The solution to poverty is the policies of a particular party or candidate. ",
        "The tone is generally advocating for or against candidates and parties. ",
      ];
    case NARRATIVE_TYPES.CAPITAL_AND_LABOR:
      return [
        "An implied causal chain between a growing economy, abundant jobs, high wages, and individual financial well-being spotlights macro-economic indicators. ",
        "In this narrative, people in poverty don’t have good enough jobs, due to economic factors. The solution is businesses booming out an abundance of good, high-wage jobs. ",
        "The tone is generally dry and stats-driven. ",
      ];
    case NARRATIVE_TYPES.SAFETY_NET:
      return [
        "Government programs to mitigate the systemic effects of poverty take center stage in often abstract discussions of need, cost, efficacy, efficiency, and trade-offs. ",
        "In this narrative, people in poverty are victims of circumstance, who rely on a social safety net to survive. The solution is more effective, efficient, and well-resourced social programs. ",
        "The tone is generally informative to advocating. ",
      ];
    case NARRATIVE_TYPES.ROBIN_HOOD:
      return [
        'Finger pointing at businesses and billionaires who pile up profit, while the 99% struggle, suffer, and raise their voices to "eat the rich." ',
        "In this narrative, people are unable to access necessary resources hoarded by the 1%. The solution is redistributing wealth through tax, higher wages, and direct stimulus. ",
        "The tone is generally indignant and contemptuous of corporations and the rich. ",
      ];
    case NARRATIVE_TYPES.HELPING_HANDS:
      return [
        'The heroes are the helpers in these feel-good, food-focused, sometimes religiously inflected accounts of people "giving back" to a proverbial, persistent "poor." ',
        "In this narrative, people in poverty just need a little helping hand from everyday heroes. The solution is communities coming together to help meet people’s basic material needs, though poverty will always be with us. ",
        "The tone is generally hero worship-y and heartwarming. ",
      ];
    case NARRATIVE_TYPES.THE_GRIND:
      return [
        'Dispatches from a daily struggle to "touch money" chronicle first-hand the trials and tribulations of repeatedly reaching for financial well-being. ',
        'In this narrative, people should be doing whatever it takes to transcend poverty. The solution is perseverance, hard work, and a little luck to "strike it big." ',
        "The tone is generally aspirational, resolute, and aimed at prosperity. ",
      ];
    case NARRATIVE_TYPES.EQUITY_GAP:
      return [
        "Intersectional stories of race and gender disparity illustrate how some people are more vulnerable to poverty and focus blame on inequitable systems. ",
        "In this narrative, people in poverty are marginalized and don’t have a fair chance. The solution is everyone gaining access to the same resources, e.g. education, jobs, wealth. ",
        "The tone is generally candid and earnest, advocating for justice. ",
      ];
    case NARRATIVE_TYPES.NOT_LIKE_US:
      return [
        "Innuendo, association, and coded rhetoric conspire to cast people in poverty as bogeymen threatening society from a shadowy otherworld. ",
        'In this narrative, people in poverty are sick, criminal, dirty, addicted, homeless, foreign, or otherwise not like "us." The solution is "poor people" just disappearing: they leave, get locked up, or deported. ',
        "The tone is generally matter of fact, targeting fear and disgust. ",
      ];
  }
};
