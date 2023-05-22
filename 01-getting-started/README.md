# Get started!

TypeScript is a language that compiles to JavaScript. It is executed by JavaScript runtimes like browsers or server environments such as Node.js. To effectively use TypeScript, you'll need a TypeScript-compatible IDE (e.g., Atom, VSCode, Sublime Text) and a build pipeline for compilation (e.g., using the TypeScript compiler).

To start a TypeScript project, you'll create a `tsconfig.json` file, which manages project configuration. Initially, this file can be empty, and all TypeScript files in the directory will be included in the compilation process.

TypeScript's main goals are to provide a structural type system for JavaScript and support current and future ECMAScript standards.

# Why use Typescript?

dding types to your code enhances its understandability and improves overall code quality. Types help catch errors during compilation rather than at runtime, making refactoring easier. Additionally, types serve as documentation by clearly defining expected interfaces outside of the code implementation.

Unlike some other type systems, TypeScript aims to minimize barriers to adoption. It achieves this through various means:

1. JavaScript is TypeScript: You can rename a `.js` file to `.ts`, and it will work seamlessly since TypeScript is a superset of JavaScript.

2. Types can be implicit: TypeScript infers type information from variable initialization whenever possible.

3. Types can be explicit: You can explicitly specify the type of a variable upon initialization using a postfix annotation syntax (e.g., var x: number).

4. Types are structural: TypeScript's type system is designed to be compatible with JavaScript practices, reducing unnecessary verbosity when introducing types.

5. Type errors don't block JavaScript emission: When migrating to TypeScript, encountering type errors doesn't prevent JavaScript code from being emitted.

6. Ambient types: TypeScript facilitates working with existing JavaScript code through declaration files (.d.ts), which separate JavaScript and TypeScript type definitions.

7. TypeScript also supports upcoming JavaScript features (ES6, ES7) that may not be widely supported by JavaScript engines yet, allowing you to use future JavaScript features today.

One of the significant advantages of TypeScript is the ability to write declaration files (.d.ts). These files, emitted alongside JavaScript files, allow for the separation of JavaScript code and TypeScript type information. This enables type-safe consumption of existing JavaScript code and allows TypeScript code to be published as JavaScript, with an optional type system for other TypeScript developers to use safely.

## Future JavaScript Today

TypeScript supports a number of upcoming JavaScript features (ES6, ES7) that some JavaScript engines are only just starting to support. For example, `class`, `const` and `=>`.