import appFeed from "../../assets/product/app-feed.png";
import appDailyReport from "../../assets/product/app-daily-report.png";
import appDailyReportCreate from "../../assets/product/app-daily-report-create.png";
import appMessages from "../../assets/product/app-messages.png";
import appProgress from "../../assets/product/app-progress.png";
import appAssessmentReport from "../../assets/product/app-assessment-report.png";
import portalDashboard from "../../assets/product/portal-dashboard.webp";
import portalCrm from "../../assets/product/portal-crm.webp";
import portalCommunication from "../../assets/product/portal-communication.webp";

/**
 * Real product captures, kept in one place so a section only names the screen
 * it wants and never touches a file path. Replacing a capture is a one-line
 * change here.
 *
 * Phone captures are 402×874 (the iPhone viewport the app is designed for);
 * portal captures are 16:10. Both frames below rely on those ratios, so a
 * replacement should keep them.
 *
 * Every capture is of the English UI. The portal and app are both bilingual, so
 * the Arabic page currently shows English screens — supply Arabic captures and
 * key them by language here if that matters.
 */
export const APP_SHOTS = {
  /** TimeLine — the photo feed families open first. */
  feed: appFeed,
  /** Daily Report — the parent-facing card: mood, meals, medicine, supplies. */
  dailyReport: appDailyReport,
  /** Daily Report — the educator filling one in. */
  dailyReportCreate: appDailyReportCreate,
  /** Messages — the inbox, filtered by parents and staff. */
  messages: appMessages,
  /** Progress Analysis — curriculum coverage per learning area. */
  progress: appProgress,
  /** Assessment Report — observations per child, filtered by class. */
  assessmentReport: appAssessmentReport,
} as const;

export const PORTAL_SHOTS = {
  /** Live Dashboard — attendance, staff and classroom occupancy. */
  dashboard: portalDashboard,
  /** CRM Dashboard — the admissions pipeline and its tour calendar. */
  crm: portalCrm,
  /** Communication — announcements, media and daily reports going out. */
  communication: portalCommunication,
} as const;

export type AppShot = keyof typeof APP_SHOTS;
export type PortalShot = keyof typeof PORTAL_SHOTS;
