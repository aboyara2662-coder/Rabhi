// يحوّل أي رابط ثاني (www أو workers.dev) إلى https://coachrabhi.com، ويعرض ملفات الموقع
const HOST = "coachrabhi.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== HOST) {
      url.protocol = "https:";
      url.hostname = HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
