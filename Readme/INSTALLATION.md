# 🛠️ คู่มือติดตั้งและตั้งค่า (Installation & Setup Guide)

> **เอกสารแนะนำการติดตั้งระบบ Agent Wallboard ฉบับสมบูรณ์**

---

## 📋 สารบัญ

- [เริ่มต้นอย่างรวดเร็ว (Quick Start)](#เริ่มต้นอย่างรวดเร็ว-quick-start)
- [ความต้องการเบื้องต้น (Prerequisites)](#ความต้องการเบื้องต้น-prerequisites)
- [การติดตั้งสำหรับการพัฒนา (Local Development Setup)](#การติดตั้งสำหรับการพัฒนา-local-development-setup)
- [การสร้างสำหรับใช้งานจริง (Building for Production)](#การสร้างสำหรับใช้งานจริง-building-for-production)
- [การติดตั้งด้วย Docker](#การติดตั้งด้วย-docker)
- [การตั้งค่า (Configuration)](#การตั้งค่า-configuration)
- [การแก้ไขปัญหา (Troubleshooting)](#การแก้ไขปัญหา-troubleshooting)
- [คำถามที่พบบ่อย (FAQ)](#คำถามที่พบบ่อย-faq)

---



### ตัวเลือกที่ การติดตั้งในเครื่อง (ใช้เวลา 5 นาที)

```bash
# 1. โคลนโปรเจ็กต์
git clone https://github.com/your-username/agent-wallboard.git
cd agent-wallboard

# 2. ติดตั้ง dependencies
npm install

# 3. รันเซิร์ฟเวอร์สำหรับพัฒนา
npm run dev

# 4. เปิดเบราว์เซอร์
# ไปที่ http://localhost:5173
```

✅ **เสร็จสิ้น!** ระบบพร้อมใช้งานในเครื่องของคุณแล้ว

---

## ✅ ความต้องการเบื้องต้น (Prerequisites)

| ซอฟต์แวร์ | เวอร์ชันขั้นต่ำ | แนะนำ | ดาวน์โหลด |
|-------------|----------------|----------|--------------|
| **Node.js** | 18.0.0 | 20.x LTS | [nodejs.org](https://nodejs.org) |
| **npm** | 9.0.0 | ล่าสุด | มาพร้อม Node.js |
| **Git** | 2.0.0 | ล่าสุด | [git-scm.com](https://git-scm.com) |

**ตรวจสอบเวอร์ชัน:**

```bash
node --version
npm --version
git --version
```

**ผลลัพธ์ตัวอย่าง:**

```
v20.10.0
npm 10.2.3
git version 2.42.0
```

✅ พร้อมสำหรับการติดตั้งต่อ

---

## 💻 การติดตั้งสำหรับการพัฒนา (Local Development Setup)

### ขั้นตอนที่ 1: โคลน Repository

```bash
git clone https://github.com/your-username/agent-wallboard.git
cd agent-wallboard
```

ตรวจสอบว่าอยู่ในโฟลเดอร์ที่ถูกต้อง:  
```bash
ls -la
# จะเห็น App.tsx, components/, styles/, เป็นต้น
```

### ขั้นตอนที่ 2: ติดตั้ง Dependencies

```bash
npm install
```

ระบบจะติดตั้งแพ็กเกจสำคัญ เช่น React 18+, TypeScript, Tailwind CSS v4, Lucide React, Shadcn/UI

### ขั้นตอนที่ 3: เริ่มเซิร์ฟเวอร์สำหรับพัฒนา

```bash
npm run dev
```

**ผลลัพธ์ที่คาดหวัง:**  
```
VITE v5.0.0 ready in 500 ms
Local: http://localhost:5173/
```

เมื่อเปิดเบราว์เซอร์ คุณจะเห็นหน้าหลักของระบบ Agent Wallboard

---

## 🏗️ การสร้างสำหรับใช้งานจริง (Building for Production)

```bash
npm run build
```

ระบบจะ:
1. ตรวจสอบ TypeScript
2. ย่อไฟล์และสร้าง build ที่พร้อมใช้งาน
3. สร้างโฟลเดอร์ `/dist`

โครงสร้างผลลัพธ์:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
```

### ทดสอบ build

```bash
npm run preview
```

เข้าใช้งานผ่าน `http://localhost:4173`

---

## 🐳 การติดตั้งด้วย Docker

### ตัวอย่าง Dockerfile

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

สร้างและรันคอนเทนเนอร์:

```bash
docker build -t agent-wallboard:latest .
docker run -d -p 5173:5173 agent-wallboard:latest
```

เข้าใช้งานที่ `http://localhost:5173`

---

## ⚙️ การตั้งค่า (Configuration)

สร้างไฟล์ `.env`:

```bash
VITE_APP_NAME=Agent Wallboard
VITE_APP_VERSION=2.0.0
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
VITE_ENABLE_REAL_TIME=true
VITE_ENABLE_NOTIFICATIONS=true
```

เข้าถึงค่าจากโค้ด:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🔧 การแก้ไขปัญหา (Troubleshooting)

### ❗ npm install ไม่สำเร็จ

**วิธีแก้ไข:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

### ❗ พอร์ต 5173 ถูกใช้งานแล้ว

**ตรวจสอบและปิดพอร์ต:**
```bash
lsof -ti:5173 | xargs kill -9
# หรือเปลี่ยนพอร์ต
npm run dev -- --port 3000
```

---

### ❗ Tailwind CSS ไม่ทำงาน

1. ตรวจสอบว่าได้ import `globals.css`
2. ตรวจสอบ path ใน `tailwind.config.js`
3. รีสตาร์ทเซิร์ฟเวอร์ด้วย `npm run dev`

---

### ❗ Build ล้มเหลว

1. ตรวจสอบ error จาก TypeScript:  
   ```bash
   npm run type-check
   ```
2. แก้ไขและรันใหม่ `npm run build`

---

## ❓ คำถามที่พบบ่อย (FAQ)

**ถาม:** ต้องติดตั้งโปรแกรมอะไรบ้าง?  
**ตอบ:** หากใช้ผ่าน Figma Make ไม่ต้องติดตั้ง แต่ถ้าพัฒนาในเครื่องต้องมี Node.js 18+

**ถาม:** ใช้ Node.js 16 ได้ไหม?  
**ตอบ:** ไม่ได้ ต้องอัปเดตเป็น Node.js 18 ขึ้นไป

**ถาม:** ใช้งานบน Windows ได้หรือไม่?  
**ตอบ:** ได้ รองรับ Windows 10/11, macOS และ Linux

**ถาม:** ต้องการ deploy ระบบอย่างไร?  
**ตอบ:** ใช้ `npm run build` แล้วนำโฟลเดอร์ `/dist` ไปเผยแพร่บน Vercel, Netlify หรือเซิร์ฟเวอร์ของคุณ

---

## 📚 แหล่งข้อมูลเพิ่มเติม

- [README.md](README.md) — ภาพรวมโครงการ  
- [USAGE-GUIDE.md](USAGE-GUIDE.md) — คู่มือการใช้งาน  
- [COMPONENTS.md](COMPONENTS.md) — เอกสาร API ของคอมโพเนนต์  
- [DESIGN-DECISIONS.md](DESIGN-DECISIONS.md) — เหตุผลการออกแบบ  

---
