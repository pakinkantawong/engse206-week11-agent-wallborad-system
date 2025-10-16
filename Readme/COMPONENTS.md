# 📦 เอกสารอธิบายคอมโพเนนต์ (Component Documentation)
เอกสารนี้อธิบายรายละเอียดทั้งหมดของ **คอมโพเนนต์ (Components)** ที่ใช้ในระบบ **Agent Wallboard**

---

## 📚 สารบัญ (Table of Contents)
### 🧩 Shared Components
- StatusBadge  
- StatusDropdown  

### 🧑 Agent Dashboard Components
- PersonalStatsWidget  
- MessageCenter  
- QuickActions  
- UpcomingSchedule  
- TipsWidget  

### 👔 Supervisor Dashboard Components
- MetricsDashboard  
- AgentCard  
- AlertPanel  
- AgentDetailModal  

### 🖥️ Main Views
- AgentDashboard  
- SupervisorDashboard  

---

## 🧩 Shared Components

### 🟢 StatusBadge
**วัตถุประสงค์:** แสดงสถานะของ Agent ด้วยรูปแบบและสีที่สอดคล้องกัน

**ที่อยู่ไฟล์:** `/components/StatusBadge.tsx`

**Props:**
```ts
interface StatusBadgeProps {
  status: 'available' | 'busy' | 'break' | 'offline';
  showIcon?: boolean;  // ค่าเริ่มต้น: true
  size?: 'sm' | 'md' | 'lg';  // ค่าเริ่มต้น: 'md'
}
```

**การใช้งาน:**
```jsx
<StatusBadge status="available" />
<StatusBadge status="busy" showIcon={false} />
<StatusBadge status="break" size="lg" />
```

**ลักษณะการออกแบบ:**
- ป้ายโค้งมน (Pill)
- สีพื้นและข้อความตามสถานะ
- แสดงไอคอน + ข้อความ
- พื้นหลังโปร่ง 10% ของสีสถานะ

| ขนาด | ตัวอักษร | Padding |
|-------|------------|----------|
| sm | 12px | 8px |
| md | 14px | 12px |
| lg | 16px | 16px |

**ตัวอย่างผลลัพธ์:**
```
🟢 Available
🟠 Busy
🔵 Break
⚫ Offline
```

**การเข้าถึง (Accessibility):**
✅ ใช้ “สี + ไอคอน + ข้อความ”  
✅ Contrast ≥ 3.8:1  
✅ รองรับ Screen Reader  

---

### 🔽 StatusDropdown
**วัตถุประสงค์:** เปลี่ยนสถานะของ Agent ได้อย่างรวดเร็ว

**ไฟล์:** `/components/StatusDropdown.tsx`

**Props:**
```ts
interface StatusDropdownProps {
  currentStatus: Status;
  onStatusChange: (status: Status) => void;
}
```

**ตัวอย่างการใช้งาน:**
```jsx
<StatusDropdown 
  currentStatus={currentStatus}
  onStatusChange={handleStatusChange}
/>
```

**คุณสมบัติ:**
- แสดงเมนูสถานะทั้งหมด
- ✓ ที่สถานะปัจจุบัน
- ปิดเมื่อเลือกหรือคลิกนอกเมนู
- ปุ่มเปลี่ยนสีตามสถานะ

**การใช้งานคีย์บอร์ด:**
- Enter → เปิดเมนู
- ↑↓ → เลื่อน
- Enter → เลือก
- ESC → ปิด

---

## 🧑 Agent Dashboard Components

### 📊 PersonalStatsWidget
**วัตถุประสงค์:** แสดงสถิติการทำงานของ Agent แบบเรียลไทม์

**ไฟล์:** `/components/PersonalStatsWidget.tsx`

**Props:**
```ts
interface PersonalStatsWidgetProps {
  stats: {
    callsToday: number;
    callsTarget: number;
    avgHandleTime: string;
    avgHandleTimeDiff: string;
    satisfaction: number;
    satisfactionDiff: number;
  };
}
```

