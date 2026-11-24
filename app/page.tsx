import { SAMPLE_LEADS, type LeadStatus } from "@/lib/leads";

const STATUS_STYLES: Record<LeadStatus, string> = {
  חדש: "bg-sky-100 text-sky-800",
  בטיפול: "bg-amber-100 text-amber-800",
  סגור: "bg-emerald-100 text-emerald-800",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6">
          <p className="text-sm font-medium text-teal-700">הדגמת AgentZ</p>
          <h1 className="text-3xl font-bold tracking-tight">CRM לידים</h1>
          <p className="max-w-2xl text-slate-600">
            רשימת לידים סטטית לצורכי הדרכה בלבד. כל השמות, הטלפונים והחברות
            בדויים, וזה אינו פרויקט של לקוח אמיתי.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        <div
          className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
          role="note"
        >
          נתוני דמו בלבד — שלושה לידים בדויים מתוך הקוד, בלי מסד נתונים.
        </div>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-lg font-semibold">לידים לדוגמה</h2>
            <p className="text-sm text-slate-500">{SAMPLE_LEADS.length} רשומות</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-5 py-3 font-medium">שם</th>
                  <th className="px-5 py-3 font-medium">חברה</th>
                  <th className="px-5 py-3 font-medium">אימייל</th>
                  <th className="px-5 py-3 font-medium">טלפון</th>
                  <th className="px-5 py-3 font-medium">סטטוס</th>
                </tr>
              </thead>
              <tbody>
                {SAMPLE_LEADS.map((lead) => (
                  <tr key={lead.id} className="border-t border-slate-100">
                    <td className="px-5 py-3 font-medium text-slate-900">
                      {lead.name}
                    </td>
                    <td className="px-5 py-3 text-slate-600">{lead.company}</td>
                    <td className="px-5 py-3 text-slate-600" dir="ltr">
                      {lead.email}
                    </td>
                    <td className="px-5 py-3 text-slate-600" dir="ltr">
                      {lead.phone}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[lead.status]}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
