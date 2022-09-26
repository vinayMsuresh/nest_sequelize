import Person from './person.model';

export const PersonProvider = [
  {
    provide: 'PERSON_REPOSITORY',
    useValue: Person,
  },
];
