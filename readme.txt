src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── auth.module.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── user.entity.ts
│   └── users.module.ts
│
├── jobs/
│   ├── jobs.controller.ts
│   ├── jobs.service.ts
│   ├── job.entity.ts
│   └── jobs.module.ts
│
├── applications/
│   ├── applications.controller.ts
│   ├── applications.service.ts
│   ├── application.entity.ts
│   └── applications.module.ts
│
├── common/
│   ├── guards/
│   ├── decorators/
│   └── interceptors/
│
├── app.controller.ts
├── app.module.ts
└── main.ts

Key Features
User Roles: Admin, Employer, JobSeeker

Auth: JWT-based login and register

CRUD: Jobs, Users, Applications

Relations:

Employers can create/manage jobs

Job seekers can apply to jobs

Validation: DTOs with class-validator

Database: PostgreSQL (via TypeORM or Prisma)