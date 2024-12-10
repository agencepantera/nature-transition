export type CategoryId = 'energie' | 'biodiversite' | 'developpement-durable' | 'agriculture' | 'transport' | 'dechets';

export const categoryColors: Record<CategoryId, string> = {
  'energie': 'bg-amber-100 text-amber-800',
  'biodiversite': 'bg-emerald-100 text-emerald-800',
  'developpement-durable': 'bg-green-100 text-green-800',
  'agriculture': 'bg-lime-100 text-lime-800',
  'transport': 'bg-sky-100 text-sky-800',
  'dechets': 'bg-orange-100 text-orange-800'
};

export const categoryNames: Record<CategoryId, string> = {
  'energie': 'Énergie',
  'biodiversite': 'Biodiversité',
  'developpement-durable': 'Développement Durable',
  'agriculture': 'Agriculture',
  'transport': 'Transport',
  'dechets': 'Déchets'
};
