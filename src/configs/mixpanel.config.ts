import ExpoMixpanelAnalytics from '@bothrs/expo-mixpanel-analytics';

const apiKey = process.env.MIXPANEL_API_KEY as string;

const mixpanel = new ExpoMixpanelAnalytics('36029227ea1386a615badcc1c9edf142');

export default mixpanel;
