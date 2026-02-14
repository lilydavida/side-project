"use server"

import { createClient } from '@/utils/supabase/server'

export async function searchMessyProducts(query: string) {
  const supabase = createClient()
  
  console.log(`🔍 Searching for: "${query}"`)

  const { data, error } = await supabase
    .from('aeo_demo_products')
    .select('*')
    .or(`title.ilike.%${query}%,body_html.ilike.%${query}%`)
    .limit(5)

  if (error) {
    console.error('❌ Supabase Search Error:', error)
    return []
  }

  console.log(`✅ Found ${data?.length || 0} results`)
  return data || []
}
