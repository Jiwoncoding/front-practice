export default {
  name: 'name',
  title: 'role',
  type: 'string',
  fields: [
  { 
  name: 'name',
  title: 'role',
  type: 'string',
  validation: Rule => Rule.required(),
  },
  // role 추가
  {
  name: 'role',
  title: 'role',
  type: 'string',
  },
  {
  name: 'image',
  title: 'role',
  type: 'string',
  options: 'string',
  validation: Rule => Rule.required(),
  }
]
}