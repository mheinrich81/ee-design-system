function CommandPalette({ open, onClose }) {
  if (!open) return null;
  const items = [
    { icon: "target",       label: "Create initiative",        shortcut: "I" },
    { icon: "check-square", label: "Record a decision",        shortcut: "D" },
    { icon: "file-text",    label: "Write a briefing",         shortcut: "B" },
    { icon: "flag",         label: "Add milestone",            shortcut: "M" },
    { icon: "users",        label: "Invite owner",             shortcut: "U" },
    { icon: "calendar",     label: "Jump to next milestone",   shortcut: "→" },
    { icon: "archive",      label: "Archive initiative…",      shortcut: "" },
  ];
  return (
    <div className="palette-scrim" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette__input">
          <i data-lucide="search"></i>
          <input placeholder="Type a command or search…" autoFocus />
          <kbd>esc</kbd>
        </div>
        <div className="palette__group">
          <div className="palette__group-label">Actions</div>
          {items.map((it, i) => (
            <div className="palette__item" key={i}>
              <i data-lucide={it.icon}></i>
              <span>{it.label}</span>
              {it.shortcut && <kbd className="palette__shortcut">{it.shortcut}</kbd>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.CommandPalette = CommandPalette;
