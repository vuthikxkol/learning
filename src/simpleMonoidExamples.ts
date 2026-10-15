import { Monoid, createMonoid } from './monoid.js';

export const stringMonoid: Monoid<string> = createMonoid(
  '',
  (a1, a2) => `${a1}${a2}`
);

export const sumMonoid: Monoid<number> = createMonoid(0, (a1, a2) => a1 + a2);

export const productMonoid: Monoid<number> = createMonoid(
  1,
  (a1, a2) => a1 * a2
);

export const booleanAndMonoid: Monoid<boolean> = createMonoid(
  true,
  (a1, a2) => a1 && a2
);

export const booleanOrMonoid: Monoid<boolean> = createMonoid(
  false,
  (a1, a2) => a1 || a2
);

export const arrayMonoid = <A>(): Monoid<readonly A[]> =>
  createMonoid<readonly A[]>([], (a1, a2) => a1.concat(a2));
