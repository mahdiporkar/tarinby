# Tarinby Monorepo

This repository contains three Dockerized apps:
- Frontend: Next.js (mobile-first, RTL Persian)
- Backend: NestJS + PostgreSQL + Prisma
- Admin: React + Ant Design

## Quick Start
1) Create env files from examples:
- `apps/backend-nest/.env.example` -> `apps/backend-nest/.env`
- `apps/frontend-next/.env.example` -> `apps/frontend-next/.env`
- `apps/admin-antd/.env.example` -> `apps/admin-antd/.env`
- `.env.example` -> `.env`

2) Build and run everything:
```bash
docker-compose up --build
```

Services:
- Frontend: http://localhost:3000
- Backend: http://localhost:3007
- Admin: http://localhost:3010

## Example cURL
Login (buyer):
```bash
curl -X POST http://localhost:3007/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone":"5550001001","role":"BUYER"}'
```

Create a need:
```bash
curl -X POST http://localhost:3007/needs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"category":"PROPERTY","city":"Tehran","district":"1","budgetMin":80000,"budgetMax":120000,"attributes":{"beds":2,"size":90}}'
```

Get buyer matches:
```bash
curl -X GET http://localhost:3007/buyer/matches \
  -H "Authorization: Bearer <TOKEN>"
```

Seller send offer (mock payment):
```bash
curl -X POST http://localhost:3007/matches/<MATCH_ID>/offer \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <SELLER_TOKEN>" \
  -d '{"paymentConfirmed":true}'
```

Admin list matches (requires admin key):
```bash
curl -X GET http://localhost:3007/admin/matches \
  -H "x-admin-key: <ADMIN_KEY>"
```

## Notes
- Matching threshold is 70; scoring is simple and easy to tune.
- Contact phone numbers are only revealed after buyer acceptance.
- Prisma migrations run on backend startup.
