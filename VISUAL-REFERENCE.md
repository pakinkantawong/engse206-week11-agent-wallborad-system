# 🎨 Visual Reference Guide

> **Quick visual reference for the Agent Wallboard interface**

---

## 🔄 View Switcher

Located at the **top center** of the screen:

```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────┐  ┌────────────────┐ │
│  │ 🧑 Agent   │  │ 👔 Supervisor  │ │
│  │    View    │  │     View       │ │
│  └────────────┘  └────────────────┘ │
│                                      │
└──────────────────────────────────────┘

Click to switch between views
```

---

## 🧑 Agent View - Layout Reference

```
┌─────────────────────────────────────────────────────────────┐
│ ① HEADER BAR (Fixed, 60px height)                          │
│ ┌────┬────────────────┬──────────┬────────┬────────┬─────┐ │
│ │ AW │                │ 🟢 ▾     │ 🔔 3   │ [NS]   │ ⚙   │ │
│ │Logo│ Agent Wallboard│ Status   │Notif   │ Name   │Set  │ │
│ └────┴────────────────┴──────────┴────────┴────────┴─────┘ │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────────────┐
│ ② LEFT COLUMN (70%)      │ ③ RIGHT COLUMN (30%)             │
│ Width: ~1000px           │ Width: ~400px                    │
│ Scrollable               │ Fixed, scrollable                │
│                          │                                  │
│ ╔══════════════════════╗ │ ╔════════════════════════════╗   │
│ ║ 📊 PERSONAL STATS    ║ │ ║ 📬 MESSAGES CENTER         ║   │
│ ║ (240px height)       ║ │ ║ (Full height)              ║   │
│ ╠══════════════════════╣ │ ╠════════════════════════════╣   │
│ ║ Gradient: Blue       ║ │ ║ Header:                    ║   │
│ ║                      ║ │ ║ • Title + Badge            ║   │
│ ║ Calls: 12/45 (73%)   ║ │ ║ • Filter tabs              ║   │
│ ║ ▰▰▰▰▰▰▰▱▱▱▱▱▱▱      ║ │ ║                            ║   │
│ ║                      ║ │ ║ Message List:              ║   │
│ ║ Avg: 5m 32s ↓18s     ║ │ ║ • Unread (red border)      ║   │
│ ║ CSAT: 4.8⭐ ↑0.2     ║ │ ║ • Read (white bg)          ║   │
│ ║                      ║ │ ║                            ║   │
│ ║ [View Details →]     ║ │ ║ Quick Compose:             ║   │
│ ╚══════════════════════╝ │ ║ • Recipient dropdown       ║   │
│                          │ ║ • Message textarea         ║   │
│ ┌──────────────────────┐ │ ║ • Templates                ║   │
│ │ 📋 QUICK ACTIONS     │ │ ║ • Send button              ║   │
│ │ (120px height)       │ │ ╚════════════════════════════╝   │
│ ├──────────────────────┤ │                                  │
│ │ 2×2 Grid:            │ │                                  │
│ │ [📚 KB ] [📞 Hist]   │ │                                  │
│ │ [📊 Rep] [❓ Help]   │ │                                  │
│ └──────────────────────┘ │                                  │
│                          │                                  │
│ ┌──────────────────────┐ │                                  │
│ │ 📅 SCHEDULE          │ │                                  │
│ │ (180px height)       │ │                                  │
│ ├──────────────────────┤ │                                  │
│ │ Timeline with dots:  │ │                                  │
│ │ 10:30 ──●── Break    │ │                                  │
│ │       │              │ │                                  │
│ │ 11:00 ──●── Meeting  │ │                                  │
│ │       │              │ │                                  │
│ │ 15:00 ──●── Break    │ │                                  │
│ └──────────────────────┘ │                                  │
│                          │                                  │
│ ┌──────────────────────┐ │                                  │
│ │ 💡 TIPS              │ │                                  │
│ │ (160px height)       │ │                                  │
│ ├──────────────────────┤ │                                  │
│ │ Yellow background    │ │                                  │
│ │                      │ │                                  │
│ │ F2 → Available       │ │                                  │
│ │ F3 → Busy            │ │                                  │
│ │ F4 → Break           │ │                                  │
│ │                      │ │                                  │
│ │ [Learn More →]       │ │                                  │
│ └──────────────────────┘ │                                  │
└──────────────────────────┴──────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ④ FLOATING STATUS INDICATOR (Bottom-right)                  │
│ ┌──────────────────────┐                                    │
│ │ 🟢 Available         │ (Animated pulse on dot)            │
│ │ F2-F4 for status     │                                    │
│ └──────────────────────┘                                    │
└─────────────────────────────────────────────────────────────┘
```

