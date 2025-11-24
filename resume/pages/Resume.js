import FormNavigate from "@/component/FormNavigate";

/**
 * Resume Page
 * -------------
 * This page displays the resume-building form steps.
 * The entire multi-step form system is handled inside
 * the FormNavigate component (located in /components).
 *
 * Purpose:
 * - Acts as a wrapper page that loads the form wizard.
 * - Keeps routing clean by separating logic into FormNavigate.
 */

export default function Resume() {
  return (
    <>
      {/* Render the multi-step resume creation form */}
      <FormNavigate />
    </>
  );
}
