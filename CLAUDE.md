# Auto-MD-V2 项目

## 项目简介

一个自动帮助大家统计工时编写 Markdown 的全栈 Web 应用。

## 技术栈

- **前端：** Next.js 14 + TypeScript + Material-UI
- **后端：** Next.js API Routes
- **数据库：** Vercel Postgres + Prisma ORM
- **认证：** NextAuth.js + GitHub OAuth
- **部署：** Vercel
- **开发工具：** ESLint + Prettier + Jest + Turbopack

## 项目结构

```
/
├── src/
│   ├── app/              # Next.js App Router 页面
│   ├── components/       # 可复用组件
│   ├── lib/             # 工具函数和配置
│   ├── types/           # TypeScript 类型定义
│   └── hooks/           # 自定义 React hooks
├── public/              # 静态资源
├── prisma/              # 数据库 schema 和迁移
└── .env.local           # 环境变量
```

## 开发命令

```bash
# 开发服务器 (使用 Turbopack)
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 类型检查
npm run typecheck
```

## 环境变量

```env
# NextAuth
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# 数据库
DATABASE_URL=your_postgres_connection_string
```

## 开发进度

- [x] 项目初始化
- [x] Next.js + TypeScript 配置
- [x] Material-UI 集成
- [x] GitHub OAuth 认证配置
- [x] 登录页面
- [x] 首页仪表板
- [x] 认证中间件和路由保护
- [x] ESLint + Prettier 配置
- [ ] 数据库设计 (Prisma + Vercel Postgres)
- [ ] Markdown 编辑器
- [ ] 文档管理功能
- [ ] 共识统计功能
- [ ] 协作者邀请功能

## Git 工作流

- 主分支：`main`
- 开发分支：`develop`
- 功能分支：`feature/功能名称`