**ตัวอย่าง:**
```jsx
<PersonalStatsWidget stats={{
  callsToday: 12,
  callsTarget: 45,
  avgHandleTime: '5m 32s',
  avgHandleTimeDiff: '-18s',
  satisfaction: 4.8,
  satisfactionDiff: 0.2,
}} />
```

**คุณสมบัติ:**
- พื้นหลัง Gradient ฟ้า
- แถบ Progress
- ตัวเลขใหญ่ / ลูกศรแนวโน้ม ↑↓
- ปุ่ม “View Details”
- แนวคิด Goal Setting + Gamification

---

### 💬 MessageCenter
**วัตถุประสงค์:** กล่องข้อความพร้อมระบบกรองและส่งข้อความด่วน

**ไฟล์:** `/components/MessageCenter.tsx`

**Props:**
```ts
interface MessageCenterProps {
  messages: Message[];
  onMarkAsRead: (messageId: string) => void;
  onSendMessage: (to: string, message: string) => void;
}
```

**คุณสมบัติ:**
- Tabs: All / Unread / Urgent  
- ข้อความที่ยังไม่อ่านมีขอบแดง
- Quick Compose พร้อมเทมเพลต
- Scroll โหลดข้อความอัตโนมัติ

**CSS ตัวอย่าง:**
```css
.message-unread {
  border-left: 4px solid #DC2626;
  background: #FEF2F2;
  font-weight: 600;
}
.message-read {
  border-left: 4px solid #E5E7EB;
  background: #FFFFFF;
}
```

---

### ⚡ QuickActions
**วัตถุประสงค์:** ปุ่มลัดสำหรับการทำงานที่ใช้บ่อย

**ไฟล์:** `/components/QuickActions.tsx`

**ฟีเจอร์:**
- 📋 Knowledge Base
- 📞 Call History
- 📊 My Reports
- ❓ Request Help

**ลักษณะ:** กริด 2×2 พร้อมสี Hover แตกต่างกัน

---

### 🗓️ UpcomingSchedule
**วัตถุประสงค์:** แสดงตารางพักและประชุมในรูป Timeline

**ไฟล์:** `/components/UpcomingSchedule.tsx`

**ตัวอย่าง:**
```jsx
<UpcomingSchedule schedule={[
  { id: '1', time: '10:30', title: 'Break', type: 'break', duration: '15 mins' },
  { id: '2', time: '11:00', title: 'Team Meeting', type: 'meeting', location: 'Conf. B' },
]} />
```

**ลักษณะการแสดงผล:**
```
10:30 ──●── Break (15 mins) ☕
11:00 ──●── Team Meeting 📅 Conf. B
```

---

### 💡 TipsWidget
**วัตถุประสงค์:** แสดงเคล็ดลับและคีย์ลัดการใช้งาน

