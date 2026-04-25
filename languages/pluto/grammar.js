module.exports = grammar({
  name: "pluto",

  extras: ($) => [
    /\s/,
    $.comment,
  ],

  rules: {
    source_file: ($) => repeat($._top_level),

    _top_level: ($) => choice(
      $.procedure_definition,
      $.structs_definition,
      $.operator_definition,
      $._statement,
    ),

    procedure_definition: ($) => seq(
      "PROCEDURE",
      $.identifier,
      repeat($._statement),
      "END"
    ),

    structs_definition: ($) => seq(
      "STRUCTS",
      $.identifier,
      repeat($.identifier),
      "END"
    ),

    operator_definition: ($) => seq(
      "OPERATOR",
      $.identifier,
      repeat($.condition),
      "END"
    ),

    _statement: ($) => choice(
      $.if_statement,
      $.con_statement,
      $.log_statement,
      $.cont_statement,
      $.command,
    ),

    if_statement: ($) => seq(
      "IF",
      $.condition,
      "THEN",
      repeat($._statement),
      optional(seq(
        "ELSE",
        repeat($._statement),
      )),
      "END"
    ),

    con_statement: ($) => seq(
      "CON",
      $.condition,
      repeat($._statement),
    ),

    cont_statement: ($) => "CONT",

    log_statement: ($) => seq(
      "LOG",
      $.string,
    ),

    condition: ($) => seq(
      $.identifier,
      $.operator,
      $.number,
    ),

    operator: ($) => choice(">", "<", "=", ">=", "<=", "!="),

    command: ($) => seq(
      $.identifier,
      "(",
      ")"
    ),

    comment: ($) => token(seq("#", /.*/)),

    string: ($) => seq(
      '"',
      /[^"]*/,
      '"'
    ),

    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    number: ($) => /\d+(\.\d+)?/,
  },
});
