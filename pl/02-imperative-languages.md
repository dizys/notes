# Imperative Languages

> Lecture slide: [click here](https://www.kdocs.cn/p/105166936239)

Names, binding, scope, lifetime, nesting, control structures.
<br>
Readings: Scott, ch 3

## Names

Mutable variables, values, functions, types, type constructors, classes, modules/packages, execution points (labels), execution points with environment (continuation).

## Bindings

A binding is an association of two things. The first is usually a name.

**Binding time** is the time at which the association is made. It can be at: language design time (semantics of most language constructs), language implementation time (implementation dependent semantics), compile time, link time or run time.

**Static binding** means before run time, **dynamic binding** means during run time. For example, virtual methods in C++ are dynamically bound.

## Scope and lifetime

**Scope** is the region of program text where a binding is active, thus a <span style="color:green">space</span>.
<br>
**Lifetime** is the period of time between the creation of an entity and its destruction, thus a time <span style="color:green">span</span>.

### Lifetimes

Three different objects in memory:

- **static** objects: lifetime of entire program execution. e.g., global and static variables.
- **stack** objects: from the time the function or block is entered until the time it is exited. e.g., local variables.
- **heap** objects: arbitrary lifetimes. e.g., dynamically allocated objects like those created using `new`.

### Scoping

Two major scoping disciplines:

- **static scoping**: binding of a name is given by its declaration in the innermost enclosing block.
- **dynamic scoping**: binding of a name is given by the most recent declaration encountered at runtime.

### Memory allocation

- **Static**: allocated once at compile time (usually in protected memory). Usually include: Strings, constants, static variables.
- **Stacks**: allocated in frames on a first-in last-out basis. Frames usually store: actual parameters, temporaries, local variables, bookkeeping information and return address.
- **Heap**: allocated from main memory according to an allocation policy like first-fit, best-fit, etc.

## Control flows

Basic topics are in the slides.

### Serial copy

Copy a chuck of memory from one place to another. A trivial inefficient implementation in C:

```c
void send(int *to, int *from, int count){
  do { /* precondition: count > 0 */
    *to++ = *from++;
  } while (--count > 0);
}
```

Solution (unstructured flow, Duff’s device):

> Lecture recording at `1:35:00`

```c
void send(int *to ,int * from, int count){
  register n = (count + 7) / 8;
  switch (count % 8) {
    case 0: do { *to++ = *from++;
    case 7: *to++ = *from++;
    case 6: *to++ = *from++;
    case 5: *to++ = *from++;
    case 4: *to++ = *from++;
    case 3: *to++ = *from++;
    case 2: *to++ = *from++;
    case 1: *to++ = *from++;
               } while (--n > 0);
  }
}
```

Why `8`? Because that was the size of the cache back then. Being bigger than that would cause cache overflow thus cache miss.
