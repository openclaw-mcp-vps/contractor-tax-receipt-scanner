export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Scan Receipts.<br />
          <span className="text-[#58a6ff]">Maximize Tax Deductions.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TaxScan uses OCR and AI to extract, categorize, and organize your business expenses into IRS-compliant reports — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📷", title: "Snap & Extract", desc: "Point your camera at any receipt. OCR pulls every line item instantly." },
            { icon: "🤖", title: "AI Categorization", desc: "Expenses auto-tagged as travel, meals, software, and more per IRS Schedule C." },
            { icon: "📄", title: "Tax-Ready Reports", desc: "Export clean PDF or CSV summaries your accountant will love." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited receipt scans",
              "AI expense categorization",
              "IRS Schedule C reports",
              "Secure cloud storage",
              "CSV &amp; PDF export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of receipts can TaxScan read?",
              a: "TaxScan handles photos, PDFs, and email receipts from restaurants, hotels, software subscriptions, office supplies, and more."
            },
            {
              q: "Is my financial data secure?",
              a: "Yes. All data is encrypted at rest and in transit. We never sell your data and comply with SOC 2 security standards."
            },
            {
              q: "Can I use TaxScan reports with my accountant?",
              a: "Absolutely. Export a clean PDF or CSV summary organized by IRS category — ready to hand off or import into TurboTax."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} TaxScan. All rights reserved.
      </footer>
    </main>
  );
}
