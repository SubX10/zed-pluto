module.exports = grammar({
  name: "pluto",

  rules: {
    source_file: ($) => repeat($._statement),

    _statement: ($) => choice($.if_statement, $.command),

    if_statement: ($) =>
      seq("IF", $.condition, "THEN", repeat($._statement), "END"),

    condition: ($) => seq($.identifier, ">", $.number),

    command: ($) => seq($.identifier, "(", ")"),

    identifier: ($) => /[a-zA-Z_]+/,
    number: ($) => /\d+/,
  },
});
