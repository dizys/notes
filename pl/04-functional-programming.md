---
sidebarDepth: 3
---

# Functional Programming

> Lecture slide: [click here](https://www.kdocs.cn/p/105324573301)

Overview of the lambda calculus and Scheme.
<br>
Readings: Scott, ch. 10 (including 10.6.1 on the CD), Dybvig ch. 1,2 (optional)

[[toc]]

## λ-Calculus

A Turing complete model of computation that has its syntax and reduction rules. It is the basis for functional languages.

### Syntax

ç-calculus has variables, abstraction and application.

**Variables**: lower-case letters. Such as `x`.
<br>
**Abstraction**: (definition of function) `λx.M`, `x` being the function parameter, `M` being the function body.
<br>
**Application**: (invocation of function) `M N`. Call function `M` with the argument `N`.

Abstraction is _right-associative_, application is _left-associative_. And application has precedence over abstraction. (For example,`λx. y λx. z` means `λx.(y (λx.z))`)

### Free and bound variables

In term `λx.M`, the scope of `x` is `M`. So, we call `x` bound in `M`. The variables that are not bound are _free_.

### α-conversion

Renaming bound variables. Usually used to avoid name collision.

```
λy.(...y...) → λw.(...w...)
```

### β-reduction

Applying the argument and calling the function.

```
(λx.M) N → [x→N]M
```

`[x→N]M` means `M` with all <span style="color:red">bound</span> occurences of `x` replaced by `N`.
<br>
**Restriction**: `N` should not have any free variables which are bound in `N`.

### Normal form

An expression that cannot be β-reduced any further is a normal form.

Not everything has a normal form. For example, `(λz.z z)(λz.z z)` reduces to itself which will result in infinite application.

### Evaluation strategies

> Slide page 7

For example, `(λx.λy.yxx)((λx.x)(λy.z))`

1. normal-order: reduct the outermost "redex" first.

```
[x→(λx.x)(λy.z)](λy.yxx) → λy.y((λx.x)(λy.z))((λx.x)(λy.z)
```

2.applicative-order: arguments to a function evaluated first, from left to right.

```
(λx.λy.yxx)([x→(λy.z)]x) → (λx.λy.yxx)((λy.z))
```

**Some observations:**

- If a lambda reduction terminates, it terminates to the same reduced expression regardless of reduction order.
- If a terminating lambda reduction exists, normal order evaluation will terminate.

### η-reduction

η(eta)-reduction is used to eliminate useless variables.

```
(λx.M x) → M
```

### Computational power

The untyped λ-calculus is Turing complete.

**Numbers and numerals**: number is an abstract idea, numeral is the representation of a number.

**Booleans**:

```
TRUE   ≡  λa.λb.a
FALSE  ≡  λa.λb.b

IF     ≡  λc.λt.λe.(cte)

AND    ≡  λm.λn.λa.λb.m(nab)b
OR     ≡  λm.λn.λa.λb.ma(nab)
NOT    ≡  λm.λa.λb.mba
```

**Arithmetic**:

Some numerals

```
⌜0⌝   ≡  λfx.x
⌜1⌝   ≡  λfx.fx
⌜2⌝   ≡  λfx.f(fx)
⌜3⌝   ≡  λfx.f(f(fx))
```

Some operations

```
ISZERO  ≡  λn.n(λx.FALSE)TRUE
SUCC    ≡  λnfx.f(nfx)    // n+1
PRED    ≡  λn.n(λgk.(g⌜1⌝)(λu.PLUS(gk)⌜1⌝)k)(λv.⌜0⌝)⌜0⌝ // n-1
PLUS    ≡  λmnfx.mf(nfx)  // m+n
MULT    ≡  λmnf.m(nf)     // m*n
EXP     ≡  λmn.nm         // n^m
```

## Scheme overview

- [Yet Another Scheme Tutorial](https://www.kancloud.cn/kancloud/yast-cn/64461) (Chinese)

`symbol?`
<br>
`number?`
<br>
`pair?`
<br>
`list?`
<br>
`null?`
<br>
`zero?`

### List

`(cons 'a '(b))` => list `(a b)`
<br>
`(cons 'a 'b)` => dotted pair `(a . b)`

`car`: get head of list.
<br>
`cdr`: get rest of list.
<br>
`cons`: perpend an element to a list.
<br>
`'()`: null list.

#### List decomposition

<br>

```scheme
(car '(this is a list of symbols))
=> this

(cdr '(this is a list of symbols))
=> (is a list of symbols)

(cdr '(this that))
=> (that) ; a list

(cdr '(singleton))
=> () ; the empty list

(car '())
=> Error: car expects argument of type<pair>; given()
```

`(cadr xs)` is `(car (cdr xs))`
<br>
`(cdddr xs)` is `(cdr (cdr (cdr xs)))`

#### List building

<br>

```scheme
(cons 'this '(that and the other))
=> (this that and the other)

(cons 'a '())
=> (a)
```

shortcut: `(list 'a 'b 'c 'd 'e)`

### Quoting data (`'...`)

`quote` or `'` to describe data.

```scheme
(quote (1 2 3 4))
(quote (Baby needs a new pair of shoes))
'(this also works)
```

### Booleans

`#t`: true.
<br>
`#f`: false.

Any value not equal to `#f` is considered to be true.

### Simple control structures

#### Conditional

<br>

```scheme
(if condition expr1 expr2)
```

#### Generalized form

<br>

```scheme
(cond
  (pred1 expr1)
  (pred2 expr2)
  ...
  (else exprn))
```

### Global definitions

`define` is a special function that only can be used at the top level to create global variables.

```scheme
; (define name value)
(define x 15)
(define sqr (lambda (n) (* n n))

; (define (name ...parameters) body)
(define (sqr n) (* n n))
```

### Locals: `let`, `let*` and `letrec`

Basic `let` skeleton:

```scheme
(let
  ((v1 init1) (v2 init2) ... (vn initn))
  body)
```
