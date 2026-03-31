# Zed PLUTO Language Extension (Prototype)

## Overview

This project is an initial prototype of a language support extension for the Zed editor, designed for the PLUTO domain-specific language (DSL) used in space system procedures.

The goal of this project is to enable syntax highlighting, parsing, and developer-friendly tooling for PLUTO within Zed using Tree-sitter.

---

## Current Status

🚧 Early Prototype

This implementation establishes the foundational pipeline:

* Tree-sitter grammar setup
* Basic language integration with Zed
* Initial syntax highlighting support

The project is still in its early stages and will be expanded further.

---

## Features (Current)

* Tree-sitter based parsing setup
* Zed editor extension integration
* Basic syntax highlighting (keywords like IF, THEN, END)

---

## Tech Stack

* Tree-sitter (parsing)
* Zed Editor Extension System
* JavaScript (grammar definition)

---

## Project Structure

```
zed-pluto/
├── extension.toml
├── languages/
│   └── pluto/
│       ├── grammar.js
│       ├── config.toml
│       ├── queries/
│       │   └── highlights.scm
│       └── src/
```

---

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/SubX10/zed-pluto.git
   ```

2. Navigate to the project:

   ```
   cd zed-pluto
   ```

3. Generate Tree-sitter parser:

   ```
   cd languages/pluto
   tree-sitter generate
   ```

4. Open in Zed:

   ```
   open -a Zed ~/Desktop/zed-pluto
   ```

5. Rebuild the extension from the Extensions panel in Zed.

---

## Example (Prototype Highlighting)

```
IF condition THEN
  action()
END
```

---

## Future Work

* Complete PLUTO grammar definition
* Support for functions, loops, and advanced constructs
* Improved syntax highlighting aligned with grammar
* Code formatting and linting support
* Better integration with Zed editor features

---

## Motivation

PLUTO is a domain-specific language used in space system operations. Providing modern editor support improves developer productivity and reduces errors in mission-critical procedures.

---

## Contribution

This project is currently under active development. Contributions and suggestions are welcome.

---

## Author

Subrat Mishra

---

## Repository

https://github.com/SubX10/zed-pluto
