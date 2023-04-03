export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'points',
      type: 'number',
      title: 'Points',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
    },
    {
      name: 'contactNumber',
      type: 'string',
      title: 'Contact Number',
    },
    {
      name: 'accountType',
      type: 'string',
      title: 'Account Type',
    },
    {
      name: 'carPlate',
      type: 'string',
      title: 'Car Plate',
    },
    {
      name: 'carModel',
      type: 'string',
      title: 'Car Model',
    },
  ],
}