**ดีไซน์:**  
พื้นเหลือง (#FEF3C7), ขอบเหลืองเข้ม (#FCD34D), ไอคอน 💡  
เนื้อหา:  
- F2 → Available  
- F3 → Busy  
- F4 → Break  
- Ctrl+M → Messages  

---

## 👔 Supervisor Dashboard Components

### 📈 MetricsDashboard
**วัตถุประสงค์:** แสดงสถิติรวมของทีม

**Props:**
```ts
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

**ลักษณะ:**
```
👥 12 | ✅ 8 | 📞 147 | ⏱️ 4m | ⭐ 4.7
SLA: 94% ▰▰▰▰▰▰▰▰▰▱ (Target: 95%) ⚠️
```

---

### 🧑‍💻 AgentCard
**วัตถุประสงค์:** แสดงสถานะและข้อมูลของพนักงานในรูปแบบการ์ด

**คุณสมบัติ:**
- แถบสถานะซ้าย 4px
- ชื่อ + รหัส
- ปุ่ม 💬 ส่งข้อความ
- ไอคอน 🔥 / ⏰
- Hover → ยกสูง + ปุ่มเพิ่มเติม

---

### 🚨 AlertPanel
**วัตถุประสงค์:** แสดงการแจ้งเตือนของทีมที่ต้องจัดการทันที

**ประเภท:** ⚠️ Warning / 🔴 Critical / ℹ️ Info

**การกระทำ:** [Send Message] [View Detail] [Dismiss]

**ดีไซน์:** พื้นหลัง #FEF3C7, ขอบ #F59E0B, มุมโค้ง 12px

---

### 🧭 AgentDetailModal
**วัตถุประสงค์:** หน้าต่างรายละเอียดของ Agent แบบเต็มหน้าจอ

**ขนาด:** 800×600px  
**แท็บ:** Overview / Performance / Activity  
**ฟีเจอร์:**  
- แสดงสถิติวันนี้  
- ประวัติสถานะ  
- รายการสาย 5 ล่าสุด  
- ปิดได้ด้วย ESC / คลิกนอกกล่อง  

**แอนิเมชัน:** Fade-in/out 200ms

---

## 🖥️ Main Views

### 🧑 AgentDashboard
- Header: Logo | Status | Bell | User  
- ซ้าย: Stats / QuickActions / Schedule / Tips  
- ขวา: Message Center  
- มุมล่าง: Floating Status  

---

### 👔 SupervisorDashboard
- Header: Logo | Team | Msg | Bell | User  
- Metrics Dashboard  
- Alerts Panel  
- Filters Bar  
- Agent Grid (8 คน)  
- Detail Modal  

**Responsive Layout:**
- Desktop: 4 คอลัมน์  
- Laptop: 3 คอลัมน์  
- Tablet: 2 คอลัมน์  
- Mobile: 1 คอลัมน์  

---

## 🎨 Design Tokens Reference
**ไฟล์:** `/styles/tokens.ts`

### Colors
```
statusAvailable = #10B981
statusBusy = #F59E0B
statusBreak = #3B82F6
statusOffline = #6B7280
primary600 = #2563EB
gray200 = #E5E7EB
```

### Spacing
```
spacing[2] = 8px
spacing[4] = 16px
spacing[6] = 24px
spacing[8] = 32px
```

### Typography
```
fontSize.sm = 14px
fontSize.base = 16px
fontSize.2xl = 24px
fontWeight.semibold = 600
```

---

## ⚙️ Common Patterns

### 🔔 Toast Notifications
ใช้ **Sonner** สำหรับแจ้งเตือน:
```js
toast.success('Status changed');
toast.error('Failed to send message');
toast.info('New message received');
```

---

### ⏳ Loading States
```js
const [isLoading, setIsLoading] = useState(false);
try {
  await action();
  toast.success('Done');
} catch (err) {
  toast.error('Failed');
} finally {
  setIsLoading(false);
}
```

---

### ❌ Error Handling
```js
try {
  // some action
} catch (error) {
  console.error(error);
  toast.error(error.message || 'Something went wrong');
}
```

---

## 🧭 Best Practices

### 🧱 Component Creation
- ใช้ TypeScript เสมอ  
- แยก logic ซ้ำเป็น custom hooks  
- ชื่อคอมโพเนนต์ใช้ PascalCase  
- ใส่คอมเมนต์ในส่วนซับซ้อน  
- อย่าซ้ำโค้ด (DRY)

### 🎨 Styling
- ใช้ Tailwind CSS  
- อิงระบบ 8px Grid  
- ยึด Design Tokens  
- Mobile-first  
- ผ่าน WCAG AA

### ⚡ Performance
- React.lazy() สำหรับโหลดช้า  
- React.memo() สำหรับ render หนัก  
- Virtual Scroll สำหรับรายการยาว  
- Debounce สำหรับช่องค้นหา  
- ปรับรูปภาพให้เหมาะสม  

---

📅 **อัปเดตล่าสุด:** 16 ตุลาคม 2025
