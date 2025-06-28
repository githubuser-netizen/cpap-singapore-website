import { createServerComponentClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Create Supabase client for middleware
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not found in middleware')
    return res
  }

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
    
    // Get session from request headers if available
    const token = req.headers.get('authorization')?.replace('Bearer ', '')
    if (token) {
      await supabase.auth.getUser(token)
    }
  } catch (error) {
    console.warn('Middleware Supabase error:', error)
  }
  
  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}