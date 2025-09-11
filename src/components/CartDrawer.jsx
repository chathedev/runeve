import React from 'react'

export default function CartDrawer({ open, items, onInc, onDec, onClose, onCheckout }){
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)
  return (
    <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="drawer-header">
        <strong>Varukorg</strong>
        <button className="pill" onClick={onClose}>Stäng</button>
      </div>
      <div className="drawer-body">
        {items.length === 0 && <div style={{color:'#98a2b3'}}>Din varukorg är tom.</div>}
        {items.map(it => (
          <div className="row" key={it.id}>
            <img src={it.image} alt={it.name} />
            <div className="grow">
              <div style={{fontWeight:600}}>{it.name}</div>
              <div className="meta">{it.price.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
            </div>
            <div className="qty">
              <button onClick={() => onDec(it.id)}>-</button>
              <div>{it.qty}</div>
              <button onClick={() => onInc(it.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="drawer-footer">
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
          <div>Delsumma</div>
          <div>{total.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' })}</div>
        </div>
        <button className="checkout" onClick={onCheckout} disabled={items.length===0}>Till kassan</button>
      </div>
    </aside>
  )
}
