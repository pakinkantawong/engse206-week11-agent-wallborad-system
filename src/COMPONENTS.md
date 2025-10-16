# 📦 Component Documentation

> Detailed documentation for all components in the Agent Wallboard system.

---

## 📚 Table of Contents

### Shared Components
1. [StatusBadge](#statusbadge)
2. [StatusDropdown](#statusdropdown)

### Agent Dashboard Components
3. [PersonalStatsWidget](#personalstatswidget)
4. [MessageCenter](#messagecenter)
5. [QuickActions](#quickactions)
6. [UpcomingSchedule](#upcomingschedule)
7. [TipsWidget](#tipswidget)

### Supervisor Dashboard Components
8. [MetricsDashboard](#metricsdashboard)
9. [AgentCard](#agentcard)
10. [AlertPanel](#alertpanel)
11. [AgentDetailModal](#agentdetailmodal)

### Main Views
12. [AgentDashboard](#agentdashboard)
13. [SupervisorDashboard](#supervisordashboard)

---

## Shared Components

### StatusBadge

**Purpose:** Display agent status with consistent styling and color coding.

**Location:** `/components/StatusBadge.tsx`

**Props:**
```typescript
interface StatusBadgeProps {
  status: 'available' | 'busy' | 'break' | 'offline';
  showIcon?: boolean;  // Default: true
  size?: 'sm' | 'md' | 'lg';  // Default: 'md'
}
```

**Usage:**
```tsx
<StatusBadge status="available" />
<StatusBadge status="busy" showIcon={false} />
<StatusBadge status="break" size="lg" />
```

**Visual Design:**
- Pill-shaped badge with rounded corners
- Color-coded by status (green, orange, blue, gray)
- Icon emoji + text label
- Background at 10% opacity of status color

**Sizes:**
- `sm`: 12px text, 8px padding
- `md`: 14px text, 12px padding (default)
- `lg`: 16px text, 16px padding

**Example Output:**
```
🟢 Available    (Green background, green text)
🟠 Busy         (Orange background, orange text)
🔵 Break        (Blue background, blue text)
⚫ Offline      (Gray background, gray text)
```

**Accessibility:**
- ✅ Color + icon + text (never color alone)
- ✅ High contrast (3.8:1 minimum)
- ✅ Screen reader friendly

---

### StatusDropdown

**Purpose:** Quick status change control for agents.

**Location:** `/components/StatusDropdown.tsx`

**Props:**
```typescript
interface StatusDropdownProps {
  currentStatus: Status;
  onStatusChange: (status: Status) => void;
}
```

**Usage:**
```tsx
<StatusDropdown 
  currentStatus={currentStatus}
  onStatusChange={handleStatusChange}
/>
```

**Features:**
- Click to open dropdown menu
- Shows all 4 status options
- Current status marked with checkmark ✓
- Closes on selection or click outside
- Color-coded button matches current status

**Keyboard Support:**
- Click or Enter to open
- Arrow keys to navigate options
- Enter to select
- Escape to close

**States:**
- **Closed**: Shows current status with down arrow
- **Open**: Shows all options in overlay menu
- **Hover**: Options highlight on hover

---

## Agent Dashboard Components

### PersonalStatsWidget

**Purpose:** Display real-time performance statistics for agents.

**Location:** `/components/PersonalStatsWidget.tsx`

**Props:**
```typescript
interface PersonalStatsWidgetProps {
  stats: {
    callsToday: number;      // Current call count
    callsTarget: number;     // Daily target
    avgHandleTime: string;   // e.g., "5m 32s"
    avgHandleTimeDiff: string; // e.g., "-18s" or "+12s"
    satisfaction: number;    // e.g., 4.8
    satisfactionDiff: number; // e.g., 0.2 or -0.1
  };
}
```

**Usage:**
```tsx
<PersonalStatsWidget stats={{
  callsToday: 12,
  callsTarget: 45,
  avgHandleTime: '5m 32s',
  avgHandleTimeDiff: '-18s',
  satisfaction: 4.8,
  satisfactionDiff: 0.2,
}} />
```

**Features:**
- **Gradient background** (blue) - premium feel
- **Progress bar** with percentage
- **Trend indicators** (↑↓) with colors
- **Large numbers** for quick scanning
- **"View Details" button** for full report

**Visual Hierarchy:**
```
Level 1: Calls Progress (12/45 - 73%)
├── Large numbers
├── Progress bar
└── Remaining count

Level 2: Performance Metrics
├── Avg Handle Time (with trend)
└── CSAT Score (with trend)

Level 3: Action
└── View Details button
```

**Psychology:**
- **Goal-Setting Theory**: Specific, visible goals
- **Progress Principle**: Small wins motivate
- **Gamification**: Visual progress rewards

---

### MessageCenter

**Purpose:** Smart message inbox with filtering and quick compose.

**Location:** `/components/MessageCenter.tsx`

**Props:**
```typescript
interface MessageCenterProps {
  messages: Message[];
  onMarkAsRead: (messageId: string) => void;
  onSendMessage: (to: string, message: string) => void;
}

interface Message {
  id: string;
  from: string;
  fromId: string;
  type: 'direct' | 'broadcast' | 'urgent';
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  priority?: 'high' | 'normal' | 'low';
}
```

**Usage:**
```tsx
<MessageCenter 
  messages={messages}
  onMarkAsRead={handleMarkAsRead}
  onSendMessage={handleSendMessage}
/>
```

**Features:**

1. **Header**
   - Total count: "Messages (6)"
   - Unread badge: Red circle with count
   - Minimize button

2. **Filter Tabs**
   - All: Show everything
   - Unread: Only unread messages
   - Urgent: High priority only

3. **Message List**
   - Unread: Red left border + light red background
   - Read: White background + gray border
   - Preview: First 2 lines of content
   - Icons: 🔴 urgent, 📢 broadcast, 💬 direct
   - Actions: Mark as Read, Reply

4. **Quick Compose**
   - Recipient dropdown
   - Message textarea
   - Template buttons
   - Send button

**Visual States:**

```css
/* Unread Message */
.message-unread {
  border-left: 4px solid #DC2626;
  background: #FEF2F2;
  font-weight: 600;
}

/* Read Message */
.message-read {
  border-left: 4px solid #E5E7EB;
  background: #FFFFFF;
  font-weight: 400;
}
```

**Behavior:**
- Scroll to load more (virtual scrolling)
- Click message to expand
- Click outside to collapse
- Auto-collapse read messages after 3

---

### QuickActions

**Purpose:** Shortcuts to frequently used features.

**Location:** `/components/QuickActions.tsx`

**Props:** None (static component)

**Usage:**
```tsx
<QuickActions />
```

**Actions:**
1. 📋 **Knowledge Base** - Search help articles
2. 📞 **Call History** - View past calls
3. 📊 **My Reports** - Performance reports
4. ❓ **Request Help** - Ask supervisor for help

**Layout:**
- 2×2 grid
- Icon + text label
- Colored backgrounds on hover
- Different color per action

**Styling:**
```css
.action-button {
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 150ms;
}

.action-button:hover {
  transform: translateY(-2px);
  shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

---

### UpcomingSchedule

**Purpose:** Timeline view of breaks and meetings.

**Location:** `/components/UpcomingSchedule.tsx`

**Props:**
```typescript
interface UpcomingScheduleProps {
  schedule: Schedule[];
}

interface Schedule {
  id: string;
  time: string;        // e.g., "10:30"
  title: string;       // e.g., "Break"
  type: 'break' | 'meeting' | 'task';
  location?: string;   // Optional location
  duration?: string;   // Optional duration
}
```

**Usage:**
```tsx
<UpcomingSchedule schedule={[
  { id: '1', time: '10:30', title: 'Break', type: 'break', duration: '15 mins' },
  { id: '2', time: '11:00', title: 'Team Meeting', type: 'meeting', location: 'Conf. B' },
]} />
```

**Features:**
- **Timeline visualization** with vertical line
- **Color-coded dots** by event type
- **Icons** per event type (☕ break, 📅 meeting)
- **Details** shown: location, duration

**Visual Design:**
```
10:30  ──●── Break (15 mins)
       │     ☕ Blue dot
       │
11:00  ──●── Team Meeting
       │     📅 Orange dot
       │     Conf. Room B
       │
15:00  ──●── Break (15 mins)
             ☕ Blue dot
```

---

### TipsWidget

**Purpose:** Educational widget showing keyboard shortcuts.

**Location:** `/components/TipsWidget.tsx`

**Props:** None (static content)

**Usage:**
```tsx
<TipsWidget />
```

**Features:**
- Yellow background (informational)
- Lightbulb icon 💡
- Title: "TIP OF THE DAY"
- List of shortcuts with `<kbd>` tags
- "Learn More" link

**Content:**
```
💡 TIP OF THE DAY

Use keyboard shortcuts to work faster:
• F2 → Available
• F3 → Busy
• F4 → Break
• Ctrl+M → Messages

[Learn More Shortcuts →]
```

**Styling:**
- Background: #FEF3C7 (light yellow)
- Border: #FCD34D (yellow)
- Text: #78350F (dark yellow)

---

## Supervisor Dashboard Components

### MetricsDashboard

**Purpose:** Display team-level performance metrics.

**Location:** `/components/MetricsDashboard.tsx`

**Props:**
```typescript
interface MetricsDashboardProps {
  metrics: {
    totalAgents: number;
    onlineAgents: number;
    callsToday: number;
    avgTime: string;
    csat: number;
    sla: number;
    slaTarget: number;
  };
}
```

**Usage:**
```tsx
<MetricsDashboard metrics={{
  totalAgents: 12,
  onlineAgents: 8,
  callsToday: 147,
  avgTime: '4m 32s',
  csat: 4.7,
  sla: 94,
  slaTarget: 95,
}} />
```

**Features:**

1. **5 Metric Cards** (equal width grid)
   - 👥 Total Agents
   - ✅ Online Now (green)
   - 📞 Calls Today (blue)
   - ⏱️ Avg Time (orange)
   - ⭐ CSAT (yellow)

2. **SLA Progress Bar**
   - Shows percentage (94%)
   - Target comparison (Target: 95%)
   - Color-coded:
     - Green: ≥ target
     - Orange: < target
   - Warning icon if below target

**Layout:**
```
┌────┬────┬────┬────┬────┐
│ 12 │ 8  │147 │4m  │4.7⭐│
│Total│Onli│Call│Avg │CSAT│
│Agent│ne  │s   │Time│    │
└────┴────┴────┴────┴────┘
SLA: 94% ▰▰▰▰▰▰▰▰▰▱ (Target: 95%) ⚠️
```

**Visual Hierarchy:**
- Large numbers (24px)
- Small labels (12px)
- Progress bar prominent
- Icons color-coded

---

### AgentCard

**Purpose:** Compact card showing agent status and stats.

**Location:** `/components/AgentCard.tsx`

**Props:**
```typescript
interface AgentCardProps {
  agent: Agent;
  onMessage: (agentId: string) => void;
  onClick: (agentId: string) => void;
}

interface Agent {
  id: string;
  name: string;
  status: Status;
  callCount: number;
  avgHandleTime: string;
  lastUpdate: string;
  satisfaction?: number;
  currentCallDuration?: string;
  breaksUsed?: number;
  breaksTotal?: number;
}
```

**Usage:**
```tsx
<AgentCard 
  agent={agentData}
  onMessage={handleMessage}
  onClick={handleClick}
/>
```

**Features:**

1. **Visual Indicators**
   - 4px left border (status color)
   - Status badge
   - Avatar with initials
   - Special icons:
     - 🔥 Long call (needs attention)
     - ⏰ Break ending soon

2. **Information**
   - Agent name + ID
   - Status badge
   - Call count today
   - Average handle time
   - Current call duration (if busy)
   - Last update timestamp

3. **Actions** (on hover)
   - 💬 Message button
   - ⋮ More menu

4. **Interactions**
   - Click card → Open detail modal
   - Click message → Open quick message
   - Hover → Show actions + elevation

**Dimensions:**
- Width: 280px
- Height: 180px
- Padding: 16px
- Border-radius: 12px

**States:**
```css
/* Default */
.agent-card {
  border: 1px solid #E5E7EB;
  shadow: 0 2px 4px rgba(0,0,0,0.06);
}

/* Hover */
.agent-card:hover {
  border: 1px solid #3B82F6;
  shadow: 0 8px 24px rgba(0,0,0,0.12);
  transform: translateY(-4px);
}
```

---

### AlertPanel

**Purpose:** Display active alerts requiring attention.

**Location:** `/components/AlertPanel.tsx`

**Props:**
```typescript
interface AlertPanelProps {
  alerts: Alert[];
  onDismiss: (alertId: string) => void;
  onMessage: (agentId: string) => void;
  onViewDetail: (agentId: string) => void;
}

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'critical';
  agentId: string;
  agentName: string;
  message: string;
  details?: string;
  timestamp: string;
}
```

**Usage:**
```tsx
<AlertPanel 
  alerts={alerts}
  onDismiss={handleDismiss}
  onMessage={handleMessage}
  onViewDetail={handleViewDetail}
/>
```

**Features:**

1. **Alert Types**
   - ⚠️ Warning: Orange
   - 🔴 Critical: Red
   - ℹ️ Info: Blue

2. **Alert Content**
   - Agent name + ID
   - Alert message
   - Optional details
   - Timestamp

3. **Actions**
   - Send Message (blue button)
   - View Detail (white button)
   - Dismiss (text button)
   - Dismiss All (header button)

**Visual Design:**
```css
.alert-panel {
  background: #FEF3C7;  /* Light orange */
  border: 2px solid #F59E0B;  /* Orange */
  border-radius: 12px;
  padding: 16px;
}

.alert-item {
  background: white;
  border: 1px solid #FCD34D;
  border-radius: 8px;
  padding: 16px;
}
```

**Behavior:**
- Collapsible (auto-hide when no alerts)
- Positioned below metrics dashboard
- Full width (minus margins)

**Examples:**
```
⚠️ Emma Davis (AG002) - Long call duration
   Current: 12m 20s | Average: 6m 45s
   [Send Message] [View Detail] [Dismiss]
```

---

### AgentDetailModal

**Purpose:** Full-screen modal with detailed agent information.

**Location:** `/components/AgentDetailModal.tsx`

**Props:**
```typescript
interface AgentDetailModalProps {
  agent: Agent;
  onClose: () => void;
  onSendMessage: (agentId: string) => void;
}
```

**Usage:**
```tsx
{selectedAgent && (
  <AgentDetailModal
    agent={selectedAgent}
    onClose={() => setSelectedAgent(null)}
    onSendMessage={handleMessage}
  />
)}
```

**Features:**

1. **Header** (Gradient blue)
   - Avatar (large, 64×64)
   - Agent name + ID
   - Team name
   - Last update time
   - Current status badge
   - Action buttons:
     - Send Message
     - Change Status
     - View Full Profile
   - Close button (×)

2. **Tabs**
   - Overview (active by default)
   - Performance (coming soon)
   - Activity (coming soon)

3. **Overview Tab Content**

   **Today's Stats:**
   - Calls: 12/45 (73%)
   - Talk Time: 1h 4m
   - Avg Handle: 5m 20s
   - CSAT: 4.8⭐

   **Current Session:**
   - Status badge
   - Duration: 45m 20s
   - Last Call: 2m ago
   - Breaks: 1/3

   **Status History:**
   - Timeline visualization
   - Shows transitions throughout day
   - Example: 09:00 Available → 10:30 Break → 10:45 Available

   **Recent Calls (Last 5):**
   - Time range
   - Duration
   - Status (Resolved/Escalated)
   - Clickable for details

4. **Footer**
   - Close button

**Dimensions:**
- Width: 800px
- Height: 600px
- Max-height: 90vh (responsive)

**Behavior:**
- Centered overlay
- Dark backdrop (50% opacity)
- Click outside to close
- ESC key to close
- Smooth fade-in animation

**Animations:**
```css
/* Entry */
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 200ms ease-out;
}

/* Exit */
.modal-exit {
  opacity: 1;
  transform: scale(1);
}

.modal-exit-active {
  opacity: 0;
  transform: scale(0.95);
  transition: all 200ms ease-in;
}
```

---

## Main Views

### AgentDashboard

**Purpose:** Main dashboard for call center agents.

**Location:** `/components/AgentDashboard.tsx`

**Props:** None (self-contained)

**Usage:**
```tsx
<AgentDashboard />
```

**Layout:**

```
┌─────────────────────────────────────────┐
│ HEADER (60px, sticky)                   │
│ Logo | Status | Bell | User | Settings  │
├────────────────────┬────────────────────┤
│ LEFT (70%)         │ RIGHT (30%)        │
│                    │                    │
│ Stats Widget       │ Message Center     │
│ (240px)            │ (Full Height)      │
│                    │                    │
│ Quick Actions      │ - Header           │
│ (120px)            │ - Filters          │
│                    │ - Messages         │
│ Schedule           │ - Compose          │
│ (180px)            │                    │
│                    │ (Sticky scroll)    │
│ Tips Widget        │                    │
│ (160px)            │                    │
└────────────────────┴────────────────────┘
│ Floating Status (bottom-right)          │
│ 🟢 Available | F2-F4 for status         │
└─────────────────────────────────────────┘
```

**Components Used:**
- StatusDropdown (header)
- PersonalStatsWidget
- MessageCenter
- QuickActions
- UpcomingSchedule
- TipsWidget
- Floating status indicator

**State Management:**
```typescript
const [currentStatus, setCurrentStatus] = useState<Status>('available');
const [messages, setMessages] = useState<Message[]>([...]);
```

**Features:**
- Real-time stats updates
- Toast notifications
- Message filtering
- Quick status changes
- Keyboard shortcuts ready

---

### SupervisorDashboard

**Purpose:** Main dashboard for team supervisors.

**Location:** `/components/SupervisorDashboard.tsx`

**Props:** None (self-contained)

**Usage:**
```tsx
<SupervisorDashboard />
```

**Layout:**

```
┌───────────────────────────────────────────┐
│ HEADER (60px, sticky)                     │
│ Logo | Team | Send Msg | Bell | User | ⚙  │
├───────────────────────────────────────────┤
│ METRICS DASHBOARD (120px)                 │
│ [Total] [Online] [Calls] [Time] [CSAT]    │
│ SLA Progress Bar                          │
├───────────────────────────────────────────┤
│ ALERTS PANEL (collapsible)                │
│ ⚠️ Active alerts requiring attention       │
├───────────────────────────────────────────┤
│ FILTERS BAR (50px)                        │
│ [All][Available][Busy][Break][Offline]    │
│ Search | Sort | View                      │
├───────────────────────────────────────────┤
│ AGENT CARDS GRID                          │
│ ┌────┬────┬────┬────┐                     │
│ │ A1 │ A2 │ A3 │ A4 │ (Row 1)             │
│ ├────┼────┼────┼────┤                     │
│ │ A5 │ A6 │ A7 │ A8 │ (Row 2)             │
│ └────┴────┴────┴────┘                     │
│                                           │
│ [Show 4 Offline Agents ▾]                 │
└───────────────────────────────────────────┘
```

**Components Used:**
- MetricsDashboard
- AlertPanel
- AgentCard (grid of 8)
- AgentDetailModal (on demand)

**State Management:**
```typescript
const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all');
const [showOffline, setShowOffline] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [alerts, setAlerts] = useState<Alert[]>([...]);
```

**Features:**
- Real-time metrics
- Agent filtering
- Search functionality
- Alert management
- Quick messaging
- Detail modal
- Collapsible offline agents

**Grid Responsiveness:**
```css
/* Desktop (1440px+) */
.agent-grid { grid-template-columns: repeat(4, 1fr); }

/* Laptop (1024px-1439px) */
@media (max-width: 1439px) {
  .agent-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Tablet (768px-1023px) */
@media (max-width: 1023px) {
  .agent-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile (<768px) */
@media (max-width: 767px) {
  .agent-grid { grid-template-columns: 1fr; }
}
```

---

## Design Tokens Reference

All components use consistent design tokens from `/styles/tokens.ts`:

### Colors
```typescript
colors.statusAvailable    // #10B981
colors.statusBusy         // #F59E0B
colors.statusBreak        // #3B82F6
colors.statusOffline      // #6B7280
colors.primary600         // #2563EB
colors.gray200            // #E5E7EB
// ... and more
```

### Spacing
```typescript
spacing[2]   // 8px
spacing[4]   // 16px
spacing[6]   // 24px
spacing[8]   // 32px
```

### Typography
```typescript
typography.fontSize.sm     // 14px
typography.fontSize.base   // 16px
typography.fontSize['2xl'] // 24px
typography.fontWeight.semibold  // 600
```

---

## Common Patterns

### Toast Notifications

All components use Sonner for feedback:

```typescript
import { toast } from 'sonner@2.0.3';

// Success
toast.success('Status changed to Available');

// Error
toast.error('Failed to send message');

// Info
toast.info('New message received');

// With duration
toast.success('Message sent', { duration: 2000 });
```

### Loading States

Components handle loading gracefully:

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleAction = async () => {
  setIsLoading(true);
  try {
    await someAsyncAction();
    toast.success('Action completed');
  } catch (error) {
    toast.error('Action failed');
  } finally {
    setIsLoading(false);
  }
};
```

### Error Handling

Consistent error handling pattern:

```typescript
try {
  // Action
} catch (error) {
  console.error('Error:', error);
  toast.error(error.message || 'Something went wrong');
}
```

---

## Best Practices

### Component Creation

1. **Use TypeScript** - Always define props interface
2. **Extract reusable logic** - Create custom hooks
3. **Follow naming** - PascalCase for components
4. **Add comments** - Document complex logic
5. **Keep DRY** - Don't repeat yourself

### Styling

1. **Use Tailwind classes** - Avoid inline styles
2. **Follow spacing system** - Use 8px grid
3. **Be consistent** - Use design tokens
4. **Mobile-first** - Design for small screens first
5. **Accessibility** - Always meet WCAG AA

### Performance

1. **Lazy load** - Use React.lazy() for routes
2. **Memoize** - Use React.memo() for expensive renders
3. **Virtual scroll** - For long lists
4. **Debounce** - For search inputs
5. **Optimize images** - Use proper formats and sizes

---

*Last updated: October 16, 2025*
