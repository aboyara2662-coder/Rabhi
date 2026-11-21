// يحوّل www.coachrabhi.com إلى https://coachrabhi.com، ويعرض ملفات الموقع
// (تحويل workers.dev موقوف مؤقتًا لين يشتغل النطاق)
const HOST = "coachrabhi.com";
const REDIRECT_FROM = ["www.coachrabhi.com"];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (REDIRECT_FROM.includes(url.hostname)) {
      url.protocol = "https:";
      url.hostname = HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
