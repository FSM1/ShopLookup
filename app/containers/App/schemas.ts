import { schema } from 'normalizr';

const shop = new schema.Entity('shops');

const mall = new schema.Entity('malls', {
  shops: [shop]
});

export const city = new schema.Entity('cities', {
  malls: [mall]
})

export const citiesSchema = { cities: [city] };