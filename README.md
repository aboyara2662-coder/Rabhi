# صفحة الكوتش محمد ربحي

صفحة واحدة ثابتة (HTML فقط): افتح `index.html` في المتصفح.

## التعديل
كل البيانات في كائن `CONFIG` أسفل ملف `index.html`:
- `heroPhoto`: الصورة الرئيسية (ضعها في مجلد `img/`).
- `socials`: روابط إنستغرام وتيك توك وسناب ويوتيوب وX (الفارغ يختفي).
- `medals`: الميداليات والبطولات (القسم يظهر تلقائيًا عند إضافتها).
- `gallery`: صور ومقاطع التدريب (القسم يظهر تلقائيًا).
- `certs`: الشهادات المعروضة.

## النشر
ارفع مجلد `coach-rabhi` كما هو إلى أي استضافة ثابتة (Netlify Drop أو GitHub Pages أو Cloudflare Pages).

## SEO — بعد اختيار اسم النطاق
1. أضف في `<head>`: `<link rel="canonical" href="https://النطاق/">` و`<meta property="og:url" content="https://النطاق/">`، وغيّر `og:image` و`twitter:image` إلى رابط كامل `https://النطاق/img/og-image.jpg`.
2. أنشئ `sitemap.xml` بالرابط، وأضف سطر `Sitemap: https://النطاق/sitemap.xml` إلى `robots.txt`.
3. سجّل الموقع في Google Search Console وأرسل الـ sitemap.
4. أنشئ ملف نشاط تجاري في Google Business Profile (مدرب شخصي – الدمام) واربطه بالموقع.
