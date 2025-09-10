import Reveal from './Reveal'

export default function Docs(){
  return (
    <section id="docs">
      <div className="container glass" style={{ padding: 24 }}>
        <Reveal>
          <h2 style={{ marginTop: 0 }}>Developer quickstart</h2>
          <p className="muted">Install the SDK and create a charge.</p>
        </Reveal>
        <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', gap: 16 }}>
          <div className="code"><pre style={{ margin: 0 }}><code>{`npm i flowpay

import { createCharge } from 'flowpay'

await createCharge({
  amount: 4200,
  currency: 'usd',
  source: 'tok_visa',
})`}</code></pre></div>
          <div className="code"><pre style={{ margin: 0 }}><code>{`curl https://api.flowpay.dev/v1/charges \
  -H "Authorization: Bearer sk_test_123" \
  -d amount=4200 \
  -d currency=usd \
  -d source=tok_visa`}</code></pre></div>
        </div>
      </div>
    </section>
  )
}
