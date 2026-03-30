# Next.js Fullstack Validation Pattern

This is a recommended structure for **Server Actions + `lib/`** in Next.js apps with robust validation using **Zod**.

---

## Project Structure

```
app/
  posts/
    page.tsx
    actions.ts        ← Server Actions (boundary)
lib/
  posts.ts            ← business/domain logic
  posts.schema.ts     ← Zod schemas
db/
  index.ts
```

---

## Pattern Overview

1. **Boundary Validation** (Server Actions / API routes)
   - Parses **untrusted input** (FormData, JSON)
   - Uses **Zod schemas** for runtime checks
   - Converts input into **typed data** for `lib/`

2. **Domain Validation** (`lib/`)
   - Implements **business rules and invariants**
   - Accepts **already typed input**
   - Protects system from misuse (even internal calls)
   - Can optionally include critical schema parsing for safety

---

## Example: Zod Schema

```ts
// lib/posts.schema.ts
import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(10),
})

export type CreatePostInput = z.infer<typeof createPostSchema>
```

---

## Example: Server Action (Boundary)

```ts
// app/posts/actions.ts
'use server'

import { createPostSchema } from '@/lib/posts.schema'
import { createPost } from '@/lib/posts'

export async function createPostAction(formData: FormData) {
  const raw = {
    title: formData.get('title'),
    content: formData.get('content'),
  }

  const parsed = createPostSchema.parse(raw) // ✅ runtime validation
  return createPost(parsed)
}
```

---

## Example: `lib/` (Domain)

```ts
// lib/posts.ts
import type { CreatePostInput } from './posts.schema'
import { db } from '@/db'

export async function createPost(data: CreatePostInput) {
  // Business rules
  if (data.title.includes('spam')) {
    throw new Error('Spam not allowed')
  }

  const count = await db.post.count({ where: { userId: data.userId } })
  if (count > 100) {
    throw new Error('Post limit reached')
  }

  return db.post.create({ data })
}
```

---

## Key Takeaways

- **Server Actions** → boundary validation, type-safe input
- **`lib/`** → business rules, domain logic, system correctness
- **Do not treat `lib/` as a DB-only layer**
- Optional: critical schema parsing in `lib/` for extra safety
- Use Zod at boundaries, TypeScript types in domain