### Key Elements Explained

**① Header Bar**
- Always visible (sticky)
- Contains most important controls
- Status dropdown for quick changes
- Notification bell with badge count
- User menu with settings

**② Left Column (Main Content)**
- Personal stats (most important - top)
- Quick actions (frequent tasks)
- Schedule (planning)
- Tips (education)
- Scrollable for more content

**③ Right Column (Messages)**
- Fixed position, always visible
- Message center with filters
- Quick compose at bottom
- High priority items at top

**④ Floating Status**
- Always visible confirmation
- Shows current status
- Keyboard shortcut reminder
- Subtle animation

---

## 👔 Supervisor View - Layout Reference

```
┌─────────────────────────────────────────────────────────────┐
│ ① HEADER BAR (60px)                                         │
│ ┌────┬──────┬─────────┬──────────┬────────┬────────┬─────┐ │
│ │ AW │      │ Team ▾  │ Send Msg │ 🔔 2   │ [SW]   │ ⚙   │ │
│ └────┴──────┴─────────┴──────────┴────────┴────────┴─────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ② METRICS DASHBOARD (120px height)                          │
│ ┌──────┬──────┬──────┬──────┬──────┐                        │
│ │ 👥   │ ✅   │ 📞   │ ⏱️   │ ⭐   │                        │
│ │ 12   │ 8    │ 147  │ 4m   │ 4.7  │                        │
│ │Total │Online│Calls │Time  │CSAT  │                        │
│ └──────┴──────┴──────┴──────┴──────┘                        │
│                                                              │
│ SLA: 94% ▰▰▰▰▰▰▰▰▰▱ (Target: 95%) ⚠️                        │
│           ↑            ↑           ↑                         │
│        Current     Progress    Warning                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ③ ALERTS PANEL (Collapsible, auto-height)                   │
│ Orange background when active                                │
│ ┌───────────────────────────────────────────────┐            │
│ │ ⚠️  Active Alerts (1)          [Dismiss All]  │            │
│ ├───────────────────────────────────────────────┤            │
│ │ 🔥 Emma Davis (AG002) - Long call duration   │            │
│ │    Current: 12m 20s | Average: 6m 45s        │            │
│ │    [Send Message] [View Detail] [Dismiss]    │            │
│ └───────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ④ FILTERS BAR (50px height)                                 │
│ ┌────┬──────┬──────┬──────┬────────┐  ┌──────┬──────┬────┐ │
│ │All │🟢 4  │🟠 3  │🔵 1  │⚫ 4    │  │Search│Sort▾ │View│ │
│ │ 12 │Avail │Busy  │Break │Offline │  │      │      │ ▾  │ │
│ └────┴──────┴──────┴──────┴────────┘  └──────┴──────┴────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ⑤ AGENT CARDS GRID (Main content area)                      │
│                                                              │
│ 4 Columns × 2 Rows = 8 visible cards                        │
│ Card dimensions: 280px × 180px                               │
│ Gap: 24px                                                    │
│                                                              │
│ ┌─────────┬─────────┬─────────┬─────────┐                   │
│ │ ║ 🟢    │ ║ 🟠    │ ║ 🟢    │ ║ 🔵    │                   │
│ │ ║ John  │ ║ Emma  │ ║ Lisa  │ ║ Mike  │                   │
│ │ ║AG001  │ ║AG002  │ ║AG005  │ ║AG007  │                   │
│ │ ║       │ ║       │ ║       │ ║       │                   │
│ │ ║12 call│ ║15 call│ ║8 calls│ ║14 call│                   │
│ │ ║5m 20s │ ║6m 45s │ ║4m 10s │ ║5m 05s │                   │
│ │ ║       │ ║🔥Call:│ ║       │ ║Break  │                   │
│ │ ║Updated│ ║12m 20s│ ║Updated│ ║10m lef│                   │
│ │ ║now    │ ║       │ ║1m ago │ ║       │                   │
│ │ ║       │ ║       │ ║       │ ║       │                   │
│ │ ║[💬Msg]│ ║[💬Msg]│ ║[💬Msg]│ ║[💬Msg]│                   │
│ └─────────┴─────────┴─────────┴─────────┘                   │
│                                                              │
│ ┌─────────┬─────────┬─────────┬─────────┐                   │
│ │ ║ 🟢    │ ║ 🟠    │ ║ 🟢    │ ║ 🟢    │                   │
│ │ ║ Sarah │ ║ Tom   │ ║ Amy   │ ║ Dan   │                   │
│ │ ║AG003  │ ║AG004  │ ║AG006  │ ║AG008  │                   │
│ │ ║       │ ║       │ ║       │ ║       │                   │
│ │ ║10 call│ ║13 call│ ║9 calls│ ║11 call│                   │
│ │ ║4m 50s │ ║5m 30s │ ║5m 15s │ ║4m 45s │                   │
│ │ ║       │ ║       │ ║       │ ║       │                   │
│ │ ║Updated│ ║Call:  │ ║Updated│ ║Updated│                   │
│ │ ║2m ago │ ║3m 15s │ ║now    │ ║1m ago │                   │
│ │ ║       │ ║       │ ║       │ ║       │                   │
│ │ ║[💬Msg]│ ║[💬Msg]│ ║[💬Msg]│ ║[💬Msg]│                   │
│ └─────────┴─────────┴─────────┴─────────┘                   │
│                                                              │
│              [Show 4 Offline Agents ▾]                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Key Elements Explained

**① Header Bar**
- Team selector dropdown
- Broadcast message button
- Notification bell
- User menu

**② Metrics Dashboard**
- 5 key performance indicators
- SLA progress bar with target
- Color-coded warnings
- Real-time updates

**③ Alerts Panel**
- Appears when issues detected
- Orange background (high visibility)
- Quick action buttons
- Dismissable

**④ Filters Bar**
- Status filters with counts
- Search box for finding agents
- Sort and view options
- Active filter highlighted

**⑤ Agent Cards Grid**
- 4×2 grid (8 cards visible)
- Color-coded left border
- Special icons (🔥⏰)
- Hover for actions
- Click for details

---

## 🎨 Color Reference

### Status Colors

```
🟢 Available  #10B981  ▓▓▓▓  Bright Green
🟠 Busy       #F59E0B  ▓▓▓▓  Warm Orange
🔵 Break      #3B82F6  ▓▓▓▓  Sky Blue
⚫ Offline    #6B7280  ▓▓▓▓  Neutral Gray
```

### UI Colors

```
Primary       #2563EB  ▓▓▓▓  Blue (buttons, links)
Success       #16A34A  ▓▓▓▓  Green (positive actions)
Error         #DC2626  ▓▓▓▓  Red (alerts, unread)
Warning       #EA580C  ▓▓▓▓  Orange (cautions)
```

### Background Colors

```
White         #FFFFFF  ░░░░  Cards, modals
Gray-50       #F9FAFB  ░░░░  Page background
Gray-100      #F3F4F6  ░░░░  Subtle backgrounds
```

### Text Colors

```
Gray-900      #111827  ████  Headings
Gray-700      #374151  ████  Body text
Gray-500      #6B7280  ████  Secondary text
Gray-400      #9CA3AF  ████  Captions
```

---

## 📏 Spacing Reference

### Component Dimensions

```
Header Bar:          Full width × 60px
Stats Widget:        Full width × 240px
Agent Card:          280px × 180px
Message Item:        Full width × ~100px
Modal:               800px × 600px
Status Badge:        Auto × 28px
Button (medium):     Auto × 40px
```

### Spacing Values (8px Grid)

```
Tiny      4px   ▎
Small     8px   ▌
Medium   16px   █
Large    24px   █▌
XLarge   32px   ██
XXLarge  48px   ███
```

---

## 🔤 Typography Reference

### Font Sizes

```
Caption   12px  Small text, timestamps
Label     14px  Form labels, small UI text
Body      16px  Main content, buttons
Large     18px  Emphasized content
Heading   20px  Card titles, section headers
Title     24px  Page titles, modal headers
Display   30px  Main page titles
```

### Font Weights

```
Normal    400   Body text, labels
Medium    500   Buttons, emphasis
Semibold  600   Headings, important text
Bold      700   Strong emphasis, numbers
```

---

## 🎯 Interactive Elements

### Buttons

```
PRIMARY (Blue)
┌──────────────┐
│  Send Now    │ ← Blue bg, white text
└──────────────┘

