import React from 'react'

export default function Modal({ open, title, children, onClose }){
  if (!open) return null
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header>
          <strong>{title}</strong>
          <button className="pill" onClick={onClose}>Stäng</button>
        </header>
        <div>
          {children}
        </div>
        <div className="actions">
          <button className="primary" onClick={onClose}>Ok</button>
        </div>
      </div>
    </div>
  )
}

