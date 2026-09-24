const ENDPOINT = "https://formsubmit.co/ajax/contact@calmenc.com";

export async function sendEmail(params: Record<string, string>): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...params, _subject: `[칼멘] ${params.form_title ?? "문의"} 접수` }),
  });
  if (!res.ok) throw new Error(`FormSubmit error: ${res.status}`);
}
