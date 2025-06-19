import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../supabase/database.types'

export async function createClerkSupabaseClient() {
  const { getToken } = await auth()
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  const supabaseClient = createClient<Database>(
    supabaseUrl,
    supabaseKey,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await getToken({
            template: 'supabase',
          })

          const headers = new Headers(options?.headers)
          headers.set('Authorization', `Bearer ${clerkToken}`)

          return fetch(url, {
            ...options,
            headers,
          })
        },
      },
    }
  )

  return supabaseClient
}