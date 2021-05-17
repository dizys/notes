# Data Types

> Lecture slide: [click here](https://www.kdocs.cn/p/106175368491)

Typing: strong vs. weak, static vs. dynamic. Type declarations, type equivalence, type inference. Subtypes and derived types. Scalar and composite types (arrays, records, variant records). Pointers and references.
<br>
Readings: Scott, ch. 7

[[toc]]

## Static vs dynamic type system

A language can have a mixture of both, like C#, Visual Basic, Alore. Java has a mostly static type system with some runtime checks.

### Static typing

Languages like Ada, C++, Java, ML.

- Variables have types.
- Compilers ensures (at **compile time**) that type rules are obeyed.

### Dynamic typing

Languages like JavaScript, PHP, Lisp, Ruby.

- Variables do not have types, values do.
- Compilers ensures (at **run time**) that type rules are obeyed.

### Pros and cons

- Static is faster. Dynamic typing requires run-time checks.
- Dynamic is more flexible.
- Static is easier to refactor code.

## Strong vs weak typing

A **strongly typed** language does not allow variables to be used in a way inconsistent with their types (no loopholes).
<br>
A **weakly typed** language allows many ways to bypass the type system (e.g., pointer arithmetic).

There's no fine line between them. Most languages are neither strictly strongly or weakly typed. Usually a mixture with a bias toward one or the other.

## Pointers and references

Both refer to an object in memory.

**Pointers** tend to make this notion more explicit:

- Dereferencing.
- Pointer arithmetic (raises issues of allocation, alignment).
- Low level operations often supported (e.g. `memcpy`).

**References** tend to behave more like ordinary variables:

- Dereferencing still occurs, just under the hood.
- No notion of pointer arithmetic.
- Restrictions on reference variable bindings (C++).

## Records

A record consists of a set of typed fields.

### Name equivalence or structural equivalence

**Name equivalence**: two types are the same if they have the same name. (e.g. Ada)
<br>
**Structural equivalence**: two types are equivalent if they have the same structure. (e.g. ML)

Most statically typed languages choose name equivalence. ML and Haskell are exceptions.

### Variant records / discriminated union

A **variant record** is a record that provides multiple alternative sets of ﬁelds,
only one of which is valid at any given time. Also known as a **discriminated union**.

## Polymorphisms

### Subclass polymorphism

The ability to treat a class as one of its superclasses, which is the basis of OOP.

### Subtype polymorphism

The ability to treat a value of a subtype as a value of a supertype. Related to subclass polymorphism.

### Parametric polymorphism

The ability to treat any type uniformly. Found in ML, Haskell, and, in a very different form, in C++ templates and Java generics.

### Ad hoc polymorphism

Multiple definitions of a function with the same name, each for a different set of argument types (known as _overloading_).

## Subtyping

A relation between types. Similar to but not the same as subclassing.

Can be used in two different ways: **subtype polymorphism** and **coercion**.

Examples:

1. `{a, b, c}` is a subtype of `{a, c}`.
2. `a|c` is a subtype of `a|b|c`.
3. Range `1..100` is a subtype of `1..500`.

### Subtype/Supertype conversions

**Typecasting** is an _explicit_ conversion of one type to another. Source type is known or can be inferred, destination type must be specified by the programmer.

Two variations:

- **Type widening (lifting)**: converting subtype to supertype (coercion can also be used).
- **Type narrowing**: converting supertype to subtype. Involves information loss.

### Subtype polymorphism vs coercion

**Subtype polymorphism**: ability to _treat_ a value of a subtype as a value of a supertype.
<br>
**Coercion**: ability to _convert_ a value of a subtype to a value of a supertype.
