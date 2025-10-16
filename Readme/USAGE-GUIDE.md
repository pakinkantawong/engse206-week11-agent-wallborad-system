# 📖 Complete Usage Guide

> **Step-by-step guide for using the Agent Wallboard system**

---

## 📑 Table of Contents

- [Quick Start](#quick-start)
- [Agent View - Complete Guide](#agent-view---complete-guide)
- [Supervisor View - Complete Guide](#supervisor-view---complete-guide)
- [Visual Walkthroughs](#visual-walkthroughs)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Opening the Application

1. **Open your web browser** (Chrome, Firefox, Safari, or Edge)
2. **Navigate to the application URL** (provided by your IT team)
3. **The app loads automatically** - no login required in demo mode

### First Thing You'll See

```
┌─────────────────────────────────────────┐
│        VIEW MODE SWITCHER (TOP)         │
│  [🧑 Agent View] [👔 Supervisor View]   │
└─────────────────────────────────────────┘
```

**Choose your view:**
- **Agent View** - If you're a call center agent
- **Supervisor View** - If you're a team supervisor or manager

---

## 🧑 Agent View - Complete Guide

### Interface Overview

```
┌─────────────────────────────────────────────────┐
│ HEADER BAR (Fixed at Top)                      │
│ ┌─────┬──────────────┬──────┬──────┬──────┐    │
│ │ AW  │              │🟢 ▾  │ 🔔 3 │ Nok  │    │
│ │Logo │  Agent       │Status│ Bell │ User │    │
│ │     │  Wallboard   │      │      │  ⚙   │    │
│ └─────┴──────────────┴──────┴──────┴──────┘    │
└─────────────────────────────────────────────────┘

┌────────────────────┬────────────────────────────┐
│ LEFT COLUMN (70%)  │ RIGHT COLUMN (30%)         │
│                    │                            │
│ ┌────────────────┐ │ ┌────────────────────────┐ │
│ │ 📊 STATS       │ │ │ 📬 MESSAGES (6)        │ │
│ │ Widget         │ │ │ [1 unread]             │ │
│ │ (Blue gradient)│ │ │                        │ │
│ │                │ │ │ Filter Pills:          │ │
│ │ Calls: 12/45   │ │ │ [All][Unread][Urgent]  │ │
│ │ Progress: 73%  │ │ │                        │ │
│ │ Avg: 5m 32s    │ │ │ Message List:          │ │
│ │ CSAT: 4.8⭐    │ │ │ ┌──────────────────┐   │ │
│ └────────────────┘ │ │ │🔴 UNREAD         │   │ │
│                    │ │ │ From: Sarah      │   │ │
│ ┌────────────────┐ │ │ │ Team meeting...  │   │ │
│ │ 📋 QUICK       │ │ │ └──────────────────┘   │ │
│ │ ACTIONS        │ │ │                        │ │
│ │                │ │ │ [Quick Compose]        │ │
│ │ [KB][History]  │ │ │ To: [Select ▾]         │ │
│ │ [Reports][Help]│ │ │ [Type message...]      │ │
│ └────────────────┘ │ │ Templates:             │ │
│                    │ │ • Need help            │ │
│ ┌────────────────┐ │ │ • Taking break         │ │
│ │ 📅 SCHEDULE    │ │ │ [Send]                 │ │
│ │                │ │ └────────────────────────┘ │
│ │ 10:30 Break    │ │                            │
│ │ 11:00 Meeting  │ │                            │
│ │ 15:00 Break    │ │                            │
│ └────────────────┘ │                            │
│                    │                            │
│ ┌────────────────┐ │                            │
│ │ 💡 TIPS        │ │                            │
│ │                │ │                            │
│ │ F2→Available   │ │                            │
│ │ F3→Busy        │ │                            │
│ │ F4→Break       │ │                            │
│ └────────────────┘ │                            │
└────────────────────┴────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ FLOATING STATUS (Bottom-Right)                  │
│ ┌────────────────────────┐                      │
│ │ 🟢 Available           │                      │
│ │ F2-F4 for status       │                      │
│ └────────────────────────┘                      │
└─────────────────────────────────────────────────┘
```

---

### 📝 Daily Workflows

#### **Morning Routine (8:45 AM - 9:00 AM)**

**Step 1: Check Messages (2 minutes)**

```
1. Look at RIGHT SIDEBAR → "Messages (6)"
2. Notice red badge showing "1 unread"
3. Click [Unread] filter pill
4. Read the unread message:
   ┌────────────────────────┐
   │ 🔴 UNREAD              │
   │ From: SP001 (Sarah)    │
   │ 📢 Broadcast           │
   │                        │
   │ Team meeting in 15     │
   │ minutes. Conf. Room B  │
   │                        │
   │ 20:11 • 1d ago         │
   │ [Mark as Read] [Reply] │
   └────────────────────────┘
5. Click [Mark as Read]
6. Check other messages in [All] tab
```

**Step 2: Check Your Schedule (1 minute)**

```
Scroll down LEFT COLUMN to "SCHEDULE" section:

📅 SCHEDULE
─────────

10:30  ──●── Break (15 mins)
       │     ☕
       │
11:00  ──●── Team Meeting
       │     📅 Conf. Room B
       │
15:00  ──●── Break (15 mins)
             ☕

Mental note: "Meeting at 11:00, breaks at 10:30 and 15:00"
```

**Step 3: Set Status to Available (5 seconds)**

```
Option A - Mouse:
1. Click status dropdown (top-right header)
   Currently shows: [🟠 Busy ▾]
2. Dropdown menu appears:
   ┌─────────────────┐
   │ 🟢 Available    │ ← Click this
   │ 🟠 Busy      ✓  │
   │ 🔵 Break        │
   │ ⚫ Offline      │
   └─────────────────┘
3. Status changes to 🟢 Available
4. Toast appears: "Status changed to Available"

Option B - Keyboard (FASTER!):
1. Press F2 key
2. Done! Status is now 🟢 Available
```

**Step 4: Ready to Work! (0 seconds)**

```
✅ Messages checked
✅ Schedule reviewed
✅ Status set to Available
✅ Ready to take calls!

Your stats widget shows:
┌──────────────────────┐
│ TODAY'S PROGRESS     │
│                      │
│ Calls: 0/45          │
│ ▱▱▱▱▱▱▱▱▱▱▱▱▱▱ 0%   │
│ Target: 45 calls     │
│                      │
│ Avg Handle: --       │
│ CSAT: --             │
└──────────────────────┘
```

---

#### **During Shift - Common Scenarios**

**Scenario 1: Taking a Call**

```
WHAT HAPPENS AUTOMATICALLY:
1. Phone rings (your phone system)
2. You answer the call
3. Wallboard auto-changes status:
   🟢 Available → 🟠 Busy

4. Timer appears showing call duration:
   Status: 🟠 Busy
   Call: 3m 15s (and counting...)

5. Stats update in real-time:
   Calls: 1/45 → 2/45 → 3/45...
   Progress bar fills up
   Avg Handle Time updates

WHAT YOU DO:
- Focus on the customer call
- Use your main phone system as normal
- Wallboard stays in background, tracking everything
```

**Scenario 2: Taking a Break**

```
METHOD 1 - Keyboard (Fastest):
1. Press F4 key
2. Done! Status → 🔵 Break

METHOD 2 - Mouse:
1. Click status dropdown
2. Select 🔵 Break
3. Toast: "Status changed to Break"

WHAT YOU'LL SEE:
- Status badge: 🔵 Break
- Floating indicator: 🔵 Break
- No calls will route to you
- Break countdown may appear (if configured)

WHEN RETURNING:
1. Press F2 (or click Available)
2. Back to work! 🟢 Available
```

**Scenario 3: New Message Arrives**

```
NOTIFICATION:
1. Bell icon shows red badge: 🔔 4
2. Desktop notification appears (if enabled):
   ┌─────────────────────────┐
   │ Agent Wallboard         │
   │ New message from Sarah  │
   │ "Great job on calls..." │
   └─────────────────────────┘
3. Message list updates with new item
4. Red border highlights unread message

TO READ:
1. Look at right sidebar
2. New message at top with red border:
   ┌────────────────────────┐
   │ 🔴 UNREAD              │
   │ From: Sarah (SP001)    │
   │ Great job on calls     │
   │ today! Keep it up!     │
   │ Just now               │
   └────────────────────────┘
3. Click to expand (if needed)
4. Click [Mark as Read] when done
```

**Scenario 4: Sending a Message**

```
QUICK METHOD (Using Templates):
1. Scroll to "Quick Compose" (right sidebar, bottom)
2. Select recipient:
   To: [SP001 (Sarah) ▾]
3. Click a template:
   • Need help        ← Click this
   • Taking break
   • Technical issue
4. Message auto-fills: "Need help"
5. Click [Send]
6. Toast: "Message sent to SP001"

CUSTOM MESSAGE:
1. To: [Select recipient ▾]
2. Type in textarea: "Customer asking about refund policy..."
3. Click [Send]
4. Done!
```

---

#### **End of Day (5:00 PM)**

**Step 1: Review Your Performance (1 minute)**

```
Look at stats widget:

TODAY'S PROGRESS
────────────────

Calls: 47/45 ▰▰▰▰▰▰▰▰▰▰▰▰▰▰ 104%
Target: Exceeded by 2 calls! 🎉

Avg Handle: 5m 12s
⏱ ↓28s vs yesterday ✓ (GOOD!)

Satisfaction: 4.9⭐
📊 ↑0.3 this week ✓ (GREAT!)

[View Details →]
```

**Reflection:**
- ✅ Exceeded target (47/45 calls)
- ✅ Handled calls faster (↓28s)
- ✅ High customer satisfaction (4.9⭐)
- 🎉 Great job!

**Step 2: Clear Remaining Messages (1 minute)**

```
Check right sidebar:
- Any unread messages? Read and mark as read
- Any urgent items for tomorrow? Make note
```

**Step 3: Set Status to Offline (5 seconds)**

```
Method:
1. Click status dropdown
2. Select ⚫ Offline
3. Or use your company's logout procedure
```

**Step 4: Log Out**

```
Done for the day! See you tomorrow 👋
```

---

### ⌨️ Keyboard Shortcuts Master List

| Key | Action | Description | When to Use |
|-----|--------|-------------|-------------|
| **F2** | Available 🟢 | Set status to Available | Start of shift, after break, after call |
| **F3** | Busy 🟠 | Set status to Busy | Manual call logging |
| **F4** | Break 🔵 | Set status to Break | Going on break, lunch |
| **Ctrl+M** | Messages | Open/focus message center | Quick message check |
| **Esc** | Close | Close modal/dropdown | Close any overlay |

**💡 Pro Tips:**
- Learn F2-F4 first - you'll use them 10+ times per day
- F2 (Available) is your most-used shortcut
- Keyboard is 2-3 seconds faster than mouse per action
- Over a day: saves ~30-60 seconds total

---

## 👔 Supervisor View - Complete Guide

### Interface Overview

```
┌─────────────────────────────────────────────────────────┐
│ HEADER BAR                                              │
│ ┌────┬─────────┬────────┬──────┬──────┬──────┐         │
│ │ AW │         │ Team ▾ │ Send │ 🔔 2 │Sarah │         │
│ │Logo│Wallboard│        │ Msg  │      │  ⚙   │         │
│ └────┴─────────┴────────┴──────┴──────┴──────┘         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ METRICS DASHBOARD                                       │
│ ┌──────┬──────┬──────┬──────┬──────┐                   │
│ │ 👥   │ ✅   │ 📞   │ ⏱️   │ ⭐   │                   │
│ │ 12   │ 8    │ 147  │ 4m   │ 4.7  │                   │
│ │Total │Online│Calls │Time  │CSAT  │                   │
│ └──────┴──────┴──────┴──────┴──────┘                   │
│                                                         │
│ SLA: 94% ▰▰▰▰▰▰▰▰▰▱ (Target: 95%) ⚠️                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ⚠️  ALERTS (1)                          [Dismiss All]   │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🔥 Emma Davis (AG002) - Long call duration         │ │
│ │    Current: 12m 20s | Average: 6m 45s              │ │
│ │    [Send Message] [View Detail] [Dismiss]          │ │
│ └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FILTERS & SEARCH                                        │
│ [All 12][🟢 4][🟠 3][🔵 1][⚫ 4]  🔍[Search] [Sort▾]    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ AGENT CARDS GRID                                        │
│ ┌────────┬────────┬────────┬────────┐                  │
│ │🟢 John │🟠 Emma │🟢 Lisa │🔵 Mike │                  │
│ │ AG001  │ AG002  │ AG005  │ AG007  │                  │
│ │12 calls│15 calls│8 calls │14 calls│                  │
│ │5m 20s  │6m 45s🔥│4m 10s  │5m 05s  │                  │
│ │Updated │Call:12m│Updated │10m left│                  │
│ │ now    │        │ 1m     │        │                  │
│ │[💬Msg] │[💬Msg] │[💬Msg] │[💬Msg] │                  │
│ └────────┴────────┴────────┴────────┘                  │
│                                                         │
│ ┌────────┬────────┬────────┬────────┐                  │
│ │🟢 Sarah│🟠 Tom  │🟢 Amy  │🟢 Dan  │                  │
│ │ AG003  │ AG004  │ AG006  │ AG008  │                  │
│ │10 calls│13 calls│9 calls │11 calls│                  │
│ │4m 50s  │5m 30s  │5m 15s  │4m 45s  │                  │
│ │Updated │Call:3m │Updated │Updated │                  │
│ │ 2m     │        │ now    │ 1m     │                  │
│ │[💬Msg] │[💬Msg] │[💬Msg] │[💬Msg] │                  │
│ └────────┴────────┴────────┴────────┘                  │
│                                                         │
│           [Show 4 Offline Agents ▾]                     │
└─────────────────────────────────────────────────────────┘
```

---

### 📝 Daily Workflows

#### **Morning Check-in (9:00 AM)**

**Step 1: Check Team Metrics (30 seconds)**

```
Look at METRICS DASHBOARD (top):

┌────────────────────────────────────────┐
│ 👥 12    ✅ 8    📞 147   ⏱️ 4m 32s  ⭐ 4.7  │
│ Total   Online  Calls   Avg Time   CSAT  │
└────────────────────────────────────────┘

ANALYSIS:
✅ 8/12 agents online (67%) - Good for 9 AM
✅ 147 calls already - Good volume
✅ Avg time 4m 32s - Within target (4-6 mins)
✅ CSAT 4.7⭐ - Excellent (target: 4.5+)

SLA: 94% ▰▰▰▰▰▰▰▰▰▱ (Target: 95%) ⚠️
     ↑
  Slightly below target - Monitor closely!
```

**Step 2: Check for Alerts (10 seconds)**

```
⚠️  Active Alerts (1)

🔥 Emma Davis (AG002) - Long call duration
   Current: 12m 20s | Average: 6m 45s
   [Send Message] [View Detail] [Dismiss]

ACTION NEEDED:
This is unusual - average is 6m 45s, current call is 12m+
She may need help!
```

**Step 3: Handle the Alert (1 minute)**

```
Option 1 - Send Quick Message:
1. Click [Send Message]
2. Quick message dialog opens
3. Type: "Hi Emma, I see you're on a long call. 
         Do you need help or escalation support?"
4. Click [Send]
5. Toast: "Message sent to Emma"

Option 2 - View Details First:
1. Click [View Detail]
2. Agent detail modal opens:
   ┌─────────────────────────────────┐
   │ Emma Davis (AG002) - 🟠 Busy    │
   │                                 │
   │ TODAY'S STATS:                  │
   │ • Calls: 15/45                  │
   │ • Avg Handle: 6m 45s            │
   │ • This call: 12m 20s            │
   │                                 │
   │ RECENT CALLS:                   │
   │ 1. Current (12m 20s) - In prog  │
   │ 2. 10:58-11:04 (6m) - Resolved  │
   │ 3. 10:48-10:53 (5m) - Resolved  │
   └─────────────────────────────────┘
3. Analyze: "She normally handles calls well (6m avg)"
4. Decision: Send support message
```

**Step 4: Quick Team Scan (1 minute)**

```
Scan the AGENT CARDS GRID:

Looking for:
✅ Green dots 🟢 - Available agents
❌ Red flags 🔥 - Issues needing attention
⏰ Break timing 🔵 - Break rotation

Visual scan (4×2 grid):
Row 1: ✅ ⚠️ ✅ 🔵  (1 issue found - Emma)
Row 2: ✅ ✅ ✅ ✅  (All good!)

Result: 1 issue handled, rest of team performing well
```

---

#### **Throughout the Day - Monitoring**

**Every 30 Minutes: Quick Check**

```
CHECKPOINT ROUTINE (2 minutes):

1. Glance at SLA bar:
   94% → 95% → 96% ✓ (Good, improving!)

2. Check online count:
   8 agents → Still good for coverage

3. Scan for new alerts:
   No new alerts ✓

4. Look for 🔥 icons on cards:
   None visible ✓

5. Check team metrics trends:
   Calls: 147 → 198 → 245 (Increasing - good!)
   Avg Time: 4m 32s → 4m 28s (Improving!)
   CSAT: 4.7 → 4.8 (Great!)

Result: Team performing well, no action needed
```

**When You See a New Alert**

```
🚨 NEW ALERT APPEARS:

⚠️  Active Alerts (1)                [Dismiss All]
┌─────────────────────────────────────────────┐
│ ⏰ Mike Lee (AG007) - Break overdue        │
│    Break started: 45 mins ago               │
│    Expected: 15 mins                        │
│    [Send Message] [View Detail] [Dismiss]   │
└─────────────────────────────────────────────┘

QUICK ACTION:
1. Click [Send Message]
2. Type: "Hi Mike, your break was 45 mins ago. 
         Everything OK? Please check in."
3. [Send]
4. Monitor for response

If no response in 5 mins:
- Try calling Mike directly
- Check with other team members
- May be technical issue or emergency
```

---

#### **Using Filters Effectively**

**Scenario: Need to assign a call manually**

```
GOAL: Find available agents

Step 1: Click filter
[All 12] [🟢 Available 4] [🟠 Busy 3] [🔵 Break 1] [⚫ Offline 4]
              ↑ Click this

Step 2: Grid now shows only available agents
┌────────┬────────┬────────┬────────┐
│🟢 John │🟢 Lisa │🟢 Amy  │🟢 Dan  │
│ AG001  │ AG005  │ AG006  │ AG008  │
│12 calls│8 calls │9 calls │11 calls│
│5m 20s  │4m 10s  │5m 15s  │4m 45s  │
└────────┴────────┴────────┴────────┘

Step 3: Choose agent with:
- Lowest call count (Lisa - 8 calls)
- OR fastest avg time (Lisa - 4m 10s)
- Decision: Assign to Lisa

Step 4: Click [All] to see full team again
```

**Scenario: Find specific agent**

```
GOAL: Find "John Smith" quickly

Step 1: Click search box
🔍 [Search agents...]
    ↑ Click here

Step 2: Type
🔍 [John_______________]

Step 3: Grid filters in real-time
┌────────┐
│🟢 John │ ← Only John shows
│ AG001  │
│12 calls│
└────────┘

Step 4: Clear search to see all again
🔍 [John_] ← Press Backspace or [×]
```

---

#### **Viewing Agent Details**

**When to use: Deep dive into agent performance**

```
STEP 1: Click any agent card
Click on: John Smith (AG001)

STEP 2: Modal opens (800×600px)
┌─────────────────────────────────────────┐
│ [×]              AGENT DETAIL            │
├─────────────────────────────────────────┤
│ [JA] John Smith (AG001)  🟢 Available   │
│      Customer Service Team               │
│      Last update: Just now               │
│                                          │
│ [Send Message] [Change Status] [Profile]│
├─────────────────────────────────────────┤
│ [Overview] [Performance] [Activity]      │
│  ↑ Active                                │
├─────────────────────────────────────────┤
│ TODAY'S STATS         CURRENT SESSION   │
│ ─────────────         ────────────────  │
│ Calls: 12/45 (73%)    Status: Available │
│ Talk Time: 1h 4m      Duration: 45m 20s │
│ Avg Handle: 5m 20s    Last Call: 2m ago │
│ CSAT: 4.8⭐           Breaks: 1/3       │
│                                          │
│ STATUS HISTORY TODAY                     │
│ ────────────────────                     │
│ 09:00 ─🟢─ 10:30 ─🔵─ 10:45 ─🟢─ Now   │
│      Available   Break   Available      │
│                                          │
│ RECENT CALLS (Last 5)                    │
│ ─────────────────────                    │
│ 1. 11:23-11:28 (5m 12s) ✓ Resolved      │
│ 2. 11:10-11:15 (4m 52s) ✓ Resolved      │
│ 3. 10:58-11:04 (6m 20s) ✓ Resolved      │
│ 4. 10:48-10:53 (5m 05s) ✓ Escalated     │
│ 5. 10:35-10:42 (7m 10s) ✓ Resolved      │
│                                          │
│ [View All Call History →]                │
└─────────────────────────────────────────┘

STEP 3: Analyze performance
• Calls: 12/45 (73%) - Good progress
• Avg Handle: 5m 20s - Within target
• CSAT: 4.8⭐ - Excellent
• Recent calls mostly resolved ✓
• One escalation - check if pattern

STEP 4: Take action if needed
• Send encouragement: "Great job today!"
• Provide coaching if seeing issues
• Close modal: Click [×] or click outside
```

---

## 🎯 Visual Walkthroughs

### Walkthrough 1: Agent - Morning Start

```
TIME: 8:45 AM
GOAL: Get ready to take calls

┌─ STEP 1: CHECK MESSAGES (2 min) ────────┐
│                                          │
│ Right Sidebar:                           │
│ ┌────────────────────────┐               │
│ │ Messages (6) [1] 🔽    │               │
│ │ ────────────────────── │               │
│ │ [All][Unread][Urgent]  │ ← Click Unread│
│ │                        │               │
│ │ 🔴 UNREAD              │               │
│ │ From: Sarah            │               │
│ │ Team meeting at 11:00  │               │
│ │ [Mark as Read]         │ ← Click       │
│ └────────────────────────┘               │
│                                          │
│ ✓ Message read and marked                │
└──────────────────────────────────────────┘

┌─ STEP 2: SET STATUS (5 sec) ────────────┐
│                                          │
│ Header (Top-Right):                      │
│ Press: F2 key                            │
│   or                                     │
│ Click: [🟠 Busy ▾] → Select 🟢 Available │
│                                          │
│ Result:                                  │
│ ┌──────────────┐                         │
│ │ 🟢 Available │                         │
│ └──────────────┘                         │
│ Toast: "Status changed to Available"     │
│                                          │
│ ✓ Ready to receive calls                 │
└──────────────────────────────────────────┘

┌─ STEP 3: CHECK STATS (10 sec) ──────────┐
│                                          │
│ Left Column:                             │
│ ┌──────────────────────┐                 │
│ │ TODAY'S PROGRESS     │                 │
│ │                      │                 │
│ │ Calls: 0/45          │                 │
│ │ ▱▱▱▱▱▱▱▱▱▱▱▱▱▱ 0%   │                 │
│ │ Target: 45 calls     │                 │
│ │                      │                 │
│ │ Ready to start! 🚀   │                 │
│ └──────────────────────┘                 │
│                                          │
│ ✓ Goals are clear                        │
└──────────────────────────────────────────┘

TOTAL TIME: ~2 min 15 sec
STATUS: ✅ Ready to work!
```

---

### Walkthrough 2: Supervisor - Handling Alert

```
TIME: 10:30 AM
ALERT: Emma on long call

┌─ STEP 1: NOTICE ALERT (Immediate) ──────┐
│                                          │
│ Orange panel appears below metrics:      │
│ ┌────────────────────────────────────┐   │
│ │ ⚠️  Active Alerts (1) [Dismiss All]│   │
│ │                                    │   │
│ │ 🔥 Emma Davis (AG002)              │   │
│ │    Long call duration              │   │
│ │    Current: 12m | Avg: 6m 45s      │   │
│ │                                    │   │
│ │ [Send Msg][View Detail][Dismiss]   │   │
│ └────────────────────────────────────┘   │
│                                          │
│ Also notice on grid:                     │
│ Emma's card shows: 🔥 (fire icon)        │
└──────────────────────────────────────────┘

┌─ STEP 2: ASSESS (15 sec) ───────────────┐
│                                          │
│ Click: [View Detail]                     │
│                                          │
│ Modal shows:                             │
│ • Emma usually handles calls well        │
│ • Average time: 6m 45s                   │
│ • This call: 12m 20s (unusual)           │
│ • Recent calls all resolved              │
│                                          │
│ Decision: She may need help              │
└──────────────────────────────────────────┘

┌─ STEP 3: TAKE ACTION (30 sec) ──────────┐
│                                          │
│ From alert panel, click: [Send Message]  │
│                                          │
│ Type:                                    │
│ "Hi Emma, I see you're on a long call.   │
│  Do you need help or escalation?"        │
│                                          │
│ Click: [Send]                            │
│                                          │
│ Toast appears:                           │
│ ✓ "Message sent to Emma"                 │
│                                          │
│ Click alert: [Dismiss]                   │
│ (Will re-alert if call goes over 15m)    │
└──────────────────────────────────────────┘

┌─ STEP 4: MONITOR (Ongoing) ─────────────┐
│                                          │
│ Watch Emma's card for:                   │
│ • Call duration decreases → Call ended   │
│ • Status changes to Available → Ready    │
│ • Reply message received                 │
│                                          │
│ If call exceeds 15m:                     │
│ • Alert appears again                    │
│ • Consider calling Emma directly         │
│ • May need immediate intervention        │
└──────────────────────────────────────────┘

TOTAL TIME: ~1 minute
RESULT: ✅ Issue identified and addressed
```

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Issue 1: "I can't find unread messages"

**Problem:** Messages list shows count but can't find unread

**Solution:**
```
1. Look at right sidebar → "Messages (6)"
2. Check for red badge: [1 unread]
3. Click [Unread] filter pill
4. Look for red border:
   ┌────────────────┐
   │ 🔴 UNREAD      │ ← This one!
   │ From: ...      │
   └────────────────┘
5. If still not found:
   - Scroll down in message list
   - Check if message was just read
   - Badge should update to [0]
```

---

#### Issue 2: "Status won't change"

**Problem:** Clicking status but it doesn't update

**Solution:**
```
1. Check current status badge
2. Try keyboard shortcut instead:
   F2 (Available) / F3 (Busy) / F4 (Break)
3. Look for toast notification
4. Check floating status (bottom-right)
5. If still not working:
   - Refresh page (F5)
   - Clear browser cache
   - Contact IT support
```

---

#### Issue 3: "Stats not updating"

**Problem:** Call count not increasing

**Solution:**
```
1. Stats update after each call ends
2. Check if call actually ended in phone system
3. Stats may have 1-2 second delay (normal)
4. Refresh page if over 30 seconds
5. Check if you're looking at correct date
```

---

#### Issue 4: "Can't see all agents (Supervisor)"

**Problem:** Only seeing 4 agents instead of 8

**Solution:**
```
1. Check if filter is active:
   [All 12] [🟢 4] [🟠 3] ...
   ↑ Click "All" to see everyone

2. Check if offline agents are hidden:
   Scroll down → [Show X Offline Agents ▾]

3. Clear search box:
   🔍 [Search...] ← Delete any text

4. Zoom level may be wrong:
   Press Ctrl+0 to reset zoom to 100%
```

---

## 📚 Additional Help

- **Full User Manual**: See [QUICK-START.md](QUICK-START.md)
- **Component Details**: See [COMPONENTS.md](COMPONENTS.md)
- **Design Rationale**: See [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md)

---

**Need more help?**
- Contact your supervisor
- Check the FAQ in README.md
- Contact IT Support

---

*Last updated: October 16, 2025*
