import { Mixpanel } from 'mixpanel-react-native';

const apiKey = process.env.MIXPANEL_API_KEY as string;
const trackAutomaticEvents = true;
const trackPageView = true;

const mixpanel = new Mixpanel(apiKey, trackAutomaticEvents);
mixpanel.init(trackPageView);

export default mixpanel;
