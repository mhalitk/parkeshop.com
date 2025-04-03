# ParkeShop.com

Profesyonel parke ve zemin kaplama hizmetleri için modern web sitesi.

## Özellikler

- Next.js 14 ile geliştirilmiş modern web sitesi
- SEO dostu blog sistemi
- Otomatik içerik üretimi
- WhatsApp entegrasyonu
- Responsive tasarım
- Hızlı sayfa yüklenme süreleri

## Gereksinimler

- Node.js 20+
- npm veya yarn
- OpenAI API anahtarı

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/parkeshop.com.git
cd parkeshop.com
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. `.env` dosyasını oluşturun:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin ve gerekli API anahtarlarını ekleyin.

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

## Proje Yapısı

```
src/
├── app/              # Next.js app router sayfaları
├── components/       # React bileşenleri
├── content/         # Blog yazıları ve sayfa içerikleri
├── lib/             # Yardımcı fonksiyonlar
├── styles/          # Global stiller
└── types/           # TypeScript tip tanımlamaları
```

## Geliştirme

- `npm run dev`: Geliştirme sunucusunu başlatır
- `npm run build`: Production build oluşturur
- `npm run start`: Production sunucusunu başlatır
- `npm run lint`: Kod kalitesi kontrolü yapar

## Deployment

Proje Vercel üzerinde deploy edilecek şekilde yapılandırılmıştır. Vercel'e push yapıldığında otomatik olarak deploy edilecektir.

## Lisans

MIT 