// file deepcode ignore object-literal-shorthand: argh
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as gTagConfig } from '../config/gTag.json';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url) => {
  window['gtag']('config', gTagConfig.id, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window['gtag']('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
