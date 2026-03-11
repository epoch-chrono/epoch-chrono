// commitlint.config.mjs
// Valida mensagens de commit contra Conventional Commits
// Usado pelo hook commitizen do pre-commit e pelo @commitlint/cli
// Ref: https://commitlint.js.org

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Tipos permitidos no projeto
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova funcionalidade
        'fix',      // correção de bug
        'content',  // novo post, TIL, atualização de conteúdo
        'chore',    // tarefas de manutenção, deps
        'docs',     // documentação (.mind/, README)
        'style',    // formatação, CSS, design
        'refactor', // refatoração sem mudança de comportamento
        'perf',     // performance
        'ci',       // GitHub Actions, deploy config
        'revert',   // reverter commit anterior
      ],
    ],
    // Subject sem letra maiúscula obrigatória (flexível para pt-BR)
    'subject-case': [0],
  },
};
