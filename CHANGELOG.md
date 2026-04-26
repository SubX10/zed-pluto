# Changelog

All notable changes to the Zed PLUTO Language Extension are documented here.

---

## [0.0.3] - 2026-04-26

### Added
- brackets.scm with keyword pair matching for PROCEDURE/END, IF/END, STRUCTS/END, OPERATOR/END
- indents.scm with auto-indentation support for all PLUTO procedure blocks
- STRUCTS keyword support in grammar and highlights
- OPERATOR keyword support in grammar and highlights
- Updated README with complete technical documentation

---

## [0.0.2] - 2026-04-23

### Added
- CON statement support — condition block execution
- CONT statement support — continue keyword
- Extended test.pluto with pressure monitoring procedure
- Follow up communication with LibreCube mentor

---

## [0.0.1] - 2026-03-31

### Added
- Initial prototype submitted for GSoC 2026
- Tree-sitter grammar setup with basic PLUTO syntax
- PROCEDURE, IF, THEN, ELSE, END keyword support
- LOG statement with string literal support
- Comment support using # character
- Six comparison operators (>, <, =, >=, <=, !=)
- Basic syntax highlighting via highlights.scm
- extension.toml and config.toml for ZED integration
- Initial test.pluto file

---

## Upcoming

- Full PLUTO language specification coverage
- Code formatting support
- Linting and validation features
- ZED extension registry publication
