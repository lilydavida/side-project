import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// ⚠️ Vibe Check: Use SERVICE_ROLE_KEY to bypass RLS for seeding
// Add SUPABASE_SERVICE_ROLE_KEY to your .env.local and Vercel Project Settings
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! 
);

export async function GET() {
  const brands = ['COSRX', 'Innisfree', 'Beauty of Joseon', 'Laneige', 'Some By Mi', 'Dr. Jart+', 'Sulwhasoo', 'Etude House', 'Missha', 'Banila Co'];
  const types = ['Snail Mucin Essence', 'Green Tea Seed Serum', 'Ginseng Revival Toner', 'Water Sleeping Mask', 'AHA/BHA Miracle Toner', 'Ceramidin Cream', 'Volcanic Pore Clay Mask'];
  const messy_ingredients = [
    '<p>Water, Butylene Glycol, Snail Secretion Filtrate, Alcohol...</p>', // The HTML Trap
    'Aqua, Glycerin, Propanediol, 1,2-Hexanediol, Fragrance (Parfum)',     // The Conflict (Fragrance)
    'Centella Asiatica Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil', // The Good Stuff
    'Water, Alcohol Denat, PEG-60 Hydrogenated Castor Oil',                  // The Bad Stuff (Alcohol)
  ];
  const messy_tags = [
    'Best Seller, New Arrival, Dry Skin',
    'Sale, Anti-Aging, Night Routine',
    'Oily Skin, Acne Prone, Summer Essentials',
    'Sensitive, Alcohol-Free (marketing claim), Winter'
  ];

  const products = [];

  // 🚀 Generate 1,000 Messy Products
  for (let i = 0; i < 1000; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const ingredients = messy_ingredients[Math.floor(Math.random() * messy_ingredients.length)];
    
    products.push({
      title: `${brand} ${type} ${i + 1}`, // e.g. "COSRX Snail Mucin Essence 42"
      vendor: brand,
      product_type: type.split(' ').pop(), // e.g. "Essence"
      body_html: `<div><strong>Description:</strong> Amazing for glow.<br>${ingredients}</div>`,
      tags: messy_tags[Math.floor(Math.random() * messy_tags.length)],
      option1_name: Math.random() > 0.5 ? 'Size' : 'Volume', // Inconsistent naming
      option1_value: Math.random() > 0.5 ? '50ml' : '1.69 fl oz', // Inconsistent units
      price: (Math.random() * 50 + 10).toFixed(2),
      aeo_status: 'raw' // Ready for optimization
    });
  }

  // ⚡️ Bulk Insert (Batched to respect Supabase limits)
  const { error } = await supabase.from('aeo_demo_products').insert(products);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ 
    message: '✅ Successfully seeded 1,000 messy products!', 
    sample: products[0] 
  });
}
