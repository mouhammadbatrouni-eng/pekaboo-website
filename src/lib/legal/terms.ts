import type { LegalDoc } from "./types";
import { SITE } from "../content/site";

/**
 * ⚠️ INTERIM CONTENT — AWAITING SUPPLIED TEXT
 *
 * The client's own Terms of Service wording has not been received yet. The
 * body below is placeholder copy written for Peekaboo so the page is
 * functional and reviewable; it is NOT legal advice and must be replaced
 * verbatim with the supplied document before launch.
 *
 * The date is already the one specified and should be preserved:
 *   Last updated on August 10, 2021.  (NOT 2026 — that is the Privacy date.)
 *
 * When the real text arrives, replace `sections` only.
 */

export const termsEn: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "Last updated on August 10, 2021.",
  intro: [
    {
      type: "p",
      text: "These Terms of Service govern your access to and use of the Peekaboo website. Please read them carefully. By using this website you agree to be bound by these terms.",
    },
  ],
  sections: [
    {
      heading: "Using this website",
      blocks: [
        {
          type: "p",
          text: "This website is provided to help you learn about Peekaboo and to contact our team. You may browse it and use the contact form for genuine enquiries.",
        },
        { type: "p", text: "You agree not to:" },
        {
          type: "ul",
          items: [
            "submit unsolicited or automated messages through our forms;",
            "attempt to disrupt, overload or gain unauthorised access to the website or its systems;",
            "misrepresent your identity or the organisation you represent; or",
            "use the website in a way that breaches any applicable law.",
          ],
        },
      ],
    },
    {
      heading: "The Peekaboo platform",
      blocks: [
        {
          type: "p",
          text: "Access to and use of the Peekaboo Care portal and the Peekaboo Parent application is governed by a separate service agreement between Peekaboo and your organisation. These website terms do not replace or vary that agreement.",
        },
      ],
    },
    {
      heading: "Accuracy of information",
      blocks: [
        {
          type: "p",
          text: "We take care to keep the information on this website accurate and current, and the capabilities described reflect the platform as it stands. Software changes over time, so the specifics of any feature are confirmed during a demonstration rather than by this website alone.",
        },
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "The contents of this website — including the Peekaboo name, logo, written copy, product interface designs and graphics — are owned by Peekaboo or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from them without our prior written permission.",
        },
      ],
    },
    {
      heading: "Links to other websites",
      blocks: [
        {
          type: "p",
          text: "This website may contain links to services we do not operate. We are not responsible for the content of those websites or for their handling of your information.",
        },
      ],
    },
    {
      heading: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent permitted by law, Peekaboo is not liable for any indirect or consequential loss arising from your use of, or inability to use, this website.",
        },
      ],
    },
    {
      heading: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may revise these Terms of Service from time to time. Where we do, we will update the date shown at the top of this page, and the revised terms take effect from that date.",
        },
      ],
    },
    {
      heading: "Contact us",
      blocks: [
        {
          type: "p",
          text: `Questions about these terms can be directed to Peekaboo by telephone on ${SITE.phone}, or by post at ${SITE.address.join(", ")}.`,
        },
      ],
    },
  ],
};

export const termsAr: LegalDoc = {
  title: "شروط الخدمة",
  lastUpdated: "آخر تحديث في ١٠ أغسطس ٢٠٢١.",
  intro: [
    {
      type: "p",
      text: "تحكم شروط الخدمة هذه وصولك إلى موقع بيكابو واستخدامك له. يُرجى قراءتها بعناية. وباستخدامك هذا الموقع فإنك توافق على الالتزام بهذه الشروط.",
    },
  ],
  sections: [
    {
      heading: "استخدام هذا الموقع",
      blocks: [
        {
          type: "p",
          text: "يهدف هذا الموقع إلى تعريفك ببيكابو وتمكينك من التواصل مع فريقنا. ويمكنك تصفّحه واستخدام نموذج التواصل للاستفسارات الجادّة.",
        },
        { type: "p", text: "وتوافق على عدم القيام بما يلي:" },
        {
          type: "ul",
          items: [
            "إرسال رسائل غير مرغوب فيها أو آلية عبر نماذجنا؛",
            "محاولة تعطيل الموقع أو أنظمته أو إثقالها أو الوصول إليها دون تصريح؛",
            "انتحال هويتك أو هوية المؤسسة التي تمثّلها؛ أو",
            "استخدام الموقع بما يخالف أي قانون معمول به.",
          ],
        },
      ],
    },
    {
      heading: "منصة بيكابو",
      blocks: [
        {
          type: "p",
          text: "يخضع الوصول إلى بوابة بيكابو كير وتطبيق بيكابو بارنت واستخدامهما لاتفاقية خدمة منفصلة بين بيكابو ومؤسستك. ولا تحلّ شروط الموقع هذه محل تلك الاتفاقية ولا تعدّلها.",
        },
      ],
    },
    {
      heading: "دقة المعلومات",
      blocks: [
        {
          type: "p",
          text: "نحرص على أن تبقى المعلومات الواردة في هذا الموقع دقيقة ومحدّثة، وتعكس الإمكانات الموصوفة المنصةَ كما هي عليه. غير أن البرمجيات تتغيّر بمرور الوقت، لذا تُؤكَّد تفاصيل أي ميزة خلال عرض توضيحي وليس من خلال هذا الموقع وحده.",
        },
      ],
    },
    {
      heading: "الملكية الفكرية",
      blocks: [
        {
          type: "p",
          text: "محتويات هذا الموقع — بما في ذلك اسم بيكابو وشعارها والنصوص وتصاميم واجهات المنتج والرسومات — مملوكة لبيكابو أو للمرخِّصين لها ومحمية بموجب قوانين الملكية الفكرية المعمول بها. ولا يجوز لك نسخها أو توزيعها أو إنشاء أعمال مشتقة منها دون إذن كتابي مسبق منّا.",
        },
      ],
    },
    {
      heading: "الروابط إلى مواقع أخرى",
      blocks: [
        {
          type: "p",
          text: "قد يتضمّن هذا الموقع روابط إلى خدمات لا نديرها. ولسنا مسؤولين عن محتوى تلك المواقع ولا عن تعاملها مع معلوماتك.",
        },
      ],
    },
    {
      heading: "حدود المسؤولية",
      blocks: [
        {
          type: "p",
          text: "إلى أقصى حد يسمح به القانون، لا تتحمّل بيكابو المسؤولية عن أي خسارة غير مباشرة أو تبعية تنشأ عن استخدامك لهذا الموقع أو عدم قدرتك على استخدامه.",
        },
      ],
    },
    {
      heading: "التغييرات على هذه الشروط",
      blocks: [
        {
          type: "p",
          text: "قد نقوم بمراجعة شروط الخدمة هذه من حين لآخر. وعند القيام بذلك، سنقوم بتحديث التاريخ الموضّح أعلى هذه الصفحة، وتسري الشروط المعدّلة اعتباراً من ذلك التاريخ.",
        },
      ],
    },
    {
      heading: "تواصل معنا",
      blocks: [
        {
          type: "p",
          text: "يمكن توجيه الاستفسارات بشأن هذه الشروط إلى بيكابو هاتفياً على +971 50 405 1555، أو بالبريد على العنوان: مكتب ٧٠٣، الجناح ب، مبنى المقر الرئيسي بواحة دبي للسيليكون، دبي، الإمارات العربية المتحدة.",
        },
      ],
    },
  ],
};
