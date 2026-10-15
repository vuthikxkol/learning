export type Monoid<A> = {
  readonly zero: A;
  readonly op: (a1: A, a2: A) => A;
};

export const createMonoid = <A>(
  zero: A,
  op: (a1: A, a2: A) => A
): Readonly<Monoid<A>> =>
  Object.freeze({
    zero,
    op: (a1, a2) => op(a1, a2)
  });
