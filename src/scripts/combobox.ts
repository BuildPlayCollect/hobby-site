// Swaps the browser's own <datalist> dropdown (dark and grey on many computers) for a pick list
// that matches the site theme. Without JavaScript the plain datalist still works.
// Picking a name fires the same 'input' and 'change' events typing would, so page code needn't change.
import '../styles/combobox.css';

const MAX = 60; // enough to scroll through, small enough to stay quick on phones

let uid = 0;

export function enhanceDatalists(root: ParentNode = document) {
  root.querySelectorAll<HTMLInputElement>('input[list]').forEach((input) => {
    const list = document.getElementById(input.getAttribute('list')!) as HTMLDataListElement | null;
    if (!list) return;
    const options = [...list.options].map((o) => o.value);
    input.removeAttribute('list');
    attach(input, options);
  });
}

function attach(input: HTMLInputElement, options: string[]) {
  const id = `cb-${++uid}`;
  const wrap = document.createElement('span');
  wrap.className = 'cb';
  input.replaceWith(wrap);
  wrap.append(input);
  const pop = document.createElement('ul');
  pop.className = 'cb-pop';
  pop.id = id;
  pop.setAttribute('role', 'listbox');
  pop.hidden = true;
  wrap.append(pop);
  input.classList.add('cb-input');
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('aria-controls', id);
  input.setAttribute('aria-expanded', 'false');

  let shown: string[] = [];
  let active = -1;

  const close = () => {
    pop.hidden = true;
    active = -1;
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
  };

  const highlight = (i: number) => {
    pop.querySelector('.is-active')?.classList.remove('is-active');
    active = i;
    const li = pop.children[i] as HTMLElement | undefined;
    if (!li) return input.removeAttribute('aria-activedescendant');
    li.classList.add('is-active');
    input.setAttribute('aria-activedescendant', li.id);
    li.scrollIntoView({ block: 'nearest' });
  };

  // showAll: on focus or click, a box that already holds a pick lists every name, so you can swap it.
  const render = (showAll = false) => {
    let q = input.value.trim().toLowerCase();
    if (showAll && options.some((o) => o.toLowerCase() === q)) q = '';
    // Names that start with what you typed come first, then names that contain it anywhere.
    const starts = options.filter((o) => o.toLowerCase().startsWith(q));
    const contains = q ? options.filter((o) => !o.toLowerCase().startsWith(q) && o.toLowerCase().includes(q)) : [];
    shown = [...starts, ...contains].slice(0, MAX);
    // Nothing to suggest, or the box already holds an exact pick: keep the list closed.
    if (!shown.length || (shown.length === 1 && shown[0].toLowerCase() === q)) return close();
    const current = input.value.trim().toLowerCase();
    pop.replaceChildren(...shown.map((name, i) => {
      const li = document.createElement('li');
      li.id = `${id}-${i}`;
      li.setAttribute('role', 'option');
      if (name.toLowerCase() === current) li.setAttribute('aria-selected', 'true');
      const at = q ? name.toLowerCase().indexOf(q) : -1;
      if (at >= 0) {
        const b = document.createElement('b');
        b.textContent = name.slice(at, at + q.length);
        li.append(name.slice(0, at), b, name.slice(at + q.length));
      } else li.textContent = name;
      return li;
    }));
    pop.hidden = false;
    active = -1;
    input.setAttribute('aria-expanded', 'true');
  };

  const pick = (name: string) => {
    input.value = name;
    close();
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  input.addEventListener('focus', () => render(true));
  input.addEventListener('click', () => { if (pop.hidden) render(true); });
  input.addEventListener('input', (e) => { if (e.isTrusted) render(); });
  input.addEventListener('blur', close);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (pop.hidden) render();
      if (!shown.length) return;
      const step = e.key === 'ArrowDown' ? 1 : -1;
      highlight((active + step + shown.length) % shown.length);
    } else if (e.key === 'Enter' && !pop.hidden && active >= 0) {
      e.preventDefault();
      pick(shown[active]);
    } else if (e.key === 'Escape' && !pop.hidden) {
      e.preventDefault();
      close();
    }
  });
  // mousedown, not click, so the box keeps focus and doesn't close the list first.
  pop.addEventListener('mousedown', (e) => {
    const li = (e.target as HTMLElement).closest('li');
    if (!li) return;
    e.preventDefault();
    pick(shown[[...pop.children].indexOf(li)]);
  });
}
