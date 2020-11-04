let myName: string = 'Boyd Graves';
let careerField: string = 'Full Stack Developer';
let description: string =
  'Just trying to build some skills and learn new things.';
let interests: Array<string>;
interests = [
  'Cooking',

  'Reading',

  'Woodworking',

  'Video Games',

  'listening to and Discovering New Music',

  'Dogs',

  'Plants',
];
console.log('Name: ' + myName.toUpperCase());
console.log('Career: ' + careerField);
console.log('Description: ' + description);
console.log('');
console.log('My Interests:');
/*print each item in interests list on seperate line*/
let i = 0;
while (i < interests.length) {
  console.log('* ' + interests[i]);
  i++;
}
console.log('');
/*print experience*/
console.log('My Previous Experience:');
displayPosition(
  'Kay Logistics Group',
  'Sales',
  'Managed Accounts for industrial customers across the US'
);
displayPosition('Cahaba Brewing Company', 'Bartender', 'Tended bar');
displayPosition('Moe"s BBQ', 'Bartender', 'Tended bar');
console.log('');

/*print skills*/
console.log('My Skills:');
displaySkill('Fast typing', false);
displaySkill('Mechanically Inclined', false);
displaySkill('Expert Googling', false);

function displayPosition(
  companyName: string,
  jobTitle: string,
  description: string
): void {
  console.log('* ' + jobTitle + ' at ' + companyName + ' - ' + description);
}
function displaySkill(skillName: string, cool: boolean): void {
  if (cool) {
    console.log('* BAM: ' + skillName);
  } else {
    console.log('* ' + skillName);
  }
}