SECONDARY (White)
┌──────────────┐
│   Cancel     │ ← White bg, gray text, border
└──────────────┘

GHOST (Transparent)
┌──────────────┐
│  Learn More  │ ← Transparent, gray text
└──────────────┘
```

### Status Badges

```
AVAILABLE
┌──────────────┐
│ 🟢 Available │ ← Green bg (10% opacity), green text
└──────────────┘

BUSY
┌──────────────┐
│ 🟠 Busy      │ ← Orange bg (10% opacity), orange text
└──────────────┘
```

### Cards

```
DEFAULT
┌─────────────────┐
│                 │ ← White bg, gray border
│   Card Content  │    Small shadow
│                 │
└─────────────────┘

HOVER
┌─────────────────┐
│                 │ ← White bg, blue border
│   Card Content  │    Larger shadow
│                 │    Lifted -4px
└─────────────────┘
```

---

## 🔔 Notification States

### Toast Notifications (Bottom-right)

```
SUCCESS
┌─────────────────────────┐
│ ✓ Status changed to     │ ← Green accent
│   Available             │    2 second duration
└─────────────────────────┘

ERROR
┌─────────────────────────┐
│ ✗ Failed to send        │ ← Red accent
│   message               │    4 second duration
└─────────────────────────┘

INFO
┌─────────────────────────┐
│ ℹ New message received  │ ← Blue accent
│                         │    3 second duration
└─────────────────────────┘
```

### Badge Notifications

```
BELL ICON
🔔 ← No notifications

