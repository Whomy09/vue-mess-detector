import inquirer from 'inquirer';
import fs from 'fs/promises';

const questions = [
  {
    type: 'list',
    name: 'ruleset',
    message: 'What ruleset this rule will belongs to?',
    choices: ['vue-essential', 'vue-strong', 'vue-recommended', 'vue-caution', 'rrd'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new rule? (use camelCase name)',
  }
];

const createFiles = async (answers) => {
  const filePath = `./src/rules/${answers.ruleset}/${answers.name}.ts`;
  let fileContent = await fs.readFile('./src/generator/ruleSkeleton.txt', 'utf8');
 fileContent = fileContent.replace(/_RULENAME_/g, answers.name.charAt(0).toUpperCase()+ answers.name.slice(1));
  

  await fs.writeFile(filePath, fileContent, 'utf8');
  console.log(`File ${filePath} generated!`);

  const testPath = `./src/rules/${answers.ruleset}/${answers.name}.test.ts`;
  const testContent = `// This is a ${answers.template} template`;
  await fs.writeFile(testPath, testContent, 'utf8');
  console.log(`Test ${testPath} generated!`);
};

inquirer.prompt(questions)
  .then(createFiles)
  .catch(error => {
    console.error(error);
  });