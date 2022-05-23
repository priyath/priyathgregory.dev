export const pageView = (url: string) => {
  (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    path_url: url,
  });
};
