Developed as part of Google Summer of Code 2026 with the LibreCube Initiative.

# Zed PLUTO Language Extension

A fully-featured language support extension for the [Zed editor](https://zed.dev) for **PLUTO** — a domain-specific language used to write test and operation procedures for space systems.

---

## What is PLUTO?

PLUTO (Procedure Language for Users and Test Operations) is a domain-specific language used by space engineers to write human-readable, machine-parsable procedures for operating and testing spacecraft systems. This extension brings complete language support for PLUTO inside the modern Zed editor using Tree-sitter.

---

## Features

- Syntax highlighting for all PLUTO keywords
- Tree-sitter based parsing and AST generation
- Bracket matching for PLUTO keyword pairs (PROCEDURE/END, IF/END, STRUCTS/END, OPERATOR/END)
- Auto-indentation for all PLUTO procedure blocks
- Comment support (# style)
- String literal highlighting
- Operator highlighting (>, <, =, >=, <=, !=)
- Complete PLUTO keyword set coverage

---

## Supported PLUTO Keywords

| Keyword | Description |
|---|---|
| PROCEDURE | Defines a named procedure block |
| IF / THEN / ELSE / END | Conditional execution |
| CON | Condition block execution |
| CONT | Continue statement — signals end of CON block |
| LOG | Log a message during procedure execution |
| STRUCTS | Define a data structure |
| OPERATOR | Define a custom operator |

---

## Architecture

This extension is built using ZED's native extension system with Tree-sitter for parsing. Every file has a specific role in the pipeline from raw PLUTO code to highlighted, structured editor output.
zed-pluto/
├── extension.toml              <- ZED extension manifest — registers the extension
└── languages/
└── pluto/
├── config.toml         <- Language config — file extensions, comment style
├── grammar.js          <- Tree-sitter grammar — defines PLUTO syntax rules
├── brackets.scm        <- Bracket matching — PROCEDURE/END, IF/END pairs
├── indents.scm         <- Auto-indentation — indent after PROCEDURE, THEN
├── queries/
│   └── highlights.scm  <- Syntax highlighting — maps AST nodes to colours
└── src/
├── parser.c        <- Auto-generated Tree-sitter parser in C
└── grammar.json    <- Auto-generated grammar JSON

---

## How It Works

### Step 1 — Tree-sitter Grammar (grammar.js)

The grammar defines the complete syntax rules for PLUTO. Tree-sitter reads grammar.js and generates a C parser that converts any .pluto file into an Abstract Syntax Tree (AST).

For example this PLUTO code:
PROCEDURE check_temperature
IF temperature > 50 THEN
shutdown()
END
END

Gets parsed into this AST:
source_file
└── procedure_definition
├── identifier: check_temperature
└── if_statement
├── condition
│   ├── identifier: temperature
│   ├── operator: >
│   └── number: 50
└── command
└── identifier: shutdown

### Step 2 — Syntax Highlighting (highlights.scm)

Tree-sitter queries match nodes in the AST and assign highlight categories. ZED themes then apply colours to each category automatically.
"PROCEDURE" @keyword
"IF"        @keyword
(comment)   @comment
(string)    @string
(number)    @number
(operator)  @operator

### Step 3 — Bracket Matching (brackets.scm)

Defines which keyword pairs highlight together when your cursor is nearby. When you click PROCEDURE, the matching END highlights instantly.
("PROCEDURE" @open "END" @close)
("IF"        @open "END" @close)
("STRUCTS"   @open "END" @close)
("OPERATOR"  @open "END" @close)

### Step 4 — Auto-indentation (indents.scm)

Defines when ZED increases or decreases indentation automatically. Press Enter after PROCEDURE or THEN and the next line indents correctly.
(procedure_definition "PROCEDURE" @indent)
(if_statement         "THEN"      @indent)
(if_statement         "ELSE"      @indent)
(procedure_definition "END"       @dedent)
(cont_statement       "CONT"      @dedent)

---

## Example PLUTO File
Define data structures
STRUCTS telemetry
temperature
pressure
signal
END
Define a custom operator
OPERATOR check_vitals
temperature > 0
pressure > 0
signal > 0
END
Main procedure
PROCEDURE check_temperature
IF temperature > 50 THEN
shutdown()
LOG "temperature exceeded threshold"
ELSE
LOG "temperature normal"
END
END
Pressure monitoring
PROCEDURE monitor_pressure
CON pressure > 100
release_valve()
LOG "pressure released"
CONT
LOG "pressure check complete"
END

---

## Setup Instructions

**1. Clone the repository**
git clone https://github.com/SubX10/zed-pluto.git
cd zed-pluto

**2. Generate the Tree-sitter parser**
cd languages/pluto
tree-sitter generate

**3. Open in Zed**
open -a Zed ~/Desktop/zed-pluto

**4. Install the extension**

Open the Extensions panel in Zed, find the local extension, and click Install. Open any .pluto file to see full syntax highlighting, bracket matching, and auto-indentation working.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Tree-sitter | Parser generator for PLUTO grammar |
| Zed Extension System | Language extension integration |
| JavaScript | Grammar definition |
| Tree-sitter Query Language | Highlighting, brackets, indentation |

---

## Related Resources

- [LibreCube Initiative](https://librecube.org)
- [PLUTO VSCodium Plugin](https://gitlab.com/librecube/tools/vscodium-pluto-syntax)
- [ZED Editor](https://zed.dev)
- [Tree-sitter Documentation](https://tree-sitter.github.io/tree-sitter)
- [Google Summer of Code 2026](https://summerofcode.withgoogle.com)

---

## Author

Subrat Mishra
