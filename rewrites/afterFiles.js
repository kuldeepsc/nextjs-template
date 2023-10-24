let routes = [
  //#region  Redirection
  {
    source:
      "/:topic(news|latest|astrology-news|auto|business|buzz|education-career|india|lifestyle|food|travel|health-and-fitness|movies|politics|press-release|sports|football|tech|tv|world|opinion|tennis|f1|hockey|other-sports|explainer|explainers|studio18|elections|partner-content|formula-one|viral|immersives)/:sub_topic(food|travel|health-and-fitness|savings-and-investments|cryptocurrency|tax|markets)?/page-:page(\\d+)/:forRedirect(.*)",
    destination: "/category",
  },
  {
    source:
      "/:topic(news|latest|astrology-news|auto|business|buzz|education-career|india|lifestyle|food|travel|health-and-fitness|entertainment|movies|politics|press-release|sports|football|tech|tv|world|opinion|tennis|f1|hockey|other-sports|explainer|explainers|studio18|elections|partner-content|formula-one|viral|immersives)/:sub_topic(food|travel|health-and-fitness|savings-and-investments|cryptocurrency|tax|markets|tamil-cinema|telugu-cinema|regional-cinema|hollywood|bollywood|web-series|television)?/page-:page(\\d+)/:forRedirect(.*)",
    destination: "/category",
  },
  {
    source:
      "/:topic(news|latest|astrology-news|auto|business|buzz|education-career|india|lifestyle|food|travel|health-and-fitness|entertainment|movies|politics|press-release|sports|football|tech|tv|world|opinion|tennis|f1|hockey|other-sports|explainer|explainers|studio18|elections|partner-content|formula-one|viral|immersives)/:forRedirect(.*)",
    destination: "/category",
  },
  {
    source:
      "/amp/:topic(news|latest|astrology-news|auto|business|buzz|education-career|india|lifestyle|food|travel|health-and-fitness|entertainment|movies|politics|press-release|sports|football|tech|tv|world|opinion|tennis|f1|hockey|other-sports|explainer|explainers|studio18|elections|partner-content|formula-one|viral|immersives)/:sub_topic(food|travel|health-and-fitness|savings-and-investments|cryptocurrency|tax|markets|tamil-cinema|telugu-cinema|regional-cinema|hollywood|bollywood|web-series|television)?/page-:page(\\d+)/:forRedirect",
    destination: "/amp/category",
  },
];
module.exports = routes;
