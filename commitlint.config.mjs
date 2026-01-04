export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nouvelle fonctionnalité
        'fix',      // Correction de bug
        'docs',     // Documentation uniquement
        'style',    // Formatage (pas de changement de code)
        'refactor', // Refactorisation (ni feat ni fix)
        'perf',     // Amélioration de performance
        'test',     // Ajout/modification de tests
        'chore',    // Maintenance (dépendances, config)
        'ci',       // Changements CI/CD
        'revert',   // Revert d'un commit précédent
      ],
    ],
    'subject-case': [0], // Désactive la règle de casse (permet toute casse)
  },
};
