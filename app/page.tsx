export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Legal Compliance for GitHub Repos
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Repos for Missing<br />
          <span className="text-[#58a6ff]">Compliance Docs</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly detect missing privacy policies, terms of service, security policies, and contributing guidelines across your GitHub repositories — then generate ready-to-use templates in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            ["Privacy Policy", "PRIVACY.md"],
            ["Terms of Service", "TERMS.md"],
            ["Security Policy", "SECURITY.md"],
            ["Contributing Guide", "CONTRIBUTING.md"]
          ].map(([label, file]) => (
            <div key={file} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-mono text-xs mb-1">{file}</div>
              <div className="text-[#8b949e] text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repo scans",
              "Auto-generate document templates",
              "Privacy, Terms, Security & Contributing",
              "GitHub OAuth integration",
              "Detailed compliance reports",
              "Email scan summaries"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Scanning Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which documents does it check for?",
              "It scans for PRIVACY.md, TERMS.md, SECURITY.md, and CONTRIBUTING.md (plus common variants like SECURITY.txt and CODE_OF_CONDUCT.md) in the root and .github directories of each repository."
            ],
            [
              "Do you store my GitHub data?",
              "No. We only use your GitHub OAuth token to read repository metadata during a scan. We never store your code, tokens, or repository contents beyond the active session."
            ],
            [
              "Can I use the generated templates as-is?",
              "The templates are solid starting points tailored to your repo's language and license, but you should review them with a legal professional before publishing, especially for privacy policies and terms of service."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} GitHub README Compliance Checker. All rights reserved.
      </footer>
    </main>
  )
}
