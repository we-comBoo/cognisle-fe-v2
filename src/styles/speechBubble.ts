function POSITION({ position }: { position: 'left' | 'right' }): string {
  if (position === 'right') {
    return `
  --_p: 100%;
  border-bottom-right-radius: 0 0;
  place-self: end;
  `
  } else {
    return `
  --_p: 0;
  border-bottom-left-radius: 0 0;
  place-self: start;
  `
  }
}

function BACKGROUND({
  position,
  isOwner = false,
}: {
  position: 'left' | 'right'
  isOwner?: boolean
}) {
  if (isOwner) {
    return `
background: var(--color-yellow-100);
    `
  }

  if (position === 'left') {
    return `
background: var(--color-green-300);
    `
  } else if (position === 'right') {
    return `
background: var(--color-green-400);
    `
  }
}

function COLOR({
  position,
  isOwner = false,
}: {
  position: 'left' | 'right'
  isOwner?: boolean
}) {
  if (isOwner) {
    return `
color:  var(--color-green-400);
    `
  }

  if (position === 'left') {
    return `
color: var(--color-green-400);
    `
  } else if (position === 'right') {
    return `
color: var(--color-yellow-100);
    `
  }
}

export { POSITION, BACKGROUND, COLOR }
