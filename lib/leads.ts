export type LeadStatus = "חדש" | "בטיפול" | "סגור";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: LeadStatus;
};

/** Fictional sample leads only. Not real people or clients. */
export const SAMPLE_LEADS: Lead[] = [
  {
    id: "demo-001",
    name: "אלון דמו",
    email: "alon.demo@example.com",
    phone: "050-0000001",
    company: "חברת דוגמה א׳",
    status: "חדש",
  },
  {
    id: "demo-002",
    name: "מיכל דוגמה",
    email: "michal.example@example.com",
    phone: "050-0000002",
    company: "חברת דוגמה ב׳",
    status: "בטיפול",
  },
  {
    id: "demo-003",
    name: "תמר סימולציה",
    email: "tamar.simulation@example.com",
    phone: "050-0000003",
    company: "חברת דוגמה ג׳",
    status: "סגור",
  },
];
