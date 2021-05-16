# Overview

## Programming paradigms

### Imperative (von Neumann)

Such as: Fortran, Pascal, C, Ada

- programs have mutable storage (state) modified by assignments
- the most common and familiar paradigm

### Functional (applicative)

Such as: Scheme, Lisp, ML, Haskell

- functions are first-class values
- side effects (e.g., assignments) discouraged

### Logical (declarative)

Such as: Prolog, Mercury

- programs are sets of assertions and rules

### Object-Oriented

Such as: Simula 67, Smalltalk, C++, Ada95, Java, C#

- data structures and their operations are bundled together
- inheritance

### Quantum

Such as: QCL, Q, Q#, qGCL

- performs operations on data using quantum bits (“qubits”)
- utilizes quantum properties such as superposition and entanglement

## BNF (Backus-Naur Form)

Does not add expressiveness to the language—for convenience only.

- alernation: `<Symb> ::= <Letter> | <Digit>`
- sequencing: `<Id> ::= <Letter> <Symb>`

## EBNF (Extended Backus-Naur Form)

Encompasses everything BNF has, plus:

- repetition:
- - zero or more: `{<Symb>}` or `<Symb>*`
- - one or more: `<Digit>+`
- option: `[<Digit>]`
- grouping: `('+'|'-')`

## The Chomsky hierarchy

### Regular grammars (Type 3)

- all productions can be written in the form: N ::= TN
- one non-terminal on left side; at most one on right
- generally used for scanners

### Context-free grammars (Type 2)

- all productions can be written in the form:N ::= XYZ
- one non-terminal on the left-hand side; mixture on right
- most major programming languages

### Context-sensitive grammars (Type 1):

- number of symbols on the left is no greater than on the right
- no production shrinks the size of the sentential form
- used for parts of C++, but otherwise rarely used

### Type-0 grammars

no restrictions

## Regular expressions

> **Regular grammars** can be used to generate regular languages.<br>**Regular expressions** can be used to accept regular languages.

- `ε` denotes `∅`
- a character `x`, where `x ∈ Σ`, denotes `{x}`
- sequencing: a sequence of two regular expressions `RS` denotes
  `{αβ | α ∈ [R], β ∈ [S]}`
- alternation: `R|S` denotes `[R] ∪ [S]`
- Kleene star: `R*` denotes the set of strings which are concatenations of
  zero or more strings from `[R]`
- grouping: parentheses `(A|B)`

**Shorthands**

```
R? ≡ ε|R
R+ ≡ RR*
```

**Conventions**

```
. ≡ any α ∈ Σ (“any character”)

[abc] ≡ (a|b|c)
[^abc] ≡ Σ \ {a, b, c}
[0-9] ≡ (0|1|2|3|4|5|6|7|8|9)
a-z and A-Z
```

## Parse tree

A parse tree describes the grammatical structure of a sentence
