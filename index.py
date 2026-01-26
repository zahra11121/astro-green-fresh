import json
import os
import subprocess

# ==============================
# CONFIG
# ==============================
DATA_PATH_JS = 'src/data/cities.js'
OUTPUT_DIR = 'src/pages/kota'

# ==============================
# ASTRO TEMPLATE (ESCAPED SAFE)
# ==============================
ASTRO_TEMPLATE = """---
/**
 * GENERATED FILE - DO NOT EDIT DIRECTLY
 * Kota: {name}
 * Mode: SSR Only — Safe Output
 */

import MainLayout from '@/layouts/MainLayout.astro';
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
import CityClientPage from '@/components/CityClientPage.astro';
import {{ MapPin }} from 'lucide-react';

import {{ jabodetabekCities }} from '@/data/cities';
import {{ vegetableData }} from '@/data/data.js'; 

const city = {city_data};

const title = `Supplier Sayur ${{city.name}} - CV Green Fresh Cipanas | Harga B2B`;
const description = `Layanan supply sayuran harian harga kompetitif untuk Hotel, Restoran, Cafe di wilayah ${{city.name}}.`;

const origin = "https://greenfresh.co.id";
const currentUrl = `${{origin}}/kota/${{city.slug}}`;

const jsonLd = {{
  "@context": "https://schema.org",
  "@graph": [
    {{
      "@type": "Service",
      "name": `Supplier Sayur Segar ${{city.name}}`,
      "provider": {{
        "@type": "LocalBusiness",
        "name": "CV Green Fresh Cipanas"
      }},
      "areaServed": {{
        "@type": "City",
        "name": city.name
      }},
      "description": description
    }}
  ]
}};

const currentIndex = jabodetabekCities.findIndex(c => c.slug === "{slug}");
const otherCities = [];
for (let i = 1; i <= 6; i++) {{
  const nextIndex = (currentIndex + i) % jabodetabekCities.length;
  otherCities.push(jabodetabekCities[nextIndex]);
}}
---

<MainLayout title={{title}} description={{description}}>
  <link rel="canonical" href={{currentUrl}} slot="head" />
  <script type="application/ld+json" slot="head" set:html={{JSON.stringify(jsonLd)}} />

  <div class="bg-white text-[#052c17] font-sans antialiased overflow-x-hidden reveal-container">
    <Header />

    <main>
      <section class="relative h-[50vh] min-h-[450px] flex items-center bg-[#052c17] overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=2000" 
            alt={{city?.name ? `Supplier Sayur ${{city.name}}` : "Supplier Sayur"}}
            class="w-full h-full object-cover opacity-60 brightness-[0.7]" 
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#052c17] to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-[1800px] mx-auto px-6 text-white">
          <div class="max-w-4xl reveal-up">
            <span class="px-3 py-1 bg-green-600 text-[10px] font-black tracking-[0.2em] uppercase rounded mb-4 inline-block">
              B2B Premium Supply
            </span>

            <h1 class="text-4xl md:text-7xl font-black uppercase leading-[0.95] mb-6 tracking-tighter">
              Fresh Produce <br/>
              <span class="text-green-400">Supplier ${{city.name}}</span>
            </h1>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <article class="prose prose-green max-w-none reveal-up">
            <h2 class="text-3xl font-black uppercase mb-6 text-[#052c17]">
              Mitra Distribusi Sayuran di ${{city.name}}
            </h2>

            <p class="text-lg text-slate-700">
              CV Green Fresh Cipanas melayani supplier sayur ${{city.name}} untuk Horeca, Rumah Sakit, Catering & bisnis kuliner.
            </p>
          </article>
        </div>
      </section>

      <div class="py-10 reveal-up">
        <div class="max-w-[1800px] mx-auto px-6">
          <CityClientPage city={{city}} vegetableData={{vegetableData}} />
        </div>
      </div>

      <section class="py-20 bg-slate-50 border-t border-green-100">
        <div class="max-w-[1800px] mx-auto px-6">
          <div class="mb-12">
            <h3 class="text-xs font-black text-[#166534] uppercase tracking-[0.4em] flex items-center gap-3">
              <MapPin size={{14}} /> Jangkauan Kami
            </h3>

            <h2 class="text-3xl font-black uppercase text-[#052c17]">
              Area Sekitar ${{city.name}}
            </h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {{otherCities.map((otherCity) => (
              <a href={{`/kota/${{otherCity.slug}}`}} class="group p-6 rounded-2xl border bg-white hover:bg-green-50 transition text-center">
                <span class="text-xs font-black uppercase tracking-wider group-hover:text-[#166534]">
                  {{otherCity.name}}
                </span>
              </a>
            ))}}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</MainLayout>

<style>
.reveal-up {{
  opacity: 1;
  transform: translateY(0);
  transition: all .8s cubic-bezier(.16,1,.3,1);
}}
</style>
"""

# ==============================
# LOAD DATA VIA NODE
# ==============================
def get_data_from_js():
    temp_node = 'temp_extract.mjs'
    node_code = f"import {{ jabodetabekCities }} from './{DATA_PATH_JS}'; console.log(JSON.stringify(jabodetabekCities));"

    with open(temp_node, 'w', encoding='utf-8') as f:
        f.write(node_code)

    try:
        result = subprocess.run(['node', temp_node], capture_output=True, text=True, check=True)
        return json.loads(result.stdout)
    except Exception as e:
        print("❌ Node extract failed:", e)
        return []
    finally:
        if os.path.exists(temp_node):
            os.remove(temp_node)

# ==============================
# GENERATOR
# ==============================
def generate():
    cities = get_data_from_js()
    if not cities:
        print("❌ No city data found.")
        return

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for item in cities:
        slug = item.get('slug')
        if not slug:
            continue

        safe_city_json = json.dumps(item, indent=2, ensure_ascii=False)

        content = ASTRO_TEMPLATE.format(
            name=item.get('name', 'Area'),
            slug=slug,
            city_data=safe_city_json
        )

        file_path = os.path.join(OUTPUT_DIR, f"{slug}.astro")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ Generated: {file_path}")

if __name__ == "__main__":
    generate()
