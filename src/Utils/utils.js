export function isNewKbinVersion() {
    const reportIssueEl = document.querySelector("#footer div section div a:nth-child(2)");
    return reportIssueEl && reportIssueEl.href.startsWith("https://codeberg.org/Kbin/");
}