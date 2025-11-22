import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* More sections will be added here */}
        <section className="py-24 px-8">
          <div className="container mx-auto text-center glass-effect rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-dark">
              🚀 האתר בבנייה
            </h2>
            <p className="text-xl text-light-grey max-w-2xl mx-auto">
              זוהי גרסת Preview ראשונה של האתר החדש של Multibrawn.
              <br />
              <br />
              המערכת מבוססת על <strong>Next.js 14 + TypeScript + Tailwind CSS</strong>
              <br />
              עם העיצוב המקורי: צבעים, פונטים, ו-glass morphism effects.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-right">
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-accent-primary">✅ הושלם</h3>
                <ul className="space-y-2 text-light-grey">
                  <li>• Next.js 14 Setup</li>
                  <li>• צבעי Multibrawn</li>
                  <li>• Header מרחף</li>
                  <li>• Hero עם Slideshow</li>
                  <li>• RTL Support</li>
                </ul>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-accent-secondary">⚙️ בתהליך</h3>
                <ul className="space-y-2 text-light-grey">
                  <li>• סוגי לוקיישנים</li>
                  <li>• דף טיפים</li>
                  <li>• גלריה</li>
                  <li>• צור קשר</li>
                  <li>• Footer</li>
                </ul>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-accent-purple">🔮 הבא</h3>
                <ul className="space-y-2 text-light-grey">
                  <li>• Sanity CMS</li>
                  <li>• SEO מלא</li>
                  <li>• Performance 95+</li>
                  <li>• Mobile Menu</li>
                  <li>• Deploy to Netlify</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
