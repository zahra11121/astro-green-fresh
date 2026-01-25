import requests
import json
import os

def push_to_indexnow():
    # --- KONFIGURASI ---
    base_url = "https://greenfresh.co.id"
    api_key = "f940eca476464acabfcbc885bb42001b"
    
    # Lokasi file data Anda (sesuaikan path jika berbeda)
    districts_path = './src/data/districts.json'
    
    # 1. Daftar Halaman Utama/Statis
    urls = [
        f"{base_url}/",
        f"{base_url}/produk",
        f"{base_url}/gallery",
        f"{base_url}/about",
        f"{base_url}/kota",
        f"{base_url}/area"
    ]

    # 2. Ambil data Area dari districts.json (dengan proteksi encoding)
    if os.path.exists(districts_path):
        try:
            with open(districts_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # Pastikan key 'districts' ada di JSON Anda
                if 'districts' in data:
                    for item in data['districts']:
                        if 'slug' in item:
                            urls.append(f"{base_url}/area/{item['slug']}")
                    print(f"✅ Berhasil memuat {len(data['districts'])} area.")
        except UnicodeDecodeError:
            print("❌ Error: Gagal membaca file karena masalah encoding. Gunakan UTF-8.")
        except Exception as e:
            print(f"❌ Error saat membaca JSON: {e}")
    else:
        print(f"⚠️ Warning: File {districts_path} tidak ditemukan.")

    # 3. Payload untuk IndexNow
    payload = {
        "host": "greenfresh.co.id",
        "key": api_key,
        "keyLocation": f"{base_url}/{api_key}.txt",
        "urlList": urls
    }

    print(f"🚀 Mengirim total {len(urls)} URL ke IndexNow...")

    # 4. Kirim ke API IndexNow (Pusat)
    headers = {"Content-Type": "application/json; charset=utf-8"}
    
    try:
        # Kita gunakan endpoint api.indexnow.org agar otomatis disebar ke Bing & Yandex
        response = requests.post(
            "https://api.indexnow.org/indexnow", 
            data=json.dumps(payload), 
            headers=headers,
            timeout=30 # Batas waktu tunggu server
        )

        # 5. Cek Hasil Respon
        if response.status_code == 200:
            print("✅ SUKSES: URL berhasil diproses oleh IndexNow.")
        elif response.status_code == 202:
            print("✅ DITERIMA: URL diterima dan akan segera diindeks.")
        elif response.status_code == 403:
            print(f"❌ TERLARANG (403): Cek apakah {api_key}.txt sudah ada di folder public.")
        else:
            print(f"❌ GAGAL: Status Code {response.status_code}")
            print(f"Detail: {response.text}")

    except requests.exceptions.RequestException as e:
        print(f"❌ Error Koneksi: {e}")

if __name__ == "__main__":
    push_to_indexnow()