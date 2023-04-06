import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('websites').del();

  await knex('websites').insert([
    {
      id: 1,
      url: 'http://localhost/',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: '2023-04-05',
    },
  ]);
}
