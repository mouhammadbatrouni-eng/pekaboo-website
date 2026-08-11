import type { LegalDoc } from "./types";
import { SITE } from "../content/site";

/**
 * ⚠️ INTERIM CONTENT — AWAITING SUPPLIED TEXT
 *
 * The client's own Privacy Policy wording has not been received yet. The
 * body below is placeholder copy written for Peekaboo so the page is
 * functional and reviewable; it is NOT legal advice and must be replaced
 * verbatim with the supplied document before launch.
 *
 * The dates are already the ones specified and should be preserved:
 *   Last updated on August 10, 2026.
 *   Effective date: August 10th, 2020.
 *
 * When the real text arrives, replace `sections` only — the dates, title and
 * renderer stay as they are.
 */

export const privacyEn: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "Last updated on August 10, 2026.",
  intro: [
    { type: "p", text: "Effective date: August 10th, 2020." },
    {
      type: "p",
      text: `This Privacy Policy describes how Peekaboo collects, uses and protects information in connection with the Peekaboo website and platform. By using our services you agree to the practices described in this policy.`,
    },
  ],
  sections: [
    {
      heading: "Information we collect",
      blocks: [
        {
          type: "p",
          text: "We collect information that you provide to us directly, information generated through your use of the platform, and limited technical information collected automatically when you visit our website.",
        },
        {
          type: "ul",
          items: [
            "Information you provide, such as your name, work email address, organisation name, telephone number and the contents of any enquiry you send us.",
            "Information created in the platform by the nursery or center that operates it, including records relating to children, families and staff.",
            "Technical information such as browser type, device type, and pages visited, collected in aggregate to understand how the website is used.",
          ],
        },
      ],
    },
    {
      heading: "How we use information",
      blocks: [
        {
          type: "p",
          text: "We use the information we collect to provide and operate the platform, to respond to enquiries, to maintain security and reliability, and to meet our legal obligations.",
        },
        {
          type: "p",
          text: "We do not sell personal information, and we do not share it with third parties for their own marketing purposes.",
        },
      ],
    },
    {
      heading: "Children's information",
      blocks: [
        {
          type: "p",
          text: "Where Peekaboo processes information relating to children, it does so on behalf of the nursery or center that operates the platform. That organisation determines what information is recorded and who may access it. Parents and guardians with questions about a child's records should contact their nursery directly.",
        },
      ],
    },
    {
      heading: "Data security",
      blocks: [
        {
          type: "p",
          text: "We hold information on secure infrastructure, encrypt it in transit and at rest, take scheduled backups, and control access by role so that staff only reach the information their role requires.",
        },
      ],
    },
    {
      heading: "Data retention",
      blocks: [
        {
          type: "p",
          text: "We retain information for as long as it is needed to provide the services, to comply with our legal obligations, and to resolve disputes. Enquiry correspondence is retained for as long as it remains relevant to the conversation you started.",
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Subject to applicable law, you may request access to the information we hold about you, ask us to correct it, or ask us to delete it.",
        },
        {
          type: "p",
          text: `To make a request, contact us using the details below and we will respond promptly.`,
        },
      ],
    },
    {
      heading: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. Where we do, we will revise the date shown at the top of this page.",
        },
      ],
    },
    {
      heading: "Contact us",
      blocks: [
        {
          type: "p",
          text: `If you have questions about this Privacy Policy, you can reach Peekaboo by telephone on ${SITE.phone}, or by post at ${SITE.address.join(", ")}.`,
        },
      ],
    },
  ],
};

