import { schema } from 'normalizr';

const shop = new schema.Entity('shops', {}, {
  processStrategy: (value, parent) => {
    return {
      ...value, 
      mall: parent.id,
      city: parent.city
    }
  }
});

const mall = new schema.Entity('malls', {
  shops: [shop]
}, {
  processStrategy: (value, parent) => {
    return {...value, city: parent.id}
  }
});

const city = new schema.Entity('cities', {
  malls: [mall]
})

export const citiesSchema = { cities: [city] };