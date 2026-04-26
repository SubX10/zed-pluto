; Increase indent after these keywords
(procedure_definition "PROCEDURE" @indent)
(if_statement "THEN" @indent)
(if_statement "ELSE" @indent)
(con_statement "CON" @indent)
(structs_definition "STRUCTS" @indent)
(operator_definition "OPERATOR" @indent)

; Decrease indent before END
(procedure_definition "END" @dedent)
(if_statement "END" @dedent)
(structs_definition "END" @dedent)
(operator_definition "END" @dedent)

; CONT dedents like END
(cont_statement "CONT" @dedent)
