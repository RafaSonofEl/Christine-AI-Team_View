# Christine Team View

Internal ops console for Christine.

## Deploy on Render
Use this as a static site. Render will serve `index.html` directly.

### Structure
- `index.html` — the full Team View app
- `README.md` — deployment notes only

### Notes
- This is currently a static demo.
- Later, the Team View can read events from an API or webhook endpoint.
- The current version includes:
  - routing tags
  - lead records
  - conversation history
  - tool results
  - HubSpot lead write status
  - Twilio SMS confirmation status
  - Datadog event status

### Next step
Replace the hardcoded `sessions` array in `index.html` with real session data from the Christine agent or a backend endpoint.

### SMS (Twilio)
Twilio trial accounts cannot register for A2P 10DLC, which US carriers now
require for live SMS. The Twilio integration code is fully implemented; for the
demo it runs in `SMS_MODE=mock`, returning a clearly labeled mock confirmation
that flows through the Team View exactly like a live send. Set `SMS_MODE=live`
on an upgraded account to send real messages.