export const privacyAr: LegalDoc = {
  title: "سياسة الخصوصية",
  lastUpdated: "آخر تحديث في ١٠ أغسطس ٢٠٢٦.",
  intro: [
    { type: "p", text: "تاريخ السريان: ١٠ أغسطس ٢٠٢٠." },
    {
      type: "p",
      text: "توضّح سياسة الخصوصية هذه كيف تجمع بيكابو المعلومات وتستخدمها وتحميها فيما يتعلق بموقع بيكابو ومنصتها. وباستخدامك خدماتنا فإنك توافق على الممارسات الموضّحة في هذه السياسة.",
    },
  ],
  sections: [
    {
      heading: "المعلومات التي نجمعها",
      blocks: [
        {
          type: "p",
          text: "نجمع المعلومات التي تزوّدنا بها مباشرةً، والمعلومات الناتجة عن استخدامك للمنصة، ومعلومات تقنية محدودة تُجمع تلقائياً عند زيارتك لموقعنا.",
        },
        {
          type: "ul",
          items: [
            "المعلومات التي تقدّمها، مثل اسمك وبريدك الإلكتروني للعمل واسم مؤسستك ورقم هاتفك ومحتوى أي استفسار ترسله إلينا.",
            "المعلومات التي تُنشأ داخل المنصة من قِبل الحضانة أو المركز الذي يشغّلها، بما في ذلك السجلات المتعلقة بالأطفال والأسر والموظفين.",
            "المعلومات التقنية مثل نوع المتصفح ونوع الجهاز والصفحات التي تمت زيارتها، وتُجمع بصورة إجمالية لفهم كيفية استخدام الموقع.",
          ],
        },
      ],
    },
    {
      heading: "كيف نستخدم المعلومات",
      blocks: [
        {
          type: "p",
          text: "نستخدم المعلومات التي نجمعها لتقديم المنصة وتشغيلها، وللرد على الاستفسارات، وللحفاظ على الأمان والموثوقية، وللوفاء بالتزاماتنا القانونية.",
        },
        {
          type: "p",
          text: "نحن لا نبيع المعلومات الشخصية، ولا نشاركها مع أطراف ثالثة لأغراضهم التسويقية.",
        },
      ],
    },
    {
      heading: "معلومات الأطفال",
      blocks: [
        {
          type: "p",
          text: "عندما تعالج بيكابو معلومات تتعلق بالأطفال، فإنها تفعل ذلك نيابةً عن الحضانة أو المركز الذي يشغّل المنصة. وتحدّد تلك الجهة ما يُسجَّل من معلومات ومن يجوز له الاطلاع عليها. وعلى أولياء الأمور الذين لديهم استفسارات بشأن سجلات أطفالهم التواصل مع الحضانة مباشرةً.",
        },
      ],
    },
    {
      heading: "أمن البيانات",
      blocks: [
        {
          type: "p",
          text: "نحتفظ بالمعلومات على بنية تحتية آمنة، ونشفّرها أثناء النقل وفي حالة التخزين، ونأخذ نسخاً احتياطية مجدولة، ونضبط الوصول حسب الدور بحيث لا يطّلع الموظفون إلا على ما يتطلبه دورهم.",
        },
      ],
    },
    {
      heading: "مدة الاحتفاظ بالبيانات",
      blocks: [
        {
          type: "p",
          text: "نحتفظ بالمعلومات طالما كانت لازمة لتقديم الخدمات، وللامتثال لالتزاماتنا القانونية، ولتسوية المنازعات. ويُحتفظ بمراسلات الاستفسارات طالما ظلّت ذات صلة بالمحادثة التي بدأتها.",
        },
      ],
    },
    {
      heading: "حقوقك",
      blocks: [
        {
          type: "p",
          text: "مع مراعاة القانون المعمول به، يحق لك طلب الاطلاع على المعلومات التي نحتفظ بها عنك، أو طلب تصحيحها، أو طلب حذفها.",
        },
        {
          type: "p",
          text: "لتقديم طلب، تواصل معنا عبر البيانات الواردة أدناه وسنرد عليك في أقرب وقت.",
        },
      ],
    },
    {
      heading: "التغييرات على هذه السياسة",
      blocks: [
        {
          type: "p",
          text: "قد نقوم بتحديث سياسة الخصوصية هذه من حين لآخر. وعند القيام بذلك، سنقوم بتعديل التاريخ الموضّح أعلى هذه الصفحة.",
        },
      ],
    },
    {
      heading: "تواصل معنا",
      blocks: [
        {
          type: "p",
          text: "إذا كانت لديك أي أسئلة بشأن سياسة الخصوصية هذه، يمكنك التواصل مع بيكابو هاتفياً على +971 50 405 1555، أو بالبريد على العنوان: مكتب ٧٠٣، الجناح ب، مبنى المقر الرئيسي بواحة دبي للسيليكون، دبي، الإمارات العربية المتحدة.",
        },
      ],
    },
  ],
};
