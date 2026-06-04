export type RoutingTag =
  | "RES_HOT"
  | "RES_WARM"
  | "RES_COLD"
  | "VEHICLE"
  | "BUSINESS"
  | "ESCALATE_EMERGENCY"
  | "ESCALATE_SECURITY"
  | "ESCALATE_BILLING"
  | "ESCALATE_SCOPE"
  | "ESCALATE_ACCOUNT";

export type LeadStatus = "new" | "sent_to_hubspot" | "confirmed" | "failed";
export type StorageType = "self_storage" | "vehicle" | "rv" | "boat" | "commercial" | "unknown";
export type SessionStatus = "open" | "closed" | "needs_review" | "escalated";
export type Channel = "widget" | "team_view";
export type ToolResultStatus = "ok" | "error";

export interface LeadRecord {
  lead_id: string;
  created_at: string;
  updated_at?: string;
  contact_name?: string;
  contact_phone?: string;
  contact_email?: string;
  facility_id?: string;
  facility_name?: string;
  metro?: string;
  state?: string;
  storage_type?: StorageType;
  timing?: string;
  size?: string;
  routing_tag: RoutingTag;
  source: "widget" | "team_view" | "api";
  status: LeadStatus;
  notes?: string;
}

export interface ToolResult {
  tool_name: string;
  status: ToolResultStatus;
  source?: "cubby_mock" | "hubspot" | "twilio" | "datadog" | "system";
  message?: string;
  payload?: Record<string, unknown>;
  error?: string;
  created_at: string;
}

export interface ConversationMessage {
  role: "user" | "assistant" | "system";
  content: string;
  created_at: string;
}

export interface SessionSummary {
  session_id: string;
  created_at: string;
  updated_at: string;
  channel: Channel;
  customer_name?: string;
  customer_phone?: string;
  routing_tag?: RoutingTag;
  lead?: LeadRecord;
  tool_results: ToolResult[];
  messages: ConversationMessage[];
  status: SessionStatus;
}

export interface TeamViewEvent {
  event_id: string;
  event_type:
    | "conversation.created"
    | "conversation.updated"
    | "routing.tagged"
    | "lead.created"
    | "lead.sent_to_hubspot"
    | "sms.sent"
    | "tool.success"
    | "tool.error"
    | "escalation.flagged";
  created_at: string;
  session_id: string;
  summary: SessionSummary;
}