🔔 3 ← Red badge with count
```

---

## 📱 Responsive Breakpoints

### Desktop (1440px+)
```
Agent Grid: 4 columns
All features visible
Optimal experience
```

### Laptop (1024px - 1439px)
```
Agent Grid: 3 columns
Slightly compressed
Full functionality
```

### Tablet (768px - 1023px)
```
Agent Grid: 2 columns
Stacked layout
Touch-optimized
```

### Mobile (<768px)
```
Agent Grid: 1 column
Vertical layout
Mobile menu
```

---

## 🎭 Special States

### Loading

```
┌─────────────────┐
│ ⌛ Loading...   │ ← Spinner animation
└─────────────────┘
```

### Empty State

```
┌─────────────────┐
│                 │
│  📭 No messages │ ← Icon + text
│                 │
└─────────────────┘
```

### Error State

```
┌─────────────────┐
│                 │
│  ⚠️ Error       │ ← Warning icon
│  Try again      │    Error message
│  [Retry]        │    Action button
│                 │
└─────────────────┘
```

---

## 🔍 Quick Reference

### Agent View Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **Status Dropdown** | Header, top-right | Change status quickly |
| **Stats Widget** | Left column, top | See performance |
| **Messages** | Right sidebar | Read/send messages |
| **Quick Actions** | Left column, middle | Common tasks |
| **Schedule** | Left column, lower | See upcoming events |
| **Tips** | Left column, bottom | Learn shortcuts |

### Supervisor View Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **Metrics** | Top, below header | Team overview |
| **Alerts** | Below metrics | Issues to handle |
| **Filters** | Below alerts | Find agents |
| **Agent Cards** | Main area | Monitor team |
| **Detail Modal** | Overlay | Deep dive |

---

## 💡 Design Patterns Used

### Progressive Disclosure
```
Level 1: Essential info (always visible)
Level 2: Important details (on hover)
Level 3: Full information (on click)
```

### F-Pattern Layout
```
Users scan in F-shape:
F──────→ Header (most attention)
│
F────→ Stats (second most)
│
F──→ Content (third)
```

### Color Coding
```
Status = Color (consistent throughout)
🟢 = Available, 🟠 = Busy, etc.
Never rely on color alone (icon + text)
```

---

*Last updated: October 16, 2025*
